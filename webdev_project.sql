-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2019 at 11:07 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webdev_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` text COLLATE utf8_bin NOT NULL,
  `product_band` text COLLATE utf8_bin NOT NULL,
  `product_series` text COLLATE utf8_bin NOT NULL,
  `product_price` text COLLATE utf8_bin NOT NULL,
  `product_about` text COLLATE utf8_bin NOT NULL,
  `product_detail` text COLLATE utf8_bin NOT NULL,
  `product_image` text COLLATE utf8_bin NOT NULL,
  `product_date` date NOT NULL,
  `product_stock` text COLLATE utf8_bin NOT NULL,
  `product_status` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_band`, `product_series`, `product_price`, `product_about`, `product_detail`, `product_image`, `product_date`, `product_stock`, `product_status`) VALUES
(1, 'Fender stratocaster Jimi Hendrix', 'Fender', 'stratocaster', '180000', 'The freshly-designed Powercaster was built from the ground up for high-octane musical fun and the ultimate in tonal versatility.', 'Alder body; 24.75” scale length\nOne Atomic humbucking pickup (bridge); one soapbar single-coil pickup (neck)\nRoasted maple neck with \"Modern C” profile\nAdjusto-matic™ bridge with stop tailpiece\nIncludes deluxe gig bag', '/images/5daad192566df9.92530667.jpg', '2019-04-13', '5', 'IN STOCK'),
(2, 'Fender stratocaster Stevie Ray Vaughan', 'Fender', 'stratocaster', '100000', 'The freshly-designed Powercaster was built from the ground up for high-octane musical fun and the ultimate in tonal versatility.', 'Alder body; 24.75” scale length\nOne Atomic humbucking pickup (bridge); one soapbar single-coil pickup (neck)\nRoasted maple neck with \"Modern C” profile\nAdjusto-matic™ bridge with stop tailpiece\nIncludes deluxe gig bag', '/images/5daad1f5c76006.97757229.jpg', '2019-04-13', '5', 'IN STOCK'),
(3, 'Fender stratocaster Yngwie Malmsteen', 'Fender', 'stratocaster', '130000', 'The freshly-designed Powercaster was built from the ground up for high-octane musical fun and the ultimate in tonal versatility.', 'Alder body; 24.75” scale length\nOne Atomic humbucking pickup (bridge); one soapbar single-coil pickup (neck)\nRoasted maple neck with \"Modern C” profile\nAdjusto-matic™ bridge with stop tailpiece\nIncludes deluxe gig bag', '/images/5daad21d768101.46925712.jpg', '2019-04-13', '5', 'IN STOCK'),
(4, 'Fender stratocaster Eric Johnson', 'Fender', 'stratocaster', '95000', 'The freshly-designed Powercaster was built from the ground up for high-octane musical fun and the ultimate in tonal versatility.', 'Alder body; 24.75” scale length\nOne Atomic humbucking pickup (bridge); one soapbar single-coil pickup (neck)\nRoasted maple neck with \"Modern C” profile\nAdjusto-matic™ bridge with stop tailpiece\nIncludes deluxe gig bag', '/images/5daad2487138b7.59233721.jpg', '2019-04-13', '5', 'IN STOCK'),
(5, 'Fender stratocaster RJ340', 'Fender', 'stratocaster', '64000', 'The freshly-designed Powercaster was built from the ground up for high-octane musical fun and the ultimate in tonal versatility.', 'Alder body; 24.75” scale length\nOne Atomic humbucking pickup (bridge); one soapbar single-coil pickup (neck)\nRoasted maple neck with \"Modern C” profile\nAdjusto-matic™ bridge with stop tailpiece\nIncludes deluxe gig bag', '/images/5daad25f173615.23685444.jpg', '2019-04-13', '5', 'IN STOCK'),
(6, 'Fender stratocaster CR97', 'Fender', 'stratocaster', '58000', 'The freshly-designed Powercaster was built from the ground up for high-octane musical fun and the ultimate in tonal versatility.', 'Alder body; 24.75” scale length\nOne Atomic humbucking pickup (bridge); one soapbar single-coil pickup (neck)\nRoasted maple neck with \"Modern C” profile\nAdjusto-matic™ bridge with stop tailpiece\nIncludes deluxe gig bag', '/images/5daad2739af201.42534369.jpg', '2019-04-13', '5', 'IN STOCK'),
(7, 'Fender telecaster RT65', 'Fender', 'stratocaster', '69000', 'The freshly-designed Powercaster was built from the ground up for high-octane musical fun and the ultimate in tonal versatility.', 'Alder body; 24.75” scale length\nOne Atomic humbucking pickup (bridge); one soapbar single-coil pickup (neck)\nRoasted maple neck with \"Modern C” profile\nAdjusto-matic™ bridge with stop tailpiece\nIncludes deluxe gig bag', '/images/5daad28579ae13.47534104.jpg', '2019-04-13', '5', 'IN STOCK'),
(8, 'Gibson Les Paul Golden Time 1995', 'Gibson', 'Les Paul Golden Time 1995', '98000', 'About Les Paul Golden Time 1995', 'Detail of Les Paul Golden Time 1995', '/images/5daedb572da592.48681737.png', '2019-10-22', '3', 'IN STOCK'),
(9, 'Gibson Les Paul Standard', 'Gibson', 'Les Paul Standard', '169000', 'About Les Paul Standard', 'Alder body; 24.75” scale length\nOne Atomic humbucking pickup (bridge); one soapbar single-coil pickup (neck)\nRoasted maple neck with \"Modern C” profile\nAdjusto-matic™ bridge with stop tailpiece\nIncludes deluxe gig bag', '/images/5daf1a5dd18919.40724644.png', '2019-04-13', '5', 'IN STOCK');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
