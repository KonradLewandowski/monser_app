import "./card.styles.css";

const Card = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        width="100%"
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        srcSet={`https://robohash.org/${id}?set=set2&size=180x180 720w, https://robohash.org/${id}?set=set2&size=360x360 1400w`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
