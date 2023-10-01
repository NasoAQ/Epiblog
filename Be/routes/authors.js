const express = require("express");
const authors = express.Router();
const logger = require("../middleweares/logger");
const Author = require("../models/author");

//Rotta per gli autori totali
authors.get("/authors", async (req, res) => {
	try {
		const autori = await Author.find();
		res.status(200).send({
			statusCode: 200,
			autori,
		});
		/* Author.find().then((autori) => {
            res.json(autori) 
        })*/
	} catch (e) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno",
			error: e,
		});
	}
});

//Rotta per l'autore singolo
authors.get("/authors/:id", async (req, res) => {
	console.log(req.params.id);
	try {
		const newAuthor = await Author.findById(req.params.id);
		res.status(200).send({
			statusCode: 200,
			message: "Autore recuperato",
			newAuthor,
		});
	} catch (e) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno",
			error: e,
		});
	}
});

//Rotta per la creazione di un autore
authors.post("/authors/create", logger, async (req, res) => {
	const newAuthor = new Author({
		nome: req.body.nome,
		cognome: req.body.cognome,
		dataDiNascita: req.body.dataDiNascita,
		email: req.body.email,
		avatar: req.body.avatar,
	});
	try {
		const autoreSalvato = await newAuthor.save();
		res.status(201).send({
			statusCode: 200,
			message: "Autore salvato correttamente",
			payload: autoreSalvato,
		});
	} catch (e) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno",
			error: e,
		});
	}
});

//Rotta per la modifica di un autore
authors.put("/authors/update/:id", logger, async (req, res) => {
	const { id } = req.params;
	const authorExist = await Author.findById(id);

	if (!authorExist) {
		return res.status(404).send({
			statusCode: 404,
			message: "Autore insesistente",
		});
	}

	try {
		const dataToUpdate = req.body;
		const options = { new: true };
		const result = await Author.findByIdAndUpdate(id, dataToUpdate, options);
		res.status(200).send({
			statusCode: 200,
			message: "Autore modificato correttamente",
			result,
		});
	} catch (e) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno",
			error: e,
		});
	}
});

//Rotta per la cancellazione di un autore
authors.delete("/authors/delete/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const author = await Author.findByIdAndDelete(id);
		if (!author) {
			return res.status(404).send({
				statusCode: 404,
				message: "Autore inesistente",
			});
		}
		res.status(200).send({
			statusCode: 200,
			message: "Autore cancellato correttamente",
		});
	} catch (e) {
		res.status(500).send({
			statusCode: 500,
			message: "Errore interno",
			error: e,
		});
	}
});

module.exports = authors;
