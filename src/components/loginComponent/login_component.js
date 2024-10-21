import { useLogin } from "../../context/loginContext";
import {userLogin} from '../../api/getAuth'

export const Logincomponent = ()=>{
    const {dispatch,email,password} = useLogin();
    const onSubmitClick = async (e)=>{
        e.preventDefault();
        const data = await userLogin(email,password);
        console.log(data);

    }

    const emailText = (e)=>{
        dispatch({
            type:'EMAIL_TEXT',
            payload:{
                value:e.target.value
            }
        })
    }
    const passwordText = (e)=>{
        dispatch({
            type:'PASSWORD_TEXT',
            payload:{
                value:e.target.value
            }
        })
    }
    return(
        <div className="w-auto h-auto flex  flex-col bg-slate-50 rounded-md">
            <div className="flex flex-col px-4 py-2">
                <span>Email* :</span>
                <input type="email" required onChange={emailText} className="bg-slate-200 p-1 outline-none border-b rounded-sm"  />
            </div>
            <div className="flex flex-col px-4 py-2">
                <span>Password* :</span>
                <input type="password" required onChange={passwordText} className="bg-slate-200 p-1 outline-none border-b rounded-sm" />
            </div>
            <div className=" w-auto m-4 rounded-md bg-blue-300 flex justify-center">
                <button className=' px-2 py-1 rounded-md font-medium' onClick={onSubmitClick}>Login</button>
            </div>
        </div>
    )
}