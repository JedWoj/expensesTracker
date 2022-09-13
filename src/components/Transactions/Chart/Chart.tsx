import React from "react";
import ChartCols from "./ChartCols";
import ChartInfo from "./ChartInfo";
import classes from './Chart.module.scss';

const Chart = () => {
    return(
            <section className={classes.chart}>
                <ChartInfo />
                <ChartCols />
            </section>
    )
}

export default Chart;