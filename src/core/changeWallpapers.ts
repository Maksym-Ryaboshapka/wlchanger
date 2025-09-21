const changeWallpaper = async ({
  imageName,
  wallpapersDir,
  animation,
  steps,
  fps,
}: {
  imageName: string;
  wallpapersDir: string;
  animation: string;
  steps: number;
  fps: number;
}): Promise<void> => {
  if (!imageName) return;

  const imagePath = `${wallpapersDir}/${imageName}`;

  try {
    Bun.spawn([
      "swww",
      "img",
      imagePath,
      "--transition-type",
      animation,
      "--transition-step",
      steps.toString(),
      "--transition-fps",
      fps.toString(),
    ]);
  } catch (err) {
    console.log(err);
    return;
  }
};

export default changeWallpaper;
