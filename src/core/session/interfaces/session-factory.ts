import Session from "@/core/session/entities/session";

export default interface SessionFactory {
    authenticate(username: string, password: string): Promise<Session>;
}
