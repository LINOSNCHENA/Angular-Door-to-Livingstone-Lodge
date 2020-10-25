DROP TABLE IF EXISTS users;
CREATE TABLE users
(
  id serial PRIMARY KEY,
  email VARCHAR(90) NOT NULL,
  password VARCHAR(650) NOT NULL,
  mobile VARCHAR(90) default 'CONTRATOR',
  office VARCHAR(90) default 'CONTRATOR',
  createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(email,password)
);

INSERT INTO users
  (id,email, password)
VALUES
  (1, 'nikolasmarvin@yahoo.com', '+230775263158'),
  (2, 'Lorenamarvin@yahoo.com', '+230775263158'),
  (3, 'LeonCathy@yahoo.com', '+230775263158'),
  (4, 'cathyNoria@yahoo.com', '+230775263158');

SELECT *
from users;