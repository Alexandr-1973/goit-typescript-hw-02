import axios from "axios";

async function fetchServer(topic, page) {
  const BASE_URL = "https://api.unsplash.com";
  const SEARCH_HEADER = "/search/photos";
  const Client_ID = "ahhcIzD1njr8w5SDdkwapZgiC8vxXk9AN6nr5KfkI3k";
  const PER_PAGE = 12;
  const url = `${BASE_URL}${SEARCH_HEADER}`;
  const params = {
    client_id: Client_ID,
    query: topic,
    per_page: PER_PAGE,
    page: page,
  };
  const res = await axios.get(url, { params });
  return res.data;
}

export default fetchServer;
