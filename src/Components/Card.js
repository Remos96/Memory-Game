export default function Card(prop) {
  return (
    <div className="card">
      <img src={prop.src} style={{width: "100%"}}/>
    </div>
  );
}
