try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f1024b85-6fdf-4f67-b807-43caefe3c110", e._sentryDebugIdIdentifier = "sentry-dbid-f1024b85-6fdf-4f67-b807-43caefe3c110")
    })()
} catch {}
var o = {
        level: "off",
        sampleRate: 0
    },
    t = o,
    f = 0,
    a = new Set;

function i() {
    return t
}

function d(e, n) {
    t = e === "off" || n <= 0 ? o : {
        level: e,
        sampleRate: n
    };
    for (const s of a) s(t)
}

function u(e) {
    return a.add(e), () => {
        a.delete(e)
    }
}
var r = new Set;

function c(e) {
    for (const n of r) n(e)
}

function b(e) {
    return r.add(e), () => {
        r.delete(e)
    }
}

function l() {
    return t.level === "off" || f >= 200 ? 0 : (f += 1, t.sampleRate)
}
export {
    c as a, d as i, u as n, l as o, b as r, i as t
};