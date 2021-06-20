import { useContext, useMemo } from "react";
import MemesContext from "../../context/Memes.context";
import MemList from "../MemList/MemList.component";

const RegularMemes = () => {
  const { memesDataState } = useContext(MemesContext);

  const regularMemesData = useMemo(() => (
    memesDataState.filter(mem => mem.upvotes - mem.downvotes <= 5)
  ), [ memesDataState ]);

  return <MemList memesData={regularMemesData} />
}

export default RegularMemes;