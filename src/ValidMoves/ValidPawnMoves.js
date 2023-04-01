import { isWhitePiece, squareNumToGrid } from "../Extras"

export const validPawnMoves = (oldSquareNum, board, isWhite, lastMove) => {
   const validMoves = []
   let enPassantedPiece = '', movedTwoSquaresSquareNum = ''

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
      if (board[f2row][f2col].piece === '' && board[frow][fcol].piece === '') {
         validMoves.push(board[f2row][f2col].coord)
         movedTwoSquaresSquareNum = board[f2row][f2col].squareNum
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

   if (lastMove === board[lrow][lcol].coord && ((!isWhite && board[lrow][lcol].piece.includes('wp') && board[lrow][lcol].movedTwoSquares === true && lrow === 4) || (isWhite && board[lrow][lcol].piece.includes('bp') && board[lrow][lcol].movedTwoSquares === true && lrow === 3))) {
      validMoves.push(board[flrow][flcol].coord)
      enPassantedPiece = board[lrow][lcol].squareNum
   }

   if (lastMove === board[rrow][rcol].coord && ((!isWhite && board[rrow][rcol].piece.includes('wp') && board[rrow][rcol].movedTwoSquares === true && rrow === 4) || (isWhite && board[rrow][rcol].piece.includes('bp') && board[rrow][rcol].movedTwoSquares === true && rrow === 3))) {
      validMoves.push(board[frrow][frcol].coord)
      enPassantedPiece = board[rrow][rcol].squareNum
   }

   return { validMoves, enPassantedPiece, movedTwoSquaresSquareNum }
}

// forwardLeftPawn - fl
// forward - f
// forwardRightPawn - fr
// forward twice - f2
// left - l
// right - r