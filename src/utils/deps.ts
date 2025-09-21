const DEPS = ["swww", "rofi"];

const checkDeps = async (): Promise<string[]> => {
  const missing: string[] = [];

  for (const pkg of DEPS) {
    const proc: Bun.Subprocess = Bun.spawn(["which", pkg], {
      stdout: "ignore",
      stderr: "ignore",
    });
    const code: number = await proc.exited;

    if (code !== 0) {
      missing.push(pkg);
    }
  }

  return missing;
};

export default await checkDeps();
