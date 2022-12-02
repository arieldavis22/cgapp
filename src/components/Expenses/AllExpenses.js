import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import AllExpnesesList from "./AllExpensesList";
import Card from "../UI/Card";
import './AllExpenses.css'
const AllExpenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('2022')

    const filterChangeHandler = enteredYear => {
        setfilteredYear(enteredYear)
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearFilter={filterChangeHandler}/>
                <AllExpnesesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}
export default AllExpenses