const express = require('express')
const app = express()
const port = 3000;

//BuiltIn Middleware
app.use(express.static("static"));  

app.get('/', (req, res) => {
  res.sendFile("index.html", {root : __dirname});
});

//Below block can be removed after using middleware function 
app.get('/script.js', (req, res) => {
  res.sendFile("script.js", {root : __dirname});
})

app.get('/products', (req, res) => {
  res.sendFile("index.html", {root : __dirname});
    let products = [
        { id: 1, title: "MacbookPro", Price : 2000},
        { id: 2, title: "MacbookAir", Price : 5000},
    ];
    //res.send('Hello World!')
    res.json(products);

});

//Its treated as //* i.e. all other requests
//Should be placed at last after all endpoints are mapped
app.use((req, res) => {
  res.status(400).send("Resource Not Found"); //Or can send html content
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});