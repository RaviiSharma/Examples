
/* CREATE COMMAND 

1) Write a query to create a database named “store”.

CREATE DATABASE store;

NOTE: (To create table first we must have to write “USE” command.)

➢ USE store;

2) Write a query to create a table in ‘store’ Database with name
“orderDemo” which will have 5 columns. 
i.id (Integer ,Primary key)
ii. Product name (String, Not Null)
iii. Order date (Date)
iv. Price (Decimal, Not Null)
v. Quantity (Integer)

create table orderDemo(
    id int primary,
    produnct_name varchar(50) not null,
    order_date date,
    price decimal(10,2) not null,
    quantity int
);

CREATE TABLE orderDemo(
    id int PRIMARY KEY,
    product_name varchar(50) NOT NULL,
    order_date date,
    price decimal(10,2) NOT NULL,
    quantity int );

3) Write a query to create a new table named “orderDetail” which is
the exact copy of “orderDemo” Table.
 
create table orderDEtail as select * from orderDemo;
CREATE TABLE orderDetail AS SELECT * from orderDemo;

4) Write a query to delete the “orderDemo” table.

DROP TABLE orderDemo;

////////////////////////////////// INSERT COMMAND //////////////////////

5. CREATE TABLE orderDetail(
id int PRIMARY KEY,
product_name varchar(50) NOT NULL,
order_date date,
price decimal(10,2) NOT NULL,
quantity int
);

SQL Practice Questions

1) Insert one record in “orderDetail” table.
insert into orderDetail values(1,"pen","2023-08-01",20.3,2)
INSERT INTO orderDetails VALUES (1, 'pen',"2023-01-01",9.05,3)

2) Insert minimum 5 records at once in “orderDetail” table. (As per your choice)
INSERT INTO orderDetail VALUES
(2,'Book','2023-01-01',520,2),
(3,'Ink','2023-01-12',50.55,1),
(4,'Map','2023-01-19',25,5),
(5,'Bottle','2023-01-30',600,1),
(6,'Marker','2023-02-05',80,4);

3) Insert 2 records only into id, Product name and Price column.
INSERT INTO orderDetail (id, product_name, price) VALUES
(7,'pen',65.90),
(8,'Tape',10);

insert into orderDetail (id,product_name,price) values(2,"copy",12.4), (3,"notebook",34.2)

//////////////////// SELECT COMMAND //////////////////

CREATE TABLE employee(
id int PRIMARY KEY,
name varchar(50) NOT NULL,
salary int,
department varchar(50),
dob date );

____INSERT Records Into employee Table.   

INSERT INTO employee VALUES
(101,'Jack',2000,'HR','1997-05-19’),
(102,'Jack',NULL,'HR',NULL),
(103,'Mack',6000,'Developer','1997-03-10’),
(104,'Peter',4000,'Tester','1998-07-16’),
(105,'Tom',3000,'HR','1998-11-03’),
(106,'Leo',2500,'Developer','1997-10-10’),
(107,'Roger',5300,'Accounts','1997-06-17’),
(108,'Mike',2000,NULL,'1998-03-09’),
(109,'Paul',4800,'Developer','1998-12-28’),
(110,'Hannah',2000,'Accounts','1999-09-26');

1) Write a query to display all the records of employee Table.

SELECT * FROM employee ;

2) Write a query to display unique salary of employee table.

SELECT DISTINCT salary FROM employee;

3) Write a query to display all data of name and dob column of employee table.

SELECT name, dob FROM employee;

4) Write a query to display Id , name and the annual salary with the
column name 'annual_salary' from the employee table.

SELECT id, name, salary*12 AS annual_salary FROM employee;

5) Write a query to display unique combination of salary and
department of the employee table.

select distinct salary , department from employee;
SELECT DISTINCT salary, department FROM employee;

6) Write a query to get id and display Name with salary in parentheses()
from the employee table and the resultant column name should be
emp_detail.

SELECT id, concat(name,'(',salary,')’) AS emp_detail FROM employee;

///////////////// WHERE CALUSE //////////////////

1) Write a query to display all the records of the employee whose
joining_date is after 20 March 2022.

SELECT * FROM employees WHERE joining_date > '2022-03-20';

2) Write a query to display emp_no, first_name, last_name, department of
the employee whose department is ‘Finance’.


SELECT emp_no,first_name,last_name,department FROM employees
WHERE department = 'Finance’;

3) Write a query to display emp_no, salary, department of the employee
whose salary is below 35000.

SELECT emp_no, salary, department FROM employees WHERE salary < 35000;

4) Write a query to display all the records of the employee whose birth_date
is after or equal to 24 January 1998.

 SELECT * FROM employees WHERE birth_date >= '1998-01-24';

5) Write a query to display emp_no, first_name, department of
the employee whose department is other than ‘IT’.

SELECT emp_no, first_name, department FROM employees WHERE department != 'IT';

6) Write a query to display all the records of the employee whose
emp_no is 1010 or below 1010.

SELECT * FROM employees WHERE emp_no <= 1010;

7) Write a query to display unique first_name of the employee whose gender is Male.

SELECT DISTINCT first_name FROM employees WHERE gender='M’;

8) Write a query to display emp_no, first_name , salary and add 10000
to the salary of the employee whose salary is below 25000 and
display final salary as column name ‘final_salary’.

SELECT emp_no,first_name,salary, salary+10000 AS final_salary FROM
employees WHERE salary < 25000;

9) Write a query to display emp_no and full name of the employee
with the column name as ‘full_name’ and the emp_no should be
more than 1015.

SELECT emp_no,concat(first_name,' ',last_name) AS full_name FROM
employees WHERE emp_no >1015;

select emp_no,concat(first_name," ",last_name) as full_name from employee where emp_no >1015

///////////////////// LIKE & Wildcards ////////////

1) Select all employees whose first name ends with 'y’.

SELECT * FROM employee WHERE first_name LIKE '%y';
select * from employee where first_name like "%i";

2) Select all employees whose date of birth is in April.

SELECT * FROM employee WHERE birth_date LIKE '%-04-%';
select * from employee where dob like "%-04-%";

3) Select emp_no , first name and department of the employees whose
department does not contains the word ‘ing’.

select emp_no,first_name, department from employee where department not like "%ing%";
SELECT emp_no, first_name, department FROM employee WHERE department NOT LIKE '%ing% ';

4) Select all employees whose last name starts with ‘w’ and has
emp_no more than 1015.
select * from employee where last_name like "w%" and emp_no > 1015
SELECT * FROM employee WHERE last_name LIKE 'w%' AND emp_no > 1015;

5) Select first_name and last_name of the employee with a first_name
that start with “j” and are at least 4 characters in length.

SELECT first_name, last_name FROM employee WHERE first_name
LIKE 'j___%';

6) Select all employees whose last name contains ‘ill’ and has salary
between 30000 and 50000.

SELECT * FROM employee WHERE last_name LIKE '%ill%' AND salary
BETWEEN 30000 AND 50000;

7) Select emp_no, first_name and last_name of the employee whose
first name starts with 'S' and whose last name contains at least two 'l'
characters.

SELECT emp_no, first_name, last_name FROM employee WHERE
first_name LIKE 's%' AND last_name LIKE '%l%l%';

8) Select all employees whose joining date is either June 2022 or June
2021 and emp_no is not between 1011 and 1020.

SELECT * FROM employee WHERE joining_date LIKE '%2022-06-%'
OR joining_date LIKE '%2021-06-%' AND emp_no NOT BETWEEN
1011 AND 1020;

/////////////////////////// ORDER BY CLAUSE ///////////////////////

1) Write a SQL query to retrieve all the records with joining_date sorted
in descending order.

SELECT * FROM employee ORDER BY joining_date DESC;

2) Write an SQL query to retrieve all records from employee table and
sort them by last name in ascending order.

SELECT * FROM employee ORDER BY last_name ASC;

3) Retrieve emp_no, first_name, gender and salary from the employee
table whose salary is not NULL and sort them by gender in ascending
order, then by first name in ascending order.

SELECT emp_no, first_name, gender, salary FROM employee WHERE
salary IS NOT NULL ORDER BY gender , first_name;

4) Get all those employee from the employee table whose emp_no is
between 1011 and 1020 and sort them by emp_no in descending
order.

SELECT * FROM employee WHERE emp_no BETWEEN 1011 AND
1020 ORDER BY emp_no DESC;

5) Write a SQL query to retrieve unique First name and sort First Name
in ascending order.

SELECT DISTINCT first_name FROM employee ORDER BY first_name;


6) Retrieve emp_no, first_name, department and birth_date from the
employee table whose department contains only two character and
sort them by department in ascending order then by birth_date in
descending order.

SELECT emp_no, first_name, department, birth_date FROM emp
WHERE department LIKE '__' ORDER BY department , birth_date
DESC;

////////////////////////// AND, OR & NOT //////////

////////////////////////////  BETWEEN & IN /////////
/////////////////////// IS NULL- IS NOT NULL //////////
 

*/
