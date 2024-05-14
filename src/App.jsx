import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/search-bar/SearchBar";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/error-message/ErrorMessage";
import ImageGallery from "./components/image-gallery/ImageGallery";
import LoadMoreBtn from "./components/load-more-btn/LoadMoreBtn";
import ImageModal from "./components/image-modal/ImageModal";
import fetchServer from "./api/fotos-api";

function App() {
  const [fotos, setFotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topicValue, setTopicValue] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [modalFoto, setModalFoto] = useState("");
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const serverQuery = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchServer(topicValue, page);
        const { results, total_pages } = data;
        setFotos([...fotos, ...results]);
        setShowBtn(Boolean(total_pages && total_pages !== page));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    serverQuery();
  }, [topicValue, page]);

  const onSubmit = (event) => {
    const topic = event.target.elements.topic.value.trim();
    if (topic !== topicValue) {
      setFotos([]);
      setPage(1);
      setTopicValue(topic);
    }
    event.target.reset();
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const handleClick = (value) => {
    setModalFoto(value);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage />}
      {fotos.length > 0 && (
        <ImageGallery items={fotos} handleClick={handleClick} />
      )}
      {loading && <Loader />}
      {showBtn && <LoadMoreBtn onLoadMore={onLoadMore} />}
      <ImageModal isOpen={isModal} onClose={closeModal} modalFoto={modalFoto} />
    </>
  );
}

export default App;
