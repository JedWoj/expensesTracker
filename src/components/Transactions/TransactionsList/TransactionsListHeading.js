import classes from './TransactionsListHeading.module.scss';

const TransactionsListHeading = () => {
    return(
        <div className={classes.info}>
            <p className={classes.info__date}>
               Sat, 20 March 2021 
            </p>
            <p className={classes.info__amount}>
                -500.00
            </p>
        </div>
    )
}

export default TransactionsListHeading;