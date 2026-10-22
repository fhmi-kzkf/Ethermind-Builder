import {
    NI as r,
    QE as t,
    aB as n
} from "./app-shared-6CLVfi8w.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a693cb66-21fe-410c-9b1c-6f83ccaceea0", e._sentryDebugIdIdentifier = "sentry-dbid-a693cb66-21fe-410c-9b1c-6f83ccaceea0")
    })()
} catch {}
var s = {
        JPEG: {
            mimeType: "image/jpeg",
            extensions: [".jpg", ".jpeg"],
            displayName: "JPG"
        },
        PNG: {
            mimeType: "image/png",
            extensions: [".png"],
            displayName: "PNG"
        },
        WEBP: {
            mimeType: "image/webp",
            extensions: [".webp"],
            displayName: "WEBP"
        },
        SVG: {
            mimeType: "image/svg+xml",
            extensions: [".svg"],
            displayName: "SVG"
        }
    },
    d = {
        "image/jpeg": "jpg",
        "image/png": "png",
        "image/webp": "webp",
        "image/svg+xml": "svg"
    },
    c = () => Object.values(s).map(e => e.mimeType).join(","),
    f = () => {
        const e = Object.values(s).map(a => a.displayName);
        return new Intl.ListFormat(n(), {
            style: "long",
            type: "disjunction"
        }).format(e)
    },
    i = 1048576,
    p = 20,
    m = 256,
    l = 1024,
    o = e => t(e).isEnterpriseTierPlan ? l * i : e && e !== "free" && e !== "inactive" ? m * i : p * i,
    y = () => {
        const {
            workspace: e,
            maxUploadBytes: a
        } = r();
        return a ? ? o(e ? .plan)
    },
    u = e => Array.from(e ? .items ? ? []).filter(a => a.kind === "file").map(a => a.getAsFile()).filter(a => a !== null);
export {
    y as a, c as i, f as n, u as r, d as t
};