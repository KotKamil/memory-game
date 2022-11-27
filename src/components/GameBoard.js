import "../styles/GameBoard.css"
import Card from "./Card";

const GameBoard = (props) => {
    const cards = props.cards.map(card => <Card key={card.id} info={card} handleCardClick={props.handleCardClick} />);
    return (
        <div className="GameBoard">
            {cards}
        </div>
    );
}

export default GameBoard;