export const addFileAction=(file)=>({
    type:"ADD_FILE",
    file
})
export const removeFileAction=(file)=>({
    type:"REMOVE_FILE",
    file
})
export const initHomepageAction=(filesData)=>({
    type:"INIT_HOME",
    filesData
})