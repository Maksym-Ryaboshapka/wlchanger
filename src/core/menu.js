import { WALLPAPERS_DIR } from "../utils/constants";
import getImages from "../utils/file";

const getSelectedWallpaper = async (wallpapersDir = WALLPAPERS_DIR) => {
  const wallpaper = await getImages(wallpapersDir);

  if (wallpaper.length === 0) {
    console.log("No wallpapers found");
    return null;
  }

  const rofiInput = wallpaper.join("\n");

  const rofiProc = Bun.spawn(
    ["rofi", "-dmenu", "-i", "-p", "Choose wallpapers: "],
    {
      stdin: new TextEncoder().encode(rofiInput),
    }
  );

  const selected = await new Response(rofiProc.stdout).text();

  if ((await rofiProc.exited) !== 0) {
    return null;
  }

  return selected.trim();
};

export default getSelectedWallpaper;