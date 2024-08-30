import Card from "./Card";

function CardList() {
    return (
        <section className="cards">
            { /*for... */ }
            <Card key={ recipe.id } recipe={ recipe } />
        </section>
    )
}

export default CardList;