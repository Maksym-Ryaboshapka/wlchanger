const DEPS = ["bun", "swww", "rofi"];

const checkDeps = async () => {
  const missing = [];

  for (const pkg of DEPS) {
    const proc = Bun.spawn(["which", pkg], {
      stdout: "ignore",
      stderr: "ignore",
    });
    const code = await proc.exited;

    if (code !== 0) {
      missing.push(pkg);
    }
  }

  return missing;
};

export default checkDeps;
