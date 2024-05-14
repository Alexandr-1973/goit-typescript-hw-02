import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const notify = () =>
      toast.error("Please enter search topic!", {
        duration: 3000,
        style: {
          backgroundColor: "lightgreen",
        },
      });

    if (!event.target.elements.topic.value) {
      notify();
      return;
    } else {
      onSubmit(event);
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
