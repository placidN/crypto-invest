-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 27, 2021 at 06:24 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `probityvest`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `admin_id` varchar(12) NOT NULL,
  `admin_user` varchar(256) NOT NULL,
  `admin_email` varchar(256) NOT NULL,
  `admin_pswd` varchar(50) NOT NULL,
  `admin_hash` varbinary(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `verified` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `admin_id`, `admin_user`, `admin_email`, `admin_pswd`, `admin_hash`, `created`, `verified`) VALUES
(1, '697298769074', 'admin1', 'system.infomrket@gmail.com', 'password1', 0x24326224313224447742644d6f747674586b52395057352e4d5574747535474a4c4b713931522f4b76637964664732473436424f6b562e6e5a6d3143, '2020-11-01 08:44:21', 0),
(2, '175452973028', 'admin', 'mail@mail.com', 'password', 0x24326224313224713473513856706b5968736154337556347a6737794f33507635485252434a4b66643238526547534e3042754a2f39424876736879, '2020-11-26 03:34:45', 1);

-- --------------------------------------------------------

--
-- Table structure for table `investments`
--

CREATE TABLE `investments` (
  `id` int(11) NOT NULL,
  `user_id` varchar(12) NOT NULL,
  `investment_id` varchar(12) NOT NULL,
  `investment_date` datetime NOT NULL DEFAULT current_timestamp(),
  `investment_title` varchar(100) NOT NULL,
  `investment_categories` varchar(50) NOT NULL,
  `investment_asset` varchar(20) NOT NULL,
  `asset_code` varchar(5) NOT NULL,
  `investment_comment` varchar(255) DEFAULT NULL,
  `investment_amount` decimal(12,2) NOT NULL,
  `investment_roi` float NOT NULL,
  `investment_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `investments`
--

INSERT INTO `investments` (`id`, `user_id`, `investment_id`, `investment_date`, `investment_title`, `investment_categories`, `investment_asset`, `asset_code`, `investment_comment`, `investment_amount`, `investment_roi`, `investment_status`) VALUES
(1, '166004366818', '846117131559', '2020-11-01 09:54:45', 'Platinum Vest', 'Platinum Vest', 'Bitcoin', 'BTC', 'INVESTMENT COMMENT', '500000.00', 2.5, 'PENDING');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `user_id` varchar(12) NOT NULL,
  `transaction_id` varchar(12) NOT NULL,
  `transaction_date` datetime NOT NULL DEFAULT current_timestamp(),
  `transaction_amount` decimal(12,2) NOT NULL,
  `transaction_asset` varchar(4) NOT NULL DEFAULT 'BTC',
  `address_to` varchar(255) DEFAULT NULL,
  `transaction_type` varchar(20) NOT NULL,
  `transaction_status` varchar(20) NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `transaction_id`, `transaction_date`, `transaction_amount`, `transaction_asset`, `address_to`, `transaction_type`, `transaction_status`) VALUES
(1, '166004366818', '584519977314', '2020-11-01 10:44:33', '500000.00', 'BTC', '', 'CREDIT', 'canceled'),
(2, '166004366818', '994208644985', '2020-11-13 05:35:51', '250000.00', 'BTC', '', 'credit', 'confirmed'),
(3, '166004366818', '931764616310', '2020-11-13 06:30:03', '300000.00', 'BTC', '', 'credit', 'pending'),
(4, '166004366818', '806142424838', '2020-11-13 06:32:15', '200000.00', 'BTC', '', 'credit', 'canceled'),
(5, '166004366818', '620356649137', '2020-11-13 06:37:22', '10000.00', 'BTC', '', 'credit', 'pending'),
(6, '166004366818', '345363085437', '2020-11-13 06:39:35', '1000.00', 'BTC', '', 'credit', 'canceled'),
(7, '166004366818', '563351621314', '2020-11-13 07:12:09', '1700.00', 'BTC', '', 'credit', 'canceled'),
(8, '166004366818', '764786866307', '2020-11-13 20:35:22', '23000.00', 'BTC', '', 'credit', 'canceled'),
(9, '166004366818', '531842135601', '2020-11-13 20:42:05', '65400.00', 'BTC', '', 'credit', 'pending'),
(10, '166004366818', '303763780504', '2020-11-14 23:16:23', '2000.00', 'BTC', NULL, 'credit', 'canceled'),
(11, '166004366818', '910202686462', '2020-11-15 03:45:06', '2000.00', 'BTC', NULL, 'credit', 'canceled'),
(12, '166004366818', '10200108526', '2020-11-15 04:15:21', '21000.00', 'BTC', NULL, 'debit', 'confirmed'),
(13, '166004366818', '937965576031', '2020-11-15 08:24:55', '3145.00', 'BTC', NULL, 'debit', 'canceled'),
(14, '166004366818', '349151201260', '2020-11-15 09:56:29', '10000.00', 'BTC', NULL, 'debit', 'pending'),
(15, '166004366818', '72060633189', '2020-11-15 10:00:02', '30000.00', 'BTC', NULL, 'debit', 'confirmed'),
(16, '166004366818', '768750998607', '2020-11-15 10:04:53', '5000.00', 'BTC', NULL, 'debit', 'canceled'),
(17, '166004366818', '873946096432', '2020-11-15 10:11:24', '23000.00', 'BTC', NULL, 'debit', 'pending'),
(18, '166004366818', '154167281635', '2020-11-15 10:14:04', '23500.00', 'BTC', NULL, 'debit', 'confirmed'),
(19, '166004366818', '421270095967', '2020-11-15 15:10:59', '200000.00', 'BTC', NULL, 'credit', 'confirmed'),
(22, '731542444527', '13770137150', '2020-11-30 09:46:15', '1200.00', 'BTC', NULL, 'credit', 'confirmed'),
(25, '731542444527', '194317760891', '2020-11-30 10:18:03', '1200.00', 'BTC', NULL, 'credit', 'confirmed'),
(26, '317792518756', '724934384903', '2020-11-30 10:21:49', '1200.00', 'BTC', NULL, 'credit', 'confirmed'),
(29, '166004366818', '322810333601', '2020-11-30 10:56:47', '1200.00', 'BTC', NULL, 'debit', 'confirmed'),
(30, '65178348174', '128242210996', '2020-11-30 10:57:22', '50000.00', 'BTC', NULL, 'credit', 'confirmed'),
(31, '317792518756', '225891393336', '2020-11-30 10:57:49', '200.00', 'BTC', NULL, 'debit', 'confirmed'),
(32, '317792518756', '51612699595', '2020-11-30 11:00:01', '20000.00', 'BTC', NULL, 'credit', 'confirmed'),
(33, '65178348174', '674826975836', '2020-11-30 11:07:20', '1200.00', 'BTC', NULL, 'credit', 'confirmed'),
(34, '731542444527', '579881309327', '2020-11-30 11:10:45', '1000.00', 'BTC', NULL, 'credit', 'confirmed'),
(35, '317792518756', '570178728285', '2020-11-30 11:11:14', '1000.00', 'BTC', NULL, 'debit', 'confirmed'),
(36, '166004366818', '922956385157', '2020-11-30 23:59:21', '500000.00', 'BTC', NULL, 'credit', 'confirmed'),
(37, '166004366818', '814301414363', '2020-12-01 00:01:46', '500000.00', 'BTC', NULL, 'credit', 'confirmed');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_id` varchar(12) NOT NULL,
  `username` varchar(255) NOT NULL,
  `f_name` varchar(255) NOT NULL,
  `l_name` varchar(255) NOT NULL,
  `email` varchar(500) NOT NULL,
  `phone` int(12) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `pswd` varchar(50) NOT NULL,
  `hash` varbinary(255) NOT NULL,
  `acc_bal` decimal(12,2) NOT NULL DEFAULT 0.00,
  `referral_bonus` decimal(12,2) NOT NULL DEFAULT 0.00,
  `wallet_address` varchar(255) NOT NULL,
  `referral_code` varchar(50) NOT NULL,
  `referer` varchar(50) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `verified` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_id`, `username`, `f_name`, `l_name`, `email`, `phone`, `country`, `pswd`, `hash`, `acc_bal`, `referral_bonus`, `wallet_address`, `referral_code`, `referer`, `last_login`, `created`, `status`, `verified`) VALUES
(1, '166004366818', 'user1', 'John', 'Doe', 'system.infomarket@gmail.com', NULL, 'United States', 'password1', 0x2432622431322466767247357839365862364b64527a6d4361496a4e2e68474457472e682f3435774f64797a363043436a354863454e4a6b7238394f, '1430800.00', '0.00', 'HHttytduwijmkCFDfdtwfyhxblllsdgftRdcrfcsgdhjhjhjkkkl', 'JODO997376', '', '2020-11-20 08:34:40', '2020-11-01 08:04:07', 0, 0),
(2, '317792518756', 'user2', 'James', 'Anderson', 'handlingjobs@gmail.com', NULL, NULL, 'password2', 0x2432622431322452495253546873612f474c4571637a6f76664c33344f314435686d78397477783373762f7555752e6b6d6b4e7345622e4656397479, '20000.00', '0.00', 'HGHhdfjkdsllKlkdiffvdtycstfcdfsgcJH', 'JAAN726863', 'JODO997376', NULL, '2020-11-16 12:50:50', 0, 1),
(7, '65178348174', 'user4', 'Mat', 'Mill', 'pordogurza@nedoz.com', NULL, NULL, 'password4', 0x24326224313224336750562f4d6630585a31612e4b456659763335534f755949546a48684c4d4771534f53344167472f316c75764f346d33572e5279, '51200.00', '0.00', 'HHfygdfysudhfihUGYgsdfhfjhjkhj', 'MAMI162127', 'JODO997376', '2020-11-22 06:29:05', '2020-11-22 05:37:18', 1, 1),
(8, '731542444527', 'user7', 'Parker', 'Miller', 'cupsaharza@nedoz.com', NULL, NULL, 'password7', 0x243262243132244562717a456e7265594157542e39612f4e4c36754a2e6275764a672f7969656c4b6a6e53794331537069686c6f534e2e555a72696d, '3400.00', '0.00', 'HTYGjdhjdhggfFXdsdjhhhhbnBNBbujdbccblidhoi', 'PAMI779046', '', NULL, '2020-11-25 06:26:42', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wallets`
--

CREATE TABLE `wallets` (
  `id` int(2) NOT NULL,
  `asset` varchar(4) NOT NULL,
  `wallet` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wallets`
--

INSERT INTO `wallets` (`id`, `asset`, `wallet`) VALUES
(1, 'BTC', 'GfsdhkljJklsdfhkjghfDFXEsdfsdhjusdujh'),
(2, 'ETH', 'YTdefhjkscjlkjkljKLjKLJkldjcklndmnnJiiosn'),
(3, 'XRP', 'HfdfjkdskdjkjkJKjdfXXRRPyvxrwcfsljdjfh'),
(4, 'LTC', 'Bbsdfgsflsklxcmsdmfkrjyktjkklskdlsklsd'),
(5, 'BNB', 'GFDKkjdvkljlrdjtkljzxfcghdvehvjhvh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `investments`
--
ALTER TABLE `investments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `investments`
--
ALTER TABLE `investments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `wallets`
--
ALTER TABLE `wallets`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
