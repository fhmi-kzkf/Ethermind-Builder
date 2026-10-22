import {
    CR as c,
    Hy as W,
    JM as E,
    PN as k,
    QD as P,
    bu as Z,
    cd as R,
    fP as M,
    rd as B,
    wR as v,
    yu as O
} from "./app-shared-6CLVfi8w.js";
import {
    r as V
} from "./vendor-react-Fx2PtaaM.js";
import {
    t as _
} from "./vendor-util-bDkZRKmn.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "f5de23d6-468d-414a-aec0-e31fd3321993", e._sentryDebugIdIdentifier = "sentry-dbid-f5de23d6-468d-414a-aec0-e31fd3321993")
    })()
} catch {}
var t = V();

function U(e) {
    return (e ? ? []).filter(s => s != null && s !== !1)
}

function ve(e) {
    return e
}

function be(e) {
    const s = e[0];
    if (!s) throw new Error("Cannot combine an empty documentation set");
    if (e.length === 1) return s;
    const n = a => [...new Set(e.map(r => r[a]).filter(r => !!r))].join(`

`),
        i = a => {
            const r = new Map;
            for (const d of e)
                for (const [l, p] of Object.entries(d[a] ? ? {})) {
                    if (typeof p != "string") continue;
                    const g = r.get(l) ? ? new Set;
                    g.add(p), r.set(l, g)
                }
            return Object.fromEntries([...r].map(([d, l]) => [d, [...l].join(`

`)]))
        };
    return { ...s,
        whenToUse: n("whenToUse"),
        whenNotToUse: n("whenNotToUse") || void 0,
        a11y: n("a11y"),
        keyboard: e.flatMap(a => a.keyboard ? ? []),
        variants: i("variants"),
        hero: e.find(a => a.hero) ? .hero,
        examples: e.flatMap(a => a.examples),
        anatomy: e.flatMap(a => a.anatomy ? ? []),
        antiPatterns: e.flatMap(a => a.antiPatterns ? ? []),
        promoted: [...new Set(e.flatMap(a => a.promoted ? ? []))],
        keywords: [...new Set(e.flatMap(a => a.keywords ? ? []))],
        related: [...new Set(e.flatMap(a => a.related ? ? []))],
        propNotes: i("propNotes")
    }
}

function Y({
    render: e,
    preview: s
}) {
    return function() {
        return s(e())
    }
}
var F = e => (0, t.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [(0, t.jsx)("path", {
            d: "M20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12ZM21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12Z",
            fill: "currentColor"
        }), (0, t.jsx)("path", {
            d: "M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z",
            fill: "currentColor"
        }), (0, t.jsx)("path", {
            d: "M12 7.0166C12.2732 7.0166 12.5345 7.12024 12.7188 7.30469C12.9032 7.48911 12.9957 7.73926 12.9834 8C12.9795 8.08333 12.9756 8.16667 12.9717 8.25C12.9016 9.75 12.8318 11.25 12.7617 12.75C12.7578 12.8333 12.7539 12.9167 12.75 13C12.741 13.1898 12.6541 13.3716 12.5137 13.5059C12.3729 13.6401 12.1899 13.7158 12 13.7158C11.8101 13.7158 11.6271 13.6401 11.4863 13.5059C11.3459 13.3716 11.259 13.1898 11.25 13C11.2461 12.9167 11.2422 12.8333 11.2383 12.75C11.1682 11.25 11.0984 9.75 11.0283 8.25C11.0244 8.16667 11.0205 8.08333 11.0166 8C11.0043 7.73926 11.0968 7.48911 11.2812 7.30469C11.4655 7.12024 11.7268 7.0166 12 7.0166Z",
            fill: "currentColor"
        })]
    }),
    G = M(F, "WarningCircleIcon", {
        circular: !0
    }),
    $ = {
        "view-header": {
            titleSize: {
                initial: "2xl",
                md: "xl"
            },
            descriptionSize: {
                initial: "base",
                md: "sm"
            },
            spacing: "gap-1",
            badgeSize: "md"
        },
        "section-header": {
            titleSize: "base",
            descriptionSize: "sm",
            spacing: "gap-0",
            badgeSize: "md"
        },
        compact: {
            titleSize: "sm",
            descriptionSize: "sm",
            spacing: "gap-0",
            badgeSize: "md"
        },
        mini: {
            titleSize: "sm",
            descriptionSize: "xs",
            spacing: "gap-0",
            badgeSize: "md"
        },
        micro: {
            titleSize: "xs",
            descriptionSize: "xs",
            spacing: "gap-0",
            badgeSize: "sm"
        }
    },
    K = {
        "view-header": "typestyle-title-2xl-metrics md:typestyle-title-xl-metrics",
        "section-header": "typestyle-title-base-metrics",
        compact: "typestyle-title-sm-metrics",
        mini: "typestyle-title-sm-metrics",
        micro: "typestyle-title-xs-metrics"
    };

function I({
    variant: e,
    title: s,
    description: n,
    className: i
}) {
    const a = $[e],
        {
            content: r,
            badges: d,
            badgesId: l,
            slotAfter: p,
            ...g
        } = s ? ? {},
        {
            content: S,
            ...A
        } = n ? ? {},
        u = s != null && s.content != null && typeof s.content != "boolean" && s.content !== "",
        m = n != null && n.content != null && typeof n.content != "boolean" && n.content !== "",
        b = d != null && d.length > 0,
        f = p != null && typeof p != "boolean" && p !== "";
    if (!u && !m) return null;
    const h = u && (b || f) && s ? .maxLines == null,
        o = u ? (0, t.jsx)(k.Title, { ...g,
            size: a.titleSize,
            className: c("min-w-0", h && "inline", s ? .className),
            children: r
        }) : null,
        x = d ? .map(({
            title: N,
            ...j
        }, w) => (0, t.jsx)(P, { ...j,
            size: j.size ? ? a.badgeSize,
            children: N
        }, w)),
        C = (0, t.jsxs)(t.Fragment, {
            children: [b && l != null ? (0, t.jsx)("span", {
                id: l,
                className: "contents",
                children: x
            }) : x, p]
        });
    return (0, t.jsxs)("div", {
        "data-text-module": e,
        className: c("flex min-w-0 flex-col", u && m && a.spacing, i),
        children: [h ? (0, t.jsxs)("div", {
            className: c(K[e], "min-w-0 text-wrap"),
            children: [o, "  ", (0, t.jsx)("span", {
                className: "inline-flex min-h-[1lh] max-w-full -translate-y-[0.08em] flex-wrap items-center gap-1 align-middle",
                children: C
            })]
        }) : u && (b || f) ? (0, t.jsxs)("div", {
            className: "flex min-w-0 items-center gap-1.5",
            children: [o, (0, t.jsx)("div", {
                className: "flex shrink-0 items-center gap-1",
                children: C
            })]
        }) : o, m && (0, t.jsx)(k.Body, { ...A,
            size: a.descriptionSize,
            children: S
        })]
    })
}

function Ce({
    tile: e,
    className: s,
    variant: n,
    ...i
}) {
    if (!e) return (0, t.jsx)(I, { ...i,
        variant: n,
        className: s
    });
    const a = e.icon != null ? (0, t.jsx)(O, {
        icon: e.icon,
        size: "md",
        padded: e.padded,
        shape: e.shape,
        bordered: e.bordered,
        dot: e.dot,
        intent: e.intent
    }) : (0, t.jsx)(Z, {
        size: "md",
        padded: e.padded ? ? !1,
        shape: e.shape,
        bordered: e.bordered,
        dot: e.dot,
        intent: e.intent,
        children: e.slotGraphic
    });
    return (0, t.jsxs)("div", {
        className: c("flex min-w-0 items-start gap-3", n === "view-header" && "*:first:mt-1", n === "section-header" && "*:first:mt-px", s),
        children: [a, (0, t.jsx)(I, { ...i,
            variant: n,
            className: c("flex-1 self-center", n === "view-header" && "gap-px")
        })]
    })
}
var Q = e => (0, t.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [(0, t.jsx)("path", {
            d: "M20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12ZM21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12Z",
            fill: "currentColor"
        }), (0, t.jsx)("path", {
            d: "M15.3896 8.56445C15.6303 8.22749 16.0985 8.14913 16.4355 8.38965C16.7725 8.63034 16.8509 9.09851 16.6104 9.43555L11.6104 16.4355C11.4822 16.6149 11.2812 16.7289 11.0615 16.7471C10.8419 16.7652 10.6255 16.6861 10.4697 16.5303L7.46973 13.5303C7.17683 13.2374 7.17683 12.7626 7.46973 12.4697C7.76262 12.1768 8.23738 12.1768 8.53027 12.4697L10.9043 14.8438L15.3896 8.56445Z",
            fill: "currentColor"
        })]
    }),
    X = M(Q, "CheckCircleIcon", {
        circular: !0
    }),
    H = e => (0, t.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 48,
        height: 48,
        viewBox: "0 -960 960 960",
        ...e,
        children: (0, t.jsx)("path", {
            d: "m654-454-91 147q-8 13-22.5 10T522-314l-33-133-306 305q-9 9-21 9t-21-9q-9-9-9-21t9-21l305-305-133-33q-14-4-17-18.5t10-22.5l147-92-12-172q-1-15 12.5-22t24.5 3l132 111 160-64q14-5 24 5t5 24l-65 160 111 132q10 11 3.5 24.5T827-441l-173-13ZM131-721q-5-5-5-11t5-11l46-46q5-5 11-5t11 5l45 45q5 5 5 11t-5 11l-46 46q-5 5-11 5t-11-5l-45-45Zm428 307 63-102 120 9-78-92 45-111-111 45-92-78 9 120-102 64 117 29 29 116Zm163 283-46-46q-5-5-4.5-11t5.5-11l45-45q5-5 11-5t11 5l46 46q5 5 4.5 11t-5.5 11l-45 45q-5 5-11 5t-11-5ZM578-579Z"
        })
    }),
    J = M(H, "WandStarsIcon"),
    ee = {
        default: B,
        destructive: G,
        warning: W,
        affirmative: X,
        special: J
    },
    te = e => U(e).slice(0, 2),
    se = ({
        variant: e,
        hasActions: s,
        hasDismiss: n
    }) => e === "destructive" && !s && !n ? "alert" : "status",
    ae = ({
        announce: e,
        role: s,
        variant: n,
        hasActions: i,
        hasDismiss: a
    }) => {
        if (e) return s !== void 0 ? s : se({
            variant: n,
            hasActions: i,
            hasDismiss: a
        })
    },
    ne = (e, s) => e === !1 ? null : e === void 0 ? ee[s] : e,
    ie = ({
        title: e,
        description: s,
        children: n
    }) => v(e) || v(s) || v(n),
    re = {
        default: "border-[length:var(--border-default)] border-[var(--border-translucent)] bg-[var(--bg-muted)]",
        destructive: "border-[length:var(--border-default)] border-[var(--border-destructive)] bg-[var(--bg-destructive-translucent)]",
        warning: "border-[length:var(--border-default)] border-[var(--border-attention)] bg-[var(--bg-attention-translucent)]",
        affirmative: "border-[length:var(--border-default)] border-[var(--border-positive)] bg-[var(--bg-positive-translucent)]",
        special: "border-[length:var(--border-default)] border-[var(--border-special)] bg-[var(--bg-special-translucent)]"
    },
    oe = {
        default: {
            title: {},
            body: {
                contrast: "max"
            },
            iconClassName: "text-primary-pulse"
        },
        destructive: {
            title: {
                color: "destructive"
            },
            body: {
                color: "destructive"
            },
            iconClassName: "text-destructive-pulse"
        },
        warning: {
            title: {
                color: "attention"
            },
            body: {
                color: "attention"
            },
            iconClassName: "text-attention-pulse"
        },
        affirmative: {
            title: {
                color: "positive"
            },
            body: {
                color: "positive"
            },
            iconClassName: "text-positive-pulse"
        },
        special: {
            title: {
                color: "special"
            },
            body: {
                color: "special"
            },
            iconClassName: "text-special-pulse"
        }
    },
    le = {
        default: "default",
        destructive: "default",
        warning: "default",
        affirmative: "default",
        special: "default"
    },
    ce = e => le[e],
    de = {
        default: {
            icon: "-mt-[0.5px] h-5",
            iconSizeClass: "size-4",
            iconGap: "gap-1.5",
            button: "sm",
            iconMatchedPadding: "pl-5.5",
            contentYPadding: "py-3",
            buttonAndActionsYPadding: "py-2",
            actionsWrapOffset: "-mt-3 mb-1"
        },
        sm: {
            icon: "h-4 w-4 justify-center",
            iconSizeClass: "size-3.5",
            iconGap: "gap-1",
            button: "xs",
            iconMatchedPadding: "pl-5",
            contentYPadding: "py-2.5",
            buttonAndActionsYPadding: "py-2",
            actionsWrapOffset: "-mt-2 mb-0.5"
        }
    },
    pe = _("", {
        variants: {
            variant: re
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    me = _("", {
        variants: {
            size: {
                default: "",
                sm: ""
            },
            hasIcon: {
                true: "",
                false: ""
            },
            elements: {
                none: "",
                dismiss: "",
                actions: ""
            },
            actionCount: {
                single: "",
                pair: ""
            }
        },
        compoundVariants: [{
            size: "default",
            hasIcon: !0,
            className: "pl-3.25"
        }, {
            size: "sm",
            hasIcon: !0,
            className: "pl-2.25"
        }, {
            size: "default",
            hasIcon: !1,
            className: "pl-3.5"
        }, {
            size: "sm",
            hasIcon: !1,
            className: "pl-3"
        }, {
            elements: "none",
            size: "default",
            className: "pr-4"
        }, {
            elements: "none",
            size: "sm",
            className: "pr-3"
        }, {
            elements: "dismiss",
            className: "pr-2"
        }, {
            elements: "actions",
            size: "default",
            actionCount: "single",
            className: "pr-4 @[320px]/alert:pr-2"
        }, {
            elements: "actions",
            size: "default",
            actionCount: "pair",
            className: "pr-4 @[640px]/alert:pr-2"
        }, {
            elements: "actions",
            size: "sm",
            actionCount: "single",
            className: "pr-3 @[320px]/alert:pr-2"
        }, {
            elements: "actions",
            size: "sm",
            actionCount: "pair",
            className: "pr-3 @[640px]/alert:pr-2"
        }],
        defaultVariants: {
            size: "default",
            hasIcon: !0,
            elements: "none",
            actionCount: "single"
        }
    }),
    ue = _("flex shrink-0 gap-2 basis-full", {
        variants: {
            actionCount: {
                single: "",
                pair: ""
            },
            dismiss: {
                true: "items-start",
                false: "items-center"
            }
        },
        compoundVariants: [{
            dismiss: !1,
            actionCount: "single",
            className: "@[320px]/alert:mt-0 @[320px]/alert:mb-0 @[320px]/alert:basis-auto @[320px]/alert:pl-0"
        }, {
            dismiss: !1,
            actionCount: "pair",
            className: "@[640px]/alert:mt-0 @[640px]/alert:mb-0 @[640px]/alert:basis-auto @[640px]/alert:pl-0"
        }, {
            dismiss: !0,
            actionCount: "single",
            className: "@[340px]/alert:mt-0 @[340px]/alert:mb-0 @[340px]/alert:basis-auto @[340px]/alert:pl-0"
        }, {
            dismiss: !0,
            actionCount: "pair",
            className: "@[680px]/alert:mt-0 @[680px]/alert:mb-0 @[680px]/alert:basis-auto @[680px]/alert:pl-0"
        }]
    }),
    fe = ({
        actions: e,
        variant: s,
        size: n
    }) => {
        const i = ce(s);
        return e.map(({
            label: a,
            variant: r,
            ...d
        }, l) => (0, t.jsx)(E, {
            size: n,
            variant: r ? ? i,
            ...d,
            children: a
        }, `${a}-${l}`))
    };

function y({
    variant: e = "default",
    title: s,
    description: n,
    children: i,
    icon: a,
    slotProps: r,
    actions: d,
    onDismiss: l,
    dismissLabel: p,
    clampTitle: g = !0,
    announce: S = !0,
    role: A,
    className: u,
    size: m = "default",
    ...b
}) {
    const f = ne(a, e),
        h = te(d),
        o = de[m],
        x = oe[e],
        C = v(s),
        N = v(n),
        j = v(i);
    if (!ie({
            title: s,
            description: n,
            children: i
        })) return null;
    const w = h.length > 0,
        z = !!l;
    let T = "none";
    z ? T = "dismiss" : w && (T = "actions");
    const q = ae({
            announce: S,
            role: A,
            variant: e,
            hasActions: w,
            hasDismiss: z
        }),
        D = { ...x.title,
            content: (0, t.jsx)(t.Fragment, {
                children: s
            }),
            as: "p",
            textWrap: "normal",
            "data-alert-title": !0,
            maxLines: g ? 1 : void 0
        },
        L = { ...x.body,
            content: (0, t.jsx)(t.Fragment, {
                children: n
            }),
            as: "div",
            textWrap: "normal",
            "data-alert-description": !0,
            className: "space-y-1"
        };
    return (0, t.jsx)("div", { ...b,
        role: q,
        className: c("@container/alert w-full", "rounded-2 relative overflow-hidden border text-sm", pe({
            variant: e
        }), u),
        children: (0, t.jsx)("div", {
            className: c("flex w-full items-start gap-2", me({
                size: m,
                hasIcon: !!f,
                elements: T,
                actionCount: h.length === 2 ? "pair" : "single"
            })),
            children: (0, t.jsxs)("div", {
                className: "flex flex-1 gap-x-1.5 gap-y-2",
                children: [(0, t.jsxs)("div", {
                    className: "flex flex-1 flex-wrap gap-x-4.5",
                    children: [(0, t.jsx)("div", {
                        className: c("flex min-w-0 flex-1 shrink-0 flex-col self-center", o.contentYPadding),
                        children: (0, t.jsxs)("div", {
                            className: c("flex items-start", o.iconGap),
                            children: [f && (0, t.jsx)("div", {
                                className: c("flex shrink-0 items-center", o.icon),
                                children: (0, t.jsx)(f, {
                                    size: "small",
                                    ...r ? .icon,
                                    className : c(x.iconClassName, !r ? .icon ? .size && o.iconSizeClass, r ? .icon ? .className)
                                })
                            }), (0, t.jsxs)("div", {
                                className: "flex min-w-0 flex-1 flex-col",
                                children: [(C || N) && (0, t.jsx)(I, {
                                    variant: m === "sm" ? "micro" : "compact",
                                    ...C ? {
                                        title: D,
                                        description: N ? L : void 0
                                    } : {
                                        description: L
                                    }
                                }), j && (0, t.jsx)(k.Body, { ...x.body,
                                    as: "div",
                                    size: m === "sm" ? "xs" : "sm",
                                    textWrap: "normal",
                                    "data-alert-body": !0,
                                    children: i
                                })]
                            })]
                        })
                    }), w && (0, t.jsx)("div", {
                        "data-alert-action": "",
                        className: c(ue({
                            actionCount: h.length === 2 ? "pair" : "single",
                            dismiss: z
                        }), o.buttonAndActionsYPadding, o.actionsWrapOffset, f && o.iconMatchedPadding),
                        children: fe({
                            actions: h,
                            variant: e,
                            size: o.button
                        })
                    })]
                }), l && (0, t.jsx)("div", {
                    className: o.buttonAndActionsYPadding,
                    children: (0, t.jsx)(E, {
                        size: o.button,
                        variant: "ghost",
                        icon: R,
                        "aria-label": p ? ? "Dismiss",
                        onClick: l,
                        className: "shrink-0"
                    })
                })]
            })
        })
    })
}
var we = {
    family: "alert",
    addedAt: "pre-tracking",
    paperUrl: "https://app.paper.design/file/01KZZT96QFDA1FY2S80QWMZW3K/A-0/56W-0",
    hero: Y({
        render: () => (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(y, {
                title: "Backup complete",
                description: "Restore points are kept for 30 days."
            }), (0, t.jsx)(y, {
                variant: "destructive",
                title: "Could not save changes",
                description: "The network request failed."
            })]
        }),
        preview: e => (0, t.jsx)("div", {
            className: "flex w-80 flex-col gap-2",
            children: e
        })
    }),
    playground: {
        defaults: {
            className: "w-80",
            title: "Backup complete",
            description: "Restore points are kept for 30 days."
        }
    },
    whenToUse: "Use for persistent inline callouts that give a page or section context — setup notices, failed operations, permission warnings, upgrade prompts. `Alert` resolves the canonical icon, live-region role, actions, and dismiss from props. `children` carries structured body markup when the props alone cannot express the content.",
    whenNotToUse: "Transient feedback after an action belongs to `sonner`. A full-width announcement bar at the top of the page belongs to `banner`. A blocking confirmation belongs to `alert-dialog` or `confirm-dialog`.",
    a11y: 'The component resolves the live-region role. It renders `role="status"` (polite) — a bare destructive notice with no actions and no dismiss upgrades to `role="alert"` (assertive). Pass `announce={false}` for static page copy that must not be announced, or `role` to force a politeness. The dismiss control is named "Dismiss" — pass `dismissLabel` to localize it.',
    examples: [{
        title: "Informational callout with dismiss",
        description: "Omitting `icon` renders the canonical icon for the variant — `InfoCircleIcon` for `default`. `onDismiss` renders the dismiss control.",
        render: () => (0, t.jsx)(y, {
            title: "New workspace knowledge",
            description: "Give the agent shared context that applies to every project in this workspace.",
            onDismiss: () => {}
        })
    }, {
        title: "Failed operation with retry",
        description: "`actions` renders up to two buttons after the content. With actions or dismiss present the role stays `status`.",
        render: () => (0, t.jsx)(y, {
            variant: "destructive",
            title: "Could not save changes",
            description: "The network request failed.",
            actions: [{
                label: "Retry",
                onClick: () => window.location.reload()
            }]
        })
    }, {
        title: "Structured body content",
        description: "`children` carries structured markup below `title` and `description`. At least one of the three must be present — the props type enforces it.",
        render: () => (0, t.jsx)(y, {
            variant: "warning",
            title: "Before you restore this backup:",
            children: (0, t.jsxs)("ul", {
                children: [(0, t.jsx)("li", {
                    children: "The database is unavailable for a few minutes"
                }), (0, t.jsx)("li", {
                    children: "Restores are limited to one every 4 hours"
                })]
            })
        })
    }],
    variants: {
        default: "Neutral muted surface for informational context and tips.",
        destructive: "Errors and failed operations — bare notices announce assertively.",
        warning: "Caution and non-blocking issues that need attention.",
        affirmative: "Success and confirmation states.",
        special: "Promotions and premium-feature highlights."
    },
    antiPatterns: [{
        dont: "Transient success feedback rendered as an alert after a save.",
        instead: '`toast.success("Saved")` from `sonner` — an alert persists until the caller unmounts it.'
    }, {
        dont: "Color overrides through `className`, such as `bg-red-500 text-white`.",
        instead: "The `variant` prop — `className` carries layout only (`w-full`, `mt-4`)."
    }],
    propNotes: {
        actions: "Every entry needs `onClick` or `render` — for a link action pass `render` with `AccessibleNativeLink` from `@lovable.dev/pulse/accessible-native-link`. Actions render the `default` button variant regardless of the alert `variant` — override one with a per-action `variant` such as `outline`. Labels follow `button` guidance — text only, no decorative icons."
    },
    related: ["banner", "sonner", "alert-dialog"],
    keywords: ["Alert", "callout", "Callout", "admonition", "notification", "inline message", "status message"]
};
export {
    ve as _, oe as a, me as c, X as d, Ce as f, be as g, G as h, de as i, pe as l, I as m, y as n, ce as o, $ as p, le as r, ue as s, we as t, J as u, Y as v, U as y
};