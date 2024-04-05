import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const toastStyles = {
  borderRadius: "8px",
  background: "#333",
  color: "#fff",
};

const SearchBar = ({ setQuery }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const formValue = form.elements.input.value;
    if (formValue.trim().length) {
      setQuery(formValue);
    } else {
      toast.error("You haven't entered anything!", {
        style: toastStyles,
      });
    }
  };

  return (
    <header className={css["header"]}>
      <Toaster position="top-right" reverseOrder={false} />
      <form className={css["form"]} onSubmit={submitHandler}>
        <input
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css["input"]}
        />
        <button type="submit" className={css["button"]}>
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
