import { useState } from "react";
import Card from "./Card";
import Bear from "../assets/bear1.jpg";
import Cat1 from "../assets/cat1.jpg";
import Cat2 from "../assets/cat2.jpg";
import Chicken1 from "../assets/chicken1.jpg";
import Dino1 from "../assets/dino1.jpg";
import Fox1 from "../assets/fox1.jpg";
import Fox2 from "../assets/fox2.jpg";
import Panda1 from "../assets/panda1.jpg";


function CardGrid() {
  const [images, setImages] = useState([
    Bear,
    Cat1,
    Cat2,
    Chicken1,
    Dino1,
    Fox1,
    Fox2,
    Panda1,
  ]);
  const imageGrid = [...images, ...images].sort(() => Math.random() - 0.5);
  console.log(Bear);
  return (
    <div className="game-area">
      {imageGrid.map((image) => (
        <Card src={image} />
      ))}
    </div>
  );
}

export default CardGrid;
