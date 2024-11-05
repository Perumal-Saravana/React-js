import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ListofProducts() {
  const [state, seState] = useState([]);

  //promise handling then
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => seState(response.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>ListofProducts</div>
      <div>
        {state.map((Product) => (
          <>
            <div>{Product.title}</div>
            <div>{Product.price}</div>
          </>
        ))}
      </div>
    </>
  );
}
