import { loginState, studentState, surveryState } from "./types";
import { combineReducers } from "redux";
import { LoginReducer } from "./Login/reducer";
//import { StudentReducer } from "./Student/reducer";
//import { SurveyReducer } from "./Survey/reducer";
import { connectRouter } from "connected-react-router";
import { History } from "history";


export interface ApplicationState {
    login: loginState,
    //student: studentState,
   // survey: surveryState,
}

export const RootReducer = (history: History) => combineReducers({
    login: LoginReducer,
   // student: SignupReducer,
   // survey: PasswordForgottenReducer,
    router: connectRouter(history),
});