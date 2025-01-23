import { Router } from "express";
import {
  addItem,
  deleteItem,
  getItems,
  updateItem,
} from "./items.controller.js";

const itemsRoutes = Router();

itemsRoutes.get("/items", getItems);

itemsRoutes.post("/items", addItem);

itemsRoutes.put("/items/:id", updateItem);

itemsRoutes.delete("/items/:id", deleteItem);

export default itemsRoutes;
