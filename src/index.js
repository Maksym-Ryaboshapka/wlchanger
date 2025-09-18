import checkDeps from "./utils/checkDeps";
import getSelectedWallpaper from "./rofi/getSelectedWallpaper";
import changeWallpaper from "./features/changeWallpaper";

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

  const imageName = await getSelectedWallpaper();
  await changeWallpaper(imageName);
};

main();
