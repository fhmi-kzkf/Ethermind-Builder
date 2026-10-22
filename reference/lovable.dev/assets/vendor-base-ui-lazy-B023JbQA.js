import {
    o as lo
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as yi,
    n as Ri,
    r as Si
} from "./vendor-react-Fx2PtaaM.js";
import {
    r as Ii
} from "./vendor-sync-store-hJwz-_Wy.js";
import {
    $ as Jt,
    At as We,
    B as jr,
    C as ft,
    Ct as co,
    D as yt,
    E as ht,
    Et as bt,
    F as fe,
    G as Ci,
    I as Te,
    J as Ur,
    L as ur,
    M as xt,
    N as Hn,
    O as Pi,
    Ot as Bt,
    P as uo,
    Q as Ln,
    R as fo,
    S as en,
    St as Lt,
    T as _r,
    Tt as Qt,
    U as wi,
    V as Ti,
    W as Ei,
    X as Mt,
    Y as Fn,
    Z as po,
    _ as pn,
    _t as Pt,
    at as Un,
    b as Rt,
    bt as le,
    ct as Wr,
    dt as Mi,
    f as Ai,
    ft as Vi,
    g as tn,
    h as nn,
    ht as Ft,
    k as Vt,
    kt as Bn,
    m as mn,
    mt as Je,
    nt as zr,
    p as Oi,
    pt as dr,
    rt as Qe,
    tt as mo,
    v as ki,
    w as st,
    wt as kt,
    x as Di,
    y as Ni,
    yt as Ve,
    z as Li
} from "./vendor-base-ui-field-BdT_EZJM.js";
import {
    A as Fi,
    An as Hi,
    At as $r,
    Bn as At,
    Dt as pt,
    En as ho,
    Et as rn,
    Fn as _n,
    Hn as go,
    In as Bi,
    It as bo,
    K as ji,
    Kt as vo,
    Ln as Ui,
    Lt as xo,
    Mn as Ht,
    Nn as hn,
    On as yo,
    Ot as Ro,
    Pn as gn,
    Qt as So,
    Rn as _i,
    Rt as Io,
    Sn as Co,
    T as Wi,
    Un as zi,
    Vn as Yr,
    Wn as $i,
    Wt as bn,
    X as Yi,
    Y as qi,
    Z as Po,
    Zt as wo,
    _n as Gi,
    _t as To,
    bn as Eo,
    bt as Mo,
    cn as Ao,
    ct as on,
    dt as Xi,
    et as Vo,
    ft as Ki,
    gn as Qi,
    gt as Zi,
    h as Ji,
    ht as fr,
    jn as ea,
    jt as pr,
    k as ta,
    kt as na,
    m as Oo,
    mt as ra,
    nn as ko,
    ot as Do,
    pt as oa,
    qt as No,
    st as Lo,
    tt as Dt,
    vn as y,
    vt as Fo,
    xn as mr,
    yn as sa,
    zn as ia,
    zt as jt
} from "./vendor-base-ui-eager-BVTTpYm_.js";
import {
    D as Kt,
    E as Ut,
    O as aa,
    b as la,
    u as ca,
    w as ua
} from "./vendor-floating-ui-98f9kiPk.js";
import {
    _ as lr,
    g as Ho,
    h as da,
    v as Ge
} from "./vendor-base-ui-chrome-CdtDcIlx.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "834cdf77-2739-499c-99ea-0c18aa55e1a2", e._sentryDebugIdIdentifier = "sentry-dbid-834cdf77-2739-499c-99ea-0c18aa55e1a2")
    })()
} catch {}
var q = Si(),
    n = lo(yi(), 1);

function fa() {
    const [, e] = n.useState({});
    return n.useCallback(() => {
        e({})
    }, [])
}

function pa(e) {
    const [t, r] = n.useState({
        current: e,
        previous: null
    });
    return Object.is(e, t.current) || r({
        current: e,
        previous: t.current
    }), t.previous
}
var Yl = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, s = Fi().useState("open"), {
            arrowRef: c,
            side: i,
            align: f,
            arrowUncentered: m,
            arrowStyles: g
        } = Wi();
        return le("div", t, {
            state: {
                open: s,
                side: i,
                align: f,
                uncentered: m
            },
            ref: [r, c],
            props: [{
                style: g,
                "aria-hidden": !0
            }, l],
            stateAttributesMapping: bn
        })
    }),
    ma = class extends sa {
        constructor() {
            super(ta(), "Popover")
        }
        open(e) {
            this.openByTrigger(e)
        }
        close() {
            this.closePopup()
        }
        get isOpen() {
            return this.attachedStore ? .select("open") ? ? !1
        }
    };

function ql() {
    return new ma
}
var Bo = n.createContext(void 0);

function ha() {
    return n.useContext(Bo)
}
var Gl = n.forwardRef(function(t, r) {
        const {
            className: o,
            defaultPressed: u = !1,
            disabled: d = !1,
            form: l,
            onPressedChange: s,
            pressed: c,
            render: i,
            type: f,
            value: m,
            nativeButton: g = !0,
            style: h,
            ...b
        } = t, p = st(m || void 0), R = ha(), v = R ? .value ? ? [], x = R ? void 0 : u, a = (d || R ? .disabled) ? ? !1, [S, I] = ft({
            controlled: R ? p !== void 0 && v.indexOf(p) > -1 : c,
            default: x,
            name: "Toggle",
            state: "pressed"
        }), {
            getButtonProps: E,
            buttonRef: N
        } = pt({
            disabled: a,
            native: g
        }), w = {
            disabled: a,
            pressed: S
        }, k = [N, r], T = [{
            "aria-pressed": S,
            onClick($) {
                const B = !S,
                    D = Te(Qe, $.nativeEvent);
                s ? .(B, D), !D.isCanceled && (p && R ? .setGroupValue ? .(p, B, D), !D.isCanceled && I(B))
            }
        }, b, E], P = le("button", t, {
            enabled: !R,
            state: w,
            ref: k,
            props: T
        }), A = n.useMemo(() => ({
            disabled: a,
            focusableWhenDisabled: !1
        }), [a]);
        return R ? (0, q.jsx)(qi, {
            tag: "button",
            render: i,
            className: o,
            style: h,
            metadata: A,
            state: w,
            refs: k,
            props: T
        }) : P
    }),
    ga = n.createContext(void 0);

function ba() {
    return n.useContext(ga)
}
var Xl = n.forwardRef(function(t, r) {
        const {
            defaultValue: o,
            disabled: u = !1,
            loopFocus: d = !0,
            onValueChange: l,
            orientation: s = "horizontal",
            multiple: c = !1,
            value: i,
            className: f,
            render: m,
            style: g,
            ...h
        } = t, b = Mo(!0), p = ba(), R = i !== void 0 || o !== void 0, v = (b ? .disabled ? ? !1) || (p ? .disabled ? ? !1) || u, [x, a] = ft({
            controlled: i,
            default: i === void 0 ? o ? ? kt : void 0,
            name: "ToggleGroup",
            state: "value"
        }), S = fe((k, T, P) => {
            let A;
            c ? (A = x.slice(), T ? A.push(k) : A.splice(x.indexOf(k), 1)) : A = T ? [k] : [], l ? .(A, P), !P.isCanceled && a(A)
        }), I = {
            disabled: v,
            multiple: c,
            orientation: s
        }, E = n.useMemo(() => ({
            disabled: v,
            setGroupValue: S,
            value: x,
            isValueInitialized: R
        }), [v, S, x, R]), N = {
            role: "group"
        }, w = le("div", t, {
            enabled: !!b,
            state: I,
            ref: r,
            props: [N, h]
        });
        return (0, q.jsx)(Bo.Provider, {
            value: E,
            children: b ? w : (0, q.jsx)(Oo, {
                render: m,
                className: f,
                style: g,
                state: I,
                refs: [r],
                props: [N, h],
                loopFocus: d,
                enableHomeAndEndKeys: !0,
                orientation: s
            })
        })
    }),
    jo = n.createContext(void 0);

function vn() {
    const e = n.useContext(jo);
    if (e === void 0) throw new Error(We(53));
    return e
}

function Nt(e, t, r) {
    if (!e) return 0;
    const o = getComputedStyle(e),
        u = `${t}${r==="x"?"Inline":"Block"}`,
        d = parseFloat(o[`${u}Start`]);
    return r === "x" && t === "margin" ? d * 2 : d + parseFloat(o[`${u}End`])
}
var Vn = "base-ui-disable-scrollbar",
    dn = {
        className: Vn,
        getElement(e) {
            return (0, q.jsx)("style", {
                nonce: e,
                href: Vn,
                precedence: "base-ui:low",
                children: `.${Vn}{scrollbar-width:none}.${Vn}::-webkit-scrollbar{display:none}`
            })
        }
    },
    qt = e => t => t ? {
        [e]: ""
    } : null,
    Wn = {
        hasOverflowX: qt("data-has-overflow-x"),
        hasOverflowY: qt("data-has-overflow-y"),
        overflowXStart: qt("data-overflow-x-start"),
        overflowXEnd: qt("data-overflow-x-end"),
        overflowYStart: qt("data-overflow-y-start"),
        overflowYEnd: qt("data-overflow-y-end"),
        cornerHidden: () => null
    },
    va = n.createContext(void 0),
    xa = {
        disableStyleElements: !1
    };

function hr() {
    return n.useContext(va) ? ? xa
}
var ya = {
        x: 0,
        y: 0
    },
    qr = {
        width: 0,
        height: 0
    },
    Ra = {
        xStart: !1,
        xEnd: !1,
        yStart: !1,
        yEnd: !1
    },
    Sa = {
        x: !0,
        y: !0,
        corner: !0
    },
    Kl = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            overflowEdgeThreshold: d,
            style: l,
            ...s
        } = t, {
            xStart: c,
            xEnd: i,
            yStart: f,
            yEnd: m
        } = Ia(d), g = st(), h = Pt(), b = Pt(), {
            nonce: p,
            disableStyleElements: R
        } = hr(), [v, x] = n.useState(!1), [a, S] = n.useState(!1), [I, E] = n.useState(!1), [N, w] = n.useState(!1), [k, T] = n.useState(!1), [P, A] = n.useState(qr), [$, B] = n.useState(qr), [D, X] = n.useState(Ra), [O, G] = n.useState(Sa), z = n.useRef(null), V = n.useRef(null), C = n.useRef(null), _ = n.useRef(null), j = n.useRef(null), H = n.useRef(null), J = n.useRef(null), U = n.useRef(null), W = n.useRef(0), Y = n.useRef(0), ye = n.useRef(0), be = n.useRef(0), K = n.useRef("vertical"), Z = n.useRef(ya), ge = n.useRef(null);

        function pe(oe) {
            const ce = oe ? E : S,
                he = oe ? h : b;
            ce(!0), he.start(500, () => {
                ce(!1)
            })
        }
        const ne = fe(oe => {
                const ce = oe.x - Z.current.x,
                    he = oe.y - Z.current.y;
                Z.current = oe, he !== 0 && pe(!0), ce !== 0 && pe(!1)
            }),
            me = fe(() => {
                const oe = V.current;
                oe && ge.current === null && (ge.current = oe.style.scrollSnapType, oe.style.scrollSnapType = "none")
            }),
            L = fe(oe => {
                if (oe.button !== 0 || U.current !== null && (K.current === "vertical" ? j.current : H.current) ? .hasPointerCapture(U.current)) return;
                U.current = oe.pointerId, W.current = oe.clientY, Y.current = oe.clientX, K.current = oe.currentTarget.getAttribute("data-orientation");
                const ce = V.current;
                ce && (ye.current = ce.scrollTop, be.current = ce.scrollLeft, me()), (K.current === "vertical" ? j.current : H.current) ? .setPointerCapture(oe.pointerId)
            }),
            ee = fe(oe => {
                if (oe.pointerId !== U.current) return;
                U.current = null, (K.current === "vertical" ? E : S)(!1), ge.current !== null && (V.current && (V.current.style.scrollSnapType = ge.current), ge.current = null);
                const ce = K.current === "vertical" ? j.current : H.current;
                ce ? .hasPointerCapture(oe.pointerId) && ce.releasePointerCapture(oe.pointerId)
            }),
            se = fe(oe => {
                if (oe.pointerId !== U.current) return;
                if (oe.buttons % 2 === 0) {
                    ee(oe);
                    return
                }
                const ce = V.current;
                if (!ce) return;
                const he = K.current === "vertical",
                    Ce = he ? j.current : H.current,
                    Ie = he ? C.current : _.current;
                if (!Ce || !Ie) return;
                const Be = he ? "y" : "x",
                    Se = Nt(Ie, "padding", Be),
                    Ne = Nt(Ce, "margin", Be),
                    Fe = he ? Ce.offsetHeight : Ce.offsetWidth,
                    _e = (he ? Ie.offsetHeight : Ie.offsetWidth) - Fe - Se - Ne,
                    Le = he ? oe.clientY - W.current : oe.clientX - Y.current,
                    Re = _e <= 0 ? 0 : Le / _e,
                    te = he ? ce.scrollHeight : ce.scrollWidth,
                    ke = he ? ce.clientHeight : ce.clientWidth,
                    Ee = (he ? ye.current : be.current) + Re * (te - ke);
                he ? ce.scrollTop = Ee : ce.scrollLeft = Ee, oe.preventDefault(), pe(he)
            });

        function re(oe) {
            w(oe.pointerType === "touch")
        }

        function ue(oe) {
            if (re(oe), oe.pointerType !== "touch") {
                const ce = Je(z.current, oe.target);
                x(ce)
            }
        }
        const Ae = n.useMemo(() => ({
                scrolling: a || I,
                hasOverflowX: !O.x,
                hasOverflowY: !O.y,
                overflowXStart: D.xStart,
                overflowXEnd: D.xEnd,
                overflowYStart: D.yStart,
                overflowYEnd: D.yEnd,
                cornerHidden: O.corner
            }), [a, I, O.x, O.y, O.corner, D]),
            M = {
                role: "presentation",
                onPointerEnter: ue,
                onPointerMove: ue,
                onPointerDown: re,
                onPointerLeave() {
                    x(!1)
                },
                style: {
                    position: "relative",
                    "--scroll-area-corner-height": `${P.height}px`,
                    "--scroll-area-corner-width": `${P.width}px`
                }
            },
            ae = le("div", t, {
                state: Ae,
                ref: [r, z],
                props: [M, s],
                stateAttributesMapping: Wn
            }),
            Oe = n.useMemo(() => ({
                handlePointerDown: L,
                handlePointerMove: se,
                handlePointerUp: ee,
                handleScroll: ne,
                disableViewportSnap: me,
                cornerSize: P,
                setCornerSize: A,
                thumbSize: $,
                setThumbSize: B,
                hasMeasuredScrollbar: k,
                setHasMeasuredScrollbar: T,
                touchModality: N,
                cornerRef: J,
                scrollingX: a,
                scrollingY: I,
                hovering: v,
                setHovering: x,
                viewportRef: V,
                scrollbarYRef: C,
                scrollbarXRef: _,
                thumbYRef: j,
                thumbXRef: H,
                rootId: g,
                hiddenState: O,
                setHiddenState: G,
                overflowEdges: D,
                setOverflowEdges: X,
                viewportState: Ae,
                overflowEdgeThreshold: {
                    xStart: c,
                    xEnd: i,
                    yStart: f,
                    yEnd: m
                }
            }), [L, se, ee, ne, me, P, $, k, N, a, I, v, g, O, D, Ae, c, i, f, m]);
        return (0, q.jsxs)(jo.Provider, {
            value: Oe,
            children: [!R && dn.getElement(p), ae]
        })
    });

function Ia(e) {
    const t = typeof e == "number" ? {
        xStart: e,
        xEnd: e,
        yStart: e,
        yEnd: e
    } : e;
    return {
        xStart: Math.max(0, t ? .xStart || 0),
        xEnd: Math.max(0, t ? .xEnd || 0),
        yStart: Math.max(0, t ? .yStart || 0),
        yEnd: Math.max(0, t ? .yEnd || 0)
    }
}
var Uo = n.createContext(void 0);

function Ca() {
    const e = n.useContext(Uo);
    if (e === void 0) throw new Error(We(55));
    return e
}

function gr(e, t) {
    return Math.max(0, e - t)
}

function Zt(e, t) {
    if (t <= 0) return 0;
    const r = Ge(e, 0, t),
        o = r,
        u = t - r,
        d = o <= 1,
        l = u <= 1;
    return d && l ? o <= u ? 0 : t : d ? 0 : l ? t : r
}
var _o = ["--scroll-area-overflow-x-start", "--scroll-area-overflow-x-end", "--scroll-area-overflow-y-start", "--scroll-area-overflow-y-end"],
    Gr = !1;

function Pa() {
    Gr || go || (typeof CSS < "u" && "registerProperty" in CSS && _o.forEach(e => {
        try {
            CSS.registerProperty({
                name: e,
                syntax: "<length>",
                inherits: !1,
                initialValue: "0px"
            })
        } catch {}
    }), Gr = !0)
}
var Ql = n.forwardRef(function(t, r) {
    const {
        render: o,
        className: u,
        style: d,
        ...l
    } = t, {
        viewportRef: s,
        scrollbarYRef: c,
        scrollbarXRef: i,
        thumbYRef: f,
        thumbXRef: m,
        cornerRef: g,
        cornerSize: h,
        setCornerSize: b,
        setThumbSize: p,
        rootId: R,
        setHiddenState: v,
        hiddenState: x,
        setHasMeasuredScrollbar: a,
        handleScroll: S,
        touchModality: I,
        setHovering: E,
        setOverflowEdges: N,
        overflowEdgeThreshold: w,
        viewportState: k
    } = vn(), T = jt(), P = n.useRef(!0), A = n.useRef([NaN, NaN, NaN, NaN]), $ = Pt(), B = Pt(), D = fe(() => {
        const V = s.current,
            C = c.current,
            _ = i.current,
            j = f.current,
            H = m.current,
            J = g.current;
        if (!V) return;
        const U = V.scrollHeight,
            W = V.scrollWidth,
            Y = V.clientHeight,
            ye = V.clientWidth,
            be = V.scrollTop,
            K = V.scrollLeft,
            Z = A.current,
            ge = Number.isNaN(Z[0]);
        if (Z[0] = Y, Z[1] = U, Z[2] = ye, Z[3] = W, ge && a(!0), U === 0 || W === 0) return;
        const pe = wa(V),
            ne = pe.y,
            me = pe.x,
            L = ye / W,
            ee = Y / U,
            se = Math.max(0, W - ye),
            re = Math.max(0, U - Y);
        let ue = 0,
            Ae = 0;
        me || (ue = Zt(T === "rtl" ? -K : K, se), Ae = se - ue);
        const M = ne ? 0 : Zt(be, re),
            ae = ne ? 0 : re - M,
            Oe = me ? 0 : ye,
            oe = ne ? 0 : Y;
        let ce = 0,
            he = 0;
        !me && !ne && (ce = C ? .offsetWidth || 0, he = _ ? .offsetHeight || 0);
        const Ce = h.width === 0 && h.height === 0,
            Ie = Ce ? ce : 0,
            Be = Ce ? he : 0,
            Se = Nt(_, "padding", "x"),
            Ne = Nt(C, "padding", "y"),
            Fe = Nt(H, "margin", "x"),
            _e = Nt(j, "margin", "y"),
            Le = Oe - Se - Fe,
            Re = oe - Ne - _e,
            te = _ ? Math.min(_.offsetWidth - Ie, Le) : Le,
            ke = C ? Math.min(C.offsetHeight - Be, Re) : Re,
            Ee = Math.max(16, te * L),
            De = Math.max(16, ke * ee);
        if (p(de => On(de, {
                width: Ee,
                height: De
            })), C && j) {
            const de = Xr(j, "--scroll-area-thumb-height", be, re, U, De, C.offsetHeight - De - Ne - _e);
            j.style.transform = `translate3d(0,${de}px,0)`
        }
        if (_ && H) {
            const de = _.offsetWidth - Ee - Se - Fe,
                rt = Xr(H, "--scroll-area-thumb-width", T === "rtl" ? -K : K, se, W, Ee, de);
            H.style.transform = `translate3d(${T==="rtl"?-rt:rt}px,0,0)`
        }
        const Ye = [ue, Ae, M, ae];
        _o.forEach((de, rt) => {
            V.style.setProperty(de, `${Ye[rt]}px`)
        }), J && b(de => On(de, {
            width: ce,
            height: he
        })), v(de => On(de, pe));
        const He = {
            xStart: !me && ue > w.xStart,
            xEnd: !me && Ae > w.xEnd,
            yStart: !ne && M > w.yStart,
            yEnd: !ne && ae > w.yEnd
        };
        N(de => On(de, He))
    });
    Ve(() => {
        Pa()
    }, []), Ve(() => {
        queueMicrotask(D)
    }, [D, x, T, w.xStart, w.xEnd, w.yStart, w.yEnd]), Ve(() => {
        s.current ? .matches(":hover") && E(!0)
    }, [s, E]), Ve(() => {
        const V = s.current;
        if (typeof ResizeObserver > "u" || !V) return;
        let C = !1;
        const _ = new ResizeObserver(() => {
            if (!C) {
                C = !0;
                const j = A.current;
                if (j[0] === V.clientHeight && j[1] === V.scrollHeight && j[2] === V.clientWidth && j[3] === V.scrollWidth) return
            }
            D()
        });
        return _.observe(V), B.start(0, () => {
            const j = V.getAnimations({
                subtree: !0
            });
            j.length !== 0 && Promise.allSettled(j.map(H => H.finished)).then(D).catch(() => {})
        }), () => {
            _.disconnect(), B.clear()
        }
    }, [D, s, B]);

    function X() {
        P.current = !1
    }
    const O = {
            role: "presentation",
            ...R && {
                "data-id": `${R}-viewport`
            },
            tabIndex: x.x && x.y ? -1 : 0,
            className: dn.className,
            style: {
                overflow: "scroll"
            },
            onScroll() {
                s.current && (D(), (I || !P.current) && S({
                    x: s.current.scrollLeft,
                    y: s.current.scrollTop
                }), $.start(100, () => {
                    P.current = !0
                }))
            },
            onWheel: X,
            onPointerMove: X,
            onPointerEnter: X,
            onKeyDown: X
        },
        G = le("div", t, {
            ref: [r, s],
            state: k,
            props: [O, l],
            stateAttributesMapping: Wn
        }),
        z = n.useMemo(() => ({
            computeThumbPosition: D
        }), [D]);
    return (0, q.jsx)(Uo.Provider, {
        value: z,
        children: G
    })
});

function wa(e) {
    const t = e.clientHeight >= e.scrollHeight,
        r = e.clientWidth >= e.scrollWidth;
    return {
        y: t,
        x: r,
        corner: t || r
    }
}

function On(e, t) {
    for (const r in t)
        if (e[r] !== t[r]) return t;
    return e
}

function Xr(e, t, r, o, u, d, l) {
    const s = Ge(r, 0, o),
        c = r - s,
        i = Math.max(16, d * u / (u + Math.abs(c)));
    return e.style.setProperty(t, c ? `${i}px` : ""), (o ? s / o * l : 0) + (c > 0 ? d - i : 0)
}
var Wo = n.createContext(void 0);

function Ta() {
    const e = n.useContext(Wo);
    if (e === void 0) throw new Error(We(54));
    return e
}
var Zl = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            orientation: d = "vertical",
            keepMounted: l = !1,
            style: s,
            ...c
        } = t, {
            hovering: i,
            scrollingX: f,
            scrollingY: m,
            hiddenState: g,
            scrollbarYRef: h,
            scrollbarXRef: b,
            viewportRef: p,
            thumbYRef: R,
            thumbXRef: v,
            handlePointerDown: x,
            handlePointerUp: a,
            handleScroll: S,
            disableViewportSnap: I,
            rootId: E,
            thumbSize: N,
            hasMeasuredScrollbar: w,
            viewportState: k
        } = vn(), T = d === "vertical", P = { ...k,
            hovering: i,
            scrolling: T ? m : f,
            orientation: d
        }, A = jt(), $ = !w && !l, B = T ? g.y : g.x, D = l || !B;
        n.useEffect(() => {
            if (!D) return;
            const G = p.current,
                z = T ? h.current : b.current;
            if (!z) return;

            function V(C) {
                if (!G || C.ctrlKey) return;
                const _ = !T,
                    j = _ ? "scrollLeft" : "scrollTop",
                    H = _ ? C.deltaX : C.deltaY;
                if (H === 0) return;
                const J = _ ? G.scrollWidth - G.clientWidth : G.scrollHeight - G.clientHeight,
                    U = _ && A === "rtl" ? -J : 0,
                    W = _ && A === "rtl" ? 0 : J,
                    Y = G[j];
                Y <= U && H < 0 || Y >= W && H > 0 || (C.preventDefault(), G[j] = Math.min(W, Math.max(U, Y + H)), S({
                    x: G.scrollLeft,
                    y: G.scrollTop
                }))
            }
            return _n(z, "wheel", V, {
                passive: !1
            })
        }, [A, S, T, b, h, D, p]);
        const X = { ...E && {
                    "data-id": `${E}-scrollbar`
                },
                onPointerDown(G) {
                    if (G.button !== 0) return;
                    const z = Ft(G.nativeEvent),
                        V = T ? R.current : v.current;
                    if (V && Je(V, z)) return;
                    const C = p.current;
                    if (!C) return;
                    const _ = T ? h.current : b.current;
                    if (!V || !_) return;
                    const j = T ? "y" : "x",
                        H = Nt(V, "margin", j),
                        J = Nt(_, "padding", j),
                        U = T ? V.offsetHeight : V.offsetWidth,
                        W = _.getBoundingClientRect(),
                        Y = T ? G.clientY - W.top - U / 2 - J + H / 2 : G.clientX - W.left - U / 2 - J + H / 2,
                        ye = T ? C.scrollHeight : C.scrollWidth,
                        be = T ? C.clientHeight : C.clientWidth,
                        K = (T ? _.offsetHeight : _.offsetWidth) - U - J - H;
                    if (K <= 0) return;
                    const Z = Y / K,
                        ge = ye - be;
                    I(), T ? C.scrollTop = Z * ge : A === "rtl" ? C.scrollLeft = -(1 - Z) * ge : C.scrollLeft = Z * ge, S({
                        x: C.scrollLeft,
                        y: C.scrollTop
                    }), x(G)
                },
                onPointerUp: a,
                onPointerCancel: a,
                style: {
                    position: "absolute",
                    touchAction: "none",
                    WebkitUserSelect: "none",
                    userSelect: "none",
                    visibility: $ ? "hidden" : void 0,
                    ...T ? {
                        top: 0,
                        bottom: "var(--scroll-area-corner-height)",
                        insetInlineEnd: 0,
                        "--scroll-area-thumb-height": `${N.height}px`
                    } : {
                        insetInlineStart: 0,
                        insetInlineEnd: "var(--scroll-area-corner-width)",
                        bottom: 0,
                        "--scroll-area-thumb-width": `${N.width}px`
                    }
                }
            },
            O = le("div", t, {
                ref: [r, T ? h : b],
                state: P,
                props: [X, c],
                stateAttributesMapping: Wn
            });
        return D ? (0, q.jsx)(Wo.Provider, {
            value: d,
            children: O
        }) : null
    }),
    Jl = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, {
            computeThumbPosition: s
        } = Ca(), {
            hasMeasuredScrollbar: c,
            viewportState: i
        } = vn(), f = n.useRef(null), m = n.useRef(c);
        return Ve(() => {
            if (typeof ResizeObserver > "u") return;
            let g = !1;
            const h = new ResizeObserver(() => {
                !g && (g = !0, !m.current) || s()
            });
            return f.current && h.observe(f.current), () => {
                h.disconnect()
            }
        }, [s]), le("div", t, {
            ref: [r, f],
            state: i,
            stateAttributesMapping: Wn,
            props: [{
                role: "presentation",
                style: {
                    minWidth: "fit-content"
                }
            }, l]
        })
    }),
    ec = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, {
            thumbYRef: s,
            thumbXRef: c,
            handlePointerDown: i,
            handlePointerMove: f,
            handlePointerUp: m,
            scrollingX: g,
            scrollingY: h,
            hasMeasuredScrollbar: b
        } = vn(), p = Ta(), R = p === "vertical";
        return le("div", t, {
            ref: [r, R ? s : c],
            state: {
                scrolling: R ? h : g,
                orientation: p
            },
            props: [{
                onPointerDown: i,
                onPointerMove: f,
                onPointerUp: m,
                onPointerCancel: m,
                style: {
                    visibility: b ? void 0 : "hidden",
                    ...R ? {
                        height: "var(--scroll-area-thumb-height)"
                    } : {
                        width: "var(--scroll-area-thumb-width)"
                    }
                }
            }, l]
        })
    }),
    tc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, {
            cornerRef: s,
            cornerSize: c,
            hiddenState: i
        } = vn(), f = le("div", t, {
            ref: [r, s],
            props: [{
                style: {
                    position: "absolute",
                    bottom: 0,
                    insetInlineEnd: 0,
                    width: c.width,
                    height: c.height
                }
            }, l]
        });
        return i.corner ? null : f
    });

function zo(e) {
    const t = n.useRef(!0);
    t.current && (t.current = !1, e())
}
var $o = n.createContext(null);

function wt() {
    const e = n.useContext($o);
    if (e === null) throw new Error(We(60));
    return e
}
var Yo = (e, t) => Object.is(e, t);

function mt(e, t, r) {
    return e == null || t == null ? Object.is(e, t) : r(e, t)
}

function Ea(e, t, r) {
    return !e || e.length === 0 ? !1 : e.some(o => o === void 0 ? !1 : mt(t, o, r))
}

function _t(e, t, r) {
    return !e || e.length === 0 ? -1 : e.findIndex(o => o === void 0 ? !1 : mt(o, t, r))
}

function ir(e, t, r, o) {
    const u = _t(e, o && Array.isArray(t) ? t[t.length - 1] : t, r);
    return u === -1 ? null : u
}

function qo(e, t, r) {
    return e.filter(o => !mt(t, o, r))
}

function br(e) {
    return e != null && e.length > 0 && typeof e[0] == "object" && e[0] != null && "items" in e[0]
}

function Go(e) {
    if (!Array.isArray(e)) return e != null && "null" in e;
    const t = e;
    if (br(t)) {
        for (const r of t)
            for (const o of r.items)
                if (o && o.value == null && o.label != null) return !0;
        return !1
    }
    for (const r of t)
        if (r && r.value == null && r.label != null) return !0;
    return !1
}

function dt(e, t) {
    if (t && e != null) return t(e) ? ? "";
    if (e && typeof e == "object") {
        if ("label" in e && e.label != null) return String(e.label);
        if ("value" in e) return String(e.value)
    }
    return lr(e)
}

function vt(e, t) {
    return t && e != null ? t(e) ? ? "" : e && typeof e == "object" && "value" in e && "label" in e ? lr(e.value) : lr(e)
}

function vr(e, t, r) {
    function o() {
        return dt(e, r)
    }
    if (r && e != null) return r(e);
    if (e && typeof e == "object" && "label" in e && e.label != null) return e.label;
    if (t && !Array.isArray(t)) return t[e] ? ? o();
    if (Array.isArray(t)) {
        const u = t,
            d = br(u) ? u.flatMap(l => l.items) : u;
        if (e == null || typeof e != "object") {
            const l = d.find(s => s.value === e);
            return l && l.label != null ? l.label : o()
        }
        if ("value" in e) {
            const l = d.find(s => s && s.value === e.value);
            if (l && l.label != null) return l.label
        }
    }
    return o()
}

function Xo(e, t, r) {
    return e.reduce((o, u, d) => (d > 0 && o.push(", "), o.push((0, q.jsx)(n.Fragment, {
        children: vr(u, t, r)
    }, d)), o), [])
}
var xe = {
    id: e => e.id,
    labelId: e => e.labelId,
    modal: e => e.modal,
    items: e => e.items,
    itemToStringLabel: e => e.itemToStringLabel,
    isItemEqualToValue: e => e.isItemEqualToValue,
    value: e => e.value,
    hasSelectedValue: e => {
        const {
            value: t,
            multiple: r,
            itemToStringValue: o
        } = e;
        return t == null ? !1 : r && Array.isArray(t) ? t.length > 0 : vt(t, o) !== ""
    },
    hasNullItemLabel: (e, t) => t ? Go(e.items) : !1,
    open: e => e.open,
    mounted: e => e.mounted,
    forceMount: e => e.forceMount,
    transitionStatus: e => e.transitionStatus,
    openMethod: e => e.openMethod,
    activeIndex: e => e.activeIndex,
    selectedIndex: e => e.selectedIndex,
    isActive: (e, t) => e.activeIndex === t,
    isSelected: (e, t) => {
        const r = e.isItemEqualToValue,
            o = e.value;
        return e.multiple ? Array.isArray(o) && o.some(u => mt(t, u, r)) : mt(t, o, r)
    },
    isSelectedByFocus: (e, t) => e.selectedIndex === t,
    popupProps: e => e.popupProps,
    triggerProps: e => e.triggerProps,
    triggerElement: e => e.triggerElement,
    positionerElement: e => e.positionerElement,
    listElement: e => e.listElement,
    popupSide: e => e.popupSide,
    scrollUpArrowVisible: e => e.scrollUpArrowVisible,
    scrollDownArrowVisible: e => e.scrollDownArrowVisible,
    hasScrollArrows: e => e.hasScrollArrows
};

function zn(e, t, r = (o, u) => o === u) {
    return e.length === t.length && e.every((o, u) => r(o, t[u]))
}

function nc(e) {
    const {
        id: t,
        value: r,
        defaultValue: o = null,
        onValueChange: u,
        open: d,
        defaultOpen: l = !1,
        onOpenChange: s,
        name: c,
        form: i,
        autoComplete: f,
        disabled: m = !1,
        readOnly: g = !1,
        required: h = !1,
        modal: b = !0,
        actionsRef: p,
        inputRef: R,
        onOpenChangeComplete: v,
        items: x,
        multiple: a = !1,
        itemToStringLabel: S,
        itemToStringValue: I,
        isItemEqualToValue: E = Yo,
        highlightItemOnHover: N = !0,
        children: w
    } = e, {
        clearErrors: k
    } = mn(), {
        setDirty: T,
        setTouched: P,
        setFocused: A,
        validityData: $,
        setFilled: B,
        name: D,
        disabled: X,
        validation: O,
        validationMode: G
    } = Rt(), z = nn({
        id: t
    }), V = X || m, C = D ? ? c, [_, j] = ft({
        controlled: r,
        default: a ? o ? ? kt : o,
        name: "Select",
        state: "value"
    }), [H, J] = ft({
        controlled: d,
        default: l,
        name: "Select",
        state: "open"
    }), U = n.useRef([]), W = n.useRef([]), Y = n.useRef(null), ye = n.useRef(null), be = n.useRef(0), K = n.useRef(null), Z = n.useRef([]), ge = n.useRef(!1), pe = n.useRef(null), ne = n.useRef(null), me = n.useRef({
        allowSelectedMouseUp: !1,
        allowUnselectedMouseUp: !1,
        dragY: 0
    }), L = n.useRef(!1), {
        mounted: ee,
        setMounted: se,
        transitionStatus: re
    } = Vt(H), {
        openMethod: ue,
        triggerProps: Ae
    } = Vo(H), M = Bn(() => new Qi({
        id: z,
        labelId: void 0,
        modal: b,
        multiple: a,
        itemToStringLabel: S,
        itemToStringValue: I,
        isItemEqualToValue: E,
        value: _,
        open: H,
        mounted: ee,
        transitionStatus: re,
        items: x,
        forceMount: !1,
        openMethod: null,
        activeIndex: null,
        selectedIndex: null,
        popupProps: {},
        triggerProps: {},
        triggerElement: null,
        positionerElement: null,
        listElement: null,
        popupSide: null,
        scrollUpArrowVisible: !1,
        scrollDownArrowVisible: !1,
        hasScrollArrows: !1
    })).current, ae = y(M, xe.activeIndex), Oe = y(M, xe.selectedIndex), oe = y(M, xe.triggerElement), ce = y(M, xe.positionerElement), he = pa(ue), Ce = ue ? ? he, Ie = n.useMemo(() => a ? "" : vt(_, I), [a, _, I]), Be = n.useMemo(() => a && Array.isArray(_) ? _.map(ve => vt(ve, I)) : vt(_, I), [a, _, I]), Se = gn(oe), Ne = fe(() => Be);
    pn(Se, z, _, Ne, !V, c);
    const Fe = n.useRef(_),
        _e = a ? Array.isArray(_) && _.length > 0 : _ != null && Ie !== "";
    Ve(() => {
        B(_e)
    }, [_e, B]), Ve(function() {
        let je = _,
            it = !1;
        if (a) {
            const lt = Array.isArray(_) ? _ : [];
            it = lt.length === 0, je = lt[lt.length - 1]
        }
        const et = it ? -1 : _t(Z.current, je, E),
            at = et === -1 ? null : et;
        at === null && (ne.current = null), !H && M.set("selectedIndex", at)
    }, [a, H, _, E, M]);

    function Le(ve) {
        const je = $.initialValue;
        return Array.isArray(ve) && Array.isArray(je) ? !zn(ve, je, (it, et) => mt(it, et, E)) : ve !== je
    }
    Dt(_, () => {
        k(C), T(Le(_)), O.change(_)
    });
    const Re = fe((ve, je) => {
            s ? .(ve, je), !je.isCanceled && (J(ve), !ve && (je.reason === "focus-out" || je.reason === "outside-press") && (P(!0), A(!1), G === "onBlur" && O.commit(_)))
        }),
        te = fe(() => {
            se(!1), M.update({
                activeIndex: null,
                openMethod: null,
                scrollUpArrowVisible: !1,
                scrollDownArrowVisible: !1
            }), v ? .(!1)
        });
    yt({
        enabled: !p,
        open: H,
        ref: Y,
        onComplete() {
            H || te()
        }
    }), n.useImperativeHandle(p, () => ({
        unmount: te
    }), [te]);
    const ke = fe((ve, je) => {
            u ? .(ve, je), !je.isCanceled && j(ve)
        }),
        Ee = fe(ve => {
            const je = gr(ve.scrollHeight, ve.clientHeight),
                it = Zt(ve.scrollTop, je),
                et = it > 0,
                at = it < je;
            M.set("scrollUpArrowVisible", et), M.set("scrollDownArrowVisible", at)
        }),
        De = ko({
            open: H,
            onOpenChange: Re,
            elements: {
                reference: oe,
                floating: ce
            }
        }),
        Ye = mr(De, {
            enabled: !g && !V,
            event: "mousedown"
        }),
        He = Eo(De),
        de = So(De, {
            enabled: !g && !V,
            listRef: U,
            activeIndex: ae,
            selectedIndex: Oe,
            disabledIndices: kt,
            onNavigate(ve) {
                ve === null && !H || M.set("activeIndex", ve)
            },
            focusItemOnHover: N
        }),
        rt = wo(De, {
            enabled: !g && !V && (H || !a),
            listRef: W,
            activeIndex: ae,
            selectedIndex: Oe,
            disabledIndices: ve => ji(U.current[ve]),
            onMatch(ve) {
                H ? M.set("activeIndex", ve) : ke(Z.current[ve], Te(Qe))
            },
            onTyping(ve) {
                ge.current = ve
            }
        }),
        gt = n.useMemo(() => Lt(rt.reference, de.reference, He.reference, Ye.reference, Ae), [Ye.reference, rt.reference, de.reference, He.reference, Ae]),
        Tt = n.useMemo(() => Lt(Ao, rt.floating, de.floating, He.floating), [rt.floating, de.floating, He.floating]),
        Ze = de.item ? ? Qt;
    zo(() => {
        M.update({
            popupProps: Tt,
            triggerProps: gt
        })
    }), M.useSyncedValues({
        id: z,
        modal: b,
        multiple: a,
        value: _,
        open: H,
        mounted: ee,
        transitionStatus: re,
        popupProps: Tt,
        triggerProps: gt,
        items: x,
        itemToStringLabel: S,
        itemToStringValue: I,
        isItemEqualToValue: E,
        openMethod: Ce
    });
    const we = n.useMemo(() => ({
            store: M,
            floatingContext: De,
            required: h,
            disabled: V,
            readOnly: g,
            multiple: a,
            highlightItemOnHover: N,
            setValue: ke,
            setOpen: Re,
            listRef: U,
            popupRef: Y,
            scrollHandlerRef: ye,
            handleScrollArrowVisibility: Ee,
            scrollArrowsMountedCountRef: be,
            itemProps: Ze,
            valueRef: K,
            valuesRef: Z,
            labelsRef: W,
            typingRef: ge,
            selectionRef: me,
            firstItemTextRef: pe,
            selectedItemTextRef: ne,
            validation: O,
            onOpenChangeComplete: v,
            alignItemWithTriggerActiveRef: L,
            initialValueRef: Fe
        }), [M, De, h, V, g, a, N, ke, Re, Ze, O, v, Ee]),
        Me = Bt(R, O.inputRef),
        Xe = a ? void 0 : C,
        Ke = n.useMemo(() => !a || !Array.isArray(_) || !C ? null : _.map(ve => {
            const je = vt(ve, I);
            return (0, q.jsx)("input", {
                type: "hidden",
                form: i,
                name: C,
                value: je,
                disabled: V
            }, je)
        }), [a, _, i, C, I, V]);
    return (0, q.jsxs)($o.Provider, {
        value: we,
        children: [w, (0, q.jsx)("input", { ...O.getValidationProps(V, {
                onFocus() {
                    M.state.triggerElement ? .focus({
                        focusVisible: !0
                    })
                },
                onChange(ve) {
                    if (ve.nativeEvent.defaultPrevented || V || g) return;
                    const je = ve.currentTarget.value,
                        it = Te(Qe, ve.nativeEvent);

                    function et() {
                        if (a) return;
                        const at = je.toLowerCase();
                        let lt = Z.current.findIndex(ot => vt(ot, I).toLowerCase() === at || dt(ot, S).toLowerCase() === at);
                        lt === -1 && (lt = Z.current.findIndex((ot, Pe) => {
                            const Et = W.current[Pe];
                            return Et != null && Et.toLowerCase() === at
                        }));
                        const Ot = Z.current[lt];
                        Ot != null && ke(Ot, it)
                    }
                    M.set("forceMount", !0), queueMicrotask(et)
                }
            }),
            id: z && Xe == null ? `${z}-hidden-input` : void 0,
            form: i,
            name: Xe,
            autoComplete: f,
            value: Ie,
            disabled: V,
            required: h && !(a && _e),
            readOnly: g,
            ref: Me,
            style: C ? hn : Ht,
            tabIndex: -1,
            "aria-hidden": !0,
            suppressHydrationWarning: !0
        }), Ke]
    })
}

function Ko(e) {
    return e == null ? void 0 : `${e}-label`
}

function xr(e, t) {
    return e ? ? t
}
var Ma = 400,
    Aa = { ...vo,
        ...en,
        popupSide: e => e ? {
            "data-popup-side": e
        } : null,
        value: () => null
    },
    rc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            id: d,
            disabled: l = !1,
            nativeButton: s = !0,
            style: c,
            ...i
        } = t, {
            setTouched: f,
            setFocused: m,
            validationMode: g,
            state: h,
            disabled: b
        } = Rt(), {
            labelId: p
        } = tn(), {
            store: R,
            setOpen: v,
            selectionRef: x,
            validation: a,
            readOnly: S,
            required: I,
            alignItemWithTriggerActiveRef: E,
            disabled: N
        } = wt(), w = b || N || l, k = y(R, xe.open), T = y(R, xe.mounted), P = y(R, xe.value), A = y(R, xe.triggerProps), $ = y(R, xe.positionerElement), B = y(R, xe.listElement), D = y(R, xe.popupSide), X = y(R, xe.id), O = y(R, xe.labelId), G = y(R, xe.hasSelectedValue), z = T && $ ? D : null, V = d ? ? X, C = xr(p, O);
        nn({
            id: V
        });
        const _ = gn($),
            j = n.useRef(null),
            {
                getButtonProps: H,
                buttonRef: J
            } = pt({
                disabled: w,
                native: s
            }),
            U = R.useStateSetter("triggerElement"),
            W = Pt(),
            Y = Pt(),
            ye = Pt();
        n.useEffect(() => {
            if (k) return ye.start(Ma, () => {
                x.current.allowUnselectedMouseUp = !0, x.current.allowSelectedMouseUp = !0
            }), () => {
                ye.clear()
            };
            x.current = {
                allowSelectedMouseUp: !1,
                allowUnselectedMouseUp: !1,
                dragY: 0
            }, Y.clear()
        }, [k, x, Y, ye]);
        const be = Lt(A, {
                id: V,
                role: "combobox",
                "aria-expanded": k,
                "aria-haspopup": "listbox",
                "aria-controls": k ? B ? .id ? ? Bi($) ? .id : void 0,
                "aria-labelledby": C,
                "aria-readonly": S || void 0,
                "aria-required": I || void 0,
                tabIndex: w ? -1 : 0,
                onFocus(ge) {
                    m(!0), k && E.current && v(!1, Te(Qe, ge.nativeEvent)), W.start(0, () => {
                        R.set("forceMount", !0)
                    })
                },
                onBlur(ge) {
                    Je($, ge.relatedTarget) || (f(!0), m(!1), g === "onBlur" && a.commit(P))
                },
                onMouseDown(ge) {
                    if (k) return;
                    const pe = xt(ge.currentTarget);

                    function ne(me) {
                        if (!j.current) return;
                        const L = me.target;
                        Je(j.current, L) || Je(_.current, L) || Po(me, j.current) || v(!1, Te(fo, me))
                    }
                    Y.start(0, () => {
                        pe.addEventListener("mouseup", ne, {
                            once: !0
                        })
                    })
                }
            }, i, H),
            K = a.getValidationProps(w, be);
        K.role = "combobox";
        const Z = { ...h,
            open: k,
            disabled: w,
            value: P,
            readOnly: S,
            popupSide: z,
            placeholder: !G
        };
        return le("button", t, {
            ref: [r, j, J, U],
            state: Z,
            stateAttributesMapping: Aa,
            props: K
        })
    }),
    Va = {
        value: () => null
    },
    oc = n.forwardRef(function(t, r) {
        const {
            className: o,
            render: u,
            children: d,
            placeholder: l,
            style: s,
            ...c
        } = t, {
            store: i,
            valueRef: f
        } = wt(), m = y(i, xe.value), g = y(i, xe.items), h = y(i, xe.itemToStringLabel), b = y(i, xe.hasSelectedValue), p = !b && l != null && d == null, R = y(i, xe.hasNullItemLabel, p), v = {
            value: m,
            placeholder: !b
        };
        let x = null;
        return typeof d == "function" ? x = d(m) : d != null ? x = d : p && !R ? x = l : Array.isArray(m) ? x = Xo(m, g, h) : x = vr(m, g, h), le("span", t, {
            state: v,
            ref: [r, f],
            props: [{
                children: x
            }, c],
            stateAttributesMapping: Va
        })
    }),
    sc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, {
            store: s
        } = wt(), c = {
            open: y(s, xe.open)
        };
        return le("span", t, {
            state: c,
            ref: r,
            props: [{
                "aria-hidden": !0,
                children: "▼"
            }, l],
            stateAttributesMapping: No
        })
    }),
    ic = n.forwardRef(function(t, r) {
        const {
            store: o
        } = wt(), u = y(o, xe.mounted), d = y(o, xe.forceMount);
        return u || d ? (0, q.jsx)(ho, {
            ref: r,
            ...t
        }) : null
    }),
    Qo = n.createContext(void 0);

function yr() {
    const e = n.useContext(Qo);
    if (!e) throw new Error(We(59));
    return e
}

function jn(e, t) {
    e && Object.assign(e.style, t)
}
var Zo = {
        position: "relative",
        maxHeight: "100%",
        overflowX: "hidden",
        overflowY: "auto"
    },
    Oa = {
        position: "fixed"
    },
    ac = n.forwardRef(function(t, r) {
        const {
            anchor: o,
            className: u,
            render: d,
            positionMethod: l,
            side: s,
            align: c,
            sideOffset: i,
            alignOffset: f,
            collisionBoundary: m = "clipping-ancestors",
            collisionPadding: g,
            arrowPadding: h,
            sticky: b,
            disableAnchorTracking: p,
            alignItemWithTrigger: R = !0,
            collisionAvoidance: v = yo,
            style: x,
            ...a
        } = t, {
            store: S,
            listRef: I,
            labelsRef: E,
            alignItemWithTriggerActiveRef: N,
            selectedItemTextRef: w,
            valuesRef: k,
            initialValueRef: T,
            popupRef: P,
            setValue: A,
            floatingContext: $
        } = wt(), B = y(S, xe.open), D = y(S, xe.mounted), X = y(S, xe.modal), O = y(S, xe.value), G = y(S, xe.openMethod), z = y(S, xe.positionerElement), V = y(S, xe.triggerElement), C = y(S, xe.isItemEqualToValue), _ = y(S, xe.transitionStatus), j = n.useRef(null), H = n.useRef(null), [J, U] = n.useState(R), W = D && J && G !== "touch";
        !D && J !== R && U(R), n.useImperativeHandle(N, () => W), Do((W || X) && B, G === "touch", z, V);
        const Y = Io({
                anchor: o,
                floatingRootContext: $,
                positionMethod: l,
                mounted: D,
                side: s,
                sideOffset: i,
                align: c,
                alignOffset: f,
                arrowPadding: h,
                collisionBoundary: m,
                collisionPadding: g,
                sticky: b,
                disableAnchorTracking: p ? ? W,
                collisionAvoidance: v,
                keepMounted: !0
            }),
            ye = W ? "none" : Y.side,
            be = W ? Oa : Y.positionerStyles,
            K = {
                open: B,
                side: ye,
                align: Y.align,
                anchorHidden: Y.anchorHidden
            };
        Ve(() => {
            S.set("popupSide", Y.side)
        }, [S, Y.side]);
        const Z = S.useStateSetter("positionerElement"),
            ge = bo(t, K, {
                styles: be,
                transitionStatus: _,
                props: a,
                refs: [r, Z],
                hidden: !D,
                inert: !B
            }),
            pe = n.useRef(0),
            ne = fe(L => {
                if (k.current.length === 0) return;
                const ee = pe.current;
                if (pe.current = L.size, L.size === ee) return;
                const se = Te(Qe);
                if (ee !== 0 && !S.state.multiple && O !== null && _t(k.current, O, C) === -1) {
                    const re = T.current,
                        ue = re != null && _t(k.current, re, C) !== -1 ? re : null;
                    A(ue, se), ue === null && (S.set("selectedIndex", null), w.current = null)
                }
                if (ee !== 0 && S.state.multiple && Array.isArray(O)) {
                    const re = O.filter(ue => _t(k.current, ue, C) !== -1);
                    re.length !== O.length && (A(re, se), re.length === 0 && (S.set("selectedIndex", null), w.current = null))
                }
                if (B && W) {
                    S.update({
                        scrollUpArrowVisible: !1,
                        scrollDownArrowVisible: !1
                    });
                    const re = {
                        height: ""
                    };
                    jn(z, re), jn(P.current, re)
                }
            }),
            me = n.useMemo(() => ({ ...Y,
                side: ye,
                alignItemWithTriggerActive: W,
                setControlledAlignItemWithTrigger: U,
                scrollUpArrowRef: j,
                scrollDownArrowRef: H
            }), [Y, ye, W, U]);
        return (0, q.jsx)(on, {
            elementsRef: I,
            labelsRef: E,
            onMapChange: ne,
            children: (0, q.jsxs)(Qo.Provider, {
                value: me,
                children: [D && X && (0, q.jsx)(Lo, {
                    inert: pr(!B),
                    cutout: V
                }), ge]
            })
        })
    }),
    ka = { ...bn,
        ...ht
    },
    lc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            finalFocus: l,
            ...s
        } = t, {
            store: c,
            popupRef: i,
            onOpenChangeComplete: f,
            setOpen: m,
            valueRef: g,
            firstItemTextRef: h,
            selectedItemTextRef: b,
            multiple: p,
            handleScrollArrowVisibility: R,
            scrollHandlerRef: v,
            listRef: x,
            highlightItemOnHover: a,
            floatingContext: S
        } = wt(), {
            side: I,
            align: E,
            alignItemWithTriggerActive: N,
            isPositioned: w,
            setControlledAlignItemWithTrigger: k
        } = yr(), T = Mo(!0) != null, P = jt(), {
            nonce: A,
            disableStyleElements: $
        } = hr(), B = y(c, xe.id), D = y(c, xe.open), X = y(c, xe.openMethod), O = y(c, xe.mounted), G = y(c, xe.popupProps), z = y(c, xe.transitionStatus), V = y(c, xe.triggerElement), C = y(c, xe.positionerElement), _ = y(c, xe.listElement), j = n.useRef(!1), H = n.useRef(!1), J = n.useRef({}), U = uo(), W = fe(K => {
            if (!C || !i.current || !H.current) return;
            const Z = C.style.top === "0px",
                ge = C.style.bottom === "0px";
            if (j.current || !N || !Z && !ge) {
                R(K);
                return
            }
            const pe = Qr(C),
                ne = cn(C.getBoundingClientRect().height, "y", pe),
                me = xt(C),
                L = Ut(C),
                ee = L.getComputedStyle(C),
                se = parseFloat(ee.marginTop),
                re = parseFloat(ee.marginBottom),
                ue = Kr(L.getComputedStyle(i.current)),
                Ae = Math.min(me.documentElement.clientHeight - se - re, ue),
                M = K.scrollTop,
                ae = kn(K);
            let Oe = null;
            const oe = Ie => {
                    C.style.height = `${Ie}px`
                },
                ce = Z ? ae - M : M,
                he = Math.min(ne + ce, Ae);
            if (ce <= 1) {
                const Ie = Ge(ce, 0, Ae - ne);
                Ie > 0 && oe(ne + Ie), K.scrollTop = Z ? ae : 0, Ae - (ne + Ie) <= 1 && (j.current = !0), R(K);
                return
            }
            Ae - he > 1 ? Oe = Z ? 1 / 0 : 0 : ge && M < ae && (Oe = M - (ce - (ne + ce - Ae)));
            const Ce = Math.ceil(he);
            if (Ce !== 0 && oe(Ce), Oe != null) {
                const Ie = Ge(Oe, 0, kn(K));
                Math.abs(K.scrollTop - Ie) > 1 && (K.scrollTop = Ie)
            }
            Ce >= Ae - 1 && (j.current = !0), R(K)
        });
        n.useImperativeHandle(v, () => W, [W]), yt({
            open: D,
            ref: i,
            onComplete() {
                D && f ? .(!0)
            }
        });
        const Y = {
            open: D,
            transitionStatus: z,
            side: I,
            align: E
        };
        Ve(() => {
            !C || !i.current || Object.keys(J.current).length || (J.current = {
                top: C.style.top || "0",
                left: C.style.left || "0",
                right: C.style.right,
                height: C.style.height,
                bottom: C.style.bottom,
                minHeight: C.style.minHeight,
                maxHeight: C.style.maxHeight,
                marginTop: C.style.marginTop,
                marginBottom: C.style.marginBottom
            })
        }, [i, C]), Ve(() => {
            D || N || (H.current = !1, j.current = !1, jn(C, J.current))
        }, [D, N, C, i]), Ve(() => {
            const K = i.current;
            if (!D || !V || !C || !K || N && !w || c.state.transitionStatus === "ending") return;
            if (H.current = !0, K.style.removeProperty("--transform-origin"), !N) {
                U.request(() => R(_ || K));
                return
            }
            const Z = Da(K);
            try {
                let ge = b.current;
                ge ? .isConnected || (ge = !xe.hasSelectedValue(c.state) && h.current ? .isConnected ? h.current : null);
                const pe = g.current,
                    ne = Ut(C),
                    me = ne.getComputedStyle(C),
                    L = ne.getComputedStyle(K),
                    ee = xt(V),
                    se = Qr(V),
                    re = Dn(V.getBoundingClientRect(), se),
                    ue = Dn(C.getBoundingClientRect(), se),
                    Ae = re.height,
                    M = _ || K,
                    ae = M.scrollHeight,
                    Oe = parseFloat(L.borderBottomWidth),
                    oe = parseFloat(me.marginTop) || 10,
                    ce = parseFloat(me.marginBottom) || 10,
                    he = parseFloat(me.minHeight) || 100,
                    Ce = Kr(L),
                    Ie = 5,
                    Be = 5,
                    Se = 20,
                    Ne = ee.documentElement.clientHeight - oe - ce,
                    Fe = ee.documentElement.clientWidth,
                    _e = Ne - re.bottom + Ae;
                let Le, Re = P === "rtl" ? re.right - ue.width : re.left,
                    te = 0;
                if (ge && pe) {
                    const we = Dn(pe.getBoundingClientRect(), se);
                    Le = Dn(ge.getBoundingClientRect(), se), Re = ue.left + (P === "rtl" ? we.right - Le.right : we.left - Le.left);
                    const Me = we.top - re.top + we.height / 2;
                    te = Le.top - ue.top + Le.height / 2 - Me
                }
                const ke = _e + te + ce + Oe;
                let Ee = Math.min(Ne, ke);
                const De = Ne - oe - ce,
                    Ye = ke - Ee,
                    He = Fe - Be;
                C.style.left = `${Ge(Re,Ie,He-ue.width)}px`, C.style.height = `${Ee}px`, C.style.maxHeight = "none", C.style.marginTop = `${oe}px`, C.style.marginBottom = `${ce}px`, K.style.height = "100%";
                const de = kn(M),
                    rt = Ye >= de - 1;
                rt && (Ee = Math.min(Ne, ue.height) - (Ye - de));
                const gt = re.top < Se || re.bottom > Ne - Se || Math.ceil(Ee) + 1 < Math.min(ae, he),
                    Tt = (ne.visualViewport ? .scale ? ? 1) !== 1 && go;
                if (gt || Tt) {
                    jn(C, J.current), k(!1);
                    return
                }
                const Ze = Math.max(he, Ee);
                if (rt) {
                    const we = Math.max(0, Ne - ke);
                    C.style.top = ue.height >= De ? "0" : `${we}px`, C.style.height = `${Ee}px`, M.scrollTop = kn(M)
                } else C.style.bottom = "0", M.scrollTop = Ye;
                if (Le) {
                    const we = ue.top,
                        Me = ue.height,
                        Xe = Le.top + Le.height / 2,
                        Ke = Ge(Me > 0 ? (Xe - we) / Me * 100 : 50, 0, 100);
                    K.style.setProperty("--transform-origin", `50% ${Ke}%`)
                }(Ze === Ne || Ee >= Ce) && (j.current = !0), R(M), a && c.state.selectedIndex === null && c.state.activeIndex === null && x.current[0] != null && c.set("activeIndex", 0)
            } finally {
                Z()
            }
        }, [c, D, C, V, g, h, b, i, R, N, k, U, _, x, a, P, w]), n.useEffect(() => {
            if (!N || !C || !D) return;
            const K = Ut(C);

            function Z(ge) {
                m(!1, Te(Vi, ge))
            }
            return _n(K, "resize", Z)
        }, [m, N, C, D]);
        const ye = { ..._ ? {
                    role: "presentation",
                    "aria-orientation": void 0
                } : {
                    role: "listbox",
                    "aria-multiselectable": p || void 0,
                    id: `${B}-list`
                },
                onKeyDown(K) {
                    T && fr.has(K.key) && K.stopPropagation()
                },
                onScroll(K) {
                    _ || W(K.currentTarget)
                },
                ...N && {
                    style: _ ? {
                        height: "100%"
                    } : Zo
                },
                className: !_ && N ? dn.className : void 0
            },
            be = le("div", t, {
                ref: [r, i],
                state: Y,
                stateAttributesMapping: ka,
                props: [G, ye, xo(z), s]
            });
        return (0, q.jsxs)(n.Fragment, {
            children: [!$ && dn.getElement(A), (0, q.jsx)(Co, {
                context: S,
                modal: !1,
                disabled: !O,
                openInteractionType: X,
                returnFocus: l,
                restoreFocus: !0,
                children: be
            })]
        })
    });

function Kr(e) {
    const t = e.maxHeight;
    return t.endsWith("px") && parseFloat(t) || 1 / 0
}

function kn(e) {
    return gr(e.scrollHeight, e.clientHeight)
}

function Qr(e) {
    return ca.getScale(e)
}

function cn(e, t, r) {
    return e / r[t]
}

function Dn(e, t) {
    return la({
        x: cn(e.x, "x", t),
        y: cn(e.y, "y", t),
        width: cn(e.width, "x", t),
        height: cn(e.height, "y", t)
    })
}
var Zr = [
    ["transform", "none"],
    ["scale", "1"],
    ["translate", "0 0"]
];

function Da(e) {
    const {
        style: t
    } = e, r = {};
    for (const [o, u] of Zr) r[o] = t.getPropertyValue(o), t.setProperty(o, u, "important");
    return () => {
        for (const [o] of Zr) {
            const u = r[o];
            u ? t.setProperty(o, u) : t.removeProperty(o)
        }
    }
}
var cc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, {
            store: s,
            scrollHandlerRef: c,
            multiple: i
        } = wt(), {
            alignItemWithTriggerActive: f
        } = yr(), m = y(s, xe.hasScrollArrows), g = y(s, xe.openMethod), h = {
            id: `${y(s,xe.id)}-list`,
            role: "listbox",
            "aria-multiselectable": i || void 0,
            onScroll(p) {
                c.current ? .(p.currentTarget)
            },
            ...f && {
                style: Zo
            },
            className: m && g !== "touch" ? dn.className : void 0
        }, b = s.useStateSetter("listElement");
        return le("div", t, {
            ref: [r, b],
            props: [h, l]
        })
    }),
    Jo = n.createContext(void 0);

function Rr() {
    const e = n.useContext(Jo);
    if (!e) throw new Error(We(57));
    return e
}
var uc = n.memo(n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            value: l = null,
            label: s,
            disabled: c = !1,
            nativeButton: i = !1,
            ...f
        } = t, m = n.useRef(null), g = rn({
            guess: !0,
            label: s,
            textRef: m
        }), {
            store: h,
            itemProps: b,
            setOpen: p,
            setValue: R,
            selectionRef: v,
            typingRef: x,
            valuesRef: a,
            multiple: S,
            selectedItemTextRef: I,
            disabled: E,
            readOnly: N
        } = wt(), w = E || c, k = y(h, xe.isActive, g.index), T = y(h, xe.open), P = y(h, xe.isSelected, l), A = y(h, xe.isSelectedByFocus, g.index), $ = y(h, xe.isItemEqualToValue), B = g.index, D = n.useRef(null);
        Ve(() => {
            const U = a.current;
            return U[B] = l, () => {
                delete U[B]
            }
        }, [B, l, a]), Ve(() => {
            const U = h.state.value;
            let W = U;
            S && Array.isArray(U) && (W = U.length > 0 ? U[U.length - 1] : void 0), W !== void 0 && mt(l, W, $) && (h.set("selectedIndex", B), m.current && (I.current = m.current))
        }, [B, S, $, h, l, I]);
        const X = n.useRef("mouse"),
            O = n.useRef(!1),
            {
                getButtonProps: G,
                buttonRef: z
            } = pt({
                disabled: w,
                focusableWhenDisabled: !0,
                native: i,
                composite: !0
            }),
            V = {
                disabled: w,
                selected: P,
                highlighted: k
            };

        function C(U) {
            if (E || N) return;
            const W = h.state.value;
            if (S) {
                const Y = Array.isArray(W) ? W : [],
                    ye = P ? qo(Y, l, $) : [...Y, l];
                R(ye, Te(Ln, U))
            } else R(l, Te(Ln, U)), p(!1, Te(Ln, U))
        }

        function _() {
            v.current.dragY = 0
        }
        const j = {
                role: "option",
                "aria-selected": P,
                tabIndex: T && k ? 0 : -1,
                onKeyDown(U) {
                    h.set("activeIndex", B), U.key === " " && x.current && U.preventDefault()
                },
                onClick(U) {
                    const W = X.current !== "touch",
                        Y = U.nativeEvent.pointerType,
                        ye = W && ia(U.nativeEvent) && (Y !== void 0 || k),
                        be = W && !ye && !O.current;
                    O.current = !1, !(w || be) && C(U.nativeEvent)
                },
                onPointerEnter(U) {
                    X.current = U.pointerType
                },
                onPointerMove(U) {
                    if (U.pointerType === "mouse" && U.buttons === 1) {
                        const W = v.current;
                        W.dragY += U.movementY, W.dragY ** 2 >= 64 && (W.allowUnselectedMouseUp = !0)
                    }
                },
                onPointerDown(U) {
                    X.current = U.pointerType, O.current = !0, _()
                },
                onMouseUp() {
                    if (_(), w || X.current === "touch" || O.current) return;
                    const U = !v.current.allowSelectedMouseUp && P,
                        W = !v.current.allowUnselectedMouseUp && !P;
                    U || W || (O.current = !0, D.current ? .click(), O.current = !1)
                }
            },
            H = le("div", t, {
                ref: [z, r, g.ref, D],
                state: V,
                props: [b, j, f, G]
            }),
            J = n.useMemo(() => ({
                selected: P,
                index: B,
                textRef: m,
                selectedByFocus: A
            }), [P, B, m, A]);
        return (0, q.jsx)(Jo.Provider, {
            value: J,
            children: H
        })
    })),
    dc = n.forwardRef(function(t, r) {
        const {
            selected: o
        } = Rr();
        return t.keepMounted || o ? (0, q.jsx)(Na, { ...t,
            ref: r
        }) : null
    }),
    Na = n.memo(n.forwardRef((e, t) => {
        const {
            render: r,
            className: o,
            style: u,
            keepMounted: d,
            ...l
        } = e, {
            selected: s
        } = Rr(), c = n.useRef(null), {
            transitionStatus: i,
            setMounted: f
        } = Vt(s), m = le("span", e, {
            ref: [t, c],
            state: {
                selected: s,
                transitionStatus: i
            },
            props: [{
                "aria-hidden": !0,
                children: "✔️"
            }, l],
            stateAttributesMapping: ht
        });
        return yt({
            open: s,
            ref: c,
            onComplete() {
                s || f(!1)
            }
        }), m
    })),
    fc = n.memo(n.forwardRef(function(t, r) {
        const {
            index: o,
            textRef: u,
            selectedByFocus: d
        } = Rr(), {
            firstItemTextRef: l,
            selectedItemTextRef: s
        } = wt(), {
            render: c,
            className: i,
            style: f,
            ...m
        } = t, g = n.useCallback(h => {
            h && (o === 0 && (l.current = h), d && (s.current = h))
        }, [l, s, o, d]);
        return le("div", t, {
            ref: [g, r, u],
            props: m
        })
    })),
    es = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            direction: l,
            keepMounted: s,
            ...c
        } = t, i = l === "up", {
            store: f,
            popupRef: m,
            listRef: g,
            handleScrollArrowVisibility: h,
            scrollArrowsMountedCountRef: b
        } = wt(), {
            side: p,
            scrollDownArrowRef: R,
            scrollUpArrowRef: v
        } = yr(), x = i ? xe.scrollUpArrowVisible : xe.scrollDownArrowVisible, a = y(f, x), S = y(f, xe.openMethod), I = a && S !== "touch", E = Pt(), N = i ? v : R, {
            mounted: w,
            transitionStatus: k,
            setMounted: T
        } = Vt(I);
        Ve(() => (b.current += 1, f.set("hasScrollArrows", !0), () => {
            b.current = Math.max(0, b.current - 1), b.current === 0 && f.set("hasScrollArrows", !1)
        }), [f, b]), yt({
            open: I,
            ref: N,
            onComplete() {
                I || T(!1)
            }
        });
        const P = le("div", t, {
            ref: [r, N],
            state: {
                direction: l,
                visible: I,
                side: p,
                transitionStatus: k
            },
            props: [{
                "aria-hidden": !0,
                children: i ? "▲" : "▼",
                style: {
                    position: "absolute"
                },
                onMouseMove(A) {
                    if (A.movementX === 0 && A.movementY === 0 || E.isStarted()) return;
                    f.set("activeIndex", null);

                    function $() {
                        const B = f.state.listElement ? ? m.current;
                        if (!B) return;
                        f.set("activeIndex", null), h(B);
                        const D = gr(B.scrollHeight, B.clientHeight),
                            X = Zt(B.scrollTop, D),
                            O = X === (i ? 0 : D),
                            G = g.current;
                        if (X !== B.scrollTop && (B.scrollTop = X), O) {
                            E.clear();
                            return
                        }
                        if (G.length > 0) {
                            const z = N.current ? .offsetHeight || 0;
                            B.scrollTop = La(G, i, X, B.clientHeight, z, D)
                        }
                        E.start(40, $)
                    }
                    E.start(40, $)
                },
                onMouseLeave() {
                    E.clear()
                }
            }, c],
            stateAttributesMapping: ht
        });
        return w || s ? P : null
    });

function La(e, t, r, o, u, d) {
    if (t) {
        let f = 0;
        const m = r + u - 1;
        for (let b = 0; b < e.length; b += 1) {
            const p = e[b];
            if (p && p.offsetTop >= m) {
                f = b;
                break
            }
        }
        const g = Math.max(0, f - 1),
            h = e[g];
        return g < f && h ? Zt(h.offsetTop - u, d) : 0
    }
    let l = e.length - 1;
    const s = r + o - u + 1;
    for (let f = 0; f < e.length; f += 1) {
        const m = e[f];
        if (m && m.offsetTop + m.offsetHeight > s) {
            l = Math.max(0, f - 1);
            break
        }
    }
    const c = Math.min(e.length - 1, l + 1),
        i = e[c];
    return c > l && i ? Zt(i.offsetTop + i.offsetHeight - o + u, d) : d
}
var pc = n.forwardRef(function(t, r) {
        return (0, q.jsx)(es, { ...t,
            ref: r,
            direction: "down"
        })
    }),
    mc = n.forwardRef(function(t, r) {
        return (0, q.jsx)(es, { ...t,
            ref: r,
            direction: "up"
        })
    }),
    ts = n.createContext(void 0);

function Fa() {
    const e = n.useContext(ts);
    if (e === void 0) throw new Error(We(56));
    return e
}
var hc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, [s, c] = n.useState(), i = n.useMemo(() => ({
            labelId: s,
            setLabelId: c
        }), [s, c]), f = le("div", t, {
            ref: r,
            props: [{
                role: "group",
                "aria-labelledby": s
            }, l]
        });
        return (0, q.jsx)(ts.Provider, {
            value: i,
            children: f
        })
    }),
    gc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            id: l,
            ...s
        } = t, {
            setLabelId: c
        } = Fa(), i = st(l);
        return Ve(() => (c(i), () => {
            c(f => f === i ? void 0 : f)
        }), [i, c]), le("div", t, {
            ref: r,
            props: [{
                id: i
            }, s]
        })
    }),
    Sr = n.forwardRef(function(t, r) {
        const {
            className: o,
            render: u,
            orientation: d = "horizontal",
            style: l,
            ...s
        } = t;
        return le("div", t, {
            state: {
                orientation: d
            },
            ref: r,
            props: [{
                role: "presentation"
            }, s]
        })
    }),
    bc = Sr;

function Ha(e) {
    if (!e) return null;
    for (const t of e.elements) {
        const r = t.tagName;
        if (r === "BUTTON" || r === "INPUT") {
            const o = t;
            if (o.type === "submit") return o
        }
    }
    return null
}

function ns(e) {
    return {
        checked(t) {
            return e.indeterminate ? {} : t ? {
                "data-checked": ""
            } : {
                "data-unchecked": ""
            }
        },
        ...en
    }
}
var Ba = n.createContext(void 0);

function ja() {
    return n.useContext(Ba)
}
var rs = n.createContext(void 0);

function Ua() {
    const e = n.useContext(rs);
    if (e === void 0) throw new Error(We(14));
    return e
}
var _a = "data-parent",
    vc = n.forwardRef(function(t, r) {
        const {
            checked: o,
            className: u,
            defaultChecked: d = !1,
            "aria-labelledby": l,
            disabled: s = !1,
            form: c,
            id: i,
            indeterminate: f = !1,
            inputRef: m,
            name: g,
            onCheckedChange: h,
            parent: b = !1,
            readOnly: p = !1,
            render: R,
            required: v = !1,
            uncheckedValue: x,
            value: a,
            nativeButton: S = !1,
            style: I,
            ...E
        } = t, {
            clearErrors: N
        } = mn(), {
            disabled: w,
            name: k,
            setDirty: T,
            setFilled: P,
            setFocused: A,
            setTouched: $,
            state: B,
            validationMode: D,
            validityData: X,
            validation: O
        } = Rt(), G = Ai(), {
            labelId: z,
            controlId: V,
            registerControlId: C,
            getDescriptionProps: _
        } = tn(), j = ja(), H = j ? .allValues === void 0 ? void 0 : j.parent, J = H !== void 0, U = w || G.disabled || j ? .disabled || s, W = k ? ? g, Y = a ? ? W, ye = st(), be = st();
        let K = i || V;
        J && (b ? K = be : Y !== void 0 ? K = `${H.id}-${Y}` : K || = be);
        let Z = {};
        J && (b ? Z = H.getParentProps() : Y !== void 0 && (Z = H.getChildProps(Y)));
        const {
            checked: ge = o,
            indeterminate: pe = f,
            onCheckedChange: ne,
            ...me
        } = Z, L = j ? .value, ee = n.useRef(null), se = Bn(() => Symbol()), re = n.useRef(!1), {
            getButtonProps: ue,
            buttonRef: Ae
        } = pt({
            disabled: U,
            native: S
        }), M = j ? .validation ? ? O, [ae, Oe] = ft({
            controlled: Y !== void 0 && L !== void 0 && !b ? L.includes(Y) : ge,
            default: d,
            name: "Checkbox",
            state: "checked"
        }), oe = J ? !!ge : ae, ce = J && pe || f;
        Ve(() => {
            C !== bt && (re.current = !0, C(se.current, K))
        }, [K, C, se]), n.useEffect(() => {
            const te = se.current;
            return () => {
                !re.current || C === bt || (re.current = !1, C(te, void 0))
            }
        }, [C, se]), pn(ee, ye, ae, void 0, !j && !U, g);
        const he = n.useRef(null),
            Ce = M.registerInput,
            Ie = j ? Y : void 0,
            Be = n.useCallback(te => Ce(te, {
                controlRef: ee,
                value: Ie
            }), [Ce, Ie]),
            Se = Bt(m, he, b ? void 0 : Be),
            Ne = Ho(l, z, he, !S, K ? ? void 0);
        Ve(() => {
            he.current && (he.current.indeterminate = ce, ae && P(!0))
        }, [ae, ce, P]), Dt(ae, () => {
            j || (N(W), P(ae), T(ae !== X.initialValue), M.change(ae))
        });
        const Fe = Lt({
            checked: ae,
            disabled: U,
            form: c,
            name: b ? void 0 : W,
            id: S ? void 0 : K ? ? void 0,
            required: v,
            ref: Se,
            style: W ? hn : Ht,
            tabIndex: -1,
            type: "checkbox",
            "aria-hidden": !0,
            onChange(te) {
                if (te.nativeEvent.defaultPrevented) return;
                if (p) {
                    te.preventDefault();
                    return
                }
                const ke = te.currentTarget.checked,
                    Ee = Te(Qe, te.nativeEvent);
                if (h ? .(ke, Ee), !Ee.isCanceled && (ne ? .(ke, Ee), !Ee.isCanceled && (Oe(ke), Y !== void 0 && j !== void 0 && !b && !J))) {
                    const De = ke ? [...j.value, Y] : j.value.filter(Ye => Ye !== Y);
                    j.setValue(De, Ee)
                }
            },
            onClick(te) {
                te.stopPropagation()
            },
            onFocus() {
                ee.current ? .focus()
            }
        }, a !== void 0 ? {
            value: (j ? ae && a : a) || ""
        } : Qt, _, te => M.getValidationProps(U, te));
        n.useEffect(() => {
            if (!H || Y === void 0) return;
            const te = H.disabledStatesRef.current;
            return te.set(Y, U), () => {
                te.delete(Y)
            }
        }, [H, U, Y]);
        const _e = n.useMemo(() => ({ ...B,
                checked: oe,
                disabled: U,
                readOnly: p,
                required: v,
                indeterminate: ce
            }), [B, oe, U, p, v, ce]),
            Le = ns(_e),
            Re = le("span", t, {
                state: _e,
                ref: [Ae, ee, r],
                props: [{
                    id: S ? K ? ? void 0 : ye,
                    role: "checkbox",
                    "aria-checked": ce ? "mixed" : oe,
                    "aria-readonly": p || void 0,
                    "aria-required": v || void 0,
                    "aria-labelledby": Ne,
                    [_a]: b ? "" : void 0,
                    onFocus() {
                        U || A(!0)
                    },
                    onBlur() {
                        const te = he.current;
                        te && ($(!0), A(!1), D === "onBlur" && M.commit(j ? L : te.checked))
                    },
                    onKeyDown(te) {
                        if (te.key !== "Enter" || (te.preventBaseUIHandler(), te.defaultPrevented)) return;
                        const ke = he.current ? .form ? ? null,
                            Ee = te.currentTarget,
                            De = te.nativeEvent,
                            Ye = te.preventDefault,
                            He = De.preventDefault;
                        let de = !1;
                        te.preventDefault = () => {
                            de = !0, Ye.call(te)
                        }, De.preventDefault = () => {
                            de = !0, He.call(De)
                        }, He.call(De), Ut(Ee).queueMicrotask(() => {
                            te.preventDefault = Ye, De.preventDefault = He, de || Ha(ke) ? .click()
                        })
                    },
                    onClick(te) {
                        if (p || U) return;
                        te.preventDefault();
                        const ke = he.current;
                        ke && Ro(ke, te)
                    }
                }, E, me, ue, _, te => M.getValidationProps(U, te)],
                stateAttributesMapping: Le
            });
        return (0, q.jsxs)(rs.Provider, {
            value: _e,
            children: [Re, !ae && !j && W && !b && x !== void 0 && (0, q.jsx)("input", {
                type: "hidden",
                form: c,
                name: W,
                value: x,
                disabled: U
            }), (0, q.jsx)("input", { ...Fe,
                suppressHydrationWarning: !0
            })]
        })
    }),
    xc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            keepMounted: l = !1,
            ...s
        } = t, c = Ua(), i = c.checked || c.indeterminate, {
            mounted: f,
            transitionStatus: m,
            setMounted: g
        } = Vt(i), h = n.useRef(null), b = { ...c,
            transitionStatus: m
        };
        yt({
            open: i,
            ref: h,
            onComplete() {
                i || g(!1)
            }
        });
        const p = { ...ns(c),
                ...ht
            },
            R = l || f,
            v = le("span", t, {
                ref: [r, h],
                state: b,
                stateAttributesMapping: p,
                props: s
            });
        return R ? v : null
    }),
    os = n.createContext(void 0);

function Wa() {
    const e = n.useContext(os);
    if (e === void 0) throw new Error(We(38));
    return e
}

function Ir(e) {
    return Array.isArray(e) ? e.map(t => Ir(t)).join(",") : e == null ? "" : String(e)
}
var Jr = new Map;

function za(e, t) {
    const r = JSON.stringify({
            locale: Ir(e),
            options: t
        }),
        o = Jr.get(r);
    if (o) return o;
    const u = new Intl.NumberFormat(e, t);
    return Jr.set(r, u), u
}

function Wt(e, t, r) {
    return e == null ? "" : za(t, r).format(e)
}

function fn(e, t, r) {
    return (e - t) * 100 / (r - t)
}
var yc = n.forwardRef(function(t, r) {
        const {
            format: o,
            getAriaValueText: u,
            locale: d,
            max: l = 100,
            min: s = 0,
            value: c,
            render: i,
            className: f,
            children: m,
            style: g,
            ...h
        } = t, [b, p] = n.useState(), R = fn(c, s, l), v = Ge(Number.isNaN(R) ? 0 : R, 0, 100), x = Ge(Number.isNaN(c) ? s : c, s, l), a = o ? Wt(x, d, o) : Wt(v / 100, d, {
            style: "percent"
        });
        let S = a;
        u && (S = u(a, c));
        const I = {
                "aria-labelledby": b,
                "aria-valuemax": l,
                "aria-valuemin": s,
                "aria-valuenow": x,
                "aria-valuetext": S,
                role: "meter",
                children: (0, q.jsxs)(n.Fragment, {
                    children: [m, (0, q.jsx)("span", {
                        role: "presentation",
                        style: Ht,
                        children: "x"
                    })]
                })
            },
            E = n.useMemo(() => ({
                formattedValue: a,
                percentageValue: v,
                setLabelId: p,
                value: c
            }), [a, v, p, c]),
            N = le("div", t, {
                ref: r,
                props: [I, h]
            });
        return (0, q.jsx)(os.Provider, {
            value: E,
            children: N
        })
    }),
    Rc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, {
            percentageValue: s
        } = Wa();
        return le("div", t, {
            ref: r,
            props: [{
                style: {
                    insetInlineStart: 0,
                    height: "inherit",
                    width: `${s}%`
                }
            }, l]
        })
    }),
    ss = n.createContext(void 0);

function $a() {
    const e = n.useContext(ss);
    if (e === void 0) throw new Error(We(51));
    return e
}
var is = {
        status(e) {
            return {
                [`data-${e}`]: ""
            }
        }
    },
    Sc = n.forwardRef(function(t, r) {
        const {
            format: o,
            getAriaValueText: u,
            locale: d,
            max: l = 100,
            min: s = 0,
            value: c,
            render: i,
            className: f,
            children: m,
            style: g,
            ...h
        } = t, [b, p] = n.useState();
        let R = "indeterminate",
            v = null,
            x = null,
            a = "",
            S = "indeterminate progress";
        if (c != null && Number.isFinite(c)) {
            const k = fn(c, s, l);
            v = Ge(Number.isNaN(k) ? 0 : k, 0, 100), x = Ge(c, s, l), R = x === l ? "complete" : "progressing", a = o ? Wt(x, d, o) : Wt(v / 100, d, {
                style: "percent"
            }), S = a
        }
        const I = n.useMemo(() => ({
                status: R
            }), [R]),
            E = {
                "aria-labelledby": b,
                "aria-valuemax": l,
                "aria-valuemin": s,
                "aria-valuenow": x ? ? void 0,
                "aria-valuetext": u ? u(a, c) : S,
                role: "progressbar",
                children: (0, q.jsxs)(n.Fragment, {
                    children: [m, (0, q.jsx)("span", {
                        role: "presentation",
                        style: Ht,
                        children: "x"
                    })]
                })
            },
            N = n.useMemo(() => ({
                formattedValue: a,
                percentageValue: v,
                setLabelId: p,
                state: I,
                value: c
            }), [a, v, p, I, c]),
            w = le("div", t, {
                state: I,
                ref: r,
                props: [E, h],
                stateAttributesMapping: is
            });
        return (0, q.jsx)(ss.Provider, {
            value: N,
            children: w
        })
    }),
    Ic = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, {
            percentageValue: s,
            state: c
        } = $a(), i = s == null ? {} : {
            insetInlineStart: 0,
            height: "inherit",
            width: `${s}%`
        };
        return le("div", t, {
            state: c,
            ref: r,
            props: [{
                style: i
            }, l],
            stateAttributesMapping: is
        })
    }),
    as = n.createContext(void 0);

function ls() {
    const e = n.useContext(as);
    if (e === void 0) throw new Error(We(10));
    return e
}
var Ya = {
        value: () => null
    },
    Cc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            disabled: d = !1,
            hiddenUntilFound: l,
            keepMounted: s,
            loopFocus: c,
            onValueChange: i,
            multiple: f = !1,
            orientation: m = "vertical",
            value: g,
            defaultValue: h,
            style: b,
            ...p
        } = t, R = n.useMemo(() => {
            if (g === void 0) return h ? ? []
        }, [g, h]), v = n.useRef([]), [x, a] = ft({
            controlled: g,
            default: R,
            name: "Accordion",
            state: "value"
        }), S = fe((w, k, T) => {
            if (f)
                if (k) {
                    const P = x.slice();
                    if (P.push(w), i ? .(P, T), T.isCanceled) return;
                    a(P)
                } else {
                    const P = x.filter(A => A !== w);
                    if (i ? .(P, T), T.isCanceled) return;
                    a(P)
                }
            else {
                const P = x[0] === w ? [] : [w];
                if (i ? .(P, T), T.isCanceled) return;
                a(P)
            }
        }), I = n.useMemo(() => ({
            value: x,
            disabled: d,
            orientation: m
        }), [x, d, m]), E = n.useMemo(() => ({
            disabled: d,
            handleValueChange: S,
            hiddenUntilFound: l ? ? !1,
            keepMounted: s ? ? !1,
            state: I,
            value: x
        }), [d, S, l, s, I, x]), N = le("div", t, {
            state: I,
            ref: r,
            props: p,
            stateAttributesMapping: Ya
        });
        return (0, q.jsx)(as.Provider, {
            value: E,
            children: (0, q.jsx)(on, {
                elementsRef: v,
                children: N
            })
        })
    });

function cs(e) {
    const {
        open: t,
        defaultOpen: r,
        onOpenChange: o,
        disabled: u
    } = e, [d, l] = ft({
        controlled: t,
        default: r,
        name: "Collapsible",
        state: "open"
    }), {
        mounted: s,
        setMounted: c,
        transitionStatus: i
    } = Vt(d, !0, !0), f = st(), [m, g] = n.useState(), h = m === null ? void 0 : m ? ? f, b = fe(p => {
        const R = !d,
            v = Te(Mi, p.nativeEvent);
        o(R, v), !v.isCanceled && l(R)
    });
    return n.useMemo(() => ({
        defaultPanelId: f,
        disabled: u,
        handleTrigger: b,
        mounted: s,
        open: d,
        panelId: h,
        setMounted: c,
        setOpen: l,
        setPanelIdState: g,
        transitionStatus: i
    }), [f, u, b, s, d, h, c, l, g, i])
}
var Cr = n.createContext(void 0);

function $n() {
    const e = n.useContext(Cr);
    if (e === void 0) throw new Error(We(15));
    return e
}
var us = n.createContext(void 0);

function Pr() {
    const e = n.useContext(us);
    if (e === void 0) throw new Error(We(9));
    return e
}
var wr = (function(e) {
        return e.open = "data-open", e.closed = "data-closed", e[e.startingStyle = _r.startingStyle] = "startingStyle", e[e.endingStyle = _r.endingStyle] = "endingStyle", e
    })({}),
    qa = (function(e) {
        return e.panelOpen = "data-panel-open", e
    })({}),
    Ga = {
        [wr.open]: ""
    },
    Xa = {
        [wr.closed]: ""
    },
    ds = {
        open(e) {
            return e ? {
                [qa.panelOpen]: ""
            } : null
        }
    },
    fs = {
        open(e) {
            return e ? Ga : Xa
        }
    },
    Ka = (function(e) {
        return e.index = "data-index", e.disabled = "data-disabled", e.open = "data-open", e
    })({}),
    Tr = { ...fs,
        index: e => ({
            [Ka.index]: String(e)
        }),
        ...ht,
        value: () => null
    },
    Pc = n.forwardRef(function(t, r) {
        const {
            className: o,
            disabled: u = !1,
            onOpenChange: d,
            render: l,
            value: s,
            style: c,
            ...i
        } = t, {
            ref: f,
            index: m
        } = rn(), g = Bt(r, f), {
            disabled: h,
            handleValueChange: b,
            state: p,
            value: R
        } = ls(), v = st(), x = s ? ? v, a = u || h, S = R.indexOf(x) !== -1, I = fe((X, O) => {
            d ? .(X, O), !O.isCanceled && b(x, X, O)
        }), E = cs({
            open: S,
            onOpenChange: I,
            disabled: a
        }), N = n.useMemo(() => ({
            open: E.open,
            disabled: E.disabled,
            transitionStatus: E.transitionStatus
        }), [E.open, E.disabled, E.transitionStatus]), w = n.useMemo(() => ({ ...E,
            onOpenChange: I,
            state: N
        }), [E, N, I]), k = n.useMemo(() => ({ ...p,
            hidden: !S && !E.mounted,
            index: m,
            disabled: a,
            open: S
        }), [E.mounted, a, m, S, p]), T = st(), [P, A] = n.useState(), $ = P === null ? void 0 : P ? ? T, B = n.useMemo(() => ({
            defaultTriggerId: T,
            open: S,
            state: k,
            setTriggerId: A,
            triggerId: $
        }), [T, S, k, A, $]), D = le("div", t, {
            state: k,
            ref: g,
            props: i,
            stateAttributesMapping: Tr
        });
        return (0, q.jsx)(Cr.Provider, {
            value: w,
            children: (0, q.jsx)(us.Provider, {
                value: B,
                children: D
            })
        })
    }),
    wc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, {
            state: s
        } = Pr();
        return le("h3", t, {
            state: s,
            ref: r,
            props: l,
            stateAttributesMapping: Tr
        })
    }),
    Tc = n.forwardRef(function(t, r) {
        const {
            disabled: o,
            className: u,
            id: d,
            render: l,
            nativeButton: s = !0,
            style: c,
            ...i
        } = t, {
            panelId: f,
            open: m,
            handleTrigger: g,
            disabled: h
        } = $n(), {
            getButtonProps: b,
            buttonRef: p
        } = pt({
            disabled: o || h,
            focusableWhenDisabled: !0,
            native: s
        }), {
            defaultTriggerId: R,
            state: v,
            setTriggerId: x
        } = Pr(), a = d || void 0, S = a ? ? R;
        return Ve(() => (x(I => a ? ? (I === null ? void 0 : I)), () => {
            x(I => I === a ? null : I)
        }), [a, x]), le("button", t, {
            state: v,
            ref: [r, p],
            props: [{
                "aria-controls": m ? f : void 0,
                "aria-expanded": m,
                id: S,
                onClick: g
            }, i, b],
            stateAttributesMapping: ds
        })
    }),
    ln = {
        height: void 0,
        width: void 0
    };

function ps(e) {
    const {
        externalRef: t,
        hiddenUntilFound: r,
        id: o,
        keepMounted: u,
        mounted: d,
        onOpenChange: l,
        open: s,
        setMounted: c,
        setOpen: i,
        transitionStatus: f
    } = e, m = n.useRef(null), g = n.useRef(null), [h, b] = n.useState(ln), p = n.useRef(ln), R = n.useRef(!1), v = n.useRef(s), x = n.useRef(!1), [a, S] = n.useState(!1), I = n.useRef(null), E = Bt(t, m), N = gn(s), w = Pi(m), k = !s && !d, T = a ? "idle" : f, P = s && (v.current || x.current), A = !s && d && g.current === "css-animation" && h.height === void 0 && h.width === void 0 ? p.current : h, $ = r && k && g.current !== "css-animation", B = fe((z, V = !0) => {
        V && (p.current = z), b(z)
    }), D = fe(() => {
        I.current ? .(), I.current = null
    }), X = fe(z => {
        D(), I.current = () => {
            I.current = null, z()
        }
    }), O = fe(() => {
        s && d && g.current === "css-animation" && (x.current = !0)
    });
    Ve(() => {
        !a || f === "starting" || S(!1)
    }, [a, f]), n.useEffect(() => () => {
        O(), D()
    }, [O, D]), Ve(() => {
        const z = m.current;
        if (!z) return;
        !s && I.current && D();
        const V = Qa(z, P);
        if (g.current = V, s && f === "idle" && v.current && V === "css-animation") {
            p.current = Gt(z);
            return
        }
        if (s && f === "starting") {
            const _ = R.current;
            if (R.current = !1, V === "none") {
                B(Gt(z)), S(!0);
                return
            }
            if (V === "css-transition") {
                const J = Za(z);
                if (B(Gt(z)), !_) return J;
                const U = Nn(z, "transition-duration", "0s");
                return X(U), S(!0), J
            }
            B(Gt(z));
            const j = Nn(z, "animation-name", "none");
            if (!_) {
                j();
                return
            }
            const H = Nn(z, "animation-duration", "0s");
            j(), X(H), S(!0);
            return
        }
        if (!s && d && (f === "idle" || f === "starting")) {
            if (v.current = !1, x.current = !1, V === "none") {
                B(ln, !1), c(!1);
                return
            }
            B(Gt(z));
            return
        }
        if (f !== "ending") return;
        if (V === "none") {
            c(!1);
            return
        }
        const C = Gt(z);
        if (!(C.height > 0 || C.width > 0)) {
            c(!1);
            return
        }
        B(C), V === "css-animation" && Nn(z, "animation-name", "none")()
    }, [d, s, D, B, c, X, P, f]), yt({
        enabled: s && d && T === "idle",
        open: !0,
        ref: m,
        onComplete() {
            s && B(ln, !1)
        }
    }), n.useEffect(() => {
        if (s || !d || T !== "ending" || !m.current) return;
        const z = new AbortController;
        let V = -1;

        function C() {
            N.current || (c(!1), B(ln, !1))
        }
        return V = Hn.request(() => {
            w(C, z.signal)
        }), () => {
            Hn.cancel(V), z.abort()
        }
    }, [N, d, s, T, w, B, c]), Ve(() => {
        const z = m.current;
        !z || !r || !k || z.setAttribute("hidden", "until-found")
    }, [k, r]), n.useEffect(function() {
        const V = m.current;
        if (!V) return;

        function C(_) {
            const j = Te(Qe, _);
            l(!0, j), !j.isCanceled && (R.current = !0, i(!0))
        }
        return _n(V, "beforematch", C)
    }, [l, i]);
    const G = u || r || d || s;
    return {
        height: A.height,
        props: { ...$ ? {
                [wr.startingStyle]: ""
            } : void 0,
            hidden: k,
            id: o
        },
        ref: E,
        shouldPreventOpenAnimation: P,
        shouldRender: G,
        transitionStatus: T,
        width: A.width
    }
}

function Gt(e) {
    return {
        height: e.scrollHeight,
        width: e.scrollWidth
    }
}

function Qa(e, t) {
    const r = Ut(e).getComputedStyle(e),
        o = (r.animationName.split(",").map(d => d.trim()).some(d => d !== "" && d !== "none") || t) && eo(r.animationDuration),
        u = eo(r.transitionDuration);
    return o && u || u ? "css-transition" : o ? "css-animation" : "none"
}

function eo(e) {
    return e.split(",").map(t => t.trim()).some(t => t !== "" && Number.parseFloat(t) > 0)
}

function Nn(e, t, r) {
    const o = e.style.getPropertyValue(t),
        u = e.style.getPropertyPriority(t);
    return e.style.setProperty(t, r), () => {
        if (o === "") {
            e.style.removeProperty(t);
            return
        }
        e.style.setProperty(t, o, u)
    }
}

function Za(e) {
    const t = {
        "justify-content": e.style.justifyContent,
        "align-items": e.style.alignItems,
        "align-content": e.style.alignContent,
        "justify-items": e.style.justifyItems
    };
    Object.keys(t).forEach(u => {
        e.style.setProperty(u, "initial", "important")
    });

    function r() {
        Object.entries(t).forEach(([u, d]) => {
            if (d === "") {
                e.style.removeProperty(u);
                return
            }
            e.style.setProperty(u, d)
        })
    }
    const o = Hn.request(r);
    return () => {
        Hn.cancel(o), r()
    }
}
var to = (function(e) {
        return e.accordionPanelHeight = "--accordion-panel-height", e.accordionPanelWidth = "--accordion-panel-width", e
    })({}),
    Ec = n.forwardRef(function(t, r) {
        const {
            className: o,
            hiddenUntilFound: u,
            keepMounted: d,
            id: l,
            render: s,
            style: c,
            ...i
        } = t, {
            hiddenUntilFound: f,
            keepMounted: m
        } = ls(), {
            defaultPanelId: g,
            mounted: h,
            onOpenChange: b,
            open: p,
            setMounted: R,
            setOpen: v,
            setPanelIdState: x,
            transitionStatus: a
        } = $n(), S = u ? ? f, I = d ? ? m, E = l || void 0, N = l ? ? g;
        Ve(() => (x(V => E ? ? (V === null ? void 0 : V)), () => {
            x(V => V === E ? null : V)
        }), [E, x]);
        const {
            height: w,
            props: k,
            ref: T,
            shouldPreventOpenAnimation: P,
            shouldRender: A,
            transitionStatus: $,
            width: B
        } = ps({
            externalRef: r,
            hiddenUntilFound: S,
            id: N,
            keepMounted: I,
            mounted: h,
            onOpenChange: b,
            open: p,
            setMounted: R,
            setOpen: v,
            transitionStatus: a
        }), {
            state: D,
            triggerId: X
        } = Pr(), O = { ...D,
            transitionStatus: $
        }, G = co(c, O), z = le("div", { ...t,
            style: void 0
        }, {
            state: O,
            ref: T,
            props: [k, {
                "aria-labelledby": X,
                role: "region",
                style: {
                    [to.accordionPanelHeight]: w === void 0 ? "auto" : `${w}px`,
                    [to.accordionPanelWidth]: B === void 0 ? "auto" : `${B}px`
                }
            }, i, G ? {
                style: G
            } : void 0, P ? {
                style: {
                    animationName: "none"
                }
            } : void 0],
            stateAttributesMapping: Tr
        });
        return A ? z : null
    }),
    ms = { ...fs,
        ...ht
    },
    Mc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            defaultOpen: d = !1,
            disabled: l = !1,
            onOpenChange: s,
            open: c,
            style: i,
            ...f
        } = t, m = fe(s), g = cs({
            open: c,
            defaultOpen: d,
            onOpenChange: m,
            disabled: l
        }), h = n.useMemo(() => ({
            open: g.open,
            disabled: g.disabled,
            transitionStatus: g.transitionStatus
        }), [g.open, g.disabled, g.transitionStatus]), b = n.useMemo(() => ({ ...g,
            onOpenChange: m,
            state: h
        }), [g, m, h]), p = le("div", t, {
            state: h,
            ref: r,
            props: f,
            stateAttributesMapping: ms
        });
        return (0, q.jsx)(Cr.Provider, {
            value: b,
            children: p
        })
    }),
    Ja = { ...ds,
        ...ht
    },
    Ac = n.forwardRef(function(t, r) {
        const {
            panelId: o,
            open: u,
            handleTrigger: d,
            state: l,
            disabled: s
        } = $n(), {
            className: c,
            disabled: i = s,
            render: f,
            nativeButton: m = !0,
            style: g,
            ...h
        } = t, {
            getButtonProps: b,
            buttonRef: p
        } = pt({
            disabled: i,
            focusableWhenDisabled: !0,
            native: m
        });
        return le("button", t, {
            state: l,
            ref: [r, p],
            props: [{
                "aria-controls": u ? o : void 0,
                "aria-expanded": u,
                onClick: d
            }, h, b],
            stateAttributesMapping: Ja
        })
    }),
    no = (function(e) {
        return e.collapsiblePanelHeight = "--collapsible-panel-height", e.collapsiblePanelWidth = "--collapsible-panel-width", e
    })({}),
    Vc = n.forwardRef(function(t, r) {
        const {
            className: o,
            hiddenUntilFound: u,
            keepMounted: d,
            render: l,
            id: s,
            style: c,
            ...i
        } = t, {
            defaultPanelId: f,
            mounted: m,
            onOpenChange: g,
            open: h,
            setMounted: b,
            setPanelIdState: p,
            setOpen: R,
            state: v,
            transitionStatus: x
        } = $n(), a = u ? ? !1, S = d ? ? !1, I = s || void 0, E = I ? ? f;
        Ve(() => (p(O => I ? ? (O === null ? void 0 : O)), () => {
            p(O => O === I ? null : O)
        }), [I, p]);
        const {
            height: N,
            props: w,
            ref: k,
            shouldPreventOpenAnimation: T,
            shouldRender: P,
            transitionStatus: A,
            width: $
        } = ps({
            externalRef: r,
            hiddenUntilFound: a,
            id: E,
            keepMounted: S,
            mounted: m,
            onOpenChange: g,
            open: h,
            setMounted: b,
            setOpen: R,
            transitionStatus: x
        }), B = { ...v,
            transitionStatus: A
        }, D = co(c, B), X = le("div", { ...t,
            style: void 0
        }, {
            state: B,
            ref: k,
            props: [w, {
                style: {
                    [no.collapsiblePanelHeight]: N === void 0 ? "auto" : `${N}px`,
                    [no.collapsiblePanelWidth]: $ === void 0 ? "auto" : `${$}px`
                }
            }, i, D ? {
                style: D
            } : void 0, T ? {
                style: {
                    animationName: "none"
                }
            } : void 0],
            stateAttributesMapping: ms
        });
        return P ? X : null
    }),
    hs = n.createContext(void 0);

function Yn() {
    const e = n.useContext(hs);
    if (e === void 0) throw new Error(We(64));
    return e
}
var xn = {
        tabActivationDirection: e => ({
            "data-activation-direction": e
        })
    },
    Oc = n.forwardRef(function(t, r) {
        const {
            className: o,
            defaultValue: u = 0,
            onValueChange: d,
            orientation: l = "horizontal",
            render: s,
            value: c,
            style: i,
            ...f
        } = t, m = t.defaultValue !== void 0, g = n.useRef([]), [h, b] = n.useState(() => new Map), [p, R] = ft({
            controlled: c,
            default: u,
            name: "Tabs",
            state: "value"
        }), v = c !== void 0, [x, a] = n.useState(() => new Map), S = n.useRef(void 0), I = n.useCallback(W => cr(x, W), [x]), [E, N] = n.useState(() => ({
            previousValue: p,
            tabActivationDirection: "none"
        })), {
            previousValue: w,
            tabActivationDirection: k
        } = E;
        let T = k,
            P = !1;
        w !== p && (T = ro(w, p, l, x), P = w != null && p != null && I(p) == null);
        const A = P ? w : p,
            $ = w !== A || k !== T;
        Ve(() => {
            $ && N({
                previousValue: A,
                tabActivationDirection: T
            })
        }, [A, $, T]);
        const B = fe((W, Y) => {
                Y.activationDirection = ro(p, W, l, x), d ? .(W, Y), !Y.isCanceled && R(W)
            }),
            D = fe((W, Y) => {
                d ? .(W, Te(Y, void 0, void 0, {
                    activationDirection: "none"
                }))
            }),
            X = fe((W, Y) => (b(ye => {
                const be = new Map(ye);
                return be.set(W, Y), be
            }), () => {
                b(ye => {
                    if (ye.get(W) !== Y) return ye;
                    const be = new Map(ye);
                    return be.delete(W), be
                })
            })),
            O = n.useCallback(W => h.get(W), [h]),
            G = n.useCallback(W => {
                for (const Y of x.values())
                    if (W === Y.value) return Y.id
            }, [x]),
            z = n.useMemo(() => ({
                getTabElementBySelectedValue: I,
                getTabIdByPanelValue: G,
                getTabPanelIdByValue: O,
                onValueChange: B,
                orientation: l,
                registerMountedTabPanel: X,
                setTabMap: a,
                tabActivationDirection: T,
                value: p
            }), [I, G, O, B, l, X, a, T, p]),
            V = n.useMemo(() => {
                for (const W of x.values())
                    if (W.value === p) return W
            }, [x, p]),
            C = n.useMemo(() => {
                for (const W of x.values())
                    if (!W.disabled) return W.value
            }, [x]),
            _ = n.useRef(!m),
            j = n.useRef(u),
            H = n.useRef(m),
            J = n.useRef(!1);
        Ve(() => {
            if (v) return;

            function W(K, Z) {
                R(K), N({
                    previousValue: K,
                    tabActivationDirection: "none"
                }), D(K, Z), _.current = !1
            }
            if (x.size === 0) {
                J.current && p !== null && !S.current ? .isConnected && W(null, zr);
                return
            }
            J.current = !0, S.current = x.keys().next().value;
            const Y = V ? .disabled,
                ye = V == null && p !== null;
            if (!Y && p === j.current && (H.current = !1), H.current && Y && p === j.current) return;
            const be = _.current;
            if (Y || ye) {
                const K = C ? ? null;
                if (p === K) {
                    _.current = !1;
                    return
                }
                let Z = zr;
                be ? Z = Ur : Y && (Z = wi), W(K, Z);
                return
            }
            be && V != null && (D(p, Ur), _.current = !1)
        }, [C, v, D, V, R, x, p]);
        const U = le("div", t, {
            state: {
                orientation: l,
                tabActivationDirection: T
            },
            ref: r,
            props: f,
            stateAttributesMapping: xn
        });
        return (0, q.jsx)(hs.Provider, {
            value: z,
            children: (0, q.jsx)(on, {
                elementsRef: g,
                children: U
            })
        })
    });

function cr(e, t) {
    for (const [r, o] of e.entries())
        if (t === o.value) return r;
    return null
}

function ro(e, t, r, o) {
    if (e == null || t == null) return "none";
    const [u, d, l] = r === "horizontal" ? ["left", "left", "right"] : ["top", "up", "down"], s = cr(o, e), c = cr(o, t);
    if (s == null || c == null) return s !== c && (typeof e == "number" || typeof e == "string") && typeof e == typeof t ? t > e ? l : d : "none";
    const i = s.getBoundingClientRect()[u],
        f = c.getBoundingClientRect()[u];
    return f < i ? d : f > i ? l : "none"
}
var gs = n.createContext(void 0);

function bs() {
    const e = n.useContext(gs);
    if (e === void 0) throw new Error(We(65));
    return e
}
var kc = n.forwardRef(function(t, r) {
        const {
            className: o,
            disabled: u = !1,
            render: d,
            value: l,
            id: s,
            nativeButton: c = !0,
            style: i,
            ...f
        } = t, {
            value: m,
            getTabPanelIdByValue: g,
            onValueChange: h,
            orientation: b,
            tabActivationDirection: p
        } = Yn(), {
            activateOnFocus: R,
            registerTabResizeObserverElement: v,
            tabsListElement: x
        } = bs(), {
            highlightedIndex: a,
            onHighlightedIndexChange: S
        } = na(), I = st(s), E = n.useMemo(() => ({
            disabled: u,
            id: I,
            value: l
        }), [u, I, l]), {
            compositeProps: N,
            compositeRef: w,
            index: k
        } = Yi({
            metadata: E
        }), T = l === m, P = n.useRef(!1), A = n.useRef(null), $ = fe(j => {
            A.current ? .(), A.current = j ? v(j) : null
        });
        Ve(() => {
            if (P.current) {
                P.current = !1;
                return
            }
            if (!(T && k > -1 && a !== k)) return;
            const j = x;
            if (j != null) {
                const H = dr(xt(j));
                if (H && Je(j, H)) return
            }
            u || S(k)
        }, [T, k, a, S, u, x]);
        const {
            getButtonProps: B,
            buttonRef: D
        } = pt({
            disabled: u,
            native: c,
            focusableWhenDisabled: !0
        }), X = g(l), O = n.useRef(!1), G = n.useRef(!1);

        function z(j) {
            h(l, Te(Qe, j.nativeEvent, void 0, {
                activationDirection: "none"
            }))
        }

        function V(j) {
            T || u || z(j)
        }

        function C(j) {
            T || u || R && (!O.current || G.current) && z(j)
        }

        function _(j) {
            if (T || u) return;
            O.current = !0, G.current = j.button === 0;
            const H = xt(j.currentTarget);

            function J() {
                O.current = !1, G.current = !1, H.removeEventListener("pointerup", J), H.removeEventListener("pointercancel", J)
            }
            H.addEventListener("pointerup", J), H.addEventListener("pointercancel", J)
        }
        return le("button", t, {
            state: {
                disabled: u,
                active: T,
                orientation: b,
                tabActivationDirection: p
            },
            ref: [r, D, w, $],
            props: [N, {
                role: "tab",
                "aria-controls": X,
                "aria-selected": T,
                id: I,
                onClick: V,
                onFocus: C,
                onPointerDown: _,
                [Ji]: T ? "" : void 0,
                onKeyDownCapture() {
                    P.current = !0
                }
            }, f, B],
            stateAttributesMapping: xn
        })
    }),
    el = Ii();

function tl() {
    return bt
}

function nl() {
    return !1
}

function rl() {
    return !0
}

function Er() {
    return (0, el.useSyncExternalStore)(tl, nl, rl)
}

function vs(e) {
    const {
        script: t
    } = e, {
        nonce: r
    } = hr();
    return Er() ? (0, q.jsx)("script", {
        nonce: r,
        dangerouslySetInnerHTML: {
            __html: t
        },
        suppressHydrationWarning: !0
    }) : null
}
var oo, ol = { ...xn,
        activeTabPosition: () => null,
        activeTabSize: () => null
    },
    Dc = n.forwardRef(function(t, r) {
        const {
            className: o,
            render: u,
            renderBeforeHydration: d = !1,
            style: l,
            ...s
        } = t, {
            getTabElementBySelectedValue: c,
            orientation: i,
            tabActivationDirection: f,
            value: m
        } = Yn(), {
            tabsListElement: g,
            registerIndicatorUpdateListener: h
        } = bs(), b = fa();
        n.useEffect(() => h(b), [h, b]);
        let p = 0,
            R = 0,
            v = 0,
            x = 0,
            a = 0,
            S = 0,
            I = !1;
        if (m != null && g != null) {
            const T = c(m);
            if (T != null) {
                I = !0;
                const {
                    width: P,
                    height: A
                } = $r(T), {
                    width: $,
                    height: B
                } = $r(g), D = T.getBoundingClientRect(), X = g.getBoundingClientRect(), O = $ > 0 ? X.width / $ : 1, G = B > 0 ? X.height / B : 1;
                if (O > Number.EPSILON && G > Number.EPSILON) {
                    const z = D.left - X.left,
                        V = D.top - X.top;
                    p = z / O + g.scrollLeft - g.clientLeft, v = V / G + g.scrollTop - g.clientTop
                } else p = T.offsetLeft, v = T.offsetTop;
                a = P, S = A, R = g.scrollWidth - p - a, x = g.scrollHeight - v - S
            }
        }
        const E = I ? {
                left: p,
                right: R,
                top: v,
                bottom: x
            } : null,
            N = I ? {
                width: a,
                height: S
            } : null,
            w = I ? {
                "--active-tab-left": `${p}px`,
                "--active-tab-right": `${R}px`,
                "--active-tab-top": `${v}px`,
                "--active-tab-bottom": `${x}px`,
                "--active-tab-width": `${a}px`,
                "--active-tab-height": `${S}px`
            } : void 0,
            k = le("span", t, {
                state: {
                    orientation: i,
                    activeTabPosition: E,
                    activeTabSize: N,
                    tabActivationDirection: f
                },
                ref: r,
                props: [{
                    role: "presentation",
                    style: w,
                    hidden: !(I && a > 0 && S > 0)
                }, s, {
                    suppressHydrationWarning: !0
                }],
                stateAttributesMapping: ol
            });
        return m == null ? null : (0, q.jsxs)(n.Fragment, {
            children: [k, d && (oo || (oo = (0, q.jsx)(vs, {
                script: ""
            })))]
        })
    }),
    sl = { ...xn,
        ...ht
    },
    Nc = n.forwardRef(function(t, r) {
        const {
            className: o,
            value: u,
            render: d,
            keepMounted: l = !1,
            style: s,
            ...c
        } = t, {
            value: i,
            getTabIdByPanelValue: f,
            orientation: m,
            tabActivationDirection: g,
            registerMountedTabPanel: h
        } = Yn(), b = st(), {
            ref: p,
            index: R
        } = rn(), v = u === i, {
            mounted: x,
            transitionStatus: a,
            setMounted: S
        } = Vt(v), I = !x, E = f(u), N = {
            hidden: I,
            orientation: m,
            tabActivationDirection: g,
            transitionStatus: a
        }, w = n.useRef(null), k = le("div", t, {
            state: N,
            ref: [r, p, w],
            props: [{
                "aria-labelledby": E,
                hidden: I,
                id: b,
                role: "tabpanel",
                tabIndex: v ? 0 : -1,
                inert: pr(!v),
                "data-index": R
            }, c],
            stateAttributesMapping: sl
        });
        return yt({
            open: v,
            ref: w,
            onComplete() {
                v || S(!1)
            }
        }), Ve(() => {
            if (!(b == null || I && !l)) return h(u, b)
        }, [I, l, u, b, h]), l || x ? k : null
    }),
    Lc = n.forwardRef(function(t, r) {
        const {
            activateOnFocus: o = !1,
            className: u,
            loopFocus: d = !0,
            render: l,
            style: s,
            ...c
        } = t, {
            orientation: i,
            setTabMap: f,
            tabActivationDirection: m
        } = Yn(), [g, h] = n.useState(0), [b, p] = n.useState(null), R = n.useRef(new Set), v = n.useRef(new Set), x = n.useRef(null);
        Ve(() => {
            if (typeof ResizeObserver > "u") return;
            const w = new ResizeObserver(() => {
                R.current.forEach(k => {
                    k()
                })
            });
            return x.current = w, b && w.observe(b), v.current.forEach(k => {
                w.observe(k)
            }), () => {
                w.disconnect(), x.current = null
            }
        }, [b]);
        const a = fe(w => (R.current.add(w), () => {
                R.current.delete(w)
            })),
            S = fe(w => (v.current.add(w), x.current ? .observe(w), () => {
                v.current.delete(w), x.current ? .unobserve(w)
            })),
            I = {
                orientation: i,
                tabActivationDirection: m
            },
            E = {
                "aria-orientation": i === "vertical" ? "vertical" : void 0,
                role: "tablist"
            },
            N = n.useMemo(() => ({
                activateOnFocus: o,
                registerIndicatorUpdateListener: a,
                registerTabResizeObserverElement: S,
                tabsListElement: b
            }), [o, a, S, b]);
        return (0, q.jsx)(gs.Provider, {
            value: N,
            children: (0, q.jsx)(Oo, {
                render: l,
                className: u,
                style: s,
                state: I,
                refs: [r, p],
                props: [E, c],
                stateAttributesMapping: xn,
                highlightedIndex: g,
                enableHomeAndEndKeys: !0,
                loopFocus: d,
                orientation: i,
                onHighlightedIndexChange: h,
                onMapChange: f,
                disabledIndices: kt
            })
        })
    });

function il(e, t, r, o, u, d, l, s, c, i = 2) {
    const f = Hi(r.current, {
        event: e,
        orientation: o,
        loopFocus: u,
        rtl: d,
        cols: i,
        disabledIndices: l,
        minIndex: s,
        maxIndex: c,
        prevIndex: t > c ? s : t,
        stopEvent: !0
    });
    return ea(r.current, f) ? void 0 : f
}
var xs = n.createContext(void 0),
    ys = n.createContext(void 0),
    Rs = n.createContext(void 0),
    Ss = n.createContext(!1),
    Is = n.createContext("");

function tt() {
    const e = n.useContext(xs);
    if (!e) throw new Error(We(22));
    return e
}

function qn() {
    const e = n.useContext(ys);
    if (!e) throw new Error(We(23));
    return e
}

function yn() {
    const e = n.useContext(Rs);
    if (!e) throw new Error(We(24));
    return e
}

function Gn() {
    return n.useContext(Is)
}

function al() {
    return n.useContext(Ss)
}
var F = {
    id: e => e.id,
    labelId: e => e.labelId,
    items: e => e.items,
    selectedValue: e => e.selectedValue,
    hasSelectionChips: e => {
        const t = e.selectedValue;
        return Array.isArray(t) && t.length > 0
    },
    hasSelectedValue: e => {
        const {
            selectedValue: t,
            selectionMode: r
        } = e;
        return t == null ? !1 : r === "multiple" && Array.isArray(t) ? t.length > 0 : !0
    },
    hasNullItemLabel: (e, t) => t ? Go(e.items) : !1,
    open: e => e.open,
    mounted: e => e.mounted,
    forceMounted: e => e.forceMounted,
    inline: e => e.inline,
    activeIndex: e => e.activeIndex,
    selectedIndex: e => e.selectedIndex,
    isActive: (e, t) => e.activeIndex === t,
    isSelected: (e, t) => {
        const r = e.isItemEqualToValue,
            o = e.selectedValue;
        return Array.isArray(o) ? o.some(u => mt(t, u, r)) : mt(t, o, r)
    },
    transitionStatus: e => e.transitionStatus,
    popupProps: e => e.popupProps,
    listProps: e => e.listProps,
    inputProps: e => e.inputProps,
    triggerProps: e => e.triggerProps,
    itemProps: e => e.itemProps,
    positionerElement: e => e.positionerElement,
    listElement: e => e.listElement,
    popupId: e => e.popupId,
    triggerElement: e => e.triggerElement,
    inputElement: e => e.inputElement,
    inputGroupElement: e => e.inputGroupElement,
    popupSide: e => e.popupSide,
    openMethod: e => e.openMethod,
    inputInsidePopup: e => e.inputInsidePopup,
    inputOwnsFormValue: e => e.inputOwnsFormValue,
    selectionMode: e => e.selectionMode,
    name: e => e.name,
    form: e => e.form,
    disabled: e => e.disabled,
    readOnly: e => e.readOnly,
    required: e => e.required,
    grid: e => e.grid,
    virtualized: e => e.virtualized,
    itemToStringLabel: e => e.itemToStringLabel,
    isItemEqualToValue: e => e.isItemEqualToValue,
    modal: e => e.modal,
    autoHighlight: e => e.autoHighlight
};

function Cs(e) {
    return e == null ? void 0 : `${e}-popup`
}

function ll(e, t) {
    return (r, o) => r == null ? !1 : e.contains(r, o, t)
}
var so = new Map;

function cl(e = {}) {
    const t = {
            usage: "search",
            sensitivity: "base",
            ignorePunctuation: !0,
            ...e
        },
        r = `${Ir(e.locale)}|${JSON.stringify(t)}`,
        o = so.get(r);
    if (o) return o;
    const u = new Intl.Collator(e.locale, t),
        d = {
            contains(l, s, c) {
                if (!s) return !0;
                const i = dt(l, c);
                for (let f = 0; f <= i.length - s.length; f += 1)
                    if (u.compare(i.slice(f, f + s.length), s) === 0) return !0;
                return !1
            },
            startsWith(l, s, c) {
                if (!s) return !0;
                const i = dt(l, c);
                return u.compare(i.slice(0, s.length), s) === 0
            },
            endsWith(l, s, c) {
                if (!s) return !0;
                const i = dt(l, c),
                    f = s.length;
                return i.length >= f && u.compare(i.slice(i.length - f), s) === 0
            }
        };
    return so.set(r, d), d
}
var Ps = cl,
    ws = Symbol("none"),
    ar = {
        value: ws,
        index: -1
    };

function Ts(e) {
    const {
        id: t,
        onOpenChangeComplete: r,
        defaultSelectedValue: o = null,
        selectedValue: u,
        onSelectedValueChange: d,
        defaultInputValue: l,
        inputValue: s,
        open: c,
        defaultOpen: i = !1,
        selectionMode: f,
        onItemHighlighted: m,
        name: g,
        form: h,
        disabled: b = !1,
        readOnly: p = !1,
        required: R = !1,
        inputRef: v,
        grid: x = !1,
        items: a,
        filteredItems: S,
        filter: I,
        openOnInputClick: E = !0,
        autoHighlight: N = !1,
        keepHighlight: w = !1,
        highlightItemOnHover: k = !0,
        loopFocus: T = !0,
        itemToStringLabel: P,
        itemToStringValue: A,
        isItemEqualToValue: $ = Yo,
        virtualized: B = !1,
        inline: D = !1,
        fillInputOnItemPress: X = !0,
        modal: O = !1,
        limit: G = -1,
        autoComplete: z = "list",
        formAutoComplete: V,
        locale: C,
        submitOnItemClick: _ = !1
    } = e, {
        clearErrors: j
    } = mn(), {
        setDirty: H,
        validityData: J,
        setFilled: U,
        name: W,
        disabled: Y,
        setTouched: ye,
        setFocused: be,
        validationMode: K,
        validation: Z
    } = Rt(), ge = jt(), pe = nn({
        id: t
    }), ne = Ps({
        locale: C
    }), [me, L] = n.useState(!1), [ee, se] = n.useState(null), re = n.useRef([]), ue = n.useRef([]), Ae = n.useRef(null), M = n.useRef(null), ae = n.useRef(null), Oe = n.useRef(null), oe = n.useRef(null), ce = n.useRef(!0), he = n.useRef(!1), Ce = n.useRef(null), Ie = n.useRef(null), Be = n.useRef(null), Se = n.useRef(ar), Ne = n.useRef(null), Fe = n.useRef([]), _e = n.useRef(null), Le = Y || b, Re = W ? ? g, te = f === "multiple", ke = f === "single", Ee = s !== void 0 || l !== void 0, De = a !== void 0, Ye = S !== void 0;
    let He;
    N === "always" ? He = "always" : He = N ? "input-change" : !1;
    const [de, rt] = ft({
        controlled: u,
        default: te ? o ? ? kt : o,
        name: "Combobox",
        state: "selectedValue"
    }), gt = n.useMemo(() => I === null ? () => !0 : I !== void 0 ? I : ll(ne, P), [I, ne, P]), Tt = Bn(() => Ee ? l ? ? "" : ke ? dt(de, P) : "").current, [Ze, we] = ft({
        controlled: s,
        default: Tt,
        name: "Combobox",
        state: "inputValue"
    }), [Me, Xe] = ft({
        controlled: c,
        default: i,
        name: "Combobox",
        state: "open"
    }), Ke = br(a), ve = ee ? ? String(Ze).trim(), je = ke ? dt(de, P) : "", it = ke && !me && ve !== "" && je.length === ve.length && ne.contains(je, ve), et = it ? "" : ve, at = De && Ye && it, lt = n.useMemo(() => a ? Ke ? a.flatMap(Q => Q.items) : a : kt, [a, Ke]), Ot = n.useMemo(() => {
        if (S && !at) return S;
        if (!a) return kt;
        if (Ke) {
            const ie = a,
                Ue = [];
            let ze = 0;
            for (const qe of ie) {
                if (G > -1 && ze >= G) break;
                const ut = G > -1 ? G - ze : 1 / 0,
                    $e = et === "" ? qe.items.slice(0, ut) : [];
                if (et !== "")
                    for (const nt of qe.items) {
                        if ($e.length >= ut) break;
                        gt(nt, et, P) && $e.push(nt)
                    }
                if ($e.length > 0) {
                    const nt = { ...qe,
                        items: $e
                    };
                    Ue.push(nt), ze += $e.length
                }
            }
            return Ue
        }
        if (et === "") return G > -1 ? lt.slice(0, G) : lt;
        const Q = [];
        for (const ie of lt) {
            if (G > -1 && Q.length >= G) break;
            gt(ie, et, P) && Q.push(ie)
        }
        return Q
    }, [S, at, a, Ke, et, G, gt, P, lt]), ot = n.useMemo(() => Ke ? Ot.flatMap(Q => Q.items) : Ot, [Ot, Ke]), Pe = Bn(() => {
        let Q = null;
        return D && Me && De && f !== "none" && (Q = ir(ot, de, $, te)), new Gi({
            id: pe,
            labelId: void 0,
            selectedValue: de,
            open: Me,
            items: a,
            selectionMode: f,
            listRef: re,
            labelsRef: ue,
            popupRef: Ae,
            emptyRef: oe,
            inputRef: M,
            startDismissRef: ae,
            endDismissRef: Oe,
            keyboardActiveRef: ce,
            chipsContainerRef: Ce,
            clearRef: Ie,
            valuesRef: Fe,
            pointerDownItemRef: _e,
            selectionEventRef: Be,
            name: Re,
            form: h,
            disabled: Le,
            readOnly: p,
            required: R,
            grid: x,
            virtualized: B,
            openOnInputClick: E,
            itemToStringLabel: P,
            isItemEqualToValue: $,
            modal: O,
            autoHighlight: He,
            submitOnItemClick: _,
            hasInputValue: Ee,
            mounted: !1,
            forceMounted: !1,
            transitionStatus: "idle",
            inline: D,
            activeIndex: null,
            selectedIndex: Q,
            popupProps: {},
            listProps: {},
            inputProps: {},
            triggerProps: {},
            itemProps: Qt,
            positionerElement: null,
            listElement: null,
            popupId: void 0,
            triggerElement: null,
            inputElement: null,
            inputGroupElement: null,
            popupSide: null,
            openMethod: null,
            inputInsidePopup: !0,
            inputOwnsFormValue: f === "none",
            onOpenChangeComplete: bt,
            setOpen: bt,
            setInputValue: bt,
            setSelectedValue: bt,
            setIndices: bt,
            handleSelection: bt,
            forceMount: bt,
            requestSubmit: bt
        })
    }).current, Et = f === "none" ? Ze : de, ti = n.useMemo(() => f === "none" ? Et : Array.isArray(de) ? de.map(Q => vt(Q, A)) : vt(de, A), [Et, A, f, de]), ni = fe(m), Mr = fe(r), Ar = y(Pe, F.activeIndex), ri = y(Pe, F.selectedIndex), Sn = y(Pe, F.positionerElement), Vr = y(Pe, F.listElement), sn = y(Pe, F.triggerElement), In = y(Pe, F.inputElement), oi = y(Pe, F.inputGroupElement), ct = y(Pe, F.inline), St = y(Pe, F.inputInsidePopup), si = y(Pe, F.inputOwnsFormValue), ii = gn(sn), {
        mounted: Or,
        setMounted: ai,
        transitionStatus: Zn
    } = Vt(Me), {
        openMethod: kr,
        triggerProps: Jn
    } = Vo(Me), li = fe(() => ti);
    pn(St ? ii : M, pe, Et, li, !Le, g);
    const Dr = fe(() => {
            a ? ue.current = ot.map(Q => dt(Q, P)) : Pe.set("forceMounted", !0)
        }),
        zt = fe((Q, ie, Ue) => {
            if (ie === -1) {
                if (Se.current === ar) return;
                Se.current = ar
            } else Se.current = {
                value: Q,
                index: ie
            };
            ni(Q, ur(Ue, void 0, {
                index: ie
            }))
        }),
        It = fe(Q => {
            Pe.update(Q);
            const ie = Q.activeIndex;
            if (ie === void 0) return;
            const Ue = Q.type || "none";
            ie === null ? zt(void 0, -1, Ue) : zt(Fe.current[ie], ie, Ue)
        }),
        Ct = fe((Q, ie) => {
            if (he.current = ie.reason === Mt, e.onInputValueChange ? .(Q, ie), !ie.isCanceled) {
                if (ie.reason === "input-change") {
                    Me && ee !== null && se(null);
                    const Ue = ie.event,
                        ze = Ue.inputType;
                    if (Ue.type === "compositionend" || ze != null && ze !== "" && ze !== "insertReplacementText") {
                        const qe = Q.trim() !== "";
                        qe && L(!0), Ne.current = {
                            hasQuery: qe
                        };
                        const ut = Pe.state.listElement;
                        if (!Pe.state.virtualized && ut) {
                            const $e = Ae.current;
                            for (const nt of ua(ut.firstElementChild ? ? ut)) {
                                if (!aa(nt) || ($e ? !Je($e, nt) : nt.getAttribute("role") === "dialog")) break;
                                if (da(nt)) {
                                    nt.scrollTop = 0;
                                    break
                                }
                            }
                        }
                        qe && He && Pe.state.activeIndex == null && (Me || ct) && Pe.set("activeIndex", 0)
                    }
                } else ie.reason === "input-clear" && Q === "" && Pe.state.inputInsidePopup && (Ne.current = {
                    hasQuery: !1,
                    selection: !0
                });
                we(Q)
            }
        }),
        an = fe((Q, ie) => {
            if (Me !== Q && (ie.reason === "escape-key" && De && ot.length === 0 && !oe.current && ie.allowPropagation(), e.onOpenChange ? .(Q, ie), !ie.isCanceled && (Q && St && !ct && ee !== null && (L(!1), se(null), Ze !== "" && ie.reason !== "input-change" && Ct("", Te(Mt, ie.event))), !Q && me && (ke ? (ct || se(ve), ve === "" && L(!1)) : te && (ct || se(ve), St && It({
                    activeIndex: null
                }), (!St || ct) && Ct("", Te(Mt, ie.event)))), Xe(Q), !Q && St && (ie.reason === "focus-out" || ie.reason === "outside-press") && (ye(!0), be(!1), K === "onBlur")))) {
                const Ue = f === "none" ? Ze : de;
                Z.commit(Ue)
            }
        }),
        Cn = fe((Q, ie) => {
            d ? .(Q, ie), !ie.isCanceled && (rt(Q), (f === "none" && Ae.current && X || ke && !Pe.state.inputInsidePopup) && Ct(dt(Q, P), Te(ie.reason, ie.event)))
        }),
        ci = fe((Q, ie) => {
            const Ue = Ft(Q),
                ze = Be.current ? ? Q;
            Be.current = null;
            const qe = Te(Ln, ze),
                ut = Ue ? .closest("a") ? .getAttribute("href");
            if (ut) {
                ut.startsWith("#") && an(!1, qe);
                return
            }
            if (te) {
                const $e = Array.isArray(de) ? de : [],
                    nt = Ea($e, ie, $) ? qo($e, ie, $) : [...$e, ie];
                if (Cn(nt, qe), qe.isCanceled || !(M.current && M.current.value.trim() !== "")) return;
                Pe.state.inputInsidePopup ? Ct("", Te(Mt, qe.event)) : an(!1, qe)
            } else {
                if (Cn(ie, qe), qe.isCanceled) return;
                an(!1, qe)
            }
        }),
        ui = fe(() => {
            const Q = Z.inputRef.current ? .form ? ? Pe.state.inputElement ? .form;
            Q && typeof Q.requestSubmit == "function" && Q.requestSubmit()
        }),
        er = fe(() => {
            if (ai(!1), Mr ? .(!1), L(!1), se(null), It(f === "none" ? {
                    activeIndex: null,
                    selectedIndex: null
                } : {
                    activeIndex: null
                }), te && M.current && M.current.value !== "" && !he.current && Ct("", Te(Mt)), ke)
                if (Pe.state.inputInsidePopup) M.current && M.current.value !== "" && Ct("", Te(Mt));
                else {
                    const Q = dt(de, P);
                    M.current && M.current.value !== Q && Ct(Q, Te(Q === "" ? Mt : Qe))
                }
        }),
        di = n.useMemo(() => ct && Sn ? {
            current: Sn.closest('[role="dialog"]')
        } : Ae, [ct, Sn]);
    yt({
        enabled: !e.actionsRef,
        open: Me,
        ref: di,
        onComplete() {
            Me || er()
        }
    }), n.useImperativeHandle(e.actionsRef, () => ({
        unmount: er
    }), [er]), Ve(function() {
        if (Me || (_e.current = null, f === "none")) return;
        const ie = De ? lt : Fe.current;
        It({
            selectedIndex: ir(ie, de, $, te)
        })
    }, [Me, de, f, te, De, lt, $, It]), Ve(() => {
        a && (Fe.current = ot, re.current.length = ot.length)
    }, [a, ot]), Ve(() => {
        const Q = Ne.current;
        if (Q) {
            const $e = Me || ct || Pe.state.positionerElement ? .hidden === !1;
            if (Q.hasQuery) He && $e && Pe.set("activeIndex", 0), Ne.current = null;
            else if (String(Ze).trim() === "" && (Ne.current = null, $e)) {
                const nt = Q.selection;
                He === "always" && !nt && Pe.state.selectionMode === "none" && Pe.set("activeIndex", 0), queueMicrotask(() => {
                    if (!Pe.state.open && !Pe.state.inline || M.current && M.current.value.trim() !== "") return;
                    const Yt = Pe.state.selectedValue,
                        Mn = Pe.state.selectionMode === "multiple",
                        An = Mn && Array.isArray(Yt) ? Yt[Yt.length - 1] : Yt,
                        Br = Pe.state.selectionMode !== "none" && An != null;
                    if (Br || nt) {
                        const xi = De || Ye ? ot : Fe.current;
                        Pe.set("activeIndex", Br ? ir(xi, Yt, Pe.state.isItemEqualToValue, Mn) : null)
                    } else He === "always" && Pe.set("activeIndex", 0)
                })
            }
        }
        if (!Me && !ct) return;
        const ie = De || Ye ? ot : Fe.current,
            Ue = Pe.state.activeIndex;
        if (Ue == null) {
            if (He === "always" && ie.length > 0) {
                Pe.set("activeIndex", 0);
                return
            }
            zt(void 0, -1, Qe);
            return
        }
        if (Ue >= ie.length) {
            zt(void 0, -1, Qe), Pe.set("activeIndex", null);
            return
        }
        const ze = ie[Ue],
            qe = Se.current.value,
            ut = qe !== ws && mt(ze, qe, Pe.state.isItemEqualToValue);
        (Se.current.index !== Ue || !ut) && zt(ze, Ue, Qe)
    }, [Ar, He, zt, Ye, De, ot, ct, Me, Pe, Ze]), Ve(() => {
        if (f === "none") {
            U(String(Ze) !== "");
            return
        }
        U(te ? Array.isArray(de) && de.length > 0 : de != null)
    }, [U, f, Ze, de, te]), n.useEffect(() => {
        De && He && ot.length === 0 && It({
            activeIndex: null
        })
    }, [De, He, ot.length, It]);

    function fi(Q) {
        const ie = J.initialValue;
        return Array.isArray(Q) && Array.isArray(ie) ? !zn(Q, ie, (Ue, ze) => mt(Ue, ze, $)) : Q !== ie
    }
    Dt(ve, () => {
        !Me || ve === "" || ve === String(Tt) || L(!0)
    });

    function Nr() {
        const Q = dt(de, P);
        Ze !== Q && Ct(Q, Te(Qe))
    }
    Dt(de, () => {
        f !== "none" && (j(Re), H(fi(de)), Z.change(de), ke && !Ee && !St && Nr())
    }), Dt(Ze, () => {
        f === "none" && (j(Re), H(Ze !== J.initialValue), Z.change(Ze))
    }), Dt(a, () => {
        !ke || Ee || St || me || Nr()
    });
    const Pn = ko({
            open: ct ? !0 : Me,
            onOpenChange: an,
            elements: {
                reference: St ? sn : In,
                floating: Sn
            }
        }),
        Lr = x ? "grid" : "listbox",
        wn = Me || ct,
        Fr = wn ? "true" : "false",
        Tn = n.useMemo(() => {
            const Q = In ? .tagName === "INPUT",
                ie = In == null || Q,
                Ue = ie || wn,
                ze = ie ? {
                    autoComplete: "off",
                    spellCheck: "false",
                    autoCorrect: "off",
                    autoCapitalize: "none"
                } : {};
            return Ue && (ze.role = "combobox", ze["aria-expanded"] = Fr, ze["aria-haspopup"] = Lr, ze["aria-controls"] = wn ? Vr ? .id : void 0, ze["aria-autocomplete"] = z), {
                reference: ze,
                floating: {
                    role: "presentation"
                }
            }
        }, [In, wn, Fr, Lr, Vr ? .id, z]),
        Hr = mr(Pn, {
            enabled: !p && !Le && E,
            event: "mousedown-only",
            toggle: !1,
            touchOpenDelay: St ? 0 : 100,
            reason: po
        }),
        En = Eo(Pn, {
            enabled: !p && !Le && !ct,
            outsidePressEvent: {
                mouse: "sloppy",
                touch: "intentional"
            },
            bubbles: ct ? !0 : void 0,
            outsidePress(Q) {
                const ie = Ft(Q);
                return !Je(sn, ie) && !Je(Ie.current, ie) && !Je(Ce.current, ie) && !Je(oi, ie)
            }
        }),
        $t = So(Pn, {
            enabled: !p && !Le,
            id: pe,
            listRef: re,
            activeIndex: Ar,
            selectedIndex: ri,
            virtual: !0,
            loopFocus: T,
            allowEscape: T && !He,
            focusItemOnOpen: me || f === "none" && !He ? !1 : "auto",
            focusItemOnHover: k,
            resetOnPointerLeave: !w,
            orientation: x ? "horizontal" : void 0,
            rtl: ge === "rtl",
            disabledIndices: kt,
            grid: x ? il : void 0,
            onNavigate(Q, ie) {
                !ie && !Me || Zn === "ending" || It(ie ? {
                    activeIndex: Q,
                    type: ce.current ? Jt : Un
                } : {
                    activeIndex: Q
                })
            }
        }),
        tr = n.useMemo(() => Lt($t.reference, {
            onKeyDown(Q) {
                x && Pe.state.activeIndex == null && (Q.key === "ArrowLeft" || Q.key === "ArrowRight") && Q.preventBaseUIHandler()
            }
        }, En.reference, Hr.reference, Tn.reference), [$t.reference, En.reference, Hr.reference, Tn.reference, x, Pe]),
        nr = n.useMemo(() => Lt(Ao, En.floating), [En.floating]),
        rr = n.useMemo(() => Lt($t.floating, Tn.floating), [$t.floating, Tn.floating]),
        or = n.useMemo(() => {
            const Q = $t.item;
            return Q ? { ...Q,
                onFocus: void 0
            } : Qt
        }, [$t.item]);
    zo(() => {
        Pe.update({
            inline: D,
            popupProps: nr,
            listProps: rr,
            inputProps: tr,
            triggerProps: Jn,
            itemProps: or,
            setOpen: an,
            setInputValue: Ct,
            setSelectedValue: Cn,
            setIndices: It,
            handleSelection: ci,
            forceMount: Dr,
            requestSubmit: ui,
            onOpenChangeComplete: Mr
        })
    }), Ve(() => {
        Pe.update({
            id: pe,
            selectedValue: de,
            open: Me,
            mounted: Or,
            transitionStatus: Zn,
            items: a,
            inline: D,
            popupProps: nr,
            listProps: rr,
            inputProps: tr,
            triggerProps: Jn,
            openMethod: kr,
            itemProps: or,
            selectionMode: f,
            name: Re,
            form: h,
            disabled: Le,
            readOnly: p,
            required: R,
            grid: x,
            virtualized: B,
            openOnInputClick: E,
            itemToStringLabel: P,
            modal: O,
            autoHighlight: He,
            isItemEqualToValue: $,
            submitOnItemClick: _,
            hasInputValue: Ee,
            inputOwnsFormValue: f === "none" && (D || !Pe.state.inputInsidePopup)
        })
    }, [Pe, pe, de, Me, Or, Zn, a, nr, rr, tr, or, kr, Jn, f, Re, Le, p, R, x, B, E, P, O, $, _, Ee, D, He, h]);
    const pi = Bt(v, Z.inputRef),
        mi = n.useMemo(() => ({
            query: ve,
            hasItems: De,
            filteredItems: Ot,
            flatFilteredItems: ot
        }), [ve, De, Ot, ot]),
        hi = n.useMemo(() => Array.isArray(Et) ? "" : vt(Et, A), [Et, A]),
        gi = te && Array.isArray(de) && de.length > 0,
        sr = te || f === "none" && si ? void 0 : Re,
        bi = n.useMemo(() => !te || !Array.isArray(de) || !Re ? null : de.map(Q => {
            const ie = vt(Q, A);
            return (0, q.jsx)("input", {
                type: "hidden",
                form: h,
                name: Re,
                value: ie,
                disabled: Le
            }, ie)
        }), [te, de, h, Re, A, Le]),
        vi = (0, q.jsxs)(n.Fragment, {
            children: [e.children, (0, q.jsx)("input", { ...Z.getValidationProps(Le, {
                    onFocus() {
                        if (St) {
                            sn ? .focus();
                            return
                        }(M.current || sn) ? .focus()
                    },
                    onChange(Q) {
                        if (Q.nativeEvent.defaultPrevented || Le || p) return;
                        const ie = Q.currentTarget.value,
                            Ue = ie.toLowerCase(),
                            ze = Te(Qe, Q.nativeEvent),
                            qe = () => Fe.current.findIndex($e => vt($e, A).toLowerCase() === Ue || dt($e, P).toLowerCase() === Ue);

                        function ut() {
                            if (te) return;
                            if (f === "none") {
                                Ct(ie, ze);
                                return
                            }
                            let $e = qe();
                            $e === -1 && ($e = Fe.current.findIndex((Yt, Mn) => {
                                const An = ue.current[Mn];
                                return An != null && An.toLowerCase() === Ue
                            }));
                            const nt = $e === -1 ? void 0 : Fe.current[$e];
                            nt != null && Cn ? .(nt, ze)
                        }
                        ke && (Dr(), a && qe() === -1 && Pe.set("forceMounted", !0)), queueMicrotask(ut)
                    }
                }),
                id: pe && sr == null ? `${pe}-hidden-input` : void 0,
                form: h,
                name: sr,
                autoComplete: V,
                disabled: Le,
                required: R && !gi,
                readOnly: p,
                value: hi,
                ref: pi,
                style: sr ? hn : Ht,
                tabIndex: -1,
                "aria-hidden": !0,
                suppressHydrationWarning: !0
            }), bi]
        });
    return (0, q.jsx)(xs.Provider, {
        value: Pe,
        children: (0, q.jsx)(ys.Provider, {
            value: Pn,
            children: (0, q.jsx)(Ss.Provider, {
                value: De,
                children: (0, q.jsx)(Rs.Provider, {
                    value: mi,
                    children: (0, q.jsx)(Is.Provider, {
                        value: Ze,
                        children: vi
                    })
                })
            })
        })
    })
}

function Fc(e) {
    const {
        openOnInputClick: t = !1,
        value: r,
        defaultValue: o,
        onValueChange: u,
        mode: d = "list",
        itemToStringValue: l,
        ...s
    } = e, c = d === "inline" || d === "both", i = d === "inline" || d === "none", f = r !== void 0, [m, g] = n.useState(o ? ? ""), [h, b] = n.useState("");
    n.useEffect(() => {
        f && b("")
    }, [r, f]);
    let p;
    c && h !== "" ? p = h : f ? p = r ? ? "" : p = m;
    const R = Ps({
            locale: s.locale
        }),
        v = n.useMemo(() => s.filter !== void 0 ? s.filter : R.contains, [s.filter, R]),
        x = String(f ? r : m).trim(),
        a = n.useMemo(() => d !== "both" ? i ? null : v : v === null ? null : (E, N, w) => v(E, x, w), [v, d, x, i]);

    function S(E, N) {
        b(""), f || g(E), u ? .(E, N)
    }

    function I(E, N) {
        e.onItemHighlighted ? .(E, N), N.reason !== "pointer" && b(c && E != null ? dt(E, l) : "")
    }
    return (0, q.jsx)(Ts, { ...s,
        itemToStringLabel: l,
        openOnInputClick: t,
        selectionMode: "none",
        fillInputOnItemPress: !0,
        filter: a,
        autoComplete: d,
        inputValue: p,
        defaultInputValue: o,
        onInputValueChange: S,
        onItemHighlighted: I
    })
}

function Hc(e) {
    const {
        children: t
    } = e, r = Gn();
    let o = null;
    return typeof t == "function" ? o = t(String(r)) : t != null ? o = t : o = r, (0, q.jsx)(n.Fragment, {
        children: o
    })
}
var Es = { ...vo,
    ...en,
    popupSide: e => e ? {
        "data-popup-side": e
    } : null,
    listEmpty: e => e ? {
        "data-list-empty": ""
    } : null
};

function Ms(e) {
    const t = y(e, F.mounted),
        r = y(e, F.popupSide),
        o = y(e, F.positionerElement);
    return t && o ? r : null
}

function Xn() {
    return yn().filteredItems.length === 0
}

function As(e) {
    return e === "rtl" ? ["ArrowRight", "ArrowLeft"] : ["ArrowLeft", "ArrowRight"]
}

function Vs(e, t) {
    const r = e >= t - 1 ? t - 2 : e;
    return r >= 0 ? r : void 0
}

function Os(e, t, r) {
    const o = e.state.listRef.current[t];
    o && (e.state.selectionEventRef.current = r, o.click(), e.state.selectionEventRef.current = null)
}
var ul = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            nativeButton: d = !0,
            disabled: l = !1,
            id: s,
            style: c,
            ...i
        } = t, {
            state: f,
            disabled: m,
            setTouched: g,
            setFocused: h,
            validationMode: b,
            validation: p
        } = Rt(), {
            labelId: R
        } = tn(), v = tt(), x = y(v, F.selectionMode), a = y(v, F.disabled), S = y(v, F.readOnly), I = y(v, F.required), E = y(v, F.positionerElement), N = y(v, F.listElement), w = y(v, F.popupId), k = y(v, F.triggerProps), T = y(v, F.inputInsidePopup), P = y(v, F.id), A = y(v, F.labelId), $ = y(v, F.open), B = y(v, F.selectedValue), D = y(v, F.activeIndex), X = y(v, F.selectedIndex), O = y(v, F.hasSelectedValue), G = qn(), z = Gn(), V = Pt(), C = m || a || l, _ = Xn(), j = Ms(v);
        nn({
            id: T ? s : void 0
        });
        const H = T ? s ? ? P : s,
            J = xr(R, A);
        let U;
        $ && T ? U = w ? ? Cs(P) : $ && (U = N ? .id);
        const W = n.useRef("");

        function Y(ne) {
            W.current = ne.pointerType
        }
        const {
            reference: ye
        } = wo(G, {
            enabled: !$ && !S && !a && x === "single",
            listRef: v.state.labelsRef,
            activeIndex: D,
            selectedIndex: X,
            onMatch(ne) {
                const me = v.state.valuesRef.current[ne];
                me !== void 0 && v.state.setSelectedValue(me, Te(Qe))
            }
        }), {
            reference: be
        } = mr(G, {
            enabled: !S && !a,
            event: "mousedown"
        }), {
            buttonRef: K,
            getButtonProps: Z
        } = pt({
            native: d,
            disabled: C
        }), ge = { ...f,
            open: $,
            disabled: C,
            popupSide: j,
            listEmpty: _,
            placeholder: x === "none" ? !1 : !O
        }, pe = fe(ne => {
            v.set("triggerElement", ne)
        });
        return le("button", t, {
            ref: [r, K, pe],
            state: ge,
            props: [k, be, ye, {
                id: H,
                tabIndex: T ? 0 : -1,
                role: T ? "combobox" : void 0,
                "aria-expanded": $,
                "aria-haspopup": T ? "dialog" : "listbox",
                "aria-controls": U,
                "aria-required": T && I || void 0,
                "aria-labelledby": J,
                onPointerDown: Y,
                onPointerEnter: Y,
                onFocus() {
                    h(!0), !(C || S) && V.start(0, v.state.forceMount)
                },
                onBlur(ne) {
                    if (!Je(E, ne.relatedTarget) && (g(!0), h(!1), b === "onBlur")) {
                        const me = x === "none" ? z : B;
                        p.commit(me)
                    }
                },
                onMouseDown(ne) {
                    if (C || S || (T || G.set("domReferenceElement", ne.currentTarget), v.state.forceMount(), W.current !== "touch" && (v.state.inputRef.current ? .focus(), T || ne.preventDefault()), $)) return;
                    const me = xt(ne.currentTarget);

                    function L(ee) {
                        const se = v.state.triggerElement;
                        if (!se) return;
                        const re = Ft(ee),
                            ue = v.state.positionerElement,
                            Ae = v.state.listElement;
                        Je(se, re) || Je(ue, re) || Je(Ae, re) || Po(ee, se) || v.state.setOpen(!1, Te(fo, ee))
                    }
                    T && me.addEventListener("mouseup", L, {
                        once: !0
                    })
                },
                onKeyDown(ne) {
                    S || (ne.key === "ArrowDown" || ne.key === "ArrowUp") && (At(ne), v.state.setOpen(!0, Te(mo, ne.nativeEvent)), v.state.inputRef.current ? .focus())
                }
            }, p.getValidationProps(C, i), Z],
            stateAttributesMapping: Es
        })
    }),
    Bc = ul,
    ks = n.createContext(void 0);

function Ds() {
    return n.useContext(ks)
}
var Ns = n.createContext(void 0);

function Kn(e) {
    const t = n.useContext(Ns);
    if (t === void 0 && !e) throw new Error(We(21));
    return t
}
var Ls = n.forwardRef(function(t, r) {
        const o = tt(),
            {
                buttonRef: u,
                getButtonProps: d
            } = pt({
                native: !1
            }),
            l = Bt(r, u);

        function s(i) {
            o.state.setOpen(!1, Te(Ti, i.nativeEvent, i.currentTarget))
        }
        const c = d({
            onClick: s
        });
        return (0, q.jsx)("span", {
            ref: l,
            ...c,
            "aria-label": "Dismiss",
            tabIndex: void 0,
            style: hn
        })
    }),
    jc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            disabled: d = !1,
            id: l,
            style: s,
            ...c
        } = t, {
            state: i,
            disabled: f,
            setTouched: m,
            setFocused: g,
            validationMode: h,
            validation: b
        } = Rt(), {
            labelId: p
        } = tn(), R = Ds(), x = !!Kn(!0), a = tt(), S = Gn(), I = jt(), E = y(a, F.required), N = y(a, F.disabled), w = y(a, F.readOnly), k = y(a, F.name), T = y(a, F.form), P = y(a, F.selectionMode), A = y(a, F.autoHighlight), $ = y(a, F.inputProps), B = y(a, F.triggerProps), D = y(a, F.open), X = y(a, F.mounted), O = y(a, F.selectedValue), G = y(a, F.id), z = y(a, F.inline), V = y(a, F.modal), C = !!A, _ = Ms(a), j = f || N || d, H = Xn(), J = x || z, U = !J || V, W = st(l ? ? (J ? void 0 : G)), Y = x ? Di : i, [ye, be] = n.useState(null), K = n.useRef(!1), Z = n.useRef(null), ge = n.useRef(!1), pe = P === "none" && !x, ne = fe(M => {
            const ae = x || a.state.inline;
            ae && !a.state.hasInputValue && a.state.setInputValue("", Te(Qe)), a.update({
                inputElement: M,
                inputInsidePopup: ae,
                inputOwnsFormValue: pe
            })
        }), me = x ? c : b.getValidationProps(j, c);

        function L() {
            a.state.setIndices({
                activeIndex: null,
                selectedIndex: null,
                type: a.state.keyboardActiveRef.current ? Jt : Un
            })
        }

        function ee() {
            a.state.keyboardActiveRef.current = !1
        }
        const se = { ...Y,
            open: D,
            disabled: j,
            readOnly: w,
            popupSide: _,
            listEmpty: H
        };

        function re(M) {
            if (!R) return;
            let ae;
            const {
                highlightedChipIndex: Oe
            } = R, oe = R.chipsRef.current.length, [ce, he] = As(I);
            return Oe !== void 0 ? (M.key === ce ? (M.preventDefault(), Oe > 0 ? ae = Oe - 1 : ae = void 0) : M.key === he ? (M.preventDefault(), Oe < oe - 1 ? ae = Oe + 1 : ae = void 0) : (M.key === "Backspace" || M.key === "Delete") && (M.preventDefault(), ae = Vs(Oe, O.length), L()), ae) : (M.key === ce && (M.currentTarget.selectionStart ? ? 0) === 0 && O.length > 0 && (M.preventDefault(), ae = oe > 0 ? oe - 1 : void 0), ae)
        }
        const ue = le("input", t, {
                state: se,
                ref: [r, a.state.inputRef, ne],
                props: [$, B, {
                    value: ye ? ? S,
                    "aria-readonly": w || void 0,
                    "aria-required": E || void 0,
                    "aria-labelledby": p,
                    disabled: j,
                    readOnly: w,
                    required: P === "none" ? E : void 0,
                    form: T,
                    ...pe && k && {
                        name: k
                    },
                    id: W,
                    onFocus() {
                        if (g(!0), !z || !ge.current) return;
                        ge.current = !1;
                        const M = Z.current;
                        M == null || !Object.hasOwn(a.state.valuesRef.current, M) || a.state.setIndices({
                            activeIndex: M
                        })
                    },
                    onBlur() {
                        m(!0), g(!1);
                        const M = a.state.activeIndex;
                        if (z && M !== null && A !== "always" && (Z.current = M, ge.current = !0, a.state.setIndices({
                                activeIndex: null
                            })), h === "onBlur") {
                            const ae = P === "none" ? S : O;
                            b.commit(ae)
                        }
                    },
                    onCompositionStart(M) {
                        zi || (K.current = !0, be(M.currentTarget.value))
                    },
                    onCompositionEnd(M) {
                        K.current = !1;
                        const ae = M.currentTarget.value;
                        be(null), a.state.setInputValue(ae, Te(Fn, M.nativeEvent))
                    },
                    onChange(M) {
                        const ae = M.nativeEvent,
                            Oe = ae.inputType,
                            oe = !Oe || Oe === "insertReplacementText",
                            ce = K.current || !oe;

                        function he(Se) {
                            w || j || !Se || !ce || (a.state.setOpen(!0, Te(Fn, ae)), C || L())
                        }
                        if (K.current) {
                            const Se = M.currentTarget.value;
                            be(Se), Se === "" && !a.state.openOnInputClick && !a.state.inputInsidePopup && a.state.setOpen(!1, Te(Mt, ae));
                            const Ne = Se.trim(),
                                Fe = C && Ne !== "";
                            he(Ne), D && a.state.activeIndex !== null && !Fe && L();
                            return
                        }
                        const Ce = Te(Fn, ae);
                        if (a.state.setInputValue(M.currentTarget.value, Ce), Ce.isCanceled) return;
                        const Ie = M.currentTarget.value === "",
                            Be = Te(Mt, ae);
                        Ie && !a.state.inputInsidePopup && (P === "single" && a.state.setSelectedValue(null, Be), a.state.openOnInputClick || a.state.setOpen(!1, Be)), he(M.currentTarget.value.trim()), D && a.state.activeIndex !== null && !C && L()
                    },
                    onKeyDown(M) {
                        if (j || w || M.ctrlKey || M.shiftKey || M.altKey || M.metaKey) return;
                        a.state.keyboardActiveRef.current = !0;
                        const ae = M.currentTarget,
                            Oe = ae.scrollWidth - ae.clientWidth,
                            oe = I === "rtl";
                        if (M.key === "Home") {
                            At(M);
                            const Ce = Yr && oe ? ae.value.length : 0;
                            ae.setSelectionRange(Ce, Ce), ae.scrollLeft = 0;
                            return
                        }
                        if (M.key === "End") {
                            At(M);
                            const Ce = Yr && oe ? 0 : ae.value.length;
                            ae.setSelectionRange(Ce, Ce), ae.scrollLeft = oe ? -Oe : Oe;
                            return
                        }
                        if (!X && M.key === "Escape") {
                            const Ce = P === "multiple" && Array.isArray(O) ? O.length === 0 : O === null,
                                Ie = Te(Ci, M.nativeEvent),
                                Be = P === "multiple" ? [] : null;
                            a.state.setInputValue("", Ie), a.state.setSelectedValue(Be, Ie), !Ce && !a.state.inline && !Ie.isPropagationAllowed && M.stopPropagation();
                            return
                        }
                        if (R && M.key === "Backspace" && ae.value === "" && R.highlightedChipIndex === void 0 && Array.isArray(O) && O.length > 0) {
                            const Ce = R.chipsRef.current.length,
                                Ie = Ce > 0 ? Ce - 1 : O.length - 1,
                                Be = O.filter((Se, Ne) => Ne !== Ie);
                            L(), a.state.setSelectedValue(Be, Te(Qe, M.nativeEvent));
                            return
                        }
                        const ce = R ? .highlightedChipIndex !== void 0,
                            he = re(M);
                        if (R ? .setHighlightedChipIndex(he), he !== void 0 ? R ? .chipsRef.current[he] ? .focus() : ce && a.state.inputRef.current ? .focus(), M.which !== 229 && M.key === "Enter" && D) {
                            const Ce = a.state.activeIndex,
                                Ie = M.nativeEvent;
                            if (Ce === null) {
                                if (z) return;
                                a.state.setOpen(!1, Te(Qe, Ie));
                                return
                            }
                            At(M), Os(a, Ce, Ie)
                        }
                    },
                    onPointerMove: ee,
                    onPointerDown: ee
                }, me],
                stateAttributesMapping: Es
            }),
            Ae = x ? (0, q.jsx)(Ni.Provider, {
                value: ki,
                children: ue
            }) : ue;
        return (0, q.jsxs)(n.Fragment, {
            children: [D && U && (0, q.jsx)(Ls, {
                ref: a.state.startDismissRef
            }), Ae]
        })
    }),
    Fs = lo(Ri(), 1);

function dl(e, t, r, o, u) {
    if (e.baseUIHandlerPrevented || o) return;
    const d = Ft(e.nativeEvent),
        l = Kt(d) ? d : null;
    l !== e.currentTarget && (u ? .(l) || Ui(l)) || (e.preventDefault(), !r && (t.state.inputRef.current ? .focus(), t.state.openOnInputClick && t.state.setOpen(!0, Te(po, e.nativeEvent))))
}
var Uc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t;
        return le("span", t, {
            ref: r,
            props: [{
                "aria-hidden": !0,
                children: "▼"
            }, l]
        })
    }),
    fl = { ...ht,
        ...No
    },
    _c = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            disabled: d = !1,
            nativeButton: l = !0,
            keepMounted: s = !1,
            style: c,
            ...i
        } = t, {
            disabled: f
        } = Rt(), m = tt(), g = y(m, F.selectionMode), h = y(m, F.disabled), b = y(m, F.readOnly), p = y(m, F.open), R = y(m, F.selectedValue), v = y(m, F.hasSelectionChips), x = Gn();
        let a = !1;
        g === "none" ? a = x !== "" : g === "single" ? a = R != null : a = v;
        const S = f || h || d,
            {
                buttonRef: I,
                getButtonProps: E
            } = pt({
                native: l,
                disabled: S
            }),
            {
                mounted: N,
                transitionStatus: w,
                setMounted: k
            } = Vt(a),
            T = {
                disabled: S,
                visible: a,
                open: p,
                transitionStatus: w
            };
        yt({
            open: a,
            ref: m.state.clearRef,
            onComplete() {
                a || k(!1)
            }
        });
        const P = le("button", t, {
            state: T,
            ref: [r, I, m.state.clearRef],
            props: [{
                tabIndex: -1,
                children: "x",
                onMouseDown(A) {
                    A.preventDefault()
                },
                onClick(A) {
                    if (S || b) return;
                    const $ = m.state.keyboardActiveRef.current ? Jt : Un;
                    m.state.setInputValue("", Te(jr, A.nativeEvent)), g !== "none" ? (m.state.setSelectedValue(Array.isArray(R) ? [] : null, Te(jr, A.nativeEvent)), m.state.setIndices({
                        activeIndex: null,
                        selectedIndex: null,
                        type: $
                    })) : m.state.setIndices({
                        activeIndex: null,
                        type: $
                    }), m.state.inputRef.current ? .focus()
                }
            }, i, E],
            stateAttributesMapping: fl
        });
        return s || N ? P : null
    }),
    Hs = n.createContext(null);

function pl() {
    return n.useContext(Hs)
}

function ml(e) {
    const {
        children: t,
        items: r
    } = e, o = n.useMemo(() => ({
        items: r
    }), [r]);
    return (0, q.jsx)(Hs.Provider, {
        value: o,
        children: t
    })
}

function hl(e) {
    const {
        children: t
    } = e, {
        filteredItems: r
    } = yn(), o = pl(), u = o ? o.items : r;
    return (0, q.jsx)(n.Fragment, {
        children: u.map(t)
    })
}
var Wc = n.forwardRef(function(t, r) {
        var o;
        const {
            render: u,
            className: d,
            style: l,
            children: s,
            ...c
        } = t, i = tt(), f = qn(), m = !!Kn(!0), {
            filteredItems: g,
            hasItems: h
        } = yn(), b = y(i, F.selectionMode), p = y(i, F.grid), R = y(i, F.listProps), v = y(i, F.virtualized), x = y(i, F.forceMounted), a = b === "multiple", S = g.length === 0, I = fe(A => {
            i.set("positionerElement", A)
        }), E = fe(A => {
            i.set("listElement", A)
        }), N = n.useMemo(() => typeof s == "function" ? o || (o = (0, q.jsx)(hl, {
            children: s
        })) : s, [s]), w = {
            empty: S
        }, k = f.useState("floatingId"), T = le("div", t, {
            state: w,
            ref: [r, E, m ? null : I],
            props: [R, {
                children: N,
                tabIndex: -1,
                id: k,
                role: p ? "grid" : "listbox",
                "aria-multiselectable": a ? "true" : void 0,
                onKeyDown(A) {
                    if (!(i.state.disabled || i.state.readOnly) && A.key === "Enter") {
                        const $ = i.state.activeIndex;
                        if ($ == null) return;
                        At(A), Os(i, $, A.nativeEvent)
                    }
                },
                onKeyDownCapture() {
                    i.state.keyboardActiveRef.current = !0
                },
                onPointerMoveCapture() {
                    i.state.keyboardActiveRef.current = !1
                }
            }, c]
        });
        if (v) return T;
        const P = h && !x ? void 0 : i.state.labelsRef;
        return (0, q.jsx)(on, {
            elementsRef: i.state.listRef,
            labelsRef: P,
            children: T
        })
    }),
    gl = "⁠";

function bl(e) {
    const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT);
    let r = null;
    for (; t.nextNode();) {
        const o = t.currentNode;
        o.nodeValue !== "" && (r = o)
    }
    return r
}

function Bs() {
    const e = Pt(),
        t = n.useRef(null);
    return n.useEffect(() => {
        if ($i) return;
        const r = t.current;
        if (r == null) return;
        const o = bl(r);
        if (o == null) return;
        const u = o.data,
            d = `${u}${gl}`;
        return o.nodeValue = d, e.start(200, () => {
            o.nodeValue === d && (o.nodeValue = u)
        }), () => {
            e.clear(), o.nodeValue === d && (o.nodeValue = u)
        }
    }, [t, e]), t
}
var zc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            children: l,
            ...s
        } = t, c = Bs();
        return le("div", t, {
            ref: [r, c],
            props: [{
                children: l,
                role: "status",
                "aria-live": "polite",
                "aria-atomic": !0
            }, s]
        })
    }),
    js = n.createContext(void 0);

function vl() {
    const e = n.useContext(js);
    if (e === void 0) throw new Error(We(20));
    return e
}
var $c = n.forwardRef(function(t, r) {
        const {
            keepMounted: o = !1,
            ...u
        } = t, d = tt(), l = y(d, F.mounted), s = y(d, F.forceMounted);
        return l || o || s ? (0, q.jsx)(js.Provider, {
            value: o,
            children: (0, q.jsx)(ho, {
                ref: r,
                ...u
            })
        }) : null
    }),
    xl = { ...bn,
        ...ht
    },
    Yc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, s = tt(), c = y(s, F.open), i = y(s, F.mounted), f = {
            open: c,
            transitionStatus: y(s, F.transitionStatus)
        };
        return le("div", t, {
            state: f,
            ref: r,
            stateAttributesMapping: xl,
            props: [{
                role: "presentation",
                hidden: !i,
                style: {
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            }, l]
        })
    }),
    qc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            anchor: d,
            positionMethod: l,
            side: s,
            align: c,
            sideOffset: i,
            alignOffset: f,
            collisionBoundary: m = "clipping-ancestors",
            collisionPadding: g,
            arrowPadding: h,
            sticky: b,
            disableAnchorTracking: p = !1,
            collisionAvoidance: R = yo,
            style: v,
            ...x
        } = t, a = tt(), S = qn(), I = vl(), E = y(a, F.modal), N = y(a, F.open), w = y(a, F.mounted), k = y(a, F.openMethod), T = y(a, F.positionerElement), P = y(a, F.triggerElement), A = y(a, F.inputElement), $ = y(a, F.inputGroupElement), B = y(a, F.inputInsidePopup), D = y(a, F.transitionStatus), X = Xn(), O = Io({
            anchor: d ? ? (B ? P : $ ? ? A),
            floatingRootContext: S,
            positionMethod: l,
            mounted: w,
            side: s,
            sideOffset: i,
            align: c,
            alignOffset: f,
            arrowPadding: h,
            collisionBoundary: m,
            collisionPadding: g,
            sticky: b,
            disableAnchorTracking: p,
            keepMounted: I,
            collisionAvoidance: R,
            lazyFlip: !0
        });
        Do(N && E, k === "touch", T, P);
        const G = {
            open: N,
            side: O.side,
            align: O.align,
            anchorHidden: O.anchorHidden,
            empty: X
        };
        Ve(() => {
            a.set("popupSide", O.side)
        }, [a, O.side]);
        const z = fe(C => {
                a.set("positionerElement", C)
            }),
            V = bo(t, G, {
                styles: O.positionerStyles,
                transitionStatus: D,
                props: x,
                refs: [r, z],
                hidden: !w,
                inert: !N
            });
        return (0, q.jsxs)(Ns.Provider, {
            value: O,
            children: [w && E && (0, q.jsx)(Lo, {
                inert: pr(!N),
                cutout: $ ? ? A ? ? P
            }), V]
        })
    }),
    yl = { ...bn,
        ...ht
    },
    Gc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            initialFocus: l,
            finalFocus: s,
            ...c
        } = t, i = tt(), f = Kn(), m = qn(), g = y(i, F.mounted), h = y(i, F.open), b = y(i, F.openMethod), p = y(i, F.popupProps), R = y(i, F.transitionStatus), v = y(i, F.inputInsidePopup), x = y(i, F.inputElement), a = y(i, F.modal), S = y(i, F.id), I = Xn(), E = c.id ? ? (v ? Cs(S) : void 0);
        Ve(() => (i.set("popupId", i.state.popupRef.current ? .id || E), () => {
            i.set("popupId", void 0)
        }), [i, E]), yt({
            open: h,
            ref: i.state.popupRef,
            onComplete() {
                h && i.state.onOpenChangeComplete(!0)
            }
        });
        const N = {
                open: h,
                side: f.side,
                align: f.align,
                anchorHidden: f.anchorHidden,
                transitionStatus: R,
                empty: I
            },
            w = le("div", t, {
                state: N,
                ref: [r, i.state.popupRef],
                props: [p, {
                    id: E,
                    role: v ? "dialog" : "presentation",
                    onFocus(A) {
                        const $ = Ft(A.nativeEvent);
                        b !== "touch" && (Je(i.state.listElement, $) || $ === A.currentTarget) && i.state.inputRef.current ? .focus()
                    }
                }, xo(R), c],
                stateAttributesMapping: yl
            }),
            k = l === void 0 ? v ? A => A === "touch" ? i.state.popupRef.current : x : !1 : l;
        let T;
        s != null ? T = s : T = v ? void 0 : !1;
        const P = !v || a;
        return (0, q.jsx)(Co, {
            context: m,
            disabled: !g,
            modal: P,
            openInteractionType: b,
            initialFocus: k,
            returnFocus: T,
            getInsideElements: () => [i.state.startDismissRef.current, i.state.endDismissRef.current],
            children: (0, q.jsxs)(n.Fragment, {
                children: [w, P && (0, q.jsx)(Ls, {
                    ref: i.state.endDismissRef
                })]
            })
        })
    }),
    Xc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, s = tt(), {
            arrowRef: c,
            side: i,
            align: f,
            arrowUncentered: m,
            arrowStyles: g
        } = Kn(), h = {
            open: y(s, F.open),
            side: i,
            align: f,
            uncentered: m
        };
        return le("div", t, {
            ref: [c, r],
            stateAttributesMapping: bn,
            state: h,
            props: {
                style: g,
                "aria-hidden": !0,
                ...l
            }
        })
    }),
    Us = n.createContext(void 0);

function Rl() {
    const e = n.useContext(Us);
    if (e === void 0) throw new Error(We(18));
    return e
}
var Kc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            items: l,
            ...s
        } = t, [c, i] = n.useState(), f = n.useMemo(() => ({
            labelId: c,
            setLabelId: i,
            items: l
        }), [c, i, l]), m = le("div", t, {
            ref: r,
            props: [{
                role: "group",
                "aria-labelledby": c
            }, s]
        }), g = (0, q.jsx)(Us.Provider, {
            value: f,
            children: m
        });
        return l ? (0, q.jsx)(ml, {
            items: l,
            children: g
        }) : g
    }),
    Qc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            id: l,
            ...s
        } = t, {
            setLabelId: c
        } = Rl(), i = st(l);
        return Ve(() => (c(i), () => {
            c(f => f === i ? void 0 : f)
        }), [i, c]), le("div", t, {
            ref: r,
            props: [{
                id: i
            }, s]
        })
    }),
    _s = n.createContext(void 0);

function Ws() {
    const e = n.useContext(_s);
    if (!e) throw new Error(We(19));
    return e
}
var zs = n.createContext(!1);

function Sl() {
    return n.useContext(zs)
}

function $s(e) {
    const {
        componentProps: t,
        forwardedRef: r,
        virtualized: o,
        indexFromFilter: u
    } = e, {
        render: d,
        className: l,
        style: s,
        value: c = null,
        index: i,
        disabled: f = !1,
        nativeButton: m = !1,
        ...g
    } = t, h = n.useRef(null), b = rn({
        guess: !0,
        index: i,
        textRef: h
    }), p = tt(), R = Sl(), v = al(), x = y(p, F.selectionMode), a = y(p, F.disabled), S = y(p, F.readOnly), I = y(p, F.isItemEqualToValue), E = a || f, N = x !== "none", w = i ? ? u ? ? b.index, k = w !== -1, T = y(p, F.id), P = y(p, F.isActive, w), A = y(p, F.isSelected, c), $ = y(p, F.itemProps), B = n.useRef(null), D = T != null && k ? `${T}-${w}` : void 0, X = A && N;
    Ve(() => {
        if (!(k && (o || i != null))) return;
        const H = p.state.listRef.current;
        return H[w] = B.current, () => {
            delete H[w]
        }
    }, [k, o, w, i, p]), Ve(() => {
        if (!k || v) return;
        const H = p.state.valuesRef.current;
        return H[w] = c, () => {
            delete H[w]
        }
    }, [k, v, w, c, p]), Ve(() => {
        if (!k || v) return;
        const H = p.state.selectedValue,
            J = Array.isArray(H) ? H[H.length - 1] : H;
        mt(c, J, I) && p.set("selectedIndex", w)
    }, [k, v, p, w, c, I]);
    const {
        getButtonProps: O,
        buttonRef: G
    } = pt({
        disabled: E,
        focusableWhenDisabled: !0,
        native: m,
        composite: !0
    }), z = {
        disabled: E,
        selected: X,
        highlighted: P
    };

    function V(H) {
        function J() {
            p.state.handleSelection(H, c)
        }
        p.state.submitOnItemClick ? (Fs.flushSync(J), p.state.requestSubmit()) : J()
    }
    const C = {
            id: D,
            role: R ? "gridcell" : "option",
            "aria-selected": N ? X : void 0,
            tabIndex: void 0,
            onPointerDownCapture(H) {
                H.isPrimary && (p.state.pointerDownItemRef.current = H.currentTarget), H.preventDefault()
            },
            onMouseDown(H) {
                H.preventDefault()
            },
            onClick(H) {
                E || S || V(H.nativeEvent)
            },
            onMouseUp(H) {
                const J = p.state.pointerDownItemRef.current === H.currentTarget;
                p.state.pointerDownItemRef.current = null, !(E || S || H.button !== 0 || J || !P) && V(H.nativeEvent)
            }
        },
        _ = le("div", t, {
            ref: [G, r, b.ref, B],
            state: z,
            props: [$, C, g, O]
        }),
        j = n.useMemo(() => ({
            selected: X,
            textRef: h
        }), [X, h]);
    return (0, q.jsx)(_s.Provider, {
        value: j,
        children: _
    })
}

function Il(e) {
    const {
        componentProps: t,
        forwardedRef: r
    } = e, o = tt(), u = y(o, F.isItemEqualToValue), {
        flatFilteredItems: d
    } = yn(), l = _t(d, t.value ? ? null, u);
    return (0, q.jsx)($s, {
        componentProps: t,
        forwardedRef: r,
        virtualized: !0,
        indexFromFilter: l
    })
}
var Cl = n.memo(n.forwardRef(function(t, r) {
        const o = tt(),
            u = y(o, F.virtualized);
        return u && t.index == null ? (0, q.jsx)(Il, {
            componentProps: t,
            forwardedRef: r
        }) : (0, q.jsx)($s, {
            componentProps: t,
            forwardedRef: r,
            virtualized: u,
            indexFromFilter: void 0
        })
    })),
    Zc = Cl,
    Jc = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, s = le("div", t, {
            ref: r,
            props: [{
                role: "row"
            }, l]
        });
        return (0, q.jsx)(zs.Provider, {
            value: !0,
            children: s
        })
    }),
    eu = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            children: l,
            ...s
        } = t, {
            filteredItems: c
        } = yn(), i = tt(), f = Bs(), m = c.length === 0 ? l : null;
        return le("div", t, {
            ref: [r, i.state.emptyRef, f],
            props: [{
                children: m,
                role: "status",
                "aria-live": "polite",
                "aria-atomic": !0
            }, s]
        })
    }),
    tu = Sr;

function nu(e) {
    const {
        multiple: t = !1,
        defaultValue: r,
        value: o,
        onValueChange: u,
        autoComplete: d,
        ...l
    } = e;
    return (0, q.jsx)(Ts, { ...l,
        selectionMode: t ? "multiple" : "single",
        selectedValue: o,
        defaultSelectedValue: r,
        onSelectedValueChange: u,
        formAutoComplete: d
    })
}
var ru = n.forwardRef(function(t, r) {
    const {
        render: o,
        className: u,
        style: d,
        ...l
    } = t, s = l;
    delete s.id;
    const c = Rt(),
        i = tt(),
        f = y(i, F.inputInsidePopup),
        m = y(i, F.triggerElement);
    y(i, F.inputElement);
    const g = y(i, F.id),
        h = Ko(g),
        b = m ? .id ? ? (f ? g : void 0),
        p = Oi({
            id: h,
            fallbackControlId: b,
            setLabelId(R) {
                const v = typeof R == "function" ? R(i.state.labelId) : R;
                i.set("labelId", v)
            }
        });
    return le("div", t, {
        ref: r,
        state: c.state,
        props: [p, l],
        stateAttributesMapping: en
    })
});

function ou(e) {
    const {
        children: t,
        placeholder: r
    } = e, o = tt(), u = y(o, F.itemToStringLabel), d = y(o, F.selectedValue), l = y(o, F.items), s = y(o, F.selectionMode) === "multiple", c = y(o, F.hasSelectedValue), i = !c && r != null && t == null, f = y(o, F.hasNullItemLabel, i);
    let m = null;
    return typeof t == "function" ? m = t(d) : t != null ? m = t : !c && r != null && !f ? m = r : s && Array.isArray(d) ? m = Xo(d, l, u) : m = vr(d, l, u), (0, q.jsx)(n.Fragment, {
        children: m
    })
}
var su = n.forwardRef(function(t, r) {
        const {
            selected: o
        } = Ws();
        return t.keepMounted || o ? (0, q.jsx)(Pl, { ...t,
            ref: r
        }) : null
    }),
    Pl = n.memo(n.forwardRef((e, t) => {
        const {
            render: r,
            className: o,
            style: u,
            keepMounted: d,
            ...l
        } = e, {
            selected: s
        } = Ws(), c = n.useRef(null), {
            transitionStatus: i,
            setMounted: f
        } = Vt(s), m = le("span", e, {
            ref: [t, c],
            state: {
                selected: s,
                transitionStatus: i
            },
            props: [{
                "aria-hidden": !0,
                children: "✔️"
            }, l],
            stateAttributesMapping: ht
        });
        return yt({
            open: s,
            ref: c,
            onComplete() {
                s || f(!1)
            }
        }), m
    })),
    iu = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, s = tt(), c = y(s, F.open), i = y(s, F.hasSelectionChips), [f, m] = n.useState(void 0);
        c && f !== void 0 && m(void 0);
        const g = n.useRef([]),
            h = le("div", t, {
                ref: [r, s.state.chipsContainerRef],
                props: [i ? {
                    role: "toolbar"
                } : Qt, {
                    onMouseDown(p) {
                        dl(p, s, s.state.disabled, s.state.readOnly)
                    }
                }, l]
            }),
            b = n.useMemo(() => ({
                highlightedChipIndex: f,
                setHighlightedChipIndex: m,
                chipsRef: g
            }), [f, m, g]);
        return (0, q.jsx)(ks.Provider, {
            value: b,
            children: (0, q.jsx)(on, {
                elementsRef: g,
                children: h
            })
        })
    }),
    Ys = n.createContext(void 0);

function wl() {
    const e = n.useContext(Ys);
    if (!e) throw new Error(We(17));
    return e
}
var au = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, s = tt(), {
            setHighlightedChipIndex: c,
            chipsRef: i
        } = Ds(), f = jt(), m = y(s, F.disabled), g = y(s, F.readOnly), h = y(s, F.selectedValue), {
            ref: b,
            index: p
        } = rn();

        function R(a) {
            let S = p;
            const [I, E] = As(f);
            return a.key === I ? (a.preventDefault(), p > 0 ? S = p - 1 : S = void 0) : a.key === E ? (a.preventDefault(), p < i.current.length - 1 ? S = p + 1 : S = void 0) : a.key === "Backspace" || a.key === "Delete" ? (S = Vs(p, h.length), At(a), s.state.setIndices({
                activeIndex: null,
                selectedIndex: null,
                type: Jt
            }), s.state.setSelectedValue(h.filter((N, w) => w !== p), Te(Qe, a.nativeEvent))) : a.key === "Enter" || a.key === " " ? (At(a), S = void 0) : a.key === "ArrowDown" || a.key === "ArrowUp" ? (At(a), s.state.setOpen(!0, Te(mo, a.nativeEvent)), S = void 0) : a.key.length === 1 && !a.ctrlKey && !a.metaKey && !a.altKey && (S = void 0), S
        }
        const v = le("div", t, {
                ref: [r, b],
                state: {
                    disabled: m
                },
                props: [{
                    tabIndex: -1,
                    "aria-disabled": m || void 0,
                    "aria-readonly": g || void 0,
                    onKeyDown(a) {
                        if (m || g) return;
                        const S = R(a);
                        Fs.flushSync(() => {
                            c(S)
                        }), S === void 0 ? s.state.inputRef.current ? .focus() : i.current[S] ? .focus()
                    }
                }, l]
            }),
            x = n.useMemo(() => ({
                index: p
            }), [p]);
        return (0, q.jsx)(Ys.Provider, {
            value: x,
            children: v
        })
    }),
    lu = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            disabled: d = !1,
            nativeButton: l = !0,
            style: s,
            ...c
        } = t, i = tt(), {
            index: f
        } = wl(), m = y(i, F.disabled), g = y(i, F.readOnly), h = y(i, F.selectedValue), b = y(i, F.isItemEqualToValue), p = m || d, {
            buttonRef: R,
            getButtonProps: v
        } = pt({
            native: l,
            disabled: p || g,
            focusableWhenDisabled: !0
        }), x = {
            disabled: p
        };

        function a(I) {
            const E = i.state.activeIndex;
            if (E == null) return;
            const N = _t(i.state.valuesRef.current, I, b);
            N !== -1 && E === N && i.state.setIndices({
                activeIndex: null,
                type: i.state.keyboardActiveRef.current ? Jt : Un
            })
        }

        function S(I) {
            const E = Te(Li, I.nativeEvent),
                N = h[f];
            return a(N), i.state.setSelectedValue(h.filter((w, k) => k !== f), E), i.state.inputRef.current ? .focus(), E
        }
        return le("button", t, {
            ref: [r, R],
            state: x,
            props: [{
                tabIndex: -1,
                onMouseDown(I) {
                    I.preventDefault()
                },
                onClick(I) {
                    S(I).isPropagationAllowed || I.stopPropagation()
                },
                onKeyDown(I) {
                    (I.key === "Enter" || I.key === " ") && (S(I).isPropagationAllowed || At(I))
                }
            }, c, v]
        })
    }),
    cu = Sr;

function qs(e, t) {
    return e - t
}

function Gs(e, t, r, o, u, d) {
    const l = Ge(e, r, o);
    if (!u) return l;
    const s = d.slice();
    return s[t] = Ge(l, d[t - 1] ? ? -1 / 0, d[t + 1] ? ? 1 / 0), s.sort(qs)
}

function Xs(e, t, r) {
    if (!Array.isArray(e)) return !0;
    const o = t * r;
    for (let u = 0; u < e.length - 1; u += 1)
        if (!(Math.abs(e[u] - e[u + 1]) >= o)) return !1;
    return !0
}
var Xt = () => null,
    Rn = {
        activeThumbIndex: Xt,
        max: Xt,
        min: Xt,
        minStepsBetweenValues: Xt,
        step: Xt,
        values: Xt,
        ...en
    },
    Ks = n.createContext(void 0);

function Qn() {
    const e = n.useContext(Ks);
    if (e === void 0) throw new Error(We(62));
    return e
}

function Tl(e, t) {
    return e === t || Array.isArray(e) && Array.isArray(t) && zn(e, t)
}
var uu = n.forwardRef(function(t, r) {
    const {
        "aria-labelledby": o,
        className: u,
        defaultValue: d,
        disabled: l = !1,
        id: s,
        format: c,
        largeStep: i = 10,
        locale: f,
        render: m,
        max: g = 100,
        min: h = 0,
        minStepsBetweenValues: b = 0,
        form: p,
        name: R,
        onValueChange: v,
        onValueCommitted: x,
        orientation: a = "horizontal",
        step: S = 1,
        thumbCollisionBehavior: I = "push",
        thumbAlignment: E = "center",
        value: N,
        style: w,
        ...k
    } = t, T = st(s), P = Ko(T), A = fe(v), $ = fe(x), {
        clearErrors: B
    } = mn(), {
        state: D,
        disabled: X,
        name: O,
        setTouched: G,
        setDirty: z,
        validityData: V,
        validation: C
    } = Rt(), {
        labelId: _
    } = tn(), [j, H] = n.useState(), J = o ? ? xr(_, j), U = X || l, W = O ? ? R, [Y, ye] = ft({
        controlled: N,
        default: d ? ? h,
        name: "Slider"
    }), be = n.useRef(null), K = n.useRef(null), Z = n.useRef([]), ge = n.useRef(null), pe = n.useRef(-1), ne = n.useRef(null), me = n.useRef(Qe), [L, ee] = n.useState(-1), [se, re] = n.useState(-1), [ue, Ae] = n.useState(!1), [M, ae] = n.useState(() => new Map), [Oe, oe] = n.useState([void 0, void 0]), ce = fe(Re => {
        ee(Re), Re !== -1 && re(Re)
    }), he = fe(Re => {
        Re && (K.current = Re)
    }), Ce = Array.isArray(Y), Ie = n.useMemo(() => Ce ? Y.map(Re => Ge(Re, h, g)).sort(qs) : [Ge(Y, h, g)], [g, h, Ce, Y]), Be = Ce ? Ie : Ie[0];
    pn(C.inputRef, T, Be, void 0, !U, R), Dt(Be, () => {
        B(W), C.change(Be);
        const Re = V.initialValue;
        let te;
        Array.isArray(Be) && Array.isArray(Re) ? te = !zn(Be, Re) : te = Be !== Re, z(te)
    });
    const Se = fe((Re, te) => {
            if (Number.isNaN(Re) || Tl(Re, Y)) return !1;
            const ke = te.event,
                Ee = ke.constructor,
                De = new Ee(ke.type, ke);
            return Object.defineProperty(De, "target", {
                writable: !0,
                value: {
                    value: Re,
                    name: W
                }
            }), te.event = De, A(Re, te), te.isCanceled ? !1 : (me.current = te.reason, ye(Re), !0)
        }),
        Ne = fe((Re, te, ke) => {
            const Ee = Gs(Re, te, h, g, Ce, Ie);
            if (Xs(Ee, S, b)) {
                const De = "key" in ke ? Jt : Fn,
                    Ye = Se(Ee, Te(De, ke.nativeEvent, void 0, {
                        activeThumbIndex: te
                    }));
                G(!0), Ye && $(Ee, ur(De, ke.nativeEvent))
            }
        });
    Ve(() => {
        if (!U) return;
        const Re = dr(xt(be.current));
        Je(be.current, Re) && Re.blur(), L !== -1 && ce(-1)
    }, [L, U, ce]);
    const Fe = n.useMemo(() => ({ ...D,
            activeThumbIndex: L,
            disabled: U,
            dragging: ue,
            orientation: a,
            max: g,
            min: h,
            minStepsBetweenValues: b,
            step: S,
            values: Ie
        }), [D, L, U, ue, g, h, b, a, S, Ie]),
        _e = n.useMemo(() => ({
            active: L,
            controlRef: K,
            disabled: U,
            dragging: ue,
            validation: C,
            format: c,
            handleInputChange: Ne,
            indicatorPosition: Oe,
            inset: E !== "center",
            labelId: J,
            rootLabelId: P,
            largeStep: i,
            lastUsedThumbIndex: se,
            lastChangeReasonRef: me,
            form: p,
            locale: f,
            max: g,
            min: h,
            minStepsBetweenValues: b,
            name: W,
            onValueCommitted: $,
            orientation: a,
            pressedThumbCenterOffsetRef: ge,
            pressedThumbIndexRef: pe,
            pressedValuesRef: ne,
            registerFieldControlRef: he,
            renderBeforeHydration: E === "edge",
            setActive: ce,
            setDragging: Ae,
            setIndicatorPosition: oe,
            setLabelId: H,
            setValue: Se,
            state: Fe,
            step: S,
            thumbCollisionBehavior: I,
            thumbMap: M,
            thumbRefs: Z,
            values: Ie
        }), [L, J, P, U, ue, C, c, Ne, Oe, i, se, p, f, g, h, b, W, $, a, he, ce, Se, Fe, S, I, E, M, Ie]),
        Le = le("div", t, {
            state: Fe,
            ref: [r, be],
            props: [{
                "aria-labelledby": J,
                id: T,
                role: "group"
            }, k, Re => C.getValidationProps(U, Re)],
            stateAttributesMapping: Rn
        });
    return (0, q.jsx)(Ks.Provider, {
        value: _e,
        children: (0, q.jsx)(on, {
            elementsRef: Z,
            onMapChange: ae,
            children: Le
        })
    })
});

function Qs(e, t) {
    const r = e.getBoundingClientRect();
    return t ? (r.top + r.bottom) / 2 : (r.left + r.right) / 2
}

function un(e) {
    if (e === 0) return 0;
    if (Math.abs(e) < 1) {
        const r = e.toExponential().split("e-"),
            o = r[0].split(".")[1];
        return (o ? o.length : 0) + parseInt(r[1], 10)
    }
    const t = e.toString().split(".")[1];
    return t ? t.length : 0
}

function Zs(e, t, r) {
    const o = Math.round((e - r) / t) * t + r;
    return Number(o.toFixed(Math.max(un(t), un(r))))
}

function io(e, t, r, o, u, d, l, s) {
    const c = e.slice(),
        i = d * l,
        f = c.length - 1,
        m = s ? ? e,
        g = o + t * i,
        h = u - (f - t) * i;
    c[t] = Ge(r, g, h);
    for (let b = t + 1; b <= f; b += 1) {
        const p = c[b - 1] + i,
            R = u - (f - b) * i,
            v = m[b];
        let x = Math.max(c[b], p);
        v < x && (x = Math.max(v, p)), c[b] = Ge(x, p, R)
    }
    for (let b = t - 1; b >= 0; b -= 1) {
        const p = c[b + 1] - i,
            R = o + b * i,
            v = m[b];
        let x = Math.min(c[b], p);
        v > x && (x = Math.min(v, p)), c[b] = Ge(x, R, p)
    }
    for (let b = 0; b <= f; b += 1) c[b] = Number(c[b].toFixed(12));
    return c
}

function El(e, t, r, o, u, d, l, s, c, i) {
    const f = r ? ? t,
        m = o ? ? t;
    if (!(f.length > 1)) return {
        value: d,
        thumbIndex: 0,
        didSwap: !1
    };
    const g = c * i;
    if (e === "push") return {
        value: io(f, u, d, l, s, c, i),
        thumbIndex: u,
        didSwap: !1
    };
    const h = f.slice(),
        b = h[u - 1],
        p = h[u + 1],
        R = b != null ? b + g : l,
        v = p != null ? p - g : s,
        x = Number(Ge(d, R, v).toFixed(12));
    switch (h[u] = x, e) {
        case "swap":
            {
                const a = f[u],
                    S = 1e-7,
                    I = d > a,
                    E = d < a,
                    N = I && p != null && d >= p - S,
                    w = E && b != null && d <= b + S;
                if (!N && !w) return {
                    value: h,
                    thumbIndex: u,
                    didSwap: !1
                };
                const k = N ? u + 1 : u - 1,
                    T = h.map((z, V) => {
                        if (V === u) return x;
                        const C = m[V];
                        return C ? ? f[V]
                    });
                let P = d;N ? P = Math.max(d, h[k]) : P = Math.min(d, h[k]);
                const A = io(h, k, P, l, s, c, i, T),
                    $ = N ? k - 1 : k + 1,
                    B = A[$ - 1],
                    D = A[$ + 1];
                let X = B != null ? B + g : l;X = Math.max(X, l + $ * g);
                let O = D != null ? D - g : s;O = Math.min(O, s - (A.length - 1 - $) * g);
                const G = Ge(x, X, O);
                return A[$] = Number(G.toFixed(12)),
                {
                    value: A,
                    thumbIndex: k,
                    didSwap: !0
                }
            }
        default:
            return {
                value: h,
                thumbIndex: u,
                didSwap: !1
            }
    }
}
var Ml = 2;

function Al(e, t) {
    if (!e) return {
        start: 0,
        end: 0
    };

    function r(d) {
        const l = d != null ? parseFloat(d) : 0;
        return Number.isNaN(l) ? 0 : l
    }
    const o = t ? "Top" : "InlineStart",
        u = t ? "Bottom" : "InlineEnd";
    return {
        start: r(e[`border${o}Width`]) + r(e[`padding${o}`]),
        end: r(e[`border${u}Width`]) + r(e[`padding${u}`])
    }
}

function Vl(e, t) {
    if (t.current != null && e.changedTouches) {
        const r = e;
        for (let o = 0; o < r.changedTouches.length; o += 1) {
            const u = r.changedTouches[o];
            if (u.identifier === t.current) return {
                x: u.clientX,
                y: u.clientY
            }
        }
        return null
    }
    return {
        x: e.clientX,
        y: e.clientY
    }
}
var du = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, {
            disabled: s,
            dragging: c,
            inset: i,
            lastChangeReasonRef: f,
            max: m,
            min: g,
            minStepsBetweenValues: h,
            onValueCommitted: b,
            orientation: p,
            pressedThumbCenterOffsetRef: R,
            pressedThumbIndexRef: v,
            pressedValuesRef: x,
            registerFieldControlRef: a,
            renderBeforeHydration: S,
            setActive: I,
            setDragging: E,
            setValue: N,
            state: w,
            step: k,
            thumbCollisionBehavior: T,
            thumbRefs: P,
            values: A
        } = Qn(), $ = jt(), B = A.length > 1, D = p === "vertical", X = n.useRef(null), O = n.useRef(null), G = fe(L => {
            L && O.current == null && (O.current = Ut(L).getComputedStyle(L))
        }), z = n.useRef(null), V = n.useRef(0), C = n.useRef(0), _ = n.useRef(null), j = gn(A);

        function H(L) {
            return L ? .querySelector('input[type="range"]')
        }

        function J(L) {
            v.current = L, P.current[L] || (R.current = null)
        }

        function U() {
            v.current = -1, R.current = null
        }

        function W(L) {
            return Kt(L) ? P.current.some(ee => !Kt(ee) || !Je(ee, L) ? !1 : H(ee) ? .disabled === !0) : !1
        }

        function Y(L) {
            const ee = X.current,
                se = v.current;
            if (!ee || se < 0 || se >= A.length) return se >= A.length && (_.current = null), null;
            const {
                width: re,
                height: ue,
                bottom: Ae,
                left: M,
                right: ae
            } = ee.getBoundingClientRect(), Oe = Al(O.current, D), oe = C.current, ce = (D ? ue : re) - Oe.start - Oe.end - oe * 2, he = R.current ? ? 0, Ce = L.x - he, Ie = L.y - he, Be = D ? Ae - Ie - Oe.end : ($ === "rtl" ? ae - Ce : Ce - M) - Oe.start, Se = Ge((Be - oe) / ce, 0, 1);
            let Ne = (m - g) * Se + g;
            return Ne = Zs(Ne, k, g), Ne = Ge(Ne, g, m), B ? El(T, A, j.current, x.current, se, Ne, g, m, k, h) : {
                value: Ne,
                thumbIndex: se,
                didSwap: !1
            }
        }

        function ye(L) {
            x.current = B ? A.slice() : null, _.current = null, j.current = A;
            const ee = v.current;
            let se = ee;
            if (ee > -1 && ee < A.length) {
                if (A[ee] === m) {
                    let re = ee;
                    for (; re > 0 && A[re - 1] === m;) re -= 1;
                    se = re
                }
            } else {
                const re = D ? "y" : "x";
                let ue;
                se = -1;
                for (let Ae = 0; Ae < P.current.length; Ae += 1) {
                    const M = P.current[Ae];
                    if (Kt(M) && !H(M) ? .disabled) {
                        const ae = Qs(M, D),
                            Oe = Math.abs(L[re] - ae);
                        (ue === void 0 || Oe <= ue) && (se = Ae, ue = Oe)
                    }
                }
            }
            if (se > -1 && se !== ee && J(se), i) {
                const re = P.current[se];
                if (Kt(re)) {
                    const ue = re.getBoundingClientRect();
                    C.current = ue[D ? "height" : "width"] / 2
                }
            }
        }

        function be(L) {
            const ee = H(P.current ? .[L]);
            ee && ee.focus({
                preventScroll: !0,
                focusVisible: !1
            })
        }

        function K(L, ee, se) {
            const re = N(L.value, Te(ee, se, void 0, {
                activeThumbIndex: L.thumbIndex
            }));
            return re && (_.current = L.value, j.current = Array.isArray(L.value) ? L.value : [L.value], L.didSwap && (J(L.thumbIndex), be(L.thumbIndex))), re
        }
        const Z = fe(L => {
                const ee = Vl(L, z);
                if (ee == null) return;
                if (V.current += 1, L.type === "pointermove" && L.buttons === 0) {
                    ge(L);
                    return
                }
                const se = Y(ee);
                se != null && Xs(se.value, k, h) && (!c && V.current > Ml && E(!0), K(se, Ei, L))
            }),
            ge = fe(L => {
                I(-1), E(!1), R.current = null;
                const ee = _.current;
                if (Array.isArray(ee) && ee.length !== A.length && (_.current = null), _.current != null) {
                    const se = f.current;
                    b(_.current, ur(se, L))
                }
                "pointerType" in L && X.current ? .hasPointerCapture(L.pointerId) && X.current ? .releasePointerCapture(L.pointerId), v.current = -1, z.current = null, ne()
            }),
            pe = fe(L => {
                if (s) return;
                if (W(Ft(L))) {
                    U();
                    return
                }
                const ee = L.changedTouches[0];
                if (ee == null) return;
                z.current = ee.identifier;
                const se = {
                    x: ee.clientX,
                    y: ee.clientY
                };
                ye(se);
                const re = Y(se);
                if (re == null) return;
                be(re.thumbIndex), K(re, Wr, L), V.current = 0;
                const ue = xt(X.current);
                ue.addEventListener("touchmove", Z, {
                    passive: !0
                }), ue.addEventListener("touchend", ge, {
                    passive: !0
                })
            }),
            ne = fe(() => {
                const L = xt(X.current);
                L.removeEventListener("pointermove", Z), L.removeEventListener("pointerup", ge), L.removeEventListener("touchmove", Z), L.removeEventListener("touchend", ge), x.current = null, _.current = null
            }),
            me = uo();
        return n.useEffect(() => {
            const L = X.current;
            if (!L) return () => ne();
            const ee = _n(L, "touchstart", pe, {
                passive: !0
            });
            return () => {
                ee(), me.cancel(), ne()
            }
        }, [ne, pe, X, me]), n.useEffect(() => {
            s && ne()
        }, [s, ne]), le("div", t, {
            state: w,
            ref: [r, a, X, G],
            props: [{
                "data-base-ui-slider-control": S ? "" : void 0,
                onPointerDown(L) {
                    const ee = X.current,
                        se = Ft(L.nativeEvent);
                    if (!ee || s || L.defaultPrevented || !Kt(se) || L.button !== 0) return;
                    if (W(se)) {
                        U();
                        return
                    }
                    const re = {
                        x: L.clientX,
                        y: L.clientY
                    };
                    ye(re);
                    const ue = Y(re);
                    if (ue == null) return;
                    Je(P.current[ue.thumbIndex], dr(xt(ee))) ? L.preventDefault() : me.request(() => {
                        be(ue.thumbIndex)
                    }), E(!0), R.current == null && K(ue, Wr, L.nativeEvent), L.nativeEvent.pointerId && ee.setPointerCapture(L.nativeEvent.pointerId), V.current = 0;
                    const Ae = xt(ee);
                    Ae.addEventListener("pointermove", Z, {
                        passive: !0
                    }), Ae.addEventListener("pointerup", ge, {
                        once: !0
                    })
                }
            }, l],
            stateAttributesMapping: Rn
        })
    }),
    fu = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, {
            state: s
        } = Qn();
        return le("div", t, {
            state: s,
            ref: r,
            props: [{
                style: {
                    position: "relative"
                }
            }, l],
            stateAttributesMapping: Rn
        })
    }),
    ao, Ol = new Set([...fr, Fo, To]);

function kl(e, t, r, o) {
    if (!(t < 0)) return e.length === 2 ? `${Wt(e[t],o,r)} ${t===0?"start":"end"} range` : r ? Wt(e[t], o, r) : void 0
}

function Dl(e, t, r, o, u) {
    const d = e + t * r,
        l = Number(d.toFixed(Math.max(un(e), un(t), un(o))));
    return Ge(l, o, u)
}
var pu = n.forwardRef(function(t, r) {
    const {
        render: o,
        children: u,
        className: d,
        "aria-describedby": l,
        "aria-label": s,
        "aria-labelledby": c,
        "aria-valuetext": i,
        disabled: f = !1,
        getAriaLabel: m,
        getAriaValueText: g,
        id: h,
        index: b,
        inputRef: p,
        onBlur: R,
        onFocus: v,
        onKeyDown: x,
        tabIndex: a,
        style: S,
        ...I
    } = t, E = st(h), {
        active: N,
        lastUsedThumbIndex: w,
        controlRef: k,
        disabled: T,
        validation: P,
        format: A,
        handleInputChange: $,
        inset: B,
        labelId: D,
        largeStep: X,
        locale: O,
        max: G,
        min: z,
        minStepsBetweenValues: V,
        form: C,
        name: _,
        orientation: j,
        pressedThumbCenterOffsetRef: H,
        pressedThumbIndexRef: J,
        renderBeforeHydration: U,
        setActive: W,
        setIndicatorPosition: Y,
        state: ye,
        step: be,
        thumbRefs: K,
        values: Z
    } = Qn(), ge = jt(), pe = f || T, ne = Z.length > 1, me = j === "vertical", L = ge === "rtl", {
        setTouched: ee,
        setFocused: se,
        validationMode: re
    } = Rt(), ue = n.useRef(null), Ae = n.useRef(null), M = n.useRef(!1), ae = fe(we => {
        M.current || v ? .(we)
    }), Oe = fe(we => {
        M.current || R ? .(we)
    }), oe = st(), ce = nn(), he = ne ? oe : ce, Ce = n.useMemo(() => ({
        inputId: he
    }), [he]), {
        ref: Ie,
        index: Be
    } = rn({
        metadata: Ce
    }), Se = ne ? b ? ? Be : 0, Ne = Se === Z.length - 1, Fe = Z[Se], _e = fn(Fe, z, G), [Le, Re] = n.useState(), te = Er(), ke = w >= 0 && w < Z.length ? w : -1, Ee = fe(() => {
        const we = k.current,
            Me = ue.current;
        if (!we || !Me) return;
        const Xe = Me.getBoundingClientRect(),
            Ke = we.getBoundingClientRect(),
            ve = me ? "height" : "width",
            je = Ke[ve] - Xe[ve],
            it = (Xe[ve] / 2 + je * _e / 100) / Ke[ve] * 100,
            et = Number.isFinite(it) ? it : void 0;
        Re(et), Se === 0 ? Y(at => [et, at[1]]) : Ne && Y(at => [at[0], et])
    });
    Ve(() => {
        B && queueMicrotask(Ee)
    }, [Ee, B]), Ve(() => {
        B && Ee()
    }, [Ee, B, _e]), Ve(() => {
        if (!B) return;
        const we = k.current,
            Me = ue.current;
        if (!we || !Me) return;
        const Xe = Ut(we).ResizeObserver;
        if (typeof Xe != "function") return;
        const Ke = new Xe(Ee);
        return Ke.observe(we), Ke.observe(Me), () => {
            Ke.disconnect()
        }
    }, [k, Ee, B]);
    const De = me ? "bottom" : "insetInlineStart",
        Ye = me ? "left" : "top";
    let He;
    ne ? N === Se ? He = 2 : ke === Se && (He = 1) : N === Se && (He = 1);
    let de;
    !B && !Number.isFinite(_e) ? de = Ht : de = {
        position: "absolute",
        [De]: B ? "var(--position)" : `${_e}%`,
        [Ye]: "50%",
        translate: `${(me||!L?-1:1)*50}% ${(me?1:-1)*50}%`,
        zIndex: He,
        ...B && {
            "--position": `${Le??0}%`,
            visibility: U && te || Le === void 0 ? "hidden" : void 0
        }
    };
    let rt;
    me && (rt = L ? "vertical-rl" : "vertical-lr");
    const gt = typeof m == "function" ? m(Se) : s,
        Tt = Lt({
            "aria-label": gt,
            "aria-labelledby": c ? ? (gt == null ? D : void 0),
            "aria-describedby": l,
            "aria-orientation": j,
            "aria-valuenow": Fe,
            "aria-valuetext": typeof g == "function" ? g(Wt(Fe, O, A), Fe, Se) : i ? ? kl(Z, Se, A, O),
            disabled: pe,
            form: C,
            id: he,
            max: G,
            min: z,
            name: _,
            onChange(we) {
                $(we.currentTarget.valueAsNumber, Se, we)
            },
            onFocus(we) {
                const Me = M.current;
                M.current = !1, W(Se), se(!0), Me && we.stopPropagation()
            },
            onBlur(we) {
                if (M.current) {
                    we.stopPropagation();
                    return
                }
                W(-1), !K.current.some(Me => Je(Me, we.relatedTarget)) && (ee(!0), se(!1), re === "onBlur" && P.commit(Gs(Fe, Se, z, G, ne, Z)))
            },
            onKeyDown(we) {
                if (we.defaultPrevented || !Ol.has(we.key)) return;
                fr.has(we.key) && we.stopPropagation();
                let Me = null,
                    Xe = 0,
                    Ke = we.shiftKey ? X : be;
                const ve = Zs(Fe, be, z);
                switch (we.key) {
                    case ra:
                        Xe = 1;
                        break;
                    case oa:
                        Xe = L ? -1 : 1;
                        break;
                    case Xi:
                        Xe = -1;
                        break;
                    case Ki:
                        Xe = L ? 1 : -1;
                        break;
                    case Fo:
                        Ke = X, Xe = 1;
                        break;
                    case To:
                        Ke = X, Xe = -1;
                        break;
                    case "End":
                        Me = ne && Number.isFinite(Z[Se + 1]) ? Z[Se + 1] - be * V : G;
                        break;
                    case Zi:
                        Me = ne && Number.isFinite(Z[Se - 1]) ? Z[Se - 1] + be * V : z
                }
                if (Xe !== 0 && (Me = Dl(ve, Ke, Xe, z, G)), Me !== null) {
                    const je = we.currentTarget;
                    _i(je) || (M.current = !0, je.blur(), je.focus({
                        preventScroll: !0,
                        focusVisible: !0
                    })), $(Me, Se, we), we.preventDefault()
                }
            },
            step: be,
            style: { ...Ht,
                width: "100%",
                height: "100%",
                writingMode: rt
            },
            tabIndex: a,
            type: "range",
            value: Fe ? ? ""
        }, we => P.getValidationProps(pe, we), {
            onFocus: ae,
            onBlur: Oe,
            onKeyDown: x
        }),
        Ze = Bt(Ae, P.inputRef, p);
    return le("div", t, {
        state: ye,
        ref: [r, Ie, ue],
        props: [{
            "data-index": Se,
            children: (0, q.jsxs)(n.Fragment, {
                children: [u, (0, q.jsx)("input", {
                    ref: Ze,
                    ...Tt,
                    suppressHydrationWarning: !0
                }), B && Ne && U && (ao || (ao = (0, q.jsx)(vs, {
                    script: ""
                })))]
            }),
            id: E,
            onPointerDown(we) {
                if (pe) return;
                J.current = Se;
                const Me = Qs(we.currentTarget, me);
                H.current = (me ? we.clientY : we.clientX) - Me
            },
            style: de,
            suppressHydrationWarning: U || void 0
        }, I],
        stateAttributesMapping: Rn
    })
});

function Nl(e, t, r, o, u, d) {
    const l = {
        visibility: d || r && (o === void 0 || t && u === void 0) ? "hidden" : void 0,
        position: e ? "absolute" : "relative",
        [e ? "width" : "height"]: "inherit"
    };
    let s = `${o??0}%`,
        c = `${(u??0)-(o??0)}%`;
    return r && (l["--start-position"] = s, s = "var(--start-position)", t && (l["--relative-size"] = c, c = "var(--relative-size)")), l[e ? "bottom" : "insetInlineStart"] = t ? s : 0, l[e ? "height" : "width"] = t ? c : s, l
}
var mu = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, {
            indicatorPosition: s,
            inset: c,
            max: i,
            min: f,
            orientation: m,
            renderBeforeHydration: g,
            state: h,
            values: b
        } = Qn(), p = Er(), R = Nl(m === "vertical", b.length > 1, c, c ? s[0] : fn(b[0], f, i), c ? s[1] : fn(b[b.length - 1], f, i), c && g && p);
        return le("div", t, {
            state: h,
            ref: r,
            props: [{
                "data-base-ui-slider-indicator": g ? "" : void 0,
                style: R,
                suppressHydrationWarning: g || void 0
            }, l],
            stateAttributesMapping: Rn
        })
    }),
    Js = n.createContext(void 0);

function Ll() {
    const e = n.useContext(Js);
    if (e === void 0) throw new Error(We(63));
    return e
}
var ei = { ...en,
        checked(e) {
            return e ? {
                "data-checked": ""
            } : {
                "data-unchecked": ""
            }
        }
    },
    hu = n.forwardRef(function(t, r) {
        const {
            checked: o,
            className: u,
            defaultChecked: d,
            "aria-labelledby": l,
            form: s,
            id: c,
            inputRef: i,
            name: f,
            nativeButton: m = !1,
            onCheckedChange: g,
            readOnly: h = !1,
            required: b = !1,
            disabled: p = !1,
            render: R,
            uncheckedValue: v,
            value: x,
            style: a,
            ...S
        } = t, {
            clearErrors: I
        } = mn(), {
            state: E,
            setTouched: N,
            setDirty: w,
            validityData: k,
            setFilled: T,
            setFocused: P,
            validationMode: A,
            disabled: $,
            name: B,
            validation: D
        } = Rt(), {
            labelId: X
        } = tn(), O = $ || p, G = B ? ? f, z = n.useRef(null), V = Bt(z, i, D.inputRef), C = n.useRef(null), _ = st(), j = nn({
            id: c,
            implicit: !1,
            controlRef: C
        }), H = m ? void 0 : j, [J, U] = ft({
            controlled: o,
            default: !!d,
            name: "Switch",
            state: "checked"
        });
        pn(C, _, J, void 0, !O, f), Ve(() => {
            z.current && T(z.current.checked)
        }, [T]), Dt(J, () => {
            I(G), w(J !== k.initialValue), T(J), D.change(J)
        });
        const {
            getButtonProps: W,
            buttonRef: Y
        } = pt({
            disabled: O,
            native: m
        }), ye = Ho(l, X, z, !m, H), be = {
            id: m ? j : _,
            role: "switch",
            "aria-checked": J,
            "aria-readonly": h || void 0,
            "aria-required": b || void 0,
            "aria-labelledby": ye,
            onFocus() {
                O || P(!0)
            },
            onBlur() {
                const pe = z.current;
                !pe || O || (N(!0), P(!1), A === "onBlur" && D.commit(pe.checked))
            },
            onClick(pe) {
                if (h || O) return;
                pe.preventDefault();
                const ne = z.current;
                ne && Ro(ne, pe)
            }
        }, K = { ...D.getValidationProps(O),
            checked: J,
            disabled: O,
            form: s,
            id: H,
            name: G,
            required: b,
            style: G ? hn : Ht,
            tabIndex: -1,
            type: "checkbox",
            "aria-hidden": !0,
            ref: V,
            onChange(pe) {
                if (pe.nativeEvent.defaultPrevented) return;
                if (h) {
                    pe.preventDefault();
                    return
                }
                const ne = pe.currentTarget.checked,
                    me = Te(Qe, pe.nativeEvent);
                g ? .(ne, me), !me.isCanceled && U(ne)
            },
            onClick(pe) {
                pe.stopPropagation()
            },
            onFocus() {
                C.current ? .focus()
            },
            ...x !== void 0 ? {
                value: x
            } : Qt
        }, Z = n.useMemo(() => ({ ...E,
            checked: J,
            disabled: O,
            readOnly: h,
            required: b
        }), [E, J, O, h, b]), ge = le("span", t, {
            state: Z,
            ref: [r, C, Y],
            props: [be, S, W, pe => D.getValidationProps(O, pe)],
            stateAttributesMapping: ei
        });
        return (0, q.jsxs)(Js.Provider, {
            value: Z,
            children: [ge, !J && G && v !== void 0 && (0, q.jsx)("input", {
                type: "hidden",
                form: s,
                name: G,
                value: v,
                disabled: O
            }), (0, q.jsx)("input", { ...K,
                suppressHydrationWarning: !0
            })]
        })
    }),
    gu = n.forwardRef(function(t, r) {
        const {
            render: o,
            className: u,
            style: d,
            ...l
        } = t, s = Ll();
        return le("span", t, {
            state: s,
            ref: r,
            stateAttributesMapping: ei,
            props: l
        })
    });
export {
    Sc as $, hl as A, Nc as B, Xc as C, Zl as Ct, $c as D, Gl as Dt, Yc as E, Xl as Et, ul as F, Ac as G, kc as H, Hc as I, Tc as J, Mc as K, Fc as L, Uc as M, jc as N, zc as O, ql as Ot, Bc as P, Ic as Q, Ps as R, Kc as S, Jl as St, qc as T, Kl as Tt, Oc as U, Dc as V, Vc as W, Pc as X, wc as Y, Cc as Z, eu as _, oc as _t, fu as a, gc as at, Cl as b, tc as bt, cu as c, pc as ct, iu as d, uc as dt, Rc as et, su as f, cc as ft, tu as g, sc as gt, nu as h, ic as ht, pu as i, bc as it, _c as j, Wc as k, Yl as kt, lu as l, fc as lt, ru as m, ac as mt, hu as n, xc as nt, du as o, hc as ot, ou as p, lc as pt, Ec as q, mu as r, vc as rt, uu as s, mc as st, gu as t, yc as tt, au as u, dc as ut, Jc as v, rc as vt, Gc as w, Ql as wt, Qc as x, ec as xt, Zc as y, nc as yt, Lc as z
};