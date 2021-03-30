import React ,{useContext} from 'react'
import { FileContext } from '../../context/FileContext';
import File from './File'

const Files=()=>{
    
    const{fileState}=useContext(FileContext)
    return(
        <div>
            <div className="files-container">

            
            { fileState.files.length>0 &&  fileState.files.map((file)=>(
                <File key={file.key} file={ file } />
            ))
            }
            </div>
        </div>
    )}
    
export default Files