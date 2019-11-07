import axios from "../apis/axios";
import history from "../history";
import {SIGN_IN,
        CREATE_ACCOUNT,
        FIND_ACCOUNT} from "./types"

export const createAccount=formValues=>async(dispatch)=>{
        const response=await axios.post("/createaccount", {formValues});
        dispatch({type:CREATE_ACCOUNT, payload:response})
        history.push("/")
        
}

export const findAccount=formValues=>async(dispatch)=>{
        const response=await axios.post("/login", {formValues})
        dispatch({type:FIND_ACCOUNT, payload:response.data})
        if(response.data.auth===true){
                localStorage.setItem("token", response.data.token)
                history.goBack()
                
                
                
                
        }
}

export const signIn=(token)=> async(dispatch)=>{
        const response=await axios.post("/me",{token});
        dispatch({type:SIGN_IN, payload:response.data})
      
        
}

       
        
