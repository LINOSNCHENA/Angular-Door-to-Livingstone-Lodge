DROP TABLE IF EXISTS users;
CREATE TABLE users
(
  id serial PRIMARY KEY,
  email VARCHAR(90) NOT NULL,
  password VARCHAR(650) NOT NULL,
  mobile VARCHAR(90) default 'M-994011004n',
  office VARCHAR(90) default 'O-891000003n',
  createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(email,password)
);

INSERT INTO users
  (id,email, password)
VALUES
  (1, 'nikolas.marvin@hotmail.com', '+230775263158'),
  (2, 'Lorena.linos@yahoo.com', '+230775263158'),
  (3, 'Leon.catherine@gmail.com', '+230775263158'),
  (4, 'cathy.noria@yahoo.com', '+230775263158');

SELECT *
from users;