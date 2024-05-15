import css from "./LoadMoreBtn.module.css";

type OnLoadMore = { onLoadMore: () => void };

const LoadMoreBtn: React.FC<OnLoadMore> = ({ onLoadMore }) => {
  const handleClick = (): void => {
    onLoadMore();
  };
  return (
    <button onClick={handleClick} className={css.btn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
