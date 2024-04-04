import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import "./AddProductPage.css";
import { createProductApi } from "../../api/product";

function AddProductPage() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [displayPrice, setDisplayPrice] = useState();
  const [productCount, setProductCount] = useState();
  const [productUrl, setProductUrl] = useState();
  const [tags, setTags] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [url,setUrl] = useState();

  const productDetails = {
    name : name,
    description : description,
    price : price,
    displayPrice : displayPrice,
    productCount : productCount,
    productUrl : productUrl,
    tags :  tags,
    productImage : productImage,
    url : url
  }

  const updateName =(e)=>{
    setName(e.target.value)
  }

  const updateDescription =(e)=>{
    setDescription(e.target.value)
  }
  const updatePrice =(e)=>{
    setPrice(e.target.value)
  }
  const updateDisplayPrice =(e)=>{
    setDisplayPrice(e.target.value)
  }
  const updateProductCount =(e)=>{
    setProductCount(e.target.value)
  }
  const updateProductUrl =(e)=>{
    setProductUrl(e.target.value)
  }
  const updateUrl =(e)=>{
    setUrl(e.target.value)
  }

  const addUrl = (e)=>{
    setProductImage([...productImage,url]);
    // setUrl("");
  }



  const createProduct = async(e)=>{
    e.preventDefault();
    const response = await createProductApi(productDetails);
    console.log(response)
  }

  const updateTag = (e)=>{
    // if(e.target.checked){
    //     tags.map((tag)=>{
    //         if(tag != e.target.value){
    //             setTags([...tags,e.target.value]);
    //         }
    //     })
    // }
    // else{
    //     const tagsArr = tags.filter((tags)=>{
    //         return tags != e.target.value
    //     })
    //     setTags(tagsArr);
    // }

    const {value,checked} = e.target
    if(checked){
        setTags(previousTags => [...previousTags,e.target.value])
    }else {
        setTags(previousTags => previousTags.filter(val => val !== value));
    }

  }

  return (
    <div className="add-product-page">
      <NavBar />
      <div>
        <SideBar opened={"addProduct"} />
        <div className="body">
          <form onSubmit={createProduct}>
            <div>
              <label for="name">Name : </label>
              <input
                id="name"
                type="text"
                placeholder="Name of the Product"
                value={name}
                onChange={updateName}
                required
              />
            </div>
            <div>
              <label for="description">Name : </label>
              <textarea
                id="description"
                placeholder="Description of the Product"
                value={description}
                on
                onChange={updateDescription}
                required
              ></textarea>
            </div>
            <div>
              <label for="price">Price : </label>
              <input
                id="price"
                type="number"
                placeholder="Price of the Product"
                value={price}
                onChange={updatePrice}
                required
              />
            </div>
            <div>
              <label for="displaPrice">Display Price : </label>
              <input
                id="displayPrice"
                type="number"
                placeholder="Display Price of the Product"
                value={displayPrice}
                onChange={updateDisplayPrice}
                required
              />
            </div>
            <div>
              <label for="productCount">Product Count : </label>
              <input
                id="productCount"
                type="number"
                placeholder="Count of the Product"
                value={productCount}
                onChange={updateProductCount}
                required
              />
            </div>
            <div>
              <label for="productUrl">Cover Image : </label>
              <input
                id="productUrl"
                type="url"
                placeholder="URL Address of the Image"
                value={productUrl}
                onChange={updateProductUrl}
                required
              />
            </div>
            <div>
              <label>Tags : </label>
              <div className="tags">
                <span>
                  <input type="checkbox" id="bracelet" value="Bracelets" onChange={updateTag}/>
                  <label for="bracelets">Bracelets</label>
                </span>
                <span>
                  <input type="checkbox" id="ring" value="Ring" onChange={updateTag}/>
                  <label for="ring">Ring</label>
                </span>
                <span>
                  <input type="checkbox" id="earring" value="Earring" onChange={updateTag}/>
                  <label for="earring">Earring</label>
                </span>
                <span>
                  <input type="checkbox" id="necklace" value="Necklace" onChange={updateTag}/>
                  <label for="necklace">Necklace</label>
                </span>
                <span>
                  <input type="checkbox" id="pendent" value="Pendent" onChange={updateTag}/>
                  <label for="pendent">Pendent</label>
                </span>
                <span>
                  <input type="checkbox" id="bali" value="Bali" onChange={updateTag}/>
                  <label for="bali">Bali</label>
                </span>
                <span>
                  <input type="checkbox" id="chain" value="Chain" onChange={updateTag}/>
                  <label for="chain">Chain</label>
                </span>
                <span>
                  <input type="checkbox" id="set" value="Set" onChange={updateTag}/>
                  <label for="set">Set</label>
                </span>
              </div>
            </div>
            <div>
                <label>Gender : </label>
                <div className="gender">
                <span>
                  <input type="checkbox" id="mens" value="Men's" onChange={updateTag}/>
                  <label for="mens">Men's</label>
                </span>
                <span>
                  <input type="checkbox" id="womens" value="Women's" onChange={updateTag}/>
                  <label for="womens">Women's</label>
                </span>
                <span>
                  <input type="checkbox" id="kids" value="Kid's" onChange={updateTag}/>
                  <label for="kids">Kid's</label>
                </span>
                </div>
            </div>
            <div>
                <label>Material : </label>
                <div className="material">
                <span>
                  <input type="checkbox" id="gold" value="Gold" onChange={updateTag}/>
                  <label for="gold">Gold</label>
                </span>
                <span>
                  <input type="checkbox" id="silver" value="Silver" onChange={updateTag}/>
                  <label for="silver">Silver</label>
                </span>
                <span>
                  <input type="checkbox" id="roseGold" value="Rose Gold" onChange={updateTag}/>
                  <label for="roseGold">Rose Gold</label>
                </span>
                </div>
            </div>
            <div>
              <label for="productImages">Product Images : </label>
              <input
              id="productImages"
                type="url"
                placeholder="Url Address of the Product"
                value={url}
                onChange={updateUrl}
              />
              <button type="button" onClick={addUrl}>add</button>
            </div>
            <div>
                <button type="reset">Cancel</button>
                <button type="submit">Done</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;
