# SwiftMart

SwiftMart is a fast and efficient grocery delivery platform designed to offer real-time product browsing, smart cart management, secure payment, and live order tracking. Built with React and Spring Boot, SwiftMart focuses on speed, reliability, and user satisfaction for a seamless shopping experience.

---

## Overview

SwiftMart is a grocery delivery application leveraging modern technologies to provide essential features such as product browsing, cart management, order placement, payment processing, and delivery tracking. Its architecture ensures a modular and scalable system to handle user needs effectively.

---

## Features

### User Management
- User registration and login with JWT-based authentication.
- View and update user profiles.

### Product Management
- Browse products by category.
- View detailed product information.
- Admin functionality to add, update, and delete products.

### Cart Management
- Add products to the cart.
- Update product quantities in the cart.
- Remove products from the cart.

### Order Management
- Place orders directly from the cart.
- View order history.
- Track order status in real-time.

### Payment Processing
- Secure payment handling.
- Store payment details for orders.

### Delivery Tracking
- Track the status of your deliveries.
- Receive live updates on order progress.

---

## Technologies Used

### Frontend
- **React**
- **Axios** for API communication.
- **React Router** for navigation.
- **Redux** for state management.

### Backend
- **Spring Boot**
- **Spring Security** for authentication.
- **RESTful APIs** for frontend-backend communication.
- **Hibernate** for ORM.

### Database
- **PostgreSQL**
- Relational database for storing user, product, order, and payment data.

---

## System Architecture

SwiftMart follows a modularized architecture with separate services for better scalability and maintainability:

- **Authentication Service**: Handles user authentication and authorization.
- **User Service**: Manages user-related operations.
- **Product Service**: Handles product and category management.
- **Order Service**: Manages orders and order details.
- **Payment Service**: Processes payments securely.
- **Delivery Service**: Tracks and updates order delivery status.

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed for the frontend.
- Java 8 or higher installed for the backend.
- PostgreSQL installed and running.
- Git for version control.

### Steps

#### 1. Clone the Repository:
```bash
$ git clone https://github.com/your-username/swiftmart.git
$ cd swiftmart
```

#### 2. Setup Backend:
Navigate to the backend directory:
```bash
$ cd backend
```

Update the `application.properties` file with your PostgreSQL database credentials.

Build and run the Spring Boot application:
```bash
$ ./mvnw spring-boot:run
```

#### 3. Setup Frontend:
Navigate to the frontend directory:
```bash
$ cd frontend
```

Install dependencies:
```bash
$ npm install
```

Start the React application:
```bash
$ npm start
```

#### 4. Access the Application:
Open your browser and navigate to `http://localhost:3000`.

---

## API Endpoints

### Authentication
- **POST** `/api/auth/login`: User login.
- **POST** `/api/auth/validate`: Validate authentication token.

### User Management
- **POST** `/api/users/register`: Register a new user.
- **GET** `/api/users/{userId}`: Fetch user details.
- **PUT** `/api/users/{userId}`: Update user details.

### Product Management
- **GET** `/api/products`: Get all products.
- **GET** `/api/products/{productId}`: Get product details.
- **POST** `/api/products`: Add a new product (Admin only).
- **PUT** `/api/products/{productId}`: Update product details (Admin only).
- **DELETE** `/api/products/{productId}`: Delete a product (Admin only).

### Order Management
- **POST** `/api/orders`: Place a new order.
- **GET** `/api/orders/{orderId}`: Get details of a specific order.
- **GET** `/api/orders/user/{userId}`: Get orders for a user.
- **DELETE** `/api/orders/{orderId}`: Cancel an order.

### Payment
- **POST** `/api/payments`: Process a payment.
- **GET** `/api/payments/order/{orderId}`: Fetch payment details for an order.

### Delivery
- **POST** `/api/deliveries/assign`: Assign a delivery agent (Admin only).
- **PUT** `/api/deliveries/{deliveryId}`: Update delivery status.
- **GET** `/api/deliveries/order/{orderId}`: Track order delivery.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   $ git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   $ git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   $ git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

