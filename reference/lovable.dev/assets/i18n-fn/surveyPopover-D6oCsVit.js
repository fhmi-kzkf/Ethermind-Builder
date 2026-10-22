import {
    Eb as _,
    Tb as n,
    bb as a,
    kb as r
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new o.Error().stack;
        s && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[s] = "5e957f2d-a63f-4c6b-916c-2e67a7a6c8c5", o._sentryDebugIdIdentifier = "sentry-dbid-5e957f2d-a63f-4c6b-916c-2e67a7a6c8c5")
    })()
} catch {}
var t = document.documentElement.lang || "en",
    i = {
        __proto__: null,
        "pt-BR": () => r(() =>
            import ("../i18n-data/surveyPopover.pt-BR-D-_CIYBT.js"), []),
        de: () => r(() =>
            import ("../i18n-data/surveyPopover.de-D0tFaM9T.js"), []),
        fr: () => r(() =>
            import ("../i18n-data/surveyPopover.fr-DP_hyjE0.js"), []),
        es: () => r(() =>
            import ("../i18n-data/surveyPopover.es-BKhILImN.js"), []),
        it: () => r(() =>
            import ("../i18n-data/surveyPopover.it-BXgLhmf0.js"), []),
        hi: () => r(() =>
            import ("../i18n-data/surveyPopover.hi-C5vG3nLU.js"), []),
        id: () => r(() =>
            import ("../i18n-data/surveyPopover.id-C-63soxz.js"), []),
        th: () => r(() =>
            import ("../i18n-data/surveyPopover.th-CvnafEyC.js"), []),
        ko: () => r(() =>
            import ("../i18n-data/surveyPopover.ko-BKvoHGCc.js"), []),
        ja: () => r(() =>
            import ("../i18n-data/surveyPopover.ja-B0Z-A8gQ.js"), [])
    },
    v = t === "en" ? void 0 : n().surveyPopover;
t !== "en" && v === void 0 && (i[t] === null ? v = null : (i[t] ? .() ? ? Promise.resolve()).then(o => {
    v = o ? .default ? ? null, _()
}, () => {
    v = null, _()
}));
var u = () => v,
    p = () => t,
    l = {
        surveyPopover_answerPlaceholder: "Your answer...",
        surveyPopover_answerToContinueHint: "Answer the question to continue",
        surveyPopover_bookNow: "Book now",
        surveyPopover_collapsedSubtitle: "Tap to share your thoughts",
        surveyPopover_collapsedTitle: "Tell us how it's going",
        surveyPopover_dismiss: "Dismiss",
        surveyPopover_next: "Next",
        surveyPopover_openLink: "Open link",
        surveyPopover_optionOther: "Other",
        surveyPopover_otherAnswerLabel: "Other answer",
        surveyPopover_skip: "Skip",
        surveyPopover_submit: "Submit",
        surveyPopover_submitError: "Something went wrong submitting your answers. Please try again.",
        surveyPopover_submittingHint: "Submitting your answers"
    },
    e = o => (s = {}) => a(u() ? .[o], s, p()) ? ? a(l[o], s, "en") ? ? "",
    y = e("surveyPopover_answerPlaceholder"),
    d = e("surveyPopover_answerToContinueHint"),
    b = e("surveyPopover_bookNow"),
    m = e("surveyPopover_collapsedSubtitle"),
    c = e("surveyPopover_collapsedTitle"),
    w = e("surveyPopover_dismiss"),
    E = e("surveyPopover_next"),
    f = e("surveyPopover_openLink"),
    h = e("surveyPopover_optionOther"),
    g = e("surveyPopover_otherAnswerLabel"),
    T = e("surveyPopover_skip"),
    L = e("surveyPopover_submit"),
    D = e("surveyPopover_submitError"),
    I = e("surveyPopover_submittingHint");
export {
    c as a, f as c, T as d, L as f, m as i, h as l, I as m, d as n, w as o, D as p, b as r, E as s, y as t, g as u
};