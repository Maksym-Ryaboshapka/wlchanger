import fs from "fs";
import { extname } from "path";
import { argv } from "process";
import { HOME_DIR } from "./constants";

const installBin = async (): Promise<void> => {
  const currFile: string | undefined = argv[argv.length - 1];

  if (!currFile) {
    return;
  }

  const localBinPath = `${HOME_DIR}/.local/bin/wlchanger`;

  if (fs.existsSync(localBinPath)) {
    return;
  }

  if (extname(currFile) === ".ts") {
    return;
  }

  fs.copyFile(currFile, localBinPath, (err) => {
    if (err) console.error(err);
  });
};

export default installBin;
