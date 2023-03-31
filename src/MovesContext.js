import { createContext, useState } from "react";

export const MovesContext = createContext()

const MovesContextProvider = ({ children }) => {
   const [moves, setMoves] = useState( {white: [], black: []} )
   const [currentTurn, setCurrentTurn] = useState('white')

   const updateWhiteMoves = move => {
      setMoves(prevMoves => ({
         black: prevMoves.black,
         white: [...prevMoves.white, move]
      }))
   }

   const updateBlackMoves = move => {
      setMoves(prevMoves => ({
         white: prevMoves.white,
         black: [...prevMoves.black, move]
      }))
   }

   const toggleCurrentTurn = () => {
      if (currentTurn === 'white') {
         setCurrentTurn('black')
      } else {
         setCurrentTurn('white')
      }
   }

   return (
      <MovesContext.Provider value={{ moves, updateWhiteMoves, updateBlackMoves, currentTurn, toggleCurrentTurn }}>
         {children}
      </MovesContext.Provider>
   )
}

export default MovesContextProvider