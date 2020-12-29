const Joi = require('@hapi/joi');

const criarUser = Joi.object({
  nome: Joi.string().min(10).max(50).required(),
  login: Joi.string().min(8).max(50).required(),
  email: Joi.string().email().required(),
  fone: Joi.string().min(13).max(13).required(),
  senha: Joi.string().min(8).max(16).required(),
  data: Joi.date().required()
})

const loginUser = Joi.object({
  email: Joi.string().email().required(),
  senha: Joi.string().min(8).max(32).required(),
})

const criarPost = Joi.object({
  txtNome: Joi.string().min(10).max(50).required(),
  txtTitulo: Joi.string().min(30).max(120).required(),
  txtDepoimento: Joi.string().min(120).max(5000).required(),
})

module.exports = {
  criarUser,
  criarPost,
  loginUser,
}