import React from "react";
import {Link} from  "react-router-dom"
import {connect} from "react-redux"
import {signIn} from "../../actions"

class About extends React.Component{
    componentDidMount(){
        const token=localStorage.getItem("token")
         this.props.signIn(token) 
    }
    logOut(){
        localStorage.removeItem("token")
        
    }
    isLoggedIn(){
        if(this.props.user.isSignedIn===true){
            return(
                <div className="float-right account-header pr-2">
                    <Link to="/" onClick={this.logOut}>Log out</Link>
                </div>
            )
        }else{
            return(
                <div className="float-right account-header pr-2">
                    <Link  to="/login">Ulogujte se |</Link>
                    <Link to="/createaccount">Kreirajte nalog </Link>
                </div>
            )
        }
    }


    render(){
        return (
            <div className="wrapper">
                <div>{this.isLoggedIn()}</div>
                <div className="logo ">
                    <h1 className="p-0 m-0 pl-2 ">Podgorko</h1>
                    <p className="p-0 m-0 pl-4">Savršen ukus prirode</p>
                </div>
               <div className="body mb-5">
                   <nav className="navbar navbar-expand-lg navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
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
                                <Link className="nav-link" to="/">Recepti</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">Novosti</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">Kontakt</Link>
                            </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                       </div>
                   </nav>
                   <div>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    </div>
               </div>
               <footer className="footer">
                    <div>
                        <ul className="text-center mb-2">
                            <Link to="http://www.belfarma.rs" target="_blank"><img src="/images/logo.jpg" className="mb-3 mt-2" id="footer-logo"  alt=""/></Link>
                            <li><i className="fa fa-phone"></i> +381 69 401 3564</li>
                            <li><i className="fa fa-user"></i> Snežana Ranković</li>
                            <li><i className="fa fa-map-marker"></i> Belotić bb, 14 253 Osečina</li>
                            <li>email: office@belfarma.rs</li>
                        </ul>
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
export default connect(mapStateToProps, {signIn}) (About);