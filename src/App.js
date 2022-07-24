import { Fragment } from "react";
import Header from "./components/header/Header";
import CreditCard from "./components/CreditCard/CreditCard";
import ExpensesList from "./components/Expenses/ExpensesList";
import Nav from "./components/Nav/Nav";

const App = () => {
    return(
        <Fragment>
            <Header />
            <CreditCard />
            <ExpensesList />
            <Nav />
        </Fragment>
    )
}

export default App;