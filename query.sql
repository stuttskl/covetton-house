CREATE TABLE `inventory` (
  `productID`    int(10)   NOT NULL AUTO_INCREMENT,
  `name`         text(225)      NOT NULL DEFAULT '',
  `quantity`     int(10)   NOT NULL DEFAULT '0',
  `price`        float(7,2)      NOT NULL DEFAULT '99999.99',
  `img`          text(225)      NOT NULL DEFAULT '',
  `desc`         text(225)      NOT NULL DEFAULT '',
  `location`     text(225)      NOT NULL DEFAULT '',
  PRIMARY KEY (`productID`)
);
; ENGINE=InnoDB DEFAULT CHARSET=latin1

INSERT INTO INVENTORY (productID, name, quantity, price, img, desc, locationID) VALUES (
   1, 'Bro Serum', 5, 97, 'https://covetton-house.s3-us-west-2.amazonaws.com/prod4.jpg', 'Serum for your bro!', 2);
INSERT INTO INVENTORY (productID, name, quantity, price, img, desc, locationID) VALUES (2, 'Mystic Crystal', 12, 788, 'https://covetton-house.s3-us-west-2.amazonaws.com/prod5.jpg', 'Balance your body\'s natural pH levels with this rare gem', 1);
INSERT INTO INVENTORY (productID, name, quantity, price, img, desc, locationID) VALUES (3, 'Enamel Scrubbers', 23, 98, 'https://covetton-house.s3-us-west-2.amazonaws.com/prod6.jpg', 'Cleanse and polish your mouth enamel with these artisan brushes', 2);


INSERT INTO `inventory` (`name`, `quantity`, `price`, `img`, `desc`, `location`)
VALUES
('Bro Serum', 5, 87, 'https://covetton-house.s3-us-west-2.amazonaws.com/prod4.jpg', 'Serum for your bro!', 1),
('Mystic Crystal', 13, 799, 'https://covetton-house.s3-us-west-2.amazonaws.com/prod5.jpg', 'Balance your body\'s natural pH levels with this rare gem', 1),
('Enamel Scrubbers', 23, 98, 'https://covetton-house.s3-us-west-2.amazonaws.com/prod6.jpg', 'Cleanse and polish your mouth enamel with these artisan brushes', 2);

https://covetton-house.s3-us-west-2.amazonaws.com/prod4.jpg
https://covetton-house.s3-us-west-2.amazonaws.com/prod5.jpg
https://covetton-house.s3-us-west-2.amazonaws.com/prod6.jpg

CREATE TABLE `locations` (
  `locationID`   int(10) unsigned  NOT NULL AUTO_INCREMENT,
  `name`         varchar(225)      NOT NULL DEFAULT '',
  `phone`        int(10) unsigned  NOT NULL DEFAULT '0',
  `img`          varchar(225)      NOT NULL DEFAULT '',
  `address`      varchar(225)      NOT NULL DEFAULT '',
  `email`        varchar(30)       NOT NULL DEFAULT '',
  `hours`        json              DEFAULT NULL,
  PRIMARY KEY (`locationID`)
);

INSERT INTO `locations` (`name`, `phone`, `img`, `address`, `email`, `hours`)
VALUES
('Seattle, WA', 2063433432, 'https://covetton-house.s3-us-west-2.amazonaws.com/sea.jpg', '1234 Seattle Ave, Seattle WA 98111', 'seattle@covettonhouse.com', 
'{
  "Monday - Friday: " : "9:00 AM - 5:00 PM", 
  "Saturday: ": "10:00 AM - 7:00 PM", 
  "Sunday: ": "Closed"}'
  );

INSERT INTO `locations` (`name`, `phone`, `img`, `address`, `email`, `hours`)
VALUES
('London, UK', 2063433432, 'https://covetton-house.s3-us-west-2.amazonaws.com/lon.jpg', '1234 London Ave, London UK 98111', 'london@covettonhouse.com', 
'{
  "Monday - Friday: " : "9:00 AM - 5:00 PM", 
  "Saturday: ": "10:00 AM - 7:00 PM", 
  "Sunday: ": "Closed"}'
  );

INSERT INTO `locations` (`name`, `phone`, `img`, `address`, `email`, `hours`)
VALUES
('Manhattan, NY', 2063433432, 'https://covetton-house.s3-us-west-2.amazonaws.com/man.jpg', '1234 NYC Ave, New York NY 98111', 'nyc@covettonhouse.com', 
'{
  "Monday - Friday: " : "9:00 AM - 5:00 PM", 
  "Saturday: ": "10:00 AM - 7:00 PM", 
  "Sunday: ": "Closed"}'
  ),
  ('Austin, TX', 2063433432, 'https://covetton-house.s3-us-west-2.amazonaws.com/aus.jpg', '1234 Austin Ave, Austin TX 98111', 'austin@covettonhouse.com', 
'{
  "Monday - Friday: " : "9:00 AM - 5:00 PM", 
  "Saturday: ": "10:00 AM - 7:00 PM", 
  "Sunday: ": "Closed"}'
  ),
  ('Chicago, IL', 2063433432, 'https://covetton-house.s3-us-west-2.amazonaws.com/chi.jpg', '1234 Chicago Ave, Chicago IL 98111', 'chicago@covettonhouse.com', 
'{
  "Monday - Friday: " : "9:00 AM - 5:00 PM", 
  "Saturday: ": "10:00 AM - 7:00 PM", 
  "Sunday: ": "Closed"}'
  );