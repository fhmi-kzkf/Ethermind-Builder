import {
    o as V
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    CR as t,
    Om as w,
    by as G,
    hd as I
} from "./app-shared-6CLVfi8w.js";
import {
    i as z,
    r as U
} from "./vendor-react-Fx2PtaaM.js";
import {
    _,
    c as O,
    f as W,
    p as Y,
    r as E,
    s as q
} from "./vendor-motion-Hvlv7m0n.js";
import {
    B as Z,
    H as $,
    I as K,
    L as Q,
    R as X,
    U as J,
    V as ee,
    _ as te,
    a as se,
    b as ae,
    c as ie,
    d as oe,
    f as re,
    g as ne,
    h as le,
    i as de,
    l as ce,
    m as pe,
    n as xe,
    o as me,
    p as _e,
    r as ue,
    s as he,
    t as ge,
    u as fe,
    v as Fe,
    y as ve,
    z as je
} from "./i18n-fn/marketing--homePage-DEqIg0k5.js";
import {
    Ut as be,
    Yt as ye
} from "./settings-shared-leaves-B-HU8sMN.js";
import {
    A as Ce
} from "./ui-shared-leaves-BBQog2OW.js";
import {
    u as Ee
} from "./ui-icon-sidebar-8d86DMoM.js";
import {
    t as Le
} from "./CreditCardIcon-BjDtaQtf.js";
import {
    t as we
} from "./ConnectionsIcon-CDe4uI97.js";
try {
    (function() {
        var s = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new s.Error().stack;
        a && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[a] = "d4e37fdf-ea7b-4701-a89c-341ad39ccf02", s._sentryDebugIdIdentifier = "sentry-dbid-d4e37fdf-ea7b-4701-a89c-341ad39ccf02")
    })()
} catch {}
var o = V(z(), 1),
    e = U(),
    Ae = 30,
    De = "mask-[radial-gradient(110%_130%_at_-10%_-20%,_#D9D9D9_60%,_rgba(115,_115,_115,_0.00)_100%)]",
    Ne = [.45, 0, .55, 1],
    Be = ({
        loopsActive: s
    }) => (0, e.jsx)(_.div, {
        initial: !1,
        animate: s ? {
            opacity: [1, .15, 1]
        } : {
            opacity: 1
        },
        transition: s ? {
            duration: 1.12,
            ease: Ne,
            repeat: 1 / 0
        } : {
            duration: .3
        },
        className: t("h-8 w-0.5", "bg-marketing-foreground/40 rounded-full")
    }),
    Se = ({
        loopsActive: s,
        phase: a,
        className: l
    }) => {
        const [r, c] = (0, o.useState)(0), i = Array.from(he());
        (0, o.useEffect)(() => {
            if (a !== "playing" || r >= i.length) return;
            const n = setTimeout(() => c(d => d + 1), Ae);
            return () => clearTimeout(n)
        }, [a, r, i.length]);
        const x = (a === "static" ? i : i.slice(0, r)).join("");
        return (0, e.jsx)("div", {
            className: t("h-(--card-h) w-full", "pt-14 pl-11", "md:pt-18 md:pl-12", De, l),
            children: (0, e.jsxs)("div", {
                className: "relative",
                children: [(0, e.jsx)("div", {
                    className: t("absolute -top-2 -left-2 h-[calc(100%+40px)] w-130", "rounded-t-8 opacity-45 blur-[96px]", "bg-[linear-gradient(to_right,#4F88FF_0%,#5185FF_4.76%,#5885FF_9.52%,#6289FF_14.29%,#7491FF_19.05%,#91A0FF_23.81%,#B0ACFE_28.57%,#CEAFFB_33.33%,#E2A5F2_38.1%,#F388DE_42.86%,#FB65C2_47.62%,#FD49A8_52.38%,#FD2980_57.14%,#FC1A58_61.9%,#FA1F41_66.67%,#FA2733_71.43%,#FB3D26_76.19%,#FC541F_80.95%,#FE6A1E_85.71%,#FE771D_90.48%,#FF861B_95.24%,#FF8F1B_100%)]")
                }), (0, e.jsx)("div", {
                    className: t("absolute -top-2 -left-2 h-[calc(100%+16px)] w-130", "rounded-t-8 opacity-20 blur-md", "bg-[linear-gradient(to_right,#4F88FF_0%,#5185FF_4.76%,#5885FF_9.52%,#6289FF_14.29%,#7491FF_19.05%,#91A0FF_23.81%,#B0ACFE_28.57%,#CEAFFB_33.33%,#E2A5F2_38.1%,#F388DE_42.86%,#FB65C2_47.62%,#FD49A8_52.38%,#FD2980_57.14%,#FC1A58_61.9%,#FA1F41_66.67%,#FA2733_71.43%,#FB3D26_76.19%,#FC541F_80.95%,#FE6A1E_85.71%,#FE771D_90.48%,#FF861B_95.24%,#FF8F1B_100%)]")
                }), (0, e.jsx)("div", {
                    className: t("absolute -top-1 -left-1 h-[calc(100%+8px)] w-130", "rounded-7 opacity-20 blur-[38px]", "bg-[linear-gradient(to_right,#4F88FF_0%,#5185FF_4.76%,#5885FF_9.52%,#6289FF_14.29%,#7491FF_19.05%,#91A0FF_23.81%,#B0ACFE_28.57%,#CEAFFB_33.33%,#E2A5F2_38.1%,#F388DE_42.86%,#FB65C2_47.62%,#FD49A8_52.38%,#FD2980_57.14%,#FC1A58_61.9%,#FA1F41_66.67%,#FA2733_71.43%,#FB3D26_76.19%,#FC541F_80.95%,#FE6A1E_85.71%,#FE771D_90.48%,#FF861B_95.24%,#FF8F1B_100%)]")
                }), (0, e.jsx)("div", {
                    className: t("absolute inset-0", "rounded-6 bg-white")
                }), (0, e.jsx)("div", {
                    className: t("absolute inset-0", "rounded-6 bg-white mix-blend-overlay shadow-[0_0_20px_-4px_rgba(0,0,0,0.55)]")
                }), (0, e.jsx)("div", {
                    className: t("absolute inset-0", "rounded-6 bg-white mix-blend-overlay shadow-[0_0_1px_1.5px_rgba(0,0,0,0.10),0_1px_1px_0_rgba(0,0,0,0.07)]")
                }), (0, e.jsx)("div", {
                    className: t("relative", "h-42 w-130", "py-4 pl-6", "rounded-6 bg-white"),
                    children: (0, e.jsxs)("div", {
                        className: "flex items-center gap-x-0.5",
                        children: [(0, e.jsx)(Be, {
                            loopsActive: s
                        }), (0, e.jsx)("div", {
                            className: t("text-xl/6 font-normal text-[#5F5F5D]/40"),
                            children: x
                        })]
                    })
                })]
            })
        })
    },
    ke = ({
        className: s
    }) => (0, e.jsxs)("svg", {
        className: s,
        width: "16",
        height: "22.7",
        fill: "none",
        viewBox: "0 0 11.591 16.422",
        overflow: "visible",
        children: [(0, e.jsxs)("g", {
            fillRule: "nonzero",
            filter: "url(#home-building-design-cursor-shadow)",
            children: [(0, e.jsx)("path", {
                fill: "#fff",
                d: "M0 16.422V.407l11.591 11.619H4.55l-.151.124z"
            }), (0, e.jsx)("path", {
                fill: "#000",
                d: "M1 2.814v11.188l2.969-2.866.16-.139h5.036z"
            })]
        }), (0, e.jsx)("defs", {
            children: (0, e.jsx)("filter", {
                id: "home-building-design-cursor-shadow",
                x: "-50%",
                y: "-50%",
                width: "200%",
                height: "200%",
                colorInterpolationFilters: "sRGB",
                children: (0, e.jsx)("feDropShadow", {
                    dx: "0",
                    dy: "0",
                    stdDeviation: "2",
                    floodColor: "#000000",
                    floodOpacity: "0.25"
                })
            })
        })]
    }),
    Ie = () => (0, e.jsx)("svg", {
        width: "16",
        height: "16",
        fill: "none",
        viewBox: "0 0 16 16",
        children: (0, e.jsx)("path", {
            stroke: "#5F5F5D",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeOpacity: ".7",
            strokeWidth: "1.25",
            d: "M4.25 5.75 1.75 8l2.5 2.25m5-8.5-2.5 12.5m5-8.5L14.25 8l-2.5 2.25"
        })
    }),
    Oe = () => (0, e.jsxs)("svg", {
        width: "16",
        height: "16",
        fill: "none",
        viewBox: "0 0 16 16",
        children: [(0, e.jsx)("path", {
            stroke: "#5F5F5D",
            strokeLinecap: "round",
            strokeOpacity: ".7",
            strokeWidth: "1.25",
            d: "M4.75 8.25h3.5m-3.5 3h5.5m3.56-5.94L9.69 1.19A1.5 1.5 0 0 0 8.628.75H3.75a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2V6.371a1.5 1.5 0 0 0-.44-1.06Z"
        }), (0, e.jsx)("path", {
            stroke: "#5F5F5D",
            strokeLinecap: "round",
            strokeOpacity: ".7",
            strokeWidth: "1.25",
            d: "M9.25 1v3.25a1.5 1.5 0 0 0 1.5 1.5H14"
        })]
    }),
    Te = () => (0, e.jsx)("svg", {
        width: "16",
        height: "16",
        fill: "none",
        viewBox: "0 0 16 16",
        children: (0, e.jsx)("path", {
            stroke: "#1F55F1",
            strokeWidth: "1.25",
            d: "M8 1.75a6.25 6.25 0 1 1 0 12.5m0-12.5a6.25 6.25 0 1 0 0 12.5m0 0c1.547 0 2.802-2.798 2.802-6.25S9.547 1.75 8 1.75m0 12.5c-1.547 0-2.802-2.798-2.802-6.25S6.453 1.75 8 1.75M2.412 5.198h11.176m0 5.604H2.412"
        })
    }),
    Pe = () => (0, e.jsx)("svg", {
        width: "16",
        height: "16",
        fill: "none",
        viewBox: "0 0 16 16",
        children: (0, e.jsx)("path", {
            stroke: "#5F5F5D",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeOpacity: ".7",
            strokeWidth: "1.5",
            d: "M1.75 4 8 .75 14.25 4 8 7.25 1.75 4Zm0 4L8 11.25 14.25 8m-12.5 4L8 15.25 14.25 12"
        })
    }),
    Me = "h1",
    y = 0,
    Re = 1.05,
    T = 2.05,
    He = "#D8D2C9",
    D = "#1F55F1",
    F = [.22, 1, .36, 1],
    N = [.65, 0, .35, 1],
    Ve = {
        pre: {
            stroke: He,
            transition: {
                duration: 0
            }
        },
        playing: {
            stroke: D,
            transition: {
                delay: T,
                duration: .35,
                ease: F
            }
        },
        static: {
            stroke: D,
            transition: {
                duration: 0
            }
        }
    },
    Ge = {
        pre: {
            pathLength: 0,
            transition: {
                duration: 0
            }
        },
        playing: {
            pathLength: 1,
            transition: {
                delay: Re,
                duration: 1,
                ease: F
            }
        },
        static: {
            pathLength: 1,
            transition: {
                duration: 0
            }
        }
    },
    ze = {
        pre: {
            opacity: 0,
            x: -104,
            y: 72,
            transition: {
                duration: 0
            }
        },
        playing: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                opacity: {
                    delay: y,
                    duration: .35,
                    ease: F
                },
                x: {
                    delay: y,
                    duration: 1.2,
                    ease: N
                },
                y: {
                    delay: y,
                    duration: 1.2,
                    ease: N
                }
            }
        },
        static: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0
            }
        }
    },
    Ue = {
        pre: {
            opacity: 0,
            scale: .7,
            transition: {
                duration: 0
            }
        },
        playing: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: T,
                duration: .7,
                ease: F
            }
        },
        static: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0
            }
        }
    },
    B = "max-w-68 text-2xl/7 font-semibold",
    We = ({
        phase: s
    }) => {
        const a = w(ce(), {
            br: () => (0, e.jsx)("br", {})
        });
        return (0, e.jsxs)("div", {
            className: t("h-80.25 w-full overflow-hidden", "grid *:col-start-1 *:row-start-1"),
            children: [(0, e.jsxs)("div", {
                className: t("relative", "size-full", "pt-8 pl-8", "mask-[radial-gradient(74.45%_70%_at_20.68%_22.74%,#D9D9D9_8.7%,rgba(115,115,115,0.00)_100%)]", "md:pt-10 md:pl-10"),
                children: [(0, e.jsx)("div", {
                    className: t("absolute bottom-6.5 left-10.75", "h-52 w-130", "rounded-t-8 opacity-70", "blur-[80px]", "bg-[linear-gradient(to_right,#4F88FF_0%,#5185FF_8.33%,#5885FF_16.67%,#6289FF_25%,#7491FF_33.33%,#91A0FF_41.67%,#B0ACFE_50%,#CEAFFB_58.33%,#E2A5F2_66.67%,#F388DE_75%,#FB65C2_83.33%,#FD49A8_91.67%,#FD2980_100%)]")
                }), (0, e.jsxs)("div", {
                    className: t("relative"),
                    children: [(0, e.jsx)("div", {
                        "aria-hidden": !0,
                        className: "rounded-4 pointer-events-none absolute inset-0 shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_1px_1px_0_rgba(0,0,0,0.08),0_2px_5px_0_rgba(0,0,0,0.10),0_12px_40px_-8px_rgba(0,0,0,0.12),0_4px_34px_-5px_rgba(0,0,0,0.08)]"
                    }), (0, e.jsx)("div", {
                        "aria-hidden": !0,
                        className: "rounded-4 pointer-events-none absolute inset-0 bg-white"
                    }), (0, e.jsxs)("div", {
                        className: "relative",
                        children: [(0, e.jsx)("div", {
                            className: t("p-3"),
                            children: (0, e.jsxs)("div", {
                                className: t("w-fit", "flex", "rounded-full shadow-[0_0_0_0.75px_#EEECEB]"),
                                children: [(0, e.jsxs)("div", {
                                    className: t("py-0.5 pr-2 pl-1", "flex items-center gap-x-1.5", "rounded-full bg-[#E9EEFE] shadow-[0_0_0_0.75px_#BDCEFB]", "text-marketing-affirmative-primary"),
                                    children: [(0, e.jsx)(Te, {}), (0, e.jsx)("span", {
                                        className: "text-xs/5 font-semibold",
                                        children: oe()
                                    })]
                                }), (0, e.jsxs)("div", {
                                    className: t("pr-2.5 pl-2.5", "flex items-center gap-x-2", "text-[#5F5F5D]/70"),
                                    children: [(0, e.jsx)(Oe, {}), (0, e.jsx)("div", {
                                        className: t("h-3 w-px", "bg-[#B5B5B4]/30")
                                    }), (0, e.jsx)(Ie, {}), (0, e.jsx)("div", {
                                        className: t("h-3 w-px", "bg-[#B5B5B4]/30")
                                    }), (0, e.jsx)(Pe, {})]
                                })]
                            })
                        }), (0, e.jsx)("div", {
                            className: t("ml-2 min-w-108.5", "flex flex-col items-start", "pt-8 pb-16 pl-8", "rounded-1.5 bg-[#F9F8F5] shadow-[0_0_0_0.75px_rgba(0,0,0,0.06)]"),
                            children: (0, e.jsxs)("div", {
                                className: t("h-[calc(100cqh_-_103px)] w-78 overflow-hidden", "flex flex-col flex-wrap items-start"),
                                children: [(0, e.jsx)("div", {
                                    className: t(B, "invisible"),
                                    children: a
                                }), (0, e.jsx)("div", {
                                    className: t("mt-4", "w-full", "text-sm/5.5 font-normal text-[#A59781]"),
                                    children: fe()
                                }), (0, e.jsx)("div", {
                                    className: t("mt-4", "px-3 py-2", "rounded-1 bg-[#666054]", "text-sm/5.5 font-semibold text-white"),
                                    children: ie()
                                })]
                            })
                        })]
                    })]
                })]
            }), (0, e.jsx)("div", {
                className: t("relative", "pt-28 pl-18", "md:pt-30 md:pl-20"),
                children: (0, e.jsxs)("div", {
                    className: "relative w-fit",
                    children: [(0, e.jsx)("div", {
                        className: "absolute -inset-1.5",
                        children: (0, e.jsxs)("svg", {
                            className: "size-full overflow-visible",
                            children: [(0, e.jsx)("mask", {
                                id: "home-building-design-frame-draw",
                                children: (0, e.jsx)(_.rect, {
                                    x: "0",
                                    y: "0",
                                    width: "100%",
                                    height: "100%",
                                    fill: "none",
                                    stroke: "white",
                                    strokeWidth: "8",
                                    initial: !1,
                                    animate: s,
                                    variants: Ge
                                })
                            }), (0, e.jsx)(_.rect, {
                                x: "0",
                                y: "0",
                                width: "100%",
                                height: "100%",
                                fill: "none",
                                strokeDasharray: "3 2",
                                mask: "url(#home-building-design-frame-draw)",
                                initial: !1,
                                animate: s,
                                variants: Ve
                            })]
                        })
                    }), (0, e.jsx)("div", {
                        className: t(B, "text-[#696661]"),
                        children: a
                    }), (0, e.jsx)(_.div, {
                        initial: !1,
                        animate: s,
                        variants: Ue,
                        className: t("absolute top-0 left-[calc(100%+12px)]", "px-[9.5px]", "bg-marketing-affirmative-primary rounded-full", "text-[11px]/5 font-semibold text-white"),
                        children: Me
                    }), (0, e.jsx)(_.div, {
                        initial: !1,
                        animate: s,
                        variants: ze,
                        className: "absolute -right-1.5 -bottom-4",
                        children: (0, e.jsx)(ke, {
                            className: "block"
                        })
                    })]
                })
            })]
        })
    },
    A = [{
        id: "analytics",
        icon: (0, e.jsx)(G, {
            size: "large"
        }),
        label: () => _e()
    }, {
        id: "cloud",
        icon: (0, e.jsx)(be, {
            size: "large"
        }),
        label: () => pe()
    }, {
        id: "connectors",
        icon: (0, e.jsx)(we, {
            size: "large"
        }),
        label: () => le()
    }, {
        id: "security",
        icon: (0, e.jsx)(Ce, {
            size: "large"
        }),
        label: () => te()
    }, {
        id: "agentIntegrations",
        icon: (0, e.jsx)(Ee, {
            size: "large"
        }),
        label: () => re()
    }, {
        id: "payments",
        icon: (0, e.jsx)(Le, {
            size: "large"
        }),
        label: () => ne()
    }, {
        id: "seo",
        icon: (0, e.jsx)(ye, {
            size: "large"
        }),
        label: () => Fe()
    }],
    f = s => A.findIndex(a => a.id === s),
    L = f("cloud"),
    Ye = 2500,
    S = [f("connectors"), f("security"), f("connectors"), L],
    qe = [.16, 1, .3, 1],
    Ze = [.22, 1, .36, 1],
    k = "transition-colors duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
    P = 100,
    M = 400,
    $e = (A.length - 1) * P + M,
    Ke = s => ({
        pre: {
            opacity: 0,
            y: 8,
            transition: {
                duration: 0
            }
        },
        playing: {
            opacity: 1,
            y: 0,
            transition: {
                delay: s * P / 1e3,
                duration: M / 1e3,
                ease: Ze
            }
        },
        static: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0
            }
        }
    }),
    Qe = ({
        loopsActive: s,
        phase: a
    }) => {
        const [l, r] = (0, o.useState)(-1), [c, i] = (0, o.useState)(!1), x = l < 0 ? L : S[l % S.length] ? ? L;
        return (0, o.useEffect)(() => {
            if (a === "static") {
                i(!0);
                return
            }
            if (a !== "playing") {
                i(!1), r(-1);
                return
            }
            const n = setTimeout(() => i(!0), $e);
            return () => clearTimeout(n)
        }, [a]), (0, o.useEffect)(() => {
            if (!s || !c) return;
            const n = setTimeout(() => r(d => d + 1), Ye);
            return () => clearTimeout(n)
        }, [s, c, l]), (0, e.jsxs)("div", {
            className: t("relative", "h-80.25 w-full overflow-hidden", "pl-8", "mask-[radial-gradient(93.59%_78.82%_at_37.05%_21.18%,#D9D9D9_33.85%,rgba(115,115,115,0.00)_95.83%)]", "md:pl-14"),
            children: [(0, e.jsx)("div", {
                className: t("absolute top-20 left-0", "h-52 w-84", "rounded-b-8 -rotate-17 opacity-60 blur-[80px]", "bg-[linear-gradient(to_top,#FD49A8_0%,#FD2980_10%,#FC1A58_20%,#FA1F41_30%,#FA2733_40%,#FB3D26_50%,#FC541F_60%,#FE6A1E_70%,#FE771D_80%,#FF861B_90%,#FF8F1B_100%)]")
            }), (0, e.jsxs)("div", {
                className: t("relative", "size-full", "pt-10 pl-6", "flex gap-x-3", "bg-white", "shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_1px_1px_0_rgba(0,0,0,0.08),0_2px_5px_0_rgba(0,0,0,0.10),0_12px_40px_-8px_rgba(0,0,0,0.12),0_4px_34px_-5px_rgba(0,0,0,0.08)]"),
                children: [(0, e.jsx)("div", {
                    className: t("min-w-38.5", "h-[calc(round(down,100cqh_-_21px,36px)_-_4px)] overflow-hidden", "flex flex-col items-start gap-y-1"),
                    children: A.map(({
                        icon: n,
                        label: d
                    }, m) => {
                        const h = m === x;
                        return (0, e.jsxs)(_.div, {
                            initial: !1,
                            animate: a,
                            variants: Ke(m),
                            className: t("relative", "py-1 pr-3 pl-2", "flex items-center gap-x-2"),
                            children: [h && (0, e.jsx)(_.div, {
                                layoutId: "home-building-end-to-end-highlight",
                                initial: !1,
                                transition: {
                                    layout: {
                                        duration: .45,
                                        ease: qe
                                    }
                                },
                                style: {
                                    borderRadius: 8
                                },
                                className: "absolute inset-0 bg-[#616161]/10"
                            }), (0, e.jsx)("div", {
                                className: t("relative", k, h ? "text-black" : "text-[#989898]"),
                                children: n
                            }), (0, e.jsx)("div", {
                                className: t("relative", "font-normal", "text-sm/6", k, h ? "text-black" : "text-[#616161]"),
                                children: d()
                            })]
                        }, m)
                    })
                }), (0, e.jsx)("div", {
                    className: "rounded-tl-1.5 flex-1 border-[0.75px] border-black/6 bg-[#F9F8F5]"
                })]
            })]
        })
    },
    Xe = ({
        className: s
    }) => (0, e.jsxs)("div", {
        className: s,
        children: [(0, e.jsx)("h2", {
            className: t("text-marketing-foreground font-semibold", "text-4xl/[1.1] tracking-[-1.44px]"),
            children: w(ve(), {
                sweep: a => (0, e.jsx)(I, {
                    threshold: .5,
                    children: a
                })
            })
        }), (0, e.jsx)("p", {
            className: t("mt-4 max-w-103", "font-normal text-[#616161]", "text-base/6"),
            children: ae()
        })]
    }),
    Je = 400,
    et = [{
        title: () => xe(),
        description: () => ge(),
        asset: (s, a) => (0, e.jsx)(Se, {
            loopsActive: s,
            phase: a
        })
    }, {
        title: () => de(),
        description: () => ue(),
        asset: (s, a) => (0, e.jsx)(We, {
            phase: a
        })
    }, {
        title: () => me(),
        description: () => se(),
        asset: (s, a) => (0, e.jsx)(Qe, {
            loopsActive: s,
            phase: a
        })
    }],
    Lt = () => {
        const s = O(),
            [a, l] = (0, o.useState)(!0),
            r = (0, o.useRef)(null),
            c = E(r),
            i = E(r, {
                once: !0,
                amount: .35
            }),
            [x, n] = (0, o.useState)(!1),
            [d, m] = (0, o.useState)(!1),
            [h, g] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
            const p = () => l(!document.hidden);
            return p(), document.addEventListener("visibilitychange", p), () => document.removeEventListener("visibilitychange", p)
        }, []), (0, o.useEffect)(() => {
            const p = r.current;
            p && p.getBoundingClientRect().top < window.innerHeight * .65 && m(!0), n(!0)
        }, []);
        const v = x && !d && !s;
        (0, o.useEffect)(() => {
            if (!v || !i) return;
            const p = setTimeout(() => g(u => Math.max(u, 1)), Je),
                j = setTimeout(() => g(u => Math.max(u, 2)), 900),
                b = setTimeout(() => g(u => Math.max(u, 3)), 1400);
            return () => {
                clearTimeout(p), clearTimeout(j), clearTimeout(b)
            }
        }, [v, i]);
        const R = !s && c && a,
            H = p => v ? h > p ? "playing" : "pre" : "static";
        return (0, e.jsxs)("section", {
            className: t("py-26 md:py-40"),
            children: [(0, e.jsx)(Xe, {
                className: "container"
            }), (0, e.jsx)("div", {
                ref: r,
                className: t("mt-10", "px-2", "grid gap-y-3", "sm:container", "md:mt-17", "lg:grid-cols-3 lg:gap-x-3"),
                children: et.map(({
                    title: p,
                    description: j,
                    asset: b
                }, u) => (0, e.jsxs)("div", {
                    "data-testid": "home-building-card",
                    className: t("relative", "min-h-(--card-h) [--card-h:425px]", "grid grid-rows-[minmax(0,1fr)_auto]", "rounded-4 isolate overflow-hidden bg-white", "shadow-[0_0_0_1px_rgba(118,118,118,0.10),0_1px_1px_0_rgba(118,118,118,0.07),0_2px_5px_0_rgba(118,118,118,0.05),0_4px_24px_-8px_rgba(118,118,118,0.10),0_4px_34px_-5px_rgba(118,118,118,0.08)]", "lg:[--card-h:480px]", "xl:[--card-h:425px]"),
                    children: [(0, e.jsx)("div", {
                        className: "[container-type:size]",
                        "aria-hidden": "true",
                        children: b(R, H(u))
                    }), (0, e.jsxs)("div", {
                        className: t("relative", "p-4", "flex flex-col gap-y-2", "md:p-6"),
                        children: [(0, e.jsx)("h3", {
                            className: t("text-marketing-foreground font-semibold text-balance", "text-base/6"),
                            children: p()
                        }), (0, e.jsx)("p", {
                            className: t("max-w-108", "font-normal text-[#616161]", "text-sm/6"),
                            children: j()
                        })]
                    })]
                }, u))
            })]
        })
    },
    tt = .5,
    st = .85,
    at = 2.2,
    C = -14,
    it = s => s < .5 ? 4 * s ** 3 : 1 - (-2 * s + 2) ** 3 / 2,
    ot = "M0.2 662L54.5 650L109 650L163.3 640L217.8 632.9L272 607L326.2 579.1L380.6 571L435.1 571L489.5 565L543.8 553L598.3 537.9L652.5 498L706.8 454.1L761.1 428.1L815.6 418L870 404.9L924.2 377.1L978.8 361.8L1033 313L1087.3 275L1141.7 244L1196.1 204L1250.4 168L1304.7 126.1L1359.2 105L1413.5 73L1468 44.9",
    rt = "M55.2506 649.023L9.95302 659.023C8.78532 659.281 8.97272 661 10.1685 661H1517C1520.31 661 1523 658.314 1523 655V0L1468.72 43.9353C1468.67 43.9783 1468.61 44.0158 1468.55 44.0471L1414.29 72L1360 103.958C1359.95 103.986 1359.9 104.01 1359.85 104.03L1305.71 124.948C1305.62 124.982 1305.53 125.03 1305.46 125.089L1251.21 167L1196.86 203L1142.5 243L1088.14 274L1033.79 312L979.604 360.842C979.489 360.946 979.351 361.022 979.201 361.063L925.171 375.972C925.105 375.991 925.041 376.016 924.979 376.047L870.822 403.945C870.75 403.981 870.675 404.009 870.597 404.028L816.357 417L762.131 426.976C762.044 426.992 761.96 427.019 761.88 427.057L707.749 452.949C707.679 452.983 707.612 453.025 707.551 453.074L653.286 497L599.077 536.891C598.979 536.963 598.868 537.017 598.751 537.049L544.571 552L490.214 564L435.857 570H381.573C381.524 570 381.476 570.004 381.428 570.011L327.307 577.976C327.198 577.992 327.093 578.026 326.995 578.076L272.786 606L218.573 631.931C218.477 631.977 218.375 632.007 218.27 632.021L164.071 639L109.804 648.984C109.744 648.994 109.684 649 109.623 649H55.4662C55.3937 649 55.3214 649.008 55.2506 649.023Z",
    nt = "M-6.9461 797.233L-55.1199 806.016C-56.3184 806.235 -56.1588 808 -54.9406 808H1584C1587.31 808 1590 805.314 1590 802V214L1530.94 253.488C1530.88 253.523 1530.83 253.552 1530.77 253.577L1471.71 278.702L1412.64 307.427C1412.59 307.448 1412.55 307.466 1412.5 307.48L1353.55 326.29C1353.47 326.316 1353.39 326.353 1353.32 326.4L1294.29 364.073L1235.14 396.424L1176 432.369L1116.86 460.227L1057.71 494.375L998.741 538.282C998.629 538.366 998.501 538.424 998.366 538.455L939.516 551.868C939.458 551.881 939.401 551.9 939.346 551.923L880.381 577.009C880.318 577.036 880.252 577.057 880.184 577.07L821.143 588.732L762.112 597.702C762.038 597.713 761.965 597.733 761.895 597.76L702.957 621.044C702.891 621.07 702.827 621.103 702.768 621.143L643.714 660.623L584.71 696.484C584.618 696.54 584.518 696.581 584.413 696.605L525.429 710.048L466.286 720.832L407.143 726.224H348L288.998 733.396C288.904 733.407 288.813 733.432 288.727 733.468L229.714 758.575L170.698 781.89C170.614 781.923 170.526 781.944 170.436 781.954L111.429 788.23L52.3604 797.205C52.3107 797.213 52.2605 797.216 52.2102 797.216H-6.76672C-6.82688 797.216 -6.88692 797.222 -6.9461 797.233Z",
    lt = ({
        phase: s,
        className: a
    }) => {
        const l = (0, o.useRef)(null),
            [r, c] = (0, o.useState)(!1),
            i = Y(C),
            x = W `linear-gradient(90deg, #000 calc(${i}% - 14%), transparent ${i}%)`;
        return (0, o.useEffect)(() => {
            if (s !== "playing" || r) {
                r || i.set(C);
                return
            }
            const n = l.current;
            if (!n) return;
            const d = n.getTotalLength(),
                m = q(0, 1, {
                    delay: st,
                    duration: at,
                    ease: it,
                    onUpdate: h => {
                        const g = n.getPointAtLength(h * d).x;
                        i.set(C + g / 1523 * 142)
                    },
                    onComplete: () => c(!0)
                });
            return () => m.stop()
        }, [r, s, i]), (0, e.jsx)("div", {
            "aria-hidden": "true",
            className: t("relative aspect-[1523/663]", a),
            children: (0, e.jsxs)(_.div, {
                className: "absolute inset-0",
                style: s === "static" || r ? void 0 : {
                    maskImage: x,
                    WebkitMaskImage: x
                },
                children: [(0, e.jsx)("div", {
                    className: "absolute inset-x-0 bottom-0",
                    children: (0, e.jsxs)("svg", {
                        className: "block h-auto w-full",
                        viewBox: "0 0 1523 661",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, e.jsxs)("g", {
                            clipPath: "url(#home-metrics-graph-clip)",
                            children: [(0, e.jsx)("path", {
                                d: rt,
                                fill: "url(#home-metrics-graph-area)"
                            }), (0, e.jsxs)("g", {
                                transform: "translate(0 27)",
                                children: [(0, e.jsx)("g", {
                                    filter: "url(#home-metrics-graph-blur)",
                                    children: (0, e.jsx)("path", {
                                        d: nt,
                                        fill: "#FCFBF8"
                                    })
                                }), (0, e.jsx)("g", {
                                    filter: "url(#home-metrics-graph-edge)",
                                    children: (0, e.jsx)("rect", {
                                        x: "1464",
                                        y: "-121",
                                        width: "102",
                                        height: "530",
                                        fill: "#FCFBF8"
                                    })
                                })]
                            })]
                        }), (0, e.jsxs)("defs", {
                            children: [(0, e.jsxs)("filter", {
                                id: "home-metrics-graph-blur",
                                x: "-119.941",
                                y: "150",
                                width: "1773.94",
                                height: "722",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, e.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, e.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, e.jsx)("feGaussianBlur", {
                                    stdDeviation: "32",
                                    result: "effect1_foregroundBlur"
                                })]
                            }), (0, e.jsxs)("filter", {
                                id: "home-metrics-graph-edge",
                                x: "1416",
                                y: "-169",
                                width: "198",
                                height: "626",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, e.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, e.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    result: "shape"
                                }), (0, e.jsx)("feGaussianBlur", {
                                    stdDeviation: "24",
                                    result: "effect1_foregroundBlur"
                                })]
                            }), (0, e.jsxs)("linearGradient", {
                                id: "home-metrics-graph-area",
                                x1: "1",
                                y1: "645.5",
                                x2: "14.3049",
                                y2: "-7.729",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, e.jsx)("stop", {
                                    offset: "0",
                                    stopColor: "#4F88FF",
                                    stopOpacity: "0"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.047619",
                                    stopColor: "#5185FF",
                                    stopOpacity: "0.027"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.095238",
                                    stopColor: "#5885FF",
                                    stopOpacity: "0.053"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.142857",
                                    stopColor: "#6289FF",
                                    stopOpacity: "0.08"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.190476",
                                    stopColor: "#7491FF",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.238095",
                                    stopColor: "#91A0FF",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.285714",
                                    stopColor: "#B0ACFE",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.333333",
                                    stopColor: "#CEAFFB",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.380952",
                                    stopColor: "#E2A5F2",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.428571",
                                    stopColor: "#F388DE",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.47619",
                                    stopColor: "#FB65C2",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.52381",
                                    stopColor: "#FD49A8",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.571429",
                                    stopColor: "#FD2980",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.619048",
                                    stopColor: "#FC1A58",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.666667",
                                    stopColor: "#FA1F41",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.714286",
                                    stopColor: "#FA2733",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.761905",
                                    stopColor: "#FB3D26",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.809524",
                                    stopColor: "#FC541F",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.857143",
                                    stopColor: "#FE6A1E",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.904762",
                                    stopColor: "#FE771D",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "0.952381",
                                    stopColor: "#FF861B",
                                    stopOpacity: "0.1"
                                }), (0, e.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#FF8F1B",
                                    stopOpacity: "0.1"
                                })]
                            }), (0, e.jsx)("clipPath", {
                                id: "home-metrics-graph-clip",
                                children: (0, e.jsx)("rect", {
                                    width: "1523",
                                    height: "661",
                                    fill: "white"
                                })
                            })]
                        })]
                    })
                }), (0, e.jsxs)("svg", {
                    className: "absolute inset-0 size-full",
                    viewBox: "0 0 1523 663",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, e.jsx)("path", {
                        ref: l,
                        d: ot,
                        stroke: "url(#home-metrics-graph-line)",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, e.jsx)("defs", {
                        children: (0, e.jsxs)("linearGradient", {
                            id: "home-metrics-graph-line",
                            x1: "40.2158",
                            y1: "662",
                            x2: "1468.22",
                            y2: "44.9999",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, e.jsx)("stop", {
                                offset: "0.2",
                                stopColor: "#FCFBF8",
                                stopOpacity: "0"
                            }), (0, e.jsx)("stop", {
                                offset: "0.52",
                                stopColor: "#4E93FF"
                            }), (0, e.jsx)("stop", {
                                offset: "0.6",
                                stopColor: "#4B73FF",
                                stopOpacity: "0.5"
                            }), (0, e.jsx)("stop", {
                                offset: "0.68",
                                stopColor: "#FF81F6"
                            }), (0, e.jsx)("stop", {
                                offset: "0.76",
                                stopColor: "#FF0178"
                            }), (0, e.jsx)("stop", {
                                offset: "0.84",
                                stopColor: "#F71D1D"
                            }), (0, e.jsx)("stop", {
                                offset: "0.92",
                                stopColor: "#FF6D1B"
                            }), (0, e.jsx)("stop", {
                                offset: "1",
                                stopColor: "#FFA517"
                            })]
                        })
                    })]
                })]
            })
        })
    },
    dt = () => (0, e.jsxs)("div", {
        children: [(0, e.jsx)("h2", {
            className: t("text-marketing-foreground font-semibold [text-wrap:balance]", "text-4xl/[1.1] tracking-[-1.44px]"),
            children: w(K(), {
                sweep: s => (0, e.jsx)(I, {
                    threshold: .5,
                    children: s
                })
            })
        }), (0, e.jsx)("p", {
            className: t("mt-4", "text-[#616161]", "text-base/6", "md:text-lg/7"),
            children: ee()
        })]
    }),
    ct = [{
        id: "newProjects",
        label: () => je(),
        value: () => Z()
    }, {
        id: "totalProjects",
        label: () => $(),
        value: () => J()
    }, {
        id: "monthlyVisits",
        label: () => Q(),
        value: () => X()
    }],
    pt = [.22, 1, .36, 1],
    xt = tt + .3,
    mt = .15,
    _t = s => ({
        pre: {
            opacity: 0,
            y: 12,
            transition: {
                duration: 0
            }
        },
        playing: {
            opacity: 1,
            y: 0,
            transition: {
                delay: xt + s * mt,
                duration: .7,
                ease: pt
            }
        },
        static: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0
            }
        }
    }),
    ut = ({
        phase: s,
        className: a
    }) => (0, e.jsx)("dl", {
        className: t("flex flex-col gap-y-3 md:gap-y-5", a),
        children: ct.map(({
            id: l,
            label: r,
            value: c
        }, i) => (0, e.jsxs)(_.div, {
            initial: !1,
            animate: s,
            variants: _t(i),
            className: "flex flex-col gap-y-0.5",
            children: [(0, e.jsx)("dt", {
                className: t("font-normal text-[#616161]", "text-sm/5"),
                children: r()
            }), (0, e.jsx)("dd", {
                className: t("text-marketing-foreground font-medium", "text-[48px]/[1.1] tracking-[-1.44px]"),
                children: c()
            })]
        }, l))
    }),
    wt = () => {
        const s = O(),
            a = (0, o.useRef)(null),
            l = E(a, {
                once: !0,
                amount: .3
            }),
            [r, c] = (0, o.useState)(!1),
            [i, x] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
            const m = a.current;
            m && m.getBoundingClientRect().top < window.innerHeight * .65 && x(!0), c(!0)
        }, []);
        const n = r && !i && !s;
        let d = "static";
        return n && (d = l ? "playing" : "pre"), (0, e.jsx)("section", {
            children: (0, e.jsx)("div", {
                className: t("mx-auto max-w-384", "pb-13", "md:px-2 md:pb-20"),
                children: (0, e.jsxs)("div", {
                    className: t("relative overflow-hidden", "px-4", "md:min-h-[48rem] md:px-0"),
                    children: [(0, e.jsx)("div", {
                        ref: a,
                        className: t("relative z-10 container", "pt-2 pb-12", "md:pt-30 md:pb-40"),
                        children: (0, e.jsxs)("div", {
                            className: "max-w-152",
                            children: [(0, e.jsx)(dt, {}), (0, e.jsx)(ut, {
                                phase: d,
                                className: "mt-12 md:mt-10"
                            })]
                        })
                    }), (0, e.jsx)("div", {
                        className: t("absolute inset-x-0 bottom-0", "md:top-44 md:bottom-auto"),
                        children: (0, e.jsx)("div", {
                            className: "md:container",
                            children: (0, e.jsx)(lt, {
                                phase: d
                            })
                        })
                    })]
                })
            })
        })
    };
export {
    Lt as n, wt as t
};