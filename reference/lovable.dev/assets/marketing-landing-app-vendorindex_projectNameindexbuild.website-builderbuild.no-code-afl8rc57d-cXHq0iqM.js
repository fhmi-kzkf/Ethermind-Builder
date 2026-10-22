import {
    o as nn
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as en
} from "./vendor-react-Fx2PtaaM.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new t.Error().stack;
        n && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[n] = "ff9478d8-41ca-4ffd-b7b6-fb6cd4ca6b83", t._sentryDebugIdIdentifier = "sentry-dbid-ff9478d8-41ca-4ffd-b7b6-fb6cd4ca6b83")
    })()
} catch {}
var Q = nn(en());

function rn(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function jt(t) {
    return rn(t) || Array.isArray(t)
}

function on() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}

function vt(t, n) {
    const o = Object.keys(t),
        s = Object.keys(n);
    return o.length !== s.length || JSON.stringify(Object.keys(t.breakpoints || {})) !== JSON.stringify(Object.keys(n.breakpoints || {})) ? !1 : o.every(i => {
        const r = t[i],
            e = n[i];
        return typeof r == "function" ? `${r}` == `${e}` : !jt(r) || !jt(e) ? r === e : vt(r, e)
    })
}

function Vt(t) {
    return t.concat().sort((n, o) => n.name > o.name ? 1 : -1).map(n => n.options)
}

function sn(t, n) {
    if (t.length !== n.length) return !1;
    const o = Vt(t),
        s = Vt(n);
    return o.every((i, r) => {
        const e = s[r];
        return vt(i, e)
    })
}

function Tt(t) {
    return typeof t == "number"
}

function Lt(t) {
    return typeof t == "string"
}

function ht(t) {
    return typeof t == "boolean"
}

function zt(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function D(t) {
    return Math.abs(t)
}

function At(t) {
    return Math.sign(t)
}

function at(t, n) {
    return D(t - n)
}

function cn(t, n) {
    return t === 0 || n === 0 || D(t) <= D(n) ? 0 : D(at(D(t), D(n)) / t)
}

function un(t) {
    return Math.round(t * 100) / 100
}

function ft(t) {
    return lt(t).map(Number)
}

function V(t) {
    return t[pt(t)]
}

function pt(t) {
    return Math.max(0, t.length - 1)
}

function Dt(t, n) {
    return n === pt(t)
}

function Ht(t, n = 0) {
    return Array.from(Array(t), (o, s) => n + s)
}

function lt(t) {
    return Object.keys(t)
}

function Rt(t, n) {
    return [t, n].reduce((o, s) => (lt(s).forEach(i => {
        const r = o[i],
            e = s[i];
        o[i] = zt(r) && zt(e) ? Rt(r, e) : e
    }), o), {})
}

function It(t, n) {
    return typeof n.MouseEvent < "u" && t instanceof n.MouseEvent
}

function an(t, n) {
    const o = {
        start: s,
        center: i,
        end: r
    };

    function s() {
        return 0
    }

    function i(c) {
        return r(c) / 2
    }

    function r(c) {
        return n - c
    }

    function e(c, u) {
        return Lt(t) ? o[t](c) : t(n, c, u)
    }
    return {
        measure: e
    }
}

function dt() {
    let t = [];

    function n(i, r, e, c = {
        passive: !0
    }) {
        let u;
        if ("addEventListener" in i) i.addEventListener(r, e, c), u = () => i.removeEventListener(r, e, c);
        else {
            const a = i;
            a.addListener(e), u = () => a.removeListener(e)
        }
        return t.push(u), s
    }

    function o() {
        t = t.filter(i => i())
    }
    const s = {
        add: n,
        clear: o
    };
    return s
}

function fn(t, n, o, s) {
    const i = dt(),
        r = 1e3 / 60;
    let e = null,
        c = 0,
        u = 0;

    function a() {
        i.add(t, "visibilitychange", () => {
            t.hidden && d()
        })
    }

    function f() {
        m(), i.clear()
    }

    function p(h) {
        if (!u) return;
        e || (e = h, o(), o());
        const y = h - e;
        for (e = h, c += y; c >= r;) o(), c -= r;
        s(c / r), u && (u = n.requestAnimationFrame(p))
    }

    function g() {
        u || (u = n.requestAnimationFrame(p))
    }

    function m() {
        n.cancelAnimationFrame(u), e = null, c = 0, u = 0
    }

    function d() {
        e = null, c = 0
    }
    return {
        init: a,
        destroy: f,
        start: g,
        stop: m,
        update: o,
        render: s
    }
}

function ln(t, n) {
    const o = n === "rtl",
        s = t === "y",
        i = s ? "y" : "x",
        r = s ? "x" : "y",
        e = !s && o ? -1 : 1,
        c = f(),
        u = p();

    function a(m) {
        const {
            height: d,
            width: h
        } = m;
        return s ? d : h
    }

    function f() {
        return s ? "top" : o ? "right" : "left"
    }

    function p() {
        return s ? "bottom" : o ? "left" : "right"
    }

    function g(m) {
        return m * e
    }
    return {
        scroll: i,
        cross: r,
        startEdge: c,
        endEdge: u,
        measureSize: a,
        direction: g
    }
}

function W(t = 0, n = 0) {
    const o = D(t - n);

    function s(u) {
        return u < t
    }

    function i(u) {
        return u > n
    }

    function r(u) {
        return s(u) || i(u)
    }

    function e(u) {
        return r(u) ? s(u) ? t : n : u
    }

    function c(u) {
        return o ? u - o * Math.ceil((u - n) / o) : u
    }
    return {
        length: o,
        max: n,
        min: t,
        constrain: e,
        reachedAny: r,
        reachedMax: i,
        reachedMin: s,
        removeOffset: c
    }
}

function Gt(t, n, o) {
    const {
        constrain: s
    } = W(0, t), i = t + 1;
    let r = e(n);

    function e(g) {
        return o ? D((i + g) % i) : s(g)
    }

    function c() {
        return r
    }

    function u(g) {
        return r = e(g), p
    }

    function a(g) {
        return f().set(c() + g)
    }

    function f() {
        return Gt(t, c(), o)
    }
    const p = {
        get: c,
        set: u,
        add: a,
        clone: f
    };
    return p
}

function dn(t, n, o, s, i, r, e, c, u, a, f, p, g, m, d, h, y, l, S) {
    const {
        cross: v,
        direction: A
    } = t, M = ["INPUT", "SELECT", "TEXTAREA"], E = {
        passive: !1
    }, T = dt(), x = dt(), O = W(50, 225).constrain(m.measure(20)), P = {
        mouse: 300,
        touch: 400
    }, w = {
        mouse: 500,
        touch: 600
    }, k = d ? 43 : 25;
    let z = !1,
        j = 0,
        J = 0,
        X = !1,
        R = !1,
        U = !1,
        G = !1;

    function Y(b) {
        if (!S) return;

        function L(F) {
            (ht(S) || S(b, F)) && N(F)
        }
        const I = n;
        T.add(I, "dragstart", F => F.preventDefault(), E).add(I, "touchmove", () => {}, E).add(I, "touchend", () => {}).add(I, "touchstart", L).add(I, "mousedown", L).add(I, "touchcancel", C).add(I, "contextmenu", C).add(I, "click", nt, !0)
    }

    function _() {
        T.clear(), x.clear()
    }

    function tt() {
        const b = G ? o : n;
        x.add(b, "touchmove", H, E).add(b, "touchend", C).add(b, "mousemove", H, E).add(b, "mouseup", C)
    }

    function q(b) {
        const L = b.nodeName || "";
        return M.includes(L)
    }

    function ot() {
        return (d ? w : P)[G ? "mouse" : "touch"]
    }

    function it(b, L) {
        const I = p.add(At(b) * -1),
            F = f.byDistance(b, !d).distance;
        return d || D(b) < O ? F : y && L ? F * .5 : f.byIndex(I.get(), 0).distance
    }

    function N(b) {
        const L = It(b, s);
        G = L, U = d && L && !b.buttons && z, z = at(i.get(), e.get()) >= 2, !(L && b.button !== 0) && (q(b.target) || (X = !0, r.pointerDown(b), a.useFriction(0).useDuration(0), i.set(e), tt(), j = r.readPoint(b), J = r.readPoint(b, v), g.emit("pointerDown")))
    }

    function H(b) {
        if (!It(b, s) && b.touches.length >= 2) return C(b);
        const L = r.readPoint(b),
            I = r.readPoint(b, v),
            F = at(L, j),
            $ = at(I, J);
        if (!R && !G && (!b.cancelable || (R = F > $, !R))) return C(b);
        const K = r.pointerMove(b);
        F > h && (U = !0), a.useFriction(.3).useDuration(.75), c.start(), i.add(A(K)), b.preventDefault()
    }

    function C(b) {
        const L = f.byDistance(0, !1).index !== p.get(),
            I = r.pointerUp(b) * ot(),
            F = it(A(I), L),
            $ = cn(I, F),
            K = k - 10 * $,
            st = l + $ / 50;
        R = !1, X = !1, x.clear(), a.useDuration(K).useFriction(st), u.distance(F, !d), G = !1, g.emit("pointerUp")
    }

    function nt(b) {
        U && (b.stopPropagation(), b.preventDefault(), U = !1)
    }

    function B() {
        return X
    }
    return {
        init: Y,
        destroy: _,
        pointerDown: B
    }
}

function pn(t, n) {
    let s, i;

    function r(f) {
        return f.timeStamp
    }

    function e(f, p) {
        const g = `client${(p||t.scroll)==="x"?"X":"Y"}`;
        return (It(f, n) ? f : f.touches[0])[g]
    }

    function c(f) {
        return s = f, i = f, e(f)
    }

    function u(f) {
        const p = e(f) - e(i),
            g = r(f) - r(s) > 170;
        return i = f, g && (s = f), p
    }

    function a(f) {
        if (!s || !i) return 0;
        const p = e(i) - e(s),
            g = r(f) - r(s),
            m = r(f) - r(i) > 170,
            d = p / g;
        return g && !m && D(d) > .1 ? d : 0
    }
    return {
        pointerDown: c,
        pointerMove: u,
        pointerUp: a,
        readPoint: e
    }
}

function mn() {
    function t(n) {
        const {
            offsetTop: o,
            offsetLeft: s,
            offsetWidth: i,
            offsetHeight: r
        } = n;
        return {
            top: o,
            right: s + i,
            bottom: o + r,
            left: s,
            width: i,
            height: r
        }
    }
    return {
        measure: t
    }
}

function gn(t) {
    function n(o) {
        return t * (o / 100)
    }
    return {
        measure: n
    }
}

function hn(t, n, o, s, i, r, e) {
    const c = [t].concat(s);
    let u, a, f = [],
        p = !1;

    function g(h) {
        return i.measureSize(e.measure(h))
    }

    function m(h) {
        if (!r) return;
        a = g(t), f = s.map(g);

        function y(l) {
            for (const S of l) {
                if (p) return;
                const v = S.target === t,
                    A = s.indexOf(S.target),
                    M = v ? a : f[A];
                if (D(g(v ? t : s[A]) - M) >= .5) {
                    h.reInit(), n.emit("resize");
                    break
                }
            }
        }
        u = new ResizeObserver(l => {
            (ht(r) || r(h, l)) && y(l)
        }), o.requestAnimationFrame(() => {
            c.forEach(l => u.observe(l))
        })
    }

    function d() {
        p = !0, u && u.disconnect()
    }
    return {
        init: m,
        destroy: d
    }
}

function bn(t, n, o, s, i, r) {
    let e = 0,
        c = 0,
        u = i,
        a = r,
        f = t.get(),
        p = 0;

    function g() {
        const E = s.get() - t.get(),
            T = !u;
        let x = 0;
        return T ? (e = 0, o.set(s), t.set(s), x = E) : (o.set(t), e += E / u, e *= a, f += e, t.add(e), x = f - p), c = At(x), p = f, M
    }

    function m() {
        return D(s.get() - n.get()) < .001
    }

    function d() {
        return u
    }

    function h() {
        return c
    }

    function y() {
        return e
    }

    function l() {
        return v(i)
    }

    function S() {
        return A(r)
    }

    function v(E) {
        return u = E, M
    }

    function A(E) {
        return a = E, M
    }
    const M = {
        direction: h,
        duration: d,
        velocity: y,
        seek: g,
        settled: m,
        useBaseFriction: S,
        useBaseDuration: l,
        useFriction: A,
        useDuration: v
    };
    return M
}

function yn(t, n, o, s, i) {
    const r = i.measure(10),
        e = i.measure(50),
        c = W(.1, .99);
    let u = !1;

    function a() {
        return !(u || !t.reachedAny(o.get()) || !t.reachedAny(n.get()))
    }

    function f(g) {
        if (!a()) return;
        const m = D(t[t.reachedMin(n.get()) ? "min" : "max"] - n.get()),
            d = o.get() - n.get(),
            h = c.constrain(m / e);
        o.subtract(d * h), !g && D(d) < r && (o.set(t.constrain(o.get())), s.useDuration(25).useBaseFriction())
    }

    function p(g) {
        u = !g
    }
    return {
        shouldConstrain: a,
        constrain: f,
        toggleActive: p
    }
}

function Sn(t, n, o, s, i) {
    const r = W(-n + t, 0),
        e = p(),
        c = f(),
        u = g();

    function a(m, d) {
        return at(m, d) <= 1
    }

    function f() {
        const m = e[0],
            d = V(e);
        return W(e.lastIndexOf(m), e.indexOf(d) + 1)
    }

    function p() {
        return o.map((m, d) => {
            const {
                min: h,
                max: y
            } = r, l = r.constrain(m), S = !d, v = Dt(o, d);
            return S ? y : v || a(h, l) ? h : a(y, l) ? y : l
        }).map(m => parseFloat(m.toFixed(3)))
    }

    function g() {
        if (n <= t + i) return [r.max];
        if (s === "keepSnaps") return e;
        const {
            min: m,
            max: d
        } = c;
        return e.slice(m, d)
    }
    return {
        snapsContained: u,
        scrollContainLimit: c
    }
}

function En(t, n, o) {
    const s = n[0];
    return {
        limit: W(o ? s - t : V(n), s)
    }
}

function xn(t, n, o, s) {
    const {
        reachedMin: r,
        reachedMax: e
    } = W(n.min + .1, n.max + .1);

    function c(a) {
        return a === 1 ? e(o.get()) : a === -1 ? r(o.get()) : !1
    }

    function u(a) {
        if (!c(a)) return;
        const f = t * (a * -1);
        s.forEach(p => p.add(f))
    }
    return {
        loop: u
    }
}

function Ln(t) {
    const {
        max: n,
        length: o
    } = t;

    function s(i) {
        const r = i - n;
        return o ? r / -o : 0
    }
    return {
        get: s
    }
}

function In(t, n, o, s, i) {
    const {
        startEdge: r,
        endEdge: e
    } = t, {
        groupSlides: c
    } = i, u = p().map(n.measure), a = g(), f = m();

    function p() {
        return c(s).map(d => V(d)[e] - d[0][r]).map(D)
    }

    function g() {
        return s.map(d => o[r] - d[r]).map(d => -D(d))
    }

    function m() {
        return c(a).map(d => d[0]).map((d, h) => d + u[h])
    }
    return {
        snaps: a,
        snapsAligned: f
    }
}

function vn(t, n, o, s, i, r) {
    const {
        groupSlides: e
    } = i, {
        min: c,
        max: u
    } = s, a = f();

    function f() {
        const p = e(r),
            g = !t || n === "keepSnaps";
        return o.length === 1 ? [r] : g ? p : p.slice(c, u).map((m, d, h) => {
            const y = !d,
                l = Dt(h, d);
            return y ? Ht(V(h[0]) + 1) : l ? Ht(pt(r) - V(h)[0] + 1, V(h)[0]) : m
        })
    }
    return {
        slideRegistry: a
    }
}

function Tn(t, n, o, s, i) {
    const {
        reachedAny: r,
        removeOffset: e,
        constrain: c
    } = s;

    function u(m) {
        return m.concat().sort((d, h) => D(d) - D(h))[0]
    }

    function a(m) {
        const d = t ? e(m) : c(m),
            {
                index: h
            } = n.map((y, l) => ({
                diff: f(y - d, 0),
                index: l
            })).sort((y, l) => D(y.diff) - D(l.diff))[0];
        return {
            index: h,
            distance: d
        }
    }

    function f(m, d) {
        const h = [m, m + o, m - o];
        if (!t) return m;
        if (!d) return u(h);
        const y = h.filter(l => At(l) === d);
        return y.length ? u(y) : V(h) - o
    }

    function p(m, d) {
        return {
            index: m,
            distance: f(n[m] - i.get(), d)
        }
    }

    function g(m, d) {
        const h = i.get() + m,
            {
                index: y,
                distance: l
            } = a(h),
            S = !t && r(h);
        return !d || S ? {
            index: y,
            distance: m
        } : {
            index: y,
            distance: m + f(n[y] - l, 0)
        }
    }
    return {
        byDistance: g,
        byIndex: p,
        shortcut: f
    }
}

function An(t, n, o, s, i, r, e) {
    function c(f) {
        const p = f.distance,
            g = f.index !== n.get();
        r.add(p), p && (s.duration() ? t.start() : (t.update(), t.render(1), t.update())), g && (o.set(n.get()), n.set(f.index), e.emit("select"))
    }

    function u(f, p) {
        c(i.byDistance(f, p))
    }

    function a(f, p) {
        const g = n.clone().set(f);
        c(i.byIndex(g.get(), p))
    }
    return {
        distance: u,
        index: a
    }
}

function Dn(t, n, o, s, i, r, e, c) {
    const u = {
        passive: !0,
        capture: !0
    };
    let a = 0;

    function f(g) {
        if (!c) return;

        function m(d) {
            if (new Date().getTime() - a > 10) return;
            e.emit("slideFocusStart"), t.scrollLeft = 0;
            const h = o.findIndex(y => y.includes(d));
            Tt(h) && (i.useDuration(0), s.index(h, 0), e.emit("slideFocus"))
        }
        r.add(document, "keydown", p, !1), n.forEach((d, h) => {
            r.add(d, "focus", y => {
                (ht(c) || c(g, y)) && m(h)
            }, u)
        })
    }

    function p(g) {
        g.code === "Tab" && (a = new Date().getTime())
    }
    return {
        init: f
    }
}

function ut(t) {
    let n = t;

    function o() {
        return n
    }

    function s(c) {
        n = e(c)
    }

    function i(c) {
        n += e(c)
    }

    function r(c) {
        n -= e(c)
    }

    function e(c) {
        return Tt(c) ? c : c.get()
    }
    return {
        get: o,
        set: s,
        add: i,
        subtract: r
    }
}

function _t(t, n) {
    const o = t.scroll === "x" ? e : c,
        s = n.style;
    let i = null,
        r = !1;

    function e(p) {
        return `translate3d(${p}px,0px,0px)`
    }

    function c(p) {
        return `translate3d(0px,${p}px,0px)`
    }

    function u(p) {
        if (r) return;
        const g = un(t.direction(p));
        g !== i && (s.transform = o(g), i = g)
    }

    function a(p) {
        r = !p
    }

    function f() {
        r || (s.transform = "", n.getAttribute("style") || n.removeAttribute("style"))
    }
    return {
        clear: f,
        to: u,
        toggleActive: a
    }
}

function On(t, n, o, s, i, r, e, c, u) {
    const f = ft(i),
        p = ft(i).reverse(),
        g = l().concat(S());

    function m(E, T) {
        return E.reduce((x, O) => x - i[O], T)
    }

    function d(E, T) {
        return E.reduce((x, O) => m(x, T) > 0 ? x.concat([O]) : x, [])
    }

    function h(E) {
        return r.map((T, x) => ({
            start: T - s[x] + .5 + E,
            end: T + n - .5 + E
        }))
    }

    function y(E, T, x) {
        const O = h(T);
        return E.map(P => {
            const w = x ? 0 : -o,
                k = x ? o : 0,
                z = x ? "end" : "start",
                j = O[P][z];
            return {
                index: P,
                loopPoint: j,
                slideLocation: ut(-1),
                translate: _t(t, u[P]),
                target: () => c.get() > j ? w : k
            }
        })
    }

    function l() {
        const E = e[0];
        return y(d(p, E), o, !1)
    }

    function S() {
        const E = n - e[0] - 1;
        return y(d(f, E), -o, !0)
    }

    function v() {
        return g.every(({
            index: E
        }) => m(f.filter(T => T !== E), n) <= .1)
    }

    function A() {
        g.forEach(E => {
            const {
                target: T,
                translate: x,
                slideLocation: O
            } = E, P = T();
            P !== O.get() && (x.to(P), O.set(P))
        })
    }

    function M() {
        g.forEach(E => E.translate.clear())
    }
    return {
        canLoop: v,
        clear: M,
        loop: A,
        loopPoints: g
    }
}

function Mn(t, n, o) {
    let s, i = !1;

    function r(c) {
        if (!o) return;

        function u(a) {
            for (const f of a)
                if (f.type === "childList") {
                    c.reInit(), n.emit("slidesChanged");
                    break
                }
        }
        s = new MutationObserver(a => {
            i || (ht(o) || o(c, a)) && u(a)
        }), s.observe(t, {
            childList: !0
        })
    }

    function e() {
        s && s.disconnect(), i = !0
    }
    return {
        init: r,
        destroy: e
    }
}

function Pn(t, n, o, s) {
    const i = {};
    let r = null,
        e = null,
        c, u = !1;

    function a() {
        c = new IntersectionObserver(m => {
            u || (m.forEach(d => {
                const h = n.indexOf(d.target);
                i[h] = d
            }), r = null, e = null, o.emit("slidesInView"))
        }, {
            root: t.parentElement,
            threshold: s
        }), n.forEach(m => c.observe(m))
    }

    function f() {
        c && c.disconnect(), u = !0
    }

    function p(m) {
        return lt(i).reduce((d, h) => {
            const y = parseInt(h),
                {
                    isIntersecting: l
                } = i[y];
            return (m && l || !m && !l) && d.push(y), d
        }, [])
    }

    function g(m = !0) {
        if (m && r) return r;
        if (!m && e) return e;
        const d = p(m);
        return m && (r = d), m || (e = d), d
    }
    return {
        init: a,
        destroy: f,
        get: g
    }
}

function wn(t, n, o, s, i, r) {
    const {
        measureSize: e,
        startEdge: c,
        endEdge: u
    } = t, a = o[0] && i, f = d(), p = h(), g = o.map(e), m = y();

    function d() {
        if (!a) return 0;
        const l = o[0];
        return D(n[c] - l[c])
    }

    function h() {
        if (!a) return 0;
        const l = r.getComputedStyle(V(s));
        return parseFloat(l.getPropertyValue(`margin-${u}`))
    }

    function y() {
        return o.map((l, S, v) => {
            const A = !S,
                M = Dt(v, S);
            return A ? g[S] + f : M ? g[S] + p : v[S + 1][c] - l[c]
        }).map(D)
    }
    return {
        slideSizes: g,
        slideSizesWithGaps: m,
        startGap: f,
        endGap: p
    }
}

function Fn(t, n, o, s, i, r, e, c, u) {
    const {
        startEdge: a,
        endEdge: f,
        direction: p
    } = t, g = Tt(o);

    function m(y, l) {
        return ft(y).filter(S => S % l === 0).map(S => y.slice(S, S + l))
    }

    function d(y) {
        return y.length ? ft(y).reduce((l, S, v) => {
            const A = V(l) || 0,
                M = A === 0,
                E = S === pt(y),
                T = i[a] - r[A][a],
                x = i[a] - r[S][f],
                O = !s && M ? p(e) : 0,
                P = D(x - (!s && E ? p(c) : 0) - (T + O));
            return v && P > n + u && l.push(S), E && l.push(y.length), l
        }, []).map((l, S, v) => {
            const A = Math.max(v[S - 1] || 0);
            return y.slice(A, l)
        }) : []
    }

    function h(y) {
        return g ? m(y, o) : d(y)
    }
    return {
        groupSlides: h
    }
}

function Cn(t, n, o, s, i, r, e) {
    const {
        align: c,
        axis: u,
        direction: a,
        startIndex: f,
        loop: p,
        duration: g,
        dragFree: m,
        dragThreshold: d,
        inViewThreshold: h,
        slidesToScroll: y,
        skipSnaps: l,
        containScroll: S,
        watchResize: v,
        watchSlides: A,
        watchDrag: M,
        watchFocus: E
    } = r, T = 2, x = mn(), O = x.measure(n), P = o.map(x.measure), w = ln(u, a), k = w.measureSize(O), z = gn(k), j = an(c, k), J = !p && !!S, {
        slideSizes: X,
        slideSizesWithGaps: R,
        startGap: U,
        endGap: G
    } = wn(w, O, P, o, p || !!S, i), Y = Fn(w, k, y, p, O, P, U, G, T), {
        snaps: _,
        snapsAligned: tt
    } = In(w, j, O, P, Y), q = -V(_) + V(R), {
        snapsContained: ot,
        scrollContainLimit: it
    } = Sn(k, q, tt, S, T), N = J ? ot : tt, {
        limit: H
    } = En(q, N, p), C = Gt(pt(N), f, p), nt = C.clone(), B = ft(o), b = ({
        dragHandler: rt,
        scrollBody: Et,
        scrollBounds: xt,
        options: {
            loop: mt
        }
    }) => {
        mt || xt.constrain(rt.pointerDown()), Et.seek()
    }, L = ({
        scrollBody: rt,
        translate: Et,
        location: xt,
        offsetLocation: mt,
        previousLocation: Kt,
        scrollLooper: Qt,
        slideLooper: Jt,
        dragHandler: Xt,
        animation: Yt,
        eventHandler: wt,
        scrollBounds: Zt,
        options: {
            loop: Ft
        }
    }, Ct) => {
        const kt = rt.settled(),
            Wt = !Zt.shouldConstrain(),
            Nt = Ft ? kt : kt && Wt,
            Bt = Nt && !Xt.pointerDown();
        Bt && Yt.stop();
        const tn = xt.get() * Ct + Kt.get() * (1 - Ct);
        mt.set(tn), Ft && (Qt.loop(rt.direction()), Jt.loop()), Et.to(mt.get()), Bt && wt.emit("settle"), Nt || wt.emit("scroll")
    }, I = fn(s, i, () => b(St), rt => L(St, rt)), F = .68, $ = N[C.get()], K = ut($), st = ut($), et = ut($), Z = ut($), ct = bn(K, et, st, Z, g, F), bt = Tn(p, N, q, H, Z), yt = An(I, C, nt, ct, bt, Z, e), Ot = Ln(H), Mt = dt(), $t = Pn(n, o, e, h), {
        slideRegistry: Pt
    } = vn(J, S, N, it, Y, B), Ut = Dn(t, o, Pt, yt, ct, Mt, e, E), St = {
        ownerDocument: s,
        ownerWindow: i,
        eventHandler: e,
        containerRect: O,
        slideRects: P,
        animation: I,
        axis: w,
        dragHandler: dn(w, t, s, i, Z, pn(w, i), K, I, yt, ct, bt, C, e, z, m, d, l, F, M),
        eventStore: Mt,
        percentOfView: z,
        index: C,
        indexPrevious: nt,
        limit: H,
        location: K,
        offsetLocation: et,
        previousLocation: st,
        options: r,
        resizeHandler: hn(n, e, i, o, w, v, x),
        scrollBody: ct,
        scrollBounds: yn(H, et, Z, ct, z),
        scrollLooper: xn(q, H, et, [K, et, st, Z]),
        scrollProgress: Ot,
        scrollSnapList: N.map(Ot.get),
        scrollSnaps: N,
        scrollTarget: bt,
        scrollTo: yt,
        slideLooper: On(w, k, q, X, R, _, N, et, o),
        slideFocus: Ut,
        slidesHandler: Mn(n, e, A),
        slidesInView: $t,
        slideIndexes: B,
        slideRegistry: Pt,
        slidesToScroll: Y,
        target: Z,
        translate: _t(w, n)
    };
    return St
}

function kn() {
    let t = {},
        n;

    function o(a) {
        n = a
    }

    function s(a) {
        return t[a] || []
    }

    function i(a) {
        return s(a).forEach(f => f(n, a)), u
    }

    function r(a, f) {
        return t[a] = s(a).concat([f]), u
    }

    function e(a, f) {
        return t[a] = s(a).filter(p => p !== f), u
    }

    function c() {
        t = {}
    }
    const u = {
        init: o,
        emit: i,
        off: e,
        on: r,
        clear: c
    };
    return u
}
var Nn = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0,
    watchFocus: !0
};

function Bn(t) {
    function n(i, r) {
        return Rt(i, r || {})
    }

    function o(i) {
        const r = i.breakpoints || {};
        return n(i, lt(r).filter(e => t.matchMedia(e).matches).map(e => r[e]).reduce((e, c) => n(e, c), {}))
    }

    function s(i) {
        return i.map(r => lt(r.breakpoints || {})).reduce((r, e) => r.concat(e), []).map(t.matchMedia)
    }
    return {
        mergeOptions: n,
        optionsAtMedia: o,
        optionsMediaQueries: s
    }
}

function jn(t) {
    let n = [];

    function o(i, r) {
        return n = r.filter(({
            options: e
        }) => t.optionsAtMedia(e).active !== !1), n.forEach(e => e.init(i, t)), r.reduce((e, c) => Object.assign(e, {
            [c.name]: c
        }), {})
    }

    function s() {
        n = n.filter(i => i.destroy())
    }
    return {
        init: o,
        destroy: s
    }
}

function gt(t, n, o) {
    const s = t.ownerDocument,
        i = s.defaultView,
        r = Bn(i),
        e = jn(r),
        c = dt(),
        u = kn(),
        {
            mergeOptions: a,
            optionsAtMedia: f,
            optionsMediaQueries: p
        } = r,
        {
            on: g,
            off: m,
            emit: d
        } = u,
        h = w;
    let y = !1,
        l, S = a(Nn, gt.globalOptions),
        v = a(S),
        A = [],
        M, E, T;

    function x() {
        const {
            container: b,
            slides: L
        } = v;
        E = (Lt(b) ? t.querySelector(b) : b) || t.children[0];
        const I = Lt(L) ? E.querySelectorAll(L) : L;
        T = [].slice.call(I || E.children)
    }

    function O(b) {
        const L = Cn(t, E, T, s, i, b, u);
        return b.loop && !L.slideLooper.canLoop() ? O(Object.assign({}, b, {
            loop: !1
        })) : L
    }

    function P(b, L) {
        y || (S = a(S, b), v = f(S), A = L || A, x(), l = O(v), p([S, ...A.map(({
            options: I
        }) => I)]).forEach(I => c.add(I, "change", w)), v.active && (l.translate.to(l.location.get()), l.animation.init(), l.slidesInView.init(), l.slideFocus.init(B), l.eventHandler.init(B), l.resizeHandler.init(B), l.slidesHandler.init(B), l.options.loop && l.slideLooper.loop(), E.offsetParent && T.length && l.dragHandler.init(B), M = e.init(B, A)))
    }

    function w(b, L) {
        const I = _();
        k(), P(a({
            startIndex: I
        }, b), L), u.emit("reInit")
    }

    function k() {
        l.dragHandler.destroy(), l.eventStore.clear(), l.translate.clear(), l.slideLooper.clear(), l.resizeHandler.destroy(), l.slidesHandler.destroy(), l.slidesInView.destroy(), l.animation.destroy(), e.destroy(), c.clear()
    }

    function z() {
        y || (y = !0, c.clear(), k(), u.emit("destroy"), u.clear())
    }

    function j(b, L, I) {
        !v.active || y || (l.scrollBody.useBaseFriction().useDuration(L === !0 ? 0 : v.duration), l.scrollTo.index(b, I || 0))
    }

    function J(b) {
        j(l.index.add(1).get(), b, -1)
    }

    function X(b) {
        j(l.index.add(-1).get(), b, 1)
    }

    function R() {
        return l.index.add(1).get() !== _()
    }

    function U() {
        return l.index.add(-1).get() !== _()
    }

    function G() {
        return l.scrollSnapList
    }

    function Y() {
        return l.scrollProgress.get(l.offsetLocation.get())
    }

    function _() {
        return l.index.get()
    }

    function tt() {
        return l.indexPrevious.get()
    }

    function q() {
        return l.slidesInView.get()
    }

    function ot() {
        return l.slidesInView.get(!1)
    }

    function it() {
        return M
    }

    function N() {
        return l
    }

    function H() {
        return t
    }

    function C() {
        return E
    }

    function nt() {
        return T
    }
    const B = {
        canScrollNext: R,
        canScrollPrev: U,
        containerNode: C,
        internalEngine: N,
        destroy: z,
        off: m,
        on: g,
        emit: d,
        plugins: it,
        previousScrollSnap: tt,
        reInit: h,
        rootNode: H,
        scrollNext: J,
        scrollPrev: X,
        scrollProgress: Y,
        scrollSnapList: G,
        scrollTo: j,
        selectedScrollSnap: _,
        slideNodes: nt,
        slidesInView: q,
        slidesNotInView: ot
    };
    return P(n, o), setTimeout(() => u.emit("init"), 0), B
}
gt.globalOptions = void 0;

function qt(t = {}, n = []) {
    const o = (0, Q.useRef)(t),
        s = (0, Q.useRef)(n),
        [i, r] = (0, Q.useState)(),
        [e, c] = (0, Q.useState)(),
        u = (0, Q.useCallback)(() => {
            i && i.reInit(o.current, s.current)
        }, [i]);
    return (0, Q.useEffect)(() => {
        vt(o.current, t) || (o.current = t, u())
    }, [t, u]), (0, Q.useEffect)(() => {
        sn(s.current, n) || (s.current = n, u())
    }, [n, u]), (0, Q.useEffect)(() => {
        if (on() && e) {
            gt.globalOptions = qt.globalOptions;
            const a = gt(e, o.current, s.current);
            return r(a), () => a.destroy()
        } else r(void 0)
    }, [e, r]), [c, i]
}
qt.globalOptions = void 0;
export {
    qt as t
};