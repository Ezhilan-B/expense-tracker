import Expenseitem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css"

function Expenses(props) {
    const items = props.expenses;
    return(
        <Card className="expenses">
            <Expenseitem title={items[0].title} amount={items[0].amount} date={items[0].date} />
            <Expenseitem title={items[1].title} amount={items[1].amount} date={items[1].date} />
            <Expenseitem title={items[2].title} amount={items[2].amount} date={items[2].date} />
            <Expenseitem title={items[3].title} amount={items[3].amount} date={items[3].date} />
        </Card>
    );
}

export default Expenses;