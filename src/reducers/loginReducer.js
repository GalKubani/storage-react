export const userDataInitialState= {user:null,token:""}

const loginReducer=(userData,action)=>{
    switch(action.type){
        case "LOGIN_USER":
            return {user: {...action.user},token: action.token};
        case "LOGOUT_USER":
            return {user:null,token:""}
        default:
            return {...userData}
    }
}
export default loginReducer