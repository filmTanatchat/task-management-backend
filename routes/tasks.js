const express = require('express');
const router = express.Router();
const { verifyToken, isOwnerOrAdmin } = require('../middleware/auth');
const { createTask, getTasks, getTask, updateTask, deleteTask } = require('../controllers/taskController');
const Task = require('../models/task');

router.post('/', verifyToken, createTask);
router.get('/', verifyToken, getTasks);
router.get('/:id', verifyToken, getTask);
router.put('/:id', verifyToken, isOwnerOrAdmin(Task), updateTask);
router.delete('/:id', verifyToken, isOwnerOrAdmin(Task), deleteTask);

module.exports = router;