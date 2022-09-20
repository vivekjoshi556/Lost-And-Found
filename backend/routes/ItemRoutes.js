const express = require("express");
const { ItemController } = require("../controllers/ItemController");
const router = express.Router();

router.route("/").get(ItemController.index);
router.route("/create").get(ItemController.create);
router.route("/create").post(ItemController.store);
router.route("/show/:id").get(ItemController.show);
router.route("/edit/:id").get(ItemController.edit);
router.route("/edit/:id").patch(ItemController.update);
router.route("/deleteItem/:id").delete(ItemController.destroy);

module.exports = router;