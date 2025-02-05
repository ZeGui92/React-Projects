import Card from "./Card";

function CardList( { recipes } ) {
    return (
        <section className="cards">
            { recipes.map( ( recipe ) => (
                <Card key={ recipe.id } recipe={ recipe } />
            ) ) }
        </section>
    )
}

export default CardList;