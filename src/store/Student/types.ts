

export const STUDENT_REGISTER = 'USER_LOGIN';
export const STUDENT_REGISTER_SUCCESS = 'USER_LOGIN_SUCCESS';
export const STUDENT_REGISTER_ERROR = 'USER_LOGIN_ERROR';

export interface ICredentials{
    nom: string,
    prenom: string,
    tel: string,
    email: string,
}


interface StudentRegisterAction {
    type: typeof STUDENT_REGISTER,
    payload: ICredentials;
}
  
interface StudentRegisterSuccessAction {
    type: typeof STUDENT_REGISTER_SUCCESS
    payload: string
}
  
interface StudentRegisterErrorAction {
    type: typeof STUDENT_REGISTER_ERROR
    payload: string
}
  

export type  registerActionsType = StudentRegisterAction 
| StudentRegisterSuccessAction 
| StudentRegisterErrorAction;



