import config from "./config/index";
import installBin from "./utils/install";
import getSelectedWallpaper from "./core/menu";
import changeWallpaper from "./core/wallpaper";
import { WALLPAPERS_DIR } from "./utils/constants";

const main = async () => {
  installBin();

  const imageName = await getSelectedWallpaper();
  await changeWallpaper(
    imageName,
    config.wallpapersDir || WALLPAPERS_DIR,
    config.animation || "fade",
    config.steps || 30,
    config.fps || 30
  );
};

main();
