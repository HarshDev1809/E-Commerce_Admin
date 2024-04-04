import "./SideBar.css"

function SideBar(props){

    return <div className="side-bar">
        <button type="button" disabled = {(props.opened === "addProduct") ? true : false}>Add Product</button>
    </div>
}

export default SideBar;