// export const loginUser=()=>({
//     type:"LOGIN_USER",
//     user:{
//         username:"yoko",
//         id:"5"
//     }
// })
export const loginUser=(userData,token)=>({
    type:"LOGIN_USER",
    userData,
    token
})
export const logoutUser=()=>({
    type:"LOGOUT_USER"
})