import {filterTransactionsByDate, sortTransactions} from './helpers';

const arr = [{value: 9, category: 'food', date: '2022-10-21', type: '+'}, {value: 1, category: 'food', date: '2022-10-20', type: '+'},{value: 1, category: 'food', date: '2021-10-20', type: '+'}];
const arr2 = [{value: 9, category: 'food', date: '2020-10-21', type: '+'}, {value: 1, category: 'food', date: '2022-10-20', type: '+'},{value: 1, category: 'food', date: '2021-10-20', type: '+'}];
const arr3 = [{value: 1, category: 'food', date: '2022-10-20', type: '+'},{value: 1, category: 'food', date: '2021-10-20', type: '+'},{value: 9, category: 'food', date: '2020-10-21', type: '+'}];

describe('tests of filtering', () => {
    it('filter transactions by 2020 - should return 2', () => {
        const filtered = filterTransactionsByDate(arr, '2022');
        expect(filtered).toHaveLength(2); 
    }) 
    
    it('filter transactions to return nothing', () => {
        const filtered = filterTransactionsByDate(arr, '2020');
        expect(filtered).toHaveLength(0)
    })
})

describe('tests of sorting', () => {
    it('sort transactions should have same order', () => {
        const sorted = sortTransactions(arr);
        expect(sorted).toStrictEqual(arr);
    })

    it('sort transactions should change order', () => {
        const sorted = sortTransactions(arr2);
        expect(sorted).toStrictEqual(arr3);
    })
})