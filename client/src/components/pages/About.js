import React from "react";
import {Link} from  "react-router-dom"
import Header from "./header"
import Footer from "./footer"

class About extends React.Component{
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
                                <Link className="nav-link" id="active" to="/about">O nama</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/products">Proizvodi</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/recipes">Recepti</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/news">Novosti</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/contact">Kontakt</Link>
                            </li>
                            </ul>
                            
                       </div>
                       <Link className=""  to="/cart"><i className="fa fa-shopping-cart fa-2x shop-icon"></i></Link>
                   </nav>
                   </div>
                   <hr className="m-0 p-0"></hr>
                   <div className="body1 container mb-5 pt-5 pb-5">
                       <div className="row">
                            <div className="col-md-3 aboutpage-side">
                                <img src="/images/6.jpg" alt=""></img>
                                <img src="/images/naslovna.jpg" alt=""></img>
                                <img src="/images/7.jpg" alt=""></img>
                                <img src="/images/coko sljiva.jpg" alt=""></img>
                                <img src="/images/4.jpg" alt=""></img>
                                <img src="/images/slika.jpg" alt=""></img>
                            </div>
                            <div className="col-md-6">
                                <div className="aboutpage">
                                    <div>
                                        <h2>Kratka biografija</h2>
                                        <p>
                                            2014. godine porodična firma Belfarma d.o.o, čija je glavna delatnost trgovina svežim i zamrznutim voćem,
                                            odlučuje se da započne proizvodnju suve šljive. Zapadna Srbija je poznata po kvalitetnoj
                                            proizvodnji suve šljive. Medjutim pored toga direktor firme Snežana Ranković ne želi da se naša
                                            proizvodnja suve šljive zadrži samo na suvoj šljivi kao sirovini, nego da ona postane finalni proizvod u različitim
                                            oblicima.
                                        </p>
                                    </div>
                                    <hr/>
                                    <div>
                                    <h2>Cilj</h2>
                                        <p>
                                            Cilj nam je da vratimo pravi kvalitet suve šljive i da ne dozvolimo da jedna od najzdravijih domaćih voćki padne u zaborav.
                                        </p>
                                    </div>
                                    <hr/>
                                    <div>
                                        <h2>Naše prve medalje za kvalitet</h2>
                                        <p>Prvi proizvod koji smo najduže usavršavali je slatko od suvih šljiva punjenih orasima.
                                            Trebalo nam je 3 godinne da usavršimo i proverimo kvalitet ovog proizvoda. Potvrda da smo uspeli
                                            je zlatna medalja za kvalitet na Medjunarodnom poljoprivrednom sajmu u Novom Sadu, 2017. godine.
                                        </p>
                                    <div className="text-center">
                                        <img   src="/images/medalja-sajam.png" alt=""></img>
                                    </div>
                                        <p className="">Drugi proizvod na koji smo takodje ponosni je čokoladirana suva šljiva punjena orasiam.
                                            Za razliku od slatkog od suvih sljiva, ovaj proizvod je već uveliko poznat tržištu.
                                            Postoji mnogo varijanti ovog proizvoda i glavna razlika je sam sastav i kvalitet čokolade.
                                            Mi smo se odlučili za skuplju varijantu ali kvalitet koji smo dobili od uvozne belgijske čokolade
                                            sa više od 70% kakaa zasigurno je opravdalo zlatnu medalju za kvalitet na Medjunarodnom poljoprivrednom sajmu u Novom Sadu 2018. godine.
                                        </p>
                                    </div>
                                    <hr/>
                                    <div>
                                        <h2> Prvo prodajno mesto</h2>
                                        <p>Posle 5 godina proizvodnje i velikim brojem pozitivnih ocena od konzumenata širom sveta odlučili smo da
                                            naše proizvode plasiramo na tržište. Značenje naziva "Kuća šljiva Podgorko" je da se pokuša vratiti
                                            pravo značenje šljive i da ljudi znaju da postoji mesto gde mogu naći šljive, suve šljive i proizvode od njih sa onim kvalitetom
                                            sa kojim ih pamtimo. Podgorko je naziv svih naših proizvoda, jer bitno je da se zna da su naši Proizvodi
                                            iz Zapadne Srbije, podgorski okrug, jer to je jedan od vodećih mesta za proizvodnju suve šljive u celoj Srbiji.
                                        </p>
                                    </div>
                                    <hr/>
                                    
                                </div>
                            </div>
                            <div className="col-md-3 aboutpage-side">
                                <img src="/images/1.jpg" alt=""></img>
                                <img src="/images/slatko.jpg" alt=""></img>
                                <img src="/images/3.jpg" alt=""></img>
                                <img src="/images/rakije.jpg" alt=""></img>
                                <img src="/images/5.jpg" alt=""></img>
                                <img src="/images/liker.jpg" alt=""></img>
                            </div>
                       </div>
                        
                    </div>
               <Footer/>
            </div>
        )
    }
}

export default About;