import React from "react";
import Expenses from "../components/Overview/Expenses/Expenses";
import CreditCard from "../components/Overview/CreditCard/CreditCard";
import Nav from "../components/Overview/Nav/Nav";
import classes from './Overview.module.scss';

const Overview = () => {
    return(
        <>
            <div className={classes.overview}>
                <section className={classes.overview__cta}>
                    <CreditCard />
                    <Nav />
                </section>
                <Expenses />
            </div>
        </>
    )
}

export default Overview;