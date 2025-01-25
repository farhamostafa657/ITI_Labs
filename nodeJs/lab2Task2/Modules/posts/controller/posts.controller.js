let posts = [
  {
    id: 1,
    title: "My First Post",
    content: "This is the content of my first post.",
    author: "Farha",
    date: "2025-01-25",
  },
  {
    id: 2,
    title: "Learning JavaScript",
    content: "JavaScript is fun and versatile!",
    author: "Farha",
    date: "2025-01-24",
  },
  {
    id: 3,
    title: "React Basics",
    content: "React helps you build UI components efficiently.",
    author: "Farha",
    date: "2025-01-23",
  },
];

const getPosts = (req, res) => {
  //   console.log("test");
  res.status(200).json(posts);
};

const addPost = (req, res) => {
  //   console.log(req.body);
  req.body.id = posts[posts.length - 1].id + 1 || 1;
  posts.push(req.body);
  res.status(200).json(req.body);
};

const deletePost = (req, res) => {
  //   console.log(req.params);
  posts = posts.filter((ele) => ele.id != req.params.id);
  res.status(200).json(posts);
};

const reversPost = (req, res) => {
  const reversePosts = [...posts].reverse();
  res.status(200).json(reversePosts);
};

const updatePost = (req, res) => {
  // let foundedPost = posts.find((ele) => ele.id == parseInt(req.params.id));
  // if (!foundedPost) {
  //   res.status(404).json("not founded post");
  // }
  // posts[parseInt(req.params.id)] = { ...foundedPost, ...req.body };
  // console.log(req.body);
  // res.status(200).json("updated");
  const postID = parseInt(req.params.id);
  const postIndex = posts.findIndex((ele) => ele.id == postID);
  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const updatePost = { ...posts[postIndex], ...req.body };
  posts[postIndex] = updatePost;
  // console.log("Updated Post:", updatePost);
  res.status(200).json(updatePost);
};

const searchPost = (req, res) => {
  let postId = parseInt(req.params.id);
  let foundedPost = posts.find((ele) => ele.id == postId);
  if (!foundedPost) {
    return res.status(404).json("post not founded");
  }
  return res.status(200).json(foundedPost);
};

export { getPosts, addPost, deletePost, reversPost, updatePost, searchPost };
