CREATE TABLE flashcards (
	cod INT NOT NULL AUTO_INCREMENT,
	front VARCHAR(150) NOT NULL,
	back VARCHAR(150) NOT NULL,
	streak INT,
	interval_time INT,
	revision_date DATETIME NOT NULL DEFAULT NOW(),
	deck_cod INT,
	user_cod INT,
	PRIMARY KEY ( cod ),
	FOREIGN KEY ( user_cod ) REFERENCES users(cod),
	FOREIGN KEY ( deck_cod ) REFERENCES decks(cod)
);