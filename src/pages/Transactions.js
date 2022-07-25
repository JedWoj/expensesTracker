import TransactionsHeader from "../components/Transactions/TransactionsHeader/TransactionsHeader";
import Switch from "../components/Transactions/Switch/Switch";
import TransactionsListHeading from "../components/Transactions/TransactionsList/TransactionsListHeading";

const Transactions  = () => {
    return(
        <>
            <TransactionsHeader />
            <Switch />
            <TransactionsListHeading />
        </>
    )
}

export default Transactions;