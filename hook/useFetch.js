import axios from "axios";
import { useEffect, useState } from "react"

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { RAPID_API_KEY } from '@env';

  const rapidApikey = RAPID_API_KEY;

  const options = {
    method: 'GETMediaQueryListEvent',
    url: `https://jsearch.p.rapidapi.com/search${endpoint}`,
    headers: {
      'X-RapidAPI-Key': rapidApikey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return { data, isLoading, error, fetchData }
}

export default useFetch;