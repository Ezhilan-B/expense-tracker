import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    const [displayForm, setDisplayForm] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            {displayForm && <ExpenseForm displayForm={setDisplayForm} onSaveExpenseData={saveExpenseDataHandler} />}
            {!displayForm && <button onClick={() => setDisplayForm(true)}>Add New Expense</button>}
        </div>
    )
}

export default NewExpense;