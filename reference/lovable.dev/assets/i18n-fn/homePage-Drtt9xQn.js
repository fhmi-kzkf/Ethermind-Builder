import {
    Eb as _,
    Tb as c,
    bb as m,
    kb as s
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            o = new a.Error().stack;
        o && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[o] = "69841465-54d6-44c0-bd20-5a05aa424c38", a._sentryDebugIdIdentifier = "sentry-dbid-69841465-54d6-44c0-bd20-5a05aa424c38")
    })()
} catch {}
var r = document.documentElement.lang || "en",
    h = {
        __proto__: null,
        "pt-BR": () => s(() =>
            import ("../i18n-data/homePage.pt-BR-DkFBGFZ4.js"), []),
        de: () => s(() =>
            import ("../i18n-data/homePage.de-AUqzQjRW.js"), []),
        fr: () => s(() =>
            import ("../i18n-data/homePage.fr-BrY2qA6D.js"), []),
        es: () => s(() =>
            import ("../i18n-data/homePage.es-CbUEGgSd.js"), []),
        it: () => s(() =>
            import ("../i18n-data/homePage.it-BmpeuyjH.js"), []),
        hi: () => s(() =>
            import ("../i18n-data/homePage.hi-Bc3Vi5Ra.js"), []),
        id: () => s(() =>
            import ("../i18n-data/homePage.id-C2R_bPI6.js"), []),
        th: () => s(() =>
            import ("../i18n-data/homePage.th-DakYWymp.js"), []),
        ko: () => s(() =>
            import ("../i18n-data/homePage.ko-CXbC-f18.js"), []),
        ja: () => s(() =>
            import ("../i18n-data/homePage.ja-fEyv6WN2.js"), [])
    },
    t = r === "en" ? void 0 : c().homePage;
r !== "en" && t === void 0 && (h[r] === null ? t = null : (h[r] ? .() ? ? Promise.resolve()).then(a => {
    t = a ? .default ? ? null, _()
}, () => {
    t = null, _()
}));
var i = () => t,
    n = () => r,
    g = {
        homePage_cases_logoAlt: [
            ["company"], " logo"
        ],
        homePage_cases_story1AuthorRole: "Chief Innovation Officer",
        homePage_cases_story1Quote: "Lovable has saved us millions of dollars. And we’ve come out with better solutions.",
        homePage_cases_story1Stat1: "savings per year",
        homePage_cases_story1Stat2: "fewer support tickets",
        homePage_cases_story1Stat3: "remote agents connected",
        homePage_cases_story1Summary: "eXp Realty has cancelled millions in SaaS contracts for custom software built with Lovable.",
        homePage_cases_story2AuthorRole: "Co-founder",
        homePage_cases_story2Quote: "When I realized Lovable could make whatever I wanted, I was like ‘Holy shit, this is the best thing I’ve ever seen in my life’.",
        homePage_cases_story2Stat1: "ARR in 30 days",
        homePage_cases_story2Stat2: "users signed up in two days",
        homePage_cases_story2Stat3: "ARR partnership announced",
        homePage_cases_story2Summary: "These three students created an AI system from the ground up to help anyone learn faster.",
        homePage_cases_story3AuthorRole: "Chief Operating Officer",
        homePage_cases_story3Quote: "The first question we always ask is: ‘Can we do that ourselves with Lovable?’",
        homePage_cases_story3Stat1: "SaaS contracts on track to be retired",
        homePage_cases_story3Stat2: "apps deployed in under four months",
        homePage_cases_story3Stat3: "saved on the very first build",
        homePage_cases_story3Summary: "The Scion Group is all-in on Lovable, with every department building custom tools to streamline their workflows.",
        homePage_cases_story4AuthorRole: "Chief Executive Officer",
        homePage_cases_story4Quote: "With Lovable, the constraint is no longer resourcing, it’s imagination. It has changed how we operate.",
        homePage_cases_story4Stat1: "hours to build a brand new product",
        homePage_cases_story4Stat2: "employees empowered to build",
        homePage_cases_story4Stat3: "SaaS systems being retired",
        homePage_cases_story4Summary: "This healthcare platform built a new product in a weekend, and changed how its entire company ships software.",
        homePage_discoverApps: "Discover <gradient>apps</gradient>",
        homePage_discoverTemplates: "Discover <gradient>templates</gradient>",
        homePage_subtitle: "Create apps and websites by chatting with AI",
        homePage_title: ["Build something ", ["name"]],
        accountDropdown_invitations: ["Invitations (", ["count"], ")"],
        accountDropdown_settings: "Settings"
    },
    e = a => (o = {}) => m(i() ? .[a], o, n()) ? ? m(g[a], o, "en") ? ? "",
    l = e("homePage_cases_logoAlt"),
    P = e("homePage_cases_story1AuthorRole"),
    u = e("homePage_cases_story1Quote"),
    d = e("homePage_cases_story1Stat1"),
    v = e("homePage_cases_story1Stat2"),
    p = e("homePage_cases_story1Stat3"),
    S = e("homePage_cases_story1Summary"),
    f = e("homePage_cases_story2AuthorRole"),
    b = e("homePage_cases_story2Quote"),
    w = e("homePage_cases_story2Stat1"),
    A = e("homePage_cases_story2Stat2"),
    R = e("homePage_cases_story2Stat3"),
    D = e("homePage_cases_story2Summary"),
    E = e("homePage_cases_story3AuthorRole"),
    I = e("homePage_cases_story3Quote"),
    T = e("homePage_cases_story3Stat1"),
    L = e("homePage_cases_story3Stat2"),
    O = e("homePage_cases_story3Stat3"),
    Q = e("homePage_cases_story3Summary"),
    k = e("homePage_cases_story4AuthorRole"),
    V = e("homePage_cases_story4Quote"),
    C = e("homePage_cases_story4Stat1"),
    x = e("homePage_cases_story4Stat2"),
    B = e("homePage_cases_story4Stat3"),
    j = e("homePage_cases_story4Summary"),
    W = e("homePage_discoverApps"),
    q = e("homePage_discoverTemplates"),
    z = e("homePage_subtitle"),
    G = e("homePage_title"),
    H = e("accountDropdown_invitations"),
    X = e("accountDropdown_settings");
export {
    z as A, V as C, j as D, B as E, W as O, k as S, x as T, I as _, u as a, O as b, p as c, b as d, w as f, E as g, D as h, P as i, G as j, q as k, S as l, R as m, X as n, d as o, A as p, l as r, v as s, H as t, f as u, T as v, C as w, Q as x, L as y
};