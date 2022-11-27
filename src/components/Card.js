const Card = (props) => {
    const { id, value, isFaceUp } = props.info;
    return (
        <div className="Card" onClick={() => props.handleCardClick(id, isFaceUp)}>
            {isFaceUp ? value : null}
        </div>
    );
}

export default Card;