function Card({characters, abilities}) {
    return(
        <div className="cards">
            <ul>
                <li>Name: {characters.name}</li>
                <li>Ability: {abilities.name}</li>
            </ul>
        </div>
    )
}
export default Card;