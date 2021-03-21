import React,{useContext} from 'react'
import { FileContext } from '../../context/FileContext';
import { postFileInDB } from '../../server/db';

const AddFile=()=>{
    
    const {fileDispatch}= useContext(FileContext);
    const onSubmit = (event) => {
        event.preventDefault();
        const file = event.target.children[0].children[0].files[0];
        const formData= new FormData()
        formData.append("file",file)
        postFileInDB(formData)
        .then(res=>{
            fileDispatch(({
                res
            }));
            })
    };
    
    return(
    <form onSubmit={ onSubmit }>
            <div className="message-input">
                <input name="file" type="file"/>
                <button type="submit">Add</button>
            </div>
        </form>
)}

export default AddFile