import { createContext, useState } from "react";
import { squareNumToGrid } from "./Extras";
import StartingPosition from "./StartingPosition";

export const BoardContext = createContext()

const BoardContextProvider = ({ children }) => {
   const [board, setBoard] = useState(StartingPosition)

   const updateSquareNum = (currSquareNum, newSquareNum) => {
      const newBoard = board
      const { col: currCol, row: currRow } = squareNumToGrid(currSquareNum)
      const { col: newCol, row: newRow } = squareNumToGrid(newSquareNum)

      const piece = newBoard[currRow][currCol].piece

      newBoard[newRow][newCol].piece = piece
      newBoard[newRow][newCol].hasMoved = true

      newBoard[currRow][currCol].piece = ''
      delete newBoard[currRow][currCol].hasMoved

      console.log(newBoard)

      setBoard(newBoard)
   }

   return (
      <BoardContext.Provider value={{ board, updateSquareNum }}>
         {children}
      </BoardContext.Provider>
   )
}

export default BoardContextProvider