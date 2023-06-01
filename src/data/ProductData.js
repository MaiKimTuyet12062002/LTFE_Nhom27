import React from "react";

const products= [
    {
        id:1 ,
        name:  "Giấy in BILL",
        image: "https://cdn.fast.vn/tmp/20200917103116-e8ffde644ffd29fbb2d6f7453a77e655.jpg",
        des: "Giấy in BILL tính tiền 5F - K57x38 (1 cuộn)",
        price:3900
    }  ,
    {
        id: 2,
        name: "Giấy in BILL tính tiền 8F",
        image: "https://cdn.fast.vn/tmp/20230202163150-450.jpg",
        des: "Giấy in BILL tính tiền 8F - K80x45 (1 cuộn)",
        price: 4850
    }  ,
    {
        id: 3,
        name: "Bút dạ quang ERAS E175",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/02/da-quang-400x400.jpg",
        des: "Bút dạ quang ERAS với những màu sắc bắt mắt. Bút có kiểu dáng đơn giản, hiện đại",
        price: 20000
    }  ,
    {
        id: 4,
        name: "Giấy note nhiều màu",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/02/note-phan-trang-400x400.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 17000
    },
    {
        id:5 ,
        name:  "Hộp 20 Bút Thiên Long TL036",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/08/036-400x400.jpg",
        des: "Bút nước đều màu.",
        price:220000
    }  ,
    {
        id: 6,
        name: "Tập học sinh – FUTUREBOOK",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2021/12/200t-400x400.jpg",
        des: "Tập với chất liệu giấy chắc chắn thích hợp cho học sinh và sinh viên.",
        price: 10000
    }  ,
    {
        id: 7,
        name: "Bút dạ quang ERAS E175",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/02/da-quang-400x400.jpg",
        des: "Bút dạ quang ERAS với những màu sắc bắt mắt. Bút có kiểu dáng đơn giản, hiện đại",
        price: 20000
    }  ,
    {
        id: 8,
        name: "Giấy note nhiều màu",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/02/note-phan-trang-400x400.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 17000
    },
    {
        id: 9,
        name: "Bao thư xi măng A4",
        image: "https://cdn.fast.vn/tmp/20220726165835-z3595914386513_dfddaff6e51095246904c8bfb597532e.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 2500
    },
    {
        id: 10,
        name: "Sổ xé A4 Pgrand",
        image: "https://cdn.fast.vn/image/data/1/9/69167so%20xe.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 25400
    },
    {
        id: 11,
        name: "Tập 96 trang ABC Hòa Bình",
        image: "https://cdn.fast.vn/tmp/20200818102845-2.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 7800
    },
    {
        id: 12,
        name: "Băng keo 2 mặt 1.2cm - 9 mét",
        image: "https://cdn.fast.vn/tmp/20200717150007-1.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 1200
    },
    {
        id: 13,
        name: "Tập 200 trang Sinh Viên - ô ngang - 17.5x25.5cm",
        image: "https://cdn.fast.vn/image/data/4/41349tap-sinh-vien-heo-boo-200-dana-book%20(1).gif",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 17500
    },
    {
        id: 14,
        name: "Bao thư trắng A4",
        image: "https://cdn.fast.vn/image/data/7/80275baothu.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 1000
    },
    {
        id: 15,
        name: "Thước cứng 30cm",
        image: "https://cdn.fast.vn/tmp/20211201160050-thuoc-nhua-tl-30cm-vppminhanh-vn.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 5900
    },
    {
        id: 16,
        name: "Băng keo đục 5F - 100Y",
        image: "https://cdn.fast.vn/tmp/20200719122226-2-1-.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 7500
    },
];
export default products;