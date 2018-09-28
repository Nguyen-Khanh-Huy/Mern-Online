// Hỗ trợ cho controller
import Joi from 'joi';
import bcrypt from 'bcryptjs';

export default {
  encryptPassword(plainText) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plainText, salt);
  },
  comparePassword(plainText, encryptPassword) {
    return bcrypt.compareSync(plainText, encryptPassword);
  },
  validateSignUp(body) {
    const schema = Joi.object().keys({
      userName: Joi.string().required(),
      fullName: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required(),
      role: Joi.number().integer(),
      friends: Joi.array()
    });
    const { value, error } = Joi.validate(body, schema);
    if (error && error.details) {
      return { error };
    }
    return { value };
  },
  validateLogin(body) {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email()              // phải là kiểu email (có @...)
        .required(),          // required là bắt buộc
      password: Joi.string().required()
    });
    const { value, error } = Joi.validate(body, schema);
    if (error && error.details) {
      return { error };
    }
    return { value };
  }
};


