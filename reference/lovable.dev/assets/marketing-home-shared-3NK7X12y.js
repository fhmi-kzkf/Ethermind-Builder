import {
    o as r
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    NF as o,
    aR as a
} from "./app-shared-6CLVfi8w.js";
import {
    i as n
} from "./vendor-react-Fx2PtaaM.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eabdaff5-d976-4337-9b66-2950a09e6e26", e._sentryDebugIdIdentifier = "sentry-dbid-eabdaff5-d976-4337-9b66-2950a09e6e26")
    })()
} catch {}
var d = r(n(), 1);

function u() {
    const e = a(),
        t = o();
    (0, d.useEffect)(() => {
        e && t.replace(`/dashboard${window.location.search}`)
    }, [e, t])
}
export {
    u as t
};