import useAppsData from "../hooks/useAppsData";
import AppCard from "../ui/AppCard";

const AppPage = () => {
  const { appData, loading } = useAppsData();

  return (
    <div className="py-15 container mx-auto">
      {/* ----header section----- */}
      <h2 className="text-5xl font-bold text-center">All Apps</h2>
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
          {appData.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppPage;
