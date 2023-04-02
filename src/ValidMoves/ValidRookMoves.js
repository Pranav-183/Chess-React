import { squareNumToGrid } from "../Functions/Extras"
import TestLine from "../TestLine/TestLine"

const validRookMoves = (oldSquareNum, board, isWhite) => {
   const validMoves = []

   const { col, row } = squareNumToGrid(oldSquareNum)

   TestLine(col, row, board, isWhite, 1, 0, 1, 0).forEach(coord => validMoves.push(coord))
   TestLine(col, row, board, isWhite, -1, 0, -1, 0).forEach(coord => validMoves.push(coord))
   TestLine(col, row, board, isWhite, 0, 1, 0, 1).forEach(coord => validMoves.push(coord))
   TestLine(col, row, board, isWhite, 0, -1, 0, -1).forEach(coord => validMoves.push(coord))

   return validMoves
}
 
export default validRookMoves