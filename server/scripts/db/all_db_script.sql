CREATE DATABASE IF NOT EXISTS memorize;
USE DATABASE memorize;


CREATE TABLE reviews (
    cod INT NOT NULL AUTO_INCREMENT,
    streak INT NOT NULL DEFAULT 0,
    interval_time INT NOT NULL DEFAULT 0,
    easiness_factor DECIMAL(5, 2) NOT NULL  DEFAULT 1.30,

    PRIMARY KEY (cod)
);

CREATE TABLE users (
	cod INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	email VARCHAR(256) NOT NULL,
	password VARCHAR(60) BINARY NOT NULL,
	PRIMARY KEY ( cod )
);

CREATE TABLE flashcards (
	cod INT NOT NULL AUTO_INCREMENT,
	front VARCHAR(150) NOT NULL,
	back VARCHAR(150) NOT NULL,
	review_cod INT NOT NULL,
	user_cod INT NOT NULL,
	deck_cod INT,

	PRIMARY KEY ( cod ),
	FOREIGN KEY ( review_cod ) REFERENCES reviews( cod ),
	FOREIGN KEY ( user_cod ) REFERENCES users( cod )
);
