import { useCallback, useContext, useState } from "react";
import { useFormik } from "formik";
import MemesContext from "../../context/Memes.context";
import { validationSchema } from "./formValidations";
import styles from "./AddMemeFormStyles.module.css";
import { faFileImage, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toast from "../Toast/Toast.component";

const AddMemeForm = () => {
  const { memesDataState, setMemesDataState } = useContext(MemesContext);
  const [imageSrc, setImageSrc] = useState("");
  const [isActiveToast, setIsActiveToast] = useState(false);

  const createMeme = useCallback(
    (title, img) => ({
      id: memesDataState.length + 1,
      title: title,
      upvotes: 0,
      downvotes: 0,
      img: img,
      isFavourite: false,
    }),
    [memesDataState]
  );

  const initialValues = {
    title: "",
    img: "",
  };

  const handleSubmit = useCallback(
    (values) => {
      const newMem = createMeme(values.title, imageSrc);
      setMemesDataState((prev) => {
        prev.push(newMem);
        return prev;
      });
      setIsActiveToast(true);
    },
    [setMemesDataState, imageSrc, createMeme, setIsActiveToast]
  );

  const formik = useFormik({
    initialValues: initialValues,
    validateOnChange: false,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  const handleFileChange = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      setImageSrc(event.target.result);
    };
    formik.handleChange(event);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2>Add meme</h2>
        <form className={styles.addMemeForm} onSubmit={formik.handleSubmit}>
          <div className={styles.formContent}>
            <div className={styles.inputs}>
              <label style={{ display: "none" }} htmlFor="title">
                {`Meme's title`}
              </label>
              <input
                placeholder="Meme's title"
                autoComplete="off"
                className={styles.textInput}
                id="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              {formik.errors.title ? (
                <p className={styles.errorMessage}>{formik.errors.title}</p>
              ) : null}

              <button className={styles.addBtn} type="button">
                <label style={{ cursor: "pointer" }} htmlFor="img">
                  Upload meme
                  <FontAwesomeIcon className={styles.icon} icon={faUpload} />
                  <input
                    style={{ display: "none" }}
                    type="file"
                    accept="image/*"
                    id="img"
                    onChange={handleFileChange}
                    value={formik.values.img}
                  />
                </label>
              </button>
              {formik.errors.img ? (
                <p className={styles.errorMessage}>{formik.errors.img}</p>
              ) : null}
            </div>
            {imageSrc ? (
              <img className={styles.formImg} src={imageSrc} alt="newMeme" />
            ) : (
              <div className={styles.placeForImg}>
                <FontAwesomeIcon className={styles.icon} icon={faFileImage} />
              </div>
            )}
          </div>
          <button className={styles.submitBtn} type="submit">
            Save
          </button>
        </form>
      </div>
      {isActiveToast && (
        <Toast
          hideToast={() => setIsActiveToast(false)}
          type="success"
          message="You added a meme"
        />
      )}
    </div>
  );
};

export default AddMemeForm;
