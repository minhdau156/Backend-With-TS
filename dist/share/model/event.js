"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEvent = void 0;
const uuid_1 = require("uuid");
class AppEvent {
    _eventName;
    _payload;
    _id;
    _occurredAt;
    _senderId;
    constructor(_eventName, _payload, dtoProps) {
        this._eventName = _eventName;
        this._payload = _payload;
        this._id = dtoProps?.id ?? (0, uuid_1.v7)();
        this._occurredAt = dtoProps?.occurredAt ?? new Date();
        this._senderId = dtoProps?.senderId;
    }
    get eventName() {
        return this._eventName;
    }
    get id() {
        return this._id;
    }
    get occurredAt() {
        return this._occurredAt;
    }
    get senderId() {
        return this._senderId;
    }
    get payload() {
        return this._payload;
    }
    plainObject() {
        return {
            id: this._id,
            occurredAt: this._occurredAt,
            senderId: this._senderId,
            eventName: this._eventName,
            payload: this._payload,
        };
    }
}
exports.AppEvent = AppEvent;
//# sourceMappingURL=event.js.map