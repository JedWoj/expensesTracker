import classes from './ExpensesList.module.scss';

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
        </main>
    )
}

export default ExpensesList;