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
  `CUS_STATE` VARCHAR(45) NOT NULL,
  `CUS_CITY` VARCHAR(45) NOT NULL,
  `CUS_STREET` VARCHAR(45) NOT NULL,
  `CUS_ZIP` VARCHAR(45) NOT NULL,
  `CUS_CONTACT` VARCHAR(45) NOT NULL,
  `CUS_PAYMENT` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`CUS_ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `csi3450`.`BUSINESS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `csi3450`.`BUSINESS` (
  `BUS_ID` INT NOT NULL AUTO_INCREMENT,
  `BUS_NAME` VARCHAR(45) NOT NULL,
  `BUS_STATE` VARCHAR(45) NOT NULL,
  `BUS_CITY` VARCHAR(45) NOT NULL,
  `BUS_STREET` VARCHAR(45) NOT NULL,
  `BUS_ZIP` VARCHAR(45) NOT NULL,
  `BUS_CONTACT` VARCHAR(45) NOT NULL,
  `BUS_ROOMS` INT NOT NULL,
  `BUS_AMENITIES` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`BUS_ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `csi3450`.`EVENT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `csi3450`.`EVENT` (
  `EVENT_ID` INT NOT NULL AUTO_INCREMENT,
  `EVENT_NAME` VARCHAR(45) NOT NULL,
  `EVENT_STATE` VARCHAR(45) NOT NULL,
  `EVENT_CITY` VARCHAR(45) NOT NULL,
  `EVENT_STREET` VARCHAR(45) NOT NULL,
  `EVENT_ZIP` VARCHAR(45) NOT NULL,
  `EVENT_DATE` VARCHAR(45) NOT NULL,
  `EVENT_CONTACT` VARCHAR(45) NOT NULL,
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
  `BOOKING_DATE` VARCHAR(45) NOT NULL,
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
  ("The Dill", "MI", "Detroit", "4829 1st Street", "48325", "248-492-0314", 20, "Coffee");

INSERT INTO CUSTOMER(CUS_NAME, CUS_STATE, CUS_CITY, CUS_STREET, CUS_ZIP, CUS_CONTACT, CUS_PAYMENT) VALUES
  ("Belial", "MI", "Test", "98281 Test Lane", "19843", "481-1421-5122", "VISA");

INSERT INTO EVENT(EVENT_NAME, EVENT_STATE, EVENT_CITY, EVENT_STREET, EVENT_ZIP, EVENT_DATE, EVENT_CONTACT, EVENT_PRICE, BUS_ID) VALUES
  ("Event", "MI", "Warren", "123 Idk", "48325", DATE("2020-12-22"), "248-414-2094", 20.45, 1);

INSERT INTO ROOM(ROOM_NUM, ROOM_PRICE, BUS_ID) VALUES
  (1, 30.00, 1);

-- -----------------------------------------------------
-- ADDITIONAL SETUP
-- -----------------------------------------------------
CREATE USER IF NOT EXISTS 'testuser'@'localhost' IDENTIFIED BY "password";
GRANT ALL ON csi3450.* TO 'testuser'@'localhost';