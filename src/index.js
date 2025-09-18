import checkDeps from "./utils/checkDeps";
import readConfig from "./config/config";
import getSelectedWallpaper from "./rofi/getSelectedWallpaper";
import changeWallpaper from "./features/changeWallpaper";
import { WALLPAPERS_DIR } from "./constants";

const main = async () => {
  const missing = await checkDeps();

  if (missing.length > 0) {
    missing.forEach((pkg) =>
      console.error(
        `Error: ${pkg} is not installed. Please install it and try again`
      )
    );

    return;
  }

  let wallpapersDir;
  let animation;
  let steps;
  let fps;

  try {
    const config = await readConfig();
    wallpapersDir = config.wallpapersDir;
    animation = config.animation;
    steps = config.steps;
    fps = config.fps;
  } catch (err) {
    console.error(err);
    return;
  }

  const imageName = await getSelectedWallpaper(wallpapersDir);
  await changeWallpaper(
    imageName,
    wallpapersDir || WALLPAPERS_DIR,
    animation || "fade",
    steps || 30,
    fps || 30
  );
};

main();
