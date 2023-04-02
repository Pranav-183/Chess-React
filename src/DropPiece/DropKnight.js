import { isWhitePiece } from "../Functions/Extras"
import ValidKnightMoves from "../ValidMoves/ValidKnightMoves"

const DropKnight = (oldSquareNum, squareNum, piece, board, currentTurn, coord, updateSquareNum, updateBlackMoves, updateWhiteMoves, toggleCurrentTurn) => {
   const isWhite = isWhitePiece(piece)
   const validMovesArray = ValidKnightMoves(oldSquareNum, board, isWhite)
}

export default DropKnight