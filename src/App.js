import "./App.css";
import { useState } from "react";

// Never changing, so not in a component.
const imageSquares = [
  "bear1.jpg",
  "cat1.jpg",
  "cat2.jpg",
  "chicken1.jpg",
  "fox1.jpg",
  "fox2.jpg",
];

function App() {
  const [images, setImages] = useState([]);
  const [turns, setTurns] = useState(0);

  // Randomize the order of the images.
  const randomizedImages = () => {
    const randomizedImages = [...imageSquares, ...imageSquares].sort(
      () => Math.random() - 0.5
    );
    /* 
      randomizedImages holds a created array of 12 images (each of the 6 images is copied once).
      Finally, the order is randomized. For more info: https://www.youtube.com/watch?v=5sNGqsMpW1E
      All is done in 1 line because randomizedImages is a const variable.
    */

    setImages(randomizedImages); // Set images to randomizedImages array
    setTurns(0); // Reset turns counter back to 0
  };

  console.log(images, turns); // Debugging

  return (
    <div className="App">
      <h1>hi</h1>
      <button onClick={randomizedImages}>Start New Game</button>

      <div className="entire_grid">
        {images.map((image) => (
          <div className="image">
            <img className="image_side" src={image}></img>
            <img className="back_side" src="cardBack.jpg"></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
