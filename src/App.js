import { useContext } from 'react';
import './styles/App.css';
import Square from './Square';
import { BoardContext } from './BoardContext';

function App() {
  const all = useContext(BoardContext)
  const board = all.board
  const updateSquareNum = all.updateSquareNum

  return (
    <div className="all">
      <div className="board">
        {
          board.map((col, i1) => (
            col.map((row, i2) => (
              <Square row={row} key={(i1 * 8) + (i2 + 1)} board={board} squareNum={row.squareNum} updateSquareNum={updateSquareNum} />
            ))
          ))
        }
      </div>
    </div>
  );
}

export default App;
