const express = require("express");
const router = express.Router();

let products = [
    { id: 1, title: "MacbookPro", Price : 2000},
    { id: 2, title: "MacbookAir", Price : 5000},
];

router.get("/", (req, res) => {
    res.json(products);
});

router.get("/details/:id", (req, res) => {
    let productId = +req.params.id;
    let product = products.find( p => p.id == productId);
    res.json(product);
});

module.exports = router;
