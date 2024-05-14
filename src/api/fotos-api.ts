import axios from "axios";

interface UrlInterface {
  client_id: string;
  query: string;
  per_page: number;
  page: number;
}

async function fetchServer<T>(
  topic: string,
  page: number
): Promise<T | undefined> {
  const BASE_URL = "https://api.unsplash.com";
  const SEARCH_HEADER = "/search/photos";
  const Client_ID = "ahhcIzD1njr8w5SDdkwapZgiC8vxXk9AN6nr5KfkI3k";
  const PER_PAGE = 12;
  const url = `${BASE_URL}${SEARCH_HEADER}`;
  const params: UrlInterface = {
    client_id: Client_ID,
    query: topic,
    per_page: PER_PAGE,
    page: page,
  };
  if (topic) {
    const res = await axios.get<T>(url, { params });
    return res.data;
  }
}

export default fetchServer;
