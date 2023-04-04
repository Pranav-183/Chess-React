import { isWhitePiece } from "../Functions/Extras"
import ValidKingMoves from "../ValidMoves/ValidKingMoves"

const RookDropConditions = (squareNum, oldSquareNum, validMovesArray, castleCoords, currentTurn, isWhite, coord) => {
   return squareNum !== oldSquareNum && (validMovesArray.includes(coord) || castleCoords.includes(coord)) && (currentTurn === 'white' ? isWhite : !isWhite)
}

const DropKing = (oldSquareNum, squareNum, piece, board, currentTurn, coord, updateSquareNum, updateBlackMoves, updateWhiteMoves, toggleCurrentTurn, executeCastle) => {
   const isWhite = isWhitePiece(piece)
   const validMovesData = ValidKingMoves(oldSquareNum, board, isWhite)
   const { validMoves: validMovesArray, castleMoves: castleMovesArray } = validMovesData

   const castleCoords = []
   castleMovesArray.forEach(({ kingCoord }) => {
      castleCoords.push(kingCoord)
   })

   if (RookDropConditions(squareNum, oldSquareNum, validMovesArray, castleCoords, currentTurn, isWhite, coord)) {
      if (castleCoords.includes(coord)) {
         let currRookSquareNum, rookNum
         castleMovesArray.forEach(obj => {
            if (obj.kingCoord === coord) {
               currRookSquareNum = obj.currRookSquareNum
               rookNum = obj.rookNum
            }
         })
         executeCastle(currRookSquareNum, rookNum)
      }
      updateSquareNum(oldSquareNum, squareNum)
      currentTurn === 'white' ? updateWhiteMoves(coord) : updateBlackMoves(coord)
      toggleCurrentTurn()
   }
}

export default DropKing