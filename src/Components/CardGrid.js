import { useState } from "react";
import Card from "./Card";

function CardGrid() {
  let complete = 0;
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
  // does not work, creates undefined half way thru grid -> const imageGrid = [...images, ...images].sort(() => Math.random() - 0.5);

  // In order to re-render the page and element w/ update without needing a page refresh, use setState
  // https://stackoverflow.com/questions/51426496/why-we-cant-change-states-in-react-without-calling-setstate
  function checkIfCorrect(currentCard) {
    if (images[latestItem].id === images[currentCard].id) {
      images[latestItem].cardState = "matched";
      images[currentCard].cardState = "matched";
      // complete = complete + 1;
      setImages([...images]);
      setLatestItem(-999);
      setTurns(turns + 1);
      // console.log(complete);
      if (complete === 8){
        setTurns(turns + "complete!");
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

  return (
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
  );
}

export default CardGrid;
