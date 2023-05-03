const express = require('express')
const app = express()
const path = require("path");
const port = 3000

//view engine set up
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const indexRouter = require("./routes/index.route");
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})