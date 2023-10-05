const express = require("express");
const router = express.Router();
const { getAllUserNotes, createNote, getNote, updateNote, deleteNote } = require("../Controllers/NoteController");
const { userVerification } = require('../Middlewares/AuthMiddleware')

// CRUD Operations

// Get notes by providing userId
router.route('/:userId').get(userVerification, getAllUserNotes);

// Create note
router.route('/create/:userId').post(createNote);

// Get note
router.route('/getnote/:noteId').get(getNote);

// Update note 
router.route('/update/:noteId').put(updateNote);

// Delete note
router.route('/delete/:noteId').delete(deleteNote);

module.exports = router;