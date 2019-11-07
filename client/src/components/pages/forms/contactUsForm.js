import React from "react";
import {reset, Field, reduxForm} from "redux-form"



class ContactUsForm extends React.Component{
    onSubmit=(formValues,dispatch)=>{
        this.props.onSubmit(formValues);
        dispatch(reset("contactUsForm"))
    }

    renderError({error, touched}){
        if(touched && error){
            return (
                <p className="pt-0 mt-0" style={{color:"red"}}><small>*{error}</small></p>
            )
        }
    }

    
    renderName=({input,label,meta})=>{
        function preventNumbers(e){
            let keyCode=(e.keyCode ? e.keyCode : e.which);
            if((keyCode>47 && keyCode <58) || (keyCode>95 && keyCode<107)){
                e.preventDefault();
                
                document.querySelector(".name-input").classList.add('name-input-message')
                setTimeout(function(){
                    document.querySelector(".name-input").classList.remove('name-input-message');
                }, 2000)
            }
        }
        return(
            <div>
                <label>{label}</label>
                <input className="form-control " id="name-field" {...input} autoComplete="off" onKeyUp={preventNumbers} onKeyDown={preventNumbers}/>
                {this.renderError(meta)}
            </div>
        )
    }
    renderInput=({input,label,meta})=>{
        return(
            <div>
                <label>{label}</label>
                <input className="form-control" {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }
    renderEmail=({input,label,meta})=>{
        return(
            <div>
                <label>{label}</label>
                <input placeholder="email@example.com" type="email" className="form-control" {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }
    renderTextarea=({input,label,meta})=>{
        return(
            <div>
                <label>{label}</label>
                <textarea rows="10" className="form-control" {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="mb-3">
                <div className="form-group">
                    
                    <Field className="field" name="name"   component={this.renderName} label="Vaše ime i prezime:*"/>
                    
                </div>
                <div className="form-group">
                    <Field className="field" name="email"   component={this.renderEmail} label="Email:*"/>
                </div>
                <div className="form-group">
                    <Field className="field" name="phone"   component={this.renderInput} label="Telefon:"/>
                </div>
                <div className="form-group">
                    <Field className="field" name="subject"   component={this.renderInput} label="Tema:*"/>
                </div>
                <div className="form-group">
                    <Field className="textarea"  name="description"   component={this.renderTextarea} label="Poruka:*"></Field>
                </div>
                <h6 className="m-2 p-1 text-right">* Obavezno polje</h6>
                <button type="submit" className="btn submit-button mb-2">Pošalji poruku</button>
                
            </form>
        )
    }
}
const validate=(formValues)=>{
    const errors={};
    if(!formValues.name){
        errors.name="Obavezno polje"
    }
    if(!formValues.email){
        errors.email="Obavezno polje"
    }
    if(!formValues.subject){
        errors.subject="Obavezno polje"
    }
    if(!formValues.description){
        errors.description="Obavezno polje"
    }
    return errors;
}

export default reduxForm({form:"contactUsForm",
validate}) (ContactUsForm)



