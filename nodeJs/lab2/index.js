//crud built-in (core) module http
//create
// delete
// read
// update

//exprese...third party...npm i ...built crud

//for pure http
// import { createServer } from "node:http";

// // const server = http.createServer()

// let items = [
//   { id: 1, name: "item 1", description: "description 1" },
//   { id: 2, name: "item 2", description: "description 2" },
// ];

// const sendRes = (res, status, data) => {
//   res.writeHead(status, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(data));
// };

// const server = createServer((req, res) => {
//   const { method, url } = req;
//   if (method == "GET" && url == "/items") {
//     // console.log(res);
//     sendRes(res, 200, items);
//   } else if (method == "POST" && url == "/items") {
//     // console.log(req);
//     req.on("data", (chunk) => {
//       // console.log(chunk); //buffer data data when come from api came as chuncks
//       // console.log(chunk.toString());
//       // console.log(JSON.parse(chunk));
//       let newItem = JSON.parse(chunk);
//       newItem.id = items[items.length - 1].id + 1 || 1;
//       items.push(newItem);
//       sendRes(res, 201, items);
//     });
//     console.log("hay");
//   } else if (method == "PUT" && url.startsWith("/items/")) {
//     // console.log(url.split("/")[2]);
//     let id = parseInt(url.split("/")[2]);
//     // console.log(id);
//     let foundedItems = items.find((ele) => ele.id === id);
//     // console.log(foundedItems);
//     // if (!foundedItems) {
//     //   res.end("NOT FOUNDED");
//     // }
//     // req.on("data", (chunk) => {
//     //   // console.log(JSON.parse(chunk));
//     //   let updatedDate = JSON.parse(chunk);
//     //   foundedItems.name = updatedDate.name;
//     //   // console.log(foundedItems);
//     //   sendRes(res, 200, items);
//     // });
//     let body;
//     req.on("data", (chunk) => {
//       body += JSON.parse(chunk);
//     });

//     req.on("end", () => {
//       foundedItems.name = updatedDate.name;
//       sendRes(res, 200, items);
//     });
//   } else if (method == "DELETE" && url.startsWith("/items/")) {
//     // console.log(url.split("/")[2]);
//     let id = parseInt(url.split("/")[2]);
//     // console.log(id);
//     items = items.filter((ele) => ele.id != id);
//     // console.log(items);
//     sendRes(res, 200, items);
//   }

//   // sendRes(res, 400, items);
// });

// server.listen(8888, () => {
//   console.log("server is running");
// });

// using expree
import express from "express";
import cors from "cors";
import itemsRoutes from "./Modules/items/controller/items.routes.js";
// import {
//   addItem,
//   getItems,
//   updateItem,
//   deleteItem,
// } from "./Modules/items/controller/items.controller.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(itemsRoutes);

let items = [
  { id: 1, name: "item 1", description: "description 1" },
  { id: 2, name: "item 2", description: "description 2" },
];

app.listen(8888, () => {
  console.log("server is runnig");
});

//mvc
