import ImageCard from "../image-card/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, handleClick }) => {
  return (
    <ul className={css["fotos-gallery"]}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard item={item} handleClick={handleClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
