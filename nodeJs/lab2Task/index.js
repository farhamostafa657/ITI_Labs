import { rejects } from "assert";
import { createServer } from "http";
import { resolve } from "path";

let users = [
  { id: 1, name: "cuser 1", email: "email 1", age: 24 },
  { id: 2, name: "buser 2", email: "email 2", age: 22 },
  { id: 3, name: "auser 3", email: "email 3", age: 23 },
];

const senRes = (res, status, data) => {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
};

const parseReqBody = async (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
  });
};

const server = createServer(async (req, res) => {
  const { method, url } = req;
  if (method == "GET" && url == "/users") {
    console.log(req);
    senRes(res, 200, users);
  } else if (method == "POST" && url == "/users") {
    let newUser = await parseReqBody(req);
    console.log(newUser);
    if (!newUser.name || !newUser.email || !newUser.age) {
      senRes(res, 400, "Invalid User Data");
    }
    newUser.id = users[users.length - 1].id + 1 || 1;
    users.push(newUser);
    senRes(res, 200, users);
  } else if (method == "GET" && url == "/v2/users") {
    const sortedUsers = [...users].sort((a, b) => {
      a.name.localeCompare(b.name);
    });
    senRes(res, 200, sortedUsers);
  } else if (method == "DELETE" && url.startsWith("/users/")) {
    let id = parseInt(url.split("/")[2]);
    users = users.filter((ele) => ele.id != id);
    return senRes(res, 200, users);
  } else if (method == "PUT" && url.startsWith("/users/")) {
    let id = parseInt(url.split("/")[2]);
    console.log(id);
    if (isNaN(id)) {
      return senRes(res, 400, { message: "Invalid user ID" });
    }

    try {
      let body = await parseReqBody(req);
      console.log(body);
      const userIndex = users.findIndex((user) => user.id == id);
      if (userIndex === -1) {
        senRes(res, 400, "user not found");
      }

      users[userIndex] = { ...users[userIndex], ...body };
      return senRes(res, 200, users);
    } catch (err) {
      return senRes(res, 400, { message: "Invalid request body" });
    }
  } else if (method == "GET" && url.startsWith("/users/")) {
    let id = parseInt(url.split("/")[2]);
    console.log(id);
    if (isNaN(id)) {
      return senRes(res, 400, { message: "Invalid user ID" });
    }
    const userFound = users.find((user) => user.id == id);
    if (!userFound) {
      return senRes(res, 404, { message: "User not found" });
    }

    return senRes(res, 200, userFound);
  }

  //   senRes(res, 404, { message: "Route not found" });
});

server.listen(8888, () => {
  console.log("server is running");
});
