import React from "react";

const MemesContext = React.createContext({
  memesDataState: [],
  setMemesDataState: () => {},
})

export default MemesContext;