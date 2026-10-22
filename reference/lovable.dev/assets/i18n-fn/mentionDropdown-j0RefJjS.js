import {
    Eb as i,
    Tb as _,
    bb as s,
    kb as e
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new n.Error().stack;
        t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "001527bc-1d29-45be-9039-ee92348be84c", n._sentryDebugIdIdentifier = "sentry-dbid-001527bc-1d29-45be-9039-ee92348be84c")
    })()
} catch {}
var a = document.documentElement.lang || "en",
    l = {
        __proto__: null,
        "pt-BR": () => e(() =>
            import ("../i18n-data/mentionDropdown.pt-BR-kwB1rlCb.js"), []),
        de: () => e(() =>
            import ("../i18n-data/mentionDropdown.de-Bh7mi2ci.js"), []),
        fr: () => e(() =>
            import ("../i18n-data/mentionDropdown.fr-B91fj3_g.js"), []),
        es: () => e(() =>
            import ("../i18n-data/mentionDropdown.es-CgNGDNVH.js"), []),
        it: () => e(() =>
            import ("../i18n-data/mentionDropdown.it-Y9_t02Om.js"), []),
        hi: () => e(() =>
            import ("../i18n-data/mentionDropdown.hi-DwfnmM_v.js"), []),
        id: () => e(() =>
            import ("../i18n-data/mentionDropdown.id-Bx68EwCa.js"), []),
        th: () => e(() =>
            import ("../i18n-data/mentionDropdown.th-Bxj8ZIrk.js"), []),
        ko: () => e(() =>
            import ("../i18n-data/mentionDropdown.ko-Ds-ApndO.js"), []),
        ja: () => e(() =>
            import ("../i18n-data/mentionDropdown.ja-Q_1L4VuP.js"), [])
    },
    r = a === "en" ? void 0 : _().mentionDropdown;
a !== "en" && r === void 0 && (l[a] === null ? r = null : (l[a] ? .() ? ? Promise.resolve()).then(n => {
    r = n ? .default ? ? null, i()
}, () => {
    r = null, i()
}));
var d = () => r,
    m = () => a,
    p = {
        mentionDropdown_assets: "Assets",
        mentionDropdown_back: "Back",
        mentionDropdown_chatTooltip: ["Chat: ", ["title"]],
        mentionDropdown_chats: "Chats",
        mentionDropdown_code: "Code",
        mentionDropdown_connectors: "Connectors",
        mentionDropdown_draftTooltip: ["Open ", ["label"], " draft"],
        mentionDropdown_drafts: "Drafts",
        mentionDropdown_fileCount: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["countNumber"], " file"
                ],
                "countPlural=other": [
                    ["countNumber"], " files"
                ]
            },
            f: "mentionDropdown_fileCount"
        },
        mentionDropdown_files: "Files",
        mentionDropdown_loading: "Loading...",
        mentionDropdown_noMatches: "No matches found",
        mentionDropdown_projects: "Projects",
        mentionDropdown_searchAssets: "Search designs...",
        mentionDropdown_searchConnectors: "Search connectors...",
        mentionDropdown_searchDrafts: "Search drafts...",
        mentionDropdown_typeToFilter: "Type to filter",
        mentionPill_loadingChat: "Loading chat…",
        skillCommand_builtByLovable: "Built by Lovable",
        skillCommand_searchPlaceholder: "Search skills...",
        skillCommand_skills: "Skills",
        skillCommand_workspaceSkills: "Workspace skills"
    },
    o = n => (t = {}) => s(d() ? .[n], t, m()) ? ? s(p[n], t, "en") ? ? "",
    D = o("mentionDropdown_assets"),
    w = o("mentionDropdown_back"),
    f = o("mentionDropdown_chatTooltip"),
    u = o("mentionDropdown_chats"),
    h = o("mentionDropdown_code"),
    v = o("mentionDropdown_connectors"),
    b = o("mentionDropdown_draftTooltip"),
    k = o("mentionDropdown_drafts"),
    C = o("mentionDropdown_fileCount"),
    E = o("mentionDropdown_files"),
    P = o("mentionDropdown_loading"),
    T = o("mentionDropdown_noMatches"),
    g = o("mentionDropdown_projects"),
    y = o("mentionDropdown_searchAssets"),
    L = o("mentionDropdown_searchConnectors"),
    I = o("mentionDropdown_searchDrafts"),
    A = o("mentionDropdown_typeToFilter"),
    O = o("mentionPill_loadingChat"),
    R = o("skillCommand_builtByLovable"),
    V = o("skillCommand_searchPlaceholder"),
    S = o("skillCommand_skills"),
    B = o("skillCommand_workspaceSkills");
export {
    B as S, A as _, h as a, V as b, k as c, P as d, T as f, I as g, L as h, u as i, C as l, y as m, w as n, v as o, g as p, f as r, b as s, D as t, E as u, O as v, S as x, R as y
};