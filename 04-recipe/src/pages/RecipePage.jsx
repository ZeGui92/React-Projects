import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetchRecipe from "../hooks/useFetchRecipe";
import RecipeHeader from "../components/RecipeHeader";
import Loading from "../components/Loading";

export default function RecipePage() {
    const recipeId = useParams().id;
    const [ fetchRecipe, { recipe, loading, error } ] = useFetchRecipe();

    useEffect( () => { fetchRecipe( recipeId ) }, [] );

    if ( loading ) {
        return <Loading />
    } if ( error ) {
        return <h1>{ error }</h1>
    } else {
        return (
            <>
                <RecipeHeader nutritionalFacts={ recipe.nutrition } />
            </>
        );
    }
}