import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { transactionsActions } from '../../../store/transactionsSlice';
import { useAppDispatch } from '../../../hooks';
import classes from './AddExpenseForm.module.scss';

const AddExpenseForm = () => {
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            value: '',
            category: '',
            note: '',
            date: '',
        },
        validationSchema: Yup.object({
            value: Yup.number().moreThan(0,"Value must be higher than 0").required('Value is required'),
            category: Yup.string().trim().min(2, "Category must be longer than 2 characters").max(15, "Category must be shorter than 15 characters").required("Category is required"),
            note: Yup.string().trim().min(2, 'Note must be longer than 2 characters'),
            date: Yup.date().required("Date is required"),
        }),
        onSubmit: () => {
            dispatch(transactionsActions.addTransaction({
                value: Number(formik.values.value), 
                date: formik.values.date,
                category: formik.values.category,
                note: formik.values.note,
            }))
            dispatch(transactionsActions.logTransaction())
            formik.resetForm();
        }
    })

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
            <input
                type='text' 
                placeholder='Category' 
                className={classes['add-expense-form__category']}
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="category"
            />   
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
            <button type="submit" className={classes['add-expense-form__btn']}>
                Save
            </button>
        </form>
    )
};

export default AddExpenseForm;