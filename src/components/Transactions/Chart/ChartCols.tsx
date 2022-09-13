import React from "react";
import { useAppSelector } from "../../../hooks";
import ChartBar from "./ChartBar";
import classes from './ChartCols.module.scss';

const ChartCols = () => {
    const transactions = useAppSelector((state) => state.transactions.activeTransactions);
    const chartDataPoints = [{label: 'Jan', value: 0}, {label: 'Feb', value: 0},{label: 'Mar', value: 0},{label: 'Apr', value: 0},{label: 'May', value: 0},{label: 'Jun', value: 0},{label: 'Jul', value: 0},{label: 'Aug', value: 0},{label: 'Sep', value: 0},{label: 'Oct', value: 0},{label: 'Nov', value: 0},{label: 'Dec', value: 0},];
    transactions.map(tr => {
        const expenseMonth = new Date(tr.date).getMonth();
        return chartDataPoints.at(expenseMonth).value += tr.value;
    });
    const values = chartDataPoints.map(point => point.value);
    const totalMaximum = Math.max(...values);

    return(
        <section className={classes['chart-cols']}>
            {chartDataPoints.map(point => <ChartBar value={point.value} key={point.label} maxValue={totalMaximum} label={point.label}/>)}
        </section>
    )
}

export default ChartCols;