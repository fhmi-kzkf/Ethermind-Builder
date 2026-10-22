import {
    o as Bo
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as Gi,
    n as Yi,
    r as $i
} from "./vendor-react-Fx2PtaaM.js";
import {
    n as Xi,
    r as zi
} from "./vendor-sync-store-hJwz-_Wy.js";
import {
    A as vt,
    At as Te,
    C as jo,
    D as st,
    Dt as es,
    E as tn,
    Et as St,
    F as te,
    G as qi,
    I as ue,
    K as Ft,
    M as Ee,
    N as Qi,
    O as _o,
    Ot as Jt,
    P as bt,
    Q as Vo,
    R as ts,
    St as yt,
    T as So,
    Tt as Le,
    U as Ji,
    V as ns,
    _t as Fe,
    bt as Re,
    dt as nn,
    et as Zi,
    gt as lt,
    ht as De,
    it as os,
    j as xt,
    k as Kt,
    kt as ft,
    lt as go,
    mt as ee,
    ot as ho,
    pt as _e,
    q as _t,
    rt as rs,
    tt as Po,
    ut as Ve,
    vt as ea,
    w as Ke,
    wt as Nt,
    xt as vr,
    yt as q
} from "./vendor-base-ui-field-BdT_EZJM.js";
import {
    A as ta,
    C as it,
    D as Oe,
    E as Je,
    M as Wo,
    O as ke,
    S as Hn,
    T as ss,
    _ as na,
    a as oa,
    c as ra,
    d as sa,
    f as ia,
    g as aa,
    h as ca,
    i as ua,
    j as la,
    k as wn,
    l as br,
    m as Uo,
    n as fa,
    o as da,
    p as mo,
    s as pa,
    v as qt,
    x as Rr,
    y as yr
} from "./vendor-floating-ui-98f9kiPk.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "77b7a422-2939-4f27-9d74-58f6d7c6f5fc", e._sentryDebugIdIdentifier = "sentry-dbid-77b7a422-2939-4f27-9d74-58f6d7c6f5fc")
    })()
} catch {}

function dl(e) {
    return Re(e.defaultTagName ? ? "div", e, e)
}
var B = $i(),
    Ko = zi(),
    ga = Bo(Xi(), 1),
    $e = Bo(Yi(), 1),
    s = Bo(Gi(), 1),
    To = [],
    wo = void 0;

function ha() {
    return wo
}

function ma(e) {
    To.push(e)
}

function Go(e) {
    const t = (n, o) => {
        const r = ft(va).current;
        let i;
        try {
            wo = r;
            for (const c of To) c.before(r);
            i = e(n, o);
            for (const c of To) c.after(r);
            r.didInitialize = !0
        } finally {
            wo = void 0
        }
        return i
    };
    return t.displayName = e.displayName || e.name, t
}

function is(e) {
    return s.forwardRef(Go(e))
}

function va() {
    return {
        didInitialize: !1
    }
}
var as = s.createContext(void 0);

function on(e) {
    const t = s.useContext(as);
    if (t === void 0 && !e) throw new Error(Te(72));
    return t
}

function ba() {
    return typeof navigator > "u" ? {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
    } : {
        userAgent: navigator.userAgent,
        platform: navigator.platform ? ? "",
        maxTouchPoints: navigator.maxTouchPoints ? ? 0
    }
}
var {
    userAgent: Ra,
    platform: ya,
    maxTouchPoints: Ea
} = ba(), Ln = Ra.toLowerCase(), Vt = ya.toLowerCase(), Bn = /^i(os$|p)/.test(Vt) || Vt === "macintel" && Ea > 1, Er = "android", Dn = Vt === Er || Ln.includes(Er), Yo = !Bn && Vt.startsWith("mac"), pl = Vt.startsWith("win"), gl = !Dn && /^(linux|chrome os)/.test(Vt), xa = Yo || Bn, Pt = typeof CSS < "u" && !!CSS.supports ? .("-webkit-backdrop-filter:none"), hl = !Pt && Ln.includes("firefox"), ml = !Pt && Ln.includes("chrom"), cs = xa, $o = /jsdom|happydom/.test(Ln);

function Ue(e) {
    e.preventDefault(), e.stopPropagation()
}

function Ca(e) {
    return "nativeEvent" in e
}

function us(e) {
    return e.pointerType === "" && e.isTrusted ? !0 : Dn && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType
}

function Xo(e) {
    return $o ? !1 : !Dn && e.width === 0 && e.height === 0 || Dn && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch"
}

function Et(e, t) {
    const n = ["mouse", "pen"];
    return t || n.push("", void 0), n.includes(e)
}

function Sa(e) {
    const t = e.type;
    return t === "click" || t === "mousedown" || t === "keydown" || t === "keyup"
}
var Pa = "data-base-ui-focusable",
    Ta = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])",
    ls = "ArrowLeft",
    fs = "ArrowRight",
    wa = "ArrowUp",
    Ia = "ArrowDown";

function Fn(e, t) {
    if (!Oe(e)) return !1;
    const n = e;
    if (t.hasElement(n)) return !n.hasAttribute("data-trigger-disabled");
    for (const [, o] of t.entries())
        if (ee(o, n)) return !o.hasAttribute("data-trigger-disabled");
    return !1
}

function vo(e, t) {
    if (t == null) return !1;
    if ("composedPath" in e) return e.composedPath().includes(t);
    const n = e;
    return n.target != null && t.contains(n.target)
}

function Oa(e) {
    return e.matches("html,body")
}

function jn(e) {
    return ke(e) && e.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")
}

function Ma(e) {
    return e ? .closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${Ta}`) != null
}

function Io(e) {
    return e ? e.getAttribute("role") === "combobox" && jn(e) : !1
}

function ka(e) {
    if (!e || $o) return !0;
    try {
        return e.matches(":focus-visible")
    } catch {
        return !0
    }
}

function Oo(e) {
    return e ? e.hasAttribute("data-base-ui-focusable") ? e : e.querySelector("[data-base-ui-focusable]") || e : null
}

function Aa(e, t) {
    return t != null && !Et(t) ? 0 : typeof e == "function" ? e() : e
}

function Ct(e, t, n) {
    const o = Aa(e, n);
    return typeof o == "number" ? o : o ? .[t]
}

function xr(e) {
    return typeof e == "function" ? e() : e
}

function ds(e, t) {
    return t || e === "click" || e === "mousedown"
}

function Da(e) {
    return e ? .includes("mouse") && e !== "mousedown"
}
var ps = s.createContext({
    hasProvider: !1,
    timeoutMs: 0,
    delayRef: {
        current: 0
    },
    initialDelayRef: {
        current: 0
    },
    timeout: new lt,
    currentIdRef: {
        current: null
    },
    currentContextRef: {
        current: null
    }
});

function Fa(e, t) {
    e.current = t.current
}

function Na(e) {
    const {
        children: t,
        delay: n,
        timeoutMs: o = 0
    } = e, r = s.useRef(n), i = s.useRef(n), c = s.useRef(null), f = s.useRef(null), u = Fe();
    return q(() => {
        if (i.current = n, !c.current) {
            r.current = n;
            return
        }
        r.current = {
            open: Ct(r.current, "open"),
            close: Ct(n, "close")
        }
    }, [n, c, r, i]), (0, B.jsx)(ps.Provider, {
        value: s.useMemo(() => ({
            hasProvider: !0,
            delayRef: r,
            initialDelayRef: i,
            currentIdRef: c,
            timeoutMs: o,
            currentContextRef: f,
            timeout: u
        }), [o, u]),
        children: t
    })
}

function Ha(e, t = {
    open: !1
}) {
    const {
        open: n
    } = t, o = "rootStore" in e ? e.rootStore : e, r = o.useState("floatingId"), {
        currentIdRef: i,
        delayRef: c,
        timeoutMs: f,
        initialDelayRef: u,
        currentContextRef: a,
        hasProvider: l,
        timeout: m
    } = s.useContext(ps), [d, v] = s.useState(!1), b = s.useRef(n);
    return q(() => {
        b.current = n
    }, [n]), q(() => {
        function g() {
            a.current ? .setIsInstantPhase(!1), i.current = null, a.current = null, c.current = u.current, m.clear()
        }
        if (i.current && !n && i.current === r) {
            if (v(!1), f) {
                const p = r;
                return m.start(f, () => {
                    o.select("open") || i.current && i.current !== p || g()
                }), () => {
                    (b.current || i.current !== p) && m.clear()
                }
            }
            g()
        }
    }, [n, r, i, c, f, u, a, m, o]), q(() => {
        if (!n) return;
        const g = a.current,
            p = i.current;
        m.clear(), a.current = {
            onOpenChange: o.setOpen,
            setIsInstantPhase: v
        }, i.current = r, c.current = {
            open: 0,
            close: Ct(u.current, "close")
        }, p !== null && p !== r ? (v(!0), g ? .setIsInstantPhase(!0), g ? .onOpenChange(!1, ue(rs))) : (v(!1), g ? .setIsInstantPhase(!1))
    }, [n, r, o, i, c, u, a, m]), q(() => () => {
        if (i.current === r) {
            if (a.current = null, !b.current) return;
            i.current = null, Fa(c, u), m.clear()
        }
    }, [a, i, c, r, u, m]), s.useMemo(() => ({
        hasProvider: l,
        delayRef: c,
        isInstantPhase: d
    }), [l, c, d])
}

function me(e, t, n, o) {
    return e.addEventListener(t, n, o), () => {
        e.removeEventListener(t, n, o)
    }
}

function ot(...e) {
    return () => {
        for (let t = 0; t < e.length; t += 1) {
            const n = e[t];
            n && n()
        }
    }
}

function Ae(e) {
    const t = ft(La, e).current;
    return t.next = e, q(t.effect), t
}

function La(e) {
    const t = {
        current: e,
        next: e,
        effect: () => {
            t.current = t.next
        }
    };
    return t
}
var gs = {
        clipPath: "inset(50%)",
        overflow: "hidden",
        whiteSpace: "nowrap",
        border: 0,
        padding: 0,
        width: 1,
        height: 1,
        margin: -1
    },
    Ba = { ...gs,
        position: "fixed",
        top: 0,
        left: 0
    },
    vl = { ...gs,
        position: "absolute"
    },
    Qe = s.forwardRef(function(t, n) {
        const [o, r] = s.useState();
        q(() => {
            cs && Pt && r("button")
        }, []);
        const i = {
            tabIndex: 0,
            role: o
        };
        return (0, B.jsx)("span", { ...t,
            ref: n,
            style: Ba,
            "aria-hidden": o ? void 0 : !0,
            ...i,
            "data-base-ui-focus-guard": ""
        })
    });

function Rn(e, t, n) {
    return Math.floor(e / t) !== n
}

function Dt(e, t) {
    return t < 0 || t >= e.length
}

function In(e, t) {
    return Be(e.current, {
        disabledIndices: t
    })
}

function Mo(e, t) {
    return Be(e.current, {
        decrement: !0,
        startingIndex: e.current.length,
        disabledIndices: t
    })
}

function Be(e, {
    startingIndex: t = -1,
    decrement: n = !1,
    disabledIndices: o,
    amount: r = 1
} = {}) {
    let i = t;
    do i += n ? -r : r; while (i >= 0 && i <= e.length - 1 && Wt(e, i, o));
    return i
}

function bl(e, {
    event: t,
    orientation: n,
    loopFocus: o,
    onLoop: r,
    rtl: i,
    cols: c,
    disabledIndices: f,
    minIndex: u,
    maxIndex: a,
    prevIndex: l,
    stopEvent: m = !1
}) {
    let d = l,
        v;
    if (t.key === "ArrowUp" ? v = "up" : t.key === "ArrowDown" && (v = "down"), v) {
        const b = [],
            g = [];
        let p = !1,
            y = 0; {
            let C = null,
                I = -1;
            e.forEach((M, F) => {
                if (M == null) return;
                y += 1;
                const w = M.closest('[role="row"]');
                w && (p = !0), (w !== C || I === -1) && (C = w, I += 1, b[I] = []), b[I].push(F), g[F] = I
            })
        }
        let h = !1,
            R = 0;
        if (p)
            for (const C of b) {
                const I = C.length;
                I > R && (R = I), I !== c && (h = !0)
            }
        const x = h && y < e.length,
            S = R || c,
            E = C => {
                if (!h || l === -1) return;
                const I = g[l];
                if (I == null) return;
                const M = b[I].indexOf(l),
                    F = C === "up" ? -1 : 1;
                for (let w = I + F, N = 0; N < b.length; N += 1, w += F) {
                    if (w < 0 || w >= b.length) {
                        if (!o || x) return;
                        if (w = w < 0 ? b.length - 1 : 0, r) {
                            const k = Math.min(M, b[w].length - 1),
                                D = r(t, l, b[w][k] ? ? b[w][0]);
                            w = g[D] ? ? w
                        }
                    }
                    const O = b[w];
                    for (let k = Math.min(M, O.length - 1); k >= 0; k -= 1) {
                        const D = O[k];
                        if (!Wt(e, D, f)) return D
                    }
                }
            },
            P = C => {
                if (!x || l === -1) return;
                const I = l % S,
                    M = C === "up" ? -S : S,
                    F = a - a % S,
                    w = mo(a / S) + 1;
                for (let N = l - I + M, O = 0; O < w; O += 1, N += M) {
                    if (N < 0 || N > a) {
                        if (!o) return;
                        N = N < 0 ? F : 0
                    }
                    const k = Math.min(N + S - 1, a);
                    for (let D = Math.min(N + I, k); D >= N; D -= 1)
                        if (!Wt(e, D, f)) return D
                }
            };
        m && Ue(t);
        const T = E(v) ? ? P(v);
        if (T !== void 0) d = T;
        else if (l === -1) d = v === "up" ? a : u;
        else if (d = Be(e, {
                startingIndex: l,
                amount: S,
                decrement: v === "up",
                disabledIndices: f
            }), o) {
            if (v === "up" && (l - S < u || d < 0)) {
                const C = l % S,
                    I = a % S,
                    M = a - (I - C);
                I === C ? d = a : d = I > C ? M : M - S, r && (d = r(t, l, d))
            }
            v === "down" && l + S > a && (d = Be(e, {
                startingIndex: l % S - S,
                amount: S,
                disabledIndices: f
            }), r && (d = r(t, l, d)))
        }
        Dt(e, d) && (d = l)
    }
    if (n === "both") {
        const b = mo(l / c);
        t.key === (i ? "ArrowLeft" : "ArrowRight") && (m && Ue(t), l % c !== c - 1 ? (d = Be(e, {
            startingIndex: l,
            disabledIndices: f
        }), o && Rn(d, c, b) && (d = Be(e, {
            startingIndex: l - l % c - 1,
            disabledIndices: f
        }), r && (d = r(t, l, d)))) : o && (d = Be(e, {
            startingIndex: l - l % c - 1,
            disabledIndices: f
        }), r && (d = r(t, l, d))), Rn(d, c, b) && (d = l)), t.key === (i ? "ArrowRight" : "ArrowLeft") && (m && Ue(t), l % c !== 0 ? (d = Be(e, {
            startingIndex: l,
            decrement: !0,
            disabledIndices: f
        }), o && Rn(d, c, b) && (d = Be(e, {
            startingIndex: l + (c - l % c),
            decrement: !0,
            disabledIndices: f
        }), r && (d = r(t, l, d)))) : o && (d = Be(e, {
            startingIndex: l + (c - l % c),
            decrement: !0,
            disabledIndices: f
        }), r && (d = r(t, l, d))), Rn(d, c, b) && (d = l));
        const g = mo(a / c) === b;
        Dt(e, d) && (o && g ? (d = t.key === (i ? "ArrowRight" : "ArrowLeft") ? a : Be(e, {
            startingIndex: l - l % c - 1,
            disabledIndices: f
        }), r && (d = r(t, l, d))) : d = l)
    }
    return d
}

function Wt(e, t, n) {
    if (typeof n == "function" ? n(t) : n ? .includes(t) ? ? !1) return !0;
    const o = e[t];
    return o ? !_n(o) || o.matches(":disabled") ? !0 : !n && (o.hasAttribute("disabled") || o.getAttribute("aria-disabled") === "true") : !1
}

function ja(e) {
    return e.visibility === "hidden" || e.visibility === "collapse"
}

function _n(e, t = e ? Hn(e) : null) {
    return !e || !e.isConnected || !t || ja(t) ? !1 : typeof e.checkVisibility == "function" ? e.checkVisibility() : t.display !== "none" && t.display !== "contents"
}
var _a = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';

function Va(e) {
    const t = e.assignedSlot;
    if (t) return t;
    if (e.parentElement) return e.parentElement;
    const n = e.getRootNode();
    return Wo(n) ? n.host : null
}

function ko(e) {
    for (const t of Array.from(e.children))
        if (it(t) === "summary") return t;
    return null
}

function Wa(e, t) {
    const n = ko(t);
    return !!n && (e === n || ee(n, e))
}

function hs(e) {
    const t = e ? it(e) : "";
    return e != null && e.matches(_a) && (t !== "summary" || e.parentElement != null && it(e.parentElement) === "details" && ko(e.parentElement) === e) && (t !== "details" || ko(e) == null) && (t !== "input" || e.type !== "hidden")
}

function ms(e) {
    if (!hs(e) || !e.isConnected || e.matches(":disabled")) return !1;
    for (let t = e; t; t = Va(t)) {
        const n = t !== e,
            o = it(t) === "slot";
        if (t.hasAttribute("inert") || n && it(t) === "details" && !t.open && !Wa(e, t) || t.hasAttribute("hidden") || !o && !Ua(t, n)) return !1
    }
    return !0
}

function Ua(e, t) {
    const n = Hn(e);
    return t ? n.display !== "none" : _n(e, n)
}

function vs(e) {
    const t = e.tabIndex;
    if (t < 0) {
        const n = it(e);
        if (n === "details" || n === "audio" || n === "video" || ke(e) && e.isContentEditable) return 0
    }
    return t
}

function bo(e) {
    if (it(e) !== "input") return null;
    const t = e;
    return t.type === "radio" && t.name !== "" ? t : null
}

function Ka(e, t) {
    const n = bo(e);
    if (!n) return !0;
    const o = t.find(r => {
        const i = bo(r);
        return i ? .name === n.name && i.form === n.form && i.checked
    });
    return o ? o === n : t.find(r => {
        const i = bo(r);
        return i ? .name === n.name && i.form === n.form
    }) === n
}

function bs(e) {
    if (ke(e) && it(e) === "slot") {
        const t = e.assignedElements({
            flatten: !0
        });
        if (t.length > 0) return t
    }
    return ke(e) && e.shadowRoot ? Array.from(e.shadowRoot.children) : Array.from(e.children)
}

function Rs(e, t) {
    bs(e).forEach(n => {
        hs(n) && t.push(n), Rs(n, t)
    })
}

function ys(e, t, n) {
    bs(e).forEach(o => {
        ke(o) && o.matches(t) && n.push(o), ys(o, t, n)
    })
}

function zo(e) {
    return ms(e) && vs(e) >= 0
}

function Es(e) {
    const t = [];
    return Rs(e, t), t.filter(ms)
}

function rn(e) {
    const t = Es(e);
    return t.filter(n => vs(n) >= 0 && Ka(n, t))
}

function xs(e, t) {
    const n = rn(e),
        o = n.length;
    if (o === 0) return;
    const r = _e(Ee(e)),
        i = n.indexOf(r);
    return n[i === -1 ? t === 1 ? 0 : o - 1 : i + t]
}

function sn(e) {
    return xs(Ee(e).body, 1) || e
}

function Vn(e) {
    return xs(Ee(e).body, -1) || e
}

function Cs(e, t) {
    if (!e) return null;
    const n = rn(Ee(e).body),
        o = n.length;
    if (o === 0) return null;
    const r = n.indexOf(e);
    return r === -1 ? null : n[(r + t + o) % o]
}

function Ss(e) {
    return Cs(e, 1)
}

function Ga(e) {
    return Cs(e, -1)
}

function rt(e, t) {
    const n = t || e.currentTarget,
        o = e.relatedTarget;
    return !o || !ee(n, o)
}

function Ps(e) {
    rn(e).forEach(t => {
        t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1")
    })
}

function Ao(e) {
    const t = [];
    ys(e, "[data-tabindex]", t), t.forEach(n => {
        const o = n.dataset.tabindex;
        delete n.dataset.tabindex, o ? n.setAttribute("tabindex", o) : n.removeAttribute("tabindex")
    })
}

function dt(e, t, n = !0) {
    return e.filter(o => o.parentId === t).flatMap(o => [...!n || o.context ? .open ? [o] : [], ...dt(e, o.id, n)])
}

function Cr(e, t) {
    let n = [],
        o = e.find(r => r.id === t) ? .parentId;
    for (; o;) {
        const r = e.find(i => i.id === o);
        o = r ? .parentId, r && (n = n.concat(r))
    }
    return n
}

function Zt(e) {
    return `data-base-ui-${e}`
}
var yn = 0;

function On(e, t = {}) {
    const {
        preventScroll: n = !1,
        sync: o = !1,
        shouldFocus: r
    } = t;
    cancelAnimationFrame(yn);

    function i() {
        r && !r() || e ? .focus({
            preventScroll: n
        })
    }
    if (o) return i(), St;
    const c = requestAnimationFrame(i);
    return yn = c, () => {
        yn === c && (cancelAnimationFrame(c), yn = 0)
    }
}
var Ro = {
        inert: new WeakMap,
        "aria-hidden": new WeakMap
    },
    Sr = "data-base-ui-inert",
    Do = {
        inert: new WeakSet,
        "aria-hidden": new WeakSet
    },
    Xt = new WeakMap,
    yo = 0;

function Ya(e) {
    return Do[e]
}

function Ts(e) {
    return e ? Wo(e) ? e.host : Ts(e.parentNode) : null
}
var Pr = (e, t) => t.map(n => {
        if (e.contains(n)) return n;
        const o = Ts(n);
        return e.contains(o) ? o : null
    }).filter(n => n != null),
    Tr = e => {
        const t = new Set;
        return e.forEach(n => {
            let o = n;
            for (; o && !t.has(o);) t.add(o), o = o.parentNode
        }), t
    },
    wr = (e, t, n) => {
        const o = [],
            r = i => {
                !i || n.has(i) || Array.from(i.children).forEach(c => {
                    it(c) !== "script" && (t.has(c) ? r(c) : o.push(c))
                })
            };
        return r(e), o
    };

function $a(e, t, n, o, {
    mark: r = !0
}) {
    let i = null;
    o ? i = "inert" : n && (i = "aria-hidden");
    let c = null,
        f = null;
    const u = Pr(t, e),
        a = r ? wr(t, Tr(u), new Set(u)) : [],
        l = [],
        m = [];
    if (i) {
        const d = Ro[i],
            v = Ya(i);
        f = v, c = d;
        const b = Pr(t, Array.from(t.querySelectorAll("[aria-live]"))),
            g = u.concat(b);
        wr(t, Tr(g), new Set(g)).forEach(p => {
            const y = p.getAttribute(i),
                h = y !== null && y !== "false",
                R = (d.get(p) || 0) + 1;
            d.set(p, R), l.push(p), R === 1 && h && v.add(p), h || p.setAttribute(i, i === "inert" ? "" : "true")
        })
    }
    return r && a.forEach(d => {
        const v = (Xt.get(d) || 0) + 1;
        Xt.set(d, v), m.push(d), v === 1 && d.setAttribute(Sr, "")
    }), yo += 1, () => {
        c && l.forEach(d => {
            const v = (c.get(d) || 0) - 1;
            c.set(d, v), v || (!f ? .has(d) && i && d.removeAttribute(i), f ? .delete(d))
        }), r && m.forEach(d => {
            const v = (Xt.get(d) || 0) - 1;
            Xt.set(d, v), v || d.removeAttribute(Sr)
        }), yo -= 1, yo || (Ro.inert = new WeakMap, Ro["aria-hidden"] = new WeakMap, Do.inert = new WeakSet, Do["aria-hidden"] = new WeakSet, Xt = new WeakMap)
    }
}

function Ir(e, t = {}) {
    const {
        ariaHidden: n = !1,
        inert: o = !1,
        mark: r = !0
    } = t, i = Ee(e[0]).body;
    return $a(e, i, n, o, {
        mark: r
    })
}
var Xa = {
        style: {
            transition: "none"
        }
    },
    ws = "data-base-ui-click-trigger",
    za = "data-base-ui-swipe-ignore",
    qa = "data-swipe-ignore",
    Rl = `[${za}]`,
    yl = `[${qa}]`,
    Is = {
        fallbackAxisSide: "none"
    },
    Wn = {
        fallbackAxisSide: "end"
    },
    Os = {
        clipPath: "inset(50%)",
        position: "fixed",
        top: 0,
        left: 0
    },
    Ms = s.createContext(null),
    ks = () => s.useContext(Ms),
    Qa = Zt("portal");

function As(e = {}) {
    const {
        ref: t,
        container: n,
        componentProps: o = Le,
        elementProps: r
    } = e, i = xt(), c = ks() ? .portalNode, [f, u] = s.useState(null), [a, l] = s.useState(null), m = te(g => {
        g !== null && l(g)
    }), d = s.useRef(null);
    q(() => {
        if (n === null) {
            d.current && (d.current = null, l(null), u(null));
            return
        }
        const g = (n && (ta(n) ? n : n.current)) ? ? c ? ? document.body;
        if (g == null) {
            d.current && (d.current = null, l(null), u(null));
            return
        }
        d.current !== g && (d.current = g, l(null), u(g))
    }, [n, c]);
    const v = Re("div", o, {
            ref: [t, m],
            props: [{
                id: i,
                [Qa]: ""
            }, r]
        }),
        b = f && v ? $e.createPortal(v, f) : null;
    return {
        node: a,
        nodeId: s.isValidElement(v) ? v.props.id : void 0,
        subtree: b
    }
}
var Un = s.forwardRef(function(t, n) {
    const {
        render: o,
        className: r,
        style: i,
        children: c,
        container: f,
        ...u
    } = t, {
        node: a,
        nodeId: l,
        subtree: m
    } = As({
        container: f,
        ref: n,
        componentProps: t,
        elementProps: u
    }), d = s.useRef(null), v = s.useRef(null), b = s.useRef(null), g = s.useRef(null), [p, y] = s.useState(null), h = s.useRef(!1), R = p ? .modal, x = p ? .open, S = !!p && !p.modal && p.open && !!a;
    s.useEffect(() => {
        if (!a || R) return;

        function P(T) {
            a && T.relatedTarget && rt(T) && (T.type === "focusin" ? h.current && (Ao(a), h.current = !1) : (Ps(a), h.current = !0))
        }
        return ot(me(a, "focusin", P, !0), me(a, "focusout", P, !0))
    }, [a, R]), q(() => {
        !a || x !== !0 || !h.current || (Ao(a), h.current = !1)
    }, [x, a]);
    const E = s.useMemo(() => ({
        beforeOutsideRef: d,
        afterOutsideRef: v,
        beforeInsideRef: b,
        afterInsideRef: g,
        portalNode: a,
        setFocusManagerState: y
    }), [a]);
    return (0, B.jsxs)(s.Fragment, {
        children: [m, (0, B.jsxs)(Ms.Provider, {
            value: E,
            children: [S && a && (0, B.jsx)(Qe, {
                "data-type": "outside",
                ref: d,
                onFocus: P => {
                    if (rt(P, a)) b.current ? .focus();
                    else {
                        const T = p ? p.domReference : null;
                        Vn(T) ? .focus()
                    }
                }
            }), S && a && (0, B.jsx)("span", {
                "aria-owns": l,
                style: Os
            }), a && $e.createPortal(c, a), S && a && (0, B.jsx)(Qe, {
                "data-type": "outside",
                ref: v,
                onFocus: P => {
                    if (rt(P, a)) g.current ? .focus();
                    else {
                        const T = p ? p.domReference : null;
                        sn(T) ? .focus(), p ? .closeOnFocusOut && p ? .onOpenChange(!1, ue("focus-out", P.nativeEvent))
                    }
                }
            })]
        })]
    })
});

function Ds() {
    const e = new Map;
    return {
        emit(t, n) {
            e.get(t) ? .forEach(o => o(n))
        },
        on(t, n) {
            e.has(t) || e.set(t, new Set), e.get(t).add(n)
        },
        off(t, n) {
            e.get(t) ? .delete(n)
        }
    }
}
var qo = class {
        nodesRef = {
            current: []
        };
        events = Ds();
        addNode(e) {
            this.nodesRef.current.push(e)
        }
        removeNode(e) {
            const t = this.nodesRef.current.findIndex(n => n === e);
            t !== -1 && this.nodesRef.current.splice(t, 1)
        }
    },
    Fs = s.createContext(null),
    Ns = s.createContext(null),
    pt = () => s.useContext(Fs) ? .id || null,
    ut = e => {
        const t = s.useContext(Ns);
        return e ? ? t
    };

function Kn(e) {
    const t = xt(),
        n = ut(e),
        o = pt();
    return q(() => {
        if (!t) return;
        const r = {
            id: t,
            parentId: o
        };
        return n ? .addNode(r), () => {
            n ? .removeNode(r)
        }
    }, [n, t, o]), t
}

function Gn(e) {
    const {
        children: t,
        id: n
    } = e, o = pt();
    return (0, B.jsx)(Fs.Provider, {
        value: s.useMemo(() => ({
            id: n,
            parentId: o
        }), [n, o]),
        children: t
    })
}

function Qo(e) {
    const {
        children: t,
        externalTree: n
    } = e, o = ft(() => n ? ? new qo).current;
    return (0, B.jsx)(Ns.Provider, {
        value: o,
        children: t
    })
}

function Ja(e, t) {
    const n = Je(De(e));
    return e instanceof n.KeyboardEvent ? "keyboard" : e instanceof n.FocusEvent ? t || "keyboard" : "pointerType" in e ? e.pointerType || "keyboard" : "touches" in e ? "touch" : e instanceof n.MouseEvent ? t || (e.detail === 0 ? "keyboard" : "mouse") : ""
}
var Za = 20,
    Rt = [];

function Jo() {
    Rt = Rt.filter(e => e.deref() ? .isConnected)
}

function Or(e) {
    Jo(), e && it(e) !== "body" && (Rt.push(new WeakRef(e)), Rt.length > Za && (Rt = Rt.slice(-20)))
}

function Mr() {
    return Jo(), Rt[Rt.length - 1] ? .deref()
}

function ec(e) {
    return e ? zo(e) ? e : rn(e)[0] || e : null
}

function kr(e) {
    if (e.hasAttribute("tabindex") && !e.hasAttribute("data-tabindex") || !e.getAttribute("role") ? .includes("dialog")) return;
    const t = Es(e).filter(o => {
            const r = o.getAttribute("data-tabindex") || "";
            return zo(o) || o.hasAttribute("data-tabindex") && !r.startsWith("-")
        }),
        n = e.getAttribute("tabindex");
    t.length === 0 ? n !== "0" && (e.setAttribute("tabindex", "0"), e.setAttribute("data-tabindex", "0")) : (n !== "-1" || e.hasAttribute("data-tabindex") && e.getAttribute("data-tabindex") !== "-1") && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"))
}

function Zo(e) {
    const {
        context: t,
        children: n,
        disabled: o = !1,
        initialFocus: r = !0,
        returnFocus: i = !0,
        restoreFocus: c = !1,
        modal: f = !0,
        closeOnFocusOut: u = !0,
        openInteractionType: a = "",
        nextFocusableElement: l,
        previousFocusableElement: m,
        beforeContentFocusGuardRef: d,
        externalTree: v,
        getInsideElements: b
    } = e, g = "rootStore" in t ? t.rootStore : t, p = g.useState("open"), y = g.useState("domReferenceElement"), h = g.useState("floatingElement"), {
        events: R,
        dataRef: x
    } = g.context, S = te(() => x.current.floatingContext ? .nodeId), E = r === !1, P = Io(y) && E, T = Ae(r), C = Ae(i), I = Ae(a), M = Ae(p), F = ut(v), w = ks(), N = s.useRef(!1), O = s.useRef(!1), k = s.useRef(!1), D = s.useRef(null), L = s.useRef(""), _ = s.useRef(""), ne = s.useRef(null), $ = s.useRef(null), H = Jt(ne, d, w ? .beforeInsideRef), Q = Jt($, w ? .afterInsideRef), z = Fe(), J = Fe(), Y = bt(), pe = w != null, V = Oo(h), U = te((G = V) => G ? rn(G) : []), re = te(() => b ? .().filter(G => G != null) ? ? []);
    s.useEffect(() => {
        if (o || !f) return;

        function G(le) {
            le.key === "Tab" && ee(V, _e(Ee(V))) && U().length === 0 && !P && Ue(le)
        }
        const ce = Ee(V);
        return me(ce, "keydown", G)
    }, [o, V, f, P, U]), s.useEffect(() => {
        if (o || !p) return;
        const G = Ee(V);

        function ce() {
            k.current = !1
        }

        function le(ie) {
            const oe = De(ie),
                ae = re(),
                Z = ee(h, oe) || ee(y, oe) || ee(w ? .portalNode, oe) || ae.some(de => de === oe || ee(de, oe));
            k.current = !Z, _.current = ie.pointerType || "keyboard", oe ? .closest("[data-base-ui-click-trigger]") && (O.current = !0, J.start(0, () => {
                O.current = !1
            }))
        }

        function ve() {
            _.current = "keyboard"
        }
        return ot(me(G, "pointerdown", le, !0), me(G, "pointerup", ce, !0), me(G, "pointercancel", ce, !0), me(G, "keydown", ve, !0), ce)
    }, [o, h, y, V, p, w, J, re]), s.useEffect(() => {
        if (o || !u) return;
        const G = Ee(V);

        function ce() {
            O.current = !0, J.start(0, () => {
                O.current = !1
            })
        }

        function le(ae) {
            const Z = De(ae);
            zo(Z) && (D.current = Z)
        }

        function ve(ae) {
            const Z = ae.relatedTarget,
                de = ae.currentTarget,
                ge = De(ae);
            f && Z == null && ge != null && ee(h, ge) && Or(ge), queueMicrotask(() => {
                const be = S(),
                    we = g.context.triggerElements,
                    A = re(),
                    j = Z ? .hasAttribute(Zt("focus-guard")) && [ne.current, $.current, w ? .beforeInsideRef.current, w ? .afterInsideRef.current, w ? .beforeOutsideRef.current, w ? .afterOutsideRef.current, vt(m), vt(l)].includes(Z),
                    he = !(ee(y, Z) || ee(h, Z) || ee(Z, h) || ee(w ? .portalNode, Z) || A.some(K => K === Z || ee(K, Z)) || we.hasMatchingElement(K => ee(K, Z)) || j || F && (dt(F.nodesRef.current, be).find(K => ee(K.context ? .elements.floating, Z) || ee(K.context ? .elements.domReference, Z)) || Cr(F.nodesRef.current, be).find(K => [K.context ? .elements.floating, Oo(K.context ? .elements.floating)].includes(Z) || K.context ? .elements.domReference === Z)));
                if (de === y && V && kr(V), c && de !== y && !_n(ge) && _e(G) === G.body) {
                    if (ke(V) && (V.focus(), c === "popup")) {
                        Y.request(() => {
                            V.focus()
                        });
                        return
                    }
                    const K = U(),
                        Ce = D.current,
                        Pe = (Ce && K.includes(Ce) ? Ce : null) || K[K.length - 1] || V;
                    ke(Pe) && Pe.focus()
                }
                if (x.current.insideReactTree) {
                    x.current.insideReactTree = !1;
                    return
                }
                const X = P && Z == null && _e(G) === G.body;
                (P || !f) && (Z || X) && he && !O.current && (P || Z !== Mr()) && (N.current = !0, g.setOpen(!1, ue(Ft, ae)))
            })
        }

        function ie() {
            k.current || (x.current.insideReactTree = !0, z.start(0, () => {
                x.current.insideReactTree = !1
            }))
        }
        const oe = ke(y) ? y : null;
        if (!(!h && !oe)) return ot(oe && me(oe, "focusout", ve), oe && me(oe, "pointerdown", ce), h && me(h, "focusin", le), h && me(h, "focusout", ve), h && w && me(h, "focusout", ie, !0))
    }, [o, y, h, V, f, F, w, g, u, c, U, P, S, x, z, J, Y, l, m, re]), s.useEffect(() => {
        if (o || !h || !p) return;
        const G = Array.from(w ? .portalNode ? .querySelectorAll(`[${Zt("portal")}]`) || []),
            ce = (F ? Cr(F.nodesRef.current, S()) : []).find(ae => Io(ae.context ? .elements.domReference || null)) ? .context ? .elements.domReference,
            le = [h, ...G, ne.current, $.current, w ? .beforeOutsideRef.current, w ? .afterOutsideRef.current, ...re(), ce, vt(m), vt(l), P ? y : null].filter(ae => ae != null),
            ve = Ir(le, {
                ariaHidden: f || P,
                mark: !1
            }),
            ie = [h, ...G].filter(ae => ae != null),
            oe = Ir(ie);
        return () => {
            oe(), ve()
        }
    }, [p, o, y, h, f, w, P, F, S, l, m, re]), q(() => {
        if (!p || o || !ke(V)) return;
        L.current = "", _.current = "";
        const G = Ee(V),
            ce = _e(G);
        queueMicrotask(() => {
            const le = T.current,
                ve = typeof le == "function" ? le(I.current || "") : le;
            if (ve === void 0 || ve === !1 || ee(V, ce)) return;
            let ie = null;
            const oe = () => (ie == null && (ie = U(V)), ie[0] || V);
            let ae;
            ve === !0 || ve === null ? ae = oe() : ae = vt(ve), ae = ae || oe();
            const Z = ee(V, _e(G));
            On(ae, {
                preventScroll: ae === V,
                shouldFocus() {
                    if (!M.current) return !1;
                    if (Z) return !0;
                    const de = _e(G);
                    return !(de !== ae && ee(V, de))
                }
            })
        })
    }, [o, p, V, U, T, I, M]), q(() => {
        if (o || !V) return;
        const G = Ee(V),
            ce = _e(G),
            le = I.current == null;
        Or(ce);

        function ve(oe) {
            if (oe.open || (L.current = Ja(oe.nativeEvent, _.current)), oe.reason === "trigger-hover" && oe.nativeEvent.type === "mouseleave" && (N.current = !0), oe.reason === "outside-press")
                if (oe.nested) N.current = !1;
                else if (us(oe.nativeEvent) || Xo(oe.nativeEvent)) N.current = !1;
            else {
                let ae = !1;
                Ee(V).createElement("div").focus({
                    get preventScroll() {
                        return ae = !0, !1
                    }
                }), ae ? N.current = !1 : N.current = !0
            }
        }
        R.on("openchange", ve);

        function ie(oe) {
            const ae = C.current;
            let Z = typeof ae == "function" ? ae(oe) : ae;
            if (Z === void 0 || Z === !1) return null;
            Z === null && (Z = !0);
            const de = y ? .isConnected ? y : null,
                ge = ce ? .isConnected && it(ce) !== "body" ? ce : null;
            let be = le ? ge || de : de || ge;
            return be || (be = Mr() || null), typeof Z == "boolean" ? be : vt(Z) || be || null
        }
        return () => {
            R.off("openchange", ve);
            const oe = _e(G),
                ae = re(),
                Z = ee(h, oe) || ae.some(we => we === oe || ee(we, oe)) || F && dt(F.nodesRef.current, S(), !1).some(we => ee(we.context ? .elements.floating, oe)),
                de = C.current,
                ge = L.current,
                be = ie(ge);
            queueMicrotask(() => {
                const we = ec(be),
                    A = typeof de != "boolean";
                if (de && !N.current && ke(we) && (!(!A && we !== oe && oe !== G.body) || Z)) {
                    const j = {
                        preventScroll: !0
                    };
                    ge === "keyboard" && (j.focusVisible = !0), we.focus(j)
                }
                N.current = !1
            })
        }
    }, [o, h, V, C, I, R, F, y, S, re]), q(() => {
        if (!Pt || p || !h) return;
        const G = _e(Ee(h));
        !ke(G) || !jn(G) || ee(h, G) && G.blur()
    }, [p, h]), q(() => {
        if (!(o || !w)) return w.setFocusManagerState({
            modal: f,
            closeOnFocusOut: u,
            open: p,
            onOpenChange: g.setOpen,
            domReference: y
        }), () => {
            w.setFocusManagerState(null)
        }
    }, [o, w, f, p, g, u, y]), q(() => {
        if (!(o || !V)) return kr(V), () => {
            queueMicrotask(Jo)
        }
    }, [o, V]);
    const se = !o && (f ? !P : !0) && (pe || f);
    return (0, B.jsxs)(s.Fragment, {
        children: [se && (0, B.jsx)(Qe, {
            "data-type": "inside",
            ref: H,
            onFocus: G => {
                if (f) {
                    const ce = U();
                    On(ce[ce.length - 1])
                } else w ? .portalNode && (N.current = !1, rt(G, w.portalNode) ? sn(y) ? .focus() : vt(m ? ? w.beforeOutsideRef) ? .focus())
            }
        }), n, se && (0, B.jsx)(Qe, {
            "data-type": "inside",
            ref: Q,
            onFocus: G => {
                f ? On(U()[0]) : w ? .portalNode && (u && (N.current = !0), rt(G, w.portalNode) ? Vn(y) ? .focus() : vt(l ? ? w.afterOutsideRef) ? .focus())
            }
        })]
    })
}

function an(e, t = {}) {
    const {
        enabled: n = !0,
        event: o = "click",
        toggle: r = !0,
        ignoreMouse: i = !1,
        stickIfOpen: c = !0,
        touchOpenDelay: f = 0,
        reason: u = nn
    } = t, a = "rootStore" in e ? e.rootStore : e, l = a.context.dataRef, m = s.useRef(void 0), d = bt(), v = Fe(), b = s.useMemo(() => {
        function g(y, h, R, x) {
            const S = ue(u, h, R);
            y && x === "touch" && f > 0 ? v.start(f, () => {
                a.setOpen(!0, S)
            }) : a.setOpen(y, S)
        }

        function p(y, h, R) {
            const x = l.current.openEvent,
                S = a.select("domReferenceElement") !== h;
            return y && S || !y || !r ? !0 : x && c ? !R(x.type) : !1
        }
        return {
            onPointerDown(y) {
                m.current = Et(y.pointerType, !0) && Xo(y.nativeEvent) ? "virtual" : y.pointerType
            },
            onMouseDown(y) {
                const h = m.current,
                    R = y.nativeEvent,
                    x = a.select("open");
                if (y.button !== 0 || o === "click" || Et(h, !0) && i) return;
                const S = p(x, y.currentTarget, T => T === "click" || T === "mousedown"),
                    E = De(R);
                if (jn(E)) {
                    g(S, R, E, h);
                    return
                }
                const P = y.currentTarget;
                d.request(() => {
                    g(S, R, P, h)
                })
            },
            onClick(y) {
                if (o === "mousedown-only") return;
                const h = m.current;
                if (o === "mousedown" && h) {
                    m.current = void 0;
                    return
                }
                Et(h, !0) && i || g(p(a.select("open"), y.currentTarget, R => R === "click" || R === "mousedown" || R === "keydown" || R === "keyup"), y.nativeEvent, y.currentTarget, h)
            },
            onKeyDown() {
                m.current = void 0
            }
        }
    }, [l, o, i, u, a, c, r, d, v, f]);
    return s.useMemo(() => n ? {
        reference: b
    } : Le, [n, b])
}

function tc(e, t) {
    let n = null,
        o = null,
        r = !1;
    return {
        contextElement: e || void 0,
        getBoundingClientRect() {
            const i = e ? .getBoundingClientRect() || {
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0
                },
                c = t.axis === "x" || t.axis === "both",
                f = t.axis === "y" || t.axis === "both",
                u = ["mouseenter", "mousemove"].includes(t.dataRef.current.openEvent ? .type || "") && t.pointerType !== "touch";
            let a = i.width,
                l = i.height,
                m = i.x,
                d = i.y;
            return n == null && t.x && c && (n = i.x - t.x), o == null && t.y && f && (o = i.y - t.y), m -= n || 0, d -= o || 0, a = 0, l = 0, !r || u ? (a = t.axis === "y" ? i.width : 0, l = t.axis === "x" ? i.height : 0, m = c && t.x != null ? t.x : m, d = f && t.y != null ? t.y : d) : r && !u && (l = t.axis === "x" ? i.height : l, a = t.axis === "y" ? i.width : a), r = !0, {
                width: a,
                height: l,
                x: m,
                y: d,
                top: d,
                right: m + a,
                bottom: d + l,
                left: m
            }
        }
    }
}

function Ar(e) {
    return e != null && e.clientX != null
}

function nc(e, t = {}) {
    const {
        enabled: n = !0,
        axis: o = "both"
    } = t, r = "rootStore" in e ? e.rootStore : e, i = r.useState("open"), c = r.useState("floatingElement"), f = r.useState("domReferenceElement"), u = r.context.dataRef, a = s.useRef(!1), l = s.useRef(null), [m, d] = s.useState(), [v, b] = s.useState([]), g = te(x => {
        r.set("positionReference", x)
    }), p = te((x, S, E) => {
        a.current || u.current.openEvent && !Ar(u.current.openEvent) || r.set("positionReference", tc(E ? ? f, {
            x,
            y: S,
            axis: o,
            dataRef: u,
            pointerType: m
        }))
    }), y = te(x => {
        i ? l.current || (p(x.clientX, x.clientY, x.currentTarget), b([])) : p(x.clientX, x.clientY, x.currentTarget)
    }), h = Et(m) ? c : i;
    s.useEffect(() => {
        if (!n) {
            g(f);
            return
        }
        if (!h) return;

        function x() {
            l.current ? .(), l.current = null
        }
        const S = Je(c);

        function E(P) {
            const T = De(P);
            ee(c, T) ? x() : p(P.clientX, P.clientY)
        }
        return !u.current.openEvent || Ar(u.current.openEvent) ? l.current = me(S, "mousemove", E) : g(f), x
    }, [h, n, c, u, f, r, p, g, v]), s.useEffect(() => () => {
        r.set("positionReference", null)
    }, [r]), s.useEffect(() => {
        n && !c && (a.current = !1)
    }, [n, c]), s.useEffect(() => {
        !n && i && (a.current = !0)
    }, [n, i]);
    const R = s.useMemo(() => {
        function x(S) {
            d(S.pointerType)
        }
        return {
            onPointerDown: x,
            onPointerEnter: x,
            onMouseMove: y,
            onMouseEnter: y
        }
    }, [y]);
    return s.useMemo(() => n ? {
        reference: R,
        trigger: R
    } : {}, [n, R])
}

function oc() {
    return !1
}

function rc(e) {
    return {
        escapeKey: typeof e == "boolean" ? e : e ? .escapeKey ? ? !1,
        outsidePress: typeof e == "boolean" ? e : e ? .outsidePress ? ? !0
    }
}

function cn(e, t = {}) {
    const {
        enabled: n = !0,
        escapeKey: o = !0,
        outsidePress: r = !0,
        outsidePressEvent: i = "sloppy",
        referencePress: c = oc,
        bubbles: f,
        externalTree: u
    } = t, a = "rootStore" in e ? e.rootStore : e, l = a.useState("open"), m = a.useState("floatingElement"), {
        dataRef: d
    } = a.context, v = ut(u), b = te(typeof r == "function" ? r : () => !1), g = typeof r == "function" ? b : r, p = g !== !1, y = te(() => i), {
        escapeKey: h,
        outsidePress: R
    } = rc(f), x = s.useRef(!1), S = s.useRef(!1), E = s.useRef(!1), P = s.useRef(!1), T = s.useRef(""), C = s.useRef(null), I = Fe(), M = Fe(), F = te(() => {
        M.clear(), d.current.insideReactTree = !1
    }), w = te(H => {
        const Q = d.current.floatingContext ? .nodeId;
        return (v ? dt(v.nodesRef.current, Q) : []).some(z => z.context ? .open && !z.context.dataRef.current[H])
    }), N = te(H => vo(H, a.select("floatingElement")) || vo(H, a.select("domReferenceElement"))), O = te(H => {
        c() && a.setOpen(!1, ue(nn, H.nativeEvent))
    }), k = te(H => {
        if (!l || !n || !o || H.key !== "Escape" || P.current || !h && w("__escapeKeyBubbles")) return;
        const Q = Ca(H) ? H.nativeEvent : H,
            z = ue(qi, Q);
        a.setOpen(!1, z), z.isCanceled || H.preventDefault(), !h && !z.isPropagationAllowed && H.stopPropagation()
    }), D = te(() => {
        d.current.insideReactTree = !0, M.start(0, F)
    }), L = te(H => {
        if (!l || !n || H.button !== 0) return;
        const Q = De(H.nativeEvent);
        ee(a.select("floatingElement"), Q) && (x.current || (x.current = !0, S.current = !1))
    }), _ = te(H => {
        !l || !n || (H.defaultPrevented || H.nativeEvent.defaultPrevented) && x.current && (S.current = !0)
    });
    s.useEffect(() => {
        if (!l || !n) return F;
        d.current.__escapeKeyBubbles = h, d.current.__outsidePressBubbles = R;
        const H = new lt,
            Q = new lt;

        function z() {
            H.clear(), P.current = !0
        }

        function J() {
            H.start(Pt ? 5 : 0, () => {
                P.current = !1
            })
        }

        function Y() {
            E.current = !0, Q.start(0, () => {
                E.current = !1
            })
        }

        function pe() {
            x.current = !1, S.current = !1
        }

        function V() {
            const A = T.current,
                j = A === "pen" || !A ? "mouse" : A,
                he = y(),
                X = typeof he == "function" ? he() : he;
            return typeof X == "string" ? X : X[j]
        }

        function U(A) {
            const j = V();
            return j === "intentional" && A.type !== "click" || j === "sloppy" && A.type === "click"
        }

        function re(A) {
            const j = d.current.floatingContext ? .nodeId,
                he = v && dt(v.nodesRef.current, j).some(X => vo(A, X.context ? .elements.floating));
            return N(A) || he
        }

        function se(A) {
            if (U(A)) {
                A.type !== "click" && !N(A) && (Q.clear(), E.current = !1), F();
                return
            }
            if (d.current.insideReactTree) {
                F();
                return
            }
            const j = De(A),
                he = `[${Zt("inert")}]`,
                X = Oe(j) ? j.getRootNode() : null,
                K = Array.from((Wo(X) ? X : Ee(a.select("floatingElement"))).querySelectorAll(he)),
                Ce = a.context.triggerElements;
            if (j && (Ce.hasElement(j) || Ce.hasMatchingElement(Ne => ee(Ne, j)))) return;
            let Pe = Oe(j) ? j : null;
            for (; Pe && !wn(Pe);) {
                const Ne = ss(Pe);
                if (wn(Ne) || !Oe(Ne)) break;
                Pe = Ne
            }
            if (!(K.length && Oe(j) && !Oa(j) && !ee(j, a.select("floatingElement")) && K.every(Ne => !ee(Pe, Ne)))) {
                if (ke(j) && !("touches" in A)) {
                    const Ne = wn(j),
                        Me = Hn(j),
                        He = /auto|scroll/,
                        et = Ne || He.test(Me.overflowX),
                        Ge = Ne || He.test(Me.overflowY),
                        wt = et && j.clientWidth > 0 && j.scrollWidth > j.clientWidth,
                        ht = Ge && j.clientHeight > 0 && j.scrollHeight > j.clientHeight,
                        It = Me.direction === "rtl",
                        Ot = ht && (It ? A.offsetX <= j.offsetWidth - j.clientWidth : A.offsetX > j.clientWidth),
                        Bt = wt && A.offsetY > j.clientHeight;
                    if (Ot || Bt) return
                }
                if (!re(A)) {
                    if (V() === "intentional" && E.current) {
                        Q.clear(), E.current = !1;
                        return
                    }
                    typeof g == "function" && !g(A) || w("__outsidePressBubbles") || (a.setOpen(!1, ue(os, A)), F())
                }
            }
        }

        function G(A) {
            V() !== "sloppy" || A.pointerType === "touch" || !a.select("open") || !n || N(A) || se(A)
        }

        function ce(A) {
            if (V() !== "sloppy" || !a.select("open") || !n || N(A)) return;
            const j = A.touches[0];
            j && (C.current = {
                startTime: Date.now(),
                startX: j.clientX,
                startY: j.clientY,
                dismissOnTouchEnd: !1,
                dismissOnMouseDown: !0
            }, I.start(1e3, () => {
                C.current && (C.current.dismissOnTouchEnd = !1, C.current.dismissOnMouseDown = !1)
            }))
        }

        function le(A, j) {
            const he = De(A);
            if (!he) return;
            const X = me(he, A.type, () => {
                j(A), X()
            })
        }

        function ve(A) {
            T.current = "touch", le(A, ce)
        }

        function ie(A) {
            I.clear(), A.type === "pointerdown" && (T.current = A.pointerType), !(A.type === "mousedown" && C.current && !C.current.dismissOnMouseDown) && le(A, j => {
                j.type === "pointerdown" ? G(j) : se(j)
            })
        }

        function oe(A) {
            if (!x.current) return;
            const j = S.current;
            if (pe(), V() === "intentional") {
                if (A.type === "pointercancel") {
                    j && Y();
                    return
                }
                if (!re(A)) {
                    if (j) {
                        Y();
                        return
                    }
                    typeof g == "function" && !g(A) || (Q.clear(), E.current = !0, F())
                }
            }
        }

        function ae(A) {
            if (V() !== "sloppy" || !C.current || N(A)) return;
            const j = A.touches[0];
            if (!j) return;
            const he = Math.abs(j.clientX - C.current.startX),
                X = Math.abs(j.clientY - C.current.startY),
                K = Math.sqrt(he * he + X * X);
            K > 5 && (C.current.dismissOnTouchEnd = !0), K > 10 && (se(A), I.clear(), C.current = null)
        }

        function Z(A) {
            le(A, ae)
        }

        function de(A) {
            V() !== "sloppy" || !C.current || N(A) || (C.current.dismissOnTouchEnd && se(A), I.clear(), C.current = null)
        }

        function ge(A) {
            le(A, de)
        }
        const be = Ee(m),
            we = ot(o && ot(me(be, "keydown", k), me(be, "compositionstart", z), me(be, "compositionend", J)), p && ot(me(be, "click", ie, !0), me(be, "pointerdown", ie, !0), me(be, "pointerup", oe, !0), me(be, "pointercancel", oe, !0), me(be, "mousedown", ie, !0), me(be, "mouseup", oe, !0), me(be, "touchstart", ve, !0), me(be, "touchmove", Z, !0), me(be, "touchend", ge, !0)));
        return () => {
            we(), H.clear(), Q.clear(), pe(), E.current = !1, F()
        }
    }, [d, m, o, p, g, l, n, h, R, k, F, y, w, N, v, a, I]);
    const ne = s.useMemo(() => ({
            onKeyDown: k,
            onPointerDown: O,
            onClick: O
        }), [k, O]),
        $ = s.useMemo(() => ({
            onKeyDown: k,
            onPointerDown: _,
            onMouseDown: _,
            onClickCapture: D,
            onMouseDownCapture(H) {
                D(), L(H)
            },
            onPointerDownCapture(H) {
                D(), L(H)
            },
            onMouseUpCapture: D,
            onTouchEndCapture: D,
            onTouchMoveCapture: D
        }), [k, D, L, _]);
    return s.useMemo(() => n ? {
        reference: ne,
        floating: $,
        trigger: ne
    } : {}, [n, ne, $])
}
var sc = class {
        attachedStores = [];
        attachedStoreValue = null;
        storeListeners = new Set;
        constructor(e, t, n = !0) {
            this.fallbackStore = e, this.componentName = t, this.throwOnMissingTrigger = n
        }
        get attachedStore() {
            return this.attachedStoreValue
        }
        get store() {
            return this.attachedStoreValue ? ? this.fallbackStore
        }
        get serverStore() {
            return this.fallbackStore
        }
        subscribeStore(e) {
            return this.storeListeners.add(e), () => {
                this.storeListeners.delete(e)
            }
        }
        attachStore(e) {
            return this.attachedStores.push(e), this.setActiveStore(e), () => {
                const t = this.attachedStores.lastIndexOf(e);
                t !== -1 && this.attachedStores.splice(t, 1), this.setActiveStore(this.attachedStores[this.attachedStores.length - 1] ? ? null)
            }
        }
        setActiveStore(e) {
            this.attachedStoreValue !== e && (this.attachedStoreValue = e, this.storeListeners.forEach(t => {
                t()
            }))
        }
        openByTrigger(e) {
            const t = this.attachedStore;
            if (t === null) return;
            let n;
            if (e) {
                for (let o = this.attachedStores.length - 1; o >= 0 && !n; o -= 1) n = this.attachedStores[o].context.triggerElements.getById(e);
                n ? ? = this.fallbackStore.context.triggerElements.getById(e)
            }
            if (e && !n && this.throwOnMissingTrigger) throw new Error(Te(99, this.componentName, e, this.componentName));
            t.setOpen(!0, ue(_t, void 0, n))
        }
        closePopup() {
            const e = this.attachedStore;
            e !== null && e.setOpen(!1, ue(_t))
        }
    },
    ic = es(19) ? cc : uc;

function Hs(e, t, n, o, r) {
    return ic(e, t, n, o, r)
}

function ac(e, t, n, o, r) {
    const i = s.useCallback(() => t(e.getSnapshot(), n, o, r), [e, t, n, o, r]);
    return (0, Ko.useSyncExternalStore)(e.subscribe, i, i)
}
ma({
    before(e) {
        e.syncIndex = 0, e.didInitialize || (e.syncTick = 1, e.syncHooks = [], e.didChangeStore = !0, e.getSnapshot = () => {
            let t = !1;
            for (let n = 0; n < e.syncHooks.length; n += 1) {
                const o = e.syncHooks[n],
                    r = o.selector(o.store.state, o.a1, o.a2, o.a3);
                Object.is(o.value, r) || (t = !0, o.value = r)
            }
            return t && (e.syncTick += 1), e.syncTick
        })
    },
    after(e) {
        e.syncHooks.length > 0 && (e.didChangeStore && (e.didChangeStore = !1, e.subscribe = t => {
            const n = new Set;
            for (const r of e.syncHooks) n.add(r.store);
            const o = [];
            for (const r of n) o.push(r.subscribe(t));
            return () => {
                for (const r of o) r()
            }
        }), (0, Ko.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot))
    }
});

function cc(e, t, n, o, r) {
    const i = ha();
    if (!i) return ac(e, t, n, o, r);
    const c = i.syncIndex;
    i.syncIndex += 1;
    let f;
    return i.didInitialize ? (f = i.syncHooks[c], (f.store !== e || f.selector !== t || !Object.is(f.a1, n) || !Object.is(f.a2, o) || !Object.is(f.a3, r)) && (f.store !== e && (i.didChangeStore = !0), f.store = e, f.selector = t, f.a1 = n, f.a2 = o, f.a3 = r, f.value = t(e.getSnapshot(), n, o, r))) : (f = {
        store: e,
        selector: t,
        a1: n,
        a2: o,
        a3: r,
        value: t(e.getSnapshot(), n, o, r)
    }, i.syncHooks.push(f)), f.value
}

function uc(e, t, n, o, r) {
    return (0, ga.useSyncExternalStoreWithSelector)(e.subscribe, e.getSnapshot, e.getSnapshot, i => t(i, n, o, r))
}
var lc = class {
        constructor(e) {
            this.state = e, this.listeners = new Set, this.updateTick = 0
        }
        subscribe = e => (this.listeners.add(e), () => {
            this.listeners.delete(e)
        });
        getSnapshot = () => this.state;
        setState(e) {
            if (this.state === e) return;
            this.state = e, this.updateTick += 1;
            const t = this.updateTick;
            for (const n of this.listeners) {
                if (t !== this.updateTick) return;
                n(e)
            }
        }
        update(e) {
            for (const t in e)
                if (!Object.is(this.state[t], e[t])) {
                    this.setState({ ...this.state,
                        ...e
                    });
                    return
                }
        }
        set(e, t) {
            Object.is(this.state[e], t) || this.setState({ ...this.state,
                [e]: t
            })
        }
        notifyAll() {
            const e = { ...this.state
            };
            this.setState(e)
        }
        use(e, t, n, o) {
            return Hs(this, e, t, n, o)
        }
    },
    Gt = class extends lc {
        constructor(e, t = {}, n) {
            super(e), this.context = t, this.selectors = n
        }
        useSyncedValue(e, t) {
            s.useDebugValue(e);
            const n = this;
            q(() => {
                n.state[e] !== t && n.set(e, t)
            }, [n, e, t])
        }
        useSyncedValueWithCleanup(e, t) {
            const n = this;
            q(() => (n.state[e] !== t && n.set(e, t), () => {
                n.set(e, void 0)
            }), [n, e, t])
        }
        useSyncedValues(e) {
            const t = this,
                n = Object.values(e);
            q(() => {
                t.update(e)
            }, [t, ...n])
        }
        useControlledProp(e, t) {
            s.useDebugValue(e);
            const n = this,
                o = t !== void 0;
            q(() => {
                o && !Object.is(n.state[e], t) && n.setState({ ...n.state,
                    [e]: t
                })
            }, [n, e, t, o])
        }
        select(e, t, n, o) {
            const r = this.selectors[e];
            return r(this.state, t, n, o)
        }
        useState(e, t, n, o) {
            return s.useDebugValue(e), Hs(this, this.selectors[e], t, n, o)
        }
        useContextCallback(e, t) {
            s.useDebugValue(e);
            const n = te(t ? ? St);
            this.context[e] = n
        }
        useStateSetter(e) {
            const t = s.useRef(void 0);
            return t.current === void 0 && (t.current = n => {
                this.set(e, n)
            }), t.current
        }
        observe(e, t) {
            let n;
            typeof e == "function" ? n = e : n = this.selectors[e];
            let o = n(this.state);
            return t(o, o, this), this.subscribe(r => {
                const i = n(r);
                if (!Object.is(o, i)) {
                    const c = o;
                    o = i, t(i, c, this)
                }
            })
        }
    },
    fc = {
        open: e => e.open,
        transitionStatus: e => e.transitionStatus,
        domReferenceElement: e => e.domReferenceElement,
        referenceElement: e => e.positionReference ? ? e.referenceElement,
        floatingElement: e => e.floatingElement,
        floatingId: e => e.floatingId
    },
    Yn = class extends Gt {
        constructor(e) {
            const {
                syncOnly: t,
                nested: n,
                onOpenChange: o,
                triggerElements: r,
                ...i
            } = e;
            super({ ...i,
                positionReference: i.referenceElement,
                domReferenceElement: i.referenceElement
            }, {
                onOpenChange: o,
                dataRef: {
                    current: {}
                },
                events: Ds(),
                nested: n,
                triggerElements: r
            }, fc), this.syncOnly = t
        }
        syncOpenEvent = (e, t) => {
            (!e || !this.state.open || t != null && Sa(t)) && (this.context.dataRef.current.openEvent = e ? t : void 0)
        };
        dispatchOpenChange = (e, t) => {
            this.syncOpenEvent(e, t.event);
            const n = {
                open: e,
                reason: t.reason,
                nativeEvent: t.event,
                nested: this.context.nested,
                triggerElement: t.trigger
            };
            this.context.events.emit("openchange", n)
        };
        setOpen = (e, t) => {
            if (this.syncOnly) {
                this.context.onOpenChange ? .(e, t);
                return
            }
            this.dispatchOpenChange(e, t), this.context.onOpenChange ? .(e, t)
        }
    };

function Ls(e) {
    const {
        popupStore: t,
        treatPopupAsFloatingElement: n = !1,
        floatingRootContext: o,
        floatingId: r,
        nested: i,
        onOpenChange: c
    } = e, f = t.useState("open"), u = t.useState("activeTriggerElement"), a = t.useState(n ? "popupElement" : "positionerElement"), l = t.context.triggerElements, m = c, d = s.useRef(null);
    o === void 0 && d.current === null && (d.current = new Yn({
        open: f,
        transitionStatus: void 0,
        referenceElement: u,
        floatingElement: a,
        triggerElements: l,
        onOpenChange: m,
        floatingId: r,
        syncOnly: !0,
        nested: i
    }));
    const v = o ? ? d.current;
    return t.useSyncedValue("floatingId", r), q(() => {
        const b = {
            open: f,
            floatingId: r,
            referenceElement: u,
            floatingElement: a
        };
        Oe(u) && (b.domReferenceElement = u), v.state.positionReference === v.state.referenceElement && (b.positionReference = u), v.update(b)
    }, [f, r, u, a, v]), v.context.onOpenChange = m, v.context.nested = i, v
}
var $n = {
    tabIndex: -1,
    [Pa]: ""
};

function Bs(e) {
    return t => t === "touch" ? e.current : !0
}

function er(e, t = !1) {
    const n = xt(),
        o = pt() != null,
        r = ft(() => e(n, o)).current;
    return Ls({
        popupStore: r,
        treatPopupAsFloatingElement: t,
        floatingRootContext: r.state.floatingRootContext,
        floatingId: n,
        nested: o,
        onOpenChange: r.setOpen
    }), r
}

function Xn({
    handle: e,
    store: t
}) {
    return q(() => e.attachStore(t), [e, t]), null
}

function js(e, t) {
    const n = s.useRef(null),
        o = s.useRef(null);
    return s.useCallback(r => {
        if (e === void 0) return;
        let i = !1;
        if (n.current !== null) {
            const c = n.current,
                f = o.current,
                u = t.context.triggerElements.getById(c);
            f && u === f && (t.context.triggerElements.delete(c), i = !0), n.current = null, o.current = null
        }
        if (r !== null && (n.current = e, o.current = r, t.context.triggerElements.add(e, r), i = !0), i) {
            const c = t.context.triggerElements.size;
            t.select("open") && t.state.triggerCount !== c && t.set("triggerCount", c)
        }
    }, [t, e])
}

function zn(e, t, n, o = !1) {
    t ? e.preventUnmountingOnClose = !1 : o && (e.preventUnmountingOnClose = !0);
    const r = n ? .id ? ? null;
    (r || t) && (e.activeTriggerId = r, e.activeTriggerElement = n ? ? null)
}

function tr(e) {
    let t = !1;
    return e.preventUnmountOnClose = () => {
        t = !0
    }, () => t
}

function dc(e, t, n, o = {}) {
    const r = n.reason,
        i = r === Ve,
        c = t && r === "trigger-focus",
        f = !t && (r === "trigger-press" || r === "escape-key"),
        u = tr(n);
    if (e.context.onOpenChange ? .(t, n), n.isCanceled) return;
    o.onBeforeDispatch ? .(), e.state.floatingRootContext.dispatchOpenChange(t, n);
    const a = () => {
        const l = { ...o.extraState,
            open: t
        };
        c ? l.instantType = "focus" : f ? l.instantType = "dismiss" : i && (l.instantType = void 0), zn(l, t, n.trigger, u()), e.update(l)
    };
    i ? $e.flushSync(a) : a()
}

function qn(e, t, n, o) {
    const r = n.useState("isMountedByTrigger", e),
        i = js(e, n),
        c = te(u => {
            const a = n.select("open"),
                l = n.select("activeTriggerId");
            if (l === e) {
                n.update({
                    activeTriggerElement: u,
                    ...a ? o : null
                });
                return
            }
            l == null && a && n.update({
                activeTriggerId: e,
                activeTriggerElement: u,
                ...o
            })
        }),
        f = s.useCallback(u => {
            i(u), u && c(u)
        }, [i, c]);
    return q(() => {
        r && n.update({
            activeTriggerElement: t.current,
            ...o
        })
    }, [r, n, t, ...Object.values(o)]), {
        registerTrigger: f,
        isMountedByThisTrigger: r
    }
}

function Qn(e, t = {}) {
    const {
        closeOnActiveTriggerUnmount: n = !1
    } = t, o = s.useRef(null), r = e.useState("open"), i = e.useState("triggerCount"), c = e.useState("activeTriggerId"), f = e.useState("activeTriggerElement");
    q(() => {
        if (!r) {
            o.current = null, e.state.triggerCount !== 0 && e.set("triggerCount", 0);
            return
        }
        const u = e.context.triggerElements.size,
            a = {};
        e.state.triggerCount !== u && (a.triggerCount = u);
        const l = e.select("activeTriggerId");
        let m = null;
        if (l) {
            const d = e.context.triggerElements.getById(l);
            if (d) o.current = l, d !== e.state.activeTriggerElement && (a.activeTriggerElement = d);
            else {
                for (const [v, b] of e.context.triggerElements.entries())
                    if (b === e.state.activeTriggerElement) {
                        a.activeTriggerId = v, a.activeTriggerElement = b, o.current = v;
                        break
                    }
                a.activeTriggerId === void 0 && (o.current === l ? m = l : o.current = null)
            }
        } else o.current = null;
        if (!m && !l && u === 1) {
            const d = e.context.triggerElements.entries().next();
            if (!d.done) {
                const [v, b] = d.value;
                a.activeTriggerId = v, a.activeTriggerElement = b, o.current = v
            }
        }(a.triggerCount !== void 0 || a.activeTriggerId !== void 0 || a.activeTriggerElement !== void 0) && e.update(a), m && n && queueMicrotask(() => {
            if (e.select("open") && e.select("activeTriggerId") === m && !e.context.triggerElements.getById(m)) {
                const d = ue(rs);
                e.setOpen(!1, d), d.isCanceled || e.update({
                    activeTriggerId: null,
                    activeTriggerElement: null
                })
            }
        })
    }, [r, e, i, c, f, n])
}

function Jn(e, t, n) {
    const {
        mounted: o,
        setMounted: r,
        transitionStatus: i
    } = Kt(e), c = t.useState("preventUnmountingOnClose"), f = e ? !1 : c;
    t.useSyncedValues({
        mounted: o,
        transitionStatus: i,
        preventUnmountingOnClose: f
    });
    const u = te(() => {
        r(!1), t.update({
            activeTriggerId: null,
            activeTriggerElement: null,
            mounted: !1,
            preventUnmountingOnClose: !1
        }), n ? .(), t.context.onOpenChangeComplete ? .(!1)
    });
    return st({
        enabled: o && !e && !f,
        open: e,
        ref: t.context.popupRef,
        onComplete() {
            e || u()
        }
    }), {
        forceUnmount: u,
        transitionStatus: i
    }
}

function Zn(e, t) {
    e.useSyncedValues(t), q(() => () => {
        e.update({
            activeTriggerProps: Le,
            inactiveTriggerProps: Le,
            popupProps: Le
        })
    }, [e])
}

function _s(e, t) {
    q(() => {
        !t && e.state.openMethod !== null && e.set("openMethod", null)
    }, [t, e]), q(() => () => {
        e.state.openMethod !== null && e.set("openMethod", null)
    }, [e])
}
var Ht = class {
    constructor() {
        this.idMap = new Map
    }
    add(e, t) {
        this.idMap.set(e, t)
    }
    delete(e) {
        this.idMap.delete(e)
    }
    hasElement(e) {
        for (const t of this.idMap.values())
            if (t === e) return !0;
        return !1
    }
    hasMatchingElement(e) {
        for (const t of this.idMap.values())
            if (e(t)) return !0;
        return !1
    }
    getById(e) {
        return this.idMap.get(e)
    }
    entries() {
        return this.idMap.entries()
    }
    elements() {
        return this.idMap.values()
    }
    get size() {
        return this.idMap.size
    }
};

function eo() {
    return new Yn({
        open: !1,
        transitionStatus: void 0,
        floatingElement: null,
        referenceElement: null,
        triggerElements: new Ht,
        floatingId: void 0,
        syncOnly: !1,
        nested: !1,
        onOpenChange: void 0
    })
}

function to() {
    return {
        open: !1,
        openProp: void 0,
        mounted: !1,
        transitionStatus: void 0,
        floatingRootContext: eo(),
        floatingId: void 0,
        triggerCount: 0,
        preventUnmountingOnClose: !1,
        payload: void 0,
        activeTriggerId: null,
        activeTriggerElement: null,
        triggerIdProp: void 0,
        popupElement: null,
        positionerElement: null,
        activeTriggerProps: Le,
        inactiveTriggerProps: Le,
        popupProps: Le
    }
}

function nr(e, t, n = !1) {
    return new Yn({
        open: !1,
        transitionStatus: void 0,
        floatingElement: null,
        referenceElement: null,
        triggerElements: e,
        floatingId: t,
        syncOnly: !0,
        nested: n,
        onOpenChange: void 0
    })
}
var Qt = e => e.triggerIdProp ? ? e.activeTriggerId,
    or = e => e.openProp ? ? e.open,
    Dr = e => (e.popupElement ? .id ? ? e.floatingId) || void 0;

function Vs(e, t) {
    return t !== void 0 && or(e) && Qt(e) === t
}

function pc(e, t) {
    return Vs(e, t) ? !0 : t !== void 0 && or(e) && Qt(e) == null && e.triggerCount === 1
}
var no = {
    open: or,
    mounted: e => e.mounted,
    transitionStatus: e => e.transitionStatus,
    floatingRootContext: e => e.floatingRootContext,
    triggerCount: e => e.triggerCount,
    preventUnmountingOnClose: e => e.preventUnmountingOnClose,
    payload: e => e.payload,
    activeTriggerId: Qt,
    activeTriggerElement: e => e.mounted ? e.activeTriggerElement : null,
    popupId: Dr,
    isTriggerActive: (e, t) => t !== void 0 && Qt(e) === t,
    isOpenedByTrigger: (e, t) => Vs(e, t),
    isMountedByTrigger: (e, t) => t !== void 0 && Qt(e) === t && e.mounted,
    triggerProps: (e, t) => t ? e.activeTriggerProps : e.inactiveTriggerProps,
    triggerPopupId: (e, t) => pc(e, t) ? Dr(e) : void 0,
    popupProps: e => e.popupProps,
    popupElement: e => e.popupElement,
    positionerElement: e => e.positionerElement
};

function oo(e) {
    const t = s.useCallback(o => e === void 0 ? St : e.subscribeStore(o), [e]),
        n = s.useCallback(() => e === void 0 ? void 0 : e.store, [e]);
    return (0, Ko.useSyncExternalStore)(t, n, () => e ? .serverStore)
}

function Ws(e) {
    const {
        open: t = !1,
        onOpenChange: n,
        elements: o = {}
    } = e, r = xt(), i = pt() != null, c = ft(() => new Yn({
        open: t,
        transitionStatus: void 0,
        onOpenChange: n,
        referenceElement: o.reference ? ? null,
        floatingElement: o.floating ? ? null,
        triggerElements: new Ht,
        floatingId: r,
        syncOnly: !1,
        nested: i
    })).current;
    return q(() => {
        const f = {
            open: t,
            floatingId: r
        };
        o.reference !== void 0 && (f.referenceElement = o.reference, f.domReferenceElement = Oe(o.reference) ? o.reference : null), o.floating !== void 0 && (f.floatingElement = o.floating), c.update(f)
    }, [t, r, o.reference, o.floating, c]), c.context.onOpenChange = n, c.context.nested = i, c
}

function gc(e = {}) {
    const t = Ws(e);
    return Us(e, e.rootContext || t)
}

function hc(e) {
    return Us(e, e.rootContext)
}

function Us(e, t) {
    const {
        nodeId: n,
        externalTree: o
    } = e, r = t.useState("referenceElement"), i = t.useState("floatingElement"), c = t.useState("domReferenceElement"), f = t.useState("open"), u = t.useState("floatingId"), [a, l] = s.useState(null), [m, d] = s.useState(void 0), [v, b] = s.useState(void 0), g = s.useRef(null), p = ut(o), y = s.useMemo(() => ({
        reference: r,
        floating: i,
        domReference: c
    }), [r, i, c]), h = ra({ ...e,
        elements: { ...y,
            ...a && {
                reference: a
            }
        }
    }), R = Oe(m) ? m : null, x = v === void 0 ? t.state.floatingElement : v;
    t.useSyncedValue("referenceElement", m ? ? null), t.useSyncedValue("domReferenceElement", m === void 0 ? c : R), t.useSyncedValue("floatingElement", x);
    const S = s.useCallback(M => {
            const F = Oe(M) ? {
                getBoundingClientRect: () => M.getBoundingClientRect(),
                getClientRects: () => M.getClientRects(),
                contextElement: M
            } : M;
            l(F), h.refs.setReference(F)
        }, [h.refs]),
        E = s.useCallback(M => {
            (Oe(M) || M === null) && (g.current = M, d(M)), (Oe(h.refs.reference.current) || h.refs.reference.current === null || M !== null && !Oe(M)) && h.refs.setReference(M)
        }, [h.refs, d]),
        P = s.useCallback(M => {
            b(M), h.refs.setFloating(M)
        }, [h.refs]),
        T = s.useMemo(() => ({ ...h.refs,
            setReference: E,
            setFloating: P,
            setPositionReference: S,
            domReference: g
        }), [h.refs, E, P, S]),
        C = s.useMemo(() => ({ ...h.elements,
            domReference: c
        }), [h.elements, c]),
        I = s.useMemo(() => ({ ...h,
            dataRef: t.context.dataRef,
            open: f,
            onOpenChange: t.setOpen,
            events: t.context.events,
            floatingId: u,
            refs: T,
            elements: C,
            nodeId: n,
            rootStore: t
        }), [h, T, C, n, t, f, u]);
    return q(() => {
        c && (g.current = c)
    }, [c]), q(() => {
        t.context.dataRef.current.floatingContext = I;
        const M = p ? .nodesRef.current.find(F => F.id === n);
        M && (M.context = I)
    }), s.useMemo(() => ({ ...h,
        context: I,
        refs: T,
        elements: C,
        rootStore: t
    }), [h, T, C, I, t])
}
var Eo = Yo && Pt;

function Ks(e, t = {}) {
    const {
        enabled: n = !0,
        delay: o
    } = t, r = "rootStore" in e ? e.rootStore : e, {
        events: i,
        dataRef: c
    } = r.context, f = s.useRef(!1), u = s.useRef(null), a = s.useRef(!0), l = Fe();
    s.useEffect(() => {
        const d = r.select("domReferenceElement");
        if (!n) return;
        const v = Je(d);

        function b() {
            const y = r.select("domReferenceElement");
            !r.select("open") && ke(y) && y === _e(Ee(y)) && (f.current = !0)
        }

        function g() {
            a.current = !0
        }

        function p() {
            a.current = !1
        }
        return ot(me(v, "blur", b), Eo && me(v, "keydown", g, !0), Eo && me(v, "pointerdown", p, !0))
    }, [r, n]), s.useEffect(() => {
        if (!n) return;

        function d(v) {
            if (v.reason === "trigger-press" || v.reason === "escape-key") {
                const b = r.select("domReferenceElement");
                Oe(b) && (u.current = b, f.current = !0)
            }
        }
        return i.on("openchange", d), () => {
            i.off("openchange", d)
        }
    }, [i, n, r]);
    const m = s.useMemo(() => {
        function d() {
            f.current = !1, u.current = null
        }
        return {
            onMouseLeave() {
                d()
            },
            onFocus(v) {
                const b = v.currentTarget;
                if (f.current) {
                    if (u.current === b) return;
                    d()
                }
                const g = De(v.nativeEvent);
                if (Oe(g)) {
                    if (Eo && !v.relatedTarget) {
                        if (!a.current && !jn(g)) return
                    } else if (!ka(g)) return
                }
                const p = Fn(v.relatedTarget, r.context.triggerElements),
                    {
                        nativeEvent: y,
                        currentTarget: h
                    } = v,
                    R = typeof o == "function" ? o() : o;
                if (r.select("open") && p || R === 0 || R === void 0) {
                    r.setOpen(!0, ue(go, y, h));
                    return
                }
                l.start(R, () => {
                    f.current || r.setOpen(!0, ue(go, y, h))
                })
            },
            onBlur(v) {
                d();
                const b = v.relatedTarget,
                    g = v.nativeEvent,
                    p = Oe(b) && b.hasAttribute(Zt("focus-guard")) && b.getAttribute("data-type") === "outside";
                l.start(0, () => {
                    const y = r.select("domReferenceElement"),
                        h = _e(Ee(y));
                    !b && h === y || ee(c.current.floatingContext ? .refs.floating.current, h) || ee(y, h) || p || Fn(b ? ? h, r.context.triggerElements) || r.setOpen(!1, ue(go, g))
                })
            }
        }
    }, [c, o, r, l]);
    return s.useMemo(() => n ? {
        reference: m,
        trigger: m
    } : {}, [n, m])
}
var mc = class Gs {
        constructor() {
            this.pointerType = void 0, this.interactedInside = !1, this.handler = void 0, this.blockMouseMove = !0, this.performedPointerEventsMutation = !1, this.pointerEventsScopeElement = null, this.pointerEventsReferenceElement = null, this.pointerEventsFloatingElement = null, this.restTimeoutPending = !1, this.openChangeTimeout = new lt, this.restTimeout = new lt, this.handleCloseOptions = void 0
        }
        static create() {
            return new Gs
        }
        dispose = () => {
            this.openChangeTimeout.clear(), this.restTimeout.clear()
        };
        disposeEffect = () => this.dispose
    },
    Nn = new WeakMap;

function Ut(e) {
    if (!e.performedPointerEventsMutation) return;
    const t = e.pointerEventsScopeElement;
    t && Nn.get(t) === e && (e.pointerEventsScopeElement ? .style.removeProperty("pointer-events"), e.pointerEventsReferenceElement ? .style.removeProperty("pointer-events"), e.pointerEventsFloatingElement ? .style.removeProperty("pointer-events"), Nn.delete(t)), e.performedPointerEventsMutation = !1, e.pointerEventsScopeElement = null, e.pointerEventsReferenceElement = null, e.pointerEventsFloatingElement = null
}

function rr(e, t) {
    const {
        scopeElement: n,
        referenceElement: o,
        floatingElement: r
    } = t, i = Nn.get(n);
    i && i !== e && Ut(i), Ut(e), e.performedPointerEventsMutation = !0, e.pointerEventsScopeElement = n, e.pointerEventsReferenceElement = o, e.pointerEventsFloatingElement = r, Nn.set(n, e), n.style.pointerEvents = "none", o.style.pointerEvents = "auto", r.style.pointerEvents = "auto"
}

function ro(e) {
    const t = e.context.dataRef.current,
        n = ft(() => t.hoverInteractionState ? ? mc.create()).current;
    return t.hoverInteractionState || (t.hoverInteractionState = n), ea(t.hoverInteractionState.disposeEffect), t.hoverInteractionState
}

function so(e, t = {}) {
    const {
        enabled: n = !0,
        closeDelay: o = 0,
        nodeId: r
    } = t, i = "rootStore" in e ? e.rootStore : e, c = i.useState("open"), f = i.useState("floatingElement"), u = i.useState("domReferenceElement"), {
        dataRef: a
    } = i.context, l = ut(), m = pt(), d = ro(i), v = Fe(), b = te(() => ds(a.current.openEvent ? .type, d.interactedInside)), g = te(() => Da(a.current.openEvent ? .type)), p = te(() => {
        Ut(d)
    });
    q(() => {
        c || (d.pointerType = void 0, d.restTimeoutPending = !1, d.interactedInside = !1, p())
    }, [c, d, p]), s.useEffect(() => p, [p]), q(() => {
        if (n && c && d.handleCloseOptions ? .blockPointerEvents && g() && Oe(u) && f) {
            const y = u,
                h = f,
                R = Ee(f),
                x = l ? .nodesRef.current.find(T => T.id === m) ? .context ? .elements.floating;
            x && (x.style.pointerEvents = "");
            const S = d.pointerEventsScopeElement !== h ? d.pointerEventsScopeElement : null,
                E = x !== h ? x : null,
                P = d.handleCloseOptions ? .getScope ? .() ? ? S ? ? E ? ? y.closest("[data-rootownerid]") ? ? R.body;
            return rr(d, {
                scopeElement: P,
                referenceElement: y,
                floatingElement: h
            }), () => {
                p()
            }
        }
    }, [n, c, u, f, d, g, l, m, p]), s.useEffect(() => {
        if (!n) return;

        function y() {
            return !!(l && m && dt(l.nodesRef.current, m).length > 0)
        }

        function h(T) {
            const C = Ct(o, "close", d.pointerType),
                I = () => {
                    i.setOpen(!1, ue(Ve, T)), l ? .events.emit("floating.closed", T)
                };
            C ? d.openChangeTimeout.start(C, I) : (d.openChangeTimeout.clear(), I())
        }

        function R(T) {
            const C = De(T);
            if (!Ma(C)) {
                d.interactedInside = !1;
                return
            }
            d.interactedInside = C ? .closest("[aria-haspopup]") != null
        }

        function x() {
            d.openChangeTimeout.clear(), v.clear(), l ? .events.off("floating.closed", E), p()
        }

        function S(T) {
            if (y() && l) {
                l.events.on("floating.closed", E);
                return
            }
            if (Fn(T.relatedTarget, i.context.triggerElements)) return;
            const C = a.current.floatingContext ? .nodeId ? ? r,
                I = T.relatedTarget;
            if (!(l && C && Oe(I) && dt(l.nodesRef.current, C, !1).some(M => ee(M.context ? .elements.floating, I)))) {
                if (d.handler) {
                    d.handler(T);
                    return
                }
                p(), g() && !b() && h(T)
            }
        }

        function E(T) {
            !l || !m || y() || v.start(0, () => {
                l.events.off("floating.closed", E), i.setOpen(!1, ue(Ve, T)), l.events.emit("floating.closed", T)
            })
        }
        const P = f;
        return ot(P && me(P, "mouseenter", x), P && me(P, "mouseleave", S), P && me(P, "pointerdown", R, !0), () => {
            l ? .events.off("floating.closed", E)
        })
    }, [n, f, i, a, o, r, g, b, p, d, l, m, v])
}
var vc = {
    current: null
};

function un(e, t = {}) {
    const {
        enabled: n = !0,
        delay: o = 0,
        handleClose: r = null,
        mouseOnly: i = !1,
        restMs: c = 0,
        move: f = !0,
        triggerElementRef: u = vc,
        externalTree: a,
        isActiveTrigger: l = !0,
        getHandleCloseContext: m,
        isClosing: d,
        shouldOpen: v,
        guardStaleOpen: b = !1
    } = t, g = "rootStore" in e ? e.rootStore : e, {
        dataRef: p,
        events: y
    } = g.context, h = ut(a), R = ro(g), x = s.useRef(!1), S = Ae(r), E = Ae(o), P = Ae(c), T = Ae(n), C = Ae(v), I = Ae(d), M = te(() => ds(p.current.openEvent ? .type, R.interactedInside)), F = te(() => C.current ? .() !== !1), w = te((k, D, L) => {
        const _ = g.context.triggerElements;
        if (_.hasElement(D)) return !k || !ee(k, D);
        if (!Oe(L)) return !1;
        const ne = L;
        return _.hasMatchingElement($ => ee($, ne)) && (!k || !ee(k, ne))
    }), N = te(() => {
        R.handler && (Ee(g.select("domReferenceElement")).removeEventListener("mousemove", R.handler), R.handler = void 0)
    }), O = te(() => {
        Ut(R)
    });
    return l && (R.handleCloseOptions = S.current ? .__options), s.useEffect(() => N, [N]), s.useEffect(() => {
        if (!n) return;

        function k(D) {
            D.open ? x.current = !1 : (x.current = D.reason === Ve, N(), R.openChangeTimeout.clear(), R.restTimeout.clear(), R.blockMouseMove = !0, R.restTimeoutPending = !1)
        }
        return y.on("openchange", k), () => {
            y.off("openchange", k)
        }
    }, [n, y, R, N]), s.useEffect(() => {
        if (!n) return;

        function k(H, Q = !0) {
            const z = Ct(E.current, "close", R.pointerType);
            z ? R.openChangeTimeout.start(z, () => {
                g.setOpen(!1, ue(Ve, H)), h ? .events.emit("floating.closed", H)
            }) : Q && (R.openChangeTimeout.clear(), g.setOpen(!1, ue(Ve, H)), h ? .events.emit("floating.closed", H))
        }
        const D = u.current ? ? (l ? g.select("domReferenceElement") : null);
        if (!Oe(D)) return;

        function L(H) {
            if (R.openChangeTimeout.clear(), R.blockMouseMove = !1, i && !Et(R.pointerType)) return;
            const Q = xr(P.current),
                z = Ct(E.current, "open", R.pointerType),
                J = De(H),
                Y = H.currentTarget ? ? null,
                pe = g.select("domReferenceElement");
            let V = Y;
            if (Oe(J) && !g.context.triggerElements.hasElement(J)) {
                for (const oe of g.context.triggerElements.elements())
                    if (ee(oe, J)) {
                        V = oe;
                        break
                    }
            }
            Oe(Y) && Oe(pe) && !g.context.triggerElements.hasElement(Y) && ee(Y, pe) && (V = pe);
            const U = V == null ? !1 : w(pe, V, J),
                re = g.select("open"),
                se = I.current ? .() ? ? g.select("transitionStatus") === "ending",
                G = !re && se && x.current,
                ce = !U && Oe(V) && Oe(pe) && ee(pe, V) && G,
                le = Q > 0 && !z,
                ve = U && (re || G) || ce,
                ie = !re || U;
            if (ve) {
                F() && g.setOpen(!0, ue(Ve, H, V));
                return
            }
            le || (z ? R.openChangeTimeout.start(z, () => {
                ie && F() && g.setOpen(!0, ue(Ve, H, V))
            }) : ie && F() && g.setOpen(!0, ue(Ve, H, V)))
        }

        function _(H) {
            if (M()) {
                O();
                return
            }
            N();
            const Q = g.select("domReferenceElement"),
                z = Ee(Q);
            R.restTimeout.clear(), R.restTimeoutPending = !1;
            const J = p.current.floatingContext ? ? m ? .();
            if (!Fn(H.relatedTarget, g.context.triggerElements)) {
                if (S.current && J) {
                    g.select("open") || R.openChangeTimeout.clear();
                    const Y = u.current;
                    R.handler = S.current({ ...J,
                        tree: h,
                        x: H.clientX,
                        y: H.clientY,
                        onClose() {
                            O(), N(), T.current && !M() && Y === g.select("domReferenceElement") && k(H, !0)
                        }
                    }), z.addEventListener("mousemove", R.handler), R.handler(H);
                    return
                }(R.pointerType !== "touch" || !ee(g.select("floatingElement"), H.relatedTarget)) && k(H)
            }
        }

        function ne(H) {
            ee(D, H.relatedTarget) || (R.openChangeTimeout.clear(), R.restTimeout.clear(), R.restTimeoutPending = !1)
        }
        const $ = b ? me(D, "mouseout", ne) : void 0;
        return f ? ot(me(D, "mousemove", L, {
            once: !0
        }), me(D, "mouseenter", L), me(D, "mouseleave", _), $) : ot(me(D, "mouseenter", L), me(D, "mouseleave", _), $)
    }, [N, O, p, E, g, n, S, R, l, w, M, i, f, P, u, h, T, m, I, F, b]), s.useMemo(() => {
        if (!n) return;

        function k(D) {
            R.pointerType = D.pointerType
        }
        return {
            onPointerDown: k,
            onPointerEnter: k,
            onMouseMove(D) {
                const {
                    nativeEvent: L
                } = D, _ = D.currentTarget, ne = g.select("domReferenceElement"), $ = g.select("open"), H = w(ne, _, D.target);
                if (i && !Et(R.pointerType)) return;
                if ($ && H && R.handleCloseOptions ? .blockPointerEvents) {
                    const J = g.select("floatingElement");
                    if (J) {
                        const Y = R.handleCloseOptions ? .getScope ? .() ? ? _.ownerDocument.body;
                        rr(R, {
                            scopeElement: Y,
                            referenceElement: _,
                            floatingElement: J
                        })
                    }
                }
                const Q = xr(P.current);
                if ($ && !H || Q === 0 || !H && R.restTimeoutPending && D.movementX ** 2 + D.movementY ** 2 < 2) return;
                R.restTimeout.clear();

                function z() {
                    if (R.restTimeoutPending = !1, M()) return;
                    const J = g.select("open");
                    !R.blockMouseMove && (!J || H) && F() && g.setOpen(!0, ue(Ve, L, _))
                }
                R.pointerType === "touch" ? $e.flushSync(() => {
                    z()
                }) : H && $ ? z() : (R.restTimeoutPending = !0, R.restTimeout.start(Q, z))
            }
        }
    }, [n, R, M, w, i, g, P, F])
}
var bc = "Escape";

function Fr(e) {
    return Pt && e.movementX === 0 && e.movementY === 0
}

function io(e, t, n) {
    switch (e) {
        case "vertical":
            return t;
        case "horizontal":
            return n;
        default:
            return t || n
    }
}

function En(e, t) {
    return io(t, e === "ArrowUp" || e === "ArrowDown", e === "ArrowLeft" || e === "ArrowRight")
}

function xo(e, t, n) {
    return io(t, e === "ArrowDown", n ? e === "ArrowLeft" : e === "ArrowRight") || e === "Enter" || e === " " || e === ""
}

function Rc(e, t, n) {
    return io(t, n ? e === ls : e === fs, e === Ia)
}

function yc(e, t, n, o) {
    const r = n ? e === fs : e === ls,
        i = e === wa;
    return t === "both" || t === "horizontal" && o ? e === bc : io(t, r, i)
}

function Ec(e, t) {
    const {
        listRef: n,
        activeIndex: o,
        onNavigate: r = () => {},
        enabled: i = !0,
        selectedIndex: c = null,
        allowEscape: f = !1,
        loopFocus: u = !1,
        nested: a = !1,
        rtl: l = !1,
        virtual: m = !1,
        focusItemOnOpen: d = "auto",
        focusItemOnHover: v = !0,
        openOnArrowKeyDown: b = !0,
        disabledIndices: g = void 0,
        orientation: p = "vertical",
        parentOrientation: y,
        id: h,
        resetOnPointerLeave: R = !0,
        externalTree: x,
        grid: S
    } = t, E = S != null, P = "rootStore" in e ? e.rootStore : e, T = P.useState("open"), C = P.useState("floatingElement"), I = P.useState("domReferenceElement"), M = P.context.dataRef, F = Oo(C), w = Io(I), N = Ae(F), O = pt(), k = ut(x), D = s.useRef(d), L = s.useRef(c ? ? -1), _ = s.useRef(null), ne = s.useRef(!0), $ = te(A => {
        r(L.current === -1 ? null : L.current, A)
    }), H = s.useRef(!!C), Q = s.useRef(T), z = s.useRef(!1), J = s.useRef(!1), Y = s.useRef(null), pe = Ae(g), V = Ae(T), U = Ae(c), re = Ae(R), se = bt(), G = bt(), ce = te(() => {
        function A(X) {
            m ? k ? .events.emit("virtualfocus", X) : Y.current = On(X, {
                sync: z.current,
                preventScroll: !0
            })
        }
        const j = n.current[L.current],
            he = J.current;
        j && A(j), (z.current ? X => X() : X => se.request(X))(() => {
            const X = n.current[L.current] || j;
            X && (j || A(X), Z && (he || !ne.current) && X.scrollIntoView ? .({
                block: "nearest",
                inline: "nearest"
            }))
        })
    });
    q(() => {
        M.current.orientation = p
    }, [M, p]), q(() => {
        i && (T && C ? (L.current = c ? ? -1, D.current && c != null && (J.current = !0, $())) : H.current && (L.current = -1, $()))
    }, [i, T, C, c, $]), q(() => {
        if (i) {
            if (!T) {
                z.current = !1;
                return
            }
            if (C)
                if (o == null) {
                    if (z.current = !1, U.current != null) return;
                    if (H.current && (L.current = -1, ce()), (!Q.current || !H.current) && D.current && (_.current != null || D.current === !0 && _.current == null)) {
                        let A = 0;
                        const j = () => {
                            n.current[0] == null ? (A < 2 && (A ? he => G.request(he) : queueMicrotask)(j), A += 1) : (L.current = _.current == null || xo(_.current, p, l) || a ? In(n) : Mo(n), _.current = null, $())
                        };
                        j()
                    }
                } else Dt(n.current, o) || (L.current = o, ce(), J.current = !1)
        }
    }, [i, T, C, o, U, a, n, p, l, $, ce, G]), q(() => {
        if (!i || C || !k || m || !H.current) return;
        const A = k.nodesRef.current,
            j = A.find(K => K.id === O) ? .context ? .elements.floating,
            he = _e(Ee(I ? ? j ? ? null)),
            X = A.some(K => K.context && ee(K.context.elements.floating, he));
        j && !X && ne.current && j.focus({
            preventScroll: !0
        })
    }, [i, C, I, k, O, m]), q(() => {
        Q.current = T, H.current = !!C
    }), q(() => {
        T || (_.current = null, D.current = d)
    }, [T, d]);
    const le = o != null,
        ve = te(A => {
            if (!V.current) return;
            const j = n.current.indexOf(A.currentTarget);
            j !== -1 && (L.current !== j || o !== j) && (L.current = j, $(A))
        }),
        ie = te(() => y ? ? k ? .nodesRef.current.find(A => A.id === O) ? .context ? .dataRef ? .current.orientation),
        oe = te(() => In(n, pe.current)),
        ae = te(A => {
            if (ne.current = !1, z.current = !0, A.which === 229 || !V.current && A.currentTarget === N.current) return;
            if (a && yc(A.key, p, l, E)) {
                En(A.key, ie()) || Ue(A), P.setOpen(!1, ue(Po, A.nativeEvent)), ke(I) && (m ? k ? .events.emit("virtualfocus", I) : I.focus());
                return
            }
            const j = L.current,
                he = In(n, g),
                X = Mo(n, g);
            if (w || (A.key === "Home" && (Ue(A), L.current = he, $(A)), A.key === "End" && (Ue(A), L.current = X, $(A))), S != null) {
                const K = S(A, L.current, n, p, u, l, g, he, X);
                if (K != null && (L.current = K, $(A)), p === "both") return
            }
            if (En(A.key, p)) {
                if (Ue(A), T && !m && _e(A.currentTarget.ownerDocument) === A.currentTarget) {
                    L.current = xo(A.key, p, l) ? he : X, $(A);
                    return
                }
                xo(A.key, p, l) ? u ? j >= X ? f && j !== n.current.length ? L.current = -1 : (z.current = !1, L.current = he) : L.current = Be(n.current, {
                    startingIndex: j,
                    disabledIndices: g
                }) : L.current = Math.min(X, Be(n.current, {
                    startingIndex: j,
                    disabledIndices: g
                })) : u ? j <= he ? f && j !== -1 ? L.current = n.current.length : (z.current = !1, L.current = X) : L.current = Be(n.current, {
                    startingIndex: j,
                    decrement: !0,
                    disabledIndices: g
                }) : L.current = Math.max(he, Be(n.current, {
                    startingIndex: j,
                    decrement: !0,
                    disabledIndices: g
                })), Dt(n.current, L.current) && (L.current = -1), $(A)
            }
        }),
        Z = s.useMemo(() => ({
            onFocus(A) {
                z.current = !0, ve(A)
            },
            onClick: ({
                currentTarget: A
            }) => A.focus({
                preventScroll: !0
            }),
            onMouseMove(A) {
                Fr(A) || (z.current = !0, J.current = !1, v && ve(A))
            },
            onPointerLeave(A) {
                if (!V.current || !ne.current || A.pointerType === "touch") return;
                z.current = !0;
                const j = A.relatedTarget;
                if (!(!v || n.current.includes(j)) && re.current && (Y.current ? .(), Y.current = null, L.current = -1, $(A), !m)) {
                    const he = N.current,
                        X = _e(Ee(he));
                    he && ee(he, X) && he.focus({
                        preventScroll: !0
                    })
                }
            }
        }), [ve, V, N, v, n, $, re, m]),
        de = s.useMemo(() => m && T && le && {
            "aria-activedescendant": `${h}-${o}`
        }, [m, T, le, h, o]),
        ge = s.useMemo(() => ({
            "aria-orientation": p === "both" ? void 0 : p,
            ...w ? {} : de,
            onKeyDown(A) {
                if (A.key === "Tab" && A.shiftKey && T && !m) {
                    const j = De(A.nativeEvent);
                    if (j && !ee(N.current, j)) return;
                    Ue(A), P.setOpen(!1, ue(Ft, A.nativeEvent)), ke(I) && I.focus();
                    return
                }
                ae(A)
            },
            onPointerMove(A) {
                Fr(A) || (ne.current = !0)
            }
        }), [de, ae, N, p, w, P, T, m, I]),
        be = s.useMemo(() => {
            function A(X) {
                P.setOpen(!0, ue(Po, X.nativeEvent, X.currentTarget))
            }

            function j(X) {
                d === "auto" && us(X.nativeEvent) && (D.current = !m)
            }

            function he(X) {
                D.current = d, d === "auto" && Xo(X.nativeEvent) && (D.current = !0)
            }
            return {
                onKeyDown(X) {
                    const K = P.select("open");
                    ne.current = !1;
                    const Ce = X.key.startsWith("Arrow"),
                        Pe = Rc(X.key, ie(), l),
                        Ne = En(X.key, p),
                        Me = (a ? Pe : Ne) || X.key === "Enter" || X.key.trim() === "";
                    if (m && K) return ae(X);
                    if (!(!K && !b && Ce)) {
                        if (Me) {
                            const He = En(X.key, ie());
                            _.current = a && He ? null : X.key
                        }
                        if (a) {
                            Pe && (Ue(X), K ? (L.current = oe(), $(X)) : A(X));
                            return
                        }
                        Ne && (U.current != null && (L.current = U.current), Ue(X), !K && b ? A(X) : ae(X), K && $(X))
                    }
                },
                onFocus(X) {
                    P.select("open") && !m && (L.current = -1, $(X))
                },
                onPointerDown: he,
                onPointerEnter: he,
                onMouseDown: j,
                onClick: j
            }
        }, [ae, d, oe, a, $, P, b, p, ie, l, U, m]),
        we = s.useMemo(() => ({ ...de,
            ...be
        }), [de, be]);
    return s.useMemo(() => i ? {
        reference: we,
        floating: ge,
        item: Z,
        trigger: be
    } : {}, [i, we, ge, be, Z])
}

function xc(e, t) {
    const {
        listRef: n,
        elementsRef: o,
        activeIndex: r,
        onMatch: i,
        disabledIndices: c,
        onTyping: f,
        enabled: u = !0,
        resetMs: a = 750,
        selectedIndex: l = null
    } = t, m = "rootStore" in e ? e.rootStore : e, d = m.useState("open"), v = Fe(), b = s.useRef(""), g = s.useRef(l ? ? r ? ? -1), p = s.useRef(null), y = te(x => {
        function S(F) {
            return o ? .current[F]
        }

        function E(F) {
            const w = S(F);
            return w && !_n(w) || w ? .matches(":disabled") ? !1 : c == null || !Wt(Nt, F, c)
        }

        function P(F, w, N = 0) {
            if (F.length === 0) return -1;
            const O = (N % F.length + F.length) % F.length,
                k = w.toLowerCase();
            for (let D = 0; D < F.length; D += 1) {
                const L = (O + D) % F.length;
                if (!(!F[L] ? .toLowerCase().startsWith(k) || !E(L))) return L
            }
            return -1
        }
        const T = n.current;
        if (b.current.length > 0 && x.key === " " && (Ue(x), f ? .(!0)), b.current.length > 0 && b.current[0] !== " " && P(T, b.current) === -1 && x.key !== " " && f ? .(!1), T == null || x.key.length !== 1 || x.ctrlKey || x.metaKey || x.altKey) return;
        d && x.key !== " " && (Ue(x), f ? .(!0));
        const C = b.current === "";
        C && (g.current = l ? ? r ? ? -1), T.every((F, w) => F && E(w) ? F[0] ? .toLowerCase() !== F[1] ? .toLowerCase() : !0) && b.current === x.key && (b.current = "", g.current = p.current), b.current += x.key, v.start(a, () => {
            b.current = "", g.current = p.current, f ? .(!1)
        });
        const I = ((C ? l ? ? r ? ? -1 : g.current) ? ? 0) + 1,
            M = P(T, b.current, I);
        M !== -1 ? (i ? .(M), p.current = M) : x.key !== " " && (b.current = "", f ? .(!1))
    }), h = te(x => {
        const S = x.relatedTarget,
            E = m.select("domReferenceElement"),
            P = m.select("floatingElement");
        ee(E, S) || ee(P, S) || (v.clear(), b.current = "", g.current = p.current, f ? .(!1))
    });
    q(() => {
        !d && l !== null || (v.clear(), p.current = null, b.current !== "" && (b.current = ""))
    }, [d, l, v]);
    const R = s.useMemo(() => ({
        onKeyDown: y,
        onBlur: h
    }), [y, h]);
    return s.useMemo(() => u ? {
        reference: R,
        floating: R
    } : {}, [u, R])
}
var Nr = .1,
    Cc = Nr * Nr,
    Ie = .5;

function xn(e, t, n, o, r, i) {
    return o >= t != i >= t && e <= (r - n) * (t - o) / (i - o) + n
}

function Cn(e, t, n, o, r, i, c, f, u, a) {
    let l = !1;
    return xn(e, t, n, o, r, i) && (l = !l), xn(e, t, r, i, c, f) && (l = !l), xn(e, t, c, f, u, a) && (l = !l), xn(e, t, u, a, n, o) && (l = !l), l
}

function Sc(e, t, n) {
    return e >= n.x && e <= n.x + n.width && t >= n.y && t <= n.y + n.height
}

function Sn(e, t, n, o, r, i) {
    return e >= Math.min(n, r) && e <= Math.max(n, r) && t >= Math.min(o, i) && t <= Math.max(o, i)
}

function ln(e = {}) {
    const {
        blockPointerEvents: t = !1
    } = e, n = new lt, o = ({
        x: r,
        y: i,
        placement: c,
        elements: f,
        onClose: u,
        nodeId: a,
        tree: l
    }) => {
        const m = c ? .split("-")[0];
        let d = !1,
            v = null,
            b = null,
            g = typeof performance < "u" ? performance.now() : 0;

        function p(h, R) {
            const x = performance.now(),
                S = x - g;
            if (v === null || b === null || S === 0) return v = h, b = R, g = x, !1;
            const E = h - v,
                P = R - b,
                T = E * E + P * P,
                C = S * S * Cc;
            return v = h, b = R, g = x, T < C
        }

        function y() {
            n.clear(), u()
        }
        return function(R) {
            n.clear();
            const x = f.domReference,
                S = f.floating;
            if (!x || !S || m == null || r == null || i == null) return;
            const {
                clientX: E,
                clientY: P
            } = R, T = De(R), C = R.type === "mouseleave", I = ee(S, T), M = ee(x, T);
            if (I && (d = !0, !C)) return;
            if (M && (d = !1, !C)) {
                d = !0;
                return
            }
            if (C && Oe(R.relatedTarget) && ee(S, R.relatedTarget)) return;

            function F() {
                return !!(l && dt(l.nodesRef.current, a).length > 0)
            }

            function w() {
                F() || y()
            }
            if (F()) return;
            const N = x.getBoundingClientRect(),
                O = S.getBoundingClientRect(),
                k = r > O.right - O.width / 2,
                D = i > O.bottom - O.height / 2,
                L = O.width > N.width,
                _ = O.height > N.height,
                ne = (L ? N : O).left,
                $ = (L ? N : O).right,
                H = (_ ? N : O).top,
                Q = (_ ? N : O).bottom;
            if (m === "top" && i >= N.bottom - 1 || m === "bottom" && i <= N.top + 1 || m === "left" && r >= N.right - 1 || m === "right" && r <= N.left + 1) {
                w();
                return
            }
            let z = !1;
            switch (m) {
                case "top":
                    z = Sn(E, P, ne, N.top + 1, $, O.bottom - 1);
                    break;
                case "bottom":
                    z = Sn(E, P, ne, O.top + 1, $, N.bottom - 1);
                    break;
                case "left":
                    z = Sn(E, P, O.right - 1, Q, N.left + 1, H);
                    break;
                case "right":
                    z = Sn(E, P, N.right - 1, Q, O.left + 1, H)
            }
            if (z) return;
            if (d && !Sc(E, P, N)) {
                w();
                return
            }
            if (!C && p(E, P)) {
                w();
                return
            }
            let J = !1;
            switch (m) {
                case "top":
                    {
                        const Y = L ? Ie / 2 : Ie * 4,
                            pe = L || k ? r + Y : r - Y,
                            V = L ? r - Y : k ? r + Y : r - Y,
                            U = i + Ie + 1,
                            re = k || L ? O.bottom - Ie : O.top,
                            se = k ? L ? O.bottom - Ie : O.top : O.bottom - Ie;J = Cn(E, P, pe, U, V, U, O.left, re, O.right, se);
                        break
                    }
                case "bottom":
                    {
                        const Y = L ? Ie / 2 : Ie * 4,
                            pe = L || k ? r + Y : r - Y,
                            V = L ? r - Y : k ? r + Y : r - Y,
                            U = i - Ie,
                            re = k || L ? O.top + Ie : O.bottom,
                            se = k ? L ? O.top + Ie : O.bottom : O.top + Ie;J = Cn(E, P, pe, U, V, U, O.left, re, O.right, se);
                        break
                    }
                case "left":
                    {
                        const Y = _ ? Ie / 2 : Ie * 4,
                            pe = _ || D ? i + Y : i - Y,
                            V = _ ? i - Y : D ? i + Y : i - Y,
                            U = r + Ie + 1,
                            re = D || _ ? O.right - Ie : O.left,
                            se = D ? _ ? O.right - Ie : O.left : O.right - Ie;J = Cn(E, P, re, O.top, se, O.bottom, U, pe, U, V);
                        break
                    }
                case "right":
                    {
                        const Y = _ ? Ie / 2 : Ie * 4,
                            pe = _ || D ? i + Y : i - Y,
                            V = _ ? i - Y : D ? i + Y : i - Y,
                            U = r - Ie,
                            re = D || _ ? O.left + Ie : O.right,
                            se = D ? _ ? O.left + Ie : O.right : O.left + Ie;J = Cn(E, P, U, pe, U, V, re, O.top, se, O.bottom);
                        break
                    }
            }
            J ? d || n.start(40, w) : w()
        }
    };
    return o.__options = { ...e,
        blockPointerEvents: t
    }, o
}
var Ys = class extends Gt {
        setState(e) {}
        update(e) {}
        set(e, t) {}
        notifyAll() {}
    },
    Pc = { ...no,
        disabled: e => e.disabled,
        instantType: e => e.instantType,
        isInstantPhase: e => e.isInstantPhase,
        trackCursorAxis: e => e.trackCursorAxis,
        disableHoverablePopup: e => e.disableHoverablePopup,
        lastOpenChangeReason: e => e.openChangeReason,
        closeOnClick: e => e.closeOnClick,
        closeDelay: e => e.closeDelay,
        adaptiveOrigin: e => e.adaptiveOrigin
    },
    Tc = class extends Gt {
        constructor(e, t, n) {
            const o = new Ht;
            super(wc(e, o, t, n), Ic(o), Pc)
        }
        setOpen = (e, t) => {
            dc(this, e, t, {
                extraState: {
                    openChangeReason: t.reason
                }
            })
        };
        cancelPendingOpen(e) {
            this.state.floatingRootContext.dispatchOpenChange(!1, ue(nn, e))
        }
    };

function wc(e, t, n, o = !1) {
    const r = { ...to(),
        disabled: !1,
        instantType: void 0,
        isInstantPhase: !1,
        trackCursorAxis: "none",
        disableHoverablePopup: !1,
        openChangeReason: null,
        closeOnClick: !0,
        closeDelay: 0,
        adaptiveOrigin: void 0,
        ...e
    };
    return r.floatingRootContext = nr(t, n, o), r
}

function Ic(e) {
    return {
        popupRef: s.createRef(),
        onOpenChange: void 0,
        onOpenChangeComplete: void 0,
        triggerElements: e
    }
}
var El = Go(function(t) {
    const {
        disabled: n = !1,
        defaultOpen: o = !1,
        open: r,
        disableHoverablePopup: i = !1,
        trackCursorAxis: c = "none",
        actionsRef: f,
        onOpenChange: u,
        onOpenChangeComplete: a,
        handle: l,
        triggerId: m,
        defaultTriggerId: d = null,
        children: v
    } = t, b = er((M, F) => new Tc({
        open: o,
        openProp: r,
        activeTriggerId: d,
        triggerIdProp: m
    }, M, F));
    b.useControlledProp("openProp", r), b.useControlledProp("triggerIdProp", m), b.useContextCallback("onOpenChange", u), b.useContextCallback("onOpenChangeComplete", a);
    const g = b.useState("open"),
        p = !n && g,
        y = b.useState("activeTriggerId"),
        h = b.useState("mounted"),
        R = b.useState("payload");
    b.useSyncedValues({
        trackCursorAxis: c,
        disableHoverablePopup: i,
        disabled: n
    }), Qn(b, {
        closeOnActiveTriggerUnmount: !0
    });
    const {
        forceUnmount: x,
        transitionStatus: S
    } = Jn(p, b), E = b.useState("isInstantPhase"), P = b.useState("instantType"), T = b.useState("lastOpenChangeReason"), C = s.useRef(null);
    q(() => {
        g && n && b.setOpen(!1, ue(Ji))
    }, [g, n, b]), q(() => {
        S === "ending" && T === "none" || S !== "ending" && E ? (P !== "delay" && (C.current = P), b.set("instantType", "delay")) : C.current !== null && (b.set("instantType", C.current), C.current = null)
    }, [S, E, T, P, b]), q(() => {
        p && y == null && b.set("payload", void 0)
    }, [b, y, p]), s.useImperativeHandle(f, () => ({
        unmount: x,
        close: () => b.setOpen(!1, ue(_t))
    }), [x, b]);
    const I = p || h || !n && c !== "none";
    return (0, B.jsxs)(as.Provider, {
        value: b,
        children: [l && (0, B.jsx)(Xn, {
            handle: l,
            store: b
        }), I && (0, B.jsx)(Oc, {
            store: b,
            disabled: n,
            trackCursorAxis: c
        }), typeof v == "function" ? v({
            payload: R
        }) : v]
    })
});

function Oc({
    store: e,
    disabled: t,
    trackCursorAxis: n
}) {
    const o = e.useState("floatingRootContext"),
        r = cn(o, {
            enabled: !t,
            referencePress: () => e.select("closeOnClick")
        }),
        i = nc(o, {
            enabled: !t && n !== "none",
            axis: n === "none" ? void 0 : n
        }),
        c = s.useMemo(() => yt(i.reference, r.reference), [i.reference, r.reference]);
    return Zn(e, {
        activeTriggerProps: c,
        inactiveTriggerProps: c,
        popupProps: r.floating ? ? Le
    }), null
}
var xl = (function(e) {
        return e.open = "data-open", e.closed = "data-closed", e[e.startingStyle = So.startingStyle] = "startingStyle", e[e.endingStyle = So.endingStyle] = "endingStyle", e.anchorHidden = "data-anchor-hidden", e.side = "data-side", e.align = "data-align", e
    })({}),
    Mc = {
        "data-popup-open": ""
    },
    kc = {
        "data-popup-open": "",
        "data-pressed": ""
    },
    Ac = {
        "data-open": ""
    },
    Dc = {
        "data-closed": ""
    },
    Fc = {
        "data-anchor-hidden": ""
    },
    fn = {
        open(e) {
            return e ? Mc : null
        }
    },
    en = {
        open(e) {
            return e ? kc : null
        }
    },
    dn = {
        open(e) {
            return e ? Ac : Dc
        },
        anchorHidden(e) {
            return e ? Fc : null
        }
    },
    Yt = { ...dn,
        ...tn
    },
    $s = s.createContext(void 0);

function Nc() {
    return s.useContext($s)
}
var Xs = "data-base-ui-tooltip-trigger";

function Hr(e) {
    if ("composedPath" in e) {
        const n = e.composedPath();
        for (let o = 0; o < n.length; o += 1) {
            const r = n[o];
            if (Oe(r)) return r
        }
    }
    const t = e.target;
    return Oe(t) ? t : null
}

function Hc(e) {
    let t = e;
    for (; t;) {
        const n = t.closest(`[${Xs}]`);
        if (n) return n;
        const o = t.getRootNode();
        t = "host" in o && Oe(o.host) ? o.host : null
    }
    return null
}
var Cl = is(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            handle: c,
            payload: f,
            disabled: u,
            delay: a,
            closeOnClick: l = !0,
            closeDelay: m,
            id: d,
            ...v
        } = t, b = on(!0), g = oo(c) ? ? b;
        if (!g) throw new Error(Te(82));
        const p = Ke(d),
            y = g.useState("isTriggerActive", p),
            h = g.useState("isOpenedByTrigger", p),
            R = g.useState("floatingRootContext"),
            x = s.useRef(null),
            S = a ? ? 600,
            E = m ? ? 0,
            {
                registerTrigger: P,
                isMountedByThisTrigger: T
            } = qn(p, x, g, {
                payload: f,
                closeOnClick: l,
                closeDelay: E
            }),
            C = Nc(),
            {
                delayRef: I,
                isInstantPhase: M,
                hasProvider: F
            } = Ha(R, {
                open: h
            }),
            w = ro(R);
        g.useSyncedValue("isInstantPhase", M);
        const N = g.useState("disabled"),
            O = u ? ? N,
            k = Ae(O),
            D = g.useState("trackCursorAxis"),
            L = g.useState("disableHoverablePopup"),
            _ = s.useRef(!1),
            ne = Fe(),
            $ = s.useRef(void 0);

        function H() {
            return F ? Ct(I.current, "open") === 0 ? 0 : a ? ? C ? ? 600 : S
        }

        function Q(U) {
            const re = x.current;
            if (!re || !U) return !1;
            const se = Hc(U);
            return se !== null && se !== re && ee(re, se)
        }

        function z(U) {
            const re = Q(U);
            return _.current = re, re && (w.openChangeTimeout.clear(), w.restTimeout.clear(), w.restTimeoutPending = !1, ne.clear()), re
        }
        const J = un(R, {
                enabled: !O,
                mouseOnly: !0,
                move: !1,
                handleClose: !L && D !== "both" ? ln() : null,
                restMs: H,
                delay() {
                    return m == null && F ? {
                        close: Ct(I.current, "close")
                    } : {
                        close: E
                    }
                },
                triggerElementRef: x,
                isActiveTrigger: y,
                isClosing: () => g.select("transitionStatus") === "ending",
                shouldOpen() {
                    return !_.current
                }
            }),
            Y = Ks(R, {
                enabled: !O
            }).reference,
            pe = U => {
                const re = _.current,
                    se = Hr(U),
                    G = z(se),
                    ce = x.current,
                    le = ce && se && ee(ce, se);
                if (G && g.select("open") && g.select("lastOpenChangeReason") === "trigger-hover") {
                    g.setOpen(!1, ue(Ve, U));
                    return
                }
                if (re && !G && le && !k.current && !g.select("open") && ce && Et($.current)) {
                    const ve = () => {
                            !_.current && !k.current && !g.select("open") && g.setOpen(!0, ue(Ve, U, ce))
                        },
                        ie = H();
                    ie === 0 ? (ne.clear(), ve()) : ne.start(ie, ve)
                }
            },
            V = g.useState("triggerProps", T);
        return Re("button", t, {
            state: {
                open: h
            },
            ref: [n, P, x],
            props: [J, Y, T || D !== "none" ? V : void 0, {
                onMouseOver(U) {
                    pe(U.nativeEvent)
                },
                onFocus(U) {
                    Q(Hr(U.nativeEvent)) && U.preventBaseUIHandler()
                },
                onMouseLeave() {
                    _.current = !1, ne.clear(), $.current = void 0
                },
                onPointerEnter(U) {
                    $.current = U.pointerType
                },
                onPointerDown(U) {
                    $.current = U.pointerType, g.set("closeOnClick", l), l && !g.select("open") && g.cancelPendingOpen(U.nativeEvent)
                },
                onClick(U) {
                    l && !g.select("open") && g.cancelPendingOpen(U.nativeEvent)
                },
                id: p,
                "data-trigger-disabled": O ? "" : void 0,
                [Xs]: O ? void 0 : ""
            }, v],
            stateAttributesMapping: fn
        })
    }),
    zs = s.createContext(void 0);

function Lc() {
    const e = s.useContext(zs);
    if (e === void 0) throw new Error(Te(70));
    return e
}
var Bc = s.forwardRef(function(t, n) {
        const {
            children: o,
            container: r,
            className: i,
            render: c,
            style: f,
            ...u
        } = t, {
            node: a,
            subtree: l
        } = As({
            container: r,
            ref: n,
            componentProps: t,
            elementProps: u
        });
        return !l && !a ? null : (0, B.jsxs)(s.Fragment, {
            children: [l, a && $e.createPortal(o, a)]
        })
    }),
    Sl = s.forwardRef(function(t, n) {
        const {
            keepMounted: o = !1,
            ...r
        } = t;
        return on().useState("mounted") || o ? (0, B.jsx)(zs.Provider, {
            value: o,
            children: (0, B.jsx)(Bc, {
                ref: n,
                ...r
            })
        }) : null
    }),
    qs = s.createContext(void 0);

function Qs() {
    const e = s.useContext(qs);
    if (e === void 0) throw new Error(Te(71));
    return e
}
var jc = s.createContext(void 0);

function pn() {
    return s.useContext(jc) ? .direction ? ? "ltr"
}
var _c = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: o,
                placement: r,
                rects: i,
                platform: c,
                elements: f,
                middlewareData: u
            } = t, {
                element: a,
                padding: l = 0,
                offsetParent: m = "real"
            } = ia(e, t) || {};
            if (a == null) return {};
            const d = na(l),
                v = {
                    x: n,
                    y: o
                },
                b = ca(r),
                g = aa(b),
                p = await c.getDimensions(a),
                y = b === "y",
                h = y ? "top" : "left",
                R = y ? "bottom" : "right",
                x = y ? "clientHeight" : "clientWidth",
                S = i.reference[g] + i.reference[b] - v[b] - i.floating[g],
                E = v[b] - i.reference[b],
                P = m === "real" ? await c.getOffsetParent ? .(a) : f.floating;
            let T = f.floating[x] || i.floating[g];
            (!T || !await c.isElement ? .(P)) && (T = f.floating[x] || i.floating[g]);
            const C = S / 2 - E / 2,
                I = T / 2 - p[g] / 2 - 1,
                M = Math.min(d[h], I),
                F = Math.min(d[R], I),
                w = M,
                N = T - p[g] - F,
                O = T / 2 - p[g] / 2 + C,
                k = sa(w, O, N),
                D = !u.arrow && Uo(r) != null && O !== k && i.reference[g] / 2 - (O < w ? M : F) - p[g] / 2 < 0,
                L = D ? O < w ? O - w : O - N : 0;
            return {
                [b]: v[b] + L,
                data: {
                    [b]: k,
                    centerOffset: O - k - L,
                    ...D && {
                        alignmentOffset: L
                    }
                },
                reset: D
            }
        }
    }),
    Vc = (e, t) => ({ ..._c(e),
        options: [e, t]
    }),
    Wc = {
        name: "hide",
        async fn(e) {
            const {
                width: t,
                height: n,
                x: o,
                y: r
            } = e.rects.reference, i = t === 0 && n === 0 && o === 0 && r === 0, c = await e.platform.detectOverflow(e, {
                elementContext: "reference"
            });
            return {
                data: {
                    referenceHidden: c.top - n >= 0 || c.right - t >= 0 || c.bottom - n >= 0 || c.left - t >= 0 || i
                }
            }
        }
    },
    Mn = {
        sideX: "left",
        sideY: "top"
    },
    Lr = "--available-width",
    Br = "--available-height";

function Js(e, t, n) {
    const o = e === "inline-start" || e === "inline-end";
    return {
        top: "top",
        right: o ? n ? "inline-start" : "inline-end" : "right",
        bottom: "bottom",
        left: o ? n ? "inline-end" : "inline-start" : "left"
    }[t]
}

function jr(e, t, n) {
    const {
        rects: o,
        placement: r
    } = e;
    return {
        side: Js(t, qt(r), n),
        align: Uo(r) || "center",
        anchor: {
            width: o.reference.width,
            height: o.reference.height
        },
        positioner: {
            width: o.floating.width,
            height: o.floating.height
        }
    }
}

function sr(e) {
    return Zs(e, hc)
}

function Zs(e, t) {
    const {
        anchor: n,
        positionMethod: o = "absolute",
        side: r = "bottom",
        sideOffset: i = 0,
        align: c = "center",
        alignOffset: f = 0,
        collisionBoundary: u,
        collisionPadding: a = 5,
        sticky: l = !1,
        arrowPadding: m = 5,
        disableAnchorTracking: d = !1,
        inline: v,
        keepMounted: b = !1,
        floatingRootContext: g,
        mounted: p,
        collisionAvoidance: y,
        shift: h,
        nodeId: R,
        adaptiveOrigin: x,
        lazyFlip: S = !1,
        externalTree: E
    } = e, [P, T] = s.useState(null);
    !p && P !== null && T(null);
    const C = y.side || "flip",
        I = y.align || "flip",
        M = y.fallbackAxisSide || "end",
        F = h ? .crossAxis ? ? !1,
        w = h ? .rootBoundary,
        N = typeof n == "function" ? n : void 0,
        O = te(N),
        k = N ? O : n,
        D = Ae(n),
        L = Ae(p),
        _ = pn() === "rtl",
        ne = P || {
            top: "top",
            right: "right",
            bottom: "bottom",
            left: "left",
            "inline-end": _ ? "left" : "right",
            "inline-start": _ ? "right" : "left"
        }[r],
        $ = c === "center" ? ne : `${ne}-${c}`;
    let H = a;
    typeof H == "number" ? H = {
        top: H,
        right: H,
        bottom: H,
        left: H
    } : H && (H = {
        top: H.top || 0,
        right: H.right || 0,
        bottom: H.bottom || 0,
        left: H.left || 0
    });
    const Q = 1,
        z = r === "bottom" ? Q : 0,
        J = r === "top" ? Q : 0,
        Y = r === "right" ? Q : 0,
        pe = r === "left" ? Q : 0,
        V = {
            boundary: u === "clipping-ancestors" ? "clippingAncestors" : u,
            padding: H
        },
        U = s.useRef(null),
        re = Ae(i),
        se = Ae(f),
        G = typeof i != "function" ? i : 0,
        ce = typeof f != "function" ? f : 0,
        le = [];
    v && le.push(v), le.push(oa(xe => {
        const je = jr(xe, r, _),
            We = typeof re.current == "function" ? re.current(je) : re.current,
            Xe = typeof se.current == "function" ? se.current(je) : se.current;
        return {
            mainAxis: We,
            crossAxis: Xe,
            alignmentAxis: Xe
        }
    }, [G, ce, _, r]));
    const ve = I === "none" && C !== "shift",
        ie = !ve && (l || F || C === "shift"),
        oe = C === "none" ? null : fa({ ...V,
            padding: {
                top: H.top + Q + z,
                right: H.right + Q + pe,
                bottom: H.bottom + Q + J,
                left: H.left + Q + Y
            },
            mainAxis: !F && C === "flip",
            crossAxis: I === "flip" ? "alignment" : !1,
            fallbackAxisSideDirection: M
        }),
        ae = ve ? null : da({ ...V,
            rootBoundary: w,
            mainAxis: I !== "none",
            crossAxis: ie,
            limiter: l || F ? void 0 : ua(xe => {
                if (!U.current) return {};
                const {
                    width: je,
                    height: We
                } = U.current.getBoundingClientRect(), Xe = yr(qt(xe.placement)), tt = Xe === "y" ? je : We, ze = Xe === "y" ? H.left + H.right : H.top + H.bottom;
                return {
                    offset: tt / 2 + ze / 2
                }
            })
        }, [V, l, F, w, H, I]);
    C === "shift" || I === "shift" || c === "center" ? le.push(ae, oe) : le.push(oe, ae), le.push(pa({ ...V,
        apply({
            elements: {
                floating: xe
            },
            availableWidth: je,
            availableHeight: We,
            rects: Xe
        }) {
            if (!L.current) return;
            const tt = xe.style;
            tt.setProperty(Lr, `${je}px`), tt.setProperty(Br, `${We}px`);
            const ze = Je(xe).devicePixelRatio || 1,
                {
                    x: Mt,
                    y: jt,
                    width: nt,
                    height: W
                } = Xe.reference,
                fe = (Math.round((Mt + nt) * ze) - Math.round(Mt * ze)) / ze,
                ye = (Math.round((jt + W) * ze) - Math.round(jt * ze)) / ze;
            tt.setProperty("--anchor-width", `${fe}px`), tt.setProperty("--anchor-height", `${ye}px`)
        }
    }), Vc(xe => ({
        element: U.current || Ee(xe.elements.floating).createElement("div"),
        padding: m,
        offsetParent: "floating"
    }), [m]), {
        name: "transformOrigin",
        fn(xe) {
            const {
                elements: je,
                middlewareData: We,
                placement: Xe,
                rects: tt,
                y: ze
            } = xe, Mt = qt(Xe), jt = yr(Mt), nt = U.current, W = We.arrow ? .x || 0, fe = We.arrow ? .y || 0, ye = nt ? .clientWidth || 0, Se = nt ? .clientHeight || 0, Ye = W + ye / 2, mt = fe + Se / 2, kt = Math.abs(We.shift ? .y || 0), At = tt.reference.height / 2, $t = typeof i == "function" ? i(jr(xe, r, _)) : i, Wi = kt > $t, Ui = {
                top: `${Ye}px calc(100% + ${$t}px)`,
                bottom: `${Ye}px ${-$t}px`,
                left: `calc(100% + ${$t}px) ${mt}px`,
                right: `${-$t}px ${mt}px`
            }[Mt], Ki = `${Ye}px ${tt.reference.y+At-ze}px`;
            return je.floating.style.setProperty("--transform-origin", ie && jt === "y" && Wi ? Ki : Ui), {}
        }
    }, Wc, x), q(() => {
        !p && g && g.update({
            referenceElement: null,
            floatingElement: null,
            domReferenceElement: null,
            positionReference: null
        })
    }, [p, g]);
    const Z = s.useMemo(() => ({
            elementResize: !d && typeof ResizeObserver < "u",
            layoutShift: !d && typeof IntersectionObserver < "u"
        }), [d]),
        {
            refs: de,
            elements: ge,
            x: be,
            y: we,
            middlewareData: A,
            update: j,
            placement: he,
            context: X,
            isPositioned: K,
            floatingStyles: Ce
        } = t({
            rootContext: g,
            open: b ? p : void 0,
            placement: $,
            middleware: le,
            strategy: o,
            whileElementsMounted: b ? void 0 : (...xe) => br(...xe, Z),
            nodeId: R,
            externalTree: E
        }),
        {
            sideX: Pe,
            sideY: Ne
        } = A.adaptiveOrigin || Mn,
        Me = K ? o : "fixed",
        He = s.useMemo(() => {
            let xe;
            return K ? x ? xe = {
                position: Me,
                [Pe]: be,
                [Ne]: we
            } : xe = { ...Ce,
                position: Me
            } : xe = {
                position: Me,
                top: 0,
                left: 0
            }, xe[Lr] = "100vw", xe[Br] = "100vh", K || (xe.opacity = 0), xe
        }, [x, Me, Pe, be, Ne, we, Ce, K]),
        et = s.useRef(null);
    q(() => {
        if (!p) return;
        const xe = D.current,
            je = typeof xe == "function" ? xe() : xe,
            We = (_r(je) ? je.current : je) || null;
        We !== et.current && (de.setPositionReference(We), et.current = We)
    }, [p, de, k, D]), s.useEffect(() => {
        if (!p) return;
        const xe = D.current;
        typeof xe != "function" && _r(xe) && xe.current !== et.current && (de.setPositionReference(xe.current), et.current = xe.current)
    }, [p, de, k, D]), s.useEffect(() => {
        if (b && p && ge.reference && ge.floating) return br(ge.reference, ge.floating, j, Z)
    }, [b, p, ge, j, Z]);
    const Ge = qt(he),
        wt = Js(r, Ge, _),
        ht = Uo(he) || "center",
        It = !!A.hide ? .referenceHidden;
    q(() => {
        S && p && K && Ge !== ne && T(Ge)
    }, [S, p, K, Ge, ne]);
    const Ot = s.useMemo(() => ({
            position: "absolute",
            top: A.arrow ? .y,
            left: A.arrow ? .x
        }), [A.arrow]),
        Bt = A.arrow ? .centerOffset !== 0;
    return s.useMemo(() => ({
        positionerStyles: He,
        arrowStyles: Ot,
        arrowRef: U,
        arrowUncentered: Bt,
        side: wt,
        align: ht,
        physicalSide: Ge,
        anchorHidden: It,
        refs: de,
        context: X,
        isPositioned: K,
        update: j
    }), [He, Ot, U, Bt, wt, ht, Ge, It, de, X, K, j])
}

function _r(e) {
    return e != null && "current" in e
}

function gn(e) {
    return e === "starting" ? Xa : Le
}

function ao(e, t, {
    styles: n,
    transitionStatus: o,
    props: r,
    refs: i,
    hidden: c,
    inert: f = !1
}) {
    const u = { ...n
    };
    return f && (u.pointerEvents = "none"), Re("div", e, {
        state: t,
        ref: i,
        props: [{
            role: "presentation",
            hidden: c,
            style: u
        }, gn(o), r],
        stateAttributesMapping: dn
    })
}
var Pl = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            anchor: i,
            positionMethod: c = "absolute",
            side: f = "top",
            align: u = "center",
            sideOffset: a = 0,
            alignOffset: l = 0,
            collisionBoundary: m = "clipping-ancestors",
            collisionPadding: d = 5,
            arrowPadding: v = 5,
            sticky: b = !1,
            disableAnchorTracking: g = !1,
            collisionAvoidance: p = Wn,
            style: y,
            ...h
        } = t, R = on(), x = Lc(), S = R.useState("open"), E = R.useState("mounted"), P = R.useState("trackCursorAxis"), T = R.useState("disableHoverablePopup"), C = R.useState("floatingRootContext"), I = R.useState("instantType"), M = R.useState("transitionStatus"), F = R.useState("adaptiveOrigin"), w = sr({
            anchor: i,
            positionMethod: c,
            floatingRootContext: C,
            mounted: E,
            side: f,
            sideOffset: a,
            align: u,
            alignOffset: l,
            collisionBoundary: m,
            collisionPadding: d,
            sticky: b,
            arrowPadding: v,
            disableAnchorTracking: g,
            keepMounted: x,
            collisionAvoidance: p,
            adaptiveOrigin: F
        }), N = s.useMemo(() => ({
            open: S,
            side: w.side,
            align: w.align,
            anchorHidden: w.anchorHidden,
            instant: P !== "none" ? "tracking-cursor" : I
        }), [S, w.side, w.align, w.anchorHidden, P, I]), O = ao(t, N, {
            styles: w.positionerStyles,
            transitionStatus: M,
            props: h,
            refs: [n, R.useStateSetter("positionerElement")],
            hidden: !E,
            inert: !S || P === "both" || T
        });
        return (0, B.jsx)(qs.Provider, {
            value: w,
            children: O
        })
    }),
    Tl = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            ...c
        } = t, f = on(), {
            side: u,
            align: a
        } = Qs(), l = f.useState("open"), m = f.useState("instantType"), d = f.useState("transitionStatus"), v = f.useState("popupProps"), b = f.useState("floatingRootContext"), g = f.useState("disabled"), p = f.useState("closeDelay");
        st({
            open: l,
            ref: f.context.popupRef,
            onComplete() {
                l && f.context.onOpenChangeComplete ? .(!0)
            }
        }), so(b, {
            enabled: !g,
            closeDelay: p
        });
        const y = f.useStateSetter("popupElement");
        return Re("div", t, {
            state: {
                open: l,
                side: u,
                align: a,
                instant: m,
                transitionStatus: d
            },
            ref: [n, f.context.popupRef, y],
            props: [$n, v, gn(d), c],
            stateAttributesMapping: Yt
        })
    }),
    wl = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            ...c
        } = t, f = on(), {
            arrowRef: u,
            side: a,
            align: l,
            arrowUncentered: m,
            arrowStyles: d
        } = Qs(), v = {
            open: f.useState("open"),
            side: a,
            align: l,
            uncentered: m,
            instant: f.useState("instantType")
        };
        return Re("div", t, {
            state: v,
            ref: [n, u],
            props: [{
                style: d,
                "aria-hidden": !0
            }, c],
            stateAttributesMapping: dn
        })
    }),
    Il = function(t) {
        const {
            delay: n,
            closeDelay: o,
            timeout: r = 400
        } = t, i = s.useMemo(() => ({
            open: n,
            close: o
        }), [n, o]);
        return (0, B.jsx)($s.Provider, {
            value: n,
            children: (0, B.jsx)(Na, {
                delay: i,
                timeoutMs: r,
                children: t.children
            })
        })
    };

function hn(e) {
    return es(19) ? e : e ? "true" : void 0
}

function zt(e) {
    const t = Hn(e);
    let n = parseFloat(t.width) || 0,
        o = parseFloat(t.height) || 0;
    const r = ke(e),
        i = r ? e.offsetWidth : n,
        c = r ? e.offsetHeight : o;
    return (Rr(n) !== i || Rr(o) !== c) && (n = i, o = c), {
        width: n,
        height: o
    }
}
var Uc = {
        name: "adaptiveOrigin",
        async fn(e) {
            const {
                x: t,
                y: n,
                rects: {
                    floating: o
                },
                elements: {
                    floating: r
                },
                platform: i,
                strategy: c,
                placement: f
            } = e, u = Je(r), a = u.getComputedStyle(r);
            if (!(a.transitionDuration !== "0s" && a.transitionDuration !== "")) return {
                x: t,
                y: n,
                data: Mn
            };
            const l = await i.getOffsetParent ? .(r);
            let m = {
                width: 0,
                height: 0
            };
            if (c === "fixed" && u ? .visualViewport) m = {
                width: u.visualViewport.width,
                height: u.visualViewport.height
            };
            else if (l === u) {
                const y = Ee(r);
                m = {
                    width: y.documentElement.clientWidth,
                    height: y.documentElement.clientHeight
                }
            } else await i.isElement ? .(l) && (m = await i.getDimensions(l));
            const d = qt(f);
            let v = t,
                b = n;
            d === "left" && (v = m.width - (t + o.width)), d === "top" && (b = m.height - (n + o.height));
            const g = d === "left" ? "right" : Mn.sideX,
                p = d === "top" ? "bottom" : Mn.sideY;
            return {
                x: v,
                y: b,
                data: {
                    sideX: g,
                    sideY: p
                }
            }
        }
    },
    ei = s.createContext(void 0);

function mn(e) {
    const t = s.useContext(ei);
    if (t === void 0 && !e) throw new Error(Te(33));
    return t
}
var ir = s.createContext(void 0);

function at(e) {
    const t = s.useContext(ir);
    if (t === void 0 && !e) throw new Error(Te(36));
    return t
}
var ti = s.createContext(void 0);

function co(e = !0) {
    const t = s.useContext(ti);
    if (t === void 0 && !e) throw new Error(Te(25));
    return t
}
var ni = s.createContext(void 0);

function Kc() {
    const e = s.useContext(ni);
    if (e === void 0) throw new Error(Te(30));
    return e
}
var oi = s.createContext(void 0);

function ar(e = !1) {
    const t = s.useContext(oi);
    if (t === void 0 && !e) throw new Error(Te(16));
    return t
}

function Gc(e) {
    const {
        focusableWhenDisabled: t,
        disabled: n,
        composite: o = !1,
        tabIndex: r = 0,
        isNativeButton: i
    } = e, c = o && t !== !1, f = o && t === !1;
    return {
        props: s.useMemo(() => {
            const u = {
                onKeyDown(a) {
                    n && t && a.key !== "Tab" && a.preventDefault()
                }
            };
            return o || (u.tabIndex = r, !i && n && (u.tabIndex = t ? r : -1)), (i && (t || c) || !i && n) && (u["aria-disabled"] = n), i && (!t || f) && (u.disabled = n), u
        }, [o, n, t, c, f, i, r])
    }
}

function kn(e, t, {
    detail: n = 0
} = {}) {
    e.dispatchEvent(new(Je(e)).PointerEvent("click", {
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        detail: n,
        shiftKey: t.shiftKey,
        ctrlKey: t.ctrlKey,
        altKey: t.altKey,
        metaKey: t.metaKey
    }))
}

function Lt(e = {}) {
    const {
        disabled: t = !1,
        focusableWhenDisabled: n,
        tabIndex: o = 0,
        native: r = !0,
        composite: i
    } = e, c = s.useRef(null), f = ar(!0), u = i ? ? f !== void 0, {
        props: a
    } = Gc({
        focusableWhenDisabled: n,
        disabled: t,
        composite: u,
        tabIndex: o,
        isNativeButton: r
    }), l = s.useCallback(() => {
        const m = c.current;
        Co(m) && u && t && a.disabled === void 0 && m.disabled && (m.disabled = !1)
    }, [t, a.disabled, u]);
    return q(l, [l]), {
        getButtonProps: s.useCallback((m = {}) => {
            const {
                onClick: d,
                onMouseDown: v,
                onKeyUp: b,
                onKeyDown: g,
                onPointerDown: p,
                ...y
            } = m;
            return yt({
                onClick(h) {
                    if (t) {
                        h.preventDefault();
                        return
                    }
                    d ? .(h)
                },
                onMouseDown(h) {
                    t || v ? .(h)
                },
                onKeyDown(h) {
                    if (t || (vr(h), g ? .(h), h.baseUIHandlerPrevented)) return;
                    const R = h.target === h.currentTarget,
                        x = h.currentTarget,
                        S = Co(x),
                        E = !r && Yc(x),
                        P = R && (r ? S : !E),
                        T = h.key === "Enter",
                        C = h.key === " ",
                        I = x.getAttribute("role"),
                        M = I ? .startsWith("menuitem") || I === "option" || I === "gridcell";
                    if (R && u && C) {
                        if (h.defaultPrevented && M) return;
                        h.preventDefault(), (!r || S) && (h.preventBaseUIHandler(), kn(x, h));
                        return
                    }
                    if (!P || r || !C && !T) {
                        R && E && C && h.preventDefault();
                        return
                    }
                    h.defaultPrevented || (h.preventDefault(), T && (h.preventBaseUIHandler(), kn(x, h)))
                },
                onKeyUp(h) {
                    if (!t) {
                        if (vr(h), b ? .(h), h.target === h.currentTarget && r && u && Co(h.currentTarget) && h.key === " ") {
                            h.preventDefault();
                            return
                        }
                        h.baseUIHandlerPrevented || h.target === h.currentTarget && !r && !u && !h.defaultPrevented && h.key === " " && (h.preventBaseUIHandler(), kn(h.currentTarget, h))
                    }
                },
                onPointerDown(h) {
                    if (t) {
                        h.preventDefault();
                        return
                    }
                    p ? .(h)
                }
            }, r ? {
                type: "button"
            } : {
                role: "button"
            }, a, y)
        }, [t, a, u, r]),
        buttonRef: te(m => {
            c.current = m, l()
        })
    }
}

function Co(e) {
    return ke(e) && e.tagName === "BUTTON"
}

function Yc(e) {
    return ke(e) && e.tagName === "A" && !!e.href
}

function $c(e) {
    const {
        closeOnClick: t,
        highlighted: n,
        id: o,
        nodeId: r,
        store: i,
        typingRef: c,
        itemRef: f,
        itemMetadata: u
    } = e, {
        events: a
    } = i.useState("floatingTreeRoot"), l = i.useState("open"), m = co(!0), d = m !== void 0;
    return s.useMemo(() => ({
        id: o,
        role: "menuitem",
        tabIndex: l && n ? 0 : -1,
        onKeyDown(v) {
            v.key === " " && c ? .current && v.preventDefault()
        },
        onMouseMove(v) {
            r && a.emit("itemhover", {
                nodeId: r,
                target: v.currentTarget
            })
        },
        onClick(v) {
            t && a.emit("close", {
                domEvent: v,
                reason: Vo
            })
        },
        onMouseUp(v) {
            if (m) {
                const b = m.initialCursorPointRef.current;
                if (m.initialCursorPointRef.current = null, d && b && Math.abs(v.clientX - b.x) <= 1 && Math.abs(v.clientY - b.y) <= 1 || d && !Yo && v.button === 2) return
            }
            f.current && i.context.allowMouseUpTriggerRef.current && (!d || v.button === 2) && u.type === "regular-item" && kn(f.current, v, {
                detail: 1
            })
        }
    }), [t, n, o, a, r, l, i, c, f, m, d, u])
}
var cr = {
    type: "regular-item"
};

function uo(e) {
    const {
        closeOnClick: t,
        disabled: n,
        highlighted: o,
        id: r,
        store: i,
        typingRef: c = i.context.typingRef,
        nativeButton: f,
        itemMetadata: u,
        nodeId: a
    } = e, l = s.useRef(null), {
        getButtonProps: m,
        buttonRef: d
    } = Lt({
        disabled: n,
        focusableWhenDisabled: !0,
        native: f,
        composite: !0
    }), v = $c({
        closeOnClick: t,
        highlighted: o,
        id: r,
        nodeId: a,
        store: i,
        typingRef: c,
        itemRef: l,
        itemMetadata: u
    }), b = s.useCallback(p => yt(v, {
        onMouseEnter() {
            u.type === "submenu-trigger" && u.setActive()
        }
    }, p, m), [v, m, u]), g = Jt(l, d);
    return s.useMemo(() => ({
        getItemProps: b,
        itemRef: g
    }), [b, g])
}
var ri = s.createContext({
    register: () => {},
    unregister: () => {},
    subscribeMapChange: () => () => {},
    nextIndexRef: {
        current: 0
    }
});

function Xc() {
    return s.useContext(ri)
}

function vn(e = {}) {
    const {
        guess: t,
        label: n,
        metadata: o,
        textRef: r,
        index: i
    } = e, {
        register: c,
        unregister: f,
        subscribeMapChange: u,
        nextIndexRef: a
    } = Xc(), l = s.useRef(-1), [m, d] = s.useState(i == null && t ? () => {
        if (l.current === -1) {
            const p = a.current;
            a.current += 1, l.current = p
        }
        return l.current
    } : -1), v = i ? ? m, b = s.useRef(null), g = s.useCallback(p => {
        const y = b.current;
        y && f(y), b.current = p, p && c(p, {
            metadata: o ? ? null,
            index: i ? ? null,
            label: n,
            textRef: r
        })
    }, [i, c, f, o, n, r]);
    return q(() => {
        if (i == null) return u(p => {
            const y = b.current ? p.get(b.current) ? .index : null;
            y != null && d(y)
        })
    }, [i, u]), {
        ref: g,
        index: v
    }
}
var Vr = (function(e) {
        return e.checked = "data-checked", e.unchecked = "data-unchecked", e.disabled = "data-disabled", e.highlighted = "data-highlighted", e
    })({}),
    lo = {
        checked(e) {
            return e ? {
                [Vr.checked]: ""
            } : {
                [Vr.unchecked]: ""
            }
        },
        ...tn
    },
    Ol = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            id: i,
            label: c,
            nativeButton: f = !1,
            disabled: u = !1,
            closeOnClick: a = !1,
            checked: l,
            defaultChecked: m,
            onCheckedChange: d,
            style: v,
            ...b
        } = t, g = vn({
            guess: !0,
            label: c
        }), p = mn(!0), y = Ke(i), {
            store: h
        } = at(), R = h.useState("disabled"), x = u || R, S = h.useState("isActive", g.index), E = h.useState("itemProps"), [P, T] = jo({
            controlled: l,
            default: m ? ? !1,
            name: "MenuCheckboxItem",
            state: "checked"
        }), {
            getItemProps: C,
            itemRef: I
        } = uo({
            closeOnClick: a,
            disabled: x,
            highlighted: S,
            id: y,
            store: h,
            nativeButton: f,
            nodeId: p ? .context.nodeId,
            itemMetadata: cr
        }), M = s.useMemo(() => ({
            disabled: x,
            highlighted: S,
            checked: P
        }), [x, S, P]);

        function F(N) {
            const O = ue(Vo, N.nativeEvent, void 0, {
                preventUnmountOnClose: St
            });
            d ? .(!P, O), !O.isCanceled && T(k => !k)
        }
        const w = Re("div", t, {
            state: M,
            stateAttributesMapping: lo,
            props: [E, {
                role: "menuitemcheckbox",
                "aria-checked": P,
                onClick: F
            }, b, C],
            ref: [I, n, g.ref]
        });
        return (0, B.jsx)(ni.Provider, {
            value: M,
            children: w
        })
    }),
    Ml = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            keepMounted: c = !1,
            ...f
        } = t, u = Kc(), a = s.useRef(null), {
            transitionStatus: l,
            mounted: m,
            setMounted: d
        } = Kt(u.checked);
        st({
            open: u.checked,
            ref: a,
            onComplete() {
                u.checked || d(!1)
            }
        });
        const v = {
            checked: u.checked,
            disabled: u.disabled,
            highlighted: u.highlighted,
            transitionStatus: l
        };
        return Re("span", t, {
            state: v,
            ref: [n, a],
            stateAttributesMapping: lo,
            props: {
                "aria-hidden": !0,
                ...f
            },
            enabled: c || m
        })
    }),
    ur = s.createContext(void 0);

function zc() {
    const e = s.useContext(ur);
    if (e === void 0) throw new Error(Te(31));
    return e
}
var kl = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            ...c
        } = t, [f, u] = s.useState(void 0), a = Re("div", t, {
            ref: n,
            props: {
                role: "group",
                "aria-labelledby": f,
                ...c
            }
        });
        return (0, B.jsx)(ur.Provider, {
            value: u,
            children: a
        })
    }),
    Al = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            id: c,
            ...f
        } = t, u = Ke(c), a = zc();
        return q(() => (a(u), () => {
            a(l => l === u ? void 0 : l)
        }), [a, u]), Re("div", t, {
            ref: n,
            props: {
                id: u,
                role: "presentation",
                ...f
            }
        })
    }),
    Dl = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            id: i,
            label: c,
            nativeButton: f = !1,
            disabled: u = !1,
            closeOnClick: a = !0,
            style: l,
            ...m
        } = t, d = vn({
            guess: !0,
            label: c
        }), v = mn(!0), b = Ke(i), {
            store: g
        } = at(), p = g.useState("disabled"), y = u || p, h = g.useState("isActive", d.index), R = g.useState("itemProps"), {
            getItemProps: x,
            itemRef: S
        } = uo({
            closeOnClick: a,
            disabled: y,
            highlighted: h,
            id: b,
            store: g,
            nativeButton: f,
            nodeId: v ? .context.nodeId,
            itemMetadata: cr
        });
        return Re("div", t, {
            state: {
                disabled: y,
                highlighted: h
            },
            props: [R, m, x],
            ref: [S, n, d.ref]
        })
    }),
    qc = s.createContext(void 0);

function si(e) {
    const t = s.useContext(qc);
    if (t === void 0 && !e) throw new Error(Te(69));
    return t
}
var ii = "ArrowUp",
    ai = "ArrowDown",
    Fo = "ArrowLeft",
    No = "ArrowRight",
    Qc = "Home";
var Fl = "PageUp",
    Nl = "PageDown",
    fo = new Set([ii, ai, Fo, No, Qc, "End"]),
    Jc = "Shift",
    Zc = [Jc, "Control", "Alt", "Meta"];

function eu(e) {
    return ke(e) && e.tagName === "INPUT"
}

function Wr(e) {
    return !!(eu(e) && e.selectionStart != null || ke(e) && e.tagName === "TEXTAREA")
}

function Ur(e, t, n, o) {
    if (!e || !t || !t.scrollTo) return;
    let r = e.scrollLeft,
        i = e.scrollTop;
    const c = e.clientWidth < e.scrollWidth,
        f = e.clientHeight < e.scrollHeight;
    if (c && o !== "vertical") {
        const u = Kr(e, t, "left"),
            a = Pn(e),
            l = Pn(t);
        n === "ltr" && (u + t.offsetWidth + l.scrollMarginRight > e.scrollLeft + e.clientWidth - a.scrollPaddingRight ? r = u + t.offsetWidth + l.scrollMarginRight - e.clientWidth + a.scrollPaddingRight : u - l.scrollMarginLeft < e.scrollLeft + a.scrollPaddingLeft && (r = u - l.scrollMarginLeft - a.scrollPaddingLeft)), n === "rtl" && (u - l.scrollMarginLeft < e.scrollLeft + a.scrollPaddingLeft ? r = u - l.scrollMarginLeft - a.scrollPaddingLeft : u + t.offsetWidth + l.scrollMarginRight > e.scrollLeft + e.clientWidth - a.scrollPaddingRight && (r = u + t.offsetWidth + l.scrollMarginRight - e.clientWidth + a.scrollPaddingRight))
    }
    if (f && o !== "horizontal") {
        const u = Kr(e, t, "top"),
            a = Pn(e),
            l = Pn(t);
        u - l.scrollMarginTop < e.scrollTop + a.scrollPaddingTop ? i = u - l.scrollMarginTop - a.scrollPaddingTop : u + t.offsetHeight + l.scrollMarginBottom > e.scrollTop + e.clientHeight - a.scrollPaddingBottom && (i = u + t.offsetHeight + l.scrollMarginBottom - e.clientHeight + a.scrollPaddingBottom)
    }
    e.scrollTo({
        left: r,
        top: i,
        behavior: "auto"
    })
}

function Kr(e, t, n) {
    const o = n === "left" ? "offsetLeft" : "offsetTop";
    let r = 0;
    for (; t.offsetParent && (r += t[o], t.offsetParent !== e);) t = t.offsetParent;
    return r
}

function Pn(e) {
    const t = getComputedStyle(e);
    return {
        scrollMarginTop: parseFloat(t.scrollMarginTop) || 0,
        scrollMarginRight: parseFloat(t.scrollMarginRight) || 0,
        scrollMarginBottom: parseFloat(t.scrollMarginBottom) || 0,
        scrollMarginLeft: parseFloat(t.scrollMarginLeft) || 0,
        scrollPaddingTop: parseFloat(t.scrollPaddingTop) || 0,
        scrollPaddingRight: parseFloat(t.scrollPaddingRight) || 0,
        scrollPaddingBottom: parseFloat(t.scrollPaddingBottom) || 0,
        scrollPaddingLeft: parseFloat(t.scrollPaddingLeft) || 0
    }
}
var Hl = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            finalFocus: c,
            ...f
        } = t, {
            store: u
        } = at(), {
            side: a,
            align: l
        } = mn(), m = si(!0) != null, d = u.useState("open"), v = u.useState("transitionStatus"), b = u.useState("popupProps"), g = u.useState("mounted"), p = u.useState("instantType"), y = u.useState("activeTriggerElement"), h = u.useState("parent"), R = u.useState("lastOpenChangeReason"), x = u.useState("rootId"), S = u.useState("floatingRootContext"), E = u.useState("floatingTreeRoot"), P = u.useState("closeDelay"), T = u.useState("hoverEnabled"), C = u.useState("disabled"), I = u.useState("openMethod"), M = h.type === "context-menu";
        st({
            open: d,
            ref: u.context.popupRef,
            onComplete() {
                d && u.context.onOpenChangeComplete ? .(!0)
            }
        }), s.useEffect(() => {
            function k(D) {
                u.setOpen(!1, ue(D.reason, D.domEvent))
            }
            return E.events.on("close", k), () => {
                E.events.off("close", k)
            }
        }, [E.events, u]), so(S, {
            enabled: T && !C && !M && h.type !== "menubar",
            closeDelay: P
        });
        const F = u.useStateSetter("popupElement"),
            w = {
                transitionStatus: v,
                side: a,
                align: l,
                open: d,
                nested: h.type === "menu",
                instant: p
            },
            N = Re("div", t, {
                state: w,
                ref: [n, u.context.popupRef, F],
                stateAttributesMapping: Yt,
                props: [b, {
                    onKeyDown(k) {
                        m && fo.has(k.key) && k.stopPropagation()
                    }
                }, gn(v), f, {
                    "data-rootownerid": x
                }]
            });
        let O = h.type === void 0 || M;
        return (y || h.type === "menubar" && R !== "outside-press") && (O = !0), (0, B.jsx)(Zo, {
            context: S,
            openInteractionType: I,
            modal: M,
            disabled: !g,
            returnFocus: c === void 0 ? O : c,
            initialFocus: h.type !== "menu",
            restoreFocus: !0,
            externalTree: h.type !== "menubar" ? E : void 0,
            previousFocusableElement: y,
            nextFocusableElement: h.type === void 0 ? u.context.triggerFocusTargetRef : void 0,
            beforeContentFocusGuardRef: h.type === void 0 ? u.context.beforeContentFocusGuardRef : void 0,
            children: N
        })
    }),
    ci = s.createContext(void 0);

function tu() {
    const e = s.useContext(ci);
    if (e === void 0) throw new Error(Te(32));
    return e
}
var Ll = s.forwardRef(function(t, n) {
    const {
        keepMounted: o = !1,
        ...r
    } = t, {
        store: i
    } = at();
    return i.useState("mounted") || o ? (0, B.jsx)(ci.Provider, {
        value: o,
        children: (0, B.jsx)(Un, {
            ref: n,
            ...r
        })
    }) : null
});

function ui(e) {
    const {
        children: t,
        elementsRef: n,
        labelsRef: o,
        onMapChange: r
    } = e, i = te(r), [, c] = s.useState(!1), f = ft(ou).current, u = ft(nu).current, a = s.useRef(0), l = s.useRef(!0), m = s.useRef([]), d = s.useRef(null), v = te(() => {
        l.current || (l.current = !0, c(S => !S))
    }), b = te((S, E) => {
        u.set(S, E), v()
    }), g = te(S => {
        u.delete(S), v()
    }), p = te(S => {
        const E = new Map;
        return n.current.length = 0, o && (o.current.length = 0), S.forEach(P => {
            E.set(P.element, { ...P.registration.metadata ? ? {},
                index : P.index
            }), n.current[P.index] = P.element, o && (o.current[P.index] = P.registration.label !== void 0 ? P.registration.label : P.registration.textRef ? .current ? .textContent ? ? P.element.textContent)
        }), a.current = n.current.length, E
    });

    function y(S) {
        if (d.current ? .disconnect(), d.current = null, typeof MutationObserver != "function" || S.length < 2) return;
        const E = new MutationObserver(T => {
            if (!iu(T)) return;
            let C = null;
            for (const I of S)
                if (I.isConnected) {
                    if (C && li(C, I) > 0) {
                        E.disconnect(), v();
                        return
                    }
                    C = I
                }
        });
        d.current = E;
        const P = new Set;
        for (let T = 1; T < S.length; T += 1) {
            const C = su(S[T - 1], S[T]);
            C && P.add(C)
        }
        P.forEach(T => E.observe(T, {
            childList: !0
        }))
    }
    const h = te(() => {
        const [S, E] = ru(u), P = p(S);
        y(E), m.current = S, l.current = !1, f.forEach(T => T(P)), i(P)
    });
    q(() => (l.current || p(m.current), () => {
        n.current = [], o && (o.current = [])
    }), [n, o, p]), q(() => {
        l.current && h()
    }), q(() => () => {
        d.current ? .disconnect(), l.current = !0
    }, []);
    const R = te(S => (f.add(S), () => {
            f.delete(S)
        })),
        x = s.useMemo(() => ({
            register: b,
            unregister: g,
            subscribeMapChange: R,
            nextIndexRef: a
        }), [b, g, R, a]);
    return (0, B.jsx)(ri.Provider, {
        value: x,
        children: t
    })
}

function nu() {
    return new Map
}

function ou() {
    return new Set
}

function ru(e) {
    const t = new Set,
        n = [],
        o = [];
    e.forEach((i, c) => {
        if (!c.isConnected) return;
        const f = i.index,
            u = {
                index: f ? ? -1,
                element: c,
                registration: i
            };
        f === null ? o.push(u) : f >= 0 && (t.add(f), n.push(u))
    });
    let r = 0;
    return o.sort((i, c) => li(i.element, c.element)), o.forEach(i => {
        for (; t.has(r);) r += 1;
        i.index = r, n.push(i), r += 1
    }), t.size > 0 && n.sort((i, c) => i.index - c.index), [n, o.map(i => i.element)]
}

function su(e, t) {
    let n = e.parentElement;
    for (; n && !n.contains(t);) n = n.parentElement;
    return n
}

function iu(e) {
    for (const t of e)
        for (let n = 0; n < t.removedNodes.length; n += 1)
            if (t.removedNodes[n].isConnected) return !0;
    return !1
}

function li(e, t) {
    return e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
}
var lr = s.forwardRef(function(t, n) {
        const {
            cutout: o,
            ...r
        } = t;
        let i;
        if (o) {
            const c = o.getBoundingClientRect();
            i = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${c.left}px ${c.top}px,${c.left}px ${c.bottom}px,${c.right}px ${c.bottom}px,${c.right}px ${c.top}px,${c.left}px ${c.top}px)`
        }
        return (0, B.jsx)("div", {
            ref: n,
            role: "presentation",
            "data-base-ui-inert": "",
            ...r,
            style: {
                position: "fixed",
                inset: 0,
                userSelect: "none",
                WebkitUserSelect: "none",
                clipPath: i
            }
        })
    }),
    Gr = {},
    Yr = {},
    $r = "";

function po(e, t) {
    return la(e) ? e : t
}

function Xr(e, t, n) {
    return /hidden|clip/.test(e.getComputedStyle(po(t, n)).overflowY)
}

function au(e) {
    if (typeof document > "u") return !1;
    const t = Ee(e);
    return Je(t).innerWidth - t.documentElement.clientWidth > 0
}

function cu(e) {
    if (!(typeof CSS < "u" && CSS.supports && CSS.supports("scrollbar-gutter", "stable")) || typeof document > "u") return !1;
    const t = Ee(e),
        n = t.documentElement,
        o = t.body,
        r = po(n, o),
        i = r.style.overflowY,
        c = n.style.scrollbarGutter;
    n.style.scrollbarGutter = "stable", r.style.overflowY = "scroll";
    const f = r.offsetWidth;
    r.style.overflowY = "hidden";
    const u = r.offsetWidth;
    return r.style.overflowY = i, n.style.scrollbarGutter = c, f === u
}

function uu(e) {
    const t = Ee(e),
        n = t.documentElement,
        o = t.body,
        r = po(n, o),
        i = {
            overflowY: r.style.overflowY,
            overflowX: r.style.overflowX
        };
    return Object.assign(r.style, {
        overflowY: "hidden",
        overflowX: "hidden"
    }), () => {
        Object.assign(r.style, i)
    }
}

function lu(e) {
    const t = Ee(e),
        n = t.documentElement,
        o = t.body,
        r = Je(n);
    let i = 0,
        c = 0,
        f = !1;
    const u = Qi.create();
    if (Pt && (r.visualViewport ? .scale ? ? 1) !== 1) return () => {};

    function a() {
        const v = r.getComputedStyle(n),
            b = r.getComputedStyle(o),
            g = (v.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
        i = n.scrollTop, c = n.scrollLeft, Gr = {
            scrollbarGutter: n.style.scrollbarGutter,
            overflowY: n.style.overflowY,
            overflowX: n.style.overflowX
        }, $r = n.style.scrollBehavior, Yr = {
            position: o.style.position,
            height: o.style.height,
            width: o.style.width,
            boxSizing: o.style.boxSizing,
            overflowY: o.style.overflowY,
            overflowX: o.style.overflowX,
            scrollBehavior: o.style.scrollBehavior
        };
        const p = n.scrollHeight > n.clientHeight,
            y = n.scrollWidth > n.clientWidth,
            h = v.overflowY === "scroll" || b.overflowY === "scroll",
            R = v.overflowX === "scroll" || b.overflowX === "scroll",
            x = Math.max(0, r.innerWidth - o.clientWidth),
            S = Math.max(0, r.innerHeight - o.clientHeight),
            E = parseFloat(b.marginTop) + parseFloat(b.marginBottom),
            P = parseFloat(b.marginLeft) + parseFloat(b.marginRight),
            T = po(n, o);
        if (f = cu(e), f) {
            n.style.scrollbarGutter = g, T.style.overflowY = "hidden", T.style.overflowX = "hidden";
            return
        }
        Object.assign(n.style, {
            scrollbarGutter: g,
            overflowY: "hidden",
            overflowX: "hidden"
        }), (p || h) && (n.style.overflowY = "scroll"), (y || R) && (n.style.overflowX = "scroll"), Object.assign(o.style, {
            position: "relative",
            height: E || S ? `calc(100dvh - ${E+S}px)` : "100dvh",
            width: P || x ? `calc(100vw - ${P+x}px)` : "100vw",
            boxSizing: "border-box",
            overflowY: "hidden",
            overflowX: "hidden",
            scrollBehavior: "unset"
        }), o.scrollTop = i, o.scrollLeft = c, n.setAttribute("data-base-ui-scroll-locked", ""), n.style.scrollBehavior = "unset"
    }

    function l() {
        Object.assign(n.style, Gr), Object.assign(o.style, Yr), f || (n.scrollTop = i, n.scrollLeft = c, n.removeAttribute("data-base-ui-scroll-locked"), n.style.scrollBehavior = $r)
    }

    function m() {
        l(), u.request(a)
    }
    a();
    const d = me(r, "resize", m);
    return () => {
        u.cancel(), l(), typeof r.removeEventListener == "function" && d()
    }
}
var fu = class {
        lockCount = 0;
        restore = null;
        timeoutLock = lt.create();
        timeoutUnlock = lt.create();
        acquire(e) {
            return this.lockCount += 1, this.lockCount === 1 && this.restore === null && this.timeoutLock.start(0, () => this.lock(e)), this.release
        }
        release = () => {
            this.lockCount -= 1, this.lockCount === 0 && this.restore && this.timeoutUnlock.start(0, this.unlock)
        };
        unlock = () => {
            this.lockCount === 0 && this.restore && (this.restore ? .(), this.restore = null)
        };
        lock(e) {
            if (this.lockCount === 0 || this.restore !== null) return;
            const t = Ee(e),
                n = t.documentElement,
                o = t.body,
                r = Je(n);
            if (Xr(r, n, o)) {
                const c = new r.MutationObserver(() => {
                        Xr(r, n, o) || (c.disconnect(), this.restore = null, this.lock(e))
                    }),
                    f = {
                        attributes: !0
                    };
                c.observe(n, f), c.observe(o, f), this.restore = () => c.disconnect();
                return
            }
            const i = Bn || !au(e);
            this.restore = i ? uu(e) : lu(e)
        }
    },
    du = new fu;

function fi(e = !0, t = null) {
    q(() => {
        if (e) return du.acquire(t)
    }, [e, t])
}
var pu = 20;

function di(e, t, n, o) {
    const [r, i] = s.useState(!1);
    q(() => {
        if (!e || !t || n == null) {
            i(!1);
            return
        }
        const c = Ee(n).documentElement.clientWidth,
            f = n.offsetWidth;
        i(c > 0 && f > 0 && f >= c - pu)
    }, [e, t, n]), fi(e && (!t || r), o)
}
var Bl = s.forwardRef(function(t, n) {
        const {
            anchor: o,
            positionMethod: r = "absolute",
            className: i,
            render: c,
            side: f,
            align: u,
            sideOffset: a = 0,
            alignOffset: l = 0,
            collisionBoundary: m = "clipping-ancestors",
            collisionPadding: d = 5,
            arrowPadding: v = 5,
            sticky: b = !1,
            disableAnchorTracking: g = !1,
            collisionAvoidance: p = Is,
            style: y,
            ...h
        } = t, {
            store: R
        } = at(), x = tu(), S = co(!0), E = R.useState("parent"), P = R.useState("floatingRootContext"), T = R.useState("floatingTreeRoot"), C = R.useState("mounted"), I = R.useState("open"), M = R.useState("modal"), F = R.useState("openMethod"), w = R.useState("activeTriggerElement"), N = R.useState("transitionStatus"), O = R.useState("positionerElement"), k = R.useState("instantType"), D = R.useState("adaptiveOrigin"), L = R.useState("lastOpenChangeReason"), _ = R.useState("floatingNodeId"), ne = R.useState("floatingParentNodeId"), $ = P.useState("domReferenceElement"), H = s.useRef(null), Q = _o(O);
        let z = o,
            J = a,
            Y = l,
            pe = u,
            V = p;
        E.type === "context-menu" && (z = o ? ? E.context ? .anchor, pe = pe ? ? "start", !f && pe !== "center" && (Y = t.alignOffset ? ? 2, J = t.sideOffset ? ? -5));
        let U = f,
            re = pe;
        E.type === "menu" ? (U = U ? ? "inline-end", re = re ? ? "start", V = t.collisionAvoidance ? ? Wn) : E.type === "menubar" && (U = U ? ? (E.context.orientation === "vertical" ? "inline-end" : "bottom"), re = re ? ? "start");
        const se = E.type === "context-menu",
            G = sr({
                anchor: z,
                floatingRootContext: P,
                positionMethod: S ? "fixed" : r,
                mounted: C,
                side: U,
                sideOffset: J,
                align: re,
                alignOffset: Y,
                arrowPadding: se ? 0 : v,
                collisionBoundary: m,
                collisionPadding: d,
                sticky: b,
                nodeId: _,
                keepMounted: x,
                disableAnchorTracking: g,
                collisionAvoidance: V,
                shift: se ? {
                    crossAxis: !("side" in V && V.side === "flip"),
                    rootBoundary: "layoutViewport"
                } : void 0,
                externalTree: T,
                adaptiveOrigin: D
            });
        s.useEffect(() => {
            function de(ge) {
                ge.open && (ge.parentNodeId === _ && R.set("hoverEnabled", !1), ge.nodeId !== _ && ge.parentNodeId === R.select("floatingParentNodeId") && R.setOpen(!1, ue(ho)))
            }
            return T.events.on("menuopenchange", de), () => {
                T.events.off("menuopenchange", de)
            }
        }, [R, T.events, _]), s.useEffect(() => {
            if (R.select("floatingParentNodeId") == null) return;

            function de(ge) {
                if (ge.open || ge.nodeId !== R.select("floatingParentNodeId")) return;
                const be = ge.reason ? ? "sibling-open";
                R.setOpen(!1, ue(be))
            }
            return T.events.on("menuopenchange", de), () => {
                T.events.off("menuopenchange", de)
            }
        }, [T.events, R]);
        const ce = Fe();
        s.useEffect(() => {
            I || ce.clear()
        }, [I, ce]), s.useEffect(() => {
            function de(ge) {
                if (!(!I || ge.nodeId !== R.select("floatingParentNodeId")))
                    if (ge.target && w && w !== ge.target) {
                        const be = R.select("closeDelay");
                        be > 0 ? ce.isStarted() || ce.start(be, () => {
                            R.setOpen(!1, ue(ho))
                        }) : R.setOpen(!1, ue(ho))
                    } else ce.clear()
            }
            return T.events.on("itemhover", de), () => {
                T.events.off("itemhover", de)
            }
        }, [T.events, I, w, R, ce]), s.useEffect(() => {
            const de = {
                open: I,
                nodeId: _,
                parentNodeId: ne,
                reason: R.select("lastOpenChangeReason")
            };
            T.events.emit("menuopenchange", de)
        }, [T.events, I, R, _, ne]), q(() => {
            const de = $,
                ge = H.current;
            if (de && (H.current = de), ge && de && de !== ge) {
                R.set("instantType", void 0);
                const be = new AbortController;
                return Q(() => {
                    R.set("instantType", "trigger-change")
                }, be.signal), () => {
                    be.abort()
                }
            }
        }, [$, Q, R]);
        const le = {
                open: I,
                side: G.side,
                align: G.align,
                anchorHidden: G.anchorHidden,
                nested: E.type === "menu",
                instant: k
            },
            ve = E.type === "menubar" && E.context.modal;
        di(I && (ve || M && L !== "trigger-hover"), F === "touch", O, w);
        const oe = ao(t, le, {
                styles: G.positionerStyles,
                transitionStatus: N,
                props: h,
                refs: [n, R.useStateSetter("positionerElement")],
                hidden: !C,
                inert: !I
            }),
            ae = C && E.type !== "menu" && (E.type !== "menubar" && M && L !== "trigger-hover" || E.type === "menubar" && E.context.modal);
        let Z = null;
        return E.type === "menubar" ? Z = E.context.contentElement : E.type === void 0 && (Z = w), (0, B.jsxs)(ei.Provider, {
            value: G,
            children: [ae && (0, B.jsx)(lr, {
                ref: E.type === "context-menu" || E.type === "nested-context-menu" ? E.context.internalBackdropRef : null,
                inert: hn(!I),
                cutout: Z
            }), (0, B.jsx)(Gn, {
                id: _,
                children: (0, B.jsx)(ui, {
                    elementsRef: R.context.itemDomElements,
                    labelsRef: R.context.itemLabels,
                    children: oe
                })
            })]
        })
    }),
    pi = s.createContext(void 0);

function gu() {
    const e = s.useContext(pi);
    if (e === void 0) throw new Error(Te(34));
    return e
}
var jl = s.memo(s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            value: i,
            defaultValue: c,
            onValueChange: f,
            disabled: u = !1,
            style: a,
            "aria-labelledby": l,
            ...m
        } = t, [d, v] = s.useState(void 0), [b, g] = jo({
            controlled: i,
            default: c,
            name: "MenuRadioGroup"
        }), p = te((R, x) => {
            f ? .(R, x), !x.isCanceled && g(R)
        }), y = Re("div", t, {
            state: {
                disabled: u
            },
            ref: n,
            props: {
                role: "group",
                "aria-labelledby": l ? ? d,
                "aria-disabled": u || void 0,
                ...m
            }
        }), h = s.useMemo(() => ({
            value: b,
            setValue: p,
            disabled: u
        }), [b, p, u]);
        return (0, B.jsx)(ur.Provider, {
            value: v,
            children: (0, B.jsx)(pi.Provider, {
                value: h,
                children: y
            })
        })
    })),
    gi = s.createContext(void 0);

function hu() {
    const e = s.useContext(gi);
    if (e === void 0) throw new Error(Te(35));
    return e
}
var _l = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            id: i,
            label: c,
            nativeButton: f = !1,
            disabled: u = !1,
            closeOnClick: a = !1,
            value: l,
            style: m,
            ...d
        } = t, v = vn({
            guess: !0,
            label: c
        }), b = mn(!0), g = Ke(i), {
            store: p
        } = at(), y = p.useState("isActive", v.index), h = p.useState("itemProps"), {
            value: R,
            setValue: x,
            disabled: S
        } = gu(), E = p.useState("disabled"), P = u || S || E, T = R === l, {
            getItemProps: C,
            itemRef: I
        } = uo({
            closeOnClick: a,
            disabled: P,
            highlighted: y,
            id: g,
            store: p,
            nativeButton: f,
            nodeId: b ? .context.nodeId,
            itemMetadata: cr
        }), M = s.useMemo(() => ({
            disabled: P,
            highlighted: y,
            checked: T
        }), [P, y, T]);

        function F(N) {
            const O = ue(Vo, N.nativeEvent, void 0, {
                preventUnmountOnClose: St
            });
            x(l, O)
        }
        const w = Re("div", t, {
            state: M,
            stateAttributesMapping: lo,
            props: [h, {
                role: "menuitemradio",
                "aria-checked": T,
                onClick: F
            }, d, C],
            ref: [I, n, v.ref]
        });
        return (0, B.jsx)(gi.Provider, {
            value: M,
            children: w
        })
    }),
    Vl = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            keepMounted: c = !1,
            ...f
        } = t, u = hu(), a = s.useRef(null), {
            transitionStatus: l,
            mounted: m,
            setMounted: d
        } = Kt(u.checked);
        st({
            open: u.checked,
            ref: a,
            onComplete() {
                u.checked || d(!1)
            }
        });
        const v = {
            checked: u.checked,
            disabled: u.disabled,
            highlighted: u.highlighted,
            transitionStatus: l
        };
        return Re("span", t, {
            state: v,
            stateAttributesMapping: lo,
            ref: [n, a],
            props: {
                "aria-hidden": !0,
                ...f
            },
            enabled: c || m
        })
    }),
    mu = s.createContext(null);

function hi(e) {
    const t = s.useContext(mu);
    if (t === null && !e) throw new Error(Te(5));
    return t
}

function vu(e) {
    const t = s.useRef(""),
        n = s.useCallback(o => {
            o.defaultPrevented || (t.current = o.pointerType, e(o, o.pointerType))
        }, [e]);
    return {
        onClick: s.useCallback(o => {
            if (o.detail === 0) {
                e(o, "keyboard");
                return
            }
            "pointerType" in o ? e(o, o.pointerType) : e(o, t.current), t.current = ""
        }, [e]),
        onPointerDown: n
    }
}

function bu(e, t) {
    const n = s.useRef(e),
        o = te(t);
    q(() => {
        n.current !== e && o(n.current), n.current = e
    }, [e, o])
}

function fr(e, t) {
    const n = te((i, c) => {
            (typeof e == "function" ? e() : e) || t(c || (Bn ? "touch" : ""))
        }),
        {
            onClick: o,
            onPointerDown: r
        } = vu(n);
    return s.useMemo(() => ({
        onClick: o,
        onPointerDown: r
    }), [o, r])
}

function Ru(e) {
    const [t, n] = s.useState(null), o = fr(e, n);
    return bu(e, r => {
        r && !e && n(null)
    }), s.useMemo(() => ({
        openMethod: t,
        triggerProps: o
    }), [t, o])
}
var mi = { ...no,
        disabled: e => e.parent.type === "menubar" && e.parent.context.disabled || e.disabled,
        modal: e => (e.parent.type === void 0 || e.parent.type === "context-menu") && (e.modal ? ? !0),
        openMethod: e => e.openMethod,
        allowMouseEnter: e => e.allowMouseEnter,
        highlightItemOnHover: e => e.highlightItemOnHover,
        parent: e => e.parent,
        rootId: e => e.parent.type === "menu" ? e.parent.store.select("rootId") : e.parent.type !== void 0 ? e.parent.context.rootId : e.rootId,
        activeIndex: e => e.activeIndex,
        isActive: (e, t) => e.activeIndex === t,
        hoverEnabled: e => e.hoverEnabled,
        instantType: e => e.instantType,
        lastOpenChangeReason: e => e.openChangeReason,
        floatingTreeRoot: e => e.parent.type === "menu" ? e.parent.store.select("floatingTreeRoot") : e.floatingTreeRoot,
        floatingNodeId: e => e.floatingNodeId,
        floatingParentNodeId: e => e.floatingParentNodeId,
        itemProps: e => e.itemProps,
        closeDelay: e => e.closeDelay,
        adaptiveOrigin: e => e.adaptiveOrigin,
        keyboardEventRelay: e => {
            if (e.keyboardEventRelay) return e.keyboardEventRelay;
            if (e.parent.type === "menu") return e.parent.store.select("keyboardEventRelay")
        }
    },
    yu = class extends Gt {
        constructor(e) {
            super({ ...bi(),
                ...e
            }, vi(), mi), this.unsubscribeParentListener = this.observe("parent", t => {
                if (this.unsubscribeParentListener ? .(), t.type === "menu") {
                    let n = t.store.select("rootId"),
                        o = t.store.select("floatingTreeRoot"),
                        r = t.store.select("keyboardEventRelay");
                    this.unsubscribeParentListener = t.store.subscribe(() => {
                        const i = t.store.select("rootId"),
                            c = t.store.select("floatingTreeRoot"),
                            f = t.store.select("keyboardEventRelay");
                        n === i && o === c && r === f || (n = i, o = c, r = f, this.notifyAll())
                    }), this.context.allowMouseUpTriggerRef = t.store.context.allowMouseUpTriggerRef;
                    return
                }
                t.type !== void 0 && (this.context.allowMouseUpTriggerRef = t.context.allowMouseUpTriggerRef), this.unsubscribeParentListener = null
            })
        }
        setOpen(e, t) {
            this.state.floatingRootContext.context.events.emit("setOpen", {
                open: e,
                eventDetails: t
            })
        }
        unsubscribeParentListener = null
    };

function Eu() {
    const e = new Ys(Object.freeze(bi()), Object.freeze(vi()), mi);
    return Object.assign(e, {
        setOpen: St
    })
}

function vi() {
    return {
        positionerRef: s.createRef(),
        popupRef: s.createRef(),
        typingRef: {
            current: !1
        },
        itemDomElements: {
            current: []
        },
        itemLabels: {
            current: []
        },
        allowMouseUpTriggerRef: {
            current: !1
        },
        triggerFocusTargetRef: s.createRef(),
        beforeContentFocusGuardRef: s.createRef(),
        onOpenChangeComplete: void 0,
        triggerElements: new Ht
    }
}

function bi() {
    return { ...to(),
        disabled: !1,
        modal: !0,
        openMethod: null,
        allowMouseEnter: !1,
        highlightItemOnHover: !0,
        parent: {
            type: void 0
        },
        rootId: void 0,
        activeIndex: null,
        hoverEnabled: !0,
        instantType: void 0,
        openChangeReason: null,
        floatingTreeRoot: new qo,
        floatingNodeId: void 0,
        floatingParentNodeId: null,
        itemProps: Le,
        keyboardEventRelay: void 0,
        closeDelay: 0,
        adaptiveOrigin: void 0
    }
}
var Ri = s.createContext(void 0);

function yi() {
    return s.useContext(Ri)
}
var Ei = Go(function(t) {
    const {
        children: n,
        open: o,
        onOpenChange: r,
        onOpenChangeComplete: i,
        defaultOpen: c = !1,
        disabled: f = !1,
        modal: u,
        loopFocus: a = !0,
        orientation: l = "vertical",
        actionsRef: m,
        closeParentOnEsc: d = !1,
        handle: v,
        triggerId: b,
        defaultTriggerId: g = null,
        highlightItemOnHover: p = !0
    } = t, y = co(!0), h = at(!0), R = hi(!0), x = yi(), S = s.useMemo(() => x && h ? {
        type: "menu",
        store: h.store
    } : R ? {
        type: "menubar",
        context: R
    } : y && !h ? {
        type: "context-menu",
        context: y
    } : {
        type: void 0
    }, [y, h, R, x]), E = xu({
        open: c,
        openProp: o,
        activeTriggerId: g,
        triggerIdProp: b,
        parent: S
    });
    E.useControlledProp("openProp", o), E.useControlledProp("triggerIdProp", b), E.useContextCallback("onOpenChangeComplete", i);
    const P = xt(),
        T = xt(),
        C = E.useState("floatingTreeRoot"),
        I = Kn(C),
        M = pt(),
        F = E.useState("open"),
        w = E.useState("activeTriggerElement"),
        N = E.useState("positionerElement"),
        O = E.useState("hoverEnabled"),
        k = E.useState("disabled"),
        D = E.useState("lastOpenChangeReason"),
        L = E.useState("parent"),
        _ = E.useState("activeIndex"),
        ne = E.useState("payload"),
        $ = E.useState("floatingParentNodeId"),
        H = s.useRef(null),
        Q = s.useRef(L.type !== "context-menu"),
        z = Fe(),
        J = s.useRef(!0),
        Y = Fe(),
        pe = $ != null,
        {
            openMethod: V,
            triggerProps: U
        } = Ru(F);
    E.useSyncedValues({
        disabled: f,
        highlightItemOnHover: p,
        modal: L.type === void 0 ? u : void 0,
        openMethod: V,
        rootId: P
    }), Qn(E);
    const {
        forceUnmount: re
    } = Jn(F, E, () => {
        E.set("allowMouseEnter", !1)
    });
    q(() => {
        y && !h ? E.update({
            parent: {
                type: "context-menu",
                context: y
            },
            floatingNodeId: I,
            floatingParentNodeId: M
        }) : h && E.update({
            floatingNodeId: I,
            floatingParentNodeId: M
        })
    }, [y, h, I, M, E]), s.useEffect(() => {
        if (F || (H.current = null), L.type === "context-menu") {
            if (!F) {
                z.clear(), Q.current = !1;
                return
            }
            z.start(500, () => {
                Q.current = !0
            })
        }
    }, [z, F, L.type]), q(() => {
        !F && !O && E.set("hoverEnabled", !0)
    }, [F, O, E]);
    const se = te((K, Ce) => {
            const Pe = Ce.reason;
            if (!K && !E.select("open") || F === K && Ce.trigger === w && D === Pe) return;
            const Ne = tr(Ce);
            if (!K && Ce.trigger == null && (Ce.trigger = w ? ? void 0), r ? .(K, Ce), Ce.isCanceled) return;
            E.state.floatingRootContext.dispatchOpenChange(K, Ce);
            const Me = Ce.event;
            if (K === !1 && Me ? .type === "click" && Me.pointerType === "touch" && !J.current) return;
            K && Pe === "trigger-focus" ? (J.current = !1, Y.start(300, () => {
                J.current = !0
            })) : (J.current = !0, Y.clear());
            const He = (Pe === "trigger-press" || Pe === "item-press") && Me.detail === 0,
                et = !K && (Pe === "escape-key" || Pe == null),
                Ge = {
                    open: K,
                    openChangeReason: Pe
                };
            H.current = Ce.event, zn(Ge, K, Ce.trigger, Ne()), E.update(Ge), L.type === "menubar" && (Pe === "trigger-focus" || Pe === "focus-out" || Pe === "trigger-hover" || Pe === "list-navigation" || Pe === "sibling-open") ? E.set("instantType", "group") : He || et ? E.set("instantType", He ? "click" : "dismiss") : E.set("instantType", void 0)
        }),
        G = Ls({
            popupStore: E,
            floatingId: T,
            nested: M != null,
            onOpenChange: se
        }),
        ce = G.context.events;
    q(() => {
        const K = ({
            open: Ce,
            eventDetails: Pe
        }) => se(Ce, Pe);
        return ce.on("setOpen", K), () => {
            ce ? .off("setOpen", K)
        }
    }, [ce, se]);
    const le = s.useCallback(() => {
        E.setOpen(!1, ue(_t))
    }, [E]);
    s.useImperativeHandle(m, () => ({
        unmount: re,
        close: le
    }), [re, le]);
    let ve;
    L.type === "context-menu" && (ve = L.context), s.useImperativeHandle(ve ? .positionerRef, () => N, [N]), s.useImperativeHandle(ve ? .actionsRef, () => ({
        setOpen: se
    }), [se]);
    const ie = cn(G, {
            enabled: !k,
            bubbles: {
                escapeKey: d && L.type === "menu"
            },
            outsidePress() {
                return L.type !== "context-menu" || H.current ? .type === "contextmenu" ? !0 : Q.current
            },
            externalTree: pe ? C : void 0
        }),
        oe = pn(),
        ae = s.useCallback(K => {
            E.select("activeIndex") !== K && E.set("activeIndex", K)
        }, [E]),
        Z = Ec(G, {
            enabled: !k,
            listRef: E.context.itemDomElements,
            activeIndex: _,
            nested: L.type !== void 0,
            loopFocus: a,
            orientation: l,
            parentOrientation: L.type === "menubar" ? L.context.orientation : void 0,
            rtl: oe === "rtl",
            disabledIndices: Nt,
            onNavigate: ae,
            openOnArrowKeyDown: L.type !== "context-menu",
            externalTree: pe ? C : void 0,
            focusItemOnHover: p
        }),
        de = s.useCallback(K => {
            E.context.typingRef.current = K
        }, [E]),
        ge = xc(G, {
            enabled: !k,
            listRef: E.context.itemLabels,
            elementsRef: E.context.itemDomElements,
            activeIndex: _,
            resetMs: 500,
            onMatch: K => {
                F && K !== _ && E.set("activeIndex", K)
            },
            onTyping: de
        }),
        be = s.useMemo(() => {
            const K = yt(ge.reference, Z.reference, ie.reference, {
                onMouseMove() {
                    E.set("allowMouseEnter", !0)
                }
            }, U);
            return K["aria-haspopup"] = "menu", K["aria-expanded"] = F, K
        }, [E, ge.reference, Z.reference, ie.reference, U, F]),
        we = s.useMemo(() => {
            const K = yt(Z.trigger, ie.trigger, U);
            return K["aria-haspopup"] = "menu", K["aria-expanded"] = !1, K
        }, [Z.trigger, ie.trigger, U]),
        A = s.useMemo(() => yt($n, {
            id: T,
            role: "menu",
            "aria-labelledby": w ? .id,
            onMouseMove() {
                E.set("allowMouseEnter", !0), L.type === "menu" && E.set("hoverEnabled", !1)
            },
            onClick() {
                E.select("hoverEnabled") && E.set("hoverEnabled", !1)
            },
            onKeyDown(K) {
                const Ce = E.select("keyboardEventRelay");
                Ce && !K.isPropagationStopped() && Ce(K)
            }
        }, ge.floating, Z.floating, ie.floating), [w, T, L.type, E, ge.floating, Z.floating, ie.floating]),
        j = Z.item ? ? Le;
    Zn(E, {
        floatingRootContext: G,
        activeTriggerProps: be,
        inactiveTriggerProps: we,
        popupProps: A,
        itemProps: j
    });
    const he = s.useMemo(() => ({
            store: E,
            parent: S
        }), [E, S]),
        X = (0, B.jsxs)(ir.Provider, {
            value: he,
            children: [v && (0, B.jsx)(Xn, {
                handle: v,
                store: E
            }), typeof n == "function" ? n({
                payload: ne
            }) : n]
        });
    return L.type === void 0 || L.type === "context-menu" ? (0, B.jsx)(Qo, {
        externalTree: C,
        children: X
    }) : X
});

function xu(e) {
    return ft(() => new yu(e)).current
}

function Wl(e) {
    const t = at().store,
        n = s.useMemo(() => ({
            parentMenu: t
        }), [t]);
    return (0, B.jsx)(Ri.Provider, {
        value: n,
        children: (0, B.jsx)(Ei, { ...e
        })
    })
}
var Tn = 5;

function Cu(e, t) {
    const n = Su(t);
    return e.clientX >= n.left - Tn && e.clientX <= n.right + Tn && e.clientY >= n.top - Tn && e.clientY <= n.bottom + Tn
}

function Su(e) {
    const t = e.getBoundingClientRect(),
        n = Je(e);
    if ($o) return t;
    const o = n.getComputedStyle(e, "::before"),
        r = n.getComputedStyle(e, "::after");
    if (!(o.content !== "none" || r.content !== "none")) return t;
    const i = parseFloat(o.width) || 0,
        c = parseFloat(o.height) || 0,
        f = parseFloat(r.width) || 0,
        u = parseFloat(r.height) || 0,
        a = Math.max(t.width, i, f),
        l = Math.max(t.height, c, u),
        m = a - t.width,
        d = l - t.height;
    return {
        left: t.left - m / 2,
        right: t.right + m / 2,
        top: t.top - d / 2,
        bottom: t.bottom + d / 2
    }
}

function Pu(e = {}) {
    const {
        highlightItemOnHover: t,
        highlightedIndex: n,
        onHighlightedIndexChange: o
    } = ar(), {
        ref: r,
        index: i
    } = vn(e), c = n === i, f = s.useRef(null), u = Jt(r, f);
    return {
        compositeProps: {
            tabIndex: c ? 0 : -1,
            onFocus() {
                o(i)
            },
            onMouseMove() {
                const a = f.current;
                if (!t || !a) return;
                const l = a.hasAttribute("disabled") || a.ariaDisabled === "true";
                !c && !l && a.focus()
            }
        },
        compositeRef: u,
        index: i
    }
}

function dr(e) {
    const {
        render: t,
        className: n,
        style: o,
        state: r = Le,
        props: i = Nt,
        refs: c = Nt,
        metadata: f,
        stateAttributesMapping: u,
        tag: a = "div",
        ...l
    } = e, {
        compositeProps: m,
        compositeRef: d
    } = Pu({
        metadata: f
    });
    return Re(a, e, {
        state: r,
        ref: [d, ...c],
        props: [m, ...i, l],
        stateAttributesMapping: u
    })
}

function pr(e) {
    if (ke(e) && e.hasAttribute("data-rootownerid")) return e.getAttribute("data-rootownerid");
    if (!wn(e)) return pr(ss(e))
}

function xi(e, t) {
    const n = s.useRef(null);

    function o(i) {
        $e.flushSync(() => {
            e.setOpen(!1, ue(Ft, i.nativeEvent, i.currentTarget))
        }), Ga(n.current) ? .focus()
    }

    function r(i) {
        const c = e.select("positionerElement");
        if (c && rt(i, c)) e.context.beforeContentFocusGuardRef.current ? .focus();
        else {
            $e.flushSync(() => {
                e.setOpen(!1, ue(Ft, i.nativeEvent, i.currentTarget))
            });
            let f = Ss(e.context.triggerFocusTargetRef.current || t.current);
            for (; f !== null && ee(c, f);) {
                const u = f;
                if (f = sn(f), f === u) break
            }
            f ? .focus()
        }
    }
    return {
        preFocusGuardRef: n,
        handlePreFocusGuardFocus: o,
        handleFocusTargetFocus: r
    }
}

function Tu(e) {
    const {
        enabled: t = !0,
        mouseDownAction: n,
        open: o
    } = e, r = s.useRef(!1);
    return s.useMemo(() => t ? {
        onMouseDown: i => {
            (n === "open" && !o || n === "close" && o) && (r.current = !0, Ee(i.currentTarget).addEventListener("click", () => {
                r.current = !1
            }, {
                once: !0
            }))
        },
        onClick: i => {
            r.current && (r.current = !1, i.preventBaseUIHandler())
        }
    } : Le, [t, n, o])
}
var Ul = is(function(t, n) {
    const {
        render: o,
        className: r,
        style: i,
        disabled: c = !1,
        nativeButton: f = !0,
        id: u,
        openOnHover: a,
        delay: l = 100,
        closeDelay: m = 0,
        handle: d,
        payload: v,
        ...b
    } = t, g = at(!0), p = oo(d) ? ? g ? .store;
    if (!p) throw new Error(Te(85));
    const y = Ke(u),
        h = p.useState("isTriggerActive", y),
        R = p.useState("floatingRootContext"),
        x = p.useState("isOpenedByTrigger", y),
        S = p.useState("triggerPopupId", y),
        E = s.useRef(null),
        P = Iu(),
        T = ar(!0),
        C = ut(),
        I = s.useMemo(() => C ? ? new qo, [C]),
        M = Kn(I),
        F = pt(),
        {
            registerTrigger: w,
            isMountedByThisTrigger: N
        } = qn(y, E, p, {
            payload: v,
            closeDelay: m,
            parent: P,
            floatingTreeRoot: I,
            floatingNodeId: M,
            floatingParentNodeId: F,
            keyboardEventRelay: T ? .relayKeyboardEvent
        }),
        O = P.type === "menubar",
        k = p.useState("disabled"),
        D = c || k || O && P.context.disabled,
        {
            getButtonProps: L,
            buttonRef: _
        } = Lt({
            disabled: D,
            native: f
        });
    s.useEffect(() => {
        !x && P.type === void 0 && (p.context.allowMouseUpTriggerRef.current = !1)
    }, [p, x, P.type]);
    const ne = s.useRef(null),
        $ = Fe(),
        H = te(ae => {
            if (!ne.current) return;
            $.clear(), p.context.allowMouseUpTriggerRef.current = !1;
            const Z = ae.target;
            ee(ne.current, Z) || ee(p.select("positionerElement"), Z) || Z === ne.current || Z != null && pr(Z) === p.select("rootId") || Cu(ae, ne.current) || I.events.emit("close", {
                domEvent: ae,
                reason: ts
            })
        });
    s.useEffect(() => {
        x && p.select("lastOpenChangeReason") === "trigger-hover" && Ee(ne.current).addEventListener("mouseup", H, {
            once: !0
        })
    }, [x, H, p]);
    const Q = O && P.context.hasSubmenuOpen,
        z = un(R, {
            enabled: (a ? ? Q) && !D && (!O || Q && !N),
            handleClose: ln({
                blockPointerEvents: !O
            }),
            mouseOnly: !0,
            move: !1,
            restMs: P.type === void 0 ? l : void 0,
            delay: {
                close: m
            },
            triggerElementRef: E,
            externalTree: I,
            isActiveTrigger: h,
            isClosing: () => p.select("transitionStatus") === "ending"
        }),
        J = wu(x, p.select("lastOpenChangeReason")),
        Y = an(R, {
            enabled: !D,
            event: x && O ? "click" : "mousedown",
            toggle: !0,
            ignoreMouse: !1,
            stickIfOpen: P.type === void 0 ? J : !1
        }),
        pe = Ks(R, {
            enabled: !D && Q
        }),
        V = Tu({
            open: x,
            enabled: O,
            mouseDownAction: "open"
        }),
        U = s.useMemo(() => yt(pe.reference, Y.reference), [pe.reference, Y.reference]),
        re = p.useState("triggerProps", N),
        {
            preFocusGuardRef: se,
            handlePreFocusGuardFocus: G,
            handleFocusTargetFocus: ce
        } = xi(p, E),
        le = {
            disabled: D,
            open: x
        },
        ve = [ne, n, _, w, E],
        ie = [U, z ? ? Le, re, {
            "aria-haspopup": "menu",
            "aria-controls": S,
            id: y,
            onMouseDown: ae => {
                p.select("open") || ($.start(200, () => {
                    p.context.allowMouseUpTriggerRef.current = !0
                }), Ee(ae.currentTarget).addEventListener("mouseup", H, {
                    once: !0
                }))
            }
        }, O ? {
            role: "menuitem"
        } : {}, V, b, L],
        oe = Re("button", t, {
            enabled: !O,
            stateAttributesMapping: en,
            state: le,
            ref: ve,
            props: ie
        });
    return O ? (0, B.jsx)(dr, {
        tag: "button",
        render: o,
        className: r,
        style: i,
        state: le,
        refs: ve,
        props: ie,
        stateAttributesMapping: en
    }) : x ? (0, B.jsxs)(s.Fragment, {
        children: [(0, B.jsx)(Qe, {
            ref: se,
            onFocus: G
        }, `${y}-pre-focus-guard`), (0, B.jsx)(s.Fragment, {
            children: oe
        }, y), (0, B.jsx)(Qe, {
            ref: p.context.triggerFocusTargetRef,
            onFocus: ce
        }, `${y}-post-focus-guard`)]
    }) : (0, B.jsx)(s.Fragment, {
        children: oe
    }, y)
});

function wu(e, t) {
    const n = Fe(),
        [o, r] = s.useState(!1);
    return q(() => {
        e && t === "trigger-hover" ? (r(!0), n.start(500, () => {
            r(!1)
        })) : e || (n.clear(), r(!1))
    }, [e, t, n]), o
}

function Iu() {
    const e = hi(!0);
    return s.useMemo(() => e ? {
        type: "menubar",
        context: e
    } : {
        type: void 0
    }, [e])
}
var Kl = s.forwardRef(function(t, n) {
    const {
        className: o,
        render: r,
        orientation: i = "horizontal",
        style: c,
        ...f
    } = t;
    return Re("div", t, {
        state: {
            orientation: i
        },
        ref: n,
        props: [{
            role: "separator",
            "aria-orientation": i
        }, f]
    })
});

function Ou(e) {
    return e == null || e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true"
}
var Mu = {
        "aria-expanded": void 0
    },
    Gl = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            label: c,
            id: f,
            nativeButton: u = !1,
            openOnHover: a = !0,
            delay: l = 100,
            closeDelay: m = 0,
            disabled: d = !1,
            ...v
        } = t, b = yi();
        if (!b ? .parentMenu) throw new Error(Te(37));
        const g = vn({
                guess: !0,
                label: c
            }),
            p = mn(),
            {
                store: y
            } = at(),
            h = Ke(f),
            R = y.useState("open"),
            x = y.useState("floatingRootContext"),
            S = y.useState("floatingTreeRoot"),
            E = y.useState("triggerPopupId", h),
            P = js(h, y),
            T = s.useCallback(V => {
                const U = P(V);
                return V !== null && y.select("open") && y.select("activeTriggerId") == null && y.update({
                    activeTriggerId: h,
                    activeTriggerElement: V,
                    closeDelay: m
                }), U
            }, [P, m, y, h]),
            C = s.useRef(null),
            I = s.useCallback(V => {
                C.current = V, y.set("activeTriggerElement", V)
            }, [y]);
        y.useSyncedValue("closeDelay", m);
        const M = b.parentMenu,
            F = y.useState("disabled"),
            w = M.useState("disabled"),
            N = d || F || w,
            O = M.useState("itemProps"),
            k = M.useState("isActive", g.index),
            D = s.useMemo(() => ({
                type: "submenu-trigger",
                setActive() {
                    M.select("highlightItemOnHover") && M.set("activeIndex", g.index)
                }
            }), [M, g.index]),
            {
                getItemProps: L,
                itemRef: _
            } = uo({
                closeOnClick: !1,
                disabled: N,
                highlighted: k,
                id: h,
                store: y,
                typingRef: M.context.typingRef,
                nativeButton: u,
                itemMetadata: D,
                nodeId: p ? .context.nodeId
            }),
            ne = y.useState("hoverEnabled"),
            $ = un(x, {
                enabled: ne && a && !N,
                handleClose: ln({
                    blockPointerEvents: !0
                }),
                mouseOnly: !0,
                move: !0,
                restMs: l,
                delay: {
                    open: l,
                    close: m
                },
                shouldOpen: l > 0 ? () => M.select("allowMouseEnter") : void 0,
                triggerElementRef: C,
                externalTree: S,
                isClosing: () => y.select("transitionStatus") === "ending",
                guardStaleOpen: !0
            }),
            H = an(x, {
                enabled: !N,
                event: "mousedown",
                toggle: !a,
                ignoreMouse: a,
                stickIfOpen: !1
            }).reference ? ? Le,
            Q = y.useState("triggerProps", !0);
        delete Q.id;
        const z = {
                disabled: N,
                highlighted: k,
                open: R
            },
            J = y.useState("openMethod"),
            Y = y.useState("lastOpenChangeReason") === "list-navigation" || J === "keyboard";
        return Re("div", t, {
            state: z,
            stateAttributesMapping: fn,
            props: [H, $, Q, O, R && Y && cs ? Mu : void 0, {
                "aria-controls": E,
                tabIndex: R || k ? 0 : -1,
                onBlur() {
                    k && M.set("activeIndex", null)
                }
            }, v, L],
            ref: [n, g.ref, _, T, I]
        })
    }),
    ku = class extends sc {
        constructor() {
            super(Eu(), "Menu")
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

function Yl() {
    return new ku
}
var Ci = s.createContext(void 0);

function Tt(e) {
    const t = s.useContext(Ci);
    if (!e && t === void 0) throw new Error(Te(27));
    return t
}
var $l = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            forceRender: c = !1,
            ...f
        } = t, u = Tt(), a = u.useState("open"), l = u.useState("nested"), m = u.useState("mounted"), d = {
            open: a,
            transitionStatus: u.useState("transitionStatus")
        };
        return Re("div", t, {
            state: d,
            ref: [u.context.backdropRef, n],
            stateAttributesMapping: Yt,
            props: [{
                role: "presentation",
                hidden: !m,
                style: {
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            }, f],
            enabled: c || !l
        })
    }),
    Xl = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            disabled: c = !1,
            nativeButton: f = !0,
            ...u
        } = t, a = Tt(), l = a.useState("open"), {
            getButtonProps: m,
            buttonRef: d
        } = Lt({
            disabled: c,
            native: f
        }), v = {
            disabled: c
        };

        function b(g) {
            l && a.setOpen(!1, ue(ns, g.nativeEvent))
        }
        return Re("button", t, {
            state: v,
            ref: [n, d],
            props: [{
                onClick: b
            }, u, m]
        })
    }),
    zl = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            id: c,
            ...f
        } = t, u = Tt(), a = Ke(c);
        return u.useSyncedValueWithCleanup("descriptionElementId", a), Re("p", t, {
            ref: n,
            props: [{
                id: a
            }, f]
        })
    }),
    Si = s.createContext(void 0);

function Au() {
    const e = s.useContext(Si);
    if (e === void 0) throw new Error(Te(26));
    return e
}
var Du = { ...dn,
        ...tn,
        nestedDialogOpen(e) {
            return e ? {
                "data-nested-dialog-open": ""
            } : null
        }
    },
    ql = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            finalFocus: c,
            initialFocus: f,
            ...u
        } = t, a = Tt(), l = a.useState("descriptionElementId"), m = a.useState("disablePointerDismissal"), d = a.useState("floatingRootContext"), v = a.useState("popupProps"), b = a.useState("modal"), g = a.useState("mounted"), p = a.useState("nested"), y = a.useState("nestedOpenDialogCount"), h = a.useState("open"), R = a.useState("openMethod"), x = a.useState("titleElementId"), S = a.useState("transitionStatus"), E = a.useState("role"), P = d.useState("floatingId");
        Au(), st({
            open: h,
            ref: a.context.popupRef,
            onComplete() {
                h && a.context.onOpenChangeComplete ? .(!0)
            }
        });
        const T = f === void 0 ? Bs(a.context.popupRef) : f,
            C = y > 0,
            I = a.useStateSetter("popupElement"),
            M = Re("div", t, {
                state: {
                    open: h,
                    nested: p,
                    transitionStatus: S,
                    nestedDialogOpen: C
                },
                props: [v, {
                    id: P,
                    "aria-labelledby": x,
                    "aria-describedby": l,
                    role: E,
                    ...$n,
                    hidden: !g,
                    onKeyDown(F) {
                        fo.has(F.key) && F.stopPropagation()
                    },
                    style: {
                        "--nested-dialogs": y
                    }
                }, u],
                ref: [n, a.context.popupRef, I],
                stateAttributesMapping: Du
            });
        return (0, B.jsx)(Zo, {
            context: d,
            openInteractionType: R,
            disabled: !g,
            closeOnFocusOut: !m,
            initialFocus: T,
            returnFocus: c,
            modal: b !== !1,
            restoreFocus: "popup",
            children: M
        })
    }),
    Ql = s.forwardRef(function(t, n) {
        const {
            keepMounted: o = !1,
            ...r
        } = t, i = Tt(), c = i.useState("mounted"), f = i.useState("modal"), u = i.useState("open");
        return c || o ? (0, B.jsx)(Si.Provider, {
            value: o,
            children: (0, B.jsxs)(Un, {
                ref: n,
                ...r,
                children: [c && f === !0 && (0, B.jsx)(lr, {
                    ref: i.context.internalBackdropRef,
                    inert: hn(!u)
                }), t.children]
            })
        }) : null
    });

function Fu({
    store: e,
    parentContext: t,
    isDrawer: n
}) {
    const o = e.useState("open"),
        r = e.useState("disablePointerDismissal"),
        i = e.useState("modal"),
        c = e.useState("popupElement"),
        f = e.useState("floatingRootContext"),
        [u, a] = s.useState(0),
        [l, m] = s.useState(0),
        d = u === 0,
        v = cn(f, {
            outsidePressEvent() {
                return e.context.internalBackdropRef.current || e.context.backdropRef.current ? "intentional" : {
                    mouse: i === "trap-focus" ? "sloppy" : "intentional",
                    touch: "sloppy"
                }
            },
            outsidePress(b) {
                if (!e.context.outsidePressEnabledRef.current || "button" in b && b.button !== 0) return !1;
                if ("touches" in b) {
                    if (b.type === "touchend") {
                        if (b.changedTouches.length !== 1 || b.touches.length !== 0) return !1
                    } else if (b.touches.length !== 1) return !1
                }
                const g = De(b);
                if (d && !r) {
                    if (i) {
                        const p = e.context.internalBackdropRef.current,
                            y = e.context.backdropRef.current;
                        return p || y ? p === g || y === g || ee(g, c) && !g ? .hasAttribute("data-base-ui-portal") : !0
                    }
                    return !0
                }
                return !1
            },
            escapeKey: d
        });
    return fi(o && i === !0, c), e.useContextCallback("onNestedDialogOpen", (b, g) => {
        a(b), m(g)
    }), q(() => (t ? .onNestedDialogOpen && (o ? t.onNestedDialogOpen(u + 1, l + (n ? 1 : 0)) : t.onNestedDialogOpen(0, 0)), () => {
        t ? .onNestedDialogOpen && o && t.onNestedDialogOpen(0, 0)
    }), [n, o, u, l, t]), Zn(e, {
        activeTriggerProps: v.reference,
        inactiveTriggerProps: v.trigger,
        popupProps: v.floating,
        nestedOpenDialogCount: u,
        nestedOpenDrawerCount: l
    }), null
}
var Nu = { ...no,
        modal: e => e.modal,
        nested: e => e.nested,
        nestedOpenDialogCount: e => e.nestedOpenDialogCount,
        nestedOpenDrawerCount: e => e.nestedOpenDrawerCount,
        disablePointerDismissal: e => e.disablePointerDismissal,
        openMethod: e => e.openMethod,
        descriptionElementId: e => e.descriptionElementId,
        titleElementId: e => e.titleElementId,
        viewportElement: e => e.viewportElement,
        role: e => e.role
    },
    Hu = class extends Gt {
        constructor(e, t, n) {
            const o = new Ht,
                r = Lu(e, o, t, n);
            super(r, Bu(o), Nu)
        }
        setOpen = (e, t) => {
            if (t.preventUnmountOnClose = () => {
                    this.set("preventUnmountingOnClose", !0)
                }, !e && t.trigger == null && this.state.activeTriggerId != null && (t.trigger = this.state.activeTriggerElement ? ? void 0), this.context.onOpenChange ? .(e, t), t.isCanceled) return;
            this.state.floatingRootContext.dispatchOpenChange(e, t);
            const n = {
                open: e
            };
            zn(n, e, t.trigger), this.update(n)
        }
    };

function Lu(e, t, n, o = !1) {
    const r = { ...to(),
        modal: !0,
        disablePointerDismissal: !1,
        viewportElement: null,
        descriptionElementId: void 0,
        titleElementId: void 0,
        openMethod: null,
        nested: !1,
        nestedOpenDialogCount: 0,
        nestedOpenDrawerCount: 0,
        role: "dialog",
        ...e
    };
    return r.floatingRootContext = nr(t, n, o), r
}

function Bu(e) {
    return {
        popupRef: s.createRef(),
        backdropRef: s.createRef(),
        internalBackdropRef: s.createRef(),
        outsidePressEnabledRef: {
            current: !0
        },
        triggerElements: e,
        onOpenChange: void 0,
        onOpenChangeComplete: void 0
    }
}

function Pi(e, t) {
    const {
        children: n,
        open: o,
        defaultOpen: r = !1,
        onOpenChange: i,
        onOpenChangeComplete: c,
        disablePointerDismissal: f = !1,
        modal: u = !0,
        actionsRef: a,
        handle: l,
        triggerId: m,
        defaultTriggerId: d = null
    } = t, v = e === "drawer", b = e === "alert-dialog", g = b ? !0 : u, p = b || f, y = b ? "alertdialog" : "dialog", h = Tt(!0), R = {
        modal: g,
        disablePointerDismissal: p,
        nested: h != null,
        role: y
    }, x = er((I, M) => new Hu({
        open: r,
        openProp: o,
        activeTriggerId: d,
        triggerIdProp: m,
        ...R
    }, I, M), !0);
    x.useControlledProp("openProp", o), x.useControlledProp("triggerIdProp", m), x.useSyncedValues(R), x.useContextCallback("onOpenChange", i), x.useContextCallback("onOpenChangeComplete", c);
    const S = x.useState("open"),
        E = x.useState("mounted"),
        P = x.useState("payload");
    _s(x, S), Qn(x);
    const {
        forceUnmount: T
    } = Jn(S, x);
    s.useImperativeHandle(a, () => ({
        unmount: T,
        close: () => x.setOpen(!1, ue(_t))
    }), [T, x]);
    const C = S || E;
    return (0, B.jsxs)(Ci.Provider, {
        value: x,
        children: [l && (0, B.jsx)(Xn, {
            handle: l,
            store: x
        }), C && (0, B.jsx)(Fu, {
            store: x,
            parentContext: h ? .context,
            isDrawer: v
        }), typeof n == "function" ? n({
            payload: P
        }) : n]
    })
}

function Jl(e) {
    return Pi("dialog", e)
}
var Zl = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            id: c,
            ...f
        } = t, u = Tt(), a = Ke(c);
        return u.useSyncedValueWithCleanup("titleElementId", a), Re("h2", t, {
            ref: n,
            props: [{
                id: a
            }, f]
        })
    }),
    ef = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            disabled: c = !1,
            nativeButton: f = !0,
            id: u,
            payload: a,
            handle: l,
            ...m
        } = t, d = Tt(!0), v = oo(l) ? ? d;
        if (!v) throw new Error(Te(79));
        const b = Ke(u),
            g = v.useState("floatingRootContext"),
            p = v.useState("isOpenedByTrigger", b),
            y = v.useState("triggerPopupId", b),
            h = s.useRef(null),
            {
                registerTrigger: R,
                isMountedByThisTrigger: x
            } = qn(b, h, v, {
                payload: a
            }),
            {
                getButtonProps: S,
                buttonRef: E
            } = Lt({
                disabled: c,
                native: f
            }),
            P = an(g),
            T = fr(() => v.select("open"), M => {
                v.set("openMethod", M)
            }),
            C = {
                disabled: c,
                open: p
            },
            I = v.useState("triggerProps", x);
        return Re("button", t, {
            state: C,
            ref: [E, n, R, h],
            props: [P.reference, I, T, {
                [ws]: "",
                id: b,
                "aria-haspopup": "dialog",
                "aria-expanded": p,
                "aria-controls": y
            }, m, S],
            stateAttributesMapping: fn
        })
    });

function tf(e) {
    return Pi("alert-dialog", e)
}
var Ti = s.createContext(void 0);

function gt(e) {
    const t = s.useContext(Ti);
    if (t === void 0 && !e) throw new Error(Te(47));
    return t
}
var wi = { ...no,
        disabled: e => e.disabled,
        instantType: e => e.instantType,
        openMethod: e => e.openMethod,
        openChangeReason: e => e.openChangeReason,
        modal: e => e.modal,
        focusManagerModal: e => e.focusManagerModal,
        stickIfOpen: e => e.stickIfOpen,
        titleElementId: e => e.titleElementId,
        descriptionElementId: e => e.descriptionElementId,
        openOnHover: e => e.openOnHover,
        closeDelay: e => e.closeDelay,
        adaptiveOrigin: e => e.adaptiveOrigin
    },
    ju = class extends Gt {
        constructor(e, t, n) {
            const o = new Ht;
            super(Ii(e, o, t, n), Oi(o), wi)
        }
        setOpen = (e, t) => {
            const n = t.reason === Ve,
                o = t.reason === "trigger-press" && t.event.detail === 0,
                r = !e && (t.reason === "escape-key" || t.reason == null),
                i = tr(t),
                c = this.select("activeTriggerId");
            if (!e && t.reason === "close-press" && t.trigger == null && c != null && (t.trigger = this.context.triggerElements.getById(c) ? ? this.select("activeTriggerElement") ? ? void 0), this.context.onOpenChange ? .(e, t), t.isCanceled) return;
            this.state.floatingRootContext.dispatchOpenChange(e, t);
            const f = () => {
                const a = {
                    open: e,
                    openChangeReason: t.reason
                };
                zn(a, e, t.trigger, i()), this.update(a)
            };
            n ? (this.set("stickIfOpen", !0), this.context.stickIfOpenTimeout.start(500, () => {
                this.set("stickIfOpen", !1)
            }), $e.flushSync(f)) : f();
            let u;
            o ? u = "click" : r ? u = "dismiss" : t.reason === "focus-out" && (u = "focus"), this.set("instantType", u)
        }
    };

function nf() {
    const e = new Ht,
        t = new Ys(Object.freeze(Ii(void 0, e)), Object.freeze(Oi(e)), wi);
    return Object.assign(t, {
        setOpen: St
    })
}

function Ii(e, t, n, o = !1) {
    const r = { ...to(),
        disabled: !1,
        modal: !1,
        focusManagerModal: !1,
        instantType: void 0,
        openMethod: null,
        openChangeReason: null,
        titleElementId: void 0,
        descriptionElementId: void 0,
        stickIfOpen: !0,
        openOnHover: !1,
        closeDelay: 0,
        adaptiveOrigin: void 0,
        ...e
    };
    return r.open && e ? .mounted === void 0 && (r.mounted = !0), r.floatingRootContext = nr(t, n, o), r
}

function Oi(e) {
    return {
        popupRef: s.createRef(),
        onOpenChange: void 0,
        onOpenChangeComplete: void 0,
        triggerFocusTargetRef: s.createRef(),
        beforeContentFocusGuardRef: s.createRef(),
        stickIfOpenTimeout: new lt,
        triggerElements: e
    }
}

function zr({
    props: e
}) {
    const {
        children: t,
        open: n,
        defaultOpen: o = !1,
        onOpenChange: r,
        onOpenChangeComplete: i,
        modal: c = !1,
        handle: f,
        triggerId: u,
        defaultTriggerId: a = null
    } = e, l = _u(f, {
        modal: c,
        open: o,
        openProp: n,
        activeTriggerId: a,
        triggerIdProp: u
    });
    l.useControlledProp("openProp", n), l.useControlledProp("triggerIdProp", u);
    const m = l.useState("open"),
        d = l.useState("mounted"),
        v = l.useState("payload");
    l.useContextCallback("onOpenChange", r), l.useContextCallback("onOpenChangeComplete", i), _s(l, m), Qn(l);
    const {
        forceUnmount: b
    } = Jn(m, l, () => {
        l.update({
            stickIfOpen: !0,
            openChangeReason: null
        })
    });
    l.useSyncedValues({
        modal: c
    }), s.useEffect(() => {
        m || l.context.stickIfOpenTimeout.clear()
    }, [l, m]), s.useImperativeHandle(e.actionsRef, () => ({
        unmount: b,
        close: () => l.setOpen(!1, ue(_t))
    }), [b, l]);
    const g = m || d;
    return (0, B.jsxs)(Ti.Provider, {
        value: l,
        children: [f && (0, B.jsx)(Xn, {
            handle: f,
            store: l
        }), g && (0, B.jsx)(Vu, {
            store: l,
            modal: c
        }), typeof t == "function" ? t({
            payload: v
        }) : t]
    })
}

function of (e) {
    return gt(!0) ? (0, B.jsx)(zr, {
        props: e
    }) : (0, B.jsx)(Qo, {
        children: (0, B.jsx)(zr, {
            props: e
        })
    })
}

function _u(e, t) {
    const n = er((o, r) => new ju(t, o, r));
    return s.useEffect(() => n.context.stickIfOpenTimeout.disposeEffect(), [n]), n
}

function Vu({
    store: e,
    modal: t
}) {
    const n = e.useState("floatingRootContext"),
        o = cn(n, {
            outsidePressEvent: {
                mouse: t === "trap-focus" ? "sloppy" : "intentional",
                touch: "sloppy"
            }
        }),
        r = o.reference,
        i = o.floating;
    return Zn(e, {
        activeTriggerProps: r,
        inactiveTriggerProps: r,
        popupProps: i
    }), null
}
var rf = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            disabled: c = !1,
            nativeButton: f = !0,
            handle: u,
            payload: a,
            openOnHover: l = !1,
            delay: m = 300,
            closeDelay: d = 0,
            id: v,
            ...b
        } = t, g = gt(!0), p = oo(u) ? ? g;
        if (!p) throw new Error(Te(74));
        const y = Ke(v),
            h = p.useState("isTriggerActive", y),
            R = p.useState("floatingRootContext"),
            x = p.useState("isOpenedByTrigger", y),
            S = p.useState("triggerPopupId", y),
            E = s.useRef(null),
            {
                registerTrigger: P,
                isMountedByThisTrigger: T
            } = qn(y, E, p, {
                payload: a,
                disabled: c,
                openOnHover: l,
                closeDelay: d
            }),
            C = p.useState("openChangeReason"),
            I = p.useState("stickIfOpen"),
            M = p.useState("openMethod"),
            F = p.useState("focusManagerModal"),
            w = un(R, {
                enabled: !c && l && (M !== "touch" || C !== "trigger-press"),
                mouseOnly: !0,
                move: !1,
                handleClose: ln(),
                restMs: m,
                delay: {
                    close: d
                },
                triggerElementRef: E,
                isActiveTrigger: h,
                isClosing: () => p.select("transitionStatus") === "ending"
            }),
            N = an(R, {
                stickIfOpen: I
            }),
            O = fr(() => p.select("open"), J => {
                p.set("openMethod", J)
            }),
            k = p.useState("triggerProps", T),
            {
                getButtonProps: D,
                buttonRef: L
            } = Lt({
                disabled: c,
                native: f
            }),
            _ = {
                open(J) {
                    return J && C === "trigger-press" ? en.open(J) : fn.open(J)
                }
            },
            {
                preFocusGuardRef: ne,
                handlePreFocusGuardFocus: $,
                handleFocusTargetFocus: H
            } = xi(p, E),
            Q = Re("button", t, {
                state: {
                    disabled: c,
                    open: x
                },
                ref: [L, n, P, E],
                props: [N.reference, w, k, O, {
                    [ws]: "",
                    id: y,
                    "aria-haspopup": "dialog",
                    "aria-expanded": x,
                    "aria-controls": S
                }, b, D],
                stateAttributesMapping: _
            }),
            z = (0, B.jsx)(s.Fragment, {
                children: Q
            }, y);
        return T && !F ? (0, B.jsxs)(s.Fragment, {
            children: [(0, B.jsx)(Qe, {
                ref: ne,
                onFocus: $
            }), z, (0, B.jsx)(Qe, {
                ref: p.context.triggerFocusTargetRef,
                onFocus: H
            })]
        }) : z
    }),
    Mi = s.createContext(void 0);

function Wu() {
    const e = s.useContext(Mi);
    if (e === void 0) throw new Error(Te(45));
    return e
}
var sf = s.forwardRef(function(t, n) {
        const {
            keepMounted: o = !1,
            ...r
        } = t;
        return gt().useState("mounted") || o ? (0, B.jsx)(Mi.Provider, {
            value: o,
            children: (0, B.jsx)(Un, {
                ref: n,
                ...r
            })
        }) : null
    }),
    ki = s.createContext(void 0);

function Uu() {
    const e = s.useContext(ki);
    if (!e) throw new Error(Te(46));
    return e
}
var af = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            anchor: c,
            positionMethod: f,
            side: u,
            align: a,
            sideOffset: l,
            alignOffset: m,
            collisionBoundary: d = "clipping-ancestors",
            collisionPadding: v,
            arrowPadding: b,
            sticky: g,
            disableAnchorTracking: p = !1,
            collisionAvoidance: y = Wn,
            ...h
        } = t, R = gt(), x = Wu(), S = Kn(), E = R.useState("floatingRootContext"), P = R.useState("mounted"), T = R.useState("open"), C = R.useState("openChangeReason"), I = R.useState("activeTriggerElement"), M = R.useState("modal"), F = R.useState("openMethod"), w = R.useState("positionerElement"), N = R.useState("instantType"), O = R.useState("transitionStatus"), k = R.useState("adaptiveOrigin"), D = s.useRef(null), L = _o(w), _ = sr({
            anchor: c,
            floatingRootContext: E,
            positionMethod: f,
            mounted: P,
            side: u,
            sideOffset: l,
            align: a,
            alignOffset: m,
            arrowPadding: b,
            collisionBoundary: d,
            collisionPadding: v,
            sticky: g,
            disableAnchorTracking: p,
            keepMounted: x,
            nodeId: S,
            collisionAvoidance: y,
            adaptiveOrigin: k
        }), ne = E.useState("domReferenceElement");
        q(() => {
            const J = ne,
                Y = D.current;
            if (J && (D.current = J), Y && J && J !== Y) {
                R.set("instantType", void 0);
                const pe = new AbortController;
                return L(() => {
                    R.set("instantType", "trigger-change")
                }, pe.signal), () => {
                    pe.abort()
                }
            }
        }, [ne, L, R]);
        const $ = M === !0 && C !== "trigger-hover";
        di(T && $, F === "touch", w, I);
        const H = R.useStateSetter("positionerElement"),
            Q = {
                open: T,
                side: _.side,
                align: _.align,
                anchorHidden: _.anchorHidden,
                instant: N
            },
            z = ao(t, Q, {
                styles: _.positionerStyles,
                transitionStatus: O,
                props: h,
                refs: [n, H],
                hidden: !P,
                inert: !T
            });
        return (0, B.jsxs)(ki.Provider, {
            value: _,
            children: [P && $ && (0, B.jsx)(lr, {
                inert: hn(!T),
                cutout: I
            }), (0, B.jsx)(Gn, {
                id: S,
                children: z
            })]
        })
    }),
    Ai = s.createContext(void 0);

function Ku() {
    const [e, t] = s.useState(0), n = te(() => (t(o => o + 1), () => {
        t(o => Math.max(0, o - 1))
    }));
    return {
        context: s.useMemo(() => ({
            register: n
        }), [n]),
        hasClosePart: e > 0
    }
}

function Gu() {
    const e = s.useContext(Ai);
    q(() => e ? .register(), [e])
}
var cf = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            initialFocus: c,
            finalFocus: f,
            ...u
        } = t, a = gt(), l = Uu(), m = si(!0) != null, {
            context: d,
            hasClosePart: v
        } = Ku(), b = a.useState("open"), g = a.useState("openMethod"), p = a.useState("instantType"), y = a.useState("transitionStatus"), h = a.useState("popupProps"), R = a.useState("titleElementId"), x = a.useState("descriptionElementId"), S = a.useState("modal"), E = a.useState("mounted"), P = a.useState("openChangeReason"), T = a.useState("activeTriggerElement"), C = a.useState("floatingRootContext"), I = C.useState("floatingId"), M = a.useState("disabled"), F = a.useState("openOnHover"), w = a.useState("closeDelay");
        st({
            open: b,
            ref: a.context.popupRef,
            onComplete() {
                b && a.context.onOpenChangeComplete ? .(!0)
            }
        }), so(C, {
            enabled: F && !M,
            closeDelay: w
        });
        const N = c === void 0 ? Bs(a.context.popupRef) : c,
            O = S !== !1 && v;
        a.useSyncedValue("focusManagerModal", O);
        const k = a.useStateSetter("popupElement"),
            D = {
                open: b,
                side: l.side,
                align: l.align,
                instant: p,
                transitionStatus: y
            },
            L = Re("div", t, {
                state: D,
                ref: [n, a.context.popupRef, k],
                props: [h, {
                    id: I,
                    role: "dialog",
                    ...$n,
                    "aria-labelledby": R,
                    "aria-describedby": x,
                    onKeyDown(_) {
                        m && fo.has(_.key) && _.stopPropagation()
                    }
                }, gn(y), u],
                stateAttributesMapping: Yt
            });
        return (0, B.jsx)(Zo, {
            context: C,
            openInteractionType: g,
            modal: O,
            disabled: !E || P === "trigger-hover",
            initialFocus: N,
            returnFocus: f,
            restoreFocus: "popup",
            previousFocusableElement: ke(T) ? T : void 0,
            nextFocusableElement: a.context.triggerFocusTargetRef,
            beforeContentFocusGuardRef: a.context.beforeContentFocusGuardRef,
            children: (0, B.jsx)(Ai.Provider, {
                value: d,
                children: L
            })
        })
    }),
    uf = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            ...c
        } = t, f = gt(), u = f.useState("open"), a = f.useState("mounted"), l = f.useState("transitionStatus"), m = f.useState("openChangeReason");
        return Re("div", t, {
            state: {
                open: u,
                transitionStatus: l
            },
            ref: n,
            props: [{
                role: "presentation",
                hidden: !a,
                style: {
                    pointerEvents: m === "trigger-hover" ? "none" : void 0,
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            }, c],
            stateAttributesMapping: Yt
        })
    }),
    lf = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            ...c
        } = t, f = gt(), u = Ke(c.id);
        return f.useSyncedValueWithCleanup("titleElementId", u), Re("h2", t, {
            ref: n,
            props: [{
                id: u
            }, c]
        })
    }),
    ff = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            ...c
        } = t, f = gt(), u = Ke(c.id);
        return f.useSyncedValueWithCleanup("descriptionElementId", u), Re("p", t, {
            ref: n,
            props: [{
                id: u
            }, c]
        })
    }),
    df = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            disabled: c = !1,
            nativeButton: f = !0,
            ...u
        } = t, {
            buttonRef: a,
            getButtonProps: l
        } = Lt({
            disabled: c,
            focusableWhenDisabled: !1,
            native: f
        }), m = gt();
        return Gu(), Re("button", t, {
            ref: [n, a],
            props: [{
                onClick(d) {
                    m.setOpen(!1, ue(ns, d.nativeEvent))
                }
            }, u, l]
        })
    });

function pf(e) {
    const [t, n] = s.useState({
        getBoundingClientRect() {
            return DOMRect.fromRect({
                width: 0,
                height: 0,
                x: 0,
                y: 0
            })
        }
    }), o = s.useRef(null), r = s.useRef(null), i = s.useRef(null), c = s.useRef(null), f = s.useRef(!0), u = s.useRef(null), a = xt(), l = s.useMemo(() => ({
        anchor: t,
        setAnchor: n,
        actionsRef: i,
        backdropRef: o,
        internalBackdropRef: r,
        positionerRef: c,
        allowMouseUpTriggerRef: f,
        initialCursorPointRef: u,
        rootId: a
    }), [t, a]);
    return (0, B.jsx)(ti.Provider, {
        value: l,
        children: (0, B.jsx)(ir.Provider, {
            value: void 0,
            children: (0, B.jsx)(Ei, { ...e
            })
        })
    })
}
var qr = 500,
    gf = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            ...c
        } = t, {
            setAnchor: f,
            actionsRef: u,
            internalBackdropRef: a,
            backdropRef: l,
            positionerRef: m,
            allowMouseUpTriggerRef: d,
            initialCursorPointRef: v,
            rootId: b
        } = co(!1), {
            store: g
        } = at(!1), p = g.useState("open"), y = g.useState("disabled"), h = s.useRef(null), R = s.useRef(null), x = Fe(), S = Fe(), E = s.useRef(!1), P = s.useRef(null);

        function T(w, N, O) {
            const k = O.type.startsWith("touch");
            v.current = {
                x: w,
                y: N
            }, f({
                getBoundingClientRect() {
                    return DOMRect.fromRect({
                        width: k ? 10 : 0,
                        height: k ? 10 : 0,
                        x: w,
                        y: N
                    })
                }
            }), E.current = !1, u.current ? .setOpen(!0, ue(nn, O)), S.start(qr, () => {
                E.current = !0
            })
        }

        function C(w) {
            if (y) return;
            d.current = !0, Ue(w), T(w.clientX, w.clientY, w.nativeEvent);
            const N = Ee(h.current);
            P.current ? .abort();
            const O = new AbortController;
            P.current = O, N.addEventListener("mouseup", k => {
                if (d.current = !1, !E.current) return;
                S.clear(), E.current = !1;
                const D = De(k);
                ee(m.current, D) || b && D && pr(D) === b || u.current ? .setOpen(!1, ue(ts, k))
            }, {
                once: !0,
                signal: O.signal
            })
        }

        function I() {
            x.clear(), R.current = null
        }

        function M(w) {
            if (y) {
                I();
                return
            }
            if (d.current = !1, w.touches.length !== 1) {
                I();
                return
            }
            w.stopPropagation();
            const N = w.touches[0],
                O = {
                    x: N.clientX,
                    y: N.clientY
                };
            R.current = O, x.start(qr, () => {
                T(O.x, O.y, w.nativeEvent)
            })
        }

        function F(w) {
            if (w.touches.length !== 1) {
                I();
                return
            }
            if (x.isStarted() && R.current) {
                const N = w.touches[0],
                    O = 10,
                    k = Math.abs(N.clientX - R.current.x),
                    D = Math.abs(N.clientY - R.current.y);
                (k > O || D > O) && I()
            }
        }
        return s.useEffect(() => () => {
            P.current ? .abort()
        }, []), s.useEffect(() => {
            function w(O) {
                if (y) return;
                const k = De(O);
                (ee(h.current, k) || ee(a.current, k) || ee(l.current, k)) && O.preventDefault()
            }
            const N = Ee(h.current);
            return me(N, "contextmenu", w)
        }, [l, y, a]), Re("div", t, {
            state: {
                open: p
            },
            ref: [h, n],
            props: [{
                onContextMenu: C,
                onTouchStart: M,
                onTouchMove: F,
                onTouchEnd: I,
                onTouchCancel: I,
                style: {
                    WebkitTouchCallout: "none"
                }
            }, c],
            stateAttributesMapping: en
        })
    }),
    Di = s.createContext(void 0);

function Ze(e) {
    const t = s.useContext(Di);
    if (t === void 0 && !e) throw new Error(Te(41));
    return t
}
var Fi = s.createContext(void 0);

function bn() {
    return s.useContext(Fi)
}
var ct = (function(e) {
        return e.availableWidth = "--available-width", e.availableHeight = "--available-height", e.anchorWidth = "--anchor-width", e.anchorHeight = "--anchor-height", e.transformOrigin = "--transform-origin", e.positionerWidth = "--positioner-width", e.positionerHeight = "--positioner-height", e
    })({}),
    qe = (function(e) {
        return e.popupWidth = "--popup-width", e.popupHeight = "--popup-height", e
    })({});

function An(e, t, n, o) {
    e.style.setProperty(qe.popupWidth, `${n}px`), e.style.setProperty(qe.popupHeight, `${o}px`), t.style.setProperty(ct.positionerWidth, `${n}px`), t.style.setProperty(ct.positionerHeight, `${o}px`)
}
var Yu = new Set([Ve, os, Ft]);

function $u(e) {
    const t = parseFloat(e.style.getPropertyValue(ct.positionerWidth)) || 0,
        n = parseFloat(e.style.getPropertyValue(ct.positionerHeight)) || 0;
    return t <= 0 || n <= 0 ? null : {
        width: t,
        height: n
    }
}
var hf = s.forwardRef(function(t, n) {
    const {
        defaultValue: o = null,
        value: r,
        onValueChange: i,
        actionsRef: c,
        delay: f = 50,
        closeDelay: u = 50,
        orientation: a = "horizontal",
        onOpenChangeComplete: l
    } = t, m = pt() != null, d = Ze(!0), [v, b] = jo({
        controlled: r,
        default: o,
        name: "NavigationMenu",
        state: "value"
    }), g = v != null, p = s.useRef(void 0), y = s.useRef(null), [h, R] = s.useState(null), [x, S] = s.useState(null), [E, P] = s.useState(null), [T, C] = s.useState(null), [I, M] = s.useState(null), [F, w] = s.useState(void 0), [N, O] = s.useState(!1), k = s.useRef(null), D = s.useRef(null), L = s.useRef(null), _ = s.useRef(null), ne = s.useRef(null), $ = s.useRef(null), H = s.useRef({
        abortController: null,
        owner: null
    }), {
        mounted: Q,
        setMounted: z,
        transitionStatus: J
    } = Kt(g);
    q(() => {
        if (g || !h || !x) return;
        const se = $u(h);
        se && An(x, h, se.width, se.height)
    }, [g, x, h]), s.useEffect(() => {
        O(!1)
    }, [v]);
    const Y = te((se, G) => {
            se == null && (p.current = G.reason), se !== v && i ? .(se, G), !G.isCanceled && (se == null && (M(null), w(void 0)), b(se), m && se == null && G.reason === "link-press" && d && d.setValue(null, G))
        }),
        pe = te(() => {
            const se = Ee(y.current),
                G = _e(se);
            !(p.current && Yu.has(p.current)) && ke(k.current) && (G === Ee(x).body || ee(x, G)) && x && (k.current.focus({
                preventScroll: !0
            }), k.current = void 0), z(!1), l ? .(!1), M(null), w(void 0), D.current = null, p.current = void 0
        });
    s.useImperativeHandle(c, () => ({
        unmount: pe
    }), [pe]), st({
        enabled: !c,
        open: g,
        ref: {
            current: x
        },
        onComplete() {
            g || pe()
        }
    }), st({
        enabled: !c,
        open: g,
        ref: {
            current: T
        },
        onComplete() {
            g || pe()
        }
    });
    const V = g ? I : null,
        U = s.useMemo(() => ({
            open: g,
            value: v,
            setValue: Y,
            mounted: Q,
            transitionStatus: J,
            positionerElement: h,
            setPositionerElement: R,
            popupElement: x,
            setPopupElement: S,
            viewportElement: E,
            setViewportElement: P,
            viewportTargetElement: T,
            setViewportTargetElement: C,
            activationDirection: V,
            setActivationDirection: M,
            floatingRootContext: F,
            setFloatingRootContext: w,
            currentContentRef: D,
            nested: m,
            rootRef: y,
            beforeInsideRef: L,
            afterInsideRef: _,
            beforeOutsideRef: ne,
            afterOutsideRef: $,
            prevTriggerElementRef: k,
            popupAutoSizeResetRef: H,
            delay: f,
            closeDelay: u,
            orientation: a,
            viewportInert: N,
            setViewportInert: O
        }), [g, v, Y, Q, J, h, x, E, T, V, F, m, f, u, a, N]),
        re = (0, B.jsx)(Di.Provider, {
            value: U,
            children: (0, B.jsx)(Xu, {
                componentProps: t,
                forwardedRef: n,
                children: t.children
            })
        });
    return m ? re : (0, B.jsx)(Qo, {
        children: re
    })
});

function Xu(e) {
    const {
        className: t,
        render: n,
        defaultValue: o,
        value: r,
        onValueChange: i,
        actionsRef: c,
        delay: f,
        closeDelay: u,
        orientation: a,
        onOpenChangeComplete: l,
        style: m,
        ...d
    } = e.componentProps, v = Kn(), {
        rootRef: b,
        nested: g,
        open: p
    } = Ze(), y = {
        open: p,
        nested: g
    }, h = Re(g ? "div" : "nav", e.componentProps, {
        state: y,
        ref: [e.forwardedRef, b],
        props: d
    });
    return (0, B.jsx)(Fi.Provider, {
        value: v,
        children: (0, B.jsx)(Gn, {
            id: v,
            children: h
        })
    })
}
var mf = "data-composite-item-active",
    zu = [];

function qu(e) {
    const {
        loopFocus: t = !0,
        orientation: n = "both",
        grid: o,
        onLoop: r,
        direction: i,
        highlightedIndex: c,
        onHighlightedIndexChange: f,
        rootRef: u,
        enableHomeAndEndKeys: a = !1,
        stopEventPropagation: l,
        disabledIndices: m,
        modifierKeys: d = zu
    } = e, [v, b] = s.useState(0), g = o != null, p = s.useRef(null), y = Jt(p, u), h = s.useRef([]), R = s.useRef(!1), x = c ? ? v, S = te((C, I = !1) => {
        if ((f ? ? b)(C), I) {
            const M = h.current[C];
            Ur(p.current, M, i, n)
        }
    }), E = te(C => {
        if (C.size === 0 || R.current) return;
        R.current = !0;
        const I = Array.from(C.keys()),
            M = I.find(w => w ? .hasAttribute("data-composite-item-active")) ? ? null,
            F = M ? C.get(M) ? .index ? ? -1 : -1;
        if (F !== -1) S(F);
        else if (Wt(I, x, m)) {
            const w = Be(I, {
                disabledIndices: m
            });
            Dt(I, w) || S(w)
        }
        Ur(p.current, M, i, n)
    });
    q(() => {
        if (m == null || c != null || !R.current) return;
        const C = h.current;
        if (Wt(C, x, m)) {
            const I = Be(C, {
                disabledIndices: m
            });
            Dt(C, I) || S(I)
        }
    }, [m, c, x, h, S]);
    const P = te((C, I, M) => r ? r(C, I, M, h) : M),
        T = te(C => {
            const I = C.key === "Home" || C.key === "End";
            if (!fo.has(C.key) || !a && I || Qu(C, d) || !p.current) return;
            const M = i === "rtl",
                F = M ? Fo : No,
                w = M ? No : Fo,
                N = n === "vertical" ? ai : F,
                O = n === "vertical" ? ii : w,
                k = De(C.nativeEvent);
            if (k != null && Wr(k) && !Ou(k)) {
                const H = k.selectionStart,
                    Q = k.selectionEnd,
                    z = k.value;
                if (H == null || C.shiftKey || H !== Q || C.key !== O && H < z.length || C.key !== N && H > 0) return
            }
            let D = x;
            const L = In(h, m),
                _ = Mo(h, m);
            o != null && (D = o({
                disabledIndices: m,
                elementsRef: h,
                event: C,
                highlightedIndex: x,
                loopFocus: t,
                maxIndex: _,
                minIndex: L,
                onLoop: P,
                orientation: n,
                rtl: M
            }));
            const ne = n !== "vertical" && C.key === F || n !== "horizontal" && C.key === "ArrowDown",
                $ = n !== "vertical" && C.key === w || n !== "horizontal" && C.key === "ArrowUp";
            a && (C.key === "Home" ? D = L : C.key === "End" && (D = _)), D === x && (ne || $) && (t && D === _ && ne ? (D = L, r && (D = r(C, x, D, h))) : t && D === L && $ ? (D = _, r && (D = r(C, x, D, h))) : D = Be(h.current, {
                startingIndex: D,
                decrement: $,
                disabledIndices: m
            })), D !== x && !Dt(h.current, D) && (l && C.stopPropagation(), (g || I || ne || $) && C.preventDefault(), S(D, !0), queueMicrotask(() => {
                h.current[D] ? .focus()
            }))
        });
    return {
        props: {
            ref: y,
            onFocus(C) {
                const I = p.current,
                    M = De(C.nativeEvent);
                !I || M == null || !Wr(M) || M.setSelectionRange(0, M.value.length)
            },
            onKeyDown: T
        },
        highlightedIndex: x,
        onHighlightedIndexChange: S,
        elementsRef: h,
        onMapChange: E,
        relayKeyboardEvent: T
    }
}

function Qu(e, t) {
    for (const n of Zc)
        if (!t.includes(n) && e.getModifierState(n)) return !0;
    return !1
}

function Ho(e) {
    const {
        render: t,
        className: n,
        style: o,
        refs: r = Nt,
        props: i = Nt,
        state: c = Le,
        stateAttributesMapping: f,
        highlightedIndex: u,
        onHighlightedIndexChange: a,
        orientation: l,
        grid: m,
        loopFocus: d,
        onLoop: v,
        enableHomeAndEndKeys: b,
        onMapChange: g,
        stopEventPropagation: p = !0,
        rootRef: y,
        disabledIndices: h,
        modifierKeys: R,
        highlightItemOnHover: x = !1,
        tag: S = "div",
        ...E
    } = e, P = pn(), {
        props: T,
        highlightedIndex: C,
        onHighlightedIndexChange: I,
        elementsRef: M,
        onMapChange: F,
        relayKeyboardEvent: w
    } = qu({
        grid: m,
        loopFocus: d,
        onLoop: v,
        orientation: l,
        highlightedIndex: u,
        onHighlightedIndexChange: a,
        rootRef: y,
        stopEventPropagation: p,
        enableHomeAndEndKeys: b,
        direction: P,
        disabledIndices: h,
        modifierKeys: R
    }), N = Re(S, e, {
        state: c,
        ref: r,
        props: [T, ...i, E],
        stateAttributesMapping: f
    }), O = s.useMemo(() => ({
        highlightedIndex: C,
        onHighlightedIndexChange: I,
        highlightItemOnHover: x,
        relayKeyboardEvent: w
    }), [C, I, x, w]);
    return (0, B.jsx)(oi.Provider, {
        value: O,
        children: (0, B.jsx)(ui, {
            elementsRef: M,
            onMapChange: k => {
                g ? .(k), F(k)
            },
            children: N
        })
    })
}
var Ni = "data-base-ui-navigation-menu-trigger",
    Lo = s.createContext(void 0);

function Ju() {
    return s.useContext(Lo)
}
var vf = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            ...c
        } = t, f = bn(), {
            orientation: u,
            open: a,
            floatingRootContext: l,
            positionerElement: m,
            value: d,
            closeDelay: v,
            viewportElement: b,
            nested: g
        } = Ze(), p = s.useMemo(() => eo(), []), y = l || p, h = m != null || d == null;
        so(y, {
            enabled: !!l && (m != null || b != null || d == null),
            closeDelay: v,
            nodeId: f
        });
        const R = cn(y, {
                enabled: h,
                outsidePressEvent: "intentional",
                outsidePress(C) {
                    return De(C) ? .closest(`[${Ni}]`) === null
                }
            }),
            x = l ? R : void 0,
            S = {
                open: a
            },
            E = g ? Le : {
                onKeyDown(C) {
                    (u === "horizontal" && (C.key === "ArrowLeft" || C.key === "ArrowRight") || u === "vertical" && (C.key === "ArrowUp" || C.key === "ArrowDown")) && C.stopPropagation()
                }
            },
            P = [x ? .floating || Le, E, c],
            T = Re("ul", t, {
                state: S,
                ref: n,
                props: P,
                enabled: g
            });
        return g ? (0, B.jsx)(Lo.Provider, {
            value: x,
            children: T
        }) : (0, B.jsx)(Lo.Provider, {
            value: x,
            children: (0, B.jsx)(Ho, {
                render: o,
                className: r,
                style: i,
                state: S,
                refs: [n],
                props: P,
                loopFocus: !1,
                orientation: u,
                tag: "ul"
            })
        })
    }),
    Hi = s.createContext(void 0);

function gr() {
    const e = s.useContext(Hi);
    if (!e) throw new Error(Te(39));
    return e
}
var bf = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            value: c,
            ...f
        } = t, u = Ke(), a = c ? ? u, l = Re("li", t, {
            ref: n,
            props: f
        }), m = s.useMemo(() => ({
            value: a
        }), [a]);
        return (0, B.jsx)(Hi.Provider, {
            value: m,
            children: l
        })
    }),
    Qr = { ...dn,
        ...tn,
        activationDirection(e) {
            return e ? {
                "data-activation-direction": e
            } : null
        }
    },
    Rf = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            keepMounted: c = !1,
            ...f
        } = t, {
            mounted: u,
            viewportElement: a,
            value: l,
            activationDirection: m,
            currentContentRef: d,
            viewportTargetElement: v
        } = Ze(), {
            value: b
        } = gr(), g = bn(), p = u && l === b, y = s.useRef(null), [h, R] = s.useState(!1), [x, S] = s.useState(!1), {
            mounted: E,
            setMounted: P,
            transitionStatus: T
        } = Kt(p);
        E && !u && P(!1), st({
            ref: y,
            open: p,
            onComplete() {
                p || P(!1)
            }
        }), q(() => {
            p && y.current && (d.current = y.current)
        }, [p, d]);
        const C = {
                open: p,
                transitionStatus: T,
                activationDirection: m
            },
            I = te(k => {
                k && p && (d.current = k)
            }),
            M = {
                onFocus(k) {
                    De(k.nativeEvent) ? .hasAttribute("data-base-ui-focus-guard") || S(!0)
                },
                onBlur(k) {
                    ee(k.currentTarget, k.relatedTarget) || S(!1)
                }
            },
            F = !p && E ? {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0
                },
                inert: hn(!x),
                ...M
            } : M,
            w = v || a,
            N = c && !E,
            O = c && !w && !h;
        return c && w && !h && R(!0), O ? (0, B.jsx)(Ho, {
            render: o,
            className: r,
            style: i,
            state: C,
            refs: [n],
            props: [F, {
                hidden: !0
            }, f],
            stateAttributesMapping: Qr
        }) : !w || !E && !c ? null : $e.createPortal((0, B.jsx)(Gn, {
            id: g,
            children: (0, B.jsx)(Ho, {
                render: o,
                className: r,
                style: i,
                state: C,
                refs: [n, y, I],
                props: [F, N ? {
                    hidden: !0
                } : Le, f],
                stateAttributesMapping: Qr
            })
        }), w)
    });

function Li({
    currentTarget: e,
    relatedTarget: t
}, n) {
    const {
        popupElement: o,
        rootRef: r,
        tree: i,
        nodeId: c
    } = n, f = i ? dt(i.nodesRef.current, c).some(u => ee(u.context ? .elements.floating, t)) : !1;
    return o ? !ee(o, e) && !ee(o, t) && !ee(r.current, t) && !f : !ee(r.current, t) && !f
}
var Jr = {
        width: 0,
        height: 0
    },
    yf = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            nativeButton: c = !0,
            disabled: f,
            ...u
        } = t, {
            value: a,
            setValue: l,
            mounted: m,
            open: d,
            positionerElement: v,
            setActivationDirection: b,
            setFloatingRootContext: g,
            popupElement: p,
            viewportElement: y,
            transitionStatus: h,
            rootRef: R,
            beforeOutsideRef: x,
            afterOutsideRef: S,
            afterInsideRef: E,
            beforeInsideRef: P,
            prevTriggerElementRef: T,
            popupAutoSizeResetRef: C,
            currentContentRef: I,
            delay: M,
            closeDelay: F,
            orientation: w,
            setViewportInert: N,
            nested: O
        } = Ze(), {
            value: k
        } = gr(), D = bn(), L = ut(), _ = Ju(), ne = pn(), $ = Fe(), H = bt(), Q = bt(), z = bt(), J = bt(), [Y, pe] = s.useState(null), [V, U] = s.useState(!0), [re, se] = s.useState(""), G = s.useRef(null), ce = s.useRef(!1), le = s.useRef(Jr), ve = s.useRef(!1), ie = d && a === k, oe = Ae(ie), ae = (v != null || a == null) && !f, Z = v || y, de = (Z != null || a == null) && !f, ge = _o(p), be = s.useCallback(W => {
            G.current = W, pe(W)
        }, []), we = te((W = !1) => {
            !W && C.current.owner !== k || (C.current.abortController ? .abort(), C.current.abortController = null, C.current.owner = null)
        });
        q(() => {
            ie || (Q.cancel(), J.cancel(), we())
        }, [ie, Q, J, we]);

        function A(W) {
            W.style.setProperty(qe.popupWidth, "auto"), W.style.setProperty(qe.popupHeight, "auto")
        }

        function j(W, fe) {
            W.style.removeProperty(qe.popupWidth), W.style.removeProperty(qe.popupHeight), fe.style.removeProperty(ct.positionerWidth), fe.style.removeProperty(ct.positionerHeight)
        }

        function he(W) {
            we(!0);
            const fe = new AbortController;
            C.current.abortController = fe, C.current.owner = k, ge(() => {
                C.current.abortController = null, C.current.owner = null, A(W)
            }, fe.signal)
        }
        const X = te((W, fe, ye, Se) => {
                we(!0), j(W, fe);
                const {
                    width: Ye,
                    height: mt
                } = zt(W), kt = Ye || le.current.width, At = mt || le.current.height;
                (Se === 0 || ye === 0) && (ye = kt, Se = At), W.style.setProperty(qe.popupWidth, `${ye}px`), W.style.setProperty(qe.popupHeight, `${Se}px`), fe.style.setProperty(ct.positionerWidth, `${kt}px`), fe.style.setProperty(ct.positionerHeight, `${At}px`), J.request(() => {
                    oe.current && (W.style.setProperty(qe.popupWidth, `${kt}px`), W.style.setProperty(qe.popupHeight, `${At}px`), he(W))
                })
            }),
            K = te((W, fe, ye, Se) => {
                J.cancel(), Q.cancel(), we(!0), !(ye === 0 || Se === 0) && (An(W, fe, ye, Se), Q.request(() => {
                    Q.request(() => {
                        j(W, fe);
                        const {
                            width: Ye,
                            height: mt
                        } = zt(W), kt = Ye || ye, At = mt || Se;
                        An(W, fe, ye, Se), J.request(() => {
                            oe.current && (An(W, fe, kt, At), he(W))
                        })
                    })
                }))
            }),
            Ce = te((W, fe) => {
                J.cancel(), we(!0), j(W, fe);
                const {
                    width: ye,
                    height: Se
                } = zt(W);
                ye === 0 || Se === 0 || (le.current = {
                    width: ye,
                    height: Se
                }, A(W), fe.style.setProperty(ct.positionerWidth, `${ye}px`), fe.style.setProperty(ct.positionerHeight, `${Se}px`))
            }),
            Pe = te(W => {
                const fe = W.style.getPropertyValue(qe.popupWidth),
                    ye = W.style.getPropertyValue(qe.popupHeight);
                return fe !== "" && fe !== "auto" && ye !== "" && ye !== "auto" ? {
                    size: {
                        width: W.offsetWidth || le.current.width,
                        height: W.offsetHeight || le.current.height
                    },
                    syncPositioner: !0
                } : {
                    size: le.current,
                    syncPositioner: !1
                }
            });
        s.useEffect(() => {
            d || ($.clear(), Q.cancel(), z.cancel(), J.cancel(), we(!0), ve.current = !1, se(""))
        }, [$, d, Q, z, J, we]), s.useEffect(() => {
            m || (le.current = Jr)
        }, [m]), q(() => {
            if (!p || typeof ResizeObserver != "function") return;
            const W = new ResizeObserver(() => {
                le.current = {
                    width: p.offsetWidth,
                    height: p.offsetHeight
                }
            });
            return W.observe(p), () => {
                W.disconnect()
            }
        }, [p]), s.useEffect(() => {
            if (!d || !ie || !p || !v) return;
            const W = p,
                fe = v,
                ye = Je(fe);

            function Se() {
                z.cancel(), z.request(() => Ce(W, fe))
            }
            const Ye = me(ye, "resize", Se);
            return () => {
                z.cancel(), Ye()
            }
        }, [d, ie, p, v, z, Ce]), s.useEffect(() => {
            const W = I.current;
            if (!W || !p || !v || !ie || typeof MutationObserver != "function") return;
            const fe = new MutationObserver(() => {
                if (h === "starting" || p.hasAttribute(So.startingStyle)) {
                    Ce(p, v);
                    return
                }
                const {
                    size: ye,
                    syncPositioner: Se
                } = Pe(p);
                if (Se) {
                    K(p, v, ye.width, ye.height);
                    return
                }
                X(p, v, ye.width, ye.height)
            });
            return fe.observe(W, {
                childList: !0,
                subtree: !0,
                characterData: !0,
                attributes: !0,
                attributeFilter: ["hidden"]
            }), () => {
                fe.disconnect()
            }
        }, [I, p, v, ie, h, Pe, K, X, Ce]), s.useEffect(() => (ie && d && p && ce.current && (ce.current = !1, H.request(() => {
            x.current ? .focus()
        })), () => {
            H.cancel()
        }), [x, H, ie, d, p]), q(() => {
            if (oe.current && d && p && v) {
                if (ve.current) {
                    ve.current = !1;
                    return
                }
                const {
                    width: W,
                    height: fe
                } = zt(p);
                X(p, v, W, fe)
            }
        }, [I, X, oe, d, p, v, h]);

        function Ne(W, fe) {
            const ye = fe.reason === Ve;
            if (!ae || re === "touch" && ye || !W && a !== k) return;

            function Se() {
                ye && (U(!0), $.clear(), $.start(500, () => {
                    U(!1)
                })), W ? l(k, fe) : (l(null, fe), se(""))
            }
            ye ? $e.flushSync(Se) : Se()
        }
        const Me = Ws({
                open: d,
                onOpenChange: Ne,
                elements: {
                    reference: Y,
                    floating: Z
                }
            }),
            He = ro(Me),
            et = re !== "touch";
        s.useEffect(() => (d || (Me.context.dataRef.current.openEvent = void 0, He.pointerType = void 0, He.interactedInside = !1, He.restTimeoutPending = !1, He.openChangeTimeout.clear(), He.restTimeout.clear()), () => {
            Ut(He)
        }), [Me, He, d]);
        const Ge = te(() => !O || v || !G.current || !Z ? null : el(G.current, Z, D));

        function wt() {
            return O && v ? null : G.current ? .closest("ul") ? ? null
        }
        const ht = un(Me, {
                enabled: de,
                move: !1,
                handleClose: ln({
                    blockPointerEvents: et,
                    getScope: wt
                }),
                restMs: m && v ? 0 : M,
                delay: {
                    close: F
                },
                triggerElementRef: G,
                getHandleCloseContext: Ge
            }),
            It = s.useMemo(() => ht ? {
                reference: ht
            } : void 0, [ht]),
            Ot = an(Me, {
                enabled: ae,
                stickIfOpen: V,
                toggle: ie
            }),
            Bt = s.useMemo(() => yt(Ot.reference, It ? .reference), [Ot.reference, It]);
        q(() => {
            ie && (g(Me), T.current = Y)
        }, [ie, Me, g, T, Y]);

        function xe(W) {
            $e.flushSync(() => {
                const fe = W.currentTarget,
                    ye = T.current ? .getBoundingClientRect();
                if (m && ye && Y) {
                    const Se = Y.getBoundingClientRect(),
                        Ye = Se.left > ye.left,
                        mt = Se.top > ye.top;
                    w === "horizontal" && Se.left !== ye.left ? b(Ye ? "right" : "left") : w === "vertical" && Se.top !== ye.top && b(mt ? "down" : "up")
                }
                if (W.type !== "click" && a != null && (Me.context.dataRef.current.openEvent = void 0), !(re === "touch" && W.type !== "click") && (a != null && W.type !== "keydown" && l(k, ue(W.type === "mouseenter" ? Ve : nn, W.nativeEvent)), W.type === "mouseenter" && et && (!O || !v) && Z)) {
                    const Se = () => {
                        const Ye = wt() ? ? fe.ownerDocument.body;
                        rr(He, {
                            scopeElement: Ye,
                            referenceElement: fe,
                            floatingElement: Z
                        })
                    };
                    a != null && a !== k ? queueMicrotask(Se) : Se()
                }
            })
        }
        const je = te(W => {
                if (f) return;
                if (!p || !v) {
                    xe(W);
                    return
                }
                const {
                    width: fe,
                    height: ye
                } = zt(p), Se = a != null && a !== k && (W.type === "click" || re !== "touch");
                xe(W), Se && (ve.current = !0), X(p, v, fe, ye)
            }),
            We = {
                open: ie
            };

        function Xe(W) {
            se(W.pointerType)
        }

        function tt(W) {
            Xe(W), Ut(He)
        }
        const ze = {
                tabIndex: 0,
                onMouseEnter: je,
                onClick: je,
                onPointerEnter: Xe,
                onPointerDown: tt,
                "aria-expanded": ie,
                "aria-controls": ie ? p ? .id : void 0,
                [Ni]: "",
                onFocus() {
                    ie && N(!1)
                },
                onMouseMove() {
                    ce.current = !1
                },
                onKeyDown(W) {
                    if (ce.current = !0, O) return;
                    const fe = ne === "rtl" ? "ArrowLeft" : "ArrowRight",
                        ye = w === "horizontal" && W.key === "ArrowDown",
                        Se = w === "vertical" && W.key === fe;
                    (ye || Se) && (l(k, ue(Po, W.nativeEvent)), je(W), Ue(W))
                },
                onBlur(W) {
                    v && p && Li({
                        currentTarget: W.currentTarget,
                        relatedTarget: W.relatedTarget
                    }, {
                        popupElement: p,
                        rootRef: R,
                        tree: L,
                        nodeId: D
                    }) && l(null, ue(Ft, W.nativeEvent))
                }
            },
            {
                getButtonProps: Mt,
                buttonRef: jt
            } = Lt({
                disabled: f,
                focusableWhenDisabled: !0,
                native: c
            }),
            nt = Z;
        return (0, B.jsxs)(s.Fragment, {
            children: [(0, B.jsx)(dr, {
                tag: "button",
                render: o,
                className: r,
                style: i,
                state: We,
                stateAttributesMapping: en,
                refs: [n, be, jt],
                props: [Bt, _ ? .reference || Nt, ze, u, Mt]
            }), ie && (0, B.jsxs)(s.Fragment, {
                children: [(0, B.jsx)(Qe, {
                    ref: x,
                    onFocus: W => {
                        nt && rt(W, nt) ? P.current ? .focus() : Vn(Y) ? .focus()
                    }
                }), (0, B.jsx)("span", {
                    "aria-owns": y ? .id,
                    style: Os
                }), (0, B.jsx)(Qe, {
                    ref: S,
                    onFocus: W => {
                        if (nt && rt(W, nt)) $e.flushSync(() => {
                            N(!1)
                        }), (E.current || Y) ? .focus();
                        else {
                            let fe = sn(Y);
                            O && !v && nt && fe && ee(nt, fe) && (fe = Ss(E.current)), fe ? .focus(), (!O || v) && !ee(R.current, fe) && l(null, ue("focus-out", W.nativeEvent))
                        }
                    }
                })]
            })]
        })
    });

function Zu(e, t) {
    const n = e.getBoundingClientRect(),
        o = t.getBoundingClientRect(),
        r = n.left + n.width / 2,
        i = n.top + n.height / 2,
        c = o.left + o.width / 2,
        f = o.top + o.height / 2,
        u = c - r,
        a = f - i;
    return Math.abs(u) >= Math.abs(a) ? u >= 0 ? "right" : "left" : a >= 0 ? "bottom" : "top"
}

function el(e, t, n) {
    return {
        placement: Zu(e, t),
        elements: {
            domReference: e,
            floating: t
        },
        nodeId: n
    }
}
var Bi = s.createContext(void 0);

function tl() {
    const e = s.useContext(Bi);
    if (e === void 0) throw new Error(Te(40));
    return e
}
var Ef = s.forwardRef(function(t, n) {
    const {
        keepMounted: o = !1,
        ...r
    } = t, {
        mounted: i
    } = Ze();
    return i || o ? (0, B.jsx)(Bi.Provider, {
        value: o,
        children: (0, B.jsx)(Un, {
            ref: n,
            ...r
        })
    }) : null
});

function nl(e) {
    return Zs(e, gc)
}
var ji = s.createContext(void 0);

function hr(e = !1) {
    const t = s.useContext(ji);
    if (!t && !e) throw new Error(Te(42));
    return t
}
var ol = eo(),
    xf = s.forwardRef(function(t, n) {
        const {
            open: o,
            mounted: r,
            positionerElement: i,
            setPositionerElement: c,
            floatingRootContext: f,
            nested: u,
            transitionStatus: a
        } = Ze(), {
            className: l,
            render: m,
            anchor: d,
            positionMethod: v = "absolute",
            side: b = "bottom",
            align: g = "center",
            sideOffset: p = 0,
            alignOffset: y = 0,
            collisionBoundary: h = "clipping-ancestors",
            collisionPadding: R = 5,
            collisionAvoidance: x = u ? Wn : Is,
            arrowPadding: S = 5,
            sticky: E = !1,
            disableAnchorTracking: P = !1,
            style: T,
            ...C
        } = t, I = tl(), M = bn(), F = Fe(), w = Fe(), [N, O] = s.useState(o), k = s.useRef(o);
        s.useEffect(() => {
            if (!i) return;

            function $(H) {
                i && rt(H) && (H.type === "focusin" ? Ao : Ps)(i)
            }
            return ot(me(i, "focusin", $, !0), me(i, "focusout", $, !0))
        }, [i]);
        const D = (f || ol).useState("domReferenceElement"),
            L = nl({
                anchor: d ? ? D,
                positionMethod: v,
                mounted: r,
                side: b,
                sideOffset: p,
                align: g,
                alignOffset: y,
                arrowPadding: S,
                collisionBoundary: h,
                collisionPadding: R,
                sticky: E,
                disableAnchorTracking: P,
                keepMounted: I,
                floatingRootContext: f,
                collisionAvoidance: x,
                shift: {
                    rootBoundary: "layoutViewport"
                },
                nodeId: M,
                adaptiveOrigin: Uc
            }),
            _ = {
                open: o,
                side: L.side,
                align: L.align,
                anchorHidden: L.anchorHidden,
                instant: N
            };
        s.useEffect(() => {
            if (!o) return;
            k.current && F.start(0, () => {
                k.current = !1, w.isStarted() || O(!1)
            });

            function $() {
                $e.flushSync(() => {
                    O(!0)
                }), w.start(100, () => {
                    O(!1)
                })
            }
            const H = Je(i);
            return me(H, "resize", $)
        }, [o, F, w, i]);
        const ne = ao(t, _, {
            styles: L.positionerStyles,
            transitionStatus: a,
            props: C,
            refs: [n, c],
            hidden: !r,
            inert: !o
        });
        return (0, B.jsx)(ji.Provider, {
            value: L,
            children: ne
        })
    }),
    rl = eo();

function Zr({
    children: e
}) {
    const {
        beforeInsideRef: t,
        beforeOutsideRef: n,
        afterInsideRef: o,
        afterOutsideRef: r,
        positionerElement: i,
        viewportElement: c,
        floatingRootContext: f
    } = Ze(), u = !!hr(!0), a = i || c;
    return !f && !u ? e : (0, B.jsxs)(s.Fragment, {
        children: [(0, B.jsx)(Qe, {
            ref: t,
            onFocus: l => {
                a && rt(l, a) ? sn(a) ? .focus() : n.current ? .focus()
            }
        }), e, (0, B.jsx)(Qe, {
            ref: o,
            onFocus: l => {
                a && rt(l, a) ? Vn(a) ? .focus() : r.current ? .focus()
            }
        })]
    })
}
var Cf = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            children: c,
            id: f,
            ...u
        } = t, a = xt(f), {
            setViewportElement: l,
            setViewportTargetElement: m,
            floatingRootContext: d,
            prevTriggerElementRef: v,
            viewportInert: b,
            setViewportInert: g
        } = Ze(), y = !!hr(!0), h = (d || rl).useState("domReferenceElement");
        q(() => {
            h && (v.current = h)
        }, [h, v]);
        const R = Re("div", t, {
            ref: [n, l],
            props: [{
                id: a,
                onBlur(x) {
                    const S = x.relatedTarget,
                        E = x.currentTarget;
                    S && !ee(E, S) && S !== h && g(!0)
                },
                ...!y && b && {
                    inert: hn(!0)
                },
                children: y ? c : (0, B.jsx)(Zr, {
                    children: (0, B.jsx)("div", {
                        ref: m,
                        children: c
                    })
                })
            }, u]
        });
        return y ? (0, B.jsx)(Zr, {
            children: R
        }) : R
    }),
    Sf = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            id: c,
            ...f
        } = t, {
            open: u,
            transitionStatus: a,
            setPopupElement: l
        } = Ze(), m = hr(), d = pn(), v = Ke(c), b = {
            open: u,
            transitionStatus: a,
            side: m.side,
            align: m.align,
            anchorHidden: m.anchorHidden
        };
        let g = m.side === "left";
        d === "rtl" ? g = g || m.side === "inline-end" : g = g || m.side === "inline-start";
        const p = m.side === "top" || g;
        return Re("nav", t, {
            state: b,
            ref: [n, l],
            props: [{
                id: v,
                tabIndex: -1,
                style: p ? {
                    position: "absolute",
                    [m.side === "top" ? "bottom" : "top"]: "0",
                    [g ? "right" : "left"]: "0"
                } : {}
            }, gn(a), f],
            stateAttributesMapping: Yt
        })
    }),
    Pf = s.forwardRef(function(t, n) {
        const {
            className: o,
            render: r,
            active: i = !1,
            closeOnClick: c = !1,
            style: f,
            ...u
        } = t, {
            setValue: a,
            popupElement: l,
            positionerElement: m,
            rootRef: d
        } = Ze(), v = bn(), b = ut();
        return (0, B.jsx)(dr, {
            tag: "a",
            render: r,
            className: o,
            style: f,
            state: {
                active: i
            },
            refs: [n],
            props: [{
                "aria-current": i ? "page" : void 0,
                tabIndex: void 0,
                onClick(g) {
                    c && a(null, ue(Zi, g.nativeEvent))
                },
                onBlur(g) {
                    m && l && Li({
                        currentTarget: g.currentTarget,
                        relatedTarget: g.relatedTarget
                    }, {
                        popupElement: l,
                        rootRef: d,
                        tree: b,
                        nodeId: v
                    }) && a(null, ue(Ft, g.nativeEvent))
                }
            }, u]
        })
    }),
    Tf = s.forwardRef(function(t, n) {
        const {
            render: o,
            className: r,
            style: i,
            ...c
        } = t, {
            value: f
        } = gr(), {
            open: u,
            value: a
        } = Ze();
        return Re("span", t, {
            state: {
                open: u && a === f
            },
            ref: n,
            props: [{
                "aria-hidden": !0,
                children: "▼"
            }, c],
            stateAttributesMapping: fn
        })
    }),
    _i = s.createContext(void 0);

function Vi() {
    const e = s.useContext(_i);
    if (e === void 0) throw new Error(Te(13));
    return e
}
var mr = {
        imageLoadingStatus: () => null
    },
    wf = s.forwardRef(function(t, n) {
        const {
            className: o,
            render: r,
            style: i,
            ...c
        } = t, [f, u] = s.useState("idle"), a = {
            imageLoadingStatus: f
        }, l = s.useMemo(() => ({
            imageLoadingStatus: f,
            setImageLoadingStatus: u
        }), [f, u]), m = Re("span", t, {
            state: a,
            ref: n,
            props: c,
            stateAttributesMapping: mr
        });
        return (0, B.jsx)(_i.Provider, {
            value: l,
            children: m
        })
    });

function sl(e, {
    referrerPolicy: t,
    crossOrigin: n,
    sizes: o,
    srcSet: r
}) {
    const [i, c] = s.useState("idle");
    return q(() => {
        if (!e && !r) return c("error"), St;
        let f = !0;
        const u = new window.Image,
            a = l => () => {
                f && c(l)
            };
        return c("loading"), u.onload = a("loaded"), u.onerror = a("error"), t && (u.referrerPolicy = t), u.crossOrigin = n ? ? null, o && (u.sizes = o), r && (u.srcset = r), e && (u.src = e), u.complete && c(u.naturalWidth > 0 ? "loaded" : "error"), () => {
            f = !1
        }
    }, [e, r, o, n, t]), i
}
var il = { ...mr,
        ...tn
    },
    If = s.forwardRef(function(t, n) {
        const {
            className: o,
            render: r,
            onLoadingStatusChange: i,
            style: c,
            ...f
        } = t, {
            setImageLoadingStatus: u
        } = Vi(), a = sl(f.src, f), l = a === "loaded", {
            mounted: m,
            transitionStatus: d,
            setMounted: v
        } = Kt(l), b = s.useRef(null), g = te(y => {
            i ? .(y), u(y)
        });
        q(() => {
            a !== "idle" && g(a)
        }, [a, g]), q(() => () => u("idle"), [u]), st({
            open: l,
            ref: b,
            onComplete() {
                l || v(!1)
            }
        });
        const p = Re("img", t, {
            state: {
                imageLoadingStatus: a,
                transitionStatus: d
            },
            ref: [n, b],
            props: f,
            stateAttributesMapping: il,
            enabled: m
        });
        return m ? p : null
    }),
    Of = s.forwardRef(function(t, n) {
        const {
            className: o,
            render: r,
            delay: i = 0,
            style: c,
            ...f
        } = t, {
            imageLoadingStatus: u
        } = Vi(), [a, l] = s.useState(i === 0), m = Fe();
        return s.useEffect(() => (i > 0 ? m.start(i, () => l(!0)) : l(!0), m.clear), [m, i]), Re("span", t, {
            state: {
                imageLoadingStatus: u
            },
            ref: n,
            props: f,
            stateAttributesMapping: mr,
            enabled: u !== "loaded" && (i === 0 || a)
        })
    });
export {
    Ei as $, un as $t, gt as A, bl as An, zt as At, zl as B, Ue as Bn, Sl as Bt, cf as C, Gn as Cn, kl as Ct, rf as D, Rl as Dn, Lt as Dt, sf as E, Un as En, vn as Et, Pi as F, me as Fn, Pl as Ft, Gl as G, Go as Gn, Yt as Gt, $l as H, Pt as Hn, Cl as Ht, Ql as I, Oo as In, ao as It, Ul as J, El as Jt, Ou as K, is as Kn, en as Kt, ql as L, Ma as Ln, gn as Lt, ef as M, Ba as Mn, Il as Mt, Zl as N, vl as Nn, wl as Nt, of as O, Is as On, kn as Ot, Jl as P, Ae as Pn, Tl as Pt, Wl as Q, Ec as Qt, Du as R, ka as Rn, sr as Rt, uf as S, Zo as Sn, Al as St, Uu as T, Kn as Tn, Ol as Tt, Tt as U, Dn as Un, xl as Ut, Xl as V, hl as Vn, Bc as Vt, Yl as W, Bn as Wn, dn as Wt, Pu as X, ln as Xt, dr as Y, Ys as Yt, Cu as Z, xc as Zt, gf as _, lc as _n, Nl as _t, Pf as a, nr as an, Bl as at, ff as b, cn as bn, si as bt, xf as c, $n as cn, ui as ct, Rf as d, Qn as dn, ai as dt, so as en, Ru as et, bf as f, Jn as fn, Fo as ft, hf as g, Gt as gn, Qc as gt, mf as h, qn as hn, fo as ht, Tf as i, to as in , jl as it, tf as j, Dt as jn, hn as jt, nf as k, Wn as kn, ar as kt, Ef as l, Xn as ln, Ll as lt, Ho as m, er as mn, ii as mt, If as n, Ws as nn, Vl as nt, Sf as o, no as on, di as ot, vf as p, Zn as pn, No as pt, Kl as q, dl as qn, fn as qt, wf as r, oo as rn, _l as rt, Cf as s, Ht as sn, lr as st, Of as t, Ks as tn, bu as tt, yf as u, dc as un, Hl as ut, pf as v, Hs as vn, Fl as vt, af as w, Qo as wn, Ml as wt, lf as x, an as xn, Dl as xt, df as y, sc as yn, Jc as yt, Au as z, us as zn, pn as zt
};