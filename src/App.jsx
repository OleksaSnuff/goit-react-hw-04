import { useState, useEffect } from "react";
import css from "./App.module.css";
import SearchBar from "./SearchBar/SearchBar";
import fetchQuery from "./gallery-api";
import ImageGallery from "./ImageGallery/ImageGallery";
import { InfinitySpin } from "react-loader-spinner";

function App() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPhoto = async () => {
      if (query.length > 0) {
        try {
          setError(false);
          setLoader(true);
          const fetchedData = await fetchQuery(query);
          setPhotos(fetchedData);
        } catch (error) {
          setError(true);
        } finally {
          setLoader(false);
        }
      }
    };
    fetchPhoto();
  }, [query]);
  console.log(photos);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      {loader && (
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      )}
      {error && (
        <p className={css["error"]}>
          Opps... Something gone wrong. Try to refresh page
        </p>
      )}
      {query.length > 0 && <ImageGallery photoData={photos} />}
    </>
  );
}

export default App;
