
export const initialFileState = {
    files: []
};
const FilesReducer=(filesState, action)=>{
    switch (action.type) {
        case "ADD_FILE":
            return {
                files: filesState.files.concat(action.File.res)
            };     
        case "INIT_HOME":
            return { files: filesState.files.concat(action.filesData) };  
        case "REMOVE_FILE":
            return{
                files: filesState.files.filter((File)=>{
                    return File._id !== action.File.id
                })
            }
        default:
            return { ...filesState };
    }
}
export default FilesReducer;