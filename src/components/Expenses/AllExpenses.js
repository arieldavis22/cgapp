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
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}/>
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}/>
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}/>
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}/>
            </Card>
        </div>
    )
}
export default AllExpenses