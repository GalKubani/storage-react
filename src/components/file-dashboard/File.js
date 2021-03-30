import React ,{useContext} from 'react'
import { FileContext } from '../../context/FileContext';
import { LoginContext } from "../../context/LoginContext";
import { removeFileFromDB , getFileFromDB} from '../../server/db';
import {removeFileAction} from '../../actions/fileActions';

const File=({file})=>{
    const URL=`http://localhost:2020/get-file/`
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
    const DownloadFile= async (e)=>{
        e.preventDefault()
        const link= document.createElement('a')
        link.href= e.target.parentElement.children[0].src
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div>
            <img src={URL + `?key=${file.key}&name=${file.originalName}`} alt="" />
            <button onClick={RemoveFile}>Remove</button>
            <button onClick={DownloadFile}>Download</button>
        </div>
    );
}

export default File