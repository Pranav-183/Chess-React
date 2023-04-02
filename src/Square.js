import { useContext } from 'react';
import { BoardContext } from './Contexts/BoardContext';
import { MovesContext } from './Contexts/MovesContext';
import DropPawn from './DropPiece/DropPawn';
import Piece from './Piece';
import './styles/Square.css'
import DropLinePiece from './DropPiece/DropLinePiece';

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

      if (piece.includes('wp') || piece.includes('bp')) {
         DropPawn(oldSquareNum, squareNum, piece, board, currentTurn, coord, moves, executeEnPassant, updateSquareNum, updateBlackMoves, updateWhiteMoves, toggleCurrentTurn)
      } else if (piece.includes('wb') || piece.includes('bb') || piece.includes('wr') || piece.includes('br') || piece === 'wq' || piece === 'bq') {
         DropLinePiece(oldSquareNum, squareNum, piece, board, currentTurn, coord, updateSquareNum, updateBlackMoves, updateWhiteMoves, toggleCurrentTurn)
      } else if (piece.includes('wn') || piece.includes('bn')) {
         
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