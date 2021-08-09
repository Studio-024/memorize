CREATE TABLE flashcards (
	cod INT NOT NULL AUTO_INCREMENT,
	front VARCHAR(150) NOT NULL,
	back VARCHAR(150) NOT NULL,
	review_cod INT,
	deck_cod INT,
	user_cod INT,
	
	PRIMARY KEY ( cod ),
	FOREIGN KEY (review_cod) REFERENCES reviews( cod ),
	FOREIGN KEY ( deck_cod ) REFERENCES decks( cod ),
	FOREIGN KEY ( user_cod ) REFERENCES users( cod )
);