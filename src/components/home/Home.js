import React , { useContext} from 'react'
import { LoginContext } from '../../context/LoginContext';
import Dashboard from '../file-dashboard/Dashboard';


const Home=()=>{
    
    const { userData,loginDispatch } = useContext(LoginContext);
    return(
    <div className="home">
        {!userData.data?.token?<p>Please login or subscribe</p> : <Dashboard /> }
    </div>
)}

export default Home