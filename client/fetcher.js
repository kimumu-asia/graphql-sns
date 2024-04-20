import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

const fetcher = async (method, url, ...rest) => {
  try {
    const result = await axios[method](url, ...rest);
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetcher;
