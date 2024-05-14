import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  const handleClick = () => {
    onLoadMore();
  };
  return (
    <button onClick={handleClick} className={css.btn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
