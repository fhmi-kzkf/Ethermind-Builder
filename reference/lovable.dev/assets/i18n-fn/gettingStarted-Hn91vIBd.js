import {
    Eb as i,
    Tb as l,
    bb as o,
    kb as r
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "af3f92fd-aa93-42ff-954c-fa6c87fae73c", e._sentryDebugIdIdentifier = "sentry-dbid-af3f92fd-aa93-42ff-954c-fa6c87fae73c")
    })()
} catch {}
var n = document.documentElement.lang || "en",
    g = {
        __proto__: null,
        "pt-BR": () => r(() =>
            import ("../i18n-data/gettingStarted.pt-BR-8ufDMmRH.js"), []),
        de: () => r(() =>
            import ("../i18n-data/gettingStarted.de-DaE2pjy5.js"), []),
        fr: () => r(() =>
            import ("../i18n-data/gettingStarted.fr-zKeF3ipg.js"), []),
        es: () => r(() =>
            import ("../i18n-data/gettingStarted.es-D25rLFgr.js"), []),
        it: () => r(() =>
            import ("../i18n-data/gettingStarted.it-DURFQ_0s.js"), []),
        hi: () => r(() =>
            import ("../i18n-data/gettingStarted.hi-C7PJu-Xf.js"), []),
        id: () => r(() =>
            import ("../i18n-data/gettingStarted.id-CcbtNGHd.js"), []),
        th: () => r(() =>
            import ("../i18n-data/gettingStarted.th-bpOTlULV.js"), []),
        ko: () => r(() =>
            import ("../i18n-data/gettingStarted.ko-BXtb3Rs-.js"), []),
        ja: () => r(() =>
            import ("../i18n-data/gettingStarted.ja-Dmmd90pp.js"), [])
    },
    _ = n === "en" ? void 0 : l().gettingStarted;
n !== "en" && _ === void 0 && (g[n] === null ? _ = null : (g[n] ? .() ? ? Promise.resolve()).then(e => {
    _ = e ? .default ? ? null, i()
}, () => {
    _ = null, i()
}));
var d = () => _,
    s = () => n,
    p = {
        gettingStarted_pickTemplate_explainer_body: "Templates are complete projects created with Lovable. Start with one that's close to your idea, then change anything with prompts.",
        gettingStarted_pickTemplate_explainer_title: "What is a template?",
        gettingStarted_role_consultant: "Consultant",
        gettingStarted_role_designer: "Designer",
        gettingStarted_role_engineer: "Engineer",
        gettingStarted_role_founder: "Founder",
        gettingStarted_role_marketingSales: "Marketing / Sales",
        gettingStarted_role_operations: "Operations",
        gettingStarted_role_other: "Other",
        gettingStarted_role_product: "Product",
        gettingStarted_stepIndicator_label: "Step indicator",
        gettingStarted_stepIndicator_stepLabel: ["Step ", ["current"], " of ", ["total"]]
    },
    t = e => (a = {}) => o(d() ? .[e], a, s()) ? ? o(p[e], a, "en") ? ? "",
    c = t("gettingStarted_pickTemplate_explainer_body"),
    f = t("gettingStarted_pickTemplate_explainer_title"),
    m = t("gettingStarted_role_consultant"),
    u = t("gettingStarted_role_designer"),
    v = t("gettingStarted_role_engineer"),
    b = t("gettingStarted_role_founder"),
    E = t("gettingStarted_role_marketingSales"),
    I = t("gettingStarted_role_operations"),
    T = t("gettingStarted_role_other"),
    h = t("gettingStarted_role_product"),
    D = t("gettingStarted_stepIndicator_label"),
    y = t("gettingStarted_stepIndicator_stepLabel");
export {
    v as a, I as c, D as d, y as f, u as i, T as l, f as n, b as o, m as r, E as s, c as t, h as u
};