try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ed12ac34-d745-47d1-8bc2-f2e7249946f9", e._sentryDebugIdIdentifier = "sentry-dbid-ed12ac34-d745-47d1-8bc2-f2e7249946f9")
    })()
} catch {}
var p = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
    return this
})();

function m() {}

function v(e) {
    return typeof p.Buffer < "u" && p.Buffer.isBuffer(e)
}

function T(e) {
    return Object.getOwnPropertySymbols(e).filter(t => Object.prototype.propertyIsEnumerable.call(e, t))
}

function A(e) {
    return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
}
var h = "[object RegExp]",
    w = "[object String]",
    I = "[object Number]",
    S = "[object Boolean]",
    Z = "[object Arguments]",
    U = "[object Symbol]",
    B = "[object Date]",
    N = "[object Map]",
    D = "[object Set]",
    x = "[object Array]",
    P = "[object Function]",
    _ = "[object ArrayBuffer]",
    d = "[object Object]",
    z = "[object Error]",
    L = "[object DataView]",
    C = "[object Uint8Array]",
    F = "[object Uint8ClampedArray]",
    K = "[object Uint16Array]",
    M = "[object Uint32Array]",
    W = "[object BigUint64Array]",
    E = "[object Int8Array]",
    R = "[object Int16Array]",
    G = "[object Int32Array]",
    H = "[object BigInt64Array]",
    J = "[object Float32Array]",
    Q = "[object Float64Array]";

function O(e) {
    if (!e || typeof e != "object") return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(e) === "[object Object]" : !1
}

function X(e, t) {
    return e === t || Number.isNaN(e) && Number.isNaN(t)
}

function Y(e, t, r) {
    return l(e, t, void 0, void 0, void 0, void 0, r)
}

function l(e, t, r, o, a, s, c) {
    const y = c(e, t, r, o, a, s);
    if (y !== void 0) return y;
    if (typeof e == typeof t) switch (typeof e) {
        case "bigint":
        case "string":
        case "boolean":
        case "symbol":
        case "undefined":
            return e === t;
        case "number":
            return e === t || Object.is(e, t);
        case "function":
            return e === t;
        case "object":
            return g(e, t, s, c)
    }
    return g(e, t, s, c)
}

function g(e, t, r, o) {
    if (Object.is(e, t)) return !0;
    let a = A(e),
        s = A(t);
    if (a === "[object Arguments]" && (a = d), s === "[object Arguments]" && (s = d), a !== s) return !1;
    switch (a) {
        case w:
            return e.toString() === t.toString();
        case I:
            return X(e.valueOf(), t.valueOf());
        case S:
        case B:
        case U:
            return Object.is(e.valueOf(), t.valueOf());
        case h:
            return e.source === t.source && e.flags === t.flags;
        case P:
            return e === t
    }
    r = r ? ? new Map;
    const c = r.get(e),
        y = r.get(t);
    if (c != null && y != null) return c === t;
    r.set(e, t), r.set(t, e);
    try {
        switch (a) {
            case N:
                if (e.size !== t.size) return !1;
                for (const [n, f] of e.entries())
                    if (!t.has(n) || !l(f, t.get(n), n, e, t, r, o)) return !1;
                return !0;
            case D:
                {
                    if (e.size !== t.size) return !1;
                    const n = Array.from(e.values()),
                        f = Array.from(t.values());
                    for (let i = 0; i < n.length; i++) {
                        const u = n[i],
                            b = f.findIndex(j => l(u, j, void 0, e, t, r, o));
                        if (b === -1) return !1;
                        f.splice(b, 1)
                    }
                    return !0
                }
            case x:
            case C:
            case F:
            case K:
            case M:
            case W:
            case E:
            case R:
            case G:
            case H:
            case J:
            case Q:
                if (v(e) !== v(t) || e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++)
                    if (!l(e[n], t[n], n, e, t, r, o)) return !1;
                return !0;
            case _:
                return e.byteLength !== t.byteLength ? !1 : g(new Uint8Array(e), new Uint8Array(t), r, o);
            case L:
                return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : g(new Uint8Array(e), new Uint8Array(t), r, o);
            case z:
                return e.name === t.name && e.message === t.message;
            case d:
                {
                    if (!(g(e.constructor, t.constructor, r, o) || O(e) && O(t))) return !1;
                    const n = [...Object.keys(e), ...T(e)],
                        f = [...Object.keys(t), ...T(t)];
                    if (n.length !== f.length) return !1;
                    for (let i = 0; i < n.length; i++) {
                        const u = n[i],
                            b = e[u];
                        if (!Object.hasOwn(t, u)) return !1;
                        const j = t[u];
                        if (!l(b, j, u, e, t, r, o)) return !1
                    }
                    return !0
                }
            default:
                return !1
        }
    } finally {
        r.delete(e), r.delete(t)
    }
}

function $(e, t) {
    return Y(e, t, m)
}
export {
    C,
    v as D,
    T as E,
    m as O,
    M as S,
    A as T,
    h as _,
    x as a,
    U as b,
    B as c,
    R as d,
    G as f,
    d as g,
    I as h,
    _ as i,
    J as l,
    N as m,
    X as n,
    S as o,
    E as p,
    Z as r,
    L as s,
    $ as t,
    Q as u,
    D as v,
    F as w,
    K as x,
    w as y
};