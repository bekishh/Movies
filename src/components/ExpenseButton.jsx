import React from 'react'

export const ExpenseButton = ({onClick}) => {
  return (
    <button onClick={onClick} className='headerButton'>ADD MOVIE</button>
  )
}

export default ExpenseButton