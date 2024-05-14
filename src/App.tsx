import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/search-bar/SearchBar";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/error-message/ErrorMessage";
import ImageGallery from "./components/image-gallery/ImageGallery";
import LoadMoreBtn from "./components/load-more-btn/LoadMoreBtn";
import ImageModal from "./components/image-modal/ImageModal";
import fetchServer from "./api/fotos-api";

interface FotosInterface {
  id: string;
  urls: {
    small: string;
    regular: string;
    [x: string]: any;
  };
  alt_description: string;
  [y: string]: any;
}

interface DataInterface {
  results: FotosInterface[];
  total_pages: number;
  [z: string]: any;
}

function App(): React.FC {
  const [fotos, setFotos] = useState<FotosInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [topicValue, setTopicValue] = useState<string>("");
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [modalFoto, setModalFoto] = useState<string>("");
  const [isModal, setIsModal] = useState<boolean>(false);

  useEffect(() => {
    const serverQuery = async () => {
      try {
        setError(false);
        setLoading(true);
        const data: DataInterface | undefined = await fetchServer(
          topicValue,
          page
        );
        if (data) {
          const { results, total_pages } = data;
          setFotos([...fotos, ...results]);
          setShowBtn(Boolean(total_pages && total_pages !== page));
        }
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

  const onLoadMore = (): void => {
    setPage(page + 1);
  };

  const handleClick = (value: string): void => {
    setModalFoto(value);
    setIsModal(true);
  };

  const closeModal = (): void => {
    setIsModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error && topicValue && <ErrorMessage />}
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
