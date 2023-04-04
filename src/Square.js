import { useContext } from 'react';
import { BoardContext } from './Contexts/BoardContext';
import { MovesContext } from './Contexts/MovesContext';
import DropPawn from './DropPiece/DropPawn';
import Piece from './Piece';
import './styles/Square.css'
import DropMajor from './DropPiece/DropMajor';
import { isMajorPiece, squareNumToGrid } from './Functions/Extras';
import DropKing from './DropPiece/DropKing';
import { SelectPieceContext } from './Contexts/SelectPieceContext';

const Square = ({ row, squareNum }) => {
   const movesContextData = useContext(MovesContext)
   const boardContextAll = useContext(BoardContext)
   const selectPieceContextAll = useContext(SelectPieceContext)

   const { board, updateSquareNum, executeEnPassant, executeCastle } = boardContextAll
   const { moves, updateWhiteMoves, updateBlackMoves, currentTurn, toggleCurrentTurn } = movesContextData
   const { selectedPiece, setSelectedPiece } = selectPieceContextAll

   const chooseDrop = (oldSquareNum, piece) => {
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
      } else if (isMajorPiece(piece)) {
         DropMajor(oldSquareNum, squareNum, piece, board, currentTurn, coord, updateSquareNum, updateBlackMoves, updateWhiteMoves, toggleCurrentTurn)
      } else if (piece.includes('wk') || piece.includes('bk')) {
         DropKing(oldSquareNum, squareNum, piece, board, currentTurn, coord, updateSquareNum, updateBlackMoves, updateWhiteMoves, toggleCurrentTurn, executeCastle)
      }
   }

   const drop = e => {
      e.preventDefault()
      let { piece, squareNum: oldSquareNum } = JSON.parse(e.dataTransfer.getData('object'))
      document.getElementById(piece).classList.remove('invisible')

      chooseDrop(oldSquareNum, piece)
   }

   const allowDrop = e => {
      e.preventDefault()
   }

   const selectOrDrop = () => {
      if (selectedPiece) {
         chooseDrop(selectedPiece.squareNum, selectedPiece.piece)
         setSelectedPiece()
      } else {
         const { row, col } = squareNumToGrid(squareNum)
         const square = board[row][col]
         if (square.piece === '') return
         setSelectedPiece(square)
      }
   }

   return (
      <div className="square" style={{ backgroundColor: row.color, color: row.color === '#EEEED2' ? '#769656' : '#EEEED2' }}
         onDrop={drop} onDragOver={allowDrop}
         data-colindication={row.colIndication && row.colIndication}
         data-rowindication={row.rowIndication && row.rowIndication}
         onClick={selectOrDrop}
      >
         {row.piece && <Piece piece={row.piece} squareNum={squareNum} />}
      </div>
   );
}
 
export default Square;