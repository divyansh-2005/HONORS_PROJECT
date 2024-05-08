const express = require("express");
const { getNote, createNote, deleteNote, updateNote, getAllNotes } = require("../controllers/noteController");
const auth = require("../middlewares/auth");
const noteRouter = express.Router();

noteRouter.get("/",auth,getNote)

noteRouter.post("/",auth,createNote)

noteRouter.delete("/:id",auth,deleteNote)

noteRouter.put("/:id",auth,updateNote)

// Route for getting all notes (no authentication required)
noteRouter.get("/all",getAllNotes);

module.exports = noteRouter;