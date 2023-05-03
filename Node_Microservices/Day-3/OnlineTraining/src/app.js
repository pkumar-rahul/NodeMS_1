const express = require("express");
const path = require("path");
const courseRoute = require("./route/course.route");
const app = express();
const port = 3000;

app.use(express.static("public"));  //BuiltIn Middleware
app.use(express.json());// to read the payload coming from client & populate the req.body
app.use("/courses", courseRoute);

app.get('/', (req, res) => {
    res.sendFile("course.html", {root : __dirname});
});

app.use((req, res) => {
    res.status(400).send("Resource Not Found"); //Or can send html content
});
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});