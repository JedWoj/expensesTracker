import { LoginAnswerType } from "../types/answer-type";

export const loginAccount = async (email:string, password: string) => {
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,{
        method: 'POST',
        body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,}),
    headers: {
        'Content-Type': 'application/json',
    }})
    if(!response.ok) {
        throw new Error('Login failed!');
    }
    const data: LoginAnswerType = await response.json();
    return data;
} 