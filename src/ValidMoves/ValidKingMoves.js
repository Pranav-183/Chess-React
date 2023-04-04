import { isWithinGridLimits, squareNumToGrid } from "../Functions/Extras"

const checkSquare = (board, isWhite, testCol, testRow) => {
   if (isWhite ? board[testRow][testCol].piece[0] !== 'w' : board[testRow][testCol].piece[0] !== 'b') {
      return board[testRow][testCol].coord
   }
}

const checkCastle = (col, row, board, isWhite, rookNum) => {
   let rookSquareNum, rook
   const king = board[row][col]

   if (isWhite) {
      rookSquareNum = rookNum === 1 ? 57 : 64
   } else {
      rookSquareNum = rookNum === 1 ? 1 : 8
   }
   const { col: rookCol, row: rookRow } = squareNumToGrid(rookSquareNum)
   rook = board[rookRow][rookCol]

   if (rook.hasMoved === false && king.hasMoved === false) {
      if (rookNum === 1) {
         if (board[row][col - 1].piece === '' && board[row][col - 2].piece === '' && board[row][col - 3].piece === '') {
            return { kingCoord: isWhite ? 'c1' : 'c8', currRookSquareNum: rookSquareNum }
         }
      } else if (rookNum === 2) {
         if (board[row][col + 1].piece === '' && board[row][col + 2].piece === '') {
            return { kingCoord: isWhite ? 'g1' : 'f8', currRookSquareNum: rookSquareNum }
         }
      }
   }
}

const ValidKingMoves = (oldSquareNum, board, isWhite) => {
   const validMoves = []
   const castleMoves = []

   const { col, row } = squareNumToGrid(oldSquareNum)

   const squaresToCheck = [
      { colUpdation: -1, rowUpdation: 1 }, // bottom left
      { colUpdation: -1, rowUpdation: 0 }, // left
      { colUpdation: -1, rowUpdation: -1 },
      { colUpdation: 0, rowUpdation: -1 },
      { colUpdation: 1, rowUpdation: -1 },
      { colUpdation: 1, rowUpdation: 0 },
      { colUpdation: 1, rowUpdation: 1 }, // bottom right
      { colUpdation: 0, rowUpdation: 1 } // bottom
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

   const squaresToCastle = [{ rookNum: 1 }, { rookNum: 2 }]

   squaresToCastle.forEach(({ rookNum }) => {
      const data = checkCastle(col, row, board, isWhite, rookNum)
      if (data) {
         const { kingCoord, currRookSquareNum } = data
         castleMoves.push({ kingCoord, currRookSquareNum, rookNum })
      }
   })

   return { validMoves, castleMoves }
}

export default ValidKingMoves