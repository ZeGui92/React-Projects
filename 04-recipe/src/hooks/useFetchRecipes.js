import { useEffect, useState } from "react";
import axios from "axios";
import myKey from "../config"

const useFetchRecipes = () => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
            from: '0',
            size: '20'
        },
        headers: {
            'x-rapidapi-key': myKey,
            'x-rapidapi-host': 'tasty.p.rapidapi.com'
        }
    };

    const [ recipes, setRecepies ] = useState( null );
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState( null );

    useEffect( () => { fetchRecipes() }, [] );

    const fetchRecipes = async () => {
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

    return [ recipes, loading, error ]; //we are returning an array just to keep the pattern of hooks
}

export default useFetchRecipes;