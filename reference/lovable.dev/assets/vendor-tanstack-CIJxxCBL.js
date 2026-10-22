import {
    o as mr
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as oi,
    r as ai
} from "./vendor-react-Fx2PtaaM.js";
import {
    n as ci
} from "./vendor-sync-store-hJwz-_Wy.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2e2f237c-ed88-410f-8eb6-59e230a16923", e._sentryDebugIdIdentifier = "sentry-dbid-2e2f237c-ed88-410f-8eb6-59e230a16923")
    })()
} catch {}

function Nl(e = {}) {
    if (e.isNotFound = !0, e.throw) throw e;
    return e
}

function Ne(e) {
    return e ? .isNotFound === !0
}

function yr(e) {
    e.statusCode = e.statusCode || e.code || 307;
    const t = new Headers(e.headers);
    e.href && t.get("Location") === null && t.set("Location", e.href);
    const s = new Response(null, {
        status: e.statusCode,
        headers: t
    });
    if (s.options = e, e.throw) throw s;
    return s
}

function br(e) {
    return e instanceof Response && !!e.options
}

function jl(e) {
    if (e !== null && typeof e == "object" && e.isSerializedRedirect) return yr(e)
}

function ui(e) {
    return e.replaceAll("\0", "/").replaceAll("�", "/").replace(/~([~0r])/g, (t, s) => s === "0" ? "\0" : s === "r" ? "�" : s)
}

function pe(e) {
    return e[e.length - 1]
}

function Sr(e, t) {
    return typeof e == "function" ? e(t) : e
}
var rs = Object.prototype.hasOwnProperty;

function wr(e) {
    for (const t in e)
        if (rs.call(e, t)) return !0;
    return !1
}
var lt = () => Object.create(null),
    Te = (e, t) => he(e, t, !0);

function he(e, t, s, r = 0) {
    if (e === t) return e;
    if (r++ > 500) return t;
    const n = Array.isArray(e) && Array.isArray(t);
    if (!n && !(gt(e) && gt(t))) return t;
    const i = Object.keys(e),
        o = i.length,
        a = Object.keys(t),
        c = a.length;
    if (n ? o !== e.length || c !== t.length || o && pe(i) !== `${o-1}` || c && pe(a) !== `${c-1}` : o !== Object.getOwnPropertyNames(e).length || c !== Object.getOwnPropertyNames(t).length || Object.getOwnPropertySymbols(t).length) return t;
    let u = 0,
        l, f, h;
    if (n) {
        for (; u < c && (h = u, f = e[h], l = t[h], l = f === l ? f : typeof f == "object" ? he(f, l, s, r) : l, l === f); u++);
        if (u === c && o === c) return e
    } else {
        let v = o === c,
            p = !0;
        for (; u < c; u++) {
            h = a[u], f = e[h];
            const g = t[h];
            l = f === g ? f : typeof f == "object" ? he(f, g, s, r) : g, v && = l === f && (i[u] === h || rs.call(e, h)), p && = Object.is(l, g), i[u] = l
        }
        if (v) return Object.getOwnPropertySymbols(e).length ? t : e;
        if (p) return t
    }
    const d = n ? a.fill(0) : s ? lt() : {};
    for (let v = 0; v < c; v++) h = n ? v : a[v], n ? (f = e[h], v > u && (l = t[h], l = f === l ? f : typeof f == "object" ? he(f, l, s, r) : l), d[h] = v < u ? f : l) : d[h] = i[v];
    return d
}

function gt(e) {
    return !e || typeof e != "object" ? !1 : (Object.getPrototypeOf(e) ? .constructor ? ? Object) === Object
}

function G(e, t, s, r) {
    if (e === t) return !0;
    if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length) return !1;
        for (let n = 0, i = e.length; n < i; n++) {
            const o = e[n],
                a = t[n];
            if (o !== a && !G(o, a, s, r)) return !1
        }
        return !0
    }
    if (gt(e) && gt(t)) {
        if (s) {
            for (const i in t)
                if ((r || t[i] !== void 0) && !G(e[i], t[i], s, r)) return !1;
            return !0
        }
        let n = 0;
        if (r) n = Object.keys(e).length;
        else
            for (const i in e) e[i] !== void 0 && n++;
        for (const i in t)
            if ((r || t[i] !== void 0) && (n-- === 0 || !G(e[i], t[i], s, r))) return !1;
        return n === 0
    }
    return !1
}

function li(e) {
    return typeof e ? .message != "string" ? !1 : e.message.startsWith("Failed to fetch dynamically imported module") || e.message.startsWith("error loading dynamically imported module") || e.message.startsWith("Importing a module script failed")
}
var fi = /[\x00-\x1f\x7f"<>`{}]/g;

function hi(e) {
    return e.replace(fi, t => "%" + t.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"))
}

function ks(e) {
    let t;
    try {
        t = decodeURI(e)
    } catch {
        t = e.replaceAll(/%[0-9A-F]{2}/gi, s => {
            try {
                return decodeURI(s)
            } catch {
                return s
            }
        })
    }
    return hi(t)
}
var di = ["http:", "https:", "mailto:", "tel:"];

function $e(e) {
    if (e[0] !== "/" && e.includes(":")) return /^[\x00-\x20]*([a-z][a-z\d+.\t\n\r-]*:)/i.exec(e) ? .[1] ? .replace(/[\t\n\r]/g, "").toLowerCase()
}
var _r = /^[\x00-\x20]*[\\/][\t\n\r]*[\\/]/;

function Rr(e, t) {
    if (!e) return !1;
    if (_r.test(e)) return !0;
    const s = $e(e);
    return s ? !t.has(s) : !1
}
var pi = {
        "&": "\\u0026",
        ">": "\\u003e",
        "<": "\\u003c",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    },
    vi = /[&><\u2028\u2029]/g;

function gi(e) {
    return e.replace(vi, t => pi[t])
}

function Ue(e) {
    if (!e) return e;
    let t = e;
    if (/[%\\\x00-\x1f\x7f]/.test(e)) {
        const s = /%25|%5C/gi;
        let r = 0,
            n;
        for (t = "";
            (n = s.exec(e)) !== null;) t += ks(e.slice(r, n.index)) + n[0], r = s.lastIndex;
        t += ks(r ? e.slice(r) : e)
    }
    return t
}

function mi(e) {
    return /[\s\u0080-\uFFFF]/.test(e) ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : e
}

function yi(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let s = 0; s < e.length; s++)
        if (e[s] !== t[s]) return !1;
    return !0
}

function Me(e) {
    return e.replace(/\/{2,}/g, "/")
}

function Er(e) {
    return e === "/" ? e : e.replace(/^\/+/, "")
}

function ee(e) {
    const t = e.length;
    return t > 1 && e[t - 1] === "/" ? e.replace(/\/+$/, "") : e
}

function Pr(e) {
    return ee(Er(e))
}

function Fs(e, t) {
    return e ? .endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e
}

function Ms(e, t, s = "never", r) {
    if (t.includes("//") && (t = Me(t)), t.startsWith("/")) return t.length === 1 || s === "preserve" ? t : s === "always" ? t.endsWith("/") ? t : `${t}/` : t.endsWith("/") ? t.slice(0, -1) : t;
    const n = t === ".";
    let i;
    if (r) {
        i = n ? e : e + "\0" + t;
        const u = r.get(i);
        if (u) return u
    }
    let o;
    if (n) o = e.split("/");
    else {
        for (e.includes("//") && (e = Me(e)), o = e.split("/"); o.length > 1 && pe(o) === "";) o.pop();
        const u = t.split("/");
        for (let l = 0, f = u.length; l < f; l++) {
            const h = u[l];
            h === "" ? l ? l === f - 1 && o.push(h) : o = [h] : h === ".." ? o.length > 1 ? o.pop() : o = [""] : h === "." || o.push(h)
        }
    }
    o.length > 1 && (pe(o) === "" ? s === "never" && o.pop() : s === "always" && o.push(""));
    const a = o.join("/"),
        c = (n ? Me(a) : a) || "/";
    return i && r && r.set(i, c), c
}

function bi(e) {
    const t = new Map(e.map(r => [encodeURIComponent(r), r])),
        s = new RegExp([...t.keys()].join("|").replace(/[.*()]/g, "\\$&"), "g");
    return r => r.replace(s, n => t.get(n) ? ? n)
}

function Si(e) {
    return e == null || e === ""
}

function wi(e, t, s) {
    if (typeof t != "string") return "" + (t ? ? void 0);
    const r = e === "_splat";
    if (r && (!t || /^[a-zA-Z0-9\-._~!/]*$/.test(t))) return t;
    let n = encodeURIComponent(t);
    return r && (n = n.replaceAll("%2F", "/")), s ? s(n) : n
}

function As(e, t, s, r, n) {
    const i = e.endsWith("/") ? "/" : "";
    let o = "";
    for (const a of t) {
        if (typeof a == "string") {
            o += a;
            continue
        }
        const [c, u, l, f] = a, h = c === 2, d = h && f !== void 0 ? f + i : f;
        let v = s[u];
        if (!(c === 3 && v == null)) {
            if (n && (n[u] = v, h && (n["*"] = v)), h && Si(v)) {
                if (l === "/" && !d) continue;
                v = ""
            }
            o += l + wi(u, v, r) + (d || "")
        }
    }
    return o + i || "/"
}

function mt(e) {
    const t = new Map;
    let s, r;
    return {
        get(n) {
            const i = t.get(n);
            if (i) return i.visited = !0, i.value
        },
        set(n, i) {
            const o = t.get(n);
            if (o) {
                o.value = i;
                return
            }
            if (t.size >= e) {
                let c = s ? .next().value;
                for (; !c || c.visited;) c ? c.visited = !1 : s = t.values(), c = s.next().value;
                c === r && (s = void 0), t.delete(c.key)
            }
            const a = {
                key: n,
                value: i,
                visited: !1
            };
            r = a, t.set(n, a)
        },
        clear() {
            t.clear(), s = void 0, r = void 0
        }
    }
}

function ns() {
    throw new Error("Invariant failed")
}
var fe = 4,
    Cr = 5;

function _i(e) {
    const t = e.names;
    if (t) return t;
    const s = [];
    for (const r of e) typeof r != "string" && s.push(r[1]);
    return e.names = s
}

function Ri(e, t, s) {
    const r = e.substring(t, s);
    if (r.charCodeAt(0) === 36) return r.length === 1 ? [2, "_splat", "", void 0] : [1, r.substring(1), "", ""];
    const n = r.indexOf("{");
    if (n >= 0) {
        const i = r.indexOf("}", n),
            o = r.charCodeAt(n + 1) === 45,
            a = n + (o ? 3 : 2);
        if (i >= 0 && r.charCodeAt(a - 1) === 36 && (!o || a < i)) {
            const c = r.substring(a, i);
            return [o ? 3 : c ? 1 : 2, c || "_splat", r.substring(0, n), e.substring(t + i + 1, c ? s : e.length)]
        }
    }
    return r
}

function Ve(e, t, s, r, n, i) {
    let o = s;
    const a = t.fullPath ? ? t.from,
        c = t.options,
        u = a.length,
        l = a.endsWith("/") ? u - 1 : u,
        f = c ? .caseSensitive ? ? e,
        h = c ? .params ? .parse ? ? c ? .parseParams;
    let d, v = i ? s - 1 : 0;
    if (!r || a.includes("$")) {
        d = i ? .slice() ? ? [];
        const m = pe(d);
        m && typeof m != "string" && m[0] === 2 && (d[d.length - 1] = [m[0], m[1], m[2], m[3] === void 0 ? void 0 : m[3] + a.substring(s - (a[s - 2] === "/" ? 2 : 1), l)], v = u)
    }
    for (; o < u;) {
        const m = o,
            y = a.indexOf("/", m);
        let S = y === -1 ? u : y;
        const P = Ri(a, m, S);
        o = S + 1;
        let I;
        if (typeof P == "string") {
            if (!r) continue;
            let E = P,
                b;
            f ? b = r.static ? ? = new Map : (E = P.toLowerCase(), b = r.staticInsensitive ? ? = new Map);
            const C = b.get(E);
            if (C) I = C;
            else {
                const L = we(r);
                I = L, b.set(E, L)
            }
        } else {
            const E = P[0];
            let b = P[2],
                C = P[3] ? ? "";
            if (E === 2 && (S = u, o = S + 1), d && v < S && (v < m - 1 && d.push(a.substring(v, m - 1)), P[2] = "/" + b, E === 2 && P[3] !== void 0 && l < u && (P[3] = C.slice(0, -1)), d.push(P), v = S), !r) continue;
            const L = f && !!(b || C);
            f || (b = b.toLowerCase(), C = C.toLowerCase());
            const k = E === 1 ? r.dynamic ? ? = [] : E === 3 ? r.optional ? ? = [] : r.wildcard ? ? = [],
                w = E !== 2 && !h && k.find(_ => !_.parse && _.caseSensitive === L && _.prefix === b && _.suffix === C);
            if (w) I = w;
            else {
                const _ = we(r, E, L, b, C);
                I = _, k.push(_), k.length === 2 && n ? .push(k)
            }
        }
        r = I
    }
    d && v < l && d.push(a.substring(v, l));
    const p = d ? .slice();
    if (!r) return p;
    if (h && t.children && !t.isRoot && t.id && t.id.charCodeAt(t.id.lastIndexOf("/") + 1) === 95) {
        const m = we(r, Cr);
        (r.pathless ? ? = []).push(m), r = m
    }
    const g = (t.path || !t.children) && !t.isRoot;
    if (g && l < u) {
        const m = we(r, fe);
        r.index = m, r = m
    }
    return r.parse = h ? ? null, r.priority = c ? .params ? .priority ? ? 0, r.route || (r.data = p, g && (r.route = t)), [r, o, p]
}

function Or(e, t) {
    if (e.parse && !t.parse) return -1;
    if (!e.parse && t.parse) return 1;
    if (e.parse && t.parse && (e.priority || t.priority)) return t.priority - e.priority;
    if (e.prefix && t.prefix && e.prefix !== t.prefix) {
        if (e.prefix.startsWith(t.prefix)) return -1;
        if (t.prefix.startsWith(e.prefix)) return 1
    }
    if (e.suffix && t.suffix && e.suffix !== t.suffix) {
        if (e.suffix.endsWith(t.suffix)) return -1;
        if (t.suffix.endsWith(e.suffix)) return 1
    }
    return e.prefix && !t.prefix ? -1 : !e.prefix && t.prefix ? 1 : e.suffix && !t.suffix ? -1 : !e.suffix && t.suffix ? 1 : e.caseSensitive && !t.caseSensitive ? -1 : !e.caseSensitive && t.caseSensitive ? 1 : 0
}

function we(e, t = 0, s, r, n) {
    return {
        kind: t,
        depth: e ? e.depth + 1 : 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        data: void 0,
        parent: e,
        parse: null,
        priority: 0,
        caseSensitive: s,
        prefix: r,
        suffix: n
    }
}

function Ei(e, t) {
    const s = we(),
        r = [];

    function n(i, o, a, c) {
        const [u, l, f] = Ve(!1, i, o, a, r, c);
        if (i.children)
            for (const h of i.children) n(h, l, u, f)
    }
    for (const i of e) n(i, 1, s);
    for (const i of r) i.sort(Or);
    t.masksTree = s, t.flatCache = mt(1e3)
}

function Pi(e, t) {
    e || = "/";
    const s = t.flatCache.get(e);
    if (s !== void 0) return s;
    const r = is(e, t.masksTree);
    return t.flatCache.set(e, r), r
}

function Ci(e, t, s, r, n) {
    e || = "/", r || = "/";
    const i = t ? `case\0${e}` : e;
    let o = n.singleCache.get(i);
    return o || (o = we(), Ve(t, {
        from: e
    }, 1, o), n.singleCache.set(i, o)), is(r, o, s)
}

function Oi(e, t, s = !1) {
    const r = s ? e : `nofuzz\0${e}`,
        n = t.matchCache.get(r);
    if (n !== void 0) return n;
    e || = "/";
    let i;
    try {
        i = is(e, t.segmentTree, s)
    } catch (o) {
        if (o instanceof URIError) i = null;
        else throw o
    }
    return i && (i.branch = Ir(i.route)), t.matchCache.set(r, i), i
}

function Ti(e, t = !1) {
    const s = we(),
        r = [],
        n = {},
        i = {};
    let o = 0;

    function a(c, u, l, f) {
        if (c.init(o), c.id in n && ns(), n[c.id] = c, o !== 0 && c.path) {
            const p = ee(c.fullPath);
            (!i[p] || c.fullPath.endsWith("/")) && (i[p] = c)
        }
        o++;
        const [h, d, v] = Ve(t, c, u, l, r, f);
        if (c._interpolation = v, c.children)
            for (const p of c.children) a(p, d, h, v)
    }
    a(e, 1, s);
    for (const c of r) c.sort(Or);
    return {
        processedTree: {
            segmentTree: s,
            singleCache: mt(1e3),
            matchCache: mt(1e3),
            flatCache: null,
            masksTree: null
        },
        routesById: n,
        routesByPath: i
    }
}

function is(e, t, s = !1) {
    const r = e.split("/"),
        n = xi(e, r, t, s);
    if (!n) return null;
    const [i] = Tr(e, r, n);
    return {
        route: n.node.route,
        rawParams: i
    }
}

function Tr(e, t, s) {
    const r = Ii(s.node),
        n = s.node.data && _i(s.node.data),
        i = Object.create(null);
    let o = s.extract ? .part ? ? 0,
        a = s.extract ? .node ? ? 0,
        c = s.extract ? .path ? ? 0,
        u = s.extract ? .param ? ? 0;
    for (; a < r.length; o++, a++, c++) {
        const l = r[a];
        if (l.kind === fe) break;
        if (l.kind === Cr) {
            o--, c--;
            continue
        }
        const f = t[o],
            h = c;
        if (f && (c += f.length), l.kind === 1 || l.kind === 3) {
            const d = n[u++];
            if (l.kind === 3 && s.skipped & 1 << a) {
                o--, c = h - 1;
                continue
            }
            const v = l.suffix || l.prefix ? f.substring(l.prefix.length, f.length - l.suffix.length) : f;
            (v || l.kind === 1) && (i[d] = decodeURIComponent(v))
        } else if (l.kind === 2) {
            const d = l,
                v = e.substring(h + d.prefix.length, e.length - d.suffix.length),
                p = decodeURIComponent(v);
            i["*"] = p, i._splat = p;
            break
        }
    }
    return s.rawParams && Object.assign(i, s.rawParams), [i, {
        part: o,
        node: a,
        path: c,
        param: u
    }]
}

function Ir(e) {
    const t = [e];
    for (; e.parentRoute;) e = e.parentRoute, t.push(e);
    return t.reverse(), t
}

function Ii(e) {
    const t = Array(e.depth + 1);
    do t[e.depth] = e, e = e.parent; while (e);
    return t
}

function xi(e, t, s, r) {
    if (e === "/" && s.index) return {
        node: s.index,
        skipped: 0
    };
    const n = !pe(t),
        i = n && e !== "/",
        o = t.length - (n ? 1 : 0),
        a = [{
            node: s,
            index: 1,
            skipped: 0,
            statics: 0,
            dynamics: 0,
            optionals: 0
        }];
    let c = null,
        u = null;
    for (; a.length;) {
        const l = a.pop(),
            {
                node: f,
                index: h,
                skipped: d,
                statics: v,
                dynamics: p,
                optionals: g
            } = l;
        let {
            extract: m,
            rawParams: y
        } = l;
        if (f.kind === 2 && f.route && !st(u, l)) continue;
        if (f.parse) {
            if (!Ds(e, t, l)) continue;
            y = l.rawParams, m = l.extract
        }
        r && f.route && f.kind !== fe && st(c, l) && (c = l);
        const S = h === o;
        if (S && (f.route && (!i || f.kind === fe || f.kind === 2) && st(u, l) && (u = l), !f.optional && !f.wildcard && !f.index && !f.pathless)) continue;
        const P = S ? void 0 : t[h];
        let I;
        if (S && f.index) {
            const E = {
                node: f.index,
                index: h,
                skipped: d,
                statics: v,
                dynamics: p,
                optionals: g,
                extract: m,
                rawParams: y
            };
            let b = !0;
            if (f.index.parse && (Ds(e, t, E) || (b = !1)), b) {
                if (!p && !g && !d && Li(v, o)) return E;
                st(u, E) && (u = E)
            }
        }
        if (f.wildcard)
            for (let E = f.wildcard.length - 1; E >= 0; E--) {
                const b = f.wildcard[E],
                    {
                        prefix: C,
                        suffix: L
                    } = b;
                if (!(C && (S || !(b.caseSensitive ? P : I ? ? = P.toLowerCase()).startsWith(C)))) {
                    if (L) {
                        if (S) continue;
                        const k = t.slice(h).join("/"),
                            w = k.slice(-L.length);
                        if ((b.caseSensitive ? w : w.toLowerCase()) !== L || k.length - L.length < C.length) continue
                    }
                    a.push({
                        node: b,
                        index: o,
                        skipped: d,
                        statics: v,
                        dynamics: p,
                        optionals: g,
                        extract: m,
                        rawParams: y
                    })
                }
            }
        if (f.optional) {
            const E = d | 1 << f.depth + 1;
            for (let b = f.optional.length - 1; b >= 0; b--) {
                const C = f.optional[b];
                a.push({
                    node: C,
                    index: h,
                    skipped: E,
                    statics: v,
                    dynamics: p,
                    optionals: g,
                    extract: m,
                    rawParams: y
                })
            }
            if (!S)
                for (let b = f.optional.length - 1; b >= 0; b--) {
                    const C = f.optional[b],
                        {
                            prefix: L,
                            suffix: k
                        } = C;
                    if (L || k) {
                        const w = C.caseSensitive ? P : I ? ? = P.toLowerCase();
                        if (L && !w.startsWith(L) || k && w.indexOf(k, w.length - k.length) < L.length) continue
                    }
                    a.push({
                        node: C,
                        index: h + 1,
                        skipped: d,
                        statics: v,
                        dynamics: p,
                        optionals: g + tt(o, h),
                        extract: m,
                        rawParams: y
                    })
                }
        }
        if (!S && f.dynamic && P)
            for (let E = f.dynamic.length - 1; E >= 0; E--) {
                const b = f.dynamic[E],
                    {
                        prefix: C,
                        suffix: L
                    } = b;
                if (C || L) {
                    const k = b.caseSensitive ? P : I ? ? = P.toLowerCase();
                    if (C && !k.startsWith(C) || L && k.indexOf(L, k.length - L.length) < C.length) continue
                }
                a.push({
                    node: b,
                    index: h + 1,
                    skipped: d,
                    statics: v,
                    dynamics: p + tt(o, h),
                    optionals: g,
                    extract: m,
                    rawParams: y
                })
            }
        if (!S && f.staticInsensitive) {
            const E = f.staticInsensitive.get(I ? ? = P.toLowerCase());
            E && a.push({
                node: E,
                index: h + 1,
                skipped: d,
                statics: v + tt(o, h),
                dynamics: p,
                optionals: g,
                extract: m,
                rawParams: y
            })
        }
        if (!S && f.static) {
            const E = f.static.get(P);
            E && a.push({
                node: E,
                index: h + 1,
                skipped: d,
                statics: v + tt(o, h),
                dynamics: p,
                optionals: g,
                extract: m,
                rawParams: y
            })
        }
        if (f.pathless)
            for (let E = f.pathless.length - 1; E >= 0; E--) {
                const b = f.pathless[E];
                a.push({
                    node: b,
                    index: h,
                    skipped: d,
                    statics: v,
                    dynamics: p,
                    optionals: g,
                    extract: m,
                    rawParams: y
                })
            }
    }
    if (u) return u;
    if (r && c) {
        let l = c.index;
        for (let h = 0; h < c.index; h++) l += t[h].length;
        const f = l === e.length ? "/" : e.slice(l);
        return c.rawParams ? ? = Object.create(null), c.rawParams["**"] = decodeURIComponent(f), c
    }
    return null
}

function tt(e, t) {
    return 2 ** (e - t - 1)
}

function Li(e, t) {
    return e === 2 ** (t - 1) - 1
}

function Ds(e, t, s) {
    let r, n;
    try {
        [r, n] = Tr(e, t, s)
    } catch {
        return null
    }
    if (s.rawParams = r, s.extract = n, !s.node.parse) return !0;
    try {
        if (s.node.parse(r) === !1) return null
    } catch {}
    return !0
}

function st(e, t) {
    return e ? t.statics > e.statics || t.statics === e.statics && (t.dynamics > e.dynamics || t.dynamics === e.dynamics && (t.optionals > e.optionals || t.optionals === e.optionals && ((t.node.kind === fe) > (e.node.kind === fe) || t.node.kind === fe == (e.node.kind === fe) && t.node.depth > e.node.depth))) : !0
}

function ki() {
    try {
        return sessionStorage
    } catch {
        return
    }
}
var Fi = "tsr-scroll-restoration-v1_3",
    xr = ki();

function Mi() {
    try {
        return JSON.parse(xr ? .getItem("tsr-scroll-restoration-v1_3") || "{}")
    } catch {
        return {}
    }
}

function Ai() {
    try {
        xr ? .setItem(Fi, JSON.stringify(xe))
    } catch {}
}
var xe = Mi(),
    Ns = "data-scroll-restoration-id",
    Di = e => e.state.__TSR_key || e.href;

function Ni(e) {
    const t = e.getAttribute(Ns);
    if (t) return `[${Ns}="${t}"]`;
    let s = "",
        r = e,
        n;
    for (; n = r.parentNode;) {
        let i = 1,
            o = r;
        for (; o = o.previousElementSibling;) i++;
        const a = `${r.localName}:nth-child(${i})`;
        s = s ? `${a} > ${s}` : a, r = n
    }
    return s
}
var rt = !1,
    ft = "window";

function Qt(e) {
    try {
        return typeof e == "function" ? e() : document.querySelector(e)
    } catch {}
}

function js(e) {
    const t = new Set;
    for (const s of e) {
        if (s === ft) continue;
        const r = Qt(s);
        r && t.add(r)
    }
    return t
}

function ji(e, t) {
    const s = t ? ? e.options.scrollRestoration,
        r = e._scroll;
    s && (r.restoring = !0);
    const n = e.options.getScrollRestorationKey || Di,
        i = new Set,
        o = a => {
            const c = xe[a] || = {};
            for (const u of i) u === document ? c[ft] = {
                scrollX,
                scrollY
            } : u.isConnected && (c[Ni(u)] = {
                scrollX: u.scrollLeft,
                scrollY: u.scrollTop
            })
        };
    s && !r.restoration && (r.restoration = !0, rt = !1, history.scrollRestoration = "manual", document.addEventListener("scroll", a => {
        rt || i.add(a.target)
    }, !0), e.subscribe("onBeforeLoad", a => {
        a.fromLocation && o(n(a.fromLocation)), i.clear()
    }), addEventListener("pagehide", () => {
        o(n(e.stores.resolvedLocation.get() ? ? e.stores.location.get())), Ai()
    })), !r.reset && (r.reset = !0, e.subscribe("onRendered", a => {
        const c = e.options.scrollRestorationBehavior,
            u = e.options.scrollToTopSelectors,
            l = r.next,
            f = r.hash;
        let h;
        if (i.clear(), r.next = !0, r.hash = !1, typeof e.options.scrollRestoration == "function" && !e.options.scrollRestoration({
                location: e.latestLocation
            })) return;
        const d = n(a.toLocation),
            v = a.fromLocation && n(a.fromLocation);
        if (r.restoring && v && v !== d) {
            const p = xe[v];
            if (p) {
                let g = xe[d];
                for (const m in p) {
                    if (m === ft) {
                        if (l) continue
                    } else {
                        const y = Qt(m);
                        if (!y || l && u && (h ? ? = js(u), h.has(y))) continue
                    }
                    g || (g = xe[d] = {}), g[m] ? ? = p[m]
                }
            }
        }
        rt = !0;
        try {
            const p = a.toLocation.hash,
                g = a.toLocation.state.__hashScrollIntoViewOptions ? ? !0;
            let m = !1;
            if (l) {
                !p && u && (h ? ? = js(u));
                const y = p && g && f,
                    S = r.restoring ? xe[d] : void 0;
                if (S)
                    for (const P in S) {
                        const {
                            scrollX: I,
                            scrollY: E
                        } = S[P];
                        if (P === ft) {
                            if (y) continue;
                            scrollTo({
                                top: E,
                                left: I,
                                behavior: c
                            }), m = !0
                        } else {
                            const b = Qt(P);
                            b && (b.scrollLeft = I, b.scrollTop = E, h ? .delete(b))
                        }
                    }
                if (!p) {
                    const P = {
                        top: 0,
                        left: 0,
                        behavior: c
                    };
                    if (m || scrollTo(P), h)
                        for (const I of h) I.scrollTo(P)
                }
            }!m && p && g && document.getElementById(p) ? .scrollIntoView(g)
        } finally {
            rt = !1
        }
    }))
}

function Bi(e, t = String) {
    let s;
    for (const r in e) {
        const n = e[r];
        n !== void 0 && (s || = new URLSearchParams).set(r, t(n))
    }
    return s ? s.toString() : ""
}

function Dt(e) {
    return e ? e === "false" ? !1 : e === "true" ? !0 : +e * 0 === 0 && +e + "" === e ? +e : e : ""
}

function Ui(e) {
    const t = new URLSearchParams(e),
        s = Object.create(null);
    for (const [r, n] of t.entries()) {
        const i = s[r];
        i == null ? s[r] = Dt(n) : Array.isArray(i) ? i.push(Dt(n)) : s[r] = [i, Dt(n)]
    }
    return s
}
var Lr = /^(?:\s|["[{\d-]|fa|nu|tr)/,
    zi = Qi(JSON.parse),
    Hi = Ki(JSON.stringify, JSON.parse);

function Qi(e) {
    const t = e === JSON.parse;
    return s => {
        s[0] === "?" && (s = s.substring(1));
        const r = Ui(s);
        for (const n in r) {
            const i = r[n];
            if (typeof i == "string") {
                if (t && !Lr.test(i)) continue;
                try {
                    r[n] = e(i)
                } catch {}
            }
        }
        return r
    }
}

function Ki(e, t) {
    const s = t === JSON.parse;

    function r(n) {
        if (n && typeof n == "object") try {
            return e(n)
        } catch {} else if (t && typeof n == "string") {
            if (s && !Lr.test(n)) return n;
            try {
                return t(n), e(n)
            } catch {}
        }
        return n
    }
    return n => {
        const i = Bi(n, r);
        return i ? `?${i}` : ""
    }
}
var He = "__root__";

function qi(e, t, s) {
    const r = Pr(e),
        n = `/${r}`,
        i = t ? n : n.toLowerCase(),
        o = `${i}/`,
        a = {
            input: ({
                url: c
            }) => {
                const u = t ? c.pathname : c.pathname.toLowerCase();
                return u === i ? c.pathname = "/" : u.startsWith(o) && (c.pathname = c.pathname.slice(n.length)), c
            },
            output: ({
                url: c
            }) => (c.pathname = Me(`/${r}${c.pathname}`), c)
        };
    return s ? {
        input: ({
            url: c
        }) => Kt(s, a.input({
            url: c
        })),
        output: ({
            url: c
        }) => a.output({
            url: kr(s, c)
        })
    } : a
}

function Kt(e, t) {
    const s = e ? .input ? .({
        url: t
    });
    if (s) {
        if (typeof s == "string") return new URL(s);
        if (s instanceof URL) return s
    }
    return t
}

function kr(e, t) {
    const s = e ? .output ? .({
        url: t
    });
    if (s) {
        if (typeof s == "string") return new URL(s);
        if (s instanceof URL) return s
    }
    return t
}

function $i(e, t) {
    const {
        createMutableStore: s,
        createReadonlyStore: r,
        batch: n
    } = t, i = new Map, o = s("idle"), a = s(e), c = s(void 0), u = s([]), l = r(() => u.get().map(p => i.get(p).get())), f = r(() => ({
        status: o.get(),
        isLoading: o.get() === "pending",
        matches: l.get(),
        location: a.get(),
        resolvedLocation: c.get()
    }));

    function h(p) {
        let g = i.get(p);
        return g || (g = s(void 0), i.set(p, g)), g
    }
    const d = {
        status: o,
        location: a,
        resolvedLocation: c,
        ids: u,
        matches: l,
        byRoute: i,
        __store: f,
        getMatchStore: h,
        setMatches: v
    };

    function v(p) {
        const g = u.get(),
            m = p.map(y => y.routeId);
        n(() => {
            yi(g, m) || u.set(m);
            for (const y of g) m.includes(y) || i.get(y).set(() => {});
            for (const y of p) {
                const S = h(y.routeId);
                S.get() !== y && S.set(y)
            }
        })
    }
    return d
}
var de = "__TSR_index",
    Bs = "popstate",
    Us = "beforeunload",
    Vi = /^[\x00-\x20]*(?:[\\/][\t\n\r]*){2,}/;

function ht(e) {
    const t = Vi.exec(e);
    return t ? "/" + e.slice(t[0].length) : e
}

function Fr(e) {
    return /[\x00-\x1f\x7f]/.test(e) && (e = e.replace(/[\x00-\x1f\x7f]/g, t => `	
\r`.includes(t) ? "" : encodeURIComponent(t))), ht(e)
}

function Wi(e) {
    let t = e.getLocation();
    const s = new Set,
        r = o => {
            t = e.getLocation(), s.forEach(a => a({
                location: t,
                action: o
            }))
        },
        n = o => {
            e.notifyOnIndexChange ? ? !0 ? r(o) : t = e.getLocation()
        },
        i = async ({
            task: o,
            navigateOpts: a,
            ...c
        }) => {
            if (a ? .ignoreBlocker ? ? !1) {
                o();
                return
            }
            const u = e.getBlockers ? .() ? ? [],
                l = c.type === "PUSH" || c.type === "REPLACE";
            if (typeof document < "u" && u.length && l)
                for (const f of u) {
                    const h = yt(c.path, c.state);
                    if (await f.blockerFn({
                            currentLocation: t,
                            nextLocation: h,
                            action: c.type
                        })) {
                        e.onBlocked ? .();
                        return
                    }
                }
            o()
        };
    return {
        get location() {
            return t
        },
        get length() {
            return e.getLength()
        },
        subscribers: s,
        subscribe: o => (s.add(o), () => {
            s.delete(o)
        }),
        push: (o, a, c) => {
            const u = t.state[de];
            a = zs(u + 1, a), i({
                task: () => {
                    e.pushState(o, a), r({
                        type: "PUSH"
                    })
                },
                navigateOpts: c,
                type: "PUSH",
                path: o,
                state: a
            })
        },
        replace: (o, a, c) => {
            const u = t.state[de];
            a = zs(u, a), i({
                task: () => {
                    e.replaceState(o, a), r({
                        type: "REPLACE"
                    })
                },
                navigateOpts: c,
                type: "REPLACE",
                path: o,
                state: a
            })
        },
        go: (o, a) => {
            i({
                task: () => {
                    e.go(o, a ? .ignoreBlocker ? ? !1), n({
                        type: "GO",
                        index: o
                    })
                },
                navigateOpts: a,
                type: "GO"
            })
        },
        back: o => {
            i({
                task: () => {
                    e.back(o ? .ignoreBlocker ? ? !1), n({
                        type: "BACK"
                    })
                },
                navigateOpts: o,
                type: "BACK"
            })
        },
        forward: o => {
            i({
                task: () => {
                    e.forward(o ? .ignoreBlocker ? ? !1), n({
                        type: "FORWARD"
                    })
                },
                navigateOpts: o,
                type: "FORWARD"
            })
        },
        canGoBack: () => t.state[de] !== 0,
        createHref: o => e.createHref(o),
        block: o => {
            if (!e.setBlockers) return () => {};
            const a = e.getBlockers ? .() ? ? [];
            return e.setBlockers([...a, o]), () => {
                const c = e.getBlockers ? .() ? ? [];
                e.setBlockers ? .(c.filter(u => u !== o))
            }
        },
        flush: () => e.flush ? .(),
        destroy: () => e.destroy ? .(),
        notify: r,
        _getBlockers: () => e.getBlockers ? .() ? ? []
    }
}

function zs(e, t) {
    const s = os();
    return { ...t,
        key: s,
        __TSR_key: s,
        [de]: e
    }
}

function Gi(e) {
    const t = e ? .window ? ? (typeof document < "u" ? window : void 0),
        s = t.history.pushState,
        r = t.history.replaceState;
    let n = [];
    const i = () => n,
        o = b => n = b,
        a = b => Fr(e ? .createHref ? e.createHref(b) : b),
        c = e ? .parseLocation ? ? (() => yt(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state));
    if (!t.history.state ? .__TSR_key && !t.history.state ? .key) {
        const b = os();
        t.history.replaceState({
            [de]: 0,
            key: b,
            __TSR_key: b
        }, "")
    }
    let u = c(),
        l, f = !1,
        h = !1,
        d = !1,
        v = !1;
    const p = () => u;
    let g;
    const m = () => {
            g && (E._ignoreSubscribers = !0, (g[2] ? t.history.pushState : t.history.replaceState)(g[1], "", g[0]), E._ignoreSubscribers = !1, g = void 0, l = void 0)
        },
        y = (b, C, L) => {
            const k = e ? .createHref ? a(C) : void 0,
                w = !!g;
            w || (l = u), u = yt(C, L), g = [k ? ? u.href, L, g ? .[2] || b], w || queueMicrotask(() => m())
        },
        S = b => {
            u = c(), E.notify({
                type: b
            })
        },
        P = async () => {
            if (v = !1, h) {
                h = !1;
                return
            }
            const b = c(),
                C = b.state[de] - u.state[de],
                L = C === 1,
                k = C === -1,
                w = !L && !k || f;
            f = !1;
            const _ = w ? "GO" : k ? "BACK" : "FORWARD",
                O = w ? {
                    type: "GO",
                    index: C
                } : {
                    type: k ? "BACK" : "FORWARD"
                };
            if (d) d = !1;
            else {
                const F = i();
                if (typeof document < "u" && F.length) {
                    for (const x of F)
                        if (await x.blockerFn({
                                currentLocation: u,
                                nextLocation: b,
                                action: _
                            })) {
                            h = !0, t.history.go(-C), E.notify(O);
                            return
                        }
                }
            }
            u = c(), E.notify(O)
        },
        I = b => {
            if (v) {
                v = !1;
                return
            }
            let C = !1;
            const L = i();
            if (typeof document < "u" && L.length)
                for (const k of L) {
                    const w = k.enableBeforeUnload ? ? !0;
                    if (w === !0) {
                        C = !0;
                        break
                    }
                    if (typeof w == "function" && w() === !0) {
                        C = !0;
                        break
                    }
                }
            if (C) return b.preventDefault(), b.returnValue = ""
        },
        E = Wi({
            getLocation: p,
            getLength: () => t.history.length,
            pushState: (b, C) => y(!0, b, C),
            replaceState: (b, C) => y(!1, b, C),
            back: b => (b && (d = !0, v = !0), t.history.back()),
            forward: b => {
                b && (d = !0, v = !0), t.history.forward()
            },
            go: (b, C) => {
                f = !0, C && (d = !0, v = !0), t.history.go(b)
            },
            createHref: b => a(b),
            flush: m,
            destroy: () => {
                t.history.pushState = s, t.history.replaceState = r, t.removeEventListener(Us, I, {
                    capture: !0
                }), t.removeEventListener(Bs, P)
            },
            onBlocked: () => {
                l && u !== l && (u = l)
            },
            getBlockers: i,
            setBlockers: o,
            notifyOnIndexChange: !1
        });
    return E._ignoreNextBeforeUnload = b => {
        v = !1;
        try {
            b = new URL(b, t.document.baseURI).href, v = /^https?:/.test(b) && (!b.includes("#") || b.split("#")[0] !== t.location.href.split("#")[0])
        } catch {}
    }, t.addEventListener(Us, I, {
        capture: !0
    }), t.addEventListener(Bs, P), t.history.pushState = function(...b) {
        const C = s.apply(t.history, b);
        return E._ignoreSubscribers || S("PUSH"), C
    }, t.history.replaceState = function(...b) {
        const C = r.apply(t.history, b);
        return E._ignoreSubscribers || S("REPLACE"), C
    }, E
}

function yt(e, t) {
    const s = Fr(e),
        r = s.indexOf("#"),
        n = s.indexOf("?");
    if (!t) {
        const i = os();
        t = {
            [de]: 0,
            key: i,
            __TSR_key: i
        }
    }
    return {
        href: s,
        pathname: s.substring(0, r > 0 ? n > 0 ? Math.min(r, n) : r : n > 0 ? n : s.length),
        hash: r > -1 ? s.substring(r) : "",
        search: n > -1 ? s.slice(n, r === -1 ? void 0 : r) : "",
        state: t
    }
}

function os() {
    return (Math.random() + 1).toString(36).substring(7)
}

function Nt(e, t) {
    return e.protocol !== "http:" && e.protocol !== "https:" || e.origin !== t || !!e.username || !!e.password
}

function jt(e) {
    return e.pathname + e.search + e.hash
}

function Hs(e) {
    return e.options.loader || e.options.beforeLoad || e.lazyFn || e.options.component ? .preload || e.options.pendingComponent ? .preload
}

function Yi(e) {
    return e instanceof Error ? {
        name: e.name,
        message: e.message
    } : {
        data: e
    }
}

function Rt(e, t) {
    return {
        fromLocation: t,
        toLocation: e,
        pathChanged: t ? .pathname !== e.pathname,
        hrefChanged: t ? .href !== e.href,
        hashChanged: t ? .hash !== e.hash
    }
}

function Qs({
    key: e,
    __TSR_key: t,
    __TSR_index: s,
    __hashScrollIntoViewOptions: r,
    ...n
}) {
    return n
}

function Mr(e) {
    return e.findIndex(t => t.status === "error" || t.status === "notFound" || t._notFound) + 1
}

function Ji(e, t, s, r, n, i) {
    r && (t = t.slice(0, r)), n && (s = s.slice(0, n));
    for (const o of t) {
        if (i && e._tx !== i) return;
        s.some(a => a.routeId === o.routeId) || e.routesById[o.routeId].options.onLeave ? .(o)
    }
    for (const o of s) {
        if (i && e._tx !== i) return;
        e.routesById[o.routeId].options[t.some(a => a.routeId === o.routeId) ? "onStay" : "onEnter"] ? .(o)
    }
}
var Xi = class {
    constructor(e, t) {
        this.tempLocationKey = `${Math.round(Math.random()*1e7)}`, this._scroll = {
            next: !0
        }, this.subscribers = new Set, this._cache = new Map, this._committed = [], this.startTransition = async s => (s(), !1), this.update = s => {
            const r = this.options;
            this.options = { ...r,
                ...s
            }, this.isServer = this.options.isServer ? ? !1 ? ? typeof document > "u", this.staticLocations = new WeakMap, this.protocolAllowlist = new Set(this.options.protocolAllowlist), (!this.history || this.options.history && this.options.history !== this.history) && (this.options.history ? this.history = this.options.history : this.history = Gi()), this.origin = this.options.origin, this.origin || (window ? .origin && window.origin !== "null" ? this.origin = window.origin : this.origin = "http://localhost");
            const n = this.options.basepath ? ? "/",
                i = this.options.rewrite,
                o = this.basepath !== n || r ? .rewrite !== i || r ? .caseSensitive !== this.options.caseSensitive;
            if (o && (this.basepath = n, this.rewrite = n !== "/" && Pr(n) ? qi(n, this.options.caseSensitive, i) : i), this.history && this.updateLatestLocation(), this.options.routeTree !== this.routeTree) {
                this.routeTree = this.options.routeTree;
                let a;
                a = this.buildRouteTree(), this.setRoutes(a)
            }
            if (this.stores) o && this.stores.location.set(this.latestLocation);
            else if (this.latestLocation) {
                const a = this.getStoreConfig(this);
                this.batch = a.batch, this.stores = $i(this.latestLocation, a), ji(this)
            }
        }, this.updateLatestLocation = () => {
            this.latestLocation = this.parseLocation(this.history.location, this.latestLocation)
        }, this.buildRouteTree = () => {
            const s = Ti(this.routeTree, this.options.caseSensitive);
            return this.options.routeMasks && Ei(this.options.routeMasks, s.processedTree), { ...s,
                resolvePathCache: mt(1e3)
            }
        }, this.subscribe = (s, r) => {
            const n = {
                eventType: s,
                fn: r
            };
            return this.subscribers.add(n), () => {
                this.subscribers.delete(n)
            }
        }, this.emit = s => {
            for (const r of this.subscribers)
                if (r.eventType === s.type) try {
                    r.fn(s)
                } catch (n) {
                    console.error(n)
                }
        }, this.parseLocation = (s, r) => {
            const n = ({
                    pathname: c,
                    search: u,
                    hash: l,
                    href: f
                }, h) => {
                    if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(c)) {
                        const g = this.options.parseSearch(u),
                            m = this.options.stringifySearch(g);
                        return {
                            href: c + m + l,
                            publicHref: c + m + l,
                            pathname: Ue(c),
                            external: !1,
                            searchStr: m,
                            search: Te(r ? .search, g),
                            hash: Ue(l.slice(1)),
                            state: he(r ? .state, h)
                        }
                    }
                    const d = Kt(this.rewrite, new URL(f, this.origin)),
                        v = this.options.parseSearch(d.search),
                        p = this.options.stringifySearch(v);
                    return d.search = p, {
                        href: d.href.replace(d.origin, ""),
                        publicHref: f,
                        pathname: Ue(ht(d.pathname)),
                        external: !!this.rewrite && Nt(d, this.origin),
                        searchStr: p,
                        search: Te(r ? .search, v),
                        hash: Ue(d.hash.slice(1)),
                        state: he(r ? .state, h)
                    }
                },
                i = n(s, s.state),
                {
                    __tempLocation: o,
                    __tempKey: a
                } = i.state;
            if (o && (!a || a === this.tempLocationKey)) {
                const c = n(o, { ...o.state,
                    __tempLocation: void 0,
                    key: i.state.key,
                    __TSR_key: i.state.__TSR_key
                });
                return c.maskedLocation = i, c
            }
            return i
        }, this.matchRoutes = (s, r, n) => typeof s == "string" ? this.matchRoutesInternal({
            pathname: s,
            search: r
        }, n) : this.matchRoutesInternal(s, r), this.getMatchedRoutes = s => {
            const r = Object.create(null),
                n = Oi(ee(s), this.processedTree, !0);
            return n && Object.assign(r, n.rawParams), [n ? .branch || [this.routesById.__root__], r, n ? .route]
        }, this.buildLocation = s => {
            {
                const o = this.staticLocations.get(s);
                if (o) return o
            }
            let r = !1;
            const n = (o = {}) => {
                    if (o.href) {
                        const F = yt(o.href, {});
                        o = { ...o,
                            to: Kt(this.rewrite, new URL(F.pathname, this.origin)).pathname,
                            search: this.options.parseSearch(F.search),
                            hash: F.hash.slice(1)
                        }
                    }
                    const a = o._fromLocation || this._pendingLocation || this.latestLocation;
                    let c;
                    const u = () => (r = !0, a),
                        l = () => (r = !0, c ? ? = this.matchRoutesLightweight(a)),
                        f = o.to ? `${o.to}` : ".",
                        h = Ms(f[0] === "/" ? "" : o.unsafeRelative === "path" ? u().pathname : o.from ? ? l()[1], f, this.options.trailingSlash, this.resolvePathCache),
                        d = this.routesByPath[ee(h)],
                        v = h.includes("$");
                    let p;
                    if (d) p = d._branch ? ? = Ir(d);
                    else if (v) p = [];
                    else {
                        const [F, x, A] = this.getMatchedRoutes(h);
                        p = F, this.options.notFoundRoute && (!A || A.path !== "/" && x["**"]) && (p = [...p, this.options.notFoundRoute])
                    }
                    const g = v ? d ? ._interpolation ? ? Ve(!1, {
                        fullPath: h
                    }, 0) : void 0;
                    let m;
                    for (const F of p) {
                        const x = F.options.params ? .stringify ? ? F.options.stringifyParams;
                        if (x) {
                            const A = l()[3];
                            if (m ? ? = Bt(o.params, A), !wr(m)) break;
                            m === A && (m = Object.assign(lt(), m));
                            try {
                                Object.assign(m, x(m))
                            } catch {}
                        }
                    }
                    m ? ? = Bt(o.params, eo(o.params, g) ? l()[3] : Ut);
                    const y = s.leaveParams ? h : ht(Ue(g ? As(h, g, m, this.pathParamsDecoder) : h)),
                        S = to(p, s._includeValidateSearch),
                        P = () => {
                            let F = l()[2];
                            if (s._includeValidateSearch && this.options.search ? .strict) {
                                const x = {};
                                p.forEach(A => {
                                    if (A.options.validateSearch) try {
                                        Object.assign(x, dt(A.options.validateSearch, { ...x,
                                            ...F
                                        }))
                                    } catch {}
                                }), F = x
                            }
                            return F
                        },
                        I = S.length ? so(S, P(), o) : o.search === !0 ? P() : typeof o.search == "function" ? o.search(P()) : o.search || Ut,
                        E = this.options.stringifySearch(I),
                        b = o.hash === !0 ? u().hash : typeof o.hash == "function" ? o.hash(u().hash) : o.hash || void 0,
                        C = b ? `#${b}` : "",
                        L = o.state ? o.state === !0 ? u().state : typeof o.state == "function" ? o.state(u().state) : o.state : Ut,
                        k = `${y}${E}${C}`;
                    let w, _, O = !1;
                    if (this.rewrite) {
                        const F = new URL(k, this.origin),
                            x = F.origin,
                            A = kr(this.rewrite, F);
                        w = jt(F), Nt(A, x) ? (_ = A.href, O = !0) : _ = ht(jt(A))
                    } else w = mi(k), _ = w;
                    return {
                        publicHref: _,
                        href: w,
                        pathname: y,
                        search: I,
                        searchStr: E,
                        state: L,
                        hash: b ? ? "",
                        external: O,
                        unmaskOnReload: o.unmaskOnReload
                    }
                },
                i = n(s);
            if (s.mask) i.maskedLocation = n({
                from: s.from,
                ...s.mask
            });
            else if (this.options.routeMasks) {
                const o = Pi(i.pathname, this.processedTree);
                if (o) {
                    const a = Object.assign(lt(), o.rawParams),
                        {
                            from: c,
                            params: u,
                            ...l
                        } = o.route,
                        f = Bt(u, a);
                    i.maskedLocation = n({
                        from: s.from,
                        ...l,
                        params: f
                    })
                }
            }
            return !r && s._fromLocation && !i.maskedLocation && this.staticLocations.set(s, i), i
        }, this.commitLocation = async ({
            viewTransition: s,
            ignoreBlocker: r,
            ...n
        }) => {
            const i = n.maskedLocation ? ? n;
            if (i.external) return Ks(this, i.publicHref, {
                replace: n.replace,
                ignoreBlocker: r
            });
            let o;
            const a = ee(this.latestLocation.href) === ee(n.href) && G(Qs(n.state), Qs(this.latestLocation.state)),
                c = this._commitPromise;
            let u;
            const l = new Promise(f => {
                u = f
            });
            if (l.resolve = () => {
                    u(), c ? .resolve()
                }, this._commitPromise = l, a) this.load();
            else {
                let {
                    maskedLocation: f,
                    hashScrollIntoView: h,
                    ...d
                } = n;
                f && (d = { ...f,
                    state: { ...f.state,
                        __tempKey: void 0,
                        __tempLocation: { ...d,
                            search: d.searchStr,
                            state: { ...d.state,
                                __tempKey: void 0,
                                __tempLocation: void 0,
                                __TSR_key: void 0,
                                key: void 0
                            }
                        }
                    }
                }, (d.unmaskOnReload ? ? this.options.unmaskOnReload ? ? !1) && (d.state.__tempKey = this.tempLocationKey)), d.state = { ...d.state,
                    __hashScrollIntoViewOptions: h ? ? this.options.defaultHashScrollIntoView ? ? !0
                }, this.shouldViewTransition = s, o = n.replace ? "REPLACE" : "PUSH", this.history[o === "REPLACE" ? "replace" : "push"](d.publicHref, d.state, {
                    ignoreBlocker: r
                }), this.history.subscribers.size || this.load({
                    action: {
                        type: o
                    }
                })
            }
            return this._scroll.next = n.resetScroll ? ? !0, this._commitPromise
        }, this.buildAndCommitLocation = ({
            replace: s,
            resetScroll: r,
            hashScrollIntoView: n,
            viewTransition: i,
            ignoreBlocker: o,
            ...a
        } = {}) => {
            const c = this.buildLocation({ ...a,
                _includeValidateSearch: !0
            });
            this._pendingLocation = c;
            const u = this.commitLocation({ ...c,
                viewTransition: i,
                replace: s,
                resetScroll: r,
                hashScrollIntoView: n,
                ignoreBlocker: o
            });
            return queueMicrotask(() => {
                this._pendingLocation === c && (this._pendingLocation = void 0)
            }), u
        }, this.navigate = async ({
            to: s,
            reloadDocument: r,
            href: n,
            publicHref: i,
            ...o
        }) => {
            const a = n ? $e(n) : void 0;
            if (a || r) {
                if (s !== void 0 || !n) {
                    const u = this.buildLocation({
                            to: s,
                            ...o
                        }),
                        l = u.maskedLocation ? ? u;
                    n ? ? = l.publicHref, i ? ? = l.publicHref
                }
                return Ks(this, !a && i ? i : n, o)
            }
            return this.buildAndCommitLocation({ ...o,
                href: n,
                to: s,
                _isNavigate: !0
            })
        }, this.load = async s => {
            this.updateLatestLocation(), s ? .action && (this._scroll.hash = s.action.type === "PUSH" || s.action.type === "REPLACE"), await lo(this, s)
        }, this.startViewTransition = s => {
            const r = this.shouldViewTransition ? ? this.options.defaultViewTransition;
            if (this.shouldViewTransition = void 0, r && typeof document.startViewTransition == "function") {
                let n;
                if (typeof r == "object" && window.CSS ? .supports ? .("selector(:active-view-transition-type(a))")) {
                    const i = this.latestLocation,
                        o = this.stores.resolvedLocation.get(),
                        a = typeof r.types == "function" ? r.types(Rt(i, o)) : r.types;
                    if (a === !1) return s();
                    n = {
                        update: s,
                        types: a
                    }
                } else n = s;
                return document.startViewTransition(n).updateCallbackDone
            }
            return s()
        }, this.invalidate = s => {
            const r = this._committed,
                n = s ? .filter,
                i = this._preloads,
                o = new Set,
                a = l => {
                    (!n || n(l)) && o.add(l.id)
                };
            r.forEach(a), this._cache.forEach(a), i ? .forEach(l => l.forEach(a)), this._tx ? .[3].forEach(a);
            const c = [];
            for (const [l, f] of i ? ? []) f.some(h => o.has(h.id)) && (i.delete(l), c.push(l));
            const u = l => {
                if (o.has(l.id)) {
                    const f = this.routesById[l.routeId],
                        h = { ...l,
                            invalid: !0,
                            ...(s ? .forcePending || l.status === "error" || l.status === "notFound") && Hs(f) ? {
                                status: "pending",
                                error: void 0
                            } : void 0
                        };
                    return l._flight = void 0, h
                }
                return l
            };
            this._committed = r.map(u);
            for (const [l, f] of this._cache) o.has(l) && (f.invalid = !0, s ? .forcePending && (f.status = "pending"));
            for (const l of o) this._flights ? .delete(l);
            for (const l of c) l.abort();
            return this.shouldViewTransition = !1, this.load({
                sync: s ? .sync
            })
        }, this.resolveRedirect = s => {
            const r = s.options;
            let n = s.headers.get("Location") || r.href;
            if (!n) {
                const o = this.buildLocation(r);
                n = (o.maskedLocation ? ? o).publicHref || "/"
            }
            let i;
            if (_r.test(n) || (i = $e(n)) && !this.protocolAllowlist.has(i)) throw new Error("Redirect blocked: unsafe protocol");
            if (i === "http:" || i === "https:") {
                const o = new URL(n);
                o.pathname.startsWith("//") ? n = o.href : Nt(o, this.origin) || (n = jt(o), i = void 0)
            }
            return i && (r.reloadDocument = !0), r.href = n, s.headers.set("Location", n), s
        }, this.clearCache = s => {
            const r = this._cache,
                n = this._preloads,
                i = s ? .filter,
                o = [],
                a = [];
            for (const [u, l] of r)(!i || i(l)) && (a.push(u), o.push(l));
            const c = [];
            for (const [u, l] of n ? ? [])(!i || l.some(i)) && (c.push(u), o.push(...l));
            for (const u of a) r.delete(u);
            for (const u of c) n.delete(u);
            for (const u of o) {
                const l = u._flight;
                u._flight = void 0, l && !--l[2] && (this._flights ? .get(u.id) === l && this._flights.delete(u.id), c.push(l[1]))
            }
            for (const u of c) u.abort()
        }, this.loadRouteChunk = re, this.preloadRoute = s => fo(this, s), this.matchRoute = (s, r) => {
            const n = { ...s,
                    to: s.to ? Ms(s.from || "", s.to, this.options.trailingSlash, this.resolvePathCache) : void 0,
                    params: s.params || {},
                    leaveParams: !0
                },
                i = this.buildLocation(n),
                o = this.stores.status.get() === "pending";
            if (r ? .pending && !o) return !1;
            const a = r ? .pending ? ? !o ? this.latestLocation : this.stores.resolvedLocation.get() || this.stores.location.get(),
                c = Ci(i.pathname, r ? .caseSensitive ? ? !1, r ? .fuzzy ? ? !1, a.pathname, this.processedTree);
            return !c || s.params && !G(c.rawParams, s.params, !0) ? !1 : r ? .includeSearch ? ? !0 ? G(a.search, i.search, !0) ? c.rawParams : !1 : c.rawParams
        }, this.getStoreConfig = t, e.pathParamsAllowedCharacters ? .length && (this.pathParamsDecoder = bi(e.pathParamsAllowedCharacters)), this.update({
            defaultPreloadDelay: 50,
            defaultPendingMs: 1e3,
            defaultPendingMinMs: 500,
            context: void 0,
            ...e,
            caseSensitive: e.caseSensitive ? ? !1,
            notFoundMode: e.notFoundMode ? ? "fuzzy",
            stringifySearch: e.stringifySearch ? ? Hi,
            parseSearch: e.parseSearch ? ? zi,
            protocolAllowlist: e.protocolAllowlist ? ? di
        }), self.__TSR_ROUTER__ = this
    }
    isShell() {
        return !!this.options.isShell
    }
    get state() {
        return this.stores.__store.get()
    }
    setRoutes(e) {
        Object.assign(this, e), this.lightweightCache = new WeakMap, this.staticLocations = new WeakMap;
        const t = this.options.notFoundRoute;
        t && (t.init(99999999999), this.routesById[t.id] !== t && (t._interpolation = Ve(!1, t, 0)), this.routesById[t.id] = t)
    }
    matchRoutesInternal(e, t) {
        const [s, r, n] = this.getMatchedRoutes(e.pathname);
        let i = s,
            o = !1;
        (n ? n.path !== "/" && r["**"] : ee(e.pathname)) && (this.options.notFoundRoute ? i = [...i, this.options.notFoundRoute] : o = !0);
        const a = o ? ro(this.options.notFoundMode, i) : void 0,
            c = new Array(i.length),
            u = this._committed,
            l = (h, d) => {
                const v = u[d];
                return v ? .routeId === h.id ? v : h === this.options.notFoundRoute ? u.find(p => p.routeId === h.id) : void 0
            };
        let f;
        for (let h = 0; h < i.length; h++) {
            const d = i[h],
                v = c[h - 1];
            let p, g, m; {
                const O = v ? .search ? ? e.search,
                    F = v ? ._strictSearch ? ? void 0;
                try {
                    const x = dt(d.options.validateSearch, { ...O
                    }) ? ? void 0;
                    p = { ...O,
                        ...x
                    }, g = { ...F,
                        ...x
                    }
                } catch (x) {
                    let A = x;
                    if (x instanceof bt || (A = new bt(x.message, {
                            cause: x
                        })), t ? .throwOnError) throw A;
                    p = O, g = {}, m = A
                }
            }
            let y = "",
                S = "";
            try {
                y = d.options.loaderDeps ? .({
                    search: p
                }) ? ? "", S = y && JSON.stringify(y) || ""
            } catch (O) {
                if (t ? .throwOnError) throw O;
                m ? ? = O
            }
            const P = lt(),
                I = d._interpolation ? As(d.fullPath, d._interpolation, r, this.pathParamsDecoder, P) : d.fullPath,
                E = d.id + I + S,
                b = l(d, h),
                C = this._cache.get(E) ? ? (b ? .id === E ? b : void 0);
            f = C ? ._strictParams ? ? Object.assign(P, f);
            let L;
            if (!C) try {
                qs(d, f)
            } catch (O) {
                if (Ne(O) || br(O) ? L = O : L = new Zi(O.message, {
                        cause: O
                    }), t ? .throwOnError) throw L
            }
            const k = b ? "stay" : "enter";
            let w;
            if (C) w = { ...C,
                cause: k,
                search: Te(b ? b.search : C.search, p),
                _strictSearch: g,
                searchError: m
            };
            else {
                const O = Hs(d) ? "pending" : "success";
                w = {
                    id: E,
                    ssr: d.options.ssr,
                    index: h,
                    routeId: d.id,
                    params: b ? .params ? ? f,
                    _strictParams: f,
                    pathname: I,
                    updatedAt: Date.now(),
                    search: b ? Te(b.search, p) : p,
                    _strictSearch: g,
                    searchError: m,
                    status: O,
                    isFetching: !1,
                    error: void 0,
                    paramsError: L,
                    context: {},
                    abortController: t ? ._controller ? ? new AbortController,
                    cause: k,
                    loaderDeps: b ? he(b.loaderDeps, y) : y,
                    invalid: !1,
                    preload: !1,
                    staticData: d.options.staticData || {},
                    fullPath: d.fullPath
                }
            }
            const _ = a === d.id;
            w._notFound && !_ && (w.error = void 0), w._notFound = _, c[h] = w
        }
        for (let h = 0; h < c.length; h++) {
            const d = c[h];
            d.params = d.cause === "stay" ? Te(d.params, f) : f, t ? ._controller && (d.context = {})
        }
        return c
    }
    matchRoutesLightweight(e) {
        const t = pe(this.stores.ids.get()),
            s = t ? this.stores.byRoute.get(t).get() : void 0,
            r = s ? .id,
            n = this.lightweightCache.get(e);
        if (n && n[0] === r) return n[1];
        const [i, o] = this.getMatchedRoutes(e.pathname), a = pe(i), c = { ...e.search
        };
        for (const h of i) try {
            Object.assign(c, dt(h.options.validateSearch, c))
        } catch {}
        const u = s && s.routeId === a.id && s.pathname === e.pathname;
        let l;
        if (u) l = s.params;
        else {
            const h = o;
            for (const d of i) try {
                qs(d, h)
            } catch {}
            l = h
        }
        const f = [i, a.fullPath, c, l];
        return this.lightweightCache.set(e, [r, f]), f
    }
};
async function Ks(e, t, {
    replace: s,
    ignoreBlocker: r
}) {
    if (!Rr(t, e.protocolAllowlist)) {
        if (!r) {
            const n = e.history._getBlockers();
            for (const i of n)
                if (i ? .blockerFn && await i.blockerFn({
                        currentLocation: e.history.location,
                        nextLocation: e.history.location,
                        action: s ? "REPLACE" : "PUSH"
                    })) return
        }
        e.history._ignoreNextBeforeUnload ? .(t), s ? window.location.replace(t) : window.location.href = t
    }
}
var bt = class extends Error {},
    Zi = class extends Error {};

function dt(e, t) {
    if (e == null) return {};
    if ("~standard" in e) {
        const s = e["~standard"].validate(t);
        if (s instanceof Promise) throw new bt("Async validation not supported");
        if (s.issues) throw new bt(JSON.stringify(s.issues, void 0, 2), {
            cause: s
        });
        return s.value
    }
    return "parse" in e ? e.parse(t) : typeof e == "function" ? e(t) : {}
}

function Bt(e, t) {
    if (e === void 0 || e === !0) return t;
    const s = Object.create(null);
    return e === !1 || e === null ? s : typeof e == "function" ? (Object.assign(s, t), Object.assign(s, e(s))) : Object.assign(s, t, e)
}

function eo(e, t) {
    return typeof e == "function" ? !0 : !t || e === !1 || e === null ? !1 : e === void 0 || e === !0 || t.some(s => typeof s != "string" && !rs.call(e, s[1]))
}
var Ut = Object.freeze({});

function to(e, t) {
    const s = [];
    for (let r = 0; r < e.length; r++) {
        const n = e[r].options;
        if ("search" in n) n.search ? .middlewares && s.push(...n.search.middlewares);
        else if (n.preSearchFilters || n.postSearchFilters) {
            const o = ({
                search: a,
                next: c
            }) => {
                const u = c(n.preSearchFilters ? n.preSearchFilters.reduce((l, f) => f(l), a) : a);
                return n.postSearchFilters ? n.postSearchFilters.reduce((l, f) => f(l), u) : u
            };
            s.push(o)
        }
        const i = n.validateSearch;
        if (t && i) {
            const o = ({
                search: a,
                next: c,
                meta: u
            }) => {
                const l = c(a);
                try {
                    const f = dt(i, l);
                    if (u && f)
                        for (const h in f) h in l || (u.defaulted || = new Map).set(h, f[h]);
                    return { ...l,
                        ...f
                    }
                } catch {}
                return l
            };
            s.push(o)
        }
    }
    return s
}

function so(e, t, s) {
    const r = (n, i, o) => {
        if (n >= e.length) {
            if (!s.search) return {};
            if (s.search === !0) return i;
            const c = Sr(s.search, i);
            return o && (o.explicit = c), c
        }
        const a = (c, u) => {
            if (u) {
                const l = o || {};
                return {
                    search: r(n + 1, c, l),
                    meta: l
                }
            }
            return r(n + 1, c, o)
        };
        return e[n]({
            search: i,
            next: a,
            meta: o
        })
    };
    return r(0, t)
}

function ro(e, t) {
    if (e !== "root") {
        let s;
        for (let r = t.length - 1; r >= 0; r--) {
            const n = t[r];
            if (n.options.notFoundComponent) return n.id;
            s || = n.children && n.id
        }
        if (s) return s
    }
    return He
}

function qs(e, t) {
    const s = e.options.params ? .parse ? ? e.options.parseParams;
    s && Object.assign(t, s(t))
}

function qt(e, t) {
    return e.options[t] ? .preload ? .()
}

function no(e, t) {
    const s = qt(e, "component");
    let r = qt(e, "pendingComponent");
    return t && (r ? r = r.then(t) : t()), s && r ? Promise.all([s, r]).then(() => {}) : s ? ? r
}

function re(e, t, s) {
    const r = () => t === !1 ? void 0 : t ? qt(e, t) : no(e, s),
        n = e._lazy;
    if (n) return n === !0 ? r() : n.then(r);
    if (!e.lazyFn) return r();
    const i = e.lazyFn().then(o => {
        {
            const {
                id: a,
                ...c
            } = o.options;
            Object.assign(e.options, c), e._lazy = !0
        }
    }, o => {
        throw e._lazy = void 0, o
    });
    return e._lazy = i, i.then(r)
}

function as(e) {
    const t = e.findIndex(s => s.status !== "success" || s._notFound) + 1;
    return t && t < e.length ? e.slice(0, t) : e
}

function Ar(e) {
    let t = e.length;
    for (let s = 0; s < t; s++) {
        const r = e[s];
        if (r._assetEnd !== void 0) {
            t = Math.min(t, Math.max(s + 1, r._assetEnd));
            continue
        }
        if (r.status !== "success" || r._notFound) {
            t = s + 1;
            break
        }
    }
    return t < e.length ? e.slice(0, t) : e
}
var te = 0,
    ne = 1,
    Et = 2,
    $ = 3,
    ve = [4];

function We(e) {
    return typeof e[0] == "number"
}

function ie(e, t) {
    return t.aborted ? Promise.race([Promise.reject(t), e]) : new Promise((s, r) => {
        const n = () => r(t);
        t.addEventListener("abort", n, {
            once: !0
        }), Promise.resolve(e).then(s, r).then(() => t.removeEventListener("abort", n))
    })
}

function W(e, t) {
    return e.routesById[t.routeId]
}

function Ge(e, t, s) {
    return br(e) ? [$, e] : Ne(e) ? (e.routeId || = s, [Et, e]) : t ? (typeof e ? .then == "function" && (e = new Error("A Promise was thrown", {
        cause: e
    })), [ne, e]) : [te, e]
}

function cs(e, t) {
    let s = Ge(t, !0, e.id);
    if (s[0] !== ne) return s;
    try {
        e.options.onError ? .(s[1])
    } catch (r) {
        s = Ge(r, !0, e.id)
    }
    return s
}

function Qe(e, t, s, r, n) {
    return n[0].signal.aborted ? ve : fs(e, t, s, cs(s, r), n)
}
async function io(e, t, s, r, n, i) {
    const [o, a] = t, c = s[0].signal, u = !!s[3];
    for (let l = s[6] ? ? 0; l < r; l++) {
        const f = a[l],
            h = W(e, f);
        f.abortController = s[0];
        const d = a[l - 1] ? .context ? ? e.options.context ? ? {},
            v = {
                params: f.params,
                location: o,
                navigate: y => e.navigate({ ...y,
                    _fromLocation: o
                }),
                buildLocation: e.buildLocation,
                cause: u ? "preload" : f.cause,
                abortController: s[0],
                preload: u,
                matches: a,
                routeId: h.id
            };
        try {
            const y = f._ctx || = h.options.context ? h.options.context({ ...v,
                deps: f.loaderDeps,
                context: d
            }) || {} : void 0;
            f.context = { ...d,
                ...y
            }
        } catch (y) {
            return se(e, f), [l, Qe(e, t, h, y, s)]
        }
        if (c.aborted) return [l, ve];
        const p = f.paramsError ? ? f.searchError;
        if (p !== void 0) return se(e, f), [l, Qe(e, t, h, p, s)];
        const g = h.options.beforeLoad;
        if (!g) continue;
        const m = f.status;
        l >= i && (f.status = "pending", s[7] ? .());
        try {
            Ye(e, f, "beforeLoad", s[0]);
            const y = g({ ...v,
                    search: f.search,
                    context: f.context,
                    ...e.options.additionalContext
                }),
                S = await (typeof y ? .then == "function" ? ie(y, c) : y);
            if (c.aborted) return [l, ve];
            const P = fs(e, t, h, Ge(S, !1, h.id), s);
            if (P[0] !== te) return se(e, f), [l, P];
            f.context = { ...f.context,
                ...S
            }
        } catch (y) {
            return se(e, f), [l, Qe(e, t, h, y, s)]
        } finally {
            f.status = m, Ye(e, f, !1, s[0])
        }
    }
    n()
}

function us(e, t, s) {
    if (!(!s || --s[2])) {
        if (e._flights ? .get(t.id) === s) {
            const r = e._tx;
            if (r && !r[0].signal.aborted && !r[3].includes(t) && r[3].some(n => n.id === t.id) && r[3].some(n => n.isFetching === "beforeLoad")) return;
            e._flights.delete(t.id)
        }
        return s[1]
    }
}

function se(e, t) {
    const s = t._flight;
    t._flight = void 0, us(e, t, s) ? .abort()
}

function q(e, t, s, r) {
    const n = [];
    for (const i of t)
        if (!s ? .includes(i)) {
            const o = i._flight;
            if (i._flight = void 0, r && o ? .[2] === 1 && e._flights ? .get(i.id) === o && s ? .some(a => a.id === i.id)) o[2] = 0;
            else {
                const a = us(e, i, o);
                a && n.push(a)
            }
        }
    for (const i of n) i.abort()
}

function ls(e) {
    for (const t of e) {
        const s = t._flight;
        s && s[2]++
    }
}

function Ye(e, t, s, r) {
    if (t.isFetching = s, r && e._tx ? .[0] !== r) return;
    const n = e.stores.byRoute.get(t.routeId),
        i = n ? .get();
    i ? .id === t.id && n.set({ ...i,
        isFetching: s
    })
}

function Dr(e, t, s, r, n, i, o) {
    const a = t[0];
    return {
        params: s.params,
        location: a,
        navigate: c => e.navigate({ ...c,
            _fromLocation: a
        }),
        cause: o ? "preload" : s.cause,
        abortController: n,
        preload: o,
        deps: s.loaderDeps,
        parentMatchPromise: i,
        context: s.context,
        route: r,
        ...e.options.additionalContext
    }
}
async function $s(e, t, s, r, n, i, o) {
    const a = o[0],
        c = a.signal;
    if (c.aborted) return ve;
    if (!n) return [te, void 0];
    let u = s._flight;
    Ye(e, s, "loader", a);
    try {
        if (!u) {
            const l = new AbortController;
            u = [Promise.resolve().then(() => n(Dr(e, t, s, r, l, i, !!o[3]))).then(f => Ge(f, !1, r.id), f => Ge(f, !0, r.id)).then(f => (f[0] !== te && e._flights ? .get(s.id) === u && (e._flights.delete(s.id), u[2] || l.abort()), f[0] === ne && u[2] ? cs(r, f[1]) : f)), l, 1], (e._flights ? ? = new Map).set(s.id, u)
        }
        return s._flight = u, s.abortController = u[1], fs(e, t, r, await ie(u[0], c), o)
    } catch (l) {
        if (l !== c || !c.aborted) throw l;
        return se(e, s), ve
    } finally {
        Ye(e, s, !1, a)
    }
}

function Vs(e, t, s) {
    t[0] !== $ && (e.status = "success", e.error = void 0, t[0] === te ? (e.loaderData = t[1], e.invalid = !1, e.updatedAt = Date.now(), e.preload = s) : e.invalid = !0)
}

function Nr(e, t, s) {
    const r = e._cache.get(t.id);
    if (r !== s || e._committed.some(i => i.id === t.id && i._flight === t._flight)) return;
    const n = { ...t,
        _notFound: void 0,
        context: {}
    };
    n._flight && n._flight[2]++, e._cache.set(t.id, n), r && se(e, r)
}

function Ws(e, t) {
    return t[0] === ne || t[0] === Et ? { ...e,
        status: t[0] === ne ? "error" : "notFound",
        error: t[1],
        _flight: void 0
    } : e
}

function oo(e, t, s, r, n, i, o) {
    const a = t[1][s],
        c = W(e, a),
        u = !!i[3],
        l = e._cache.get(a.id);
    let f, h = !1,
        d;
    try {
        if (a.status === "success" && (f = c.options.shouldReload, typeof f == "function" && (f = f(Dr(e, t, a, c, i[0], n, u))), i[0].signal.aborted && (d = ve)), !d)
            if (a.status !== "success") h = !0;
            else {
                const _ = u || a.preload ? c.options.preloadStaleTime ? ? e.options.defaultPreloadStaleTime ? ? 3e4 : c.options.staleTime ? ? e.options.defaultStaleTime ? ? 0;
                h = !!(a.invalid || f || f === void 0 && Date.now() - a.updatedAt >= _ && (i[5] || a.cause === "enter" || i[2].some(O => O.routeId === a.routeId && O.id !== a.id)))
            }
    } catch (_) {
        a.invalid = !0, se(e, a), d = Qe(e, t, c, _, i)
    }
    const v = c.options.loader,
        p = typeof v == "function",
        g = p ? v : v ? .handler,
        m = !u || c.options.preload !== !1;
    let y = m && v ? e._flights ? .get(a.id) : void 0;
    y === a._flight || d ? y = void 0 : y && !h && !u && f === void 0 ? h = !0 : h || (y = void 0);
    const S = !!(v && h && a.status === "success" && !u && !i[4] && ((p ? void 0 : v.staleReloadMode) ? ? e.options.defaultStaleReloadMode) !== "blocking"),
        P = h && m,
        I = P && !S && (a.status !== "success" || !!v),
        E = s >= o ? i[7] : void 0,
        b = c.lazyFn && c._lazy !== !0 ? E : void 0;
    if (P && !v && (a.invalid = !1, a.updatedAt = Date.now()), y && y[2]++, I) {
        const _ = a._flight;
        a._flight = y, us(e, a, _) ? .abort(), s >= o && (a.status = "pending"), E ? .()
    }
    P || (a.isFetching = !1);
    const C = !d && I ? $s(e, t, a, c, g, n, i).then(_ => (Vs(a, _, u), _[0] === te && (v && !i[0].signal.aborted && Nr(e, a, l), s >= o && (a.status = "pending")), _)) : Promise.resolve(d ? ? [te, a.loaderData]),
        L = (async () => {
            try {
                const O = re(c, void 0, b);
                O && await ie(O, i[0].signal)
            } catch (O) {
                if (!t[1].some((F, x) => x <= s && (F.status === "error" || F.status === "notFound" || F._notFound))) return [s, Qe(e, t, c, O, i)]
            }
            const _ = await C;
            I && _[0] === te && a.status === "pending" && !i[0].signal.aborted && (a.status = "success", E ? .())
        })();
    if (r.push([s, C, L]), !S) return C.then(_ => Ws(a, _));
    const k = { ...a,
        status: "pending",
        preload: !1,
        _flight: y
    };
    a.invalid = !1, a.isFetching = "loader";
    const w = $s(e, t, k, c, g, n, i).then(_ => (a.isFetching = !1, Vs(k, _, !1), _));
    return (t[2] ? ? = []).push([s, w, L, k]), w.then(_ => Ws(k, _))
}
async function $t(e, t, s, r, n = 0) {
    const i = s ? .[1][1];
    let o = i ? .routeId ? t.findIndex(a => a.routeId === i.routeId) : s ? .[0] ? ? t.length - 1;
    o < 0 && (o = 0);
    for (let a = o; a >= 0; a--) {
        const c = W(e, t[a]);
        try {
            const u = re(c, !1);
            u && await ie(u, r)
        } catch (u) {
            if (u === r && r.aborted) throw u
        }
        if (c.options.notFoundComponent) return a
    }
    return i ? .routeId ? o : n
}

function Ee(e, t) {
    t[2] && (q(e, t[2].map(s => s[3])), t[2] = void 0)
}
async function Gs(e, t, s, r) {
    let n;
    try {
        await Promise.all(e.map(i => i[1].then(async o => {
            const a = i[0];
            if (!(r && a >= await r)) {
                if (o[0] >= $) throw [a, o];
                !n && o[0] !== te && (n = [a, o], await Promise.all((s ? ? []).map(c => {
                    if (!(c[0] <= a)) return c[1].then(u => {
                        if (u[0] === $) throw [c[0], u]
                    })
                })))
            }
        })))
    } catch (i) {
        return i
    }
    return t ? ? n
}

function fs(e, t, s, r, n, i) {
    for (; r[0] === $;) {
        const o = r[1],
            a = o.options;
        try {
            if ((a.href || o.headers.has("Location")) && (e.resolveRedirect(o), a.reloadDocument) || (a.reloadDocument ? n[3] : n[1] >= 20)) return r;
            const c = e.buildLocation({ ...a,
                    _fromLocation: t[0],
                    _includeValidateSearch: !0
                }),
                u = c.maskedLocation ? ? c;
            if (u.external) {
                const l = o.clone();
                return l.options = { ...a
                }, l.headers.set("Location", u.publicHref), e.resolveRedirect(l), n[3] ? [$, l] : [$, l, u]
            }
            return [$, o, c]
        } catch (c) {
            r = i ? [ne, c] : cs(s, c), i = !0
        }
    }
    return r
}
async function jr(e, t, s, r, n, i) {
    const o = t[1];
    let a = await n,
        c = !1;
    const u = o.findIndex(d => d._notFound),
        l = d => d[1][0] === Et ? $t(e, o, d, r.signal) : d[0];
    let f = u < 0 ? o.length : u;
    if ((a ? .[1][0] ? ? 0) >= $) f = 0;
    else if (a) {
        f = a[2] ? ? = await l(a);
        for (const d of s) {
            if (d[0] >= f) break;
            const v = await d[1];
            if (v[0] !== te && v[0] < $ && !("loaderData" in o[d[0]])) {
                a = [d[0], v], f = a[2] = await l(a);
                break
            }
        }
    }
    for (const d of s) {
        if (d[0] >= f) break;
        const v = await d[2];
        if (v) {
            a = v;
            break
        }
    }
    if ((a ? .[1][0] ? ? 0) >= $) {
        const d = a[1];
        if (d[0] !== $ || d[1].options.reloadDocument || d[2]) return Ee(e, t), d;
        c = !0, a = [0, [ne, new Error("Too many redirects")]]
    }
    const h = a ? a[2] ? ? await l(a) : u;
    if (h >= 0) {
        const d = a ? .[1],
            v = d ? .[0],
            p = o[h],
            g = d ? .[1],
            m = () => {
                d && (p._notFound = void 0, v === ne ? p.status = "error" : (g.routeId = p.routeId, p.routeId === e.routeTree.id ? (p.status = "success", p._notFound = !0) : p.status = "notFound"), p.error = g, p.isFetching = !1)
            };
        m(), d || i ? .();
        const y = W(e, p);
        try {
            await ie(d ? Promise.resolve().then(() => re(y, v === ne ? "errorComponent" : "notFoundComponent")) : Promise.all([re(y), re(y, "notFoundComponent")]), r.signal)
        } catch (S) {
            if (S === r.signal && r.signal.aborted) return Ee(e, t), ve
        }
        d ? c && (r.abort(), await Promise.all([...s.map(S => S[1]), ...s.map(S => S[2]), ...(t[2] ? ? []).map(S => S[1])]), Ee(e, t), q(e, o), m()) : p.status = "success"
    }
    return t
}
async function hs(e, t, s, r = 0, n = t[1].length) {
    const i = t[1];
    for (let o = r; o < n; o++) {
        const a = i[o],
            c = W(e, a).options;
        if (c.head || c.scripts) try {
            const u = {
                    ssr: e.options.ssr,
                    matches: i,
                    match: a,
                    params: a.params,
                    loaderData: a.loaderData
                },
                [l, f] = await ie(Promise.all([c.head ? .(u), c.scripts ? .(u)]), s);
            a.meta = l ? .meta, a.links = l ? .links, a.headScripts = l ? .scripts, a.styles = l ? .styles, a.scripts = f
        } catch (u) {
            if (u === s && s.aborted) break;
            console.error(u)
        }
        if (a.status !== "success" || a._notFound) break
    }
    return t
}
async function Br(e, t, s, r) {
    const n = [t, s],
        i = r[0].signal;
    let o;
    try {
        const a = e.stores.matches.get();
        let c = s.findIndex(m => m._notFound);
        if (e.options.notFoundMode !== "root" && c >= 0) {
            const m = await $t(e, s, void 0, i, c);
            s[c]._notFound = void 0, s[m]._notFound = !0, c = m
        }
        let u = c < 0 ? s.length : c + 1,
            l = 0;
        for (; l < u && l !== c;) {
            const m = s[l],
                y = r[2][l],
                S = a[l];
            if (y ? .id !== m.id || y.status !== "success" || m.preload || S ? .id !== m.id || S.status !== "success" || (l++, y._notFound || S._notFound)) break
        }
        const f = [],
            h = r[6] ? ? 0;
        let d = h ? Promise.resolve(s[h - 1]) : void 0;
        const v = () => {
                for (let m = h; m < u && !i.aborted; m++) d = oo(e, n, m, f, d, r, l)
            },
            p = await io(e, n, r, u, v, l);
        if (p) {
            if (r[4] = !0, u = p[0], p[1][0] === Et) {
                const m = await $t(e, s, p, i);
                p[2] = m, u = Math.min(u, m + 1)
            } else p[1][0] >= $ && (u = 0);
            v()
        }
        if (!i.aborted && !r[3]) {
            const m = [];
            for (const [y, S] of e._flights ? ? []) S[2] || (e._flights.delete(y), m.push(S[1]));
            for (const y of m) y.abort()
        }
        const g = jr(e, n, f, r[0], Gs(f, p, n[2]), r[7]);
        n[2] ? .length && (n[3] = Gs(n[2], void 0, void 0, g.then(m => We(m) ? 0 : as(s).length, () => 0))), o = await g
    } catch (a) {
        if (Ee(e, n), a === i && i.aborted) return ve;
        throw a
    }
    return We(o) ? o : hs(e, o, i, r[6] === s.length ? r[6] : 0)
}

function Vt(e, t) {
    if (e._tx !== t) return;
    const s = t[3],
        r = e.stores.matches.get();
    let n = e._pending;
    for (let i = 0; i < s.length; i++) {
        const o = s[i],
            a = o.status === "success" && !o._notFound,
            c = r[i] ? .id === o.id && r[i] ? .status === "pending";
        if (a && !c) continue;
        const u = W(e, o),
            l = a || o.invalid ? 0 : u.options.pendingMs ? ? e.options.defaultPendingMs,
            f = u.options.pendingComponent ? ? e.options.defaultPendingComponent;
        if (!f || typeof l != "number" || l === 1 / 0) {
            n && (n[0] = t, n[2] = 0, n[4] = !0);
            return
        }
        const h = u.options.pendingMinMs ? ? e.options.defaultPendingMinMs ? ? 0;
        let d = !1;
        if (n ? .[1] === o.id ? (d = n[0] !== t, n[0] = t) : (clearTimeout(n ? .[3]), e._pending = n = void 0), n || (e._pending = n = [t, o.id, c ? Date.now() + h : t[4] + l, void 0, c || void 0, f]), n[4] && !d && n[5] === f) return;
        if (n[5] = f, !n[4]) {
            clearTimeout(n[3]);
            const g = n[2] - Date.now();
            if (g > 0) {
                n[3] = setTimeout(() => Vt(e, t), g);
                return
            }
            n[2] = 0
        }
        const v = s.map(g => ({ ...g,
            _flight: void 0
        }));
        v[i].status = "pending";
        const p = n[4] = e.startTransition(() => e.stores.setMatches(v), v).then(g => (g && e._pending === n && n[4] === p && !n[2] && (n[2] = Date.now() + h), g));
        return
    }
}

function ze(e, t) {
    const s = e._pending;
    (e._tx === t || !e._tx ? .[3].some(r => r.id === s ? .[1])) && (clearTimeout(s ? .[3]), e._pending = void 0)
}
async function Ys(e, t) {
    const s = e._pending;
    if (!s) return;
    clearTimeout(s[3]);
    const r = s[2] - Date.now();
    if (!s[4] || r <= 0 || !as(t[3]).some(i => i.id === s[1])) return;
    let n;
    try {
        await ie(new Promise(i => {
            n = setTimeout(i, r)
        }), t[0].signal)
    } catch {}
    clearTimeout(n)
}

function Ur(e, t) {
    e._committed = t, e.stores.setMatches(t)
}

function ao(e, t, s, r) {
    const n = e._committed,
        i = e._lifecycleEnd,
        o = e._cache;
    for (const l of s) l.preload = !1, r && (l._assetEnd = void 0);
    const a = as(s).length,
        c = new Map; {
        const l = Date.now(),
            f = new Set;
        for (let h = 0; h < s.length; h++) {
            const d = s[h];
            (h < a || d.status === "success") && f.add(d.id)
        }
        for (const h of [...n, ...o.values()]) {
            if (h.status !== "success" || f.has(h.id)) continue;
            const d = W(e, h);
            !d.options.loader || l - h.updatedAt >= (h.preload ? d.options.preloadGcTime ? ? e.options.defaultPreloadGcTime ? ? 3e5 : d.options.gcTime ? ? e.options.defaultGcTime ? ? 3e5) || c.set(h.id, o.get(h.id) === h ? h : { ...h,
                _flight: void 0,
                isFetching: !1,
                context: {}
            })
        }
    }
    t[3] = [], e._cache = c;
    const u = e._lifecycleEnd = Mr(s);
    Ur(e, s), q(e, [...o.values(), ...n].filter(l => l._flight && c.get(l.id) !== l), s), Ji(e, n, s, i, u, t)
}
async function nt(e, t) {
    let s = e._tx;
    for (; s && s !== t;) t = s, await s[5], s = e._tx
}

function zr(e, t, s) {
    const r = s[1].options,
        n = s[2];
    if (!n) return e.navigate({ ...r,
        replace: !0,
        ignoreBlocker: !0
    });
    if (r.reloadDocument) return e.navigate({
        href: (n.maskedLocation ? ? n).publicHref,
        reloadDocument: !0,
        replace: !0,
        ignoreBlocker: !0
    });
    n._redirects = t[1] + 1, e._pendingLocation = n;
    const i = e.commitLocation({ ...n,
        viewTransition: r.viewTransition,
        replace: !0,
        resetScroll: r.resetScroll,
        hashScrollIntoView: r.hashScrollIntoView,
        ignoreBlocker: !0
    });
    return queueMicrotask(() => {
        e._pendingLocation === n && (e._pendingLocation = void 0)
    }), i
}
async function co(e, t, s, r, n) {
    const i = s.map(c => ({ ...c
    }));
    ls(i);
    for (const c of r) se(e, i[c[0]]), i[c[0]] = c[3];
    const o = [t[2], i];
    let a;
    try {
        a = await jr(e, o, r, t[0], n)
    } catch (c) {
        throw q(e, i), c
    }
    if (We(a)) {
        q(e, i), a[0] === $ && e._tx === t && e._committed === s && await zr(e, t, a);
        return
    }
    if (await hs(e, a, t[0].signal), e._tx !== t || e._committed !== s) {
        q(e, i);
        return
    }
    for (const c of i) {
        const u = e._cache.get(c.id);
        u ? ._flight && u._flight === c._flight && (e._cache.delete(c.id), se(e, u))
    }
    Ur(e, i), q(e, s, i)
}
async function uo(e, t, s, r, n, i) {
    const o = await Br(e, t[2], t[3], [t[0], t[1], e._committed, void 0, n, s, i, r]);
    if (We(o)) {
        const f = o[0] === $ && e._tx === t;
        if ((!f || o[1].options.reloadDocument) && ze(e, t), q(e, t[3]), t[3] = [], !f) return;
        if (e._tx !== t) {
            ze(e, t);
            return
        }
        await zr(e, t, o);
        return
    }
    const a = o[1];
    if (e._tx === t && await Ys(e, t), e._tx !== t) {
        ze(e, t), q(e, a), Ee(e, o);
        return
    }
    const c = t[2],
        u = Rt(c, e.stores.resolvedLocation.get()),
        l = o[2];
    await e.startViewTransition(async () => {
        if (e._tx === t && await Ys(e, t), e._tx !== t) {
            ze(e, t), q(e, a), Ee(e, o);
            return
        }
        const f = () => {
                ze(e, t), ao(e, t, a, i), e._tx === t && (e.emit({
                    type: "onLoad",
                    ...u
                }), e._tx === t && e.emit({
                    type: "onBeforeRouteMount",
                    ...u
                }))
            },
            h = await e.startTransition(f, a);
        if (e._tx !== t) {
            Ee(e, o);
            return
        }
        l ? .length && co(e, t, a, l, o[3]).catch(console.error), e.batch(() => {
            e.stores.resolvedLocation.set(c), e.stores.status.set("idle"), e._tx === t && e.emit({
                type: "onResolved",
                ...u
            }), h && e._tx === t && e.emit({
                type: "onRendered",
                ...u
            })
        }), e._tx === t && (e._commitPromise ? .resolve(), e._commitPromise = void 0)
    })
}
async function lo(e, t) {
    const s = e._tx,
        r = e.stores.resolvedLocation.get(),
        n = r ? ? e.stores.location.get(),
        i = e.latestLocation,
        o = e._pendingLocation,
        a = o ? .href === i.href ? o._redirects ? ? 0 : 0,
        c = e._handoff,
        u = c ? .[0](),
        l = new AbortController,
        f = e._preflight;
    if (e._preflight = l, u || c ? .[1](), f ? .abort(), !l.signal.aborted) {
        const P = Rt(i, r);
        e.emit({
            type: "onBeforeNavigate",
            ...P
        }), l.signal.aborted || e.emit({
            type: "onBeforeLoad",
            ...P
        })
    }
    if (l.signal.aborted) {
        await nt(e, s);
        return
    }
    const h = n.href === i.href;
    let d = l;
    const v = e.matchRoutes(i, {
        _controller: l
    });
    ls(v);
    const p = u ? c[1](v) : void 0;
    if (p ? d = u : u ? .abort(), l.signal.aborted) {
        q(e, v), await nt(e, s);
        return
    }
    e._preflight = void 0;
    let g;
    const m = () => uo(e, S, h, () => Vt(e, S), t ? .sync, p),
        y = t ? .sync ? new Promise(P => g = P) : Promise.resolve().then(m),
        S = [d, a, i, v, Date.now(), y.then(() => nt(e, S))];
    if (e._tx = S, s) {
        for (const P of e.stores.matches.get()) {
            if (e._tx !== S) break;
            P.isFetching && Ye(e, P, !1)
        }
        s[0].abort(), q(e, s[3], S[3], !0)
    }
    if (e._tx !== S) {
        q(e, S[3]), S[3] = [], g ? .(), await nt(e, S);
        return
    }
    e.batch(() => {
        e.stores.status.set("pending"), e.stores.location.set(i)
    }), (p || !e._committed.length && v[0] ? .status !== "success" && !v.some(P => P._notFound)) && Vt(e, S), g ? .(m()), await S[5]
}
async function fo(e, t) {
    let s = e.buildLocation(t);
    for (let r = 0;; r++) {
        const n = e._committed,
            i = new AbortController;
        let o, a, c;
        try {
            try {
                o = e.matchRoutes(s, {
                    _controller: i
                }), ls(o), a = (e._preloads ? ? = new Map).set(i, o), c = await Br(e, s, o, [i, r, n, !0])
            } finally {
                a && (a = a.delete(i), q(e, o)), i.abort()
            }
            if (!We(c)) return c[1];
            if (!a || c.length < 3) return;
            s = c[2]
        } catch (u) {
            Ne(u) || console.error(u);
            return
        }
    }
}
async function Bl(e) {
    const t = window.$_TSR,
        s = e.options.serializationAdapters;
    s ? .length && (t.t = new Map(s.map(w => [w.key, w.fromSerializable])), t.buffer.forEach(w => w())), t.initialized = !0;
    const r = t.router;
    e.ssr = {
        manifest: r.manifest
    }, e.options.ssr = {
        nonce: document.querySelector('meta[property="csp-nonce"]') ? .content
    };
    const n = r.matches,
        i = new AbortController,
        o = e._preflight;
    e._preflight = i, o ? .abort();
    const a = () => e._preflight === i;
    let c, u, l, f;
    try {
        if (await ie(e.options.hydrate ? .(r.dehydratedData), i.signal), !a()) return;
        const w = e.history.location;
        l = w.href, f = w.state, e.updateLatestLocation(), c = e.latestLocation, e.stores.location.set(c), u = e.matchRoutes(c, {
            _controller: i
        })
    } catch (w) {
        if (a() && (e._preflight = void 0), i.abort(w), w !== i.signal) throw w
    }
    if (!a()) return;
    const h = [];
    let d, v = 0;
    const p = w => {
            v = Math.min(v, w + 1);
            const _ = h.splice(w);
            for (const O of _) W(e, O).options.loader && (O.status === "success" || !O.invalid && "loaderData" in O) && Nr(e, { ...O,
                status: "success",
                error: void 0,
                preload: !0
            }, e._cache.get(O.id));
            q(e, _)
        },
        g = n.length > u.length ? u.findIndex(w => w._notFound) + 1 : n.length;
    let m = !1;
    for (let w = 0; w < g; w++) {
        const _ = u[w],
            O = n[w];
        if (typeof O.i != "string" || ui(O.i) !== _.id) {
            d ? ? = w;
            break
        }
        v = w + 1;
        const F = W(e, _);
        if (("l" in O || O.s === "success" && O.e === void 0 && F.options.loader) && (_.loaderData = O.l), _.status = O.s, _.ssr = O.ssr, F.options.ssr = _.ssr, _.updatedAt = O.u, _.error = O.e, _._notFound || = O.g, _.status === "error" || _.status === "notFound" || _._notFound) {
            m = !0, h.push(_), (_.ssr === !1 || _.ssr === "data-only") && (d ? ? = w);
            break
        }
        if (_.status === "pending") {
            d ? ? = w;
            break
        }
        h.push(_), _.ssr === "data-only" && (d ? ? = w)
    }!m && h.length === g && g < u.length && (d = g);
    const y = h.map(async w => {
        try {
            const _ = W(e, w);
            return await (w._notFound ? Promise.all([re(_), re(_, "notFoundComponent")]) : re(_, w.status === "error" ? "errorComponent" : w.status === "notFound" ? "notFoundComponent" : void 0)), !0
        } catch {
            return !1
        }
    });
    let S = 0;
    try {
        for (; S < y.length && await ie(y[S], i.signal);) S++
    } catch {
        return
    }
    if (!a()) return;
    S < h.length && p(S);
    const P = Math.max(d === h.length ? h.length + 1 : h.length, S < y.length ? S : v);
    for (let w = 0; w < P; w++) {
        const _ = u[w],
            O = W(e, _),
            F = u[w - 1] ? .context ? ? e.options.context ? ? {};
        let x;
        if (O.options.context) {
            try {
                x = _._ctx = O.options.context({
                    deps: _.loaderDeps,
                    params: _.params,
                    context: F,
                    location: c,
                    navigate: A => e.navigate({ ...A,
                        _fromLocation: c
                    }),
                    buildLocation: e.buildLocation,
                    cause: _.cause,
                    abortController: i,
                    preload: !1,
                    matches: u,
                    routeId: O.id
                }) || {}
            } catch {
                if (!a()) return;
                if (_.status !== "error" && _.status !== "notFound" && !_._notFound) {
                    d = Math.min(d ? ? w, w), p(w);
                    break
                }
            }
            if (!a()) return
        }
        _.context = { ...F,
            ...x,
            ...h[w] && n[w].b
        }
    }
    if (await hs(e, [c, u], i.signal, 0, v), !a()) return;
    const I = d !== void 0 || h.length < g,
        E = m && h.length === g ? u : h;
    let b = I ? u : E,
        C;
    if (I && d !== void 0) {
        const w = b[d];
        C = w.ssr === "data-only" && v > d + 1 ? v : void 0, b = b.slice(), b[d] = { ...w,
            status: "pending",
            ssr: w.ssr === "data-only" ? "data-only" : !1,
            _assetEnd: C
        }
    }
    const L = () => {
            const w = e.history.location;
            return I && !e._tx && w.href === l && w.state === f && e._committed === E && E.length && !i.signal.aborted ? i : void 0
        },
        k = [L, w => {
            if (e._handoff !== k) return;
            e._handoff = void 0;
            const _ = E.length;
            if (!w || !L() || E.some((x, A) => x.id !== w[A] ? .id)) {
                i.abort();
                return
            }
            let O = C;
            if (O !== void 0) {
                for (let x = _; x < O; x++)
                    if (u[x] ? .id !== w[x] ? .id) {
                        O = x > d + 1 ? x : void 0;
                        break
                    }
            }
            const F = E.map(x => ({ ...x
            }));
            O !== void 0 && (F[d]._assetEnd = O), q(e, w.splice(0, _, ...F));
            for (let x = _; x < w.length; x++) {
                const A = w[x],
                    be = u[x];
                be ? .id === A.id && be._ctx && (A._ctx = be._ctx), A.abortController = i
            }
            return _
        }];
    e._committed = E, e._lifecycleEnd = Mr(E), e._handoff = k, e._preflight = void 0, e.batch(() => {
        e.stores.setMatches(b), e.stores.status.set("idle"), I || e.stores.resolvedLocation.set(e.stores.location.get())
    })
}
var oe = Symbol.asyncIterator,
    Hr = Symbol.hasInstance,
    Ae = Symbol.isConcatSpreadable,
    ae = Symbol.iterator,
    Qr = Symbol.match,
    Kr = Symbol.matchAll,
    qr = Symbol.replace,
    $r = Symbol.search,
    Vr = Symbol.species,
    Wr = Symbol.split,
    Gr = Symbol.toPrimitive,
    De = Symbol.toStringTag,
    Yr = Symbol.unscopables,
    Jr = {
        [oe]: 0,
        [Hr]: 1,
        [Ae]: 2,
        [ae]: 3,
        [Qr]: 4,
        [Kr]: 5,
        [qr]: 6,
        [$r]: 7,
        [Vr]: 8,
        [Wr]: 9,
        [Gr]: 10,
        [De]: 11,
        [Yr]: 12
    },
    ho = {
        0: oe,
        1: Hr,
        2: Ae,
        3: ae,
        4: Qr,
        5: Kr,
        6: qr,
        7: $r,
        8: Vr,
        9: Wr,
        10: Gr,
        11: De,
        12: Yr
    },
    po = {
        2: !0,
        3: !1,
        1: void 0,
        0: null,
        4: -0,
        5: Number.POSITIVE_INFINITY,
        6: Number.NEGATIVE_INFINITY,
        7: NaN
    },
    vo = {
        0: "Error",
        1: "EvalError",
        2: "RangeError",
        3: "ReferenceError",
        4: "SyntaxError",
        5: "TypeError",
        6: "URIError"
    },
    go = {
        0: Error,
        1: EvalError,
        2: RangeError,
        3: ReferenceError,
        4: SyntaxError,
        5: TypeError,
        6: URIError
    };

function M(e, t, s, r, n, i, o, a, c, u, l, f) {
    return {
        t: e,
        i: t,
        s,
        c: r,
        m: n,
        p: i,
        e: o,
        a,
        f: c,
        b: u,
        o: l,
        l: f
    }
}

function ge(e) {
    return M(2, void 0, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}
var Xr = ge(2),
    Zr = ge(3),
    mo = ge(1),
    yo = ge(0),
    bo = ge(4),
    So = ge(5),
    wo = ge(6),
    _o = ge(7);

function Ro(e) {
    switch (e) {
        case '"':
            return '\\"';
        case "\\":
            return "\\\\";
        case `
`:
            return "\\n";
        case "\r":
            return "\\r";
        case "\b":
            return "\\b";
        case "	":
            return "\\t";
        case "\f":
            return "\\f";
        case "<":
            return "\\x3C";
        case "\u2028":
            return "\\u2028";
        case "\u2029":
            return "\\u2029";
        default:
            return
    }
}

function me(e) {
    let t = "",
        s = 0,
        r;
    for (let n = 0, i = e.length; n < i; n++) r = Ro(e[n]), r && (t += e.slice(s, n) + r, s = n + 1);
    return s === 0 ? t = e : t += e.slice(s), t
}

function Eo(e) {
    switch (e) {
        case "\\\\":
            return "\\";
        case '\\"':
            return '"';
        case "\\n":
            return `
`;
        case "\\r":
            return "\r";
        case "\\b":
            return "\b";
        case "\\t":
            return "	";
        case "\\f":
            return "\f";
        case "\\x3C":
            return "<";
        case "\\u2028":
            return "\u2028";
        case "\\u2029":
            return "\u2029";
        default:
            return e
    }
}

function ye(e) {
    return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Eo)
}
var it = "__SEROVAL_REFS__",
    en = new Map,
    ke = new Map;

function tn(e) {
    return en.has(e)
}

function Po(e) {
    return ke.has(e)
}

function Co(e) {
    if (tn(e)) return en.get(e);
    throw new ra(e)
}

function Oo(e) {
    if (Po(e)) return ke.get(e);
    throw new na(e)
}
typeof globalThis < "u" ? Object.defineProperty(globalThis, it, {
    value: ke,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof window < "u" ? Object.defineProperty(window, it, {
    value: ke,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof self < "u" ? Object.defineProperty(self, it, {
    value: ke,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof global < "u" && Object.defineProperty(global, it, {
    value: ke,
    configurable: !0,
    writable: !1,
    enumerable: !1
});

function ds(e) {
    return e instanceof EvalError ? 1 : e instanceof RangeError ? 2 : e instanceof ReferenceError ? 3 : e instanceof SyntaxError ? 4 : e instanceof TypeError ? 5 : e instanceof URIError ? 6 : 0
}

function To(e) {
    const t = vo[ds(e)];
    return e.name !== t ? {
        name: e.name
    } : e.constructor.name !== t ? {
        name: e.constructor.name
    } : {}
}

function sn(e, t) {
    let s = To(e);
    const r = Object.getOwnPropertyNames(e);
    for (let n = 0, i = r.length, o; n < i; n++) o = r[n], o !== "name" && o !== "message" && (o === "stack" ? t & 4 && (s = s || {}, s[o] = e[o]) : (s = s || {}, s[o] = e[o]));
    return s
}

function rn(e) {
    return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : Object.isExtensible(e) ? 0 : 1
}

function Io(e) {
    switch (e) {
        case Number.POSITIVE_INFINITY:
            return So;
        case Number.NEGATIVE_INFINITY:
            return wo
    }
    return e !== e ? _o : Object.is(e, -0) ? bo : M(0, void 0, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}

function nn(e) {
    return M(1, void 0, me(e), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}

function xo(e) {
    return M(3, void 0, "" + e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}

function Lo(e) {
    return M(4, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}

function ko(e, t) {
    const s = t.valueOf();
    return M(5, e, s !== s ? "" : t.toISOString(), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}

function ue(e, t, s) {
    return M(36, e, s.toString(), t, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}

function Fo(e, t) {
    return M(6, e, void 0, me(t.source), t.flags, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}

function Mo(e, t) {
    return M(17, e, Jr[t], void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}

function Ao(e, t) {
    return M(18, e, me(Co(t)), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}

function Do(e, t, s) {
    return M(25, e, s, me(t), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}

function No(e, t, s) {
    return M(9, e, void 0, void 0, void 0, void 0, void 0, s, void 0, void 0, rn(t), void 0)
}

function jo(e, t) {
    return M(21, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0)
}

function Bo(e, t, s) {
    return M(15, e, void 0, t.constructor.name, void 0, void 0, void 0, void 0, s, t.byteOffset, void 0, t.length)
}

function Uo(e, t, s) {
    return M(16, e, void 0, t.constructor.name, void 0, void 0, void 0, void 0, s, t.byteOffset, void 0, t.length)
}

function zo(e, t, s) {
    return M(20, e, void 0, void 0, void 0, void 0, void 0, void 0, s, t.byteOffset, void 0, t.byteLength)
}

function Ho(e, t, s) {
    return M(13, e, ds(t), void 0, me(t.message), s, void 0, void 0, void 0, void 0, void 0, void 0)
}

function Qo(e, t, s) {
    return M(14, e, ds(t), void 0, me(t.message), s, void 0, void 0, void 0, void 0, void 0, void 0)
}

function Ko(e, t) {
    return M(7, e, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0, void 0)
}

function qo(e, t) {
    return M(28, void 0, void 0, void 0, void 0, void 0, void 0, [e, t], void 0, void 0, void 0, void 0)
}

function $o(e, t) {
    return M(30, void 0, void 0, void 0, void 0, void 0, void 0, [e, t], void 0, void 0, void 0, void 0)
}

function Vo(e, t, s) {
    return M(31, e, void 0, void 0, void 0, void 0, void 0, s, t, void 0, void 0, void 0)
}

function Wo(e, t) {
    return M(32, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0)
}

function Go(e, t) {
    return M(33, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0)
}

function Yo(e, t) {
    return M(34, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0)
}

function Jo(e, t, s, r) {
    return M(35, e, s, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0, r)
}
var {
    toString: Ul
} = Object.prototype, Xo = {
    parsing: 1,
    serialization: 2,
    deserialization: 3
};

function Zo(e) {
    return `Seroval Error (step: ${Xo[e]})`
}
var ea = (e, t) => Zo(e),
    on = class extends Error {
        constructor(e, t) {
            super(ea(e, t)), this.cause = t
        }
    },
    Js = class extends on {
        constructor(e) {
            super("parsing", e)
        }
    },
    ta = class extends on {
        constructor(e) {
            super("deserialization", e)
        }
    };

function ce(e) {
    return `Seroval Error (specific: ${e})`
}
var Pt = class extends Error {
        constructor(e) {
            super(ce(1)), this.value = e
        }
    },
    ps = class extends Error {
        constructor(e) {
            super(ce(2))
        }
    },
    sa = class extends Error {
        constructor(e) {
            super(ce(3))
        }
    },
    Ct = class extends Error {
        constructor(e) {
            super(ce(4))
        }
    },
    ra = class extends Error {
        constructor(e) {
            super(ce(5)), this.value = e
        }
    },
    na = class extends Error {
        constructor(e) {
            super(ce(6))
        }
    },
    ia = class extends Error {
        constructor(e) {
            super(ce(7))
        }
    },
    V = class extends Error {
        constructor(e) {
            super(ce(8))
        }
    },
    an = class extends Error {
        constructor(e) {
            super(ce(9))
        }
    },
    oa = class {
        constructor(e, t) {
            this.value = e, this.replacement = t
        }
    },
    vs = () => {
        const e = {
            p: 0,
            s: 0,
            f: 0
        };
        return e.p = new Promise((t, s) => {
            e.s = t, e.f = s
        }), e
    },
    aa = () => {
        const e = [],
            t = [];
        let s = !0,
            r = !1,
            n = 0;
        const i = {
            flush(o, a, c) {
                for (c = 0; c < n; c++) t[c] && t[c][a](o)
            },
            up(o, a, c, u) {
                for (a = 0, c = e.length; a < c; a++) u = e[a], !s && a === c - 1 ? o[r ? "return" : "throw"](u) : o.next(u)
            },
            on(o, a) {
                return s && (a = n++, t[a] = o), i.up(o), () => {
                    s && (t[a] = t[n], t[n--] = void 0)
                }
            }
        };
        return {
            __SEROVAL_STREAM__: !0,
            on(o) {
                return i.on(o)
            },
            next(o) {
                s && (e.push(o), i.flush(o, "next"))
            },
            throw (o) {
                s && (e.push(o), i.flush(o, "throw"), s = !1, r = !1, t.length = 0)
            },
            return (o) {
                s && (e.push(o), i.flush(o, "return"), s = !1, r = !0, t.length = 0)
            }
        }
    },
    ca = e => t => () => {
        let s = 0;
        const r = {
            [e]() {
                return r
            },
            next() {
                if (s > t.d) return {
                    done: !0,
                    value: void 0
                };
                const n = s++,
                    i = t.v[n];
                if (n === t.t) throw i;
                return {
                    done: n === t.d,
                    value: i
                }
            }
        };
        return r
    },
    ua = (e, t) => s => () => {
        let r = 0,
            n = -1,
            i = !1;
        const o = [],
            a = [],
            c = {
                finalize(l = 0, f = a.length) {
                    for (; l < f; l++) a[l].s({
                        done: !0,
                        value: void 0
                    })
                }
            };
        s.on({
            next(l) {
                const f = a.shift();
                f && f.s({
                    done: !1,
                    value: l
                }), o.push(l)
            },
            throw (l) {
                const f = a.shift();
                f && f.f(l), c.finalize(), n = o.length, i = !0, o.push(l)
            },
            return (l) {
                const f = a.shift();
                f && f.s({
                    done: !0,
                    value: l
                }), c.finalize(), n = o.length, o.push(l)
            }
        });
        const u = {
            [e]() {
                return u
            },
            next() {
                if (n === -1) {
                    const h = r++;
                    if (h >= o.length) {
                        const d = t();
                        return a.push(d), d.p
                    }
                    return {
                        done: !1,
                        value: o[h]
                    }
                }
                if (r > n) return {
                    done: !0,
                    value: void 0
                };
                const l = r++,
                    f = o[l];
                if (l !== n) return {
                    done: !1,
                    value: f
                };
                if (i) throw f;
                return {
                    done: !0,
                    value: f
                }
            }
        };
        return u
    },
    la = e => {
        const t = atob(e),
            s = t.length,
            r = new Uint8Array(s);
        for (let n = 0; n < s; n++) r[n] = t.charCodeAt(n);
        return r.buffer
    };

function fa(e) {
    return "__SEROVAL_SEQUENCE__" in e
}

function cn(e, t, s) {
    return {
        __SEROVAL_SEQUENCE__: !0,
        v: e,
        t,
        d: s
    }
}

function ha(e) {
    const t = [];
    let s = -1,
        r = -1;
    const n = e[ae]();
    for (;;) try {
        const i = n.next();
        if (t.push(i.value), i.done) {
            r = t.length - 1;
            break
        }
    } catch (i) {
        s = t.length, t.push(i)
    }
    return cn(t, s, r)
}
var da = ca(ae);

function pa(e) {
    return da(e)
}
var va = {},
    ga = {},
    ma = {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {}
    };

function ya(e) {
    return "__SEROVAL_STREAM__" in e
}

function Je() {
    return aa()
}

function ba(e) {
    const t = Je(),
        s = e[oe]();
    async function r() {
        try {
            const n = await s.next();
            n.done ? t.return(n.value) : (t.next(n.value), await r())
        } catch (n) {
            t.throw(n)
        }
    }
    return r().catch(() => {}), t
}
var Sa = ua(oe, vs);

function wa(e) {
    return Sa(e)
}
async function _a(e) {
    try {
        return [1, await e]
    } catch (t) {
        return [0, t]
    }
}

function Ra(e, t) {
    return {
        plugins: t.plugins,
        mode: e,
        marked: new Set,
        features: 127 ^ (t.disabledFeatures || 0),
        refs: t.refs || new Map,
        depthLimit: t.depthLimit || 1e3
    }
}

function pt(e, t) {
    e.marked.add(t)
}

function Ea(e, t) {
    const s = e.refs.size;
    return e.refs.set(t, s), s
}

function Ot(e, t) {
    const s = e.refs.get(t);
    return s != null ? (pt(e, s), {
        type: 1,
        value: Lo(s)
    }) : {
        type: 0,
        value: Ea(e, t)
    }
}

function gs(e, t) {
    const s = Ot(e, t);
    return s.type === 1 ? s : tn(t) ? {
        type: 2,
        value: Ao(s.value, t)
    } : s
}

function _e(e, t) {
    const s = gs(e, t);
    if (s.type !== 0) return s.value;
    if (t in Jr) return Mo(s.value, t);
    throw new Pt(t)
}

function Tt(e, t) {
    const s = Ot(e, ma[t]);
    return s.type === 1 ? s.value : M(26, s.value, t, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
}

function Pa(e) {
    const t = Ot(e, va);
    return t.type === 1 ? t.value : M(27, t.value, void 0, void 0, void 0, void 0, void 0, void 0, _e(e, ae), void 0, void 0, void 0)
}

function Ca(e) {
    const t = Ot(e, ga);
    return t.type === 1 ? t.value : M(29, t.value, void 0, void 0, void 0, void 0, void 0, [Tt(e, 1), _e(e, oe)], void 0, void 0, void 0, void 0)
}

function Oa(e, t, s, r) {
    return M(s ? 11 : 10, e, void 0, void 0, void 0, r, void 0, void 0, void 0, void 0, rn(t), void 0)
}

function Ta(e, t, s, r) {
    return M(8, t, void 0, void 0, void 0, void 0, {
        k: s,
        v: r
    }, void 0, Tt(e, 0), void 0, void 0, void 0)
}

function Ia(e, t, s) {
    const r = new Uint8Array(s);
    let n = "";
    for (let i = 0, o = r.length; i < o; i++) n += String.fromCharCode(r[i]);
    return M(19, t, me(btoa(n)), void 0, void 0, void 0, void 0, void 0, Tt(e, 5), void 0, void 0, void 0)
}

function xa(e, t) {
    return {
        base: Ra(e, t),
        child: void 0
    }
}
var La = class {
    constructor(e, t) {
        this._p = e, this.depth = t
    }
    parse(e) {
        return Q(this._p, this.depth, e)
    }
};
async function ka(e, t, s) {
    const r = [];
    for (let n = 0, i = s.length; n < i; n++) n in s ? r[n] = await Q(e, t, s[n]) : r[n] = 0;
    return r
}
async function Fa(e, t, s, r) {
    return No(s, r, await ka(e, t, r))
}
async function ms(e, t, s) {
    const r = Object.entries(s),
        n = [],
        i = [];
    for (let o = 0, a = r.length; o < a; o++) n.push(me(r[o][0])), i.push(await Q(e, t, r[o][1]));
    return ae in s && (n.push(_e(e.base, ae)), i.push(qo(Pa(e.base), await Q(e, t, ha(s))))), oe in s && (n.push(_e(e.base, oe)), i.push($o(Ca(e.base), await Q(e, t, ba(s))))), De in s && (n.push(_e(e.base, De)), i.push(nn(s[De]))), Ae in s && (n.push(_e(e.base, Ae)), i.push(s[Ae] ? Xr : Zr)), {
        k: n,
        v: i
    }
}
async function zt(e, t, s, r, n) {
    return Oa(s, r, n, await ms(e, t, r))
}
async function Ma(e, t, s, r) {
    return jo(s, await Q(e, t, r.valueOf()))
}
async function Aa(e, t, s, r) {
    return Bo(s, r, await Q(e, t, r.buffer))
}
async function Da(e, t, s, r) {
    return Uo(s, r, await Q(e, t, r.buffer))
}
async function Na(e, t, s, r) {
    return zo(s, r, await Q(e, t, r.buffer))
}
async function Xs(e, t, s, r) {
    const n = sn(r, e.base.features);
    return Ho(s, r, n ? await ms(e, t, n) : void 0)
}
async function ja(e, t, s, r) {
    const n = sn(r, e.base.features);
    return Qo(s, r, n ? await ms(e, t, n) : void 0)
}
async function Ba(e, t, s, r) {
    const n = [],
        i = [];
    for (const [o, a] of r.entries()) n.push(await Q(e, t, o)), i.push(await Q(e, t, a));
    return Ta(e.base, s, n, i)
}
async function Ua(e, t, s, r) {
    const n = [];
    for (const i of r.keys()) n.push(await Q(e, t, i));
    return Ko(s, n)
}
async function un(e, t, s, r) {
    const n = e.base.plugins;
    if (n)
        for (let i = 0, o = n.length; i < o; i++) {
            const a = n[i];
            if (a.parse.async && a.test(r)) return Do(s, a.tag, await a.parse.async(r, new La(e, t), {
                id: s
            }))
        }
}
async function za(e, t, s, r) {
    const [n, i] = await _a(r);
    return M(12, s, n, void 0, void 0, void 0, void 0, void 0, await Q(e, t, i), void 0, void 0, void 0)
}

function Ha(e, t, s, r, n) {
    const i = [],
        o = s.on({
            next: a => {
                pt(this.base, t), Q(this, e, a).then(c => {
                    i.push(Wo(t, c))
                }, c => {
                    n(c), o()
                })
            },
            throw: a => {
                pt(this.base, t), Q(this, e, a).then(c => {
                    i.push(Go(t, c)), r(i), o()
                }, c => {
                    n(c), o()
                })
            },
            return: a => {
                pt(this.base, t), Q(this, e, a).then(c => {
                    i.push(Yo(t, c)), r(i), o()
                }, c => {
                    n(c), o()
                })
            }
        })
}
async function Qa(e, t, s, r) {
    return Vo(s, Tt(e.base, 4), await new Promise(Ha.bind(e, t, s, r)))
}
async function Ka(e, t, s, r) {
    const n = [];
    for (let i = 0, o = r.v.length; i < o; i++) n[i] = await Q(e, t, r.v[i]);
    return Jo(s, n, r.t, r.d)
}
async function qa(e, t, s, r) {
    if (Array.isArray(r)) return Fa(e, t, s, r);
    if (ya(r)) return Qa(e, t, s, r);
    if (fa(r)) return Ka(e, t, s, r);
    let n = r.constructor;
    if (n !== void 0 && typeof n != "function") {
        const a = Object.getPrototypeOf(r);
        n = a === null ? void 0 : a.constructor
    }
    if (n === oa) return Q(e, t, r.replacement);
    const i = await un(e, t, s, r);
    if (i) return i;
    switch (n) {
        case Object:
            return zt(e, t, s, r, !1);
        case void 0:
            return zt(e, t, s, r, !0);
        case Date:
            return ko(s, r);
        case Error:
        case EvalError:
        case RangeError:
        case ReferenceError:
        case SyntaxError:
        case TypeError:
        case URIError:
            return Xs(e, t, s, r);
        case Number:
        case Boolean:
        case String:
        case BigInt:
            return Ma(e, t, s, r);
        case ArrayBuffer:
            return Ia(e.base, s, r);
        case Int8Array:
        case Int16Array:
        case Int32Array:
        case Uint8Array:
        case Uint16Array:
        case Uint32Array:
        case Uint8ClampedArray:
        case Float32Array:
        case Float64Array:
            return Aa(e, t, s, r);
        case DataView:
            return Na(e, t, s, r);
        case Map:
            return Ba(e, t, s, r);
        case Set:
            return Ua(e, t, s, r)
    }
    if (n === Promise || r instanceof Promise) return za(e, t, s, r);
    const o = e.base.features;
    if (o & 32 && n === RegExp) return Fo(s, r);
    if (o & 16) switch (n) {
        case BigInt64Array:
        case BigUint64Array:
            return Da(e, t, s, r);
        default:
            break
    }
    if (o & 1 && typeof AggregateError < "u" && (n === AggregateError || r instanceof AggregateError)) return ja(e, t, s, r);
    if (o & 64 && typeof Temporal < "u") switch (n) {
        case Temporal.Instant:
            return ue(s, 0, r);
        case Temporal.Duration:
            return ue(s, 1, r);
        case Temporal.PlainDate:
            return ue(s, 2, r);
        case Temporal.PlainDateTime:
            return ue(s, 3, r);
        case Temporal.PlainMonthDay:
            return ue(s, 4, r);
        case Temporal.PlainTime:
            return ue(s, 5, r);
        case Temporal.PlainYearMonth:
            return ue(s, 6, r);
        case Temporal.ZonedDateTime:
            return ue(s, 7, r);
        default:
            break
    }
    if (r instanceof Error) return Xs(e, t, s, r);
    if (ae in r || oe in r) return zt(e, t, s, r, !!n);
    throw new Pt(r)
}
async function $a(e, t, s) {
    const r = gs(e.base, s);
    if (r.type !== 0) return r.value;
    const n = await un(e, t, r.value, s);
    if (n) return n;
    throw new Pt(s)
}
async function Q(e, t, s) {
    if (t >= e.base.depthLimit) throw new an(e.base.depthLimit);
    switch (typeof s) {
        case "boolean":
            return s ? Xr : Zr;
        case "undefined":
            return mo;
        case "string":
            return nn(s);
        case "number":
            return Io(s);
        case "bigint":
            return xo(s);
        case "object":
            if (s) {
                const r = gs(e.base, s);
                return r.type === 0 ? await qa(e, t + 1, r.value, s) : r.value
            }
            return yo;
        case "symbol":
            return _e(e.base, s);
        case "function":
            return $a(e, t, s);
        default:
            throw new Pt(s)
    }
}
async function Va(e, t) {
    try {
        return await Q(e, 0, t)
    } catch (s) {
        throw s instanceof Js ? s : new Js(s)
    }
}

function ln(e, t) {
    for (let s = 0, r = t.length; s < r; s++) {
        const n = t[s];
        e.has(n) || (e.add(n), n.extends && ln(e, n.extends))
    }
}

function fn(e) {
    if (e) {
        const t = new Set;
        return ln(t, e), [...t]
    }
}

function Wa(e) {
    switch (e) {
        case "Int8Array":
            return Int8Array;
        case "Int16Array":
            return Int16Array;
        case "Int32Array":
            return Int32Array;
        case "Uint8Array":
            return Uint8Array;
        case "Uint16Array":
            return Uint16Array;
        case "Uint32Array":
            return Uint32Array;
        case "Uint8ClampedArray":
            return Uint8ClampedArray;
        case "Float32Array":
            return Float32Array;
        case "Float64Array":
            return Float64Array;
        case "BigInt64Array":
            return BigInt64Array;
        case "BigUint64Array":
            return BigUint64Array;
        default:
            throw new ia(e)
    }
}

function Ga(e) {
    switch (e) {
        case "constructor":
        case "__proto__":
        case "prototype":
        case "__defineGetter__":
        case "__defineSetter__":
        case "__lookupGetter__":
        case "__lookupSetter__":
            return !1;
        default:
            return !0
    }
}

function Ya(e) {
    switch (e) {
        case oe:
        case Ae:
        case De:
        case ae:
            return !0;
        default:
            return !1
    }
}
var Ja = 1e6,
    Xa = 1e4,
    Za = 2e4;

function hn(e, t) {
    switch (t) {
        case 3:
            return Object.freeze(e);
        case 1:
            return Object.preventExtensions(e);
        case 2:
            return Object.seal(e);
        default:
            return e
    }
}
var ec = 1e3;

function tc(e, t) {
    var s;
    const r = t.refs || new Map;
    return "types" in r || Object.assign(r, {
        types: new Map
    }), {
        mode: e,
        plugins: t.plugins,
        refs: r,
        features: (s = t.features) !== null && s !== void 0 ? s : 127 ^ (t.disabledFeatures || 0),
        depthLimit: t.depthLimit || ec
    }
}

function sc(e) {
    return {
        mode: 2,
        base: tc(2, e),
        child: void 0
    }
}
var rc = class {
    constructor(e, t) {
        this._p = e, this.depth = t
    }
    deserialize(e) {
        return D(this._p, this.depth, e)
    }
};

function dn(e, t) {
    if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t)) throw new V({
        t: 4,
        i: t
    });
    if (e.refs.has(t)) throw new Error("Conflicted ref id: " + t)
}

function pn(e) {
    return !!e && typeof e == "object" && "then" in e && typeof e.then == "function"
}

function nc(e, t, s) {
    return dn(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, s), s
}

function ic(e, t, s) {
    return dn(e.base, t), e.base.refs.set(t, s), s
}

function H(e, t, s) {
    return e.mode === 1 ? nc(e, t, s) : ic(e, t, s)
}

function Wt(e, t, s) {
    if (Object.hasOwn(t, s)) return t[s];
    throw new V(e)
}

function oc(e, t) {
    return H(e, t.i, Oo(ye(t.s)))
}

function ac(e, t, s) {
    const r = s.a,
        n = r.length,
        i = H(e, s.i, new Array(n));
    for (let o = 0, a; o < n; o++) a = r[o], a && (i[o] = D(e, t, a));
    return hn(i, s.o), i
}

function Zs(e, t, s) {
    Ga(t) ? e[t] = s : Object.defineProperty(e, t, {
        value: s,
        configurable: !0,
        enumerable: !0,
        writable: !0
    })
}

function cc(e, t, s, r, n) {
    if (typeof r == "string") Zs(s, ye(r), D(e, t, n));
    else {
        const i = D(e, t, r);
        switch (typeof i) {
            case "string":
                Zs(s, i, D(e, t, n));
                break;
            case "symbol":
                Ya(i) && (s[i] = D(e, t, n));
                break;
            default:
                throw new V(r)
        }
    }
}

function vn(e, t, s) {
    e.base.refs.types.set(t, s)
}

function It(e, t, s, r) {
    if (e.base.refs.types.get(s) !== r) throw new V(t)
}

function gn(e, t, s, r) {
    const n = s.k;
    if (n.length > 0)
        for (let i = 0, o = s.v, a = n.length; i < a; i++) cc(e, t, r, n[i], o[i]);
    return r
}

function uc(e, t, s) {
    const r = H(e, s.i, s.t === 10 ? {} : Object.create(null));
    return gn(e, t, s.p, r), hn(r, s.o), r
}

function lc(e, t) {
    return H(e, t.i, new Date(t.s))
}

function fc(e, t) {
    if (!(e.base.features & 64)) throw new ps(t);
    let s;
    switch (t.c) {
        case 0:
            s = Temporal.Instant.from(t.s);
            break;
        case 1:
            s = Temporal.Duration.from(t.s);
            break;
        case 2:
            s = Temporal.PlainDate.from(t.s);
            break;
        case 3:
            s = Temporal.PlainDateTime.from(t.s);
            break;
        case 4:
            s = Temporal.PlainMonthDay.from(t.s);
            break;
        case 5:
            s = Temporal.PlainTime.from(t.s);
            break;
        case 6:
            s = Temporal.PlainYearMonth.from(t.s);
            break;
        case 7:
            s = Temporal.ZonedDateTime.from(t.s);
            break;
        default:
            throw new V(t)
    }
    return H(e, t.i, s)
}

function hc(e, t) {
    if (e.base.features & 32) {
        const s = ye(t.c);
        if (s.length > Za) throw new V(t);
        return H(e, t.i, new RegExp(s, t.m))
    }
    throw new ps(t)
}

function dc(e, t, s) {
    const r = H(e, s.i, new Set);
    for (let n = 0, i = s.a, o = i.length; n < o; n++) r.add(D(e, t, i[n]));
    return r
}

function pc(e, t, s) {
    const r = H(e, s.i, new Map);
    for (let n = 0, i = s.e.k, o = s.e.v, a = i.length; n < a; n++) r.set(D(e, t, i[n]), D(e, t, o[n]));
    return r
}

function vc(e, t) {
    if (t.s.length > Ja) throw new V(t);
    return H(e, t.i, la(ye(t.s)))
}

function gc(e, t, s) {
    var r;
    const n = Wa(s.c),
        i = D(e, t, s.f),
        o = (r = s.b) !== null && r !== void 0 ? r : 0;
    if (o < 0 || o > i.byteLength) throw new V(s);
    return H(e, s.i, new n(i, o, s.l))
}

function mc(e, t, s) {
    var r;
    const n = D(e, t, s.f),
        i = (r = s.b) !== null && r !== void 0 ? r : 0;
    if (i < 0 || i > n.byteLength) throw new V(s);
    return H(e, s.i, new DataView(n, i, s.l))
}

function mn(e, t, s, r) {
    if (s.p) {
        const n = gn(e, t, s.p, {});
        Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
    }
    return r
}

function yc(e, t, s) {
    return mn(e, t, s, H(e, s.i, new AggregateError([], ye(s.m))))
}

function bc(e, t, s) {
    const r = Wt(s, go, s.s);
    return mn(e, t, s, H(e, s.i, new r(ye(s.m))))
}

function Sc(e, t, s) {
    const r = vs(),
        n = H(e, s.i, r.p),
        i = D(e, t, s.f);
    if (pn(i)) throw new V(s.f);
    return s.s ? r.s(i) : r.f(i), n
}

function wc(e, t, s) {
    return H(e, s.i, Object(D(e, t, s.f)))
}

function _c(e, t, s) {
    const r = e.base.plugins;
    if (r) {
        const n = ye(s.c);
        for (let i = 0, o = r.length; i < o; i++) {
            const a = r[i];
            if (a.tag === n) return H(e, s.i, a.deserialize(s.s, new rc(e, t), {
                id: s.i
            }))
        }
    }
    throw new sa(s.c)
}

function Rc(e, t) {
    const s = H(e, t.i, H(e, t.s, vs()).p);
    return vn(e, t.s, 22), s
}

function Ec(e, t, s) {
    const r = e.base.refs.get(s.i);
    if (r) {
        It(e, s, s.i, 22);
        const n = D(e, t, s.a[1]);
        if (pn(n)) throw new V(s.a[1]);
        s.t === 23 ? r.s(n) : r.f(n);
        return
    }
    throw new Ct("Promise")
}

function Pc(e, t, s) {
    return D(e, t, s.a[0]), pa(D(e, t, s.a[1]))
}

function Cc(e, t, s) {
    return D(e, t, s.a[0]), wa(D(e, t, s.a[1]))
}

function Oc(e, t, s) {
    const r = H(e, s.i, Je());
    vn(e, s.i, 31);
    const n = s.a,
        i = n.length;
    if (i)
        for (let o = 0; o < i; o++) D(e, t, n[o]);
    return r
}

function Tc(e, t, s) {
    const r = e.base.refs.get(s.i);
    if (r) {
        It(e, s, s.i, 31), r.next(D(e, t, s.f));
        return
    }
    throw new Ct("Stream")
}

function Ic(e, t, s) {
    const r = e.base.refs.get(s.i);
    if (r) {
        It(e, s, s.i, 31), r.throw(D(e, t, s.f));
        return
    }
    throw new Ct("Stream")
}

function xc(e, t, s) {
    const r = e.base.refs.get(s.i);
    if (r) {
        It(e, s, s.i, 31), r.return(D(e, t, s.f));
        return
    }
    throw new Ct("Stream")
}

function Lc(e, t, s) {
    D(e, t, s.f)
}

function kc(e, t, s) {
    D(e, t, s.a[1])
}

function Fc(e, t, s) {
    const r = H(e, s.i, cn([], s.s, s.l));
    for (let n = 0, i = s.a.length; n < i; n++) r.v[n] = D(e, t, s.a[n]);
    return r
}

function D(e, t, s) {
    if (t > e.base.depthLimit) throw new an(e.base.depthLimit);
    switch (t += 1, s.t) {
        case 2:
            return Wt(s, po, s.s);
        case 0:
            return Number(s.s);
        case 1:
            return ye(String(s.s));
        case 3:
            if (String(s.s).length > Xa) throw new V(s);
            return BigInt(s.s);
        case 4:
            return e.base.refs.get(s.i);
        case 18:
            return oc(e, s);
        case 9:
            return ac(e, t, s);
        case 10:
        case 11:
            return uc(e, t, s);
        case 5:
            return lc(e, s);
        case 6:
            return hc(e, s);
        case 7:
            return dc(e, t, s);
        case 8:
            return pc(e, t, s);
        case 19:
            return vc(e, s);
        case 16:
        case 15:
            return gc(e, t, s);
        case 20:
            return mc(e, t, s);
        case 14:
            return yc(e, t, s);
        case 13:
            return bc(e, t, s);
        case 12:
            return Sc(e, t, s);
        case 17:
            return Wt(s, ho, s.s);
        case 21:
            return wc(e, t, s);
        case 25:
            return _c(e, t, s);
        case 22:
            return Rc(e, s);
        case 23:
        case 24:
            return Ec(e, t, s);
        case 28:
            return Pc(e, t, s);
        case 30:
            return Cc(e, t, s);
        case 31:
            return Oc(e, t, s);
        case 32:
            return Tc(e, t, s);
        case 33:
            return Ic(e, t, s);
        case 34:
            return xc(e, t, s);
        case 27:
            return Lc(e, t, s);
        case 29:
            return kc(e, t, s);
        case 35:
            return Fc(e, t, s);
        case 36:
            return fc(e, s);
        default:
            throw new ps(s)
    }
}

function Mc(e, t) {
    try {
        return D(e, 0, t)
    } catch (s) {
        throw new ta(s)
    }
}

function zl(e, t) {
    return Mc(sc({
        plugins: fn(t.plugins),
        refs: t.refs,
        features: t.features,
        disabledFeatures: t.disabledFeatures,
        depthLimit: t.depthLimit
    }), e)
}
async function Hl(e, t = {}) {
    const s = xa(1, {
        plugins: fn(t.plugins),
        disabledFeatures: t.disabledFeatures
    });
    return {
        t: await Va(s, e),
        f: s.base.features,
        m: Array.from(s.base.marked)
    }
}

function Ql(e) {
    return {
        tag: "$TSR/t/" + e.key,
        test: e.test,
        parse: {
            sync(t, s) {
                return {
                    v: s.parse(e.toSerializable(t))
                }
            },
            async async (t, s) {
                return {
                    v: await s.parse(e.toSerializable(t))
                }
            },
            stream(t, s) {
                return {
                    v: s.parse(e.toSerializable(t))
                }
            }
        },
        serialize: void 0,
        deserialize(t, s) {
            return e.fromSerializable(s.deserialize(t.v))
        }
    }
}

function yn(e) {
    if (Array.isArray(e)) return e.flatMap(l => yn(l));
    if (typeof e != "string") return [];
    const t = [];
    let s = 0,
        r, n, i, o, a;
    const c = () => {
            for (; s < e.length && /\s/.test(e.charAt(s));) s += 1;
            return s < e.length
        },
        u = () => (n = e.charAt(s), n !== "=" && n !== ";" && n !== ",");
    for (; s < e.length;) {
        for (r = s, a = !1; c();)
            if (n = e.charAt(s), n === ",") {
                for (i = s, s += 1, c(), o = s; s < e.length && u();) s += 1;
                s < e.length && e.charAt(s) === "=" ? (a = !0, s = o, t.push(e.slice(r, i)), r = s) : s = i + 1
            } else s += 1;
        (!a || s >= e.length) && t.push(e.slice(r))
    }
    return t
}

function Ac(e) {
    return e instanceof Headers ? e : Array.isArray(e) ? new Headers(e) : typeof e == "object" ? new Headers(e) : null
}

function Kl(...e) {
    return e.reduce((t, s) => {
        const r = Ac(s);
        if (!r) return t;
        for (const [n, i] of r.entries()) n === "set-cookie" ? yn(i).forEach(o => t.append("set-cookie", o)) : t.set(n, i);
        return t
    }, new Headers)
}
var Dc = {
        tag: "$TSR/Error",
        test(e) {
            return e instanceof Error
        },
        parse: {
            sync(e, t) {
                return {
                    message: t.parse(e.message)
                }
            },
            async async (e, t) {
                return {
                    message: await t.parse(e.message)
                }
            },
            stream(e, t) {
                return {
                    message: t.parse(e.message)
                }
            }
        },
        serialize(e, t) {
            return "new Error(" + t.serialize(e.message) + ")"
        },
        deserialize(e, t) {
            return new Error(t.deserialize(e.message))
        }
    },
    Nc = class {
        constructor(e, t) {
            this.stream = e, this.hint = t ? .hint ? ? "binary"
        }
    };

function bn(e) {
    const t = [];
    for (let s = 0; s < e.length; s += 32768) t.push(String.fromCharCode.apply(null, e.subarray(s, s + 32768)));
    return btoa(t.join(""))
}

function Sn(e) {
    const t = atob(e),
        s = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++) s[r] = t.charCodeAt(r);
    return s
}
var jc = new TextDecoder("utf-8", {
    fatal: !0,
    ignoreBOM: !0
});

function Bc(e) {
    try {
        return "t" + jc.decode(e)
    } catch {
        return "b" + bn(e)
    }
}
var Uc = new TextEncoder;

function zc(e) {
    const t = e.slice(1);
    return e[0] === "t" ? Uc.encode(t) : Sn(t)
}

function Hc(e, t, s) {
    s ? .throwIfAborted();
    const r = Je(),
        n = e.getReader();
    let i = !0;
    const o = () => {
            i = !1, s ? .removeEventListener("abort", c), n.releaseLock()
        },
        a = u => i ? (n.cancel(u).catch(() => {}), o(), !0) : !1,
        c = () => {
            a(s.reason) && r.throw(s.reason)
        };
    return s ? .addEventListener("abort", c), (async () => {
        try {
            for (; i;) {
                const {
                    done: u,
                    value: l
                } = await n.read();
                if (!i) return;
                if (u) {
                    o(), r.return(void 0);
                    return
                }
                r.next(t(l))
            }
        } catch (u) {
            a(u) && r.throw(u)
        }
    })(), [r, a]
}

function Qc(e, t) {
    let s, r = !1;
    return new ReadableStream({
        start(n) {
            const i = e.on({
                next(o) {
                    if (!r) try {
                        n.enqueue(t(o))
                    } catch (a) {
                        r = !0;
                        const c = s;
                        s = void 0, c ? .(), n.error(a)
                    }
                },
                throw (o) {
                    r || (r = !0, s = void 0, n.error(o))
                },
                return () {
                    r || (r = !0, s = void 0, n.close())
                }
            });
            r ? i() : s = i
        },
        cancel() {
            const n = s;
            s = void 0, n ? .()
        }
    })
}

function wn(e) {
    return {
        tag: "tss/RawStream",
        test: t => t instanceof Nc,
        parse: {
            async: async (t, s) => {
                const r = await s.parse(t.hint === "text"),
                    [n] = Hc(t.stream, t.hint === "text" ? Bc : bn, e);
                return {
                    text: r,
                    stream: await s.parse(n)
                }
            }
        },
        serialize: void 0,
        deserialize: void 0
    }
}
var Kc = wn(),
    qc = {
        tag: "tss/RawStream",
        test: () => !1,
        parse: {},
        serialize: void 0,
        deserialize(e, t) {
            return Qc(t.deserialize(e.stream), t.deserialize(e.text) ? zc : Sn)
        }
    },
    le = {},
    _n = e => new ReadableStream({
        start(t) {
            e.on({
                next(s) {
                    try {
                        t.enqueue(s)
                    } catch {}
                },
                throw (s) {
                    t.error(s)
                },
                return () {
                    try {
                        t.close()
                    } catch {}
                }
            })
        }
    }),
    $c = {
        tag: "seroval-plugins/web/ReadableStreamFactory",
        test(e) {
            return e === le
        },
        parse: {
            sync() {
                return le
            },
            async async () {
                return await Promise.resolve(le)
            },
            stream() {
                return le
            }
        },
        serialize() {
            return _n.toString()
        },
        deserialize() {
            return le
        }
    };
async function Rn(e, t) {
    try {
        const s = await t.read();
        s.done ? (e.return(s.value), t.releaseLock()) : (e.next(s.value), await Rn(e, t))
    } catch (s) {
        e.throw(s)
    }
}

function Vc(e) {
    e.cancel().catch(() => {}), e.releaseLock()
}

function er(e) {
    const t = Je(),
        s = e.getReader(),
        r = Vc.bind(null, s);
    return Rn(t, s).catch(r), [t, r]
}
var Wc = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [$c],
    test(e) {
        return typeof ReadableStream > "u" ? !1 : e instanceof ReadableStream
    },
    parse: {
        sync(e, t) {
            return {
                factory: t.parse(le),
                stream: t.parse(Je())
            }
        },
        async async (e, t) {
            return {
                factory: await t.parse(le),
                stream: await t.parse(er(e)[0])
            }
        },
        stream(e, t) {
            const [s, r] = er(e);
            return t.addCleanup(r), {
                factory: t.parse(le),
                stream: t.parse(s)
            }
        }
    },
    serialize(e, t) {
        return "(" + t.serialize(e.factory) + ")(" + t.serialize(e.stream) + ")"
    },
    deserialize(e, t) {
        const s = t.deserialize(e.stream);
        return _n(s)
    }
};

function Gc(e) {
    return [Dc, e ? wn(e) : Kc, Wc]
}
var Yc = Gc(),
    ql = [qc, ...Yc];

function $l(e) {
    return {
        tag: "tss/RawStream",
        test: () => !1,
        parse: {},
        serialize: void 0,
        deserialize(t, s) {
            return e(s.deserialize(t.streamId))
        }
    }
}
var Z = Symbol.for("TSR_DEFERRED_PROMISE");

function Jc(e, t) {
    const s = e;
    return s[Z] || (s[Z] = {
        status: "pending"
    }, s.then(r => {
        s[Z].status = "success", s[Z].data = r
    }).catch(r => {
        s[Z].status = "error", s[Z].error = {
            data: (t ? .serializeError ? ? Yi)(r),
            __isServerError: !0
        }
    })), s
}
var Xc = "Error preloading route! ☝️";

function En(e, t) {
    if (e) return typeof e == "string" ? e : e[t]
}

function Zc(e) {
    return e ? .scriptFormat ? ? "module"
}

function eu(e, t, s) {
    const r = tu(t),
        n = En(s, "script") ? ? r.crossOrigin;
    return { ...Zc(e) === "iife" ? {
            rel: "preload",
            as: "script"
        } : {
            rel: "modulepreload"
        },
        href: r.href,
        ...n ? {
            crossOrigin: n
        } : {}
    }
}

function tu(e) {
    return typeof e == "string" ? {
        href: e,
        crossOrigin: void 0
    } : e
}

function ot(e, t) {
    if (t.length === 0) return;
    if (t.length === 1) {
        e.push(t[0]);
        return
    }
    const s = new Set;
    for (const r of t) {
        const n = JSON.stringify(r);
        s.has(n) || (s.add(n), e.push(r))
    }
}

function su(e) {
    return typeof e == "string" ? {
        href: e,
        crossOrigin: void 0
    } : e
}

function ru(e, t, s, r) {
    const n = Ar(e),
        i = [],
        o = [];
    for (const a of n)
        for (const c of Array.isArray(a.scripts) ? a.scripts : []) {
            if (!c) continue;
            const {
                children: u,
                ...l
            } = c;
            i.push({
                tag: "script",
                attrs: { ...l,
                    ...r,
                    nonce: s
                },
                children: u
            })
        }
    if (t)
        for (const a of n)
            for (const c of t.routes[a.routeId] ? .scripts ? ? []) o.push({
                tag: "script",
                attrs: { ...c.attrs,
                    nonce: s
                },
                children: c.children
            });
    return [i, o]
}

function nu([e, t], s) {
    return s ? [...s.before, ...e, ...t, s.boundary] : [...e, ...t]
}
var Pn = class {
        get to() {
            return this._to
        }
        get id() {
            return this._id
        }
        get path() {
            return this._path
        }
        get fullPath() {
            return this._fullPath
        }
        constructor(e) {
            if (this.init = t => {
                    this.originalIndex = t, this._branch = void 0;
                    const s = this.options,
                        r = !s ? .path && !s ? .id;
                    this.parentRoute = this.options.getParentRoute ? .(), r ? this._path = He : this.parentRoute || ns();
                    let n = r ? He : s ? .path;
                    n && n !== "/" && (n = Er(n));
                    const i = s ? .id || n,
                        o = r ? He : Me((this.parentRoute.id === "__root__" ? "" : this.parentRoute.id) + "/" + (i ? ? ""));
                    n === "__root__" && (n = "/");
                    const a = o === "__root__" ? "/" : n === void 0 ? this.parentRoute.fullPath : Me(this.parentRoute.fullPath + "/" + n);
                    this._path = n, this._id = o, this._fullPath = a, this._to = ee(a)
                }, this.addChildren = t => this._addFileChildren(t), this._addFileChildren = t => (Array.isArray(t) && (this.children = t), typeof t == "object" && t !== null && (this.children = Object.values(t)), this), this._addFileTypes = () => this, this.updateLoader = t => (Object.assign(this.options, t), this), this.update = t => (Object.assign(this.options, t), this), this.lazy = t => (this.lazyFn = t, this), this.redirect = t => yr({
                    from: this.fullPath,
                    ...t
                }), this.options = e || {}, this.isRoot = !e ? .getParentRoute, e ? .id && e ? .path) throw new Error("Route cannot have both an 'id' and a 'path' option.")
        }
    },
    iu = class extends Pn {
        constructor(e) {
            super(e)
        }
    };

function Vl(e) {
    return e
}
var R = mr(oi(), 1),
    Fe = R.use,
    ys = R.useLayoutEffect,
    T = ai();

function ou({
    promise: e
}) {
    if (Fe) return Fe(e);
    const t = Jc(e);
    if (t[Z].status === "pending") throw t;
    if (t[Z].status === "error") throw t[Z].error;
    return t[Z].data
}

function Wl(e) {
    const t = (0, T.jsx)(au, { ...e
    });
    return e.fallback ? (0, T.jsx)(R.Suspense, {
        fallback: e.fallback,
        children: t
    }) : t
}

function au(e) {
    const t = ou(e);
    return e.children(t)
}
var bs = class extends R.Component {
    constructor(...e) {
        super(...e), this.state = {
            error: 0
        }, this.reset = () => {
            this.setState({
                error: 0
            })
        }
    }
    static getDerivedStateFromProps(e, t) {
        const s = e.getResetKey();
        return t.error && t.resetKey !== s ? {
            resetKey: s,
            error: 0
        } : {
            resetKey: s
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: [e]
        }
    }
    componentDidCatch(e, t) {
        this.props.onCatch ? .(e, t)
    }
    render() {
        const e = this.state.error;
        return e ? R.createElement(this.props.errorComponent ? ? cu, {
            error: e[0],
            reset: this.reset
        }) : this.props.children
    }
};

function cu({
    error: e
}) {
    const [t, s] = R.useState(!1);
    return (0, T.jsxs)("div", {
        style: {
            padding: ".5rem",
            maxWidth: "100%"
        },
        children: [(0, T.jsxs)("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: ".5rem"
            },
            children: [(0, T.jsx)("strong", {
                style: {
                    fontSize: "1rem"
                },
                children: "Something went wrong!"
            }), (0, T.jsx)("button", {
                style: {
                    appearance: "none",
                    fontSize: ".6em",
                    border: "1px solid currentColor",
                    padding: ".1rem .2rem",
                    fontWeight: "bold",
                    borderRadius: ".25rem"
                },
                onClick: () => s(r => !r),
                children: t ? "Hide Error" : "Show Error"
            })]
        }), (0, T.jsx)("div", {
            style: {
                height: ".25rem"
            }
        }), t ? (0, T.jsx)("div", {
            children: (0, T.jsx)("pre", {
                style: {
                    fontSize: ".7em",
                    border: "1px solid red",
                    borderRadius: ".25rem",
                    padding: ".3rem",
                    color: "red",
                    overflow: "auto"
                },
                children: e ? .message ? (0, T.jsx)("code", {
                    children: e.message
                }) : null
            })
        }) : null]
    })
}
var uu = () => !0,
    lu = () => !1;

function fu({
    children: e,
    fallback: t = null
}) {
    return (0, T.jsx)(R.Fragment, {
        children: Ss() ? e : t
    })
}

function Ss() {
    return R.useSyncExternalStore(hu, uu, lu)
}

function hu() {
    return () => {}
}
var Cn = R.createContext(null);

function U(e) {
    const t = R.useContext(Cn);
    return t || void 0, t
}
var Xe = R.createContext(void 0),
    du = R.createContext(void 0);

function pu({
    update: e,
    notify: t,
    unwatched: s
}) {
    return {
        link: r,
        unlink: n,
        propagate: i,
        checkDirty: o,
        shallowPropagate: a
    };

    function r(u, l, f) {
        const h = l.depsTail;
        if (h !== void 0 && h.dep === u) return;
        const d = h !== void 0 ? h.nextDep : l.deps;
        if (d !== void 0 && d.dep === u) {
            d.version = f, l.depsTail = d;
            return
        }
        const v = u.subsTail;
        if (v !== void 0 && v.version === f && v.sub === l) return;
        const p = l.depsTail = u.subsTail = {
            version: f,
            dep: u,
            sub: l,
            prevDep: h,
            nextDep: d,
            prevSub: v,
            nextSub: void 0
        };
        d !== void 0 && (d.prevDep = p), h !== void 0 ? h.nextDep = p : l.deps = p, v !== void 0 ? v.nextSub = p : u.subs = p
    }

    function n(u, l = u.sub) {
        const f = u.dep,
            h = u.prevDep,
            d = u.nextDep,
            v = u.nextSub,
            p = u.prevSub;
        return d !== void 0 ? d.prevDep = h : l.depsTail = h, h !== void 0 ? h.nextDep = d : l.deps = d, v !== void 0 ? v.prevSub = p : f.subsTail = p, p !== void 0 ? p.nextSub = v : (f.subs = v) === void 0 && s(f), d
    }

    function i(u) {
        let l = u.nextSub,
            f;
        e: do {
            const h = u.sub;
            let d = h.flags;
            if (d & 60 ? d & 12 ? d & 4 ? !(d & 48) && c(u, h) ? (h.flags = d | 40, d &= 1) : d = 0 : h.flags = d & -9 | 32 : d = 0 : h.flags = d | 32, d & 2 && t(h), d & 1) {
                const v = h.subs;
                if (v !== void 0) {
                    const p = (u = v).nextSub;
                    p !== void 0 && (f = {
                        value: l,
                        prev: f
                    }, l = p);
                    continue
                }
            }
            if ((u = l) !== void 0) {
                l = u.nextSub;
                continue
            }
            for (; f !== void 0;)
                if (u = f.value, f = f.prev, u !== void 0) {
                    l = u.nextSub;
                    continue e
                }
            break
        } while (!0)
    }

    function o(u, l) {
        let f, h = 0,
            d = !1;
        e: do {
            const v = u.dep,
                p = v.flags;
            if (l.flags & 16) d = !0;
            else if ((p & 17) === 17) {
                if (e(v)) {
                    const g = v.subs;
                    g.nextSub !== void 0 && a(g), d = !0
                }
            } else if ((p & 33) === 33) {
                (u.nextSub !== void 0 || u.prevSub !== void 0) && (f = {
                    value: u,
                    prev: f
                }), u = v.deps, l = v, ++h;
                continue
            }
            if (!d) {
                const g = u.nextDep;
                if (g !== void 0) {
                    u = g;
                    continue
                }
            }
            for (; h--;) {
                const g = l.subs,
                    m = g.nextSub !== void 0;
                if (m ? (u = f.value, f = f.prev) : u = g, d) {
                    if (e(l)) {
                        m && a(g), l = u.sub;
                        continue
                    }
                    d = !1
                } else l.flags &= -33;
                l = u.sub;
                const y = u.nextDep;
                if (y !== void 0) {
                    u = y;
                    continue e
                }
            }
            return d
        } while (!0)
    }

    function a(u) {
        do {
            const l = u.sub,
                f = l.flags;
            (f & 48) === 32 && (l.flags = f | 16, (f & 6) === 2 && t(l))
        } while ((u = u.nextSub) !== void 0)
    }

    function c(u, l) {
        let f = l.depsTail;
        for (; f !== void 0;) {
            if (f === u) return !0;
            f = f.prevDep
        }
        return !1
    }
}

function vu(e, t, s) {
    const r = typeof e == "object",
        n = r ? e : void 0;
    return {
        next: (r ? e.next : e) ? .bind(n),
        error: (r ? e.error : t) ? .bind(n),
        complete: (r ? e.complete : s) ? .bind(n)
    }
}
var Gt = [],
    vt = 0,
    {
        link: tr,
        unlink: gu,
        propagate: mu,
        checkDirty: On,
        shallowPropagate: sr
    } = pu({
        update(e) {
            return e._update()
        },
        notify(e) {
            Gt[Yt++] = e, e.flags &= -3
        },
        unwatched(e) {
            e.depsTail !== void 0 && (e.depsTail = void 0, e.flags = 17, St(e))
        }
    }),
    at = 0,
    Yt = 0,
    X, Jt = 0;

function yu(e) {
    try {
        ++Jt, e()
    } finally {
        --Jt || Tn()
    }
}

function St(e) {
    const t = e.depsTail;
    let s = t !== void 0 ? t.nextDep : e.deps;
    for (; s !== void 0;) s = gu(s, e)
}

function Tn() {
    if (!(Jt > 0)) {
        for (; at < Yt;) {
            const e = Gt[at];
            Gt[at++] = void 0, e.notify()
        }
        at = 0, Yt = 0
    }
}

function rr(e, t) {
    const s = typeof e == "function",
        r = e,
        n = {
            _snapshot: s ? void 0 : e,
            subs: void 0,
            subsTail: void 0,
            deps: void 0,
            depsTail: void 0,
            flags: s ? 0 : 1,
            get() {
                return X !== void 0 && tr(n, X, vt), n._snapshot
            },
            subscribe(i) {
                const o = vu(i),
                    a = {
                        current: !1
                    },
                    c = bu(() => {
                        n.get(), a.current ? o.next ? .(n._snapshot) : a.current = !0
                    });
                return {
                    unsubscribe: () => {
                        c.stop()
                    }
                }
            },
            _update(i) {
                const o = X,
                    a = t ? .compare ? ? Object.is;
                if (s) X = n, ++vt, n.depsTail = void 0;
                else if (i === void 0) return !1;
                s && (n.flags = 5);
                try {
                    const c = n._snapshot,
                        u = typeof i == "function" ? i(c) : i === void 0 && s ? r(c) : i;
                    return c === void 0 || !a(c, u) ? (n._snapshot = u, !0) : !1
                } finally {
                    X = o, s && (n.flags &= -5), St(n)
                }
            }
        };
    return s ? (n.flags = 17, n.get = function() {
        const i = n.flags;
        if (i & 16 || i & 32 && On(n.deps, n)) {
            if (n._update()) {
                const o = n.subs;
                o !== void 0 && sr(o)
            }
        } else i & 32 && (n.flags = i & -33);
        return X !== void 0 && tr(n, X, vt), n._snapshot
    }) : n.set = function(i) {
        if (n._update(i)) {
            const o = n.subs;
            o !== void 0 && (mu(o), sr(o), Tn())
        }
    }, n
}

function bu(e) {
    const t = () => {
            const r = X;
            X = s, ++vt, s.depsTail = void 0, s.flags = 6;
            try {
                return e()
            } finally {
                X = r, s.flags &= -5, St(s)
            }
        },
        s = {
            deps: void 0,
            depsTail: void 0,
            subs: void 0,
            subsTail: void 0,
            flags: 6,
            notify() {
                const r = this.flags;
                r & 16 || r & 32 && On(this.deps, this) ? t() : this.flags = 2
            },
            stop() {
                this.flags = 0, this.depsTail = void 0, St(this)
            }
        };
    return t(), s
}
var Su = mr(ci(), 1);

function wu(e, t) {
    return e === t
}

function K(e, t = r => r, s) {
    const r = s ? .compare ? ? wu,
        n = (0, R.useCallback)(o => {
            const {
                unsubscribe: a
            } = e.subscribe(o);
            return a
        }, [e]),
        i = (0, R.useCallback)(() => e.get(), [e]);
    return (0, Su.useSyncExternalStoreWithSelector)(n, i, i, t, r)
}
var nr = {};

function xt(e, t) {
    const s = R.useRef();
    return r => {
        const n = e ? .select ? e.select(r) : r;
        return e ? .structuralSharing ? ? t.options.defaultStructuralSharing ? s.current = he(s.current, n) : n
    }
}

function Ce(e) {
    const t = U(),
        s = R.useContext(e.from ? du : Xe),
        r = e.from ? ? s,
        n = t.stores.getMatchStore(r),
        i = xt(e, t),
        o = K(n, a => a ? i(a) : nr);
    if (o !== nr) return o;
    (e.shouldThrow ? ? !0) && ns()
}

function In(e) {
    return Ce({
        from: e.from,
        strict: e.strict,
        structuralSharing: e.structuralSharing,
        select: t => e.select ? e.select(t.loaderData) : t.loaderData
    })
}

function xn(e) {
    const {
        select: t,
        ...s
    } = e;
    return Ce({ ...s,
        select: r => t ? t(r.loaderDeps) : r.loaderDeps
    })
}

function Ln(e) {
    return Ce({
        from: e.from,
        shouldThrow: e.shouldThrow,
        structuralSharing: e.structuralSharing,
        strict: e.strict,
        select: t => {
            const s = e.strict === !1 ? t.params : t._strictParams;
            return e.select ? e.select(s) : s
        }
    })
}

function kn(e) {
    return Ce({
        from: e.from,
        strict: e.strict,
        shouldThrow: e.shouldThrow,
        structuralSharing: e.structuralSharing,
        select: t => e.select ? e.select(t.search) : t.search
    })
}

function ws(e) {
    const t = U();
    return R.useCallback(s => t.navigate({ ...s,
        from: s.from ? ? e ? .from
    }), [e ? .from, t])
}

function Gl(e) {
    const t = U(),
        s = ws(),
        r = R.useRef(null);
    return ys(() => {
        r.current !== e && (s(e), r.current = e)
    }, [t, e, s]), null
}

function Fn(e) {
    return Ce({ ...e,
        select: t => e.select ? e.select(t.context) : t.context
    })
}

function _u(...e) {
    const t = R.useRef(e),
        s = t.current;
    return e.forEach((r, n) => {
        G(s[n], r, !1, !0) || (s[n] = r)
    }), t.current
}

function ct(e, t) {
    e.preloadRoute(t).catch(s => {
        console.warn(s), console.warn(Xc)
    })
}
var Ru = {
    compare: (e, t) => e[0] === t[0] && e[1] === t[1]
};

function Eu(e, t) {
    const s = typeof e == "string" && $e(e);
    if (s) return t.has(s) ? e : null
}

function Pu(e, t, s, r, n) {
    const i = Fs(e.pathname, r),
        o = Fs(t.pathname, r);
    return (s ? .exact ? i !== o : !(i.startsWith(o) && (i.length === o.length || i[o.length] === "/"))) || (s ? .includeSearch ? ? !0) && !G(e.search, t.search, !s ? .exact, s ? .explicitUndefined) ? !1 : s ? .includeHash ? n && e.hash === t.hash : !0
}

function Cu(e, t, s) {
    const r = U(),
        n = R.useRef(null),
        i = R.useCallback(B => {
            if (n.current = B, typeof t == "function") return t(B);
            t && (t.current = B)
        }, [t]),
        {
            activeOptions: o,
            to: a,
            preload: c,
            preloadDelay: u,
            hashScrollIntoView: l,
            replace: f,
            startTransition: h,
            resetScroll: d,
            viewTransition: v,
            ignoreBlocker: p,
            disabled: g,
            target: m,
            onClick: y,
            onBlur: S,
            onFocus: P,
            onMouseEnter: I,
            onMouseLeave: E,
            onTouchStart: b
        } = e,
        C = Ss(),
        [L, k, w] = _u(e.search, e.params, o),
        [_, O] = R.useMemo(() => [e, { ...e
        }], [r, e.from, e._fromLocation, e.hash, e.to, L, k, e.state, e.mask, e.unsafeRelative]),
        F = R.useCallback(B => {
            const J = Eu(a, r.protocolAllowlist);
            if (J !== void 0) return [J ? ? void 0];
            _._fromLocation || (O._fromLocation = B);
            const Ls = r.buildLocation(O),
                At = Lu(Ls, r, g);
            return [At, !g && (!At || $e(At)) ? void 0 : Pu(B, Ls, w, r.basepath, C)]
        }, [w, g, C, _, O, r, a]),
        [x, A] = K(r.stores.location, F, Ru),
        be = A === void 0 ? x : void 0,
        Ft = g || x === void 0,
        Is = R.useRef(!1),
        Se = e.reloadDocument || be || Ft ? !1 : c ? ? r.options.defaultPreload,
        Mt = u ? ? r.options.defaultPreloadDelay ? ? 0,
        et = R.useCallback(B => {
            const J = B ? .isIntersecting;
            if (!(J ? ? Se === "intent")) {
                J === !1 && Ht(n);
                return
            }
            if (!Mt) {
                ct(r, _);
                return
            }
            Ke.has(n) || Ke.set(n, setTimeout(() => {
                Ke.delete(n), ct(r, _)
            }, Mt))
        }, [r, _, n, Se, Mt]);
    R.useEffect(() => {
        Se === "render" && !Is.current && (Is.current = !0, ct(r, _));
        let B;
        return Se === "viewport" && n.current && typeof IntersectionObserver == "function" && (B = new IntersectionObserver(J => et(J.pop()), {
            rootMargin: "100px"
        }), B.observe(n.current)), () => {
            B ? .disconnect(), Ht(n)
        }
    }, [r, _, Se, et, n]);
    const Y = Iu(e, s);
    if (Y.ref = t ? i : n, be) return Y.href = be, Y;
    const ni = B => {
            const J = m ? ? B.currentTarget.getAttribute("target");
            !Ft && !(B.metaKey || B.altKey || B.ctrlKey || B.shiftKey) && !B.defaultPrevented && (!J || J === "_self") && B.button === 0 && (B.preventDefault(), r.navigate({ ..._,
                replace: f,
                resetScroll: d,
                hashScrollIntoView: l,
                startTransition: h,
                viewTransition: v,
                ignoreBlocker: p
            }))
        },
        ii = () => {
            Se === "intent" && ct(r, _)
        },
        xs = () => {
            Se === "intent" && Ht(n)
        };
    return Y.onClick = Ie(y, ni), Y.onBlur = Ie(S, xs), Y.onFocus = Ie(P, et), Y.onMouseEnter = Ie(I, et), Y.onMouseLeave = Ie(E, xs), Y.onTouchStart = Ie(b, ii), xu(Y, e, A, x, Ft, s)
}
var Ou = {},
    Tu = {
        className: "active"
    },
    Mn = new Set(["to", "params", "search", "hash", "state", "mask", "from", "unsafeRelative", "_fromLocation", "reloadDocument", "preload", "preloadDelay", "preloadIntentProximity", "hashScrollIntoView", "replace", "startTransition", "resetScroll", "viewTransition", "ignoreBlocker", "activeProps", "inactiveProps", "activeOptions", "_asChild"]);

function Iu(e, t) {
    const s = {};
    for (const r in e) Mn.has(r) || r === "type" && t !== void 0 || r === "disabled" && t === "a" || (s[r] = e[r]);
    return s
}

function xu(e, t, s, r, n, i) {
    const {
        activeProps: o,
        inactiveProps: a,
        className: c,
        style: u,
        target: l
    } = t, f = Sr(s ? o : a, {}) ? ? (s ? Tu : Ou);
    Object.assign(e, f), e.href = r, i !== "a" && (e.disabled = n), e.target = l;
    const h = f.style;
    (u || h) && (e.style = u && h ? { ...u,
        ...h
    } : u || h);
    const d = f.className;
    return (c || d) && (e.className = c ? d ? `${c} ${d}` : c : d), n && (e.role = "link", e["aria-disabled"] = !0), s && (e["data-status"] = "active", e["aria-current"] = "page"), e
}
var Ke = new WeakMap,
    Ht = e => {
        clearTimeout(Ke.get(e)), Ke.delete(e)
    },
    Ie = (e, t) => e ? s => s.defaultPrevented || (e(s), s.defaultPrevented || t(s)) : t;

function Lu(e, t, s) {
    if (s) return;
    const r = e.maskedLocation ? ? e,
        n = r.external ? r.publicHref : t.history.createHref(r.publicHref) || "/";
    if (!((r.external || n !== r.publicHref) && Rr(n, t.protocolAllowlist))) return n
}
var An = R.memo(R.forwardRef((e, t) => {
    const s = e._asChild || "a",
        r = Cu(e, t, s),
        n = typeof e.children == "function" ? e.children({
            isActive: r["data-status"] === "active"
        }) : e.children;
    return R.createElement(s, r, n)
}), ku);

function ku(e, t) {
    let s = 0;
    for (const r in t)
        if (s++, e[r] !== t[r] && (!Mn.has(r) || !G(e[r], t[r], !1, !0))) return !1;
    for (const r in e) s--;
    return s === 0
}
var Fu = class extends Pn {
    constructor(e) {
        super(e), this.useMatch = t => Ce({ ...t,
            from: this.id
        }), this.useRouteContext = t => Fn({ ...t,
            from: this.id
        }), this.useSearch = t => kn({ ...t,
            from: this.id
        }), this.useParams = t => Ln({ ...t,
            from: this.id
        }), this.useLoaderDeps = t => xn({ ...t,
            from: this.id
        }), this.useLoaderData = t => In({ ...t,
            from: this.id
        }), this.useNavigate = () => ws({
            from: this.fullPath
        }), this.Link = R.forwardRef((t, s) => (0, T.jsx)(An, {
            ref: s,
            from: this.fullPath,
            ...t
        }))
    }
};

function Mu(e) {
    return new Fu(e)
}

function Yl() {
    return e => Du(e)
}
var Au = class extends iu {
    constructor(e) {
        super(e), this.useMatch = t => Ce({ ...t,
            from: this.id
        }), this.useRouteContext = t => Fn({ ...t,
            from: this.id
        }), this.useSearch = t => kn({ ...t,
            from: this.id
        }), this.useParams = t => Ln({ ...t,
            from: this.id
        }), this.useLoaderDeps = t => xn({ ...t,
            from: this.id
        }), this.useLoaderData = t => In({ ...t,
            from: this.id
        }), this.useNavigate = () => ws({
            from: this.fullPath
        }), this.Link = R.forwardRef((t, s) => (0, T.jsx)(An, {
            ref: s,
            from: this.fullPath,
            ...t
        }))
    }
};

function Du(e) {
    return new Au(e)
}

function Jl(e) {
    return t => {
        const s = Mu(t);
        return s.isRoot = !1, s
    }
}

function Xl(e, t) {
    let s, r, n;
    const i = () => (s || (n = void 0, s = e().then(a => {
            o.preload = void 0, r = a[t ? ? "default"]
        }).catch(a => {
            s = void 0, n = a
        })), s),
        o = function(c) {
            if (n) {
                if (li(n) && typeof sessionStorage < "u") {
                    const u = `tanstack_router_reload:${n.message}`;
                    if (!sessionStorage.getItem(u)) throw sessionStorage.setItem(u, "1"), window.location.reload(), new Promise(() => {})
                }
                throw n
            }
            if (r) Fe && s ? .status === "fulfilled" && Fe(s);
            else if (Fe) Fe(i());
            else throw i();
            return R.createElement(r, c)
        };
    return o.preload = i, o
}

function Nu(e) {
    const t = U(),
        s = `not-found-${K(t.stores.location,r=>r.pathname)}-${K(t.stores.status)}`;
    return (0, T.jsx)(bs, {
        getResetKey: () => s,
        onCatch: (r, n) => {
            if (Ne(r)) e.onCatch ? .(r, n);
            else throw r
        },
        errorComponent: ({
            error: r
        }) => {
            if (Ne(r)) return e.fallback ? .(r);
            throw r
        },
        children: e.children
    })
}

function ju() {
    return (0, T.jsx)("p", {
        children: "Not Found"
    })
}

function Zl({
    children: e
}) {
    const t = U();
    return null
}

function Le(e) {
    return (0, T.jsx)(T.Fragment, {
        children: e.children
    })
}

function Dn(e, t, s) {
    return t.options.notFoundComponent ? (0, T.jsx)(t.options.notFoundComponent, { ...s
    }) : e.options.defaultNotFoundComponent ? (0, T.jsx)(e.options.defaultNotFoundComponent, { ...s
    }) : (0, T.jsx)(ju, {})
}

function Lt(e, t) {
    const s = t ? .options.pendingComponent ? ? e.options.defaultPendingComponent;
    return s ? (0, T.jsx)(s, {}) : null
}
var Bu = (e, t) => e[0] === t[0] && e[1] === t[1],
    Nn = (e, t, s) => !t.isRoot || t.options.shellComponent || t.options.wrapInSuspense || s === !1 || s === "data-only" || !e.ssr,
    jn = R.memo(function({
        routeId: t
    }) {
        const s = U();
        return (0, T.jsx)(Uu, {
            router: s,
            match: K(s.stores.getMatchStore(t))
        })
    });

function Uu({
    router: e,
    match: t
}) {
    const s = e.routesById[t.routeId],
        r = Lt(e, s),
        n = s.options.errorComponent ? ? e.options.defaultErrorComponent,
        i = s.options.onCatch ? ? e.options.defaultOnCatch,
        o = s.isRoot ? s.options.notFoundComponent ? ? e.options.notFoundRoute ? .options.component : s.options.notFoundComponent,
        a = t.ssr === !1 || t.ssr === "data-only",
        c = Nn(e, s, t.ssr) && (s.options.wrapInSuspense ? ? r ? ? (s.options.errorComponent ? .preload || a)) ? R.Suspense : Le,
        u = n ? bs : Le,
        l = o ? Nu : Le;
    return (0, T.jsxs)(s.isRoot ? s.options.shellComponent ? ? Le : Le, {
        children: [(0, T.jsx)(Xe.Provider, {
            value: t.routeId,
            children: (0, T.jsx)(c, {
                fallback: r,
                children: (0, T.jsx)(u, {
                    getResetKey: () => t,
                    errorComponent: n,
                    onCatch: (f, h) => {
                        if (Ne(f)) throw f.routeId ? ? = t.routeId, f;
                        i ? .(f, h)
                    },
                    children: (0, T.jsx)(l, {
                        fallback: f => {
                            if (f.routeId ? ? = t.routeId, f.routeId !== t.routeId) throw f;
                            return R.createElement(o, f)
                        },
                        children: a ? (0, T.jsx)(fu, {
                            fallback: r,
                            children: (0, T.jsx)(ir, {
                                match: t
                            })
                        }) : (0, T.jsx)(ir, {
                            match: t
                        })
                    })
                })
            })
        }), null]
    })
}
var ir = R.memo(function({
        match: t
    }) {
        const s = U(),
            r = t.routeId,
            n = s.routesById[r],
            i = R.useMemo(() => {
                const a = (n.options.remountDeps ? ? s.options.defaultRemountDeps) ? .({
                    routeId: r,
                    loaderDeps: t.loaderDeps,
                    params: t._strictParams,
                    search: t._strictSearch
                });
                return a ? JSON.stringify(a) : void 0
            }, [r, t.loaderDeps, t._strictParams, t._strictSearch, n.options.remountDeps, s.options.defaultRemountDeps]),
            o = R.useMemo(() => {
                const a = n.options.component ? ? s.options.defaultComponent;
                return a ? (0, T.jsx)(a, {}, i) : (0, T.jsx)(zu, {})
            }, [i, n.options.component, s.options.defaultComponent]);
        if (t.status === "pending") {
            if (s.ssr && !Nn(s, n, t.ssr)) return o;
            if (s._tx) throw s._tx[5];
            return Lt(s, n)
        }
        if (t.status === "notFound") return Dn(s, n, t.error);
        if (t.status === "error") throw t.error;
        return o
    }),
    zu = R.memo(function() {
        const t = U(),
            s = R.useContext(Xe);
        let r, n, i; {
            const a = t.stores.getMatchStore(s);
            [r, n] = K(a, c => [!!c._notFound, c.error], {
                compare: Bu
            }), i = K(t.stores.ids, c => c[c.indexOf(s) + 1])
        }
        if (r) return Dn(t, t.routesById[s], n);
        if (!i) return null;
        const o = (0, T.jsx)(jn, {
            routeId: i
        });
        return s === "__root__" ? (0, T.jsx)(R.Suspense, {
            fallback: Lt(t),
            children: o
        }) : o
    });

function Bn(e, t) {
    const s = e[1];
    e.length = 0, s ? .(t)
}

function Hu({
    t: e
}) {
    const t = U(),
        s = t._rendered ? ? = [];
    return t.startTransition = (r, n) => new Promise(i => {
        Bn(s, !1), s.push(n, i), e(t), R.startTransition(r)
    }), ys(() => {
        const r = t.history.subscribe(t.load);
        t.updateLatestLocation();
        const n = t.latestLocation,
            i = t.buildLocation({
                to: n.pathname,
                search: !0,
                params: !0,
                hash: !0,
                state: !0,
                _includeValidateSearch: !0
            });
        if (ee(n.publicHref) !== ee(i.publicHref)) return t.commitLocation({ ...i,
            replace: !0,
            ignoreBlocker: !0
        }), r;
        const o = t.stores.resolvedLocation.get();
        return o ? .href === n.href && o.state.__TSR_key === n.state.__TSR_key ? s.push(t.stores.matches.get(), a => {
            a && t.emit({
                type: "onRendered",
                ...Rt(o, o)
            })
        }) : t._tx || t.load({
            sync: !0
        }).catch(console.error), r
    }, [t, t.history]), null
}

function Qu() {
    const e = U(),
        t = e.routesById[He],
        s = Lt(e, t),
        r = e.ssr ? Le : R.Suspense,
        n = (0, T.jsxs)(T.Fragment, {
            children: [(0, T.jsx)(Hu, {
                t: R.useState()[1]
            }), (0, T.jsx)(r, {
                fallback: s,
                children: (0, T.jsx)(Ku, {})
            })]
        });
    return e.options.InnerWrap ? (0, T.jsx)(e.options.InnerWrap, {
        children: n
    }) : n
}

function Ku() {
    const e = U(),
        t = e._rendered,
        s = K(e.stores.matches, o => t[0] ? ? o),
        r = s[0],
        n = r ? .routeId;
    ys(() => {
        t[0] === s && Bn(t, !0)
    }, [t, s]);
    const i = n ? (0, T.jsx)(jn, {
        routeId: n
    }) : null;
    return (0, T.jsx)(Xe.Provider, {
        value: n,
        children: e.options.disableGlobalCatchBoundary ? i : (0, T.jsx)(bs, {
            getResetKey: () => r,
            onCatch: void 0,
            children: i
        })
    })
}

function ef() {
    const e = U();
    return R.useCallback(t => {
        const {
            pending: s,
            caseSensitive: r,
            fuzzy: n,
            includeSearch: i,
            ...o
        } = t;
        return e.matchRoute(o, {
            pending: s,
            caseSensitive: r,
            fuzzy: n,
            includeSearch: i
        })
    }, [e, K(e.stores.location, t => t.href), K(e.stores.resolvedLocation, t => t ? .href), K(e.stores.status)])
}

function qu(e) {
    const t = U();
    return K(t.stores.matches, xt(e, t))
}

function tf(e) {
    const t = R.useContext(Xe);
    return qu({
        select: s => (s = s.slice(s.findIndex(r => r.routeId === t) + 1), e ? .select ? e.select(s) : s),
        structuralSharing: e ? .structuralSharing
    })
}
var $u = e => ({
        createMutableStore: rr,
        createReadonlyStore: rr,
        batch: yu
    }),
    sf = e => new Vu(e),
    Vu = class extends Xi {
        constructor(e) {
            super(e, $u)
        }
    };

function Wu({
    router: e,
    children: t,
    ...s
}) {
    wr(s) && e.update({ ...e.options,
        ...s,
        context: { ...e.options.context,
            ...s.context
        }
    });
    const r = (0, T.jsx)(Cn.Provider, {
        value: e,
        children: t
    });
    return e.options.Wrap ? (0, T.jsx)(e.options.Wrap, {
        children: r
    }) : r
}

function rf({
    router: e,
    ...t
}) {
    return (0, T.jsx)(Wu, {
        router: e,
        ...t,
        children: (0, T.jsx)(Qu, {})
    })
}

function Gu(e, t) {
    if (e === void 0) return {
        shouldBlockFn: () => !0,
        withResolver: !1
    };
    if ("shouldBlockFn" in e) return e;
    if (typeof e == "function") {
        const i = !!(t ? ? !0);
        return {
            shouldBlockFn: async () => i ? await e() : !1,
            enableBeforeUnload: i,
            withResolver: !1
        }
    }
    const s = !!(e.condition ? ? !0),
        r = e.blockerFn;
    return {
        shouldBlockFn: async () => s && r !== void 0 ? await r() : s,
        enableBeforeUnload: s,
        withResolver: r === void 0
    }
}

function nf(e, t) {
    const {
        shouldBlockFn: s,
        enableBeforeUnload: r = !0,
        disabled: n = !1,
        withResolver: i = !1
    } = Gu(e, t), o = U(), {
        history: a
    } = o, [c, u] = R.useState({
        status: "idle",
        current: void 0,
        next: void 0,
        action: void 0,
        proceed: void 0,
        reset: void 0
    });
    return R.useEffect(() => {
        const l = async f => {
            function h(m) {
                const y = o.parseLocation(m),
                    [, S, P] = o.getMatchedRoutes(y.pathname);
                return P === void 0 ? {
                    routeId: "__notFound__",
                    fullPath: y.pathname,
                    pathname: y.pathname,
                    params: S,
                    search: o.options.parseSearch(m.search)
                } : {
                    routeId: P.id,
                    fullPath: P.fullPath,
                    pathname: y.pathname,
                    params: S,
                    search: o.options.parseSearch(m.search)
                }
            }
            const d = h(f.currentLocation),
                v = h(f.nextLocation);
            if (d.routeId === "__notFound__" && v.routeId !== "__notFound__") return !1;
            const p = await s({
                action: f.action,
                current: d,
                next: v
            });
            if (!i) return p;
            if (!p) return !1;
            const g = await new Promise(m => {
                u({
                    status: "blocked",
                    current: d,
                    next: v,
                    action: f.action,
                    proceed: () => m(!1),
                    reset: () => m(!0)
                })
            });
            return u({
                status: "idle",
                current: void 0,
                next: void 0,
                action: void 0,
                proceed: void 0,
                reset: void 0
            }), g
        };
        return n ? void 0 : a.block({
            blockerFn: l,
            enableBeforeUnload: r
        })
    }, [s, r, n, i, a, o]), c
}

function of (e) {
    const t = U({
            warn: e ? .router === void 0
        }),
        s = e ? .router || t;
    return K(s.stores.__store, xt(e, s))
}

function af(e) {
    const t = U();
    return K(t.stores.location, xt(e, t))
}

function cf() {
    const e = U();
    return K(e.stores.location, t => t.state.__TSR_index !== 0)
}

function or(e, t) {
    if (t)
        for (const [s, r] of Object.entries(t)) s !== "suppressHydrationWarning" && r !== void 0 && r !== !1 && e.setAttribute(s, typeof r == "boolean" ? "" : String(r))
}

function Yu(e) {
    const {
        attrs: t,
        children: s,
        nonce: r,
        preventScriptHoist: n
    } = e, i = R.useMemo(() => s === void 0 ? void 0 : {
        __html: s
    }, [s]);
    switch (e.tag) {
        case "title":
            return (0, T.jsx)("title", { ...t,
                suppressHydrationWarning: !0,
                children: s
            });
        case "meta":
            return (0, T.jsx)("meta", { ...t,
                suppressHydrationWarning: !0
            });
        case "link":
            return (0, T.jsx)("link", { ...t,
                precedence: t ? .precedence ? ? (t ? .rel === "stylesheet" ? "default" : void 0),
                nonce: r,
                suppressHydrationWarning: !0
            });
        case "style":
            return e.inlineCss, (0, T.jsx)("style", { ...t,
                dangerouslySetInnerHTML: i,
                nonce: r
            });
        case "script":
            return (0, T.jsx)(Ju, {
                attrs: t,
                preventScriptHoist: n,
                children: s
            });
        default:
            return null
    }
}

function Ju({
    attrs: e,
    children: t,
    preventScriptHoist: s
}) {
    const r = U(),
        n = Ss(),
        i = R.useMemo(() => t === void 0 ? void 0 : {
            __html: t
        }, [t]),
        o = typeof e ? .type == "string" && e.type !== "" && e.type !== "text/javascript" && e.type !== "module";
    if (R.useEffect(() => {
            if (!o) {
                if (e ? .src) {
                    const a = document.createElement("a");
                    a.href = e.src;
                    const c = a.href;
                    for (const l of document.scripts)
                        if (l.src === c) return;
                    const u = document.createElement("script");
                    return or(u, e), document.head.appendChild(u), () => u.remove()
                }
                if (typeof t == "string") {
                    const a = typeof e ? .type == "string" ? e.type : "text/javascript",
                        c = typeof e ? .nonce == "string" ? e.nonce : void 0;
                    for (const l of document.scripts) {
                        if (l.hasAttribute("src")) continue;
                        const f = l.getAttribute("type") ? ? "text/javascript",
                            h = l.getAttribute("nonce") ? ? void 0;
                        if (l.textContent === t && f === a && h === c) return
                    }
                    const u = document.createElement("script");
                    return u.textContent = t, or(u, e), document.head.appendChild(u), () => u.remove()
                }
            }
        }, [e, t, o]), o && typeof t == "string") return (0, T.jsx)("script", { ...e,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: i
    });
    if (!n) {
        if (e ? .src) return (0, T.jsx)("script", { ...e,
            suppressHydrationWarning: !0
        });
        if (typeof t == "string") return (0, T.jsx)("script", { ...e,
            dangerouslySetInnerHTML: i,
            suppressHydrationWarning: !0
        })
    }
    return null
}

function Xu(e, t, s, r) {
    s = Ar(s);
    const n = s.map(p => p.meta).filter(p => p !== void 0),
        i = [],
        o = {};
    let a;
    for (let p = n.length - 1; p >= 0; p--) {
        const g = n[p];
        for (let m = g.length - 1; m >= 0; m--) {
            const y = g[m];
            if (y)
                if (y.title) a || (a = {
                    tag: "title",
                    children: y.title
                });
                else if ("script:ld+json" in y) try {
                const S = JSON.stringify(y["script:ld+json"]);
                i.push({
                    tag: "script",
                    attrs: {
                        type: "application/ld+json"
                    },
                    children: gi(S)
                })
            } catch {} else {
                const S = y.name ? ? y.property;
                if (S) {
                    if (o[S]) continue;
                    o[S] = !0
                }
                i.push({
                    tag: "meta",
                    attrs: { ...y,
                        nonce: t
                    }
                })
            }
        }
    }
    a && i.push(a), t && i.push({
        tag: "meta",
        attrs: {
            property: "csp-nonce",
            content: t
        }
    }), i.reverse();
    const c = s.flatMap(p => p.links ? ? []).filter(p => p !== void 0).map(p => ({
            tag: "link",
            attrs: { ...p,
                nonce: t
            }
        })),
        u = e.ssr ? .manifest,
        l = [];
    u && (s.forEach(p => {
        u.routes[p.routeId] ? .css ? .forEach(g => {
            const m = su(g);
            l.push({
                tag: "link",
                attrs: {
                    rel: "stylesheet",
                    ...m,
                    crossOrigin: En(r, "stylesheet") ? ? m.crossOrigin,
                    suppressHydrationWarning: !0,
                    nonce: t
                }
            })
        })
    }), u.inlineStyle && l.push({
        tag: "style",
        attrs: { ...u.inlineStyle.attrs,
            nonce: t
        },
        children: u.inlineStyle.children,
        inlineCss: !0
    }));
    const f = [];
    u && s.forEach(p => {
        u.routes[p.routeId] ? .preloads ? .forEach(g => {
            f.push({
                tag: "link",
                attrs: { ...eu(u, g, r),
                    nonce: t
                }
            })
        })
    });
    const h = s.flatMap(p => p.styles ? ? []).filter(p => p !== void 0).map(({
            children: p,
            ...g
        }) => ({
            tag: "style",
            attrs: { ...g,
                nonce: t
            },
            children: p
        })),
        d = s.flatMap(p => p.headScripts ? ? []).filter(p => p !== void 0).map(({
            children: p,
            ...g
        }) => ({
            tag: "script",
            attrs: { ...g,
                nonce: t
            },
            children: p
        })),
        v = [];
    return ot(v, i), v.push(...f), ot(v, c), v.push(...l), ot(v, h), ot(v, d), v
}
var uf = e => {
        const t = U(),
            s = t.options.ssr ? .nonce,
            r = R.useCallback(n => Xu(t, s, n, e), [e, s, t]);
        return K(t.stores.matches, r, {
            compare: G
        })
    },
    Zu = {
        suppressHydrationWarning: !0
    },
    lf = () => {
        const e = U(),
            t = e.options.ssr ? .nonce,
            s = n => {
                const i = ru(n, e.ssr ? .manifest, t, Zu);
                for (const o of i[1])
                    if (typeof o.attrs ? .src == "string") {
                        const a = o;
                        a.preventScriptHoist = !0
                    }
                return i
            },
            r = n => nu(s(n));
        return el(K(e.stores.matches, r, {
            compare: G
        }))
    };

function el(e) {
    return (0, T.jsx)(T.Fragment, {
        children: e.map((t, s) => (0, R.createElement)(Yu, { ...t,
            key: `tsr-scripts-${t.tag}-${s}`
        }))
    })
}
var Un = R.createContext(void 0),
    Be = e => {
        const t = R.useContext(Un);
        if (e) return e;
        if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return t
    },
    ff = ({
        client: e,
        children: t
    }) => (R.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), (0, T.jsx)(Un.Provider, {
        value: e,
        children: t
    })),
    tl = {
        setTimeout: (e, t) => setTimeout(e, t),
        clearTimeout: e => clearTimeout(e),
        setInterval: (e, t) => setInterval(e, t),
        clearInterval: e => clearInterval(e)
    },
    sl = class {#
        t = tl;#
        e = !1;
        setTimeoutProvider(e) {
            this.#t = e
        }
        setTimeout(e, t) {
            return this.#t.setTimeout(e, t)
        }
        clearTimeout(e) {
            this.#t.clearTimeout(e)
        }
        setInterval(e, t) {
            return this.#t.setInterval(e, t)
        }
        clearInterval(e) {
            this.#t.clearInterval(e)
        }
    },
    Re = new sl;

function rl(e) {
    setTimeout(e, 0)
}
var nl = typeof window > "u" || "Deno" in globalThis;

function z() {}

function il(e, t) {
    return typeof e == "function" ? e(t) : e
}

function zn(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function Hn(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function j(e, t) {
    return typeof e == "function" ? e(t) : e
}

function ar(e, t) {
    const {
        type: s = "all",
        exact: r,
        fetchStatus: n,
        predicate: i,
        queryKey: o,
        stale: a
    } = e;
    if (o) {
        if (r) {
            if (t.queryHash !== _s(o, t.options)) return !1
        } else if (!je(t.queryKey, o)) return !1
    }
    if (s !== "all") {
        const c = t.isActive();
        if (s === "active" && !c || s === "inactive" && c) return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || n && n !== t.state.fetchStatus || i && !i(t))
}

function cr(e, t) {
    const {
        exact: s,
        status: r,
        predicate: n,
        mutationKey: i
    } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (s) {
            if (Pe(t.options.mutationKey) !== Pe(i)) return !1
        } else if (!je(t.options.mutationKey, i)) return !1
    }
    return !(r && t.state.status !== r || n && !n(t))
}

function _s(e, t) {
    return (t ? .queryKeyHashFn || Pe)(e)
}

function Pe(e) {
    return JSON.stringify(e, (t, s) => Xt(s) ? Object.keys(s).sort().reduce((r, n) => (r[n] = s[n], r), {}) : s)
}

function je(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (Array.isArray(e) && Array.isArray(t)) {
            for (let r = 0; r < t.length; r++)
                if (!je(e[r], t[r])) return !1;
            return !0
        }
        const s = Object.keys(t);
        for (const r of s)
            if (!je(e[r], t[r])) return !1;
        return !0
    }
    return !1
}
var ol = Object.prototype.hasOwnProperty;

function kt(e, t, s = 0) {
    if (e === t) return e;
    if (s > 500) return t;
    const r = ur(e) && ur(t);
    if (!r && !(Xt(e) && Xt(t))) return t;
    const n = (r ? e : Object.keys(e)).length,
        i = r ? t : Object.keys(t),
        o = i.length,
        a = r ? new Array(o) : {};
    let c = 0;
    for (let u = 0; u < o; u++) {
        const l = r ? u : i[u],
            f = e[l],
            h = t[l];
        if (f === h) {
            a[l] = f, (r ? u < n : ol.call(e, l)) && c++;
            continue
        }
        if (f === null || h === null || typeof f != "object" || typeof h != "object") {
            a[l] = h;
            continue
        }
        const d = kt(f, h, s + 1);
        a[l] = d, d === f && c++
    }
    return n === o && c === n ? e : a
}

function qe(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const s in e)
        if (e[s] !== t[s]) return !1;
    return !0
}

function ur(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Xt(e) {
    if (!lr(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const s = t.prototype;
    return !(!lr(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function lr(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function al(e) {
    return new Promise(t => {
        Re.setTimeout(t, e)
    })
}

function Zt(e, t, s) {
    return typeof s.structuralSharing == "function" ? s.structuralSharing(e, t) : s.structuralSharing !== !1 ? kt(e, t) : t
}

function hf(e) {
    return e
}

function cl(e, t, s = 0) {
    const r = [...e, t];
    return s && r.length > s ? r.slice(1) : r
}

function ul(e, t, s = 0) {
    const r = [t, ...e];
    return s && r.length > s ? r.slice(0, -1) : r
}
var Rs = Symbol();

function Qn(e, t) {
    return !e.queryFn && t ? .initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === Rs ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}

function Es(e, t) {
    return typeof e == "function" ? e(...t) : !!e
}

function ll(e, t, s) {
    let r = !1,
        n;
    return Object.defineProperty(e, "signal", {
        enumerable: !0,
        get: () => (n ? ? = t(), r || (r = !0, n.aborted ? s() : n.addEventListener("abort", s, {
            once: !0
        })), n)
    }), e
}
var fl = () => nl,
    Ps = () => fl(),
    Oe = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    hl = class extends Oe {#
        t;#
        e;#
        s;
        constructor() {
            super(), this.#s = e => {
                if (typeof window < "u" && window.addEventListener) {
                    const t = () => e();
                    return window.addEventListener("visibilitychange", t, !1), () => {
                        window.removeEventListener("visibilitychange", t)
                    }
                }
            }
        }
        onSubscribe() {
            this.#e || this.setEventListener(this.#s)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#e ? .(), this.#e = void 0)
        }
        setEventListener(e) {
            this.#s = e, this.#e ? .(), this.#e = e(t => {
                typeof t == "boolean" ? this.setFocused(t) : this.onFocus()
            })
        }
        setFocused(e) {
            this.#t !== e && (this.#t = e, this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(t => {
                t(e)
            })
        }
        isFocused() {
            return typeof this.#t == "boolean" ? this.#t : globalThis.document ? .visibilityState !== "hidden"
        }
    },
    Cs = new hl;

function dl(e) {
    let t;
    if (e.then(s => (t = s, s), z) ? .catch ? .(z), t !== void 0) return {
        data: t
    }
}

function pl(e, t, s) {
    const r = e.promise ? .then(t).catch(n => s ? .(n) === !1 ? Promise.reject(n) : Promise.reject(new Error("redacted")));
    return r ? .catch(z), r
}

function df(e, t, s) {
    return {
        dehydratedAt: Date.now(),
        state: { ...e.state,
            ...e.state.data !== void 0 && {
                data: t ? t(e.state.data) : e.state.data
            }
        },
        queryKey: e.queryKey,
        queryHash: e.queryHash,
        ...e.state.status === "pending" && {
            promise: pl(e, t, s)
        },
        ...e.meta && {
            meta: e.meta
        },
        ...e.queryType && {
            queryType: e.queryType
        }
    }
}

function pf(e) {
    return e.state.status === "success"
}

function vf(e, t, s) {
    const r = e.getMutationCache(),
        n = e.getQueryCache(),
        i = s ? .defaultOptions ? .deserializeData ? ? e.getDefaultOptions().hydrate ? .deserializeData;
    t.mutations ? .forEach(({
        state: o,
        ...a
    }) => {
        r.build(e, { ...e.getDefaultOptions().hydrate ? .mutations,
            ...s ? .defaultOptions ? .mutations,
            ...a
        }, o)
    }), t.queries ? .forEach(({
        queryKey: o,
        state: a,
        queryHash: c,
        meta: u,
        promise: l,
        dehydratedAt: f,
        queryType: h
    }) => {
        const d = l ? dl(l) : void 0,
            v = a.data === void 0 ? d ? .data : a.data,
            p = v === void 0 ? v : i ? i(v) : v;
        let g = n.get(c);
        const m = g ? .state.status === "pending",
            y = g ? .state.fetchStatus === "fetching";
        if (g) {
            const S = d && f !== void 0 && f > g.state.dataUpdatedAt;
            if (a.dataUpdatedAt > g.state.dataUpdatedAt || S) {
                const {
                    fetchStatus: P,
                    ...I
                } = a;
                g.setState({ ...I,
                    data: p,
                    ...a.status === "pending" && p !== void 0 && {
                        status: "success",
                        dataUpdatedAt: f ? ? Date.now(),
                        ...!y && {
                            fetchStatus: "idle"
                        }
                    }
                })
            }
        } else g = n.build(e, { ...e.getDefaultOptions().hydrate ? .queries,
            ...s ? .defaultOptions ? .queries,
            queryKey : o,
            queryHash : c,
            meta : u,
            _type: h
        }, { ...a,
            data: p,
            fetchStatus: "idle",
            status: a.status === "pending" && p !== void 0 ? "success" : a.status,
            ...a.status === "pending" && p !== void 0 && {
                dataUpdatedAt: f ? ? Date.now()
            }
        });
        l && !d && !m && !y && (f === void 0 || f > g.state.dataUpdatedAt) && g.fetch(void 0, {
            initialPromise: Promise.resolve(l).then(i)
        }).catch(z)
    })
}
var vl = rl;

function gl() {
    let e = [],
        t = 0,
        s = a => {
            a()
        },
        r = a => {
            a()
        },
        n = vl;
    const i = a => {
            t ? e.push(a) : n(() => {
                s(a)
            })
        },
        o = () => {
            const a = e;
            e = [], a.length && n(() => {
                r(() => {
                    a.forEach(c => {
                        s(c)
                    })
                })
            })
        };
    return {
        batch: a => {
            let c;
            t++;
            try {
                c = a()
            } finally {
                t--, t || o()
            }
            return c
        },
        batchCalls: a => (...c) => {
            i(() => {
                a(...c)
            })
        },
        schedule: i,
        setNotifyFunction: a => {
            s = a
        },
        setBatchNotifyFunction: a => {
            r = a
        },
        setScheduler: a => {
            n = a
        }
    }
}
var N = gl(),
    ml = class extends Oe {#
        t = !0;#
        e;#
        s;
        constructor() {
            super(), this.#s = e => {
                if (typeof window < "u" && window.addEventListener) {
                    const t = () => e(!0),
                        s = () => e(!1);
                    return window.addEventListener("online", t, !1), window.addEventListener("offline", s, !1), () => {
                        window.removeEventListener("online", t), window.removeEventListener("offline", s)
                    }
                }
            }
        }
        onSubscribe() {
            this.#e || this.setEventListener(this.#s)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#e ? .(), this.#e = void 0)
        }
        setEventListener(e) {
            this.#s = e, this.#e ? .(), this.#e = e(this.setOnline.bind(this))
        }
        setOnline(e) {
            this.#t !== e && (this.#t = e, this.listeners.forEach(t => {
                t(e)
            }))
        }
        isOnline() {
            return this.#t
        }
    },
    wt = new ml;

function yl(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function Kn(e) {
    return (e ? ? "online") === "online" ? wt.isOnline() : !0
}
var _t = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e ? .revert, this.silent = e ? .silent
    }
};

function gf(e) {
    return e instanceof _t
}

function qn(e) {
    let t = !1,
        s = 0,
        r, n = "pending",
        i, o;
    const a = new Promise((y, S) => {
        i = y, o = S
    });
    a.catch(z);
    const c = () => n !== "pending",
        u = y => {
            if (!c()) {
                const S = new _t(y);
                p(S), e.onCancel ? .(S)
            }
        },
        l = () => {
            t = !0
        },
        f = () => {
            t = !1
        },
        h = () => Cs.isFocused() && (e.networkMode === "always" || wt.isOnline()) && e.canRun(),
        d = () => Kn(e.networkMode) && e.canRun(),
        v = y => {
            c() || (r ? .(), n = "resolved", i(y))
        },
        p = y => {
            c() || (r ? .(), n = "rejected", o(y))
        },
        g = () => new Promise(y => {
            r = S => {
                (c() || h()) && y(S)
            }, e.onPause ? .()
        }).then(() => {
            r = void 0, c() || e.onContinue ? .()
        }),
        m = () => {
            if (c()) return;
            let y;
            const S = s === 0 ? e.initialPromise : void 0;
            try {
                y = S ? ? e.fn()
            } catch (P) {
                y = Promise.reject(P)
            }
            Promise.resolve(y).then(v).catch(P => {
                if (c()) return;
                const I = e.retry ? ? (Ps() ? 0 : 3),
                    E = e.retryDelay ? ? yl,
                    b = typeof E == "function" ? E(s, P) : E,
                    C = I === !0 || typeof I == "number" && s < I || typeof I == "function" && I(s, P);
                if (t || !C) {
                    p(P);
                    return
                }
                s++, e.onFail ? .(s, P), al(b).then(() => h() ? void 0 : g()).then(() => {
                    t ? p(P) : m()
                })
            })
        };
    return {
        promise: a,
        status: () => n,
        cancel: u,
        continue: () => (r ? .(), a),
        cancelRetry: l,
        continueRetry: f,
        canStart: d,
        start: () => (d() ? m() : g().then(m), a)
    }
}
var $n = class {#
    t;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(), zn(this.gcTime) && (this.#t = Re.setTimeout(() => {
            this.optionalRemove()
        }, this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ? ? (Ps() ? 1 / 0 : 3e5))
    }
    clearGcTimeout() {
        this.#t !== void 0 && (Re.clearTimeout(this.#t), this.#t = void 0)
    }
};

function bl(e) {
    return {
        onFetch: (t, s) => {
            const r = t.options,
                n = t.fetchOptions ? .meta ? .fetchMore ? .direction,
                i = t.state.data ? .pages || [],
                o = t.state.data ? .pageParams || [];
            let a = {
                    pages: [],
                    pageParams: []
                },
                c = 0;
            const u = async () => {
                let l = !1;
                const f = v => {
                        ll(v, () => t.signal, () => l = !0)
                    },
                    h = Qn(t.options, t.fetchOptions),
                    d = async (v, p, g) => {
                        if (l) return Promise.reject(t.signal.reason);
                        if (p == null && v.pages.length) return Promise.resolve(v);
                        const y = (() => {
                                const E = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: p,
                                    direction: g ? "backward" : "forward",
                                    meta: t.options.meta
                                };
                                return f(E), E
                            })(),
                            S = await h(y),
                            {
                                maxPages: P
                            } = t.options,
                            I = g ? ul : cl;
                        return {
                            pages: I(v.pages, S, P),
                            pageParams: I(v.pageParams, p, P)
                        }
                    };
                if (n && i.length) {
                    const v = n === "backward",
                        p = v ? Vn : es,
                        g = {
                            pages: i,
                            pageParams: o
                        };
                    a = await d(g, p(r, g), v)
                } else {
                    const v = e ? ? i.length;
                    do {
                        const p = c === 0 ? o[0] ? ? r.initialPageParam : es(r, a);
                        if (c > 0 && p == null) break;
                        a = await d(a, p), c++
                    } while (c < v)
                }
                return a
            };
            t.options.persister ? t.fetchFn = () => t.options.persister ? .(u, {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal
            }, s) : t.fetchFn = u
        }
    }
}

function es(e, {
    pages: t,
    pageParams: s
}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, s[r], s) : void 0
}

function Vn(e, {
    pages: t,
    pageParams: s
}) {
    return t.length > 0 ? e.getPreviousPageParam ? .(t[0], t, s[0], s) : void 0
}

function Sl(e, t) {
    return t ? es(e, t) != null : !1
}

function wl(e, t) {
    return !t || !e.getPreviousPageParam ? !1 : Vn(e, t) != null
}
var _l = class extends $n {#
    t;#
    e;#
    s;#
    r;#
    n;#
    i;#
    o;#
    c;
    constructor(e) {
        super(), this.#c = !1, this.#o = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#n = e.client, this.#r = this.#n.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#e = hr(this.options), this.state = e.state ? ? this.#e, this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get queryType() {
        return this.#t
    }
    get promise() {
        return this.#i ? .promise
    }
    setOptions(e) {
        if (this.options = { ...this.#o,
                ...e
            }, e ? ._type && (this.#t = e._type), this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
            const t = hr(this.options);
            t.data !== void 0 && (this.setState(fr(t.data, t.dataUpdatedAt)), this.#e = t)
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this)
    }
    setData(e, t) {
        const s = Zt(this.state.data, e, this.options);
        return this.#a({
            data: s,
            type: "success",
            dataUpdatedAt: t ? .updatedAt,
            manual: t ? .manual
        }), s
    }
    setState(e) {
        this.#a({
            type: "setState",
            state: e
        })
    }
    cancel(e) {
        const t = this.#i ? .promise;
        return this.#i ? .cancel(e), t ? t.then(z).catch(z) : Promise.resolve()
    }
    destroy() {
        super.destroy(), this.cancel({
            silent: !0
        })
    }
    get resetState() {
        return this.#e
    }
    reset() {
        this.destroy(), this.setState(this.resetState)
    }
    isActive() {
        return this.observers.some(e => j(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Rs || !this.isFetched()
    }
    isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => j(e.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e = 0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !Hn(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        this.observers.find(e => e.shouldFetchOnWindowFocus()) ? .refetch({
            cancelRefetch: !1
        }), this.#i ? .continue()
    }
    onOnline() {
        this.observers.find(e => e.shouldFetchOnReconnect()) ? .refetch({
            cancelRefetch: !1
        }), this.#i ? .continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#r.notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        const t = this.observers.indexOf(e);
        t !== -1 && (this.observers.splice(t, 1), this.observers.length || (this.#i && (this.#c || this.state.fetchStatus === "paused" && this.state.status === "pending" ? this.#i.cancel({
            revert: !0
        }) : this.#i.cancelRetry()), this.scheduleGc()), this.#r.notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.#a({
            type: "invalidate"
        })
    }
    async fetch(e, t) {
        if (this.state.fetchStatus !== "idle" && this.#i ? .status() !== "rejected") {
            if (this.state.data !== void 0 && t ? .cancelRefetch) this.cancel({
                silent: !0
            });
            else if (this.#i) return this.#i.continueRetry(), this.#i.promise
        }
        if (e && this.setOptions(e), !this.options.queryFn) {
            const c = this.observers.find(u => u.options.queryFn);
            c && this.setOptions(c.options)
        }
        const s = new AbortController,
            r = c => {
                Object.defineProperty(c, "signal", {
                    enumerable: !0,
                    get: () => (this.#c = !0, s.signal)
                })
            },
            n = () => {
                const c = Qn(this.options, t),
                    l = (() => {
                        const f = {
                            client: this.#n,
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                        return r(f), f
                    })();
                return this.#c = !1, this.options.persister ? this.options.persister(c, l, this) : c(l)
            },
            o = (() => {
                const c = {
                    fetchOptions: t,
                    options: this.options,
                    queryKey: this.queryKey,
                    client: this.#n,
                    state: this.state,
                    fetchFn: n
                };
                return r(c), c
            })();
        (this.#t === "infinite" ? bl(this.options.pages) : this.options.behavior) ? .onFetch(o, this), this.#s = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== o.fetchOptions ? .meta) && this.#a({
            type: "fetch",
            meta: o.fetchOptions ? .meta
        });
        const a = this.#i = qn({
            initialPromise: t ? .initialPromise,
            fn: o.fetchFn,
            onCancel: c => {
                c instanceof _t && c.revert && this.setState({ ...this.#s,
                    fetchStatus: "idle"
                }), s.abort()
            },
            onFail: (c, u) => {
                this.#a({
                    type: "failed",
                    failureCount: c,
                    error: u
                })
            },
            onPause: () => {
                this.#a({
                    type: "pause"
                })
            },
            onContinue: () => {
                this.#a({
                    type: "continue"
                })
            },
            retry: o.options.retry,
            retryDelay: o.options.retryDelay,
            networkMode: o.options.networkMode,
            canRun: () => !0
        });
        try {
            const c = await a.start();
            if (c === void 0) throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(c), this.#r.config.onSuccess ? .(c, this), this.#r.config.onSettled ? .(c, this.state.error, this), c
        } catch (c) {
            if (c instanceof _t) {
                if (c.silent) return this.#i.promise;
                if (c.revert) {
                    if (this.state.data === void 0) throw c;
                    return this.state.data
                }
            }
            throw this.#a({
                type: "error",
                error: c
            }), this.#r.config.onError ? .(c, this), this.#r.config.onSettled ? .(this.state.data, c, this), c
        } finally {
            this.#i === a && (this.#i = void 0), this.scheduleGc()
        }
    }#
    a(e) {
        const t = s => {
            switch (e.type) {
                case "failed":
                    return { ...s,
                        fetchFailureCount: e.failureCount,
                        fetchFailureReason: e.error
                    };
                case "pause":
                    return { ...s,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...s,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...s,
                        ...Wn(s.data, this.options),
                        fetchMeta: e.meta ? ? null
                    };
                case "success":
                    const r = { ...s,
                        ...fr(e.data, e.dataUpdatedAt),
                        dataUpdateCount: s.dataUpdateCount + 1,
                        ...!e.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return this.#s = e.manual ? r : void 0, r;
                case "error":
                    const n = e.error;
                    return { ...s,
                        error: n,
                        errorUpdateCount: s.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: s.fetchFailureCount + 1,
                        fetchFailureReason: n,
                        fetchStatus: "idle",
                        status: "error",
                        isInvalidated: !0
                    };
                case "invalidate":
                    return { ...s,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...s,
                        ...e.state
                    }
            }
        };
        this.state = t(this.state), N.batch(() => {
            this.observers.slice().forEach(s => {
                s.onQueryUpdate()
            }), this.#r.notify({
                query: this,
                type: "updated",
                action: e
            })
        })
    }
};

function Wn(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Kn(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function fr(e, t) {
    return {
        data: e,
        dataUpdatedAt: t ? ? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}

function hr(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        s = t !== void 0,
        r = s ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: s ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: s ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Ze = class extends Oe {#
    t;#
    e = void 0;#
    s = void 0;#
    r = void 0;#
    n;#
    i;#
    o;#
    c;#
    a;#
    d;#
    u;#
    l;#
    f;#
    p = new Set;
    constructor(e, t) {
        super(), this.options = t, this.#t = e, this.#o = null, this.bindMethods(), this.setOptions(t)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#e.addObserver(this), dr(this.#e, this.options) ? this.#h() : this.updateResult(), this.#b())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return ts(this.#e, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return ts(this.#e, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, this.#S(), this.#w(), this.#e.removeObserver(this)
    }
    setOptions(e) {
        const t = this.options,
            s = this.#e;
        if (this.options = this.#t.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof j(this.options.enabled, this.#e) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        this.#_(), this.#e.setOptions(this.options), t._defaulted && !qe(this.options, t) && this.#t.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#e,
            observer: this
        });
        const r = this.hasListeners();
        r && pr(this.#e, s, this.options, t) && this.#h(), this.updateResult(), r && (this.#e !== s || j(this.options.enabled, this.#e) !== j(t.enabled, this.#e) || j(this.options.staleTime, this.#e) !== j(t.staleTime, this.#e)) && this.#g();
        const n = this.#m();
        r && (this.#e !== s || j(this.options.enabled, this.#e) !== j(t.enabled, this.#e) || n !== this.#f) && this.#y(n)
    }
    getOptimisticResult(e) {
        const t = this.#t.getQueryCache().build(this.#t, e),
            s = this.createResult(t, e);
        return qe(this.getCurrentResult(), s) || (this.#r = s, this.#i = this.options, this.#n = this.#e.state), s
    }
    getCurrentResult() {
        return this.#r
    }
    trackResult(e, t) {
        return new Proxy(e, {
            get: (s, r) => (this.trackProp(r), t ? .(r), Reflect.get(s, r))
        })
    }
    trackProp(e) {
        this.#p.add(e)
    }
    getCurrentQuery() {
        return this.#e
    }
    refetch({ ...e
    } = {}) {
        return this.fetch({ ...e
        })
    }
    fetchOptimistic(e) {
        const t = this.#t.defaultQueryOptions(e),
            s = this.#t.getQueryCache().build(this.#t, t);
        let r = () => {},
            n;
        const i = new Promise(o => {
            n = o, r = this.#t.getQueryCache().subscribe(a => {
                a.type === "updated" && a.query.queryHash === s.queryHash && s.state.data !== void 0 && (r(), o(this.createResult(s, t)))
            })
        });
        return Promise.race([s.fetch().then(() => {
            const o = this.createResult(s, t);
            return n ? .(o), o
        }).finally(() => {
            r()
        }), i])
    }
    fetch(e) {
        return this.#h({ ...e,
            cancelRefetch: e.cancelRefetch ? ? !0
        }).then(() => (this.updateResult(), this.#r))
    }#
    h(e) {
        this.#_();
        let t = this.#e.fetch(this.options, e);
        return e ? .throwOnError || (t = t.catch(z)), t
    }#
    v(e) {
        return !Ps() && j(this.options.enabled, this.#e) !== !1 && zn(e)
    }#
    g() {
        this.#S();
        const e = j(this.options.staleTime, this.#e);
        if (this.#r.isStale || !this.#v(e)) return;
        const t = Hn(this.#r.dataUpdatedAt, e) + 1;
        this.#u = Re.setTimeout(() => {
            this.#r.isStale || this.updateResult()
        }, t)
    }#
    m() {
        return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#e) : this.options.refetchInterval) ? ? !1
    }#
    y(e) {
        this.#w(), this.#f = e, !(this.#f === 0 || !this.#v(this.#f)) && (this.#l = Re.setInterval(() => {
            (this.options.refetchIntervalInBackground || Cs.isFocused()) && this.#h()
        }, this.#f))
    }#
    b() {
        this.#g(), this.#y(this.#m())
    }#
    S() {
        this.#u !== void 0 && (Re.clearTimeout(this.#u), this.#u = void 0)
    }#
    w() {
        this.#l !== void 0 && (Re.clearInterval(this.#l), this.#l = void 0)
    }
    createResult(e, t) {
        const s = this.#e,
            r = this.options,
            n = this.#r,
            i = this.#n,
            o = this.#i,
            a = e !== s ? e.state : this.#s,
            {
                state: c
            } = e;
        let u = { ...c
            },
            l = !1,
            f;
        if (t._optimisticResults) {
            const I = this.hasListeners(),
                E = !I && dr(e, t),
                b = I && pr(e, s, t, r);
            (E || b) && (u = { ...u,
                ...Wn(c.data, e.options)
            }), t._optimisticResults === "isRestoring" && (u.fetchStatus = "idle")
        }
        let {
            error: h,
            errorUpdatedAt: d,
            status: v
        } = u;
        f = u.data;
        let p = !1;
        if (t.placeholderData !== void 0 && f === void 0 && v === "pending") {
            let I;
            n ? .isPlaceholderData && t.placeholderData === o ? .placeholderData ? (I = n.data, p = !0) : I = typeof t.placeholderData == "function" ? t.placeholderData(this.#d ? .state.data, this.#d) : t.placeholderData, I !== void 0 && (v = "success", f = Zt(n ? .data, I, t), l = !0)
        }
        if (t.select && f !== void 0 && !p)
            if (n && f === i ? .data && t.select === this.#c) f = this.#a;
            else try {
                this.#c = t.select, f = t.select(f), f = Zt(n ? .data, f, t), this.#a = f, this.#o = null
            } catch (I) {
                this.#o = I
            } else f === void 0 && (this.#o = null);
        this.#o && (h = this.#o, f = this.#a, d = Date.now(), v = "error", l = !1);
        const g = u.fetchStatus === "fetching",
            m = v === "pending",
            y = v === "error",
            S = m && g,
            P = f !== void 0;
        return {
            status: v,
            fetchStatus: u.fetchStatus,
            isPending: m,
            isSuccess: v === "success",
            isError: y,
            isInitialLoading: S,
            isLoading: S,
            data: f,
            dataUpdatedAt: u.dataUpdatedAt,
            error: h,
            errorUpdatedAt: d,
            failureCount: u.fetchFailureCount,
            failureReason: u.fetchFailureReason,
            errorUpdateCount: u.errorUpdateCount,
            isFetched: e.isFetched(),
            isFetchedAfterMount: u.dataUpdateCount > a.dataUpdateCount || u.errorUpdateCount > a.errorUpdateCount,
            isFetching: g,
            isRefetching: g && !m,
            isLoadingError: y && !P,
            isPaused: u.fetchStatus === "paused",
            isPlaceholderData: l,
            isRefetchError: y && P,
            isStale: Os(e, t),
            refetch: this.refetch,
            isEnabled: j(t.enabled, e) !== !1
        }
    }
    updateResult() {
        const e = this.#r,
            t = this.createResult(this.#e, this.options);
        if (this.#n = this.#e.state, this.#i = this.options, this.#n.data !== void 0 && (this.#d = this.#e), qe(t, e)) return;
        this.#r = t;
        const r = (() => {
            if (!e) return !0;
            const {
                notifyOnChangeProps: n
            } = this.options, i = typeof n == "function" ? n() : n;
            if (i === "all" || !i && !this.#p.size) return !0;
            const o = new Set(i ? ? this.#p);
            return this.options.throwOnError && o.add("error"), Object.keys(this.#r).some(a => {
                const c = a;
                return this.#r[c] !== e[c] && o.has(c)
            })
        })();
        N.batch(() => {
            r && this.listeners.forEach(n => {
                n(this.#r)
            }), this.#t.getQueryCache().notify({
                query: this.#e,
                type: "observerResultsUpdated"
            })
        })
    }#
    _() {
        const e = this.#t.getQueryCache().build(this.#t, this.options);
        if (e === this.#e) return;
        const t = this.#e;
        this.#e = e, this.#s = e.state, this.hasListeners() && (t ? .removeObserver(this), e.addObserver(this))
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && this.#b()
    }
};

function Rl(e, t) {
    return j(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && j(t.retryOnMount, e) === !1)
}

function dr(e, t) {
    return Rl(e, t) || e.state.data !== void 0 && ts(e, t, t.refetchOnMount)
}

function ts(e, t, s) {
    if (j(t.enabled, e) !== !1 && j(t.staleTime, e) !== "static") {
        const r = typeof s == "function" ? s(e) : s;
        return r === "always" || r !== !1 && Os(e, t)
    }
    return !1
}

function pr(e, t, s, r) {
    return (e !== t || j(r.enabled, e) === !1) && (!s.suspense || e.state.status !== "error") && Os(e, s)
}

function Os(e, t) {
    return j(t.enabled, e) !== !1 && e.isStaleByTime(j(t.staleTime, e))
}
var El = class extends Ze {
        constructor(e, t) {
            super(e, t)
        }
        bindMethods() {
            super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
        }
        setOptions(e) {
            e._type = "infinite", super.setOptions(e)
        }
        getOptimisticResult(e) {
            return e._type = "infinite", super.getOptimisticResult(e)
        }
        fetchNextPage(e) {
            return this.fetch({ ...e,
                meta: {
                    fetchMore: {
                        direction: "forward"
                    }
                }
            })
        }
        fetchPreviousPage(e) {
            return this.fetch({ ...e,
                meta: {
                    fetchMore: {
                        direction: "backward"
                    }
                }
            })
        }
        createResult(e, t) {
            const {
                state: s
            } = e, r = super.createResult(e, t), {
                isFetching: n,
                isRefetching: i,
                isError: o,
                isRefetchError: a
            } = r, c = s.fetchMeta ? .fetchMore ? .direction, u = o && c === "forward", l = n && c === "forward", f = o && c === "backward", h = n && c === "backward";
            return { ...r,
                fetchNextPage: this.fetchNextPage,
                fetchPreviousPage: this.fetchPreviousPage,
                hasNextPage: Sl(t, s.data),
                hasPreviousPage: wl(t, s.data),
                isFetchNextPageError: u,
                isFetchingNextPage: l,
                isFetchPreviousPageError: f,
                isFetchingPreviousPage: h,
                isRefetchError: a && !u && !f,
                isRefetching: i && !l && !h
            }
        }
    },
    Pl = class extends $n {#
        t;#
        e;#
        s;#
        r;
        constructor(e) {
            super(), this.#t = e.client, this.mutationId = e.mutationId, this.#s = e.mutationCache, this.#e = [], this.state = e.state || Gn(), this.setOptions(e.options), this.scheduleGc()
        }
        setOptions(e) {
            this.options = e, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(e) {
            this.#e.includes(e) || (this.#e.push(e), this.clearGcTimeout(), this.#s.notify({
                type: "observerAdded",
                mutation: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.#e = this.#e.filter(t => t !== e), this.scheduleGc(), this.#s.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e
            })
        }
        optionalRemove() {
            this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#s.remove(this))
        }
        continue () {
            return this.#r ? .continue() ? ? (this.state.status === "pending" ? this.execute(this.state.variables) : Promise.resolve())
        }
        async execute(e) {
            const t = () => {
                    this.#n({
                        type: "continue"
                    })
                },
                s = {
                    client: this.#t,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey
                },
                r = this.#r = qn({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(e, s) : Promise.reject(new Error("No mutationFn found")),
                    onFail: (o, a) => {
                        this.#n({
                            type: "failed",
                            failureCount: o,
                            error: a
                        })
                    },
                    onPause: () => {
                        this.#n({
                            type: "pause"
                        })
                    },
                    onContinue: t,
                    retry: this.options.retry ? ? 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                    canRun: () => this.#s.canRun(this)
                }),
                n = this.state.status === "pending",
                i = !r.canStart();
            try {
                if (n) t();
                else {
                    this.#n({
                        type: "pending",
                        variables: e,
                        isPaused: i
                    }), this.#s.config.onMutate && await this.#s.config.onMutate(e, this, s);
                    const a = await this.options.onMutate ? .(e, s);
                    a !== this.state.context && this.#n({
                        type: "pending",
                        context: a,
                        variables: e,
                        isPaused: i
                    })
                }
                const o = await r.start();
                return await this.#s.config.onSuccess ? .(o, e, this.state.context, this, s), await this.options.onSuccess ? .(o, e, this.state.context, s), await this.#s.config.onSettled ? .(o, null, this.state.variables, this.state.context, this, s), await this.options.onSettled ? .(o, null, e, this.state.context, s), this.#n({
                    type: "success",
                    data: o
                }), o
            } catch (o) {
                try {
                    await this.#s.config.onError ? .(o, e, this.state.context, this, s)
                } catch (a) {
                    Promise.reject(a)
                }
                try {
                    await this.options.onError ? .(o, e, this.state.context, s)
                } catch (a) {
                    Promise.reject(a)
                }
                try {
                    await this.#s.config.onSettled ? .(void 0, o, this.state.variables, this.state.context, this, s)
                } catch (a) {
                    Promise.reject(a)
                }
                try {
                    await this.options.onSettled ? .(void 0, o, e, this.state.context, s)
                } catch (a) {
                    Promise.reject(a)
                }
                throw this.#n({
                    type: "error",
                    error: o
                }), o
            } finally {
                this.#r === r && (this.#r = void 0), this.#s.runNext(this)
            }
        }#
        n(e) {
            const t = s => {
                switch (e.type) {
                    case "failed":
                        return { ...s,
                            failureCount: e.failureCount,
                            failureReason: e.error
                        };
                    case "pause":
                        return { ...s,
                            isPaused: !0
                        };
                    case "continue":
                        return { ...s,
                            isPaused: !1
                        };
                    case "pending":
                        return { ...s,
                            context: e.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: e.isPaused,
                            status: "pending",
                            variables: e.variables,
                            submittedAt: Date.now()
                        };
                    case "success":
                        return { ...s,
                            data: e.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1
                        };
                    case "error":
                        return { ...s,
                            data: void 0,
                            error: e.error,
                            failureCount: s.failureCount + 1,
                            failureReason: e.error,
                            isPaused: !1,
                            status: "error"
                        }
                }
            };
            this.state = t(this.state), N.batch(() => {
                this.#e.forEach(s => {
                    s.onMutationUpdate(e)
                }), this.#s.notify({
                    mutation: this,
                    type: "updated",
                    action: e
                })
            })
        }
    };

function Gn() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Cl = class extends Oe {#
    t;#
    e;#
    s;
    constructor(e = {}) {
        super(), this.config = e, this.#t = new Set, this.#e = new Map, this.#s = 0
    }
    build(e, t, s) {
        const r = new Pl({
            client: e,
            mutationCache: this,
            mutationId: ++this.#s,
            options: e.defaultMutationOptions(t),
            state: s
        });
        return this.add(r), r
    }
    add(e) {
        this.#t.add(e);
        const t = ut(e);
        if (typeof t == "string") {
            const s = this.#e.get(t);
            s ? s.push(e) : this.#e.set(t, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (this.#t.delete(e)) {
            const t = ut(e);
            if (typeof t == "string") {
                const s = this.#e.get(t);
                if (s)
                    if (s.length > 1) {
                        const r = s.indexOf(e);
                        r !== -1 && s.splice(r, 1)
                    } else s[0] === e && this.#e.delete(t)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const t = ut(e);
        if (typeof t == "string") {
            const s = this.#e.get(t) ? .find(r => r.state.status === "pending");
            return !s || s === e
        } else return !0
    }
    runNext(e) {
        const t = ut(e);
        return typeof t == "string" ? this.#e.get(t) ? .find(s => s !== e && s.state.isPaused) ? .continue() ? ? Promise.resolve() : Promise.resolve()
    }
    clear() {
        N.batch(() => {
            this.#t.forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }), this.#t.clear(), this.#e.clear()
        })
    }
    getAll() {
        return Array.from(this.#t)
    }
    find(e) {
        const t = {
            exact: !0,
            ...e
        };
        return this.getAll().find(s => cr(t, s))
    }
    findAll(e = {}) {
        return this.getAll().filter(t => cr(e, t))
    }
    notify(e) {
        N.batch(() => {
            this.listeners.forEach(t => {
                t(e)
            })
        })
    }
    resumePausedMutations() {
        const e = this.getAll().filter(t => t.state.isPaused);
        return N.batch(() => Promise.all(e.map(t => t.continue().catch(z))))
    }
};

function ut(e) {
    return e.options.scope ? .id
}
var Ol = class extends Oe {#
    t;#
    e = void 0;#
    s;#
    r;
    constructor(e, t) {
        super(), this.#t = e, this.setOptions(t), this.bindMethods(), this.#n()
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
    }
    setOptions(e) {
        const t = this.options;
        this.options = this.#t.defaultMutationOptions(e), qe(this.options, t) || this.#t.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#s,
            observer: this
        }), t ? .mutationKey && this.options.mutationKey && Pe(t.mutationKey) !== Pe(this.options.mutationKey) ? this.reset() : this.#s ? .state.status === "pending" && this.#s.setOptions(this.options)
    }
    onSubscribe() {
        this.listeners.size === 1 && this.#s && (this.#s.addObserver(this), this.#n())
    }
    onUnsubscribe() {
        this.hasListeners() || this.#s ? .removeObserver(this)
    }
    onMutationUpdate(e) {
        this.#n(), this.#i(e)
    }
    getCurrentResult() {
        return this.#e
    }
    reset() {
        this.#s ? .removeObserver(this), this.#s = void 0, this.#n(), this.#i()
    }
    mutate(e, t) {
        return this.#r = t, this.#s ? .removeObserver(this), this.#s = this.#t.getMutationCache().build(this.#t, this.options), this.#s.addObserver(this), this.#s.execute(e)
    }#
    n() {
        const e = this.#s ? .state ? ? Gn();
        this.#e = { ...e,
            isPending: e.status === "pending",
            isSuccess: e.status === "success",
            isError: e.status === "error",
            isIdle: e.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        }
    }#
    i(e) {
        N.batch(() => {
            if (this.#r && this.hasListeners()) {
                const t = this.#e.variables,
                    s = this.#e.context,
                    r = {
                        client: this.#t,
                        meta: this.options.meta,
                        mutationKey: this.options.mutationKey
                    };
                if (e ? .type === "success") {
                    try {
                        this.#r.onSuccess ? .(e.data, t, s, r)
                    } catch (n) {
                        Promise.reject(n)
                    }
                    try {
                        this.#r.onSettled ? .(e.data, null, t, s, r)
                    } catch (n) {
                        Promise.reject(n)
                    }
                } else if (e ? .type === "error") {
                    try {
                        this.#r.onError ? .(e.error, t, s, r)
                    } catch (n) {
                        Promise.reject(n)
                    }
                    try {
                        this.#r.onSettled ? .(void 0, e.error, t, s, r)
                    } catch (n) {
                        Promise.reject(n)
                    }
                }
            }
            this.listeners.forEach(t => {
                t(this.#e)
            })
        })
    }
};

function vr(e, t) {
    const s = new Set(t);
    return e.filter(r => !s.has(r))
}
var Tl = class extends Oe {#
        t;#
        e;#
        s;#
        r;#
        n;#
        i;#
        o;#
        c;#
        a;#
        d = [];
        constructor(e, t, s) {
            super(), this.#t = e, this.#r = s, this.#s = [], this.#n = [], this.#e = [], this.setQueries(t)
        }
        onSubscribe() {
            this.listeners.size === 1 && this.#n.forEach(e => {
                e.subscribe(t => {
                    this.#h(e, t)
                })
            })
        }
        onUnsubscribe() {
            this.listeners.size || this.destroy()
        }
        destroy() {
            this.listeners = new Set, this.#n.forEach(e => {
                e.destroy()
            })
        }
        setQueries(e, t) {
            this.#s = e, this.#r = t, N.batch(() => {
                const s = this.#n,
                    r = this.#p(this.#s);
                r.forEach(l => l.observer.setOptions(l.defaultedQueryOptions));
                const n = r.map(l => l.observer),
                    i = n.map(l => l.getCurrentResult()),
                    o = s.length !== n.length,
                    a = n.some((l, f) => l !== s[f]),
                    c = o || a,
                    u = c ? !0 : i.some((l, f) => {
                        const h = this.#e[f];
                        return !h || !qe(l, h)
                    });
                !c && !u || (c && (this.#d = r, this.#n = n), this.#e = i, this.hasListeners() && (c && (vr(s, n).forEach(l => {
                    l.destroy()
                }), vr(n, s).forEach(l => {
                    l.subscribe(f => {
                        this.#h(l, f)
                    })
                })), this.#v()))
            })
        }
        getCurrentResult() {
            return this.#e
        }
        getQueries() {
            return this.#n.map(e => e.getCurrentQuery())
        }
        getObservers() {
            return this.#n
        }
        getOptimisticResult(e, t) {
            const s = this.#p(e),
                r = s.map(i => i.observer.getOptimisticResult(i.defaultedQueryOptions)),
                n = s.map(i => i.defaultedQueryOptions.queryHash);
            return [r, i => this.#l(i ? ? r, t, n), () => this.#u(r, s)]
        }#
        u(e, t) {
            const s = new Set;
            return t.map((r, n) => {
                const i = e[n];
                return r.defaultedQueryOptions.notifyOnChangeProps ? i : r.observer.trackResult(i, o => {
                    s.has(o) || (s.add(o), t.forEach(a => {
                        a.observer.trackProp(o)
                    }))
                })
            })
        }#
        l(e, t, s) {
            if (t) {
                const r = this.#a,
                    n = s !== void 0 && r !== void 0 && (r.length !== s.length || s.some((i, o) => i !== r[o]));
                return (this.#e !== this.#c || n || t !== this.#o) && (this.#o = t, this.#c = this.#e, s !== void 0 && (this.#a = s), this.#i = kt(this.#i, t(e))), this.#i
            }
            return e
        }#
        f() {
            return !this.#r ? .combine || this.#n.some((e, t) => e.options.suspense && this.#e[t] ? .data === void 0)
        }#
        p(e) {
            const t = new Map;
            this.#n.forEach(r => {
                const n = r.options.queryHash;
                if (!n) return;
                const i = t.get(n);
                i ? i.push(r) : t.set(n, [r])
            });
            const s = [];
            return e.forEach(r => {
                const n = this.#t.defaultQueryOptions(r),
                    i = t.get(n.queryHash) ? .shift() ? ? new Ze(this.#t, n);
                s.push({
                    defaultedQueryOptions: n,
                    observer: i
                })
            }), s
        }#
        h(e, t) {
            const s = this.#n.indexOf(e);
            s !== -1 && (this.#e = this.#e.slice(), this.#e[s] = t, this.#v())
        }#
        v() {
            if (this.hasListeners()) {
                const e = this.#f(),
                    t = this.#i,
                    s = e ? t : this.#l(this.#u(this.#e, this.#d), this.#r ? .combine);
                (e || t !== s) && N.batch(() => {
                    this.listeners.forEach(r => {
                        r(this.#e)
                    })
                })
            }
        }
    },
    Il = class extends Oe {#
        t;
        constructor(e = {}) {
            super(), this.config = e, this.#t = new Map
        }
        build(e, t, s) {
            const r = t.queryKey,
                n = t.queryHash ? ? _s(r, t);
            let i = this.get(n);
            return i || (i = new _l({
                client: e,
                queryKey: r,
                queryHash: n,
                options: e.defaultQueryOptions(t),
                state: s,
                defaultOptions: e.getQueryDefaults(r)
            }), this.add(i)), i
        }
        add(e) {
            this.#t.has(e.queryHash) || (this.#t.set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }))
        }
        remove(e) {
            const t = this.#t.get(e.queryHash);
            t && (e.destroy(), t === e && this.#t.delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }))
        }
        clear() {
            N.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return this.#t.get(e)
        }
        getAll() {
            return [...this.#t.values()]
        }
        find(e) {
            const t = {
                exact: !0,
                ...e
            };
            return this.getAll().find(s => ar(t, s))
        }
        findAll(e = {}) {
            const t = this.getAll();
            return Object.keys(e).length > 0 ? t.filter(s => ar(e, s)) : t
        }
        notify(e) {
            N.batch(() => {
                this.listeners.forEach(t => {
                    t(e)
                })
            })
        }
        onFocus() {
            N.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            N.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    },
    mf = class {#
        t;#
        e;#
        s;#
        r;#
        n;#
        i;#
        o;#
        c;
        constructor(e = {}) {
            this.#t = e.queryCache || new Il, this.#e = e.mutationCache || new Cl, this.#s = e.defaultOptions || {}, this.#r = new Map, this.#n = new Map, this.#i = 0
        }
        mount() {
            this.#i++, this.#i === 1 && (this.#o = Cs.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#t.onFocus())
            }), this.#c = wt.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#t.onOnline())
            }))
        }
        unmount() {
            this.#i--, this.#i === 0 && (this.#o ? .(), this.#o = void 0, this.#c ? .(), this.#c = void 0)
        }
        isFetching(e) {
            return this.#t.findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return this.#e.findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#t.get(t.queryHash) ? .state.data
        }
        ensureQueryData(e) {
            const t = this.defaultQueryOptions(e),
                s = this.#t.build(this, t),
                r = s.state.data;
            return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && s.isStaleByTime(j(t.staleTime, s)) && this.prefetchQuery(t), Promise.resolve(r))
        }
        getQueriesData(e) {
            return this.#t.findAll(e).map(({
                queryKey: t,
                state: s
            }) => [t, s.data])
        }
        setQueryData(e, t, s) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                n = this.#t.get(r.queryHash) ? .state.data,
                i = il(t, n);
            if (i !== void 0) return this.#t.build(this, r).setData(i, { ...s,
                manual: !0
            })
        }
        setQueriesData(e, t, s) {
            return N.batch(() => this.#t.findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, s)]))
        }
        getQueryState(e) {
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#t.get(t.queryHash) ? .state
        }
        removeQueries(e) {
            const t = this.#t;
            N.batch(() => {
                t.findAll(e).forEach(s => {
                    t.remove(s)
                })
            })
        }
        resetQueries(e, t) {
            const s = this.#t;
            return N.batch(() => {
                const r = s.findAll(e),
                    n = new Set(r);
                return r.forEach(i => {
                    i.reset()
                }), this.refetchQueries({
                    type: "active",
                    predicate: i => n.has(i)
                }, t)
            })
        }
        cancelQueries(e, t = {}) {
            const s = {
                    revert: !0,
                    ...t
                },
                r = N.batch(() => this.#t.findAll(e).map(n => n.cancel(s)));
            return Promise.all(r).then(z).catch(z)
        }
        invalidateQueries(e, t = {}) {
            return N.batch(() => (this.#t.findAll(e).forEach(s => {
                s.invalidate()
            }), e ? .refetchType === "none" ? Promise.resolve() : this.refetchQueries({ ...e,
                type: e ? .refetchType ? ? e ? .type ? ? "active"
            }, t)))
        }
        refetchQueries(e, t = {}) {
            const s = { ...t,
                    cancelRefetch: t.cancelRefetch ? ? !0
                },
                r = N.batch(() => this.#t.findAll(e).filter(n => !n.isDisabled() && !n.isStatic()).map(n => {
                    let i = n.fetch(void 0, s);
                    return s.throwOnError || (i = i.catch(z)), n.state.fetchStatus === "paused" ? Promise.resolve() : i
                }));
            return Promise.all(r).then(z)
        }
        async query(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const s = this.#t.build(this, t),
                r = s.isStaleByTime(j(t.staleTime, s)) ? await s.fetch(t) : s.state.data,
                n = t.select;
            return n ? n(r) : r
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const s = this.#t.build(this, t);
            return s.isStaleByTime(j(t.staleTime, s)) ? s.fetch(t) : Promise.resolve(s.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(z).catch(z)
        }
        infiniteQuery(e) {
            return e._type = "infinite", this.query(e)
        }
        fetchInfiniteQuery(e) {
            return e._type = "infinite", this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(z).catch(z)
        }
        ensureInfiniteQueryData(e) {
            return e._type = "infinite", this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return wt.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return this.#t
        }
        getMutationCache() {
            return this.#e
        }
        getDefaultOptions() {
            return this.#s
        }
        setDefaultOptions(e) {
            this.#s = e
        }
        setQueryDefaults(e, t) {
            this.#r.set(Pe(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...this.#r.values()],
                s = {};
            return t.forEach(r => {
                je(e, r.queryKey) && Object.assign(s, r.defaultOptions)
            }), s
        }
        setMutationDefaults(e, t) {
            this.#n.set(Pe(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...this.#n.values()],
                s = {};
            return t.forEach(r => {
                je(e, r.mutationKey) && Object.assign(s, r.defaultOptions)
            }), s
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...this.#s.queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = _s(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Rs && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e ? ._defaulted ? e : { ...this.#s.mutations,
                ...e ? .mutationKey && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted : !0
            }
        }
        clear() {
            this.#t.clear(), this.#e.clear()
        }
    },
    Yn = R.createContext(!1),
    Jn = () => R.useContext(Yn),
    yf = Yn.Provider;

function xl() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        },
        reset: () => {
            e = !0
        },
        isReset: () => e
    }
}
var Ll = R.createContext(xl()),
    Xn = () => R.useContext(Ll),
    Zn = (e, t, s) => {
        const r = s ? .state.error && typeof e.throwOnError == "function" ? Es(e.throwOnError, [s.state.error, s]) : e.throwOnError;
        (e.suspense || r) && (t.isReset() || (e.retryOnMount = !1))
    },
    ei = e => {
        R.useEffect(() => {
            e.clearReset()
        }, [e])
    },
    ti = ({
        result: e,
        errorResetBoundary: t,
        throwOnError: s,
        query: r,
        suspense: n
    }) => e.isError && !t.isReset() && !e.isFetching && r && (n && e.data === void 0 || Es(s, [e.error, r])),
    kl = (e, t) => t.state.data === void 0,
    si = e => {
        if (e.suspense) {
            const s = n => n === "static" ? n : Math.max(n ? ? 1e3, 1e3),
                r = e.staleTime;
            e.staleTime = typeof r == "function" ? (...n) => s(r(...n)) : s(r), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3))
        }
    },
    ss = (e, t) => e ? .suspense && t.isPending,
    ri = (e, t, s) => t.fetchOptimistic(e).catch(() => {
        s.clearReset()
    });

function bf({
    queries: e,
    ...t
}, s) {
    const r = Be(s),
        n = Jn(),
        i = Xn(),
        o = t.subscribed !== !1,
        a = R.useMemo(() => e.map(p => {
            const g = r.defaultQueryOptions(p);
            return g._optimisticResults = n ? "isRestoring" : o ? "optimistic" : void 0, g
        }), [e, r, n, o]);
    a.forEach(p => {
        si(p);
        const g = r.getQueryCache().get(p.queryHash);
        Zn(p, i, g)
    }), ei(i);
    const [c] = R.useState(() => new Tl(r, a, t)), [u, l, f] = c.getOptimisticResult(a, t.combine), h = !n && o;
    R.useSyncExternalStore(R.useCallback(p => h ? c.subscribe(N.batchCalls(p)) : z, [c, h]), () => c.getCurrentResult(), () => c.getCurrentResult()), R.useEffect(() => {
        c.setQueries(a, t)
    }, [a, t, c]);
    const d = u.some((p, g) => ss(a[g], p)) ? u.flatMap((p, g) => {
        const m = a[g];
        if (m && ss(m, p)) {
            const y = new Ze(r, m);
            return ri(m, y, i)
        }
        return []
    }) : [];
    if (d.length > 0) throw Promise.all(d);
    const v = u.find((p, g) => {
        const m = a[g];
        return m && ti({
            result: p,
            errorResetBoundary: i,
            throwOnError: m.throwOnError,
            query: r.getQueryCache().get(m.queryHash),
            suspense: m.suspense
        })
    });
    if (v) throw v.error;
    return l(f())
}

function Ts(e, t, s) {
    const r = Jn(),
        n = Xn(),
        i = Be(s),
        o = i.defaultQueryOptions(e),
        a = i.getQueryCache().get(o.queryHash),
        c = e.subscribed !== !1;
    o._optimisticResults = r ? "isRestoring" : c ? "optimistic" : void 0, si(o), Zn(o, n, a), ei(n);
    const [u] = R.useState(() => new t(i, o)), l = u.getOptimisticResult(o), f = !r && c;
    if (R.useSyncExternalStore(R.useCallback(h => {
            const d = f ? u.subscribe(N.batchCalls(h)) : z;
            return u.updateResult(), d
        }, [u, f]), () => u.getCurrentResult(), () => u.getCurrentResult()), R.useEffect(() => {
            u.setOptions(o)
        }, [o, u]), ss(o, l)) throw ri(o, u, n);
    if (ti({
            result: l,
            errorResetBoundary: n,
            throwOnError: o.throwOnError,
            query: a,
            suspense: o.suspense
        })) throw l.error;
    return o.notifyOnChangeProps ? l : u.trackResult(l)
}

function Sf(e, t) {
    return Ts(e, Ze, t)
}

function wf(e, t) {
    return Ts({ ...e,
        enabled: !0,
        suspense: !0,
        throwOnError: kl,
        placeholderData: void 0
    }, Ze, t)
}

function _f(e) {
    return e
}

function Rf(e) {
    return e
}

function Ef(e, t) {
    const s = Be(t),
        r = s.getQueryCache();
    return R.useSyncExternalStore(R.useCallback(n => r.subscribe(N.batchCalls(n)), [r]), () => s.isFetching(e), () => s.isFetching(e))
}

function Pf(e, t) {
    const s = Be(t);
    return Fl({
        filters: { ...e,
            status: "pending"
        }
    }, s).length
}

function gr(e, t) {
    return e.findAll(t.filters).map(s => t.select ? t.select(s) : s.state)
}

function Fl(e = {}, t) {
    const s = Be(t).getMutationCache(),
        r = R.useRef(e),
        n = R.useRef(null);
    return n.current === null && (n.current = gr(s, e)), R.useEffect(() => {
        r.current = e
    }), R.useSyncExternalStore(R.useCallback(i => s.subscribe(() => {
        const o = kt(n.current, gr(s, r.current));
        n.current !== o && (n.current = o, N.schedule(i))
    }), [s]), () => n.current, () => n.current)
}

function Cf(e, t) {
    const s = Be(t),
        [r] = R.useState(() => new Ol(s, e));
    R.useEffect(() => {
        r.setOptions(e)
    }, [r, e]);
    const n = R.useSyncExternalStore(R.useCallback(o => r.subscribe(N.batchCalls(o)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()),
        i = R.useCallback((...o) => {
            r.mutate(o[0], o[1]).catch(z)
        }, [r]);
    if (n.error && Es(r.options.throwOnError, [n.error])) throw n.error;
    return { ...n,
        mutate: i,
        mutateAsync: n.mutate
    }
}

function Of(e) {
    return e
}

function Tf(e, t) {
    return Ts(e, El, t)
}
export {
    Ql as $, of as A, Jl as B, ff as C, Yu as D, uf as E, ef as F, kn as G, An as H, qu as I, Wl as J, Ln as K, zu as L, rf as M, sf as N, cf as O, tf as P, Kl as Q, Zl as R, Un as S, lf as T, Gl as U, Yl as V, ws as W, $l as X, Vl as Y, Gc as Z, vf as _, Fl as a, ns as at, kt as b, _f as c, yr as ct, bf as d, zl as et, mf as f, df as g, pf as h, Pf as i, Bi as it, nf as j, af as k, wf as l, Ne as lt, N as m, Of as n, Bl as nt, Ef as o, br as ot, gf as p, U as q, Cf as r, He as rt, Rf as s, jl as st, Tf as t, Hl as tt, Sf as u, Nl as ut, Pe as v, Be as w, Rs as x, hf as y, Xl as z
};