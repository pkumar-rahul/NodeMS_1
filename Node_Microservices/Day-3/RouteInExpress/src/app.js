const express = require('express');
const app = express();
const port = 3000;

const productRoute = require("./routes/products.route");

app.get('/', (req, res) => {
    res.sendFile("index.html", {root : __dirname});
  });

app.use("/products", productRoute);

app.use((req, res) => {
    res.status(400).send("Resource Not Found"); //Or can send html content
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });