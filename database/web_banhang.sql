-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3307
-- Thời gian đã tạo: Th12 06, 2021 lúc 06:38 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `web_banhang`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `discount`
--

CREATE TABLE `discount` (
  `discount_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `valid_date` date NOT NULL,
  `invalid_date` date NOT NULL,
  `discount_value` double NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount_used` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `discount`
--

INSERT INTO `discount` (`discount_id`, `valid_date`, `invalid_date`, `discount_value`, `quantity`, `amount_used`) VALUES
('NOEL20', '2021-11-29', '2021-12-31', 0.2, 30, 10),
('XMAS30', '2021-11-29', '2021-12-31', 0.3, 30, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `don_hang`
--

CREATE TABLE `don_hang` (
  `id_donhang` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_sanpham` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_khachhang` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ten_khachhang` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ten_sanpham` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `size` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `so_luong` int(11) NOT NULL,
  `ngay_dathang` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `gia_tien` bigint(20) NOT NULL,
  `type_khachhang` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dia_chi` text COLLATE utf8_unicode_ci NOT NULL,
  `tai_khoan` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sdt` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `trang_thai` text COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Đang xử lý'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `don_hang`
--

INSERT INTO `don_hang` (`id_donhang`, `id_sanpham`, `email_khachhang`, `ten_khachhang`, `ten_sanpham`, `size`, `so_luong`, `ngay_dathang`, `gia_tien`, `type_khachhang`, `dia_chi`, `tai_khoan`, `sdt`, `trang_thai`) VALUES
('9Nos4j7nA', 'SP10', 'toan@gmail.com', 'Trần Quốc Toản', 'Ví Slender', '', 1, '2021-11-30 15:39:42', 364000, 'Guest', 'Thống Nhất, Đồng Nai', 'undefined', '0123456789', 'Đang xử lý'),
('9Nos4j7nA', 'SP1', 'toan@gmail.com', 'Trần Quốc Toản', 'Túi Keepall Bandoulire 55', '', 1, '2021-12-02 11:02:41', 1001000, 'Guest', 'Thống Nhất, Đồng Nai', 'undefined', '0123456789', 'Giao thành công'),
('pHiZO85TC', 'SP12', '123', '123', 'Túi LouisVuitton', '', 1, '2021-12-02 09:53:20', 360000, 'Guest', '123', 'undefined', '132', 'Đã hủy'),
('-b212ghJA', 'SP10', 'phat@gmail.com', 'Ngô Phát', 'Ví Slender', '', 1, '2021-11-30 15:43:33', 520000, 'Guest', 'Quận 1, TPHCM', 'undefined', '02357964', 'Đang xử lý'),
('-b212ghJA', 'SP1', 'phat@gmail.com', 'Ngô Phát', 'Túi Keepall Bandoulire 55', '', 1, '2021-11-30 15:43:33', 1430000, 'Guest', 'Quận 1, TPHCM', 'undefined', '02357964', 'Đang xử lý'),
('lzinJeWVU', 'SP1', '123', '123', 'Túi Keepall Bandoulire 55', '', 1, '2021-12-02 09:53:12', 1144000, 'Guest', '123', 'undefined', '123', 'Đã hủy'),
('nyz3gAYt3', 'SP1', 'admin1@gmail.com', 'Trần Văn Toàn', 'Túi Keepall Bandoulire 55', '', 1, '2021-12-02 09:35:56', 1072500, 'User', 'Thống Nhất, Đồng Nai', 'admin111', '012345688', 'Giao thành công'),
('qylv-e07V', 'SP11', 'test11@gmail.com', 'Lương Minh Bảo', 'Giày LV Trainer', '7.0', 1, '2021-12-02 09:51:24', 578500, 'User', 'Đồng Nai', 'user111', '03352478', 'Đang xử lý'),
('qylv-e07V', 'SP1', 'test11@gmail.com', 'Lương Minh Bảo', 'Túi Keepall Bandoulire 55', '', 1, '2021-12-02 09:51:24', 929500, 'User', 'Đồng Nai', 'user111', '03352478', 'Đang xử lý'),
('1W-XEXXuh', 'SP10', 'test1111@gmail.com', 'Trần Minh', 'Ví Slender', '', 1, '2021-12-02 11:01:46', 416000, 'Guest', 'Thống Nhất, Đồng Nai', 'undefined', '0123456789', 'Giao thành công'),
('PXeJSNfWv', 'SP12', 'test11@gmail.com', 'Lương Minh Bảo', 'Túi LouisVuitton', '', 1, '2021-12-02 11:01:41', 292500, 'User', 'Quận 1, TPHCM', 'user111', '03352478', 'Giao thành công'),
('osa613QL-', 'SP10', 'test1@gmail.com', 'Trần Quốc Nam', 'Ví Slender', '', 1, '2021-12-06 17:31:58', 520000, 'Guest', 'Thống Nhất, Đồng Nai', 'undefined', '0123456789', 'Giao thành công'),
('ccmUQFITK', 'SP12', 'test11@gmail.com', 'Lương Minh Bảo', 'Túi LouisVuitton', '', 1, '2021-12-06 17:31:53', 337500, 'User', 'Quận 1, TPHCM', 'user111', '03352478', 'Giao thành công');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `san_pham`
--

CREATE TABLE `san_pham` (
  `id_sanpham` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ten_sanpham` text COLLATE utf8_unicode_ci NOT NULL,
  `gia_ban` bigint(20) NOT NULL,
  `loai_hang` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `danh_gia` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `mau_sac` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mo_ta` text COLLATE utf8_unicode_ci NOT NULL,
  `img_sanpham` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `sl_danhgia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `san_pham`
--

INSERT INTO `san_pham` (`id_sanpham`, `ten_sanpham`, `gia_ban`, `loai_hang`, `danh_gia`, `mau_sac`, `mo_ta`, `img_sanpham`, `sl_danhgia`) VALUES
('SP1', 'Túi Keepall Bandoulire 55', 1430000, 'Accessories', '5', 'Blue', 'Túi được làm từ chất liệu siêu bền từ thuỵ sĩ', 'img1.jpg', 13),
('SP10', 'Ví Slender', 520000, 'Accessories', '4.8', 'Black', 'Ví được làm từ da bò cao cấp và sản xuất có hạn tại Italy', 'img10.jpg', 25),
('SP11', 'Giày LV Trainer', 890000, 'Shoes', '5.0', 'White', 'Giày được làm từ vảo chống nước và sản xuất có hạn tại Mỹ', 'img11.jpg', 10),
('SP12', 'Túi LouisVuitton', 450000, 'Accessories', '4', 'Black White', 'Túi được làm từ da cá mập và sản xuất có hạn tại Đức', 'img12.jpg', 18),
('SP13', 'Túi Gucci Dionysus', 5000000, 'Accessories', '5', 'Brown', 'Với các tín đồ thời trang tại Việt Nam, việc sở hữu một chiếc túi xách Gucci chính hiệu luôn là nỗi khó khăn rất lớn dành cho những ai có tình yêu quá đặc biệt đối với loại túi này. Gucci Dionysus Small GG Shoulder Bag Like Authentic sẽ là sự lựa chọn hợp lý dành cho các khách hàng đang có ý định bỏ túi một mẫu túi vừa chất lượng vừa cao cấp, mang đến sự hiệu quả tối đa cho chính chủ nhân của nó.\r\n\r\n', 'img13.jpg', 16),
('SP2', 'Giày Oberkamp Ankle', 500000, 'Shoes', '4', 'Black', 'Giày da được sản xuất tại Italy', 'img2.jpg', 38),
('SP3', 'Áo Jacquard Damier', 340000, 'Jacket', '5', 'Dark Blue', 'Áo được làm từ lông cừu và xuất khẩu tại Việt Nam', 'img3.jpg', 48),
('SP4', 'Áo Damier Suit Jacket', 640000, 'Jacket', '4.5', 'Dark Blue', 'Áo được làm từ da cá sấu', 'img4.jpg\r\n', 50),
('SP5', 'Balo MultiPockets', 480000, 'Accessories', '4', 'Black White', 'Balo được làm từ da cá sấu và sản xuất có hạn tại Italy', 'img5.jpg', 30),
('SP6', 'Quần Chino', 250000, 'Bottom', '4.5', 'Blue', 'Quần được làm từ vải cao cấp và sản xuất có hạn tại Pháp', 'img6.jpg', 33),
('SP7', 'Quần Printed Heart', 340000, 'Bottom', '4.5', 'Gray', 'Quần được làm từ vải cao cấp và sản xuất có hạn tại Italy', 'img7.jpg', 19),
('SP8', 'Ví Zippy Vertical', 560000, 'Accessories', '4', 'Dark Blue', 'Ví được làm từ da cá sấu và sản xuất có hạn tại Italy', 'img8.jpg', 35),
('SP9', 'Áo Intarsia Jacquard', 720000, 'Shirt', '4.5', 'Black', 'Áo được làm từ vải tằm và sản xuất có hạn tại Việt Nam\'', 'img9.jpg', 40);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `size_sanpham`
--

CREATE TABLE `size_sanpham` (
  `id_sanpham` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `size` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `so_luong` int(11) NOT NULL,
  `soluong_daban` int(11) NOT NULL,
  `con_hang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `size_sanpham`
--

INSERT INTO `size_sanpham` (`id_sanpham`, `size`, `so_luong`, `soluong_daban`, `con_hang`) VALUES
('SP2', '7.0', 25, 19, 6),
('SP2', '7.5', 20, 6, 14),
('SP2', '8.0', 20, 3, 17),
('SP2', '8.5', 10, 2, 8),
('SP2', '9.0', 50, 30, 0),
('SP3', 'S', 30, 16, 14),
('SP4', 'S', 40, 15, 25),
('SP4', 'M', 20, 5, 15),
('SP4', 'L', 20, 5, 15),
('SP3', 'M', 30, 20, 10),
('SP3', 'L', 40, 32, 8),
('SP5', '', 60, 25, 35),
('SP6', 'S', 30, 24, 6),
('SP6', 'M', 30, 13, 17),
('SP6', 'L', 20, 10, 10),
('SP7', 'S', 70, 39, 31),
('SP7', 'M', 20, 12, 8),
('SP7', 'L', 30, 10, 20),
('SP8', '', 80, 40, 40),
('SP9', 'S', 80, 30, 50),
('SP9', 'M', 40, 20, 20),
('SP9', 'L', 50, 21, 29),
('SP10', '', 100, 65, 35),
('SP11', '7.0', 50, 41, 9),
('SP11', '7.5', 30, 14, 16),
('SP11', '8.0', 30, 13, 17),
('SP11', '8.5', 20, 14, 6),
('SP11', '9.0', 20, 10, 10),
('SP12', '', 105, 77, 28),
('SP13', '', 50, 37, 13),
('SP1', '', 50, 10, 40);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_account`
--

CREATE TABLE `user_account` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tai_khoan` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mat_khau` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `loai_taikhoan` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ten_khachhang` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dia_chi` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `so_dienthoai` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_account`
--

INSERT INTO `user_account` (`email`, `tai_khoan`, `mat_khau`, `loai_taikhoan`, `ten_khachhang`, `dia_chi`, `so_dienthoai`) VALUES
('admin1@gmail.com', 'admin111', '123', 'Admin', 'Trần Văn Toàn', 'Thống Nhất, Đồng Nai', '012345688'),
('nvkho@gmail.com', 'nhanvienkho', '1234', 'Kho', 'Trần Công Hải', 'TPHCM', '0325667514'),
('nvdonhang@gmail.com', 'nvdonhang', '123', 'Quản lý đơn hàng', 'Trần Thảo Mai', 'Dĩ An, Bình Dương', '0324654552'),
('test11@gmail.com', 'user111', '111', 'User', 'Lương Minh Bảo', 'Quận 1, TPHCM', '03352478'),
('nam123@gmail.com', 'user222', '123', 'User', 'Ngô Bá', 'Phú Mỹ Hưng, Quận 7,TPHCM', '0123789'),
('clone3@gmail.com', 'user333', '12345', 'User', 'Hào Hùng', 'Vũng Tàu', '033854689');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `san_pham`
--
ALTER TABLE `san_pham`
  ADD PRIMARY KEY (`id_sanpham`);

--
-- Chỉ mục cho bảng `size_sanpham`
--
ALTER TABLE `size_sanpham`
  ADD KEY `id_sanpham` (`id_sanpham`);

--
-- Chỉ mục cho bảng `user_account`
--
ALTER TABLE `user_account`
  ADD PRIMARY KEY (`tai_khoan`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `size_sanpham`
--
ALTER TABLE `size_sanpham`
  ADD CONSTRAINT `size_sanpham_ibfk_1` FOREIGN KEY (`id_sanpham`) REFERENCES `san_pham` (`id_sanpham`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
