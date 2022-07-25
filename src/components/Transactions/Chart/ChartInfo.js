import classes from './ChartInfo.module.scss';

const ChartInfo = () => {
    return(
        <div className={classes['chart-heading']}>
            <p className={classes['chart-heading__date']}>
                01 Jan 2021 - 01 April 2021
            </p>
            <h2 className={classes['chart-heading__amount']}>
                $3500.00
            </h2>
        </div>
    )
}

export default ChartInfo;