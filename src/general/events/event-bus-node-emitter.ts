import { EventBus } from "./event-bus"

export class EventBusNodeEmitter implements EventBus {
    protected handlers: Map<string, Function[]> = new Map()

    emit(eventName: string, ...args: any[]) {
        const handlers = this.handlers.get(eventName) || []
        handlers.forEach(handler => handler(...args))
    }

    on(eventName: string, handler: Function) {
        const handlers = this.handlers.get(eventName) || []
        handlers.push(handler)
        this.handlers.set(eventName, handlers)
    }
}