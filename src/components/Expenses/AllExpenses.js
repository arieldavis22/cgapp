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

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearFilter={filterChangeHandler}/>
                {props.expenses.map(expense => 
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
            </Card>
        </div>
    )
}
export default AllExpenses