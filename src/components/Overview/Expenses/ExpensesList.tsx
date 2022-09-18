import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { filterTransactions,sortTransactions } from './helpers';
import { Transaction } from '../../../types/transaction-type';
import Expense from './Expense';
import classes from './ExpensesList.module.scss';
import { fetchTransactions } from '../../../store/async/fetch-transactions';

const ExpensesList = () => {
    const dispatch = useAppDispatch();
    const id = useAppSelector((state) => state.user.userId);
    const location = useLocation();
    const allTransactions = useAppSelector((state) => state.transactions.allTransactions);
    // const transactionsList = useAppSelector((state) => location.pathname === '/overview' ? state.transactions.allTransactions : state.transactions.activeTransactions);
    // const activeYear = useAppSelector((state) => state.transactions.activeYear);
    // let shownTransactions = [];
    // const filtered = filterTransactions(transactionsList,activeYear);
    // const sorted = sortTransactions(filtered);
    useEffect(() => {
        dispatch(fetchTransactions(id));
    },[dispatch, id])
    
    // location.pathname === '/overview' ? shownTransactions = sortTransactions(transactionsList) : shownTransactions = sorted;

    const prepare = () => {
        for (const key in allTransactions) {
            return allTransactions[key]; 
        }
    }

    const transformed = prepare();

    return(    
        <ul className={location.pathname !== '/transactions' ? classes['expenses-list'] : undefined}>
            {transformed.map((exp: Transaction) => <Expense key={Math.random()} category={exp.category} note={exp.note} type={exp.type} amount={exp.value} date={exp.date} />)}
        </ul>
    )
}

export default ExpensesList;