import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./SignInPage.css";
import { signInApi } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function SignInPage() {

    const [passWord, setPassWord] = useState();
    const [adminId, setAdminId] = useState();
    const [error,setError] = useState();

    const navigate = useNavigate();

    const adminDetails = {
        adminId : adminId,
        passWord : passWord
    }

    const updateId = (e)=>{
        setAdminId(e.target.value);
    }

    const updatePassWord = (e)=>{
        setPassWord(e.target.value);
    }

    const signIn = async(e) => {
        e.preventDefault();
        try{
            const {data} = await signInApi(adminDetails);
            const {adminId, name, accessToken} = data;
            localStorage.setItem("id",adminId);
            localStorage.setItem("name",name);
            localStorage.setItem("token",accessToken);
            navigate("/home");
        }catch(err){
            setError("Invalid ID or PASSWORD!");
        }

    }

    useEffect(()=>{
        setError();
    },[])

  return (
    <div className="signin-page">
      <div className="header"><h1>Gehena</h1></div>
      <div className="page-section">
        <form className="signin-section" onSubmit={signIn}>
            <h4>Sign In as Admin</h4>
            <div className="id-div">
                <input type="number" placeholder="Admin Id" value={adminId} onChange={updateId}></input>
            </div>
            <div className="password-div">
                <input type="password" placeholder="Password" value={passWord} onChange={updatePassWord}></input>
            </div>
            <div className="error">
                {error}
            </div>
            <button type="submit">Sign In</button>
        </form>
        <div className="display-section">
            <h1>Gehena</h1>
            <h6>Home to Exquisite Jewellary</h6>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
