CREATE TABLE flashcards (
	cod INT NOT NULL AUTO_INCREMENT,
	front VARCHAR(150) NOT NULL,
	back VARCHAR(150) NOT NULL,
	streak INT NOT NULL,
	interval_time INT NOT NULL,
	revision_date DATETIME NOT NULL,
	deck_cod INT, user_cod INT,
	PRIMARY KEY ( cod ),
	FOREIGN KEY ( user_cod ) REFERENCES users(cod),
	FOREIGN KEY ( deck_cod ) REFERENCES decks(cod)
);