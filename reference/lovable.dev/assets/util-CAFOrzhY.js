import {
    i as t
} from "./SharedInstanceWarning-pF9vztx6.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            d = new e.Error().stack;
        d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "86278e5a-35f5-4d8a-a32d-7d5ed1c8e942", e._sentryDebugIdIdentifier = "sentry-dbid-86278e5a-35f5-4d8a-a32d-7d5ed1c8e942")
    })()
} catch {}
var n = e => e.status === t.ACTIVE_HEALTHY;
export {
    n as t
};