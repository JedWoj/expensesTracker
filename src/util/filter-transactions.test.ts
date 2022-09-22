import { filterTransactions } from "./filter-transactions";

const arr = [{value: 9, category: 'food', date: '2022-10-20', type: '+'}, {value: 1, category: 'food', date: '2022-10-20', type: '+'}];
const arr2 = [{value: 9, category: 'food', date: '2022-10-20', type: '-'}, {value: 1, category: 'food', date: '2022-10-20', type: '+'}]

describe('filterTransactions tests', () => {
    it('returns 2 transactions', () => {
        const filtered = filterTransactions(arr,'+');
        expect(filtered).toHaveLength(2);
    })
    
    it('returns 0 transactions', () => {
        const filtered = filterTransactions(arr,'-');
        expect(filtered).toHaveLength(0);
    })
    
    it('returns 1 transaction', () => {
        const filtered = filterTransactions(arr2,'-');
        expect(filtered).toHaveLength(1);
    })
})