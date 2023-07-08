import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchAPI () {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios (
        'https://ghproxy.com/https://raw.githubusercontent.com/daydreamer-json/jukebox/main/db/master.json'
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return data;
}

export default FetchAPI;