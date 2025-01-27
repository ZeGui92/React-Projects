import Card from "./Card";

export const recipes = [
    { id: 1, name: "my name1", tag: "Romantic Dinner1", minutes: 50, image: "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg" },
    { id: 2, name: "my name2", tag: "Romantic Dinner2", minutes: 100, image: "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg" },
    { id: 3, name: "my name3", tag: "Romantic Dinner3", minutes: 20, image: "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg" },
    { id: 4, name: "my name4", tag: "Romantic Dinner4", minutes: 30, image: "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg" },
]

function CardList() {
    return (
        <section className="cards">
            { recipes.map( ( recipe ) => (
                <Card key={ recipe.id } recipe={ recipe } />
            ) ) }
        </section>
    )
}

export default CardList;