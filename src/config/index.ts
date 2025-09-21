import ini from "ini";
import * as fs from "fs";
import {
  ANIMATION,
  HOME_DIR,
  STEPS,
  FPS,
  WALLPAPERS_DIR,
} from "../utils/constants";

interface WlChangerConfig {
  wallpapersDir: string;
  animation: string;
  steps: number;
  fps: number;
}

const readConfig = async (): Promise<WlChangerConfig> => {
  const configPath = `${HOME_DIR}/.config/wlchanger/wlchanger.conf`;

  if (!fs.existsSync(`${HOME_DIR}/.config/wlchanger/wlchanger.conf`)) {
    return {
      wallpapersDir: WALLPAPERS_DIR,
      animation: ANIMATION,
      steps: STEPS,
      fps: FPS,
    };
  }

  const configFile = await Bun.file(configPath).text();
  const rawConfig = ini.parse(configFile) as Partial<WlChangerConfig>;

  return {
    wallpapersDir: rawConfig.wallpapersDir ?? WALLPAPERS_DIR,
    animation: rawConfig.animation ?? ANIMATION,
    steps: rawConfig.steps ?? STEPS,
    fps: rawConfig.fps ?? FPS,
  };
};

export default await readConfig();
