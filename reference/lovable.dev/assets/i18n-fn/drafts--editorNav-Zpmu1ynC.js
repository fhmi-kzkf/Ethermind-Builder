import {
    Eb as o,
    Tb as n,
    bb as _,
    kb as t
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new a.Error().stack;
        r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "d52eccd7-b3fb-42d8-814e-fb18013a92fa", a._sentryDebugIdIdentifier = "sentry-dbid-d52eccd7-b3fb-42d8-814e-fb18013a92fa")
    })()
} catch {}
var i = document.documentElement.lang || "en",
    l = {
        __proto__: null,
        "pt-BR": () => t(() =>
            import ("../i18n-data/drafts--editorNav.pt-BR-RNR_wYz6.js"), []),
        de: () => t(() =>
            import ("../i18n-data/drafts--editorNav.de-BheKcqm2.js"), []),
        fr: () => t(() =>
            import ("../i18n-data/drafts--editorNav.fr-Dy82AAuZ.js"), []),
        es: () => t(() =>
            import ("../i18n-data/drafts--editorNav.es-BWF1KFhr.js"), []),
        it: () => t(() =>
            import ("../i18n-data/drafts--editorNav.it-CmZZmHlT.js"), []),
        hi: () => t(() =>
            import ("../i18n-data/drafts--editorNav.hi-DArozDgL.js"), []),
        id: () => t(() =>
            import ("../i18n-data/drafts--editorNav.id-BcFzDdtu.js"), []),
        th: () => t(() =>
            import ("../i18n-data/drafts--editorNav.th-B_bUHxMt.js"), []),
        ko: () => t(() =>
            import ("../i18n-data/drafts--editorNav.ko-ByWAlv49.js"), []),
        ja: () => t(() =>
            import ("../i18n-data/drafts--editorNav.ja-Bj20v7bG.js"), [])
    },
    d = i === "en" ? void 0 : n()["drafts--editorNav"];
i !== "en" && d === void 0 && (l[i] === null ? d = null : (l[i] ? .() ? ? Promise.resolve()).then(a => {
    d = a ? .default ? ? null, o()
}, () => {
    d = null, o()
}));
var v = () => d,
    s = () => i,
    f = {
        editorNav_changesReadyToPublish: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["countNumber"], " change ready to publish"
                ],
                "countPlural=other": [
                    ["countNumber"], " changes ready to publish"
                ]
            },
            f: "editorNav_changesReadyToPublish"
        },
        editorNav_createDraftHint: "Create a new draft",
        editorNav_draftAcceptNeedsUpdate: "Update the draft to catch up with the project before accepting",
        editorNav_draftAcceptReviewUpdated: "Review the updated draft before accepting it.",
        editorNav_draftAcceptWaitForUpdate: "Wait for the draft update to finish",
        editorNav_draftAgentAwaitingInput: "Lovable needs your input",
        editorNav_draftDeleted: ["Deleted ", ["name"]],
        editorNav_draftFilterAll: "All drafts",
        editorNav_draftFilterMine: "My drafts",
        editorNav_draftFilterTabsLabel: "Filter drafts",
        editorNav_renameDraftFailed: "Failed to rename draft",
        editorNav_syncDraftBeforePublishing: "Update this draft with the latest changes",
        editorNav_unpublishedProject: "Unpublished project",
        editorNav_updatesAvailable: "Updates available"
    },
    e = a => (r = {}) => _(v() ? .[a], r, s()) ? ? _(f[a], r, "en") ? ? "",
    u = e("editorNav_changesReadyToPublish"),
    p = e("editorNav_createDraftHint"),
    b = e("editorNav_draftAcceptNeedsUpdate"),
    N = e("editorNav_draftAcceptReviewUpdated"),
    h = e("editorNav_draftAcceptWaitForUpdate"),
    A = e("editorNav_draftAgentAwaitingInput"),
    m = e("editorNav_draftDeleted"),
    D = e("editorNav_draftFilterAll"),
    g = e("editorNav_draftFilterMine"),
    P = e("editorNav_draftFilterTabsLabel"),
    E = e("editorNav_renameDraftFailed"),
    y = e("editorNav_syncDraftBeforePublishing"),
    T = e("editorNav_unpublishedProject"),
    I = e("editorNav_updatesAvailable");
export {
    h as a, D as c, E as d, y as f, N as i, g as l, I as m, p as n, A as o, T as p, b as r, m as s, u as t, P as u
};