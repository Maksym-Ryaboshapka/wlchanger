import ini from "ini";
import * as fs from "fs";
import { ANIMATION, HOME_DIR, STEPS, WALLPAPERS_DIR } from "../utils/constants";

const readConfig = async () => {
  const configPath = `${HOME_DIR}/.config/wlchanger/wlchanger.conf`;

  if (!fs.existsSync(`${HOME_DIR}/.config/wlchanger/wlchanger.conf`)) {
    return {
      wallpapersDir: WALLPAPERS_DIR,
      animation: ANIMATION,
      steps: STEPS,
      fps: 30,
    };
  }

  const configFile = await Bun.file(configPath).text();
  const config = ini.parse(configFile);

  return config;
};

export default await readConfig();
