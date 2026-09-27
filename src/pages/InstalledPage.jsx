import { useContext } from "react";
import { InstalledAppsContext } from "../context/InstalledAppContext";
import { toast } from "react-toastify";

const InstalledPage = () => {
  const { installedApps, setInstalledApps, recordUninstall } =
    useContext(InstalledAppsContext);

  const handelDeletBtn = (app) => {
    const newArray = installedApps.filter((iapp) => iapp.id != app.id);
    setInstalledApps(newArray);
    recordUninstall(app);
    //console.log(newArray);
    toast.error(`${app.title} is Uninstalled!`);
  };
  return (
    <div className="container mx-auto py-15">
      <h2 className="text-5xl font-bold text-center">Installed Apps</h2>
      {installedApps.length === 0 ? (
        <div className="mt-10 flex justify-center items-center h-[50vh]">
          <h5 className="text-3xl text-gray-500 font-semibold">
            No app installed
          </h5>
        </div>
      ) : (
        <div className="mt-10">
          {installedApps.map((app, index) => (
            <div
              key={index}
              className="p-4 flex justify-between items-center bg-gray-200 my-3 rounded-2xl"
            >
              <div className="flex gap-3 items-center">
                <img src={app.image} className="w-20" />
                <h2 className="text-2xl font-semibold">{app.title}</h2>
              </div>
              <button
                onClick={() => handelDeletBtn(app)}
                className="btn btn-error mr-4"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstalledPage;
