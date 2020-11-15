import {get,recipeModel} from '../models/recipemodel.js';

export const index = (req, res) => {
    get((err, recipes) => {
        if (err){
            res.json({
                status:"error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "recipes retrieve successfully",
            data: recipes
        });

    });
};

export const create = (req, res) => {
    var recipe = new recipeModel ();
    recipe.name = req.body.name? req.body.name : recipe.name;
    recipe.ingredients = req.body.ingredients;
    recipe.steps = req.body.steps;

    recipe.save (err => {
        if (err){
            res.json(err);
        }
        res.json({
            message: "new Recipe Created!",
            data: recipe
        });
    });
};

export const view = (req, res) => {
    recipeModel.findById(req.params.recipe_id, (err, recipe) => {
        if (err){
            res.send(err);
        }
        res.json({
            message: "recipe details loading...",
            data: recipe
        });
    });
};