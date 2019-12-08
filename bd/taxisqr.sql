-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-12-2019 a las 21:23:48
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `taxisqr`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `documento` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `celular` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `ciudad` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `pais` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `foto` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `placa` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `informacion` varchar(60) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `documento`, `celular`, `correo`, `direccion`, `ciudad`, `pais`, `foto`, `placa`, `informacion`) VALUES
(1, 'Jhon', 'Rodriguez', '1193442217', '3137048643', 'leonel@hotmail.com', 'cll 4 ', 'medellin', 'Colombia', 'foto1.jpg', 'VCY-123', 'ha subido su rendimiento'),
(9, 'cristian', 'lampreda', '1146356322', '3148104533', 'cristian@hotmail.com', 'cll 56', 'cali', 'colombia', 'foto2.jpg', 'VCY-345', '2'),
(10, 'esteban', 'lopez', '1112515213', '3207043322', 'junior@hotmail.com', 'cll 65', 'mexico', 'mexico', 'foto3.jpg', 'VCY-545', 'lopez 3'),
(11, 'Paola', 'duran', '1143342512', '3007652345', 'paola@hotmail.com', 'cll 42 # 39 55', 'cali', 'colombia', 'foto4.jpg', 'VCY-000', 'Es ella'),
(26, 'leopoldo', 'lopez', '1184335363', '3163754553', 'leo@hotmail.com', 'av 56', 'Caracas', 'Venezuela', 'foto.jpg', 'VCI-345', 'tiene buenos viajes'),
(27, 'Brayan', 'Blanco', '1186774563', '3158763885', 'brayan@hotmail.com', 'cr 45', 'Cali', 'Colombia', 'foto.jpg', 'VTQ-929', 'mantenerlo vigilado'),
(42, 'Camilo', 'aponza', '1143534242', '3153634334', 'camilo@hotmail.com', 'av 6 ', 'cali', 'colombia', 'foto.jpg', 'VCE-231', 'soy de la iglesia'),
(44, 'Sebastian', 'Yepes', '1154332524', '3165365335', 'sebastian@hotmail.com', 'cll 45', 'Cali', 'Colombia', 'foto.jpg', 'VCY-654', 'Soy un conductor'),
(48, 'Fabian', 'Rodriguez', '1184324523', '3153654552', 'fabian@hotmail.com', 'no tiene', 'Cali', 'Colombia', 'foto.jpg', 'VTC-275', 'Consultar direccion de residencia'),
(52, 'Juan', 'Victoria', '123456789', '3225315406', 'juan@hotmail.com', 'cll 34  ', '', '', 'foto.jpg', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viajes`
--

CREATE TABLE `viajes` (
  `id` int(11) NOT NULL,
  `conductor` int(12) NOT NULL,
  `viajes` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `puntuacion` double NOT NULL,
  `comentario` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` varchar(60) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `viajes`
--

INSERT INTO `viajes` (`id`, `conductor`, `viajes`, `puntuacion`, `comentario`, `fecha`) VALUES
(10, 9, '1', 4, 'buen servicio', '11-02-2019'),
(11, 9, '1', 3, 'faltaron cosas', '05-03-2019'),
(12, 10, '1', 4, 'me gusta el viaje', '01-05-2019'),
(13, 1, '1', 5, 'Excelente viaje', '01-05-2019'),
(15, 11, '1', 5, 'Buen viaje', '03-03-2019'),
(24, 1, '1', 4.5, 'Me gusta el servicio', '21-04-2019'),
(25, 1, '1', 5, 'Gracias, 0 problemas', '01-04-2019'),
(26, 1, '1', 1.5, 'muy mal', '01-05-2019'),
(27, 1, '1', 3, 'mÃ¡s o menos ', '01-05-2019'),
(28, 10, '1', 1, 'no me gusta el servicio', '26-02-2019'),
(29, 10, '1', 2.5, 'para la proxima espero mejores resultados', '19-04-2019'),
(30, 9, '1', 5, 'Excelente', '14-02-2019'),
(31, 1, '1', 3, 'no me gusta mucho el servicio', '01-05-2019'),
(32, 11, '1', 3, 'no me gusta tanto como uber', '01-05-2019'),
(33, 9, '1', 5, 'muy bien excelente', '01-05-2019'),
(34, 44, '1', 5, 'graicas por el viaje', '02-05-2019'),
(35, 44, '1', 3.5, 'no me agrada mucho la idea', '02-05-2019'),
(36, 1, '1', 3.5, 'prueba piloto', '02-05-2019'),
(37, 10, '1', 4.5, 'muestra', '22-05-2019');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `viajes`
--
ALTER TABLE `viajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `conductor` (`conductor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `viajes`
--
ALTER TABLE `viajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `viajes`
--
ALTER TABLE `viajes`
  ADD CONSTRAINT `viajes_ibfk_1` FOREIGN KEY (`conductor`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
