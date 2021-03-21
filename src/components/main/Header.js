import React , { useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../actions/loginActions';
import { LoginContext } from "../../context/LoginContext";
import { deleteUserFromCookie } from '../../cookies/cookies';

const Header=()=>{
    const {userData,loginDispatch}=useContext(LoginContext)
    console.log(userData)
    return (    
        <div className="header">
            <div className="header__nav">
                <NavLink activeClassName="header__active-link" className="home-nav" to="/home"> Home</NavLink>
                {!userData.data?.token?<NavLink activeClassName="header__active-link" className="home-nav" to="/login"> Login</NavLink>:
                <NavLink onClick={()=>{
                    deleteUserFromCookie()
                    loginDispatch(logoutUser())
                }} activeClassName="header__active-link" className="home-nav" to="/logout"> Logout</NavLink>}
                <div>
                </div>
            </div>
        </div>
    )
}

export default Header