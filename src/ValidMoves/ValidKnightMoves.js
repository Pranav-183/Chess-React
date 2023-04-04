import { isWithinGridLimits, squareNumToGrid } from "../Functions/Extras"

const checkSquare = (board, isWhite, testCol, testRow) => {
   if (isWhite ? board[testRow][testCol].piece[0] !== 'w' : board[testRow][testCol].piece[0] !== 'b') {
      return board[testRow][testCol].coord
   }
}

const ValidKnightMoves = (oldSquareNum, board, isWhite) => {
   const validMoves = []

   const { row, col } = squareNumToGrid(oldSquareNum)

   const squaresToCheck = [
      { colUpdation: -2, rowUpdation: 1 },
      { colUpdation: -2, rowUpdation: -1 },
      { colUpdation: -1, rowUpdation: -2 },
      { colUpdation: 1, rowUpdation: -2 }, 
      { colUpdation: 2, rowUpdation: -1 }, 
      { colUpdation: 2, rowUpdation: 1 }, 
      { colUpdation: 1, rowUpdation: 2 }, 
      { colUpdation: -1, rowUpdation: 2 }
   ]

   squaresToCheck.forEach(({ colUpdation, rowUpdation }) => {
      let testCol = col + colUpdation, testRow = row + rowUpdation
      if (isWithinGridLimits(testCol) && isWithinGridLimits(testRow)) {
         const coord = checkSquare(board, isWhite, testCol, testRow)
         if (coord) {
            validMoves.push(coord)
         }
      }
   })

   return validMoves
}

export default ValidKnightMoves