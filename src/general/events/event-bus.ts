export interface EventBus {
    emit(eventName: string, ...args: any[]): void
    on(eventName: string, handler: Function): void
}