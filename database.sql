-- Crear la tabla
CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    telefono VARCHAR(20),
    correo_electronico VARCHAR(100),
    direccion VARCHAR(100)
);

INSERT INTO empleados (nombre, apellido, telefono, correo_electronico, direccion)
VALUES
    ('Juan', 'Pérez', '555123456', 'juan@example.com', 'Calle Principal 123'),
    ('María', 'López', '555987654', 'maria@example.com', 'Avenida Central 456'),
    ('Carlos', 'Gómez', '555555555', 'carlos@example.com', 'Carrera 7 890'),
    ('Laura', 'García', '555111111', 'laura@example.com', 'Calle 10 111'),
    ('Pedro', 'Rodríguez', '555999999', 'pedro@example.com', 'Avenida Libertador 789'),
    ('Ana', 'Martínez', '555444444', 'ana@example.com', 'Calle 5 222'),
    ('Luis', 'Hernández', '555222222', 'luis@example.com', 'Carrera 15 333'),
    ('Marta', 'Torres', '555777777', 'marta@example.com', 'Avenida Sur 456'),
    ('Diego', 'Ramírez', '555666666', 'diego@example.com', 'Calle 20 444'),
    ('Lucía', 'Sánchez', '555888888', 'lucia@example.com', 'Carrera Norte 555'),
    ('Sergio', 'González', '555333333', 'sergio@example.com', 'Calle 25 777'),
    ('Gabriela', 'Herrera', '555555555', 'gabriela@example.com', 'Avenida Oeste 888'),
    ('Andrés', 'Fernández', '555999999', 'andres@example.com', 'Carrera 30 999'),
    ('Valentina', 'Gutiérrez', '555777777', 'valentina@example.com', 'Calle Este 111'),
    ('Ricardo', 'Silva', '555111111', 'ricardo@example.com', 'Avenida Norte 222'),
    ('Camila', 'Rojas', '555444444', 'camila@example.com', 'Calle 40 333'),
    ('Javier', 'Morales', '555222222', 'javier@example.com', 'Carrera 35 444'),
    ('Isabella', 'Vargas', '555888888', 'isabella@example.com', 'Avenida Sur 666'),
    ('Daniel', 'Cortés', '555666666', 'daniel@example.com', 'Calle 50 555'),
    ('Paula', 'Ortega', '555777777', 'paula@example.com', 'Avenida Central 777');