CREATE TABLE `inventory` (
  `productID`    int(10) unsigned  NOT NULL AUTO_INCREMENT,
  `name`         varchar(225)      NOT NULL DEFAULT '',
  `quantity`     int(10) unsigned  NOT NULL DEFAULT '0',
  `price`        decimal(7,2)      NOT NULL DEFAULT '99999.99',
  `img`          varchar(225)      NOT NULL DEFAULT '',
  `desc`         varchar(225)      NOT NULL DEFAULT '',
  `location`     varchar(225)      NOT NULL DEFAULT '',
  PRIMARY KEY (`productID`)
);
; ENGINE=InnoDB DEFAULT CHARSET=latin1

INSERT INTO `inventory` (`name`, `quantity`, `price`, `img`, `desc`, `location`)
VALUES
('Scented Air Mist', 3, 234, 'https://covetton-house.s3-us-west-2.amazonaws.com/prod1.jpg', 'Smells great!', 1),
('Unique Footwear', 7, 215, 'https://covetton-house.s3-us-west-2.amazonaws.com/prod2.jpg', 'Seven unique pairs of shoes', 2),
('Mystery Aura ', 10, 23, 'https://covetton-house.s3-us-west-2.amazonaws.com/prod3.jpg', 'Not even the creator knows what is in this', 3);