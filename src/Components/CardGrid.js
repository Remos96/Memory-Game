import { useState } from "react";
import Card from "./Card";

function CardGrid() {
  const [complete, setComplete] = useState(1);
  const [turns, setTurns] = useState(0);
  const [latestItem, setLatestItem] = useState(-999); // id needs to be < 0 as our image indexs in the grid are 0 -> 15
  const [images, setImages] = useState(
    [
      { id: 100, image: "bear1.jpg", cardState: "" },
      { id: 100, image: "bear1.jpg", cardState: "" },
      { id: 101, image: "cat1.jpg", cardState: "" },
      { id: 101, image: "cat1.jpg", cardState: "" },
      { id: 102, image: "cat2.jpg", cardState: "" },
      { id: 102, image: "cat2.jpg", cardState: "" },
      { id: 103, image: "chicken1.jpg", cardState: "" },
      { id: 103, image: "chicken1.jpg", cardState: "" },
      { id: 104, image: "dino1.jpg", cardState: "" },
      { id: 104, image: "dino1.jpg", cardState: "" },
      { id: 105, image: "fox1.jpg", cardState: "" },
      { id: 105, image: "fox1.jpg", cardState: "" },
      { id: 106, image: "fox2.jpg", cardState: "" },
      { id: 106, image: "fox2.jpg", cardState: "" },
      { id: 107, image: "panda1.jpg", cardState: "" },
      { id: 107, image: "panda1.jpg", cardState: "" },
    ].sort(() => Math.random() - 0.5)
  );
  // const imageGrid = [...images, ...images].sort(() => Math.random() - 0.5) -> does not work, creates undefined half way thru grid

  // In order to re-render the page and element w/ update without needing a page refresh, use setState
  // https://stackoverflow.com/questions/51426496/why-we-cant-change-states-in-react-without-calling-setstate
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
    setImages(
      [
        { id: 100, image: "bear1.jpg", cardState: "" },
        { id: 100, image: "bear1.jpg", cardState: "" },
        { id: 101, image: "cat1.jpg", cardState: "" },
        { id: 101, image: "cat1.jpg", cardState: "" },
        { id: 102, image: "cat2.jpg", cardState: "" },
        { id: 102, image: "cat2.jpg", cardState: "" },
        { id: 103, image: "chicken1.jpg", cardState: "" },
        { id: 103, image: "chicken1.jpg", cardState: "" },
        { id: 104, image: "dino1.jpg", cardState: "" },
        { id: 104, image: "dino1.jpg", cardState: "" },
        { id: 105, image: "fox1.jpg", cardState: "" },
        { id: 105, image: "fox1.jpg", cardState: "" },
        { id: 106, image: "fox2.jpg", cardState: "" },
        { id: 106, image: "fox2.jpg", cardState: "" },
        { id: 107, image: "panda1.jpg", cardState: "" },
        { id: 107, image: "panda1.jpg", cardState: "" },
      ].sort(() => Math.random() - 0.5)
    );
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
            key={index} // W/o key, program fails to run properly
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
