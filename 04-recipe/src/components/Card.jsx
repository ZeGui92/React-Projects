function Card( { recipe } ) {
    return (
        <div className="card">
            <img src={ recipe.image } alt="" />
            <div className="card-content">
                <h3>{ recipe.name }</h3>
                <div className="card-info">
                    <div className="tag">
                        <p>{ recipe.tag }</p>
                    </div>
                    <p className="time-text">{ recipe.minutes } mins</p>
                </div>
            </div>
        </div>
    )
}

export default Card;