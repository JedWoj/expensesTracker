import React from "react";
import Expenses from "../components/Overview/Expenses/Expenses";
import CreditCard from "../components/Overview/CreditCard/CreditCard";
import Nav from "../components/Overview/Nav/Nav";

const Overview = () => {
    return(
        <>
            <CreditCard />
            <Expenses />
            <Nav />
        </>
    )
}

export default Overview;