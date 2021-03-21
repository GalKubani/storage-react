import React from 'react'
import {BrowserRouter, Switch,Route,Redirect} from 'react-router-dom'
import Home from '../components/home/Home'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'
import PageNotFound from '../components/main/PageNotFound'
import LoginContextProvider from '../context/LoginContext';
import LoginRoute from './LoginRouter';
import LoginPage from '../components/login/loginPage';

const AppRouter=()=>(
    <BrowserRouter>
        <LoginContextProvider>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home"/>
                </Route>
                <Route path="/home" component={Home} />
                <LoginRoute path="/login" component={ LoginPage } />
                <LoginRoute path="/logout" component={ Home } />
                <Route path="*" component={PageNotFound} />
            </Switch>
            <Footer />
        </LoginContextProvider>
    </BrowserRouter>
)

export default AppRouter