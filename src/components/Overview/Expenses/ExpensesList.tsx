import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { filterTransactionsByDate,sortTransactions } from './helpers';
import { prepareData } from '../../../util/prepare-data';
import { Transaction } from '../../../types/transaction-type';
import Expense from './Expense';
import classes from './ExpensesList.module.scss';
import { fetchTransactions } from '../../../store/async/fetch-transactions';
import { filterTransactions } from '../../../util/filter-transactions';

const ExpensesList = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const id = useAppSelector((state) => state.user.userId);
    const activeTransactionType = useAppSelector((state) => state.transactions.activeTransactionType);
    const fetchedTransactions = useAppSelector((state) => state.transactions.allTransactions);
    const activeYear = useAppSelector((state) => state.transactions.activeYear);
    
    const transformedTransactions = prepareData(fetchedTransactions);
    const transactionsList =  location.pathname === '/overview' ? transformedTransactions : filterTransactions(transformedTransactions, activeTransactionType);
    const filteredByDate = filterTransactionsByDate(transactionsList,activeYear);
    const sorted = sortTransactions(filteredByDate);
    let shownTransactions = [];

    useEffect(() => {
        dispatch(fetchTransactions(id));
    },[dispatch, id])
    
    location.pathname === '/overview' ? shownTransactions = sortTransactions(transformedTransactions) : shownTransactions = sorted;

    return(    
        <ul className={location.pathname !== '/transactions' ? classes['expenses-list'] : undefined}>
            {shownTransactions.map((exp: Transaction) => <Expense key={Math.random()} category={exp.category} note={exp.note} type={exp.type} amount={exp.value} date={exp.date} />)}
        </ul>
    )
}

export default ExpensesList;