# DriveUp

Este projeto foi desenvolvido para a disciplina Engenharia de Sistemas de Informação.

## Descrição técnica da infra

- **Linguagem:** JavaScript
- **Frameworks:** Angular
- **Plataformas:** Node.js, Vercel (deploy do Frontend), Heroku (deploy do Backend)
- **Banco de Dados:** PostgreSQL, utilizando a ferramenta Elephant SQL

## Configurações

### App
#### Rodando localmente
- Para fazer a build da aplicação, rode o comando `npm run build`
- Para inicializar, rode o comando `npm start`
- Para testar, `npm test`

### Server
#### Rodando localmente
Crie um arquivo `.env` dentro do diretório `server/` com as seguintes variáveis de ambiente, substituindo os valores:

```bash
DB_HOST=<db_host>
DB_USER=<db_user>
DB_PASSWORD=<db_password>
DB_DATABASE=<db_database>

MAILER_USER=<mailer_user>
MAILER_PASSWORD=<mailer_password>
```

#### Fazendo deploy no Heroku
Rode este comando para publicar as alterações do backend no Heroku.
```bash
git subtree push --prefix server heroku main
```

# Desenvolvido por

- [Ana Cuelbas](https://github.com/anabcuelbas)
- [Giovana Armani](https://github.com/gi-armani)
- [Laura Zitelli](https://github.com/LauraZitelli)
- [Vitória Lorentz](https://github.com/vitoriaglorentz)
