import { useEffect, useState } from "react";
import AppCard from "../../ui/AppCard";

const TrendingApps = () => {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setAppData(data);
    };
    fetchData();
  }, []);

  //   console.log(appData, "appData");

  return (
    <div className="py-15">
      {/* ----header section----- */}
      <h2 className="text-5xl font-bold text-center">Trending Apps</h2>
      <p className="text-gray-500 text-center mt-3">
        Explore All Trending Apps on the Market developed by us
      </p>
      {/* ----card section----- */}
      <div className="container mx-auto pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {appData.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default TrendingApps;
