const { Schema, model } = require('mongoose');

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

module.exports = { OrdersSchema };