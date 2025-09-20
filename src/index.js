import missing from "./utils/deps";
import isSwwwRun from "./utils/proc";
import config from "./config/index";
import installBin from "./utils/install";
import getSelectedWallpaper from "./core/menu";
import changeWallpaper from "./core/wallpaper";
import { ANIMATION, FPS, STEPS, WALLPAPERS_DIR } from "./utils/constants";

const main = async () => {
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

  config.wallpapersDir = config.wallpapersDir ? config.wallpapersDir : WALLPAPERS_DIR;
  config.animation = config.animation ? config.animation : ANIMATION;
  config.steps = config.steps ? config.steps : STEPS;
  config.fps = config.fps ? config.fps : FPS;

  const imageName = await getSelectedWallpaper(config.wallpapersDir);
  await changeWallpaper({ imageName, ...config });
};

main();
