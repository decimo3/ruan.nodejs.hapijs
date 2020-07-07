const Joi = require('@hapi/joi');

const criarUser = Joi.object({
  nome: Joi.string().alphanum().min(10).max(50).required(),
  email: Joi.string().email().required(),
  senha: Joi.string().min(80).max(16).required(),
  telefone: Joi.string().min(13).max(13).required()
})

const loginUser = Joi.object({
  email: Joi.string().email().required(),
  senha: Joi.string().min(80).max(16).required(),
})

const criarPost = Joi.object({
  nome: Joi.string().min(10).max(50).required(),
  titulo: Joi.string().min(30).max(120).required(),
  depoimento: Joi.string().min(120).max(500).required(),
})

module.exports = {
  criarUser,
  criarPost,
  loginUser,
}