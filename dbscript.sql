create database EmployeeDB

create table Employee(
EmployeeId int,
EmployeeName varchar(100),
Department varchar(100),
DateOfJoining varchar(10),
PhotoFileName varchar(2048)
)

create table Department(
DepartmentId int,
DepartmentName varchar(100)
)