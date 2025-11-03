import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

//
const isDevMode = ["development", "local", "test"].includes(
  process.env.NODE_ENV?.toLowerCase() ?? "",
);

//
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
  verbose: 5,
};

//
const levelEmojis: Record<string, string> = {
  error: "❌",
  warn: "⚠️",
  info: "ℹ️",
  http: "🌐",
  debug: "🐛",
  verbose: "🔍",
};

//
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
  verbose: "cyan",
};
winston.addColors(colors);

//
const level = () => (isDevMode ? "debug" : "info");

//
const retentionPeriod = "14d";

//
const prettyFormat = winston.format.printf((info) => {
  const timestamp = info.timestamp;
  const level = info.level;
  const message = info.message;
  const meta =
    info.meta && Object.keys(info.meta).length
      ? `\n   ${JSON.stringify(info.meta, null, 2)}`
      : "";

  return `[${level}][${timestamp}] → ${message}${meta}`;
});

//
const baseFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.errors({ stack: true }),
  winston.format.colorize({ all: true }),
  prettyFormat,
);

//
const transports = [
  new winston.transports.Console({
    handleExceptions: true,
    format: baseFormat,
  }),

  new DailyRotateFile({
    level: "error",
    filename: "logs/%DATE%-error.log",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: retentionPeriod,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),
  }),

  new DailyRotateFile({
    filename: "logs/%DATE%-combined.log",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: retentionPeriod,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),
  }),
];

//
export const logger = winston.createLogger({
  level: level(),
  levels,
  transports,
  exitOnError: false,
});
