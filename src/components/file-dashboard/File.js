import React ,{useContext} from 'react'
import { FileContext } from '../../context/FileContext';
import { LoginContext } from "../../context/LoginContext";
import { removeFileFromDB , getFileFromDB} from '../../server/db';
import {removeFileAction} from '../../actions/fileActions';
import fileLogo from '../../images/file.png'
import zipLogo from '../../images/winrar.png'
import downloadLogo from '../../images/download.svg'
import deleteLogo from '../../images/delete.png'


const File=({file})=>{
    const URL=`http://Storageserverkuba-env.eba-mwm2p54v.eu-central-1.elasticbeanstalk.com/get-file/`
    const {userData}=useContext(LoginContext)
    const {fileDispatch}= useContext(FileContext);
    let fileType=""
    for(let i=file.originalName.length-1;i>0;i--){
        if(file.originalName[i]==="."){
            i=0
            continue;
        }
        fileType=file.originalName[i]+fileType
    }
    const RemoveFile=(e)=>{
        e.preventDefault()
        let userConfirmation=window.confirm("Are you sure you want to remove this file?")
        if(!userConfirmation) return
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
    const setImageSrc=()=>{
        let src=""
        switch(fileType){
            default:
                src=fileLogo;break;
            case "zip": case "rar": src=zipLogo;break;
            case "jpg": case "jpeg": case "png": case "svg":
                src= URL + `?key=${file.key}&name=${file.originalName}`; break;
        }
        return src
    }
    return (
        <div>
            <p className="file-title">{file.originalName}</p>
            <div className="file-container">
                <img className="file" src={setImageSrc()} alt="" />
                <button onClick={DownloadFile}><img className="logo-button" src={downloadLogo} alt="Download"></img></button>
                <button onClick={RemoveFile}><img className="logo-button" src={deleteLogo} alt="Delete"></img></button>
            </div>
        </div>

        
    );
}

export default File