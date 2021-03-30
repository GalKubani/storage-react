import React , { useContext} from 'react'
import { LoginContext } from '../../context/LoginContext';
import AddFile from './Addfile';
import Files from './Files';


const Dashboard=()=>{
    
    const { userData,loginDispatch } = useContext(LoginContext);
    return(
    <div className="dashboard">
       <p>Hello {userData.data.user.name}</p> 
       <AddFile />
       <Files />
       
    </div>
)}

export default Dashboard