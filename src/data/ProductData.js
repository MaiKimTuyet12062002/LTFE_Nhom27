import React from "react";

const products= [
    {
        id:1 ,
        name:  "Giấy in BILL",
        category: "Giấy In ấn - Photo",
        image: "https://cdn.fast.vn/tmp/20200917103116-e8ffde644ffd29fbb2d6f7453a77e655.jpg",
        des: "Giấy in BILL tính tiền 5F - K57x38 (1 cuộn)",
        price:3900
    }  ,
    {
        id: 2,
        name: "Giấy in BILL tính tiền 8F",
        category: "Giấy In ấn - Photo",
        image: "https://cdn.fast.vn/tmp/20230202163150-450.jpg",
        des: "Giấy in BILL tính tiền 8F - K80x45 (1 cuộn)",
        price: 4850
    }  ,
    {
        id: 3,
        name: "Bút dạ quang ERAS E175",
        category: "Bút - Mực",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/02/da-quang-400x400.jpg",
        des: "Bút dạ quang ERAS với những màu sắc bắt mắt. Bút có kiểu dáng đơn giản, hiện đại",
        price: 20000
    }  ,
    {
        id: 4,
        name: "Giấy note nhiều màu",
        category: "Dụng cụ văn phòng",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/02/note-phan-trang-400x400.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 17000
    },
    {
        id:5 ,
        name:  "Hộp 20 Bút Thiên Long TL036",
        category: "Bút - Mực",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/08/036-400x400.jpg",
        des: "Bút nước đều màu.",
        price:220000
    }  ,
    {
        id: 6,
        name: "Tập học sinh – FUTUREBOOK",
        category: "Sổ - Tập - Bao thư",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2021/12/200t-400x400.jpg",
        des: "Tập với chất liệu giấy chắc chắn thích hợp cho học sinh và sinh viên.",
        price: 10000
    }  ,
    {
        id: 7,
        name: "Bút dạ quang ERAS E175",
        category: "Bút - Mực",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/02/da-quang-400x400.jpg",
        des: "Bút dạ quang ERAS với những màu sắc bắt mắt. Bút có kiểu dáng đơn giản, hiện đại",
        price: 20000
    }  ,
    {
        id: 8,
        name: "Giấy note nhiều màu",
        category: "Dụng cụ văn phòng",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/02/note-phan-trang-400x400.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 17000
    },
    {
        id: 9,
        name: "Bao thư xi măng A4",
        category: "Sổ - Tập - Bao thư",
        image: "https://cdn.fast.vn/tmp/20220726165835-z3595914386513_dfddaff6e51095246904c8bfb597532e.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 2500
    },
    {
        id: 10,
        name: "Sổ xé A4 Pgrand",
        category: "Sổ - Tập - Bao thư",
        image: "https://cdn.fast.vn/image/data/1/9/69167so%20xe.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 25400
    },
    {
        id: 11,
        name: "Tập 96 trang ABC Hòa Bình",
        category: "Sổ - Tập - Bao thư",
        image: "https://cdn.fast.vn/tmp/20200818102845-2.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 7800
    },
    {
        id: 12,
        name: "Băng keo 2 mặt 1.2cm - 9 mét",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/tmp/20200717150007-1.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 1200
    },
    {
        id: 13,
        name: "Tập 200 trang Sinh Viên - ô ngang - 17.5x25.5cm",
        category: "Sổ - Tập - Bao thư",
        image: "https://cdn.fast.vn/image/data/4/41349tap-sinh-vien-heo-boo-200-dana-book%20(1).gif",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 17500
    },
    {
        id: 14,
        name: "Bao thư trắng A4",
        category: "Sổ - Tập - Bao thư",
        image: "https://cdn.fast.vn/image/data/7/80275baothu.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 1000
    },
    {
        id: 15,
        name: "Thước cứng 30cm",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20211201160050-thuoc-nhua-tl-30cm-vppminhanh-vn.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 5900
    },
    {
        id: 16,
        name: "Băng keo đục 5F - 100Y",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/tmp/20220825153643-capture.PNG",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 7500
    },
    {
        id: 17,
        name: "Giấy ghi chú / giấy note 4 màu dạ quang 3x3 GS-04",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20210217132014-9.JPG",
        des: "Giấy ghi chú 4 màu dạ quang 3x3 GS-04\n" +
            "\n" +
            "Quy cách: 4 màu/vỉ",
        price: 7500
    },
    {
        id: 18,
        name: "BGiấy A4 Double A 80 Gsm",
        category: "Giấy In ấn - Photo",
        image: "https://cdn.fast.vn/tmp/20200718201248-6.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 79000
    },
    {
        id: 19,
        name: "Bao thư hồ sơ A4 - vàng (1 Cái)",
        category: "Sổ - Tập - Bao thư",
        image: "https://cdn.fast.vn/tmp/20201225163141-3.PNG",
        des: "Đơn Vị Tính : Cái\n" +
            "Quy Cách : 100 Cái / Xấp",
        price: 1200
    },
    {
        id: 20,
        name: "Phiếu chi 2 liên dầy 13x19",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/image/data/7/41783pc.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 12800
    },
    {
        id: 21,
        name: "Bìa còng 7F ABBA",
        category: "Bìa - Kệ - Rổ",
        image: "https://cdn.fast.vn/tmp/20200929163857-ce4cd54ce7d6559ae43f1394d39a6861.jpg",
        des: "Công dụng Bìa còng 5-7cm giúp lưu trữ tài liệu một .cách tiết kiệm không gian cho mọi văn phòng.",
        price: 22000
    },
    {
        id: 22,
        name: "Bìa nhựa quấn dây F4 - màu trắng (1 cái)",
        category: "Bìa - Kệ - Rổ",
        image: "https://cdn.fast.vn/image/data/15/60049qd.jpg",
        des: "Đặc điểm:\n" +
            "\n" +
            "                        Vật liệu PP đặc biệt chịu va đập cao.\n" +
            "\n" +
            "                        Có thể lưu trữ tối đa 125 tờ A4\n" +
            "\n" +
            "                        Đường hàn chắc\n" +
            "\n" +
            "                        Sản phẩm có in hoa văn đẹp và sắc nét",
        price: 6000
    },
    {
        id: 23,
        name: "Bìa 3 dây TN 20F",
        category: "Bìa - Kệ - Rổ",
        image: "https://cdn.fast.vn/tmp/20220729134349-b58f3d896c6e7428a412f364d4aa94fe_tn.jpg",
        des: "Công dụng: Bìa 3 dây, tiện lợi trong việc lưu trữ tài liệu, hồ sơ trong văn phòng.\n" +
            "Đặc Điểm: là sản phẩm với nguyên liệu làm bằng bìa giấy cứng, độ dày gáy khoảng 7F, có 3 dây nằm ở 3 cạnh bìa chắc chắn giúp lưu trữ hồ sơ với số lượng lớn",
        price: 13000
    },
    {
        id: 24,
        name: "Rổ nhựa xéo 3 ngăn TTM",
        category: "Bìa - Kệ - Rổ",
        image: "https://cdn.fast.vn/image/data/Bia/6353ke-ro-xeo-3-ngan-lien-hoan.jpg",
        des: "Là sản phẩm được làm bằng nhựa kích cỡ 30 x 30 x 12 cm, 3 ngăn đứng liên hoàn - với chiều rộng mỗi ngăn khoảng 10cm chứa chứng từ các khổ A4-A5-A6, màu phổ biến: xanh dương. Sản phẩm được sử dụng để lưu trữ các chứng từ để tạo sự chuyên nghiệp, thuận tiện cho công việc văn phòng hàng ngày của bạn.",
        price: 22500
    },
    {
        id: 25,
        name: "Bìa còng nhẫn nhựa 3.5cm",
        category: "Bìa - Kệ - Rổ",
        image: "https://cdn.fast.vn/tmp/20210217082814-biacongnhan3-5cm.jpg",
        des: "Công dụng – Lưu và cất trữ các giấy tờ tài liệu. Tạo cho chúng một nơi để ngăn nắp theo thứ tự, dễ dàng khi tìm kiếm.",
        price: 15000
    },
    {
        id: 26,
        name: "Thẻ Zipper Dọc TL207 (7.5x11cm) + Dây Dù Kẹp",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20220716094718-dsa.PNG",
        des: "Thẻ Zipper Dọc TL207 (7.5x11cm) + Dây Dù Kẹp",
        price: 2800
    },
    {
        id: 27,
        name: "Kim bấm số 10 Plus",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20210217090347-6.JPG",
        des: "Công dụng Kim bấm số 10 Plus là loại kim dùng cho dụng cụ bấm kim số 10 giúp giữ cho các tập tài liệu giấy chắc chắn không bị bung rời, có thể sử dụng cho nhiều loại bấm kim số 10.",
        price: 2500
    },
    {
        id: 28,
        name: "Kẹp giấy tam giác C62",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20200512141952-szwi4f_simg_de2fe0_500x500_maxb.jpg",
        des: "Công dụng có thể kẹp chặt lượng tài liệu ít, mỏng tối đa 10 tờ A4 để không bị bung rời.",
        price: 2300
    },
    {
        id: 29,
        name: "Đồ bấm kim số 10 Plus",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20210217090255-4.JPG",
        des: "Bấm kim số 10 Plus được sản xuất tại nhà máy ở Khu công nghiệp Nhơn Trạch, tỉnh Đồng Nai bằng công nghệ Nhật Bản nên quý khách hàng có thể yên tâm vào chất lượng, hơn nữa với Bấm kim số 10 Plus đã được tạo được 1 thương hiệu vững chắc, đã đang và sẽ đồng hành cùng thành công của quý vị.",
        price: 25500
    },
    {
        id: 30,
        name: "Cây ghim giấy",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/image/data/tap_pham/46953cay%20ghim%20giay.jpg",
        des: "Công dụng Tiện dụng trong văn phòng.\n" +
            "Dùng để ghim giữ các liên giấy, tài liệu rời...",
        price: 15000
    },
    {
        id: 31,
        name: "Dao rọc giấy SDI lớn 0423",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/tmp/20210217101223-0423.JPG",
        des: "Công dụng là dụng cụ hữu ích cho nhiều ngành nghề và đối tượng, từ học sinh, sinh viên, nhân viên công sở đến thợ chế tác thủ công, thợ điện, ngành đóng gói… Một chiếc dao sắc bén, tiện dụng sẽ giúp bạn hoàn thành công việc nhanh hơn, tiết kiệm thời gian.",
        price: 11000
    },
    {
        id: 32,
        name: "Kéo Văn Phòng Deli 6009 - 18cm",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/image/data/22/893441.jpg",
        des: "Lưỡi kéo làm từ hợp kim thép cao cấp sắc nhưng đảm bảo an toàn, không nhọn, không làm đau xước tay và cũng không phải lo cắt vào tay làm đau tay",
        price: 25000
    },
    {
        id: 33,
        name: "Kéo cắt chỉ / Kéo bấm",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/image/data/01072019/300819/8802858d13f87b683b-21-03-2017-090713-2jpg.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 6400
    },
    {
        id: 34,
        name: "Súng bắn tem mác quần áo",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20230218073533-5.PNG",
        des: "Chức năng: dùng để đưa gọng nhựa nối quần /áo với 1 nhãn , mác, side quần áo một cách dể dàng dể dàng",
        price: 50000
    },
    {
        id: 35,
        name: "Bìa còng 7F ABBA",
        category: "Bìa - Kệ - Rổ",
        image: "https://cdn.fast.vn/tmp/20200929163857-ce4cd54ce7d6559ae43f1394d39a6861.jpg",
        des: "Công dụng Bìa còng 5-7cm giúp lưu trữ tài liệu một .cách tiết kiệm không gian cho mọi văn phòng.",
        price: 22000
    },
    {
        id: 36,
        name: "Băng keo bấm giá - màu xanh",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/image/data/15/81730xanh.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 3600
    },
    {
        id: 37,
        name: "Máy tính DS-480",
        category:"Máy tính Casio",
        image: "https://cdn.fast.vn/image/data/222371.PNG",
        des: " Kích thước: 13,5cm*18,5cm",
        price: 110000
    },
    {
        id: 38,
        name: "Máy tính DS - 3018",
        category:"Máy tính Casio",
        image: "https://cdn.fast.vn/tmp/20230215130937-1.PNG",
        des: "Màn hình máy tính CASIO DS-3018 được thiết kế to rộng và các số được hiển thị sắc nét, giúp bạn có thể dễ dàng quan sát rõ ràng, tránh cận thị.",
        price: 125000
    },
    {
        id: 39,
        name: "Máy tính Casio AX 12B",
        category:"Máy tính Casio",
        image: "https://cdn.fast.vn/tmp/20200702152447-2.PNG",
        des: "Kích thước (Sâu × Rộng × Cao) : 175,5×110,5×25mm",
        price: 215000
    },
    {
        id: 40,
        name: "Đĩa CD Maxell",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20200729092831-dia-cd-maxell.jpg",
        des: "- Hãng sản xuất: Maxell\n" +
            "\n" +
            "- Nơi sản xuất: Đài Loan\n" +
            "\n" +
            "- Dung lượng đĩa: 700MB\n" +
            "\n" +
            "- Kiểu đĩa: CD-R (Ghi 1 lần)",
        price: 5000
    },

];
export default products;
