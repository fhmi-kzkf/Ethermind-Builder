import {
    o as $t
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as Yt,
    n as Kt
} from "./vendor-react-Fx2PtaaM.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new t.Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "c87c58be-417a-4c6e-9e99-9287dec15b02", t._sentryDebugIdIdentifier = "sentry-dbid-c87c58be-417a-4c6e-9e99-9287dec15b02")
    })()
} catch {}

function ft() {
    return typeof window < "u"
}

function Z(t) {
    return kt(t) ? (t.nodeName || "").toLowerCase() : "#document"
}

function D(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}

function I(t) {
    var e;
    return (e = (kt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}

function kt(t) {
    return ft() ? t instanceof Node || t instanceof D(t).Node : !1
}

function W(t) {
    return ft() ? t instanceof Element || t instanceof D(t).Element : !1
}

function K(t) {
    return ft() ? t instanceof HTMLElement || t instanceof D(t).HTMLElement : !1
}

function Ct(t) {
    return !ft() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof D(t).ShadowRoot
}

function at(t) {
    const {
        overflow: e,
        overflowX: n,
        overflowY: i,
        display: o
    } = V(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && o !== "inline" && o !== "contents"
}

function Ut(t) {
    return /^(table|td|th)$/.test(Z(t))
}

function ut(t) {
    try {
        if (t.matches(":popover-open")) return !0
    } catch {}
    try {
        return t.matches(":modal")
    } catch {
        return !1
    }
}
var Gt = /transform|translate|scale|rotate|perspective|filter/,
    Jt = /paint|layout|strict|content/,
    U = t => !!t && t !== "none",
    gt;

function vt(t) {
    const e = W(t) ? V(t) : t;
    return U(e.transform) || U(e.translate) || U(e.scale) || U(e.rotate) || U(e.perspective) || !xt() && (U(e.backdropFilter) || U(e.filter)) || Gt.test(e.willChange || "") || Jt.test(e.contain || "")
}

function Qt(t) {
    let e = G(t);
    for (; K(e) && !et(e);) {
        if (vt(e)) return e;
        if (ut(e)) return null;
        e = G(e)
    }
    return null
}

function xt() {
    return gt == null && (gt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), gt
}

function et(t) {
    return /^(html|body|#document)$/.test(Z(t))
}

function V(t) {
    return D(t).getComputedStyle(t)
}

function dt(t) {
    return W(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}

function G(t) {
    if (Z(t) === "html") return t;
    const e = t.assignedSlot || t.parentNode || Ct(t) && t.host || I(t);
    return Ct(e) ? e.host : e
}

function Wt(t) {
    const e = G(t);
    return et(e) ? (t.ownerDocument || t).body : K(e) && at(e) ? e : Wt(e)
}

function nt(t, e, n) {
    var i;
    e === void 0 && (e = []), n === void 0 && (n = !0);
    const o = Wt(t),
        r = o === ((i = t.ownerDocument) == null ? void 0 : i.body),
        s = D(o);
    if (r) {
        const c = wt(s);
        return e.concat(s, s.visualViewport || [], at(o) ? o : [], c && n ? nt(c) : [])
    } else return e.concat(o, nt(o, [], n))
}

function wt(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}
var Zt = ["top", "right", "bottom", "left"],
    q = Math.min,
    N = Math.max,
    rt = Math.round,
    it = Math.floor,
    B = t => ({
        x: t,
        y: t
    }),
    te = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

function Vt(t, e, n) {
    return N(t, q(e, n))
}

function z(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Y(t) {
    return t.split("-")[0]
}

function tt(t) {
    return t.split("-")[1]
}

function bt(t) {
    return t === "x" ? "y" : "x"
}

function Rt(t) {
    return t === "y" ? "height" : "width"
}

function k(t) {
    const e = t[0];
    return e === "t" || e === "b" ? "y" : "x"
}

function At(t) {
    return bt(k(t))
}

function ee(t, e, n) {
    n === void 0 && (n = !1);
    const i = tt(t),
        o = At(t),
        r = Rt(o);
    let s = o === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return e.reference[r] > e.floating[r] && (s = st(s)), [s, st(s)]
}

function ne(t) {
    const e = st(t);
    return [yt(t), e, yt(e)]
}

function yt(t) {
    return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start")
}
var St = ["left", "right"],
    Et = ["right", "left"],
    ie = ["top", "bottom"],
    oe = ["bottom", "top"];

function re(t, e, n) {
    switch (t) {
        case "top":
        case "bottom":
            return n ? e ? Et : St : e ? St : Et;
        case "left":
        case "right":
            return e ? ie : oe;
        default:
            return []
    }
}

function se(t, e, n, i) {
    const o = tt(t);
    let r = re(Y(t), n === "start", i);
    return o && (r = r.map(s => s + "-" + o), e && (r = r.concat(r.map(yt)))), r
}

function st(t) {
    const e = Y(t);
    return te[e] + t.slice(e.length)
}

function ce(t) {
    var e, n, i, o;
    return {
        top: (e = t.top) != null ? e : 0,
        right: (n = t.right) != null ? n : 0,
        bottom: (i = t.bottom) != null ? i : 0,
        left: (o = t.left) != null ? o : 0
    }
}

function Ht(t) {
    return typeof t != "number" ? ce(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}

function ct(t) {
    const {
        x: e,
        y: n,
        width: i,
        height: o
    } = t;
    return {
        width: i,
        height: o,
        top: n,
        left: e,
        right: e + i,
        bottom: n + o,
        x: e,
        y: n
    }
}

function Lt(t, e, n) {
    let {
        reference: i,
        floating: o
    } = t;
    const r = k(e),
        s = At(e),
        c = Rt(s),
        l = Y(e),
        a = r === "y",
        u = i.x + i.width / 2 - o.width / 2,
        d = i.y + i.height / 2 - o.height / 2,
        g = i[c] / 2 - o[c] / 2;
    let f;
    switch (l) {
        case "top":
            f = {
                x: u,
                y: i.y - o.height
            };
            break;
        case "bottom":
            f = {
                x: u,
                y: i.y + i.height
            };
            break;
        case "right":
            f = {
                x: i.x + i.width,
                y: d
            };
            break;
        case "left":
            f = {
                x: i.x - o.width,
                y: d
            };
            break;
        default:
            f = {
                x: i.x,
                y: i.y
            }
    }
    const m = tt(e);
    return m && (f[s] += g * (m === "end" ? 1 : -1) * (n && a ? -1 : 1)), f
}
async function le(t, e) {
    var n;
    e === void 0 && (e = {});
    const {
        x: i,
        y: o,
        platform: r,
        rects: s,
        elements: c,
        strategy: l
    } = t, {
        boundary: a = "clippingAncestors",
        rootBoundary: u = "viewport",
        elementContext: d = "floating",
        altBoundary: g = !1,
        padding: f = 0
    } = z(e, t), m = Ht(f), h = c[g ? d === "floating" ? "reference" : "floating" : d], p = ct(await r.getClippingRect({
        element: (n = await (r.isElement == null ? void 0 : r.isElement(h))) == null || n ? h : h.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
        boundary: a,
        rootBoundary: u,
        strategy: l
    })), w = d === "floating" ? {
        x: i,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, y = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), b = await (r.isElement == null ? void 0 : r.isElement(y)) && await (r.getScale == null ? void 0 : r.getScale(y)) || {
        x: 1,
        y: 1
    }, x = ct(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: c,
        rect: w,
        offsetParent: y,
        strategy: l
    }) : w);
    return {
        top: (p.top - x.top + m.top) / b.y,
        bottom: (x.bottom - p.bottom + m.bottom) / b.y,
        left: (p.left - x.left + m.left) / b.x,
        right: (x.right - p.right + m.right) / b.x
    }
}
var fe = 50,
    ae = async (t, e, n) => {
        const {
            placement: i = "bottom",
            strategy: o = "absolute",
            middleware: r = [],
            platform: s
        } = n, c = s.detectOverflow ? s : { ...s,
            detectOverflow: le
        }, l = await (s.isRTL == null ? void 0 : s.isRTL(e));
        let a = await s.getElementRects({
                reference: t,
                floating: e,
                strategy: o
            }),
            {
                x: u,
                y: d
            } = Lt(a, i, l),
            g = i,
            f = 0;
        const m = {};
        for (let h = 0; h < r.length; h++) {
            const p = r[h];
            if (!p) continue;
            const {
                name: w,
                fn: y
            } = p, {
                x: b,
                y: x,
                data: A,
                reset: v
            } = await y({
                x: u,
                y: d,
                initialPlacement: i,
                placement: g,
                strategy: o,
                middlewareData: m,
                rects: a,
                platform: c,
                elements: {
                    reference: t,
                    floating: e
                }
            });
            u = b ? ? u, d = x ? ? d, m[w] = { ...m[w],
                ...A
            }, v && f < fe && (f++, typeof v == "object" && (v.placement && (g = v.placement), v.rects && (a = v.rects === !0 ? await s.getElementRects({
                reference: t,
                floating: e,
                strategy: o
            }) : v.rects), {
                x: u,
                y: d
            } = Lt(a, g, l)), h = -1)
        }
        return {
            x: u,
            y: d,
            placement: g,
            strategy: o,
            middlewareData: m
        }
    },
    ue = t => ({
        name: "arrow",
        options: t,
        async fn(e) {
            const {
                x: n,
                y: i,
                placement: o,
                rects: r,
                platform: s,
                elements: c,
                middlewareData: l
            } = e, {
                element: a,
                padding: u = 0
            } = z(t, e) || {};
            if (a == null) return {};
            const d = Ht(u),
                g = {
                    x: n,
                    y: i
                },
                f = At(o),
                m = Rt(f),
                h = await s.getDimensions(a),
                p = f === "y",
                w = p ? "top" : "left",
                y = p ? "bottom" : "right",
                b = p ? "clientHeight" : "clientWidth",
                x = r.reference[m] + r.reference[f] - g[f] - r.floating[m],
                A = g[f] - r.reference[f],
                v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
            let R = v ? v[b] : 0;
            (!R || !await (s.isElement == null ? void 0 : s.isElement(v))) && (R = c.floating[b] || r.floating[m]);
            const C = x / 2 - A / 2,
                M = R / 2 - h[m] / 2 - 1,
                L = q(d[w], M),
                H = q(d[y], M),
                j = R - h[m] - H,
                P = R / 2 - h[m] / 2 + C,
                T = Vt(L, P, j),
                $ = !l.arrow && tt(o) != null && P !== T && r.reference[m] / 2 - (P < L ? L : H) - h[m] / 2 < 0,
                S = $ ? P < L ? P - L : P - j : 0;
            return {
                [f]: g[f] + S,
                data: {
                    [f]: T,
                    centerOffset: P - T - S,
                    ...$ && {
                        alignmentOffset: S
                    }
                },
                reset: $
            }
        }
    }),
    de = function(t) {
        return t === void 0 && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
                var n, i;
                const {
                    placement: o,
                    middlewareData: r,
                    rects: s,
                    initialPlacement: c,
                    platform: l,
                    elements: a
                } = e, {
                    mainAxis: u = !0,
                    crossAxis: d = !0,
                    fallbackPlacements: g,
                    fallbackStrategy: f = "bestFit",
                    fallbackAxisSideDirection: m = "none",
                    flipAlignment: h = !0,
                    ...p
                } = z(t, e);
                if ((n = r.arrow) != null && n.alignmentOffset) return {};
                const w = Y(o),
                    y = k(c),
                    b = Y(c) === c,
                    x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)),
                    A = g || (b || !h ? [st(c)] : ne(c)),
                    v = m !== "none";
                !g && v && A.push(...se(c, h, m, x));
                const R = [c, ...A],
                    C = await l.detectOverflow(e, p),
                    M = [];
                let L = ((i = r.flip) == null ? void 0 : i.overflows) || [];
                if (u && M.push(C[w]), d) {
                    const T = ee(o, s, x);
                    M.push(C[T[0]], C[T[1]])
                }
                if (L = [...L, {
                        placement: o,
                        overflows: M
                    }], !M.every(T => T <= 0)) {
                    var H, j;
                    const T = (((H = r.flip) == null ? void 0 : H.index) || 0) + 1,
                        $ = R[T];
                    if ($ && (!(d === "alignment" && y !== k($)) || L.every(F => k(F.placement) === y ? F.overflows[0] > 0 : !0))) return {
                        data: {
                            index: T,
                            overflows: L
                        },
                        reset: {
                            placement: $
                        }
                    };
                    let S = (j = L.filter(F => F.overflows[0] <= 0).sort((F, O) => F.overflows[1] - O.overflows[1])[0]) == null ? void 0 : j.placement;
                    if (!S) switch (f) {
                        case "bestFit":
                            {
                                var P;
                                const F = (P = L.filter(O => {
                                    if (v) {
                                        const _ = k(O.placement);
                                        return _ === y || _ === "y"
                                    }
                                    return !0
                                }).map(O => [O.placement, O.overflows.filter(_ => _ > 0).reduce((_, X) => _ + X, 0)]).sort((O, _) => O[1] - _[1])[0]) == null ? void 0 : P[0];F && (S = F);
                                break
                            }
                        case "initialPlacement":
                            S = c
                    }
                    if (o !== S) return {
                        reset: {
                            placement: S
                        }
                    }
                }
                return {}
            }
        }
    };

function Pt(t, e) {
    return {
        top: t.top - e.height,
        right: t.right - e.width,
        bottom: t.bottom - e.height,
        left: t.left - e.width
    }
}

function Tt(t) {
    return Zt.some(e => t[e] >= 0)
}
var me = function(t) {
        return t === void 0 && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
                const {
                    rects: n,
                    platform: i
                } = e, {
                    strategy: o = "referenceHidden",
                    ...r
                } = z(t, e);
                switch (o) {
                    case "referenceHidden":
                        {
                            const s = Pt(await i.detectOverflow(e, { ...r,
                                elementContext: "reference"
                            }), n.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: s,
                                    referenceHidden: Tt(s)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const s = Pt(await i.detectOverflow(e, { ...r,
                                altBoundary: !0
                            }), n.floating);
                            return {
                                data: {
                                    escapedOffsets: s,
                                    escaped: Tt(s)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    Nt = new Set(["left", "top"]);
async function ge(t, e) {
    const {
        placement: n,
        platform: i,
        elements: o
    } = t, r = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)), s = Y(n), c = tt(n), l = k(n) === "y", a = Nt.has(s) ? -1 : 1, u = r && l ? -1 : 1, d = z(e, t);
    let {
        mainAxis: g,
        crossAxis: f,
        alignmentAxis: m
    } = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return c && typeof m == "number" && (f = c === "end" ? m * -1 : m), l ? {
        x: f * u,
        y: g * a
    } : {
        x: g * a,
        y: f * u
    }
}
var he = function(t) {
        return t === void 0 && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
                var n, i;
                const {
                    x: o,
                    y: r,
                    placement: s,
                    middlewareData: c
                } = e, l = await ge(e, t);
                return s === ((n = c.offset) == null ? void 0 : n.placement) && (i = c.arrow) != null && i.alignmentOffset ? {} : {
                    x: o + l.x,
                    y: r + l.y,
                    data: { ...l,
                        placement: s
                    }
                }
            }
        }
    },
    pe = function(t) {
        return t === void 0 && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
                const {
                    x: n,
                    y: i,
                    placement: o,
                    platform: r
                } = e, {
                    mainAxis: s = !0,
                    crossAxis: c = !1,
                    limiter: l = {
                        fn: y => {
                            let {
                                x: b,
                                y: x
                            } = y;
                            return {
                                x: b,
                                y: x
                            }
                        }
                    },
                    ...a
                } = z(t, e), u = {
                    x: n,
                    y: i
                }, d = await r.detectOverflow(e, a), g = k(o), f = bt(g);
                let m = u[f],
                    h = u[g];
                const p = (y, b) => Vt(b + d[y === "y" ? "top" : "left"], b, b - d[y === "y" ? "bottom" : "right"]);
                s && (m = p(f, m)), c && (h = p(g, h));
                const w = l.fn({ ...e,
                    [f]: m,
                    [g]: h
                });
                return { ...w,
                    data: {
                        x: w.x - n,
                        y: w.y - i,
                        enabled: {
                            [f]: s,
                            [g]: c
                        }
                    }
                }
            }
        }
    },
    we = function(t) {
        return t === void 0 && (t = {}), {
            options: t,
            fn(e) {
                var n, i;
                const {
                    x: o,
                    y: r,
                    placement: s,
                    rects: c,
                    middlewareData: l
                } = e, {
                    offset: a = 0,
                    mainAxis: u = !0,
                    crossAxis: d = !0
                } = z(t, e), g = {
                    x: o,
                    y: r
                }, f = k(s), m = bt(f);
                let h = g[m],
                    p = g[f];
                const w = z(a, e),
                    y = typeof w == "number" ? {
                        mainAxis: w,
                        crossAxis: 0
                    } : {
                        mainAxis: (n = w.mainAxis) != null ? n : 0,
                        crossAxis: (i = w.crossAxis) != null ? i : 0
                    };
                if (u) {
                    const A = m === "y" ? "height" : "width",
                        v = c.reference[m] - c.floating[A] + y.mainAxis,
                        R = c.reference[m] + c.reference[A] - y.mainAxis;
                    h < v ? h = v : h > R && (h = R)
                }
                if (d) {
                    var b, x;
                    const A = m === "y" ? "width" : "height",
                        v = Nt.has(Y(s)),
                        R = c.reference[f] - c.floating[A] + (v && ((b = l.offset) == null ? void 0 : b[f]) || 0) + (v ? 0 : y.crossAxis),
                        C = c.reference[f] + c.reference[A] + (v ? 0 : ((x = l.offset) == null ? void 0 : x[f]) || 0) - (v ? y.crossAxis : 0);
                    p < R ? p = R : p > C && (p = C)
                }
                return {
                    [m]: h,
                    [f]: p
                }
            }
        }
    },
    ye = function(t) {
        return t === void 0 && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
                const {
                    placement: n,
                    rects: i,
                    platform: o,
                    elements: r
                } = e, {
                    apply: s = () => {},
                    ...c
                } = z(t, e), l = await o.detectOverflow(e, c), a = Y(n), u = tt(n), d = k(n) === "y", {
                    width: g,
                    height: f
                } = i.floating;
                let m, h;
                a === "top" || a === "bottom" ? (m = a, h = u === (await (o.isRTL == null ? void 0 : o.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (h = a, m = u === "end" ? "top" : "bottom");
                const p = f - l.top - l.bottom,
                    w = g - l.left - l.right,
                    y = q(f - l[m], p),
                    b = q(g - l[h], w),
                    x = e.middlewareData.shift,
                    A = !x;
                let v = y,
                    R = b;
                x != null && x.enabled.x && (R = w), x != null && x.enabled.y && (v = p), A && !u && (d ? R = g - 2 * N(l.left, l.right) : v = f - 2 * N(l.top, l.bottom)), await s({ ...e,
                    availableWidth: R,
                    availableHeight: v
                });
                const C = await o.getDimensions(r.floating);
                return g !== C.width || f !== C.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Bt(t) {
    const e = V(t);
    let n = parseFloat(e.width) || 0,
        i = parseFloat(e.height) || 0;
    const o = K(t),
        r = o ? t.offsetWidth : n,
        s = o ? t.offsetHeight : i,
        c = rt(n) !== r || rt(i) !== s;
    return c && (n = r, i = s), {
        width: n,
        height: i,
        $: c
    }
}

function Ot(t) {
    return W(t) ? t : t.contextElement
}

function Q(t) {
    const e = Ot(t);
    if (!K(e)) return B(1);
    const n = e.getBoundingClientRect(),
        {
            width: i,
            height: o,
            $: r
        } = Bt(e);
    let s = (r ? rt(n.width) : n.width) / i,
        c = (r ? rt(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
        x: s,
        y: c
    }
}
var ve = B(0);

function zt(t) {
    const e = D(t);
    return !xt() || !e.visualViewport ? ve : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}

function xe(t, e, n) {
    return e === void 0 && (e = !1), !!n && e && n === D(t)
}

function J(t, e, n, i) {
    e === void 0 && (e = !1), n === void 0 && (n = !1);
    const o = t.getBoundingClientRect(),
        r = Ot(t);
    let s = B(1);
    e && (i ? W(i) && (s = Q(i)) : s = Q(t));
    const c = xe(r, n, i) ? zt(r) : B(0);
    let l = (o.left + c.x) / s.x,
        a = (o.top + c.y) / s.y,
        u = o.width / s.x,
        d = o.height / s.y;
    if (r && i) {
        const g = D(r),
            f = W(i) ? D(i) : i;
        let m = g,
            h = wt(m);
        for (; h && f !== m;) {
            const p = Q(h),
                w = h.getBoundingClientRect(),
                y = V(h),
                b = w.left + (h.clientLeft + parseFloat(y.paddingLeft)) * p.x,
                x = w.top + (h.clientTop + parseFloat(y.paddingTop)) * p.y;
            l *= p.x, a *= p.y, u *= p.x, d *= p.y, l += b, a += x, m = D(h), h = wt(m)
        }
    }
    return ct({
        width: u,
        height: d,
        x: l,
        y: a
    })
}

function mt(t, e) {
    const n = dt(t).scrollLeft;
    return e ? e.left + n : J(I(t)).left + n
}

function It(t, e) {
    const n = t.getBoundingClientRect();
    return {
        x: n.left + e.scrollLeft - mt(t, n),
        y: n.top + e.scrollTop
    }
}

function be(t) {
    let {
        elements: e,
        rect: n,
        offsetParent: i,
        strategy: o
    } = t;
    const r = o === "fixed",
        s = I(i),
        c = e ? ut(e.floating) : !1;
    if (i === s || c && r) return n;
    let l = {
            scrollLeft: 0,
            scrollTop: 0
        },
        a = B(1);
    const u = B(0),
        d = K(i);
    if ((d || !r) && ((Z(i) !== "body" || at(s)) && (l = dt(i)), d)) {
        const f = J(i);
        a = Q(i), u.x = f.x + i.clientLeft, u.y = f.y + i.clientTop
    }
    const g = s && !d && !r ? It(s, l) : B(0);
    return {
        width: n.width * a.x,
        height: n.height * a.y,
        x: n.x * a.x - l.scrollLeft * a.x + u.x + g.x,
        y: n.y * a.y - l.scrollTop * a.y + u.y + g.y
    }
}

function Re(t) {
    return t.getClientRects ? Array.from(t.getClientRects()) : []
}

function Ae(t) {
    const e = dt(t),
        n = t.ownerDocument.body,
        i = N(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
        o = N(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
    let r = -e.scrollLeft + mt(t);
    const s = -e.scrollTop;
    return V(n).direction === "rtl" && (r += N(t.clientWidth, n.clientWidth) - i), {
        width: i,
        height: o,
        x: r,
        y: s
    }
}
var Oe = 25;

function Ce(t, e, n) {
    n === void 0 && (n = "viewport");
    const i = n === "layoutViewport",
        o = D(t),
        r = I(t),
        s = o.visualViewport;
    let c = r.clientWidth,
        l = r.clientHeight,
        a = 0,
        u = 0;
    if (s) {
        const d = !xt() || e === "fixed";
        i ? d || (a = -s.offsetLeft, u = -s.offsetTop) : (c = s.width, l = s.height, d && (a = s.offsetLeft, u = s.offsetTop))
    }
    if (mt(r) <= 0) {
        const d = r.ownerDocument,
            g = d.body,
            f = getComputedStyle(g),
            m = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0,
            h = Math.abs(r.clientWidth - g.clientWidth - m),
            p = getComputedStyle(r).scrollbarGutter === "stable both-edges" ? h / 2 : h;
        p <= Oe && (c -= p)
    }
    return {
        width: c,
        height: l,
        x: a,
        y: u
    }
}

function Se(t, e) {
    const n = J(t, !0, e === "fixed"),
        i = n.top + t.clientTop,
        o = n.left + t.clientLeft,
        r = Q(t);
    return {
        width: t.clientWidth * r.x,
        height: t.clientHeight * r.y,
        x: o * r.x,
        y: i * r.y
    }
}

function Dt(t, e, n) {
    let i;
    if (e === "viewport" || e === "layoutViewport") i = Ce(t, n, e);
    else if (e === "document") i = Ae(I(t));
    else if (W(e)) i = Se(e, n);
    else {
        const o = zt(t);
        i = {
            x: e.x - o.x,
            y: e.y - o.y,
            width: e.width,
            height: e.height
        }
    }
    return ct(i)
}

function Ee(t, e) {
    const n = e.get(t);
    if (n) return n;
    let i = nt(t, [], !1).filter(c => W(c) && Z(c) !== "body"),
        o = null;
    const r = V(t).position === "fixed";
    let s = r ? G(t) : t;
    for (; W(s) && !et(s);) {
        const c = V(s),
            l = vt(s),
            a = o ? o.position : r ? "fixed" : "";
        !l && (a === "fixed" || a === "absolute" && c.position === "static") ? i = i.filter(u => u !== s) : o = c, s = G(s)
    }
    return e.set(t, i), i
}

function Le(t) {
    let {
        element: e,
        boundary: n,
        rootBoundary: i,
        strategy: o
    } = t;
    const r = [...n === "clippingAncestors" ? ut(e) ? [] : Ee(e, this._c) : [].concat(n), i],
        s = Dt(e, r[0], o);
    let c = s.top,
        l = s.right,
        a = s.bottom,
        u = s.left;
    for (let d = 1; d < r.length; d++) {
        const g = Dt(e, r[d], o);
        c = N(g.top, c), l = q(g.right, l), a = q(g.bottom, a), u = N(g.left, u)
    }
    return {
        width: l - u,
        height: a - c,
        x: u,
        y: c
    }
}

function Pe(t) {
    const {
        width: e,
        height: n
    } = Bt(t);
    return {
        width: e,
        height: n
    }
}

function Te(t, e, n) {
    const i = K(e),
        o = I(e),
        r = n === "fixed",
        s = J(t, !0, r, e);
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = B(0);
    if ((i || !r) && ((Z(e) !== "body" || at(o)) && (c = dt(e)), i)) {
        const u = J(e, !0, r, e);
        l.x = u.x + e.clientLeft, l.y = u.y + e.clientTop
    }!i && o && (l.x = mt(o));
    const a = o && !i && !r ? It(o, c) : B(0);
    return {
        x: s.left + c.scrollLeft - l.x - a.x,
        y: s.top + c.scrollTop - l.y - a.y,
        width: s.width,
        height: s.height
    }
}

function ht(t) {
    return V(t).position === "static"
}

function Mt(t, e) {
    if (!K(t) || V(t).position === "fixed") return null;
    if (e) return e(t);
    let n = t.offsetParent;
    return I(t) === n && (n = n.ownerDocument.body), n
}

function jt(t, e) {
    const n = D(t);
    if (ut(t)) return n;
    if (!K(t)) {
        let o = G(t);
        for (; o && !et(o);) {
            if (W(o) && !ht(o)) return o;
            o = G(o)
        }
        return n
    }
    let i = Mt(t, e);
    for (; i && Ut(i) && ht(i);) i = Mt(i, e);
    return i && et(i) && ht(i) && !vt(i) ? n : i || Qt(t) || n
}
var De = async function(t) {
    const e = this.getOffsetParent || jt,
        n = this.getDimensions,
        i = await n(t.floating);
    return {
        reference: Te(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: i.width,
            height: i.height
        }
    }
};

function Me(t) {
    return V(t).direction === "rtl"
}
var _e = {
    convertOffsetParentRelativeRectToViewportRelativeRect: be,
    getDocumentElement: I,
    getClippingRect: Le,
    getOffsetParent: jt,
    getElementRects: De,
    getClientRects: Re,
    getDimensions: Pe,
    getScale: Q,
    isElement: W,
    isRTL: Me
};

function Xt(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
}

function Fe(t, e, n) {
    let i = null,
        o;
    const r = I(t);

    function s() {
        var u;
        clearTimeout(o), (u = i) == null || u.disconnect(), i = null
    }

    function c(u, d) {
        u === void 0 && (u = !1), d === void 0 && (d = 1), s();
        const g = t.getBoundingClientRect(),
            {
                left: f,
                top: m,
                width: h,
                height: p
            } = g;
        if (u || e(), !h || !p) return;
        const w = it(m),
            y = it(r.clientWidth - (f + h)),
            b = it(r.clientHeight - (m + p)),
            x = it(f),
            A = {
                rootMargin: -w + "px " + -y + "px " + -b + "px " + -x + "px",
                threshold: N(0, q(1, d)) || 1
            };
        let v = !0;

        function R(C) {
            const M = C[0].intersectionRatio;
            if (!Xt(g, t.getBoundingClientRect())) return c();
            if (M !== d) {
                if (!v) return c();
                M ? c(!1, M) : o = setTimeout(() => {
                    c(!1, 1e-7)
                }, 1e3)
            }
            v = !1
        }
        try {
            i = new IntersectionObserver(R, { ...A,
                root: r.ownerDocument
            })
        } catch {
            i = new IntersectionObserver(R, A)
        }
        i.observe(t)
    }
    const l = D(t),
        a = () => c(n);
    return l.addEventListener("resize", a), c(!0), () => {
        l.removeEventListener("resize", a), s()
    }
}

function qe(t, e, n, i) {
    i === void 0 && (i = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: r = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: c = typeof IntersectionObserver == "function",
        animationFrame: l = !1
    } = i, a = Ot(t), u = o || r ? [...a ? nt(a) : [], ...e ? nt(e) : []] : [];
    u.forEach(w => {
        o && w.addEventListener("scroll", n), r && w.addEventListener("resize", n)
    });
    const d = a && c ? Fe(a, n, r) : null;
    let g = -1,
        f = null;
    s && (f = new ResizeObserver(w => {
        let [y] = w;
        y && y.target === a && f && e && (f.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
            var b;
            (b = f) == null || b.observe(e)
        })), n()
    }), a && !l && f.observe(a), e && f.observe(e));
    let m, h = l ? J(t) : null;
    l && p();

    function p() {
        const w = J(t);
        h && !Xt(h, w) && n(), h = w, m = requestAnimationFrame(p)
    }
    return n(), () => {
        var w;
        u.forEach(y => {
            o && y.removeEventListener("scroll", n), r && y.removeEventListener("resize", n)
        }), d ? .(), (w = f) == null || w.disconnect(), f = null, l && cancelAnimationFrame(m)
    }
}
var $e = he,
    ke = pe,
    We = de,
    Ve = ye,
    He = me,
    _t = ue,
    Ne = we,
    Be = (t, e, n) => {
        const i = new Map,
            o = n ? ? {},
            r = { ..._e,
                ...o.platform,
                _c: i
            };
        return ae(t, e, { ...o,
            platform: r
        })
    },
    E = $t(Yt(), 1),
    ze = $t(Kt(), 1),
    ot = typeof document < "u" ? E.useLayoutEffect : function() {};

function lt(t, e) {
    if (t === e) return !0;
    if (typeof t != typeof e) return !1;
    if (typeof t == "function" && t.toString() === e.toString()) return !0;
    let n, i, o;
    if (t && e && typeof t == "object") {
        if (Array.isArray(t)) {
            if (n = t.length, n !== e.length) return !1;
            for (i = n; i-- !== 0;)
                if (!lt(t[i], e[i])) return !1;
            return !0
        }
        if (o = Object.keys(t), n = o.length, n !== Object.keys(e).length) return !1;
        for (i = n; i-- !== 0;)
            if (!{}.hasOwnProperty.call(e, o[i])) return !1;
        for (i = n; i-- !== 0;) {
            const r = o[i];
            if (!(r === "_owner" && t.$$typeof) && !lt(t[r], e[r])) return !1
        }
        return !0
    }
    return t !== t && e !== e
}

function qt(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Ft(t, e) {
    const n = qt(t);
    return Math.round(e * n) / n
}

function pt(t) {
    const e = E.useRef(t);
    return ot(() => {
        e.current = t
    }), e
}

function Ye(t) {
    t === void 0 && (t = {});
    const {
        placement: e = "bottom",
        strategy: n = "absolute",
        middleware: i = [],
        platform: o,
        elements: {
            reference: r,
            floating: s
        } = {},
        transform: c = !0,
        whileElementsMounted: l,
        open: a
    } = t, [u, d] = E.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: e,
        middlewareData: {},
        isPositioned: !1
    }), [g, f] = E.useState(i);
    lt(g, i) || f(i);
    const [m, h] = E.useState(null), [p, w] = E.useState(null), y = E.useCallback(O => {
        O !== v.current && (v.current = O, h(O))
    }, []), b = E.useCallback(O => {
        O !== R.current && (R.current = O, w(O))
    }, []), x = r || m, A = s || p, v = E.useRef(null), R = E.useRef(null), C = E.useRef(u), M = l != null, L = pt(l), H = pt(o), j = pt(a), P = E.useCallback(() => {
        if (!v.current || !R.current) return;
        const O = {
            placement: e,
            strategy: n,
            middleware: g
        };
        H.current && (O.platform = H.current), Be(v.current, R.current, O).then(_ => {
            const X = { ..._,
                isPositioned: j.current !== !1
            };
            T.current && !lt(C.current, X) && (C.current = X, ze.flushSync(() => {
                d(X)
            }))
        })
    }, [g, e, n, H, j]);
    ot(() => {
        a === !1 && C.current.isPositioned && (C.current.isPositioned = !1, d(O => ({ ...O,
            isPositioned: !1
        })))
    }, [a]);
    const T = E.useRef(!1);
    ot(() => (T.current = !0, () => {
        T.current = !1
    }), []), ot(() => {
        if (x && (v.current = x), A && (R.current = A), x && A) {
            if (L.current) return L.current(x, A, P);
            P()
        }
    }, [x, A, P, L, M]);
    const $ = E.useMemo(() => ({
            reference: v,
            floating: R,
            setReference: y,
            setFloating: b
        }), [y, b]),
        S = E.useMemo(() => ({
            reference: x,
            floating: A
        }), [x, A]),
        F = E.useMemo(() => {
            const O = {
                position: n,
                left: 0,
                top: 0
            };
            if (!S.floating) return O;
            const _ = Ft(S.floating, u.x),
                X = Ft(S.floating, u.y);
            return c ? { ...O,
                transform: "translate(" + _ + "px, " + X + "px)",
                ...qt(S.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: _,
                top: X
            }
        }, [n, c, S.floating, u.x, u.y]);
    return E.useMemo(() => ({ ...u,
        update: P,
        refs: $,
        elements: S,
        floatingStyles: F
    }), [u, P, $, S, F])
}
var Ie = t => {
        function e(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: t,
            fn(n) {
                const {
                    element: i,
                    padding: o
                } = typeof t == "function" ? t(n) : t;
                return i && e(i) ? i.current != null ? _t({
                    element: i.current,
                    padding: o
                }).fn(n) : {} : i ? _t({
                    element: i,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    Ke = (t, e) => {
        const n = $e(t);
        return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
        }
    },
    Ue = (t, e) => {
        const n = ke(t);
        return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
        }
    },
    Ge = (t, e) => ({
        fn: Ne(t).fn,
        options: [t, e]
    }),
    Je = (t, e) => {
        const n = We(t);
        return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
        }
    },
    Qe = (t, e) => {
        const n = Ve(t);
        return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
        }
    },
    Ze = (t, e) => {
        const n = He(t);
        return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
        }
    },
    tn = (t, e) => {
        const n = Ie(t);
        return {
            name: n.name,
            fn: n.fn,
            options: [t, e]
        }
    };
export {
    kt as A, Z as C, W as D, D as E, Ct as M, K as O, V as S, G as T, Ht as _, Ke as a, ct as b, Ye as c, Vt as d, z as f, Rt as g, At as h, Ge as i, at as j, et as k, qe as l, tt as m, Je as n, Ue as o, it as p, Ze as r, Qe as s, tn as t, _e as u, Y as v, nt as w, rt as x, k as y
};