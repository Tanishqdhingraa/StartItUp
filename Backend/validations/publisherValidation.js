// validations/publisherValidation.js
import Joi from "joi";

export const publisherSchema = Joi.object({
  name: Joi.string().min(3).required(),
  socialMedia: Joi.string().required(),
  contentType: Joi.string().required(),
  date: Joi.date().optional()
});

export const multiplePublisherSchema = Joi.array().items(publisherSchema);
