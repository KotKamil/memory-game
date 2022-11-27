import "../styles/ScoreBoard.css"

const ScoreBoard = (props) => {
    return (
        <div className="ScoreBoard">
            <div className="Moves">
                Moves: {props.moves}
            </div>
            <div className="RoundsPlayed">
                Rounds played: {props.roundsPlayed}
            </div>
            <div className="RoundsWon">
                Rounds Won: {props.roundsWon}
            </div>
            <div className="Restart">
                <button onClick={props.restartGame}>Restart</button>
            </div>
        </div>
    );
}

export default ScoreBoard;