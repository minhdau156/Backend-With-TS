"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisClient = void 0;
const redis_1 = require("redis");
class RedisClient {
    static instance;
    redisClient;
    subscriberMap = {};
    constructor(connectionUrl) {
        const url = connectionUrl;
        this.redisClient = (0, redis_1.createClient)({ url });
    }
    static async init(connectionUrl) {
        if (!this.instance) {
            this.instance = new RedisClient(connectionUrl);
            await this.instance._connect();
        }
    }
    static getInstance() {
        if (!this.instance) {
            throw new Error("RedisClient instance not initialized");
        }
        return this.instance;
    }
    async _connect() {
        try {
            await this.redisClient.connect();
            console.log("Connected to redis server");
        }
        catch (error) {
            console.error(error.message);
        }
    }
    async publish(event) {
        try {
            await this.redisClient.publish(event.eventName, JSON.stringify(event.plainObject()));
        }
        catch (err) {
            console.error(err.message);
        }
    }
    async subscribe(topic, fn) {
        try {
            const subscriber = this.redisClient.duplicate();
            await subscriber.connect();
            await subscriber.subscribe(topic, fn);
            const subs = this.subscriberMap[topic] || [];
            this.subscriberMap[topic] = [...subs, subscriber];
        }
        catch (error) {
            console.error(error.message);
        }
    }
    async disconnect() {
        await this.redisClient.disconnect();
        console.log("Disconnected redis server");
    }
}
exports.RedisClient = RedisClient;
//# sourceMappingURL=redis.js.map