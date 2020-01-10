import { Reducer, AnyAction } from "redux";
import { ICredentials, STUDENT_REGISTER, STUDENT_REGISTER_ERROR, STUDENT_REGISTER_SUCCESS,STUDENT_RESULT} from './types'
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
    var t: ICredentials = action.payload;
    state.students.push(t);
    let arr: ICredentials[] = state.students;
    return { ...state, isLoading: false, error: '', students: arr};
}

const registerFailed = (state = initialState, action: AnyAction) => {
    
    return { ...state, isLoading: false, error: action.payload,  };
}

const result = (state = initialState, action: AnyAction) => {
    console.log("changing the state");
    console.log("result");
    console.log(action.payload);
    state.students[state.students.length-1].result = action.payload;
    let arr: ICredentials[] = state.students;
    return { ...state, isLoading: false, error: '', students: arr };
}

const REGISTER_HANDLERS = {
    [STUDENT_REGISTER]: doRegister,
    [STUDENT_REGISTER_SUCCESS]: registerSuccess,
    [STUDENT_REGISTER_ERROR]: registerFailed,
    [STUDENT_RESULT]: result,
}

// 


const SignupReducer: Reducer<studentState> = createReducer(initialState, REGISTER_HANDLERS);
export {  SignupReducer  };