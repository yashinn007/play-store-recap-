import AppCard from "../../ui/AppCard";
import useAppsData from "../../hooks/useAppsData";
import { Link } from "react-router";

const TrendingApps = () => {
  const { appData, loading } = useAppsData();

  // console.log(appData, "appData");

  return (
    <div className="py-15 container mx-auto">
      {/* ----header section----- */}
      <h2 className="text-5xl font-bold text-center">Trending Apps</h2>
      <p className="text-gray-500 text-center mt-3">
        Explore All Trending Apps on the Market developed by us
      </p>
      {/* ----card section----- */}
      {loading ? (
        <div className=" h-[50vh] flex justify-center items-center">
          <span className="loading loading-spinner loading-xl text-purple-500"></span>
        </div>
      ) : (
        <div className=" pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {appData.slice(0, 9).map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      )}
      <div className="flex justify-center items-center mt-15">
        <Link to={"/apps"}>
          <button className="btn bg-purple-500 text-white">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
