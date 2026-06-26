-- Crear la tabla
CREATE TABLE provinces (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    latitude DECIMAL(10,7) NOT NULL,
    longitude DECIMAL(10,7) NOT NULL,
    display_order INT NOT NULL
);

-- Datos de prueba

INSERT INTO provinces (name, full_name, latitude, longitude, display_order)
VALUES
('Buenos Aires', 'Provincia de Buenos Aires', -36.6769415, -60.5588319, 1),
('Catamarca', 'Provincia de Catamarca', -28.4695700, -65.7852400, 2),
('Chaco', 'Provincia del Chaco', -26.3864300, -60.7656600, 3),
('Chubut', 'Provincia del Chubut', -43.3001600, -65.1022800, 4),
('Córdoba', 'Provincia de Córdoba', -31.4173400, -64.1833200, 5),
('Corrientes', 'Provincia de Corrientes', -27.4692100, -58.8306300, 6),
('Entre Ríos', 'Provincia de Entre Ríos', -31.7319700, -60.5238000, 7),
('Formosa', 'Provincia de Formosa', -24.8949300, -60.0166700, 8),
('Jujuy', 'Provincia de Jujuy', -24.1857900, -65.2994800, 9),
('La Pampa', 'Provincia de La Pampa', -36.6166700, -64.2833300, 10),
('La Rioja', 'Provincia de La Rioja', -29.4135000, -66.8558000, 11),
('Mendoza', 'Provincia de Mendoza', -32.8894600, -68.8458400, 12),
('Misiones', 'Provincia de Misiones', -27.3670800, -55.8960800, 13),
('Neuquén', 'Provincia del Neuquén', -38.9516100, -68.0591000, 14),
('Río Negro', 'Provincia de Río Negro', -40.8134500, -63.0006700, 15),
('Salta', 'Provincia de Salta', -24.7859000, -65.4116600, 16),
('San Juan', 'Provincia de San Juan', -31.5375000, -68.5363900, 17),
('San Luis', 'Provincia de San Luis', -33.2950100, -66.3356300, 18),
('Santa Cruz', 'Provincia de Santa Cruz', -51.6226100, -69.2181300, 19),
('Santa Fe', 'Provincia de Santa Fe', -31.6333300, -60.7000000, 20),
('Santiago del Estero', 'Provincia de Santiago del Estero', -27.7951100, -64.2614900, 21),
('Tierra del Fuego', 'Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur', -54.8019100, -68.3029500, 22),
('Tucumán', 'Provincia de Tucumán', -26.8241400, -65.2226000, 23);
SELECT current_database();
