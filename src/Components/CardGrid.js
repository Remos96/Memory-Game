import { useState } from "react";
import Card from "./Card";
import Bear1 from "../assets/bear1.jpg";
import Cat1 from "../assets/cat1.jpg";
import Cat2 from "../assets/cat2.jpg";
import Chicken1 from "../assets/chicken1.jpg";
import Dino1 from "../assets/dino1.jpg";
import Fox1 from "../assets/fox1.jpg";
import Fox2 from "../assets/fox2.jpg";
import Panda1 from "../assets/panda1.jpg";

function CardGrid() {
  const [complete, setComplete] = useState(1);
  const [turns, setTurns] = useState(0);
  const [latestItem, setLatestItem] = useState(-999); // id needs to be < 0 as our image indexs in the grid are 0 -> 15
  const [images, setImages] = useState([
    { id: 100, image: Bear1, cardState: "" },
    { id: 100, image: Bear1, cardState: "" },
    { id: 101, image: Cat1, cardState: "" },
    { id: 101, image: Cat1, cardState: "" },
    { id: 102, image: Cat2, cardState: "" },
    { id: 102, image: Cat2, cardState: "" },
    { id: 103, image: Chicken1, cardState: "" },
    { id: 103, image: Chicken1, cardState: "" },
    { id: 104, image: Dino1, cardState: "" },
    { id: 104, image: Dino1, cardState: "" },
    { id: 105, image: Fox1, cardState: "" },
    { id: 105, image: Fox1, cardState: "" },
    { id: 106, image: Fox2, cardState: "" },
    { id: 106, image: Fox2, cardState: "" },
    { id: 107, image: Panda1, cardState: "" },
    { id: 107, image: Panda1, cardState: "" },
  ].sort(() => Math.random() - 0.5));

  function checkIfCorrect(currentCard) {
    if (images[latestItem].id === images[currentCard].id) {
      images[latestItem].cardState = "matched";
      images[currentCard].cardState = "matched";
      setImages([...images]);
      setLatestItem(-999);
      setTurns(turns + 1);
      setComplete(complete + 1);
      console.log(complete);
      if (complete === 8) {
        alert("The grid is complete!");
      }
    } else {
      images[currentCard].cardState = "incorrectpair";
      images[latestItem].cardState = "incorrectpair";
      setImages([...images]);
      setTimeout(() => {
        images[currentCard].cardState = "";
        images[latestItem].cardState = "";
        setImages([...images]);
      }, 666);
      setLatestItem(-999);
      setTurns(turns + 1);
    }
  }

  function onClickCheck(currentCard) {
    if (latestItem === -999) {
      // see if we have already clicked on a image

      images[currentCard].cardState = "checking";
      setImages([...images]);
      setLatestItem(currentCard);
    } else {
      checkIfCorrect(currentCard);
    }
  }

  function newGrid() {
    setImages([
      { id: 100, image: Bear1, cardState: "" },
      { id: 100, image: Bear1, cardState: "" },
      { id: 101, image: Cat1, cardState: "" },
      { id: 101, image: Cat1, cardState: "" },
      { id: 102, image: Cat2, cardState: "" },
      { id: 102, image: Cat2, cardState: "" },
      { id: 103, image: Chicken1, cardState: "" },
      { id: 103, image: Chicken1, cardState: "" },
      { id: 104, image: Dino1, cardState: "" },
      { id: 104, image: Dino1, cardState: "" },
      { id: 105, image: Fox1, cardState: "" },
      { id: 105, image: Fox1, cardState: "" },
      { id: 106, image: Fox2, cardState: "" },
      { id: 106, image: Fox2, cardState: "" },
      { id: 107, image: Panda1, cardState: "" },
      { id: 107, image: Panda1, cardState: "" },
    ].sort(() => Math.random() - 0.5));
    setTurns(0);
    setComplete(0);
    setLatestItem(-999);
  }

  return (
    <div>
      <div className="NewGameButton">
        <button onClick={newGrid}> New Game </button>
      </div>
      <div className="game-area">
        {images.map((image, index) => (
          <Card
            key={index}
            image={image}
            index={index}
            onClickCheck={onClickCheck}
          />
        ))}
        <div className="Turn">Total Turns: {turns}</div>
      </div>
    </div>
  );
}

export default CardGrid;
