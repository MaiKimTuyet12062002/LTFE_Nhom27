import React, {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import {NavLink, useLocation} from "react-router-dom";
import "./css/home.css"
import Search from "./Search";
import ProductData from "../data/ProductData.js";

function Products() {
    const [data, setData] = useState(ProductData);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);

    useEffect(() => {
        // Simulating an API call to fetch product data
        setTimeout(() => {
            setData(ProductData);
            setFilter(ProductData);
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const results = data.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilter(results);
        } else {
            setFilter(data);
        }
    }, [searchQuery, data]);

    const handleSearch = (searchTerm) => {
        setSearchQuery(searchTerm);
    };
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);

        setCurrentPage(1);
    }
    const ShowProducts = () => {
        // Get current products
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = filter.slice(
            indexOfFirstProduct,
            indexOfLastProduct
        );

        return (<>
                <div>
                    <Search onSearch={handleSearch}/>
                </div>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}> Tất cả sản phẩm
                    </button>
                    <button className="btn btn-outline-dark me-2"
                            onClick={() => filterProduct("Giấy In ấn - Photo")}> Giấy
                        In ấn - Photo
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Bìa - Kệ - Rổ")}> Bìa -
                        Kệ -
                        Rổ
                    </button>
                    <button className="btn btn-outline-dark me-2"
                            onClick={() => filterProduct("Sổ - Tập - Bao thư")}> Sổ -
                        Tập - Bao thư
                    </button>
                    <button className="btn btn-outline-dark me-2"
                            onClick={() => filterProduct("Băng keo - Dao - Kéo")}> Băng keo - Dao - Kéo
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Bút - Mực")}> Bút - Mực
                    </button>
                    <button className="btn btn-outline-dark me-2"
                            onClick={() => filterProduct("Dụng cụ văn phòng")}> Dụng
                        cụ văn phòng
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Máy tính Casio")}> Máy
                        tính
                        Casio
                    </button>
                </div>
                {/*{filter.map((product) => {*/}
                {currentProducts.map((product) => {
                    return (<div className="col-md-3 h-100 text-center py-4" key={product.id}>
                        <div class="card">
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
                                <NavLink to={`/products/${product.id}`} class="btn btn-outline-primary">
                                    <button>Xem
                                        ngay
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>);
                })}
                {/* Pagination */}
                <ul className="pagination justify-content-center">
                    {pageNumbers.map((number) => (
                        <li
                            key={number}
                            className={`page-item ${
                                currentPage === number ? "active" : ""
                            }`}
                        >
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(number)}
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </>
        );
    };

    // Generate page numbers for pagination
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filter.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (<div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center" style={{color: "black"}}>
                        Sản phẩm
                    </h1>
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-center">
             <ShowProducts/>
            </div>
        </div>
    </div>);
}

export default Products;
