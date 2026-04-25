# 🛒 BazarX

A full-stack e-commerce web application built with the **MERN Stack** (MongoDB, Express.js, React, Node.js). This project includes a customer-facing storefront, an admin dashboard for managing products and orders, and a robust backend API with multiple payment gateway integrations.



## ✨ Features

### 🛍️ Customer Storefront (Frontend)
- **Home Page** with Hero banner, Latest Collections, Best Sellers, and Newsletter subscription
- **Product Collection** page with search, filter, and sort functionality
- **Product Detail** page with related product recommendations
- **Shopping Cart** with quantity management and cart total calculation
- **Order Placement** with delivery information form
- **Order Tracking** to view order history and status
- **User Authentication** (Login / Register)
- **Responsive Design** optimized for all screen sizes

### 🔧 Admin Dashboard
- **Admin Login** with secure token-based authentication
- **Add Products** with image upload (up to 4 images), category, subcategory, sizes, and pricing
- **Product List** management (view and remove products)
- **Order Management** with status updates (Order Placed → Shipped → Delivered, etc.)

### ⚙️ Backend API
- RESTful API architecture with Express.js
- MongoDB database with Mongoose ODM
- JWT-based authentication for users and admin
- Cloudinary integration for image upload and storage
- Cart management API
- Multiple payment gateway support

---

## 🛠️ Tech Stack

| Layer        | Technology                                                    |
|--------------|---------------------------------------------------------------|
| **Frontend** | React 19, Vite, TailwindCSS, React Router v7, Axios          |
| **Admin**    | React 19, Vite, TailwindCSS, React Router v7, Axios          |
| **Backend**  | Node.js, Express 5, Mongoose, JWT, Bcrypt, Multer, Cloudinary |
| **Database** | MongoDB                                                       |
| **Payments** | SSLCommerz, bKash, Stripe, Razorpay                           |
| **Hosting**  | Cloudinary (Images)                                           |

---

## 📁 Project Structure

```
Ecommerce_Website/
├── frontend/                  # Customer-facing React app
│   ├── src/
│   │   ├── assets/            # Static assets (images, icons)
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── BestSeller.jsx
│   │   │   ├── LatestCollection.jsx
│   │   │   ├── ProductItem.jsx
│   │   │   ├── RelatedProducts.jsx
│   │   │   ├── CartTotal.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── NewsLetterBox.jsx
│   │   │   ├── OurPolicy.jsx
│   │   │   └── Title.jsx
│   │   ├── context/           # React Context (global state)
│   │   ├── pages/             # Page-level components
│   │   │   ├── Home.jsx
│   │   │   ├── Collection.jsx
│   │   │   ├── Product.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── PlaceOrder.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── admin/                     # Admin dashboard React app
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Login.jsx
│   │   ├── pages/
│   │   │   ├── Add.jsx        # Add new product
│   │   │   ├── List.jsx       # Product listing
│   │   │   └── Orders.jsx     # Order management
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/                   # Express.js REST API
│   ├── config/
│   │   ├── mongodb.js         # MongoDB connection
│   │   └── cloudinary.js      # Cloudinary configuration
│   ├── controllers/
│   │   ├── userController.js  # Auth (login, register)
│   │   ├── productController.js
│   │   ├── cartControllers.js
│   │   └── orderController.js # Orders + payment gateways
│   ├── middleware/
│   │   ├── auth.js            # User JWT middleware
│   │   ├── adminAuth.js       # Admin JWT middleware
│   │   └── multer.js          # File upload config
│   ├── models/
│   │   ├── userModel.js
│   │   ├── productModel.js
│   │   └── orderModel.js
│   ├── routes/
│   │   ├── userRoute.js
│   │   ├── productRoute.js
│   │   ├── cartRoute.js
│   │   └── orderRoute.js
│   ├── server.js              # App entry point
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher) — [Download](https://nodejs.org/)
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **Cloudinary Account** — [Sign up](https://cloudinary.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Ecommerce_Website.git
   cd Ecommerce_Website
   ```

2. **Install dependencies for all three apps**
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install

   # Admin
   cd ../admin
   npm install
   ```

### Environment Variables

Create a `.env` file in each directory with the required variables:

#### `backend/.env`
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
SSLCZ_STORE_ID=your_sslcommerz_store_id
SSLCZ_STORE_PASS=your_sslcommerz_store_password
BACKEND_URL=http://localhost:4000
FRONTEND_URL=http://localhost:5173
```

#### `frontend/.env`
```env
VITE_BACKEND_URL=http://localhost:4000
```

#### `admin/.env`
```env
VITE_BACKEND_URL=http://localhost:4000
```

### Running the App

Open **three separate terminals** and run each app:

```bash
# Terminal 1 — Backend (port 4000)
cd backend
npm run server

# Terminal 2 — Frontend (port 5173)
cd frontend
npm run dev

# Terminal 3 — Admin (port 5174)
cd admin
npm run dev
```

| App        | URL                        |
|------------|----------------------------|
| Frontend   | http://localhost:5173       |
| Admin      | http://localhost:5174       |
| Backend    | http://localhost:4000       |

---

## 📡 API Endpoints

### User Routes — `/api/user`
| Method | Endpoint    | Description         | Auth     |
|--------|-------------|---------------------|----------|
| POST   | `/register` | Register a new user | Public   |
| POST   | `/login`    | Login user          | Public   |

### Product Routes — `/api/product`
| Method | Endpoint  | Description        | Auth  |
|--------|-----------|--------------------|-------|
| POST   | `/add`    | Add a new product  | Admin |
| POST   | `/remove` | Remove a product   | Admin |
| GET    | `/list`   | Get all products   | Public|
| POST   | `/single` | Get single product | Public|

### Cart Routes — `/api/cart`
| Method | Endpoint  | Description       | Auth |
|--------|-----------|-------------------|------|
| POST   | `/add`    | Add to cart       | User |
| POST   | `/update` | Update cart       | User |
| POST   | `/get`    | Get user cart     | User |

### Order Routes — `/api/order`
| Method | Endpoint     | Description          | Auth  |
|--------|--------------|----------------------|-------|
| POST   | `/place`     | Place order (COD)    | User  |
| POST   | `/userorders`| Get user's orders    | User  |
| POST   | `/list`      | Get all orders       | Admin |
| POST   | `/status`    | Update order status  | Admin |

---

## 💳 Payment Integrations

| Gateway      | Status         | Currency |
|--------------|----------------|----------|
| **COD**      | ✅ Active      | BDT (৳)  |
| **SSLCommerz** | ✅ Integrated | BDT (৳)  |
| **bKash**    | 🔧 In Progress | BDT (৳)  |
| **Stripe**   | 📦 Available   | Multi    |
| **Razorpay** | 📦 Available   | INR      |

---

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

