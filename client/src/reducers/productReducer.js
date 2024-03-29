import _ from "lodash"
import {FETCH_PRODUCTS, FETCH_PRODUCT} from "../actions/types"



export default(state={}, action)=>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return{...state, ..._.mapKeys(action.payload, "productID")}
        case FETCH_PRODUCT:
            return{...state, [action.payload.productID]: action.payload}
        default:
            return state;
    }
}