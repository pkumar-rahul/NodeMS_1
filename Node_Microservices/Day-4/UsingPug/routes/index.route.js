const router = require("express").Router();

router.get("/", (req, res) => {
    //res.send("Using pug");
    res.render("index", {title : "Using Pug !!!"});
});

module.exports = router;