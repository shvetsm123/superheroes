const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class SuperPower extends Model {
        static associate({ Superhero }) {
            SuperPower.belongsTo(Superhero, {
                foreignKey: "heroId",
            });
        }
    }

    SuperPower.init(
        {
            name: {
                unique: true,
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
            modelName: "Superpower", // не зависит от названия файла модели
            tableName: "super_powers",
            underscored: true,
        }
    );
    return SuperPower;
};
