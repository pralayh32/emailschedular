import "dotenv/config";

export const config = {
  port: parseInt(process.env.PORT || "4000", 10),
  redisUrl: process.env.REDIS_URL || "redis://localhost:6379",
 redisHost: process.env.REDISHOST || process.env.REDIS_HOST || 'localhost',
redisPort: Number(process.env.REDISPORT || process.env.REDIS_PORT) || 6379,
redisPassword: process.env.REDIS_PASSWORD || process.env.REDISPASSWORD || undefined,
redisUser: process.env.REDISUSER || process.env.REDIS_USER || 'default',
  databaseUrl: process.env.DATABASE_URL!,
  googleClientId: process.env.GOOGLE_CLIENT_ID!,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  sessionSecret: process.env.SESSION_SECRET!,
  etherealUser: process.env.ETHEREAL_USER!,
  etherealPass: process.env.ETHEREAL_PASS!,
  maxEmailsPerHour: parseInt(process.env.MAX_EMAILS_PER_HOUR || "200", 10),
  workerConcurrency: parseInt(process.env.WORKER_CONCURRENCY || "5", 10),
  emailDelayMs: parseInt(process.env.EMAIL_DELAY_MS || "2000", 10),
  backendUrl: process.env.BACKEND_URL || "http://localhost:4000",
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
};