const axios = require("axios");
const express = require("express");
const app = express();

app.listen("3000");

app.get("/pokedex", async (req, res) =>{
    try {
        const { data } = await axios("https://pokeapi.co/api/v2/pokemon?limit=6&offset=0");
        res.status(200).json(data.results);
        
    } catch (error) {
        console.error(error);
    }
})

/* app.get("/consulta", async (req, res) =>{
    try {
        const { data } = await axios("https://pokeapi.co/api/v2/pokemon?limit=6&offset=0");
        let nomes = [];
        for (let index = 0; index < data.results.length; index++) {
            nomes[index] = data.results[index].name;
        }
        let tamanhoLista = data.results.length
        let contador = 0;
        while(contador <= tamanhoLista){
            const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${nomes[contador]}`);
            const infos = { name: data.name, altura: data.height, tipo: data.types};
            res.status(200).json(infos);
        }
    } catch (error) {
        console.error(error);
    }
}) */

app.get("/pokemon/:pokemon", async (req, res) =>{
    const pokemon = req.params.pokemon;
    try {
        const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const infos = { name: data.name, altura: data.height, tipo: data.types };
        res.json(infos);
    } catch (error) {
        console.error(error);
    }
})
