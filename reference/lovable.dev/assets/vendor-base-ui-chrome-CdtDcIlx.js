import {
    o as pn
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as Un,
    n as zn,
    r as $n
} from "./vendor-react-Fx2PtaaM.js";
import {
    At as gt,
    C as gn,
    D as Lt,
    E as qn,
    Et as Mt,
    F as ne,
    H as Jn,
    I as qe,
    M as rt,
    Ot as Zn,
    P as hn,
    S as mn,
    St as Qn,
    T as Kt,
    Tt as _t,
    _ as er,
    _t as tr,
    b as Sn,
    bt as ot,
    d as nr,
    f as rr,
    g as yn,
    h as or,
    ht as wt,
    k as sr,
    l as ir,
    m as ar,
    mt as He,
    pt as vt,
    q as cr,
    rt as lr,
    st as bt,
    w as It,
    yt as Me
} from "./vendor-base-ui-field-BdT_EZJM.js";
import {
    $t as ur,
    B as fr,
    Cn as dr,
    Dn as pr,
    Dt as gr,
    F as hr,
    Fn as Ze,
    Gn as mr,
    Gt as Vt,
    I as Sr,
    It as yr,
    Kn as vr,
    Ln as wr,
    Lt as Pr,
    M as br,
    Mn as Rr,
    N as xr,
    Nn as Cr,
    Ot as Tr,
    R as Er,
    Rt as Ir,
    Sn as Dr,
    Tn as Mr,
    U as st,
    Un as Or,
    Ut as Rt,
    V as Ar,
    Vt as Nr,
    Xt as _r,
    Y as Fr,
    Yt as kr,
    an as Hr,
    bn as Lr,
    cn as vn,
    dn as Vr,
    en as Yr,
    fn as Br,
    gn as Xr,
    h as Kr,
    hn as Wr,
    ht as jr,
    in as Gr,
    kn as Ur,
    ln as zr,
    m as $r,
    mn as qr,
    on as Jr,
    pn as Zr,
    qt as Qr,
    rn as eo,
    sn as wn,
    tn as to,
    tt as no,
    un as ro,
    wn as oo,
    yn as so,
    yt as io,
    z as Pn
} from "./vendor-base-ui-eager-BVTTpYm_.js";
import {
    D as dt,
    E as nt,
    O as ut,
    S as Yt,
    T as Bt,
    k as bn
} from "./vendor-floating-ui-98f9kiPk.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b8db1f7e-b4f8-4ae9-8e19-d331fec89eed", e._sentryDebugIdIdentifier = "sentry-dbid-b8db1f7e-b4f8-4ae9-8e19-d331fec89eed")
    })()
} catch {}

function Tt(e, t, n, r) {
    return {
        left: e,
        top: t,
        right: n,
        bottom: r,
        x: e,
        y: t,
        width: n - e,
        height: r - t
    }
}

function ao(e) {
    return {
        left: e.left,
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        width: e.width,
        height: e.height
    }
}

function Rn(e) {
    const t = [];
    let n, r = Number.POSITIVE_INFINITY,
        o = Number.POSITIVE_INFINITY,
        y = Number.NEGATIVE_INFINITY,
        d = Number.NEGATIVE_INFINITY;
    for (const c of Array.from(e).sort((a, p) => a.top - p.top)) {
        if (r = Math.min(r, c.left), o = Math.min(o, c.top), y = Math.max(y, c.right), d = Math.max(d, c.bottom), !n || c.top - n.top > n.height / 2) t.push(ao(c));
        else {
            const a = t[t.length - 1];
            a.left = Math.min(a.left, c.left), a.right = Math.max(a.right, c.right), a.bottom = Math.max(a.bottom, c.bottom), a.width = a.right - a.left, a.height = a.bottom - a.top
        }
        n = c
    }
    return {
        lines: t,
        fallback: Tt(r, o, y, d)
    }
}

function xn(e, t, n) {
    return e.findIndex(r => t > r.left - 2 && t < r.right + 2 && n > r.top - 2 && n < r.bottom + 2)
}

function Wt(e) {
    return Tt(e.left, e.top, e.right, e.bottom)
}

function co(e, t, n) {
    const {
        lines: r
    } = Rn(e.getClientRects());
    if (r.length < 2) return;
    const o = xn(r, t, n);
    return {
        x: t,
        y: n,
        lineIndex: o === -1 ? void 0 : o,
        element: e
    }
}

function lo(e, t, n) {
    const {
        lines: r,
        fallback: o
    } = Rn(e.getClientRects());
    if (r.length < 2) return null;
    const y = n ? .x,
        d = n ? .y,
        c = t[0];
    if (n ? .lineIndex != null && r[n.lineIndex]) return Wt(r[n.lineIndex]);
    if (y != null && d != null) {
        const S = xn(r, y, d);
        if (S !== -1) return Wt(r[S])
    }
    if (r.length === 2 && r[0].left > r[1].right && y != null && d != null) return o;
    if (c === "t" || c === "b") {
        const S = r[0],
            I = r[r.length - 1],
            C = c === "t" ? S : I;
        return Tt(C.left, S.top, C.right, I.bottom)
    }
    const a = c === "l";
    let p = r[0].left,
        m = r[0].right,
        u = a ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY,
        x = r[0],
        P = r[0];
    for (const S of r) {
        p = Math.min(p, S.left), m = Math.max(m, S.right);
        const I = a ? S.left : S.right;
        a && I < u || !a && I > u ? (u = I, x = S, P = S) : I === u && (P = S)
    }
    return Tt(p, x.top, m, P.bottom)
}

function uo(e) {
    return "contextElement" in e && e.contextElement ? e.contextElement : dt(e) ? e : void 0
}

function fo(e, t) {
    function n(o) {
        Cn(e, o.currentTarget, o.clientX, o.clientY)
    }

    function r(o) {
        t || n(o)
    }
    return {
        onFocus() {
            e.current = void 0
        },
        onMouseEnter: r,
        onMouseMove: r
    }
}

function Cn(e, t, n, r) {
    const o = co(t, n, r);
    return e.current = o, o
}

function po(e) {
    return {
        name: "inline",
        async fn(t) {
            const n = t.elements.reference;
            if (typeof n ? .getClientRects != "function") return {};
            const r = uo(n),
                o = e.current,
                y = o ? .element === n || o ? .element === r ? o : void 0,
                d = lo(n, t.placement, y);
            if (!d || typeof t.platform.getElementRects != "function") return {};
            const c = await t.platform.getElementRects({
                reference: {
                    contextElement: r,
                    getBoundingClientRect() {
                        return d
                    }
                },
                floating: t.elements.floating,
                strategy: t.strategy
            });
            return t.rects.reference.x === c.reference.x && t.rects.reference.y === c.reference.y && t.rects.reference.width === c.reference.width && t.rects.reference.height === c.reference.height ? {} : {
                reset: {
                    rects: c
                }
            }
        }
    }
}
var Se = $n(),
    go = pn(zn(), 1),
    s = pn(Un(), 1),
    ho = s.forwardRef(function(t, n) {
        const {
            render: r,
            className: o,
            style: y,
            children: d,
            ...c
        } = t, a = Pn(), p = st(), m = p.useState("open"), u = p.useState("nested"), x = p.useState("transitionStatus"), P = p.useState("nestedOpenDialogCount"), S = p.useState("mounted"), I = p.useStateSetter("viewportElement");
        return ot("div", t, {
            enabled: a || S,
            state: {
                open: m,
                nested: u,
                transitionStatus: x,
                nestedDialogOpen: P > 0
            },
            ref: [n, I],
            stateAttributesMapping: Er,
            props: [{
                role: "presentation",
                hidden: !S,
                style: {
                    pointerEvents: m ? void 0 : "none"
                },
                children: d
            }, c]
        })
    }),
    Tn = s.createContext(void 0);

function Pt(e) {
    const t = s.useContext(Tn);
    if (t === void 0 && !e) throw new Error(gt(50));
    return t
}
var En = { ...Jr,
        instantType: e => e.instantType,
        adaptiveOrigin: e => e.adaptiveOrigin,
        closeDelay: e => e.closeDelay
    },
    mo = class extends Xr {
        constructor(e, t, n) {
            const r = new wn;
            super(In(e, r, t, n), Dn(r), En)
        }
        setOpen = (e, t) => {
            const {
                inlineRectCoordsRef: n
            } = this.context;
            ro(this, e, t, {
                onBeforeDispatch() {
                    const r = t.event;
                    e && t.reason === "trigger-hover" && t.trigger && "clientX" in r && "clientY" in r && n.current ? .element !== t.trigger && Cn(n, t.trigger, r.clientX, r.clientY)
                }
            })
        }
    };

function So() {
    const e = new wn;
    return new kr(Object.freeze(In(void 0, e)), Object.freeze(Dn(e)), En)
}

function In(e, t, n, r = !1) {
    const o = { ...Gr(),
        instantType: void 0,
        adaptiveOrigin: void 0,
        closeDelay: 300,
        ...e
    };
    return o.floatingRootContext = Hr(t, n, r), o
}

function Dn(e) {
    return {
        popupRef: s.createRef(),
        onOpenChange: void 0,
        onOpenChangeComplete: void 0,
        triggerElements: e,
        inlineRectCoordsRef: {
            current: void 0
        }
    }
}

function jt(e) {
    const {
        open: t,
        defaultOpen: n = !1,
        onOpenChange: r,
        onOpenChangeComplete: o,
        actionsRef: y,
        handle: d,
        triggerId: c,
        defaultTriggerId: a = null,
        children: p
    } = e, m = qr((K, D) => new mo({
        open: n,
        openProp: t,
        activeTriggerId: a,
        triggerIdProp: c
    }, K, D));
    m.useControlledProp("openProp", t), m.useControlledProp("triggerIdProp", c), m.useContextCallback("onOpenChange", r), m.useContextCallback("onOpenChangeComplete", o);
    const u = m.useState("open"),
        x = m.useState("activeTriggerId"),
        P = m.useState("mounted"),
        S = m.useState("payload");
    Vr(m, {
        closeOnActiveTriggerUnmount: !0
    });
    const {
        forceUnmount: I
    } = Br(u, m, () => {
        m.context.inlineRectCoordsRef.current = void 0
    });
    Me(() => {
        u && x == null && m.set("payload", void 0)
    }, [m, x, u]), s.useImperativeHandle(y, () => ({
        unmount: I,
        close: () => m.setOpen(!1, qe(cr))
    }), [I, m]);
    const C = u || P;
    return (0, Se.jsxs)(Tn.Provider, {
        value: m,
        children: [d && (0, Se.jsx)(zr, {
            handle: d,
            store: m
        }), C && (0, Se.jsx)(yo, {
            store: m
        }), typeof p == "function" ? p({
            payload: S
        }) : p]
    })
}

function yo({
    store: e
}) {
    const t = e.useState("floatingRootContext"),
        n = Lr(t);
    return Zr(e, {
        activeTriggerProps: n.reference,
        inactiveTriggerProps: n.trigger,
        popupProps: n.floating
    }), null
}
var Es = mr(function(t) {
        return Pt(!0) ? (0, Se.jsx)(jt, { ...t
        }) : (0, Se.jsx)(oo, {
            children: (0, Se.jsx)(jt, { ...t
            })
        })
    }),
    Mn = s.createContext(void 0);

function vo() {
    const e = s.useContext(Mn);
    if (e === void 0) throw new Error(gt(48));
    return e
}
var Is = s.forwardRef(function(t, n) {
        const {
            keepMounted: r = !1,
            ...o
        } = t;
        return Pt().useState("mounted") || r ? (0, Se.jsx)(Mn.Provider, {
            value: r,
            children: (0, Se.jsx)(Nr, {
                ref: n,
                ...o
            })
        }) : null
    }),
    Ds = vr(function(t, n) {
        const {
            render: r,
            className: o,
            delay: y,
            closeDelay: d,
            id: c,
            payload: a,
            handle: p,
            style: m,
            ...u
        } = t, x = Pt(!0), P = eo(p) ? ? x;
        if (!P) throw new Error(gt(89));
        const S = It(c),
            I = P.useState("isTriggerActive", S),
            C = P.useState("isOpenedByTrigger", S),
            K = P.useState("floatingRootContext"),
            D = P.context.inlineRectCoordsRef,
            O = s.useRef(null),
            me = y ? ? 600,
            W = d ? ? 300,
            {
                registerTrigger: U,
                isMountedByThisTrigger: N
            } = Wr(S, O, P, {
                payload: a,
                closeDelay: W
            }),
            g = ur(K, {
                mouseOnly: !0,
                move: !1,
                handleClose: _r(),
                delay: () => ({
                    open: me,
                    close: W
                }),
                triggerElementRef: O,
                isActiveTrigger: I,
                isClosing: () => P.select("transitionStatus") === "ending"
            }),
            T = to(K, {
                delay: me
            }),
            H = {
                open: C
            },
            M = P.useState("triggerProps", N),
            X = fo(D, C);
        return ot("a", t, {
            state: H,
            ref: [n, U, O],
            props: [g, T.reference, M, X, {
                id: S
            }, u],
            stateAttributesMapping: Qr
        })
    }),
    On = s.createContext(void 0);

function wo() {
    const e = s.useContext(On);
    if (e === void 0) throw new Error(gt(49));
    return e
}
var Ms = s.forwardRef(function(t, n) {
        const {
            render: r,
            className: o,
            anchor: y,
            positionMethod: d = "absolute",
            side: c = "bottom",
            align: a = "center",
            sideOffset: p = 0,
            alignOffset: m = 0,
            collisionBoundary: u = "clipping-ancestors",
            collisionPadding: x = 5,
            arrowPadding: P = 5,
            sticky: S = !1,
            disableAnchorTracking: I = !1,
            collisionAvoidance: C = Ur,
            style: K,
            ...D
        } = t, O = Pt(), me = vo(), W = Mr(), U = O.useState("open"), N = O.useState("mounted"), g = O.useState("floatingRootContext"), T = O.useState("instantType"), H = O.useState("transitionStatus"), M = O.useState("adaptiveOrigin"), X = O.context.inlineRectCoordsRef, z = Ir({
            anchor: y,
            floatingRootContext: g,
            positionMethod: d,
            mounted: N,
            side: c,
            sideOffset: p,
            align: a,
            alignOffset: m,
            arrowPadding: P,
            collisionBoundary: u,
            collisionPadding: x,
            sticky: S,
            disableAnchorTracking: I,
            keepMounted: me,
            nodeId: W,
            collisionAvoidance: C,
            adaptiveOrigin: M,
            inline: po(X)
        }), ae = z.update;
        Me(() => {
            U && N && ae()
        }, [U, N, ae]);
        const V = {
                open: U,
                side: z.side,
                align: z.align,
                anchorHidden: z.anchorHidden,
                instant: T
            },
            L = yr(t, V, {
                styles: z.positionerStyles,
                transitionStatus: H,
                props: D,
                refs: [n, O.useStateSetter("positionerElement")],
                hidden: !N,
                inert: !U
            });
        return (0, Se.jsx)(On.Provider, {
            value: z,
            children: (0, Se.jsx)(dr, {
                id: W,
                children: L
            })
        })
    }),
    Os = s.forwardRef(function(t, n) {
        const {
            className: r,
            render: o,
            style: y,
            ...d
        } = t, c = Pt(), {
            side: a,
            align: p
        } = wo(), m = c.useState("open"), u = c.useState("instantType"), x = c.useState("transitionStatus"), P = c.useState("popupProps"), S = c.useState("floatingRootContext"), I = c.useState("closeDelay");
        return Lt({
            open: m,
            ref: c.context.popupRef,
            onComplete() {
                m && c.context.onOpenChangeComplete ? .(!0)
            }
        }), Yr(S, {
            closeDelay: I
        }), ot("div", t, {
            state: {
                open: m,
                side: a,
                align: p,
                instant: u,
                transitionStatus: x
            },
            ref: [n, c.context.popupRef, c.useStateSetter("popupElement")],
            props: [vn, P, Pr(x), d],
            stateAttributesMapping: Vt
        })
    }),
    Po = class extends so {
        constructor() {
            super(So(), "PreviewCard")
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

function As() {
    return new Po
}

function ke(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
    return Math.max(t, Math.min(e, n))
}

function bo(e) {
    if (e == null) return "";
    if (typeof e == "string") return e;
    try {
        return JSON.stringify(e)
    } catch {
        return String(e)
    }
}

function Ro(e, t, n, r = !0, o) {
    const [y, d] = s.useState(), c = It(o ? `${o}-label` : void 0), a = e ? ? t ? ? y;
    return Me(() => {
        const p = e || t || !r ? void 0 : xo(n.current, c);
        y !== p && d(p)
    }), a
}

function xo(e, t) {
    const n = Co(e);
    if (n) return !n.id && t && (n.id = t), n.id || void 0
}

function Co(e) {
    if (!e) return;
    const t = e.parentElement;
    if (t && t.tagName === "LABEL") return t;
    const n = e.id;
    if (n) {
        const o = e.nextElementSibling;
        if (o && o.htmlFor === n) return o
    }
    const r = e.labels;
    return r && r[0]
}

function To(e, t = !1) {
    const {
        overflowY: n
    } = Yt(e);
    return n !== "auto" && n !== "scroll" ? !1 : t ? e.clientHeight > 0 : e.scrollHeight > e.clientHeight
}

function Eo(e, t = !1) {
    const {
        overflowX: n
    } = Yt(e);
    return n !== "auto" && n !== "scroll" ? !1 : t ? e.clientWidth > 0 : e.scrollWidth > e.clientWidth
}

function Ft(e, t, n = !1) {
    return t === "vertical" ? To(e, n) : Eo(e, n)
}

function Io(e, t, n) {
    let r = e;
    for (; ut(r) && r !== t && !bn(r);) {
        for (const o of n)
            if (Ft(r, o)) return !0;
        r = Bt(r)
    }
    return !1
}

function et(e, t, n = "vertical", r = !1) {
    let o = ut(e) ? e : null;
    for (; ut(o) && o !== t && !bn(o);) {
        if (Ft(o, n, r)) return o;
        o = Bt(o)
    }
    return Ft(t, n, r) ? t : null
}
var kt = {
        checked(e) {
            return e ? {
                "data-checked": ""
            } : {
                "data-unchecked": ""
            }
        },
        ...qn,
        ...mn
    },
    An = s.createContext(void 0);

function Do() {
    return s.useContext(An)
}
var Nn = s.createContext(void 0);

function Mo() {
    const e = s.useContext(Nn);
    if (e === void 0) throw new Error(gt(52));
    return e
}
var Ns = s.forwardRef(function(t, n) {
        const {
            render: r,
            className: o,
            disabled: y = !1,
            readOnly: d = !1,
            required: c = !1,
            "aria-labelledby": a,
            value: p,
            inputRef: m,
            nativeButton: u = !1,
            id: x,
            style: P,
            ...S
        } = t, I = Do(), {
            disabled: C,
            readOnly: K,
            required: D,
            form: O,
            checkedValue: me,
            touched: W = !1,
            validation: U,
            name: N,
            setCheckedValue: g = Mt,
            setTouched: T = Mt,
            registerInputRef: H = Mt
        } = I ? ? {}, {
            setTouched: M,
            setFilled: X,
            state: z,
            disabled: ae
        } = Sn(), V = rr(), {
            labelId: L,
            getDescriptionProps: le
        } = yn(), A = ae || V.disabled || C || y, $ = K || d, Z = D || c, q = O, re = I ? me === p : p === "", j = s.useRef(null), G = s.useRef(null), pe = U ? .registerInput, oe = s.useCallback(J => pe ? .(J, {
            controlRef: j,
            value: void 0
        }), [pe]), se = Zn(m, G, H, oe);
        Me(() => {
            G.current ? .checked && X(!0)
        }, [X]), Me(() => {
            if (G.current) {
                if (A && re) {
                    H(null);
                    return
                }
                H(G.current)
            }
        }, [re, A, H]);
        const he = It(),
            be = or({
                id: x,
                implicit: !1,
                controlRef: j
            }),
            ye = u ? void 0 : be,
            ve = {
                role: "radio",
                "aria-checked": re,
                "aria-labelledby": Ro(a, L, G, !u, ye),
                [Kr]: re ? "" : void 0,
                id: u ? be : he,
                onKeyDown(J) {
                    J.key === "Enter" && J.preventDefault()
                },
                onClick(J) {
                    if (J.defaultPrevented || A || $) return;
                    J.preventDefault();
                    const Ce = G.current;
                    Ce && Tr(Ce, J)
                },
                onFocus(J) {
                    J.defaultPrevented || A || $ || !W || (G.current ? .click(), T(!1))
                }
            },
            {
                getButtonProps: xe,
                buttonRef: b
            } = gr({
                disabled: A,
                native: u,
                composite: !1
            }),
            h = {
                type: "radio",
                ref: se,
                form: q,
                id: ye,
                name: N,
                tabIndex: -1,
                style: N ? Cr : Rr,
                "aria-hidden": !0,
                ...p !== void 0 ? {
                    value: bo(p)
                } : _t,
                disabled: A,
                checked: re,
                required: Z,
                readOnly: $,
                onChange(J) {
                    if (J.nativeEvent.defaultPrevented || A || $ || p === void 0) return;
                    const Ce = qe(lr, J.nativeEvent);
                    g(p, Ce), !Ce.isCanceled && M(!0)
                },
                onClick(J) {
                    J.stopPropagation()
                },
                onFocus() {
                    j.current ? .focus()
                }
            },
            v = s.useMemo(() => ({ ...z,
                required: Z,
                disabled: A,
                readOnly: $,
                checked: re
            }), [z, A, $, re, Z]),
            Re = v,
            ue = I !== void 0,
            ge = [n, j, b],
            Ie = [ve, S, xe, le, U ? J => U.getValidationProps(A, J) : _t],
            fe = ot("span", t, {
                enabled: !ue,
                state: v,
                ref: ge,
                props: Ie,
                stateAttributesMapping: kt
            });
        return (0, Se.jsxs)(Nn.Provider, {
            value: Re,
            children: [ue ? (0, Se.jsx)(Fr, {
                tag: "span",
                render: r,
                className: o,
                style: P,
                state: v,
                refs: ge,
                props: Ie,
                stateAttributesMapping: kt
            }) : fe, (0, Se.jsx)("input", { ...h,
                suppressHydrationWarning: !0
            })]
        })
    }),
    _s = s.forwardRef(function(t, n) {
        const {
            render: r,
            className: o,
            style: y,
            keepMounted: d = !1,
            ...c
        } = t, a = Mo(), p = a.checked, {
            mounted: m,
            transitionStatus: u,
            setMounted: x
        } = sr(p), P = { ...a,
            transitionStatus: u
        }, S = s.useRef(null), I = d || m, C = ot("span", t, {
            ref: [n, S],
            state: P,
            props: c,
            stateAttributesMapping: kt
        });
        return Lt({
            open: p,
            ref: S,
            onComplete() {
                p || x(!1)
            }
        }), I ? C : null
    }),
    Oo = [io],
    Fs = s.forwardRef(function(t, n) {
        const {
            render: r,
            className: o,
            disabled: y,
            readOnly: d,
            required: c,
            onValueChange: a,
            value: p,
            defaultValue: m,
            form: u,
            name: x,
            inputRef: P,
            id: S,
            style: I,
            ...C
        } = t, {
            setTouched: K,
            setFocused: D,
            validationMode: O,
            name: me,
            disabled: W,
            state: U,
            validation: N,
            setDirty: g,
            setFilled: T,
            validityData: H
        } = Sn(), {
            labelId: M
        } = yn(), {
            clearErrors: X,
            elementRef: z
        } = ar(), ae = nr(!0), V = W || y, L = me ? ? x, le = It(S), [A, $] = gn({
            controlled: p,
            default: m,
            name: "RadioGroup",
            state: "value"
        }), [Z, q] = s.useState(!1), re = ne((h, v) => {
            a ? .(h, v), !v.isCanceled && $(h)
        }), j = N.getInputControl, G = s.useMemo(() => ({
            get current() {
                return j()
            }
        }), [j]), pe = s.useRef(null), oe = s.useRef(null);

        function se(h) {
            let v;
            return P && (typeof P == "function" ? v = P(h) : P.current = h), pe.current = h, v
        }
        const he = ne(h => {
                if (!h || h.disabled) return;
                oe.current || (oe.current = h);
                const v = pe.current,
                    Re = h.checked || v == null || v.disabled ? se(h) : void 0;
                return () => {
                    oe.current === h && (oe.current = null), pe.current === h ? Re ? (Re(), pe.current = null) : se(null) : Re ? .()
                }
            }),
            be = ne(() => {
                const h = z.current;
                if (!h) return A ? ? null;
                for (const v of N.registeredInputs.keys())
                    if (v.checked && ir(v, h)) return A ? ? null;
                return null
            });
        er(G, le, A ? ? null, be, !V, x), no(A, () => {
            X(L), g(A !== H.initialValue), T(A != null), N.change(A);
            const h = oe.current;
            A == null && h && !h.disabled && se(h)
        });
        const ye = M ? ? ae ? .legendId,
            ve = { ...U,
                disabled: V ? ? !1,
                required: c ? ? !1,
                readOnly: d ? ? !1
            },
            xe = s.useMemo(() => ({
                checkedValue: A,
                disabled: V,
                form: u,
                validation: N,
                name: L,
                readOnly: d,
                registerInputRef: he,
                required: c,
                setCheckedValue: re,
                setTouched: q,
                touched: Z
            }), [A, V, u, N, L, d, he, c, re, q, Z]),
            b = {
                id: S,
                role: "radiogroup",
                "aria-required": c || void 0,
                "aria-disabled": V || void 0,
                "aria-readonly": d || void 0,
                "aria-labelledby": ye,
                onFocus() {
                    D(!0)
                },
                onBlur(h) {
                    He(h.currentTarget, h.relatedTarget) || (K(!0), D(!1), O === "onBlur" && N.commit(A))
                },
                onKeyDownCapture(h) {
                    h.key.startsWith("Arrow") && (q(!0), D(!0))
                }
            };
        return (0, Se.jsx)(An.Provider, {
            value: xe,
            children: (0, Se.jsx)($r, {
                render: r,
                className: o,
                style: I,
                state: ve,
                props: [b, C, h => N.getValidationProps(V ? ? !1, h)],
                refs: [n],
                stateAttributesMapping: mn,
                enableHomeAndEndKeys: !1,
                modifierKeys: Oo
            })
        })
    }),
    De = (function(e) {
        return e.nestedDrawers = "--nested-drawers", e.height = "--drawer-height", e.frontmostHeight = "--drawer-frontmost-height", e.swipeMovementX = "--drawer-swipe-movement-x", e.swipeMovementY = "--drawer-swipe-movement-y", e.snapPointOffset = "--drawer-snap-point-offset", e.swipeStrength = "--drawer-swipe-strength", e
    })({}),
    tt = (function(e) {
        return e.swipeProgress = "--drawer-swipe-progress", e
    })({}),
    ks = s.forwardRef(function(t, n) {
        const {
            render: r,
            className: o,
            style: y,
            forceRender: d = !1,
            ...c
        } = t, a = st(), p = a.useState("open"), m = a.useState("nested"), u = a.useState("mounted"), x = {
            open: p,
            transitionStatus: a.useState("transitionStatus")
        };
        return ot("div", t, {
            state: x,
            ref: [a.context.backdropRef, n],
            stateAttributesMapping: Vt,
            props: [{
                role: "presentation",
                hidden: !u,
                style: {
                    pointerEvents: p ? void 0 : "none",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    [tt.swipeProgress]: "0",
                    [De.swipeStrength]: "1"
                }
            }, c],
            enabled: d || !m
        })
    }),
    Hs = Ar,
    _n = "data-drawer-content",
    Ls = s.forwardRef(function(t, n) {
        const {
            render: r,
            className: o,
            style: y,
            ...d
        } = t;
        return st(), ot("div", t, {
            ref: n,
            props: [{
                [_n]: ""
            }, d]
        })
    }),
    Vs = fr,
    Ao = s.createContext(void 0);

function Fn() {
    return s.useContext(Ao)
}
var Qe = (function(e) {
        return e[e.open = Rt.open] = "open", e[e.closed = Rt.closed] = "closed", e[e.startingStyle = Rt.startingStyle] = "startingStyle", e[e.endingStyle = Rt.endingStyle] = "endingStyle", e.expanded = "data-expanded", e.nestedDrawerOpen = "data-nested-drawer-open", e.nestedDrawerSwiping = "data-nested-drawer-swiping", e.swipeDismiss = "data-swipe-dismiss", e.swipeDirection = "data-swipe-direction", e.swiping = "data-swiping", e
    })({}),
    kn = s.createContext(void 0);

function Dt(e) {
    const t = s.useContext(kn);
    if (e !== !0 && t === void 0) throw new Error(gt(90));
    return t
}

function Hn(e, t) {
    const n = e + t;
    return n >= 0 ? t : -Math.sqrt(-n) - e
}

function Gt(e, t, n) {
    if (!Number.isFinite(t) || t <= 0) return null;
    if (typeof e == "number") return Number.isFinite(e) ? e <= 1 ? ke(e, 0, 1) * t : e : null;
    const r = e.trim();
    if (r.endsWith("px")) {
        const o = Number.parseFloat(r);
        return Number.isFinite(o) ? o : null
    }
    if (r.endsWith("rem")) {
        const o = Number.parseFloat(r);
        return Number.isFinite(o) ? o * n : null
    }
    return null
}

function Ct(e, t) {
    let n = -1,
        r = 1 / 0;
    for (let o = 0; o < e.length; o += 1) {
        const y = Math.abs(e[o] - t);
        y < r && (r = y, n = o)
    }
    return n
}

function Ln() {
    const e = st(),
        {
            snapPoints: t,
            activeSnapPoint: n,
            setActiveSnapPoint: r,
            popupHeight: o
        } = Dt(),
        y = e.useState("viewportElement"),
        [d, c] = s.useState(0),
        [a, p] = s.useState(16),
        m = ne(() => {
            const x = rt(y).documentElement;
            c(y ? y.offsetHeight : x.clientHeight);
            const P = parseFloat(getComputedStyle(x).fontSize);
            Number.isFinite(P) && p(P)
        });
    Me(() => {
        if (m(), !y || typeof ResizeObserver != "function") return;
        const x = new ResizeObserver(m);
        return x.observe(y), () => {
            x.disconnect()
        }
    }, [m, y]);
    const u = s.useMemo(() => {
        if (!t || t.length === 0 || d <= 0 || o <= 0) return [];
        const x = Math.min(o, d),
            P = t.map(C => {
                const K = Gt(C, d, a);
                if (K === null) return null;
                const D = ke(K, 0, x);
                return {
                    value: C,
                    height: D,
                    offset: Math.max(0, o - D)
                }
            }).filter(C => !!C);
        if (P.length <= 1) return P;
        const S = [],
            I = [];
        for (let C = P.length - 1; C >= 0; C -= 1) {
            const K = P[C];
            I.some(D => Math.abs(D - K.height) <= 1) || (I.push(K.height), S.push(K))
        }
        return S.reverse(), S
    }, [o, a, t, d]);
    return {
        snapPoints: t,
        activeSnapPoint: n,
        setActiveSnapPoint: r,
        popupHeight: o,
        viewportHeight: d,
        resolvedSnapPoints: u,
        activeSnapPointOffset: s.useMemo(() => {
            if (n === null) return;
            const x = u.find(C => Object.is(C.value, n));
            if (x) return x;
            const P = Math.min(o, d),
                S = Gt(n, d, a);
            if (S === null) return;
            const I = ke(S, 0, P);
            return u[Ct(u.map(C => C.height), I)]
        }, [n, o, u, a, d]) ? .offset ? ? null
    }
}
var Vn = s.createContext(null);

function No() {
    return s.useContext(Vn)
}
var Ut = !1;

function _o() {
    Ut || (typeof CSS < "u" && "registerProperty" in CSS && ([De.swipeMovementX, De.swipeMovementY, De.snapPointOffset].forEach(e => {
        try {
            CSS.registerProperty({
                name: e,
                syntax: "<length>",
                inherits: !1,
                initialValue: "0px"
            })
        } catch {}
    }), [{
        name: tt.swipeProgress,
        initialValue: "0"
    }, {
        name: De.swipeStrength,
        initialValue: "1"
    }].forEach(({
        name: e,
        initialValue: t
    }) => {
        try {
            CSS.registerProperty({
                name: e,
                syntax: "<number>",
                inherits: !1,
                initialValue: t
            })
        } catch {}
    })), Ut = !0)
}
var Fo = { ...Vt,
        expanded(e) {
            return e ? {
                [Qe.expanded]: ""
            } : null
        },
        nestedDrawerOpen(e) {
            return e ? {
                [Qe.nestedDrawerOpen]: ""
            } : null
        },
        nestedDrawerSwiping(e) {
            return e ? {
                [Qe.nestedDrawerSwiping]: ""
            } : null
        },
        swipeDirection(e) {
            return {
                [Qe.swipeDirection]: e
            }
        },
        swiping(e) {
            return e ? {
                [Qe.swiping]: ""
            } : null
        }
    },
    Ys = s.forwardRef(function(t, n) {
        const {
            render: r,
            className: o,
            style: y,
            finalFocus: d,
            initialFocus: c,
            ...a
        } = t, p = st(), m = p.context.popupRef, {
            swipeDirection: u,
            frontmostHeight: x,
            hasNestedDrawer: P,
            nestedSwiping: S,
            nestedSwipeProgressStore: I,
            onPopupHeightChange: C,
            notifyParentFrontmostHeight: K,
            notifyParentHasNestedDrawer: D
        } = Dt(), O = p.useState("descriptionElementId"), me = p.useState("disablePointerDismissal"), W = p.useState("floatingRootContext"), U = p.useState("popupProps"), N = p.useState("modal"), g = p.useState("mounted"), T = p.useState("nested"), H = p.useState("nestedOpenDrawerCount"), M = p.useState("transitionStatus"), X = p.useState("open"), z = p.useState("openMethod"), ae = p.useState("titleElementId"), V = p.useState("role"), L = W.useState("floatingId"), le = a.id ? ? L, A = No();
        Pn();
        const {
            snapPoints: $,
            activeSnapPoint: Z,
            activeSnapPointOffset: q
        } = Ln(), re = H > 0, j = A ? .swiping ? ? !1, G = A ? .swipeStrength ? ? null, [pe, oe] = s.useState(0), se = s.useRef(0), he = ne(() => {
            const ue = m.current;
            if (!ue) return;
            const ge = ue.offsetHeight;
            if (se.current > 0 && x > se.current && ge > se.current) return;
            if (se.current > 0 && P) {
                const fe = se.current;
                oe(fe), C(fe);
                return
            }
            const Ie = ge;
            Ie !== se.current && (se.current = Ie, oe(Ie), C(Ie))
        });
        Me(() => {
            if (!g) {
                se.current = 0, oe(0), C(0);
                return
            }
            const ue = m.current;
            if (!ue || (_o(), he(), typeof ResizeObserver != "function")) return;
            const ge = new ResizeObserver(he);
            return ge.observe(ue), () => {
                ge.disconnect()
            }
        }, [he, g, re, C, m]), Me(() => {
            const ue = () => {
                const fe = m.current;
                if (!fe) return;
                const J = I.getSnapshot();
                J > 0 ? fe.style.setProperty(tt.swipeProgress, `${J}`) : fe.style.setProperty(tt.swipeProgress, "0")
            };
            ue();
            const ge = I.subscribe(ue),
                Ie = m.current;
            return () => {
                ge(), Ie && Ie.style.setProperty(tt.swipeProgress, "0")
            }
        }, [I, m]), Me(() => {
            if (X) return K ? .(x), () => {
                K ? .(0)
            }
        }, [x, X, K]), Me(() => {
            if (D) return D(X || M === "ending"), () => {
                D(!1)
            }
        }, [D, X, M]), Lt({
            open: X,
            ref: m,
            onComplete() {
                X && p.context.onOpenChangeComplete ? .(!0)
            }
        });
        const be = c === void 0 ? m : c,
            ye = p.useStateSetter("popupElement"),
            ve = {
                open: X,
                nested: T,
                transitionStatus: M,
                expanded: Z === 1,
                nestedDrawerOpen: re,
                nestedDrawerSwiping: S,
                swipeDirection: u,
                swiping: j
            };
        let xe;
        pe && !(!P && M !== "ending") && (xe = `${pe}px`);
        const b = $ && $.length > 0 && (u === "down" || u === "up");
        let h = null;
        b && q !== null && (h = u === "up" ? -q : q);
        let v = A ? A.getDragStyles() : _t;
        if (b && u === "down") {
            const ue = q ? ? 0,
                ge = Number.parseFloat(String(v[De.swipeMovementY]));
            j && Number.isFinite(ge) ? v = { ...v,
                transform: void 0,
                [De.swipeMovementY]: `${Hn(ue,ge)}px`
            } : v = { ...v,
                transform: void 0
            }
        }
        const Re = ot("div", t, {
            state: ve,
            props: [U, {
                id: le,
                "aria-labelledby": ae,
                "aria-describedby": O,
                role: V,
                ...vn,
                hidden: !g,
                onKeyDown(ue) {
                    jr.has(ue.key) && ue.stopPropagation()
                },
                style: { ...v,
                    [tt.swipeProgress]: "0",
                    [De.nestedDrawers]: H,
                    [De.height]: xe,
                    [De.snapPointOffset]: typeof h == "number" ? `${h}px` : "0px",
                    [De.frontmostHeight]: x ? `${x}px` : void 0,
                    [De.swipeStrength]: typeof G == "number" && Number.isFinite(G) && G > 0 ? `${G}` : "1"
                }
            }, a],
            ref: [n, m, ye],
            stateAttributesMapping: Fo
        });
        return (0, Se.jsx)(Dr, {
            context: W,
            openInteractionType: z,
            disabled: !g,
            closeOnFocusOut: !me,
            initialFocus: be,
            returnFocus: d,
            modal: N !== !1,
            restoreFocus: "popup",
            children: Re
        })
    }),
    Bs = Sr,
    zt, $t;

function Xs(e) {
    const {
        children: t,
        open: n,
        defaultOpen: r = !1,
        onOpenChange: o,
        onOpenChangeComplete: y,
        disablePointerDismissal: d = !1,
        modal: c = !0,
        actionsRef: a,
        handle: p,
        triggerId: m,
        defaultTriggerId: u = null,
        swipeDirection: x = "down",
        snapToSequentialPoints: P = !1,
        snapPoints: S,
        snapPoint: I,
        defaultSnapPoint: C,
        onSnapPointChange: K
    } = e, D = Dt(!0), O = D ? .onNestedSwipeProgressChange, me = D ? .onNestedFrontmostHeightChange, W = D ? .onNestedSwipingChange, U = D ? .onNestedDrawerPresenceChange, [N, g] = s.useState(0), [T, H] = s.useState(0), [M, X] = s.useState(!1), [z, ae] = s.useState(!1), [V] = s.useState(ko), L = C !== void 0 ? C : S ? .[0] ? ? null, le = I !== void 0, [A, $] = gn({
        controlled: I,
        default: L,
        name: "Drawer",
        state: "snapPoint"
    }), Z = s.useRef(!1), q = s.useRef(!1), re = ne((b, h) => {
        const v = h ? ? qe("none");
        K ? .(b, v), !v.isCanceled && $(b)
    }), j = s.useMemo(() => le || !S || S.length === 0 ? A : A === null || !S.some(b => Object.is(b, A)) ? L : A, [A, le, L, S]), G = ne(b => {
        g(b), !Z.current && b > 0 && H(b)
    }), pe = ne(b => {
        if (b > 0) {
            Z.current = !0, H(b);
            return
        }
        Z.current = !1, N > 0 && H(N)
    }), oe = ne(b => {
        X(b)
    }), se = ne(b => {
        V.set(b), O ? .(b)
    }), he = ne(b => {
        ae(b), W ? .(b)
    }), be = ne((b, h) => {
        o ? .(b, h), !h.isCanceled && !b && S && S.length > 0 && re(L, qe(h.reason, h.event, h.trigger))
    }), ye = s.useMemo(() => ({
        swipeDirection: x,
        swipeAreaActiveRef: q,
        snapToSequentialPoints: P,
        snapPoints: S,
        activeSnapPoint: j,
        setActiveSnapPoint: re,
        frontmostHeight: T,
        popupHeight: N,
        hasNestedDrawer: M,
        nestedSwiping: z,
        nestedSwipeProgressStore: V,
        onNestedDrawerPresenceChange: oe,
        onPopupHeightChange: G,
        onNestedFrontmostHeightChange: pe,
        onNestedSwipingChange: he,
        onNestedSwipeProgressChange: se,
        notifyParentFrontmostHeight: me,
        notifyParentSwipingChange: W,
        notifyParentSwipeProgressChange: O,
        notifyParentHasNestedDrawer: U
    }), [j, T, M, z, V, U, O, W, me, oe, pe, se, he, G, N, re, S, P, q, x]), ve = typeof t == "function" ? b => (0, Se.jsxs)(s.Fragment, {
        children: [zt || (zt = (0, Se.jsx)(qt, {})), t(b)]
    }) : (0, Se.jsxs)(s.Fragment, {
        children: [$t || ($t = (0, Se.jsx)(qt, {})), t]
    }), xe = hr("drawer", {
        open: n,
        defaultOpen: r,
        onOpenChange: be,
        onOpenChangeComplete: y,
        disablePointerDismissal: d,
        modal: c,
        actionsRef: a,
        handle: p,
        triggerId: m,
        defaultTriggerId: u,
        children: ve
    });
    return (0, Se.jsx)(kn.Provider, {
        value: ye,
        children: xe
    })
}

function ko() {
    let e = 0;
    const t = new Set;
    return {
        getSnapshot: () => e,
        set(n) {
            const r = Number.isFinite(n) ? n : 0;
            r !== e && (e = r, t.forEach(o => {
                o()
            }))
        },
        subscribe(n) {
            return t.add(n), () => {
                t.delete(n)
            }
        }
    }
}

function qt() {
    const e = Fn(),
        t = st(!1),
        n = e ? .setDrawerOpen,
        r = e ? .removeDrawer,
        o = t.useState("open"),
        y = t.useState("nestedOpenDialogCount"),
        d = t.useState("popupElement"),
        c = y === 0;
    return Me(() => {
        if (r) return () => {
            r(t)
        }
    }, [r, t]), Me(() => {
        n ? .(t, o)
    }, [o, n, t]), s.useEffect(() => {
        if (!o || !c || !Or) return;
        const a = nt(d).CloseWatcher;
        if (!a) return;

        function p(x) {
            t.select("open") && t.setOpen(!1, qe(Jn, x))
        }
        const m = new a,
            u = Ze(m, "close", p);
        return () => {
            u(), m.destroy()
        }
    }, [t, c, o, d]), null
}

function pt(e, t, n) {
    return typeof e ? .elementFromPoint == "function" ? e.elementFromPoint(t, n) : null
}
var Ho = 40,
    Lo = 10,
    Vo = 1,
    Yo = 50,
    Jt = 16,
    Bo = 80,
    Xo = 'button,a,input,select,textarea,label,[role="button"]';

function Ge(e, t, n) {
    switch (e) {
        case "up":
            return -n;
        case "down":
            return n;
        case "left":
            return -t;
        case "right":
            return t;
        default:
            return 0
    }
}

function Ko(e) {
    const t = nt(e).getComputedStyle(e).transform;
    let n = 0,
        r = 0,
        o = 1;
    if (t && t !== "none") {
        const y = t.match(/matrix(?:3d)?\(([^)]+)\)/);
        if (y) {
            const d = y[1].split(", ").map(parseFloat);
            d.length === 6 ? (n = d[4], r = d[5], o = Math.sqrt(d[0] * d[0] + d[1] * d[1])) : d.length === 16 && (n = d[12], r = d[13], o = d[0])
        }
    }
    return {
        x: n,
        y: r,
        scale: o
    }
}

function xt(e) {
    return Number.isFinite(e) && e > 0 ? e : null
}

function Zt(e, t) {
    return `translate3d(${e.x}px,${e.y}px,0) scale(${t})`
}

function Wo(e) {
    return e % 2 === 1
}

function Ot(e, t, n) {
    const r = e[n];
    if (typeof r == "function") try {
        r.call(e, t)
    } catch (o) {
        if (o && typeof o == "object" && "name" in o && o.name === "NotFoundError") return;
        throw o
    }
}

function jo(e) {
    const {
        enabled: t,
        directions: n,
        elementRef: r,
        movementCssVars: o,
        canStart: y,
        ignoreSelectorWhenTouch: d = !0,
        ignoreScrollableAncestors: c = !1,
        swipeThreshold: a,
        onDismiss: p,
        onProgress: m,
        onCancel: u,
        onSwipeStart: x,
        onRelease: P,
        onSwipingChange: S,
        trackDrag: I = !0
    } = e, C = Xo, K = n.length === 1 ? n[0] : void 0, D = Math.max(0, typeof a == "number" ? a : Ho), O = n.includes("left"), me = n.includes("right"), W = n.includes("up"), U = n.includes("down"), N = O || me, g = W || U, T = s.useMemo(() => {
        const i = [];
        return g && i.push("vertical"), N && i.push("horizontal"), i
    }, [N, g]), [H, M] = s.useState(void 0), [X, z] = s.useState(!1), [ae, V] = s.useState(!1), L = s.useRef({
        x: 0,
        y: 0
    }), le = s.useRef({
        x: 0,
        y: 0
    }), A = s.useRef(null), $ = s.useRef({
        x: 0,
        y: 0,
        scale: 1
    }), Z = s.useRef(void 0), q = s.useRef(0), re = s.useRef(!1), j = s.useRef({
        x: 0,
        y: 0
    }), G = s.useRef(null), pe = s.useRef(!1), oe = s.useRef(!1), se = s.useRef(null), he = s.useRef(!1), be = s.useRef(!1), ye = s.useRef({
        width: 0,
        height: 0
    }), ve = s.useRef(0), xe = s.useRef(D), b = s.useRef(null), h = s.useRef(null), v = s.useRef(null), Re = s.useRef({
        x: 0,
        y: 0
    }), ue = s.useRef(null), ge = s.useRef(!1), Ie = s.useRef(null), fe = ne(i => {
        ge.current !== i && (ge.current = i, z(i), S ? .(i))
    });

    function J(i) {
        if (!i) return;
        const l = r.current,
            w = b.current;
        if (!l || !w) return;
        const B = w({
            element: l,
            direction: i
        });
        xe.current = Math.max(0, B)
    }
    const Ce = ne((i, l) => {
            const w = Number.isFinite(i) ? ke(i, 0, 1) : 0,
                B = w !== ve.current;
            let F = !1;
            if (l) {
                const k = ue.current;
                F = !k || k.deltaX !== l.deltaX || k.deltaY !== l.deltaY || k.direction !== l.direction
            }!B && !F || (ve.current = w, l ? ue.current = l : B && (ue.current = null), m ? .(w, l))
        }),
        Ne = ne(i => {
            const l = r.current;
            if (!I || !l) {
                i || (Ie.current = null);
                return
            }
            const w = l.style,
                B = Ie.current;
            i ? (B || (Ie.current = [w.transition, w.transform]), w.transition = "none") : B && ([w.transition, w.transform] = B, Ie.current = null);
            const F = le.current,
                k = $.current,
                ce = F.x - k.x,
                Pe = F.y - k.y;
            i && (w.transform = Zt(F, k.scale)), w.setProperty(o.x, `${ce}px`), w.setProperty(o.y, `${Pe}px`)
        });

    function Ye(i, l) {
        if (l === null) return;
        const w = v.current;
        if (w && l > w.time) {
            const B = Math.max(l - w.time, Jt);
            Re.current = {
                x: (i.x - w.x) / B,
                y: (i.y - w.y) / B
            }
        }
        v.current = {
            x: i.x,
            y: i.y,
            time: l
        }
    }
    const je = s.useCallback(() => {
        M(void 0), fe(!1), V(!1), Ce(0), xe.current = D, b.current = null, L.current = {
            x: 0,
            y: 0
        }, le.current = {
            x: 0,
            y: 0
        }, $.current = {
            x: 0,
            y: 0,
            scale: 1
        }, Z.current = void 0, q.current = 0, re.current = !1, j.current = {
            x: 0,
            y: 0
        }, G.current = null, pe.current = !1, A.current = null, oe.current = !1, se.current = null, he.current = !1, be.current = !1, ye.current = {
            width: 0,
            height: 0
        }, h.current = null, v.current = null, Re.current = {
            x: 0,
            y: 0
        }, ue.current = null, Ne(!1)
    }, [fe, D, Ne, Ce]);

    function Ue(i) {
        if ("touches" in i) {
            const l = i.touches[0];
            return l ? {
                x: l.clientX,
                y: l.clientY
            } : null
        }
        return {
            x: i.clientX,
            y: i.clientY
        }
    }

    function it(i) {
        return "touches" in i ? !0 : i.pointerType === "touch"
    }

    function ht(i, l) {
        const w = r.current ? .getRootNode();
        return pt(w, i.x, i.y) ? ? wt(l)
    }

    function f(i, l) {
        return N && !g ? et(i, l, "horizontal") : g && !N ? et(i, l, "vertical") : et(i, l, "vertical") ? ? et(i, l, "horizontal")
    }

    function R(i, l, w) {
        he.current = !1;
        const B = it(i),
            F = ht(l, i.nativeEvent),
            k = rt(r.current).body,
            ce = B && k ? f(F, k) : null,
            Pe = w ? .ignoreScrollableTarget ? ? !1;
        if (ce && !Pe || (he.current = !!(ce && Pe), F && F.closest(C) && (!B || d))) return !1;
        const ee = r.current;
        if (c && ee && F && T.length > 0 && !(w ? .ignoreScrollableAncestors ? ? !1) && Io(F, ee, T)) return !1;
        if (re.current = !1, Z.current = void 0, q.current = 0, L.current = l, h.current = xt(i.timeStamp), j.current = l, A.current = l, xe.current = D, b.current = typeof a == "function" ? a : null, ee) {
            ye.current = {
                width: ee.offsetWidth,
                height: ee.offsetHeight
            }, J(K);
            const de = Ko(ee);
            $.current = de, le.current = {
                x: de.x,
                y: de.y
            }, Ye({
                x: de.x,
                y: de.y
            }, h.current), "touches" in i || Ot(ee, i.pointerId, "setPointerCapture")
        }
        return x ? .(i.nativeEvent), fe(!0), G.current = null, pe.current = !0, Ce(0), Ne(!0), !0
    }

    function E() {
        Y(), he.current = !1, A.current = null
    }

    function Y() {
        oe.current = !1, se.current = null
    }

    function Q(i) {
        if (E(), !ge.current) return;
        fe(!1), G.current = null;
        const l = $.current;
        le.current = {
            x: l.x,
            y: l.y
        }, M(void 0), be.current = !1, Ne(!1);
        const w = r.current;
        w && Ot(w, i.pointerId, "releasePointerCapture"), Ce(0, {
            deltaX: 0,
            deltaY: 0,
            direction: void 0
        }), u ? .(i.nativeEvent)
    }

    function _(i, l) {
        const w = F => Math.sign(F) * Math.abs(F) ** .5,
            B = (F, k, ce) => !k && F < 0 || !ce && F > 0 ? w(F) : F;
        return {
            x: N ? B(i, O, me) : w(i),
            y: g ? B(l, W, U) : w(l)
        }
    }

    function ie(i, l, w) {
        const B = (ce, Pe, ee, de, te) => ce > 0 && Pe <= 0 && de || ce < 0 && Pe >= Math.max(0, ee) && te,
            F = Math.abs(l),
            k = Math.abs(w);
        return g && w !== 0 && (!N || k >= F) ? B(w, i.scrollTop, i.scrollHeight - i.clientHeight, U, W) : N && l !== 0 && (!g || F > k) ? B(l, i.scrollLeft, i.scrollWidth - i.clientWidth, me, O) : null
    }
    const we = ne(i => {
        if (!t || i.defaultPrevented || i.nativeEvent.defaultPrevented || !("touches" in i) && i.button !== 0) return;
        const l = Ue(i);
        l && (oe.current = !0, se.current = l, he.current = !1, be.current = !("touches" in i), (!y || y(l, {
            nativeEvent: i.nativeEvent,
            direction: K
        })) && R(i, l) && Y())
    });

    function Le(i, l, w) {
        if (!t || !ge.current) return;
        const B = wt(i.nativeEvent);
        if (it(i) && !he.current) {
            const Ke = i.currentTarget;
            if (f(B, Ke)) return
        }
        if ("touches" in i || i.preventDefault(), pe.current && (pe.current = !1, I)) {
            L.current = l;
            const Ke = xt(i.timeStamp);
            Ke !== null && (h.current = Ke)
        }
        const F = l.x,
            k = l.y,
            ce = w.x,
            Pe = w.y;
        (Pe < 0 && k > j.current.y || Pe > 0 && k < j.current.y) && (j.current = {
            x: j.current.x,
            y: k
        }), (ce < 0 && F > j.current.x || ce > 0 && F < j.current.x) && (j.current = {
            x: F,
            y: j.current.y
        });
        const ee = F - L.current.x,
            de = k - L.current.y,
            te = k - j.current.y,
            Ve = F - j.current.x;
        let Oe = G.current;
        Oe === null && N && g && Math.sqrt(ee * ee + de * de) >= Vo && (Oe = Math.abs(ee) > Math.abs(de) ? "horizontal" : "vertical", G.current = Oe);
        let Ee;
        if (!Z.current) Oe === "vertical" ? de > 0 ? Ee = "down" : de < 0 && (Ee = "up") : Oe === "horizontal" ? ee > 0 ? Ee = "right" : ee < 0 && (Ee = "left") : Math.abs(ee) >= Math.abs(de) ? Ee = ee > 0 ? "right" : "left" : Ee = de > 0 ? "down" : "up", Ee && (Ee === "left" && O || Ee === "right" && me || Ee === "up" && W || Ee === "down" && U) && (Z.current = Ee, q.current = Ge(Ee, ee, de), M(Ee), J(Ee));
        else {
            const Ke = Z.current,
                lt = Ge(Ke, Ve, te);
            lt > xe.current ? (re.current = !1, M(Ke)) : !(O && me) && !(W && U) && q.current - lt >= Lo && (re.current = !0)
        }
        const $e = _(ee, de);
        let Xe = $.current.x,
            Fe = $.current.y;
        Oe === "horizontal" ? N && (Xe += $e.x) : (Oe === "vertical" || N && (Xe += $e.x), g && (Fe += $e.y));
        const Ae = le.current,
            We = Xe !== Ae.x || Fe !== Ae.y;
        le.current = {
            x: Xe,
            y: Fe
        }, We && Ne(!0), Ye({
            x: Xe,
            y: Fe
        }, xt(i.timeStamp));
        const mt = Xe - $.current.x,
            ft = Fe - $.current.y,
            at = {
                deltaX: mt,
                deltaY: ft,
                direction: Z.current
            };
        let Je = 0;
        const ct = K ? ? Z.current;
        if (ct) {
            const Ke = ct === "left" || ct === "right" ? ye.current.width : ye.current.height,
                lt = $.current.scale || 1,
                St = Ge(ct, mt, ft);
            Ke > 0 && lt > 0 && St > 0 && (Je = St / (Ke * lt))
        }
        Ce(Je, at)
    }
    const Te = ne(i => {
            if (!t) return;
            const l = le.current,
                w = $.current,
                B = l.x - w.x,
                F = l.y - w.y,
                k = {
                    deltaX: B,
                    deltaY: F,
                    direction: Z.current
                };
            if (!ge.current) {
                E(), Ce(0, k);
                return
            }
            fe(!1), G.current = null, E(), be.current = !1;
            const ce = r.current;
            ce && ("touches" in i || Ot(ce, i.pointerId, "releasePointerCapture"));
            const Pe = B,
                ee = F,
                de = h.current,
                te = xt(i.timeStamp),
                Ve = de !== null && te !== null && te > de ? te - de : 0,
                Oe = Ve > 0 ? Math.max(Ve, Yo) : 0,
                Ee = Oe > 0 ? Pe / Oe : 0,
                $e = Oe > 0 ? ee / Oe : 0;
            let Xe = Re.current.x,
                Fe = Re.current.y;
            const Ae = v.current;
            if (Ae && te !== null && te >= Ae.time) {
                const Je = te - Ae.time;
                if (Je <= Bo) {
                    const ct = Math.max(Je, Jt),
                        Ke = l.x - Ae.x,
                        lt = l.y - Ae.y,
                        St = Ke / ct,
                        Xt = lt / ct;
                    St !== 0 && (Xe = St), Xt !== 0 && (Fe = Xt)
                } else Xe = 0, Fe = 0
            }
            const We = P ? .({
                    event: i.nativeEvent,
                    direction: Z.current,
                    deltaX: Pe,
                    deltaY: ee,
                    velocityX: Ee,
                    velocityY: $e,
                    releaseVelocityX: Xe,
                    releaseVelocityY: Fe
                }),
                mt = typeof We == "boolean";
            if (re.current && !mt) {
                le.current = {
                    x: w.x,
                    y: w.y
                }, M(void 0), Ne(!1), Ce(0, k);
                return
            }
            let ft = !1,
                at;
            if (mt) ft = We, at = Z.current ? ? K;
            else
                for (const Je of n)
                    if (Ge(Je, Pe, ee) > xe.current) {
                        ft = !0, at = Je;
                        break
                    }
            ft && at ? (M(at), V(!0), Ne(!1), p ? .(i.nativeEvent, {
                direction: at
            })) : (le.current = {
                x: w.x,
                y: w.y
            }, M(void 0), Ne(!1), Ce(0, k))
        }),
        _e = ne(i => {
            const l = Ue(i);
            if (!l) return;
            let w = !1;
            if (!("touches" in i)) {
                const k = Wo(i.buttons);
                if (k && (be.current = !0), i.buttons !== 0 && !k) {
                    Q(i);
                    return
                }
                if (i.buttons === 0 && be.current) {
                    if (!ge.current) {
                        Te(i);
                        return
                    }
                    w = !0
                }
            }
            if (!X && oe.current) {
                if (!it(i) && (i.defaultPrevented || i.nativeEvent.defaultPrevented)) {
                    E();
                    return
                }
                if (!y || y(l, {
                        nativeEvent: i.nativeEvent,
                        direction: K
                    })) {
                    const k = se.current;
                    let ce = !1;
                    if (it(i)) {
                        const Pe = r.current;
                        if (k && Pe) {
                            const ee = ht(l, i.nativeEvent),
                                de = rt(Pe).body,
                                te = de ? f(ee, de) : null;
                            if (te && (He(Pe, te) || He(te, Pe))) {
                                const Ve = ie(te, l.x - k.x, l.y - k.y);
                                if (Ve === !1) return;
                                Ve === !0 && (ce = !0)
                            }
                        }
                    }
                    R(i, l, {
                        ignoreScrollableTarget: ce,
                        ignoreScrollableAncestors: ce
                    }) && (k && ce ? (Y(), L.current = k, j.current = k, A.current = k, pe.current = !1) : (Y(), he.current = !1))
                }
            }
            const B = A.current,
                F = B === null ? {
                    x: 0,
                    y: 0
                } : {
                    x: l.x - B.x,
                    y: l.y - B.y
                };
            A.current = l, Le(i, l, F), w && !("touches" in i) && Te(i)
        }),
        ze = ne((i, l) => {
            _e({
                touches: i.touches,
                currentTarget: l,
                nativeEvent: i,
                defaultPrevented: i.defaultPrevented,
                timeStamp: i.timeStamp
            })
        }),
        Be = s.useCallback(() => {
            const i = ge.current,
                l = le.current,
                w = $.current,
                B = l.x - w.x,
                F = l.y - w.y;
            return !i && B === 0 && F === 0 && !ae ? {
                [o.x]: "0px",
                [o.y]: "0px"
            } : {
                transition: i ? "none" : void 0,
                transform: i ? Zt(l, w.scale) : void 0,
                [o.x]: `${B}px`,
                [o.y]: `${F}px`
            }
        }, [ae, o]);
    return {
        swiping: X,
        swipeDirection: H,
        dragDismissed: ae,
        getPointerProps: s.useCallback(() => t ? {
            onPointerDown: we,
            onPointerMove: _e,
            onPointerUp: Te,
            onPointerCancel: Te
        } : {}, [t, Te, _e, we]),
        getTouchProps: s.useCallback(() => t ? {
            onTouchStart: we,
            onTouchMove: _e,
            onTouchEnd: Te,
            onTouchCancel: Te
        } : {}, [t, Te, _e, we]),
        moveNative: ze,
        getDragStyles: Be,
        reset: je
    }
}
var Ks = xr,
    Ws = br,
    Yn = s.createContext(void 0);

function Go() {
    return s.useContext(Yn)
}
var Ht = 10,
    Qt = .5,
    en = .5,
    Uo = 300,
    zo = 4,
    tn = .2,
    $o = 4,
    nn = 80,
    qo = 360,
    Jo = .1,
    rn = 6,
    Zo = 2,
    Qo = `[${_n}]`,
    js = s.forwardRef(function(t, n) {
        const {
            render: r,
            className: o,
            style: y,
            children: d,
            ...c
        } = t, a = st(), p = a.context.popupRef, m = a.context.backdropRef, {
            swipeDirection: u,
            notifyParentSwipingChange: x,
            notifyParentSwipeProgressChange: P,
            frontmostHeight: S,
            snapToSequentialPoints: I,
            swipeAreaActiveRef: C
        } = Dt(), K = Fn(), {
            snapPoints: D,
            resolvedSnapPoints: O,
            activeSnapPoint: me,
            activeSnapPointOffset: W,
            setActiveSnapPoint: U,
            popupHeight: N
        } = Ln(), g = a.useState("open"), T = a.useState("mounted"), H = a.useState("nested"), M = a.useState("nestedOpenDrawerCount"), X = a.useState("viewportElement"), z = a.useState("popupElement"), ae = K ? .visualStateStore, V = M > 0, L = u === "left" || u === "right" ? "horizontal" : "vertical", le = L === "vertical", A = le ? "horizontal" : "vertical", [$, Z] = s.useState(null), q = s.useRef(void 0), re = s.useRef(null), j = hn(), G = s.useRef(!1), pe = s.useRef(!1), oe = s.useRef(""), se = s.useRef(!1), he = s.useRef(!1), be = s.useRef(null), ye = Go(), ve = s.useMemo(() => {
            if (!D || D.length < 2 || O.length < 2 || u !== "down" && u !== "up") return null;
            const f = O.map(E => E.offset).sort((E, Y) => E - Y),
                R = f[0];
            return {
                minOffset: R,
                range: f[1] - R
            }
        }, [O, D, u]), xe = s.useMemo(() => !ve || W === null ? null : ke((W - ve.minOffset) / ve.range, 0, 1), [W, ve]), b = s.useMemo(() => D && D.length > 0 && (u === "down" || u === "up") ? u === "down" ? ["down", "up"] : ["up", "down"] : [u], [D, u]), h = ne(f => {
            p.current ? .toggleAttribute(Qe.swipeDismiss, f), m.current ? .toggleAttribute(Qe.swipeDismiss, f)
        }), v = ne(() => {
            h(!1), p.current ? .removeAttribute(Kt.endingStyle), Z(null)
        }), Re = ne(() => {
            pe.current && (pe.current = !1, x ? .(!1))
        }), ue = ne((f, R, E) => {
            const Y = g && !H && R,
                Q = Y ? f : 0,
                _ = g && R ? f : 0;
            E && P && (P(_), _ <= 0 && Re()), ae ? .set({
                swipeProgress: Q,
                frontmostHeight: Q > 0 ? S : 0
            });
            const ie = m.current;
            if (!ie) return;
            const we = Y && Q > 0;
            ie.style.setProperty(tt.swipeProgress, we ? `${Q}` : "0"), we && S > 0 ? ie.style.setProperty(De.height, `${S}px`) : ie.style.removeProperty(De.height)
        });

        function ge(f, R, E, Y, Q, _, ie, we) {
            const Le = Bn(f, R);
            if (Le <= 0) return null;
            const Te = ((R === "down" || R === "up") && D && D.length > 0 ? W ? ? 0 : 0) + Ge(R, E, Y),
                _e = Math.max(0, Le - Te);
            if (_e <= 0) return null;
            const ze = Ge(R, ie, we),
                Be = Math.abs(ze) > 0 ? ze : Ge(R, Q, _);
            if (Be <= tn) return null;
            const i = ke(Be, tn, $o),
                l = (ke(_e / i, nn, qo) - nn) / 280;
            return Jo + l * .9
        }

        function Ie(f) {
            if (pe.current || !f) return;
            const R = f.direction ? ? u,
                E = Ge(R, f.deltaX, f.deltaY);
            Math.abs(E) < Ht || (pe.current = !0, x ? .(!0))
        }
        const fe = jo({
                enabled: T && !V,
                directions: b,
                elementRef: a.context.popupRef,
                ignoreSelectorWhenTouch: !1,
                ignoreScrollableAncestors: !0,
                movementCssVars: {
                    x: De.swipeMovementX,
                    y: De.swipeMovementY
                },
                onSwipeStart(f) {
                    if ("touches" in f || f.pointerType === "touch") return;
                    const R = p.current,
                        E = rt(R).getSelection ? .();
                    if (!E || E.isCollapsed) return;
                    const Y = dt(E.anchorNode) ? E.anchorNode : E.anchorNode ? .parentElement,
                        Q = dt(E.focusNode) ? E.focusNode : E.focusNode ? .parentElement;
                    !He(R, Y) && !He(R, Q) || E.removeAllRanges()
                },
                onSwipingChange(f) {
                    G.current = f, At(a.context.backdropRef.current, f), !f && !P && Re()
                },
                swipeThreshold({
                    element: f,
                    direction: R
                }) {
                    return sn(f, R)
                },
                canStart(f, R) {
                    const E = a.context.popupRef.current;
                    if (!E) return !1;
                    const Y = E.ownerDocument,
                        Q = pt(E.getRootNode(), f.x, f.y);
                    if (!Q || !He(E, Q)) return !1;
                    const _ = R.nativeEvent;
                    return !(("touches" in _ || _.pointerType === "touch") && an(Y, E))
                },
                onProgress(f, R) {
                    Ie(R);
                    const E = !!(D && D.length > 0);
                    if (G.current && u === "down" && E && R) {
                        const Q = a.context.popupRef.current;
                        Q && (Q.style.removeProperty("transform"), Q.style.setProperty(De.swipeMovementY, `${Hn(W??0,R.deltaY)}px`))
                    }
                    let Y = f;
                    if (ve && N > 0) {
                        const Q = W ? ? ve.minOffset,
                            _ = ie => ke((ie - ve.minOffset) / ve.range, 0, 1);
                        R && Number.isFinite(R.deltaY) ? Y = _(ke(Q + R.deltaY, 0, N)) : xe !== null && (Y = xe)
                    }
                    ue(Y, !0, !0)
                },
                onRelease({
                    event: f,
                    deltaX: R,
                    deltaY: E,
                    direction: Y,
                    velocityX: Q,
                    velocityY: _,
                    releaseVelocityX: ie,
                    releaseVelocityY: we
                }) {
                    const Le = a.context.popupRef.current;
                    if (!Le) {
                        v();
                        return
                    }
                    const Te = Le;

                    function _e(te) {
                        Re(), h(!0), Te.style.removeProperty("transition"), Te.setAttribute(Kt.endingStyle, ""), go.flushSync(() => {
                            Z(ge(Te, te, R, E, Q, _, ie, we))
                        })
                    }
                    if (!D || D.length === 0) {
                        if (!Y) {
                            v();
                            return
                        }
                        const te = Ge(Y, R, E);
                        if (te <= 0) return v(), !1;
                        if (Ge(Y, Q, _) >= Qt) return _e(Y), !0;
                        const Ve = te > sn(Te, Y);
                        return Ve ? _e(Y) : v(), Ve
                    }
                    if (u !== "down" && u !== "up") {
                        v();
                        return
                    }
                    if (!N) return v(), !1;
                    if (O.length === 0) {
                        v();
                        return
                    }
                    const ze = u === "down" ? E : -E,
                        Be = Math.sign(ze),
                        i = u === "down" ? we : -we,
                        l = u === "down" ? _ : -_;
                    let w = i;
                    if (Be !== 0 && Math.abs(ze) >= Ht) {
                        const te = Math.sign(w);
                        te !== 0 && te !== Be && (w = l)
                    }
                    const B = W ? ? 0,
                        F = ke(B + ze, 0, N),
                        k = Math.abs(w) >= en ? ke(w, -4, zo) * Uo : 0,
                        ce = I ? F : ke(F + k, 0, N),
                        Pe = qe(bt, f),
                        ee = () => (q.current = me, U(null, Pe), _e(u), !0);
                    if (I) {
                        const te = [...O].sort((Ae, We) => Ae.offset - We.offset),
                            Ve = te.map(Ae => Ae.offset),
                            Oe = Ct(Ve, B);
                        let Ee = te[Ct(Ve, ce)];
                        const $e = Math.sign(w),
                            Xe = Be !== 0 && $e !== 0 && $e === Be && Math.abs(w) >= en;
                        let Fe = ce;
                        if (Xe) {
                            const Ae = ke(Oe + Be, 0, te.length - 1);
                            if (Ae !== Oe) {
                                const We = te[Ae];
                                (Be > 0 ? ce < We.offset : ce > We.offset) && (Ee = We, Fe = We.offset)
                            } else if (Be > 0) return ee()
                        }
                        return Math.abs(Fe - N) < Math.abs(Fe - Ee.offset) ? ee() : (U(Ee.value, Pe), v(), !1)
                    }
                    if (w >= Qt && ze > 0) return ee();
                    const de = O[Ct(O.map(te => te.offset), ce)];
                    return Math.abs(ce - N) < Math.abs(ce - de.offset) ? ee() : (U(de.value, Pe), v(), !1)
                },
                onDismiss(f) {
                    ae ? .set({
                        swipeProgress: 0,
                        frontmostHeight: 0
                    });
                    const R = a.context.backdropRef.current;
                    R && (R.style.setProperty(tt.swipeProgress, "0"), R.style.removeProperty(De.height));
                    const E = qe(bt, f);
                    if (a.setOpen(!1, E), E.isCanceled) {
                        const Y = q.current;
                        Y !== void 0 && U(Y, qe(bt, f)), q.current = void 0, re.current ? .(), v();
                        return
                    }
                    if (a.select("open")) {
                        const Y = f;
                        j.request(() => {
                            if (a.select("open")) {
                                const Q = q.current;
                                Q !== void 0 && U(Q, qe(bt, Y)), q.current = void 0, v(), re.current ? .()
                            } else q.current = void 0
                        });
                        return
                    }
                    q.current = void 0, h(!0)
                }
            }),
            J = fe.getPointerProps(),
            Ce = fe.getTouchProps(),
            {
                moveNative: Ne,
                reset: Ye
            } = fe;
        re.current = Ye, s.useEffect(() => {
            const f = X ? ? z;
            if (!f) return;
            const R = f,
                E = rt(R);

            function Y(_, ie, we) {
                const Le = le ? we.clientY - ie.lastY : we.clientX - ie.lastX;
                if (_.touches.length === 2 || an(E, R) || !g || !T || V || as(ie, _, we, le)) return;
                const Te = ie.scrollTarget;
                if (!Te || Te === E.documentElement || Te === E.body) {
                    _.cancelable && _.preventDefault(), _.stopPropagation(), Ne(_, R);
                    return
                }
                if (!cs(Te, L)) {
                    _.cancelable && _.preventDefault(), _.stopPropagation();
                    return
                }
                if (Le !== 0) {
                    const _e = ls(Te, L, u, Le);
                    ie.allowSwipe ? _.cancelable && _.preventDefault() : _.cancelable && _e ? (ie.allowSwipe = !0, _.preventDefault()) : ie.allowSwipe = !1
                }
                ie.allowSwipe === !0 && (_.stopPropagation(), Ne(_, R))
            }

            function Q(_) {
                if (ye ? .onTouchMove(_), he.current) return;
                const ie = be.current,
                    we = _.touches[0];
                !we || !ie || (Y(_, ie, we), is(ie, we))
            }
            return Ze(E, "touchmove", Q, {
                passive: !1,
                capture: !0
            })
        }, [T, V, g, z, le, L, u, Ne, X, ye]), Me(() => {
            !ve || fe.swiping || ue(!g || H ? 0 : xe ? ? 0, !0, !1)
        }, [ue, S, H, P, g, xe, ve, fe.swiping, a, ae]), Me(() => {
            if (P) return g || P(0), () => {
                P(0)
            }
        }, [P, g]), Me(() => {
            g && (C.current || Ye(), v())
        }, [v, g, Ye, C]), Me(() => {
            const f = m.current;
            return () => {
                ae ? .set({
                    swipeProgress: 0,
                    frontmostHeight: 0
                }), At(f, !1);
                const R = m.current;
                R !== f && At(R, !1), Re()
            }
        }, [m, Re, ae]);
        const je = s.useMemo(() => ({
            swiping: fe.swiping,
            getDragStyles: fe.getDragStyles,
            swipeStrength: $ ? ? null,
            setSwipeDismissed: h
        }), [h, fe.getDragStyles, fe.swiping, $]);

        function Ue(f) {
            he.current = f, be.current = null
        }

        function it() {
            Ue(!1), oe.current = "", se.current = !1
        }

        function ht(f) {
            return oe.current = "", f.pointerType !== "touch"
        }
        return (0, Se.jsx)(ho, {
            ref: n,
            className: o,
            style: y,
            render: r,
            ...Qn(c, {
                onPointerDown(f) {
                    if (oe.current = f.pointerType, se.current = f.pointerType === "pen", !g || !T || V) return;
                    const R = pt(f.currentTarget.getRootNode(), f.clientX, f.clientY);
                    on(R) || es(R) || f.pointerType !== "touch" && J.onPointerDown ? .(f)
                },
                onPointerMove(f) {
                    f.pointerType !== "touch" && J.onPointerMove ? .(f)
                },
                onPointerUp(f) {
                    ht(f) && J.onPointerUp ? .(f)
                },
                onPointerCancel(f) {
                    ht(f) && J.onPointerCancel ? .(f)
                },
                onTouchStart(f) {
                    if (oe.current === "pen" && se.current) {
                        se.current = !1, Ue(!1);
                        return
                    }
                    if (!g || !T || V) {
                        Ue(!1);
                        return
                    }
                    const R = f.touches[0];
                    if (!R) return;
                    if (ss(f)) {
                        Ue(!1);
                        return
                    }
                    const E = f.currentTarget,
                        Y = pt(E.getRootNode(), R.clientX, R.clientY),
                        Q = wt(f.nativeEvent),
                        _ = dt(Q) ? Q : E;
                    if (!He(E, _)) {
                        Ue(!0);
                        return
                    }
                    if (ye ? .onTouchStart(f), on(Y)) {
                        Ue(!0);
                        return
                    }
                    he.current = !1;
                    const ie = et(_, E, L),
                        we = et(_, E, A) != null;
                    let Le = null;
                    ie && (Le = Kn(ie, L, u) ? null : !1), be.current = {
                        startX: R.clientX,
                        startY: R.clientY,
                        lastX: R.clientX,
                        lastY: R.clientY,
                        scrollTarget: ie,
                        hasCrossAxisScrollableContent: we,
                        allowSwipe: Le,
                        preserveNativeCrossAxisScroll: !1,
                        drawerAxisAttributed: !1
                    }, Ce.onTouchStart ? .(f)
                },
                onTouchEnd(f) {
                    ye ? .onTouchEnd(f), it(), Ce.onTouchEnd ? .(f)
                },
                onTouchCancel(f) {
                    ye ? .onTouchCancel(), it(), Ce.onTouchCancel ? .(f)
                },
                "data-nested-dialog-open": void 0
            }),
            children: (0, Se.jsx)(Vn.Provider, {
                value: je,
                children: d
            })
        })
    });

function At(e, t) {
    e ? .toggleAttribute(Qe.swiping, t)
}

function on(e) {
    return !!e ? .closest(pr)
}

function es(e) {
    return !!e ? .closest(Qo)
}

function Bn(e, t) {
    return t === "left" || t === "right" ? e.offsetWidth : e.offsetHeight
}

function sn(e, t) {
    return Math.max(Bn(e, t) * .5, Ht)
}

function ts(e, t) {
    return e instanceof t.HTMLInputElement && e.type === "range"
}

function ns(e) {
    return e.tagName === "INPUT" || e.tagName === "TEXTAREA"
}

function rs(e, t) {
    const n = dt(e.anchorNode) ? e.anchorNode : e.anchorNode ? .parentElement,
        r = dt(e.focusNode) ? e.focusNode : e.focusNode ? .parentElement;
    return e.containsNode(t, !0) || He(t, n) || He(t, r)
}

function an(e, t) {
    const n = vt(e);
    if (n && He(t, n) && ns(n)) {
        const {
            selectionStart: o,
            selectionEnd: y
        } = n;
        if (o != null && y != null && o < y) return !0
    }
    const r = e.getSelection ? .();
    return !r || r.isCollapsed ? !1 : rs(r, t)
}

function os(e, t) {
    return e.composedPath().some(n => ts(n, t))
}

function ss(e) {
    return os(e.nativeEvent, nt(e.currentTarget))
}

function is(e, t) {
    e.lastX = t.clientX, e.lastY = t.clientY
}

function as(e, t, n, r) {
    if (e.preserveNativeCrossAxisScroll) return !0;
    if (e.drawerAxisAttributed || e.allowSwipe === !0 || !e.hasCrossAxisScrollableContent) return !1;
    if (!t.cancelable) return e.preserveNativeCrossAxisScroll = !0, !0;
    const o = r ? n.clientY - e.startY : n.clientX - e.startX,
        y = r ? n.clientX - e.startX : n.clientY - e.startY,
        d = Math.abs(o),
        c = Math.abs(y);
    return c >= rn && c > d + Zo ? (e.preserveNativeCrossAxisScroll = !0, !0) : d >= rn ? (e.drawerAxisAttributed = !0, !1) : !0
}

function cs(e, t) {
    return Xn(e, t).max > 0
}

function Xn(e, t) {
    if (t === "vertical") {
        const r = Math.max(0, e.scrollHeight - e.clientHeight);
        return {
            offset: e.scrollTop,
            max: r
        }
    }
    const n = Math.max(0, e.scrollWidth - e.clientWidth);
    return {
        offset: e.scrollLeft,
        max: n
    }
}

function Kn(e, t, n) {
    const r = Wn(n, t),
        {
            offset: o,
            max: y
        } = Xn(e, t);
    return r ? o <= 0 : o >= y
}

function ls(e, t, n, r) {
    return (Wn(n, t) ? r > 0 : r < 0) ? Kn(e, t, n) : !1
}

function Wn(e, t) {
    return t === "vertical" ? e === "down" : e === "right"
}
var cn = (function(e) {
        return e.keyboardInset = "--drawer-keyboard-inset", e
    })({}),
    us = 60,
    Nt = 16,
    fs = 48,
    ln = 150,
    ds = 4,
    ps = 60,
    un = 10,
    fn = 16,
    gs = new Set(["email", "number", "password", "search", "tel", "text", "url"]),
    jn = Symbol("KeyboardTapBlocked");

function Gs(e) {
    const {
        children: t
    } = e, n = st(), r = n.useState("open"), o = n.useState("mounted"), y = n.useState("modal"), d = n.useState("nestedOpenDialogCount"), c = n.useState("viewportElement"), a = d > 0, p = s.useRef(!1), m = s.useRef(null), u = s.useRef(null), x = s.useRef(null), P = s.useRef(!1), S = hn(), I = tr(), C = ne(() => {
        const g = x.current;
        g && (g.element.style.overflowAnchor = g.overflowAnchor, g.element.style.paddingBottom = g.paddingBottom, g.element.style.scrollPaddingBottom = g.scrollPaddingBottom, x.current = null)
    }), K = ne((g, T) => {
        const H = Math.max(0, Math.ceil(T));
        let M = x.current;
        if (M && !M.element.isConnected && (C(), M = null), H === 0) {
            C();
            return
        }
        if (M && M.element !== g && (C(), M = null), !M) {
            const X = Yt(g);
            M = {
                element: g,
                overflowAnchor: g.style.overflowAnchor,
                paddingBottom: g.style.paddingBottom,
                scrollPaddingBottom: g.style.scrollPaddingBottom,
                computedPaddingBottom: Number.parseFloat(X.paddingBottom) || 0,
                computedScrollPaddingBottom: Number.parseFloat(X.scrollPaddingBottom) || 0
            }, x.current = M
        }
        g.style.overflowAnchor = "none", g.style.paddingBottom = `${M.computedPaddingBottom+H}px`, g.style.scrollPaddingBottom = `${M.computedScrollPaddingBottom+Nt}px`
    }), D = ne((g, T) => {
        const H = nt(g).matchMedia ? .("(prefers-reduced-motion: reduce)") ? .matches ? "auto" : "smooth";
        g.scrollTo({
            top: T,
            behavior: H
        })
    }), O = ne(() => {
        p.current = !1, m.current = null
    });
    s.useEffect(() => {
        if (!o || !r) {
            u.current = null, C(), S.cancel();
            return
        }
        if (!c) {
            C();
            return
        }
        const g = rt(c),
            T = nt(c),
            H = T.visualViewport;
        let M = null,
            X = 0,
            z = 0,
            ae = -1;
        const V = b => {
                c.style.setProperty(cn.keyboardInset, `${Math.max(0,Math.ceil(b))}px`)
            },
            L = () => {
                u.current = null, M = null, V(0), C(), S.cancel(), I.clear()
            },
            le = T.scrollX,
            A = T.scrollY,
            $ = () => y !== !0 || a || !u.current || yt(T) == null ? !1 : T.scrollX !== le || T.scrollY !== A ? (T.scrollTo({
                left: le,
                top: A,
                behavior: "instant"
            }), !0) : !1;
        let Z = null;
        const q = () => {
                Z ? .(), Z = null
            },
            re = (b, h) => {
                q();
                const v = b.getBoundingClientRect();
                Z = Gn(b, (h.top + h.bottom - v.top - v.bottom) / 2)
            },
            j = () => {
                q();
                const b = u.current;
                if (a || !b || !He(c, b)) {
                    V(0), C();
                    return
                }
                $();
                const h = yt(T);
                if (!h) {
                    V(0), C();
                    return
                }
                V(Math.max(0, T.innerHeight - h.bottom));
                const v = ws(b, c);
                if (!v) {
                    C();
                    return
                }
                const Re = v.getBoundingClientRect(),
                    ue = Math.min(Re.bottom, h.bottom),
                    ge = Math.max(0, Re.bottom - h.bottom);
                K(v, ge > 0 ? ge + fs : 0);
                const Ie = Math.max(0, v.scrollHeight - v.clientHeight);
                if (Ie <= 0) return;
                const fe = Math.max(Re.top, h.top) + Nt,
                    J = ue - Nt;
                if (J <= fe) return;
                const Ce = b.getBoundingClientRect(),
                    Ne = v.scrollTop + (Ce.top + Ce.bottom - fe - J) / 2,
                    Ye = Math.round(ke(Ne, 0, Ie));
                if (M === v && Math.abs(X - Ye) <= 1) {
                    if (ae >= 0) {
                        const je = v.scrollTop;
                        if (Math.abs(je - Ye) <= 1) return;
                        if (je !== ae) {
                            ae = je;
                            return
                        }
                    }
                } else {
                    const je = M === v ? z + 1 : 1;
                    if (M = v, X = Ye, z = je, ae = -1, je <= ps) {
                        S.request(j);
                        return
                    }
                }
                M = v, X = Ye, z = 0, ae = v.scrollTop, D(v, Ye)
            },
            G = () => {
                S.request(j)
            },
            pe = () => {
                let b = ds;
                const h = () => {
                    j(), b -= 1, b > 0 && I.start(ln, h)
                };
                I.start(ln, h)
            },
            oe = b => {
                if (a) return !1;
                const h = Et(b);
                return !h || !He(c, h) ? !1 : (u.current !== h && (M = null), u.current = h, !0)
            },
            se = b => {
                if (P.current = !1, q(), !oe(wt(b))) {
                    L();
                    return
                }
                yt(T) != null && pe(), G()
            },
            he = b => {
                if (!P.current) {
                    if (oe(b.relatedTarget)) {
                        const h = u.current,
                            v = yt(T);
                        h && v && re(h, v), G();
                        return
                    }
                    L()
                }
            },
            be = () => {
                (u.current || oe(vt(g))) && G()
            },
            ye = [];
        H && ye.push(Ze(H, "resize", be), Ze(H, "scroll", be));
        const ve = () => {
                $() && G()
            },
            xe = () => {
                S.cancel(), I.clear(), M = null
            };
        return ye.push(Ze(g, "focusin", se, !0), Ze(g, "focusout", he, !0), Ze(T, "scroll", ve), Ze(g, "pointerdown", xe, !0)), oe(vt(g)) && G(), () => {
            ye.forEach(b => b()), q(), L(), c.style.removeProperty(cn.keyboardInset)
        }
    }, [D, S, I, y, o, a, r, C, c, K]);
    const me = ne(g => {
            const T = g.touches[0];
            p.current = !1, m.current = {
                x: T.clientX,
                y: T.clientY
            }
        }),
        W = ne(g => {
            const T = g.touches[0],
                H = m.current;
            !T || !H || p.current || (Math.abs(T.clientX - H.x) > un || Math.abs(T.clientY - H.y) > un) && (p.current = !0)
        }),
        U = ne(g => {
            if (!r || !o || a || !c || !m.current || p.current) {
                O();
                return
            }
            const T = g.changedTouches[0] ? ? g.touches[0],
                H = c.getRootNode(),
                M = wt(g.nativeEvent),
                X = T ? Ss(H, T.clientX, T.clientY) : null;
            if (X === jn) {
                O();
                return
            }
            const z = T && (X ? ? hs(M));
            if (z && (!He(c, z.focusTarget) || !He(c, z.clickTarget))) {
                O();
                return
            }
            if (z) {
                const {
                    clickTarget: ae,
                    focusTarget: V
                } = z, L = nt(V);
                if (L.visualViewport && L.visualViewport.scale !== 1) {
                    O();
                    return
                }
                if (vt(rt(V)) === V && (!L.visualViewport || yt(L) != null)) {
                    O();
                    return
                }
                g.preventDefault(), P.current = !0;
                try {
                    vs(V)
                } finally {
                    P.current = !1
                }
                ys(ae, T), O();
                return
            }
            O()
        }),
        N = s.useMemo(() => ({
            onTouchStart: me,
            onTouchMove: W,
            onTouchEnd: U,
            onTouchCancel: O
        }), [U, W, me, O]);
    return (0, Se.jsx)(Yn.Provider, {
        value: N,
        children: t
    })
}

function dn(e) {
    if (e.isContentEditable) return !0;
    const t = nt(e);
    return e instanceof t.HTMLTextAreaElement || e instanceof t.HTMLInputElement && gs.has(e.type) ? !e.matches(":disabled") : !1
}

function Et(e) {
    if (!ut(e)) return null;
    if (dn(e)) return e.isContentEditable ? ms(e) : e;
    const t = e.closest("label") ? .control ? ? null;
    return ut(t) && dn(t) ? t : null
}

function hs(e) {
    if (!ut(e)) return null;
    const t = Et(e);
    return t ? {
        focusTarget: t,
        clickTarget: e
    } : null
}

function ms(e) {
    let t = e;
    for (; t.parentElement ? .isContentEditable;) t = t.parentElement;
    return t
}

function Ss(e, t, n) {
    const r = pt(e, t, n);
    if (ut(r)) {
        const o = Et(r);
        if (o) return {
            focusTarget: o,
            clickTarget: r
        }
    }
    if (wr(r) || r ? .closest("label") != null) return jn;
    for (const [o, y] of [
            [0, fn],
            [0, -16],
            [fn, 0],
            [-16, 0]
        ]) {
        const d = Et(pt(e, t + o, n + y));
        if (d) return {
            focusTarget: d,
            clickTarget: d
        }
    }
    return null
}

function ys(e, t) {
    const n = nt(e),
        r = n.PointerEvent ? ? n.MouseEvent;
    e.dispatchEvent(new r("click", {
        bubbles: !0,
        cancelable: !0,
        clientX: t.clientX,
        clientY: t.clientY,
        detail: 1,
        view: n
    }))
}

function vs(e) {
    const t = vt(rt(e)) === e,
        n = Gn(e, -2e3);
    try {
        t && e.blur(), e.focus({
            preventScroll: !0
        })
    } finally {
        n()
    }
}

function Gn(e, t) {
    const n = e.style.opacity,
        r = e.style.transform,
        o = e.style.transition;
    return e.style.transition = "none", e.style.opacity = "0", e.style.transform = `translateY(${t}px)`, () => {
        e.style.opacity = n, e.style.transform = r, e.style.transition = o
    }
}

function ws(e, t) {
    const n = Bt(e);
    return et(n, t, "vertical") ? ? et(n, t, "vertical", !0)
}

function yt(e) {
    const t = e.visualViewport;
    if (!t || t.scale !== 1 || e.innerHeight - t.height <= us) return null;
    const n = Math.max(0, t.offsetTop);
    return {
        top: n,
        bottom: Math.min(e.innerHeight, n + t.height)
    }
}
export {
    Is as C, Ds as S, bo as _, Xs as a, Os as b, Vs as c, ks as d, Fs as f, Ro as g, To as h, Ks as i, Ls as l, Ns as m, js as n, Bs as o, _s as p, Ws as r, Ys as s, Gs as t, Hs as u, ke as v, Es as w, Ms as x, As as y
};