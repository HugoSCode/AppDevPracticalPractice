import Joi from 'joi';

const validatePostPost = (req, res, next) => {
  // Write your schema solution here

  const { error } = postSchema.validate(req.body);

  if (error) {
    return res.status(409).json({ message: error.details[0].message });
  }

  next();
};

const validatePutPost = (req, res, next) => {
  // No schema solution required
  const putSchema = Joi.object({});

  const { error } = putSchema.validate(req.body);

  if (error) {
    return res.status(409).json({ message: error.details[0].message });
  }

  next();
};

export { validatePostPost, validatePutPost };
