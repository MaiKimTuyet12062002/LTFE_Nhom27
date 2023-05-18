import React, { useState } from "react";
import ProductsData from "../data/ProductData.js";

function Products() {
  const [data, setData] = useState(ProductsData);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  
  const Loading = () => {
    return <>Loading...</>;
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2"> All </button>
          <button className="btn btn-outline-dark me-2"> Sach </button>
          <button className="btn btn-outline-dark me-2"> Tap </button>
          <button className="btn btn-outline-dark me-2"> But </button>
          <button className="btn btn-outline-dark me-2"> Thuoc </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 h-100 text-center" key={product.id}>
              <div class="card">
                <img
                  src={product.image}
                  class="card-img-top"
                  alt={product.title}
                />
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text"> {product.price}</p>
                  <p className="card-text">{product.des}</p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              {" "}
              Latest products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
