const checkProc = async () => {
  const proc = Bun.spawn(["pgrep", "swww-daemon"]);
  const code = await proc.exited;

  return code ? false : true;
};

export default await checkProc();