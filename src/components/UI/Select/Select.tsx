import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { transactionsActions } from "../../../store/transactionsSlice";
import BackgroundGradientVisible from "../BackgoundGradient/BackgoundGradientVisible";
import ReactPortal from "../../ReactPortal/ReactPortal";
import classes from './Select.module.scss';

interface SelectProps {
    handleVisibility: Function;
}

const Select = ({handleVisibility}: SelectProps) => {
    const activeYear = useAppSelector((state) => state.transactions.activeYear);
    const dispatch = useAppDispatch();

    const setYearHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target;
        handleVisibility((prev: boolean) => !prev);
        dispatch(transactionsActions.setActiveYear(value));
    }

    return(
        <ReactPortal wrapperId="root">
            <BackgroundGradientVisible>
                <div className={classes.select}>
                    <div className={classes.select__container}>
                        <label className={classes.select__label}>
                            Filter by year
                        </label>
                        <select value={activeYear} className={classes.select__select} onChange={setYearHandler}>
                            <option value='2022'>2022</option>
                            <option value='2021'>2021</option>
                            <option value='2020'>2020</option>
                        </select>
                        <div onClick={() => handleVisibility((prev: boolean) => !prev)} className={classes["select__close-btn"]}>
                            x
                        </div>
                    </div>
                </div>
            </BackgroundGradientVisible>
        </ReactPortal>
    )    
}

export default Select;