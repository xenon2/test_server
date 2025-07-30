// logger.js

function formatWithTimestamp(level, ...args) {
  const now = new Date().toISOString();
  return [`[${now}] [${level.toUpperCase()}]`, ...args];
}

function log(...args) {
  console.log(...formatWithTimestamp('log', ...args));
}

log.info = (...args) => {
  console.info(...formatWithTimestamp('info', ...args));
};

log.error = (...args) => {
  console.error(...formatWithTimestamp('error', ...args));
};

module.exports = log;
