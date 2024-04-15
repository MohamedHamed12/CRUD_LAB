-- Create person table
CREATE TABLE IF NOT EXISTS person (
  idperson INTEGER PRIMARY KEY,
  fName TEXT,
  lName TEXT,
  Address TEXT,
  city TEXT,
  country TEXT,
  Email TEXT
);

-- Create language table
CREATE TABLE IF NOT EXISTS language (
  idlanguage INTEGER PRIMARY KEY,
  languageName TEXT,
  person_idperson INTEGER,
  FOREIGN KEY (person_idperson) REFERENCES person(idperson)
);

-- Create course table
CREATE TABLE IF NOT EXISTS course (
  idcourse INTEGER PRIMARY KEY,
  courseName TEXT,
  person_idperson INTEGER,
  FOREIGN KEY (person_idperson) REFERENCES person(idperson)
);

-- Create hobby table
CREATE TABLE IF NOT EXISTS hobby (
  idhobby INTEGER PRIMARY KEY,
  hobbyName TEXT,
  person_idperson INTEGER,
  FOREIGN KEY (person_idperson) REFERENCES person(idperson)
);

-- Create site table
CREATE TABLE IF NOT EXISTS site (
  idsite INTEGER PRIMARY KEY,
  siteAddress TEXT,
  person_idperson INTEGER,
  FOREIGN KEY (person_idperson) REFERENCES person(idperson)
);

-- Create app table
CREATE TABLE IF NOT EXISTS app (
  idapp INTEGER PRIMARY KEY,
  appName TEXT,
  person_idperson INTEGER,
  FOREIGN KEY (person_idperson) REFERENCES person(idperson)
);

-- Create project table
CREATE TABLE IF NOT EXISTS project (
  idproject INTEGER PRIMARY KEY,
  projectName TEXT,
  person_idperson INTEGER,
  FOREIGN KEY (person_idperson) REFERENCES person(idperson)
);
