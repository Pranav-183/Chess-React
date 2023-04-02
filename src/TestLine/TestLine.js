const TestLine = (col, row, board, isWhite, colAddtition, rowAddition, colUpdation, rowUpdation) => {
   const validMoves = []
   let testCol = col + colAddtition, testRow = row + rowAddition

   while ((colUpdation === 1 ? testCol <= 7 : (colUpdation === -1 ? testCol >= 0 : true)) && (rowUpdation === 1 ? testRow <= 7 : (rowUpdation === -1 ? testRow >= 0 : true)) && (isWhite ? board[testRow][testCol].piece[0] !== 'w' : board[testRow][testCol].piece[0] !== 'b')) {
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

export default TestLine