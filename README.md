# API de Banco de Dados

Esta é uma API de banco de dados que fornece funcionalidades CRUD (Create, Read, Update, Delete) para gerenciar dados do AWS DynamoDB. 

## Tecnologias Utilizadas

- Node.js: plataforma de desenvolvimento JavaScript
- Express: framework web para criação de APIs RESTful
- AWS DynamoDB: banco de dados NoSQL na nuvem da AWS

## Funcionalidades

- CRUD -> Criação, leitura, atualização e exclusão de dados no banco de dados.

## Pré-requisitos

- Node.js instalado

1 - Instale as dependências do projeto:
```bash
npm install
```

2 - Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis da AWS Dynamo DB:

```makefile
PORT = 3000
REGION = ''
ACCESS_KEY_ID = ''
SECRET_ACESS_KEY = ''
```
3 - Inicie o servidor:
```bash
npm start
```
Rotas
```
/ - GET -checar status da API
/api/db/read - GET - Recupera dados do banco de dados.
/api/db/write - POST - Escreve dados no banco de dados.
/api/db/delete - DELETE - Exclui dados do banco de dados.
```


## Exemplos de uso
**POST - Write**
Endpoint: `http://localhost:3000/api/db/write`  
Descrição: Adiciona dados no "users" table. Se o ID já existir, então um **UPDATE** é feito no documento existente.
Body:
```json
{
    "table": "users",
    "data":{
        "id": {"S":"3"},
        "active": {"BOOL":false},
        "email": {"S":"test@gmail.com"},
        "password": {"S":"123456"}
    }
}
```

**GET - Get filtered data**
Endpoint: `http://localhost:3000/api/db/read`  
Descrição: Filtra dados do "users" table usando o campo *email*.
Body:
```json
{
    "TableName": "users",
    "FilterExpression": "email = :field",
    "ExpressionAttributeValues": {
        ":field": {
            "S": "test@gmail.com"
        }
    }
}
```

**DELETE - Delete**
Endpoint: `http://localhost:3000/api/db/delete?id=3`  
Descrição: Deleta dados do "users" tablepelo ID do documento, nesse caso, o ID 3.

**GET - Get all data from a specific table**
Endpoint: `http://localhost:3000/api/db/read?table=users`  
Descrição: Retrieve todos os dados do "users" table.
