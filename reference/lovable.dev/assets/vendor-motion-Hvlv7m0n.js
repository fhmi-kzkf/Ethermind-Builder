import {
    a as ua,
    n as ca,
    o as ha,
    r as fa
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as da,
    r as ma
} from "./vendor-react-Fx2PtaaM.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new t.Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "5a646d12-1c62-4c7d-bedb-e206adedcd49", t._sentryDebugIdIdentifier = "sentry-dbid-5a646d12-1c62-4c7d-bedb-e206adedcd49")
    })()
} catch {}
var _ = ma(),
    p = ha(da(), 1),
    qt = (0, p.createContext)({});

function K(t) {
    const e = (0, p.useRef)(null);
    return e.current === null && (e.current = t()), e.current
}
var pa = typeof window < "u",
    Rt = pa ? p.useLayoutEffect : p.useEffect,
    ie = (0, p.createContext)(null);

function Bn(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function Et(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}

function ga([...t], e, n) {
    const i = e < 0 ? t.length + e : e;
    if (i >= 0 && i < t.length) {
        const s = n < 0 ? t.length + n : n,
            [o] = t.splice(e, 1);
        t.splice(s, 0, o)
    }
    return t
}
var nt = (t, e, n) => n > e ? e : n < t ? t : n,
    Ie = () => {},
    G = () => {},
    dt = {},
    sr = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);

function rr(t) {
    return typeof t == "object" && t !== null
}
var or = t => /^0[^.\s]+$/u.test(t);

function ar(t) {
    let e;
    return () => (e === void 0 && (e = t()), e)
}
var H = t => t,
    va = (t, e) => n => e(t(n)),
    se = (...t) => t.reduce(va),
    bt = (t, e, n) => {
        const i = e - t;
        return i === 0 ? 1 : (n - t) / i
    },
    Fn = class {
        constructor() {
            this.subscriptions = []
        }
        add(t) {
            return Bn(this.subscriptions, t), () => Et(this.subscriptions, t)
        }
        notify(t, e, n) {
            const i = this.subscriptions.length;
            if (i)
                if (i === 1) this.subscriptions[0](t, e, n);
                else
                    for (let s = 0; s < i; s++) {
                        const o = this.subscriptions[s];
                        o && o(t, e, n)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    },
    z = t => t * 1e3,
    q = t => t / 1e3;

function On(t, e) {
    return e ? t * (1e3 / e) : 0
}
var ya = (t, e, n) => {
        const i = e - t;
        return ((n - t) % i + i) % i + t
    },
    lr = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
    xa = 1e-7,
    wa = 12;

function Ta(t, e, n, i, s) {
    let o, r, a = 0;
    do r = e + (n - e) / 2, o = lr(r, i, s) - t, o > 0 ? n = r : e = r; while (Math.abs(o) > xa && ++a < wa);
    return r
}

function re(t, e, n, i) {
    if (t === e && n === i) return H;
    const s = o => Ta(o, 0, 1, t, n);
    return o => o === 0 || o === 1 ? o : lr(s(o), e, i)
}
var ur = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    cr = t => e => 1 - t(1 - e),
    hr = re(.33, 1.53, .69, .99),
    jn = cr(hr),
    fr = ur(jn),
    dr = t => t >= 1 ? 1 : (t *= 2) < 1 ? .5 * jn(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    Wn = t => 1 - Math.sin(Math.acos(t)),
    mr = cr(Wn),
    pr = ur(Wn),
    Sa = re(.42, 0, 1, 1),
    ba = re(0, 0, .58, 1),
    gr = re(.42, 0, .58, 1),
    vr = t => Array.isArray(t) && typeof t[0] != "number";

function yr(t, e) {
    return vr(t) ? t[ya(0, t.length, e)] : t
}
var xr = t => Array.isArray(t) && typeof t[0] == "number",
    Ai = {
        linear: H,
        easeIn: Sa,
        easeInOut: gr,
        easeOut: ba,
        circIn: Wn,
        circInOut: pr,
        circOut: mr,
        backIn: jn,
        backInOut: fr,
        backOut: hr,
        anticipate: dr
    },
    Aa = t => typeof t == "string",
    on = t => {
        if (xr(t)) {
            G(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
            const [e, n, i, s] = t;
            return re(e, n, i, s)
        } else if (Aa(t)) return G(Ai[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), Ai[t];
        return t
    },
    he = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
    at = {
        value: null,
        addProjectionMetrics: null
    };

function Pa(t, e) {
    let n = new Set,
        i = new Set,
        s = !1,
        o = !1;
    const r = new WeakSet;
    let a = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        l = 0;

    function c(h) {
        r.has(h) && (u.schedule(h), t()), l++, h(a)
    }
    const u = {
        schedule: (h, f = !1, m = !1) => {
            const d = m && s ? n : i;
            return f && r.add(h), d.add(h), h
        },
        cancel: h => {
            i.delete(h), r.delete(h)
        },
        process: h => {
            if (a = h, s) {
                o = !0;
                return
            }
            s = !0;
            const f = n;
            n = i, i = f, n.forEach(c), e && at.value && at.value.frameloop[e].push(l), l = 0, n.clear(), s = !1, o && (o = !1, u.process(h))
        }
    };
    return u
}
var Ca = 40;

function wr(t, e) {
    let n = !1,
        i = !0;
    const s = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = () => n = !0,
        r = he.reduce((x, w) => (x[w] = Pa(o, e ? w : void 0), x), {}),
        {
            setup: a,
            read: l,
            resolveKeyframes: c,
            preUpdate: u,
            update: h,
            preRender: f,
            render: m,
            postRender: d
        } = r,
        y = () => {
            const x = dt.useManualTiming,
                w = x ? s.timestamp : performance.now();
            n = !1, x || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(w - s.timestamp, Ca), 1)), s.timestamp = w, s.isProcessing = !0, a.process(s), l.process(s), c.process(s), u.process(s), h.process(s), f.process(s), m.process(s), d.process(s), s.isProcessing = !1, n && e && (i = !1, t(y))
        },
        v = () => {
            n = !0, i = !0, s.isProcessing || t(y)
        };
    return {
        schedule: he.reduce((x, w) => {
            const P = r[w];
            return x[w] = (M, D = !1, A = !1) => (n || v(), P.schedule(M, D, A)), x
        }, {}),
        cancel: x => {
            for (let w = 0; w < he.length; w++) r[he[w]].cancel(x)
        },
        state: s,
        steps: r
    }
}
var {
    schedule: V,
    cancel: X,
    state: W,
    steps: Ue
} = wr(typeof requestAnimationFrame < "u" ? requestAnimationFrame : H, !0), xe;

function Va() {
    xe = void 0
}
var U = {
        now: () => (xe === void 0 && U.set(W.isProcessing || dt.useManualTiming ? W.timestamp : performance.now()), xe),
        set: t => {
            xe = t, queueMicrotask(Va)
        }
    },
    wt = {
        layout: 0,
        mainThread: 0,
        waapi: 0
    },
    Tr = t => e => typeof e == "string" && e.startsWith(t),
    Sr = Tr("--"),
    Ma = Tr("var(--"),
    Nn = t => Ma(t) ? Ea.test(t.split("/*")[0].trim()) : !1,
    Ea = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function Pi(t) {
    return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--")
}
var Lt = {
        test: t => typeof t == "number",
        parse: parseFloat,
        transform: t => t
    },
    Zt = { ...Lt,
        transform: t => nt(0, 1, t)
    },
    fe = { ...Lt,
        default: 1
    },
    $t = t => Math.round(t * 1e5) / 1e5,
    Un = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Da(t) {
    return t == null
}
var Ra = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    $n = (t, e) => n => !!(typeof n == "string" && Ra.test(n) && n.startsWith(t) || e && !Da(n) && Object.prototype.hasOwnProperty.call(n, e)),
    br = (t, e, n) => i => {
        if (typeof i != "string") return i;
        const [s, o, r, a] = i.match(Un);
        return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [n]: parseFloat(r),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    La = t => nt(0, 255, t),
    $e = { ...Lt,
        transform: t => Math.round(La(t))
    },
    yt = {
        test: $n("rgb", "red"),
        parse: br("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: i = 1
        }) => "rgba(" + $e.transform(t) + ", " + $e.transform(e) + ", " + $e.transform(n) + ", " + $t(Zt.transform(i)) + ")"
    };

function ka(t) {
    let e = "",
        n = "",
        i = "",
        s = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(i, 16),
        alpha: s ? parseInt(s, 16) / 255 : 1
    }
}
var an = {
        test: $n("#"),
        parse: ka,
        transform: yt.transform
    },
    oe = t => ({
        test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    ht = oe("deg"),
    lt = oe("%"),
    S = oe("px"),
    Ia = oe("vh"),
    Ba = oe("vw"),
    Ci = { ...lt,
        parse: t => lt.parse(t) / 100,
        transform: t => lt.transform(t * 100)
    },
    Ct = {
        test: $n("hsl", "hue"),
        parse: br("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: i = 1
        }) => "hsla(" + Math.round(t) + ", " + lt.transform($t(e)) + ", " + lt.transform($t(n)) + ", " + $t(Zt.transform(i)) + ")"
    },
    j = {
        test: t => yt.test(t) || an.test(t) || Ct.test(t),
        parse: t => yt.test(t) ? yt.parse(t) : Ct.test(t) ? Ct.parse(t) : an.parse(t),
        transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? yt.transform(t) : Ct.transform(t),
        getAnimatableNone: t => {
            const e = j.parse(t);
            return e.alpha = 0, j.transform(e)
        }
    },
    Fa = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Oa(t) {
    return isNaN(t) && typeof t == "string" && (t.match(Un) ? .length || 0) + (t.match(Fa) ? .length || 0) > 0
}
var Ar = "number",
    Pr = "color",
    ja = "var",
    Wa = "var(",
    Vi = "${}",
    Na = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Dt(t) {
    const e = t.toString(),
        n = [],
        i = {
            color: [],
            number: [],
            var: []
        },
        s = [];
    let o = 0;
    return {
        values: n,
        split: e.replace(Na, r => (j.test(r) ? (i.color.push(o), s.push(Pr), n.push(j.parse(r))) : r.startsWith(Wa) ? (i.var.push(o), s.push(ja), n.push(r)) : (i.number.push(o), s.push(Ar), n.push(parseFloat(r))), ++o, Vi)).split(Vi),
        indexes: i,
        types: s
    }
}

function Ua(t) {
    return Dt(t).values
}

function Cr({
    split: t,
    types: e
}) {
    const n = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < n; o++)
            if (s += t[o], i[o] !== void 0) {
                const r = e[o];
                r === Ar ? s += $t(i[o]) : r === Pr ? s += j.transform(i[o]) : s += i[o]
            }
        return s
    }
}

function $a(t) {
    return Cr(Dt(t))
}
var _a = t => typeof t == "number" ? 0 : j.test(t) ? j.getAnimatableNone(t) : t,
    za = (t, e) => typeof t == "number" ? e ? .trim().endsWith("/") ? t : 0 : _a(t);

function Ha(t) {
    const e = Dt(t);
    return Cr(e)(e.values.map((n, i) => za(n, e.split[i])))
}
var et = {
    test: Oa,
    parse: Ua,
    createTransformer: $a,
    getAnimatableNone: Ha
};

function _e(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function Ka({
    hue: t,
    saturation: e,
    lightness: n,
    alpha: i
}) {
    t /= 360, e /= 100, n /= 100;
    let s = 0,
        o = 0,
        r = 0;
    if (!e) s = o = r = n;
    else {
        const a = n < .5 ? n * (1 + e) : n + e - n * e,
            l = 2 * n - a;
        s = _e(l, a, t + 1 / 3), o = _e(l, a, t), r = _e(l, a, t - 1 / 3)
    }
    return {
        red: Math.round(s * 255),
        green: Math.round(o * 255),
        blue: Math.round(r * 255),
        alpha: i
    }
}

function Ve(t, e) {
    return n => n > 0 ? e : t
}
var R = (t, e, n) => t + (e - t) * n,
    ze = (t, e, n) => {
        const i = t * t,
            s = n * (e * e - i) + i;
        return s < 0 ? 0 : Math.sqrt(s)
    },
    Ga = [an, yt, Ct],
    Xa = t => Ga.find(e => e.test(t));

function Mi(t) {
    const e = Xa(t);
    if (Ie(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return !1;
    let n = e.parse(t);
    return e === Ct && (n = Ka(n)), n
}
var Ei = (t, e) => {
        const n = Mi(t),
            i = Mi(e);
        if (!n || !i) return Ve(t, e);
        const s = { ...n
        };
        return o => (s.red = ze(n.red, i.red, o), s.green = ze(n.green, i.green, o), s.blue = ze(n.blue, i.blue, o), s.alpha = R(n.alpha, i.alpha, o), yt.transform(s))
    },
    ln = new Set(["none", "hidden"]);

function Ya(t, e) {
    return ln.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}

function qa(t, e) {
    return n => R(t, e, n)
}

function _n(t) {
    return typeof t == "number" ? qa : typeof t == "string" ? Nn(t) ? Ve : j.test(t) ? Ei : Qa : Array.isArray(t) ? Vr : typeof t == "object" ? j.test(t) ? Ei : Za : Ve
}

function Vr(t, e) {
    const n = [...t],
        i = n.length,
        s = t.map((o, r) => _n(o)(o, e[r]));
    return o => {
        for (let r = 0; r < i; r++) n[r] = s[r](o);
        return n
    }
}

function Za(t, e) {
    const n = { ...t,
            ...e
        },
        i = {};
    for (const s in n) t[s] !== void 0 && e[s] !== void 0 && (i[s] = _n(t[s])(t[s], e[s]));
    return s => {
        for (const o in i) n[o] = i[o](s);
        return n
    }
}

function Ja(t, e) {
    const n = [],
        i = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let s = 0; s < e.values.length; s++) {
        const o = e.types[s],
            r = t.indexes[o][i[o]],
            a = t.values[r] ? ? 0;
        n[s] = a, i[o]++
    }
    return n
}
var Qa = (t, e) => {
    const n = et.createTransformer(e),
        i = Dt(t),
        s = Dt(e);
    return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? ln.has(t) && !s.values.length || ln.has(e) && !i.values.length ? Ya(t, e) : se(Vr(Ja(i, s), s.values), n) : (Ie(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Ve(t, e))
};

function Mr(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? R(t, e, n) : _n(t)(t, e)
}
var tl = t => {
        const e = ({
            timestamp: n
        }) => t(n);
        return {
            start: (n = !0) => V.update(e, n),
            stop: () => X(e),
            now: () => W.isProcessing ? W.timestamp : U.now()
        }
    },
    Er = (t, e, n = 10) => {
        let i = "";
        const s = Math.max(Math.round(e / n), 2);
        for (let o = 0; o < s; o++) i += Math.round(t(o / (s - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${i.substring(0,i.length-2)})`
    },
    Dr = 2e4;

function zn(t) {
    let e = 0;
    const n = 50;
    let i = t.next(e);
    for (; !i.done && e < 2e4;) e += n, i = t.next(e);
    return e >= 2e4 ? 1 / 0 : e
}

function Rr(t, e = 100, n) {
    const i = n({ ...t,
            keyframes: [0, e]
        }),
        s = Math.min(zn(i), Dr);
    return {
        type: "keyframes",
        ease: o => i.next(s * o).value / e,
        duration: q(s)
    }
}
var I = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};

function un(t, e) {
    return t * Math.sqrt(1 - e * e)
}
var el = 12;

function nl(t, e, n) {
    let i = n;
    for (let s = 1; s < el; s++) i = i - t(i) / e(i);
    return i
}
var Di = .001;

function il({
    duration: t = I.duration,
    bounce: e = I.bounce,
    velocity: n = I.velocity,
    mass: i = I.mass
}) {
    let s, o;
    Ie(t <= z(I.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let r = 1 - e;
    r = nt(I.minDamping, I.maxDamping, r), t = nt(I.minDuration, I.maxDuration, q(t)), r < 1 ? (s = c => {
        const u = c * r,
            h = u * t,
            f = u - n,
            m = un(c, r),
            d = Math.exp(-h);
        return Di - f / m * d
    }, o = c => {
        const u = c * r * t,
            h = u * n + n,
            f = Math.pow(r, 2) * Math.pow(c, 2) * t,
            m = Math.exp(-u),
            d = un(Math.pow(c, 2), r);
        return (-s(c) + Di > 0 ? -1 : 1) * ((h - f) * m) / d
    }) : (s = c => -.001 + Math.exp(-c * t) * ((c - n) * t + 1), o = c => Math.exp(-c * t) * ((n - c) * (t * t)));
    const a = 5 / t,
        l = nl(s, o, a);
    if (t = z(t), isNaN(l)) return {
        stiffness: I.stiffness,
        damping: I.damping,
        duration: t
    }; {
        const c = Math.pow(l, 2) * i;
        return {
            stiffness: c,
            damping: r * 2 * Math.sqrt(i * c),
            duration: t
        }
    }
}
var sl = ["duration", "bounce"],
    rl = ["stiffness", "damping", "mass"];

function Ri(t, e) {
    return e.some(n => t[n] !== void 0)
}

function ol(t) {
    let e = {
        velocity: I.velocity,
        stiffness: I.stiffness,
        damping: I.damping,
        mass: I.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Ri(t, rl) && Ri(t, sl))
        if (e.velocity = 0, t.visualDuration) {
            const n = t.visualDuration,
                i = 2 * Math.PI / (n * 1.2),
                s = i * i,
                o = 2 * nt(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
            e = { ...e,
                mass: I.mass,
                stiffness: s,
                damping: o
            }
        } else {
            const n = il({ ...t,
                velocity: 0
            });
            e = { ...e,
                ...n,
                mass: I.mass
            }, e.isResolvedFromDuration = !0
        }
    return e
}

function Jt(t = I.visualDuration, e = I.bounce) {
    const n = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {
        restSpeed: i,
        restDelta: s
    } = n;
    const o = n.keyframes[0],
        r = n.keyframes[n.keyframes.length - 1],
        a = {
            done: !1,
            value: o
        },
        {
            stiffness: l,
            damping: c,
            mass: u,
            duration: h,
            velocity: f,
            isResolvedFromDuration: m
        } = ol({ ...n,
            velocity: -q(n.velocity || 0)
        }),
        d = f || 0,
        y = c / (2 * Math.sqrt(l * u)),
        v = r - o,
        g = q(Math.sqrt(l / u)),
        T = Math.abs(v) < 5;
    i || (i = T ? I.restSpeed.granular : I.restSpeed.default), s || (s = T ? I.restDelta.granular : I.restDelta.default);
    let x, w, P, M, D, A;
    if (y < 1) P = un(g, y), M = (d + y * g * v) / P, x = C => {
        const E = Math.exp(-y * g * C);
        return r - E * (M * Math.sin(P * C) + v * Math.cos(P * C))
    }, D = y * g * M + v * P, A = y * g * v - M * P, w = C => Math.exp(-y * g * C) * (D * Math.sin(P * C) + A * Math.cos(P * C));
    else if (y === 1) {
        x = E => r - Math.exp(-g * E) * (v + (d + g * v) * E);
        const C = d + g * v;
        w = E => Math.exp(-g * E) * (g * C * E - d)
    } else {
        const C = g * Math.sqrt(y * y - 1);
        x = J => {
            const it = Math.exp(-y * g * J),
                Y = Math.min(C * J, 300);
            return r - it * ((d + y * g * v) * Math.sinh(Y) + C * v * Math.cosh(Y)) / C
        };
        const E = (d + y * g * v) / C,
            F = y * g * E - v * C,
            N = y * g * v - E * C;
        w = J => {
            const it = Math.exp(-y * g * J),
                Y = Math.min(C * J, 300);
            return it * (F * Math.sinh(Y) + N * Math.cosh(Y))
        }
    }
    const b = {
        calculatedDuration: m && h || null,
        velocity: C => z(w(C)),
        next: C => {
            if (!m && y < 1) {
                const F = Math.exp(-y * g * C),
                    N = Math.sin(P * C),
                    J = Math.cos(P * C),
                    it = r - F * (M * N + v * J),
                    Y = z(F * (D * N + A * J));
                return a.done = Math.abs(Y) <= i && Math.abs(r - it) <= s, a.value = a.done ? r : it, a
            }
            const E = x(C);
            if (m) a.done = C >= h;
            else {
                const F = z(w(C));
                a.done = Math.abs(F) <= i && Math.abs(r - E) <= s
            }
            return a.value = a.done ? r : E, a
        },
        toString: () => {
            const C = Math.min(zn(b), Dr),
                E = Er(F => b.next(C * F).value, C, 30);
            return C + "ms " + E
        },
        toTransition: () => {}
    };
    return b
}
Jt.applyToOptions = t => {
    const e = Rr(t, 100, Jt);
    return t.ease = e.ease, t.duration = z(e.duration), t.type = "keyframes", t
};
var al = 5;

function Lr(t, e, n) {
    const i = Math.max(e - al, 0);
    return On(n - t(i), e - i)
}

function cn({
    keyframes: t,
    velocity: e = 0,
    power: n = .8,
    timeConstant: i = 325,
    bounceDamping: s = 10,
    bounceStiffness: o = 500,
    modifyTarget: r,
    min: a,
    max: l,
    restDelta: c = .5,
    restSpeed: u
}) {
    const h = t[0],
        f = {
            done: !1,
            value: h
        },
        m = A => a !== void 0 && A < a || l !== void 0 && A > l,
        d = A => a === void 0 ? l : l === void 0 || Math.abs(a - A) < Math.abs(l - A) ? a : l;
    let y = n * e;
    const v = h + y,
        g = r === void 0 ? v : r(v);
    g !== v && (y = g - h);
    const T = A => -y * Math.exp(-A / i),
        x = A => g + T(A),
        w = A => {
            const b = T(A),
                C = x(A);
            f.done = Math.abs(b) <= c, f.value = f.done ? g : C
        };
    let P, M;
    const D = A => {
        m(f.value) && (P = A, M = Jt({
            keyframes: [f.value, d(f.value)],
            velocity: Lr(x, A, f.value),
            damping: s,
            stiffness: o,
            restDelta: c,
            restSpeed: u
        }))
    };
    return D(0), {
        calculatedDuration: null,
        next: A => {
            let b = !1;
            return !M && P === void 0 && (b = !0, w(A), D(A)), P !== void 0 && A >= P ? M.next(A - P) : (!b && w(A), f)
        }
    }
}

function ll(t, e, n) {
    const i = [],
        s = n || dt.mix || Mr,
        o = t.length - 1;
    for (let r = 0; r < o; r++) {
        let a = s(t[r], t[r + 1]);
        if (e) {
            const l = Array.isArray(e) ? e[r] || H : e;
            a = se(l, a)
        }
        i.push(a)
    }
    return i
}

function Hn(t, e, {
    clamp: n = !0,
    ease: i,
    mixer: s
} = {}) {
    const o = t.length;
    if (G(o === e.length, "Both input and output ranges must be the same length", "range-length"), o === 1) return () => e[0];
    if (o === 2 && e[0] === e[1]) return () => e[1];
    const r = t[0] === t[1];
    t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const a = ll(e, i, s),
        l = a.length,
        c = u => {
            if (r && u < t[0]) return e[0];
            let h = 0;
            if (l > 1)
                for (; h < t.length - 2 && !(u < t[h + 1]); h++);
            const f = bt(t[h], t[h + 1], u);
            return a[h](f)
        };
    return n ? u => c(nt(t[0], t[o - 1], u)) : c
}

function kr(t, e) {
    const n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const s = bt(0, e, i);
        t.push(R(n, 1, s))
    }
}

function Kn(t) {
    const e = [0];
    return kr(e, t.length - 1), e
}

function ul(t, e) {
    return t.map(n => n * e)
}

function cl(t, e) {
    return t.map(() => e || gr).splice(0, t.length - 1)
}

function _t({
    duration: t = 300,
    keyframes: e,
    times: n,
    ease: i = "easeInOut"
}) {
    const s = vr(i) ? i.map(on) : on(i),
        o = {
            done: !1,
            value: e[0]
        },
        r = ul(n && n.length === e.length ? n : Kn(e), t),
        a = Hn(r, e, {
            ease: Array.isArray(s) ? s : cl(e, s)
        });
    return {
        calculatedDuration: t,
        next: l => (o.value = a(l), o.done = l >= t, o)
    }
}
var hl = t => t !== null;

function Be(t, {
    repeat: e,
    repeatType: n = "loop"
}, i, s = 1) {
    const o = t.filter(hl),
        r = s < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
    return !r || i === void 0 ? o[r] : i
}
var fl = {
    decay: cn,
    inertia: cn,
    tween: _t,
    keyframes: _t,
    spring: Jt
};

function Ir(t) {
    typeof t.type == "string" && (t.type = fl[t.type])
}
var Gn = class {
        constructor() {
            this.updateFinished()
        }
        get finished() {
            return this._finished
        }
        updateFinished() {
            this._finished = new Promise(t => {
                this.resolve = t
            })
        }
        notifyFinished() {
            this.resolve()
        }
        then(t, e) {
            return this.finished.then(t, e)
        }
    },
    dl = t => t / 100,
    Qt = class extends Gn {
        constructor(t) {
            super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
                done: !1,
                value: void 0
            }, this.stop = () => {
                const {
                    motionValue: e
                } = this.options;
                e && e.updatedAt !== U.now() && this.tick(U.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop ? .())
            }, wt.mainThread++, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause()
        }
        initAnimation() {
            const {
                options: t
            } = this;
            Ir(t);
            const {
                type: e = _t,
                repeat: n = 0,
                repeatDelay: i = 0,
                repeatType: s,
                velocity: o = 0
            } = t;
            let {
                keyframes: r
            } = t;
            const a = e || _t;
            a !== _t && typeof r[0] != "number" && (this.mixKeyframes = se(dl, Mr(r[0], r[1])), r = [0, 100]);
            const l = a({ ...t,
                keyframes: r
            });
            s === "mirror" && (this.mirroredGenerator = a({ ...t,
                keyframes: [...r].reverse(),
                velocity: -o
            })), l.calculatedDuration === null && (l.calculatedDuration = zn(l));
            const {
                calculatedDuration: c
            } = l;
            this.calculatedDuration = c, this.resolvedDuration = c + i, this.totalDuration = this.resolvedDuration * (n + 1) - i, this.generator = l
        }
        updateTime(t) {
            const e = Math.round(t - this.startTime) * this.playbackSpeed;
            this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = e
        }
        tick(t, e = !1) {
            const {
                generator: n,
                totalDuration: i,
                mixKeyframes: s,
                mirroredGenerator: o,
                resolvedDuration: r,
                calculatedDuration: a
            } = this;
            if (this.startTime === null) return n.next(0);
            const {
                delay: l = 0,
                keyframes: c,
                repeat: u,
                repeatType: h,
                repeatDelay: f,
                type: m,
                onUpdate: d,
                finalKeyframe: y
            } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
            const v = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
                g = this.playbackSpeed >= 0 ? v < 0 : v > i;
            this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
            let T = this.currentTime,
                x = n;
            if (u) {
                const D = Math.min(this.currentTime, i) / r;
                let A = Math.floor(D),
                    b = D % 1;
                !b && D >= 1 && (b = 1), b === 1 && A--, A = Math.min(A, u + 1), A % 2 && (h === "reverse" ? (b = 1 - b, f && (b -= f / r)) : h === "mirror" && (x = o)), T = nt(0, 1, b) * r
            }
            let w;
            g ? (this.delayState.value = c[0], w = this.delayState) : w = x.next(T), s && !g && (w.value = s(w.value));
            let {
                done: P
            } = w;
            !g && a !== null && (P = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
            const M = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
            return M && m !== cn && (w.value = Be(c, this.options, y, this.speed)), d && d(w.value), M && this.finish(), w
        }
        then(t, e) {
            return this.finished.then(t, e)
        }
        get duration() {
            return q(this.calculatedDuration)
        }
        get iterationDuration() {
            const {
                delay: t = 0
            } = this.options || {};
            return this.duration + q(t)
        }
        get time() {
            return q(this.currentTime)
        }
        set time(t) {
            t = z(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t))
        }
        getGeneratorVelocity() {
            const t = this.currentTime;
            if (t <= 0) return this.options.velocity || 0;
            if (this.generator.velocity) return this.generator.velocity(t);
            const e = this.generator.next(t).value;
            return Lr(n => this.generator.next(n).value, t, e)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(t) {
            const e = this.playbackSpeed !== t;
            e && this.driver && this.updateTime(U.now()), this.playbackSpeed = t, e && this.driver && (this.time = q(this.currentTime))
        }
        play() {
            if (this.isStopped) return;
            const {
                driver: t = tl,
                startTime: e
            } = this.options;
            this.driver || (this.driver = t(i => this.tick(i))), this.options.onPlay ? .();
            const n = this.driver.now();
            this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime !== null ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = e ? ? n), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
            this.state = "paused", this.updateTime(U.now()), this.holdTime = this.currentTime
        }
        complete() {
            this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
        }
        finish() {
            this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete ? .()
        }
        cancel() {
            this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ? .()
        }
        teardown() {
            this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, wt.mainThread--
        }
        stopDriver() {
            this.driver && (this.driver.stop(), this.driver = void 0)
        }
        sample(t) {
            return this.startTime = 0, this.tick(t, !0)
        }
        attachTimeline(t) {
            return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver ? .stop(), t.observe(this)
        }
    };

function ml(t) {
    for (let e = 1; e < t.length; e++) t[e] ? ? (t[e] = t[e - 1])
}
var xt = t => t * 180 / Math.PI,
    hn = t => {
        const e = xt(Math.atan2(t[1], t[0]));
        return fn(e)
    },
    pl = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
        rotate: hn,
        rotateZ: hn,
        skewX: t => xt(Math.atan(t[1])),
        skewY: t => xt(Math.atan(t[2])),
        skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
    },
    fn = t => (t = t % 360, t < 0 && (t += 360), t),
    Li = hn,
    ki = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
    Ii = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
    gl = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: ki,
        scaleY: Ii,
        scale: t => (ki(t) + Ii(t)) / 2,
        rotateX: t => fn(xt(Math.atan2(t[6], t[5]))),
        rotateY: t => fn(xt(Math.atan2(-t[2], t[0]))),
        rotateZ: Li,
        rotate: Li,
        skewX: t => xt(Math.atan(t[4])),
        skewY: t => xt(Math.atan(t[1])),
        skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
    };

function dn(t) {
    return t.includes("scale") ? 1 : 0
}

function mn(t, e) {
    if (!t || t === "none") return dn(e);
    const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let i, s;
    if (n) i = gl, s = n;
    else {
        const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        i = pl, s = a
    }
    if (!s) return dn(e);
    const o = i[e],
        r = s[1].split(",").map(yl);
    return typeof o == "function" ? o(r) : r[o]
}
var vl = (t, e) => {
    const {
        transform: n = "none"
    } = getComputedStyle(t);
    return mn(n, e)
};

function yl(t) {
    return parseFloat(t.trim())
}
var kt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    It = new Set(kt),
    Bi = t => t === Lt || t === S,
    xl = new Set(["x", "y", "z"]),
    wl = kt.filter(t => !xl.has(t));

function Tl(t) {
    const e = [];
    return wl.forEach(n => {
        const i = t.getValue(n);
        i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
    }), e
}
var ft = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: n = "0",
        boxSizing: i
    }) => {
        const s = t.max - t.min;
        return i === "border-box" ? s : s - parseFloat(e) - parseFloat(n)
    },
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: n = "0",
        boxSizing: i
    }) => {
        const s = t.max - t.min;
        return i === "border-box" ? s : s - parseFloat(e) - parseFloat(n)
    },
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: (t, {
        transform: e
    }) => mn(e, "x"),
    y: (t, {
        transform: e
    }) => mn(e, "y")
};
ft.translateX = ft.x;
ft.translateY = ft.y;
var Tt = new Set,
    pn = !1,
    gn = !1,
    vn = !1;

function Br() {
    if (gn) {
        const t = Array.from(Tt).filter(i => i.needsMeasurement),
            e = new Set(t.map(i => i.element)),
            n = new Map;
        e.forEach(i => {
            const s = Tl(i);
            s.length && (n.set(i, s), i.render())
        }), t.forEach(i => i.measureInitialState()), e.forEach(i => {
            i.render();
            const s = n.get(i);
            s && s.forEach(([o, r]) => {
                i.getValue(o) ? .set(r)
            })
        }), t.forEach(i => i.measureEndState()), t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        })
    }
    gn = !1, pn = !1, Tt.forEach(t => t.complete(vn)), Tt.clear()
}

function Fr() {
    Tt.forEach(t => {
        t.readKeyframes(), t.needsMeasurement && (gn = !0)
    })
}

function Sl() {
    vn = !0, Fr(), Br(), vn = !1
}
var Xn = class {
        constructor(t, e, n, i, s, o = !1) {
            this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = n, this.motionValue = i, this.element = s, this.isAsync = o
        }
        scheduleResolve() {
            this.state = "scheduled", this.isAsync ? (Tt.add(this), pn || (pn = !0, V.read(Fr), V.resolveKeyframes(Br))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
            const {
                unresolvedKeyframes: t,
                name: e,
                element: n,
                motionValue: i
            } = this;
            if (t[0] === null) {
                const s = i ? .get(),
                    o = t[t.length - 1];
                if (s !== void 0) t[0] = s;
                else if (n && e) {
                    const r = n.readValue(e, o);
                    r != null && (t[0] = r)
                }
                t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0])
            }
            ml(t)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
            this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Tt.delete(this)
        }
        cancel() {
            this.state === "scheduled" && (Tt.delete(this), this.state = "pending")
        }
        resume() {
            this.state === "pending" && this.scheduleResolve()
        }
    },
    bl = t => t.startsWith("--");

function Or(t, e, n) {
    bl(e) ? t.style.setProperty(e, n) : t.style[e] = n
}
var Al = {};

function Yn(t, e) {
    const n = ar(t);
    return () => Al[e] ? ? n()
}
var qn = Yn(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
    jr = Yn(() => window.ViewTimeline !== void 0, "viewTimeline"),
    Wr = Yn(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    Wt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
    Fi = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Wt([0, .65, .55, 1]),
        circOut: Wt([.55, 0, 1, .45]),
        backIn: Wt([.31, .01, .66, -.59]),
        backOut: Wt([.33, 1.53, .69, .99])
    };

function Nr(t, e) {
    if (t) return typeof t == "function" ? Wr() ? Er(t, e) : "ease-out" : xr(t) ? Wt(t) : Array.isArray(t) ? t.map(n => Nr(n, e) || Fi.easeOut) : Fi[t]
}

function Pl(t, e, n, {
    delay: i = 0,
    duration: s = 300,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: a = "easeOut",
    times: l
} = {}, c = void 0) {
    const u = {
        [e]: n
    };
    l && (u.offset = l);
    const h = Nr(a, s);
    Array.isArray(h) && (u.easing = h), at.value && wt.waapi++;
    const f = {
        delay: i,
        duration: s,
        easing: Array.isArray(h) ? "linear" : h,
        fill: "both",
        iterations: o + 1,
        direction: r === "reverse" ? "alternate" : "normal"
    };
    c && (f.pseudoElement = c);
    const m = t.animate(u, f);
    return at.value && m.finished.finally(() => {
        wt.waapi--
    }), m
}

function Zn(t) {
    return typeof t == "function" && "applyToOptions" in t
}

function Cl({
    type: t,
    ...e
}) {
    return Zn(t) && Wr() ? t.applyToOptions(e) : (e.duration ? ? (e.duration = 300), e.ease ? ? (e.ease = "easeOut"), e)
}
var Ur = class extends Gn {
        constructor(t) {
            if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t) return;
            const {
                element: e,
                name: n,
                keyframes: i,
                pseudoElement: s,
                allowFlatten: o = !1,
                finalKeyframe: r,
                onComplete: a
            } = t;
            this.isPseudoElement = !!s, this.allowFlatten = o, this.options = t, G(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
            const l = Cl(t);
            this.animation = Pl(e, n, i, l, s), l.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
                if (this.finishedTime = this.time, !s) {
                    const c = Be(i, this.options, r, this.speed);
                    this.updateMotionValue && this.updateMotionValue(c), Or(e, n, c), this.animation.cancel()
                }
                a ? .(), this.notifyFinished()
            }
        }
        play() {
            this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished())
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.finish ? .()
        }
        cancel() {
            try {
                this.animation.cancel()
            } catch {}
        }
        stop() {
            if (this.isStopped) return;
            this.isStopped = !0;
            const {
                state: t
            } = this;
            t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles() {
            const t = this.options ? .element;
            !this.isPseudoElement && t ? .isConnected && this.animation.commitStyles ? .()
        }
        get duration() {
            const t = this.animation.effect ? .getComputedTiming ? .().duration || 0;
            return q(Number(t))
        }
        get iterationDuration() {
            const {
                delay: t = 0
            } = this.options || {};
            return this.duration + q(t)
        }
        get time() {
            return q(Number(this.animation.currentTime) || 0)
        }
        set time(t) {
            const e = this.finishedTime !== null;
            this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = z(t), e && this.animation.pause()
        }
        get speed() {
            return this.animation.playbackRate
        }
        set speed(t) {
            t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
        }
        get state() {
            return this.finishedTime !== null ? "finished" : this.animation.playState
        }
        get startTime() {
            return this.manualStartTime ? ? Number(this.animation.startTime)
        }
        set startTime(t) {
            this.manualStartTime = this.animation.startTime = t
        }
        attachTimeline({
            timeline: t,
            rangeStart: e,
            rangeEnd: n,
            observe: i
        }) {
            return this.allowFlatten && this.animation.effect ? .updateTiming({
                easing: "linear"
            }), this.animation.onfinish = null, t && qn() ? (this.animation.timeline = t, e && (this.animation.rangeStart = e), n && (this.animation.rangeEnd = n), H) : i(this)
        }
    },
    $r = {
        anticipate: dr,
        backInOut: fr,
        circInOut: pr
    };

function Vl(t) {
    return t in $r
}

function Ml(t) {
    typeof t.ease == "string" && Vl(t.ease) && (t.ease = $r[t.ease])
}
var He = 10,
    El = class extends Ur {
        constructor(t) {
            Ml(t), Ir(t), super(t), t.startTime !== void 0 && t.autoplay !== !1 && (this.startTime = t.startTime), this.options = t
        }
        updateMotionValue(t) {
            const {
                motionValue: e,
                onUpdate: n,
                onComplete: i,
                element: s,
                ...o
            } = this.options;
            if (!e) return;
            if (t !== void 0) {
                e.set(t);
                return
            }
            const r = new Qt({ ...o,
                    autoplay: !1
                }),
                a = Math.max(He, U.now() - this.startTime),
                l = nt(0, He, a - He),
                c = r.sample(a).value,
                {
                    name: u
                } = this.options;
            s && u && Or(s, u, c), e.setWithVelocity(r.sample(Math.max(0, a - l)).value, c, l), r.stop()
        }
    },
    Oi = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (et.test(t) || t === "0") && !t.startsWith("url("));

function Dl(t) {
    const e = t[0];
    if (t.length === 1) return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e) return !0
}

function Rl(t, e, n, i) {
    const s = t[0];
    if (s === null) return !1;
    if (e === "display" || e === "visibility") return !0;
    const o = t[t.length - 1],
        r = Oi(s, e),
        a = Oi(o, e);
    return Ie(r === a, `You are trying to animate ${e} from "${s}" to "${o}". "${r?o:s}" is not an animatable value.`, "value-not-animatable"), !r || !a ? !1 : Dl(t) || (n === "spring" || Zn(n)) && i
}

function yn(t) {
    t.duration = 0, t.type = "keyframes"
}
var _r = new Set(["opacity", "clipPath", "filter", "transform"]),
    Ll = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;

function kl(t) {
    for (let e = 0; e < t.length; e++)
        if (typeof t[e] == "string" && Ll.test(t[e])) return !0;
    return !1
}
var Il = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
    Bl = ar(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function Fl(t) {
    const {
        motionValue: e,
        name: n,
        repeatDelay: i,
        repeatType: s,
        damping: o,
        type: r,
        keyframes: a
    } = t;
    if (!(e ? .owner ? .current instanceof HTMLElement)) return !1;
    const {
        onUpdate: l,
        transformTemplate: c
    } = e.owner.getProps();
    return Bl() && n && (_r.has(n) || Il.has(n) && kl(a)) && (n !== "transform" || !c) && !l && !i && s !== "mirror" && o !== 0 && r !== "inertia"
}
var Ol = 40,
    jl = class extends Gn {
        constructor({
            autoplay: t = !0,
            delay: e = 0,
            type: n = "keyframes",
            repeat: i = 0,
            repeatDelay: s = 0,
            repeatType: o = "loop",
            keyframes: r,
            name: a,
            motionValue: l,
            element: c,
            ...u
        }) {
            super(), this.stop = () => {
                this._animation && (this._animation.stop(), this.stopTimeline ? .()), this.keyframeResolver ? .cancel()
            }, this.createdAt = U.now();
            const h = {
                    autoplay: t,
                    delay: e,
                    type: n,
                    repeat: i,
                    repeatDelay: s,
                    repeatType: o,
                    name: a,
                    motionValue: l,
                    element: c,
                    ...u
                },
                f = c ? .KeyframeResolver || Xn;
            this.keyframeResolver = new f(r, (m, d, y) => this.onKeyframesResolved(m, d, h, !y), a, l, c), this.keyframeResolver ? .scheduleResolve()
        }
        onKeyframesResolved(t, e, n, i) {
            this.keyframeResolver = void 0;
            const {
                name: s,
                type: o,
                velocity: r,
                delay: a,
                isHandoff: l,
                onUpdate: c
            } = n;
            this.resolvedAt = U.now();
            let u = !0;
            Rl(t, s, o, r) || (u = !1, (dt.instantAnimations || !a) && c ? .(Be(t, n, e)), t[0] = t[t.length - 1], yn(n), n.repeat = 0);
            const h = {
                    startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Ol ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                    finalKeyframe: e,
                    ...n,
                    keyframes: t
                },
                f = u && !l && Fl(h),
                m = h.motionValue ? .owner ? .current;
            let d;
            if (f) try {
                d = new El({ ...h,
                    element: m
                })
            } catch {
                d = new Qt(h)
            } else d = new Qt(h);
            d.finished.then(() => {
                this.notifyFinished()
            }).catch(H), this.pendingTimeline && (this.stopTimeline = d.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = d
        }
        get finished() {
            return this._animation ? this.animation.finished : this._finished
        }
        then(t, e) {
            return this.finished.finally(t).then(() => {})
        }
        get animation() {
            return this._animation || (this.keyframeResolver ? .resume(), Sl()), this._animation
        }
        get duration() {
            return this.animation.duration
        }
        get iterationDuration() {
            return this.animation.iterationDuration
        }
        get time() {
            return this.animation.time
        }
        set time(t) {
            this.animation.time = t
        }
        get speed() {
            return this.animation.speed
        }
        get state() {
            return this.animation.state
        }
        set speed(t) {
            this.animation.speed = t
        }
        get startTime() {
            return this.animation.startTime
        }
        attachTimeline(t) {
            return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
        }
        play() {
            this.animation.play()
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.complete()
        }
        cancel() {
            this._animation && this.animation.cancel(), this.keyframeResolver ? .cancel()
        }
    },
    Wl = class {
        constructor(t) {
            this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
        }
        get finished() {
            return Promise.all(this.animations.map(t => t.finished))
        }
        getAll(t) {
            return this.animations[0][t]
        }
        setAll(t, e) {
            for (let n = 0; n < this.animations.length; n++) this.animations[n][t] = e
        }
        attachTimeline(t) {
            const e = this.animations.map(n => n.attachTimeline(t));
            return () => {
                e.forEach((n, i) => {
                    n && n(), this.animations[i].stop()
                })
            }
        }
        get time() {
            return this.getAll("time")
        }
        set time(t) {
            this.setAll("time", t)
        }
        get speed() {
            return this.getAll("speed")
        }
        set speed(t) {
            this.setAll("speed", t)
        }
        get state() {
            return this.getAll("state")
        }
        get startTime() {
            return this.getAll("startTime")
        }
        get duration() {
            return ji(this.animations, "duration")
        }
        get iterationDuration() {
            return ji(this.animations, "iterationDuration")
        }
        runAll(t) {
            this.animations.forEach(e => e[t]())
        }
        play() {
            this.runAll("play")
        }
        pause() {
            this.runAll("pause")
        }
        cancel() {
            this.runAll("cancel")
        }
        complete() {
            this.runAll("complete")
        }
    };

function ji(t, e) {
    let n = 0;
    for (let i = 0; i < t.length; i++) {
        const s = t[i][e];
        s !== null && s > n && (n = s)
    }
    return n
}
var Nl = class extends Wl {
    then(t, e) {
        return this.finished.finally(t).then(() => {})
    }
};

function zr(t, e, n, i = 0, s = 1) {
    const o = Array.from(t).sort((l, c) => l.sortNodePosition(c)).indexOf(e),
        r = t.size,
        a = (r - 1) * i;
    return typeof n == "function" ? n(o, r) : s === 1 ? o * i : a - o * i
}
var Ul = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function $l(t) {
    const e = Ul.exec(t);
    if (!e) return [, ];
    const [, n, i, s] = e;
    return [`--${n??i}`, s]
}
var _l = 4;

function Hr(t, e, n = 1) {
    G(n <= _l, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [i, s] = $l(t);
    if (!i) return;
    const o = window.getComputedStyle(e).getPropertyValue(i);
    if (o) {
        const r = o.trim();
        return sr(r) ? parseFloat(r) : r
    }
    return Nn(s) ? Hr(s, e, n + 1) : s
}
var zl = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Hl = t => ({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Kl = {
        type: "keyframes",
        duration: .8
    },
    Gl = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Xl = (t, {
        keyframes: e
    }) => e.length > 2 ? Kl : It.has(t) ? t.startsWith("scale") ? Hl(e[1]) : zl : Gl;

function Jn(t, e) {
    if (t ? .inherit && e) {
        const {
            inherit: n,
            ...i
        } = t;
        return { ...e,
            ...i
        }
    }
    return t
}

function Qn(t, e) {
    const n = t ? .[e] ? ? t ? .default ? ? t;
    return n !== t ? Jn(n, t) : n
}
var Yl = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);

function ql(t) {
    for (const e in t)
        if (!Yl.has(e)) return !0;
    return !1
}
var ti = (t, e, n, i = {}, s, o) => r => {
    const a = Qn(i, t) || {},
        l = a.delay || i.delay || 0;
    let {
        elapsed: c = 0
    } = i;
    c = c - z(l);
    const u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: f => {
            e.set(f), a.onUpdate && a.onUpdate(f)
        },
        onComplete: () => {
            r(), a.onComplete && a.onComplete()
        },
        name: t,
        motionValue: e,
        element: o ? void 0 : s
    };
    ql(a) || Object.assign(u, Xl(t, u)), u.duration && (u.duration = z(u.duration)), u.repeatDelay && (u.repeatDelay = z(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
    let h = !1;
    if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (yn(u), u.delay === 0 && (h = !0)), (dt.instantAnimations || dt.skipAnimations || s ? .shouldSkipAnimations) && (h = !0, yn(u), u.delay = 0), u.allowFlatten = !a.type && !a.ease, h && !o && e.get() !== void 0) {
        const f = Be(u.keyframes, a);
        if (f !== void 0) {
            V.update(() => {
                u.onUpdate(f), u.onComplete()
            });
            return
        }
    }
    return a.isSync ? new Qt(u) : new jl(u)
};

function Wi(t) {
    const e = [{}, {}];
    return t ? .values.forEach((n, i) => {
        e[0][i] = n.get(), e[1][i] = n.getVelocity()
    }), e
}

function ei(t, e, n, i) {
    if (typeof e == "function") {
        const [s, o] = Wi(i);
        e = e(n !== void 0 ? n : t.custom, s, o)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
        const [s, o] = Wi(i);
        e = e(n !== void 0 ? n : t.custom, s, o)
    }
    return e
}

function St(t, e, n) {
    const i = t.getProps();
    return ei(i, e, n !== void 0 ? n : i.custom, t)
}
var Kr = new Set(["width", "height", "top", "left", "right", "bottom", ...kt]),
    Ni = 30,
    Zl = t => !isNaN(parseFloat(t)),
    zt = {
        current: void 0
    },
    Jl = class {
        constructor(t, e = {}) {
            this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = n => {
                const i = U.now();
                if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && (this.events.change ? .notify(this.current), this.dependents))
                    for (const s of this.dependents) s.dirty()
            }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
        }
        setCurrent(t) {
            this.current = t, this.updatedAt = U.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Zl(this.current))
        }
        setPrevFrameValue(t = this.current) {
            this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
        }
        onChange(t) {
            return this.on("change", t)
        }
        on(t, e) {
            this.events[t] || (this.events[t] = new Fn);
            const n = this.events[t].add(e);
            return t === "change" ? () => {
                n(), V.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : n
        }
        clearListeners() {
            for (const t in this.events) this.events[t].clear()
        }
        attach(t, e) {
            this.passiveEffect = t, this.stopPassiveEffect = e
        }
        set(t) {
            this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
        }
        setWithVelocity(t, e, n) {
            this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - n
        }
        jump(t, e = !0) {
            this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
            this.events.change ? .notify(this.current)
        }
        addDependent(t) {
            this.dependents || (this.dependents = new Set), this.dependents.add(t)
        }
        removeDependent(t) {
            this.dependents && this.dependents.delete(t)
        }
        get() {
            return zt.current && zt.current.push(this), this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            const t = U.now();
            if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Ni) return 0;
            const e = Math.min(this.updatedAt - this.prevUpdatedAt, Ni);
            return On(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
        }
        start(t) {
            return this.stop(), new Promise(e => {
                this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
            })
        }
        stop() {
            this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            delete this.animation
        }
        destroy() {
            this.dependents ? .clear(), this.events.destroy ? .notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
    };

function Z(t, e) {
    return new Jl(t, e)
}
var xn = t => Array.isArray(t);

function Ql(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Z(n))
}

function tu(t) {
    return xn(t) ? t[t.length - 1] || 0 : t
}

function ni(t, e) {
    let {
        transitionEnd: n = {},
        transition: i = {},
        ...s
    } = St(t, e) || {};
    s = { ...s,
        ...n
    };
    for (const o in s) Ql(t, o, tu(s[o]))
}
var k = t => !!(t && t.getVelocity);

function eu(t) {
    return !!(k(t) && t.add)
}

function wn(t, e) {
    const n = t.getValue("willChange");
    if (eu(n)) return n.add(e);
    if (!n && dt.WillChange) {
        const i = new dt.WillChange("auto");
        t.addValue("willChange", i), i.add(e)
    }
}

function ii(t) {
    return t.replace(/([A-Z])/g, e => `-${e.toLowerCase()}`)
}
var nu = "framerAppearId",
    Gr = "data-" + ii(nu);

function Xr(t) {
    return t.props[Gr]
}

function iu({
    protectedKeys: t,
    needsAnimating: e
}, n) {
    const i = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1, i
}

function si(t, e, {
    delay: n = 0,
    transitionOverride: i,
    type: s
} = {}) {
    let {
        transition: o,
        transitionEnd: r,
        ...a
    } = e;
    const l = t.getDefaultTransition();
    o = o ? Jn(o, l) : l;
    const c = o ? .reduceMotion;
    i && (o = i);
    const u = [],
        h = s && t.animationState && t.animationState.getState()[s];
    for (const f in a) {
        const m = t.getValue(f, t.latestValues[f] ? ? null),
            d = a[f];
        if (d === void 0 || h && iu(h, f)) continue;
        const y = {
                delay: n,
                ...Qn(o || {}, f)
            },
            v = m.get();
        if (v !== void 0 && !m.isAnimating() && !Array.isArray(d) && d === v && !y.velocity) {
            V.update(() => m.set(d));
            continue
        }
        let g = !1;
        if (window.MotionHandoffAnimation) {
            const w = Xr(t);
            if (w) {
                const P = window.MotionHandoffAnimation(w, f, V);
                P !== null && (y.startTime = P, g = !0)
            }
        }
        wn(t, f);
        const T = c ? ? t.shouldReduceMotion;
        m.start(ti(f, m, d, T && Kr.has(f) ? {
            type: !1
        } : y, t, g));
        const x = m.animation;
        x && u.push(x)
    }
    if (r) {
        const f = () => V.update(() => {
            r && ni(t, r)
        });
        u.length ? Promise.all(u).then(f) : f()
    }
    return u
}

function Tn(t, e, n = {}) {
    const i = St(t, e, n.type === "exit" ? t.presenceContext ? .custom : void 0);
    let {
        transition: s = t.getDefaultTransition() || {}
    } = i || {};
    n.transitionOverride && (s = n.transitionOverride);
    const o = i ? () => Promise.all(si(t, i, n)) : () => Promise.resolve(),
        r = t.variantChildren && t.variantChildren.size ? (l = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: u,
                staggerDirection: h
            } = s;
            return su(t, e, l, c, u, h, n)
        } : () => Promise.resolve(),
        {
            when: a
        } = s;
    if (a) {
        const [l, c] = a === "beforeChildren" ? [o, r] : [r, o];
        return l().then(() => c())
    } else return Promise.all([o(), r(n.delay)])
}

function su(t, e, n = 0, i = 0, s = 0, o = 1, r) {
    const a = [];
    for (const l of t.variantChildren) l.notify("AnimationStart", e), a.push(Tn(l, e, { ...r,
        delay: n + (typeof i == "function" ? 0 : i) + zr(t.variantChildren, l, i, s, o)
    }).then(() => l.notify("AnimationComplete", e)));
    return Promise.all(a)
}

function Yr(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const s = e.map(o => Tn(t, o, n));
        i = Promise.all(s)
    } else if (typeof e == "string") i = Tn(t, e, n);
    else {
        const s = typeof e == "function" ? St(t, e, n.custom) : e;
        i = Promise.all(si(t, s, n))
    }
    return i.then(() => {
        t.notify("AnimationComplete", e)
    })
}
var ru = {
        test: t => t === "auto",
        parse: t => t
    },
    qr = t => e => e.test(t),
    Zr = [Lt, S, lt, ht, Ba, Ia, ru],
    Ui = t => Zr.find(qr(t));

function ou(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || or(t) : !0
}
var au = new Set(["brightness", "contrast", "saturate", "opacity"]);

function lu(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [i] = n.match(Un) || [];
    if (!i) return t;
    const s = n.replace(i, "");
    let o = au.has(e) ? 1 : 0;
    return i !== n && (o *= 100), e + "(" + o + s + ")"
}
var uu = /\b([a-z-]*)\(.*?\)/gu,
    Sn = { ...et,
        getAnimatableNone: t => {
            const e = t.match(uu);
            return e ? e.map(lu).join(" ") : t
        }
    },
    bn = { ...et,
        getAnimatableNone: t => {
            const e = et.parse(t);
            return et.createTransformer(t)(e.map(n => typeof n == "number" ? 0 : typeof n == "object" ? { ...n,
                alpha: 1
            } : n))
        }
    },
    $i = { ...Lt,
        transform: Math.round
    },
    cu = {
        rotate: ht,
        rotateX: ht,
        rotateY: ht,
        rotateZ: ht,
        scale: fe,
        scaleX: fe,
        scaleY: fe,
        scaleZ: fe,
        skew: ht,
        skewX: ht,
        skewY: ht,
        distance: S,
        translateX: S,
        translateY: S,
        translateZ: S,
        x: S,
        y: S,
        z: S,
        perspective: S,
        transformPerspective: S,
        opacity: Zt,
        originX: Ci,
        originY: Ci,
        originZ: S
    },
    ri = {
        borderWidth: S,
        borderTopWidth: S,
        borderRightWidth: S,
        borderBottomWidth: S,
        borderLeftWidth: S,
        borderRadius: S,
        borderTopLeftRadius: S,
        borderTopRightRadius: S,
        borderBottomRightRadius: S,
        borderBottomLeftRadius: S,
        width: S,
        maxWidth: S,
        height: S,
        maxHeight: S,
        top: S,
        right: S,
        bottom: S,
        left: S,
        inset: S,
        insetBlock: S,
        insetBlockStart: S,
        insetBlockEnd: S,
        insetInline: S,
        insetInlineStart: S,
        insetInlineEnd: S,
        padding: S,
        paddingTop: S,
        paddingRight: S,
        paddingBottom: S,
        paddingLeft: S,
        paddingBlock: S,
        paddingBlockStart: S,
        paddingBlockEnd: S,
        paddingInline: S,
        paddingInlineStart: S,
        paddingInlineEnd: S,
        margin: S,
        marginTop: S,
        marginRight: S,
        marginBottom: S,
        marginLeft: S,
        marginBlock: S,
        marginBlockStart: S,
        marginBlockEnd: S,
        marginInline: S,
        marginInlineStart: S,
        marginInlineEnd: S,
        fontSize: S,
        backgroundPositionX: S,
        backgroundPositionY: S,
        ...cu,
        zIndex: $i,
        fillOpacity: Zt,
        strokeOpacity: Zt,
        numOctaves: $i
    },
    hu = { ...ri,
        color: j,
        backgroundColor: j,
        outlineColor: j,
        fill: j,
        stroke: j,
        borderColor: j,
        borderTopColor: j,
        borderRightColor: j,
        borderBottomColor: j,
        borderLeftColor: j,
        filter: Sn,
        WebkitFilter: Sn,
        mask: bn,
        WebkitMask: bn
    },
    Jr = t => hu[t],
    fu = new Set([Sn, bn]);

function Qr(t, e) {
    let n = Jr(t);
    return fu.has(n) || (n = et), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
var du = new Set(["auto", "none", "0"]);

function mu(t, e, n) {
    let i = 0,
        s;
    for (; i < t.length && !s;) {
        const o = t[i];
        typeof o == "string" && !du.has(o) && Dt(o).values.length && (s = t[i]), i++
    }
    if (s && n)
        for (const o of e) t[o] = Qr(n, s)
}
var pu = class extends Xn {
    constructor(t, e, n, i, s) {
        super(t, e, n, i, s, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: e,
            name: n
        } = this;
        if (!e || !e.current) return;
        super.readKeyframes();
        for (let a = 0; a < t.length; a++) {
            let l = t[a];
            if (typeof l == "string" && (l = l.trim(), Nn(l))) {
                const c = Hr(l, e.current);
                c !== void 0 && (t[a] = c), a === t.length - 1 && (this.finalKeyframe = l)
            }
        }
        if (this.resolveNoneKeyframes(), !Kr.has(n) || t.length !== 2) return;
        const [i, s] = t, o = Ui(i), r = Ui(s);
        if (Pi(i) !== Pi(s) && ft[n]) {
            this.needsMeasurement = !0;
            return
        }
        if (o !== r)
            if (Bi(o) && Bi(r))
                for (let a = 0; a < t.length; a++) {
                    const l = t[a];
                    typeof l == "string" && (t[a] = parseFloat(l))
                } else ft[n] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: e
        } = this, n = [];
        for (let i = 0; i < t.length; i++)(t[i] === null || ou(t[i])) && n.push(i);
        n.length && mu(t, n, e)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: e,
            name: n
        } = this;
        if (!t || !t.current) return;
        n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ft[n](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
        const i = e[e.length - 1];
        i !== void 0 && t.getValue(n, i).jump(i, !1)
    }
    measureEndState() {
        const {
            element: t,
            name: e,
            unresolvedKeyframes: n
        } = this;
        if (!t || !t.current) return;
        const i = t.getValue(e);
        i && i.jump(this.measuredOrigin, !1);
        const s = n.length - 1,
            o = n[s];
        n[s] = ft[e](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), this.removedTransforms ? .length && this.removedTransforms.forEach(([r, a]) => {
            t.getValue(r).set(a)
        }), this.resolveNoneKeyframes()
    }
};

function Fe(t, e, n) {
    if (t == null) return [];
    if (t instanceof EventTarget) return [t];
    if (typeof t == "string") {
        let i = document;
        e && (i = e.current);
        const s = n ? .[t] ? ? i.querySelectorAll(t);
        return s ? Array.from(s) : []
    }
    return Array.from(t).filter(i => i != null)
}
var to = (t, e) => e && typeof t == "number" ? e.transform(t) : t;

function Ht(t) {
    return rr(t) && "offsetHeight" in t && !("ownerSVGElement" in t)
}
var {
    schedule: oi,
    cancel: xd
} = wr(queueMicrotask, !1), tt = {
    x: !1,
    y: !1
};

function eo() {
    return tt.x || tt.y
}

function gu(t) {
    return t === "x" || t === "y" ? tt[t] ? null : (tt[t] = !0, () => {
        tt[t] = !1
    }) : tt.x || tt.y ? null : (tt.x = tt.y = !0, () => {
        tt.x = tt.y = !1
    })
}

function no(t, e) {
    const n = Fe(t),
        i = new AbortController,
        s = {
            passive: !0,
            ...e,
            signal: i.signal
        };
    return [n, s, () => i.abort()]
}

function vu(t) {
    return !(t.pointerType === "touch" || eo())
}

function yu(t, e, n = {}) {
    const [i, s, o] = no(t, n);
    return i.forEach(r => {
        let a = !1,
            l = !1,
            c;
        const u = () => {
                r.removeEventListener("pointerleave", d)
            },
            h = v => {
                c && (c(v), c = void 0), u()
            },
            f = v => {
                a = !1, window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), l && (l = !1, h(v))
            },
            m = () => {
                a = !0, window.addEventListener("pointerup", f, s), window.addEventListener("pointercancel", f, s)
            },
            d = v => {
                if (v.pointerType !== "touch") {
                    if (a) {
                        l = !0;
                        return
                    }
                    h(v)
                }
            },
            y = v => {
                if (!vu(v)) return;
                l = !1;
                const g = e(r, v);
                typeof g == "function" && (c = g, r.addEventListener("pointerleave", d, s))
            };
        r.addEventListener("pointerenter", y, s), r.addEventListener("pointerdown", m, s)
    }), o
}
var io = (t, e) => e ? t === e ? !0 : io(t, e.parentElement) : !1,
    ai = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1,
    xu = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function wu(t) {
    return xu.has(t.tagName) || t.isContentEditable === !0
}
var Tu = new Set(["INPUT", "SELECT", "TEXTAREA"]);

function Su(t) {
    return Tu.has(t.tagName) || t.isContentEditable === !0
}
var we = new WeakSet;

function _i(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}

function Ke(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
        isPrimary: !0,
        bubbles: !0
    }))
}
var bu = (t, e) => {
    const n = t.currentTarget;
    if (!n) return;
    const i = _i(() => {
        if (we.has(n)) return;
        Ke(n, "down");
        const s = _i(() => {
                Ke(n, "up")
            }),
            o = () => Ke(n, "cancel");
        n.addEventListener("keyup", s, e), n.addEventListener("blur", o, e)
    });
    n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e)
};

function zi(t) {
    return ai(t) && !eo()
}
var Hi = new WeakSet;

function Au(t, e, n = {}) {
    const [i, s, o] = no(t, n), r = a => {
        const l = a.currentTarget;
        if (!zi(a) || Hi.has(a)) return;
        we.add(l), n.stopPropagation && Hi.add(a);
        const c = e(l, a),
            u = (m, d) => {
                window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", f), we.has(l) && we.delete(l), zi(m) && typeof c == "function" && c(m, {
                    success: d
                })
            },
            h = m => {
                u(m, l === window || l === document || n.useGlobalTarget || io(l, m.target))
            },
            f = m => {
                u(m, !1)
            };
        window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", f, s)
    };
    return i.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, s), Ht(a) && (a.addEventListener("focus", l => bu(l, s)), !wu(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }), o
}

function Oe(t) {
    return rr(t) && "ownerSVGElement" in t
}
var Te = new WeakMap,
    Se, so = (t, e, n) => (i, s) => s && s[0] ? s[0][t + "Size"] : Oe(i) && "getBBox" in i ? i.getBBox()[e] : i[n],
    Pu = so("inline", "width", "offsetWidth"),
    Cu = so("block", "height", "offsetHeight");

function Vu({
    target: t,
    borderBoxSize: e
}) {
    Te.get(t) ? .forEach(n => {
        n(t, {
            get width() {
                return Pu(t, e)
            },
            get height() {
                return Cu(t, e)
            }
        })
    })
}

function Mu(t) {
    t.forEach(Vu)
}

function Eu() {
    typeof ResizeObserver > "u" || (Se = new ResizeObserver(Mu))
}

function Du(t, e) {
    Se || Eu();
    const n = Fe(t);
    return n.forEach(i => {
        let s = Te.get(i);
        s || (s = new Set, Te.set(i, s)), s.add(e), Se ? .observe(i)
    }), () => {
        n.forEach(i => {
            const s = Te.get(i);
            s ? .delete(e), s ? .size || Se ? .unobserve(i)
        })
    }
}
var be = new Set,
    Vt;

function Ru() {
    Vt = () => {
        const t = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        be.forEach(e => e(t))
    }, window.addEventListener("resize", Vt)
}

function Lu(t) {
    return be.add(t), Vt || Ru(), () => {
        be.delete(t), !be.size && typeof Vt == "function" && (window.removeEventListener("resize", Vt), Vt = void 0)
    }
}

function An(t, e) {
    return typeof t == "function" ? Lu(t) : Du(t, e)
}

function ro(t, e) {
    let n;
    const i = () => {
        const {
            currentTime: s
        } = e, o = (s === null ? 0 : s.value) / 100;
        n !== o && t(o), n = o
    };
    return V.preUpdate(i, !0), () => X(i)
}

function oo(t) {
    return Oe(t) && t.tagName === "svg"
}

function ku(t, e) {
    if (t === "first") return 0; {
        const n = e - 1;
        return t === "last" ? n : n / 2
    }
}

function wd(t = .1, {
    startDelay: e = 0,
    from: n = 0,
    ease: i
} = {}) {
    return (s, o) => {
        const r = typeof n == "number" ? n : ku(n, o);
        let a = t * Math.abs(r - s);
        if (i) {
            const l = o * t;
            a = on(i)(a / l) * l
        }
        return e + a
    }
}

function Iu(...t) {
    const e = !Array.isArray(t[0]),
        n = e ? 0 : -1,
        i = t[0 + n],
        s = t[1 + n],
        o = t[2 + n],
        r = t[3 + n],
        a = Hn(s, o, r);
    return e ? a(i) : a
}

function Bu(t, e, n = {}) {
    const i = t.get();
    let s = null,
        o = i,
        r;
    const a = typeof i == "string" ? i.replace(/[\d.-]/g, "") : void 0,
        l = () => {
            s && (s.stop(), s = null), t.animation = void 0
        },
        c = () => {
            const h = Ki(t.get()),
                f = Ki(o);
            if (h === f) {
                l();
                return
            }
            const m = s ? s.getGeneratorVelocity() : t.getVelocity();
            l(), s = new Qt({
                keyframes: [h, f],
                velocity: m,
                type: "spring",
                restDelta: .001,
                restSpeed: .01,
                ...n,
                onUpdate: r
            })
        },
        u = () => {
            c(), t.animation = s ? ? void 0, t.events.animationStart ? .notify(), s ? .then(() => {
                t.animation = void 0, t.events.animationComplete ? .notify()
            })
        };
    if (t.attach((h, f) => {
            o = h, r = m => f(Ge(m, a)), V.postRender(u)
        }, l), k(e)) {
        let h = n.skipInitialAnimation === !0;
        const f = e.on("change", d => {
                h ? (h = !1, t.jump(Ge(d, a), !1)) : t.set(Ge(d, a))
            }),
            m = t.on("destroy", f);
        return () => {
            f(), m()
        }
    }
    return l
}

function Ge(t, e) {
    return e ? t + e : t
}

function Ki(t) {
    return typeof t == "number" ? t : parseFloat(t)
}
var Fu = [...Zr, j, et],
    Ou = t => Fu.find(qr(t)),
    Gi = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Mt = () => ({
        x: Gi(),
        y: Gi()
    }),
    Xi = () => ({
        min: 0,
        max: 0
    }),
    O = () => ({
        x: Xi(),
        y: Xi()
    }),
    te = new WeakMap;

function je(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}

function ee(t) {
    return typeof t == "string" || Array.isArray(t)
}
var li = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    ui = ["initial", ...li];

function We(t) {
    return je(t.animate) || ui.some(e => ee(t[e]))
}

function ao(t) {
    return !!(We(t) || t.variants)
}

function ju(t, e, n) {
    for (const i in e) {
        const s = e[i],
            o = n[i];
        if (k(s)) t.addValue(i, s);
        else if (k(o)) t.addValue(i, Z(s, {
            owner: t
        }));
        else if (o !== s)
            if (t.hasValue(i)) {
                const r = t.getValue(i);
                r.liveStyle === !0 ? r.jump(s) : r.hasAnimated || r.set(s)
            } else {
                const r = t.getStaticValue(i);
                t.addValue(i, Z(r !== void 0 ? r : s, {
                    owner: t
                }))
            }
    }
    for (const i in n) e[i] === void 0 && t.removeValue(i);
    return e
}
var Me = {
        current: null
    },
    ci = {
        current: !1
    },
    Wu = typeof window < "u";

function lo() {
    if (ci.current = !0, !!Wu)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => Me.current = t.matches;
            t.addEventListener("change", e), e()
        } else Me.current = !1
}
var Yi = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    Ee = {};

function uo(t) {
    Ee = t
}

function Nu() {
    return Ee
}
var co = class {
        scrapeMotionValuesFromProps(t, e, n) {
            return {}
        }
        constructor({
            parent: t,
            props: e,
            presenceContext: n,
            reducedMotionConfig: i,
            skipAnimations: s,
            blockInitialAnimation: o,
            visualState: r
        }, a = {}) {
            this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = Xn, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                const f = U.now();
                this.renderScheduledAt < f && (this.renderScheduledAt = f, V.render(this.render, !1, !0))
            };
            const {
                latestValues: l,
                renderState: c
            } = r;
            this.latestValues = l, this.baseTarget = { ...l
            }, this.initialValues = e.initial ? { ...l
            } : {}, this.renderState = c, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.skipAnimationsConfig = s, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = We(e), this.isVariantNode = ao(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
            const {
                willChange: u,
                ...h
            } = this.scrapeMotionValuesFromProps(e, {}, this);
            for (const f in h) {
                const m = h[f];
                l[f] !== void 0 && k(m) && m.set(l[f])
            }
        }
        mount(t) {
            if (this.hasBeenMounted)
                for (const e in this.initialValues) this.values.get(e) ? .jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
            this.current = t, te.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, n) => this.bindToMotionValue(n, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (ci.current || lo(), this.shouldReduceMotion = Me.current), this.shouldSkipAnimations = this.skipAnimationsConfig ? ? !1, this.parent ? .addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
        }
        unmount() {
            this.projection && this.projection.unmount(), X(this.notifyUpdate), X(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent ? .removeChild(this);
            for (const t in this.events) this.events[t].clear();
            for (const t in this.features) {
                const e = this.features[t];
                e && (e.unmount(), e.isMounted = !1)
            }
            this.current = null
        }
        addChild(t) {
            this.children.add(t), this.enteringChildren ? ? (this.enteringChildren = new Set), this.enteringChildren.add(t)
        }
        removeChild(t) {
            this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
        }
        bindToMotionValue(t, e) {
            if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), e.accelerate && _r.has(t) && this.current instanceof HTMLElement) {
                const {
                    factory: o,
                    keyframes: r,
                    times: a,
                    ease: l,
                    duration: c
                } = e.accelerate, u = new Ur({
                    element: this.current,
                    name: t,
                    keyframes: r,
                    times: a,
                    ease: l,
                    duration: z(c)
                }), h = o(u);
                this.valueSubscriptions.set(t, () => {
                    h(), u.cancel()
                });
                return
            }
            const n = It.has(t);
            n && this.onBindTransform && this.onBindTransform();
            const i = e.on("change", o => {
                this.latestValues[t] = o, this.props.onUpdate && V.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
            });
            let s;
            typeof window < "u" && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                i(), s && s(), e.owner && e.stop()
            })
        }
        sortNodePosition(t) {
            return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
        }
        updateFeatures() {
            let t = "animation";
            for (t in Ee) {
                const e = Ee[t];
                if (!e) continue;
                const {
                    isEnabled: n,
                    Feature: i
                } = e;
                if (!this.features[t] && i && n(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                    const s = this.features[t];
                    s.isMounted ? s.update() : (s.mount(), s.isMounted = !0)
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : O()
        }
        getStaticValue(t) {
            return this.latestValues[t]
        }
        setStaticValue(t, e) {
            this.latestValues[t] = e
        }
        update(t, e) {
            (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
            for (let n = 0; n < Yi.length; n++) {
                const i = Yi[n];
                this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                const s = t["on" + i];
                s && (this.propEventSubscriptions[i] = this.on(i, s))
            }
            this.prevMotionValues = ju(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(t) {
            return this.props.variants ? this.props.variants[t] : void 0
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(t) {
            const e = this.getClosestVariantNode();
            if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
        }
        addValue(t, e) {
            const n = this.values.get(t);
            e !== n && (n && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
        }
        removeValue(t) {
            this.values.delete(t);
            const e = this.valueSubscriptions.get(t);
            e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
            return this.values.has(t)
        }
        getValue(t, e) {
            if (this.props.values && this.props.values[t]) return this.props.values[t];
            let n = this.values.get(t);
            return n === void 0 && e !== void 0 && (n = Z(e === null ? void 0 : e, {
                owner: this
            }), this.addValue(t, n)), n
        }
        readValue(t, e) {
            let n = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ? ? this.readValueFromInstance(this.current, t, this.options);
            return n != null && (typeof n == "string" && (sr(n) || or(n)) ? n = parseFloat(n) : !Ou(n) && et.test(e) && (n = Qr(t, e)), this.setBaseTarget(t, k(n) ? n.get() : n)), k(n) ? n.get() : n
        }
        setBaseTarget(t, e) {
            this.baseTarget[t] = e
        }
        getBaseTarget(t) {
            const {
                initial: e
            } = this.props;
            let n;
            if (typeof e == "string" || typeof e == "object") {
                const s = ei(this.props, e, this.presenceContext ? .custom);
                s && (n = s[t])
            }
            if (e && n !== void 0) return n;
            const i = this.getBaseTargetFromProps(this.props, t);
            return i !== void 0 && !k(i) ? i : this.initialValues[t] !== void 0 && n === void 0 ? void 0 : this.baseTarget[t]
        }
        on(t, e) {
            return this.events[t] || (this.events[t] = new Fn), this.events[t].add(e)
        }
        notify(t, ...e) {
            this.events[t] && this.events[t].notify(...e)
        }
        scheduleRenderMicrotask() {
            oi.render(this.render)
        }
    },
    ho = class extends co {
        constructor() {
            super(...arguments), this.KeyframeResolver = pu
        }
        sortInstanceNodePosition(t, e) {
            return t.compareDocumentPosition(e) & 2 ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
            const n = t.style;
            return n ? n[e] : void 0
        }
        removeValueFromRenderState(t, {
            vars: e,
            style: n
        }) {
            delete e[t], delete n[t]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            const {
                children: t
            } = this.props;
            k(t) && (this.childSubscription = t.on("change", e => {
                this.current && (this.current.textContent = `${e}`)
            }))
        }
    },
    mt = class {
        constructor(t) {
            this.isMounted = !1, this.node = t
        }
        update() {}
    };

function fo({
    top: t,
    left: e,
    right: n,
    bottom: i
}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: i
        }
    }
}

function Uu({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function $u(t, e) {
    if (!e) return t;
    const n = e({
            x: t.left,
            y: t.top
        }),
        i = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: i.y,
        right: i.x
    }
}

function Xe(t) {
    return t === void 0 || t === 1
}

function Pn({
    scale: t,
    scaleX: e,
    scaleY: n
}) {
    return !Xe(t) || !Xe(e) || !Xe(n)
}

function gt(t) {
    return Pn(t) || mo(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function mo(t) {
    return qi(t.x) || qi(t.y)
}

function qi(t) {
    return t && t !== "0%"
}

function De(t, e, n) {
    return n + e * (t - n)
}

function Zi(t, e, n, i, s) {
    return s !== void 0 && (t = De(t, s, i)), De(t, n, i) + e
}

function Cn(t, e = 0, n = 1, i, s) {
    t.min = Zi(t.min, e, n, i, s), t.max = Zi(t.max, e, n, i, s)
}

function po(t, {
    x: e,
    y: n
}) {
    Cn(t.x, e.translate, e.scale, e.originPoint), Cn(t.y, n.translate, n.scale, n.originPoint)
}
var Ji = .999999999999,
    Qi = 1.0000000000001;

function _u(t, e, n, i = !1) {
    const s = n.length;
    if (!s) return;
    e.x = e.y = 1;
    let o, r;
    for (let a = 0; a < s; a++) {
        o = n[a], r = o.projectionDelta;
        const {
            visualElement: l
        } = o.options;
        l && l.props.style && l.props.style.display === "contents" || (i && o.options.layoutScroll && o.scroll && o !== o.root && (ot(t.x, -o.scroll.offset.x), ot(t.y, -o.scroll.offset.y)), r && (e.x *= r.x.scale, e.y *= r.y.scale, po(t, r)), i && gt(o.latestValues) && Ae(t, o.latestValues, o.layout ? .layoutBox))
    }
    e.x < Qi && e.x > Ji && (e.x = 1), e.y < Qi && e.y > Ji && (e.y = 1)
}

function ot(t, e) {
    t.min += e, t.max += e
}

function ts(t, e, n, i, s = .5) {
    Cn(t, e, n, R(t.min, t.max, s), i)
}

function es(t, e) {
    return typeof t == "string" ? parseFloat(t) / 100 * (e.max - e.min) : t
}

function Ae(t, e, n) {
    const i = n ? ? t;
    ts(t.x, es(e.x, i.x), e.scaleX, e.scale, e.originX), ts(t.y, es(e.y, i.y), e.scaleY, e.scale, e.originY)
}

function go(t, e) {
    return fo($u(t.getBoundingClientRect(), e))
}

function zu(t, e, n) {
    const i = go(t, n),
        {
            scroll: s
        } = e;
    return s && (ot(i.x, s.offset.x), ot(i.y, s.offset.y)), i
}
var Hu = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Ku = kt.length;

function Gu(t, e, n) {
    let i = "",
        s = !0;
    for (let o = 0; o < Ku; o++) {
        const r = kt[o],
            a = t[r];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number") l = a === (r.startsWith("scale") ? 1 : 0);
        else {
            const c = parseFloat(a);
            l = r.startsWith("scale") ? c === 1 : c === 0
        }
        if (!l || n) {
            const c = to(a, ri[r]);
            if (!l) {
                s = !1;
                const u = Hu[r] || r;
                i += `${u}(${c}) `
            }
            n && (e[r] = c)
        }
    }
    return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i
}

function hi(t, e, n) {
    const {
        style: i,
        vars: s,
        transformOrigin: o
    } = t;
    let r = !1,
        a = !1;
    for (const l in e) {
        const c = e[l];
        if (It.has(l)) {
            r = !0;
            continue
        } else if (Sr(l)) {
            s[l] = c;
            continue
        } else {
            const u = to(c, ri[l]);
            l.startsWith("origin") ? (a = !0, o[l] = u) : i[l] = u
        }
    }
    if (e.transform || (r || n ? i.transform = Gu(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
        const {
            originX: l = "50%",
            originY: c = "50%",
            originZ: u = 0
        } = o;
        i.transformOrigin = `${l} ${c} ${u}`
    }
}

function vo(t, {
    style: e,
    vars: n
}, i, s) {
    const o = t.style;
    let r;
    for (r in e) o[r] = e[r];
    s ? .applyProjectionStyles(o, i);
    for (r in n) o.setProperty(r, n[r])
}

function ns(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
var jt = {
        correct: (t, e) => {
            if (!e.target) return t;
            if (typeof t == "string")
                if (S.test(t)) t = parseFloat(t);
                else return t;
            return `${ns(t,e.target.x)}% ${ns(t,e.target.y)}%`
        }
    },
    Xu = {
        correct: (t, {
            treeScale: e,
            projectionDelta: n
        }) => {
            const i = t,
                s = et.parse(t);
            if (s.length > 5) return i;
            const o = et.createTransformer(t),
                r = typeof s[0] != "number" ? 1 : 0,
                a = n.x.scale * e.x,
                l = n.y.scale * e.y;
            s[0 + r] /= a, s[1 + r] /= l;
            const c = R(a, l, .5);
            return typeof s[2 + r] == "number" && (s[2 + r] /= c), typeof s[3 + r] == "number" && (s[3 + r] /= c), o(s)
        }
    },
    Vn = {
        borderRadius: { ...jt,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: jt,
        borderTopRightRadius: jt,
        borderBottomLeftRadius: jt,
        borderBottomRightRadius: jt,
        boxShadow: Xu
    };

function yo(t, {
    layout: e,
    layoutId: n
}) {
    return It.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Vn[t] || t === "opacity")
}

function fi(t, e, n) {
    const i = t.style,
        s = e ? .style,
        o = {};
    if (!i) return o;
    for (const r in i)(k(i[r]) || s && k(s[r]) || yo(r, t) || n ? .getValue(r) ? .liveStyle !== void 0) && (o[r] = i[r]);
    return o
}

function Yu(t) {
    return window.getComputedStyle(t)
}
var xo = class extends ho {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = vo
    }
    readValueFromInstance(t, e) {
        if (It.has(e)) return this.projection ? .isProjecting ? dn(e) : vl(t, e); {
            const n = Yu(t),
                i = (Sr(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: e
    }) {
        return go(t, e)
    }
    build(t, e, n) {
        hi(t, e, n.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, e, n) {
        return fi(t, e, n)
    }
};

function qu(t, e) {
    return t in e
}
var Zu = class extends co {
        constructor() {
            super(...arguments), this.type = "object"
        }
        readValueFromInstance(t, e) {
            if (qu(e, t)) {
                const n = t[e];
                if (typeof n == "string" || typeof n == "number") return n
            }
        }
        getBaseTargetFromProps() {}
        removeValueFromRenderState(t, e) {
            delete e.output[t]
        }
        measureInstanceViewportBox() {
            return O()
        }
        build(t, e) {
            Object.assign(t.output, e)
        }
        renderInstance(t, {
            output: e
        }) {
            Object.assign(t, e)
        }
        sortInstanceNodePosition() {
            return 0
        }
    },
    Ju = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Qu = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function tc(t, e, n = 1, i = 0, s = !0) {
    t.pathLength = 1;
    const o = s ? Ju : Qu;
    t[o.offset] = `${-i}`, t[o.array] = `${e} ${n}`
}
var ec = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

function wo(t, {
    attrX: e,
    attrY: n,
    attrScale: i,
    pathLength: s,
    pathSpacing: o = 1,
    pathOffset: r = 0,
    ...a
}, l, c, u) {
    if (hi(t, a, c), l) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style, t.style = {};
    const {
        attrs: h,
        style: f
    } = t;
    h.transform && (f.transform = h.transform, delete h.transform), (f.transform || h.transformOrigin) && (f.transformOrigin = h.transformOrigin ? ? "50% 50%", delete h.transformOrigin), f.transform && (f.transformBox = u ? .transformBox ? ? "fill-box", delete h.transformBox);
    for (const m of ec) h[m] !== void 0 && (f[m] = h[m], delete h[m]);
    e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), i !== void 0 && (h.scale = i), s !== void 0 && tc(h, s, o, r, !1)
}
var To = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
    So = t => typeof t == "string" && t.toLowerCase() === "svg";

function nc(t, e, n, i) {
    vo(t, e, void 0, i);
    for (const s in e.attrs) t.setAttribute(To.has(s) ? s : ii(s), e.attrs[s])
}

function bo(t, e, n) {
    const i = fi(t, e, n);
    for (const s in t)
        if (k(t[s]) || k(e[s])) {
            const o = kt.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
            i[o] = t[s]
        }
    return i
}
var Ao = class extends ho {
        constructor() {
            super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = O
        }
        getBaseTargetFromProps(t, e) {
            return t[e]
        }
        readValueFromInstance(t, e) {
            if (It.has(e)) {
                const n = Jr(e);
                return n && n.default || 0
            }
            return e = To.has(e) ? e : ii(e), t.getAttribute(e)
        }
        scrapeMotionValuesFromProps(t, e, n) {
            return bo(t, e, n)
        }
        build(t, e, n) {
            wo(t, e, this.isSVGTag, n.transformTemplate, n.style)
        }
        renderInstance(t, e, n, i) {
            nc(t, e, n, i)
        }
        mount(t) {
            this.isSVGTag = So(t.tagName), super.mount(t)
        }
    },
    ic = ui.length;

function Po(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
        const n = t.parent ? Po(t.parent) || {} : {};
        return t.props.initial !== void 0 && (n.initial = t.props.initial), n
    }
    const e = {};
    for (let n = 0; n < ic; n++) {
        const i = ui[n],
            s = t.props[i];
        (ee(s) || s === !1) && (e[i] = s)
    }
    return e
}

function Co(t, e) {
    if (!Array.isArray(e)) return !1;
    const n = e.length;
    if (n !== t.length) return !1;
    for (let i = 0; i < n; i++)
        if (e[i] !== t[i]) return !1;
    return !0
}
var sc = [...li].reverse(),
    rc = li.length;

function oc(t) {
    return e => Promise.all(e.map(({
        animation: n,
        options: i
    }) => Yr(t, n, i)))
}

function ac(t) {
    let e = oc(t),
        n = is(),
        i = !0,
        s = !1;
    const o = c => (u, h) => {
        const f = St(t, h, c === "exit" ? t.presenceContext ? .custom : void 0);
        if (f) {
            const {
                transition: m,
                transitionEnd: d,
                ...y
            } = f;
            u = { ...u,
                ...y,
                ...d
            }
        }
        return u
    };

    function r(c) {
        e = c(t)
    }

    function a(c) {
        const {
            props: u
        } = t, h = Po(t.parent) || {}, f = [], m = new Set;
        let d = {},
            y = 1 / 0;
        for (let g = 0; g < rc; g++) {
            const T = sc[g],
                x = n[T],
                w = u[T] !== void 0 ? u[T] : h[T],
                P = ee(w),
                M = T === c ? x.isActive : null;
            M === !1 && (y = g);
            let D = w === h[T] && w !== u[T] && P;
            if (D && (i || s) && t.manuallyAnimateOnMount && (D = !1), x.protectedKeys = { ...d
                }, !x.isActive && M === null || !w && !x.prevProp || je(w) || typeof w == "boolean") continue;
            if (T === "exit" && x.isActive && M !== !0) {
                x.prevResolvedValues && (d = { ...d,
                    ...x.prevResolvedValues
                });
                continue
            }
            const A = lc(x.prevProp, w);
            let b = A || T === c && x.isActive && !D && P || g > y && P,
                C = !1;
            const E = Array.isArray(w) ? w : [w];
            let F = E.reduce(o(T), {});
            M === !1 && (F = {});
            const {
                prevResolvedValues: N = {}
            } = x, J = { ...N,
                ...F
            }, it = L => {
                b = !0, m.has(L) && (C = !0, m.delete(L)), x.needsAnimating[L] = !0;
                const B = t.getValue(L);
                B && (B.liveStyle = !1)
            };
            for (const L in J) {
                const B = F[L],
                    st = N[L];
                if (d.hasOwnProperty(L)) continue;
                let ut = !1;
                xn(B) && xn(st) ? ut = !Co(B, st) : ut = B !== st, ut ? B != null ? it(L) : m.add(L) : B !== void 0 && m.has(L) ? it(L) : x.protectedKeys[L] = !0
            }
            x.prevProp = w, x.prevResolvedValues = F, x.isActive && (d = { ...d,
                ...F
            }), (i || s) && t.blockInitialAnimation && (b = !1);
            const Y = D && A;
            b && (!Y || C) && f.push(...E.map(L => {
                const B = {
                    type: T
                };
                if (typeof L == "string" && (i || s) && !Y && t.manuallyAnimateOnMount && t.parent) {
                    const {
                        parent: st
                    } = t, ut = St(st, L);
                    if (st.enteringChildren && ut) {
                        const {
                            delayChildren: le
                        } = ut.transition || {};
                        B.delay = zr(st.enteringChildren, t, le)
                    }
                }
                return {
                    animation: L,
                    options: B
                }
            }))
        }
        if (m.size) {
            const g = {};
            if (typeof u.initial != "boolean") {
                const T = St(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                T && T.transition && (g.transition = T.transition)
            }
            m.forEach(T => {
                const x = t.getBaseTarget(T),
                    w = t.getValue(T);
                w && (w.liveStyle = !0), g[T] = x ? ? null
            }), f.push({
                animation: g
            })
        }
        let v = !!f.length;
        return i && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (v = !1), i = !1, s = !1, v ? e(f) : Promise.resolve()
    }

    function l(c, u) {
        if (n[c].isActive === u) return Promise.resolve();
        t.variantChildren ? .forEach(f => f.animationState ? .setActive(c, u)), n[c].isActive = u;
        const h = a(c);
        for (const f in n) n[f].protectedKeys = {};
        return h
    }
    return {
        animateChanges: a,
        setActive: l,
        setAnimateFunction: r,
        getState: () => n,
        reset: () => {
            n = is(), s = !0
        }
    }
}

function lc(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !Co(e, t) : !1
}

function pt(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function is() {
    return {
        animate: pt(!0),
        whileInView: pt(),
        whileHover: pt(),
        whileTap: pt(),
        whileDrag: pt(),
        whileFocus: pt(),
        exit: pt()
    }
}

function Mn(t, e) {
    t.min = e.min, t.max = e.max
}

function Q(t, e) {
    Mn(t.x, e.x), Mn(t.y, e.y)
}

function ss(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}
var uc = .9999,
    cc = 1.0001,
    hc = -.01,
    fc = .01;

function $(t) {
    return t.max - t.min
}

function dc(t, e, n) {
    return Math.abs(t - e) <= n
}

function rs(t, e, n, i = .5) {
    t.origin = i, t.originPoint = R(e.min, e.max, t.origin), t.scale = $(n) / $(e), t.translate = R(n.min, n.max, t.origin) - t.originPoint, (t.scale >= uc && t.scale <= cc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= hc && t.translate <= fc || isNaN(t.translate)) && (t.translate = 0)
}

function Kt(t, e, n, i) {
    rs(t.x, e.x, n.x, i ? i.originX : void 0), rs(t.y, e.y, n.y, i ? i.originY : void 0)
}

function os(t, e, n, i = 0) {
    t.min = (i ? R(n.min, n.max, i) : n.min) + e.min, t.max = t.min + $(e)
}

function mc(t, e, n, i) {
    os(t.x, e.x, n.x, i ? .x), os(t.y, e.y, n.y, i ? .y)
}

function as(t, e, n, i = 0) {
    const s = i ? R(n.min, n.max, i) : n.min;
    t.min = e.min - s, t.max = t.min + $(e)
}

function Re(t, e, n, i) {
    as(t.x, e.x, n.x, i ? .x), as(t.y, e.y, n.y, i ? .y)
}

function ls(t, e, n, i, s) {
    return t -= e, t = De(t, 1 / n, i), s !== void 0 && (t = De(t, 1 / s, i)), t
}

function pc(t, e = 0, n = 1, i = .5, s, o = t, r = t) {
    if (lt.test(e) && (e = parseFloat(e), e = R(r.min, r.max, e / 100) - r.min), typeof e != "number") return;
    let a = R(o.min, o.max, i);
    t === o && (a -= e), t.min = ls(t.min, e, n, a, s), t.max = ls(t.max, e, n, a, s)
}

function us(t, e, [n, i, s], o, r) {
    pc(t, e[n], e[i], e[s], e.scale, o, r)
}
var gc = ["x", "scaleX", "originX"],
    vc = ["y", "scaleY", "originY"];

function cs(t, e, n, i) {
    us(t.x, e, gc, n ? n.x : void 0, i ? i.x : void 0), us(t.y, e, vc, n ? n.y : void 0, i ? i.y : void 0)
}

function hs(t) {
    return t.translate === 0 && t.scale === 1
}

function Vo(t) {
    return hs(t.x) && hs(t.y)
}

function fs(t, e) {
    return t.min === e.min && t.max === e.max
}

function yc(t, e) {
    return fs(t.x, e.x) && fs(t.y, e.y)
}

function ds(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function Mo(t, e) {
    return ds(t.x, e.x) && ds(t.y, e.y)
}

function ms(t) {
    return $(t.x) / $(t.y)
}

function ps(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}

function rt(t) {
    return [t("x"), t("y")]
}

function xc(t, e, n) {
    let i = "";
    const s = t.x.translate / e.x,
        o = t.y.translate / e.y,
        r = n ? .z || 0;
    if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1/e.x}, ${1/e.y}) `), n) {
        const {
            transformPerspective: c,
            rotate: u,
            rotateX: h,
            rotateY: f,
            skewX: m,
            skewY: d
        } = n;
        c && (i = `perspective(${c}px) ${i}`), u && (i += `rotate(${u}deg) `), h && (i += `rotateX(${h}deg) `), f && (i += `rotateY(${f}deg) `), m && (i += `skewX(${m}deg) `), d && (i += `skewY(${d}deg) `)
    }
    const a = t.x.scale * e.x,
        l = t.y.scale * e.y;
    return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none"
}
var Eo = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
    wc = Eo.length,
    gs = t => typeof t == "string" ? parseFloat(t) : t,
    vs = t => typeof t == "number" || S.test(t);

function Tc(t, e, n, i, s, o) {
    s ? (t.opacity = R(0, n.opacity ? ? 1, Sc(i)), t.opacityExit = R(e.opacity ? ? 1, 0, bc(i))) : o && (t.opacity = R(e.opacity ? ? 1, n.opacity ? ? 1, i));
    for (let r = 0; r < wc; r++) {
        const a = Eo[r];
        let l = ys(e, a),
            c = ys(n, a);
        l === void 0 && c === void 0 || (l || (l = 0), c || (c = 0), l === 0 || c === 0 || vs(l) === vs(c) ? (t[a] = Math.max(R(gs(l), gs(c), i), 0), (lt.test(c) || lt.test(l)) && (t[a] += "%")) : t[a] = c)
    }(e.rotate || n.rotate) && (t.rotate = R(e.rotate || 0, n.rotate || 0, i))
}

function ys(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
var Sc = Do(0, .5, mr),
    bc = Do(.5, .95, H);

function Do(t, e, n) {
    return i => i < t ? 0 : i > e ? 1 : n(bt(t, e, i))
}

function Ro(t, e, n) {
    const i = k(t) ? t : Z(t);
    return i.start(ti("", i, e, n)), i.animation
}

function ne(t, e, n, i = {
    passive: !0
}) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n)
}
var Ac = (t, e) => t.depth - e.depth,
    Pc = class {
        constructor() {
            this.children = [], this.isDirty = !1
        }
        add(t) {
            Bn(this.children, t), this.isDirty = !0
        }
        remove(t) {
            Et(this.children, t), this.isDirty = !0
        }
        forEach(t) {
            this.isDirty && this.children.sort(Ac), this.isDirty = !1, this.children.forEach(t)
        }
    };

function Cc(t, e) {
    const n = U.now(),
        i = ({
            timestamp: s
        }) => {
            const o = s - n;
            o >= e && (X(i), t(o - e))
        };
    return V.setup(i, !0), () => X(i)
}

function Pe(t) {
    return k(t) ? t.get() : t
}
var Vc = class {
        constructor() {
            this.members = []
        }
        add(t) {
            Bn(this.members, t);
            for (let e = this.members.length - 1; e >= 0; e--) {
                const n = this.members[e];
                if (n === t || n === this.lead || n === this.prevLead) continue;
                const i = n.instance;
                (!i || i.isConnected === !1) && !n.snapshot && (Et(this.members, n), n.unmount())
            }
            t.scheduleRender()
        }
        remove(t) {
            if (Et(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                const e = this.members[this.members.length - 1];
                e && this.promote(e)
            }
        }
        relegate(t) {
            for (let e = this.members.indexOf(t) - 1; e >= 0; e--) {
                const n = this.members[e];
                if (n.isPresent !== !1 && n.instance ? .isConnected !== !1) return this.promote(n), !0
            }
            return !1
        }
        promote(t, e) {
            const n = this.lead;
            if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
                n.updateSnapshot(), t.scheduleRender();
                const {
                    layoutDependency: i
                } = n.options, {
                    layoutDependency: s
                } = t.options;
                (i === void 0 || i !== s) && (t.resumeFrom = n, e && (n.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root ? .isUpdating && (t.isLayoutDirty = !0)), t.options.crossfade === !1 && n.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach(t => {
                t.options.onExitComplete ? .(), t.resumingFrom ? .options.onExitComplete ? .()
            })
        }
        scheduleRender() {
            this.members.forEach(t => t.instance && t.scheduleRender(!1))
        }
        removeLeadSnapshot() {
            this.lead ? .snapshot && (this.lead.snapshot = void 0)
        }
    },
    Ce = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    },
    vt = {
        nodes: 0,
        calculatedTargetDeltas: 0,
        calculatedProjections: 0
    },
    Ye = ["", "X", "Y", "Z"],
    Mc = 1e3,
    Ec = 0;

function qe(t, e, n, i) {
    const {
        latestValues: s
    } = e;
    s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0))
}

function Lo(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
    const {
        visualElement: e
    } = t.options;
    if (!e) return;
    const n = Xr(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: s,
            layoutId: o
        } = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", V, !(s || o))
    }
    const {
        parent: i
    } = t;
    i && !i.hasCheckedOptimisedAppear && Lo(i)
}

function ko({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: n,
    checkIsScrollRoot: i,
    resetTransform: s
}) {
    return class {
        constructor(r = {}, a = e ? .()) {
            this.id = Ec++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, at.value && (vt.nodes = vt.calculatedTargetDeltas = vt.calculatedProjections = 0), this.nodes.forEach(Lc), this.nodes.forEach(jc), this.nodes.forEach(Wc), this.nodes.forEach(kc), at.addProjectionMetrics && at.addProjectionMetrics(vt)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Pc)
        }
        addEventListener(r, a) {
            return this.eventHandlers.has(r) || this.eventHandlers.set(r, new Fn), this.eventHandlers.get(r).add(a)
        }
        notifyListeners(r, ...a) {
            const l = this.eventHandlers.get(r);
            l && l.notify(...a)
        }
        hasListeners(r) {
            return this.eventHandlers.has(r)
        }
        mount(r) {
            if (this.instance) return;
            this.isSVG = Oe(r) && !oo(r), this.instance = r;
            const {
                layoutId: a,
                layout: l,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), t) {
                let u, h = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                V.read(() => {
                    h = window.innerWidth
                }), t(r, () => {
                    const m = window.innerWidth;
                    m !== h && (h = m, this.root.updateBlockedByResize = !0, u && u(), u = Cc(f, 250), Ce.hasAnimatedSinceResize && (Ce.hasAnimatedSinceResize = !1, this.nodes.forEach(Ts)))
                })
            }
            a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || l) && this.addEventListener("didUpdate", ({
                delta: u,
                hasLayoutChanged: h,
                hasRelativeLayoutChanged: f,
                layout: m
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const d = this.options.transition || c.getDefaultTransition() || zc,
                    {
                        onLayoutAnimationStart: y,
                        onLayoutAnimationComplete: v
                    } = c.getProps(),
                    g = !this.targetLayout || !Mo(this.targetLayout, m),
                    T = !h && f;
                if (this.options.layoutRoot || this.resumeFrom || T || h && (g || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const x = { ...Qn(d, "layout"),
                        onPlay: y,
                        onComplete: v
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x), this.setAnimationOrigin(u, T)
                } else h || Ts(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = m
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const r = this.getStack();
            r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), X(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Nc), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: r
            } = this.options;
            return r && r.getProps().transformTemplate
        }
        willUpdate(r = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Lo(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                const h = this.path[u];
                h.shouldResetTransform = !0, (typeof h.latestValues.x == "string" || typeof h.latestValues.y == "string") && (h.isLayoutDirty = !0), h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                const a = this.updateBlockedByResize;
                this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), a && this.nodes.forEach(Bc), this.nodes.forEach(xs);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(ws);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Fc), this.nodes.forEach(Oc), this.nodes.forEach(Dc), this.nodes.forEach(Rc)) : this.nodes.forEach(ws), this.clearAllSnapshots();
            const r = U.now();
            W.delta = nt(0, 1e3 / 60, r - W.timestamp), W.timestamp = r, W.isProcessing = !0, Ue.update.process(W), Ue.preRender.process(W), Ue.render.process(W), W.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, oi.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Ic), this.sharedNodes.forEach(Uc)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, V.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            V.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !$(this.snapshot.measuredBox.x) && !$(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const r = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = O()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0)
        }
        updateScroll(r = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a && this.instance) {
                const l = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: r,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!s) return;
            const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !Vo(this.projectionDelta),
                l = this.getTransformTemplate(),
                c = l ? l(this.latestValues, "") : void 0,
                u = c !== this.prevTransformTemplateValue;
            r && this.instance && (a || gt(this.latestValues) || u) && (s(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(r = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return r && (l = this.removeTransform(l)), Hc(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: r
            } = this.options;
            if (!r) return O();
            const a = r.measureViewportBox();
            if (!(this.scroll ? .wasRoot || this.path.some(Kc))) {
                const {
                    scroll: l
                } = this.root;
                l && (ot(a.x, l.offset.x), ot(a.y, l.offset.y))
            }
            return a
        }
        removeElementScroll(r) {
            const a = O();
            if (Q(a, r), this.scroll ? .wasRoot) return a;
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l],
                    {
                        scroll: u,
                        options: h
                    } = c;
                c !== this.root && u && h.layoutScroll && (u.wasRoot && Q(a, r), ot(a.x, u.offset.x), ot(a.y, u.offset.y))
            }
            return a
        }
        applyTransform(r, a = !1, l) {
            const c = l || O();
            Q(c, r);
            for (let u = 0; u < this.path.length; u++) {
                const h = this.path[u];
                !a && h.options.layoutScroll && h.scroll && h !== h.root && (ot(c.x, -h.scroll.offset.x), ot(c.y, -h.scroll.offset.y)), gt(h.latestValues) && Ae(c, h.latestValues, h.layout ? .layoutBox)
            }
            return gt(this.latestValues) && Ae(c, this.latestValues, this.layout ? .layoutBox), c
        }
        removeTransform(r) {
            const a = O();
            Q(a, r);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l];
                if (!gt(c.latestValues)) continue;
                let u;
                c.instance && (Pn(c.latestValues) && c.updateSnapshot(), u = O(), Q(u, c.measurePageBox())), cs(a, c.latestValues, c.snapshot ? .layoutBox, u)
            }
            return gt(this.latestValues) && cs(a, this.latestValues), a
        }
        setTargetDelta(r) {
            this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(r) {
            this.options = { ...this.options,
                ...r,
                crossfade: r.crossfade !== void 0 ? r.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== W.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(r = !1) {
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ? .isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: c,
                layoutId: u
            } = this.options;
            if (!this.layout || !(c || u)) return;
            this.resolvedRelativeTargetAt = W.timestamp;
            const h = this.getClosestProjectingParent();
            h && this.linkedParentVersion !== h.layoutVersion && !h.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && h && h.layout ? this.createRelativeTarget(h, this.layout.layoutBox, h.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = O(), this.targetWithTransforms = O()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), mc(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Q(this.target, this.layout.layoutBox), po(this.target, this.targetDelta)) : Q(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? this.createRelativeTarget(h, this.target, h.target) : this.relativeParent = this.relativeTarget = void 0), at.value && vt.calculatedTargetDeltas++)
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Pn(this.parent.latestValues) || mo(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(r, a, l) {
            this.relativeParent = r, this.linkedParentVersion = r.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = O(), this.relativeTargetOrigin = O(), Re(this.relativeTargetOrigin, a, l, this.options.layoutAnchor || void 0), Q(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            const r = this.getLead(),
                a = !!this.resumingFrom || this !== r;
            let l = !0;
            if ((this.isProjectionDirty || this.parent ? .isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === W.timestamp && (l = !1), l) return;
            const {
                layout: c,
                layoutId: u
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || u)) return;
            Q(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x,
                f = this.treeScale.y;
            _u(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = O());
            const {
                target: m
            } = r;
            if (!m) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ss(this.prevProjectionDelta.x, this.projectionDelta.x), ss(this.prevProjectionDelta.y, this.projectionDelta.y)), Kt(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== f || !ps(this.projectionDelta.x, this.prevProjectionDelta.x) || !ps(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), at.value && vt.calculatedProjections++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(r = !0) {
            if (this.options.visualElement ? .scheduleRender(), r) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Mt(), this.projectionDelta = Mt(), this.projectionDeltaWithTransform = Mt()
        }
        setAnimationOrigin(r, a = !1) {
            const l = this.snapshot,
                c = l ? l.latestValues : {},
                u = { ...this.latestValues
                },
                h = Mt();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const f = O(),
                m = (l ? l.source : void 0) !== (this.layout ? this.layout.source : void 0),
                d = this.getStack(),
                y = !d || d.members.length <= 1,
                v = !!(m && !y && this.options.crossfade === !0 && !this.path.some(_c));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = T => {
                const x = T / 1e3;
                Ss(h.x, r.x, x), Ss(h.y, r.y, x), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Re(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), $c(this.relativeTarget, this.relativeTargetOrigin, f, x), g && yc(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = O()), Q(g, this.relativeTarget)), m && (this.animationValues = u, Tc(u, c, this.latestValues, x, v, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = x
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(r) {
            this.notifyListeners("animationStart"), this.currentAnimation ? .stop(), this.resumingFrom ? .currentAnimation ? .stop(), this.pendingAnimation && (X(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.update(() => {
                Ce.hasAnimatedSinceResize = !0, wt.layout++, this.motionValue || (this.motionValue = Z(0)), this.motionValue.jump(0, !1), this.currentAnimation = Ro(this.motionValue, [0, 1e3], { ...r,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: a => {
                        this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a)
                    },
                    onStop: () => {
                        wt.layout--
                    },
                    onComplete: () => {
                        wt.layout--, r.onComplete && r.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const r = this.getStack();
            r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Mc), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const r = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: c,
                latestValues: u
            } = r;
            if (!(!a || !l || !c)) {
                if (this !== r && this.layout && c && Io(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || O();
                    const h = $(this.layout.layoutBox.x);
                    l.x.min = r.target.x.min, l.x.max = l.x.min + h;
                    const f = $(this.layout.layoutBox.y);
                    l.y.min = r.target.y.min, l.y.max = l.y.min + f
                }
                Q(a, l), Ae(a, u), Kt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u)
            }
        }
        registerSharedNode(r, a) {
            this.sharedNodes.has(r) || this.sharedNodes.set(r, new Vc), this.sharedNodes.get(r).add(a);
            const l = a.options.initialPromotionConfig;
            a.promote({
                transition: l ? l.transition : void 0,
                preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const r = this.getStack();
            return r ? r.lead === this : !0
        }
        getLead() {
            const {
                layoutId: r
            } = this.options;
            return r ? this.getStack() ? .lead || this : this
        }
        getPrevLead() {
            const {
                layoutId: r
            } = this.options;
            return r ? this.getStack() ? .prevLead : void 0
        }
        getStack() {
            const {
                layoutId: r
            } = this.options;
            if (r) return this.root.sharedNodes.get(r)
        }
        promote({
            needsReset: r,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const c = this.getStack();
            c && c.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const r = this.getStack();
            return r ? r.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: r
            } = this.options;
            if (!r) return;
            let a = !1;
            const {
                latestValues: l
            } = r;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const c = {};
            l.z && qe("z", r, c, this.animationValues);
            for (let u = 0; u < Ye.length; u++) qe(`rotate${Ye[u]}`, r, c, this.animationValues), qe(`skew${Ye[u]}`, r, c, this.animationValues);
            r.render();
            for (const u in c) r.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
            r.scheduleRender()
        }
        applyProjectionStyles(r, a) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                r.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, r.visibility = "", r.opacity = "", r.pointerEvents = Pe(a ? .pointerEvents) || "", r.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const c = this.getLead();
            if (!this.projectionDelta || !this.layout || !c.target) {
                this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = Pe(a ? .pointerEvents) || ""), this.hasProjected && !gt(this.latestValues) && (r.transform = l ? l({}, "") : "none", this.hasProjected = !1);
                return
            }
            r.visibility = "";
            const u = c.animationValues || c.latestValues;
            this.applyTransformsToTarget();
            let h = xc(this.projectionDeltaWithTransform, this.treeScale, u);
            l && (h = l(u, h)), r.transform = h;
            const {
                x: f,
                y: m
            } = this.projectionDelta;
            r.transformOrigin = `${f.origin*100}% ${m.origin*100}% 0`, c.animationValues ? r.opacity = c === this ? u.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : r.opacity = c === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
            for (const d in Vn) {
                if (u[d] === void 0) continue;
                const {
                    correct: y,
                    applyTo: v,
                    isCSSVariable: g
                } = Vn[d], T = h === "none" ? u[d] : y(u[d], c);
                if (v) {
                    const x = v.length;
                    for (let w = 0; w < x; w++) r[v[w]] = T
                } else g ? this.options.visualElement.renderState.vars[d] = T : r[d] = T
            }
            this.options.layoutId && (r.pointerEvents = c === this ? Pe(a ? .pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(r => r.currentAnimation ? .stop()), this.root.nodes.forEach(xs), this.root.sharedNodes.clear()
        }
    }
}

function Dc(t) {
    t.updateLayout()
}

function Rc(t) {
    const e = t.resumeFrom ? .snapshot || t.snapshot;
    if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
        const {
            layoutBox: n,
            measuredBox: i
        } = t.layout, {
            animationType: s
        } = t.options, o = e.source !== t.layout.source;
        if (s === "size") rt(u => {
            const h = o ? e.measuredBox[u] : e.layoutBox[u],
                f = $(h);
            h.min = n[u].min, h.max = h.min + f
        });
        else if (s === "x" || s === "y") {
            const u = s === "x" ? "y" : "x";
            Mn(o ? e.measuredBox[u] : e.layoutBox[u], n[u])
        } else Io(s, e.layoutBox, n) && rt(u => {
            const h = o ? e.measuredBox[u] : e.layoutBox[u],
                f = $(n[u]);
            h.max = h.min + f, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[u].max = t.relativeTarget[u].min + f)
        });
        const r = Mt();
        Kt(r, n, e.layoutBox);
        const a = Mt();
        o ? Kt(a, t.applyTransform(i, !0), e.measuredBox) : Kt(a, n, e.layoutBox);
        const l = !Vo(r);
        let c = !1;
        if (!t.resumeFrom) {
            const u = t.getClosestProjectingParent();
            if (u && !u.resumeFrom) {
                const {
                    snapshot: h,
                    layout: f
                } = u;
                if (h && f) {
                    const m = t.options.layoutAnchor || void 0,
                        d = O();
                    Re(d, e.layoutBox, h.layoutBox, m);
                    const y = O();
                    Re(y, n, f.layoutBox, m), Mo(d, y) || (c = !0), u.options.layoutRoot && (t.relativeTarget = y, t.relativeTargetOrigin = d, t.relativeParent = u)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: n,
            snapshot: e,
            delta: a,
            layoutDelta: r,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: c
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: n
        } = t.options;
        n && n()
    }
    t.options.transition = void 0
}

function Lc(t) {
    at.value && vt.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function kc(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function Ic(t) {
    t.clearSnapshot()
}

function xs(t) {
    t.clearMeasurements()
}

function Bc(t) {
    t.isLayoutDirty = !0, t.updateLayout()
}

function ws(t) {
    t.isLayoutDirty = !1
}

function Fc(t) {
    t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0)
}

function Oc(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function Ts(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function jc(t) {
    t.resolveTargetDelta()
}

function Wc(t) {
    t.calcProjection()
}

function Nc(t) {
    t.resetSkewAndRotation()
}

function Uc(t) {
    t.removeLeadSnapshot()
}

function Ss(t, e, n) {
    t.translate = R(e.translate, 0, n), t.scale = R(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
}

function bs(t, e, n, i) {
    t.min = R(e.min, n.min, i), t.max = R(e.max, n.max, i)
}

function $c(t, e, n, i) {
    bs(t.x, e.x, n.x, i), bs(t.y, e.y, n.y, i)
}

function _c(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
var zc = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    As = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    Ps = As("applewebkit/") && !As("chrome/") ? Math.round : H;

function Cs(t) {
    t.min = Ps(t.min), t.max = Ps(t.max)
}

function Hc(t) {
    Cs(t.x), Cs(t.y)
}

function Io(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !dc(ms(e), ms(n), .2)
}

function Kc(t) {
    return t !== t.root && t.scroll ? .wasRoot
}
var Gc = ko({
        attachResizeListener: (t, e) => ne(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body ? .scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body ? .scrollTop || 0
        }),
        checkIsScrollRoot: () => !0
    }),
    Xc = t => !t.isLayoutDirty && t.willUpdate(!1);

function Vs() {
    const t = new Set,
        e = new WeakMap,
        n = () => t.forEach(Xc);
    return {
        add: i => {
            t.add(i), e.set(i, i.addEventListener("willUpdate", n))
        },
        remove: i => {
            t.delete(i);
            const s = e.get(i);
            s && (s(), e.delete(i)), n()
        },
        dirty: n
    }
}
var Ze = {
        current: void 0
    },
    Bo = ko({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!Ze.current) {
                const t = new Gc({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), Ze.current = t
            }
            return Ze.current
        },
        resetTransform: (t, e) => {
            t.style.transform = e !== void 0 ? e : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    }),
    ct = (0, p.createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });

function Ms(t, e) {
    if (typeof t == "function") return t(e);
    t != null && (t.current = e)
}

function Yc(...t) {
    return e => {
        let n = !1;
        const i = t.map(s => {
            const o = Ms(s, e);
            return !n && typeof o == "function" && (n = !0), o
        });
        if (n) return () => {
            for (let s = 0; s < i.length; s++) {
                const o = i[s];
                typeof o == "function" ? o() : Ms(t[s], null)
            }
        }
    }
}

function qc(...t) {
    return p.useCallback(Yc(...t), t)
}
var Zc = class extends p.Component {
    getSnapshotBeforeUpdate(t) {
        const e = this.props.childRef.current;
        if (Ht(e) && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const n = e.offsetParent,
                i = Ht(n) && n.offsetWidth || 0,
                s = Ht(n) && n.offsetHeight || 0,
                o = getComputedStyle(e),
                r = this.props.sizeRef.current;
            r.height = parseFloat(o.height), r.width = parseFloat(o.width), r.top = e.offsetTop, r.left = e.offsetLeft, r.right = i - r.width - r.left, r.bottom = s - r.height - r.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
};

function Jc({
    children: t,
    isPresent: e,
    anchorX: n,
    anchorY: i,
    root: s,
    pop: o
}) {
    const r = (0, p.useId)(),
        a = (0, p.useRef)(null),
        l = (0, p.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }),
        {
            nonce: c
        } = (0, p.useContext)(ct),
        u = t.props ? .ref ? ? t ? .ref,
        h = qc(a, u);
    return (0, p.useInsertionEffect)(() => {
        const {
            width: f,
            height: m,
            top: d,
            left: y,
            right: v,
            bottom: g
        } = l.current;
        if (e || o === !1 || !a.current || !f || !m) return;
        const T = n === "left" ? `left: ${y}` : `right: ${v}`,
            x = i === "bottom" ? `bottom: ${g}` : `top: ${d}`;
        a.current.dataset.motionPopId = r;
        const w = document.createElement("style");
        c && (w.nonce = c);
        const P = s ? ? document.head;
        return P.appendChild(w), w.sheet && w.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${m}px !important;
            ${T}px !important;
            ${x}px !important;
          }
        `), () => {
            a.current ? .removeAttribute("data-motion-pop-id"), P.contains(w) && P.removeChild(w)
        }
    }, [e]), (0, _.jsx)(Zc, {
        isPresent: e,
        childRef: a,
        sizeRef: l,
        pop: o,
        children: o === !1 ? t : p.cloneElement(t, {
            ref: h
        })
    })
}
var Qc = ({
    children: t,
    initial: e,
    isPresent: n,
    onExitComplete: i,
    custom: s,
    presenceAffectsLayout: o,
    mode: r,
    anchorX: a,
    anchorY: l,
    root: c
}) => {
    const u = K(th),
        h = (0, p.useId)();
    let f = !0,
        m = (0, p.useMemo)(() => (f = !1, {
            id: h,
            initial: e,
            isPresent: n,
            custom: s,
            onExitComplete: d => {
                u.set(d, !0);
                for (const y of u.values())
                    if (!y) return;
                i && i()
            },
            register: d => (u.set(d, !1), () => u.delete(d))
        }), [n, u, i]);
    return o && f && (m = { ...m
    }), (0, p.useMemo)(() => {
        u.forEach((d, y) => u.set(y, !1))
    }, [n]), p.useEffect(() => {
        !n && !u.size && i && i()
    }, [n]), t = (0, _.jsx)(Jc, {
        pop: r === "popLayout",
        isPresent: n,
        anchorX: a,
        anchorY: l,
        root: c,
        children: t
    }), (0, _.jsx)(ie.Provider, {
        value: m,
        children: t
    })
};

function th() {
    return new Map
}

function Fo(t = !0) {
    const e = (0, p.useContext)(ie);
    if (e === null) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: i,
        register: s
    } = e, o = (0, p.useId)();
    (0, p.useEffect)(() => {
        if (t) return s(o)
    }, [t]);
    const r = (0, p.useCallback)(() => t && i && i(o), [o, i, t]);
    return !n && i ? [!1, r] : [!0]
}

function Sd() {
    return eh((0, p.useContext)(ie))
}

function eh(t) {
    return t === null ? !0 : t.isPresent
}
var de = t => t.key || "";

function Es(t) {
    const e = [];
    return p.Children.forEach(t, n => {
        (0, p.isValidElement)(n) && e.push(n)
    }), e
}
var bd = ({
        children: t,
        custom: e,
        initial: n = !0,
        onExitComplete: i,
        presenceAffectsLayout: s = !0,
        mode: o = "sync",
        propagate: r = !1,
        anchorX: a = "left",
        anchorY: l = "top",
        root: c
    }) => {
        const [u, h] = Fo(r), f = (0, p.useMemo)(() => Es(t), [t]), m = r && !u ? [] : f.map(de), d = (0, p.useRef)(!0), y = (0, p.useRef)(f), v = K(() => new Map), g = (0, p.useRef)(new Set), [T, x] = (0, p.useState)(f), [w, P] = (0, p.useState)(f);
        Rt(() => {
            d.current = !1, y.current = f;
            for (let A = 0; A < w.length; A++) {
                const b = de(w[A]);
                m.includes(b) ? (v.delete(b), g.current.delete(b)) : v.get(b) !== !0 && v.set(b, !1)
            }
        }, [w, m.length, m.join("-")]);
        const M = [];
        if (f !== T) {
            let A = [...f];
            for (let b = 0; b < w.length; b++) {
                const C = w[b],
                    E = de(C);
                m.includes(E) || (A.splice(b, 0, C), M.push(C))
            }
            return o === "wait" && M.length && (A = M), P(Es(A)), x(f), null
        }
        const {
            forceRender: D
        } = (0, p.useContext)(qt);
        return (0, _.jsx)(_.Fragment, {
            children: w.map(A => {
                const b = de(A),
                    C = r && !u ? !1 : f === w || m.includes(b),
                    E = () => {
                        if (g.current.has(b)) return;
                        if (v.has(b)) g.current.add(b), v.set(b, !0);
                        else return;
                        let F = !0;
                        v.forEach(N => {
                            N || (F = !1)
                        }), F && (D ? .(), P(y.current), r && h ? .(), i && i())
                    };
                return (0, _.jsx)(Qc, {
                    isPresent: C,
                    initial: !d.current || n ? void 0 : !1,
                    custom: e,
                    presenceAffectsLayout: s,
                    mode: o,
                    root: c,
                    onExitComplete: C ? void 0 : E,
                    anchorX: a,
                    anchorY: l,
                    children: A
                }, b)
            })
        })
    },
    nh = (0, p.createContext)(null);

function ih() {
    const t = (0, p.useRef)(!1);
    return Rt(() => (t.current = !0, () => {
        t.current = !1
    }), []), t
}

function sh() {
    const t = ih(),
        [e, n] = (0, p.useState)(0),
        i = (0, p.useCallback)(() => {
            t.current && n(e + 1)
        }, [e]);
    return [(0, p.useCallback)(() => V.postRender(i), [i]), e]
}
var Oo = t => t === !0,
    rh = t => Oo(t === !0) || t === "id",
    Ad = ({
        children: t,
        id: e,
        inherit: n = !0
    }) => {
        const i = (0, p.useContext)(qt),
            s = (0, p.useContext)(nh),
            [o, r] = sh(),
            a = (0, p.useRef)(null),
            l = i.id || s;
        a.current === null && (rh(n) && l && (e = e ? l + "-" + e : l), a.current = {
            id: e,
            group: Oo(n) && i.group || Vs()
        });
        const c = (0, p.useMemo)(() => ({ ...a.current,
            forceRender: o
        }), [r]);
        return (0, _.jsx)(qt.Provider, {
            value: c,
            children: t
        })
    },
    di = (0, p.createContext)({
        strict: !1
    }),
    Ds = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    Rs = !1;

function oh() {
    if (Rs) return;
    const t = {};
    for (const e in Ds) t[e] = {
        isEnabled: n => Ds[e].some(i => !!n[i])
    };
    uo(t), Rs = !0
}

function jo() {
    return oh(), Nu()
}

function En(t) {
    const e = jo();
    for (const n in t) e[n] = { ...e[n],
        ...t[n]
    };
    uo(e)
}

function Pd({
    children: t,
    features: e,
    strict: n = !1
}) {
    const [, i] = (0, p.useState)(!Je(e)), s = (0, p.useRef)(void 0);
    if (!Je(e)) {
        const {
            renderer: o,
            ...r
        } = e;
        s.current = o, En(r)
    }
    return (0, p.useEffect)(() => {
        Je(e) && e().then(({
            renderer: o,
            ...r
        }) => {
            En(r), s.current = o, i(!0)
        })
    }, []), (0, _.jsx)(di.Provider, {
        value: {
            renderer: s.current,
            strict: n
        },
        children: t
    })
}

function Je(t) {
    return typeof t == "function"
}
var ah = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

function Le(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || ah.has(t)
}
var lh = fa({
        default: () => Wo
    }),
    Wo, uh = ca((() => {
        throw Wo = {}, new Error('Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?')
    })),
    No = t => !Le(t);

function Uo(t) {
    typeof t == "function" && (No = e => e.startsWith("on") ? !Le(e) : t(e))
}
try {
    Uo((uh(), ua(lh)).default)
} catch {}

function ch(t, e, n) {
    const i = {};
    for (const s in t) s === "values" && typeof t.values == "object" || k(t[s]) || (No(s) || n === !0 && Le(s) || !e && !Le(s) || t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
    return i
}

function Cd({
    children: t,
    isValidProp: e,
    ...n
}) {
    e && Uo(e);
    const i = (0, p.useContext)(ct);
    n = { ...i,
        ...n
    }, n.transition = Jn(n.transition, i.transition), n.isStatic = K(() => n.isStatic);
    const s = (0, p.useMemo)(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion, n.skipAnimations]);
    return (0, _.jsx)(ct.Provider, {
        value: s,
        children: t
    })
}
var Ne = (0, p.createContext)({});

function hh(t, e) {
    if (We(t)) {
        const {
            initial: n,
            animate: i
        } = t;
        return {
            initial: n === !1 || ee(n) ? n : void 0,
            animate: ee(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}

function fh(t) {
    const {
        initial: e,
        animate: n
    } = hh(t, (0, p.useContext)(Ne));
    return (0, p.useMemo)(() => ({
        initial: e,
        animate: n
    }), [Ls(e), Ls(n)])
}

function Ls(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
var mi = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function $o(t, e, n) {
    for (const i in e) !k(e[i]) && !yo(i, n) && (t[i] = e[i])
}

function dh({
    transformTemplate: t
}, e) {
    return (0, p.useMemo)(() => {
        const n = mi();
        return hi(n, e, t), Object.assign({}, n.vars, n.style)
    }, [e])
}

function mh(t, e) {
    const n = t.style || {},
        i = {};
    return $o(i, n, t), Object.assign(i, dh(t, e)), i
}

function ph(t, e) {
    const n = {},
        i = mh(t, e);
    return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n
}
var _o = () => ({ ...mi(),
    attrs: {}
});

function gh(t, e, n, i) {
    const s = (0, p.useMemo)(() => {
        const o = _o();
        return wo(o, e, So(i), t.transformTemplate, t.style), { ...o.attrs,
            style: { ...o.style
            }
        }
    }, [e]);
    if (t.style) {
        const o = {};
        $o(o, t.style, t), s.style = { ...o,
            ...s.style
        }
    }
    return s
}
var vh = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function pi(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(vh.indexOf(t) > -1 || /[A-Z]/u.test(t))
}

function yh(t, e, n, {
    latestValues: i
}, s, o = !1, r) {
    const a = (r ? ? pi(t) ? gh : ph)(e, i, s, t),
        l = ch(e, typeof t == "string", o),
        c = t !== p.Fragment ? { ...l,
            ...a,
            ref: n
        } : {},
        {
            children: u
        } = e,
        h = (0, p.useMemo)(() => k(u) ? u.get() : u, [u]);
    return (0, p.createElement)(t, { ...c,
        children: h
    })
}

function xh({
    scrapeMotionValuesFromProps: t,
    createRenderState: e
}, n, i, s) {
    return {
        latestValues: wh(n, i, s, t),
        renderState: e()
    }
}

function wh(t, e, n, i) {
    const s = {},
        o = i(t, {});
    for (const f in o) s[f] = Pe(o[f]);
    let {
        initial: r,
        animate: a
    } = t;
    const l = We(t),
        c = ao(t);
    e && c && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
    let u = n ? n.initial === !1 : !1;
    u = u || r === !1;
    const h = u ? a : r;
    if (h && typeof h != "boolean" && !je(h)) {
        const f = Array.isArray(h) ? h : [h];
        for (let m = 0; m < f.length; m++) {
            const d = ei(t, f[m]);
            if (d) {
                const {
                    transitionEnd: y,
                    transition: v,
                    ...g
                } = d;
                for (const T in g) {
                    let x = g[T];
                    if (Array.isArray(x)) {
                        const w = u ? x.length - 1 : 0;
                        x = x[w]
                    }
                    x !== null && (s[T] = x)
                }
                for (const T in y) s[T] = y[T]
            }
        }
    }
    return s
}
var zo = t => (e, n) => {
        const i = (0, p.useContext)(Ne),
            s = (0, p.useContext)(ie),
            o = () => xh(t, e, i, s);
        return n ? o() : K(o)
    },
    Th = zo({
        scrapeMotionValuesFromProps: fi,
        createRenderState: mi
    }),
    Sh = zo({
        scrapeMotionValuesFromProps: bo,
        createRenderState: _o
    }),
    bh = Symbol.for("motionComponentSymbol");

function Ah(t, e, n) {
    const i = (0, p.useRef)(n);
    (0, p.useInsertionEffect)(() => {
        i.current = n
    });
    const s = (0, p.useRef)(null);
    return (0, p.useCallback)(o => {
        o && t.onMount ? .(o);
        const r = i.current;
        if (typeof r == "function")
            if (o) {
                const a = r(o);
                typeof a == "function" && (s.current = a)
            } else s.current ? (s.current(), s.current = null) : r(o);
        else r && (r.current = o);
        e && (o ? e.mount(o) : e.unmount())
    }, [e])
}
var Ho = (0, p.createContext)({});

function Pt(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}

function Ph(t, e, n, i, s, o) {
    const {
        visualElement: r
    } = (0, p.useContext)(Ne), a = (0, p.useContext)(di), l = (0, p.useContext)(ie), c = (0, p.useContext)(ct), u = c.reducedMotion, h = c.skipAnimations, f = (0, p.useRef)(null), m = (0, p.useRef)(!1);
    i = i || a.renderer, !f.current && i && (f.current = i(t, {
        visualState: e,
        parent: r,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: u,
        skipAnimations: h,
        isSVG: o
    }), m.current && f.current && (f.current.manuallyAnimateOnMount = !0));
    const d = f.current,
        y = (0, p.useContext)(Ho);
    d && !d.projection && s && (d.type === "html" || d.type === "svg") && Ch(f.current, n, s, y);
    const v = (0, p.useRef)(!1);
    (0, p.useInsertionEffect)(() => {
        d && v.current && d.update(n, l)
    });
    const g = n[Gr],
        T = (0, p.useRef)(!!g && typeof window < "u" && !window.MotionHandoffIsComplete ? .(g) && window.MotionHasOptimisedAnimation ? .(g));
    return Rt(() => {
        m.current = !0, d && (v.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), d.scheduleRenderMicrotask(), T.current && d.animationState && d.animationState.animateChanges())
    }), (0, p.useEffect)(() => {
        d && (!T.current && d.animationState && d.animationState.animateChanges(), T.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete ? .(g)
        }), T.current = !1), d.enteringChildren = void 0)
    }), d
}

function Ch(t, e, n, i) {
    const {
        layoutId: s,
        layout: o,
        drag: r,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: c,
        layoutAnchor: u,
        layoutCrossfade: h
    } = e;
    t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Ko(t.parent)), t.projection.setOptions({
        layoutId: s,
        layout: o,
        alwaysMeasureLayout: !!r || a && Pt(a),
        visualElement: t,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: i,
        crossfade: h,
        layoutScroll: l,
        layoutRoot: c,
        layoutAnchor: u
    })
}

function Ko(t) {
    if (t) return t.options.allowProjection !== !1 ? t.projection : Ko(t.parent)
}

function Qe(t, {
    forwardMotionProps: e = !1,
    type: n
} = {}, i, s) {
    i && En(i);
    const o = n ? n === "svg" : pi(t),
        r = o ? Sh : Th;

    function a(c, u) {
        let h;
        const f = { ...(0, p.useContext)(ct),
                ...c,
                layoutId: Vh(c)
            },
            {
                isStatic: m
            } = f,
            d = fh(c),
            y = r(c, m);
        if (!m && typeof window < "u") {
            Mh(f, i);
            const v = Eh(f);
            h = v.MeasureLayout, d.visualElement = Ph(t, y, f, s, v.ProjectionNode, o)
        }
        return (0, _.jsxs)(Ne.Provider, {
            value: d,
            children: [h && d.visualElement ? (0, _.jsx)(h, {
                visualElement: d.visualElement,
                ...f
            }) : null, yh(t, c, Ah(y, d.visualElement, u), y, m, e, o)]
        })
    }
    a.displayName = `motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;
    const l = (0, p.forwardRef)(a);
    return l[bh] = t, l
}

function Vh({
    layoutId: t
}) {
    const e = (0, p.useContext)(qt).id;
    return e && t !== void 0 ? e + "-" + t : t
}

function Mh(t, e) {
    (0, p.useContext)(di).strict
}

function Eh(t) {
    const {
        drag: e,
        layout: n
    } = jo();
    if (!e && !n) return {};
    const i = { ...e,
        ...n
    };
    return {
        MeasureLayout: e ? .isEnabled(t) || n ? .isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}

function Go(t, e) {
    if (typeof Proxy > "u") return Qe;
    const n = new Map,
        i = (o, r) => Qe(o, r, t, e),
        s = (o, r) => i(o, r);
    return new Proxy(s, {
        get: (o, r) => r === "create" ? i : (n.has(r) || n.set(r, Qe(r, void 0, t, e)), n.get(r))
    })
}
var Vd = Go(),
    Xo = (t, e) => e.isSVG ? ? pi(t) ? new Ao(e) : new xo(e, {
        allowProjection: t !== p.Fragment
    }),
    Dh = class extends mt {
        constructor(t) {
            super(t), t.animationState || (t.animationState = ac(t))
        }
        updateAnimationControlsSubscription() {
            const {
                animate: t
            } = this.node.getProps();
            je(t) && (this.unmountControls = t.subscribe(this.node))
        }
        mount() {
            this.updateAnimationControlsSubscription()
        }
        update() {
            const {
                animate: t
            } = this.node.getProps(), {
                animate: e
            } = this.node.prevProps || {};
            t !== e && this.updateAnimationControlsSubscription()
        }
        unmount() {
            this.node.animationState.reset(), this.unmountControls ? .()
        }
    },
    Rh = 0,
    Lh = class extends mt {
        constructor() {
            super(...arguments), this.id = Rh++, this.isExitComplete = !1
        }
        update() {
            if (!this.node.presenceContext) return;
            const {
                isPresent: t,
                onExitComplete: e
            } = this.node.presenceContext, {
                isPresent: n
            } = this.node.prevPresenceContext || {};
            if (!this.node.animationState || t === n) return;
            if (t && n === !1) {
                if (this.isExitComplete) {
                    const {
                        initial: s,
                        custom: o
                    } = this.node.getProps();
                    if (typeof s == "string") {
                        const r = St(this.node, s, o);
                        if (r) {
                            const {
                                transition: a,
                                transitionEnd: l,
                                ...c
                            } = r;
                            for (const u in c) this.node.getValue(u) ? .jump(c[u])
                        }
                    }
                    this.node.animationState.reset(), this.node.animationState.animateChanges()
                } else this.node.animationState.setActive("exit", !1);
                this.isExitComplete = !1;
                return
            }
            const i = this.node.animationState.setActive("exit", !t);
            e && !t && i.then(() => {
                this.isExitComplete = !0, e(this.id)
            })
        }
        mount() {
            const {
                register: t,
                onExitComplete: e
            } = this.node.presenceContext || {};
            e && e(this.id), t && (this.unmount = t(this.id))
        }
        unmount() {}
    },
    Yo = {
        animation: {
            Feature: Dh
        },
        exit: {
            Feature: Lh
        }
    };

function ae(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
var kh = t => e => ai(e) && t(e, ae(e));

function Gt(t, e, n, i) {
    return ne(t, e, kh(n), i)
}
var qo = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null,
    ks = (t, e) => Math.abs(t - e);

function Ih(t, e) {
    const n = ks(t.x, e.x),
        i = ks(t.y, e.y);
    return Math.sqrt(n ** 2 + i ** 2)
}
var Is = new Set(["auto", "scroll"]),
    Zo = class {
        constructor(t, e, {
            transformPagePoint: n,
            contextWindow: i = window,
            dragSnapToOrigin: s = !1,
            distanceThreshold: o = 3,
            element: r
        } = {}) {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = h => {
                    this.handleScroll(h.target)
                }, this.onWindowScroll = () => {
                    this.handleScroll(window)
                }, this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    this.lastRawMoveEventInfo && (this.lastMoveEventInfo = me(this.lastRawMoveEventInfo, this.transformPagePoint));
                    const h = tn(this.lastMoveEventInfo, this.history),
                        f = this.startEvent !== null,
                        m = Ih(h.offset, {
                            x: 0,
                            y: 0
                        }) >= this.distanceThreshold;
                    if (!f && !m) return;
                    const {
                        point: d
                    } = h, {
                        timestamp: y
                    } = W;
                    this.history.push({ ...d,
                        timestamp: y
                    });
                    const {
                        onStart: v,
                        onMove: g
                    } = this.handlers;
                    f || (v && v(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, h)
                }, this.handlePointerMove = (h, f) => {
                    this.lastMoveEvent = h, this.lastRawMoveEventInfo = f, this.lastMoveEventInfo = me(f, this.transformPagePoint), V.update(this.updatePoint, !0)
                }, this.handlePointerUp = (h, f) => {
                    this.end();
                    const {
                        onEnd: m,
                        onSessionEnd: d,
                        resumeAnimation: y
                    } = this.handlers;
                    if ((this.dragSnapToOrigin || !this.startEvent) && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    const v = tn(h.type === "pointercancel" ? this.lastMoveEventInfo : me(f, this.transformPagePoint), this.history);
                    this.startEvent && m && m(h, v), d && d(h, v)
                }, !ai(t)) return;
            this.dragSnapToOrigin = s, this.handlers = e, this.transformPagePoint = n, this.distanceThreshold = o, this.contextWindow = i || window;
            const a = me(ae(t), this.transformPagePoint),
                {
                    point: l
                } = a,
                {
                    timestamp: c
                } = W;
            this.history = [{ ...l,
                timestamp: c
            }];
            const {
                onSessionStart: u
            } = e;
            u && u(t, tn(a, this.history)), this.removeListeners = se(Gt(this.contextWindow, "pointermove", this.handlePointerMove), Gt(this.contextWindow, "pointerup", this.handlePointerUp), Gt(this.contextWindow, "pointercancel", this.handlePointerUp)), r && this.startScrollTracking(r)
        }
        startScrollTracking(t) {
            let e = t.parentElement;
            for (; e;) {
                const n = getComputedStyle(e);
                (Is.has(n.overflowX) || Is.has(n.overflowY)) && this.scrollPositions.set(e, {
                    x: e.scrollLeft,
                    y: e.scrollTop
                }), e = e.parentElement
            }
            this.scrollPositions.set(window, {
                x: window.scrollX,
                y: window.scrollY
            }), window.addEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
                window.removeEventListener("scroll", this.onElementScroll, {
                    capture: !0
                }), window.removeEventListener("scroll", this.onWindowScroll)
            }
        }
        handleScroll(t) {
            const e = this.scrollPositions.get(t);
            if (!e) return;
            const n = t === window,
                i = n ? {
                    x: window.scrollX,
                    y: window.scrollY
                } : {
                    x: t.scrollLeft,
                    y: t.scrollTop
                },
                s = {
                    x: i.x - e.x,
                    y: i.y - e.y
                };
            s.x === 0 && s.y === 0 || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x, this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x, this.history[0].y -= s.y), this.scrollPositions.set(t, i), V.update(this.updatePoint, !0))
        }
        updateHandlers(t) {
            this.handlers = t
        }
        end() {
            this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), X(this.updatePoint)
        }
    };

function me(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function Bs(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function tn({
    point: t
}, e) {
    return {
        point: t,
        delta: Bs(t, Jo(e)),
        offset: Bs(t, Bh(e)),
        velocity: Fh(e, .1)
    }
}

function Bh(t) {
    return t[0]
}

function Jo(t) {
    return t[t.length - 1]
}

function Fh(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let n = t.length - 1,
        i = null;
    const s = Jo(t);
    for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > z(e)));) n--;
    if (!i) return {
        x: 0,
        y: 0
    };
    i === t[0] && t.length > 2 && s.timestamp - i.timestamp > z(e) * 2 && (i = t[1]);
    const o = q(s.timestamp - i.timestamp);
    if (o === 0) return {
        x: 0,
        y: 0
    };
    const r = {
        x: (s.x - i.x) / o,
        y: (s.y - i.y) / o
    };
    return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
}

function Oh(t, {
    min: e,
    max: n
}, i) {
    return e !== void 0 && t < e ? t = i ? R(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? R(n, t, i.max) : Math.min(t, n)), t
}

function Fs(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}

function jh(t, {
    top: e,
    left: n,
    bottom: i,
    right: s
}) {
    return {
        x: Fs(t.x, n, s),
        y: Fs(t.y, e, i)
    }
}

function Os(t, e) {
    let n = e.min - t.min,
        i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
        min: n,
        max: i
    }
}

function Wh(t, e) {
    return {
        x: Os(t.x, e.x),
        y: Os(t.y, e.y)
    }
}

function Nh(t, e) {
    let n = .5;
    const i = $(t),
        s = $(e);
    return s > i ? n = bt(e.min, e.max - i, t.min) : i > s && (n = bt(t.min, t.max - s, e.min)), nt(0, 1, n)
}

function Uh(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
}
var Dn = .35;

function $h(t = Dn) {
    return t === !1 ? t = 0 : t === !0 && (t = Dn), {
        x: js(t, "left", "right"),
        y: js(t, "top", "bottom")
    }
}

function js(t, e, n) {
    return {
        min: Ws(t, e),
        max: Ws(t, n)
    }
}

function Ws(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
var _h = new WeakMap,
    zh = class {
        constructor(t) {
            this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = O(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
        }
        start(t, {
            snapToCursor: e = !1,
            distanceThreshold: n
        } = {}) {
            const {
                presenceContext: i
            } = this.visualElement;
            if (i && i.isPresent === !1) return;
            const s = u => {
                    e && this.snapToCursor(ae(u).point), this.stopAnimation()
                },
                o = (u, h) => {
                    const {
                        drag: f,
                        dragPropagation: m,
                        onDragStart: d
                    } = this.getProps();
                    if (f && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = gu(f), !this.openDragLock)) return;
                    this.latestPointerEvent = u, this.latestPanInfo = h, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), rt(v => {
                        let g = this.getAxisMotionValue(v).get() || 0;
                        if (lt.test(g)) {
                            const {
                                projection: T
                            } = this.visualElement;
                            if (T && T.layout) {
                                const x = T.layout.layoutBox[v];
                                x && (g = $(x) * (parseFloat(g) / 100))
                            }
                        }
                        this.originPoint[v] = g
                    }), d && V.update(() => d(u, h), !1, !0), wn(this.visualElement, "transform");
                    const {
                        animationState: y
                    } = this.visualElement;
                    y && y.setActive("whileDrag", !0)
                },
                r = (u, h) => {
                    this.latestPointerEvent = u, this.latestPanInfo = h;
                    const {
                        dragPropagation: f,
                        dragDirectionLock: m,
                        onDirectionLock: d,
                        onDrag: y
                    } = this.getProps();
                    if (!f && !this.openDragLock) return;
                    const {
                        offset: v
                    } = h;
                    if (m && this.currentDirection === null) {
                        this.currentDirection = Kh(v), this.currentDirection !== null && d && d(this.currentDirection);
                        return
                    }
                    this.updateAxis("x", h.point, v), this.updateAxis("y", h.point, v), this.visualElement.render(), y && V.update(() => y(u, h), !1, !0)
                },
                a = (u, h) => {
                    this.latestPointerEvent = u, this.latestPanInfo = h, this.stop(u, h), this.latestPointerEvent = null, this.latestPanInfo = null
                },
                l = () => {
                    const {
                        dragSnapToOrigin: u
                    } = this.getProps();
                    (u || this.constraints) && this.startAnimation({
                        x: 0,
                        y: 0
                    })
                },
                {
                    dragSnapToOrigin: c
                } = this.getProps();
            this.panSession = new Zo(t, {
                onSessionStart: s,
                onStart: o,
                onMove: r,
                onSessionEnd: a,
                resumeAnimation: l
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: c,
                distanceThreshold: n,
                contextWindow: qo(this.visualElement),
                element: this.visualElement.current
            })
        }
        stop(t, e) {
            const n = t || this.latestPointerEvent,
                i = e || this.latestPanInfo,
                s = this.isDragging;
            if (this.cancel(), !s || !i || !n) return;
            const {
                velocity: o
            } = i;
            this.startAnimation(o);
            const {
                onDragEnd: r
            } = this.getProps();
            r && V.postRender(() => r(n, i))
        }
        cancel() {
            this.isDragging = !1;
            const {
                projection: t,
                animationState: e
            } = this.visualElement;
            t && (t.isAnimationBlocked = !1), this.endPanSession();
            const {
                dragPropagation: n
            } = this.getProps();
            !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
        }
        endPanSession() {
            this.panSession && this.panSession.end(), this.panSession = void 0
        }
        updateAxis(t, e, n) {
            const {
                drag: i
            } = this.getProps();
            if (!n || !pe(t, i, this.currentDirection)) return;
            const s = this.getAxisMotionValue(t);
            let o = this.originPoint[t] + n[t];
            this.constraints && this.constraints[t] && (o = Oh(o, this.constraints[t], this.elastic[t])), s.set(o)
        }
        resolveConstraints() {
            const {
                dragConstraints: t,
                dragElastic: e
            } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ? .layout, i = this.constraints;
            t && Pt(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = jh(n.layoutBox, t) : this.constraints = !1, this.elastic = $h(e), i !== this.constraints && !Pt(t) && n && this.constraints && !this.hasMutatedConstraints && rt(s => {
                this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = Uh(n.layoutBox[s], this.constraints[s]))
            })
        }
        resolveRefConstraints() {
            const {
                dragConstraints: t,
                onMeasureDragConstraints: e
            } = this.getProps();
            if (!t || !Pt(t)) return !1;
            const n = t.current;
            G(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
            const {
                projection: i
            } = this.visualElement;
            if (!i || !i.layout) return !1;
            const s = zu(n, i.root, this.visualElement.getTransformPagePoint());
            let o = Wh(i.layout.layoutBox, s);
            if (e) {
                const r = e(Uu(o));
                this.hasMutatedConstraints = !!r, r && (o = fo(r))
            }
            return o
        }
        startAnimation(t) {
            const {
                drag: e,
                dragMomentum: n,
                dragElastic: i,
                dragTransition: s,
                dragSnapToOrigin: o,
                onDragTransitionEnd: r
            } = this.getProps(), a = this.constraints || {}, l = rt(c => {
                if (!pe(c, e, this.currentDirection)) return;
                let u = a && a[c] || {};
                (o === !0 || o === c) && (u = {
                    min: 0,
                    max: 0
                });
                const h = i ? 200 : 1e6,
                    f = i ? 40 : 1e7,
                    m = {
                        type: "inertia",
                        velocity: n ? t[c] : 0,
                        bounceStiffness: h,
                        bounceDamping: f,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...s,
                        ...u
                    };
                return this.startAxisValueAnimation(c, m)
            });
            return Promise.all(l).then(r)
        }
        startAxisValueAnimation(t, e) {
            const n = this.getAxisMotionValue(t);
            return wn(this.visualElement, t), n.start(ti(t, n, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
            rt(t => this.getAxisMotionValue(t).stop())
        }
        getAxisMotionValue(t) {
            const e = `_drag${t.toUpperCase()}`,
                n = this.visualElement.getProps(),
                i = n[e];
            return i || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
        }
        snapToCursor(t) {
            rt(e => {
                const {
                    drag: n
                } = this.getProps();
                if (!pe(e, n, this.currentDirection)) return;
                const {
                    projection: i
                } = this.visualElement, s = this.getAxisMotionValue(e);
                if (i && i.layout) {
                    const {
                        min: o,
                        max: r
                    } = i.layout.layoutBox[e], a = s.get() || 0;
                    s.set(t[e] - R(o, r, .5) + a)
                }
            })
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            const {
                drag: t,
                dragConstraints: e
            } = this.getProps(), {
                projection: n
            } = this.visualElement;
            if (!Pt(e) || !n || !this.constraints) return;
            this.stopAnimation();
            const i = {
                x: 0,
                y: 0
            };
            rt(o => {
                const r = this.getAxisMotionValue(o);
                if (r && this.constraints !== !1) {
                    const a = r.get();
                    i[o] = Nh({
                        min: a,
                        max: a
                    }, this.constraints[o])
                }
            });
            const {
                transformTemplate: s
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = s ? s({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), rt(o => {
                if (!pe(o, t, null)) return;
                const r = this.getAxisMotionValue(o),
                    {
                        min: a,
                        max: l
                    } = this.constraints[o];
                r.set(R(a, l, i[o]))
            }), this.visualElement.render()
        }
        addListeners() {
            if (!this.visualElement.current) return;
            _h.set(this.visualElement, this);
            const t = this.visualElement.current,
                e = Gt(t, "pointerdown", l => {
                    const {
                        drag: c,
                        dragListener: u = !0
                    } = this.getProps(), h = l.target, f = h !== t && Su(h);
                    c && u && !f && this.start(l)
                });
            let n;
            const i = () => {
                    const {
                        dragConstraints: l
                    } = this.getProps();
                    Pt(l) && l.current && (this.constraints = this.resolveRefConstraints(), n || (n = Hh(t, l.current, () => this.scalePositionWithinConstraints())))
                },
                {
                    projection: s
                } = this.visualElement,
                o = s.addEventListener("measure", i);
            s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), V.read(i);
            const r = ne(window, "resize", () => this.scalePositionWithinConstraints()),
                a = s.addEventListener("didUpdate", (({
                    delta: l,
                    hasLayoutChanged: c
                }) => {
                    this.isDragging && c && (rt(u => {
                        const h = this.getAxisMotionValue(u);
                        h && (this.originPoint[u] += l[u].translate, h.set(h.get() + l[u].translate))
                    }), this.visualElement.render())
                }));
            return () => {
                r(), e(), o(), a && a(), n && n()
            }
        }
        getProps() {
            const t = this.visualElement.getProps(),
                {
                    drag: e = !1,
                    dragDirectionLock: n = !1,
                    dragPropagation: i = !1,
                    dragConstraints: s = !1,
                    dragElastic: o = Dn,
                    dragMomentum: r = !0
                } = t;
            return { ...t,
                drag: e,
                dragDirectionLock: n,
                dragPropagation: i,
                dragConstraints: s,
                dragElastic: o,
                dragMomentum: r
            }
        }
    };

function Ns(t) {
    let e = !0;
    return () => {
        if (e) {
            e = !1;
            return
        }
        t()
    }
}

function Hh(t, e, n) {
    const i = An(t, Ns(n)),
        s = An(e, Ns(n));
    return () => {
        i(), s()
    }
}

function pe(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}

function Kh(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
}
var Gh = class extends mt {
        constructor(t) {
            super(t), this.removeGroupControls = H, this.removeListeners = H, this.controls = new zh(t)
        }
        mount() {
            const {
                dragControls: t
            } = this.node.getProps();
            t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || H
        }
        update() {
            const {
                dragControls: t
            } = this.node.getProps(), {
                dragControls: e
            } = this.node.prevProps || {};
            t !== e && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)))
        }
        unmount() {
            this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
        }
    },
    en = t => (e, n) => {
        t && V.update(() => t(e, n), !1, !0)
    },
    Xh = class extends mt {
        constructor() {
            super(...arguments), this.removePointerDownListener = H
        }
        onPointerDown(t) {
            this.session = new Zo(t, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: qo(this.node)
            })
        }
        createPanHandlers() {
            const {
                onPanSessionStart: t,
                onPanStart: e,
                onPan: n,
                onPanEnd: i
            } = this.node.getProps();
            return {
                onSessionStart: en(t),
                onStart: en(e),
                onMove: en(n),
                onEnd: (s, o) => {
                    delete this.session, i && V.postRender(() => i(s, o))
                }
            }
        }
        mount() {
            this.removePointerDownListener = Gt(this.node.current, "pointerdown", t => this.onPointerDown(t))
        }
        update() {
            this.session && this.session.updateHandlers(this.createPanHandlers())
        }
        unmount() {
            this.removePointerDownListener(), this.session && this.session.end()
        }
    },
    nn = !1,
    Yh = class extends p.Component {
        componentDidMount() {
            const {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: n,
                layoutId: i
            } = this.props, {
                projection: s
            } = t;
            s && (e.group && e.group.add(s), n && n.register && i && n.register(s), nn && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
                this.safeToRemove()
            }), s.setOptions({ ...s.options,
                layoutDependency: this.props.layoutDependency,
                onExitComplete: () => this.safeToRemove()
            })), Ce.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
            const {
                layoutDependency: e,
                visualElement: n,
                drag: i,
                isPresent: s
            } = this.props, {
                projection: o
            } = n;
            return o && (o.isPresent = s, t.layoutDependency !== e && o.setOptions({ ...o.options,
                layoutDependency: e
            }), nn = !0, i || t.layoutDependency !== e || e === void 0 || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || V.postRender(() => {
                const r = o.getStack();
                (!r || !r.members.length) && this.safeToRemove()
            }))), null
        }
        componentDidUpdate() {
            const {
                visualElement: t,
                layoutAnchor: e
            } = this.props, {
                projection: n
            } = t;
            n && (n.options.layoutAnchor = e, n.root.didUpdate(), oi.postRender(() => {
                !n.currentAnimation && n.isLead() && this.safeToRemove()
            }))
        }
        componentWillUnmount() {
            const {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: n
            } = this.props, {
                projection: i
            } = t;
            nn = !0, i && (i.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(i), n && n.deregister && n.deregister(i))
        }
        safeToRemove() {
            const {
                safeToRemove: t
            } = this.props;
            t && t()
        }
        render() {
            return null
        }
    };

function Qo(t) {
    const [e, n] = Fo(), i = (0, p.useContext)(qt);
    return (0, _.jsx)(Yh, { ...t,
        layoutGroup: i,
        switchLayoutGroup: (0, p.useContext)(Ho),
        isPresent: e,
        safeToRemove: n
    })
}
var qh = {
    pan: {
        Feature: Xh
    },
    drag: {
        Feature: Gh,
        ProjectionNode: Bo,
        MeasureLayout: Qo
    }
};

function Us(t, e, n) {
    const {
        props: i
    } = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const s = i["onHover" + n];
    s && V.postRender(() => s(e, ae(e)))
}
var Zh = class extends mt {
        mount() {
            const {
                current: t
            } = this.node;
            t && (this.unmount = yu(t, (e, n) => (Us(this.node, n, "Start"), i => Us(this.node, i, "End"))))
        }
        unmount() {}
    },
    Jh = class extends mt {
        constructor() {
            super(...arguments), this.isActive = !1
        }
        onFocus() {
            let t = !1;
            try {
                t = this.node.current.matches(":focus-visible")
            } catch {
                t = !0
            }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
        }
        onBlur() {
            !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
        }
        mount() {
            this.unmount = se(ne(this.node.current, "focus", () => this.onFocus()), ne(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
    };

function $s(t, e, n) {
    const {
        props: i
    } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const s = i["onTap" + (n === "End" ? "" : n)];
    s && V.postRender(() => s(e, ae(e)))
}
var Qh = class extends mt {
        mount() {
            const {
                current: t
            } = this.node;
            if (!t) return;
            const {
                globalTapTarget: e,
                propagate: n
            } = this.node.props;
            this.unmount = Au(t, (i, s) => ($s(this.node, s, "Start"), (o, {
                success: r
            }) => $s(this.node, o, r ? "End" : "Cancel")), {
                useGlobalTarget: e,
                stopPropagation: n ? .tap === !1
            })
        }
        unmount() {}
    },
    Rn = new WeakMap,
    sn = new WeakMap,
    tf = t => {
        const e = Rn.get(t.target);
        e && e(t)
    },
    ef = t => {
        t.forEach(tf)
    };

function nf({
    root: t,
    ...e
}) {
    const n = t || document;
    sn.has(n) || sn.set(n, {});
    const i = sn.get(n),
        s = JSON.stringify(e);
    return i[s] || (i[s] = new IntersectionObserver(ef, {
        root: t,
        ...e
    })), i[s]
}

function sf(t, e, n) {
    const i = nf(e);
    return Rn.set(t, n), i.observe(t), () => {
        Rn.delete(t), i.unobserve(t)
    }
}
var rf = {
        some: 0,
        all: 1
    },
    of = class extends mt {
        constructor() {
            super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
        startObserver() {
            this.stopObserver ? .();
            const {
                viewport: t = {}
            } = this.node.getProps(), {
                root: e,
                margin: n,
                amount: i = "some",
                once: s
            } = t, o = {
                root: e ? e.current : void 0,
                rootMargin: n,
                threshold: typeof i == "number" ? i : rf[i]
            }, r = a => {
                const {
                    isIntersecting: l
                } = a;
                if (this.isInView === l || (this.isInView = l, s && !l && this.hasEnteredView)) return;
                l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
                const {
                    onViewportEnter: c,
                    onViewportLeave: u
                } = this.node.getProps(), h = l ? c : u;
                h && h(a)
            };
            this.stopObserver = sf(this.node.current, o, r)
        }
        mount() {
            this.startObserver()
        }
        update() {
            if (typeof IntersectionObserver > "u") return;
            const {
                props: t,
                prevProps: e
            } = this.node;
            ["amount", "margin", "root"].some(af(t, e)) && this.startObserver()
        }
        unmount() {
            this.stopObserver ? .(), this.hasEnteredView = !1, this.isInView = !1
        }
    };

function af({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return n => t[n] !== e[n]
}
var ta = {
        inView: {
            Feature: of
        },
        tap: {
            Feature: Qh
        },
        focus: {
            Feature: Jh
        },
        hover: {
            Feature: Zh
        }
    },
    lf = {
        layout: {
            ProjectionNode: Bo,
            MeasureLayout: Qo
        }
    },
    uf = { ...Yo,
        ...ta,
        ...qh,
        ...lf
    },
    ea = Go(uf, Xo);

function cf(t) {
    return (0, p.useEffect)(() => () => t(), [])
}
var Md = {
    renderer: Xo,
    ...Yo,
    ...ta
};

function Ed(t, e, n) {
    (0, p.useInsertionEffect)(() => t.on(e, n), [t, e, n])
}

function ke(t) {
    return typeof window > "u" ? !1 : t ? jr() : qn()
}
var hf = 50,
    _s = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    }),
    ff = () => ({
        time: 0,
        x: _s(),
        y: _s()
    }),
    df = {
        x: {
            length: "Width",
            position: "Left"
        },
        y: {
            length: "Height",
            position: "Top"
        }
    };

function zs(t, e, n, i) {
    const s = n[e],
        {
            length: o,
            position: r
        } = df[e],
        a = s.current,
        l = n.time;
    s.current = Math.abs(t[`scroll${r}`]), s.scrollLength = t[`scroll${o}`] - t[`client${o}`], s.offset.length = 0, s.offset[0] = 0, s.offset[1] = s.scrollLength, s.progress = bt(0, s.scrollLength, s.current);
    const c = i - l;
    s.velocity = c > hf ? 0 : On(s.current - a, c)
}

function mf(t, e, n) {
    zs(t, "x", e, n), zs(t, "y", e, n), e.time = n
}

function pf(t, e) {
    const n = {
        x: 0,
        y: 0
    };
    let i = t;
    for (; i && i !== e;)
        if (Ht(i)) n.x += i.offsetLeft, n.y += i.offsetTop, i = i.offsetParent;
        else if (i.tagName === "svg") {
        const s = i.getBoundingClientRect();
        i = i.parentElement;
        const o = i.getBoundingClientRect();
        n.x += s.left - o.left, n.y += s.top - o.top
    } else if (i instanceof SVGGraphicsElement) {
        const {
            x: s,
            y: o
        } = i.getBBox();
        n.x += s, n.y += o;
        let r = null,
            a = i.parentNode;
        for (; !r;) a.tagName === "svg" && (r = a), a = i.parentNode;
        i = r
    } else break;
    return n
}
var Ln = {
    start: 0,
    center: .5,
    end: 1
};

function Hs(t, e, n = 0) {
    let i = 0;
    if (t in Ln && (t = Ln[t]), typeof t == "string") {
        const s = parseFloat(t);
        t.endsWith("px") ? i = s : t.endsWith("%") ? t = s / 100 : t.endsWith("vw") ? i = s / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? i = s / 100 * document.documentElement.clientHeight : t = s
    }
    return typeof t == "number" && (i = e * t), n + i
}
var gf = [0, 0];

function vf(t, e, n, i) {
    let s = Array.isArray(t) ? t : gf,
        o = 0,
        r = 0;
    return typeof t == "number" ? s = [t, t] : typeof t == "string" && (t = t.trim(), t.includes(" ") ? s = t.split(" ") : s = [t, Ln[t] ? t : "0"]), o = Hs(s[0], n, i), r = Hs(s[1], e), o - r
}
var Nt = {
        Enter: [
            [0, 1],
            [1, 1]
        ],
        Exit: [
            [0, 0],
            [1, 0]
        ],
        Any: [
            [1, 0],
            [0, 1]
        ],
        All: [
            [0, 0],
            [1, 1]
        ]
    },
    yf = {
        x: 0,
        y: 0
    };

function xf(t) {
    return "getBBox" in t && t.tagName !== "svg" ? t.getBBox() : {
        width: t.clientWidth,
        height: t.clientHeight
    }
}

function wf(t, e, n) {
    const {
        offset: i = Nt.All
    } = n, {
        target: s = t,
        axis: o = "y"
    } = n, r = o === "y" ? "height" : "width", a = s !== t ? pf(s, t) : yf, l = s === t ? {
        width: t.scrollWidth,
        height: t.scrollHeight
    } : xf(s), c = {
        width: t.clientWidth,
        height: t.clientHeight
    };
    e[o].offset.length = 0;
    let u = !e[o].interpolate;
    const h = i.length;
    for (let f = 0; f < h; f++) {
        const m = vf(i[f], c[r], l[r], a[o]);
        !u && m !== e[o].interpolatorOffsets[f] && (u = !0), e[o].offset[f] = m
    }
    u && (e[o].interpolate = Hn(e[o].offset, Kn(i), {
        clamp: !1
    }), e[o].interpolatorOffsets = [...e[o].offset]), e[o].progress = nt(0, 1, e[o].interpolate(e[o].current))
}

function Tf(t, e = t, n) {
    if (n.x.targetOffset = 0, n.y.targetOffset = 0, e !== t) {
        let i = e;
        for (; i && i !== t;) n.x.targetOffset += i.offsetLeft, n.y.targetOffset += i.offsetTop, i = i.offsetParent
    }
    n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, n.x.containerLength = t.clientWidth, n.y.containerLength = t.clientHeight
}

function Sf(t, e, n, i = {}) {
    return {
        measure: s => {
            Tf(t, i.target, n), mf(t, n, s), (i.offset || i.target) && wf(t, n, i)
        },
        notify: () => e(n)
    }
}
var At = new WeakMap,
    Ks = new WeakMap,
    rn = new WeakMap,
    Gs = new WeakMap,
    ge = new WeakMap,
    Xs = t => t === document.scrollingElement ? window : t;

function na(t, {
    container: e = document.scrollingElement,
    trackContentSize: n = !1,
    ...i
} = {}) {
    if (!e) return H;
    let s = rn.get(e);
    s || (s = new Set, rn.set(e, s));
    const o = ff(),
        r = Sf(e, t, o, i);
    if (s.add(r), !At.has(e)) {
        const l = () => {
                for (const f of s) f.measure(W.timestamp);
                V.preUpdate(c)
            },
            c = () => {
                for (const f of s) f.notify()
            },
            u = () => V.read(l);
        At.set(e, u);
        const h = Xs(e);
        window.addEventListener("resize", u), e !== document.documentElement && Ks.set(e, An(e, u)), h.addEventListener("scroll", u), u()
    }
    if (n && !ge.has(e)) {
        const l = At.get(e),
            c = {
                width: e.scrollWidth,
                height: e.scrollHeight
            };
        Gs.set(e, c);
        const u = () => {
                const f = e.scrollWidth,
                    m = e.scrollHeight;
                (c.width !== f || c.height !== m) && (l(), c.width = f, c.height = m)
            },
            h = V.read(u, !0);
        ge.set(e, h)
    }
    const a = At.get(e);
    return V.read(a, !1, !0), () => {
        X(a);
        const l = rn.get(e);
        if (!l || (l.delete(r), l.size)) return;
        const c = At.get(e);
        At.delete(e), c && (Xs(e).removeEventListener("scroll", c), Ks.get(e) ? .(), window.removeEventListener("resize", c));
        const u = ge.get(e);
        u && (X(u), ge.delete(e)), Gs.delete(e)
    }
}
var bf = [
        [Nt.Enter, "entry"],
        [Nt.Exit, "exit"],
        [Nt.Any, "cover"],
        [Nt.All, "contain"]
    ],
    Ys = {
        start: 0,
        end: 1
    };

function Af(t) {
    const e = t.trim().split(/\s+/);
    if (e.length !== 2) return;
    const n = Ys[e[0]],
        i = Ys[e[1]];
    if (!(n === void 0 || i === void 0)) return [n, i]
}

function Pf(t) {
    if (t.length !== 2) return;
    const e = [];
    for (const n of t)
        if (Array.isArray(n)) e.push(n);
        else if (typeof n == "string") {
        const i = Af(n);
        if (!i) return;
        e.push(i)
    } else return;
    return e
}

function Cf(t, e) {
    const n = Pf(t);
    if (!n) return !1;
    for (let i = 0; i < 2; i++) {
        const s = n[i],
            o = e[i];
        if (s[0] !== o[0] || s[1] !== o[1]) return !1
    }
    return !0
}

function gi(t) {
    if (!t) return {
        rangeStart: "contain 0%",
        rangeEnd: "contain 100%"
    };
    for (const [e, n] of bf)
        if (Cf(t, e)) return {
            rangeStart: `${n} 0%`,
            rangeEnd: `${n} 100%`
        }
}
var qs = new Map;

function Zs(t) {
    const e = {
        value: 0
    };
    return {
        currentTime: e,
        cancel: na(n => {
            e.value = n[t.axis].progress * 100
        }, t)
    }
}

function ia({
    source: t,
    container: e,
    ...n
}) {
    const {
        axis: i
    } = n;
    t && (e = t);
    let s = qs.get(e);
    s || (s = new Map, qs.set(e, s));
    const o = n.target ? ? "self";
    let r = s.get(o);
    r || (r = {}, s.set(o, r));
    const a = i + (n.offset ? ? []).join(",");
    return r[a] || (n.target && ke(n.target) ? gi(n.offset) ? r[a] = new ViewTimeline({
        subject: n.target,
        axis: i
    }) : r[a] = Zs({
        container: e,
        ...n
    }) : ke() ? r[a] = new ScrollTimeline({
        source: e,
        axis: i
    }) : r[a] = Zs({
        container: e,
        ...n
    })), r[a]
}

function Vf(t, e) {
    const n = ia(e),
        i = e.target ? gi(e.offset) : void 0,
        s = e.target ? ke(e.target) && !!i : ke();
    return t.attachTimeline({
        timeline: s ? n : void 0,
        ...i && s && {
            rangeStart: i.rangeStart,
            rangeEnd: i.rangeEnd
        },
        observe: o => (o.pause(), ro(r => {
            o.time = o.iterationDuration * r
        }, n))
    })
}

function Mf(t) {
    return t.length === 2
}

function Ef(t, e) {
    return Mf(t) ? na(n => {
        t(n[e.axis].progress, n)
    }, e) : ro(t, ia(e))
}

function sa(t, {
    axis: e = "y",
    container: n = document.scrollingElement,
    ...i
} = {}) {
    if (!n) return H;
    const s = {
        axis: e,
        container: n,
        ...i
    };
    return typeof t == "function" ? Ef(t, s) : Vf(t, s)
}
var Df = () => ({
        scrollX: Z(0),
        scrollY: Z(0),
        scrollXProgress: Z(0),
        scrollYProgress: Z(0)
    }),
    ve = t => t ? !t.current : !1;

function Js(t, e, n, i) {
    return {
        factory: s => sa(s, { ...e,
            axis: t,
            container: n ? .current || void 0,
            target: i ? .current || void 0
        }),
        times: [0, 1],
        keyframes: [0, 1],
        ease: s => s,
        duration: 1
    }
}

function Rf(t, e) {
    return typeof window > "u" ? !1 : t ? jr() && !!gi(e) : qn()
}

function Dd({
    container: t,
    target: e,
    ...n
} = {}) {
    const i = K(Df);
    Rf(e, n.offset) && (i.scrollXProgress.accelerate = Js("x", n, t, e), i.scrollYProgress.accelerate = Js("y", n, t, e));
    const s = (0, p.useRef)(null),
        o = (0, p.useRef)(!1),
        r = (0, p.useCallback)(() => (s.current = sa((a, {
            x: l,
            y: c
        }) => {
            i.scrollX.set(l.current), i.scrollXProgress.set(l.progress), i.scrollY.set(c.current), i.scrollYProgress.set(c.progress)
        }, { ...n,
            container: t ? .current || void 0,
            target: e ? .current || void 0
        }), () => {
            s.current ? .()
        }), [t, e, JSON.stringify(n.offset)]);
    return Rt(() => {
        if (o.current = !1, ve(t) || ve(e)) {
            o.current = !0;
            return
        } else return r()
    }, [r]), (0, p.useEffect)(() => {
        if (o.current) return G(!ve(t), "Container ref is defined but not hydrated", "use-scroll-ref"), G(!ve(e), "Target ref is defined but not hydrated", "use-scroll-ref"), r()
    }, [r]), i
}

function vi(t) {
    const e = K(() => Z(t)),
        {
            isStatic: n
        } = (0, p.useContext)(ct);
    if (n) {
        const [, i] = (0, p.useState)(t);
        (0, p.useEffect)(() => e.on("change", i), [])
    }
    return e
}

function yi(t, e) {
    const n = vi(e()),
        i = () => n.set(e());
    return i(), Rt(() => {
        const s = () => V.preRender(i, !1, !0),
            o = t.map(r => r.on("change", s));
        return () => {
            o.forEach(r => r()), X(i)
        }
    }), n
}

function Rd(t, ...e) {
    const n = t.length;

    function i() {
        let s = "";
        for (let o = 0; o < n; o++) {
            s += t[o];
            const r = e[o];
            r && (s += k(r) ? r.get() : r)
        }
        return s
    }
    return yi(e.filter(k), i)
}

function Lf(t) {
    zt.current = [], t();
    const e = yi(zt.current, t);
    return zt.current = void 0, e
}

function xi(t, e, n, i) {
    if (typeof t == "function") return Lf(t);
    if (n !== void 0 && !Array.isArray(n) && typeof e != "function") return kf(t, e, n, i);
    const s = typeof e == "function" ? e : Iu(e, n, i),
        o = Array.isArray(t) ? Qs(t, s) : Qs([t], ([a]) => s(a)),
        r = Array.isArray(t) ? void 0 : t.accelerate;
    return r && !r.isTransformed && typeof e != "function" && Array.isArray(n) && i ? .clamp !== !1 && (o.accelerate = { ...r,
        times: e,
        keyframes: n,
        isTransformed: !0,
        ...i ? .ease ? {
            ease: i.ease
        } : {}
    }), o
}

function Qs(t, e) {
    const n = K(() => []);
    return yi(t, () => {
        n.length = 0;
        const i = t.length;
        for (let s = 0; s < i; s++) n[s] = t[s].get();
        return e(n)
    })
}

function kf(t, e, n, i) {
    const s = K(() => Object.keys(n)),
        o = K(() => ({}));
    for (const r of s) o[r] = xi(t, e, n[r], i);
    return o
}

function If(t, e = {}) {
    const {
        isStatic: n
    } = (0, p.useContext)(ct), i = () => k(t) ? t.get() : t;
    if (n) return xi(i);
    const s = vi(i());
    return (0, p.useInsertionEffect)(() => Bu(s, t, e), [s, JSON.stringify(e)]), s
}

function Ld(t, e = {}) {
    return If(t, {
        type: "spring",
        ...e
    })
}

function kd(t) {
    const e = (0, p.useRef)(0),
        {
            isStatic: n
        } = (0, p.useContext)(ct);
    (0, p.useEffect)(() => {
        if (n) return;
        const i = ({
            timestamp: s,
            delta: o
        }) => {
            e.current || (e.current = s), t(s - e.current, o)
        };
        return V.update(i, !0), () => X(i)
    }, [t])
}

function Bf() {
    !ci.current && lo();
    const [t] = (0, p.useState)(Me.current);
    return t
}

function Ff() {
    const t = Bf(),
        {
            reducedMotion: e
        } = (0, p.useContext)(ct);
    return e === "never" ? !1 : e === "always" ? !0 : t
}

function Of(t) {
    t.values.forEach(e => e.stop())
}

function kn(t, e) {
    [...e].reverse().forEach(n => {
        const i = t.getVariant(n);
        i && ni(t, i), t.variantChildren && t.variantChildren.forEach(s => {
            kn(s, e)
        })
    })
}

function jf(t, e) {
    if (Array.isArray(e)) return kn(t, e);
    if (typeof e == "string") return kn(t, [e]);
    ni(t, e)
}

function Wf() {
    let t = !1;
    const e = new Set,
        n = {
            subscribe(i) {
                return e.add(i), () => {
                    e.delete(i)
                }
            },
            start(i, s) {
                G(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
                const o = [];
                return e.forEach(r => {
                    o.push(Yr(r, i, {
                        transitionOverride: s
                    }))
                }), Promise.all(o)
            },
            set(i) {
                return G(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), e.forEach(s => {
                    jf(s, i)
                })
            },
            stop() {
                e.forEach(i => {
                    Of(i)
                })
            },
            mount() {
                return t = !0, () => {
                    t = !1, n.stop()
                }
            }
        };
    return n
}

function wi(t) {
    return typeof t == "object" && !Array.isArray(t)
}

function ra(t, e, n, i) {
    return t == null ? [] : typeof t == "string" && wi(e) ? Fe(t, n, i) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t.filter(s => s != null) : [t]
}

function Nf(t, e, n) {
    return t * (e + 1)
}

function tr(t, e, n, i) {
    return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? n : e.startsWith("<") ? Math.max(0, n + parseFloat(e.slice(1))) : i.get(e) ? ? t
}

function Uf(t, e, n) {
    for (let i = 0; i < t.length; i++) {
        const s = t[i];
        s.at > e && s.at < n && (Et(t, s), i--)
    }
}

function $f(t, e, n, i, s, o) {
    Uf(t, s, o);
    for (let r = 0; r < e.length; r++) t.push({
        value: e[r],
        at: R(s, o, i[r]),
        easing: yr(n, r)
    })
}

function _f(t, e) {
    for (let n = 0; n < t.length; n++) t[n] = t[n] / (e + 1)
}

function zf(t, e) {
    return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at
}
var Hf = "easeInOut",
    Kf = 20;

function Gf(t, {
    defaultTransition: e = {},
    ...n
} = {}, i, s) {
    const o = e.duration || .3,
        r = new Map,
        a = new Map,
        l = {},
        c = new Map;
    let u = 0,
        h = 0,
        f = 0;
    for (let m = 0; m < t.length; m++) {
        const d = t[m];
        if (typeof d == "string") {
            c.set(d, h);
            continue
        } else if (!Array.isArray(d)) {
            c.set(d.name, tr(h, d.at, u, c));
            continue
        }
        let [y, v, g = {}] = d;
        g.at !== void 0 && (h = tr(h, g.at, u, c));
        let T = 0;
        const x = (w, P, M, D = 0, A = 0) => {
            const b = Xf(w),
                {
                    delay: C = 0,
                    times: E = Kn(b),
                    type: F = e.type || "keyframes",
                    repeat: N,
                    repeatType: J,
                    repeatDelay: it = 0,
                    ...Y
                } = P;
            let {
                ease: L = e.ease || "easeOut",
                duration: B
            } = P;
            const st = typeof C == "function" ? C(D, A) : C,
                ut = b.length,
                le = Zn(F) ? F : s ? .[F || "keyframes"];
            if (ut <= 2 && le) {
                let Bt = 100;
                if (ut === 2 && Zf(b)) {
                    const Ft = b[1] - b[0];
                    Bt = Math.abs(Ft)
                }
                const ue = { ...e,
                    ...Y
                };
                B !== void 0 && (ue.duration = z(B));
                const ce = Rr(ue, Bt, le);
                L = ce.ease, B = ce.duration
            }
            B ? ? (B = o);
            const Ti = h + st;
            E.length === 1 && E[0] === 0 && (E[1] = 1);
            const Si = E.length - b.length;
            if (Si > 0 && kr(E, Si), b.length === 1 && b.unshift(null), N) {
                G(N < Kf, "Repeat count too high, must be less than 20", "repeat-count-high"), B = Nf(B, N);
                const Bt = [...b],
                    ue = [...E];
                L = Array.isArray(L) ? [...L] : [L];
                const ce = [...L];
                for (let Ft = 0; Ft < N; Ft++) {
                    b.push(...Bt);
                    for (let Ot = 0; Ot < Bt.length; Ot++) E.push(ue[Ot] + (Ft + 1)), L.push(Ot === 0 ? "linear" : yr(ce, Ot - 1))
                }
                _f(E, N)
            }
            const bi = Ti + B;
            $f(M, b, L, E, Ti, bi), T = Math.max(st + B, T), f = Math.max(bi, f)
        };
        if (k(y)) {
            const w = er(y, a);
            x(v, g, nr("default", w))
        } else {
            const w = ra(y, v, i, l),
                P = w.length;
            for (let M = 0; M < P; M++) {
                v = v, g = g;
                const D = w[M],
                    A = er(D, a);
                for (const b in v) x(v[b], Yf(g, b), nr(b, A), M, P)
            }
        }
        u = h, h += T
    }
    return a.forEach((m, d) => {
        for (const y in m) {
            const v = m[y];
            v.sort(zf);
            const g = [],
                T = [],
                x = [];
            for (let D = 0; D < v.length; D++) {
                const {
                    at: A,
                    value: b,
                    easing: C
                } = v[D];
                g.push(b), T.push(bt(0, f, A)), x.push(C || "easeOut")
            }
            T[0] !== 0 && (T.unshift(0), g.unshift(g[0]), x.unshift(Hf)), T[T.length - 1] !== 1 && (T.push(1), g.push(null)), r.has(d) || r.set(d, {
                keyframes: {},
                transition: {}
            });
            const w = r.get(d);
            w.keyframes[y] = g;
            const {
                type: P,
                ...M
            } = e;
            w.transition[y] = { ...M,
                duration: f,
                ease: x,
                times: T,
                ...n
            }
        }
    }), r
}

function er(t, e) {
    return !e.has(t) && e.set(t, {}), e.get(t)
}

function nr(t, e) {
    return e[t] || (e[t] = []), e[t]
}

function Xf(t) {
    return Array.isArray(t) ? t : [t]
}

function Yf(t, e) {
    return t && t[e] ? { ...t,
        ...t[e]
    } : { ...t
    }
}
var qf = t => typeof t == "number",
    Zf = t => t.every(qf);

function Jf(t) {
    const e = {
            presenceContext: null,
            props: {},
            visualState: {
                renderState: {
                    transform: {},
                    transformOrigin: {},
                    style: {},
                    vars: {},
                    attrs: {}
                },
                latestValues: {}
            }
        },
        n = Oe(t) && !oo(t) ? new Ao(e) : new xo(e);
    n.mount(t), te.set(t, n)
}

function Qf(t) {
    const e = new Zu({
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                output: {}
            },
            latestValues: {}
        }
    });
    e.mount(t), te.set(t, e)
}

function td(t, e) {
    return k(t) || typeof t == "number" || typeof t == "string" && !wi(e)
}

function oa(t, e, n, i) {
    const s = [];
    if (td(t, e)) s.push(Ro(t, wi(e) && e.default || e, n && (n.default || n)));
    else {
        if (t == null) return s;
        const o = ra(t, e, i),
            r = o.length;
        G(!!r, "No valid elements provided.", "no-valid-elements");
        for (let a = 0; a < r; a++) {
            const l = o[a],
                c = l instanceof Element ? Jf : Qf;
            te.has(l) || c(l);
            const u = te.get(l),
                h = { ...n
                };
            "delay" in h && typeof h.delay == "function" && (h.delay = h.delay(a, r)), s.push(...si(u, { ...e,
                transition: h
            }, {}))
        }
    }
    return s
}

function ed(t, e, n) {
    const i = [],
        s = t.map(o => {
            if (Array.isArray(o) && typeof o[0] == "function") {
                const r = o[0],
                    a = Z(0);
                return a.on("change", r), o.length === 1 ? [a, [0, 1]] : o.length === 2 ? [a, [0, 1], o[1]] : [a, o[1], o[2]]
            }
            return o
        });
    return Gf(s, e, n, {
        spring: Jt
    }).forEach(({
        keyframes: o,
        transition: r
    }, a) => {
        i.push(...oa(a, o, r))
    }), i
}

function nd(t) {
    return Array.isArray(t) && t.some(Array.isArray)
}

function aa(t = {}) {
    const {
        scope: e,
        reduceMotion: n
    } = t;

    function i(s, o, r) {
        let a = [],
            l;
        if (nd(s)) {
            const {
                onComplete: u,
                ...h
            } = o || {};
            typeof u == "function" && (l = u), a = ed(s, n !== void 0 ? {
                reduceMotion: n,
                ...h
            } : h, e)
        } else {
            const {
                onComplete: u,
                ...h
            } = r || {};
            typeof u == "function" && (l = u), a = oa(s, o, n !== void 0 ? {
                reduceMotion: n,
                ...h
            } : h, e)
        }
        const c = new Nl(a);
        return l && c.finished.then(l), e && (e.animations.push(c), c.finished.then(() => {
            Et(e.animations, c)
        })), c
    }
    return i
}
var Id = aa();

function Bd() {
    const t = K(() => ({
            current: null,
            animations: []
        })),
        e = Ff() ? ? void 0,
        n = (0, p.useMemo)(() => aa({
            scope: t,
            reduceMotion: e
        }), [t, e]);
    return cf(() => {
        t.animations.forEach(i => i.stop()), t.animations.length = 0
    }), [t, n]
}

function Fd() {
    const t = K(Wf);
    return Rt(t.mount, []), t
}
var id = class {
        constructor() {
            this.componentControls = new Set
        }
        subscribe(t) {
            return this.componentControls.add(t), () => this.componentControls.delete(t)
        }
        start(t, e) {
            this.componentControls.forEach(n => {
                n.start(t.nativeEvent || t, e)
            })
        }
        cancel() {
            this.componentControls.forEach(t => {
                t.cancel()
            })
        }
        stop() {
            this.componentControls.forEach(t => {
                t.stop()
            })
        }
    },
    sd = () => new id;

function Od() {
    return K(sd)
}
var rd = {
    some: 0,
    all: 1
};

function od(t, e, {
    root: n,
    margin: i,
    amount: s = "some"
} = {}) {
    const o = Fe(t),
        r = new WeakMap,
        a = c => {
            c.forEach(u => {
                const h = r.get(u.target);
                if (u.isIntersecting !== !!h)
                    if (u.isIntersecting) {
                        const f = e(u.target, u);
                        typeof f == "function" ? r.set(u.target, f) : l.unobserve(u.target)
                    } else typeof h == "function" && (h(u), r.delete(u.target))
            })
        },
        l = new IntersectionObserver(a, {
            root: n,
            rootMargin: i,
            threshold: typeof s == "number" ? s : rd[s]
        });
    return o.forEach(c => l.observe(c)), () => l.disconnect()
}

function jd(t, {
    root: e,
    margin: n,
    amount: i,
    once: s = !1,
    initial: o = !1
} = {}) {
    const [r, a] = (0, p.useState)(o);
    return (0, p.useEffect)(() => {
        if (!t.current || s && r) return;
        const l = () => (a(!0), s ? void 0 : () => a(!1)),
            c = {
                root: e && e.current || void 0,
                margin: n,
                amount: i
            };
        return od(t.current, l, c)
    }, [e, t, n, s, i]), r
}
var la = (0, p.createContext)(null);

function ad(t, e, n, i) {
    if (!i) return t;
    const s = t.findIndex(u => u.value === e);
    if (s === -1) return t;
    const o = i > 0 ? 1 : -1,
        r = t[s + o];
    if (!r) return t;
    const a = t[s],
        l = r.layout,
        c = R(l.min, l.max, .5);
    return o === 1 && a.layout.max + n > c || o === -1 && a.layout.min + n < c ? ga(t, s, s + o) : t
}

function ld({
    children: t,
    as: e = "ul",
    axis: n = "y",
    onReorder: i,
    values: s,
    ...o
}, r) {
    const a = K(() => ea[e]),
        l = [],
        c = (0, p.useRef)(!1),
        u = (0, p.useRef)(null);
    G(!!s, "Reorder.Group must be provided a values prop", "reorder-values");
    const h = {
        axis: n,
        groupRef: u,
        registerItem: (d, y) => {
            const v = l.findIndex(g => d === g.value);
            v !== -1 ? l[v].layout = y[n] : l.push({
                value: d,
                layout: y[n]
            }), l.sort(ud)
        },
        updateOrder: (d, y, v) => {
            if (c.current) return;
            const g = ad(l, d, y, v);
            if (l !== g) {
                c.current = !0;
                const T = [...s];
                for (let x = 0; x < g.length; x++)
                    if (l[x].value !== g[x].value) {
                        const w = s.indexOf(l[x].value),
                            P = s.indexOf(g[x].value);
                        w !== -1 && P !== -1 && ([T[w], T[P]] = [T[P], T[w]]);
                        break
                    }
                i(T)
            }
        }
    };
    (0, p.useEffect)(() => {
        c.current = !1
    });
    const f = d => {
            u.current = d, typeof r == "function" ? r(d) : r && (r.current = d)
        },
        m = {
            overflowAnchor: "none",
            ...o.style
        };
    return (0, _.jsx)(a, { ...o,
        style: m,
        ref: f,
        ignoreStrict: !0,
        children: (0, _.jsx)(la.Provider, {
            value: h,
            children: t
        })
    })
}
var Wd = (0, p.forwardRef)(ld);

function ud(t, e) {
    return t.layout.min - e.layout.min
}
var ye = 50,
    cd = 25,
    hd = new Set(["auto", "scroll"]),
    Xt = new WeakMap,
    Yt = new WeakMap,
    Ut = null;

function fd() {
    if (Ut) {
        const t = In(Ut, "y");
        t && (Yt.delete(t), Xt.delete(t));
        const e = In(Ut, "x");
        e && e !== t && (Yt.delete(e), Xt.delete(e)), Ut = null
    }
}

function dd(t, e) {
    const n = getComputedStyle(t),
        i = e === "x" ? n.overflowX : n.overflowY,
        s = t === document.body || t === document.documentElement;
    return hd.has(i) || s
}

function In(t, e) {
    let n = t ? .parentElement;
    for (; n;) {
        if (dd(n, e)) return n;
        n = n.parentElement
    }
    return null
}

function md(t, e, n) {
    const i = e.getBoundingClientRect(),
        s = n === "x" ? Math.max(0, i.left) : Math.max(0, i.top),
        o = n === "x" ? Math.min(window.innerWidth, i.right) : Math.min(window.innerHeight, i.bottom),
        r = t - s,
        a = o - t;
    if (r < ye) {
        const l = 1 - r / ye;
        return {
            amount: -25 * l * l,
            edge: "start"
        }
    } else if (a < ye) {
        const l = 1 - a / ye;
        return {
            amount: cd * l * l,
            edge: "end"
        }
    }
    return {
        amount: 0,
        edge: null
    }
}

function pd(t, e, n, i) {
    if (!t) return;
    Ut = t;
    const s = In(t, n);
    if (!s) return;
    const {
        amount: o,
        edge: r
    } = md(e - (n === "x" ? window.scrollX : window.scrollY), s, n);
    if (r === null) {
        Yt.delete(s), Xt.delete(s);
        return
    }
    const a = Yt.get(s),
        l = s === document.body || s === document.documentElement;
    if (a !== r) {
        if (!(r === "start" && i < 0 || r === "end" && i > 0)) return;
        Yt.set(s, r);
        const c = n === "x" ? s.scrollWidth - (l ? window.innerWidth : s.clientWidth) : s.scrollHeight - (l ? window.innerHeight : s.clientHeight);
        Xt.set(s, c)
    }
    if (o > 0) {
        const c = Xt.get(s);
        if ((n === "x" ? l ? window.scrollX : s.scrollLeft : l ? window.scrollY : s.scrollTop) >= c) return
    }
    n === "x" ? l ? window.scrollBy({
        left: o
    }) : s.scrollLeft += o : l ? window.scrollBy({
        top: o
    }) : s.scrollTop += o
}

function ir(t, e = 0) {
    return k(t) ? t : vi(e)
}

function gd({
    children: t,
    style: e = {},
    value: n,
    as: i = "li",
    onDrag: s,
    onDragEnd: o,
    layout: r = !0,
    ...a
}, l) {
    const c = K(() => ea[i]),
        u = (0, p.useContext)(la),
        h = {
            x: ir(e.x),
            y: ir(e.y)
        },
        f = xi([h.x, h.y], ([g, T]) => g || T ? 1 : "unset");
    G(!!u, "Reorder.Item must be a child of Reorder.Group", "reorder-item-child");
    const {
        axis: m,
        registerItem: d,
        updateOrder: y,
        groupRef: v
    } = u;
    return (0, _.jsx)(c, {
        drag: m,
        ...a,
        dragSnapToOrigin: !0,
        style: { ...e,
            x: h.x,
            y: h.y,
            zIndex: f
        },
        layout: r,
        onDrag: (g, T) => {
            const {
                velocity: x,
                point: w
            } = T, P = h[m].get();
            y(n, P, x[m]), pd(v.current, w[m], m, x[m]), s && s(g, T)
        },
        onDragEnd: (g, T) => {
            fd(), o && o(g, T)
        },
        onLayoutMeasure: g => {
            d(n, g)
        },
        ref: l,
        ignoreStrict: !0,
        children: t
    })
}
var Nd = (0, p.forwardRef)(gd);
export {
    Sd as C, V as D, X as E, ie as O, bd as S, wd as T, ea as _, Fd as a, Pd as b, Bf as c, xi as d, Rd as f, Md as g, Ed as h, Od as i, kd as l, Dd as m, Wd as n, Bd as o, vi as p, jd as r, Id as s, Nd as t, Ld as u, Vd as v, Fo as w, Ad as x, Cd as y
};