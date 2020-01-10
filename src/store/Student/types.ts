

export const STUDENT_REGISTER = 'USER_LOGIN';
export const STUDENT_REGISTER_SUCCESS = 'USER_LOGIN_SUCCESS';
export const STUDENT_REGISTER_ERROR = 'USER_LOGIN_ERROR';
export const STUDENT_RESULT = 'STUDENT_RESULT';

export interface ICredentials{
    nom: string,
    prenom: string,
    tel: string,
    email: string,
    result?: string
}


interface StudentRegisterAction {
    type: typeof STUDENT_REGISTER,
    payload: ICredentials;
}
  
export interface StudentRegisterSuccessAction {
    type: typeof STUDENT_REGISTER_SUCCESS
    payload: ICredentials
}
  
interface StudentRegisterErrorAction {
    type: typeof STUDENT_REGISTER_ERROR
    payload: string
}

interface StudentResultErrorAction {
    type: typeof STUDENT_RESULT
    payload: string
}
  

export type  registerActionsType = StudentRegisterAction 
| StudentRegisterSuccessAction 
| StudentRegisterErrorAction
| StudentResultErrorAction;



