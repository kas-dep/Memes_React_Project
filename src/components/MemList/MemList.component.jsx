import { useCallback, useContext } from "react";
import MemesContext from "../../context/Memes.context";
import Mem from "../Mem/Mem.component";
import { NoMemesInfo } from "../NoMemesInfo/NoMemesInfo.component";
import styles from "./MemesListStyles.module.css";

const MemList = ({ memesData }) => {
  const { setMemesDataState } = useContext(MemesContext);

  const handleMemChange = useCallback((mem) => {
      setMemesDataState((prevState) =>
        prevState.map((prevMem) => (prevMem.id === mem.id ? mem : prevMem))
      );
    },[setMemesDataState]);

  return (
    <div className={styles.list}>
      {memesData.length ? (
        memesData.map((mem) => (
          <Mem key={mem.id} mem={mem} onMemChange={handleMemChange} />
        ))
      ) : (
        <NoMemesInfo />
      )}
    </div>
  );
};

export default MemList;
