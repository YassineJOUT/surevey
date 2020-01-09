import { action } from 'typesafe-actions';
import { ICredentials,USER_LOGIN,USER_LOGIN_ERROR,USER_LOGIN_SUCCESS,LoginActionsType } from './types';
import { history } from '../../utilities/history';
import { Dispatch } from 'redux';
import { appService } from '../../Services/app.service'


// user login
export const userLogin = (code: string): LoginActionsType => {
   return action(
    USER_LOGIN,
    code
)}
;
export const userLoginSuccess = (code: string,token: string): LoginActionsType => action(
    USER_LOGIN_SUCCESS,
    {code,token}
);
export const userLoginError = (errorMsg: string): LoginActionsType => action(
    USER_LOGIN_ERROR,
    errorMsg
);

export const login = (code: string) => {
    return (dispatch: Dispatch<LoginActionsType>) => {
        
        console.log('login Dispatched');
        dispatch(userLogin(code));
        appService.login(code).then(
            u => {
                console.log('Login success dispatched');
                console.log(u);
                dispatch(userLoginSuccess(u.data.code,u.data.token));
                history.push('/student');
            }
        ).catch(err => {
            console.log('login error dispatched');
            console.log(err);
            dispatch(userLoginError('Login was unsucceeded'));
        });

        }
}