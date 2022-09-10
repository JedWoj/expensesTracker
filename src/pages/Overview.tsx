import React from "react";
import Header from "../components/Overview/header/Header";
import Expenses from "../components/Overview/Expenses/Expenses";
import CreditCard from "../components/Overview/CreditCard/CreditCard";
import Nav from "../components/Overview/Nav/Nav";

const Overview = () => {
    return(
        <>
            <Header />
            <CreditCard />
            <Expenses />
            <Nav />
        </>
    )
}

export default Overview;