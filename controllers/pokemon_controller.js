var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.pokemon.findAll({}).then(function (dbPokemon) {
            var hbsObj = {
                pokemon: dbPokemon
            }
            res.render("index", hbsObj);
        });
    });

    app.post("/api/pokemon", function (req, res) {
        //Used for randomizing pokemon image and their pokemon id. Pokemon id for future reference.
        var randomId = (Math.floor(Math.random() * 750) + 1);
        var pokemon_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + randomId + ".png";

        db.pokemon.create({
            pokemon_id: randomId,
            pokemon_name: req.body.nickName,
            pokemon_nickName: req.body.nickName,
            pokemon_front_sprite_url: pokemon_url
        }).then(function (dbPokemon) {
            res.json(dbPokemon);
        });
    });

    app.put("/api/pokemon/:id", function (req, res) {
        db.pokemon.update({
            caught: req.body.caught
        }, {
            where: {
                id: req.params.id
            }
            }).then(function (result) {
                if (result.changedRows == 0) {
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            });
    });

}