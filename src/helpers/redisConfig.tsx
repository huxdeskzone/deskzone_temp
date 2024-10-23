const redis = require("redis");

const redisClient = redis.createClient({
  password: "A2lc9m2432h8riao00kv0bjeefiot5mqtzv1xqaypm8wm5yy8xl",
  socket: {
    host: "redis-15227.c277.us-east-1-3.ec2.redns.redis-cloud.com",
    port: 15227,
  },
});

redisClient.on("connect", () => {
  console.log("Connected to Redis server successfully!");
});

redisClient.on("error", (error: Error) => {
  console.error("Redis client encountered an error:", error);
});

(async () => {
  await redisClient.connect();
})();

export default redisClient;
