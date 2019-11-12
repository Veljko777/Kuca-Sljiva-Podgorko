import React from "react";
import {Link} from  "react-router-dom"
import {connect} from "react-redux"
import {signIn, submitMessage} from "../../actions"
import ContactUsForm from "./forms/contactUsForm"
import Header from "./header"


class Contact extends React.Component{
    submitForm=(formValues)=>{
        this.props.submitMessage(formValues);
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
                                <Link className="nav-link" to="/recipes">Recepti</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" id="active" to="/contact">Kontakt</Link>
                            </li>
                            </ul>
                            
                       </div>
                       <Link className=""  to="/cart"><i className="fa fa-shopping-cart fa-2x shop-icon"></i></Link>
                   </nav>
                   </div>
                   <hr className="m-0 p-0"></hr>
                   <div className="body1 container mb-5 pt-5">
                   
                   <div className="row">
                        <div className="col-md-6 pl-5 pr-5">
                            <h1>BELFARMA d.o.o. Belotić </h1>
                            <h5>Direktno: Snežana Ranković</h5>
                            <h5>Adresa: Belotić bb 14253 Osečina</h5>
                            <h5>Kontakt telefon: +381 69 401 3564</h5>
                            <h5>email: office@belfarma.rs</h5>
                            <h5>email: belfarma5@gmail.com</h5>
                            <h5>Posetite nas:</h5>
                            <a href="https://www.instagram.com/kucasljivapodgorko/" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram fa-lg pr-3" style={{color:"white"}}></i></a>
                            <a href="https://www.facebook.com/Podgorko/" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-square fa-lg" style={{color:"white"}}></i></a>
                            <div className="mt-3">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d532524.2260392295!2d19.583691469871958!3d44.246988020120924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475983046eb4cde1%3A0x1cb9fe370547b594!2z0JHQtdC70L7RgtC40Zs!5e0!3m2!1ssr!2srs!4v1573134152369!5m2!1ssr!2srs" 
                                width="250" height="200" frameBorder="0" style={{border:"0"}} allowFullScreen=""></iframe>
                            </div>
                            <div className="mt-5">
                                <h4>Prodajna mesta</h4>
                                <h5>Kuća šljiva Podgorko, Loznica</h5>
                                <h5>Vojvode Mišića br.2 lokal br.3 15300 Loznica</h5>
                            </div>
                        </div>
                        <div className="col-md-6  pr-5 pl-5 mt-5">
                            <h3 className="text-center">Kontaktirajte nas</h3>
                            <ContactUsForm onSubmit={this.submitForm}/>
                        </div>
                        <div className="message" >Poruka je poslata</div>
                        <div className="name-input" >Unos brojeva nije dozvoljen</div>
                    </div>
               </div>
               <footer className="footer">
                    <div>
                        <div className="logo text-center">
                            <a  href="http://www.belfarma.rs" rel="noopener noreferrer" target="_blank">BELFARMA d.o.o.</a>
                        </div>
                    </div>
                    <div className="text-right pr-2 footerend">
                        <p className="mb-0">&copy; 2019. Belfarma. Sva prava zadržana</p>
                    </div>
                    
                </footer>
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        token:state.user.token,
        user:state.user
    };
}

export default connect(mapStateToProps, {signIn, submitMessage}) (Contact);