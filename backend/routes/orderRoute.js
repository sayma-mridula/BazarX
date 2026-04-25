import express from 'express';
import { allOrders, placeOrder, placeOrderBkash, updateStatus, userOrders, initiateSSLCommerzPayment, sslcommerzSuccess, sslcommerzFail } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';



const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/bkash',authUser,placeOrderBkash)
// orderRouter.post('/bkash-create', authUser, createBkashPaymentSession)
orderRouter.post('/sslcommerz/initiate', authUser, initiateSSLCommerzPayment)

// User Features
orderRouter.post('/userOrders',authUser,userOrders)
orderRouter.get('/sslcommerz/success', sslcommerzSuccess)
orderRouter.get('/sslcommerz/fail', sslcommerzFail)

export default orderRouter;