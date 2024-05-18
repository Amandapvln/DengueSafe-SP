-- Criando o banco de dados
CREATE DATABASE dbdengue;

USE dbdengue;

-- Criação da tabela casos
CREATE TABLE casos
(
	idCaso INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dataRegistro DATE,
    status CHAR(1),
    sintomas VARCHAR(255),
    tratamento VARCHAR(255),
    latitude DOUBLE,
    longitude DOUBLE,
    bairro VARCHAR(255),
    regiao VARCHAR(255)
);

-- Criação da tabela morador
CREATE TABLE morador
(
	idMorador INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(255),
    bairro VARCHAR(255),
    regiao VARCHAR(255)
);

-- Inserir um novo morador
INSERT INTO Morador (nome, email, telefone, endereco, bairro, regiao) 
VALUES ('Gabriel Pavão', 'gb.pavao@gmail.com', '11987654001', 'Rua Martim Burchard, 201', 'Brás', 'Norte');

-- Inserir um novo morador
INSERT INTO Morador (nome, email, telefone, endereco, bairro, regiao) 
VALUES ('Amanda Lino', 'mandekodev@gmail.com', '11992291666', 'Rua Martim Burchard, 201', 'Brás', 'Norte');

-- Selecionar todos os moradores
SELECT * FROM Morador;

-- Inserir um novo caso
INSERT INTO casos (dataRegistro, status, sintomas, tratamento, latitude, longitude, bairro, regiao) 
VALUES ('2024-05-20', 'C', 'Dor de cabeça, náusea', 'Medicação', -23.5616, -46.6550, 'Mooca', 'Leste');

-- Inserir um novo caso
INSERT INTO casos (dataRegistro, status, sintomas, tratamento, latitude, longitude, bairro, regiao) 
VALUES ('2024-05-18', 'C', 'Dor de cabeça, náusea', 'Medicação', -23.5616, -46.6550, 'Ibirapuera', 'Leste');

-- Selecionar todos os casos
SELECT * FROM casos;

-- Selecionar um caso específico pelo idCaso
SELECT * FROM casos WHERE idCaso = 1;

-- Selecionar todos os moradores
SELECT * FROM Morador;

-- Selecionar um morador específico pelo idMorador
SELECT * FROM Morador WHERE idMorador = 2;

-- Atualizar um caso específico
UPDATE casos 
SET status = 'R', tratamento = 'Repouso, hidratação e acompanhamento médico'
WHERE idCaso = 2;

-- Atualizar um morador específico
UPDATE Morador 
SET telefone = '11987654333', endereco = 'Rua Nova, 456'
WHERE idMorador = 1;

-- Deletar um caso específico
DELETE FROM casos WHERE idCaso = 2;

-- Deletar um morador específico
DELETE FROM Morador WHERE idMorador = 2;

-- Conferir dados atualizados
SELECT * FROM Morador;
SELECT * FROM casos;

-- Adicionar a nova coluna id_morador como AUTO_INCREMENT
ALTER TABLE morador
ADD COLUMN id_morador BIGINT NOT NULL AUTO_INCREMENT;

-- Definir a coluna id_morador como a nova PRIMARY KEY
ALTER TABLE morador
ADD PRIMARY KEY (id_morador);


