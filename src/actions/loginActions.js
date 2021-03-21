// export const loginUser=()=>({
//     type:"LOGIN_USER",
//     user:{
//         username:"yoko",
//         id:"5"
//     }
// })
export const loginUser=({user,token})=>({
    type:"LOGIN_USER",
    user,
    token
})
export const logoutUser=()=>({
    type:"LOGOUT_USER"
})