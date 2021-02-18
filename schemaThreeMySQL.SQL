SET time_zone = "-7:00";
use presly;

DROP TABLE IF EXISTS `userupdated`;
CREATE TABLE `userupdated`
(
    id serial AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR
(70) default 'Nelson',
    lname VARCHAR
(70) default 'Noria',
    email VARCHAR
(70) NOT NULL,
    mobile VARCHAR
(70) default 'm7895766895N',
    gender VARCHAR
(76) default 'female',
    password VARCHAR
(650) NOT NULL,

    office VARCHAR
(70) default '+7983646183471n',
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE
(email,password)
);

INSERT INTO userupdated
  (fname,email, password, lname)
VALUES
  ('Marvin', 'nikolas.marvin@yahoo.com', 'M30775263158', "Nikolas"),
  ('Nikolas', 'Lorena.marvin@gmail.com', 'L230775263158', "Leon"),
  ('Marvin', 'cathy.leon@ygoogle.com', 'N230775263158', "'Lorena"),
  ('Leon', 'noria.nelson@yahoo.com', 'W230775263158', "Marvin");


----------------------------------------------
-- Table structure for table `bookings`
--

drop table if exists `bookings`;
CREATE TABLE `bookings`
(
  `id` serial AUTO_INCREMENT PRIMARY KEY,
  `name` varchar
(70) DEFAULT NULL,
  `town` varchar
(70) DEFAULT NULL,
  `hotel`varchar
(70) DEFAULT NULL,
  `isactive` varchar
(71) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`name`,`town`, `hotel`, `isactive`) VALUES
('Lorena', 'Vasteras', 'Mabvuto-H', 2011),
('Leon', 'Prague', 'Intercontinetal', 2012),
('Marvin', 'Prague', 'Pamolive', 2013),
('Nikolas', 'Amsterdam', 'Excellence', 2014),
('Xstina', 'Vasteras', 'Manda-Hill', 2015);

----------------------------------------------
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees`
(
  `id` serial AUTO_INCREMENT PRIMARY KEY,
  `name` varchar
(70) DEFAULT NULL,
  `mobile` varchar
(70) DEFAULT NULL,
  `office` varchar
(70) DEFAULT NULL,
  `email` varchar
(70) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`,`name`, `mobile`, `email`, `office`) VALUES
(1, 'Habenzu', '920202020', 'benzo@ben.com', 2001),
(3, 'James', 'm9284857848', 'stiven.chanzi@ntb.zm', 2002),
(4, 'Lukus', '3473473473', 'lukus.ncena@lsk.zm', 2003),
(5, 'BenJamin', '3473463463', 'benjamin.jon@uth.com', 2004),
(6, 'Kennedy', '34783473573', 'kenedy.sa@ken.cok', 2005),
(7, 'Lushana', '3734745734', 'lushana@lush.com', 2006);

----------------------------------------------
-- Table structure for table `workers`
--

drop table if exists workers;
CREATE TABLE `workers`
(
  `id` serial AUTO_INCREMENT PRIMARY KEY,
  `name` varchar
(70) DEFAULT NULL,
  `department` varchar
(70) DEFAULT NULL,
  `salary` varchar
(70) DEFAULT NULL,
  `isactive` varchar
(70) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `workers`
--

INSERT INTO `workers` (`id`,`name`, `department`, `salary`, `isactive`) VALUES
(1, 'Kavumbu', 'SocialWorker', '599.00', 1981),
(3, 'Drga', 'Professor', '9599.00', 1982),
(4, 'Henang', 'Televisionist', '19599.00', 1983),
(5, 'Mutinga', 'Academic', '29599.00', 1984),
(6, 'Nawa', 'Friend', '599.00', 1985),
(7, 'Grace', 'Family', '1599.00', 1986),
(8, 'Antie Anna', 'Family', '1599.00', 1987);

-- --------------------------------------------------------
select *
from bookings,employees,workers;
-- --------------------------------------------------------

