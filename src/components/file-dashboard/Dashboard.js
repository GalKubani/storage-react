import React , { useContext} from 'react'
import { LoginContext } from '../../context/LoginContext';
import AddFile from './Addfile';
import Files from './Files';


const Dashboard=()=>{
    
    const { userData,loginDispatch } = useContext(LoginContext);
    return(
    <div className="dashboard">
       <p>Welcome {userData.data.user.name}</p> 
       <Files />
       <AddFile />
    </div>
)}

export default Dashboard