import { AppEvent } from "../model/event";
export type MyCreatedEventPayload = {
    name: string;
};
export declare const EvtMyCreatedEvent = "EvtMyCreatedEvent";
export declare class MyCreatedEvent extends AppEvent<MyCreatedEventPayload> {
    static create(payload: MyCreatedEventPayload, senderId: string): MyCreatedEvent;
    static from(json: any): MyCreatedEvent;
}
