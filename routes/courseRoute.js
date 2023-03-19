const courseRoute = require('express').Router()
const courseController = require("../controllers/courseController");

courseRoute.post("/create", courseController.addCourse)
courseRoute.get("/all", courseController.getAllCourses)
courseRoute.get("/:id", courseController.getCourseById)
courseRoute.post("/edit/:id", courseController.editCourse)
courseRoute.delete("/delete/:id", courseController.deleteCourse)

module.exports = courseRoute;