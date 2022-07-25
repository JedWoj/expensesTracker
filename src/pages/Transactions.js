import TransactionsHeader from "../components/Transactions/TransactionsHeader/TransactionsHeader";
import Switch from "../components/Transactions/Switch/Switch";
import TransactionsListHeading from "../components/Transactions/TransactionsList/TransactionsListHeading";
import ExpensesList from "../components/Overview/Expenses/ExpensesList";
import Chart from "../components/Transactions/Chart/Chart";

const Transactions  = () => {
    return(
        <>
            <TransactionsHeader />
            <Switch />
            <Chart />
            <TransactionsListHeading />
            <ExpensesList />
        </>
    )
}

export default Transactions;