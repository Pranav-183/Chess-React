import { createContext, useState } from "react";
import { isMajorPiece, squareNumToGrid } from "../Functions/Extras";
import StartingPosition from "../Template/StartingPosition";

export const BoardContext = createContext()

const BoardContextProvider = ({ children }) => {
   const [board, setBoard] = useState(StartingPosition)

   const opponentKingCoord = (isWhite) => {
      let kingCoord
      board.forEach(row => {
         row.forEach(col => {
            if (isWhite ? col.piece === 'bk' : col.piece === 'wk') {
               kingCoord = col.coord
            }
         })
      })

      return kingCoord
   }

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
      } else if (isMajorPiece(piece)) {
         newBoard[newRow][newCol].piece = piece
         if (piece.includes('wr') || piece.includes('br')) {
            newBoard[newRow][newCol].hasMoved = true
         }

         newBoard[currRow][currCol].piece = ''
         if (piece.includes('wr') || piece.includes('br')) {
            delete newBoard[currRow][currCol].hasMoved
         }
      } else if (piece === 'wk' || piece === 'bk') {
         newBoard[newRow][newCol].piece = piece
         newBoard[newRow][newCol].hasMoved = true

         newBoard[currRow][currCol].piece = ''
         delete newBoard[currRow][currCol].hasMoved
      }

      setBoard(newBoard)
   }

   const executeEnPassant = enPassantedPiece => {
      const newBoard = board

      const { col, row } = squareNumToGrid(enPassantedPiece)

      newBoard[row][col].piece = ''
      delete newBoard[row][col].hasMoved

      setBoard(newBoard)
   }

   const executeCastle = (currRookSquareNum, rookNum) => {
      const newRookSquareNum = rookNum === 1 ? currRookSquareNum + 3 : currRookSquareNum - 2
      updateSquareNum(currRookSquareNum, newRookSquareNum)
   }

   return (
      <BoardContext.Provider value={{ board, updateSquareNum, executeEnPassant, executeCastle }}>
         {children}
      </BoardContext.Provider>
   )
}

export default BoardContextProvider