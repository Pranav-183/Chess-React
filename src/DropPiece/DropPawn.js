import { isWhitePiece } from "../Functions/Extras"
import validPawnMoves from "../ValidMoves/ValidPawnMoves"

const DropPawnData = (oldSquareNum, board, isWhite, currentTurn, moves) => {
   const validMovesData = validPawnMoves(oldSquareNum, board, isWhite, (currentTurn === 'white' ? moves.black[moves.black.length - 1] : moves.white[moves.white.length - 1]))
   const validMovesArray = validMovesData.validMoves
   const enPassantedPiece = validMovesData.enPassantedPiece
   const movedTwoSquaresSquareNum = validMovesData.movedTwoSquaresSquareNum

   return { validMovesArray, enPassantedPiece, movedTwoSquaresSquareNum }
}

const PawnDropConditions = (squareNum, oldSquareNum, validMovesArray, currentTurn, isWhite, coord) => {
   return squareNum !== oldSquareNum && validMovesArray.includes(coord) && (currentTurn === 'white' ? isWhite : !isWhite)
}

const DropPawn = (oldSquareNum, squareNum, piece, board, currentTurn, coord, moves, executeEnPassant, updateSquareNum, updateBlackMoves, updateWhiteMoves, toggleCurrentTurn) => {
   const isWhite = isWhitePiece(piece)
   const { validMovesArray, enPassantedPiece, movedTwoSquaresSquareNum } = DropPawnData(oldSquareNum, board, isWhite, currentTurn, moves)

   if (PawnDropConditions(squareNum, oldSquareNum, validMovesArray, currentTurn, isWhite, coord)) {
      if (enPassantedPiece !== '') executeEnPassant(enPassantedPiece)
      updateSquareNum(oldSquareNum, squareNum, movedTwoSquaresSquareNum === squareNum)
      currentTurn === 'white' ? updateWhiteMoves(coord) : updateBlackMoves(coord)
      toggleCurrentTurn()
   }
}

export default DropPawn