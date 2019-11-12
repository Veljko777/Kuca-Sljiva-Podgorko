import axios from "../apis/axios";
import history from "../history";
import {SIGN_IN,
        CREATE_ACCOUNT,
        FIND_ACCOUNT,
        SUBMIT_MESSAGE,
        FETCH_PRODUCTS,
        FETCH_PRODUCT,
        CREATE_COMMENT,
        FETCH_COMMENTS} from "./types"

export const createAccount=formValues=>async(dispatch)=>{
        const response=await axios.post("/createaccount", {formValues});
        dispatch({type:CREATE_ACCOUNT, payload:response})
        if(response.data==="Email already exists"){
                alert("email already exists")
        }if(response.data==="ok"){
                history.push("/login")
        }
}

export const findAccount=formValues=>async(dispatch)=>{
        const response=await axios.post("/login", {formValues})
        dispatch({type:FIND_ACCOUNT, payload:response.data})
        if(response.data.auth===true){
                localStorage.setItem("token", response.data.token)
                history.push("/");
        }if(response.data.auth===false){
                alert("email or password was incorrect")
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

export const fetchProducts=()=> async(dispatch)=>{
        const response=await axios.get("/products");
        dispatch({type:FETCH_PRODUCTS, payload:response.data})
}

export const fetchProduct=(id)=>async dispatch=>{
        const response=await axios.get(`/products/${id}`);
        dispatch({type:FETCH_PRODUCT, payload:response.data})
}

export const createComment=(formValues, productID)=>async(dispatch)=>{
        const response=await axios.post("/createcomment", {formValues, productID});
        dispatch({type:CREATE_COMMENT, payload:response})
        if (response.data==="ok"){
                alert("Vas komentar je kreiran")
                window.location.reload()
                

        }
}

export const fetchComments=(id)=> async(dispatch)=>{
        const response=await axios.get(`/comments/${id}`);
        dispatch({type:FETCH_COMMENTS, payload:response.data})
}