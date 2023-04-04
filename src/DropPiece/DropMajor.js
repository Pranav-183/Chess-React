import { isWhitePiece } from "../Functions/Extras"
import validBishopMoves from "../ValidMoves/ValidBishopMoves"
import ValidKnightMoves from "../ValidMoves/ValidKnightMoves"
import validRookMoves from "../ValidMoves/ValidRookMoves"
import DropConditions from "./DropConditions"

const DropMajor = (oldSquareNum, squareNum, piece, board, currentTurn, coord, updateSquareNum, updateBlackMoves, updateWhiteMoves, toggleCurrentTurn) => {
   const isWhite = isWhitePiece(piece)
   let validMovesArray = []

   if (piece.includes('wr') || piece.includes('br')) {
      validMovesArray = validRookMoves(oldSquareNum, board, isWhite)
   } else if (piece.includes('wn') || piece.includes('bn')) {
      validMovesArray = ValidKnightMoves(oldSquareNum, board, isWhite)
   } else if (piece.includes('wb') || piece.includes('bb')) {
      validMovesArray = validBishopMoves(oldSquareNum, board, isWhite)
   } else if (piece === 'wq' || piece === 'bq') {
      validBishopMoves(oldSquareNum, board, isWhite).forEach(coord => validMovesArray.push(coord))
      validRookMoves(oldSquareNum, board, isWhite).forEach(coord => validMovesArray.push(coord))
   }

   if (DropConditions(squareNum, oldSquareNum, validMovesArray, currentTurn, isWhite, coord)) {
      updateSquareNum(oldSquareNum, squareNum)
      currentTurn === 'white' ? updateWhiteMoves(coord) : updateBlackMoves(coord)
      toggleCurrentTurn()
   }
}

export default DropMajor