import React from "react";
import {Link} from  "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import CreateOrderForm from "./forms/createOrderForm"
import {createOrder}from "../../actions"
import {connect}from "react-redux"

class Cart extends React.Component{
    onSubmit=(formValues)=>{
        const data=JSON.parse(localStorage.getItem("cart"))
        this.props.createOrder(formValues, data)
        
    }
    renderHelper(){
        const CART = {
            KEY: 'cart',
            contents: []
        }
         function sync(){
            let _cart = JSON.stringify(CART.contents);
            localStorage.setItem(CART.KEY, _cart);
        }
         function init(){
            let _contents = localStorage.getItem(CART.KEY);
            if(_contents){
                CART.contents = JSON.parse(_contents);
            }else{
                //dummy test data
                CART.contents = [];
                sync();
            }
        }
        const data=JSON.parse(localStorage.getItem("cart"))
        if(data=== null ){
            return <div className="pb-5">Nemate artikle u korpi</div>
        }else{
            return data.map(item=>{
                let total=item.price*item.qty
                return(
                    <div key={item.id} className="cart-item mb-3">
                        <h3>{item.name}</h3>
                        <h6>Količina: {item.qty} kom.</h6>
                        <h6>Cena: {item.price} din.</h6>
                        <br></br>
                        <h5>Ukupno: {total} din.</h5>
                        <button 
                        onClick={()=>{
                            init()
                            let selected=data.indexOf(item)
                            CART.contents.splice(selected, 1)
                            sync()
                            window.location.reload()                     
                            }} 
                        id="cancel-cart-btn" className="btn btn-outline-danger btn-sm">X</button>
                    </div>
                )
            })
        }
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
                       <Link className=""  to="/cart"><i className="fa fa-shopping-cart fa-2x active-shop-icon" ></i></Link>
                   </nav>
                   </div>
                   <hr className="m-0 p-0"></hr>
                   <div className="body1 container mb-5 pt-5">
                   <div className="row ml-3 mr-3">
                       <div className="col-md-6">
                       {this.renderHelper()}
                       </div>
                       <div className="col-md-6 pl-5 pr-5 pb-5">
                           <h2>Podaci za porudžbinu:</h2>
                            <CreateOrderForm onSubmit={this.onSubmit}/>
                       </div>
                    
                    </div>
               </div>
               <Footer/>
            </div>
        )
    }
}

export default connect(null, {createOrder})(Cart)