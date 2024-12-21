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
1. UserService
Handles user-related operations.
Methods:
registerUser(UserDTO userDto) – Registers a new user.
login(String email, String password) – Authenticates user and issues a token.
getUserProfile(Long userId) – Fetches user profile details.
updateUserProfile(Long userId, UserDTO userDto) – Updates user details.
Endpoints:
HTTP Method
Endpoint
Description
POST
/api/users/register
Register a new user.
POST
/api/users/login
Log in and get a token.
GET
/api/users/{userId}
Fetch user profile.
PUT
/api/users/{userId}
Update user profile.


2. ProductService
Manages products and categories.
Methods:
getAllProducts() – Returns a list of all products.
getProductById(Long productId) – Fetches product details.
addProduct(ProductDTO productDto) – Adds a new product (Admin only).
updateProduct(Long productId, ProductDTO productDto) – Updates product details (Admin only).
deleteProduct(Long productId) – Deletes a product (Admin only).
Endpoints:
HTTP Method
Endpoint
Description
GET
/api/products
Get all products.
GET
/api/products/{productId}
Get details of a specific product.
POST
/api/products
Add a new product (Admin only).
PUT
/api/products/{productId}
Update product details (Admin).
DELETE
/api/products/{productId}
Delete a product (Admin only).


3. CategoryService
Handles product categories.
Methods:
getAllCategories() – Fetches all categories.
addCategory(CategoryDTO categoryDto) – Adds a new category (Admin only).
updateCategory(Long categoryId, CategoryDTO categoryDto) – Updates category (Admin only).
deleteCategory(Long categoryId) – Deletes a category (Admin only).
Endpoints:
HTTP Method
Endpoint
Description
GET
/api/categories
Get all categories.
POST
/api/categories
Add a new category (Admin only).
PUT
/api/categories/{categoryId}
Update a category (Admin only).
DELETE
/api/categories/{categoryId}
Delete a category (Admin only).


4. OrderService
Handles customer orders and their details.
Methods:
placeOrder(OrderDTO orderDto) – Places a new order.
getOrderById(Long orderId) – Fetches order details.
getOrdersByUserId(Long userId) – Fetches all orders for a user.
cancelOrder(Long orderId) – Cancels an order.
Endpoints:
HTTP Method
Endpoint
Description
POST
/api/orders
Place a new order.
GET
/api/orders/{orderId}
Get details of a specific order.
GET
/api/orders/user/{userId}
Get all orders for a user.
DELETE
/api/orders/{orderId}
Cancel an order.


5. DeliveryService
Handles delivery tracking and assignment.
Methods:
assignDelivery(Long orderId, Long deliveryPersonId) – Assigns a delivery person to an order.
updateDeliveryStatus(Long deliveryId, DeliveryStatus status) – Updates the delivery status.
getDeliveryByOrderId(Long orderId) – Fetches delivery details for an order.
Endpoints:
HTTP Method
Endpoint
Description
POST
/api/deliveries/assign
Assign delivery to a person (Admin).
PUT
/api/deliveries/{deliveryId}
Update delivery status.
GET
/api/deliveries/order/{orderId}
Get delivery details for an order.


6. PaymentService
Handles payments and transactions.
Methods:
processPayment(PaymentDTO paymentDto) – Processes a payment for an order.
getPaymentByOrderId(Long orderId) – Fetches payment details for an order.
Endpoints:
HTTP Method
Endpoint
Description
POST
/api/payments
Process a payment.
GET
/api/payments/order/{orderId}
Get payment details for an order.


7. AuthenticationService
Handles authentication and token management.
Methods:
authenticate(String email, String password) – Authenticates user and generates JWT token.
validateToken(String token) – Validates the token for secured endpoints.
Endpoints:
HTTP Method
Endpoint
Description
POST
/api/auth/login
Login and get a JWT token.
POST
/api/auth/validate
Validate a JWT token.



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

