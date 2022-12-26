import { StyledCard } from "./cardStyles";

export default function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <StyledCard>
      <div className="card">
        <div className={flipped ? "flipped" : ""}>
          <img
            src={card.src}
            alt={card.name}
            title={card.name}
            className="front"
          />
          <img
            onClick={handleClick}
            src="/img/cover.jpg"
            alt="back of card"
            title="back of a card"
            className="back"
          />
        </div>
      </div>
    </StyledCard>
  );
}
