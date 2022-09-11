import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import Card from '../../UI/Card/Card';
import classes from './CreditCard.module.scss'

const CreditCard = () => {
    return(
        <Card>
            <section className={classes['credit-card']}>
                <h2 className={classes['credit-card__heading']}>
                    Total Balance
                </h2>
                <p className={classes['credit-card__balance']}>
                    $ 4800.00
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
                                2.500.000
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