import { useEffect, useState } from "react";
import axios from "axios";
import myKey from "../config"

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

const useFetchRecipes = () => {
    const [ recipes, setRecepies ] = useState( [] );

    useEffect( () => { fetchRecipes() }, [] );

    const fetchRecipes = async () => {
        try {
            const response = await axios.request( options );
            setRecepies( response.data.results );
            console.log( response.data );
        } catch ( error ) {
            console.error( error );
        }
    }

    return [ recipes ]; //we are returning an array just to keep the pattern of hooks
}

export default useFetchRecipes;