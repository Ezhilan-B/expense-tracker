import "./ExpenseItem.css"
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function Expenseitem(props){
    let INR = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    });

    return(
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{INR.format(props.amount)}</div>
                </div>
            </Card>
        </li>
    );
}

export default Expenseitem;