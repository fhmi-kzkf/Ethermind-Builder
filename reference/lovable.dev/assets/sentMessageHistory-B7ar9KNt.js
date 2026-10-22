try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f65dd6f7-e33b-4c80-a717-dd81353f8d0a", e._sentryDebugIdIdentifier = "sentry-dbid-f65dd6f7-e33b-4c80-a717-dd81353f8d0a")
    })()
} catch {}
var d = "chat-sent-message-history:",
    a = 1e4,
    r = e => `${d}${e}`;

function f(e) {
    if (typeof window > "u") return [];
    try {
        const t = window.localStorage.getItem(r(e));
        if (t === null) return [];
        const n = JSON.parse(t);
        return Array.isArray(n) ? n.filter(i => typeof i == "string") : []
    } catch {
        return []
    }
}

function l(e, t) {
    const n = t.trim();
    return n.length === 0 || n.length > a || e.at(-1) === n ? null : [...e, n].slice(-50)
}

function u(e, t) {
    if (typeof window > "u") return;
    const n = l(f(e), t);
    if (n !== null) try {
        window.localStorage.setItem(r(e), JSON.stringify(n))
    } catch {}
}

function o(e) {
    return e.length === 0 ? null : {
        entries: e,
        index: e.length - 1
    }
}

function c(e) {
    return e.index === 0 ? e : {
        entries: e.entries,
        index: e.index - 1
    }
}

function s(e) {
    return e.index >= e.entries.length - 1 ? null : {
        entries: e.entries,
        index: e.index + 1
    }
}

function g(e) {
    return e.entries[e.index]
}
export {
    u as a, g as i, s as n, o, c as r, f as t
};