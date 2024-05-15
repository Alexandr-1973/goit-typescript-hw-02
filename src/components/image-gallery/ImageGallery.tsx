import ImageCard from "../image-card/ImageCard";
import css from "./ImageGallery.module.css";
import { FotosInterface } from "../../types";

type ImageGalleryType = {
  items: FotosInterface[];
  handleClick: (value: string) => void;
};

const ImageGallery: React.FC<ImageGalleryType> = ({ items, handleClick }) => {
  return (
    <ul className={css["fotos-gallery"]}>
      {items.map((item: FotosInterface) => {
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
