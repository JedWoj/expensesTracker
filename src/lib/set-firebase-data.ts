import { RegistrationAnswerType } from "../types/answer-type";

type BaseIdType = {
    name: string,
}

export const setFirebaseData = async (data: RegistrationAnswerType) => {
    const setEmptyExpenses = await fetch(`https://expensetracker-2f166-default-rtdb.europe-west1.firebasedatabase.app/:expenseTracker/${data.localId}.json`, {
        method: 'POST',
        body: JSON.stringify([{value: 45, note: 'lol'},{value: 25}]),
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        }
    }) 
    const baseId: BaseIdType = await setEmptyExpenses.json();
    return baseId;
}