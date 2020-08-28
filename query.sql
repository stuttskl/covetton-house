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