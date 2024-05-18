# DengueSafe-SP

DengueSafe-SP é um sistema de monitoramento de casos de dengue no município de São Paulo. O sistema é focado em documentar casos novos e alertar os moradores sobre a incidência de casos próximos às suas localizações.

## Funcionalidades

- Cadastro de novos casos de dengue, incluindo:
  - Bairro
  - Data de registro
  - Localização (Latitude e Longitude)
  - Região
  - Sintomas
  - Status do caso
  - Tratamento

- Alerta de casos de dengue próximos à localização do morador
- Interface amigável para fácil navegação e uso
- Sistema de gerenciamento de usuários com diferentes níveis de permissão

## Tecnologias Utilizadas

- Java 17
- Spring Boot 3.2.5
- Spring Data JPA
- Hibernate ORM 6.4.4
- MySQL 8.0
- Thymeleaf (para renderização de páginas HTML)
- Bootstrap (para estilização e componentes front-end)

## Pré-requisitos

Antes de começar, é necessário ter o MySQL instalado e configurado. Você pode usar o MySQL Workbench ou outro cliente MySQL para gerenciar o banco de dados.

## Configuração do Banco de Dados

1. Crie um banco de dados chamado `dengue_db`.
2. Configure o arquivo `application.properties` com as credenciais do seu banco de dados MySQL:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/dengue_db?useSSL=false&serverTimezone=UTC
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
