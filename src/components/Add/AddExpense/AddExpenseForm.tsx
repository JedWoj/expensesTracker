import React from "react";
import classes from './AddExpenseForm.module.scss';

const AddExpenseForm = () => {

    return(
        <form className={classes['add-expense-form__form']}>
            <div className={classes['add-expense-form__bgc']}>
                <input type="number" placeholder="0" max="9999999" className={classes['add-expense-form__amount']} />
            </div>
            <input type='text' placeholder='Category' className={classes['add-expense-form__category']}/>   
            <textarea placeholder='Note' className={classes['add-expense-form__note']}></textarea>
            <input type='date' className={classes['add-expense-form__date']} />
            <button className={classes['add-expense-form__btn']}>Save</button>
        </form>
    )
};

export default AddExpenseForm;