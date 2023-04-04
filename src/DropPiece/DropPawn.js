import { isWhitePiece } from "../Functions/Extras"
import validPawnMoves from "../ValidMoves/ValidPawnMoves"
import DropConditions from "./DropConditions"

const DropPawnData = (oldSquareNum, board, isWhite, currentTurn, moves) => {
   const validMovesData = validPawnMoves(oldSquareNum, board, isWhite, (currentTurn === 'white' ? moves.black[moves.black.length - 1] : moves.white[moves.white.length - 1]))
   const { validMoves: validMovesArray, enPassantedPiece, movedTwoSquaresSquareNum } = validMovesData

   return { validMovesArray, enPassantedPiece, movedTwoSquaresSquareNum }
}

const DropPawn = (oldSquareNum, squareNum, piece, board, currentTurn, coord, moves, executeEnPassant, updateSquareNum, updateBlackMoves, updateWhiteMoves, toggleCurrentTurn) => {
   const isWhite = isWhitePiece(piece)
   const { validMovesArray, enPassantedPiece, movedTwoSquaresSquareNum } = DropPawnData(oldSquareNum, board, isWhite, currentTurn, moves)

   if (DropConditions(squareNum, oldSquareNum, validMovesArray, currentTurn, isWhite, coord)) {
      if (enPassantedPiece !== '') executeEnPassant(enPassantedPiece)
      updateSquareNum(oldSquareNum, squareNum, movedTwoSquaresSquareNum === squareNum)
      currentTurn === 'white' ? updateWhiteMoves(coord) : updateBlackMoves(coord)
      toggleCurrentTurn()
   }
}

export default DropPawn