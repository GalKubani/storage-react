import React ,{useContext} from 'react'
import { FileContext } from '../../context/FileContext';
import File from './File'

const Files=()=>{
    
    const{fileState}=useContext(FileContext)
    return(
        <div>
            { fileState.files.map((file)=>(
                <File key={file.key} file={ file } />
            ))
            }
        </div>
    )}
    
export default Files