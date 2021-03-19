const db = require("../config")

function find() {
	return db("students")
}

function findById(id) {
	return db("students").where({ id }).first()
}

async function create(data) {
	const [id] = await db("students").insert(data)
	return findById(id)
}

async function update(id, data) {
	await db("students").where({ id }).update(data)
	return findById(id)
}

function remove(id) {
	return db("students").where({ id }).del()
}

module.exports = {
	find,
	findById,
	create,
	update,
	remove,
}