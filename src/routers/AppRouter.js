import React from 'react'
import {BrowserRouter, Switch,Route,Redirect} from 'react-router-dom'
import Home from '../components/home/Home'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'
import PageNotFound from '../components/main/PageNotFound'
import LoginContextProvider from '../context/LoginContext';
import LoginRoute from './LoginRouter';
import LoginPage from '../components/login/loginPage';
import Dashboard from '../components/file-dashboard/Dashboard'
import AddFile from '../components/file-dashboard/Addfile'
import Files from '../components/file-dashboard/Files'
import SubscribeForm from '../components/login/subscribe'

const AppRouter=()=>(
    <BrowserRouter>
        <LoginContextProvider>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home"/>
                </Route>
                <Route path="/home" component={Home} />
                <Route path="/login" component={ LoginPage } />
                <LoginRoute path="/logout" component={ Home } />
                <LoginRoute path="/dashboard" component={ Dashboard } />
                <LoginRoute path="/addfile" component={ AddFile } />
                <LoginRoute path="/files" component={ Files } />
                <Route path="*" component={PageNotFound} />
            </Switch>
            <Footer />
        </LoginContextProvider>
    </BrowserRouter>
)

export default AppRouter