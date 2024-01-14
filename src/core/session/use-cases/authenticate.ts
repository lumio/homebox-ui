import SessionStore from "@/core/session/interfaces/session-store";
import SessionFactory from "@/core/session/interfaces/session-factory";

export default async function authenticate(sessionStore: SessionStore, sessionFactory: SessionFactory, username: string, password: string) {
    const session = await sessionFactory.authenticate(
        username,
        password
    );
    sessionStore.setSession(session);
    await sessionStore.persist();
}
