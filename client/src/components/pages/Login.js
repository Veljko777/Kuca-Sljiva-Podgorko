import React from "react";
import LoginForm from "./forms/loginForm";
import {findAccount} from "../../actions/index";
import {connect} from "react-redux";
import Header,{cartNum} from "./header";
import Footer from "./footer";
import {Link} from "react-router-dom";

class Login extends React.Component{
    onSubmit=(formValues)=>{
        this.props.findAccount(formValues)
        
     
    }
    render(){
        return (
            <div className="wrapper">
                <Header/>
                <div className="logo ">
                    <Link to="/" className="p-0 m-0 pl-2">Podgorko</Link>
                    <p className="p-0 m-0 pl-4">Savršen ukus prirode</p>
                </div>
                <div className="body container">
                    <nav className="navbar navbar-expand-xl navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto" id="nav">
                            <li className="nav-item ">
                                <Link className="nav-link"  to="/">Početna</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/about">O nama</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/products">Proizvodi</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/news">Novosti</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/contact">Kontakt</Link>
                            </li>
                            </ul>
                        </div>
                        <Link className=""  to="/cart"><i className="fa fa-shopping-cart fa-2x shop-icon">{cartNum()}</i></Link>
                    </nav>
                </div>
                <hr className="m-0 p-0"></hr>
                <div className="body1 container mb-5 pt-5 pb-5">
                    <div className="row">
                        <div className="col-md-9">
                        </div>
                        <div className="col-md-3 ">
                            <h1>Uloguj se</h1>
                            <LoginForm onSubmit={this.onSubmit}/>
                        </div>
                    </div>
                    
                </div>
                <Footer/>
            </div>
        )
    }
}
export default connect(null, {findAccount}) (Login);