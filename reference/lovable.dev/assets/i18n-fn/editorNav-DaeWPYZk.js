import {
    Eb as d,
    Tb as _,
    bb as n,
    kb as t
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new a.Error().stack;
        r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "01fbdade-2397-4bcf-ba2e-b74d4aa42632", a._sentryDebugIdIdentifier = "sentry-dbid-01fbdade-2397-4bcf-ba2e-b74d4aa42632")
    })()
} catch {}
var o = document.documentElement.lang || "en",
    v = {
        __proto__: null,
        "pt-BR": () => t(() =>
            import ("../i18n-data/editorNav.pt-BR-DxPv14sy.js"), []),
        de: () => t(() =>
            import ("../i18n-data/editorNav.de-8zlric_8.js"), []),
        fr: () => t(() =>
            import ("../i18n-data/editorNav.fr-BcMwifuN.js"), []),
        es: () => t(() =>
            import ("../i18n-data/editorNav.es-CvUnpG-d.js"), []),
        it: () => t(() =>
            import ("../i18n-data/editorNav.it-6ueQxiTK.js"), []),
        hi: () => t(() =>
            import ("../i18n-data/editorNav.hi-BeXkIjxQ.js"), []),
        id: () => t(() =>
            import ("../i18n-data/editorNav.id-BQZuOXPD.js"), []),
        th: () => t(() =>
            import ("../i18n-data/editorNav.th-SWCvxbwO.js"), []),
        ko: () => t(() =>
            import ("../i18n-data/editorNav.ko-CdmbsQlS.js"), []),
        ja: () => t(() =>
            import ("../i18n-data/editorNav.ja-HFQ1pS0W.js"), [])
    },
    i = o === "en" ? void 0 : _().editorNav;
o !== "en" && i === void 0 && (v[o] === null ? i = null : (v[o] ? .() ? ? Promise.resolve()).then(a => {
    i = a ? .default ? ? null, d()
}, () => {
    i = null, d()
}));
var s = () => i,
    c = () => o,
    l = {
        editorNav_acceptDraft: "Accept draft",
        editorNav_acceptDraftHint: "Adds this draft's edits to your project",
        editorNav_acceptDraftShort: "Accept",
        editorNav_backToPreview: "Back to preview",
        editorNav_cancelRename: "Cancel rename",
        editorNav_changesReadyToPublishNoCount: "Changes ready to publish",
        editorNav_checkingPermissions: "Checking permissions",
        editorNav_createDraft: "New draft",
        editorNav_createNewDraft: "New draft",
        editorNav_creatingDraft: "Creating draft",
        editorNav_creditsLeft: {
            d: [
                ["countPlural", "count", "plural"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["amount"], " credit left"
                ],
                "countPlural=other": [
                    ["amount"], " credits left"
                ]
            },
            f: "editorNav_creditsLeft"
        },
        editorNav_dailyCreditsLeft: {
            d: [
                ["countPlural", "count", "plural"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["amount"], " daily credit left"
                ],
                "countPlural=other": [
                    ["amount"], " daily credits left"
                ]
            },
            f: "editorNav_dailyCreditsLeft"
        },
        editorNav_deleteDraft: "Delete draft",
        editorNav_deleteDraftHint: "Removes this draft and its edits",
        editorNav_draftAccepted: "Accepted",
        editorNav_draftActionAccept: "Accept",
        editorNav_draftActionDelete: "Delete",
        editorNav_draftActionRename: "Rename",
        editorNav_draftActionUpdate: "Update",
        editorNav_draftFilterNoResults: "No drafts found",
        editorNav_draftName: "Draft name",
        editorNav_draftOperationInProgress: "A draft operation is in progress",
        editorNav_draftRenameCancel: "Cancel",
        editorNav_draftRenameDisabledHint: "Enter a new name to rename",
        editorNav_drafts: "Drafts",
        editorNav_exitFullscreen: "Exit fullscreen",
        editorNav_lovableOnLovableProjectAria: "Lovable on Lovable project",
        editorNav_mainMenu_contactSupport: "Contact support",
        editorNav_mainMenu_copiedToClipboard: "Copied to clipboard",
        editorNav_mainMenu_designSystem: "Design system",
        editorNav_mainPreview: "Preview",
        editorNav_moreDraftActions: "More draft actions",
        editorNav_needEditorAccess: "You need editor access to modify drafts",
        editorNav_openProjectInNewTab: "Open project in new tab",
        editorNav_previewOnlyCantModifyDrafts: "Preview-only viewers can't modify drafts",
        editorNav_projectAccepting: {
            d: [
                ["countPlural", "count", "plural"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": "Accepting draft",
                "countPlural=other": "Accepting drafts"
            },
            f: "editorNav_projectAccepting"
        },
        editorNav_projectBusy: "Lovable is working",
        editorNav_projectProfile_publishFirstTooltip: "Publish the project before creating a Lovable profile",
        editorNav_projectProfile_publishToProfile: "Publish to profile",
        editorNav_publishedUpToDate: "Everything is published",
        editorNav_renameDraftHint: "Gives this draft a new name",
        editorNav_saveDraftName: "Save draft name",
        editorNav_showChatPanel: "Show chat panel",
        editorNav_subview_ai: "AI",
        editorNav_switchDraft: "Switch draft",
        editorNav_syncWithBaseHint: "Brings the latest project edits into this draft",
        editorNav_updateDraftHint: "New changes are available",
        editorNav_updateDraftShort: "Update",
        draftContextPill_tooltip: ["Changes will be made to “", ["name"], "”"],
        editorNav_enterFullscreenChat: "Enter fullscreen chat",
        editorNav_hideChatPanel: "Hide chat panel"
    },
    e = a => (r = {}) => n(s() ? .[a], r, c()) ? ? n(l[a], r, "en") ? ? "",
    f = e("editorNav_acceptDraft"),
    p = e("editorNav_acceptDraftHint"),
    u = e("editorNav_acceptDraftShort"),
    m = e("editorNav_backToPreview"),
    h = e("editorNav_cancelRename"),
    D = e("editorNav_changesReadyToPublishNoCount"),
    b = e("editorNav_checkingPermissions"),
    P = e("editorNav_createDraft"),
    A = e("editorNav_creatingDraft"),
    g = e("editorNav_creditsLeft"),
    y = e("editorNav_dailyCreditsLeft"),
    w = e("editorNav_deleteDraft"),
    C = e("editorNav_deleteDraftHint"),
    T = e("editorNav_draftAccepted"),
    R = e("editorNav_draftActionAccept"),
    E = e("editorNav_draftActionDelete"),
    L = e("editorNav_draftActionRename"),
    j = e("editorNav_draftActionUpdate"),
    I = e("editorNav_draftFilterNoResults"),
    O = e("editorNav_draftName"),
    H = e("editorNav_draftOperationInProgress"),
    S = e("editorNav_draftRenameCancel"),
    M = e("editorNav_draftRenameDisabledHint"),
    F = e("editorNav_drafts"),
    k = e("editorNav_exitFullscreen"),
    B = e("editorNav_lovableOnLovableProjectAria"),
    V = e("editorNav_mainMenu_contactSupport"),
    x = e("editorNav_mainMenu_copiedToClipboard"),
    U = e("editorNav_mainMenu_designSystem"),
    W = e("editorNav_mainPreview"),
    G = e("editorNav_moreDraftActions"),
    Y = e("editorNav_needEditorAccess"),
    q = e("editorNav_openProjectInNewTab"),
    z = e("editorNav_previewOnlyCantModifyDrafts"),
    J = e("editorNav_projectAccepting"),
    K = e("editorNav_projectBusy"),
    X = e("editorNav_projectProfile_publishFirstTooltip"),
    Q = e("editorNav_projectProfile_publishToProfile"),
    Z = e("editorNav_publishedUpToDate"),
    $ = e("editorNav_renameDraftHint"),
    ee = e("editorNav_saveDraftName"),
    ae = e("editorNav_showChatPanel"),
    te = e("editorNav_subview_ai"),
    re = e("editorNav_switchDraft"),
    ie = e("editorNav_syncWithBaseHint"),
    oe = e("editorNav_updateDraftHint"),
    de = e("editorNav_updateDraftShort"),
    ne = e("draftContextPill_tooltip"),
    ve = e("editorNav_enterFullscreenChat"),
    _e = e("editorNav_hideChatPanel");
export {
    V as A, X as B, S as C, k as D, ve as E, Y as F, ae as G, Z as H, q as I, ie as J, te as K, z as L, U as M, W as N, _e as O, G as P, J as R, H as S, F as T, $ as U, Q as V, ee as W, de as X, oe as Y, E as _, m as a, I as b, b as c, g as d, y as f, R as g, T as h, u as i, x as j, B as k, P as l, C as m, f as n, h as o, w as p, re as q, p as r, D as s, ne as t, A as u, L as v, M as w, O as x, j as y, K as z
};