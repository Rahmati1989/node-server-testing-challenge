const supertest = require("supertest")
const server = require("../server")
const db = require("../config")

beforeEach(async () =>{
    await db.seed.run()
})

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
afterAll(async () => {
await db.destroy()

})
describe("students integration tests", () =>{
it("GET/students", async () => {
   const res = await supertest(server).get("/students")
   expect(res.statusCode).toBe(200)
   expect(res.type).toBe("application/json")
   expect(res.body.length).toBeGreaterThanOrEqual(4)
   expect(res.body[0].id).toBe(1)
   expect(res.body[0].student_name).toBe("rafi")

})
it("GET/students/:id", async () => {
    const res = await supertest(server).get("/students/1")
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.id).toBe(1)
    expect(res.body.student_name).toBe("rafi")
})
it("error if student not found", async () =>{
    const res = await supertest(server).get("/students/50")
    expect(res.statusCode).toBe(404)
})
it("creates a hobbit", async () =>{
    const res = await supertest(server).post("/students")
    .send({student_name: "nadira"})
    expect(res.statusCode).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.student_name).toBe("nadira")
    // expect(res.body.id).toBeDefined()
})
})