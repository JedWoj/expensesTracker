import Header from "../components/header/Header";
import CreditCard from "../components/CreditCard/CreditCard";
import ExpensesList from "../components/Expenses/ExpensesList";
import Nav from "../components/Nav/Nav";

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