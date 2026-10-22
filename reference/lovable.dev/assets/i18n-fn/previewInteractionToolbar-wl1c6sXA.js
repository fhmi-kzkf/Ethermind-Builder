import {
    Eb as t,
    Tb as _,
    bb as l,
    kb as r
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new o.Error().stack;
        a && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[a] = "b09cd3f8-e42e-488a-941c-ce34844e0a4f", o._sentryDebugIdIdentifier = "sentry-dbid-b09cd3f8-e42e-488a-941c-ce34844e0a4f")
    })()
} catch {}
var i = document.documentElement.lang || "en",
    c = {
        __proto__: null,
        "pt-BR": () => r(() =>
            import ("../i18n-data/previewInteractionToolbar.pt-BR-qktHt8Xe.js"), []),
        de: () => r(() =>
            import ("../i18n-data/previewInteractionToolbar.de-DIW-v5iU.js"), []),
        fr: () => r(() =>
            import ("../i18n-data/previewInteractionToolbar.fr-BcJsTGlo.js"), []),
        es: () => r(() =>
            import ("../i18n-data/previewInteractionToolbar.es-CuaWW2ke.js"), []),
        it: () => r(() =>
            import ("../i18n-data/previewInteractionToolbar.it-VbhmWeBa.js"), []),
        hi: () => r(() =>
            import ("../i18n-data/previewInteractionToolbar.hi-BCLthwCb.js"), []),
        id: () => r(() =>
            import ("../i18n-data/previewInteractionToolbar.id-CNrfpEpo.js"), []),
        th: () => r(() =>
            import ("../i18n-data/previewInteractionToolbar.th-CAm_DwpC.js"), []),
        ko: () => r(() =>
            import ("../i18n-data/previewInteractionToolbar.ko-CCNBctOx.js"), []),
        ja: () => r(() =>
            import ("../i18n-data/previewInteractionToolbar.ja-Co7gbcAD.js"), [])
    },
    n = i === "en" ? void 0 : _().previewInteractionToolbar;
i !== "en" && n === void 0 && (c[i] === null ? n = null : (c[i] ? .() ? ? Promise.resolve()).then(o => {
    n = o ? .default ? ? null, t()
}, () => {
    n = null, t()
}));
var d = () => n,
    s = () => i,
    v = {
        previewInteractionToolbar_clear: "Clear",
        previewInteractionToolbar_describeChangeFor: ["Describe the change for ", ["context"]],
        previewInteractionToolbar_describeChangePlaceholder: "Describe the change...",
        previewInteractionToolbar_dock: "Dock",
        previewInteractionToolbar_minimize: "Minimize",
        previewInteractionToolbar_redo: "Redo",
        previewInteractionToolbar_saveOrDiscardBeforeLeaving: "Save or discard changes before leaving visual mode",
        previewInteractionToolbar_selectionCount: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["countNumber"], " selection"
                ],
                "countPlural=other": [
                    ["countNumber"], " selections"
                ]
            },
            f: "previewInteractionToolbar_selectionCount"
        },
        previewInteractionToolbar_send: "Send",
        previewInteractionToolbar_showAriaLabel: "Show preview toolbar",
        previewInteractionToolbar_undo: "Undo",
        selectionPromptPill_queuePlaceholder: "Add a comment..."
    },
    e = o => (a = {}) => l(d() ? .[o], a, s()) ? ? l(v[o], a, "en") ? ? "",
    p = e("previewInteractionToolbar_clear"),
    I = e("previewInteractionToolbar_describeChangeFor"),
    u = e("previewInteractionToolbar_describeChangePlaceholder"),
    T = e("previewInteractionToolbar_dock"),
    w = e("previewInteractionToolbar_minimize"),
    m = e("previewInteractionToolbar_redo"),
    f = e("previewInteractionToolbar_saveOrDiscardBeforeLeaving"),
    h = e("previewInteractionToolbar_selectionCount"),
    P = e("previewInteractionToolbar_send"),
    g = e("previewInteractionToolbar_showAriaLabel"),
    E = e("previewInteractionToolbar_undo"),
    D = e("selectionPromptPill_queuePlaceholder");
export {
    w as a, h as c, E as d, D as f, T as i, P as l, I as n, m as o, u as r, f as s, p as t, g as u
};