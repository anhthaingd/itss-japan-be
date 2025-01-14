"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class IngredientRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IngredientRecipe.init(
    {
      recipeID: DataTypes.INTEGER,
      ingredientID: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "IngredientRecipes",
    }
  );
  return IngredientRecipe;
};
