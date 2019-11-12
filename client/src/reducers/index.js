import {combineReducers} from "redux";
import {reducer as formReducer}from "redux-form";
import userReducer from "./userReducer"
import productReducer from "./productReducer"
import commentsReducer from "./commentsReducer";

export default combineReducers({
    user:userReducer,
    products:productReducer,
    comments:commentsReducer,
    form:formReducer
})