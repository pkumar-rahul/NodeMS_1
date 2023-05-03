const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const posts = {};

//  Endpoint for client to communicate
app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type == "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  } else if (type == "CommentCreated") {
    const { id, content, postId } = data;
    const post = posts[id];
    post.comments.push({ id, content });
  }
  console.log("Query : " , posts);
  res.send({});
});

app.listen(4002, () => {
  console.log("Query Service running at port 4002 !");
});
