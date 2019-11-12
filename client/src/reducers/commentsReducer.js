import _ from "lodash"
import {CREATE_COMMENT, FETCH_COMMENTS} from "../actions/types"



export default(state={}, action)=>{
    switch(action.type){
        case CREATE_COMMENT:
            return{...state}
        case FETCH_COMMENTS:
            return{..._.mapKeys(action.payload, "ID")}
        default:
            return state;
    }
}