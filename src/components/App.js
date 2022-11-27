import '../styles/App.css';
import React from 'react'

import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';

class App extends React.Component {
  state = {
    cards: [
      {
        id: 0,
        value: null,
        isFaceUp: false,
        isPaired: false
      },
      {
        id: 1,
        value: null,
        isFaceUp: false,
        isPaired: false
      },
      {
        id: 2,
        value: null,
        isFaceUp: false,
        isPaired: false
      },
      {
        id: 3,
        value: null,
        isFaceUp: false,
        isPaired: false
      },
      {
        id: 4,
        value: null,
        isFaceUp: false,
        isPaired: false
      },
      {
        id: 5,
        value: null,
        isFaceUp: false,
        isPaired: false
      },
    ],
    cardsTurned: 0,
    gameState: "PLAYING"
  }

  initGame = () => {
    const cards = this.state.cards.map(item => item);
    const cardValues = [];
    function shuffle(array) {
      let currentIndex = array.length, randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    }

    for (let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      cardValues[i] = randomNumber;
      cardValues[i + 3] = randomNumber;
    }
    shuffle(cardValues);

    cards.forEach((card, index) => {
      card.value = cardValues[index];
    });

    this.setState(prevState => ({ cards }));
  }

  checkForPair = (cards) => {
    const cardsChecked = [{}, {}];
    let cardsCheckedIndex = 0;

    cards.forEach(card => {
      if (card.isFaceUp && !card.isPaired) {
        cardsChecked[cardsCheckedIndex] = card;
        cardsCheckedIndex++;
      }
    })

    if (cardsChecked[0].value === cardsChecked[1].value) {
      cards.forEach(card => {
        if (card.isFaceUp) card.isPaired = true;
      });

      this.setState(prevState => ({ cards }))

      return true;
    } else return false
  }

  checkForWin = () => {
    const cards = this.state.cards.map(item => item);
    let pairedCards = 0;

    cards.forEach(card => {
      if (card.isPaired) pairedCards++;
    })

    if (pairedCards === cards.length) this.setState({ gameState: "WIN" });
  }

  handleCardClick = (id, isFaceUp) => {
    const cards = this.state.cards.map(item => item);
    let cardsTurned = this.state.cardsTurned;

    if (!isFaceUp && cardsTurned < 2) {
      cards.forEach(card => {
        if (card.id === id) {
          card.isFaceUp = true
        };
      })

      cardsTurned++;
    }


    if (cardsTurned === 2) {
      if (this.checkForPair(cards)) cardsTurned = 0;
      else setTimeout(this.turnCards, 500);
    }

    this.setState(prevState => ({ cards, cardsTurned }));

    setTimeout(this.checkForWin, 0);
  }

  turnCards = () => {
    const cards = this.state.cards.map(item => item);
    let cardsTurned = this.state.cardsTurned;

    cards.forEach(card => {
      if (!card.isPaired) card.isFaceUp = false;
    });

    cardsTurned = 0;

    this.setState(prevState => ({ cards, cardsTurned }));
  }

  componentDidMount() {
    this.initGame();
  }

  render() {
    return (
      <div className="App">
        <div className="GamePanel">
          <GameBoard cards={this.state.cards} handleCardClick={this.handleCardClick} />
          <ScoreBoard />
        </div>
      </div>
    );
  }
}

export default App;