const changeWallpaper = async ({
  imageName,
  wallpapersDir,
  animation,
  steps,
  fps,
}) => {
  if (!imageName) return;

  const imagePath = `${wallpapersDir}/${imageName}`;

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
