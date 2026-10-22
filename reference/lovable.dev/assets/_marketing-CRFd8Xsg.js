import {
    Sm as r,
    dc as t,
    fc as a,
    ly as o
} from "./app-shared-6CLVfi8w.js";
import {
    q as d
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    r as i
} from "./vendor-react-Fx2PtaaM.js";
import {
    t as f
} from "./marketing-home-shared-3NK7X12y.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "b18aa013-d61f-481a-9c65-5556fcbcd7bf", e._sentryDebugIdIdentifier = "sentry-dbid-b18aa013-d61f-481a-9c65-5556fcbcd7bf")
    })()
} catch {}
var n = i();

function p() {
    const e = d().options.ssr ? .nonce;
    return f(), (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o, {
            schema: t,
            nonce: e
        }), (0, n.jsx)(o, {
            schema: a,
            nonce: e
        }), (0, n.jsx)(r, {})]
    })
}
export {
    p as component
};