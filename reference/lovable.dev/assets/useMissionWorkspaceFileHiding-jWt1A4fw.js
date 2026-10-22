import {
    wj as t
} from "./app-shared-6CLVfi8w.js";
import {
    V as a
} from "./flag-catalog-BJaXoOeP.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0345bd82-6970-4da2-9ad7-1cbfb8e7092e", e._sentryDebugIdIdentifier = "sentry-dbid-0345bd82-6970-4da2-9ad7-1cbfb8e7092e")
    })()
} catch {}
var i = "text/markdown";

function d(e) {
    return e ? .created_via === "agent" && e.mime_type === i && e.filename ? .startsWith("mission_lov_automation_") === !0
}

function r() {
    return t(a).enabled
}
export {
    d as n, r as t
};