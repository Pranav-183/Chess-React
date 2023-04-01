const StartingPosition = [
   [
      { piece: 'br1', squareNum: 1, coord: 'a8', rowIndication: 8, hasMoved: false },
      { piece: 'bn1', squareNum: 2, coord: 'b8', },
      { piece: 'bb1', squareNum: 3, coord: 'c8', },
      { piece: 'bq', squareNum: 4, coord: 'd8', },
      { piece: 'bk', squareNum: 5, coord: 'e8', hasMoved: false },
      { piece: 'bb2', squareNum: 6, coord: 'f8', },
      { piece: 'bn2', squareNum: 7, coord: 'g8', },
      { piece: 'br2', squareNum: 8, coord: 'h8', hasMoved: false }
   ],
   [
      { piece: 'bp1', movedTwoSquares: false, squareNum: 9, coord: 'a7', rowIndication: 7, hasMoved: false },
      { piece: 'bp2', movedTwoSquares: false, squareNum: 10, coord: 'b7', hasMoved: false },
      { piece: 'bp3', movedTwoSquares: false, squareNum: 11, coord: 'c7', hasMoved: false },
      { piece: '', squareNum: 12, coord: 'd7' },
      { piece: 'bp5', movedTwoSquares: false, squareNum: 13, coord: 'e7', hasMoved: false },
      { piece: 'bp6', movedTwoSquares: false, squareNum: 14, coord: 'f7', hasMoved: false },
      { piece: 'bp7', movedTwoSquares: false, squareNum: 15, coord: 'g7', hasMoved: false },
      { piece: 'bp8', movedTwoSquares: false, squareNum: 16, coord: 'h7', hasMoved: false }
   ],
   [
      { piece: '', squareNum: 17, coord: 'a6', rowIndication: 6 },
      { piece: '', squareNum: 18, coord: 'b6' },
      { piece: '', squareNum: 19, coord: 'c6' },
      { piece: 'bp4', movedTwoSquares: true, squareNum: 20, coord: 'd6', hasMoved: true },
      { piece: '', squareNum: 21, coord: 'e6' },
      { piece: '', squareNum: 22, coord: 'f6' },
      { piece: '', squareNum: 23, coord: 'g6' },
      { piece: '', squareNum: 24, coord: 'h6' },
   ],
   [
      { piece: '', squareNum: 25, coord: 'a5', rowIndication: 5 },
      { piece: '', squareNum: 26, coord: 'b5' },
      { piece: '', squareNum: 27, coord: 'c5' },
      { piece: '', squareNum: 28, coord: 'd5' },
      { piece: '', squareNum: 29, coord: 'e5' },
      { piece: '', squareNum: 30, coord: 'f5' },
      { piece: '', squareNum: 31, coord: 'g5' },
      { piece: '', squareNum: 32, coord: 'h5' }
   ],
   [
      { piece: '', squareNum: 33, coord: 'a4', rowIndication: 4 },
      { piece: '', squareNum: 34, coord: 'b4' },
      { piece: '', squareNum: 35, coord: 'c4' },
      { piece: '', squareNum: 36, coord: 'd4' },
      { piece: '', squareNum: 37, coord: 'e4' },
      { piece: '', squareNum: 38, coord: 'f4' },
      { piece: '', squareNum: 39, coord: 'g4' },
      { piece: '', squareNum: 40, coord: 'h4' }
   ],
   [
      { piece: '', squareNum: 41, coord: 'a3', rowIndication: 3 },
      { piece: '', squareNum: 42, coord: 'b3' },
      { piece: '', squareNum: 43, coord: 'c3' },
      { piece: 'wp4', movedTwoSquares: true, squareNum: 44, coord: 'd3', hasMoved: true },
      { piece: '', squareNum: 45, coord: 'e3' },
      { piece: '', squareNum: 46, coord: 'f3' },
      { piece: '', squareNum: 47, coord: 'g3' },
      { piece: '', squareNum: 48, coord: 'h3' }
   ],
   [
      { piece: 'wp1', movedTwoSquares: false, squareNum: 49, coord: 'a2', rowIndication: 2, hasMoved: false },
      { piece: 'wp2', movedTwoSquares: false, squareNum: 50, coord: 'b2', hasMoved: false },
      { piece: 'wp3', movedTwoSquares: false, squareNum: 51, coord: 'c2', hasMoved: false },
      { piece: '', squareNum: 52, coord: 'd2' },
      { piece: 'wp5', movedTwoSquares: false, squareNum: 53, coord: 'e2', hasMoved: false },
      { piece: 'wp6', movedTwoSquares: false, squareNum: 54, coord: 'f2', hasMoved: false },
      { piece: 'wp7', movedTwoSquares: false, squareNum: 55, coord: 'g2', hasMoved: false },
      { piece: 'wp8', movedTwoSquares: false, squareNum: 56, coord: 'h2', hasMoved: false }
   ],
   [
      { piece: 'wr1', squareNum: 57, coord: 'a1', rowIndication: 1, colIndication: 'a', hasMoved: false },
      { piece: 'wn1', squareNum: 58, coord: 'b1', colIndication: 'b' },
      { piece: 'wb1', squareNum: 59, coord: 'c1', colIndication: 'c' },
      { piece: 'wq', squareNum: 60, coord: 'd1', colIndication: 'd' },
      { piece: 'wk', squareNum: 61, coord: 'e1', colIndication: 'e', hasMoved: false },
      { piece: 'wb2', squareNum: 62, coord: 'f1', colIndication: 'f' },
      { piece: 'wn2', squareNum: 63, coord: 'g1', colIndication: 'g' },
      { piece: 'wr2', squareNum: 64, coord: 'h1', colIndication: 'h', hasMoved: false }
   ]
]

StartingPosition.forEach((col, i1) => {
   col.forEach((row, i2) => {
      let color
      if (i1 % 2 === 0) {
         color = i2 % 2 === 0 ? '#EEEED2' : '#769656'
      } else {
         color = i2 % 2 === 0 ? '#769656' : '#EEEED2'
      }
      row.color = color
   })
})

export default StartingPosition