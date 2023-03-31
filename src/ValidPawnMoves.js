import { isWhitePiece, squareNumToGrid } from "./Extras"

export const validPawnMoves = (oldSquareNum, board, isWhite, lastMove) => {
   const validMoves = []
   const { col, row } = squareNumToGrid(oldSquareNum)
   const { col: f2col, row: f2row } = squareNumToGrid(isWhite ? oldSquareNum - 16 : oldSquareNum + 16)
   const { col: flcol, row: flrow } = squareNumToGrid(isWhite ? oldSquareNum - 9 : oldSquareNum + 9)
   const { col: fcol, row: frow } = squareNumToGrid(isWhite ? oldSquareNum - 8 : oldSquareNum + 8)
   const { col: frcol, row: frrow } = squareNumToGrid(isWhite ? oldSquareNum - 7 : oldSquareNum + 7)
   const { col: rcol, row: rrow } = squareNumToGrid(isWhite ? oldSquareNum + 1 : oldSquareNum - 1)
   const { col: lcol, row: lrow } = squareNumToGrid(isWhite ? oldSquareNum - 1 : oldSquareNum + 1)

   if (board[frow][fcol].piece === '') {
      validMoves.push(board[frow][fcol].coord)
   }
   
   if (board[row][col].hasMoved === false) {
      if (board[f2row][f2col].piece === '') {
         validMoves.push(board[f2row][f2col].coord)
      }
   }

   if (isWhite) {
      if (board[flrow][flcol].piece !== '' && !isWhitePiece(board[flrow][flcol].piece)) {
         validMoves.push(board[flrow][flcol].coord)
      }
   
      if (board[frrow][frcol].piece !== '' && !isWhitePiece(board[frrow][frcol].piece)) {
         validMoves.push(board[frrow][frcol].coord)
      }
   } else {
      if (board[flrow][flcol].piece !== '' && isWhitePiece(board[flrow][flcol].piece)) {
         validMoves.push(board[flrow][flcol].coord)
      }
   
      if (board[frrow][frcol].piece !== '' && isWhitePiece(board[frrow][frcol].piece)) {
         validMoves.push(board[frrow][frcol].coord)
      }
   }

   if (lastMove) {
      
   }

   console.log(validMoves)
   return validMoves
}

// forwardLeftPawn - fl
// forward - f
// forwardRightPawn - fr
// left - l
// right - r