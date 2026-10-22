import {
    Eb as _,
    Tb as l,
    bb as c,
    kb as t
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new a.Error().stack;
        r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "52024931-b466-40b5-8547-bcfa1cc1fb91", a._sentryDebugIdIdentifier = "sentry-dbid-52024931-b466-40b5-8547-bcfa1cc1fb91")
    })()
} catch {}
var s = document.documentElement.lang || "en",
    p = {
        __proto__: null,
        "pt-BR": () => t(() =>
            import ("../i18n-data/workspaceChat.pt-BR-Dj1acasT.js"), []),
        de: () => t(() =>
            import ("../i18n-data/workspaceChat.de-Br7P5XGh.js"), []),
        fr: () => t(() =>
            import ("../i18n-data/workspaceChat.fr-D1LNy64c.js"), []),
        es: () => t(() =>
            import ("../i18n-data/workspaceChat.es-BmsRm9ME.js"), []),
        it: () => t(() =>
            import ("../i18n-data/workspaceChat.it-Bo3Pl1up.js"), []),
        hi: () => t(() =>
            import ("../i18n-data/workspaceChat.hi-CxoEdvW2.js"), []),
        id: () => t(() =>
            import ("../i18n-data/workspaceChat.id-DhIwyjOW.js"), []),
        th: () => t(() =>
            import ("../i18n-data/workspaceChat.th-Bcebp_HH.js"), []),
        ko: () => t(() =>
            import ("../i18n-data/workspaceChat.ko-BlhjKiGg.js"), []),
        ja: () => t(() =>
            import ("../i18n-data/workspaceChat.ja-DhjT7zYQ.js"), [])
    },
    o = s === "en" ? void 0 : l().workspaceChat;
s !== "en" && o === void 0 && (p[s] === null ? o = null : (p[s] ? .() ? ? Promise.resolve()).then(a => {
    o = a ? .default ? ? null, _()
}, () => {
    o = null, _()
}));
var h = () => o,
    n = () => s,
    d = {
        workspaceChat_addContext: "Add context",
        workspaceChat_allChats: "All chats",
        workspaceChat_alreadyShowingPreviewTooltip: "Already showing in live preview",
        workspaceChat_contextSearchPlaceholder: "Search context...",
        workspaceChat_createdProjectCardLabel: "Created web app",
        workspaceChat_download: "Download",
        workspaceChat_filePreviewImage: "Image preview",
        workspaceChat_filterScheduled: "Scheduled",
        workspaceChat_openInNewTab: "Open in new tab",
        workspaceChat_projectCardLabel: "Web app",
        workspaceChat_referenceInChatUnavailable: "This project is no longer available",
        workspaceChat_resourceCategory_audio: "Audio",
        workspaceChat_seeAll: "See all",
        workspaceChat_seeAllChats: "See all chats",
        workspaceChat_sendMessage: "Send message",
        workspaceChat_share: "Share",
        workspaceChat_suggestionsProjectPrompt: ["Let's keep working on ", ["mention"], ". Start with a short summary of what it does today, then suggest the three highest-impact improvements I could make next. Once I pick one, make the change in the app."],
        workspaceChat_untitledProject: "Untitled project",
        workspaceChat_yourFiles: "Your files",
        workspaceChat_sendFailed: "Failed to send message",
        upNext_openChat: ["Open chat ", ["title"]],
        upNext_openProject: ["Open project ", ["title"]]
    },
    e = a => (r = {}) => c(h() ? .[a], r, n()) ? ? c(d[a], r, "en") ? ? "",
    w = e("workspaceChat_addContext"),
    C = e("workspaceChat_allChats"),
    k = e("workspaceChat_alreadyShowingPreviewTooltip"),
    v = e("workspaceChat_contextSearchPlaceholder"),
    u = e("workspaceChat_createdProjectCardLabel"),
    b = e("workspaceChat_download"),
    g = e("workspaceChat_filePreviewImage"),
    m = e("workspaceChat_filterScheduled"),
    P = e("workspaceChat_openInNewTab"),
    f = e("workspaceChat_projectCardLabel"),
    I = e("workspaceChat_referenceInChatUnavailable"),
    y = e("workspaceChat_resourceCategory_audio"),
    E = e("workspaceChat_seeAll"),
    A = e("workspaceChat_seeAllChats"),
    T = e("workspaceChat_sendMessage"),
    j = e("workspaceChat_share"),
    L = e("workspaceChat_suggestionsProjectPrompt"),
    x = e("workspaceChat_untitledProject"),
    D = e("workspaceChat_yourFiles"),
    S = e("workspaceChat_sendFailed"),
    O = e("upNext_openChat"),
    R = e("upNext_openProject");
export {
    D as S, S as _, k as a, L as b, b as c, P as d, f, A as g, E as h, C as i, g as l, y as m, R as n, v as o, I as p, w as r, u as s, O as t, m as u, T as v, x, j as y
};