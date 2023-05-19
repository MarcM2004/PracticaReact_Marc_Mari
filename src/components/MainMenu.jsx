import axios from "axios";
import { useEffect, useState } from "react";

export function MainMenu(props) {
  // Define state variables for products and selectedProduct
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  //Cretaes a variable in which the data from the local storage will be saved from the products array
  useEffect(() => {

    const storedProducts = JSON.parse(localStorage.getItem("products"));

    //if the variable above exists, sets the products to those in the local storage, if not, it gets information from the axios API and inserts them into the products array
    if (storedProducts) {
      setProducts(storedProducts);
    } else {
      axios.get("https://dummyjson.com/products")
        .then((array) => {
          console.log(array)
          setProducts(array.data.products);
        })
    }
  }, []);

  useEffect(() => {
    //sets the products array inside the local storage
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  function ProductClick(product) {
    //when you click on the image of a product, the product is identified by the function
    setSelectedProduct(product);
  }
  
  function goBack() {
    //when the close button is pressed, inside the individual view of each product, it sets the product to none, so it exits this view
    setSelectedProduct(null);
  }
  
  function deleteProduct(index) {
    //If you want to erase a product from the shop, you press on the delete button and this function locates the product and erases it from the array, followed by an update of the products in the shop
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  }
  
  function addProd(event) {
    //when a new product is submitted in the form, it's stored in the variable called newProduct, that gets the values from the fields in the form, it then puts it in the array with the other products, at the end of it
    event.preventDefault();
    const form = event.target;
    const newProduct = {
      title: form.title.value,
      description: form.description.value,
      price: form.price.value,
      thumbnail: form.thumbnail.value,
    };
    setProducts([...products, newProduct]);
    form.reset();
  }


  //This is the individual view for each product when you click on it's image
  if (selectedProduct) {
    return (
      <div>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img style={{width:"75%", height:"20%", objectFit:"cover"}}src={selectedProduct.thumbnail}/>
            </div>
            <div class="flex-grow-1 ms-3" style={{width:"30em"}}>
              <p>{selectedProduct.description}</p>
              <button style={{textAlign:"left", backgroundColor: "blue", color:"white"}} disabled> Price: {selectedProduct.price}€</button>
              <br></br>
              <button style={{marginTop:"1em"}} onClick={goBack}>Close</button>
            </div>
          </div>        
      </div>
    );
  }
  //this is the view of the normal menu, before you click on any product
  return (
    <>
      <div className="card">
        <h5 className="card-header display-3">
          Welcome (User: {props.user.username})!
        </h5>
        <div className="card-body">
          <h5 className="card-title display-5">This are all our products available</h5>
          <div className="d-flex flex-wrap">
            {products &&
              products.map((product, index) => (
                <div className="card" style={{ width: "25%", height: "auto", marginBottom:"3%"}}>
                  <img src={product.thumbnail} className="card-img-top" style={{ width: "100%", height: "15rem", objectFit:"cover"}} onClick={() => ProductClick(product)}/>
                  <div className="card-body" >
                    <h5 className="card-title">{product.title}</h5>
                    <button type="button" className="btn btn-success" style={{ width: "100%"}}>
                      {product.price}€ 
                    </button>
                    <button type="button" className="btn btn-danger" style={{ width: "100%", marginTop: "10%" }} onClick={() => deleteProduct(index)}>
                      Delete Product
                    </button>
                  </div>
                </div>
              ))}
            <form onSubmit={addProd} style={{ marginTop: '2em', textAlign:"left"  }}>
              <label>
                Title: 
                <input type="text" name="title" style={{ marginTop: '0.5em',  }}/>
              </label>
              <br />
              <label>
                Description: 
                <input type="text" name="description" style={{ marginTop: '0.5em',   }}/>
              </label>
              <br />
              <label>
                Price: 
                <input type="text" name="price" style={{ marginTop: '0.5em',   }}/>
              </label>
              <br />
              <label>
                Image:  
                <input type="text" name="thumbnail" style={{ marginTop: '0.5em',   }} />
              </label>
              <br />
              <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
