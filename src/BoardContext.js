import { createContext, useState } from "react";
import { squareNumToGrid } from "./Extras";
import StartingPosition from "./StartingPosition";

export const BoardContext = createContext()

const BoardContextProvider = ({ children }) => {
   const [board, setBoard] = useState(StartingPosition)

   const updateSquareNum = (currSquareNum, newSquareNum, movedTwoSquares) => {
      const newBoard = board
      const { col: currCol, row: currRow } = squareNumToGrid(currSquareNum)
      const { col: newCol, row: newRow } = squareNumToGrid(newSquareNum)

      const piece = newBoard[currRow][currCol].piece

      if (piece.includes('wp') || piece.includes('bp')) {
         newBoard[newRow][newCol].piece = piece
         newBoard[newRow][newCol].hasMoved = true
         newBoard[newRow][newCol].movedTwoSquares = movedTwoSquares

         newBoard[currRow][currCol].piece = ''
         delete newBoard[currRow][currCol].hasMoved
         delete newBoard[currRow][currCol].movedTwoSquares
      } else if (piece.includes('wb') || piece.includes('bb')) {
         newBoard[newRow][newCol].piece = piece
         
         newBoard[currRow][currCol].piece = ''
      }

      setBoard(newBoard)
   }

   const executeEnPassant = (enPassantedPiece) => {
      const newBoard = board

      const { col, row } = squareNumToGrid(enPassantedPiece)

      newBoard[row][col].piece = ''
      delete newBoard[row][col].hasMoved

      setBoard(newBoard)
   }

   return (
      <BoardContext.Provider value={{ board, updateSquareNum, executeEnPassant }}>
         {children}
      </BoardContext.Provider>
   )
}

export default BoardContextProvider