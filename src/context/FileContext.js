import React, { createContext, useEffect,useContext, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { initHomepageAction } from '../actions/fileActions';
import FilesReducer, { initialFileState } from '../reducers/fileReducer';
import { getFilesFromDB } from '../server/db';
import { LoginContext } from './LoginContext';

export const FileContext= createContext();

const FileContextProvider=(props)=>{
    const [fileState,fileDispatch]=useReducer(FilesReducer,initialFileState)
    const history= useHistory()
    console.log(fileState)
    const {userData}=useContext(LoginContext)
    useEffect(()=>{
        let isComponentExist=true;
        getFilesFromDB(userData.data.token).then((fileData)=>{
            if(isComponentExist) fileDispatch(initHomepageAction(fileData))
        },(err)=>{
            if(err.message){
                console.log(err.message)
                history.push("/")
            }
        })
        return()=>{
            isComponentExist=false;
        }
    },[])
    return(
        <FileContext.Provider value={{fileState,fileDispatch}}>
            {props.children}
        </FileContext.Provider>

    )
}
export default FileContextProvider;