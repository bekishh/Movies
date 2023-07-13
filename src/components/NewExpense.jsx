import React, {useState} from 'react'
import MainContent from './MainContent'
import Header from './Header'

export const NewExpense = ({ onAddNewExpense }) => {
    const [isFormShow, setIsFormShow] = useState(false)

	const showFormHandler = () => {
		setIsFormShow(true)
	}

	const closeFormHandler = () => setIsFormShow(false)

	return (
		<div className='new-expense'>
            <Header onClick={showFormHandler} />
		{isFormShow &&
	<MainContent 
    onAddNewExpense={onAddNewExpense}
    onCloseForm={closeFormHandler}
    />
        }
		</div>
	)
}

export default NewExpense