# REST API for a Coffe Shop system

This project is a REST API for a coffee shop system, developed in TypeScript and using Prisma to manage the PostgreSQL database.

# Database Structure

This project uses Prisma as an ORM, configured to work with PostgreSQL. Below is a brief overview of the models defined in the database schema and their relationships.

## Initial Settings

- **Prisma Client**: We use `prisma-client-js` as the client to interact with the database.
- **Data Source**: The database is PostgreSQL, with the connection URL defined by the environment variable `DATABASE_URL`.

## Models

### User
Represents the system's users.
- **Fields**: `id`, `name`, `email`, `password`, `created_at`, `updated_at`.
- **Relationships**: No direct relationship with other models.

### Category
Represents product categories.
- **Fields**: `id`, `name`, `created_at`, `updated_at`.
- **Relationships**: A category can have multiple products (`products`).

### Product
Represents the available products.
- **Fields**: `id`, `name`, `price`, `description`, `banner`, `created_at`, `updated_at`, `category_id`.
- **Relationships**: Belongs to a category (`category`) and can be in multiple items (`items`).

### Order
Represents orders made.
- **Fields**: `id`, `table`, `status`, `draft`, `name`, `created_at`, `updated_at`.
- **Relationships**: An order can have multiple items (`items`).

### Item
Represents individual items in an order.
- **Fields**: `id`, `amount`, `created_at`, `updated_at`, `order_id`, `product_id`.
- **Relationships**: Belongs to an order (`order`) and a product (`product`).


# API REST Routes

The information below outlines the available routes in the REST API of the project. The routes are organized by functionality categories: Users, Categories, Products, and Orders. All routes requiring authentication use middleware to verify if the user is authenticated.

## User Routes

- `POST /users`: Creates a new user.
- `POST /session`: Authenticates a user and returns a token.
- `GET /userinfo`: Returns the authenticated user's information.

## Category Routes

- `POST /category`: Creates a new category. Requires authentication.
- `GET /category`: Lists all categories. Requires authentication.

## Product Routes

- `POST /product`: Creates a new product and allows uploading an image for it. Requires authentication.
- `GET /category/product`: Lists products from a specific category. Requires authentication.

## Order Routes

- `POST /order`: Creates a new order. Requires authentication.
- `DELETE /order`: Removes an existing order. Requires authentication.
- `POST /order/add`: Adds an item to an order. Requires authentication.
- `DELETE /order/remove`: Removes an item from an order. Requires authentication.
- `PUT /order/send`: Marks an order as sent. Requires authentication.
- `GET /orders`: Lists all orders of the authenticated user.
- `GET /order/detail`: Details a specific order. Requires authentication.
- `PUT /order/finish`: Marks an order as finished. Requires authentication.


