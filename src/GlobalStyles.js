import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: Raleway, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.5rem;
    text-align: center;
    background: #1b1523;
    color: #fff;
  }

  .App {
    max-width: 860px;
    margin: 1rem auto;
  }

  h1 {
    font-family: 'Sevillana', cursive;
    color: white;
    padding-top: 1rem;
  }

  button {
    background: none;
    border: solid yellow;
    padding: .5rem .75rem;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    font-size: .75rem;
    margin-right: 2rem;
    

    &.grow {
      transition: all .2s ease-in-out;

      &:hover {
          transform: scale(1.25);
          background: purple;
          color: #fff;
          border: solid #c23866;
          border-radius: 4px;
        }
    }
  }

  .game-stats {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 200px;
    height: 200px;
  }

  .card-grid {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
`;

export default GlobalStyle;
