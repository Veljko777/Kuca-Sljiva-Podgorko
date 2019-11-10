import React from "react";
import {Field, reduxForm} from "redux-form"

class CreateAccForm extends React.Component{

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
                    <Field name="name" component={this.renderInput_text} label="Ime i prezime:"/>
                    <Field name="address" component={this.renderInput_text} label="Adresa:"/>
                    <Field name="postal_code" component={this.renderInput_text} label="Poštanski broj:"/>
                    <Field name="city" component={this.renderInput_text} label="Grad:"/>
                    <Field name="phone" component={this.renderInput_text} label="Telefon:"/>
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
    if(!formValues.name){
        errors.name="Obavezno polje"
    }
    if(!formValues.password){
        errors.password="Obavezno polje"
    }
    if(!formValues.address){
        errors.address="Obavezno polje"
    }
    if(!formValues.postal_code){
        errors.postal_code="Obavezno polje"
    }
    if(!formValues.city){
        errors.city="Obavezno polje"
    }
    if(!formValues.phone){
        errors.phone="Obavezno polje"
    }
    if(!formValues.email){
        errors.email="Obavezno polje"
    }
    
    return errors;
}

export default reduxForm({ form:"CreateAccForm", validate}) (CreateAccForm);