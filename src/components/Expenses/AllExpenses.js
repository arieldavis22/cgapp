import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import './AllExpenses.css'
import Card from "../UI/Card";
import { useState } from "react";
const AllExpenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('2022')

    const filterChangeHandler = enteredYear => {
        setfilteredYear(enteredYear)
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)

    let expensesContent = <p>No Expenses Found.</p>

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => 
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearFilter={filterChangeHandler}/>
                {expensesContent}
            </Card>
        </div>
    )
}
export default AllExpenses