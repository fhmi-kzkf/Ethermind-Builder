import {
    o as O
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    AN as ee,
    AR as j,
    CR as R,
    JM as f,
    hC as H,
    uA as M
} from "./app-shared-6CLVfi8w.js";
import {
    r as se
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as te,
    n as re,
    r as ie
} from "./vendor-react-Fx2PtaaM.js";
import {
    mg as ae
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    d as ne,
    f as le
} from "./i18n-fn/gettingStarted-Hn91vIBd.js";
import {
    c as ce,
    d as oe,
    f as de,
    l as $,
    m as A,
    n as ue,
    o as B,
    p as he,
    r as me,
    s as pe,
    t as F,
    u as _e
} from "./i18n-fn/surveyPopover-D6oCsVit.js";
import {
    N as v,
    P as ve
} from "./login-shared-leaves-DRum0qYb.js";
import {
    Ic as E
} from "./dashboard-shared-BN9MnewY.js";
import {
    dv as k,
    uv as z
} from "./app-lazy-shared-BNTl480s.js";
import {
    g as xe
} from "./ui-shared-leaves-BBQog2OW.js";
import {
    t as fe
} from "./stepped-card-DL023GQ4.js";
import {
    u as be
} from "./surveyQueries-C7hPzRVG.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "6f53d0ec-bb60-412f-96cd-f7a951384e18", e._sentryDebugIdIdentifier = "sentry-dbid-6f53d0ec-bb60-412f-96cd-f7a951384e18")
    })()
} catch {}
var t = ie();

function ze({
    survey: e,
    onDismiss: s
}) {
    const r = e.title ? .trim();
    return (0, t.jsxs)(ee, {
        level: "secondary",
        elevation: "xl",
        className: "rounded-3 relative w-[min(350px,calc(100vw-2rem))] p-6",
        children: [(0, t.jsxs)("div", {
            className: "mb-6 flex items-center justify-between gap-4",
            children: [r ? (0, t.jsx)("p", {
                className: "text-primary-pulse text-lg font-semibold tracking-normal",
                children: r
            }) : (0, t.jsx)("div", {}), (0, t.jsx)(f, {
                variant: "ghost",
                size: "default",
                square: !0,
                icon: M,
                onClick: s,
                "aria-label": B(),
                className: "-my-1"
            })]
        }), (0, t.jsx)(f, {
            variant: "inverse",
            size: "md",
            className: "w-full",
            nativeButton: !1,
            render: (0, t.jsx)(H, {
                href: e.booking_link ? ? "",
                newTab: !0,
                onClick: s
            }),
            children: e.button_text || me()
        })]
    })
}
var ye = O(re(), 1),
    h = O(te(), 1),
    G = 4e3;
var ge = "__survey_other_choice__";

function N() {
    return {
        text: "",
        rating: null,
        choice: null,
        selected: [],
        linkClicked: !1
    }
}

function je(e, s) {
    switch (e.type) {
        case "open":
            return s.text.trim() !== "";
        case "rating":
            return s.rating !== null;
        case "single_choice":
            return s.choice === null ? !1 : s.choice !== "__survey_other_choice__" || s.text.trim() !== "";
        case "multiple_choice":
            return s.selected.includes("__survey_other_choice__") && s.text.trim() === "" ? !1 : s.selected.length > 0;
        case "link":
            return !0
    }
}

function ke(e, s) {
    const r = {
        question_id: e.id,
        type: e.type
    };
    switch (e.type) {
        case "open":
            {
                const i = s.text.trim();
                return i === "" ? null : { ...r,
                    value: i.slice(0, G)
                }
            }
        case "rating":
            return s.rating === null ? null : { ...r,
                rating: s.rating
            };
        case "single_choice":
            {
                if (s.choice === null) return null;
                if (s.choice !== "__survey_other_choice__") return { ...r,
                    value: s.choice
                };
                const i = s.text.trim();
                return i === "" ? null : { ...r,
                    value: i.slice(0, 200)
                }
            }
        case "multiple_choice":
            {
                const i = s.selected.filter(a => a !== ge);
                if (s.selected.includes("__survey_other_choice__")) {
                    const a = s.text.trim().slice(0, 200);
                    a !== "" && !i.includes(a) && i.push(a)
                }
                return i.length === 0 ? null : { ...r,
                    values: i
                }
            }
        case "link":
            return s.linkClicked ? r : null
    }
}

function T(e, s) {
    const r = [];
    for (const i of e) {
        const a = ke(i, s[i.id] ? ? N());
        a && r.push(a)
    }
    return r
}

function Ne() {
    const [e, s] = (0, h.useState)({});
    return {
        drafts: e,
        updateDraft: (0, h.useCallback)((r, i) => {
            s(a => ({ ...a,
                [r]: { ...a[r] ? ? N(),
                    ...i
                }
            }))
        }, []),
        clearDraft: (0, h.useCallback)(r => {
            s(i => {
                if (!(r in i)) return i;
                const a = { ...i
                };
                return delete a[r], a
            })
        }, [])
    }
}
var we = {
        3: ["🙁", "😐", "🙂"],
        5: ["😠", "🙁", "😐", "🙂", "😄"]
    },
    _ = "text-primary-pulse text-lg font-semibold";

function Ce({
    question: e,
    draft: s,
    onChange: r,
    headingRef: i
}) {
    const a = `survey-q-${e.id}-heading`,
        d = e.description ? `survey-q-${e.id}-description` : void 0,
        c = e.description ? (0, t.jsx)("p", {
            id: d,
            className: "text-tertiary-pulse mt-1 text-sm",
            children: e.description
        }) : null;
    switch (e.type) {
        case "open":
            return (0, t.jsxs)("div", {
                children: [(0, t.jsx)("label", {
                    ref: i,
                    htmlFor: a,
                    tabIndex: -1,
                    className: R("block", _),
                    children: e.question
                }), c, (0, t.jsx)(xe, {
                    id: a,
                    value: s.text,
                    onChange: n => r({
                        text: n.target.value
                    }),
                    maxLength: G,
                    "aria-describedby": d,
                    placeholder: F(),
                    className: "mt-3 min-h-20 resize-none"
                })]
            });
        case "rating":
            return (0, t.jsxs)("fieldset", {
                "aria-describedby": d,
                children: [(0, t.jsx)("legend", {
                    ref: i,
                    id: a,
                    tabIndex: -1,
                    className: _,
                    children: e.question
                }), c, (0, t.jsx)(Ie, {
                    question: e,
                    draft: s,
                    onChange: r,
                    labelledBy: a
                })]
            });
        case "single_choice":
            return (0, t.jsxs)("div", {
                children: [(0, t.jsx)("p", {
                    ref: i,
                    id: a,
                    tabIndex: -1,
                    className: _,
                    children: e.question
                }), c, (0, t.jsxs)(z, {
                    value: s.choice ? ? "",
                    onValueChange: n => r({
                        choice: n
                    }),
                    "aria-labelledby": a,
                    "aria-describedby": d,
                    className: "mt-3",
                    children: [(e.choices ? ? []).map((n, m) => (0, t.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, t.jsx)(k, {
                            value: n,
                            id: `survey-q-${e.id}-option-${m}`
                        }), (0, t.jsx)(v, {
                            htmlFor: `survey-q-${e.id}-option-${m}`,
                            children: n
                        })]
                    }, n)), e.has_open_choice && (0, t.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, t.jsx)(k, {
                            value: "__survey_other_choice__",
                            id: `survey-q-${e.id}-option-other`
                        }), (0, t.jsx)(v, {
                            htmlFor: `survey-q-${e.id}-option-other`,
                            children: $()
                        })]
                    })]
                }), e.has_open_choice && s.choice === "__survey_other_choice__" && (0, t.jsx)(D, {
                    draft: s,
                    onChange: r
                })]
            });
        case "multiple_choice":
            return (0, t.jsxs)("fieldset", {
                "aria-describedby": d,
                children: [(0, t.jsx)("legend", {
                    ref: i,
                    tabIndex: -1,
                    className: _,
                    children: e.question
                }), c, (0, t.jsxs)("div", {
                    className: "mt-3 grid gap-2",
                    children: [(e.choices ? ? []).map((n, m) => (0, t.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, t.jsx)(E, {
                            id: `survey-q-${e.id}-option-${m}`,
                            checked: s.selected.includes(n),
                            onCheckedChange: p => r({
                                selected: L(s.selected, n, p === !0)
                            })
                        }), (0, t.jsx)(v, {
                            htmlFor: `survey-q-${e.id}-option-${m}`,
                            children: n
                        })]
                    }, n)), e.has_open_choice && (0, t.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, t.jsx)(E, {
                            id: `survey-q-${e.id}-option-other`,
                            checked: s.selected.includes("__survey_other_choice__"),
                            onCheckedChange: n => r({
                                selected: L(s.selected, "__survey_other_choice__", n === !0)
                            })
                        }), (0, t.jsx)(v, {
                            htmlFor: `survey-q-${e.id}-option-other`,
                            children: $()
                        })]
                    })]
                }), e.has_open_choice && s.selected.includes("__survey_other_choice__") && (0, t.jsx)(D, {
                    draft: s,
                    onChange: r
                })]
            });
        case "link":
            return (0, t.jsxs)("div", {
                children: [(0, t.jsx)("p", {
                    ref: i,
                    tabIndex: -1,
                    className: _,
                    children: e.question
                }), c, (0, t.jsx)(f, {
                    variant: "outline",
                    size: "default",
                    className: "mt-3 w-full",
                    nativeButton: !1,
                    render: (0, t.jsx)(H, {
                        href: e.link ? ? "",
                        newTab: !0,
                        onClick: () => r({
                            linkClicked: !0
                        })
                    }),
                    children: e.button_text || ce()
                })]
            })
    }
}

function L(e, s, r) {
    return r ? e.includes(s) ? e : [...e, s] : e.filter(i => i !== s)
}

function D({
    draft: e,
    onChange: s
}) {
    return (0, t.jsx)(ve, {
        value: e.text,
        onChange: r => s({
            text: r.target.value
        }),
        maxLength: 200,
        "aria-label": _e(),
        placeholder: F(),
        className: "mt-2"
    })
}

function Ie({
    question: e,
    draft: s,
    onChange: r,
    labelledBy: i
}) {
    const a = e.rating_scale ? ? 5,
        d = e.rating_display === "emoji" ? we[a] : void 0;
    return (0, t.jsxs)("div", {
        className: "",
        children: [(0, t.jsx)(z, {
            value: s.rating === null ? "" : String(s.rating),
            onValueChange: c => r({
                rating: Number(c)
            }),
            "aria-labelledby": i,
            className: "hover-scope flex gap-2",
            children: Array.from({
                length: a
            }, (c, n) => n + 1).map(c => (0, t.jsxs)("div", {
                className: "min-w-0 flex-1",
                children: [(0, t.jsx)(k, {
                    value: String(c),
                    id: `survey-q-${e.id}-rating-${c}`,
                    "aria-label": Se(e, c, a),
                    className: "sr-only"
                }), (0, t.jsx)(v, {
                    htmlFor: `survey-q-${e.id}-rating-${c}`,
                    className: R("hover-feedback text-primary-pulse bg-primary-pulse shadow-surface-xs rounded-2 flex cursor-pointer items-center justify-center text-lg font-semibold transition-colors", "[[data-unchecked]~&]:hover:bg-secondary-pulse", "[[data-checked]~&]:bg-[var(--bg-inverse)] [[data-checked]~&]:bg-[image:var(--gradient-button-inverse)] [[data-checked]~&]:text-[var(--fg-inverse)] [[data-checked]~&]:shadow-[var(--shadow-button-inverse)]", "[:focus-visible~&]:outline-focus-pulse outline-2 outline-offset-2 outline-transparent outline-solid"),
                    children: (0, t.jsx)("span", {
                        "aria-hidden": !0,
                        children: d ? d[c - 1] : c
                    })
                })]
            }, c))
        }), (e.lower_label || e.upper_label) && (0, t.jsxs)("div", {
            className: "text-tertiary-pulse mt-3 flex justify-between gap-2 text-sm",
            children: [(0, t.jsx)("span", {
                children: e.lower_label
            }), (0, t.jsx)("span", {
                className: "text-right",
                children: e.upper_label
            })]
        })]
    })
}

function Se(e, s, r) {
    return s === 1 && e.lower_label ? `${s} — ${e.lower_label}` : s === r && e.upper_label ? `${s} — ${e.upper_label}` : String(s)
}

function Ge({
    survey: e,
    questions: s,
    onDismiss: r,
    onSubmitted: i,
    onGone: a,
    preview: d = !1,
    focusHeadingOnMount: c = !1
}) {
    const [n, m] = (0, h.useState)(0), {
        drafts: p,
        updateDraft: Q,
        clearDraft: X
    } = Ne(), x = (0, h.useRef)(new Map), o = s[n], b = n === s.length - 1, w = p[o.id] ? ? N(), u = se({
        mutationFn: l => d ? Promise.resolve() : be(e.id, l),
        onSuccess: i,
        onError: l => {
            l instanceof j && l.status === 409 ? i() : l instanceof j && (l.status === 404 || l.status === 410) && a()
        }
    }), y = (0, h.useCallback)(l => {
        (0, ye.flushSync)(() => m(l)), d || x.current.get(s[l].id) ? .focus()
    }, [d, s]), J = () => {
        b ? u.mutate(T(s, p)) : y(n + 1)
    }, V = () => {
        n > 0 && y(n - 1)
    }, U = () => {
        if (X(o.id), b) {
            const {
                [o.id]: l, ...g
            } = p;
            u.mutate(T(s, g))
        } else y(n + 1)
    }, C = (0, h.useRef)(c), W = (0, h.useCallback)(l => {
        if (l) return x.current.set(o.id, l), C.current && (C.current = !1, l.focus()), () => {
            x.current.get(o.id) === l && x.current.delete(o.id)
        }
    }, [o.id]), K = o.optional || je(o, w), I = b ? de() : pe(), Y = o.type === "link" ? I : o.button_text || I, Z = u.isError && !(u.error instanceof j && (u.error.status === 409 || u.error.status === 404 || u.error.status === 410)), S = s.length > 1, q = S && n > 0, P = e.title ? .trim();
    return (0, t.jsxs)(fe, {
        className: "relative w-[min(28rem,calc(100vw-2rem))]",
        surface: {
            level: "secondary",
            elevation: "xl"
        },
        radius: "sm",
        step: {
            key: o.id,
            index: n,
            count: s.length
        },
        slotTop: (0, t.jsxs)("div", {
            className: "flex items-center justify-between px-4 pt-4",
            children: [P ? (0, t.jsx)("p", {
                className: "text-tertiary-pulse text-sm font-medium tracking-normal",
                children: P
            }) : (0, t.jsx)("div", {}), (0, t.jsx)(f, {
                variant: "ghost",
                size: "default",
                square: !0,
                icon: M,
                onClick: r,
                "aria-label": B(),
                className: "-my-1"
            })]
        }),
        progress: S ? {
            "aria-label": ne(),
            formatStepLabel: (l, g) => le({
                current: l,
                total: g
            }),
            announce: !1
        } : void 0,
        actions: {
            back: q ? {
                children: ae(),
                variant: "outline",
                onClick: V,
                disabled: u.isPending,
                hints: {
                    disabled: A()
                }
            } : void 0,
            secondary: o.optional ? {
                children: oe(),
                variant: "ghost",
                onClick: U,
                disabled: u.isPending,
                hints: {
                    disabled: A()
                }
            } : void 0,
            primary: {
                children: Y,
                variant: "inverse",
                onClick: J,
                disabled: !K,
                loading: u.isPending,
                hints: {
                    disabled: ue()
                }
            }
        },
        children: [(0, t.jsx)(Ce, {
            question: o,
            draft: w,
            onChange: l => Q(o.id, l),
            headingRef: W
        }, o.id), Z && (0, t.jsx)("p", {
            role: "alert",
            className: "text-destructive-pulse mt-2 text-xs",
            children: he()
        })]
    })
}
export {
    ge as n, ze as r, Ge as t
};