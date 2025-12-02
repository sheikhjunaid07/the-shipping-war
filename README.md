# 🚚 Shipping War  

Shipping War is a **MERN Stack (MongoDB, Express, React, Node.js)** web application inspired by the concept of competitive shipment bidding.  
It allows **drivers (truckers)** to bid on shipments, track delivery progress, and manage logistics — while admins can manage shipments and assign drivers.  

---

## 📌 Features  

### 🔹 Shipment Management  
- Create, update, and delete shipments (admin only).  
- View shipment details including item info, pickup & delivery locations, size, and deadlines.  
- Track shipment status: **Pending → Picked Up → In Transit → Delivered**.  

### 🔹 Bidding System  
- Drivers can place bids on available shipments.  
- Admins can accept/reject bids and assign shipments.  
- Real-time bid updates with WebSockets (optional).  

### 🔹 Driver Dashboard  
- View assigned shipments.  
- Track past bids and earnings.  
- Manage delivery progress.  

### 🔹 Authentication & Authorization  
- Secure **login/signup** for drivers and admins.  
- Role-based access: **Driver vs Admin**.  

### 🔹 Search & Filters  
- Search shipments by location, type, and size.  
- Filter shipments by status.  

---

## 🏗 Tech Stack  

### Frontend  
- **React.js** – UI Components  
- **Axios** – API requests  
- **React Router** – Routing   

### Backend  
- **Node.js** & **Express.js** – REST API  
- **JWT Authentication** – Secure login system  

### Database  
- **MongoDB** – Data storage for shipments, bids, and users  

### Extras  
- **Socket.IO (optional)** – Real-time updates  
- **Mongoose** – ODM for MongoDB  

---
🧪 Testing

API endpoints tested with Postman.

UI tested with manual interactions.

Automated testing (Jest/Mocha) – optional.

👨‍💻 Roles in Development

Backend Developer: Models, APIs, Authentication.

Frontend Developer: UI, Pages, API integration.

DBA: MongoDB schema, optimization, indexing.

QA Tester: Test cases, bug fixing, workflow validation.

📌 Roadmap

 Shipment CRUD APIs

 Driver authentication

 Bidding system

 Real-time updates (Socket.IO)

 Notifications system

 Admin analytics dashboard

📜 License

This project is licensed under the MIT License.

🤝 Contributing

Contributions are welcome! Please fork this repo and submit a pull request.
