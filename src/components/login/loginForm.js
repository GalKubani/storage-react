import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../actions/loginActions";
import { LoginContext } from "../../context/LoginContext";
import { saveUserOnCookie } from "../../cookies/cookies";
import { loginToDB } from "../../server/db";

const LoginForm = (props) => {
    const {loginDispatch}=useContext(LoginContext)
    const [email,setEmail]= useState("")
    const [password,setPassword]=useState("")
    const [isEmailInputValid,setIsEmailValid]=useState(true)
    const [isPasswordInputValid,setIsPasswordValid]=useState(true)
    const [errorMessage,setErrorMessage]=useState("")

    useEffect(()=>{
        if(props.errorMessage!==""){
            setErrorMessage(props.errorMessage)
        }
    },[props.errorMessage])
    const history= useHistory()
    
    const onBlueEmailInput=(event)=>{
        const emailValue=event.target.value.trim();
        setEmail(emailValue);
        if (emailValue==="") {setIsEmailValid(false) }
        else {setIsEmailValid(true)}
    }
    const onBluePasswordInput=(event)=>{
        const passwordValue=event.target.value.trim();
        setPassword(passwordValue);
        if(passwordValue==="") {setIsPasswordValid(false)}
        else {setIsPasswordValid(true)}
    }
    const onSubmitForm=(event)=>{
        event.preventDefault()
        console.log("login form!",email,password)
        // loginDispatch(loginUser())
        // history.push("/rooms")
        loginToDB(email,password).then(
            (userData)=>{
                loginDispatch(loginUser(userData))
                saveUserOnCookie(userData)
                history.push("/")
            },(err)=>{
                if(err.message ==="EMAIL_NOT_FOUND"){
                    setIsEmailValid(false)
                    setErrorMessage("Email not found")
                }
                else if(err.message==="INVALID_PASSWORD"){
                    setIsPasswordValid(false)
                    setErrorMessage("Invalid password")
                }
            }
        )
    }
    const isFormInvalid=()=>{
        return email===""||password==="";
    }
    const onClickSubscribe=()=>{
        props.setIsLoginMode(false);
    }
	return (
		<div className="login-form">
			<h3>Login</h3>
            {
                errorMessage!=="" && <div className="error-message">{errorMessage}</div>
            }
			<form onSubmit={onSubmitForm}>
				<input placeholder="Email" onBlur={onBlueEmailInput} />
                {!isEmailInputValid && <div className="invalid-message">You must enter your email</div>}
				<input type="password" placeholder="Password" onBlur={onBluePasswordInput} />
                {!isPasswordInputValid &&<div className="invalid-message">You must enter your password</div>}
				<div className="login-form__nav">
                    <button type="submit" disabled={isFormInvalid()}>Submit</button>
                    <div onClick={onClickSubscribe}>Subscribe</div>
                </div>
            </form>
		</div>
	);
};

export default LoginForm;