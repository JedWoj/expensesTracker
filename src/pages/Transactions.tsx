import React from "react";
import TransactionsHeader from "../components/Transactions/TransactionsHeader/TransactionsHeader";
import Switch from "../components/Transactions/Switch/Switch";
import ExpensesList from "../components/Overview/Expenses/ExpensesList";
import Chart from "../components/Transactions/Chart/Chart";
import classes from './Transactions.module.scss';

const Transactions  = () => {
    return(
        <>
            <TransactionsHeader />
            <div className={classes.transactions}>
                <section className={classes.transactions__cta}>
                    <Switch />
                    <Chart />
                </section>
                <div className={classes.transactions__wrap}>
                    <ExpensesList />
                </div>
            </div>
        </>
    )
}

export default Transactions;