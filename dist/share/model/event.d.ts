export declare class AppEvent<Payload> {
    private readonly _eventName;
    private readonly _payload;
    private _id;
    private _occurredAt;
    private _senderId?;
    constructor(_eventName: string, _payload: Payload, dtoProps?: {
        id?: string;
        occurredAt?: Date;
        senderId?: string;
    });
    get eventName(): string;
    get id(): string;
    get occurredAt(): Date;
    get senderId(): string | undefined;
    get payload(): Payload;
    plainObject(): {
        id: string;
        occurredAt: Date;
        senderId: string | undefined;
        eventName: string;
        payload: Payload;
    };
}
