import { Queue } from "bullmq";
import { config } from "../config";

export const EMAIL_QUEUE_NAME = "email-queue";

console.log("Redis connection config:", {
  host: config.redisHost,
  port: config.redisPort,
  hasPassword: !!config.redisPassword,
});

const connection = {
  host: config.redisHost,
  port: config.redisPort,
  username: config.redisUser || "default",
  password: config.redisPassword,
};

let queueInstance: Queue;

try {
  queueInstance = new Queue(EMAIL_QUEUE_NAME, { connection });
  queueInstance.on("error", (err) => {
    console.error("Queue error:", err.message);
  });
} catch (err) {
  console.error("Queue failed to initialize:", err);
  queueInstance = null as unknown as Queue;
}

export const emailQueue = queueInstance;