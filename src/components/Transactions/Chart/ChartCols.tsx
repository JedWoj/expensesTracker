import React from "react";
import ChartBar from "./ChartBar";
import classes from './ChartCols.module.scss';

const chartDataPoints = [{label: 'Jan', value: 0}, {label: 'Feb', value: 0},{label: 'Mar', value: 0},{label: 'Apr', value: 0},{label: 'May', value: 0},{label: 'Jun', value: 0},{label: 'Jul', value: 0},{label: 'Aug', value: 0},{label: 'Sep', value: 0},{label: 'Oct', value: 0},{label: 'Nov', value: 0},{label: 'Dec', value: 0},];

const values = chartDataPoints.map(point => point.value);
const totalMaximum = Math.max(...values);

const ChartCols = () => {
    return(
        <section className={classes['chart-cols']}>
            {chartDataPoints.map(point => <ChartBar value={point.value} key={point.label} maxValue={totalMaximum} label={point.label}/>)}
        </section>
    )
}

export default ChartCols;