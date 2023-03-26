export default function Card({ image, index, onClickCheck }) {
  return (
    <div
      className={"card" + image.cardState}
      onClick={() => onClickCheck(index)}
    >
      <img src={image.image} />
    </div>
  );
}
