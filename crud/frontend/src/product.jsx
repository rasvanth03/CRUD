import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


export default function Products(){
  const [product, setProduct] = useState([]);
  console.log(product)
    useEffect(()=>{
     axios.get("http://localhost:3005/products")
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log("products error", error);
      });
    },[])
    return(
        <>
      <h1>Product Details</h1>
      {
        product.map((prodet)=>(
          <div key={prodet._id}>
            <p>{prodet.pname}</p>
          </div>
        ))
      }
        </>
    )
}