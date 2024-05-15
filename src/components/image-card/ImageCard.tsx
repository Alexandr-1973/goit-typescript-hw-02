import css from "./ImageCard.module.css";
import { FotosInterface } from "../../types";

type ImageCardType = {
  item: FotosInterface;
  handleClick: (value: string) => void;
};

const ImageCard: React.FC<ImageCardType> = ({ item, handleClick }) => {
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
