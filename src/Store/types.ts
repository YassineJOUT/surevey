export interface loginState{
    code: string,
    isLoggedIn: boolean,
    token: string,
    error: string,
    isLoading: boolean
}

export interface studentState{

    error: string,
    isLoading: boolean
}

export interface surveryState{
    result: string,
    score: [],
    isLoading: boolean
}