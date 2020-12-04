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
-- Table `csi3450`.`CUSTOMER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `csi3450`.`CUSTOMER` (
  `CUS_ID` INT NOT NULL AUTO_INCREMENT,
  `CUS_NAME` VARCHAR(45) NOT NULL,
  `CUS_STATE` VARCHAR(2) NOT NULL,
  `CUS_CITY` VARCHAR(45) NOT NULL,
  `CUS_STREET` VARCHAR(45) NOT NULL,
  `CUS_ZIP` VARCHAR(5) NOT NULL,
  `CUS_CONTACT` VARCHAR(15) NOT NULL,
  `CUS_PAYMENT` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`CUS_ID`))
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
    REFERENCES `csi3450`.`CUSTOMER` (`CUS_ID`)
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

INSERT INTO CUSTOMER(CUS_NAME, CUS_STATE, CUS_CITY, CUS_STREET, CUS_ZIP, CUS_CONTACT, CUS_PAYMENT) VALUES
  ("Jack Smith", "MI", "Auburn Hills", "2050 Mattie Lu Dr", "48326", "248-1421-5122", "4892758397214"),
  ('Kaye Dommersen', 'FL', 'Fort Pierce', '59041 Scofield Road', "84364", '772-174-6010', '337941515297678'),
  ('Geoffrey Mort', 'PA', 'Wilkes Barre', '3 Elka Junction', '18768', '570-354-5919', '493607919734604973'),
  ('Morganne Boyton', 'TX', 'Dallas', '53 Shoshone Road', '75342', '214-861-1097', '4026875585459347'),
  ('Dagmar Jacobowits', 'MN', 'Saint Paul', '4413 Bay Avenue', '55114', '612-998-8240', '5292504769833085'),
  ('Mort Hearst', 'AZ', 'Phoenix', '678 Barby Pass', '85099', '602-626-7861', '4175005095788824'),
  ('Nobie Spoerl', 'MO', 'Kansas City', '289 Crowley Center', '64142', '816-457-6495', '561059325674544236'),
  ('Eleanor McUre', 'MN', 'Minneapolis', '9270 Crescent Oaks Place', '55480', '612-320-9739', '3534663831220631'),
  ('Tammie Engall', 'NC', 'Winston Salem', '89 Jenifer Point', '27157', '336-335-0964', '56022426113380128'),
  ('Fanni Bysaker', 'PA', 'Mc Keesport', '2397 La Follette Drive', '15134', '412-946-5593', '5893894169321168');

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