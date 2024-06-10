const personagem = require("./personagem.entity");
const service = require("./personagem.service");

// READ ALL
async function readAll(req, res) {
  const items = await service.readAll();
  res.send(items);
}

// READ BY ID
async function readById(req, res) {
  const id = req.params.id;
  const item = await service.readById(id);
  if (!item) {
    return res.status(404).send("ALERTA: Ítem não encontrado");
  }
  res.send(item);
}

// CREATE
async function create(req, res) {
  const { error, value: novoItem } = personagem.validate(req.body);
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }
  await service.create(novoItem);
  res.status(201).send(novoItem);
}

// UPDATE BY ID
async function updateById(req, res) {
  const id = req.params.id;
  const { error, value: novoItem } = personagem.validate(req.body);
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }
  await service.updateById(id, novoItem);
  res.send(novoItem);
}

// DELETE DY ID (ÓBVIO)
async function deleteById(req, res) {
  const id = req.params.id;
  await service.deleteById(id);
  res.status(204).send();
  // res.status(204).send({ message: "Ítem removido com sucesso: " + id });
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById,
};
