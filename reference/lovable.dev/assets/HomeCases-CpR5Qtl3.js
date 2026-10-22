import {
    o as T
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    Am as y,
    CR as r,
    JM as B,
    Kk as j,
    Om as X,
    hN as K,
    hd as W,
    lF as E,
    ua as N,
    vd as D
} from "./app-shared-6CLVfi8w.js";
import {
    i as $,
    n as G,
    r as U
} from "./vendor-react-Fx2PtaaM.js";
import {
    r as P
} from "./i18n-fn/homePage-Drtt9xQn.js";
import {
    S as A,
    _ as m,
    c as k,
    d as f,
    f as J,
    p as M,
    r as Q,
    s as R
} from "./vendor-motion-Hvlv7m0n.js";
import {
    C as Z,
    D as ee,
    E as F,
    O as se,
    S as te,
    T as H,
    w as ae,
    x as re
} from "./i18n-fn/marketing--homePage-DEqIg0k5.js";
import {
    y as ie
} from "./dashboard-icons-Dw3nX-fy.js";
import {
    s as L
} from "./marketing-landing-app-icons-Btb84vIO.js";
import {
    t as ne
} from "./marketing-landing-app-vendor~index~_projectName~index~build.website-builder~build.no-code-a~fl8rc57d-cXHq0iqM.js";
import {
    n as oe,
    r as le
} from "./entranceMotion-CTiUixGr.js";
import {
    a as ce,
    n as C,
    r as _,
    t as O
} from "./HomeCases.constants-CDkK1uPb.js";
try {
    (function() {
        var s = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new s.Error().stack;
        t && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[t] = "8754b795-9746-4850-8dc2-89f63171e8fa", s._sentryDebugIdIdentifier = "sentry-dbid-8754b795-9746-4850-8dc2-89f63171e8fa")
    })()
} catch {}
var de = T(G(), 1),
    p = T($(), 1),
    e = U(),
    ue = ({
        homeCase: s
    }) => {
        const t = k(),
            a = (0, p.useRef)(null),
            u = Q(a),
            i = M("0%");
        (0, p.useEffect)(() => {
            if (t || !u) return;
            const n = 28.57,
                o = 7,
                d = Math.random() * n;
            i.set(`-${d.toFixed(2)}%`);
            let h = Math.random() < .5 ? 0 : n,
                g, b = !1;
            const v = (S, I) => {
                g = R(i, `-${S.toFixed(2)}%`, {
                    duration: I,
                    ease: "easeInOut",
                    onComplete: () => {
                        b || (h = h === 0 ? n : 0, v(h, o))
                    }
                })
            };
            return v(h, Math.abs(h - d) / n * o), () => {
                b = !0, g ? .stop()
            }
        }, [t, u, i]);
        const c = oe(!!t),
            x = le(!!t);
        return (0, e.jsx)(m.div, {
            className: r("relative", "px-10 pt-10 pb-8", "flex justify-between gap-x-18.5", "text-primary-pulse rounded-4 size-full overflow-hidden"),
            variants: c,
            children: (0, e.jsxs)("div", {
                className: r("relative h-full", "flex flex-col gap-y-18"),
                children: [(0, e.jsxs)("div", {
                    className: r("flex-1", "flex gap-x-18.5"),
                    children: [(0, e.jsxs)("div", {
                        className: "flex flex-1 flex-col justify-between",
                        children: [(0, e.jsx)(m.div, {
                            variants: x,
                            children: (0, e.jsx)(y, {
                                src: N(s.logo.src),
                                alt: P({
                                    company: s.companyName
                                }),
                                width: s.logo.width,
                                height: s.logo.height,
                                className: "brightness-0"
                            })
                        }), (0, e.jsxs)("div", {
                            className: "flex flex-col gap-y-8",
                            children: [(0, e.jsx)(m.p, {
                                className: "text-secondary-pulse text-sm/5 text-pretty",
                                variants: x,
                                children: s.summary()
                            }), (0, e.jsxs)(m.div, {
                                className: "flex items-center gap-x-5",
                                variants: x,
                                children: [(0, e.jsx)("div", {
                                    ref: a,
                                    className: "relative h-full w-px shrink-0 overflow-hidden",
                                    children: (0, e.jsx)(m.div, {
                                        className: "absolute inset-x-0 top-0 h-[140%] motion-reduce:h-full",
                                        style: {
                                            backgroundColor: "rgba(0, 0, 0, 0.2)",
                                            backgroundImage: ce,
                                            y: i
                                        }
                                    })
                                }), (0, e.jsxs)("blockquote", {
                                    className: "text-2xl/8 font-medium tracking-[-0.48px] text-pretty",
                                    children: ["“", s.quote(), "”"]
                                })]
                            })]
                        })]
                    }), (0, e.jsx)(m.dl, {
                        className: r("self-end", "flex w-45 flex-col gap-y-4"),
                        variants: x,
                        children: s.stats.map(({
                            value: n,
                            label: o
                        }, d) => (0, e.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, e.jsx)("dt", {
                                className: "text-tertiary-pulse order-2 text-sm/5 text-pretty",
                                children: o()
                            }), (0, e.jsx)("dd", {
                                className: "order-1 text-[32px]/[38px]",
                                children: n
                            })]
                        }, d))
                    })]
                }), (0, e.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0, e.jsx)("div", {
                        className: "flex items-center justify-between",
                        children: (0, e.jsxs)(m.div, {
                            className: "flex items-center gap-x-4",
                            variants: x,
                            children: [(0, e.jsx)(y, {
                                src: N(s.author.avatarSrc),
                                alt: "",
                                width: 48,
                                height: 52,
                                className: "rounded-2 !h-13 w-12 object-cover"
                            }), (0, e.jsxs)("div", {
                                children: [(0, e.jsx)("p", {
                                    className: "text-sm/6",
                                    children: s.author.name
                                }), (0, e.jsx)("p", {
                                    className: "text-tertiary-pulse text-xs/5",
                                    children: s.author.role()
                                })]
                            })]
                        })
                    }), (0, e.jsx)(m.div, {
                        className: "has-[:focus-visible]:!opacity-100",
                        variants: x,
                        children: (0, e.jsxs)(E, {
                            className: r("group/home-cases-story-link", "px-4 py-[9.5px]", "flex items-center gap-x-2.5", "rounded-1.5 bg-white", "shadow-[0_0_0_1px_rgba(95,95,93,0.12),0_4px_2px_-3px_rgba(95,95,93,0.10),0_5px_10px_-4px_rgba(95,95,93,0.15)]", "text-primary-pulse text-[13px]/[21px] font-medium", "focus-outline-pulse", "transition-[background-color,opacity] duration-300 [transition-timing-function:var(--ease-out-cubic)]", "can-hover:hover:bg-[#FAFAFA] active:opacity-80"),
                            href: s.storyHref,
                            children: [Z(), (0, e.jsxs)("span", {
                                className: "sr-only",
                                children: [" ", s.companyName]
                            }), (0, e.jsx)("svg", {
                                "aria-hidden": "true",
                                width: "12",
                                height: "12",
                                fill: "none",
                                viewBox: "0 0 12 12",
                                children: (0, e.jsx)("path", {
                                    className: "opacity-60 transition-opacity duration-300 [transition-timing-function:var(--ease-out-cubic)] group-hover/home-cases-story-link:opacity-100",
                                    stroke: "currentColor",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "1.5",
                                    d: "M5.75 9.25 9.25 6l-3.5-3.25M9.25 6h-6.5"
                                })
                            })]
                        })
                    })]
                })]
            })
        })
    },
    xe = () => () => {},
    me = () => !0,
    he = () => !1,
    pe = ({
        className: s,
        homeCase: t,
        isActive: a,
        isKeyboardReachable: u,
        onSelect: i
    }) => {
        const c = k(),
            x = (0, p.useSyncExternalStore)(xe, me, he),
            n = c ? 0 : O,
            o = (0, p.useRef)(null),
            d = M(a ? 1 : 304 / 720),
            h = M(a ? 1 : 400 / 528),
            g = f(d, l => 16 / l),
            b = f(h, l => 16 / l),
            v = J `${g}px / ${b}px`,
            S = f(d, l => 1 / l),
            I = f(h, l => 1 / l),
            z = f(d, l => l),
            V = f(h, l => l);
        (0, p.useEffect)(() => {
            const l = R(d, a ? 1 : .4222222222222222, {
                    duration: n,
                    ease: C
                }),
                q = R(h, a ? 1 : 400 / 528, {
                    duration: n,
                    ease: C
                });
            return () => {
                l.stop(), q.stop()
            }
        }, [n, a, d, h]);
        const Y = l => {
            if (l.detail !== 0) {
                i();
                return
            }(0, de.flushSync)(i), o.current ? .querySelector("a") ? .focus()
        };
        return (0, e.jsxs)("div", {
            ref: o,
            className: r("relative size-full", s),
            children: [(0, e.jsx)(m.div, {
                className: r("rounded-4 absolute inset-0 overflow-hidden bg-[#F5F4F0]"),
                ...j,
                "data-home-case-id": t.id,
                style: {
                    borderRadius: v,
                    scaleX: d,
                    scaleY: h
                }
            }), (0, e.jsx)(A, {
                initial: !1,
                children: a && (0, e.jsx)(m.div, { ...j,
                    className: "rounded-4 absolute inset-0 overflow-hidden has-[:focus-visible]:!opacity-100",
                    style: {
                        borderRadius: v,
                        scaleX: z,
                        scaleY: V
                    },
                    variants: {
                        hidden: {
                            opacity: 0
                        },
                        visible: {
                            opacity: 1,
                            transition: {
                                delay: c ? 0 : .1,
                                duration: c ? 0 : .25
                            }
                        },
                        hiddenAfterExit: {
                            opacity: 0,
                            transition: {
                                duration: c ? 0 : .15,
                                ease: "easeIn"
                            }
                        }
                    },
                    initial: "hidden",
                    animate: "visible",
                    exit: "hiddenAfterExit",
                    children: (0, e.jsx)(m.div, { ...j,
                        className: "absolute inset-0",
                        style: {
                            scaleX: S,
                            scaleY: I
                        },
                        children: (0, e.jsx)(ue, {
                            homeCase: t
                        })
                    })
                }, "content")
            }), (0, e.jsx)(A, {
                initial: !1,
                children: !a && (0, e.jsx)(m.button, {
                    type: "button",
                    className: r("rounded-4 absolute top-1/2 left-1/2 flex h-100 w-76 -translate-x-1/2 -translate-y-1/2 touch-manipulation items-center justify-center", "focus-visible:ring-focus-pulse outline-none focus-visible:ring-2 focus-visible:ring-inset"),
                    "aria-label": ee({
                        number: t.id.split("-").at(-1) ? ? ""
                    }),
                    disabled: !x,
                    tabIndex: u ? 0 : -1,
                    onClick: Y,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0,
                        transition: {
                            duration: c ? 0 : .08,
                            ease: "easeIn"
                        }
                    },
                    transition: {
                        delay: c ? 0 : .08,
                        duration: c ? 0 : .2,
                        ease: "easeOut"
                    },
                    children: (0, e.jsx)(y, {
                        src: N(t.logo.src),
                        alt: "",
                        width: t.logo.width,
                        height: t.logo.height,
                        className: "brightness-0"
                    })
                }, "preview")
            })]
        })
    },
    fe = 720,
    ve = 520,
    ge = (s, t) => s - t,
    be = s => s === 0 ? 0 : Math.sign(s) * (ve + (Math.abs(s) - 1) * 312),
    je = s => s === 0 ? 2 : Math.abs(s) === 1 ? 1 : 0,
    ye = ({
        activeIndex: s,
        className: t,
        onActiveIndexChange: a
    }) => {
        const u = k(),
            i = K("(min-width: 1280px)");
        return (0, e.jsx)("div", {
            className: r("relative h-132 w-full overflow-hidden", t),
            children: _.map((c, x) => {
                const n = ge(x, s),
                    o = n === 0;
                return (0, e.jsx)(m.div, { ...j,
                    className: "absolute top-1/2 left-1/2 h-132 w-180",
                    initial: !1,
                    animate: {
                        x: be(n) - fe / 2,
                        y: -528 / 2
                    },
                    transition: {
                        duration: u ? 0 : O,
                        ease: C
                    },
                    style: {
                        zIndex: je(n)
                    },
                    children: (0, e.jsx)(pe, {
                        homeCase: c,
                        isActive: o,
                        isKeyboardReachable: i && Math.abs(n) === 1,
                        onSelect: () => a(x)
                    })
                }, c.id)
            })
        })
    },
    Ne = ({
        className: s
    }) => (0, e.jsx)("div", {
        className: r(s),
        children: (0, e.jsxs)("svg", {
            "aria-hidden": "true",
            className: r("transition-[translate,opacity]", "group-hover/home-cases-button:translate-x-[2.5px]", "opacity-50 group-hover/home-cases-button:opacity-100"),
            style: {
                transitionDuration: "300ms",
                transitionTimingFunction: "var(--ease-out-cubic)"
            },
            width: "16",
            height: "16",
            fill: "none",
            children: [(0, e.jsx)("path", {
                d: "M6.5 5L9.5 8L6.5 11",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), (0, e.jsx)("path", {
                className: r("[stroke-dashoffset:1]", "group-hover/home-cases-button:[stroke-dashoffset:0]", "transition-[stroke-dashoffset]"),
                style: {
                    transitionDuration: "225ms",
                    transitionTimingFunction: "var(--ease-out-cubic)"
                },
                d: "M9.5 8L2.5 8",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                pathLength: "1",
                strokeDasharray: "1 1"
            })]
        })
    }),
    _e = ({
        className: s
    }) => (0, e.jsxs)("div", {
        className: r("flex flex-col", "md:items-center", s),
        children: [(0, e.jsx)("h2", {
            className: r("text-marketing-foreground font-semibold", "text-4xl/[1.1] tracking-[-1.44px]"),
            children: X(re(), {
                sweep: t => (0, e.jsx)(W, {
                    threshold: .5,
                    children: t
                })
            })
        }), (0, e.jsx)("p", {
            className: r("mt-4 max-w-md", "font-normal text-[#616161]", "text-base/6", "md:text-center md:[text-wrap:balance]"),
            children: se()
        }), (0, e.jsxs)(E, {
            href: "/customers",
            className: r("group/home-cases-button", "mt-6.5", "flex min-h-11 items-center gap-x-2", "text-marketing-foreground font-medium", "text-sm/1", "md:mt-8"),
            children: [(0, e.jsx)("span", {
                children: ae()
            }), (0, e.jsx)(Ne, {})]
        })]
    }),
    we = ({
        className: s,
        homeCase: t
    }) => (0, e.jsx)("div", {
        className: r("text-primary-pulse rounded-4 relative min-h-132 w-full overflow-hidden bg-[#F5F4F0]", s),
        "data-home-case-id": t.id,
        children: (0, e.jsxs)("div", {
            className: "relative flex min-h-132 flex-col justify-between gap-y-8 px-6 pt-6 pb-8",
            children: [(0, e.jsxs)("div", {
                className: "flex flex-col gap-y-5",
                children: [(0, e.jsx)("div", {
                    className: "flex h-16 shrink-0 items-start",
                    children: (0, e.jsx)(y, {
                        src: N(t.logo.src),
                        alt: P({
                            company: t.companyName
                        }),
                        width: t.logo.width,
                        height: t.logo.height,
                        className: "brightness-0"
                    })
                }), (0, e.jsx)("p", {
                    className: "text-secondary-pulse text-2xl/8 font-medium text-pretty",
                    children: t.summary()
                })]
            }), (0, e.jsxs)("div", {
                className: "flex items-end justify-between gap-x-4",
                children: [(0, e.jsx)("dl", {
                    className: "flex min-w-0 flex-col gap-y-4",
                    children: t.stats.map(({
                        value: a,
                        label: u
                    }, i) => (0, e.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0, e.jsx)("dt", {
                            className: "text-tertiary-pulse order-2 text-sm/5 text-pretty",
                            children: u()
                        }), (0, e.jsx)("dd", {
                            className: "order-1 text-2xl/7 tabular-nums",
                            children: a
                        })]
                    }, i))
                }), (0, e.jsxs)(B, {
                    className: "shrink-0",
                    size: "md",
                    variant: "default-raised",
                    icon: ie,
                    iconPosition: "end",
                    render: (0, e.jsx)(E, {
                        href: t.storyHref
                    }),
                    children: [te(), (0, e.jsxs)("span", {
                        className: "sr-only",
                        children: [" ", t.companyName]
                    })]
                })]
            })]
        })
    }),
    w = ({
        children: s,
        className: t,
        ...a
    }) => (0, e.jsx)("button", {
        type: "button",
        className: r("flex size-11 items-center justify-center", "rounded-1.5 bg-white", "touch-manipulation", "focus-outline-pulse", "disabled:cursor-default disabled:opacity-40", "shadow-[0_0_0_1px_rgba(95,95,93,0.12),0_4px_2px_-3px_rgba(95,95,93,0.10),0_5px_10px_-4px_rgba(95,95,93,0.15)]", "transition-[background-color,opacity] duration-300 [transition-timing-function:var(--ease-out-cubic)]", "can-hover:hover:bg-[#FAFAFA] active:opacity-80 disabled:hover:bg-white disabled:active:opacity-40", t),
        ...a,
        children: s
    }),
    ke = ({
        className: s
    }) => {
        const [t, a] = ne({
            align: "start",
            loop: !1
        }), u = k(), [i, c] = (0, p.useState)(!1), [x, n] = (0, p.useState)(!1), o = (0, p.useCallback)(() => {
            a && (c(a.canScrollPrev()), n(a.canScrollNext()))
        }, [a]);
        return (0, p.useEffect)(() => {
            if (a) return o(), a.on("reInit", o), a.on("select", o), () => {
                a.off("reInit", o), a.off("select", o)
            }
        }, [a, o]), (0, e.jsxs)("div", {
            className: s,
            children: [(0, e.jsx)("div", {
                ref: t,
                className: "overflow-hidden px-4",
                children: (0, e.jsx)("div", {
                    className: "flex gap-x-2",
                    children: _.map(d => (0, e.jsx)("div", {
                        className: "flex min-w-0 shrink-0 grow-0 basis-full",
                        children: (0, e.jsx)(we, {
                            homeCase: d
                        })
                    }, d.id))
                })
            }), (0, e.jsxs)("div", {
                className: "mt-8 flex items-center justify-center gap-x-3",
                children: [(0, e.jsx)(w, {
                    "aria-label": F(),
                    disabled: !i,
                    onClick: () => a ? .scrollPrev(!!u),
                    children: (0, e.jsx)(L, {
                        size: "small"
                    })
                }), (0, e.jsx)(w, {
                    "aria-label": H(),
                    disabled: !x,
                    onClick: () => a ? .scrollNext(!!u),
                    children: (0, e.jsx)(D, {
                        size: "small"
                    })
                })]
            })]
        })
    },
    He = () => {
        const [s, t] = (0, p.useState)(1), a = () => {
            t(i => Math.max(i - 1, 0))
        }, u = () => {
            t(i => Math.min(i + 1, _.length - 1))
        };
        return (0, e.jsxs)("section", {
            className: "pt-26 pb-13 md:pt-40 md:pb-20",
            children: [(0, e.jsx)("div", {
                className: "container",
                children: (0, e.jsx)(_e, {})
            }), (0, e.jsx)(ke, {
                className: "mt-8 md:hidden"
            }), (0, e.jsx)(ye, {
                activeIndex: s,
                className: "mt-16 hidden md:block",
                onActiveIndexChange: t
            }), (0, e.jsxs)("div", {
                className: r("mt-16", "hidden items-center justify-center gap-x-3 md:flex"),
                children: [(0, e.jsx)(w, {
                    "aria-label": F(),
                    disabled: s === 0,
                    onClick: a,
                    children: (0, e.jsx)(L, {
                        size: "small"
                    })
                }), (0, e.jsx)(w, {
                    "aria-label": H(),
                    disabled: s === _.length - 1,
                    onClick: u,
                    children: (0, e.jsx)(D, {
                        size: "small"
                    })
                })]
            })]
        })
    };
export {
    He as HomeCases
};