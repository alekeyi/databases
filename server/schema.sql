DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE IF NOT EXISTS users (
  /* Describe your table here.*/
    user_id INT AUTO_INCREMENT,
    username VARCHAR(40) NOT NULL,
    PRIMARY KEY (user_id)
);

-- /* Create other tables and define schemas for them here! */
CREATE TABLE IF NOT EXISTS messages (
    message_id INT AUTO_INCREMENT,
    message VARCHAR(40),
    user_id INT NOT NULL,
    PRIMARY KEY (message_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

