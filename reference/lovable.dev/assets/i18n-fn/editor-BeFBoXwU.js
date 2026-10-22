import {
    Eb as d,
    Tb as l,
    bb as _,
    kb as i
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new o.Error().stack;
        t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "d440eac3-4e30-43ca-a8da-5951d99a0af6", o._sentryDebugIdIdentifier = "sentry-dbid-d440eac3-4e30-43ca-a8da-5951d99a0af6")
    })()
} catch {}
var r = document.documentElement.lang || "en",
    s = {
        __proto__: null,
        "pt-BR": () => i(() =>
            import ("../i18n-data/editor.pt-BR-BTs2-x51.js"), []),
        de: () => i(() =>
            import ("../i18n-data/editor.de-L3URMUHn.js"), []),
        fr: () => i(() =>
            import ("../i18n-data/editor.fr-CwBZGMtw.js"), []),
        es: () => i(() =>
            import ("../i18n-data/editor.es-DZQExhYJ.js"), []),
        it: () => i(() =>
            import ("../i18n-data/editor.it-CIIuJ9DP.js"), []),
        hi: () => i(() =>
            import ("../i18n-data/editor.hi-C5ffPibn.js"), []),
        id: () => i(() =>
            import ("../i18n-data/editor.id-D-r2lmtZ.js"), []),
        th: () => i(() =>
            import ("../i18n-data/editor.th-B4wl_O7x.js"), []),
        ko: () => i(() =>
            import ("../i18n-data/editor.ko-BAhyMDJH.js"), []),
        ja: () => i(() =>
            import ("../i18n-data/editor.ja-BZq0IosF.js"), [])
    },
    a = r === "en" ? void 0 : l().editor;
r !== "en" && a === void 0 && (s[r] === null ? a = null : (s[r] ? .() ? ? Promise.resolve()).then(o => {
    a = o ? .default ? ? null, d()
}, () => {
    a = null, d()
}));
var n = () => a,
    p = () => r,
    c = {
        editor_addComment: "Add a comment",
        editor_chatActions: "Chat actions",
        editor_desktopView: "Desktop view",
        editor_dragToResize: "Drag to resize",
        editor_dragToResizeClickToCollapse: "Drag to resize · Click to collapse",
        editor_dragToResizeClickToExpand: "Drag to resize · Click to expand",
        editor_drawAnnotation: "Draw annotation",
        editor_editTextInline: "Edit text inline",
        editor_firstPreviewTips_stepLabel: ["Tip ", ["step"], " of ", ["total"]],
        editor_firstPreviewTips_whileYouWait: "While you wait",
        editor_homepage: "Homepage",
        editor_publish: "Publish",
        editor_refresh: "Refresh",
        editor_selectElements: "Select elements",
        editor_share: "Share",
        editor_voiceModeStop: "Stop voice mode",
        clipboard_copyFileContent: "Copy file content",
        clipboard_copyUnavailable: "Copy unavailable"
    },
    e = o => (t = {}) => _(n() ? .[o], t, p()) ? ? _(c[o], t, "en") ? ? "",
    T = e("editor_addComment"),
    m = e("editor_chatActions"),
    f = e("editor_desktopView"),
    b = e("editor_dragToResize"),
    h = e("editor_dragToResizeClickToCollapse"),
    E = e("editor_dragToResizeClickToExpand"),
    g = e("editor_drawAnnotation"),
    u = e("editor_editTextInline"),
    w = e("editor_firstPreviewTips_stepLabel"),
    D = e("editor_firstPreviewTips_whileYouWait"),
    R = e("editor_homepage"),
    y = e("editor_publish"),
    C = e("editor_refresh"),
    I = e("editor_selectElements"),
    P = e("editor_share"),
    A = e("editor_voiceModeStop"),
    L = e("clipboard_copyFileContent"),
    k = e("clipboard_copyUnavailable");
export {
    P as _, f as a, E as c, w as d, D as f, I as g, C as h, m as i, g as l, y as m, k as n, b as o, R as p, T as r, h as s, L as t, u, A as v
};