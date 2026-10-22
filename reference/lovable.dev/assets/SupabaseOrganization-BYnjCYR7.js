try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5f2afeac-b522-481e-93b6-e3d3b906ef3b", e._sentryDebugIdIdentifier = "sentry-dbid-5f2afeac-b522-481e-93b6-e3d3b906ef3b")
    })()
} catch {}
var d;
(function(e) {
    e.status = (function(n) {
        return n.CONNECTED = "connected", n.FAILED = "failed", n.NEEDS_REFRESH = "needs_refresh", n
    })({})
})(d || (d = {}));
export {
    d as t
};