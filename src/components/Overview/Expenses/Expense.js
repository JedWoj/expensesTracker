import classes from './Expense.module.scss';
import Card from '../../UI/Card/Card';

const Expense = ({type, kind, amount, date}) => {
    return(
    <Card>
        <li className={classes.expense}>
            <div className={classes.expense__type}>
                <div className={classes['expense__icon-box']}>
                    <div className={classes.expense__icon}>

                    </div>
                </div>
                <p className={classes.expense__name}>
                    {type}
                </p>
            </div>
            <div className={classes.expense__info}>
                <p className={classes.expense__amount}>
                    {`${kind === '-' ? kind : ''}$${amount}`}
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