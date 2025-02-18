import { useState } from "react";
import axios from "axios";
import myKey from "../config"

const useFetchRecipes = () => {
    const [ recipes, setRecepies ] = useState( null );
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState( null );

    const fetchRecipes = async ( searchTerms ) => {
        let options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: { from: '0', size: '20' },
            headers: { 'x-rapidapi-key': myKey, 'x-rapidapi-host': 'tasty.p.rapidapi.com' }
        };

        options.params.q = searchTerms; //if the search term is null, than the API will return all the data

        setLoading( true );
        setRecepies( null );
        setError( null );

        try {
            const response = await axios.request( options );
            setRecepies( response.data.results );
            setLoading( false );
        } catch ( err ) {
            setError( err.message );
            setLoading( false );
        }
    }

    return [ fetchRecipes, { recipes, loading, error } ];
}

export default useFetchRecipes;