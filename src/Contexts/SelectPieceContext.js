import { createContext, useState } from "react";

export const SelectPieceContext = createContext()

const SelectPieceContextProvider = ({ children }) => {
   const [selectedPiece, setSelectedPiece] = useState()

   return (
      <SelectPieceContext.Provider value={{ selectedPiece, setSelectedPiece }}>
         { children }
      </SelectPieceContext.Provider>
   )
}

export default SelectPieceContextProvider