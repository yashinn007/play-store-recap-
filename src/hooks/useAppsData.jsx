import { useEffect, useState } from "react";

export const useAppsData = () => {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setTimeout(() => {
        setAppData(data);
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);
  return { appData, loading };
};

export default useAppsData;
