
import { action } from 'typesafe-actions';
import { ICredentials,STUDENT_REGISTER,STUDENT_REGISTER_SUCCESS,STUDENT_REGISTER_ERROR, registerActionsType } from './types'
import { history } from '../../utilities/history';
import { Dispatch } from 'redux';
import { appService } from '../../Services/app.service'
// user registration


export const userSignUp = (credentials: ICredentials): registerActionsType => {
   return action(
    STUDENT_REGISTER,
    credentials
)}
;
export const userSignUpSuccess = (successMsg: string): registerActionsType => action(
    STUDENT_REGISTER_SUCCESS,
    successMsg
);
export const userSignUpError = (errorMsg: string): registerActionsType => action(
    STUDENT_REGISTER_ERROR,
    errorMsg
);
export const register = (user:ICredentials) => {
    return (dispatch: Dispatch<registerActionsType>) => {
       
        console.log('login Dispatched');
        dispatch(userSignUp(user));
        const resultset = appService.signUp(user);
        if(resultset.success){
                dispatch(userSignUpSuccess('message'));
                history.push('/survey');
        }
        else{
            dispatch(userSignUpError('sign un unsucceeded'));
        }
                

        }
}