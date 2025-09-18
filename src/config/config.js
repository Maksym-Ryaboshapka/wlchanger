import ini from "ini";
import * as fs from "fs";
import { HOME_DIR } from "../constants";

const readConfig = async () => {
  const configPath = `${HOME_DIR}/.config/wlchanger/wlchanger.conf`;

  if (!fs.existsSync(`${HOME_DIR}/.config/wlchanger/wlchanger.conf`)) {
    console.log(1);
    return;
  }

  const configFile = await Bun.file(configPath).text();
  const config = ini.parse(configFile);

  return config;
};

export default readConfig;