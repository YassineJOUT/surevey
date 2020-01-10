import { Reducer, AnyAction } from "redux";
import { ICredentials, STUDENT_REGISTER, STUDENT_REGISTER_ERROR, STUDENT_REGISTER_SUCCESS} from './types'
import { createReducer} from '../../utilities/ReducerHelper'
import { studentState } from "../types";

const initialState: studentState = {
    students:[],
    isLoading: false,
    error: ''
   
}
// Register

const doRegister = (state = initialState, action: AnyAction) => {
    return {...state,isLoading: true};
}

const registerSuccess = (state = initialState, action: AnyAction) => {
    return { ...state, isLoading: false };
}

const registerFailed = (state = initialState, action: AnyAction) => {
    return { ...state, isLoading: false, error: action.payload };
}

const REGISTER_HANDLERS = {
    [STUDENT_REGISTER]: doRegister,
    [STUDENT_REGISTER_SUCCESS]: registerSuccess,
    [STUDENT_REGISTER_ERROR]: registerFailed,
}

// 


const SignupReducer: Reducer<studentState> = createReducer(initialState, REGISTER_HANDLERS);
export {  SignupReducer  };