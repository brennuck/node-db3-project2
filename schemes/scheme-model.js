const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
//   add,
//   update,
//   remove,
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}

function findSteps(id) {
    return db('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id',)
    .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions', )
    .where({ scheme_id: id });
}