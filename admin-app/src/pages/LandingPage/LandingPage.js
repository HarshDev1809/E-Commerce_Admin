import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./LandingPage.css"

function LandingPage(){

    const navigate = useNavigate();

    const goToCreateProduct = ()=>{
        navigate("/products/add");
    }

    return <div className="landing-page">
        <NavBar />
        <div>
            <button type="button" onClick={goToCreateProduct}>Add Product</button>
        </div>
    </div>

}

export default LandingPage;

