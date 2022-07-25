import classes from './TransactionsHeader.module.scss';

const TransactionsHeader = () => {
    return(
        <header className={classes['transactions-header']}>
            <div className={classes['transactions-header__icon-box']}>
                <div className={classes['transactions-header__icon']}>

                </div>
            </div>
            <h1 className={classes['transactions-header__heading']}>
                Transactions
            </h1>
            <div className={classes['transactions-header__icon-box']}>
                <div className={classes['transactions-header__icon']}>

                </div>
            </div>
        </header>
    )
}

export default TransactionsHeader;