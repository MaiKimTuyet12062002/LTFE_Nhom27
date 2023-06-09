import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {delItem, addItem, decItem, setCartItems} from "./redux/actions";

//Chuyển hàm cartItems thành một function component riêng biệt
function CartItem({cartItem}) {
    const dispatch = useDispatch();

    // Truy cập trạng thái giỏ hàng từ Redux store
    const state = useSelector((state) => state.addItem);

    // Tải dữ liệu giỏ hàng từ local storage khi tải lại trang
    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            const parsedData = JSON.parse(cartData);
            // Dispatch an action to update the cart state with the data from local storage
            // Make sure you have the necessary reducer and action creators set up for this
            dispatch(setCartItems(parsedData));
        }
    }, [dispatch]);

    // Cập nhật dữ liệu giỏ hàng trong local storage khi trạng thái thay đổi
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state));
    }, [state]);


    const handleClose = (item) => {
        dispatch(delItem(item))
    };
    const handlePlus = (item) => {
        dispatch(addItem(item));
    };
    const handleDec = (item) => {
        dispatch(decItem(item));
    };

    //Sử dụng useState để lưu trữ số lượng cho từng sản phẩm
    const [quantity, setQuantity] = React.useState(cartItem.quantity || 1);

    //Cập nhật biến trạng thái khi nhấn nút cộng hoặc trừ
    const handleIncrease = () => {
        setQuantity(quantity + 1);
        handlePlus(cartItem);
    };
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            handleDec(cartItem);
        }
    };
    return (
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
            <div className="container py-4">
                <button onClick={() => handleClose(cartItem)} className="btn-close float-end"
                        aria-label="Close"></button>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={cartItem.image} alt={cartItem.name} height="200px" width="180px"/>
                    </div>
                    <div className="col-md-4">
                        <h3>{cartItem.name}</h3>
                        <p className="lead fw-bold">{cartItem.price}đ</p>
                        <h6>Số Lượng</h6>
                        <div className="buy-amount">
                            <button className="minus-btn" onClick={handleDecrease}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="2"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"/>
                                </svg>
                            </button>
                            {/*Sử dụng biến trạng thái để hiển thị số lượng*/}
                            <input type="text" name="total-quantity" id={`total-quantity-${cartItem.id}`}
                                   value={quantity} readOnly/>
                            <button className="plus-btn" onClick={handleIncrease}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="2"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M12 4.5v15m7.5-7.5h-15"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Cart = () => {
    const state = useSelector((state) => state.addItem);

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Giỏ hàng của bạn trống</h3>
                    </div>
                </div>
            </div>
        );
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Tiến hành thanh
                        toán</NavLink>
                </div>
            </div>
        );
    };

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.reduce((uniqueItems, cartItem) => {
                const isDuplicate = uniqueItems.some((item) => item.id === cartItem.id);
                if (!isDuplicate) {
                    uniqueItems.push(cartItem);
                }
                return uniqueItems;
            }, []).map(cartItem => (
                //Sử dụng function component CartItem để hiển thị từng sản phẩm
                <CartItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart;
