import { ICredentials } from "./Student/types";

export interface loginState{
    code: string;
    isLoggedIn: boolean;
    token: string;
    error: string;
    isLoading: boolean;
}

export interface studentState{
    students: ICredentials[];
    error: string;
    isLoading: boolean;
}

export interface surveyState{
    result: string;
    score: [];
    isLoading: boolean;
}