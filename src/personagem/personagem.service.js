const { ObjectId } = require("mongodb");
const { getDatabase } = require("../db/database-connection");

function getCollection() {
  return getDatabase().collection("personagem");
}

// READ ALL
function readAll() {
  return getCollection().find().toArray();
}

// READ BY ID
/**
 * @param {string} id
 * @returns
 */
function readById(id) {
  return getCollection().findOne({ _id: new ObjectId(id) });
}

// CREATE
function create(novoItem) {
  return getCollection().insertOne(novoItem);
}

// UPDATE BY ID
/**
 * @param {string} id
 * @returns
 */
function updateById(id, novoItem) {
  return getCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: novoItem }
  );
}

// DELETE DY ID (ÓBVIO)
/**
 * @param {string} id
 * @returns
 */
function deleteById(id) {
  return getCollection().deleteOne({ _id: new ObjectId(id) });
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById,
};
