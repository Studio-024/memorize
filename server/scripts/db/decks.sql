CREATE TABLE decks (
	cod INT NOT NULL AUTO_INCREMENT,
	deck VARCHAR(30) NOT NULL,
	category_cod INT,
	PRIMARY KEY ( cod ),
	FOREIGN KEY ( category_cod ) REREFERENCES category(cod)
);