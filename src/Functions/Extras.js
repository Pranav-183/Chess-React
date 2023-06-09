const squareNumToGrid = squareNum => {
   let col = squareNum % 8 - 1
   // When squareNum is divisble by 1 col becomes -1
   if (col === -1) col = 7
   // When squareNum is divisble by 8 the row is increased by 1
   // To overcome this error I subtract 1 
   const row = squareNum % 8 === 0 ? squareNum / 8 - 1 : Math.floor(squareNum / 8)
   return { col, row }
}

// Not used rn
const gridToSquareNum = (col, row) => {
   return row * 8 + col + 1
}

const isWhitePiece = piece => {
   if (piece[0] === 'w') {
      return true
   }
}

const isWithinGridLimits = colOrRow => {
   return colOrRow <= 7 && colOrRow >= 0
}

const isMajorPiece = piece => {
   return piece.includes('wr') || piece.includes('br') || piece.includes('wb') || piece.includes('bb') || piece.includes('wn') || piece.includes('bn') || piece === 'wq' || piece === 'bq'
}

export { squareNumToGrid, gridToSquareNum, isWhitePiece, isWithinGridLimits, isMajorPiece }