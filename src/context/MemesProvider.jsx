import { useMemo, useState } from "react"
import { memesData } from "../memes-data"
import MemesContext from "./Memes.context"

const MemesContextProvider = ({children}) => {
  const [memesDataState, setMemesDataState] = useState(memesData);
  const contextData = useMemo(() => ({
    memesDataState,
    setMemesDataState,
  }), [ memesDataState ]);

  return (
    <>
      <MemesContext.Provider value={contextData}>
        {children}
      </MemesContext.Provider>
    </>
  )
}

export default MemesContextProvider;