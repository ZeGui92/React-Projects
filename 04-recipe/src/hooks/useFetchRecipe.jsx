import { useState } from "react";
import axios from "axios";
import myKey from "../config"

const useFetchRecipe = () => {
    const [ recipe, setRecepie ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState( null );

    const fetchRecipe = async ( recipeId ) => {
        setLoading( true );
        setRecepie( null );
        setError( null );

        const options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
            params: { id: recipeId },
            headers: { 'x-rapidapi-key': myKey, 'x-rapidapi-host': 'tasty.p.rapidapi.com' }
        };

        try {
            const response = await axios.request( options );
            setRecepie( response.data );
            setLoading( false );
        } catch ( err ) {
            setError( err.message );
            setLoading( false );
        }
    }

    return [ fetchRecipe, { recipe, loading, error } ];
}

export default useFetchRecipe;