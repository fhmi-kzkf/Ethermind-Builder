import {
    Eb as r,
    Tb as d,
    bb as l,
    kb as t
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new o.Error().stack;
        n && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[n] = "42b250e6-6a94-4b2b-9586-961ba5d8ce62", o._sentryDebugIdIdentifier = "sentry-dbid-42b250e6-6a94-4b2b-9586-961ba5d8ce62")
    })()
} catch {}
var i = document.documentElement.lang || "en",
    u = {
        __proto__: null,
        "pt-BR": () => t(() =>
            import ("../i18n-data/figImport.pt-BR-Dsf3GSEv.js"), []),
        de: () => t(() =>
            import ("../i18n-data/figImport.de-Pc6lyDGo.js"), []),
        fr: () => t(() =>
            import ("../i18n-data/figImport.fr-D9NSBKgs.js"), []),
        es: () => t(() =>
            import ("../i18n-data/figImport.es-JjgTOxgf.js"), []),
        it: () => t(() =>
            import ("../i18n-data/figImport.it-D7wy8LE8.js"), []),
        hi: () => t(() =>
            import ("../i18n-data/figImport.hi-DPJ0Lx8Z.js"), []),
        id: () => t(() =>
            import ("../i18n-data/figImport.id-BjKa6fqc.js"), []),
        th: () => t(() =>
            import ("../i18n-data/figImport.th-DzL_EqHP.js"), []),
        ko: () => t(() =>
            import ("../i18n-data/figImport.ko-CcgWCTXi.js"), []),
        ja: () => t(() =>
            import ("../i18n-data/figImport.ja-DJyoVs2S.js"), [])
    },
    a = i === "en" ? void 0 : d().figImport;
i !== "en" && a === void 0 && (u[i] === null ? a = null : (u[i] ? .() ? ? Promise.resolve()).then(o => {
    a = o ? .default ? ? null, r()
}, () => {
    a = null, r()
}));
var _ = () => a,
    p = () => i,
    m = {
        figImport_companionUploadFailedDescription: "The Figma file attached, but the agent may not receive its extracted design data.",
        figImport_companionUploadFailedTitle: "Design details couldn't be uploaded",
        figImport_designTokenCount: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["countNumber"], " design token"
                ],
                "countPlural=other": [
                    ["countNumber"], " design tokens"
                ]
            },
            f: "figImport_designTokenCount"
        },
        figImport_downloadFailedDescription: "Try again in a moment.",
        figImport_downloadFailedTitle: "Could not prepare the design JSON",
        figImport_downloadJson: "Download JSON",
        figImport_imageCount: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["countNumber"], " image"
                ],
                "countPlural=other": [
                    ["countNumber"], " images"
                ]
            },
            f: "figImport_imageCount"
        },
        figImport_nodeCount: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["countNumber"], " node"
                ],
                "countPlural=other": [
                    ["countNumber"], " nodes"
                ]
            },
            f: "figImport_nodeCount"
        },
        figImport_pageCount: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["countNumber"], " page"
                ],
                "countPlural=other": [
                    ["countNumber"], " pages"
                ]
            },
            f: "figImport_pageCount"
        },
        figImport_parseFailedDescription: "It was attached, but its design details couldn't be extracted.",
        figImport_parseFailedTitle: "Couldn't read the Figma file"
    },
    e = o => (n = {}) => l(_() ? .[o], n, p()) ? ? l(m[o], n, "en") ? ? "",
    g = e("figImport_companionUploadFailedDescription"),
    c = e("figImport_companionUploadFailedTitle"),
    f = e("figImport_designTokenCount"),
    I = e("figImport_downloadFailedDescription"),
    b = e("figImport_downloadFailedTitle"),
    P = e("figImport_downloadJson"),
    T = e("figImport_imageCount"),
    D = e("figImport_nodeCount"),
    v = e("figImport_pageCount"),
    E = e("figImport_parseFailedDescription"),
    F = e("figImport_parseFailedTitle");
export {
    b as a, D as c, F as d, I as i, v as l, c as n, P as o, f as r, T as s, g as t, E as u
};