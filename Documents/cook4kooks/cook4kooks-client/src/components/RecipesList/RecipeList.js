import React, {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard';
import {Link, useRouteMatch} from 'react-router-dom';



const RecipeList = ({getRecipesList, changeRecipe, recipesList}) => {
    const {path, url} = useRouteMatch();
    const [errRecipes, setErrRecipes] = useState(null);
    const [loadingRecipes, setLoadingRecipes] = useState(true);
    async function getRecipes (){
        try{
            setLoadingRecipes(true);
            await getRecipesList();
        } catch (err){
            setErrRecipes(err);
        } finally {
            setLoadingRecipes(false);
        }
    }

    useEffect( () => {
        getRecipes();
    }, []);
    return (
        <div>
            {
             recipesList.map((recipe,i) => {
                return( 
                    <div>
                        <Link to={`${url}/${recipe.id}`}
                        onClick={()=>changeRecipe(recipe.id)}>
                            <RecipeCard key={i}
                                name={recipe.name}
                                id={recipe.id}
                            />
                        </Link>
                    </div>
                    );
            })
            };
      </div>
    );
}
export default RecipeList;