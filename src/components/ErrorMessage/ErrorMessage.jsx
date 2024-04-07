import css from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  return (
    <p className={css["error"]}>
      Opps... Something gone wrong. Try to refresh page
    </p>
  );
};
export default ErrorMessage;
