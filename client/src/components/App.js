import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import history from "../history"

import MainPage from "./pages/MainPage"
import About from "./pages/About";
import Products from "./pages/Products"
import Recepies from "./pages/Recipes"
import CreateAccount from "./pages/CreateAccount"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import News from "./pages/News"
import Cart from "./pages/Cart"

class App extends React.Component{
    render(){
        return(
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/about" exact component={About} />
                        <Route path="/products" exact component={Products} />
                        <Route path="/recipes" exact component={Recepies} />
                        <Route path="/news" exact component={News} />
                        <Route path="/createaccount" exact component={CreateAccount} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/cart" exact component={Cart} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;