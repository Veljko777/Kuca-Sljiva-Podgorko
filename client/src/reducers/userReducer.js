import {SIGN_IN, CREATE_ACCOUNT, FIND_ACCOUNT} from "../actions/types"

const INITAL_STATE={
    isSignedIn: null,
    user:null,
    token:null
 
}

export default(state=INITAL_STATE, action)=>{
    switch(action.type){
        case SIGN_IN:
            return{...state, isSignedIn: action.payload.auth, user:action.payload}
        
        case CREATE_ACCOUNT:
            return{...state}
        case FIND_ACCOUNT:
            return{...state, auth:action.payload.auth, token:action.payload.token}
        default:
            return state;
    }
}