import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Error from '../Pages/Error';
import Navbar from '../Component/Navbar';
import '../Styles/App.css';
import User from '../Component/User';
import Login from '../Component/Login';



const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/register" component={User} />
                <Route exact path="/login" component={Login} />
                <Route component={Error} />
            </Switch >
        </div>
    )
}

export default Routes;
