const express = require('express');
const teacherService = require('../controllers/teacher.controller');

const router = express.Router();

router.get('/', teacherService.getAllTeacher);
router.get('/:id', teacherService.getTeacher);
router.post('/', teacherService.createTeacher);
router.delete(':id', teacherService.removeTeacher);
router.patch('/:id', teacherService.updateTeacher);

module.exports = router;
