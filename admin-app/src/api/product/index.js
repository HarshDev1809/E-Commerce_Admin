import axios from 'axios';

export const createProductApi = async(productDetails)=>{
    const response = await axios.post("http://localhost:8000/api/products/create",productDetails,{
        headers : {
            "x-access-token" : localStorage.getItem("token")
        }
    })

    return response;
}