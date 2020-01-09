import axios from 'axios'
import { ICredentials } from '../store/Student/types';

const endPoint: string = 'http://localhost:3005/users/';
const headersOptions: {} = { headers: { "Content-Type": "application/x-www-form-urlencoded" } };
 
const login = (code: string) => {
    let params = new URLSearchParams();
    params.append('code', code );
    console.log(code + 'Action fired');
    return axios.post(endPoint+'signin', params, headersOptions);
};
const signUp = (user:ICredentials) => {
    let params = new URLSearchParams();
    //params.append('code', code );
    console.log(  'Action fired');
    return axios.post(endPoint+'signin', params, headersOptions);
};


export const appService = {
    login,
    signUp
};