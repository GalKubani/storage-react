import React ,{useContext} from 'react'
import { FileContext } from '../../context/FileContext';
import { LoginContext } from "../../context/LoginContext";
import { removeFileFromDB } from '../../server/db';
import {removeFileAction} from '../../actions/fileActions';

const File=({file})=>{
    const URL=`https://storage-bucket-kuba.s3-eu-west-1.amazonaws.com/get-file/`
    const {userData}=useContext(LoginContext)
    const {fileDispatch}= useContext(FileContext);
    const RemoveFile=(e)=>{
        e.preventDefault()
        removeFileFromDB(file._id,file.key,userData.data.token).then(()=>{
            fileDispatch(removeFileAction({
                file,
                id:file._id
            }))
        })
    }
    return (
        <div>
            <img src={URL+userData.data.user.email+ `?key=${file.key}&name=${file.originalName}`} alt="" />
            <button onClick={RemoveFile}>Remove</button>
        </div>
    );
}

export default File