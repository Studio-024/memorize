CREATE TABLE reviews (
    cod INT NOT NULL AUTO_INCREMENT,
    streak INT NOT NULL DEFAULT 0,
    interval_time INT NOT NULL DEFAULT 0,
    easiness_factor DECIMAL(5, 2) NOT NULL  DEFAULT 1.30,

    PRIMARY KEY (cod)
);