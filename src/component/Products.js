import React, {useEffect, useState} from "react";
import ProductsData from "../data/ProductData.js";
import Skeleton from "react-loading-skeleton";
import {NavLink, useLocation} from "react-router-dom";
import "./css/home.css"
import Search from "./Search";

function Products() {
    const [data, setData] = useState(ProductsData);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (searchQuery) {
            const results = data.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilter(results);
        } else {
            setFilter(data);
        }
    }, [searchQuery, data]);

    const handleSearch = (searchTerm) => {
        setSearchQuery(searchTerm);
    };
    const Loading = () => {
        return (<>
            Loading...
            <div className="col-md-3">
                <Skeleton height={300}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={300}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={300}/>
            </div>
        </>);
    };
    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);

        setFilter(updatedList);
    }

    const ShowProducts = () => {

        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}> Tất cả sản phẩm</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Giấy In ấn - Photo")}> Giấy In ấn - Photo</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Bìa - Kệ - Rổ")}> Bìa - Kệ - Rổ</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Sổ - Tập - Bao thư")}> Sổ - Tập - Bao thư</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Băng keo - Dao - Kéo")}> Băng keo - Dao - Kéo</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Bút - Mực")}> Bút - Mực</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct(" Dụng cụ văn phòng")}> Dụng cụ văn phòng</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Máy tính Casio")}> Máy tính Casio</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className="col-md-3 h-100 text-center py-4" key={product.id}>
                            <div class="cards">
                                <div class="images">
                                <img
                                    src={product.image}
                                    class="card-img-top"
                                    alt={product.name}
                                />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{product.name}</h5>
                                    <p class="card-text text-center">{product.price}đ</p>
                                    <NavLink to={`/products/${product.id}`} class="btn btn-outline-primary">Xem ngay</NavLink>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{product.name}</h5>
                            <p class="card-text text-center">{product.price}đ</p>
                            <NavLink to={`/products/${product.id}`} class="btn btn-outline-primary">Xem
                                ngay</NavLink>
                        </div>
                    </div>
                </div>);
            })}
        </>);
    };

    return (<div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">
                        Sản phẩm
                    </h1>
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>);
}

export default Products;
