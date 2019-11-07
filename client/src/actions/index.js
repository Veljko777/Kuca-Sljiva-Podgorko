import axios from "../apis/axios";
import history from "../history";
import {SIGN_IN,
        CREATE_ACCOUNT,
        FIND_ACCOUNT,
        SUBMIT_MESSAGE} from "./types"

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

       
export const submitMessage=formValues=>async(dispatch)=>{
        const response=await axios.post("/contactus", {formValues})
        .then(()=>
        document.querySelector(".message").classList.add('messageinfo')
        )
        .then(()=>setTimeout(function(){
                document.querySelector(".message").classList.remove('messageinfo');
        }, 5000))
        .catch(err=>{console.log(err)})
        dispatch({type:SUBMIT_MESSAGE, payload:response})
}
