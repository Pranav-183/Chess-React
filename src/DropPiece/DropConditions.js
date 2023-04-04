const DropConditions = (squareNum, oldSquareNum, validMovesArray, currentTurn, isWhite, coord) => {
   return squareNum !== oldSquareNum && validMovesArray.includes(coord) && (currentTurn === 'white' ? isWhite : !isWhite)
}

export default DropConditions