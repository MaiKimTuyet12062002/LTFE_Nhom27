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
          <button className="btn btn-outline-dark me-2"> Tất cả sản phẩm </button>
          <button className="btn btn-outline-dark me-2"> Giấy In ấn - Photo </button>
          <button className="btn btn-outline-dark me-2"> Bìa - Kệ - Rổ </button>
          <button className="btn btn-outline-dark me-2"> Sổ - Tập - Bao thư </button>
          <button className="btn btn-outline-dark me-2"> Băng keo - Dao - Kéo </button>
          <button className="btn btn-outline-dark me-2"> Bút - Mực </button>
          <button className="btn btn-outline-dark me-2"> Dụng cụ văn phòng </button>
          <button className="btn btn-outline-dark me-2"> Máy tính Casio </button>
        </div>
        {filter.map((products) => {
          return (
            <div className="col-md-3 h-100 text-center" key={products.id}>
              <div class="card">
                <img
                  src={products.image}
                  class="card-img-top"
                  alt={products.title}
                />
                <div class="card-body">
                  <h5 class="card-title">{products.title}</h5>
                  <p class="card-text"> {products.price}</p>
                  <p className="card-text">{products.des}</p>
                  <a href="#" class="btn btn-primary">
                    Thêm vào giỏ hàng
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
              Sản phẩm mới nhất
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
