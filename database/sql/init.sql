-- Adminer 4.8.1 MySQL 8.0.33 dump

-- DROP DATABASE IF EXISTS test;
-- CREATE DATABASE test;
USE test;

-- Adminer 4.8.1 MySQL 8.0.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `gm_notice`;
CREATE TABLE `gm_notice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` int NOT NULL COMMENT '公告类型',
  `content` text NOT NULL COMMENT '公告内容',
  `is_delete` int DEFAULT '0' COMMENT '是否删除',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  `title` varchar(255) NOT NULL DEFAULT '',
  `weight` int DEFAULT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

TRUNCATE `gm_notice`;

DROP TABLE IF EXISTS `SequelizeMeta`;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

TRUNCATE `SequelizeMeta`;
INSERT INTO `SequelizeMeta` (`name`) VALUES
('20230321105625-init-notice.js'),
('20230330025055-add-column-notice.js');

-- 2023-04-30 14:12:19