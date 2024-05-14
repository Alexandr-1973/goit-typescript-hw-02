import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return <p className={css.error}>Error, try later, please!</p>;
};

export default ErrorMessage;
