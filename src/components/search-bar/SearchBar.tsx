import { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { OnSubmit } from "../../types";

const SearchBar: React.FC<OnSubmit> = ({ onSubmit }) => {
  return (
    <header>
      <form onSubmit={onSubmit} className={css.form}>
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
