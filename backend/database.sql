DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  hpassword VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO users (firstname, lastname, email, hpassword) VALUES
("John", "Doe", "john@doe.com", "john"),
("Jane", "Doe", "admin@doe.com", "jane");
