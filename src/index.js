import * as fs from "fs/promises";
import * as os from "os";

const HOME_DIR = os.homedir();
const WALLPAPERS_DIR = `${HOME_DIR}/Pictures/Wallpapers`;

const getImages = async (dir) => {
  try {
    const files = await fs.readdir(dir);
    const imageFiles = files.filter(
      (file) => file.endsWith(".jpg") || file.endsWith(".png")
    );
    return imageFiles;
  } catch (err) {
    console.error(err);
  }
};

const getSelectedWallpaper = async () => {
  const wallpapers = await getImages(WALLPAPERS_DIR);

  if (wallpapers.length === 0) {
    console.log("No wallpapers found");
    return null;
  }

  const rofiInput = wallpapers.join("\n");

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

const changeWallpaper = async (imageName, animation = "fade", steps = 30, fps = 30) => {
  if (!imageName) return;

  const imagePath = `${WALLPAPERS_DIR}/${imageName}`;

  try {
    const proc = Bun.spawn([
      "swww",
      "img",
      imagePath,
      "--transition-type",
      animation,
      "--transition-step",
      steps,
      "--transition-fps",
      fps
    ]);
    await proc.exited;
  } catch (err) {
    console.log(err);
  }
};

const main = async () => {
  const imageName = await getSelectedWallpaper();


  await changeWallpaper(imageName);
};

main();
