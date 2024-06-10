const Joi = require("joi");

const personagem = Joi.object({
  nome: Joi.string().min(1).max(30).required(),

  imagem: Joi.string().uri().required(),

  categoria: Joi.string().min(3).max(20).optional(),
});

module.exports = personagem;
