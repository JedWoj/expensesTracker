import classes from './ExpensesList.module.scss';
import Expense from './Expense';

const DUMMY_EXPENES = [{type: 'food', amount:'45', kind: '-', date:'today'},{type: 'shopping', amount:'24', kind: '-', date:'today'},{type: 'food', amount:'45', kind: '-', date:'today'},{type: 'food', amount:'45', kind: '-', date:'today'},{type: 'food', amount:'45', kind: '-', date:'today'}]


const ExpensesList = () => {
    return(
        <main>
            <header className={classes.expenses}>
                <h3 className={classes.expenses__heading}>
                    Transactions
                </h3>
                <p className={classes.expenses__mode}>
                    View All
                </p>
            </header>
            <ul>
                {DUMMY_EXPENES.map(exp => <Expense type={exp.type} amount={exp.amount} kind={exp.kind} date={exp.date} />)}
            </ul>
        </main>
    )
}

export default ExpensesList;