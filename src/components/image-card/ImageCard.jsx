import css from "./ImageCard.module.css";

const ImageCard = ({ item, handleClick }) => {
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        className={css.foto}
        onClick={() => handleClick(item.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
