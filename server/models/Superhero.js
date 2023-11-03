"use strict";
/** @type {import('sequelize-cli').Migration} */

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Superhero extends Model {
        static associate() {}
    }

    Superhero.init(
        {
            nickname: {
                unique: true,
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            realName: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            originDescription: {
                allowNull: false,
                type: DataTypes.TEXT,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            cathPhrase: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
        },
        {
            sequelize,
            modelName: "Superhero", // не зависит от названия файла модели
            tableName: "superheroes",
            underscored: true,
        }
    );
    return Superhero;
};
