import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ProductsData from "../data/ProductData.js";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const reponse = ProductsData.find((item) => item.id === id);
            if (reponse) {
                // Xử lý sản phẩm đã tìm thấy
                setProduct(reponse);
            } else {
                // Xử lý khi không tìm thấy sản phẩm
                setProduct(null);
            }
            setLoading(false);
        };

        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        );
    };

    const ShowProduct = () => {
        return (
            <>
                {/* Hiển thị thông tin sản phẩm */}
            </>
        );
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
}

export default Product;
