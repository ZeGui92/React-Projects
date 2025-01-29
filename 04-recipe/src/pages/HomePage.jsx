import CardList from "../components/CardList";
import Header from "../components/Header";
import axios from "axios";
import { useEffect } from "react";
import myKey from "../config";

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

export default function HomePage() {
  const fetchRecipes = async () => {
    try {
      const response = await axios.request( options );
      console.log( response.data );
    } catch ( error ) {
      console.error( error );
    }
  }

  useEffect( () => { fetchRecipes() }, [] );

  return (
    <>
      <Header />
      <CardList />
    </>
  )
}