import { useParams } from "react-router";
import useAppsData from "../hooks/useAppsData";
import { FaDownload } from "react-icons/fa";
import { useContext } from "react";
import { toast } from "react-toastify";
import { InstalledAppsContext } from "../context/InstalledAppContext";

const DetailPage = () => {
  const { id } = useParams();
  // console.log(id);

  const { appData, loading } = useAppsData();
  // console.log(appData, "appData");

  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);
  // function for install button
  const handelInstallApp = () => {
    setInstalledApps([...installedApps, expectedApp]);
    toast.success(`${expectedApp.title} is installed!`);
  };
  // console.log(installedApps, "installApp");

  if (loading) {
    return (
      <div className=" h-[50vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-xl text-purple-500"></span>
      </div>
    );
  }

  //  find single data
  const expectedApp = appData.find((app) => app.id == id);
  // console.log(expectedApp, "expectedApp");

  return (
    <div className="container mx-auto my-15 px-15">
      <div className="flex  gap-12">
        <div>
          <img src={expectedApp.image} className="w-75" />
        </div>
        <div>
          <h2 className="text-3xl font-bold my-2">{expectedApp.title}</h2>
          <p className="text-gray-500 font-semibold">
            Developed by:{" "}
            <span className="text-purple-500">{expectedApp.companyName}</span>
          </p>
          <div className="flex gap-5 my-5 pt-5 border-t">
            <span className="flex flex-col justify-center items-center">
              <FaDownload className="text-purple-500 text-3xl" />
              <p>Downloads</p>
              <h4 className="text-3xl font-bold">{expectedApp.downloads}</h4>
            </span>
            <span className="flex flex-col justify-center items-center">
              <FaDownload className="text-purple-500 text-3xl" />
              <p>Average Ratings</p>
              <h4 className="text-3xl font-bold">{expectedApp.ratingAvg}</h4>
            </span>
            <span className="flex flex-col justify-center items-center">
              <FaDownload className="text-purple-500 text-3xl" />
              <p>Total Reviews</p>
              <h4 className="text-3xl font-bold">{expectedApp.reviews}</h4>
            </span>
          </div>
          <button
            onClick={handelInstallApp}
            className="btn bg-green-500 text-white mt-5"
          >
            Install Now ({expectedApp.size}MB)
          </button>
        </div>
      </div>
      <p className="mt-10 text-gray-500">
        <span className="font-bold text-black">Description: </span>
        {expectedApp.description}
      </p>
    </div>
  );
};

export default DetailPage;
