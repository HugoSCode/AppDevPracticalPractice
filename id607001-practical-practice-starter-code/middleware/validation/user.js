import Joi from 'joi';

const validatePostUser = (req, res, next) => {
  // Write your schema solution here
 const userSchema= Joi.object({
  firstName: Joi.string()
  .messages({
    "string.empty": "firstName is required"
  }),
  lastName: Joi.string()
  .messages({
  "string.empty": "lastName is required"
  }),
  email: Joi.string()
  .email()
  .regex(/@outlook\.com$/)
  .required
  .messages({
    "any.required": "email is required",
    "string.pattern.base": "email must end with @outlook.com"
  })
 });


  const { error } = postSchema.validate(req.body);

  if (error) {
    return res.status(409).json({
      message: error.details[0].message,
    });
  }

  next();
};

const validatePutUser = (req, res, next) => {
  // Write your schema solution here

  const { error } = putSchema.validate(req.body);

  if (error) {
    return res.status(409).json({
      message: error.details[0].message,
    });
  }

  next();
};

export { validatePostUser, validatePutUser };
