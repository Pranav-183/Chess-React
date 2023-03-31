import { useContext } from 'react';
import { BoardContext } from './BoardContext';
import { MovesContext } from './MovesContext';
import { isWhitePiece } from './Extras';
import Piece from './Piece';
import './styles/Square.css'
import { validPawnMoves  } from './ValidPawnMoves';

const Square = ({ row, squareNum }) => {
   const movesContextData = useContext(MovesContext)
   const boardContextAll = useContext(BoardContext)

   const { board, updateSquareNum, executeEnPassant } = boardContextAll
   const { moves, updateWhiteMoves, updateBlackMoves, currentTurn, toggleCurrentTurn } = movesContextData

   const drop = e => {
      e.preventDefault()
      let piece = JSON.parse(e.dataTransfer.getData('object')).piece
      let oldSquareNum = JSON.parse(e.dataTransfer.getData('object')).squareNum
      document.getElementById(piece).classList.remove('invisible')
      let coord
      board.forEach(row => {
         row.forEach(col => {
            if (col.squareNum === squareNum) {
               coord = col.coord
            }
         })
      })

      const isWhite = isWhitePiece(piece)
      const validPawnMovesData = validPawnMoves(oldSquareNum, board, isWhite, (currentTurn === 'white' ? moves.black[moves.black.length - 1] : moves.white[moves.white.length - 1]))
      const validPawnMovesArray = validPawnMovesData.validMoves
      const enPassantedPiece = validPawnMovesData.enPassantedPiece

      if (squareNum !== oldSquareNum && validPawnMovesArray.includes(coord) && (currentTurn === 'white' ? isWhite : !isWhite)) {
         updateSquareNum(oldSquareNum, squareNum)
         if (enPassantedPiece !== '') {
            executeEnPassant(enPassantedPiece)
         }
         if (currentTurn === 'white') {
            updateWhiteMoves(coord)
         } else {
            updateBlackMoves(coord)
         }
         toggleCurrentTurn()
      }
   }

   const allowDrop = e => {
      e.preventDefault()
   }

   return (
      <div className="square" style={{ backgroundColor: row.color, color: row.color === '#EEEED2' ? '#769656' : '#EEEED2' }}
         onDrop={drop} onDragOver={allowDrop}
         data-colindication={row.colIndication && row.colIndication}
         data-rowindication={row.rowIndication && row.rowIndication}
      >
         {row.piece && <Piece piece={row.piece} squareNum={squareNum} />}
      </div>
   );
}
 
export default Square;