/* QUESTION 1 CREATE TABLE*/
CREATE TABLE supplier (
    supplier_id numeric(10) PRIMARY KEY,
    supplier_name varchar2(50) UNIQUE,
    contact_name varchar2(50),
    city varchar2(10),
    Region varchar2(2),
    CHECK(region IN ('N','NW','NE','S','SE','SW','W','E'))
);

/* Q1.1 */
INSERT INTO supplier(supplier_id, supplier_name, contact_name, city, Region) VALUES(100, 'John', 'Doe', 'Toronto', 'NW');
INSERT INTO supplier(supplier_id, supplier_name, contact_name, city, Region) VALUES(200, 'Johnathan', 'Smith', 'Montreal', 'E');
INSERT INTO supplier(supplier_id, supplier_name, contact_name, city, Region) VALUES(300, 'Muhammad', 'Sabeeh', 'Vancouver', 'W');
INSERT INTO supplier(supplier_id, supplier_name, contact_name, city, Region) VALUES(400, 'Alan', 'Randall', 'Yorkshire', 'SE');
INSERT INTO supplier(supplier_id, supplier_name, contact_name, city, Region) VALUES(500, 'Jane', 'Doe', 'Toronto', 'NW');
INSERT INTO supplier(supplier_id, supplier_name, contact_name, city, Region) VALUES(600, 'Gone', 'Good', 'London', 'N');
INSERT INTO supplier(supplier_id, supplier_name, contact_name, city, Region) VALUES(700, 'Seal', 'Doe', 'Copenhagen', 'NW');
INSERT INTO supplier(supplier_id, supplier_name, contact_name, city, Region) VALUES(800, 'Gerry', 'Doe', 'New York', 'SE');

/* Q1.2 */

SELECT * 
FROM supplier
WHERE supplier_id = 500;

/* Q1.3 */
ALTER TABLE supplier
ADD phone_number numeric(10);

/* Q1.4 */
ALTER TABLE supplier
SET UNUSED COLUMN city;

/* Q1.5 */
ALTER TABLE supplier
DROP UNUSED COLUMNS;

/* Q1.6 */
ALTER TABLE supplier
RENAME TO SUPPLIER_CONTACT;
SAVEPOINT ONE;
/* Q1.7 */
DELETE FROM SUPPLIER_CONTACT;

/* Q1.8 */
ROLLBACK TO ONE;

/* Q1.9 */
DROP TABLE SUPPLIER_CONTACT PURGE;











/* QUESTION 2 */
--First Table
CREATE TABLE DEPARTMENT(
    DNO number(*,0) PRIMARY KEY NOT NULL,
    DNAME varchar2(30) UNIQUE NOT NULL,
    DLOCATION varchar2(30) UNIQUE NOT NULL
);
--Second Table
CREATE TABLE EMPLOYEE(
    ENO char(4) PRIMARY KEY NOT NULL,
    ENAME varchar2(30) NOT NULL,
    JOB varchar2(30) NOT NULL,
    MANAGER char(4),
    JDATE TIMESTAMP NOT NULL,
    GENDER char(1),
    SALARY number(8,2),
    COMISSION number(8,2) DEFAULT 0,
    DEPTNO number(*,0) NOT NULL,
        CONSTRAINT fk_deptno
        FOREIGN KEY (DEPTNO) REFERENCES DEPARTMENT(DNO),
    CHECK(SALARY>0),
    CHECK(GENDER IN ('M','F'))
);

--INPUT DATA
INSERT INTO DEPARTMENT VALUES(1234,'Programmers','TORONTO');
INSERT INTO DEPARTMENT VALUES(2345,'Front End Devs','VANCOUVER');
INSERT INTO DEPARTMENT VALUES(3456,'Back End Devs','BRITISH COLUMBIA');
INSERT INTO DEPARTMENT VALUES(4567,'UI/UX','NEWFOUNDLAND');
INSERT INTO DEPARTMENT VALUES(5678,'Concept Artists','QUEBEC');
INSERT INTO DEPARTMENT VALUES(6789,'Artists','ONTARIO');
INSERT INTO DEPARTMENT VALUES(7890,'Marketing','USA');
INSERT INTO DEPARTMENT VALUES(8901,'QA','CANADA');

INSERT INTO EMPLOYEE(ENO, ENAME, JOB, JDATE, GENDER, SALARY, COMISSION, DEPTNO)
    VALUES(1245,'Muhammad Sabeeh','Backend Dev',CURRENT_TIMESTAMP,'M','800000','0',3456);
INSERT INTO EMPLOYEE(ENO, ENAME, JOB, JDATE,GENDER, SALARY, COMISSION, DEPTNO)
    VALUES(1234,'John Jacobs','Programmers',CURRENT_TIMESTAMP,'M','70000','0',1234);
INSERT INTO EMPLOYEE(ENO, ENAME, JOB, JDATE,GENDER, SALARY, COMISSION, DEPTNO)
    VALUES(1235,'Mary Mellenkamp','Front End Devs',CURRENT_TIMESTAMP,'F','60000','0',2345);
INSERT INTO EMPLOYEE(ENO, ENAME, JOB, JDATE,GENDER, SALARY, COMISSION, DEPTNO)
    VALUES(1236,'Zaid Zengulk','UI/UX',CURRENT_TIMESTAMP,'M','50000','2000',4567);
INSERT INTO EMPLOYEE(ENO, ENAME, JOB, JDATE,GENDER, SALARY, COMISSION, DEPTNO)
    VALUES(1237,'Jin Jax','Concept Artists',CURRENT_TIMESTAMP,'M','40000','6000',5678);
INSERT INTO EMPLOYEE(ENO, ENAME, JOB, JDATE,GENDER, SALARY, COMISSION, DEPTNO)
    VALUES(1238,'Caleb Cullen','Artists',CURRENT_TIMESTAMP,'M','30000','20000',6789);
INSERT INTO EMPLOYEE(ENO, ENAME, JOB, JDATE,GENDER, SALARY, COMISSION, DEPTNO)
    VALUES(1239,'Gerry Gertrude','Marketing',CURRENT_TIMESTAMP,'M','20000','20000',7890);
INSERT INTO EMPLOYEE(ENO, ENAME, JOB, JDATE,GENDER, SALARY, COMISSION, DEPTNO)
    VALUES(1230,'Fatima Fareeb','QA',CURRENT_TIMESTAMP,'F','10000','0',8901);
    
SELECT * FROM EMPLOYEE;
SELECT * FROM DEPARTMENT;