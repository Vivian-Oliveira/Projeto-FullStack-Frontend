import  { useState, useEffect } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  

  useEffect(() => {
    axios.get(url, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
      })
      .then((response) => {
        console.log(response)
        setData(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (data);
};

export default useRequestData;
