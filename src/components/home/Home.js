import React , { useContext} from 'react'
import FileContextProvider from '../../context/FileContext';
import { LoginContext } from '../../context/LoginContext';
import Dashboard from '../file-dashboard/Dashboard';


const Home=()=>{
    
    const { userData } = useContext(LoginContext);
    console.log(userData)
    return(
    <div className="home">
        {!userData.data?.token?<p>Please login or subscribe</p> : 
        <FileContextProvider >
            <Dashboard /> 
        </FileContextProvider>
        }
    </div>
)}

export default Home