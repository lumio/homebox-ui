import Session from "@/core/session/entities/session";

export default interface SessionStore {
    setSession(session: Session): void;

    persist(): Promise<Session>;

    getSession(): Promise<Session>;

    remove(): Promise<Session>;
}
