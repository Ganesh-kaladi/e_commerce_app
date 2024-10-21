import {useContext, createContext,useReducer} from 'react';
import { ReducerFunction } from '../reducerFunctions/loginreducer';

const initialState={
    email:'',
    password:'',
    token:''
}
const LoginContext = createContext();

const LoginProvider = ({children})=>{

    const [{email,password,token},dispatch]= useReducer(ReducerFunction,initialState)
    return(
        <LoginContext.Provider value={{email,password,token,dispatch}}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin = ()=>useContext(LoginContext);

export {useLogin,LoginProvider};