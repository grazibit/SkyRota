# SkyRota 🌍✈️  
Plataforma para encontrar e reservar destinos de viagem de forma rápida e intuitiva.

## 🚀 Pitch
Preview do Projeto![previl](https://github.com/user-attachments/assets/1f2c21a4-56cc-4b2a-a08f-8c3abf2130ea)

## 🛠️ Tecnologias Utilizadas  
- HTML, CSS e JavaScript  
- Bootstrap

## ✨ Funcionalidades  
✅ Pesquisa de destinos de viagem  
✅ Exibição de avaliações e preços 
✅ Layout responsivo  

## Banco de Dados
### Modelo Entidade Relacionamento:
![ER](https://github.com/user-attachments/assets/88be947e-8508-4d1f-92c4-5a8c36de64b4)

### Modelo Lógico:
![logicco](https://github.com/user-attachments/assets/426e07df-fc8a-4635-bb37-93e5f4bb3192)

### Modelo Físico:
```sh
CREATE DATABASE sky_rota;

USE sky_rota;

CREATE TABLE cliente (
    id_cliente INTEGER PRIMARY KEY, 
    email_cliente VARCHAR(255) NOT NULL, 
    senha_cliente VARCHAR(255) NOT NULL,
);

CREATE TABLE reserva (
    id_reserva INTEGER PRIMARY KEY,
    data_reserva DATE NOT NULL, 
    quantidade_pessoas INTEGER NOT NULL, 
    status_reserva VARCHAR(50) NOT NULL 
);

CREATE TABLE pacote (
    id_pacote INTEGER PRIMARY KEY, 
    nome_pacote VARCHAR(255) NOT NULL, 
    preco_pacote FLOAT NOT NULL,  
    data_inicio DATE NOT NULL, 
    data_fim DATE NOT NULL  
);

CREATE TABLE destino (
    id_destino INTEGER PRIMARY KEY, 
    preco_destino FLOAT NOT NULL,  
    endereco VARCHAR(255) NOT NULL,  
    descricao VARCHAR(500), 
    avaliacao VARCHAR(100),  
    imagem BLOB,  
);

CREATE TABLE avaliacao (
    id_avaliacao INTEGER PRIMARY KEY,
    nota INTEGER NOT NULL, 
    comentario VARCHAR(500),
    data_avaliacao DATE NOT NULL  
);

CREATE TABLE contato (
    id_contato INTEGER PRIMARY KEY, 
    telefone VARCHAR(15) NOT NULL, 
    email VARCHAR(255) NOT NULL  
);
   ```  
## 📧 Contato  
✉️ Email: grazielaespindola82@gmail.com 
🔗 LinkedIn: [Graziela Espindola](linkedin.com/in/graziela-espindola-2569a1232)  
📁 GitHub: [@grazibit](https://github.com/grazibit)  
