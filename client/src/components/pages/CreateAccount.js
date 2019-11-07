import React from "react";
import CreateAccForm from "./forms/createaccForm";
import {connect} from "react-redux"
import {createAccount} from "../../actions"


class CreateAccount extends React.Component{
    onSubmit=(formValues)=>{
        this.props.createAccount(formValues)
    }
    render(){
        console.log(this.props)
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-9">

                    </div>
                    <div className="col-md-3 ">
                        <h1>Kreiraj nalog</h1>
                        <CreateAccForm onSubmit={this.onSubmit}/>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default connect(null,{createAccount}) (CreateAccount);