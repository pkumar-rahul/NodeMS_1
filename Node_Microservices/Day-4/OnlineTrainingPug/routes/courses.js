const express = require("express");
var courses = require("../../OnlineTrainingPug/model/course.model");
const fs = require("fs");
let router = express.Router();

router.route("/").get((req, res) => {
  res.render("courses", { listofcourses: courses, title: "List Of Courses" });
});

router.route("/coursedetails/:cid").get((req, res) => {
  res.render("coursedetails", {
    title: "Course details page",
  });
});

module.exports = router;
