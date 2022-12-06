import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [formVisibility, setFormVisibility] = useState(false)
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount:'',
    //     date: ''
    // })

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title: event.target.value
        //     }
        // })
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }

    const buttonHandler = () => {
        setFormVisibility(prevState => {
            return !prevState
        })
    }

    return (
    <>
    {formVisibility === false ? <div className="new-expense__actions">
        <button onClick={buttonHandler}>Add New Expense</button>
    </div> : 
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
         <div className="new-expense__control">
             <label htmlFor="">Title</label>
             <input type="text" value={title} onChange={titleChangeHandler}/>
         </div>
         <div className="new-expense__control">
             <label htmlFor="">Amount</label>
             <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
         </div>
         <div className="new-expense__control">
             <label htmlFor="">Date</label>
             <input type="date" min="2022-01-01" step="2025-12-31" value={date} onChange={dateChangeHandler}/>
         </div>
     </div> 
     <div className="new-expense__actions">
         <button onClick={buttonHandler}>Cancel</button>
     </div>
     <div className="new-expense__actions">
         <button type='submit'>Add Expense</button>
     </div>
 </form>}
    </>
    )
}

export default ExpenseForm