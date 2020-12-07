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
  ("The Inn at 97 Winder", "MI", "Detroit", "97 Winder St", "48201", "313-832-438", 5, "Coffee"),
  ("DoubleTree By Hilton Bloomfield Hills Detroit", "MI", "Bloomfield Hills", "39475 Woodward Ave", "48304", "248-644-1400", 3,  "Pool"),
  ("Extended Stay America - Auburn Hills - University Drive", "MI", "Auburn Hills", "3315 University Dr", "48326", "248-340-8888", 5, "Coffee"),
  ('Quitzon Group', 'AZ', 'Phoenix', '39992 Melrose Street', '85083', '602-718-8072', 5, 'Pool'),
  ('Prohaska, Nitzsche and Blick', 'FL', 'Miami', '716 Thackeray Plaza', '33142', '954-770-4646', 1, 'Bar'),
  ('Fisher Group', 'NC', 'Gastonia', '7 Garrison Center', '28055', '704-359-2793', 5, 'Bar'),
  ('Ernser Group', 'FL', 'Pensacola', '559 Jana Terrace', '32575', '850-356-8046', 3, 'Coffee'),
  ('McKenzie-Zulauf', 'OH', 'Cincinnati', '0530 Village Green Point', '45208', '513-465-8432', 3, 'Spa'),
  ('Kutch-Hilll', 'AR', 'Fort Smith', '926 Crescent Oaks Plaza', '72905', '479-683-9610', 2, 'Spa'),
  ('Stanton-Hudson', 'WI', 'Milwaukee', '66 Valley Edge Parkway', '53210', '262-474-5861', 4, 'Bar');

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
  ('Sonair', 'CA', 'Los Angeles', '21 Twin Pines Road', '48201', '323-867-9461', '2020-12-12', 93.55, 1),
  ('Viva', 'TX', 'Fort Worth', '93010 Vermont Court', '72905', '817-568-5006', '2020-12-12', 34.17, 8),
  ('Konklux', 'OH', 'Dayton', '9 Blackbird Trail', '28055', '937-760-1985', '2021-01-14', 51.81, 7),
  ('Stronghold', 'CA', 'Carlsbad', '6102 Bobwhite Crossing', '32575', '760-244-6368', '2021-01-11', 37.17, 8),
  ('Ronstring', 'WI', 'Milwaukee', '368 Doe Crossing Way', '53210', '262-691-4933', '2021-01-18', 20.22, 2);

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