import { NotContext } from "../contexts/NotContext";

import { useContext } from "react";

export const useNotContext = () => {
  const context=useContext(NotContext)

  if(!context) {
    throw new Error('useNotContext must be used within NotContextProvider')
  }
  return context
  }
