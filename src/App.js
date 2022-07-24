import { Fragment } from "react";
import Header from "./components/header/Header";
import CreditCard from "./components/CreditCard/CreditCard";
import ExpensesList from "./components/Expenses/ExpensesList";

const App = () => {
    return(
        <Fragment>
            <Header />
            <CreditCard />
            <ExpensesList />
        </Fragment>
    )
}

export default App;