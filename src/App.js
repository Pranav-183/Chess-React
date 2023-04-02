import { useContext } from 'react';
import './styles/App.css';
import Square from './Square';
import { BoardContext } from './Contexts/BoardContext';

function App() {
  const all = useContext(BoardContext)
  const board = all.board

  return (
    <div className="all">
      <div className="board">
        {
          board.map((col, i1) => (
            col.map((row, i2) => (
              <Square row={row} key={(i1 * 8) + (i2 + 1)} squareNum={row.squareNum} />
            ))
          ))
        }
      </div>
    </div>
  );
}

export default App;
