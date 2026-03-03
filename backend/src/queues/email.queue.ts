import { Queue } from "bullmq";
import { config } from "../config";

export const EMAIL_QUEUE_NAME = "email-queue";

const connection = {
  host: config.redisHost,
  port: config.redisPort,
  username: config.redisUser || "default",
  password: config.redisPassword,
};

export const emailQueue = new Queue(EMAIL_QUEUE_NAME, { connection });