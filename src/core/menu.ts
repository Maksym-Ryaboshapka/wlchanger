import getImages from "../utils/getImages";

const getSelectedWallpaper = async (
  wallpapersDir: string
): Promise<string | null> => {
  const wallpapers = await getImages(wallpapersDir);

  if (wallpapers.length === 0) {
    console.log("No wallpapers found");
    return null;
  }

  const rofiInput: string = wallpapers.join("\n");

  const proc: Bun.Subprocess = Bun.spawn(
    ["rofi", "-dmenu", "-i", "-p", "Choose wallpapers: "],
    {
      stdin: new TextEncoder().encode(rofiInput),
    }
  );

  if (!proc.stdout) {
    return null;
  }

  let selected: string;

  if (typeof proc.stdout === "number") {
    const file = Bun.file(proc.stdout);
    selected = await file.text();
  } else {
    selected = await proc.stdout.text();
  }

  if ((await proc.exited) !== 0) {
    return null;
  }

  return selected.trim();
};

export default getSelectedWallpaper;
