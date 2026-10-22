import {
    aL as n,
    iL as o,
    oL as s
} from "./app-shared-6CLVfi8w.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8a2a5ff3-3e06-4a52-a71a-eb8acade2f53", e._sentryDebugIdIdentifier = "sentry-dbid-8a2a5ff3-3e06-4a52-a71a-eb8acade2f53")
    })()
} catch {}
var a = "lovable.restorable-project-id";

function d(e) {
    s(a, e)
}

function u() {
    const e = o(a);
    return e && n(a), e || null
}
var r = typeof process < "u" && {}.NEXT_PUBLIC_GITHUB_ORG_NAME || typeof
import.meta < "u" && "GPT-Engineer-App" || void 0, i = r || "GPT-Engineer-App-Dev", b = (e, t) => `https://github.com/${t||i}/${e}`;
export {
    d as i, b as n, u as r, i as t
};