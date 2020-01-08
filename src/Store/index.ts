//import { loginState, registerState, PasswordForgottenState, PasswordResetState } from "./types";
import { combineReducers } from "redux";
/*import { LoginReducer } from "./Login/reducer";
import { PasswordForgottenReducer } from "./PasswordForgotten/reducer";
import { SignupReducer } from "./Registration/reducer";
import { resetPasswordReducer } from "./ResetPassword/reducer";*/
import { connectRouter } from "connected-react-router";
import { History } from "history";


export interface ApplicationState {
    login: loginState,
    student: registerState,
    survey: PasswordForgottenState,
}

export const RootReducer = (history: History) => combineReducers({
    login: LoginReducer,
    student: SignupReducer,
    survey: PasswordForgottenReducer,
    router: connectRouter(history),
});