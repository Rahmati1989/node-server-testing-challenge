module.exports = {
	development: {
	client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "./data/students.db3",
	},
	migrations: {
		directory: "./data/migrations",
	},
	seeds: {
		directory: "./data/seeds",
	},
},
	test: {
	client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "./data/students.db3",
	},
	migrations: {
		directory: "./data/migrations",
	},
	seeds: {
		directory: "./data/seeds",
	},
},
}