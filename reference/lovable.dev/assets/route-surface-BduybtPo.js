try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4ea2b50e-c84f-4f50-90fb-89def96c59ff", e._sentryDebugIdIdentifier = "sentry-dbid-4ea2b50e-c84f-4f50-90fb-89def96c59ff")
    })()
} catch {}

function r(e) {
    return e === "/dashboard" || e.startsWith("/dashboard/") ? "dashboard" : e.startsWith("/projects/") ? "project" : e.startsWith("/settings") ? "settings" : e.startsWith("/discover") || e.startsWith("/community") ? "discover" : "other"
}
export {
    r as t
};