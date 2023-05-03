const express = require("express");
const axios = require("axios").default;
const app = express();
const { randomBytes } = require("crypto");

const commentsByPostId = {};

app.use(express.json());

// get all Comments
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// add new comment
app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  // storing comments
  commentsByPostId[req.params.id] = comments;

  // notify the event bus
  await axios
    .post("http://eventbus-srv-cl-ip:4005/events", {
      type: "CommentCreated",
      data: {commentId, content, postId: req.params.id}
    })
    .catch(err => console.log(err));

  res.status(201).send(comments);
});


app.post("/events", (req, res) => {
  console.log("Received Event : ", req.body.type);
  res.send({});
});
app.listen(4001, () => {
  console.log("Comments service running at 4001 !");
});
