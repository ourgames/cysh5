DROP DATABASE IF EXISTS `db_cysh5`;
CREATE DATABASE IF NOT EXISTS `db_cysh5` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;

USE `db_cysh5`;

DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user` (
  `user_no` int(11) NOT NULL AUTO_INCREMENT,
  `account_uuid` varchar(50) CHARACTER SET utf8 NOT NULL,
  `user_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_photo` text CHARACTER SET utf8,
  `user_score_a` int(11) DEFAULT '0',
  `user_score_b` int(11) DEFAULT '0',
  `user_step` int(11) DEFAULT '0',
  `user_tickets` int(11) DEFAULT '0',
  `user_be_liked` int(11) DEFAULT '0',
  `user_likes_today` int(11) DEFAULT '0',
  `user_likes_no` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_likes_total` int(11) DEFAULT '0',
  `last_refresh_time` datetime DEFAULT NULL,
  `phone_no` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT "",
  `qq_no` int(11) DEFAULT '0',
  `address` text CHARACTER SET utf8,
  `regist_time` datetime DEFAULT NULL,
  `regist_ip` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_no`),
  UNIQUE KEY `account_uuid_UNIQUE` (`account_uuid`),
  KEY `idx_uuid` (`account_uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=1000001 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `tb_likes_limit`;
CREATE TABLE `tb_likes_limit` (
  `ip` varchar(50) NOT NULL,
  `ip_likes_today` int(11) NOT NULL,
  `ip_likes_total` int(11) NOT NULL,
  `last_refresh_time` datetime NOT NULL,
  PRIMARY KEY (`ip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `tb_rank`;
CREATE TABLE `tb_rank` (
  `rank_no` int(11) NOT NULL AUTO_INCREMENT,
  `user_no` int(11) NOT NULL,
  `last_refresh_time` datetime DEFAULT NULL,
  `likes` int(11) NOT NULL,
  PRIMARY KEY (`rank_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `tb_config` (
  `config_no` int(11) NOT NULL AUTO_INCREMENT,
  `config_key` varchar(40) DEFAULT NULL,
  `config_value` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`config_no`),
  KEY `idx_config_key` (`config_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `SPRING_SESSION`;
CREATE TABLE `SPRING_SESSION` (
  `SESSION_ID` char(36) NOT NULL,
  `CREATION_TIME` bigint(20) NOT NULL,
  `LAST_ACCESS_TIME` bigint(20) NOT NULL,
  `MAX_INACTIVE_INTERVAL` int(11) NOT NULL,
  `PRINCIPAL_NAME` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`SESSION_ID`),
  KEY `SPRING_SESSION_IX1` (`LAST_ACCESS_TIME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `SPRING_SESSION_ATTRIBUTES`;
CREATE TABLE `SPRING_SESSION_ATTRIBUTES` (
  `SESSION_ID` char(36) NOT NULL,
  `ATTRIBUTE_NAME` varchar(200) NOT NULL,
  `ATTRIBUTE_BYTES` blob,
  PRIMARY KEY (`SESSION_ID`,`ATTRIBUTE_NAME`),
  KEY `SPRING_SESSION_ATTRIBUTES_IX1` (`SESSION_ID`),
  CONSTRAINT `SPRING_SESSION_ATTRIBUTES_FK` FOREIGN KEY (`SESSION_ID`) REFERENCES `SPRING_SESSION` (`SESSION_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP PROCEDURE IF EXISTS proc_update_rank;
delimiter $$
CREATE PROCEDURE `proc_update_rank`(
	OUT result INT,
	IN user_no INT,
	IN user_likes INT,
    IN rank_max BIGINT
)
BEGIN
	DECLARE min_likes INT DEFAULT 0;
    DECLARE min_rank_no INT DEFAULT 0;
    DECLARE my_rank_no INT DEFAULT 0;
	SET result = 0;
    
    -- 排行榜中是否有该玩家
     IF EXISTS (SELECT user_no FROM `tb_rank` WHERE `tb_rank`.`user_no` = user_no) THEN
		-- 如果有该玩家则将点赞数+1
        SELECT rank_no INTO my_rank_no FROM `tb_rank` WHERE `tb_rank`.`user_no` = user_no;
		UPDATE `tb_rank` SET last_refresh_time = NOW(), likes = user_likes WHERE `tb_rank`.`rank_no` = my_rank_no;
        SET result = 1;
     ELSE
		-- 判断排行榜是否已满
		IF (SELECT COUNT(*) FROM `tb_rank`) > rank_max THEN
			-- 排行榜已满的情况下
			SELECT `tb_rank`.`likes`, `tb_rank`.`rank_no`INTO min_likes, min_rank_no FROM `tb_rank` ORDER BY `tb_rank`.`likes` ASC LIMIT 0, 1;
			IF user_likes <= min_likes THEN
				SET result = 0;
			ELSE
				UPDATE tb_rank SET `user_no` = user_no, last_refresh_time = NOW(), `likes` = user_likes WHERE `rank_no` = min_rank_no;
				SET result = 2;
			END IF;
		ELSE
			-- 排行榜未满的情况下
			IF NOT EXISTS (SELECT user_no FROM `tb_rank` WHERE `tb_rank`.`user_no` = user_no) THEN
				INSERT INTO `tb_rank`(user_no, last_refresh_time, likes) VALUES (user_no, NOW(), user_likes);
				SET result = 3;
			ELSE
				SET result = 4;
			END IF;
		END IF;
     END IF;
END$$
delimiter ;