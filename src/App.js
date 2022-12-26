import { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyles";
import Card from "./components/Card/Card";

const cardImages = [
  { src: "img/helmet1.png", name: "Helmet", matched: false },
  { src: "img/potion1.png", name: "Potion", matched: false },
  { src: "img/mushroom1.png", name: "Mushroom", matched: false },
  { src: "img/scroll1.png", name: "Scroll", matched: false },
  { src: "img/shield1.png", name: "Shield", matched: false },
  { src: "/img/sword1.png", name: "Sword", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurn(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCard) => {
          return prevCard.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurn((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <main>
          <h1 title="Memory Match">Memory Match</h1>
          <div className="game-stats">
            <button title="New Game" className="grow" onClick={shuffleCards}>
              New Game
            </button>
            <h2 title={turn}>Chances Left: {turn}</h2>
          </div>
        </main>
        <body className="card-grid">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </body>
      </div>
    </>
  );
}

export default App;
