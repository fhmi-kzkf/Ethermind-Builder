try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9b1fb257-467f-403b-a629-de273c37d857", e._sentryDebugIdIdentifier = "sentry-dbid-9b1fb257-467f-403b-a629-de273c37d857")
    })()
} catch {}
var i = e => {
    const r = typeof e.source_sign_in_provider == "string" && e.source_sign_in_provider !== "" ? e.source_sign_in_provider : e.firebase ? .sign_in_provider;
    return e.email_verified || r != null && r !== "" && r !== "password" && r !== "custom"
};
export {
    i as emailVerified
};