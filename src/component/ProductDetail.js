import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import productData from "../data/ProductData";
import {addItem, delItem} from "./redux/actions";

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Thêm vào giỏ hàng")

    const proid = useParams();
    const proDetail = productData.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);


    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Thêm vào giỏ hàng") {
            dispatch(addItem(product))
            setCartBtn("Xóa khỏi giỏ hàng")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Thêm vào giỏ hàng")
        }
    }

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.image} alt={product.name}height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.name}</h1>
                        <hr />
                        <h2 className="my-4">{product.price}đ</h2>
                        <p className="lead">{product.des}</p>
                        <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
