import React from "react";
import {Link} from  "react-router-dom"
import Header,{cartNum} from "./header"
import Footer from "./footer"

class Recipes extends React.Component{
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
                                <Link className="nav-link" id="active" to="/news">Novosti</Link>
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
                   <div className="body1 container mb-5 pt-5">
                   <div className="pb-5">
                       <div className="news mb-5 mr-5 ml-5">
                       <div className="row mb-5">
                            <div className="col-md-6">
                                <img src="/images/slikaradnjeNoviSad.jpg" alt="" style={{width:"100%"}}></img>
                            </div>
                            <div className="col-md-6">
                                <h1>Novo prodajno mesto</h1>
                                <p>Savršen ukus prirode sada i u Novom Sadu</p>
                                <p>Svoje omiljene proizvode sada možete naći i u radnji "The Mother", ul. Nikole Pašića br. 23.</p>
                                <p>Požurite po svoju teglicu</p>
                            </div>
                            </div>
                            <div className="gallery">
                                <img className="slider-img" src="/images/slikaradnjeNoviSad1.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeNoviSad.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeNoviSad2.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeNoviSad1.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeNoviSad.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeNoviSad2.jpg" alt=""></img>

                            </div>
                            </div>
                            <div className="news mb-5 mr-5 ml-5">
                            <div className="row mb-5">
                                <div className="col-md-6">
                                    <h1>Naše prvo prodajno mesto</h1>
                                    <p>Otvoreno prvo prodajno mesto preduzeća Belfarma. </p>
                                    <p>Loznica je naš prvi i logičan izbor, zbog svoje tradicije koja ukazuje na stare
                                    domaće proizvode. Kod nas možete naći veliki broj tradicionalnih proizvoda, od kojih posebno izdvajamo 
                                    slatko od suvih šljiva punjenih orasima kao naš najekskluzivniji proizvod.
                                    </p>
                                    <p>Posetite nas u Loznici, Vojvode Mišića br. 2 lokal br. 3, 15300 Loznica</p>
                                </div>
                                <div className="col-md-6">
                                    <img src="/images/6.jpg" alt="" style={{width:"100%"}}></img>
                                </div>
                            </div>
                            <div className="gallery">
                                <img className="slider-img" src="/images/slikaradnjeLoznica16.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeLoznica15.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeLoznica14.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeLoznica12.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeLoznica10.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeLoznica2.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeLoznica6.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeLoznica7.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeLoznica4.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeLoznica11.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeLoznica1.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeLoznica3.jpg" alt=""></img>
                                <img className="slider-img" src="/images/slikaradnjeLoznica9.jpg" alt=""></img>
                            </div>
                        </div>
                    </div>
               </div>
               <Footer/>
            </div>
        )
    }
}

export default Recipes;