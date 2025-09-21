import missing from "./utils/deps";
import isSwwwRun from "./utils/proc";
import installBin from "./utils/install";
import config from "./config/index";
import getSelectedWallpaper from "./core/menu";
import changeWallpaper from "./core/changeWallpapers";

const main = async (): Promise<void> => {
  if (missing.length > 0) {
    missing.forEach((pkg) =>
      console.error(
        `Error: ${pkg} is not installed. Please install it and try again`
      )
    );

    return;
  }

  if (!isSwwwRun) {
    console.error("Error: swww-daemon is not running");
    return;
  }

  installBin();

  const imageName = await getSelectedWallpaper(config.wallpapersDir);
  
  if (!imageName) {
    return;
  }

  await changeWallpaper({ imageName, ...config });
};

main();
