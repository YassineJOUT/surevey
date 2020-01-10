import { Reducer, AnyAction } from "redux";
import { STUDENT_SURVEY,STUDENT_SURVEY_ERROR,STUDENT_SURVEY_SUCCESS } from './types'
import { createReducer} from '../../utilities/ReducerHelper'
import { surveyState } from "../types";

const initialState: surveyState = {
    isLoading: false,
    result:'',
    score:[]
}
// Register

const doSurvey = (state = initialState, action: AnyAction) => {
    return {...state,isLoading: true};
}

const surveySuccess = (state = initialState, action: AnyAction) => {
    return { ...state, isLoading: false };
}

const surveyFailed = (state = initialState, action: AnyAction) => {
    return { ...state, isLoading: false };
}

const REGISTER_HANDLERS = {
    [STUDENT_SURVEY]: doSurvey,
    [STUDENT_SURVEY_SUCCESS]: surveySuccess,
    [STUDENT_SURVEY_ERROR]: surveyFailed,
}

// 


const SurveyReducer: Reducer<surveyState> = createReducer(initialState, REGISTER_HANDLERS);
export {  SurveyReducer  };