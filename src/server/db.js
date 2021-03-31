import Axios from 'axios'

// // const DB_URL=`http://ec2-18-203-251-138.eu-west-1.compute.amazonaws.com`
// const DB_URL=`https://udemy-expense-default-rtdb.firebaseio.com/`
// const DB_URL='http://imagesserver-env.eba-uemuextf.eu-west-1.elasticbeanstalk.com/'
const DB_URL=`http://Storageserverkuba-env.eba-mwm2p54v.eu-central-1.elasticbeanstalk.com/get-file/`
export const getFilesFromDB = async (token) => {
    try {
        const res = await Axios.get(DB_URL+"/get-files",{
            headers: {
                'Authorization': 'Bearer ' + token
              }
        });
        const files = [];
        for (let id in res.data) {
            files.push({
                ...res.data[id]
            });
        }
        return files;
    } catch (err) {
        console.log("no files");
    }
};
export const getFileFromDB = async (token,key) => {
    try {
        const res = await Axios.get(DB_URL+`/get-file?key=${key}`,{
            headers: {
                'Authorization': 'Bearer ' + token
              }
        });
        res.download(__dirname)
        return res.data;
    } catch (err) {
        console.log("no files");
    }
};
export const subscribeToSite= async(username,email,password)=>{
    try{
        const res= await Axios.post(DB_URL+"/users",{name:username,email,password})
        return res;
    }catch (err) {
        console.log(err);
    }
}
export const loginToDB=async(email,password)=>{
    try{
        const res= await Axios.post(DB_URL+"/users/login",{email,password})
        return res;
    }catch (err) {
        throw new Error(err);
    }
}
export const postFileInDB = async (formData,token) => {
    try {
        console.log(token)
        const res = await Axios.post(DB_URL+'/upload-file', formData,{
            headers:{
                "Content-Type": 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}; 

export const removeFileFromDB = async (id,key,token) => {
    try {
        await Axios.delete(DB_URL + `/delete-file?key=${key}&id=${id}`,{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return;
    } catch (err) {
        console.log(err);
    }
}; 