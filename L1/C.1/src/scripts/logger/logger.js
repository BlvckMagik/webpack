export const createLogger = name => {
  const logs = [];
  return {
    log(message) {
      logs.push(`log - ${name} - ${message}`);
    },
    error(errText) {
      logs.push(`error - ${name} - ${errText}`);
    },
    getLogs() {
      return logs;
    },
  };
};
