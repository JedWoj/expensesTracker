export const prepareData = (transactions: object) => {
    for (const key in transactions) {
        return transactions[key]; 
    }
}