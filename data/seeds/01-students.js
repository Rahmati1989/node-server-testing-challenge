
exports.seed = async function(knex) {
  await knex("students").truncate()
  await knex("students").insert([
    {student_name: "rafi"},
    {student_name: "mohammad"},
    {student_name: "asra"},
    {student_name: "liba"}
  ])
}
