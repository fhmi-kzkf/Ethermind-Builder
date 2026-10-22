try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "55fafd1c-d9a7-47be-95ac-d4e01f63c91b", e._sentryDebugIdIdentifier = "sentry-dbid-55fafd1c-d9a7-47be-95ac-d4e01f63c91b")
    })()
} catch {}
var f = "active-workspace-offer-visit",
    n = 18e5,
    o = 6048e5,
    i;

function c(e = Date.now()) {
    try {
        const t = JSON.parse(sessionStorage.getItem(f) ? ? "null");
        if (t && Number.isFinite(t.lastActive) && e - t.lastActive < n) return t
    } catch {
        if (i && e - i.lastActive < n) return i
    }
    return {
        lastActive: e
    }
}

function d(e) {
    i = e;
    try {
        sessionStorage.setItem(f, JSON.stringify(e))
    } catch {
        return
    }
}

function l(e, t) {
    const s = `active-offer-${t}-`;
    return Math.max(0, ...(e ? ? []).filter(r => r.startsWith(s)).map(r => {
        const a = Number(r.slice(s.length).replace(/-v1$/, ""));
        return Number.isFinite(a) ? a + o : 0
    }))
}
export {
    d as i, l as n, c as r, o as t
};