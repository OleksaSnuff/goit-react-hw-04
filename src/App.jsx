import { useState, useEffect } from "react";
import css from "./App.module.css";
import SearchBar from "./SearchBar/SearchBar";
import fetchQuery from "./gallery-api";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import { InfinitySpin } from "react-loader-spinner";

function App() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      if (query.length > 0) {
        try {
          setLoader(true);
          setError(false);
          const fetchedData = await fetchQuery(query, currPage);
          setTotalPages(fetchedData.total_pages);
          setPhotos((photos) => [...photos, ...fetchedData.results]);
        } catch (error) {
          setError(true);
        } finally {
          setLoader(false);
        }
      }
    };
    fetchPhoto();
  }, [query, currPage]);

  const bodyRef = document.querySelector("body");
  useEffect(() => {
    if (isModalOpen) {
      bodyRef.style.overflow = "hidden";
    } else {
      bodyRef.style.overflow = "auto";
    }
  }, [isModalOpen, bodyRef]);

  const loadMore = () => {
    setCurrPage(currPage + 1);
  };

  function openModal(photo) {
    setModalPhoto(photo);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <SearchBar setQuery={setQuery} setPhotos={setPhotos} />

      {error && (
        <p className={css["error"]}>
          Opps... Something gone wrong. Try to refresh page
        </p>
      )}

      {query.length > 0 && (
        <ImageGallery photoData={photos} onClick={openModal} />
      )}

      {loader && (
        <div className={css.spiner}>
          <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      )}

      {currPage <= totalPages && <LoadMoreBtn loadMore={loadMore} />}
      {isModalOpen && (
        <ImageModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          modalPhoto={modalPhoto}
        />
      )}
    </>
  );
}

export default App;
