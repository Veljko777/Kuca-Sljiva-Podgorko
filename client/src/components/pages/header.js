import React from "react";
import {Link} from  "react-router-dom"
import {connect} from "react-redux"
import {signIn} from "../../actions"

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
                    <Link to="#" id="logout-btn" title="Odjavite se" onClick={this.logOut}><i class="fa fa-sign-out"></i></Link>
                </div>
            )
        }else{
            return(
                <div className="float-right account-header pr-2 mt-1">
                    <Link id="login-btn" title="Prijavite se" to="/login"><i class="fa fa-user"></i></Link>
                    <Link id="createaccount-btn" title="Kreirajte nalog" to="/createaccount"><i class="fa fa-user-plus"></i></Link>
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