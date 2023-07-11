const express = require("express");
const router = express.Router();

const {
  read,
  list,
  create,
  update,
  remove,
} = require("../Controllers/product");
//middleware
const { auth } = require("../Middleware/auth");
const { upload } = require("../Middleware/upload");

router.get("/product",  list);
router.get("/product/:id",  read);
router.post("/product",  upload, create);
router.put("/product/:id",upload,  update);
router.delete("/product/:id", remove);

module.exports = router;
