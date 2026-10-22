try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "04ed7b22-44e0-46db-944c-574328620c20", e._sentryDebugIdIdentifier = "sentry-dbid-04ed7b22-44e0-46db-944c-574328620c20")
    })()
} catch {}

function t() {
    if (typeof document > "u") return "";
    for (const e of Array.from(document.scripts))
        if (e.nonce) return e.nonce;
    return ""
}
export {
    t
};