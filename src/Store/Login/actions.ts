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
)};

export const userLoginSuccess = (code: string,isAdmin: boolean): LoginActionsType => action(
    USER_LOGIN_SUCCESS,
    {code,isAdmin}
);

export const userLoginError = (errorMsg: string): LoginActionsType => action(
    USER_LOGIN_ERROR,
    errorMsg
);

export const login = (code: string) => {
    return (dispatch: Dispatch<LoginActionsType>) => {
        console.log('login Dispatched');
        dispatch(userLogin(code));
        const resultset = appService.login(code);
        console.log('resultset');
        console.log(resultset);
        if(resultset.success){
            console.log('Login success dispatched');
            dispatch(userLoginSuccess(code,resultset.isAdmin));
            if(resultset.isAdmin)
                history.push('/student');
            else
                history.push('/admin');
        }else{
            console.log('login error dispatched');
            
            dispatch(userLoginError('Login was unsucceeded'));
        }
           
            
       

        }
}
