SET time_zone = "+00:00";
use presly;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`
(

    id serial AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(70) default 'firstMalema',
    lname VARCHAR(70) default 'lastname',
    email VARCHAR(70) NOT NULL,
    mobile VARCHAR(70) default 'm7895766895N',
    gender VARCHAR(76) default 'sexFemale',
    password VARCHAR(650) NOT NULL,

    office VARCHAR(70) default 'o83646183471n',
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(email,password)
);

INSERT INTO users
    (fname,email, password, lname)
VALUES
    ('LINOS MARVIN', '1nikolasmarvin@yahoo.com', '+230775263158', "Nikolas"),
    ('NIKOLAS LINOS', '1Lorenamarvin@yahoo.com', '+230775263158', "nikolas"),
    ('LORENA MCHENA', '1LeonCathy@yahoo.com', '+230775263158', "'nikola"),
    ('LEON MARVIN', '1cathyNoria@yahoo.com', '+230775263158', "nikolas");


----------------------------------------------
-- Table structure for table `bookings`
--

drop table if exists `bookings`;
CREATE TABLE `bookings` (
  `id` serial AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(70) DEFAULT NULL,
  `town` varchar(70) DEFAULT NULL,
  `hotel`varchar(70) DEFAULT NULL,
  `isactive` varchar(71) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `name`, `town`, `hotel`, `isactive`, `createdat`) VALUES
(1, 'Lorena', 'Vasteras', '599.00', 1, '2020-05-12 14:03:41'),
(3, 'Leon', 'Prague', 'Intercontinetal', 1, '2020-05-12 14:03:41'),
(4, 'Marvin', 'Prague', '19599.00', 1, '2020-05-12 14:03:41'),
(5, 'Nikolas', 'Amsterdam', '29599.00', 1, '2020-05-12 14:03:41'),
(6, 'Xstina', 'Vasteras', 'Manda-Hill', 1, '2020-05-12 14:03:41');

----------------------------------------------
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `id` serial AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(70) DEFAULT NULL,
  `mobile` varchar(70) DEFAULT NULL,
  `office` varchar(70) DEFAULT NULL,
  `email` varchar(70) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `mobile`, `office`, `email`, `createdat`) VALUES
(1, 'Habenzu', 'watch', '599.00', 1, '2020-05-12 14:03:41'),
(3, 'James', 'mobile', '9599.00', 1, '2020-05-12 14:03:41'),
(4, 'Lukus', 'tv', '19599.00', 1, '2020-05-12 14:03:41'),
(5, 'Ben', 'laptop', '29599.00', 1, '2020-05-12 14:03:41'),
(6, 'Kennedy', 'bag', '599.00', 1, '2020-05-12 14:03:41'),
(7, 'Lushana', 'shoes', '1599.00', 1, '2020-05-12 14:03:41');

----------------------------------------------
-- Table structure for table `workers`
--

drop table if exists workers;
CREATE TABLE `workers` (
  `id` serial AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(70) DEFAULT NULL,
  `department` varchar(70) DEFAULT NULL,
  `salary` varchar(70) DEFAULT NULL,
  `isactive` varchar(70) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `workers`
--

INSERT INTO `workers` (`id`, `name`, `department`, `salary`, `isactive`, `createdat`) VALUES
(1, 'Kavumbu', 'SocialWorker', '599.00', 1, '2020-05-12 14:03:41'),
(3, 'Drga', 'Professor', '9599.00', 1, '2020-05-12 14:03:41'),
(4, 'Henang', 'Televisionist', '19599.00', 1, '2020-05-12 14:03:41'),
(5, 'Mutinga', 'Academic', '29599.00', 1, '2020-05-12 14:03:41'),
(6, 'Nawa', 'Friend', '599.00', 1, '2020-05-12 14:03:41'),
(7, 'Grace', 'Family', '1599.00', 1, '2020-05-12 14:03:41'),
(8, 'Antie Anna', 'Family', '1599.00', 1, '2020-05-12 14:03:41');

-- --------------------------------------------------------
select * from bookings;
-- --------------------------------------------------------
select * from employees;
-- --------------------------------------------------------
select * from workers;
-- --------------------------------------------------------
