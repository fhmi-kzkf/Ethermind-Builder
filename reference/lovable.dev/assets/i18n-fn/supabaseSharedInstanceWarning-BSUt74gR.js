import {
    Eb as o,
    Tb as _,
    bb as c,
    kb as a
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "ea439ea3-935a-4293-9467-e8ee93e5323a", e._sentryDebugIdIdentifier = "sentry-dbid-ea439ea3-935a-4293-9467-e8ee93e5323a")
    })()
} catch {}
var t = document.documentElement.lang || "en",
    d = {
        __proto__: null,
        "pt-BR": () => a(() =>
            import ("../i18n-data/supabaseSharedInstanceWarning.pt-BR-HgFs77m9.js"), []),
        de: () => a(() =>
            import ("../i18n-data/supabaseSharedInstanceWarning.de-Cfdk149V.js"), []),
        fr: () => a(() =>
            import ("../i18n-data/supabaseSharedInstanceWarning.fr-DFigm0Zi.js"), []),
        es: () => a(() =>
            import ("../i18n-data/supabaseSharedInstanceWarning.es-CM_sk8-c.js"), []),
        it: () => a(() =>
            import ("../i18n-data/supabaseSharedInstanceWarning.it-Dl2CcFK5.js"), []),
        hi: () => a(() =>
            import ("../i18n-data/supabaseSharedInstanceWarning.hi-CRJslerO.js"), []),
        id: () => a(() =>
            import ("../i18n-data/supabaseSharedInstanceWarning.id-CDQexdU3.js"), []),
        th: () => a(() =>
            import ("../i18n-data/supabaseSharedInstanceWarning.th-mKCcvkAw.js"), []),
        ko: () => a(() =>
            import ("../i18n-data/supabaseSharedInstanceWarning.ko-9Sr76x5I.js"), []),
        ja: () => a(() =>
            import ("../i18n-data/supabaseSharedInstanceWarning.ja-kuX6QOZo.js"), [])
    },
    r = t === "en" ? void 0 : _().supabaseSharedInstanceWarning;
t !== "en" && r === void 0 && (d[t] === null ? r = null : (d[t] ? .() ? ? Promise.resolve()).then(e => {
    r = e ? .default ? ? null, o()
}, () => {
    r = null, o()
}));
var i = () => r,
    p = () => t,
    h = {
        supabaseSharedInstanceWarning_consequence: "Projects sharing a Supabase instance overwrite each other's secrets and can break each other's integrations.",
        supabaseSharedInstanceWarning_infotipLabel: "Supabase instance already connected to other Lovable projects",
        supabaseSharedInstanceWarning_names: ["Already connected to ", ["projects"], "."],
        supabaseSharedInstanceWarning_namesAndBoth: ["Already connected to ", ["projects"], " and other projects in this and other workspaces."],
        supabaseSharedInstanceWarning_namesAndMoreInWorkspace: ["Already connected to ", ["projects"], " and other projects in this workspace."],
        supabaseSharedInstanceWarning_namesAndOtherWorkspaces: ["Already connected to ", ["projects"], " and projects in other workspaces."],
        supabaseSharedInstanceWarning_noNamesBoth: "Already connected to projects in this and other workspaces.",
        supabaseSharedInstanceWarning_noNamesMoreInWorkspace: "Already connected to other projects in this workspace.",
        supabaseSharedInstanceWarning_noNamesOtherWorkspaces: "Already connected to projects in other workspaces."
    },
    n = e => (s = {}) => c(i() ? .[e], s, p()) ? ? c(h[e], s, "en") ? ? "",
    b = n("supabaseSharedInstanceWarning_consequence"),
    u = n("supabaseSharedInstanceWarning_infotipLabel"),
    l = n("supabaseSharedInstanceWarning_names"),
    g = n("supabaseSharedInstanceWarning_namesAndBoth"),
    W = n("supabaseSharedInstanceWarning_namesAndMoreInWorkspace"),
    m = n("supabaseSharedInstanceWarning_namesAndOtherWorkspaces"),
    S = n("supabaseSharedInstanceWarning_noNamesBoth"),
    A = n("supabaseSharedInstanceWarning_noNamesMoreInWorkspace"),
    v = n("supabaseSharedInstanceWarning_noNamesOtherWorkspaces");
export {
    W as a, A as c, g as i, v as l, u as n, m as o, l as r, S as s, b as t
};