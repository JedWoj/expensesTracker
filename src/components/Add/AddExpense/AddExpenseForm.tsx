import React, {useState} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { transactionsActions } from '../../../store/transactionsSlice';
import { useAppDispatch } from '../../../hooks';
import classes from './AddExpenseForm.module.scss';

const AddExpenseForm = () => {
    const [radioValue, setRadioValue] = useState('+');

    const dispatch = useAppDispatch();

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue(e.target.value);
    };

    const formik = useFormik({
        initialValues: {
            value: '',
            category: '',
            note: '',
            date: '',
            type: '+',
        },
        validationSchema: Yup.object({
            value: Yup.number().moreThan(0,"Value must be higher than 0").required('Value is required'),
            category: Yup.string().trim().min(2, "Category must be longer than 2 characters").max(15, "Category must be shorter than 15 characters").required("Category is required"),
            note: Yup.string().trim(),
            date: Yup.date().required("Date is required"),
            type: Yup.string()
        }),
        onSubmit: () => {
            dispatch(transactionsActions.addTransaction({
                value: Number(formik.values.value), 
                date: formik.values.date,
                category: formik.values.category,
                note: formik.values.note,
                type: radioValue,
            }))
            dispatch(transactionsActions.logTransaction())
            formik.resetForm();
        }
    });

    return(
        <form onSubmit={formik.handleSubmit} className={classes['add-expense-form__form']}>
            <div className={classes['add-expense-form__bgc']}>
                <input 
                    type="number" 
                    placeholder="0" 
                    max="9999999" 
                    className={classes['add-expense-form__amount']}
                    value={formik.values.value}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="value" 
                />
            </div>
            {formik.touched.value && formik.errors.value ? <p className={classes['add-expense-form__invalid-input']}>{formik.errors.value}</p> : null}
            <input
                type='text' 
                placeholder='Category' 
                className={classes['add-expense-form__category']}
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="category"
            />   
            {formik.touched.category && formik.errors.category ? <p className={classes['add-expense-form__invalid-input']}>{formik.errors.category}</p> : null}
            <textarea 
                placeholder='Note' 
                className={classes['add-expense-form__note']}
                value={formik.values.note}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="note"
            ></textarea>
            <input
                type='date'
                className={classes['add-expense-form__date']} 
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="date"
            />
            {formik.touched.date && formik.errors.date ? <p className={classes['add-expense-form__invalid-input']}>{formik.errors.date}</p> : null}
            <div className={classes['add-expense-form__radio-wrap']}>
                <div className={classes['add-expense-form__radio-container']}>
                    <input
                        id="income" 
                        type="radio"
                        value="+"
                        name="type"
                        checked={radioValue === '+'}
                        onChange={handleChecked}
                    />
                    <label className={classes['add-expense-form__radio-label']} htmlFor="income">
                        Income
                    </label>
                </div>
                <div className={classes['add-expense-form__radio-container']}>
                    <input 
                        id="expense"
                        type="radio"
                        value="-"
                        name="type"
                        checked={radioValue === '-'}
                        onChange={handleChecked}
                    />
                    <label className={classes['add-expense-form__radio-label']} htmlFor="expense">
                        Expense
                    </label>
                </div>
            </div>
            <button type="submit" className={classes['add-expense-form__btn']}>
                Save
            </button>
        </form>
    )
};

export default AddExpenseForm;