import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import productData from "../data/ProductData";
import {addItem, delItem} from "./redux/actions";
import "./css/home.css"

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
                        <img className="card-img-top" src={product.image} height="200px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.name}</h1>
                        <hr />
                        <h2 className="my-4">{product.price}đ</h2>
                        <p className="lead">{product.des}</p>
                        <h6>Số Lượng</h6>
                        <div className="buy-amount">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="2"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/>
                                </svg>
                            </button>
                            <input type="text" name="amount" id="amount" value="1"/>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="2"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                </svg>
                            </button>
                        </div>
                        <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
