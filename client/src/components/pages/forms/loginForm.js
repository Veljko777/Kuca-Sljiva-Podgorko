import React from "react";
import {Field, reduxForm} from "redux-form"



class LoginForm extends React.Component{
    renderError({error, touched}){
        if(touched && error){
            return (
                <p className="pt-0 mt-0" style={{color:"red"}}><small>*{error}</small></p>
            )
        }
    }

    renderInput_text=({input, label, meta})=>{
        return(
            <div className="form-group">
                <label>{label}</label>
                <input className="form-control" type="text" {...input} autoComplete="off"></input>
                {this.renderError(meta)}
            </div>
        )
    }
    
    renderPassword=({input, label, meta})=>{
        return(
            <div className="form-group">
                <label>{label}</label>
                <input className="form-control" {...input} autoComplete="off" type="password"></input>
                {this.renderError(meta)}
            </div>
        )
    }
    


    onSubmit=(formValues)=>{
        this.props.onSubmit(formValues)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="email" component={this.renderInput_text} label="Email:"/>
                    <Field name="password" component={this.renderPassword} label="Šifra:"/>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}

const validate =(formValues)=>{
    const errors={};
    if(!formValues.email){
        errors.email="Obavezno polje"
    }
    if(!formValues.password){
        errors.password="Obavezno polje"
    }

    return errors;
}

export default reduxForm({ form:"LoginForm", validate}) (LoginForm);