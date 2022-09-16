export type RegistrationAnswerType = {
    kind?: string,
    expiresIn?: string,
    idToken?: string,
    email?: string,
    localId?: string,
    refreshToken?: string,
    code?: number,
    errors?: {
        message?: string,
        domain?: string,
        reason?: string
    }[],
    message?: string
}

export type LoginAnswerType = {
    kind?: string,
    expiresIn?: string,
    idToken?: string,
    email?: string,
    localId?: string,
    refreshToken?: string,
    code?: number,
    registered?: boolean,
    errors?: {
        message?: string,
        domain?: string,
        reason?: string
    }[],
    message?: string
}