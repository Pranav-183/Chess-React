import { isWhitePiece } from "../Extras"
import { validBishopMoves } from "../ValidMoves/ValidBishopMoves"

const BishopDropConditions = (squareNum, oldSquareNum, validMovesArray, currentTurn, isWhite, coord) => {
   return squareNum !== oldSquareNum && validMovesArray.includes(coord) && (currentTurn === 'white' ? isWhite : !isWhite)
}

const DropBishop = (oldSquareNum, squareNum, piece, board, currentTurn, coord, updateSquareNum, updateBlackMoves, updateWhiteMoves, toggleCurrentTurn) => {
   const isWhite = isWhitePiece(piece)
   const validMovesArray = validBishopMoves(oldSquareNum, board, isWhite)
   
   console.log(validMovesArray)
   
   if (BishopDropConditions(squareNum, oldSquareNum, validMovesArray, currentTurn, isWhite, coord)) {
      updateSquareNum(oldSquareNum, squareNum)
      currentTurn === 'white' ? updateWhiteMoves(coord) : updateBlackMoves(coord)
      toggleCurrentTurn()
   }
}

export default DropBishop