import React from "react";
import {Field, reduxForm} from "redux-form"

class CommentForm extends React.Component{


    renderRaiting=({input, label, meta})=>{
        return(
            <div className="form-group">
                <label>{label}</label>
                <input className="form-control" type="number" {...input} autoComplete="off"></input>
            </div>
        )
    }
    renderName=({input, label, meta})=>{
        return(
            <div className="form-group">
                <label>{label}</label>
                <input className="form-control" type="text" {...input} autoComplete="off"></input>
            </div>
        )
    }
    renderDescription=({input, label, meta})=>{
        return(
                <div>
                    <label>{label}</label>
                    <textarea rows="5" className="form-control" {...input} autoComplete="off"/>
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
                    <Field name="name" component={this.renderName} label="Vaša ime:"/>
                    <Field name="raiting" component={this.renderRaiting} label="Vaša ocena od 1-5:"/>
                    <Field name="description" component={this.renderDescription} label="Komentar:"/>
                    <button className="button mt-2">Submit</button>
                </form>
            </div>
        )
    }
}



export default reduxForm({ form:"CommentForm"}) (CommentForm);