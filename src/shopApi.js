import axios from "axios";
import { getNextOrderNumber } from "./utils/order";

const client = axios.create({
  baseURL: "http://localhost:8081/"
});

const getProducts = async () => client.get("/products");

const createOrder = async (products = []) => {
  return Promise.resolve({ data: { orderNumber: getNextOrderNumber() } });
};

const changeDeliveryAddress = async (orderNumber, address) => Promise.resolve();

const changeDeliveryMethod = async (orderNumber, deliveryMethod) =>
  Promise.resolve();

const submitOrder = async orderNumber => Promise.resolve();

export default {
  getProducts,
  createOrder,
  changeDeliveryAddress,
  changeDeliveryMethod,
  submitOrder
};
