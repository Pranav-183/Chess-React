const squareNumToGrid = squareNum => {
   let col = squareNum % 8 - 1
   if (col === -1) col = 7
   const row = Math.floor(squareNum / 8)
   return { col, row }
}

const isWhitePiece = piece => {
   if (piece[0] === 'w') {
      return true
   }
}

export { squareNumToGrid, isWhitePiece }