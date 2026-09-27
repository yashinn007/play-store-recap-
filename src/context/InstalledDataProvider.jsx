import { useState } from "react";
import { InstalledAppsContext } from "./InstalledAppContext";

const InstalledDataProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);
  const [appActivity, setAppActivity] = useState({});

  const recordInstall = (app) => {
    setAppActivity((currentActivity) => ({
      ...currentActivity,
      [app.id]: {
        name: app.title,
        installs: (currentActivity[app.id]?.installs || 0) + 1,
        uninstalls: currentActivity[app.id]?.uninstalls || 0,
      },
    }));
  };

  const recordUninstall = (app) => {
    setAppActivity((currentActivity) => ({
      ...currentActivity,
      [app.id]: {
        name: app.title,
        installs: currentActivity[app.id]?.installs || 0,
        uninstalls: (currentActivity[app.id]?.uninstalls || 0) + 1,
      },
    }));
  };

  const data = {
    installedApps,
    setInstalledApps,
    appActivity,
    recordInstall,
    recordUninstall,
  };
  return <InstalledAppsContext value={data}>{children}</InstalledAppsContext>;
};

export default InstalledDataProvider;
