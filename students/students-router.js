const express = require("express")
const Students = require("./students-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await Students.find())
	} catch(err) {
		next(err)
	}
})
router.get("/:id", async (req, res, next) =>{
	try{
		const student = await Students.findById(req.params.id)
		if(!student){
			return res.status(404).json({
				message: "student not found"
			})
		}
		res.json(student)
	}catch{
		next(err)
	}
})
router.post("/", async (req,res, next) => {
	try{
		const student = await Students.create(req.body)
		res.status(201).json(student)
	}catch (err){
		next(err)
	}
})
router.delete("/:id", async (req,res,next) =>{
	try {
		const student = await Students.remove(req.params.id)
		res.status(200).json(student)
	}catch(err){
		next(err)
	}
})

module.exports = router