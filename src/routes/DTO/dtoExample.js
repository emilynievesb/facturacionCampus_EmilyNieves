import { body } from "express-validator";
const SingUpCheck = () => {
  return [
    body("email")
      .trim()
      .not()
      .isEmpty()
      .withMessage("this field is required")
      .isEmail()
      .withMessage("please enter a valid email address"),
    body("firstName")
      .trim()
      .not()
      .isEmpty()
      .isString()
      .withMessage("please enter only letters")
      .isLength({ min: 3, max: 5 }),
    body("lastName")
      .trim()
      .not()
      .isEmpty()
      .isLength({ min: 3, max: 5 })
      .isString()
      .withMessage("please enter only characters"),
    body("phoneNumber")
      .trim()
      .isInt()
      .withMessage("please enter numbers")
      .isLength({ min: 7, max: 15 })
      .withMessage(
        "phoneNumber can not be less than 7 and must be more than 15"
      ),
    body("subscribed")
      .isBoolean()
      .withMessage("please enter a true or false value"),
    body("occupation")
      .trim()
      .isIn(["employed", "self-employed", "enterpreneur"])
      .withMessage("you must have something doing"),
  ];
};
export { SingUpCheck };
apiRouter.post("/register", signUpCheck(), (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.json({ errors: errors.array() });
  }
});
