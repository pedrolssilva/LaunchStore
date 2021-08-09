const express = require("express");
const routes = express.Router();

const OrderController = require("../app/controllers/OrderController");

const { onlyUsers } = require("../app/middlewares/session");

routes.post("/", onlyUsers, OrderController.post);
routes.get("/", onlyUsers, OrderController.index);
routes.get("/sales", onlyUsers, OrderController.sales);
routes.get("/:id", onlyUsers, OrderController.show);
routes.post("/:id/:action", onlyUsers, OrderController.update);

module.exports = routes;
