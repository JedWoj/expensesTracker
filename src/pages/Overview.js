import Header from "../components/Overview/header/Header";
import ExpensesList from "../components/Overview/Expenses/ExpensesList";
import CreditCard from "../components/Overview/CreditCard/CreditCard";
import Nav from "../components/Overview/Nav/Nav";

const Overview = () => {
    return(
        <>
            <Header />
            <CreditCard />
            <ExpensesList />
            <Nav />
        </>
    )
}

export default Overview;