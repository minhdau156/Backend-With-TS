"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCreatedEvent = exports.EvtMyCreatedEvent = void 0;
const event_1 = require("../model/event");
exports.EvtMyCreatedEvent = 'EvtMyCreatedEvent';
class MyCreatedEvent extends event_1.AppEvent {
    static create(payload, senderId) {
        return new MyCreatedEvent(exports.EvtMyCreatedEvent, payload, { senderId });
    }
    static from(json) {
        const { eventName, payload, id, occurredAt, senderId } = json;
        return new MyCreatedEvent(eventName, payload, { id, occurredAt, senderId });
    }
}
exports.MyCreatedEvent = MyCreatedEvent;
//# sourceMappingURL=index.js.map