const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

// @route  Post api/users
// @desc   Register user
// @access Public
router.post(
  "/",
  [
    check("name", "Enter valid name").not().isEmpty(),
    check("email", "Enter valid email adress").isEmail(),
    check("password", "Password lenght must be 6 or more").isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("user route");
  }
);

module.exports = router;
