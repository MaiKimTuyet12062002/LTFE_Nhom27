import React from "react";

const products= [
    {
        id:1 ,
        name:  "Giấy in BILL",
        category: "Giấy In ấn - Photo",
        image: "https://cdn.fast.vn/tmp/20200917103116-e8ffde644ffd29fbb2d6f7453a77e655.jpg",
        des: "Giấy in bill K57 giá rẻ đường kính 57mm được sản xuất tại Việt Nam với kỹ thuật công nghệ Nhật Bản. Giấy in bill K57 chỉ dành riêng cho những máy in hóa đơn có kích thước đầu in 57mm Giấy cảm nhiệt tốt, rõ MUA chữ, không nhòe nét khi in, in hình ảnh và các ký tự với chất lượng in tốt nhất. Bề mặt giấy láng mịn, bảo vệ đầu in, không làm hư hỏng thiết bị máy in. Có bọc tem bạc chống ẩm mốc, sử dụng được trong thời gian dài.",
        price:3900
    }  ,
    {
        id: 2,
        name: "Giấy in BILL tính tiền 8F",
        category: "Giấy In ấn - Photo",
        image: "https://cdn.fast.vn/tmp/20230202163150-450.jpg",
        des: "Giấy in bill tính tiền 8F (80x45mm)\n" +
            "\n" +
            "Công dụng: in hóa đơn bán hàng, in bill máy quẹt thẻ POS, bill máy in di động\n" +
            "Đặc Điểm: là giấy cảm nhiệt không cần mực in\n" +
            "Đơn Vị Tính: cuộn\n" +
            "Quy Cách: 100 cuộn (01 thùng)\n" +
            "Màu Sắc: trắng\n" +
            "Bảo Quản: Nhiệt độ: 10 ~ 55º C. Độ ẩm: 55 ~ 95% RH. Tránh xa nguồn nhiệt, dầu mỡ.",
        price: 4850
    }  ,
    {
        id: 3,
        name: "Giấy A4 Double A 80 Gsm",
        category: "Giấy In ấn - Photo",
        image: "https://cdn.fast.vn/tmp/20200718201248-6.jpg",
        des: "Giao hàng miễn phí (nếu cách Viettel Store dưới 10km). Bảo hành chính hãng",
        price: 79000
    },
    {
        id: 4,
        name: "Bút dạ quang ERAS E175",
        category: "Bút - Mực",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/02/da-quang-400x400.jpg",
        des: "Bút dạ quang ERAS với những màu sắc bắt mắt. Bút có kiểu dáng đơn giản, hiện đại",
        price: 20000
    },
    {
        id:5 ,
        name:  "Hộp 20 Bút Thiên Long TL036",
        category: "Bút - Mực",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/08/036-400x400.jpg",
        des: "Bút sử dụng cơ cấu bấm, thân tròn và chắc chắn.Thân bút làm từ nhựa màu đục. Giắt bút bằng kim loại mạ crom sáng bóng. Tảm có đệm mềm (grip) giúp cầm êm tay và giảm trơn trượt khi viết. Đầu bút dạng cone , 0.7mm sản xuất tại Thụy Sĩ.",
        price:220000
    }  ,
    {
        id: 6,
        name: "Bút dạ quang Staedtler - đủ màu (1 cây)",
        category: "Bút - Mực",
        image: "https://cdn.fast.vn/tmp/20200704082706-7.jpg",
        des: "-Công dụng : Công dụng của bút dạ quang hay gọi là bút nhớ dòng được ứng dụng nhiều và phải nói là thường xuyên hằng ngày trong cuộc sống của chúng ta như, học sinh sinh viên dùng trong học tập, nhân viên văn phòng dùng để ghi chú đánh dấu các loại giấy tờ quan trọng\n" +
            "-Đặc Điểm : Bút dạ quang Staedler là loại bút dùng để đánh dấu, nhớ dòng dùng cho mọi loại giấy. Màu mực tươi sáng làm nổi bật các dòng cần điểm cần lưu ý. Mực viết được sản xuất Đức từ chất màu hoà với nước vì vậy không gây mùi khó chịu và không độc hại. Bút có nhiều màu sắc lựa chọn giúp cho bạn thể hiện dòng thông tin của mình rõ ràng hơn",
        price: 17000
    }  ,
    {
        id: 7,
        name: "Tập 96 trang ABC Hòa Bình",
        category: "Sổ - Tập - Bao thư",
        image: "https://cdn.fast.vn/tmp/20200818102845-2.jpg",
        des: "Tập 96 trang ABC Hòa Bình (4 ô ly) - 80gsm\n" +
            "Bảo quản:\n" +
            "\n" +
            "                      Nhiệt độ: 10 ~ 55º C.\n" +
            "\n" +
            "                      Độ ẩm: 55 ~ 95% RH.\n" +
            "\n" +
            "                      Tránh xa nguồn nhiệt, dầu mỡ.",
        price: 7800
    }  ,
    {
        id: 8,
        name: "Sổ xé A4 Pgrand",
        category: "Sổ - Tập - Bao thư",
        image: "https://cdn.fast.vn/image/data/1/9/69167so%20xe.jpg",
        des: "Là một trong những vật dụng không thể thiếu của giới sinh viên, học sinh hay người làm văn phòng, sản phẩm sẽ là trợ thủ đắc lực, giúp bạn lưu trữ được thông tin, dữ liệu, ý tưởng bất kì khi nào, hỗ trợ tốt trong công việc và cuộc sống hằng ngày của bạn.\n" +
            "\n" +
            "Sản phẩm có kiểu dáng nhỏ gọn, vừa tay cầm, tiện lợi cho bạn mang theo bên người, sử dụng bất cứ lúc nào một cách tiện lợi và hiệu quả. Bìa vở được thiết kế chắc chắn, dày dặn, bảo vệ tốt phần giấy bên trong.\n" +
            "\n" +
            "Ngoài ra, với màu sắc trang nhã, sản phẩm phù hợp với những bạn không thích quá nhiều hoa văn cầu kì.",
        price: 25400
    },
    {
        id: 9,
        name: "Bao thư xi măng A4",
        category: "Sổ - Tập - Bao thư",
        image: "https://cdn.fast.vn/tmp/20220726165835-z3595914386513_dfddaff6e51095246904c8bfb597532e.jpg",
        des: "Bao thư xi măng A4\n" +
            "\n" +
            "Bảo quản:\n" +
            "\n" +
            "                      Nhiệt độ: 10 ~ 55º C.\n" +
            "\n" +
            "                      Độ ẩm: 55 ~ 95% RH.\n" +
            "\n" +
            "                      Tránh xa nguồn nhiệt, dầu mỡ.",
        price: 2500
    },
    {
        id: 10,
        name: "Tập 200 trang Sinh Viên - ô ngang - 17.5x25.5cm",
        category: "Sổ - Tập - Bao thư",
        image: "https://cdn.fast.vn/image/data/4/41349tap-sinh-vien-heo-boo-200-dana-book%20(1).gif",
        des: "Bảo quản:\n" +
            "\n" +
            "                      Nhiệt độ: 10 ~ 55º C.\n" +
            "\n" +
            "                      Độ ẩm: 55 ~ 95% RH.\n" +
            "\n" +
            "                      Tránh xa nguồn nhiệt, dầu mỡ.",
        price: 17500
    },
    {
        id: 11,
        name: "Bao thư trắng A4",
        category: "Sổ - Tập - Bao thư",
        image: "https://cdn.fast.vn/image/data/7/80275baothu.jpg",
        des: "Ngày nay, có khá nhiều đơn vị sử dụng bao thư được in sẵn các thông tin của đơn vị. Tuy nhiên điều này cũng cần tốn một khoản kinh phí không nhỏ. Nếu ngân sách của bạn chưa sẵn sàng cho những khoản chi này, bạn có thể cân nhắc sử dụng bao thư trắng trong công việc. \n"+
            "\n" + "Vì phong bì thư là vật dụng bao bọc bên ngoài, nên cần yêu cầu khá khắt khe về độ dày của chất liệu giấy nguyên liệu. Không kể loại bì thư nào, chúng đều được sử dụng giấy có độ dày từ 80gms trở lên.",
        price: 1000
    },
    {
        id: 12,
        name: "Tập học sinh – FUTUREBOOK",
        category: "Sổ - Tập - Bao thư",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2021/12/200t-400x400.jpg",
        des: "Đặc Điểm đối tượng tiệu dùng từ tập viết vở lòng, các loại tập viết luyện chữ lớp nhỏ, vở dành cho các đối tượng cấp 1 cấp 2, cấp 3, giáo viên, sinh viên và nhiều đối tượng khác.",
        price: 10000
    },
    {
        id: 13,
        name: "Bao thư hồ sơ A4 - vàng (1 Cái)",
        category: "Sổ - Tập - Bao thư",
        image: "https://cdn.fast.vn/tmp/20201225163141-3.PNG",
        des: "Đơn Vị Tính : Cái\n" +
            "Quy Cách : 100 Cái / Xấp",
        price: 1200
    },
    {
        id: 14,
        name: "Giấy note nhiều màu",
        category: "Dụng cụ văn phòng",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/02/note-phan-trang-400x400.jpg",
        des: "Công dụng: Miếng phân trang hình mũi tên Post-it giúp bạn phân loại và quản lý hồ sơ hiệu quả, đánh dấu trang sách, từ điển.\n" +
            "Đặc Điểm: Miếng phân trang có các đặc điểm nổi trội như: không thấm nước, không rách",
        price: 17000
    },
    {
        id: 15,
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
    {
        id: 16,
        name: "Thước cứng 30cm",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20211201160050-thuoc-nhua-tl-30cm-vppminhanh-vn.jpg",
        des: "Công dụng : có các vạch chia khoảng cách khá tỉ mỉ và rõ ràng cùng những con số chỉ đơn vị in đậm nét, giúp bạn có thể đo được chính xác kích thước của các vật dụng hoặc kẻ những đường thẳng tinh tế. Thước có độ dài 30cm thuận tiện cho học sinh, sinh viên, nhân viên văn phòng sử dụng.\n" +
            "Đặc Điểm Dụng cụ thước kẻ dùng trong học tập,văn phòng có nhiều kích thước dộ dài khác nhau, tiện dụng, sản xuất tại VN\n" +
            "Vạch chia cm rõ ràng tạo những đường kẻ chính xác.Màu sắc đa dạng",
        price: 5900
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
        name: "Phiếu chi 2 liên dầy 13x19",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/image/data/7/41783pc.jpg",
        des: "Bảo quản:\n" +
            "\n" +
            "                      Nhiệt độ: 10 ~ 55º C.\n" +
            "\n" +
            "                      Độ ẩm: 55 ~ 95% RH.\n" +
            "\n" +
            "                      Tránh xa nguồn nhiệt, dầu mỡ.\n",
        price: 12800
    },
    {
        id: 19,
        name: "Giấy note nhiều màu",
        category: "Dụng cụ văn phòng",
        image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400/https://vanphong-pham.com/wp-content/uploads/2022/02/note-phan-trang-400x400.jpg",
        des: "Giấy ghi chú 4 màu dạ quang 3x3 GS-04\n" +
            "\n" +
            "Quy cách: 4 màu/vỉ\n" +
            "\n" +
            "Bảo quản:\n" +
            "\n" +
            "                      Nhiệt độ: 10 ~ 55º C.\n" +
            "\n" +
            "                      Độ ẩm: 55 ~ 95% RH.\n" +
            "\n" +
            "                      Tránh xa nguồn nhiệt, dầu mỡ.",
        price: 17000
    },
    {
        id: 20,
        name: "Thẻ Zipper Dọc TL207 (7.5x11cm) + Dây Dù Kẹp",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20220716094718-dsa.PNG",
        des: "\n" +
            "Công dụng có bề mặt trong suốt giúp dễ hiển thị thông tin tấm trên thẻ nhân viên. Nó vừa giúp bạn bảo quản thẻ sạch sẽ, không bị rách hay trầy xước vừa tạo nét chỉnh chu trong bộ trang phục.\n" +
            "\n" +
            "Sản phẩm sẽ đồng hành cùng nhân viên văn phòng, cán bộ, công nhân, học sinh, sinh viên...\n" +
            "Đặc Điểm là sản phẩm thẻ đeo bằng nhựa dẻo có nắp đóng mở zipper chống thấm nước, khổ ngang rất phổ biến trong giới văn phòng.",
        price: 2800
    },
    {
        id: 21,
        name: "Kim bấm số 10 Plus",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20210217090347-6.JPG",
        des: "Công dụng Kim bấm số 10 Plus là loại kim dùng cho dụng cụ bấm kim số 10 giúp giữ cho các tập tài liệu giấy chắc chắn không bị bung rời, có thể sử dụng cho nhiều loại bấm kim số 10.\n" +
            "\n" +
            "Sản phẩm thiết kế đơn giản, dễ sử dụng và không độc hại, số lượng giấy bấm tùy theo đặc tính của kim bấm số 10.\n" +
            "Đặc Điểm Chất liệu bền bỉ, tiện dụng cho văn phòng và cơ sở in ấn.\n" +
            "Kim bấm số 10 dùng cho bấm kim số 10 phổ biến.\n" +
            "Giúp kẹp bấm giấy tờ đồng bộ và tránh thất lạc.",
        price: 2500
    },
    {
        id: 22,
        name: "Kẹp giấy tam giác C62",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20200512141952-szwi4f_simg_de2fe0_500x500_maxb.jpg",
        des: "Công dụng có thể kẹp chặt lượng tài liệu ít, mỏng tối đa 10 tờ A4 để không bị bung rời.\n" +
            "\n" +
            "Sản phẩm thiết kế đơn giản, dễ sử dụng mà không bị đau tay. Sử dụng kẹp phổ biến trong việc bảo quản, phân loại và tránh thất lạc các liên giấy, tài liệu rời. Nhờ đó mà công tác văn phòng sẽ trở nên đơn giản và nhẹ nhàng hơn.\n" +
            "Đặc Điểm : Loại kẹp nhỏ gọn, dễ sử dụng.\n" +
            "Bền bỉ và không gỉ sét mang đến hiệu quả lâu dài.\n" +
            "Sử dụng hàng ngày trong mọi văn phòng để sắp xếp giấy tờ.\n" +
            "Đóng hộp 100 cái tiện dụng và tiết kiệm hơn.",
        price: 2300
    },
    {
        id: 23,
        name: "Đồ bấm kim số 10 Plus",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20210217090255-4.JPG",
        des: "Bấm kim số 10 Plus được sản xuất tại nhà máy ở Khu công nghiệp Nhơn Trạch, tỉnh Đồng Nai bằng công nghệ Nhật Bản nên quý khách hàng có thể yên tâm vào chất lượng, hơn nữa với Bấm kim số 10 Plus đã được tạo được 1 thương hiệu vững chắc, đã đang và sẽ đồng hành cùng thành công của quý vị.",
        price: 25500
    },
    {
        id: 24,
        name: "Cây ghim giấy",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/image/data/tap_pham/46953cay%20ghim%20giay.jpg",
        des: "Công dụng Tiện dụng trong văn phòng.\n" +
            "Dùng để ghim giữ các liên giấy, tài liệu rời...\n" +
            "Đặc Điểm Cây ghim giấy để bàn được thiết kế gọn nhẹ.\n" +
            "Đế ghim chắc chắn\n" +
            "Cây ghim giấy nhiều kiểu dáng.",
        price: 15000
    },
    {
        id: 25,
        name: "Súng bắn tem mác quần áo",
        category: "Dụng cụ văn phòng",
        image: "https://cdn.fast.vn/tmp/20230218073533-5.PNG",
        des: "Chức năng: dùng để đưa gọng nhựa nối quần /áo với 1 nhãn , mác, side quần áo một cách dể dàng dể dàng",
        price: 50000
    },
    {
        id: 26,
        name: "Băng keo 2 mặt 1.2cm - 9 mét",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/tmp/20200717150007-1.jpg",
        des: "Đặc Điểm : Dai, bền với sự bám dính tuyệt vời là những tính năng đặc biệt của loại băng keo được phủ hai mặt keo Acrylic này.\n" +
            "Lớp keo có thể dính chặt với hầu hết các bề mặt vật liệu nhẵn như nhựa, kim loại, kính,…\n" +
            "Thích hợp để gắn chặt hai bề mặt cùng hay khác chất liệu với nhau\n" +
            "Đơn Vị Tính : Cuộn ( 1 cây / 24 cuộn )\n" +
            "Quy Cách : 1.2cm",
        price: 1200
    },
    {
        id: 27,
        name: "Băng keo đục 5F - 100Y",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/tmp/20200719122226-2-1-.jpg",
        des: "Công dụng : Băng keo 5cm - 100 yard là loại keo trong 1 mặt nên khi dán nội dung không bị che khuất. Sản phẩm được sản xuất từ chất liệu OPP chống thấm tốt và độ dính cao, không rách. Thiết kế keo bề rộng keo 5 cm, đóng cuộn nhỏ với chiều dài 100 yard tiện dùng cho việc dán đơn giản và không thường xuyên.\n" +
            "Đặc Điểm : Dính chặt trên bề mặt các loại giấy - Dính bề mặt kim loại, thủy tinh, nhựa, gốm... Sản phẩm có thiết kế nhỏ gọn, dễ bảo quản trong ngăn kéo, đặc biệt chuyên dùng cho các công việc văn phòng và cắt dán thủ công.",
        price: 7500
    },
    {
        id: 28,
        name: "Dao rọc giấy SDI lớn 0423",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/tmp/20210217101223-0423.JPG",
        des: "Công dụng là dụng cụ hữu ích cho nhiều ngành nghề và đối tượng, từ học sinh, sinh viên, nhân viên công sở đến thợ chế tác thủ công, thợ điện, ngành đóng gói… Một chiếc dao sắc bén, tiện dụng sẽ giúp bạn hoàn thành công việc nhanh hơn, tiết kiệm thời gian.",
        price: 11000
    },
    {
        id: 29,
        name: "Kéo Văn Phòng Deli 6009 - 18cm",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/image/data/22/893441.jpg",
        des: "Lưỡi kéo làm từ hợp kim thép cao cấp sắc nhưng đảm bảo an toàn, không nhọn, không làm đau xước tay và cũng không phải lo cắt vào tay làm đau tay",
        price: 25000
    },
    {
        id: 30,
        name: "Kéo cắt chỉ / Kéo bấm",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/image/data/01072019/300819/8802858d13f87b683b-21-03-2017-090713-2jpg.jpg",
        des: "Bảo quản:\n" +
            "\n" +
            "                      Nhiệt độ: 10 ~ 55º C.\n" +
            "\n" +
            "                      Độ ẩm: 55 ~ 95% RH.\n" +
            "\n" +
            "                      Tránh xa nguồn nhiệt, dầu mỡ.",
        price: 6400
    },
    {
        id: 31,
        name: "Băng keo bấm giá - màu xanh",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/image/data/15/81730xanh.jpg",
        des: "Bảo quản:\n" +
            "\n" +
            "                      Nhiệt độ: 10 ~ 55º C.\n" +
            "\n" +
            "                      Độ ẩm: 55 ~ 95% RH.\n" +
            "\n" +
            "                      Tránh xa nguồn nhiệt, dầu mỡ.",
        price: 3600
    },
    {
        id: 32,
        name: "Bìa còng 7F ABBA",
        category: "Bìa - Kệ - Rổ",
        image: "https://cdn.fast.vn/tmp/20200929163857-ce4cd54ce7d6559ae43f1394d39a6861.jpg",
        des: "Công dụng Bìa còng 5-7cm giúp lưu trữ tài liệu một .cách tiết kiệm không gian cho mọi văn phòng.\n" +
            " \n" +
            "Đặc Điểm : Hai còng kim loại chắc chắn, kẹp chặt hồ sơ với thao tác đơn giản, có khả năng lưu giữ hơn 600 tờ giấy A4",
        price: 22000
    },
    {
        id: 33,
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
        id: 34,
        name: "Bìa 3 dây TN 20F",
        category: "Bìa - Kệ - Rổ",
        image: "https://cdn.fast.vn/tmp/20220729134349-b58f3d896c6e7428a412f364d4aa94fe_tn.jpg",
        des: "Công dụng: Bìa 3 dây, tiện lợi trong việc lưu trữ tài liệu, hồ sơ trong văn phòng.\n" +
            "Đặc Điểm: là sản phẩm với nguyên liệu làm bằng bìa giấy cứng, độ dày gáy khoảng 7F, có 3 dây nằm ở 3 cạnh bìa chắc chắn giúp lưu trữ hồ sơ với số lượng lớn",
        price: 13000
    },
    {
        id: 35,
        name: "Rổ nhựa xéo 3 ngăn TTM",
        category: "Bìa - Kệ - Rổ",
        image: "https://cdn.fast.vn/image/data/Bia/6353ke-ro-xeo-3-ngan-lien-hoan.jpg",
        des: "Là sản phẩm được làm bằng nhựa kích cỡ 30 x 30 x 12 cm, 3 ngăn đứng liên hoàn - với chiều rộng mỗi ngăn khoảng 10cm chứa chứng từ các khổ A4-A5-A6, màu phổ biến: xanh dương. Sản phẩm được sử dụng để lưu trữ các chứng từ để tạo sự chuyên nghiệp, thuận tiện cho công việc văn phòng hàng ngày của bạn.",
        price: 22500
    },
    {
        id: 36,
        name: "Bìa còng nhẫn nhựa 3.5cm",
        category: "Bìa - Kệ - Rổ",
        image: "https://cdn.fast.vn/tmp/20210217082814-biacongnhan3-5cm.jpg",
        des: "Công dụng – Lưu và cất trữ các giấy tờ tài liệu. Tạo cho chúng một nơi để ngăn nắp theo thứ tự, dễ dàng khi tìm kiếm.",
        price: 15000
    },
    {
        id: 37,
        name: "Bìa còng 7F ABBA",
        category: "Bìa - Kệ - Rổ",
        image: "https://cdn.fast.vn/tmp/20200929163857-ce4cd54ce7d6559ae43f1394d39a6861.jpg",
        des: "Công dụng Bìa còng 5-7cm giúp lưu trữ tài liệu một .cách tiết kiệm không gian cho mọi văn phòng.",
        price: 22000
    },
    {
        id: 38,
        name: "Máy tính DS-480",
        category:"Máy tính Casio",
        image: "https://cdn.fast.vn/image/data/222371.PNG",
        des: " Kích thước: 13,5cm*18,5cm",
        price: 110000
    },
    {
        id: 39,
        name: "Máy tính DS - 3018",
        category:"Máy tính Casio",
        image: "https://cdn.fast.vn/tmp/20230215130937-1.PNG",
        des: "Màn hình máy tính CASIO DS-3018 được thiết kế to rộng và các số được hiển thị sắc nét, giúp bạn có thể dễ dàng quan sát rõ ràng, tránh cận thị.",
        price: 125000
    },
    {
        id: 40,
        name: "Máy tính Casio AX 12B",
        category:"Máy tính Casio",
        image: "https://cdn.fast.vn/tmp/20200702152447-2.PNG",
        des: "Kích thước (Sâu × Rộng × Cao) : 175,5×110,5×25mm",
        price: 215000
    },
    {
        id: 41,
        name: "Giấy A4 Excel 70 Gsm",
        category: "Giấy In ấn - Photo",
        image: "https://cdn.fast.vn/tmp/20220727082028-70-a4.PNG",
        des: "Giấy A4 là ngày càng được sử dụng nhiều trong thời đại thông tin hiện nay bởi nhiều công dụng. Ngày nay có quá nhiều thương hiệu giấy ra đời khiến bạn khó khăn không biết nên dùng loại nào ư? Nếu bạn chưa tìm được dòng giấy nào phù hợp, hãy tham khảo dòng giấy A4 Excel định lượng 70gsm với chất lượng và giá cả ổn định.",
        price: 46000
    },
    {
        id: 42,
        name: "Giấy in BILL tính tiền 8F - K80x80 (50 cuộn / Thùng)",
        category: "Giấy In ấn - Photo",
        image: "https://cdn.fast.vn/tmp/20220625161001-k80x80.PNG",
        des: "CHI TIẾT SẢN PHẨM\n" +
            "Phân Loại:\n" +
            "+ K80x45mm                                       + K57x45mm\n" +
            "- Chiều cao: 80mm                              - Chiều cao: 57mm\n" +
            "- Đường kính: 45mm                           - Đường kính : 45mm\n" +
            "\n" +
            "+ K57x38mm                                        + K57x30mm\n" +
            "- Chiều cao: 57mm                               - Chiều cao : 57mm\n" +
            "- Đường kính: 38mm                            - Đường kính : 30mm",
        price: 775000
    },
    {
        id: 43,
        name: "Giấy Note Please Sign Pronoti (20x48mm)",
        category: "Giấy In ấn - Photo",
        image: "https://cdn.fast.vn/tmp/20200718161257-14.jpg",
        des: "Đặc Điểm Sản phẩm có thể tháo dán và gỡ ra dễ dàng nhờ lớp keo mỏng. Chất lượng giấy đẹp, láng mịn, thấm mực tốt nhưng không bị lem, nhòe. Keo dính bền lâu nhưng dễ di dời. Ứng dụng công nghệ sản xuất hiện đại mang đến chất lượng giấy tiêu chuẩn và hoàn toàn thân thiện với người dùng. Loại giấy này có thiết kế nhỏ gọn, tiện lợi cho việc mang theo mọi lúc mọi nơi.",
        price: 21000
    },
    {
        id: 44,
        name: "Giấy in BILL tính tiền 5F - K57x45 (100 cuộn / Thùng)",
        category:"Giấy In ấn - Photo",
        image: "https://cdn.fast.vn/tmp/20220102135804-k57.PNG",
        des: "Tên Sản Phẩm: Giấy in nhiệt, in hóa đơn\n" +
            "\n" +
            "Phân Loại: \n" +
            "\n" +
            "+ K57x45mm\n" +
            "\n" +
            "- Chiều cao: 57mm\n" +
            "\n" +
            "- Đường kính: 45mm ",
        price: 430000
    },
    {
        id: 45,
        name: "Giấy A5 Double A 80 Gsm (Từ giấy A4 80gsm cắt làm đôi thành A5)",
        category:"Giấy In ấn - Photo",
        image: "https://cdn.fast.vn/tmp/20200718201748-11.jpg",
        des: "Đặc điểm:\n" +
            "\n" +
            "                        Giấy A5 Double A: Loại giấy in cao cấp, trắng, đẹp,\n" +
            "\n" +
            "                        thích hợp với tất cả các loại Máy in phun, Máy in Laser,\n" +
            "\n" +
            "                        Máy Fax laser, Máy Photocopy. In đảo 2 mặt không lo kẹt giấy.\n" +
            "\n" +
            "                        Giấy được đóng gói và nhập khẩu từ Thailand",
        price: 42000
    },
    {
        id: 46,
        name: "Bìa Accor Thiên Long không lỗ",
        category: "Bìa - Kệ - Rổ",
        image: "https://cdn.fast.vn/tmp/20200719214405-z1982652691871_471f529296706aec04893507f1f76693.jpg",
        des: "Công dụng Kích thước nhỏ gọn, nhẹ\n" +
            "Tiện lợi lưu trữ và bảo quản hồ sơ\n" +
            "Đặc Điểm Được làm bằng nhựa PP đặc biệt chịu lực cao\n" +
            "01 bìa có thể chứa được 50 tờ A4",
        price: 5000
    },
    {
        id: 47,
        name: "Bìa Accor Thiên Long có lỗ",
        category: "Bìa - Kệ - Rổ",
        image: "https://cdn.fast.vn/tmp/20200719214305-z1982652742536_81506d11979e00d02e47539af05c732b.jpg",
        des: "Công dụng Kích thước nhỏ gọn, nhẹ\n" +
            "Tiện lợi lưu trữ và bảo quản hồ sơ\n" +
            "Đặc Điểm Được làm bằng nhựa PP đặc biệt chịu lực cao\n" +
            "01 bìa có thể chứa được 50 tờ A4",
        price: 5000
    },
    {
        id: 48,
        name: "Sổ da CK7 dày (16 x 21 cm)",
        category: "Sổ - Tập - Bao thư",
        image: "https://cdn.fast.vn/tmp/20211105091414-so-da-ck7-day-16-21cm-02.jpg",
        des: "Trong các món đồ dùng thiết yếu mà công ty thường sắm để cấp cho nhân viên hiện nay, không thể thiếu sự có mặt của các loại sổ hay vở ghi chép, hay các loại bao thư đẹp sử dụng trong các hoạt động của doanh nghiệp. Một số đơn vị để tạo thêm tính chuyên nghiệp còn in thêm logo để đối tác dễ nhận biết thương hiệu mình.",
        price: 25000
    },
    {
        id: 49,
        name: "Băng keo simili xanh dương 3.6cm - 8 mét",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/tmp/20200719124655-3-2-.jpg",
        des: "Đặc điểm :\n" +
            "\n" +
            "Dùng để dán gáy sách\n" +
            "Chất dính được làm từ cao su tự nhiên.\n" +
            "Chống nước tốt.\n" +
            "Dễ cắt. Có nhiều màu sắc để lựa chọn.",
        price: 5000
    },
    {
        id: 50,
        name: "Băng keo xốp 4.8F",
        category: "Băng keo - Dao - Kéo",
        image: "https://cdn.fast.vn/image/data/bangkeo_dao_keo_thuoc/739921007_Bang-keo-2-mat--mousse-48mmx9Y-BKM-04.jpg",
        des: "Đặc điểm :Băng keo 2 mặt có nhiều kích cỡ khác nhau với lớp keo mỏng nhưng dính chắc được bọc lót 1mặt giấy dễ dàng sử dụng và tiện lợi trong nhiều mục đích khác nhau.\n" +
            "Đóng gói: 6 cuộn/ cây",
        price: 18200
    },
    {
        id: 51,
        name: "Bút lông dầu Thiên Long PM04 xanh",
        category: "Bút - Mực",
        image: "https://cdn.fast.vn/tmp/20200703100903-25.PNG",
        des: "Bút có thiết kế rất hợp lý, dễ sử dụng, chất lượng ổn định .Sản phẩm được sản xuất theo công nghệ hiện đại, đạt tiêu chuẩn chất lượng quốc tế, kiểu dáng được cải tiến ấn tượng , thân bút cầm chắc tay , dễ cầm nắm , không gây mỏi tay khi sử dụng.",
        price: 7500
    },
    {
        id: 52,
        name: "Bút bi Vâng Thiên (bút nến)",
        category: "Bút - Mực",
        image: "https://cdn.fast.vn/tmp/20210217100930-vang-thien.JPG",
        des: "Bút bi là sản phẩm quá đỗi thông dụng và ai cũng biết, cũng từng dùng qua. Bạn có thể bắt gặp chúng ở bất cứ đâu vì nhỏ gọn, bền, dễ sử dụng.",
        price: 2100
    },
    {
        id: 53,
        name: "Bút bi dán bàn đôi Thiên Long FO-PH01 xanh",
        category: "Bút - Mực",
        image: "https://cdn.fast.vn/tmp/20210217150053-db4a105c53e0e42ce8f92011ae8d8ec0_fe71750e33d24824829f5a45b594cb10_master.jpg",
        des: "Bút đế cắm Flexoffice FO-PH01. Bút chuyên để trên bàn làm việc nơi đông người, bàn tiếp tân,ngân hàng, siêu thị...Bút bền màu, đẹp, nét viết thanh, sắc nét, không lem mực, ít khi chảy mực.",
        price: 13000
    },
    {
        id: 54,
        name: "Gôm đen Thiên Long E011",
        category: "Bút - Mực",
        image: "https://cdn.fast.vn/tmp/20230424130239-870_e_011_01.jpg",
        des: "Gôm Đen E-011 với độ bền dẻo cao có khả năng tẩy sạch các vết chì đen mà không gây rách giấy, không làm bẩn, lem trên giấy trắng. Được làm từ chất liệu Polymer mềm, dẻo, không giòn gẫy hay khô cứng theo thời gian mà luôn giữ nguyên tính chất mềm mại, sẵn sàng cho bạn sử dụng.",
        price: 3500
    },
    {
        id: 55,
        name: "Bút chì 2B G Star",
        category: "Bút - Mực",
        image: "https://cdn.fast.vn/image/data/new/55860b%C3%BAt%20ch%C3%AC%20g%E1%BB%97.jpg",
        des: "Công dụng Được thiết kế nhỏ gọn, có kích thước nhỏ gọn, dễ dàng mang theo khi đi học hay đi làm mà không chiếm quá nhiều không gian diện tích. Bút cho bạn dễ dàng cầm nắm và điều chỉnh nét vẽ. Với tiêu chuẩn chất lượng an toàn, Bút Chì Gỗ là sự lựa chọn hoàn hảo để bạn vẽ, phác thảo hay viết.",
        price: 1800
    },
    {
        id: 56,
        name: "Chuột máy tính có dây Genius",
        category:"Máy tính Casio",
        image: "https://cdn.fast.vn/image/data/7/77690chuot.jpg",
        des: "Công dụng loại chuột plug-and-play cho phép người dùng kết nối với máy tính không cần cài đặt. Khi cần sử dụng, bạn chỉ cần cắm đầu USB vào thiết bị là chuột đã sẵn sàng cho công việc. Điều khiển con trỏ chính xác đến nơi bạn muốn để chỉnh sửa tài liệu, điều hướng trang web.",
        price: 152000
    },
    {
        id: 57,
        name: "USB Kingston 32G",
        category:"Máy tính Casio",
        image: "https://cdn.fast.vn/image/data/new/2354032g.jpg",
        des: "Công dụng có thiết kế độc đáo, được làm bằng nhựa cứng, đem tới sự sang trọng, bền bỉ cho thiết bị. Sản phẩm có cổng kết nối đáp ứng khả năng trao đổi dữ liệu qua lại giữa các thiết bị một cách nhanh chóng.",
        price: 219800
    },
    {
        id: 58,
        name: "Bàn phím máy tính Genius ",
        category:"Máy tính Casio",
        image: "https://cdn.fast.vn/tmp/20210205142025-6.JPG",
        des: "Bàn Phím Genius KB-101\n" +
            "\n" +
            "- Có Dây Cổng USB\n" +
            "\n" +
            " \n" +
            "\n" +
            "Thông tin sản phẩm:\n" +
            "\n" +
            "- Loại bàn phím thường - Kết nối USB 2.0 - Kích thước: 440.51 x 139.67 x 27.08 mm\n" +
            "\n" +
            "- Chiều dài dây: 1,5m",
        price: 225000
    },
    {
        id: 59,
        name: "Miếng lót Chuột NHỎ 18x22cm",
        category:"Máy tính Casio",
        image: "https://cdn.fast.vn/image/data/01072019/64572a040b5bcdb403f1e6651.jpg",
        des: "Công dụng Không chỉ thể hiện tính thời trang mà sản phẩm lót chuột quang này còn cho khả năng hỗ trợ chuột chuyên dụng nhạy bén và chính xác hơn.",
        price: 17600
    },
    {
        id: 60,
        name: "Pin tiểu 3A Panasonic – vĩ 2 viên",
        category:"Máy tính Casio",
        image: "https://cdn.fast.vn/image/data/01072019/41012pin.jpg",
        des: "Công dụng : Dùng cho các thiết bị cần năng lượng cao như: Máy chụp hình, máy nhắn tin, máy hát đĩa CD, trò chơi điện tử và các thiết bị y tế cầm tay, Radio, đồng hồ treo tường, Walkman, Flash chụp hình, đèn pin, remote, ..",
        price: 10000
    },


];
export default products;
