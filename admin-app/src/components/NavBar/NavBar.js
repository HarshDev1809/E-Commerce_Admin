import { useNavigate } from "react-router-dom";
import "./NavBar.css"

function NavBar(){

    const navigate = useNavigate();
    const logOut = ()=>{
        localStorage.clear();
        navigate("/");
    }
return <div className="nav-bar">
    <div className="title"><h1>Gehena</h1></div>
    <button type="button" onClick={logOut}>Log Out</button>
</div>
}

export default NavBar;