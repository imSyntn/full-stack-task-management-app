# Food Delivery App

---

## Features

- User Authentication:
  - Secure login and signup using **JWT**.
- Browse Food Items:
  - Dynamic display of food items with categories.
- Add to Cart:
  - Easily manage items in the cart with real-time updates.
- Order Placement:
  - Seamless order creation with backend integration.
- Responsive UI:
  - Fully responsive design for all screen sizes.

---

## Tech Stack

### Frontend

- **React**: Component-based UI framework for a dynamic user interface.
- **Redux Toolkit**: For state management and handling global states like cart and user authentication.

### Backend

- **Node.js**: JavaScript runtime for building a scalable backend.
- **Express**: Lightweight framework for handling REST APIs and routing.
- **JWT (JSON Web Tokens)**: For secure user authentication and session management.

---

## Installation and Setup

### Prerequisites

- **Node.js** installed on your machine.
- **npm** or **yarn** as the package manager.

### Steps to Run the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/food-delivery-app.git
   cd food-delivery-app
   ```
2. Install dependencies for both frontend and backend:

- ```bash
  cd Frontend
  npm install
  ```
- ```bash
  cd Backend
  npm install
  ```

3. Configure environment variables:

- Create a .env file in the backend folder and include:
```bash
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret

```

- Create a .env file in the Frontend folder and include:

```bash
  BACKEND_URI=your_backend_link

```

4. Start the application:
   ```bash
   npm run dev
   ```
