import express from "express";
import postsRoute from "./Modules/posts/posts.routes.js";

const app = express();
// app.use(cors());
app.use(express.json());

app.use(postsRoute);

app.listen(8888, () => {
  console.log("server is runnig");
});
