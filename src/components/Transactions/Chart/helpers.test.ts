import {sumTransactionsValues} from './helpers';

describe('sumTransactions function', () =>{
    test('returns number 10', () => {
        const arr = [{value: 9, category: 'food', date: '2022-10-20', type: '+'}, {value: 1, category: 'food', date: '2022-10-20', type: '+'}];
        const sum = sumTransactionsValues(arr);
        expect(sum).toBe(10);
    })
})