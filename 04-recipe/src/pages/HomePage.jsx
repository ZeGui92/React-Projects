import { useEffect } from "react";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetchRecipes from "../hooks/useFetchRecipes";

export default function HomePage() {
  const [ fetchRecipes, { recipes, loading, error } ] = useFetchRecipes();

  const handleSearch = ( searchTerm ) => {
    fetchRecipes( searchTerm );
  }

  useEffect( () => { fetchRecipes() }, [] );

  return (
    <>
      <Header handleSearch={ handleSearch } />
      { loading && <Loading /> }
      { recipes && <CardList recipes={ recipes } /> }
      { error && <p>{ error }</p> }
    </>
  )
}