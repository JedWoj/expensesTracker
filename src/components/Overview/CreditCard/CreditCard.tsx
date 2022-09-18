import React from 'react';
import { useAppSelector } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import Card from '../../UI/Card/Card';
import classes from './CreditCard.module.scss'

const CreditCard = () => {
    const expenses = useAppSelector((state) => state.transactions.expensesTransactions);
    const expense = expenses.name.reduce((a, b) => a + b.value, 0);
    const incomes = useAppSelector((state) => state.transactions.incomeTransactions);
    const income = incomes.name.reduce((a,b) => a + b.value , 0);

    return(
        <Card>
            <section className={classes['credit-card']}>
                <h2 className={classes['credit-card__heading']}>
                    Total Balance
                </h2>
                <p className={classes['credit-card__balance']}>
                    $ {(income - expense).toFixed(2)}
                </p>
                <div className={classes['credit-card__wrapper']}>
                    <div className={classes['credit-card__income-box']}>
                        <div className={classes['credit-card__icon-box']}>
                            <FontAwesomeIcon icon={faArrowAltCircleUp} className={classes['credit-card__icon']} />
                        </div>
                        <div className={classes['credit-card__text-box']}>
                            <p className={classes['credit-card__type']}>
                                Income
                            </p>
                            <p className={classes['credit-card__money']}>
                                ${income.toFixed(2)}
                            </p>
                        </div>
                    </div>
                    <div className={classes['credit-card__income-box']}>
                        <div className={classes['credit-card__icon-box']}>
                            <FontAwesomeIcon icon={faArrowAltCircleDown} className={classes['credit-card__icon']} />
                        </div>
                        <div className={classes['credit-card__text-box']}>
                            <p className={classes['credit-card__type']}>
                                Expense
                            </p>
                            <p className={classes['credit-card__money']}>
                                ${expense.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Card>
    )
}

export default CreditCard;