import CardList from "../components/CardList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetchRecipes from "../hooks/useFetchRecipes";

export default function HomePage() {
  const [ recipes, loading, error ] = useFetchRecipes();

  return (
    <>
      <Header />
      { loading && <Loading /> }
      { recipes && <CardList recipes={ recipes } /> }
      { error && <p>{ error }</p> }
    </>
  )
}