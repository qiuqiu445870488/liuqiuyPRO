SET NAMES UTF8;
DROP DATABASE IF EXISTS myPro2;
CREATE DATABASE myPro2 CHARSET=UTF8;
USE myPro2;
CREATE TABLE News(
   id INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(255),
   img  VARCHAR(255),
   text VARCHAR(255)
);
INSERT INTO News VALUES(null,"肉质鲜嫩，口感很不错","./img/home/rouzhi1.png","我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作更加简单");
INSERT INTO News VALUES(null,"肉质鲜嫩，口感很不错","./img/home/rouzhi1.png","我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作更加简单");
INSERT INTO News VALUES(null,"肉质鲜嫩，口感很不错","./img/home/rouzhi1.png","我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作更加简单");
INSERT INTO News VALUES(null,"肉质鲜嫩，口感很不错","./img/home/rouzhi1.png","我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作更加简单");
INSERT INTO News VALUES(null,"肉质鲜嫩，口感很不错","./img/home/rouzhi1.png","我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作更加简单");