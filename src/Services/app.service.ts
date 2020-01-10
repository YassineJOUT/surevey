import { ICredentials } from '../store/Student/types';
import { log, logUser } from './app.data';

 
const login = (code: string) => {
    console.log(code);
    if(log === code){
        return {success: true, isAdmin: true};
    }
    else if(logUser === code){
        return {success: true, isAdmin: false};

    }
    else{
        return {success: false, isAdmin: false};
    }
    //r//eturn axios.post(endPoint+'signin', params, headersOptions);
};
const signUp = (user:ICredentials) => {
    console.log(user);
   return {success: true};
};
const studentSurvey = (result : string) => {
    let params = new URLSearchParams();
    //params.append('code', code );
   // console.log(  'Action fired');
    //return axios.post(endPoint+'signin', params, headersOptions);

   // store UserData
   return {success: true};
};


export const appService = {
    login,
    signUp,
    studentSurvey
};