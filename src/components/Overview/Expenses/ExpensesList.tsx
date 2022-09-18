import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { filterTransactions,sortTransactions } from './helpers';
import { prepareData } from '../../../util/prepare-data';
import { Transaction } from '../../../types/transaction-type';
import Expense from './Expense';
import classes from './ExpensesList.module.scss';
import { fetchTransactions } from '../../../store/async/fetch-transactions';
import transactionsSlice from '../../../store/transactionsSlice';

const ExpensesList = () => {
    const dispatch = useAppDispatch();
    const id = useAppSelector((state) => state.user.userId);
    const location = useLocation();
    const allTransactions = useAppSelector((state) => state.transactions.allTransactions);
    const transformed = prepareData(allTransactions);
    const expensesTransactions = useAppSelector((state) => state.transactions.expensesTransactions);
    const incomesTransactions = useAppSelector((state) => state.transactions.incomeTransactions);
    console.log(expensesTransactions,incomesTransactions);

    // const transactionsList = useAppSelector((state) => location.pathname === '/overview' ? state.transactions.allTransactions : state.transactions.activeTransactions);
    const activeYear = useAppSelector((state) => state.transactions.activeYear);
    let shownTransactions = [];
    // const filtered = filterTransactions(transactionsList,activeYear);
    // const sorted = sortTransactions(filtered);
    useEffect(() => {
        dispatch(fetchTransactions(id));
        // dispatch(transactionsSlice.actions.sortTransactions());
    },[dispatch, id])
    
    // location.pathname === '/overview' ? shownTransactions = sortTransactions(transactionsList) : shownTransactions = sorted;

    
    console.log(transformed)

    return(    
        <ul className={location.pathname !== '/transactions' ? classes['expenses-list'] : undefined}>
            {transformed.map((exp: Transaction) => <Expense key={Math.random()} category={exp.category} note={exp.note} type={exp.type} amount={exp.value} date={exp.date} />)}
        </ul>
    )
}

export default ExpensesList;