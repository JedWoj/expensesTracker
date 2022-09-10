import React from 'react';
import Card from '../../UI/Card/Card';
import classes from './CreditCard.module.scss'

const CreditCard = () => {
    return(
        <Card>
            <section className={classes['credit-cart']}>
                <h2 className={classes['credit-cart__heading']}>
                    Total Balance
                </h2>
                <p className={classes['credit-cart__balance']}>
                    $ 4800.00
                </p>
                <div className={classes['credit-cart__wrapper']}>
                    <div className={classes['credit-cart__income-box']}>
                        <div className={classes['credit-cart__icon-box']}>

                        </div>
                        <div className={classes['credit-cart__text-box']}>
                            <p className={classes['credit-cart__type']}>
                                Income
                            </p>
                            <p className={classes['credit-cart__money']}>
                                2.500.000
                            </p>
                        </div>
                    </div>
                    <div className={classes['credit-cart__income-box']}>
                        <div className={classes['credit-cart__icon-box']}>

                        </div>
                        <div className={classes['credit-cart__text-box']}>
                            <p className={classes['credit-cart__type']}>
                                Expense
                            </p>
                            <p className={classes['credit-cart__money']}>
                                800.000
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Card>
    )
}

export default CreditCard;