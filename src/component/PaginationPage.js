// import 'bootstrap/dist/css/bootstrap.min.css';
// import { MDBPagination, MDBPageItem, MDBPageNav } from 'mdbreact';
// import React, { useState } from 'react';
// import ProductData from '../data/ProductData.js';
//
// function PaginationPage() {
//     const productsPerPage = 8; //số sản phẩm hiển thị trên mỗi trang
//     const [currentPage, setCurrentPage] = useState(1); //trang hiện tại
//     const productsData = ProductData;
//     const totalPages = Math.ceil(productsData.length / productsPerPage); //tổng số trang
//
//     //Lấy các sản phẩm hiển thị trên trang hiện tại
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = productsData.slice(
//         indexOfFirstProduct,
//         indexOfLastProduct
//     );
//
//     //Các trang sẽ được hiển thị trong Navbar
//     const pages = Array.from(Array(totalPages).keys()).map((page) => page + 1);
//
//     //Cập nhật state khi người dùng chuyển sang trang khác
//     const handleClick = (event, page) => {
//         event.preventDefault();
//         setCurrentPage(page);
//     };
//
//     return (
//         <div>
//             <div className="products-container">
//                 {currentProducts.map((product) => (
//                     <div className="product-card" key={product.id}>
//                         <img src={product.image} alt={product.name} />
//                         <h3>{product.name}</h3>
//                         <p>{product.price}</p>
//                     </div>
//                 ))}
//             </div>
//             <MDBPagination className="mb-5" style={{ justifyContent: 'center' }}>
//                 <MDBPageItem
//                     disabled={currentPage <= 1}
//                     onClick={(event) => handleClick(event, currentPage - 1)}
//                 >
//                     <MDBPageNav aria-label="Previous">
//                         <span aria-hidden="true">«</span>
//                     </MDBPageNav>
//                 </MDBPageItem>
//
//                 {pages.map((page) => (
//                     <MDBPageItem
//                         key={page}
//                         className={page === currentPage ? 'active' : ''}
//                         onClick={(event) => handleClick(event, page)}
//                     >
//                         <MDBPageNav>{page}</MDBPageNav>
//                     </MDBPageItem>
//                 ))}
//
//                 <MDBPageItem
//                     disabled={currentPage >= totalPages}
//                     onClick={(event) => handleClick(event, currentPage + 1)}
//                 >
//                     <MDBPageNav aria-label="Next">
//                         <span aria-hidden="true">»</span>
//                     </MDBPageNav>
//                 </MDBPageItem>
//             </MDBPagination>
//         </div>
//     );
// }
//
// export default PaginationPage;
