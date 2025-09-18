import * as fs from "fs/promises";

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

export default getImages;