import {
    Eb as d,
    Tb as n,
    bb as s,
    kb as a
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var i = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            c = new i.Error().stack;
        c && (i._sentryDebugIds = i._sentryDebugIds || {}, i._sentryDebugIds[c] = "81e51d6b-bac8-42ec-9d0f-3bb7ea50a16b", i._sentryDebugIdIdentifier = "sentry-dbid-81e51d6b-bac8-42ec-9d0f-3bb7ea50a16b")
    })()
} catch {}
var r = document.documentElement.lang || "en",
    o = {
        __proto__: null,
        "pt-BR": () => a(() =>
            import ("../i18n-data/creditLimitReached.pt-BR-D7WDM02P.js"), []),
        de: () => a(() =>
            import ("../i18n-data/creditLimitReached.de-BeXpH5_Y.js"), []),
        fr: () => a(() =>
            import ("../i18n-data/creditLimitReached.fr-rEQjDRR4.js"), []),
        es: () => a(() =>
            import ("../i18n-data/creditLimitReached.es-iPH06lY3.js"), []),
        it: () => a(() =>
            import ("../i18n-data/creditLimitReached.it-D5gBLUVQ.js"), []),
        hi: () => a(() =>
            import ("../i18n-data/creditLimitReached.hi-DP8zSG0z.js"), []),
        id: () => a(() =>
            import ("../i18n-data/creditLimitReached.id-wz8RcpLR.js"), []),
        th: () => a(() =>
            import ("../i18n-data/creditLimitReached.th-BZ8thqLm.js"), []),
        ko: () => a(() =>
            import ("../i18n-data/creditLimitReached.ko-iPQibyt-.js"), []),
        ja: () => a(() =>
            import ("../i18n-data/creditLimitReached.ja-DLk0npP4.js"), [])
    },
    t = r === "en" ? void 0 : n().creditLimitReached;
r !== "en" && t === void 0 && (o[r] === null ? t = null : (o[r] ? .() ? ? Promise.resolve()).then(i => {
    t = i ? .default ? ? null, d()
}, () => {
    t = null, d()
}));
var _ = () => t,
    m = () => r,
    l = {
        creditLimitReached_applicability_aiFeatures: "AI features",
        creditLimitReached_applicability_buildMode: "Build mode",
        creditLimitReached_applicability_cloud: "Lovable Cloud",
        creditLimitReached_applicability_planMode: "Plan mode",
        creditLimitReached_applicability_visualEdits: "Visual edits",
        creditLimitReached_blocked_aiFeatures_canManage: "AI features are blocked for matching projects. Raise or disable the limit to continue.",
        creditLimitReached_blocked_aiFeatures_noPermission: "AI features are blocked for matching projects. Ask a workspace owner or admin to raise or disable the limit.",
        creditLimitReached_blocked_buildTime_canManage: "Building is blocked. Raise or disable the limit to continue.",
        creditLimitReached_blocked_buildTime_noPermission: "Building is blocked. Ask a workspace owner or admin to raise or disable the limit.",
        creditLimitReached_blocked_cloud_canManage: "Lovable Cloud usage is blocked for matching projects. Raise or disable the limit to continue.",
        creditLimitReached_blocked_cloud_noPermission: "Lovable Cloud usage is blocked for matching projects. Ask a workspace owner or admin to raise or disable the limit.",
        creditLimitReached_blocked_genericAccessToken_canManage: "Usage through this access token is blocked. Raise or disable the limit to continue.",
        creditLimitReached_blocked_genericAccessToken_noPermission: "Usage through this access token is blocked. Ask a workspace owner or admin to raise or disable the limit.",
        creditLimitReached_blocked_genericProject_canManage: "Building, Run usage, Lovable Cloud, AI features, and metered connector requests are blocked for this project. Raise or disable the limit to continue.",
        creditLimitReached_blocked_genericProject_noPermission: "Building, Run usage, Lovable Cloud, AI features, and metered connector requests are blocked for this project. Ask a workspace owner or admin to raise or disable the limit.",
        creditLimitReached_blocked_genericUser_canManage: "Building is blocked for you in this workspace. Raise or disable the limit to continue.",
        creditLimitReached_blocked_genericUser_noPermission: "Building is blocked for you in this workspace. Ask a workspace owner or admin to raise or disable the limit.",
        creditLimitReached_blocked_genericWorkspace_canManage: "Building, Run usage, Lovable Cloud, AI features, and metered connector requests are blocked for this workspace. Raise or disable the limit to continue.",
        creditLimitReached_blocked_genericWorkspace_noPermission: "Building, Run usage, Lovable Cloud, AI features, and metered connector requests are blocked for this workspace. Ask a workspace owner or admin to raise or disable the limit.",
        creditLimitReached_blocked_generic_canManage: "Credit usage is blocked. Raise or disable the limit to continue.",
        creditLimitReached_blocked_generic_noPermission: "Credit usage is blocked. Ask a workspace owner or admin to raise or disable the limit.",
        creditLimitReached_blocked_runTimeWithConnectors_canManage: "Run usage is blocked, including Lovable Cloud and AI features and metered connector requests for matching projects. Raise or disable the limit to continue.",
        creditLimitReached_blocked_runTimeWithConnectors_noPermission: "Run usage is blocked, including Lovable Cloud and AI features and metered connector requests for matching projects. Ask a workspace owner or admin to raise or disable the limit.",
        creditLimitReached_blocked_runTime_canManage: "Run usage is blocked, including Lovable Cloud and AI features for matching projects. Raise or disable the limit to continue.",
        creditLimitReached_blocked_runTime_noPermission: "Run usage is blocked, including Lovable Cloud and AI features for matching projects. Ask a workspace owner or admin to raise or disable the limit.",
        creditLimitReached_blocked_subject_canManage: [
            ["subject"], " usage is blocked. Raise or disable the limit to continue."
        ],
        creditLimitReached_blocked_subject_noPermission: [
            ["subject"], " usage is blocked. Ask a workspace owner or admin to raise or disable the limit."
        ],
        creditLimitReached_noPermission: "Ask a workspace owner or admin to raise or disable the limit.",
        creditLimitReached_requestIncrease_alreadyPendingDescription: "A request to raise this limit is already awaiting admin review. You'll be able to continue once the limit is raised.",
        creditLimitReached_requestIncrease_alreadyPendingTitle: "Request already pending",
        creditLimitReached_requestIncrease_amountLabel: "New limit (credits)",
        creditLimitReached_requestIncrease_amountPlaceholder: "Enter the new limit in credits",
        creditLimitReached_requestIncrease_back: "Back",
        creditLimitReached_requestIncrease_button: "Request an increase",
        creditLimitReached_requestIncrease_currentLimit: ["Current limit: ", ["amount"], " credits"],
        creditLimitReached_requestIncrease_description: "Send a request to your workspace admins to raise this limit.",
        creditLimitReached_requestIncrease_invalidAmount: ["Enter a limit above ", ["amount"], " credits"],
        creditLimitReached_requestIncrease_reasonLabel: "Reason (optional)",
        creditLimitReached_requestIncrease_reasonPlaceholder: "Let admins know why you need a higher limit",
        creditLimitReached_requestIncrease_sentDescription: "Your request has been submitted for admin review. You'll be able to continue once the limit is raised.",
        creditLimitReached_requestIncrease_sentTitle: "Request sent",
        creditLimitReached_requestIncrease_submit: "Send request",
        creditLimitReached_requestIncrease_title: "Request a limit increase",
        creditLimitReached_scopeDescription_manager_apiKey: "This access token has reached its credit limit.",
        creditLimitReached_scopeDescription_manager_project: "This project has reached its credit limit.",
        creditLimitReached_scopeDescription_manager_user: "You've reached your personal credit limit in this workspace. You can update member credit limits from settings.",
        creditLimitReached_scopeDescription_manager_workspace: "This workspace has reached its credit limit.",
        creditLimitReached_scopeDescription_member_apiKey: "This access token has reached its credit limit.",
        creditLimitReached_scopeDescription_member_project: "This project has reached its credit limit.",
        creditLimitReached_scopeDescription_member_user: "You've reached your personal credit limit in this workspace.",
        creditLimitReached_scopeDescription_member_workspace: "This workspace has reached its credit limit.",
        creditLimitReached_scope_accessToken: "Access token",
        creditLimitReached_scope_personal: "Personal",
        creditLimitReached_title: "Credit limit reached",
        creditLimitReached_title_withApplicability: [
            ["applicability"], " credit limit reached"
        ]
    },
    e = i => (c = {}) => s(_() ? .[i], c, m()) ? ? s(l[i], c, "en") ? ? "",
    u = e("creditLimitReached_applicability_aiFeatures"),
    b = e("creditLimitReached_applicability_buildMode"),
    R = e("creditLimitReached_applicability_cloud"),
    L = e("creditLimitReached_applicability_planMode"),
    p = e("creditLimitReached_applicability_visualEdits"),
    k = e("creditLimitReached_blocked_aiFeatures_canManage"),
    g = e("creditLimitReached_blocked_aiFeatures_noPermission"),
    v = e("creditLimitReached_blocked_buildTime_canManage"),
    I = e("creditLimitReached_blocked_buildTime_noPermission"),
    P = e("creditLimitReached_blocked_cloud_canManage"),
    q = e("creditLimitReached_blocked_cloud_noPermission"),
    w = e("creditLimitReached_blocked_genericAccessToken_canManage"),
    T = e("creditLimitReached_blocked_genericAccessToken_noPermission"),
    y = e("creditLimitReached_blocked_genericProject_canManage"),
    f = e("creditLimitReached_blocked_genericProject_noPermission"),
    A = e("creditLimitReached_blocked_genericUser_canManage"),
    D = e("creditLimitReached_blocked_genericUser_noPermission"),
    M = e("creditLimitReached_blocked_genericWorkspace_canManage"),
    j = e("creditLimitReached_blocked_genericWorkspace_noPermission"),
    E = e("creditLimitReached_blocked_generic_canManage"),
    C = e("creditLimitReached_blocked_generic_noPermission"),
    B = e("creditLimitReached_blocked_runTimeWithConnectors_canManage"),
    W = e("creditLimitReached_blocked_runTimeWithConnectors_noPermission"),
    V = e("creditLimitReached_blocked_runTime_canManage"),
    O = e("creditLimitReached_blocked_runTime_noPermission"),
    F = e("creditLimitReached_blocked_subject_canManage"),
    U = e("creditLimitReached_blocked_subject_noPermission"),
    K = e("creditLimitReached_noPermission"),
    Y = e("creditLimitReached_requestIncrease_alreadyPendingDescription"),
    S = e("creditLimitReached_requestIncrease_alreadyPendingTitle"),
    x = e("creditLimitReached_requestIncrease_amountLabel"),
    N = e("creditLimitReached_requestIncrease_amountPlaceholder"),
    z = e("creditLimitReached_requestIncrease_back"),
    G = e("creditLimitReached_requestIncrease_button"),
    H = e("creditLimitReached_requestIncrease_currentLimit"),
    J = e("creditLimitReached_requestIncrease_description"),
    Q = e("creditLimitReached_requestIncrease_invalidAmount"),
    X = e("creditLimitReached_requestIncrease_reasonLabel"),
    Z = e("creditLimitReached_requestIncrease_reasonPlaceholder"),
    $ = e("creditLimitReached_requestIncrease_sentDescription"),
    ee = e("creditLimitReached_requestIncrease_sentTitle"),
    ie = e("creditLimitReached_requestIncrease_submit"),
    ae = e("creditLimitReached_requestIncrease_title"),
    ce = e("creditLimitReached_scopeDescription_manager_apiKey"),
    te = e("creditLimitReached_scopeDescription_manager_project"),
    re = e("creditLimitReached_scopeDescription_manager_user"),
    de = e("creditLimitReached_scopeDescription_manager_workspace"),
    se = e("creditLimitReached_scopeDescription_member_apiKey"),
    oe = e("creditLimitReached_scopeDescription_member_project"),
    ne = e("creditLimitReached_scopeDescription_member_user"),
    _e = e("creditLimitReached_scopeDescription_member_workspace"),
    me = e("creditLimitReached_scope_accessToken"),
    le = e("creditLimitReached_scope_personal"),
    he = e("creditLimitReached_title"),
    ue = e("creditLimitReached_title_withApplicability");
export {
    le as $, S as A, $ as B, W as C, U as D, F as E, H as F, te as G, ie as H, J as I, se as J, re as K, Q as L, N as M, z as N, K as O, G as P, me as Q, X as R, B as S, O as T, ae as U, ee as V, ce as W, ne as X, oe as Y, _e as Z, D as _, p as a, E as b, v as c, q as d, he as et, w as f, A as g, f as h, L as i, x as j, Y as k, I as l, y as m, b as n, k as o, T as p, de as q, R as r, g as s, u as t, ue as tt, P as u, M as v, V as w, C as x, j as y, Z as z
};