import * as fs from "fs/promises";

const getImages = async (dir: string): Promise<string[]> => {
  try {
    const files: string[] = await fs.readdir(dir);
    const imageFiles: string[] = files.filter(
      (file) => file.endsWith(".jpg") || file.endsWith(".png")
    );
    return imageFiles;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getImages;