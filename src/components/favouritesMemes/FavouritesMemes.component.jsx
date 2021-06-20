import { useContext, useMemo } from "react";
import MemesContext from "../../context/Memes.context";
import MemList from "../MemList/MemList.component";

const FavouritesMemes = () => {
  const { memesDataState } = useContext(MemesContext);

  const favouritesMemesData = useMemo(() => (
    memesDataState.filter(mem => mem.isFavourite)
  ), [ memesDataState ]);

  return <MemList memesData={favouritesMemesData} />
};

export default FavouritesMemes;