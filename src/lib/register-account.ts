import { RegistrationAnswerType } from "../types/answer-type";

export const registerAccount = async (email: string, password: string) => {
    const register = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,{
        method: 'POST',
        body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,}),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    if(!register.ok) {
        throw new Error('Registration failed')
    }
    const data: RegistrationAnswerType = await register.json();
    return data;
}
