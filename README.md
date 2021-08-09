<h1 align="center">
    LaunchStore
</h1>

<p align="center">
	<img alt="Author" src="https://img.shields.io/badge/Author-Pedro%20L%20S%20Silva-6558c3?style=plastic" />
	<img alt="License" src="https://img.shields.io/badge/license-MIT-6558C3?style=plastic" />
	<img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/pedrolssilva/LaunchStore?color=6558C3&style=plastic" />
	<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/pedrolssilva/LaunchStore?color=6558C3&style=plastic" />
	<img alt="License" src="https://img.shields.io/badge/status-Conclu%C3%ADdo-6558C3?style=plastic" />
</p>

## About

The project **LaunchStore** is e-commerce that was created during the classes of the course **[Bootcamp - LaunchBase](https://github.com/pedrolssilva/LaunchBase-3_0)** taught by **[Rocketseat](https://rocketseat.com.br/)** with the purpose of practice all content learned during the course.

## Features

- [X] User sign in and sing up.
- [X] Product advertisement creation.
- [X] Product orders.
- [X] Buy cart.
- [X] Search product.
- [X] Image upload with Multer.
- [X] Dynamic pages with  Nunjucks.
- [X] PostgreSQL database.
- [X] Password recovery with email send.
- [X] Animations with Lottie.

## Technologies and libraries

The project was built using the following technologies and libraries:
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [NodeJS](https://nodejs.org/pt-br/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [Nodemailer](https://nodemailer.com/about/)
- [BcryptJS](https://github.com/dcodeIO/bcrypt.js)
- [Multer](https://github.com/expressjs/multer)
- [Faker.js](https://github.com/Marak/Faker.js)
- [PostgreSQL](https://www.postgresql.org/)

## How to download and run in development mode

##### 👉 Needed tools:

- [Vscode](https://code.visualstudio.com/) - Used as file editor; 
- [Node.Js](https://nodejs.org/en/) - Designed to build scalable network applications;
- [npm](https://www.npmjs.com/) - Package manager;
- [Git](https://git-scm.com/downloads) - Version control;
- [PostBird](https://www.electronjs.org/apps/postbird) - A cross-platform PostgreSQL GUI client used to access and manage the database;
- [PostgreSQL](https://www.postgresql.org/download/) - A powerful, open source object-relational database. Some important things beneath:
    - [Setting the database used into this project](https://github.com/pedrolssilva/LaunchStore/blob/master/src/config/db.js);
    - [SQL file to auxiliary in the database creation of tables, columns, constraints, etc.](https://github.com/pedrolssilva/LaunchStore/blob/master/launchstoredb.sql);


##### 👉 Após instalar as ferramentas:

```bash

#->Into terminal:

# Clone the repository
$ git clone git@github.com:pedrolssilva/LaunchStore.git

# Open the project folder and run in your code editor
$ cd Launchstore && code .

# Create the database using the file launchstoredb.sql

# Execute the seeds.js to populate the database
$ node src/config/seeds.js

# Install the project dependecies
$ npm install

# Start the server
$ npm start

# Acess using the following address:
  - automatically (open when the server is started by the command above), if not open a new browser page, type: http://localhost:3000/

# How to login in the system:
  - email: get in the table "users" into the database created after run the seeds.js;
  - senha: 1111
  ```
