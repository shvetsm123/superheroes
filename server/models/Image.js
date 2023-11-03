const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
        static associate({ Superhero }) {
            Image.belongsTo(Superhero, {
                foreignKey: "heroId",
            });
        }
    }

    Image.init(
        {
            path: {
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
            modelName: "Image", // не зависит от названия файла модели
            tableName: "images",
            underscored: true,
        }
    );
    return Image;
};
