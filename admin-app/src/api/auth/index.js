import axios from 'axios';

export const signInApi = async(adminDetails)=>{
    const response = await axios.post("http://localhost:8000/api/auth/admin/signin",adminDetails);
    return response
}
