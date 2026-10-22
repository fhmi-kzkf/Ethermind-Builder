import {
    AR as i,
    HM as o,
    mM as a
} from "./app-shared-6CLVfi8w.js";
import {
    Ha as r,
    Ua as d,
    Wa as f
} from "./i18n-fn/_eager-BPNnp47q.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b140c399-7fcc-4ba2-a666-9d15a18b3a64", e._sentryDebugIdIdentifier = "sentry-dbid-b140c399-7fcc-4ba2-a666-9d15a18b3a64")
    })()
} catch {}
var c = ":lifecycle_mutation:";

function y(e) {
    if (!(e instanceof i) || e.status !== 429) return;
    const t = e.props ? .key;
    if (typeof t != "string" || !t.includes(c)) return;
    const s = e.retryAfterSeconds,
        n = s ? r({
            minutes: Math.max(1, Math.ceil(s / 60))
        }) : d();
    return o.error(f(), {
        duration: a,
        description: n
    }), n
}
export {
    y as t
};