export const userDataInitialState= {user:null,token:""}

const loginReducer=(userData,action)=>{
    console.log(action.userData)
    switch(action.type){
        case "LOGIN_USER":
            return {data: {...action.userData.data},token: action.token};
        case "LOGOUT_USER":
            return {data:null,token:""}
        default:
            return {...userData}
    }
}
export default loginReducer