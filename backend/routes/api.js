const express = require("express");
const multer = require("multer");
const { handleUpload } = require("../controllers/uploadController");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  "/upload",
  upload.fields([{ name: "current" }, { name: "past" }]),
  handleUpload
);

module.exports = router;
