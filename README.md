# express-sequelize-ts-template

A clean, production-ready **Express + Sequelize + TypeScript** boilerplate for building scalable REST APIs with ease.  
Includes modern tooling, structured architecture, and batteries-included setup for rapid backend development.

---

## ✨ Features

- ⚙️ **Express 5** — Fast and minimalist web framework
- 🗄️ **Sequelize ORM** — Supports MySQL, PostgreSQL, SQLite
- 🔒 **JWT Authentication** — Secure token-based auth flow
- 🧠 **TypeScript + Decorators** — Strong typing with OOP-friendly patterns
- 🧩 **Dependency Injection** — Powered by `tsyringe`
- 🌐 **i18n Localization** — With `i18next` middleware and file-based translations
- 📦 **Migrations & Seeders** — Managed via `sequelize-cli`
- 🧰 **Zod Validation** — Schema-based input validation
- 🪵 **Winston Logger** — With daily rotate logs
- 🧼 **Linting & Formatting** — ESLint + Prettier integration
- 🧪 **Ready for Testing** — Easily extendable for Jest or Supertest setup

## 🏗️ Project Structure

```
├── package.json
├── pnpm-lock.yaml
├── README.md
├── src
│   ├── error
│   │   ├── api.badRequest.ts
│   │   ├── api.conflict.ts
│   │   ├── api.error.ts
│   │   ├── api.forbidden.ts
│   │   ├── api.notFound.ts
│   │   ├── api.server.ts
│   │   ├── api.unauthorized.ts
│   │   ├── api.validation.ts
│   │   └── index.ts
│   ├── index.ts
│   ├── lib
│   │   ├── config.ts
│   │   ├── index.ts
│   │   └── setup
│   │       ├── app.ts
│   │       └── db.ts
│   ├── middlewares
│   │   ├── error.middleware.ts
│   │   ├── index.ts
│   │   ├── logger.middleware.ts
│   │   └── transaction.middleware.ts
│   ├── misc
│   │   ├── index.ts
│   │   ├── logger.ts
│   │   └── transaction.ts
│   ├── models
│   │   └── index.ts
│   ├── modules
│   ├── response
│   │   ├── api.response.ts
│   │   └── index.ts
│   ├── router
│   │   └── index.ts
│   └── types
│       ├── config.types.ts
│       └── index.ts
└── tsconfig.json
```

---

## ⚡ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/thenishantsapkota/express-sequelize-ts-template
cd express-sequelize-ts-template
```

### 2. Install Dependencies

```bash
pnpm i
```

### 3. Setup Environment Variables

Please look for `.env.example` file in the project root for example.

### 4. Run Migrations and Seeders

```bash
pnpm migrate
pnpm seed
```

### 5. Start Development Server

```bash
pnpm dev
```

### 6. Build for Production

```bash
pnpm build
pnpm start
```

## 🧩 Useful Commands

| Command              | Description                           |
| -------------------- | ------------------------------------- |
| npm run dev          | Start development server (watch mode) |
| npm run build        | Compile TypeScript to JavaScript      |
| npm run migrate      | Run all database migrations           |
| npm run seed         | Run all seeders                       |
| npm run lint         | Run ESLint checks                     |
| npm run lint:fix     | Auto-fix linting issues               |
| npm run format       | Check code formatting                 |
| npm run format:write | Auto-format code with Prettier        |

## 📚 Tech Stack

- Backend Framework: Express 5
- ORM: Sequelize + Sequelize-Typescript
- Language: TypeScript
- Validation: Zod
- Auth: JSON Web Tokens (JWT)
- Dependency Injection: tsyringe
- Logging: Winston + Daily Rotate File
- Documentation: Swagger UI

## 🧠 Notes

- Supports both CommonJS and ESM-compatible setup.
- Easily adaptable for microservices or monolithic architectures.
- Preconfigured for clean code, consistency, and scalability.

## 📄 License

This project is licensed under the MIT License — feel free to use it for your own projects.

Developed with ❤️ by `thenishantsapkota` using Express, Sequelize, and TypeScript
