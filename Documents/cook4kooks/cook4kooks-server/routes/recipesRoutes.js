import express from 'express';
import {index, viewByTag, create} from '../controllers/recipeControllers.js';

const recipesRouter = express.Router();

recipesRouter.get('/', (req, res) =>{
    res.json({
        status:"Its alive",
        message:"the damn api call is working!"
    })
})

recipesRouter.route('/recipes')
    .get(index)
    .post(create);

recipesRouter.route('/recipes/:recipe_tag')
    .get(viewByTag);
// router.get('/:recipeId', (req, res) =>{
//     const  recipeId  = parseInt(req.params.recipeId);
//     let found = false;
//     console.log('id:',typeof(recipeId), recipeId);
//     // update it with db access later
//     recipes.forEach(recipe =>{
//         console.log('recipeID:',typeof(recipe.id), recipe.id);
//         if (recipe.id===recipeId){
//             found = true;
//             return res.json(recipe)
//         }
//     })
//     if (!found){
//         return res.status(400).json('not found');
//     }
// })

// router.post('/', (req, res) =>{
//     const recipe = new Recipe({
//         name:req.body.name,
//         ingredients: req.body.ingredients,
//         steps: req.body.steps
//     });  
//     post.save()
//     .then(data=> {
//         res.json(data);
//     })
//     .catch(err =>{
//         res.status(404).json('error while adding');
//     })
// });

export default recipesRouter;