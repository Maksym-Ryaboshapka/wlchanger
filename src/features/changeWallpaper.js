import { WALLPAPERS_DIR } from "../constants";

const changeWallpaper = async (
  imageName,
  animation = "fade",
  steps = 30,
  fps = 30
) => {
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
      fps,
    ]);
    await proc.exited;
  } catch (err) {
    console.log(err);
  }
};

export default changeWallpaper;