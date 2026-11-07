# TesloShop

Tienda conceptual construida con React y TypeScript, conectada a una API en
NestJS con PostgreSQL. Incluye catálogo, filtros, autenticación, administración
de productos y carga de imágenes.

## Tecnologías

- Frontend: React, TypeScript, Vite, Tailwind CSS, React Router, TanStack Query y Zustand.
- Backend: NestJS, TypeORM, PostgreSQL, Passport/JWT, bcrypt y Multer.
- Docker Compose para PostgreSQL en desarrollo.

## Arranque local

Necesitas Node.js y Docker Desktop.

1. En la raíz, prepara el entorno del frontend:

   ```bash
   cp .env.template .env
   npm ci
   ```

2. En una terminal, inicia la base de datos y la API:

   ```bash
   cd backend
   cp .env.template .env
   docker compose up -d
   npm ci
   npm run start:dev
   ```

3. Carga los datos de ejemplo una vez desde `http://localhost:3000/api/seed`.
   El endpoint reinicia los productos y usuarios de la base de datos local.
4. En otra terminal, desde la raíz del proyecto, inicia la tienda:

   ```bash
   npm run dev
   ```

La documentación de la API está en `http://localhost:3000/api`.

## Usuario de prueba

- Administrador: `test1@google.com` / `Abc123`
- Usuario: `test2@google.com` / `Abc123`

## Créditos

Proyecto realizado como práctica a partir del curso de React y TypeScript de
DevTalles impartido por Fernando Herrera. La integración del backend se basa en
el material de [Klerith](https://github.com/Klerith/nest-teslo-shop/tree/complete-backend-paginated-filters).
El diseño de la tienda se personalizó para este proyecto.

Los archivos `.env`, dependencias instaladas y datos locales de PostgreSQL no
se incluyen en Git.
