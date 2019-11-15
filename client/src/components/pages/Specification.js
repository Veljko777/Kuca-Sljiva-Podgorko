import React from "react";
import {connect} from "react-redux";
import {fetchProduct, createComment, fetchComments} from "../../actions";
import {Link} from "react-router-dom"
import Header from "./header";
import {cartNum}from "./header"
import Footer from "./footer";
import CommentForm from "./forms/commentForm"



  
class Specification extends React.Component{
    
    

    
    componentDidMount(){
        this.props.fetchComments(this.props.match.params.id)
        this.props.fetchProduct(this.props.match.params.id)
    }
    renderNavbar(){
        return(
            <div>
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
                                <Link className="nav-link"  to="/products">Proizvodi</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/news">Novosti</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/contact">Kontakt</Link>
                            </li>
                            </ul>
                       </div>
                       <Link className=""  to="/cart"><i className="fa fa-shopping-cart fa-2x shop-icon"> {cartNum()}  </i></Link>
                   </nav>
                   </div>
                   <hr className="m-0 p-0"></hr>
            </div>
        )
    }
    renderComments(){
        if(this.props.comments==={}){
            return(
                <div>Loading...</div>
            )
        }else{
            return this.props.comments.map(comment=>{
                
                return(
                    <div key={comment.ID}>
                        <div className="comment-card">
                        <h5 className="text-center">Ocena: {comment.raiting}</h5>
                        <h6 className="text-right">Ime: {comment.name}</h6>
                        <p>{comment.description}</p>
                        </div>
                    </div>
            )}
        )}
    }
    onSubmit=(formValues, productID)=>{
        productID=this.props.product.productID
        this.props.createComment(formValues, productID)
    }
    renderBody(){
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
        return(
            <div className="body1 container mb-5 pt-5 pb-5">
                <div className="row product-specification pt-5">
                    <div className="col-md-6">
                        <h3 className="text-center mb-5">{this.props.product.name}</h3>
                        <p>Proizvodi: {this.props.product.manufacturer}</p>
                        <p>Pakovanje: {this.props.product.pack}</p>
                        <p>Ambalaža: {this.props.product.package}</p>
                        <br></br>
                        <h4 className="mt-5">Cena: {this.props.product.price} din.</h4>
                        <label>Količina: </label>
                        <input id="qty" className=" mb-3 ml-2" placeholder=" 0 kom"  type="number" required></input>
                        <button onClick={()=>{
                            if(document.querySelector("#qty").value === "" || document.querySelector("#qty").value <=0){
                                alert("Unesite kolicinu")
                            }else{
                                init()
                                let newData=this.props.product
                                let qty=document.querySelector("#qty").value
                                let maxID=0
                                if(!CART.contents){
                                    return null
                                }else{
                                    CART.contents.map(i=>{
                                        if(i.id>=maxID){
                                           return maxID=i.id
                                        }else{
                                            return null
                                        }
                                    })
                                }
                                    
                                
                                let number=maxID+1
                                let obj={
                                        id:number,
                                        productId:newData.productID,
                                        qty:qty,
                                        name:newData.name,
                                        price:newData.price

                                }
                                CART.contents.push(obj);
                                sync()
                                alert("Proizvod dodat u korpu")
                                window.location.reload()
                                }  

                            }} 
                        className=" button mb-2"><i className="fa fa-shopping-cart fa-lg "></i> Dodaj u korpu</button>
                        <h5 className="mt-5">Recite nam vaše iskustvo o našem proizvodu</h5>
                        <CommentForm onSubmit={this.onSubmit}/>
                    </div>
                    <div className="col-md-6">
                        <img className="mb-3" src={this.props.product.image_src} alt=""></img>
                        <h5>Opis:</h5>
                        <p>{this.props.product.description}</p>
                        <h5 className="mt-5 mb-3">Dosadašnja iskustva:</h5>
                        {this.renderComments()}
                    </div>
                </div>
            </div>
        )
    }

    render(){
        if(!this.props.product){
            return (
                <div>
                    {this.renderNavbar()}
                    <h1>Loading...</h1>
                </div>
                )
        }
        return(
            <div className="wrapper">
                <Header/>
                {this.renderNavbar()}
                {this.renderBody()}
                <Footer/>
            </div>
        )
    }
}
const mapStateToProprs=(state, ownProps)=>{
    return {product:state.products[ownProps.match.params.id],
            comments: Object.values(state.comments)}
}
export default connect(mapStateToProprs, {fetchProduct, createComment, fetchComments}) (Specification);