import React , { useContext} from 'react'
import { LoginContext } from '../../context/LoginContext';


const Dashboard=()=>{
    
    const { userData,loginDispatch } = useContext(LoginContext);
    return(
    <div className="dashboard">
       <p>Welcome {userData.data.user.name}</p> 
    </div>
)}

export default Dashboard