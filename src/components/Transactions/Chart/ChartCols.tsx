import React from "react";
import { useAppSelector } from "../../../hooks";
import { filterTransactionsByDate, sortTransactions } from "../../Overview/Expenses/helpers";
import { filterTransactions } from "../../../util/filter-transactions";
import { prepareData } from "../../../util/prepare-data";
import ChartBar from "./ChartBar";
import classes from './ChartCols.module.scss';

const ChartCols = () => {
    const activeTransactionType = useAppSelector((state) => state.transactions.activeTransactionType);
    const activeYear = useAppSelector((state) => state.transactions.activeYear);
    const fetchedTransactions = useAppSelector((state) => state.transactions.allTransactions);
    const transformedTransactions = prepareData(fetchedTransactions);
    const activeTransactions = filterTransactions(transformedTransactions, activeTransactionType);
    const filteredTransactionsByYear = filterTransactionsByDate(activeTransactions,activeYear);
    const sorted = sortTransactions(filteredTransactionsByYear);

    const CHART_DATA_POINTS = [{label: 'Jan', value: 0}, {label: 'Feb', value: 0},{label: 'Mar', value: 0},{label: 'Apr', value: 0},{label: 'May', value: 0},{label: 'Jun', value: 0},{label: 'Jul', value: 0},{label: 'Aug', value: 0},{label: 'Sep', value: 0},{label: 'Oct', value: 0},{label: 'Nov', value: 0},{label: 'Dec', value: 0},];
    
    sorted.map(tr => {
        const expenseMonth = new Date(tr.date).getMonth();
        return CHART_DATA_POINTS.at(expenseMonth).value += tr.value;
    });

    const values = CHART_DATA_POINTS.map(point => point.value);
    const totalMaximum = Math.max(...values);

    return(
        <section className={classes['chart-cols']}>
            {CHART_DATA_POINTS.map(point => <ChartBar value={point.value} key={point.label} maxValue={totalMaximum} label={point.label}/>)}
        </section>
    )
}

export default ChartCols;