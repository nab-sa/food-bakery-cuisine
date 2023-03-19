const Course = require('../models/courseModel');
const express = require('express');

const addCourse = async (req, res) => {
    try {
        const newCourse = await new Course(req.body);
        newCourse.save();
        res.send({message: 'Course added !'})
    } catch (error) {
        console.error(error);
    }
}

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({})
        res.send(courses)
    } catch (error) {
        console.error(error);
    }
}

const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById({_id: req.params.id})
        res.send(course)
    } catch (error) {
        console.error(error);
    }
}

const editCourse = async (req, res) => {
    try {
        const editedCourse = await Course.findByIdAndUpdate({_id: req.params.id}, req.body)
        res.send(editedCourse)
    } catch (error) {
        console.error(error);
    }
}

const deleteCourse = async (req, res) => {
    try {
        const deletedCourse = await Course.findOneAndRemove({_id: req.params.id})
        res.send({message: `${deletedCourse.title} deleted`})
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    addCourse,
    getAllCourses,
    getCourseById,
    editCourse,
    deleteCourse
}