import React from "react";
import LoginForm from "./forms/loginForm"
import {findAccount} from "../../actions/index"
import {connect} from "react-redux"

class Login extends React.Component{
    onSubmit=(formValues)=>{
        this.props.findAccount(formValues)
        
     
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                    </div>
                    <div className="col-md-3 ">
                        <h1>Log in</h1>
                        <LoginForm onSubmit={this.onSubmit}/>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
export default connect(null, {findAccount}) (Login);