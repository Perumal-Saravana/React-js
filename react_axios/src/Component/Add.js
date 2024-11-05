import axios from 'axios';
// import { title } from 'process';
import React, { useState } from 'react'

export default function ListofProducts() {
    const [state, seState] = useState([])

    //promise handling then
    const PostProduct = () => 
        axios({
            method: "post",
            // url: "https://dummyjson.com/products/add",
            url: "/products/add",
            data: { title: state }
        })
              .post("https://dummyjson.com/products/add",{title:state})
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    return (
        <>
            <div>Add Products</div>
            <input type="text" value={state} onChange={(e) => seState(e.target.value)} placeholder='Enter title' />
            <button onClick={PostProduct}>Add Product</button>
        </>
    );
} 