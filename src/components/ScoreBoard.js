import "../styles/ScoreBoard.css"

const ScoreBoard = () => {
    return (
        <div className="ScoreBoard">
            <div className="Moves">
                Moves: 5
            </div>
            <div className="RoundsPlayed">
                Rounds played: 2
            </div>
            <div className="Restart">
                <button>Restart</button>
            </div>
        </div>
    );
}

export default ScoreBoard;