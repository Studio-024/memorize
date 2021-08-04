CREATE TABLE reviews (
    cod INT NOT NULL AUTO_INCREMENT,
    streak INT DEFAULT 0,
    interval_time INT DEFAULT 0,
    easiness_factor DECIMAL DEFAULT 1.3,

    revision_date DATETIME NOT NULL DEFAULT NOW(),


    PRIMARY KEY (cod)
);