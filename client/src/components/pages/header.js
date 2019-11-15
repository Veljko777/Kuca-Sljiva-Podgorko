import React from "react";
import {Link} from  "react-router-dom"
import {connect} from "react-redux"
import {signIn} from "../../actions"

export const cartNum=()=>{
    let value=0
    const data=JSON.parse(localStorage.getItem("cart"))
    if(data!== null){
        data.map(item=>{
           return value++
        })
        if (value!==0){
            return <span className="cart-num" >{value}</span>
        }else {
            return null
        }
    }else{
        return null
    } 
}

class Header extends React.Component{
    componentDidMount(){
        const token=localStorage.getItem("token")
         this.props.signIn(token) 
    }
    logOut(){
        localStorage.removeItem("token")
        window.location.reload()
    }
    isLoggedIn(){
        if(this.props.user.isSignedIn===true){
            return(
                <div className="float-right account-header pr-2 mt-1">
                    <Link to="/">{this.props.user.user.user.username} </Link>
                    <Link to="#" id="logout-btn" title="Odjavite se" onClick={this.logOut}><i className="fa fa-sign-out"></i></Link>
                </div>
            )
        }else{
            return(
                <div className="float-right account-header pr-2 mt-1">
                    <Link id="login-btn" title="Prijavite se" to="/login"><i className="fa fa-user"></i></Link>
                    <Link id="createaccount-btn" title="Kreirajte nalog" to="/createaccount"><i className="fa fa-user-plus"></i></Link>
                </div>
            )
        }
    }
    render(){
        return <div>{this.isLoggedIn()}</div>  
    }
}
const mapStateToProps=(state)=>{
    return{
        token:state.user.token,
        user:state.user
    };
}

export default connect(mapStateToProps, {signIn}) (Header);