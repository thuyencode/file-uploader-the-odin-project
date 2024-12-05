# Project: File Uploader

[More details information here.](https://www.theodinproject.com/lessons/nodejs-file-uploader)

👉 [Check the screenshots of this project](#screenshots) 📸

**Tech stacks:**

|                                                                                                                                             Frontend                                                                                                                                             |                                                                                              Backend                                                                                              |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![front-end's tech stack](https://go-skill-icons.vercel.app/api/icons?i=vite,ts,react,reactquery,tailwind,daisyui)](https://github.com/LelouchFR/skill-icons) <br /> and [Tanstack Router](https://tanstack.com/router/latest), [Axios](https://axios-http.com), [Valibot](https://valibot.dev) | [![back-end's tech stack](https://go-skill-icons.vercel.app/api/icons?i=nodejs,ts,express,postgresql,prisma)](https://github.com/LelouchFR/skill-icons) <br /> and [Valibot](https://valibot.dev) |

## Getting started

### 1. Installing dependencies

This project use some of Bun APIs so make sure [Bun is installed](https://bun.sh).

Then process to install dependencies:

```sh
bun i
```

### 2. Setting-up the database

Your need to install PostgreSQL first using your OS's package manager, an installer file or using Docker (recommended).

Configure the host address, port number, username, password, a database according to [`.env.example`](./.env.example).

Copy the file [`.env.example`](./.env.example) into `.env.production.local` and `.env.development.local` and edit the env variables' values.

Then use one of these commands to migrate the database:

```text
# If you're in development mode
bun prisma:dev:migrate

# If you're in production mode
bun prisma:dev:migrate
```

## 3. Running the project

First, install all the dependencies:

To run the dev server:

```sh
bun dev
```

To bundle and run the project in production:

```sh
bun run build
bun start
```

## Screenshots

| ![Home page](./images/home_page.png) |
| :----------------------------------: |
|              Home page               |

| ![Sign-in page](./images/sign_in.png) |
| :-----------------------------------: |
|             Sign-in page              |

| ![Files page](./images/files_page.png) |
| :------------------------------------: |
|               Files page               |

| ![File sharing page](./images/file_sharing.png) |
| :---------------------------------------------: |
|                File sharing page                |

| ![File uploader page](./images/file_uploading.png) |
| :------------------------------------------------: |
|                 File uploader page                 |
