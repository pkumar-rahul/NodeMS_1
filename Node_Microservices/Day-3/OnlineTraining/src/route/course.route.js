const express = require("express");
const router = express.Router();
let courses = require("../models/course.model");

//let courses = [
//    { id: 1, title: "NodeJS", rating: "3", price : 2000, imageUrl:""},
//    { id: 2, title: "Microservices", rating: "4", price : 5000, imageUrl:""},
//];

    router.get("/", (req, res) => {
        res.json(courses);
    });

    router.post("/newcourse", (req, res) => {
        // console.log(req.body);
        // console.log("Add new course here..");
        let newCourse = req.body;
        courses.push(newCourse);
        res.json({ msg: "success" });
    });

    router.delete("/:id", (req, res) => {
        let deleteId = req.params.id;
        console.log("Deleting course : " + deleteId);
        courses = courses.filter(course => course.id != deleteId);
        res.json({ msg: "success" });
    });

module.exports = router;