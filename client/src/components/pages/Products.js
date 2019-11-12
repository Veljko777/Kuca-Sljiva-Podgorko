import React from "react";
import {Link} from "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import {fetchProducts} from "../../actions/index"
import {connect} from "react-redux";

class Products extends React.Component{
    componentDidMount(){
        this.props.fetchProducts();
    }
    renderProduct(){
        return this.props.products.map(product=>{
            return(
                <div key={product.productID}>
                    <div className="grid-card">
                        <Link className="product-link" to={`/products/specification${product.name}/${product.productID}`}>
                            <img className="card-img" src={product.image_src} alt=""></img>
                            <h5 className="text-center">{product.name}</h5>
                        </Link>
                        <div className="text-left">
                            <p className="m-0">{product.pack}</p>
                            <p className="m-0">{product.package}</p>
                            <p className="m-0 mb-5">Cena: {product.price} din.</p>
                        </div>
                        <button onClick={()=>console.log(product)} className=" button mb-2"><i className="fa fa-shopping-cart fa-lg "></i> Dodaj u korpu</button>
                    </div>
                </div>
            )}
        )
    }
    renderHelper(){
        return(
            <div className="text-center">
                <div className="grid-container">
                {this.renderProduct()}
                </div>
            </div>
        )
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
                                <Link className="nav-link" id="active" to="/products">Proizvodi</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/recipes">Recepti</Link>
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
                    <div>
                        <h1>Naš asortiman</h1>
                        {this.renderHelper()}
                    </div>
               </div>
               <Footer/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        products: Object.values(state.products)
    }
}
export default connect (mapStateToProps,{fetchProducts}) (Products);