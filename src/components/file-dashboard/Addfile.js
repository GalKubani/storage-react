import React,{useContext} from 'react'
import { FileContext } from '../../context/FileContext';
import { LoginContext } from '../../context/LoginContext';
import { postFileInDB } from '../../server/db';

const AddFile=()=>{
    const {userData}=useContext(LoginContext)
    const {fileDispatch}= useContext(FileContext);
    const onSubmit = (event) => {
        const file = event.target.children[0].children[1].files[0];
        if(!file){
            event.preventDefault()
            return
        }
        const formData= new FormData()
        formData.append("file",file)
        postFileInDB(formData,userData.data.token)
        .then(res=>{
            fileDispatch(({
                res
            }));
            })
    };
    
    return(
    <form onSubmit={ onSubmit }>
            <div className="message-input">
                <p>Welcome to our storage service, here you can manage your files freely and in a secure fashion</p>
                <input name="file" type="file"/>
                <button type="submit">Add</button>
            </div>
        </form>
)}

export default AddFile