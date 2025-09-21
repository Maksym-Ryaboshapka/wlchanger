const checkProc = async (): Promise<boolean> => {
  const proc: Bun.Subprocess = Bun.spawn(["pgrep", "swww-daemon"]);
  const code: number = await proc.exited;

  return code ? false : true;
};

export default await checkProc();