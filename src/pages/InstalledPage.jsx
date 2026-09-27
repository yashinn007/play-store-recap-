import { useContext } from "react";
import { InstalledAppsContext } from "../context/InstalledAppContext";
import { toast } from "react-toastify";

const InstalledPage = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);

  const handelDeletBtn = (app) => {
    const newArray = installedApps.filter((iapp) => iapp.id != app.id);
    setInstalledApps(newArray);
    //console.log(newArray);
    toast.error(`${app.title} is Uninstalled!`);
  };
  return (
    <div className="container mx-auto py-15">
      <h2 className="text-5xl font-bold text-center">Installed Apps</h2>
      <div className="mt-10">
        {installedApps.map((app, index) => (
          <div
            key={index}
            className="p-4 flex justify-between items-center bg-gray-200 my-3 rounded-2xl"
          >
            <div className="flex gap-3 items-center">
              <img src={app.image} className="w-[80px]" />
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
    </div>
  );
};

export default InstalledPage;
