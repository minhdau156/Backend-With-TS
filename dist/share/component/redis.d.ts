import { EventHandler, IEventPublisher } from "../interface";
import { RedisClientType } from "redis";
import { AppEvent } from "../model/event";
export declare class RedisClient implements IEventPublisher {
    private static instance;
    redisClient: RedisClientType;
    private subscriberMap;
    private constructor();
    static init(connectionUrl: string): Promise<void>;
    static getInstance(): RedisClient;
    private _connect;
    publish<T>(event: AppEvent<T>): Promise<void>;
    subscribe(topic: string, fn: EventHandler): Promise<void>;
    disconnect(): Promise<void>;
}
