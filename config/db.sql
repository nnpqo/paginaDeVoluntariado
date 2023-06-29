SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

DROP DATABASE IF EXISTS database_app;
CREATE DATABASE database_app CHARACTER SET utf8mb4;
USE database_app;

-- --------------------------------------------------------------
-- TABLE user												-
-- --------------------------------------------------------------

DROP table if exists usuarios;
CREATE TABLE usuarios (
  id_usuario INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  codigo_voluntario VARCHAR(100) NOT NULL,
  contrasenia VARCHAR(100) NOT NULL,
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id_usuario)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------------
-- TABLE PUBLICACION									    -
-- --------------------------------------------------------------
CREATE TABLE publicaciones (
  id_publicacion INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre_publicacion VARCHAR(100) NOT NULL,
  descripcion TEXT,
  tipo_publicacion enum('evento', 'comunicado') DEFAULT 'evento',
  cantidad_voluntarios INT NOT NULL,
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id_publicacion)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------------
-- TABLE USUARIO-PUBLICACION
-- --------------------------------------------------------------
CREATE TABLE usuario_publicacion (
  id_publicacion INT UNSIGNED NOT NULL,
  id_usuario INT UNSIGNED NOT NULL,
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id_publicacion, id_usuario),
  KEY idx_fk_id_publicacion (id_publicacion),
  KEY idx_fk_id_usuario (id_usuario),
  CONSTRAINT fk_usuario_publicacion_publicacion FOREIGN KEY (id_publicacion) REFERENCES publicaciones (id_publicacion) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_usuario_publicacion_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;