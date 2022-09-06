const express = require('express');
const studentController = require('../controllers/student.controller');


const router = express.Router();
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudent);
router.post('/', studentController.createStudent);
router.delete('/:id', studentController.removeStudent);
router.patch('/:id', studentController.updateStudent);
module.exports = router;