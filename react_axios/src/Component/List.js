import axios from 'axios';
// import axious from 'axios';
import React, { useEffect, useState } from 'react'
// import { instance } from '../axios/Indexs';

export default function ListofProducts() {
  const [state, seState] = useState([])

  const token = 'auth_token';

  //promise handling then 
  // useEffect(() => {
  //     axios
  //     .get("https://dummyjson.com/products")
  //     .then((response) => seState(response.data.products))
  //     .catch((err) => console.log(err));
  // },[]);

  //promise handling async await
  useEffect(() => {
    const getproducts = async () => {
      try{
        // const response = await axios.get("https://dummyjson.com/products");
        const response = await axios.get("/products", {headers: {
          'Authorization':`Bearer ${token}`
        }});
        if(response.status === 200){
           seState(response.data.products)
        }
        else if(response.status === 400){
          console.log("product not found")
        }
      } catch(e) {
        console.log(e);
      }
    };
    getproducts();
  }, []);
  return (
    <>
      <div>ListofProducts</div>
      <div>{state.map((Product) => (
        <>
          <div>{Product.title}</div> 
          <div>{Product.price}</div>
        </>
      ))}
      </div>
    </>
  );
} 