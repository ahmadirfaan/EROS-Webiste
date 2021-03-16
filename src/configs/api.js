import axios from "axios"

axios.interceptors.response.use(function (response) {
    console.log("COBA" + response.data)
    if (response.status !== 200) {
        throw new Error();
    }
    let data = response.data
    
    if (response.data.code !== 200) {
        throw new Error(data.message)
    }
    return data;
}, function (error) {
    return Promise.reject(error) 
})

export default axios