--utilizar base de datos
use  clientes
--crear tabla
create table comprador
(
    id INT(6),
    UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(15)
);
--MOSTRAR TABLAS 

