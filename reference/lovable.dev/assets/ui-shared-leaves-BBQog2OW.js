import {
    o as ae
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    AN as z,
    CR as x,
    JM as U,
    PN as X,
    Tu as Y,
    eP as ee,
    fN as se,
    fP as E,
    lP as ie,
    mN as oe,
    pN as le,
    sP as ce,
    wR as R
} from "./app-shared-6CLVfi8w.js";
import {
    i as de,
    r as ue
} from "./vendor-react-Fx2PtaaM.js";
import {
    n as fe,
    t as me
} from "./vendor-base-ui-field-BdT_EZJM.js";
import {
    qn as he
} from "./vendor-base-ui-eager-BVTTpYm_.js";
import {
    S as J,
    _ as T
} from "./vendor-motion-Hvlv7m0n.js";
import {
    c as xe,
    d as ve,
    s as Ce,
    u as ge
} from "./ui-password-input-DxOwVSEA.js";
import {
    c as pe,
    i as we,
    r as ye
} from "./vendor-hook-form-CL-xHDfs.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e2e4bf8f-e4a5-4c29-ac61-d18a2bea1238", e._sentryDebugIdIdentifier = "sentry-dbid-e2e4bf8f-e4a5-4c29-ac61-d18a2bea1238")
    })()
} catch {}
var r = ue(),
    be = e => (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, r.jsx)("path", {
            d: "M19.25 6.69342C19.25 6.58925 19.1854 6.49567 19.0879 6.45904L12.0879 3.83404C12.0313 3.81282 11.9687 3.81282 11.9121 3.83404L4.91211 6.45904C4.8146 6.49567 4.75 6.58925 4.75 6.69342V12.0001C4.75 14.6815 6.31114 16.738 8.09375 18.1641C8.97958 18.8728 9.8967 19.4055 10.6475 19.7588C11.0225 19.9353 11.3488 20.064 11.6016 20.1465C11.8813 20.2379 12.0029 20.2501 12 20.2501C11.997 20.2501 12.1187 20.2379 12.3984 20.1465C12.6512 20.064 12.9775 19.9353 13.3525 19.7588C14.1033 19.4055 15.0204 18.8728 15.9062 18.1641C17.6889 16.738 19.25 14.6815 19.25 12.0001V6.69342ZM20.75 12.0001C20.75 15.3186 18.8111 17.7621 16.8438 19.336C15.8546 20.1273 14.8342 20.7196 13.9912 21.1163C13.5696 21.3147 13.1846 21.4674 12.8633 21.5723C12.5689 21.6684 12.2529 21.7501 12 21.7501C11.7471 21.7501 11.4311 21.6684 11.1367 21.5723C10.8154 21.4674 10.4304 21.3147 10.0088 21.1163C9.16581 20.7196 8.1454 20.1273 7.15625 19.336C5.18886 17.7621 3.25 15.3186 3.25 12.0001V6.69342C3.25 5.96394 3.70271 5.31088 4.38574 5.05475L11.3857 2.42975C11.7819 2.28123 12.2181 2.28123 12.6143 2.42975L19.6143 5.05475C20.2973 5.31088 20.75 5.96394 20.75 6.69342V12.0001Z",
            fill: "currentColor"
        })
    }),
    lt = E(be, "ShieldIcon"),
    f = ae(de(), 1),
    S = {
        default: {
            body: "rounded-6",
            shell: "rounded-6"
        },
        sm: {
            body: "rounded-3",
            shell: "rounded-t-3 rounded-b-6"
        }
    },
    P = e => {
        const t = new Error(`Card: ${e}`);
        console.error("Card misuse", t)
    };

function je({
    "aria-current": e,
    children: t,
    className: a,
    clip: s,
    radius: c = "default",
    ref: o,
    style: n,
    surface: l
}) {
    return (0, r.jsx)(z, {
        ref: o,
        level: "secondary",
        elevation: "md",
        ...l,
        "aria-current": e,
        style: n,
        className: x(S[c].body, "flex flex-col", s === !0 && "overflow-hidden", a),
        children: t
    })
}

function Fe({
    children: e,
    className: t,
    maxLines: a
}) {
    return (0, r.jsx)(X.Title, {
        as: "h3",
        size: "base",
        textWrap: "normal",
        maxLines: a,
        className: t,
        children: e
    })
}

function Ne({
    children: e,
    className: t,
    maxLines: a
}) {
    return (0, r.jsx)(X.Body, {
        as: "p",
        size: "sm",
        textWrap: "normal",
        maxLines: a,
        className: t,
        children: e
    })
}

function Re({
    align: e = "start",
    children: t,
    className: a
}) {
    return (0, r.jsx)("div", {
        className: x("flex gap-2", e === "center" ? "items-center" : "items-start", a),
        children: t
    })
}

function Me({
    icon: e
}) {
    return (0, r.jsx)(ce, {
        icon: e,
        size: "small"
    })
}

function K({
    className: e,
    dismiss: t,
    primary: a,
    secondary: s,
    stretch: c
}) {
    const o = a !== void 0,
        n = t !== void 0,
        l = s !== void 0,
        i = n || o,
        d = l && n && o;
    c === !0 && d && P("`stretch` fits at most two actions; all three were passed, ignoring `stretch`.");
    const u = c === !0 && !d,
        m = d ? "justify-between" : "justify-end",
        h = (0, f.useRef)(null),
        [v, A] = (0, f.useState)(!1);
    ee(() => {
        const C = h.current;
        if (C === null || typeof ResizeObserver > "u") return;
        const g = () => {
            const N = Array.from(C.children);
            if (N.length === 0) return;
            const Z = getComputedStyle(C),
                te = C.clientWidth - (parseFloat(Z.paddingLeft) || 0) - (parseFloat(Z.paddingRight) || 0),
                re = N.map(p => p.style.cssText);
            for (const p of N) p.style.flex = "none", p.style.width = "max-content";
            const ne = N.map(p => p.offsetWidth);
            N.forEach((p, k) => {
                p.style.cssText = re[k] ? ? ""
            });
            const G = ne.reduce((p, k) => p + k, 0) + (parseFloat(Z.columnGap) || 0) * (N.length - 1);
            G <= 0 || A(G > te)
        };
        g();
        let I = 0;
        const B = () => {
                cancelAnimationFrame(I), I = requestAnimationFrame(g)
            },
            V = new ResizeObserver(B);
        V.observe(C);
        const q = new MutationObserver(B);
        return q.observe(C, {
            subtree: !0,
            childList: !0,
            characterData: !0
        }), () => {
            cancelAnimationFrame(I), V.disconnect(), q.disconnect()
        }
    }, []);
    const y = (C, g, I) => (0, f.createElement)(U, { ...g,
            key: C,
            variant: g.variant ? ? I,
            className: x(v ? "w-full" : u && "min-w-max flex-1", g.className),
            rounded: !0
        }),
        w = l ? y("secondary", s, "outline") : null,
        M = n ? y("dismiss", t, u || v ? "outline" : "ghost") : null,
        b = o ? y("primary", a) : null,
        j = (0, r.jsxs)(r.Fragment, {
            children: [b, w, M]
        }),
        L = (0, r.jsxs)(r.Fragment, {
            children: [w, M, b]
        });
    let F = (0, r.jsxs)(r.Fragment, {
        children: [w !== null && (0, r.jsx)("div", {
            className: "shrink-0",
            children: w
        }), i && (0, r.jsxs)("div", {
            className: "flex shrink-0 gap-2",
            children: [M, b]
        })]
    });
    return v ? F = j : u && (F = L), (0, r.jsx)("div", {
        ref: h,
        className: x("flex gap-2", v ? "flex-col" : !u && m, e),
        children: F
    })
}

function Ie({
    children: e,
    className: t,
    radius: a = "default",
    surface: s
}) {
    return (0, r.jsx)(z, {
        level: "primary",
        elevation: "sm",
        ...s,
        className: x(S[a].shell, "mb-2 flex w-full flex-col", t),
        children: e
    })
}

function He(e, t, a) {
    return R(e) ? a(e) : t !== void 0 ? (0, r.jsx)(Me, {
        icon: t
    }) : null
}

function Se(e, t, a) {
    return R(e) ? a(e) : t ? (0, r.jsx)(U, {
        variant: "ghost",
        ...t
    }) : null
}

function De({
    description: e,
    icon: t,
    slotLeading: a,
    slotOverline: s,
    slotProps: c,
    slotTrailing: o,
    title: n,
    trailingAction: l
}) {
    const i = h => (0, r.jsx)("div", {
            className: "flex shrink-0 items-center",
            children: h
        }),
        d = He(a, t, i),
        u = Se(o, l, i),
        m = (0, r.jsxs)(Re, {
            align: n !== void 0 && e !== void 0 ? "start" : "center",
            children: [d, (0, r.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col gap-0.5",
                children: [n !== void 0 && (0, r.jsx)(Fe, { ...c ? .title,
                    children : n
                }), e !== void 0 && (0, r.jsx)(Ne, { ...c ? .description,
                    children : e
                })]
            }), u]
        });
    return R(s) ? (0, r.jsxs)("div", {
        className: "flex min-w-0 flex-col gap-1",
        children: [s, m]
    }) : m
}
var D = {
        duration: se.glide,
        ease: le.outCubic.points
    },
    $ = {
        duration: .2,
        ease: "easeOut"
    },
    _e = { ...D,
        delay: $.duration
    },
    Ae = { ...$,
        delay: D.duration
    },
    Le = {
        duration: .2,
        ease: "easeOut"
    },
    Ze = {
        duration: .12,
        ease: "easeOut"
    },
    H = {
        duration: 0
    };

function ke(e, t) {
    return e ? H : t ? $ : Ae
}

function Te(e, t) {
    return e ? H : t ? D : _e
}

function Pe({
    children: e,
    className: t,
    contentTransition: a,
    drawer: s,
    radius: c,
    ref: o,
    surface: n
}) {
    const l = oe(),
        i = s !== null,
        d = n ? .elevation ? ? "sm";
    return (0, r.jsxs)(z, {
        ref: o,
        level: "primary",
        elevation: "sm",
        ...n,
        style: {
            boxShadow: "none"
        },
        className: x("relative flex w-full flex-col transition-[border-radius] duration-200", "has-[[data-card-focusable]:focus-visible]:outline-focus-pulse outline-2 outline-offset-2 outline-transparent", i ? S[c].shell : S[c].body, t),
        children: [(0, r.jsx)(T.div, {
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-0 rounded-[inherit]",
            style: {
                boxShadow: `var(--shadow-surface-${d})`
            },
            initial: !1,
            animate: {
                opacity: i ? 1 : 0,
                transition: ke(l, i)
            }
        }), e, (0, r.jsx)(ze, {
            drawer: s,
            instantSwap: l || a === "none",
            reduceMotion: l
        })]
    })
}

function ze({
    drawer: e,
    instantSwap: t,
    reduceMotion: a
}) {
    const [s, c] = (0, f.useState)(null), o = (0, f.useRef)(null), n = (0, f.useRef)(null), l = (0, f.useRef)(!1), i = e !== null, d = Te(a, l.current);
    return ee(() => {
        if (!i) {
            n.current = null, c(null);
            return
        }
        const u = o.current;
        if (!u) return;
        const m = () => {
                const v = u.offsetHeight;
                if (v > 0) {
                    n.current = v, c(v);
                    return
                }
                n.current != null && c(n.current)
            },
            h = new ResizeObserver(m);
        return h.observe(u), m(), () => h.disconnect()
    }, [e ? .key, i]), (0, r.jsx)(J, {
        initial: !1,
        onExitComplete: () => {
            l.current = !1
        },
        children: e && (0, r.jsx)(T.div, {
            className: "rounded-b-6 relative flex flex-col justify-end overflow-hidden",
            initial: {
                height: 0
            },
            animate: {
                height: s ? ? "auto",
                transition: d
            },
            exit: {
                height: 0,
                transition: a ? H : D
            },
            onAnimationComplete: () => {
                l.current = !0
            },
            children: (0, r.jsx)("div", {
                ref: o,
                className: "shrink-0",
                children: (0, r.jsx)(J, {
                    mode: "wait",
                    initial: !1,
                    children: (0, r.jsx)(T.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1,
                            transition: t ? H : Le
                        },
                        exit: {
                            opacity: 0,
                            transition: t ? H : Ze
                        },
                        children: e.content
                    }, e.key)
                })
            })
        }, "drawer")
    })
}
var Ee = e => e !== void 0 && (e.primary !== void 0 || e.secondary !== void 0 || e.dismiss !== void 0);

function $e({
    actions: e,
    bodyTransition: t,
    children: a,
    className: s,
    contentTransition: c = "always",
    drawer: o,
    header: n,
    padding: l = "default",
    radius: i = "default",
    ref: d,
    slotBottom: u,
    slotDrawer: m,
    slotProps: h,
    slotTop: v,
    surface: A
}) {
    const y = o !== void 0,
        w = Ee(e),
        {
            placement: M,
            ...b
        } = e ? ? {},
        j = M === "body";
    y && (m !== void 0 || w && !j) && P("`drawer` replaces `slotDrawer` and drawer-placed `actions`; ignoring them.");
    const L = !y && (m !== void 0 || w && !j),
        F = n !== void 0 && (n.title !== void 0 || n.description !== void 0 || n.icon !== void 0 || R(n.slotLeading) || R(n.slotOverline) || R(n.slotTrailing) || n.trailingAction !== void 0);
    l === "none" && (F || u !== void 0 || w && j) && P('`padding="none"` hands the interior to `children`; ignoring the header and content slots.');
    const C = (0, r.jsxs)("div", {
            className: x("flex min-w-0 flex-1 flex-col gap-2", t ? .sizing === "fill" && "h-full"),
            children: [F && (0, r.jsx)(De, { ...n
            }), a, !t && (0, r.jsx)("div", {
                className: "mt-auto empty:hidden",
                children: u
            })]
        }),
        g = (0, r.jsxs)(je, {
            radius: i,
            surface: A,
            clip: v !== void 0,
            className: x(y && "relative z-10 w-full cursor-default text-start transition-shadow duration-200", h ? .surface ? .className),
            style: h ? .surface ? .style,
            "aria-current": h ? .surface ? .["aria-current"],
            children: [v, l === "none" ? t ? (0, r.jsx)(Y, {
                transition: t,
                children: a
            }) : a : (0, r.jsxs)("div", {
                className: "flex grow flex-col gap-2 p-4",
                children: [t ? (0, r.jsx)(Y, {
                    className: "flex-1",
                    transition: t,
                    children: C
                }) : C, t && (0, r.jsx)("div", {
                    className: "mt-auto empty:hidden",
                    children: u
                }), w && j && (0, r.jsx)(K, { ...b,
                    ...h ? .actions,
                    className : "mt-2"
                })]
            })]
        });
    return y ? (0, r.jsx)("div", {
        ref: d,
        className: x("w-full", s),
        children: (0, r.jsx)(Pe, {
            drawer: o,
            contentTransition: c,
            radius: i,
            surface: h ? .drawer,
            children: g
        })
    }) : (0, r.jsx)("div", {
        ref: d,
        className: x("w-full", s),
        children: L ? (0, r.jsxs)(Ie, {
            radius: i,
            surface: h ? .drawer,
            children: [g, m !== void 0 ? (0, r.jsx)("div", {
                className: "flex gap-2 p-2",
                children: m
            }) : (0, r.jsx)(K, { ...b,
                ...h ? .actions,
                className : "p-2"
            })]
        }) : g
    })
}

function Oe(e) {
    return getComputedStyle(e).getPropertyValue("--textarea-resizable").trim() === "1" && !e.disabled
}

function We(e) {
    return Math.max(0, e.offsetWidth - e.clientWidth)
}

function Be(e, t) {
    t.style.setProperty("--textarea-scrollbar-gutter", `${We(e)}px`)
}

function Ve(e, t, a, s = e) {
    const c = e.getBoundingClientRect().height;
    let o = !1;
    const n = new AbortController,
        l = () => {
            o || (o = !0, n.abort(), s.hasPointerCapture(t) && s.releasePointerCapture(t))
        },
        i = u => {
            if (u.pointerId === t) {
                if (u.buttons === 0) {
                    l();
                    return
                }
                e.style.height = `${Math.max(0,c+u.clientY-a)}px`
            }
        },
        d = u => {
            u.pointerId === t && l()
        };
    s.addEventListener("pointermove", i, {
        signal: n.signal
    }), s.addEventListener("pointerup", d, {
        signal: n.signal
    }), s.addEventListener("pointercancel", d, {
        signal: n.signal
    }), s.addEventListener("lostpointercapture", d, {
        signal: n.signal
    });
    try {
        s.setPointerCapture(t)
    } catch {
        l()
    }
    return l
}

function ct({
    className: e,
    error: t,
    disabled: a,
    ref: s,
    ...c
}) {
    const o = f.useRef(null),
        n = ie(s, o);
    f.useLayoutEffect(() => {
        const i = o.current,
            d = i ? .parentElement;
        if (!i || !d) return;
        const u = () => Be(i, d),
            m = new ResizeObserver(u);
        return m.observe(i), () => m.disconnect()
    }, []);

    function l(i) {
        if (i.defaultPrevented || i.button !== 0 || i.pointerType === "touch") return;
        const d = o.current,
            u = i.currentTarget.parentElement;
        !d || !u || !Oe(d) || (i.preventDefault(), d.focus({
            preventScroll: !0
        }), Ve(u, i.pointerId, i.clientY, i.currentTarget))
    }
    return (0, r.jsxs)("div", {
        className: x("textarea-shell relative grid min-h-20 w-full text-sm max-md:text-base", e),
        children: [(0, r.jsx)("textarea", {
            className: x("input-field rounded-2 text-primary-pulse col-start-1 row-start-1 min-h-0 w-full px-3 py-2", "placeholder:text-tertiary-pulse", "disabled:cursor-not-allowed disabled:opacity-50", t && "input-error"),
            ref: n,
            "aria-invalid": t || void 0,
            disabled: a,
            ...c
        }), (0, r.jsx)("div", {
            "aria-hidden": !0,
            className: "textarea-resize-handle relative z-1 col-start-1 row-start-1 size-6 self-end justify-self-end select-none",
            onPointerDown: l,
            onMouseDown: i => i.preventDefault()
        })]
    })
}

function dt({
    className: e,
    ...t
}) {
    return (0, r.jsx)(fe, {
        "data-slot": "fieldset",
        className: x("flex flex-col gap-3", e),
        ...t
    })
}

function ut({
    className: e,
    ...t
}) {
    return (0, r.jsx)(me, {
        "data-slot": "fieldset-legend",
        className: x("text-sm leading-none font-medium", e),
        ...t
    })
}

function ft(e, t) {
    return {
        key: e ? "actions-error" : "actions",
        content: t
    }
}
var Q = {
        accent: "shadow-[var(--card-elevation-shadow),0_0_0_3px_color-mix(in_oklch,var(--bg-accent)_20%,transparent)] outline-[length:var(--border-default)] outline-offset-[var(--border-default)] outline-[var(--border-accent)]",
        attention: "shadow-[var(--card-elevation-shadow),0_0_0_3px_color-mix(in_oklch,var(--bg-attention)_20%,transparent)] outline-[length:var(--border-default)] outline-offset-[var(--border-default)] outline-[var(--border-attention)]"
    },
    qe = {
        "--card-elevation-shadow": "var(--shadow-surface-sm)"
    };

function mt({
    children: e,
    className: t,
    contentTransition: a,
    drawer: s,
    error: c,
    isHighlighted: o,
    ref: n
}) {
    let l;
    c === !0 ? l = Q.attention : o === !0 && (l = Q.accent);
    const i = o === !0 ? "true" : void 0;
    return (0, r.jsx)($e, {
        ref: n,
        className: x("max-w-sm", t),
        radius: "sm",
        padding: "none",
        drawer: s,
        contentTransition: a,
        surface: {
            elevation: "sm"
        },
        slotProps: {
            drawer: {
                elevation: "md"
            },
            surface: l === void 0 && i === void 0 ? void 0 : {
                className: l,
                style: l === void 0 ? void 0 : qe,
                "aria-current": i
            }
        },
        children: e
    })
}
var Ge = e => (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, r.jsx)("path", {
            d: "M5 17.25C5.41421 17.25 5.75 17.5858 5.75 18C5.75 18.4142 5.41421 18.75 5 18.75H4C3.58579 18.75 3.25 18.4142 3.25 18C3.25 17.5858 3.58579 17.25 4 17.25H5ZM10 17.25C10.4142 17.25 10.75 17.5858 10.75 18C10.75 18.4142 10.4142 18.75 10 18.75H9C8.58579 18.75 8.25 18.4142 8.25 18C8.25 17.5858 8.58579 17.25 9 17.25H10ZM20 17.25C20.4142 17.25 20.75 17.5858 20.75 18C20.75 18.4142 20.4142 18.75 20 18.75H14C13.5858 18.75 13.25 18.4142 13.25 18C13.25 17.5858 13.5858 17.25 14 17.25H20ZM5 11.25C5.41421 11.25 5.75 11.5858 5.75 12C5.75 12.4142 5.41421 12.75 5 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H5ZM10 11.25C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H10ZM20 11.25C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H14C13.5858 12.75 13.25 12.4142 13.25 12C13.25 11.5858 13.5858 11.25 14 11.25H20ZM5 5.25C5.41421 5.25 5.75 5.58579 5.75 6C5.75 6.41421 5.41421 6.75 5 6.75H4C3.58579 6.75 3.25 6.41421 3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H5ZM10 5.25C10.4142 5.25 10.75 5.58579 10.75 6C10.75 6.41421 10.4142 6.75 10 6.75H9C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H10ZM20 5.25C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H14C13.5858 6.75 13.25 6.41421 13.25 6C13.25 5.58579 13.5858 5.25 14 5.25H20Z",
            fill: "currentColor"
        })
    }),
    ht = E(Ge, "LogsIcon"),
    Ye = e => (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, r.jsx)("path", {
            d: "M8.50032 12.25C8.91442 12.2501 9.25032 12.5859 9.25032 13C9.25032 13.4141 8.91442 13.7499 8.50032 13.75C6.62639 13.75 5.00405 14.8355 4.23079 16.415C4.07541 16.7328 4.13395 17.0174 4.34993 17.2666C4.58679 17.5398 5.01233 17.75 5.50032 17.75H7.50032C7.91442 17.7501 8.25032 18.0859 8.25032 18.5C8.25032 18.9141 7.91442 19.2499 7.50032 19.25H5.50032C4.6077 19.25 3.75725 18.8733 3.21614 18.249C2.65428 17.6008 2.43268 16.677 2.88411 15.7549C3.89957 13.6809 6.03215 12.25 8.50032 12.25ZM16.5003 12.25C19.17 12.2501 21.4473 13.9237 22.3431 16.2764C22.6501 17.0827 22.4285 17.8628 21.9417 18.4082C21.4702 18.9363 20.7541 19.2499 20.0003 19.25H13.0003C12.2464 19.25 11.5295 18.9365 11.0579 18.4082C10.5711 17.8628 10.3505 17.0828 10.6575 16.2764C11.5534 13.9237 13.8306 12.25 16.5003 12.25ZM16.5003 13.75C14.4734 13.75 12.7406 15.0203 12.0589 16.8105C11.9732 17.0362 12.0211 17.2344 12.1771 17.4092C12.3485 17.6012 12.6497 17.75 13.0003 17.75H20.0003C20.3507 17.7499 20.6512 17.601 20.8226 17.4092C20.9787 17.2343 21.0266 17.0363 20.9407 16.8105C20.2591 15.0204 18.5272 13.7501 16.5003 13.75ZM9.75032 8C9.75032 7.30972 9.19057 6.75013 8.50032 6.75C7.80996 6.75 7.25032 7.30964 7.25032 8C7.25032 8.69036 7.80996 9.25 8.50032 9.25C9.19057 9.24987 9.75032 8.69028 9.75032 8ZM18.2503 7.5C18.2503 6.53358 17.4667 5.75013 16.5003 5.75C15.5338 5.75 14.7503 6.5335 14.7503 7.5C14.7503 8.4665 15.5338 9.25 16.5003 9.25C17.4667 9.24987 18.2503 8.46642 18.2503 7.5ZM11.2503 8C11.2503 9.51871 10.019 10.7499 8.50032 10.75C6.98154 10.75 5.75032 9.51878 5.75032 8C5.75032 6.48122 6.98154 5.25 8.50032 5.25C10.019 5.25013 11.2503 6.48129 11.2503 8ZM19.7503 7.5C19.7503 9.29485 18.2951 10.7499 16.5003 10.75C14.7054 10.75 13.2503 9.29493 13.2503 7.5C13.2503 5.70507 14.7054 4.25 16.5003 4.25C18.2951 4.25013 19.7503 5.70515 19.7503 7.5Z",
            fill: "currentColor"
        })
    }),
    xt = E(Ye, "PeopleIcon"),
    vt = we,
    O = f.createContext({});
O.displayName = "FormFieldContext";
var Ct = ({ ...e
    }) => (0, r.jsx)(O.Provider, {
        value: {
            name: e.name
        },
        children: (0, r.jsx)(ye, { ...e
        })
    }),
    _ = () => {
        const e = f.useContext(O),
            t = f.useContext(W),
            {
                getFieldState: a,
                formState: s
            } = pe(),
            c = a(e.name, s);
        if (!e) throw new Error("useFormField should be used within <FormField>");
        const {
            id: o
        } = t;
        return {
            id: o,
            name: e.name,
            formItemId: `${o}-form-item`,
            formDescriptionId: `${o}-form-item-description`,
            formMessageId: `${o}-form-item-message`,
            ...c
        }
    },
    W = f.createContext({});
W.displayName = "FormItemContext";
var Je = f.forwardRef(({
    className: e,
    ...t
}, a) => {
    const s = f.useId();
    return (0, r.jsx)(W.Provider, {
        value: {
            id: s
        },
        children: (0, r.jsx)(ve, {
            ref: a,
            className: e,
            ...t
        })
    })
});
Je.displayName = "FormItem";
var Ke = f.forwardRef(({
    className: e,
    ...t
}, a) => {
    const {
        formItemId: s
    } = _();
    return (0, r.jsx)(ge, {
        ref: a,
        className: e,
        htmlFor: s,
        ...t
    })
});
Ke.displayName = "FormLabel";
var Qe = f.forwardRef(({
    render: e,
    children: t,
    ...a
}, s) => {
    const {
        error: c,
        formItemId: o,
        formDescriptionId: n,
        formMessageId: l
    } = _();
    return he({
        render: e ? ? t,
        ref: s,
        props: {
            id: o,
            "aria-describedby": c ? `${n} ${l}` : `${n}`,
            "aria-invalid": !!c,
            ...a
        }
    })
});
Qe.displayName = "FormControl";
var Ue = f.forwardRef(({
    className: e,
    ...t
}, a) => {
    const {
        formDescriptionId: s
    } = _();
    return (0, r.jsx)(Ce, {
        ref: a,
        id: s,
        className: e,
        ...t
    })
});
Ue.displayName = "FormDescription";
var Xe = f.forwardRef(({
    className: e,
    children: t,
    ...a
}, s) => {
    const {
        error: c,
        formMessageId: o
    } = _(), n = c ? String(c ? .message) : t;
    return n ? (0, r.jsx)(xe, {
        ref: s,
        id: o,
        match: !0,
        className: e,
        ...a,
        children: n
    }) : null
});
Xe.displayName = "FormMessage";
var gt = ({
    src: e,
    onLoad: t,
    onError: a
}) => {
    const s = (0, f.useRef)(null),
        c = (0, f.useRef)(t);
    c.current = t;
    const o = (0, f.useRef)(a);
    return o.current = a, (0, f.useEffect)(() => {
        const n = s.current;
        if (!n) return;
        let l = !1;
        const i = () => {
                l || o.current ? .()
            },
            d = new window.Image;
        return d.onerror = i, d.onload = () => {
            if (!l) {
                if (d.naturalWidth === 0) return i();
                try {
                    const u = d.naturalWidth * 2;
                    n.width = u, n.height = Math.round(u * d.naturalHeight / d.naturalWidth);
                    const m = n.getContext("2d");
                    if (!m) return i();
                    m.drawImage(d, 0, 0, n.width, n.height)
                } catch {
                    return i()
                }
                c.current ? .()
            }
        }, d.src = e, () => {
            l = !0
        }
    }, [e]), (0, r.jsx)("canvas", {
        ref: s,
        "aria-hidden": "true",
        className: "absolute inset-0 h-full w-full object-contain"
    })
};
export {
    lt as A, K as C, Me as D, Re as E, je as O, De as S, Ie as T, Oe as _, Ct as a, We as b, Xe as c, ht as d, mt as f, ct as g, ut as h, Ue as i, Fe as k, _ as l, dt as m, vt as n, Je as o, ft as p, Qe as r, Ke as s, gt as t, xt as u, Ve as v, Ne as w, $e as x, Be as y
};