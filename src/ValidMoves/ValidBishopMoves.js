import { squareNumToGrid } from "../Extras"

const testDiagonal = (col, row, board, isWhite, colAddtition, rowAddition, colUpdation, rowUpdation) => {
   const validMoves = []
   let testCol = col + colAddtition, testRow = row + rowAddition

   while ((colUpdation === 1 ? testCol <= 7 : testCol >= 0) && (rowUpdation === 1 ? testRow <= 7 : testRow >= 0) && (isWhite ? board[testRow][testCol].piece[0] !== 'w' : board[testRow][testCol].piece[0] !== 'b')) {
      if (isWhite ? board[testRow][testCol].piece[0] === 'b' : board[testRow][testCol].piece[0] === 'w') {
         validMoves.push(board[testRow][testCol].coord)
         break
      }

      validMoves.push(board[testRow][testCol].coord)

      testCol += colUpdation
      testRow += rowUpdation
   }

   return validMoves
}

export const validBishopMoves = (oldSquareNum, board, isWhite) => {
   const validMoves = []

   const { col, row } = squareNumToGrid(oldSquareNum)

   testDiagonal(col, row, board, isWhite, 1, -1, 1, -1).forEach(coord => validMoves.push(coord))
   testDiagonal(col, row, board, isWhite, -1, -1, -1, -1).forEach(coord => validMoves.push(coord))
   testDiagonal(col, row, board, isWhite, 1, 1, 1, 1).forEach(coord => validMoves.push(coord))
   testDiagonal(col, row, board, isWhite, -1, 1, -1, 1).forEach(coord => validMoves.push(coord))

   return validMoves
}