import {
    Eb as s,
    Tb as c,
    bb as i,
    kb as t
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "498c9470-daac-44c8-8c40-cb551d44770f", e._sentryDebugIdIdentifier = "sentry-dbid-498c9470-daac-44c8-8c40-cb551d44770f")
    })()
} catch {}
var _ = document.documentElement.lang || "en",
    n = {
        __proto__: null,
        "pt-BR": () => t(() =>
            import ("../i18n-data/createForm.pt-BR-CQKRvbqM.js"), []),
        de: () => t(() =>
            import ("../i18n-data/createForm.de-BUkDw_rt.js"), []),
        fr: () => t(() =>
            import ("../i18n-data/createForm.fr-ws0wFBbK.js"), []),
        es: () => t(() =>
            import ("../i18n-data/createForm.es-DxGwWvC6.js"), []),
        it: () => t(() =>
            import ("../i18n-data/createForm.it-DMmQX_F7.js"), []),
        hi: () => t(() =>
            import ("../i18n-data/createForm.hi-DJdmBEWo.js"), []),
        id: () => t(() =>
            import ("../i18n-data/createForm.id-Cq6un7tw.js"), []),
        th: () => t(() =>
            import ("../i18n-data/createForm.th-5OhS1_1F.js"), []),
        ko: () => t(() =>
            import ("../i18n-data/createForm.ko-D9Q6dy5l.js"), []),
        ja: () => t(() =>
            import ("../i18n-data/createForm.ja--b2viI3u.js"), [])
    },
    o = _ === "en" ? void 0 : c().createForm;
_ !== "en" && o === void 0 && (n[_] === null ? o = null : (n[_] ? .() ? ? Promise.resolve()).then(e => {
    o = e ? .default ? ? null, s()
}, () => {
    o = null, s()
}));
var l = () => o,
    m = () => _,
    p = {
        createForm_templatesDialog_loadError: "Couldn't load projects",
        createForm_templatesDialog_noSearchResults: "No matches found.",
        createForm_templatesDialog_retry: "Try again",
        createForm_templatesDialog_searchDesignSystems: "Search design systems",
        createForm_templatesDialog_searchTemplates: "Search templates",
        createForm_zipInspection_contents: "Archive contents",
        createForm_zipInspection_files: "Files in this ZIP",
        createForm_zipInspection_summary: ["Files: ", ["count"], " · Declared extracted size: ", ["size"]],
        createForm_zipInspection_truncated: ["Showing the first 100 of ", ["count"], " files."]
    },
    a = e => (r = {}) => i(l() ? .[e], r, m()) ? ? i(p[e], r, "en") ? ? "",
    D = a("createForm_templatesDialog_loadError"),
    g = a("createForm_templatesDialog_noSearchResults"),
    F = a("createForm_templatesDialog_retry"),
    u = a("createForm_templatesDialog_searchDesignSystems"),
    I = a("createForm_templatesDialog_searchTemplates"),
    f = a("createForm_zipInspection_contents"),
    E = a("createForm_zipInspection_files"),
    h = a("createForm_zipInspection_summary"),
    v = a("createForm_zipInspection_truncated");
export {
    I as a, h as c, u as i, v as l, g as n, f as o, F as r, E as s, D as t
};