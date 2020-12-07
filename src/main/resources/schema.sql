-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema csi3450
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema csi3450
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `csi3450` DEFAULT CHARACTER SET utf8 ;
USE `csi3450` ;

-- -----------------------------------------------------
-- Table `csi3450`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `csi3450`.`USER` (
  `USER_ID` INT NOT NULL AUTO_INCREMENT,
  `USER_EMAIL` VARCHAR(45) NOT NULL,
  `USER_PASSWORD` VARCHAR(45) NOT NULL,
  `USER_TYPE` VARCHAR(45) NOT NULL,
  `USER_NAME` VARCHAR(45) NOT NULL,
  `USER_STATE` VARCHAR(2) NOT NULL,
  `USER_CITY` VARCHAR(45) NOT NULL,
  `USER_STREET` VARCHAR(45) NOT NULL,
  `USER_ZIP` VARCHAR(5) NOT NULL,
  `USER_CONTACT` VARCHAR(15) NOT NULL,
  `USER_PAYMENT` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`USER_ID`, `USER_EMAIL`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `csi3450`.`BUSINESS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `csi3450`.`BUSINESS` (
  `BUS_ID` INT NOT NULL AUTO_INCREMENT,
  `BUS_NAME` VARCHAR(100) NOT NULL,
  `BUS_STATE` VARCHAR(2) NOT NULL,
  `BUS_CITY` VARCHAR(45) NOT NULL,
  `BUS_STREET` VARCHAR(45) NOT NULL,
  `BUS_ZIP` VARCHAR(5) NOT NULL,
  `BUS_CONTACT` VARCHAR(15) NOT NULL,
  `BUS_ROOMS` INT NOT NULL,
  `BUS_AMENITIES` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`BUS_ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `csi3450`.`EVENT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `csi3450`.`EVENT` (
  `EVENT_ID` INT NOT NULL AUTO_INCREMENT,
  `EVENT_NAME` VARCHAR(100) NOT NULL,
  `EVENT_STATE` VARCHAR(2) NOT NULL,
  `EVENT_CITY` VARCHAR(45) NOT NULL,
  `EVENT_STREET` VARCHAR(45) NOT NULL,
  `EVENT_ZIP` VARCHAR(5) NOT NULL,
  `EVENT_DATE` DATE NOT NULL,
  `EVENT_CONTACT` VARCHAR(15) NOT NULL,
  `EVENT_PRICE` DECIMAL(10,2) NOT NULL,
  `BUS_ID` INT NOT NULL,
  PRIMARY KEY (`EVENT_ID`),
  INDEX `fk_EVENT_BUSINESS1_idx` (`BUS_ID` ASC),
  CONSTRAINT `fk_EVENT_BUSINESS1`
    FOREIGN KEY (`BUS_ID`)
    REFERENCES `csi3450`.`BUSINESS` (`BUS_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `csi3450`.`ROOM`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `csi3450`.`ROOM` (
  `ROOM_ID` INT NOT NULL AUTO_INCREMENT,
  `ROOM_NUM` INT NOT NULL,
  `ROOM_PRICE` DECIMAL(10,2) NOT NULL,
  `ROOM_VACANT` TINYINT NOT NULL DEFAULT 1,
  `BUS_ID` INT NOT NULL,
  PRIMARY KEY (`ROOM_ID`, `BUS_ID`),
  INDEX `fk_ROOM_BUSINESS1_idx` (`BUS_ID` ASC),
  CONSTRAINT `fk_ROOM_BUSINESS1`
    FOREIGN KEY (`BUS_ID`)
    REFERENCES `csi3450`.`BUSINESS` (`BUS_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `csi3450`.`BOOKING`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `csi3450`.`BOOKING` (
  `BOOKING_ID` INT NOT NULL AUTO_INCREMENT,
  `BUS_ID` INT NOT NULL,
  `CUS_ID` INT NOT NULL,
  `ROOM_ID` INT NOT NULL,
  `BOOKING_DATE` DATE NOT NULL,
  `BOOKING_DURATION` INT NOT NULL,
  PRIMARY KEY (`BOOKING_ID`, `BUS_ID`, `CUS_ID`, `ROOM_ID`),
  INDEX `fk_BUISNESS_has_BOOKING_BUISNESS1_idx` (`BUS_ID` ASC),
  INDEX `fk_BOOKING_CUSTOMER1_idx` (`CUS_ID` ASC),
  INDEX `fk_BOOKING_ROOM1_idx` (`ROOM_ID` ASC),
  CONSTRAINT `fk_BUISNESS_has_BOOKING_BUISNESS1`
    FOREIGN KEY (`BUS_ID`)
    REFERENCES `csi3450`.`BUSINESS` (`BUS_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_BOOKING_CUSTOMER1`
    FOREIGN KEY (`CUS_ID`)
    REFERENCES `csi3450`.`USER` (`USER_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_BOOKING_ROOM1`
    FOREIGN KEY (`ROOM_ID`)
    REFERENCES `csi3450`.`ROOM` (`ROOM_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- DEMO DATA
-- -----------------------------------------------------

INSERT INTO BUSINESS(BUS_NAME, BUS_STATE, BUS_CITY, BUS_STREET, BUS_ZIP, BUS_CONTACT, BUS_ROOMS, BUS_AMENITIES) VALUES
  ('Batz-Schoen', 'MI', 'Kalamazoo', '93277 Tennessee Place', '49006', '269-686-7872', 2, 'Coffee'),
  ('Brakus-Hyatt', 'MI', 'Ann Arbor', '055 Columbus Pass', '48107', '734-551-8019', 1, 'Pool'),
  ('Abshire Group', 'MI', 'Grand Rapids', '246 Leroy Terrace', '49560', '616-184-2639', 3, 'Pool'),
  ('Blanda Group', 'MI', 'Detroit', '938 Muir Terrace', '48224', '313-327-3519', 5, 'Pool'),
  ('Dibbert, O''Hara and Feil', 'MI', 'Midland', '75207 Northfield Court', '48670', '989-258-8968', 4, 'Bar'),
  ('Jerde-Stark', 'MI', 'Ann Arbor', '00745 Dawn Hill', '48107', '734-666-3146', 4, 'Bar'),
  ('Gulgowski, Price and McDermott', 'MI', 'Flint', '314 Mallard Trail', '48555', '810-382-3420', 5, 'Coffee'),
  ('Mosciski-Koelpin', 'MI', 'Grand Rapids', '62 Rigney Place', '49510', '616-550-2902', 3, 'Bar'),
  ('Fahey, Hamill and Parisian', 'MI', 'Dearborn', '94 School Plaza', '48126', '734-447-1509', 1, 'Bar'),
  ('Leannon-Tremblay', 'MI', 'Detroit', '56 Veith Terrace', '48242', '313-573-2484', 3, 'Pool'),
  ('Kihn-West', 'MI', 'Detroit', '583 Westerfield Alley', '48267', '313-467-1921', 4, 'Spa'),
  ('Friesen Inc', 'MI', 'Grand Rapids', '080 Paget Parkway', '49560', '616-388-3672', 5, 'Pool'),
  ('Feeney LLC', 'MI', 'Grand Rapids', '7 Holy Cross Terrace', '49560', '616-864-1676', 1, 'Spa'),
  ('Wisoky and Sons', 'MI', 'Detroit', '8884 Arkansas Avenue', '48211', '810-204-3337', 4, 'Bar'),
  ('Haley Inc', 'MI', 'Detroit', '22503 Leroy Park', '48232', '313-482-7800', 1, 'Spa');

INSERT INTO USER(USER_EMAIL, USER_PASSWORD, USER_TYPE, USER_NAME, USER_STATE, USER_CITY, USER_STREET, USER_ZIP, USER_CONTACT, USER_PAYMENT) VALUES
  ('frockcliffe0@scientificamerican.com', 'lqAM0zgt61W', 'Administrator', 'Farlay Rockcliffe', 'MI', 'Detroit', '6899 Eagan Crossing', '48232', '313-568-6369', '3570849280160270'),
  ('lchazette1@wikimedia.org', '4BjW3Z', 'Customer', 'Lyndy Chazette', 'MI', 'Kalamazoo', '5 Vidon Center', '49048', '517-743-8479', '6379381743427092'),
  ('ccribbin2@google.com', 'osuwrK', 'Administrator', 'Carlynne Cribbin', 'MI', 'Ann Arbor', '7 Monument Pass', '48107', '734-184-0007', '3534512260103075'),
  ('scolgrave3@miibeian.gov.cn', 'RTBUdrTrH1L', 'Administrator', 'Skip Colgrave', 'MI', 'Detroit', '423 Daystar Center', '48211', '313-490-5850', '67632557362109153'),
  ('dkingdon4@dropbox.com', 'SE53wL', 'Administrator', 'Dom Kingdon', 'MI', 'Detroit', '71 Nobel Circle', '48295', '313-708-6995', '4041591198015431'),
  ('mdarth5@twitter.com', 'dLcw1lxt', 'BnB', 'Marion Darth', 'MI', 'Ann Arbor', '4684 Grim Terrace', '48107', '734-132-5233', '4175000732269098'),
  ('gcrasswell6@fastcompany.com', 'mTwIPexPERcA', 'Customer', 'Gertrude Crasswell', 'MI', 'Detroit', '965 Transport Center', '48258', '248-102-3652', '3570860919281031'),
  ('pvoelker7@wsj.com', 'yasymnh6M', 'Customer', 'Paolina Voelker', 'MI', 'Grand Rapids', '2365 Melvin Court', '49518', '616-102-4880', '3569575465952115'),
  ('dvarley8@newyorker.com', 'fB2xpMTCyF40', 'Customer', 'Darbie Varley', 'MI', 'Dearborn', '063 Mallard Circle', '48126', '734-645-6876', '6759605503835072'),
  ('rbranton9@4shared.com', 'tY0SYKp', 'Event', 'Rhianna Branton', 'MI', 'Lansing', '6213 Service Circle', '48956', '517-792-7108', '371339975036552'),
  ('gallgooda@slashdot.org', 'nKMo6bH07', 'Administrator', 'Gladys Allgood', 'MI', 'Lansing', '6861 Graedel Junction', '48912', '517-334-8667', '3561071512543899'),
  ('pmoneypennyb@blogtalkradio.com', 'By4eA5U5v', 'Event', 'Paulette Moneypenny', 'MI', 'Detroit', '315 Ohio Junction', '48275', '313-172-5513', '3536996537105815'),
  ('cmontfordc@ucoz.com', 'dn6RzCj', 'BnB', 'Cosetta Montford', 'MI', 'Detroit', '1 Stone Corner Trail', '48224', '586-452-2100', '3552697132774539'),
  ('gsillsd@bloomberg.com', 'ubInqE1c', 'Customer', 'Gil Sills', 'MI', 'Detroit', '4 Vera Alley', '48242', '248-197-1932', '3578343036845857'),
  ('lcadneye@google.co.jp', 'IagiV2meA4Io', 'BnB', 'Lurlene Cadney', 'MI', 'Detroit', '3054 Arkansas Lane', '48258', '734-150-1197', '4741690112862');

INSERT INTO EVENT(EVENT_NAME, EVENT_STATE, EVENT_CITY, EVENT_STREET, EVENT_ZIP, EVENT_CONTACT, EVENT_DATE, EVENT_PRICE, BUS_ID) VALUES
  ('Moore LLC', 'MI', 'Saginaw', '97882 Park Meadow Lane', '48604', '989-704-3631', '2021-01-24', 10.02, 8),
  ('Medhurst, Kling and Bauch', 'MI', 'Detroit', '77886 Haas Park', '48242', '313-759-6199', '2020-12-31', 107.47, 5),
  ('Hettinger and Sons', 'MI', 'Lansing', '028 Sage Circle', '48956', '517-639-5957', '2021-01-13', 118.55, 2),
  ('Thompson-Hoeger', 'MI', 'Grand Rapids', '08 Jackson Terrace', '49560', '616-353-9475', '2020-12-13', 224.73, 6),
  ('Schuster Inc', 'MI', 'Lansing', '868 Heffernan Avenue', '48930', '517-681-2413', '2021-01-20', 25.76, 4),
  ('Beatty, Block and Deckow', 'MI', 'Detroit', '285 Hoard Junction', '48224', '313-520-3893', '2021-01-09', 77.86, 3),
  ('Schneider, Runolfsson and Becker', 'MI', 'Detroit', '1374 Golden Leaf Circle', '48224', '313-198-6729', '2021-01-29', 87.2, 5),
  ('Effertz, Cummerata and Bode', 'MI', 'Detroit', '71 Parkside Parkway', '48267', '313-376-9576', '2021-01-07', 57.75, 3),
  ('Reichert-Haag', 'MI', 'Grand Rapids', '44796 Kropf Place', '49560', '616-297-6519', '2021-01-06', 41.9, 4),
  ('Rodriguez, Heidenreich and Marks', 'MI', 'Detroit', '95126 Riverside Point', '48258', '313-754-1496', '2020-12-19', 113.49, 11),
  ('Borer, Kovacek and Feeney', 'MI', 'Detroit', '43 Browning Crossing', '48224', '313-616-5539', '2021-01-03', 122.25, 1),
  ('Block and Sons', 'MI', 'Southfield', '0 Kensington Circle', '48076', '248-395-7037', '2021-01-14', 131.6, 15),
  ('Lynch-Gutkowski', 'MI', 'Southfield', '99181 Rigney Crossing', '48076', '248-883-4704', '2021-01-01', 118.28, 9),
  ('Franecki LLC', 'MI', 'Lansing', '798 Arkansas Junction', '48919', '517-934-0999', '2020-12-19', 220.85, 14),
  ('Barton, Sporer and Weber', 'MI', 'Battle Creek', '191 Laurel Avenue', '49018', '269-316-9165', '2020-12-17', 117.28, 4);

INSERT INTO ROOM(ROOM_NUM, ROOM_PRICE, BUS_ID) VALUES
  (1, 40.00, 1),
  (2, 40.00, 1),
  (1, 35.00, 2),
  (2, 35.00, 2),
  (1, 50.00, 3),
  (2, 50.00, 3),
  (1, 70.00, 4),
  (2, 70.00, 4),
  (1, 35.00, 5),
  (2, 35.00, 5),
  (1, 70.00, 6),
  (2, 70.00, 6),
  (1, 80.00, 7),
  (2, 80.00, 7),
  (1, 75.00, 8),
  (2, 75.00, 8),
  (1, 40.00, 9),
  (2, 40.00, 9),
  (1, 50.00, 10),
  (2, 50.00, 10);

INSERT INTO BOOKING(BUS_ID, CUS_ID, ROOM_ID, BOOKING_DATE, BOOKING_DURATION) VALUES
  (8, 8, 16, '2021-01-21', 1),
  (3, 10, 7, '2021-01-01', 3),
  (6, 7, 13, '2020-12-14', 2),
  (7, 2, 14, '2021-01-30', 2),
  (9, 8, 18, '2020-12-27', 4),
  (4, 9, 8, '2021-01-26', 3),
  (5, 2, 11, '2021-01-18', 2),
  (10, 2, 20, '2021-01-29', 4),
  (1, 2, 2, '2020-12-08', 3),
  (3, 3, 7, '2020-12-17', 1);

-- -----------------------------------------------------
-- ADDITIONAL SETUP
-- -----------------------------------------------------
CREATE USER IF NOT EXISTS 'testuser'@'localhost' IDENTIFIED BY "password";
GRANT ALL ON csi3450.* TO 'testuser'@'localhost';