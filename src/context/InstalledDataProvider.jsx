import { useState } from "react";
import { InstalledAppsContext } from "./InstalledAppContext";

const InstalledDataProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  const data = {
    installedApps,
    setInstalledApps,
  };
  return <InstalledAppsContext value={data}>{children}</InstalledAppsContext>;
};

export default InstalledDataProvider;
