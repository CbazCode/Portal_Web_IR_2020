CREATE DATABASE COVID19;

use COVID19;

CREATE TABLE usuarios(
    dni int PRIMARY KEY NOT NULL,
    nombre varchar(100) NOT NULL,
    apellido varchar(100) NOT NULL,
    edad varchar(100) NOT NULL,
    sexo varchar(10) NOT NULL,
    departamento varchar(100) NOT NULL,
    provincia varchar(100) NOT NULL,
    distrito varchar(100) NOT NULL,
    direccion varchar(100) NOT NULL,
    telefono int NOT NULL,
    estado  varchar(10) DEFAULT NULL,
    correo varchar(100) NOT NULL,
    contrasena varchar(100) NOT NULL
    );
SELECT * FROM usuarios


CREATE TABLE test_usuario(
    dni int NOT NULL,
    contadorDias int default 1,
    fecha DATETIME ,
    preg1 int NOT NULL,
    preg2 int NOT NULL,
    preg3 int NOT NULL,
    preg4 int NOT NULL,
    preg5 int NOT NULL,
    preg6 int NOT NULL,
    preg7 int NOT NULL,
    preg8 int NOT NULL,
    preg9 int NOT NULL,
    preg10 int NOT NULL,
    preg11 int NOT NULL,
    preg12 int NOT NULL,
    preg13 int NOT NULL,
    preg14 int NOT NULL,
    resultadoTest int NOT NULL,
    cambioDiario int NOT NULL,
    FOREIGN KEY (dni) REFERENCES usuarios(dni)
);


SELECT *FROM usuarios;