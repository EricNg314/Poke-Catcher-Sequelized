module.exports = function(sequelize, DataTypes){
    var Pokemon = sequelize.define("pokemon", {
        pokemon_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pokemon_name: {
            type: DataTypes.STRING(255)
        },
        pokemon_nickName: {
            type: DataTypes.STRING(255)
        },
        pokemon_front_sprite_url: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        appeared: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        caught: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return Pokemon;
}