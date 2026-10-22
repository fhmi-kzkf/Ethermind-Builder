import "./app-shared-6CLVfi8w.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6307c2f4-dc84-4c2e-a6d2-452f2a4195b6", e._sentryDebugIdIdentifier = "sentry-dbid-6307c2f4-dc84-4c2e-a6d2-452f2a4195b6")
    })()
} catch {}

function a(e, t, r) {
    const d = t.filter(n => n.starred_at).slice(0, Math.floor(r / 2)),
        i = new Set;
    return [...d, ...e].filter(n => i.has(n.chat_id) ? !1 : (i.add(n.chat_id), !0)).slice(0, r)
}

function f(e) {
    if (!e) return 0;
    const t = new Date(e).getTime();
    return Number.isFinite(t) ? t : 0
}
export {
    a as n, f as t
};