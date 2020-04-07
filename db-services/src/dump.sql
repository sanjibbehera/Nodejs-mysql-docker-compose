CREATE DATABASE IF NOT EXISTS studentsdb;
CREATE USER 'student'@'localhost' IDENTIFIED BY 'student123';
GRANT ALL PRIVILEGES ON studentsdb.* TO 'student'@'localhost';

create table students ( student_id int unsigned not null auto_increment, student_first_name varchar(50) not null, student_last_name varchar(50) not null, student_class VARCHAR(30) not null, constraint pk_students primary key (student_id)) ENGINE=INNODB;
insert into students (student_first_name, student_class) values ('RAJ', 'DDLJ', 'CLASS II');
insert into students (student_first_name, student_class) values ('RAJA BABU', 'COOLIE NO 1', 'CLASS III');
insert into students (student_first_name, student_class) values ('NANDU', 'COOLIE NO 1', 'CLASS IV');
insert into students (student_first_name, student_class) values ('NANDU SABKA BANDHU', 'RAJA BABU', 'CLASS V');

create table student_details ( student_details_id int unsigned not null auto_increment, student_id int unsigned not null, student_first_name varchar(50) not null, student_last_name varchar(50) not null, student_class VARCHAR(30) not null, student_class_section varchar(30) not null, student_school_name varchar(100) not null, constraint pk_student_details primary key (student_details_id), FOREIGN KEY (student_id) REFERENCES students(student_id)) ENGINE=INNODB;

insert into student_details (STUDENT_ID, STUDENT_CLASS, STUDENT_FIRST_NAME, STUDENT_LAST_NAME, STUDENT_CLASS_SECTION, STUDENT_SCHOOL_NAME) values (1, 'CLASS II', 'RAJ', 'DDLJ', 'VIII', 'RAPCHIK SCHOOL');
insert into student_details (STUDENT_ID, STUDENT_CLASS, STUDENT_FIRST_NAME, STUDENT_LAST_NAME, STUDENT_CLASS_SECTION, STUDENT_SCHOOL_NAME) values (2, 'CLASS III', 'RAJA BABU', 'COOLIE NO 1', 'VII', 'RAPCHIK SCHOOL');
insert into student_details (STUDENT_ID, STUDENT_CLASS, STUDENT_FIRST_NAME, STUDENT_LAST_NAME, STUDENT_CLASS_SECTION, STUDENT_SCHOOL_NAME) values (3, 'CLASS IV', 'NANDU', 'COOLIE NO 1', 'VI', 'RAPCHIK SCHOOL');
insert into student_details (STUDENT_ID, STUDENT_CLASS, STUDENT_FIRST_NAME, STUDENT_LAST_NAME, STUDENT_CLASS_SECTION, STUDENT_SCHOOL_NAME) values (4, 'CLASS I', 'NANDU SABKA BANDHU', 'RAJA BABU', 'V', 'RAPCHIK SCHOOL');

COMMIT;