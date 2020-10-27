-- Table structure for table `products`
--
use presly;
drop table if exists products;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `sku` varchar(20) DEFAULT NULL,
  `price` decimal(8,2) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `sku`, `price`, `is_active`, `created_at`) VALUES
(1, 'Watch', 'watch', '599.00', 1, '2020-05-12 14:03:41'),
(3, 'Mobile', 'mobile', '9599.00', 1, '2020-05-12 14:03:41'),
(4, 'TV', 'tv', '19599.00', 1, '2020-05-12 14:03:41'),
(5, 'Laptop', 'laptop', '29599.00', 1, '2020-05-12 14:03:41'),
(6, 'Bag', 'bag', '599.00', 1, '2020-05-12 14:03:41'),
(7, 'Shoes', 'shoes', '1599.00', 1, '2020-05-12 14:03:41'),
(8, 'T-shirt', 't-shirt', '499.00', 1, '2020-05-12 14:03:41'),
(9, 'Jeans Pant', 'jeans-pant', '499.00', 1, '2020-05-12 14:03:41'),
(10, 'Kids T-shirt', 'kids-t-shirt', '399.00', 1, '2020-05-12 14:03:41'),
(11, 'Suit', 'suit', '1399.00', 1, '2020-05-12 14:03:41');

-- --------------------------------------------------------
select * from products
--