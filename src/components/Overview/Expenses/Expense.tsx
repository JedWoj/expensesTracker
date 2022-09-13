import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import classes from './Expense.module.scss';
import Card from '../../UI/Card/Card';

interface ExpenseProps {
    type: string, category: string, amount: number, date: string
}

const Expense = ({type, category, amount, date} : ExpenseProps)  => {
    return(
    <Card>
        <li className={classes.expense}>
            <div className={classes.expense__type}>
                <div className={category === '-' ? `${classes['expense__icon-box']} ${classes['expense__icon-box--expense']}` : classes['expense__icon-box']}>
                    {category === '-' ?
                    <FontAwesomeIcon icon={faArrowAltCircleDown} className={classes.expense__icon} /> :
                    <FontAwesomeIcon icon={faArrowAltCircleUp} className={classes.expense__icon} />}
                </div>
                <p className={classes.expense__name}>
                    {type}
                </p>
            </div>
            <div className={classes.expense__info}>
                <p className={classes.expense__amount}>
                    {`${category === '-' ? category : ''}$${amount}`}
                </p>
                <p className={classes.expense__date}>
                    {date}
                </p>
            </div>
        </li>
    </Card>
    )
}

export default Expense;