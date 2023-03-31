import './styles/Piece.css'

const Piece = ({ piece, squareNum }) => {
   const pieceWithNoNum = piece.replace(/[0-9]/g, '')

   const drag = e => {
      e.dataTransfer.setData('object', JSON.stringify({ piece, squareNum }))
      e.target.classList.add('invisible')
   }

   return (
      <>
         <img src={`/Chess-React/pieces/${pieceWithNoNum}.png`} alt="chess piece" id={piece} className='piece' draggable={true} onDragStart={drag} />
      </>
   )
}
 
export default Piece;