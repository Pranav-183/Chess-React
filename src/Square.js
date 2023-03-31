import { useContext } from 'react';
import { isWhitePiece } from './Extras';
import { MovesContext } from './MovesContext';
import Piece from './Piece';
import './styles/Square.css'
import { validPawnMoves  } from './ValidPawnMoves';

const Square = ({ row, board, squareNum, updateSquareNum }) => {
   const movesContextData = useContext(MovesContext)
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
      const validPawnMovesArray = validPawnMoves(oldSquareNum, board, isWhite, currentTurn === 'white' ? moves.black[moves.length - 1] : moves.white[moves.length - 1])

      if (squareNum !== oldSquareNum && validPawnMovesArray.includes(coord) && (currentTurn === 'white' ? isWhite : !isWhite)) {
         updateSquareNum(oldSquareNum, squareNum)
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