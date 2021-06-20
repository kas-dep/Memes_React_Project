import { useContext, useMemo } from "react";
import MemesContext from "../../context/Memes.context";
import MemList from "../MemList/MemList.component";

const HotMemes = () => {
  const { memesDataState } = useContext(MemesContext);
  const hotMemesData = useMemo(() => 
      memesDataState.filter((mem) => mem.upvotes - mem.downvotes > 5
    ),[memesDataState]);

  return <MemList memesData={hotMemesData} />;
};

export default HotMemes;
