import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import SSLCommerzPayment from 'sslcommerz-lts';


// const placeOrder = async (req, res) => {

//     try {

//         const { userId, items, amount, address } = req.body;

//         const orderData = {
//             userId,
//             items,
//             address,
//             amount,
//             paymentMethod: 'COD',
//             payment: false,
//             date: Date.now()
//         }
//         const newOrder = new orderModel(orderData);
//         await newOrder.save();

//         await userModel.findByIdAndUpdate(userId,{cartData: {}});

//         res.json({success: true, message: 'Order Placed' });
        
//     } catch (error) {
//         console.log(error);
//         res.json({success: false, message: error.message });

        
//     }

// }

// const placeOrder = async (req, res) => {
//   try {
//     const { userId, items, amount, address } = req.body;

//     // Removed console log statements to avoid printing sensitive information
//     if (!amount || amount <= 0 || isNaN(amount)) {
//       return res.json({ success: false, message: 'Invalid order amount' });
//     }

//     const orderData = {
//       userId,
//       items,
//       address,
//       amount,
//       paymentMethod: 'COD',
//       payment: false,
//       date: Date.now()
//     };

//     const newOrder = new orderModel(orderData);
//     await newOrder.save();

//     await userModel.findByIdAndUpdate(userId, { cartData: {} });

//     res.json({ success: true, message: 'Order Placed' });

//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };


const placeOrderBkash = async (req, res) => {
  
};




const allOrders = async (req, res) => {

  try {

    const orders = await orderModel.find({});
    res.json({ success: true, orders });
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
    
  }

}

const userOrders = async (req, res) => {

  try {

    const { userId } = req.body;

    const orders = await orderModel.find({ userId })

    res.json({ success: true, orders });

    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
    
  }

}

const updateStatus = async (req, res) => {

  try {

    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(orderId, {status})
    res.json({success: true, message: 'Status Updated'})
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
    
  }

}

// Initiate payment
// export const initiateSSLCommerzPayment = async (req, res) => {
//     const { amount, userId, items, address } = req.body;
//     const tran_id = 'SSLCZ_' + Date.now();

//     const data = {
//         total_amount: amount,
//         currency: 'BDT',
//         tran_id: tran_id,
//         success_url: `${process.env.BACKEND_URL}/api/order/sslcommerz/success?tran_id=${tran_id}&userId=${userId}`,
//         fail_url: `${process.env.BACKEND_URL}/api/order/sslcommerz/fail?tran_id=${tran_id}&userId=${userId}`,
//         cancel_url: `${process.env.BACKEND_URL}/api/order/sslcommerz/cancel`,
//         ipn_url: `${process.env.BACKEND_URL}/api/order/sslcommerz/ipn`,
//         shipping_method: 'Courier',
//         product_name: 'Ecommerce Order',
//         product_category: 'General',
//         product_profile: 'general',
//         cus_name: address.firstName + ' ' + address.lastName,
//         cus_email: address.email,
//         cus_add1: address.street,
//         cus_add2: '',
//         cus_city: address.city,
//         cus_state: address.state,
//         cus_postcode: address.zipcode,
//         cus_country: address.country,
//         cus_phone: address.phone,
//         multi_card_name: '',
//         value_a: JSON.stringify({ items, address }), // You can pass order info here
//     };

//     const sslcz = new SSLCommerzPayment(process.env.SSLCZ_STORE_ID, process.env.SSLCZ_STORE_PASS, false); // false for sandbox
//     sslcz.init(data).then(apiResponse => {
//         let GatewayPageURL = apiResponse.GatewayPageURL;
//         res.json({ url: GatewayPageURL });
//     }).catch(err => {
//         res.status(500).json({ error: 'SSLCommerz payment initiation failed', details: err.message });
//     });
// };

// // Success callback
// export const sslcommerzSuccess = async (req, res) => {
//     // Place order in DB, clear cart, etc.
//     // You can get order info from req.query.value_a (parse JSON)
//     // Redirect to frontend orders page
//     res.redirect(`${process.env.FRONTEND_URL}/orders`);
// };

// // Failure callback
// export const sslcommerzFail = async (req, res) => {
//     // Redirect to frontend cart page
//     res.redirect(`${process.env.FRONTEND_URL}/cart`);



// };



// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import SSLCommerzPayment from 'sslcommerz-lts';

const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        if (!amount || amount <= 0 || isNaN(amount)) {
            return res.json({ success: false, message: 'Invalid order amount' });
        }

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ success: true, message: 'Order Placed' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Initiate SSLCommerz payment
export const initiateSSLCommerzPayment = async (req, res) => {
    const { amount, userId, items, address } = req.body;
    const tran_id = 'SSLCZ_' + Date.now();

    const data = {
        total_amount: amount,
        currency: 'BDT',
        tran_id: tran_id,
        success_url: `${process.env.BACKEND_URL}/api/order/sslcommerz/success?tran_id=${tran_id}&userId=${userId}`,
        fail_url: `${process.env.BACKEND_URL}/api/order/sslcommerz/fail?tran_id=${tran_id}&userId=${userId}`,
        cancel_url: `${process.env.BACKEND_URL}/api/order/sslcommerz/cancel`,
        ipn_url: `${process.env.BACKEND_URL}/api/order/sslcommerz/ipn`,
        shipping_method: 'Courier',
        product_name: 'Ecommerce Order',
        product_category: 'General',
        product_profile: 'general',
        cus_name: address.firstName + ' ' + address.lastName,
        cus_email: address.email,
        cus_add1: address.street,
        cus_add2: '',
        cus_city: address.city,
        cus_state: address.state,
        cus_postcode: address.zipcode,
        cus_country: address.country,
        cus_phone: address.phone,
        value_a: JSON.stringify({ items, address }), 
    };

    const sslcz = new SSLCommerzPayment(process.env.SSLCZ_STORE_ID, process.env.SSLCZ_STORE_PASS, false); 
    sslcz.init(data).then(apiResponse => {
        let GatewayPageURL = apiResponse.GatewayPageURL;
        res.json({ url: GatewayPageURL });
    }).catch(err => {
        res.status(500).json({ error: 'SSLCommerz payment initiation failed', details: err.message });
    });
};

// Success callback
export const sslcommerzSuccess = async (req, res) => {
    res.redirect(`${process.env.FRONTEND_URL}/orders`);
};

// Failure callback
export const sslcommerzFail = async (req, res) => {
    res.redirect(`${process.env.FRONTEND_URL}/cart`);
};

// You can also handle IPN and update order status here


export { placeOrder, placeOrderBkash, allOrders, userOrders, updateStatus };
