function Card(props) {
  return (
    <div className="card">
      <div className="card__image-container">
        <img
          className="card__image"
          src={props.item.imageUrl}
          alt={props.item.title}
        />
      </div>
      <div className="card__text-container">
        <div className="card__location">
          <img className="card__pin" src="images/pin.svg" alt="pin" />
          <p className="card__country">{props.item.location}</p>
          <a
            href={props.item.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="gray"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="card__landmark">{props.item.title}</h2>
        <p className="card__date">
          {props.item.startDate} — {props.item.endDate}
        </p>
        <p className="card__description">{props.item.description}</p>
      </div>
    </div>
  );
}

export default Card;
