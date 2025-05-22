import Joi from 'joi';

const validatePostUser = (req, res, next) => {
  // Write your schema solution here

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
