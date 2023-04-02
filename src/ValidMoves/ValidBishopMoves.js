import { squareNumToGrid } from "../Functions/Extras"
import TestLine from "../TestLine/TestLine"

const validBishopMoves = (oldSquareNum, board, isWhite) => {
   const validMoves = []

   const { col, row } = squareNumToGrid(oldSquareNum)

   TestLine(col, row, board, isWhite, 1, -1, 1, -1).forEach(coord => validMoves.push(coord))
   TestLine(col, row, board, isWhite, -1, -1, -1, -1).forEach(coord => validMoves.push(coord))
   TestLine(col, row, board, isWhite, 1, 1, 1, 1).forEach(coord => validMoves.push(coord))
   TestLine(col, row, board, isWhite, -1, 1, -1, 1).forEach(coord => validMoves.push(coord))

   return validMoves
}

export default validBishopMoves