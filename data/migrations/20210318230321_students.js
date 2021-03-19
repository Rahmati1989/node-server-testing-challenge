
exports.up = async function(knex) {
  await knex.schema.createTable("students",(table) => {
      table.increments()
      table.text("student_name").notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("students")
};
