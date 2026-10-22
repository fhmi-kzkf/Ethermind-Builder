try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6aa106f3-ab3b-4cbe-8cf3-150cdbb102cc", e._sentryDebugIdIdentifier = "sentry-dbid-6aa106f3-ab3b-4cbe-8cf3-150cdbb102cc")
    })()
} catch {}

function B(e) {
    return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0
}

function Ee(e) {
    return function t(r) {
        return arguments.length === 0 || B(r) ? t : e.apply(this, arguments)
    }
}

function ye(e) {
    return function t(r, s) {
        switch (arguments.length) {
            case 0:
                return t;
            case 1:
                return B(r) ? t : Ee(function(n) {
                    return e(r, n)
                });
            default:
                return B(r) && B(s) ? t : B(r) ? Ee(function(n) {
                    return e(n, s)
                }) : B(s) ? Ee(function(n) {
                    return e(r, n)
                }) : e(r, s)
        }
    }
}

function Ar(e) {
    return function t(r, s, n) {
        switch (arguments.length) {
            case 0:
                return t;
            case 1:
                return B(r) ? t : ye(function(i, a) {
                    return e(r, i, a)
                });
            case 2:
                return B(r) && B(s) ? t : B(r) ? ye(function(i, a) {
                    return e(i, s, a)
                }) : B(s) ? ye(function(i, a) {
                    return e(r, i, a)
                }) : Ee(function(i) {
                    return e(r, s, i)
                });
            default:
                return B(r) && B(s) && B(n) ? t : B(r) && B(s) ? ye(function(i, a) {
                    return e(i, a, n)
                }) : B(r) && B(n) ? ye(function(i, a) {
                    return e(i, s, a)
                }) : B(s) && B(n) ? ye(function(i, a) {
                    return e(r, i, a)
                }) : B(r) ? Ee(function(i) {
                    return e(i, s, n)
                }) : B(s) ? Ee(function(i) {
                    return e(r, i, n)
                }) : B(n) ? Ee(function(i) {
                    return e(r, s, i)
                }) : e(r, s, n)
        }
    }
}

function ot(e, t) {
    return Object.prototype.hasOwnProperty.call(t, e)
}
var Oi = Ee(function(t) {
    return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1)
});

function Ur(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
var Di = Number.isInteger || function(t) {
    return t << 0 === t
};

function Ci(e, t) {
    return t[e < 0 ? t.length + e : e]
}

function Pi(e) {
    return new RegExp(e.source, e.flags ? e.flags : (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : "") + (e.dotAll ? "s" : ""))
}

function nn(e, t, r) {
    if (r || (r = new Li), Mi(e)) return e;
    var s = function(i) {
        var a = r.get(e);
        if (a) return a;
        r.set(e, i);
        for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && (i[l] = nn(e[l], !0, r));
        return i
    };
    switch (Oi(e)) {
        case "Object":
            return s(Object.create(Object.getPrototypeOf(e)));
        case "Array":
            return s(Array(e.length));
        case "Date":
            return new Date(e.valueOf());
        case "RegExp":
            return Pi(e);
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
            return e.slice();
        default:
            return e
    }
}

function Mi(e) {
    var t = typeof e;
    return e == null || t != "object" && t != "function"
}
var Li = (function() {
        function e() {
            this.map = {}, this.length = 0
        }
        return e.prototype.set = function(t, r) {
            var s = this.hash(t),
                n = this.map[s];
            n || (this.map[s] = n = []), n.push([t, r]), this.length += 1
        }, e.prototype.hash = function(t) {
            var r = [];
            for (var s in t) r.push(Object.prototype.toString.call(t[s]));
            return r.join()
        }, e.prototype.get = function(t) {
            if (this.length <= 180) {
                for (var r in this.map)
                    for (var a = this.map[r], s = 0; s < a.length; s += 1) {
                        var n = a[s];
                        if (n[0] === t) return n[1]
                    }
                return
            }
            var i = this.hash(t),
                a = this.map[i];
            if (a)
                for (var s = 0; s < a.length; s += 1) {
                    var n = a[s];
                    if (n[0] === t) return n[1]
                }
        }, e
    })(),
    b = Ee(function(t) {
        return t != null && typeof t.clone == "function" ? t.clone() : nn(t)
    });

function ki(e, t) {
    for (var r = t, s = 0; s < e.length; s += 1) {
        if (r == null) return;
        var n = e[s];
        Di(n) ? r = Ci(n, r) : r = r[n]
    }
    return r
}
var Ui = Ar(function(t, r, s) {
        var n = {},
            i;
        r = r || {}, s = s || {};
        for (i in r) ot(i, r) && (n[i] = ot(i, s) ? t(i, r[i], s[i]) : r[i]);
        for (i in s) ot(i, s) && !ot(i, n) && (n[i] = s[i]);
        return n
    }),
    wi = Ar(function e(t, r, s) {
        return Ui(function(n, i, a) {
            return Ur(i) && Ur(a) ? e(t, i, a) : t(n, i, a)
        }, r, s)
    }),
    $i = Ar(function(t, r, s) {
        return wi(function(n, i, a) {
            return t(i, a)
        }, r, s)
    }),
    Bi = ye(ki),
    an = ye(function(t, r) {
        var s = {};
        for (var n in r) t(r[n], n, r) && (s[n] = r[n]);
        return s
    }),
    _ = e => typeof e == "function" && !!(e.constructor && e.call && e.apply),
    k = e => typeof e == "string",
    ee = e => e === null,
    w = e => typeof e > "u",
    G = e => ee(e) || w(e),
    xi = e => typeof e == "bigint",
    N = e => !w(e),
    Be = e => !G(e),
    Fi = e => Be(e) && e !== "",
    yr = e => {
        switch (Object.prototype.toString.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return e instanceof Error
        }
    },
    Rt = e => typeof e == "boolean",
    qt = (e, t) => Bi(t.split("."), e),
    Gi = (e, t) => !!qt(e, t),
    Vi = e => typeof e == "object",
    Hi = e => !ee(e) && Vi(e) && !Array.isArray(e),
    M = e => !ee(e) && Object.prototype.toString.call(e) === "[object Object]",
    Yi = (e, t) => {
        if (!Array.isArray(e) || !Array.isArray(t)) return b(t);
        const r = b(e);
        return t.forEach((s, n) => {
            r[n] = Array.isArray(s) || Hi(s) ? x(r[n], s) : s
        }), r
    },
    x = (e, t) => $i(Yi, e, t),
    oe = e => M(e) && Object.keys(e).length > 0,
    Ke = e => {
        const t = an(N, e);
        return Object.keys(t).forEach(r => {
            const s = t[r];
            M(s) && (t[r] = Ke(s))
        }), t
    },
    xe = e => {
        const t = an(Be, e);
        return Object.keys(t).forEach(r => {
            const s = t[r];
            M(s) && (t[r] = xe(s))
        }), t
    },
    he = e => {
        if (oe(e)) return xe(e)
    },
    le = (e, t) => typeof e == "boolean" ? e : t,
    _r = e => (Object.getOwnPropertyNames(e).forEach(function(t) {
        e[t] && typeof e[t] == "object" && _r(e[t])
    }), Object.freeze(e)),
    Qi = e => e.replace(/^\s+|\s+$/gm, ""),
    on = e => e.replace(/^\.+/, ""),
    Tt = e => {
        let t = e;
        if (!k(e) && !G(e)) try {
            t = JSON.stringify(e)
        } catch {
            t = null
        }
        return t
    },
    zi = e => {
        const t = globalThis.atob(e).split("").map(r => r.charCodeAt(0));
        return new Uint8Array(t)
    },
    Ki = e => {
        const t = Array.from(e, r => String.fromCodePoint(r)).join("");
        return globalThis.btoa(t)
    },
    Ir = e => Ki(new TextEncoder().encode(e)),
    ln = e => new TextDecoder().decode(zi(e)),
    bt = (e, t, r, s, n) => {
        const i = {
            category: e,
            name: t,
            properties: r,
            options: s,
            callback: void 0
        };
        _(n) && (i.callback = n), _(s) && (i.category = e, i.name = t, i.properties = r, i.options = void 0, i.callback = s), _(r) && (i.category = e, i.name = t, i.properties = void 0, i.options = void 0, i.callback = r), _(t) && (i.category = e, i.name = void 0, i.properties = void 0, i.options = void 0, i.callback = t), _(e) && (i.category = void 0, i.name = void 0, i.properties = void 0, i.options = void 0, i.callback = e), M(e) ? (i.name = void 0, i.category = void 0, i.properties = e, _(t) ? i.options = void 0 : i.options = t) : M(t) && (i.name = void 0, i.properties = t, _(r) ? i.options = void 0 : i.options = r), k(e) && !k(t) && (i.category = void 0, i.name = e), N(i.category) || (i.category = void 0), N(i.name) || (i.name = void 0), i.properties = i.properties ? b(i.properties) : {}, N(i.options) ? i.options = b(i.options) : i.options = void 0;
        const a = k(i.name) ? i.name : i.properties.name,
            l = k(i.category) ? i.category : i.properties.category;
        return i.properties = x(M(i.properties) ? i.properties : {}, { ...a && {
                name: a
            },
            ...l && {
                category: l
            }
        }), i
    },
    Sr = (e, t, r, s) => {
        const n = {
            name: e,
            properties: t,
            options: r,
            callback: void 0
        };
        return _(s) && (n.callback = s), _(r) && (n.properties = t, n.options = void 0, n.callback = r), _(t) && (n.properties = void 0, n.options = void 0, n.callback = t), n.properties = Be(n.properties) ? b(n.properties) : {}, N(n.options) ? n.options = b(n.options) : n.options = void 0, n
    },
    cn = (e, t, r, s) => {
        const n = {
            userId: e,
            traits: t,
            options: r,
            callback: void 0
        };
        return _(s) && (n.callback = s), _(r) && (n.userId = e, n.traits = t, n.options = void 0, n.callback = r), _(t) && (n.userId = e, n.traits = void 0, n.options = void 0, n.callback = t), (M(e) || ee(e)) && (n.userId = null, n.traits = e, _(t) ? n.options = void 0 : n.options = t), n.userId = Tt(n.userId), M(n.traits) ? n.traits = b(n.traits) : n.traits = void 0, N(n.options) ? n.options = b(n.options) : n.options = void 0, n
    },
    un = (e, t, r, s) => {
        const n = {
            to: e,
            from: t,
            options: r,
            callback: void 0
        };
        return _(s) && (n.callback = s), _(r) && (n.to = e, n.from = t, n.options = void 0, n.callback = r), _(t) ? (n.to = e, n.from = void 0, n.options = void 0, n.callback = t) : (M(t) || ee(t)) && (n.to = e, n.from = void 0, n.options = t), N(n.to) && (n.to = Tt(n.to)), N(n.from) ? n.from = Tt(n.from) : n.from = void 0, N(n.options) ? n.options = b(n.options) : n.options = void 0, n
    },
    dn = (e, t, r, s) => {
        const n = {
            groupId: e,
            traits: t,
            options: r,
            callback: void 0
        };
        return _(s) && (n.callback = s), _(r) && (n.groupId = e, n.traits = t, n.options = void 0, n.callback = r), _(t) && (n.groupId = e, n.traits = void 0, n.options = void 0, n.callback = t), (M(e) || ee(e)) && (n.groupId = null, n.traits = e, _(t) ? n.options = void 0 : n.options = t), n.groupId = Tt(n.groupId), M(n.traits) ? n.traits = b(n.traits) : n.traits = void 0, N(n.options) ? n.options = b(n.options) : n.options = void 0, n
    },
    Vt = (function(e) {
        return e.UNLOADED = "Page Unloaded", e
    })({}),
    kt = "API",
    Jt = "CapabilitiesManager",
    W = "ConfigManager",
    Zt = "EventManager",
    Ye = "PluginsManager",
    Oe = "UserSessionManager",
    je = "ErrorHandler",
    Le = "PluginEngine",
    ji = "StoreManager",
    Ht = `Ready${kt}`,
    Wi = `Load${kt}`,
    Xi = `Consent${kt}`,
    qi = "HttpClient",
    Ji = "RudderStackAnalytics",
    lt = "AnalyticsCore";

function Zi(e) {
    return crypto.getRandomValues(new Uint8Array(e))
}
var wr = 4096,
    vt = [],
    _e = 0,
    Yt;
for (; _e < 256; _e++) vt[_e] = (_e + 256).toString(16).substring(1);

function ea() {
    (!Yt || _e + 16 > wr) && (Yt = Zi(wr), _e = 0);
    for (var e = 0, t, r = ""; e < 16; e++) t = Yt[_e + e], e == 6 ? r += vt[t & 15 | 64] : e == 8 ? r += vt[t & 63 | 128] : r += vt[t], e & 1 && e > 1 && e < 11 && (r += "-");
    return _e += 16, r
}
var Pe = 256,
    ft = [],
    ct;
for (; Pe--;) ft[Pe] = (Pe + 256).toString(16).substring(1);

function ta() {
    var e = 0,
        t, r = "";
    if (!ct || Pe + 16 > 256) {
        for (ct = Array(e = 256); e--;) ct[e] = 256 * Math.random() | 0;
        e = Pe = 0
    }
    for (; e < 16; e++) t = ct[Pe + e], e == 6 ? r += ft[t & 15 | 64] : e == 8 ? r += ft[t & 63 | 128] : r += ft[t], e & 1 && e > 1 && e < 11 && (r += "-");
    return Pe++, r
}
var ra = () => !G(globalThis.crypto) && _(globalThis.crypto.getRandomValues),
    ce = () => ra() ? ea() : ta(),
    sa = () => !!window.chrome ? .runtime ? .id,
    na = () => k(globalThis.navigator.userAgent) && /Trident.*rv:11\./.test(globalThis.navigator.userAgent),
    hn = (e, t = !1) => {
        let r = !1,
            s = !1;

        function n() {
            r || (r = !0, e(s), setTimeout(() => {
                r = !1
            }, 0))
        }(t || na()) && globalThis.addEventListener("beforeunload", () => {
            s = !1, n()
        }), globalThis.addEventListener("blur", () => {
            s = !0, n()
        }), globalThis.addEventListener("focus", () => {
            r = !1
        }), document.addEventListener("pagehide", () => {
            s = document.visibilityState === "hidden", n()
        }), document.addEventListener("visibilitychange", () => {
            s = !0, document.visibilityState === "hidden" ? n() : r = !1
        })
    },
    gn = e => e.toISOString(),
    Me = () => gn(new Date),
    y = ":: ",
    ia = e => `A script with the id "${e}" is already loaded. Skipping the loading of this script to prevent conflicts`,
    $r = (e, t, r) => `Unable to load (${k(r)?r:r.type}) the script with the id "${e}" from URL "${t}"`,
    aa = (e, t, r) => `A timeout of ${r} ms occurred while trying to load the script with id "${e}" from URL "${t}"`,
    oa = (e, t) => `${e}${y}A circular reference has been detected in the object and the property "${t}" has been dropped from the output.`,
    la = "Failed to convert the value to a JSON string.",
    Br = (e, t) => `${e}${y}A bad data (like circular reference, BigInt) has been detected in the object and the property "${t}" has been dropped from the output.`,
    ca = "Failed to encode the cookie data.",
    ua = (e, t) => `${e}${y}The "${t}" storage type is `,
    da = "JSONStringify",
    xr = "JSON",
    ha = "[BigInt]",
    vn = "[Circular Reference]",
    ga = (e, t, r) => {
        const s = [];
        return function(n, i) {
            if (!t ? .includes(n) && !(e && G(i))) {
                if (typeof i != "object" || ee(i)) return i;
                for (; s.length > 0 && s[s.length - 1] !== this;) s.pop();
                return s.includes(i) ? (r ? .warn(oa(da, n)), vn) : (s.push(i), i)
            }
        }
    },
    H = (e, t, r, s) => {
        try {
            return JSON.stringify(e, ga(t, r, s))
        } catch (n) {
            return s ? .warn(la, n), null
        }
    },
    va = e => {
        const t = [];
        return function(s, n) {
            if (xi(n)) return e ? .warn(Br(xr, s)), ha;
            for (; t.length > 0 && t[t.length - 1] !== this;) t.pop();
            return t.includes(n) ? (e ? .warn(Br(xr, s)), vn) : (t.push(n), n)
        }
    },
    fn = (e, t) => {
        const r = Array.isArray(e) ? [] : {};
        for (const s in e)
            if (Object.hasOwnProperty.call(e, s)) {
                const n = e[s],
                    i = t.call(e, s, n);
                M(i) || Array.isArray(i) ? r[s] = fn(i, t) : r[s] = i
            }
        return r
    },
    C = (e, t) => {
        const r = va(t),
            s = r.call(e, "", e);
        return M(e) || Array.isArray(e) ? fn(e, r) : s
    },
    pn = "[SDK DISPATCHED ERROR]",
    Ut = e => {
        const {
            stack: t
        } = e;
        if (typeof t == "string" && t) return t
    },
    Rr = (e, t) => {
        if (!yr(e)) return new Error(`${t}: ${H(e)}`);
        try {
            const r = e.constructor,
                s = new r(`${t}: ${e.message}`),
                n = Ut(e);
            return n && (s.stack = n), Object.getOwnPropertyNames(e).forEach(i => {
                if (i !== "message" && i !== "stack" && i !== "name") try {
                    s[i] = e[i]
                } catch {}
            }), s
        } catch {
            return new Error(`${t}: ${H(e)}`)
        }
    },
    U = e => {
        if (yr(e)) {
            const t = Ut(e);
            t && (e.stack = `${t}
${pn}`)
        }
        globalThis.dispatchEvent(new ErrorEvent("error", {
            error: e,
            bubbles: !0,
            cancelable: !0,
            composed: !0
        }))
    },
    Fr = "RudderLabs JavaScript SDK",
    Nt = "3.34.1",
    fa = "com.rudderlabs.javascript",
    En = "npm",
    pa = "bundled",
    Gr = "RudderJS-Initiated",
    Ea = "ad-block page request",
    ma = "/ad-blocked",
    Je = "preloadedEventsBuffer",
    Aa = "Consent Management Interaction",
    ya = "ajs_trait_",
    _a = "ajs_prop_",
    Vr = "ajs_aid",
    Ia = "ajs_uid",
    Hr = "ajs_event",
    Sa = 1e4,
    Ra = 31536e6,
    Yr = 432e5,
    er = 18e5,
    Qr = 1e4,
    Ta = 1e4,
    ba = 250,
    mn = (e = "app") => {
        globalThis.RudderStackGlobals || (globalThis.RudderStackGlobals = {}), globalThis.RudderStackGlobals[e] || (globalThis.RudderStackGlobals[e] = {})
    },
    Ot = (e, t, r = "app") => {
        mn(r), globalThis.RudderStackGlobals[r][e] = t
    },
    An = (e, t = "app") => (mn(t), globalThis.RudderStackGlobals[t][e]);

function Na(e, t, r = ba) {
    let s;
    return (...n) => {
        globalThis.clearTimeout(s), s = globalThis.setTimeout(() => {
            e.apply(t, n)
        }, r)
    }
}
var zr = (e, t) => {
        const r = {};
        return e.forEach((s, n) => {
            if (n.startsWith(t)) {
                const i = n.substring(t.length);
                r[i] = e.get(n)
            }
        }), r
    },
    Oa = (e = []) => {
        const t = {
                trait: ya,
                properties: _a
            },
            r = new URLSearchParams(globalThis.location.search);
        r.get(Hr) && e.unshift(["track", r.get(Hr), zr(r, t.properties)]);
        const s = r.get(Ia),
            n = zr(r, t.trait);
        if (s || oe(n)) {
            const i = [...s ? [s] : [], n];
            e.unshift(["identify", ...i])
        }
        r.get(Vr) && e.unshift(["setAnonymousId", r.get(Vr)])
    },
    Da = e => {
        const t = "load";
        let r = [],
            s = 0;
        for (; s < e.length;) {
            if (e[s] && e[s][0] === t) {
                r = b(e[s]), e.splice(s, 1);
                break
            }
            s += 1
        }
        return r
    },
    Ca = e => {
        const t = "consent",
            r = e.filter(n => n[0] === t),
            s = e.filter(n => n[0] !== t);
        e.splice(0, e.length, ...r, ...s)
    },
    Pa = e => {
        const t = An(Je) || [];
        Oa(t), t.length > 0 && (e.enqueuePreloadBufferEvents(t), Ot(Je, []))
    },
    Ma = (e, t) => {
        const r = e.shift();
        let s;
        if (_(t[r])) {
            switch (r) {
                case "page":
                    s = bt(...e);
                    break;
                case "track":
                    s = Sr(...e);
                    break;
                case "identify":
                    s = cn(...e);
                    break;
                case "alias":
                    s = un(...e);
                    break;
                case "group":
                    s = dn(...e);
                    break;
                default:
                    t[r](...e)
            }
            s && t[r](s)
        }
    },
    La = 1e4,
    ka = "RS_JS_SDK",
    Ua = (e, t, r = !0, s = null, n = null, i = {}) => {
        const a = document.createElement("script");
        return a.type = "text/javascript", a.onload = s, a.onerror = n, a.src = e, a.id = t, a.async = r, Object.keys(i).forEach(l => {
            a.setAttribute(l, i[l])
        }), a.setAttribute("data-loader", ka), a
    },
    wa = e => {
        const t = document.getElementsByTagName("head");
        if (t.length > 0) {
            t[0] ? .insertBefore(e, t[0] ? .firstChild);
            return
        }
        const r = document.getElementsByTagName("script");
        if (r.length > 0 && r[0] ? .parentNode) {
            r[0] ? .parentNode.insertBefore(e, r[0]);
            return
        }
        const s = document.createElement("head");
        s.appendChild(e);
        const n = document.getElementsByTagName("html")[0];
        n ? .insertBefore(s, n.firstChild)
    },
    $a = (e, t, r, s = !0, n) => new Promise((i, a) => {
        document.getElementById(t) && a(new Error(ia(t)));
        try {
            let l;
            wa(Ua(e, t, s, () => {
                globalThis.clearTimeout(l), i(t)
            }, d => {
                globalThis.clearTimeout(l), a(new Error($r(t, e, d)))
            }, n)), l = globalThis.setTimeout(() => {
                a(new Error(aa(t, e, r)))
            }, r)
        } catch (l) {
            a(Rr(l, $r(t, e, "unknown")))
        }
    }),
    yn = class {
        constructor(e, t = La) {
            this.logger = e, this.timeout = t
        }
        loadJSFile(e) {
            const {
                url: t,
                id: r,
                timeout: s,
                async: n,
                callback: i,
                extraAttributes: a
            } = e, l = !_(i);
            $a(t, r, s || this.timeout, n, a).then(c => {
                l || i(c)
            }).catch(c => {
                l || i(r, c)
            })
        }
    },
    Ba = Symbol.for("preact-signals");

function wt() {
    if (me > 1) me--;
    else {
        var e, t = !1;
        for ((function() {
                var n = Ct;
                for (Ct = void 0; n !== void 0;) {
                    var i = n.S;
                    if (i.v === n.v)
                        for (var a = i.t; a !== void 0; a = a.x) a.i === n.i && (a.i = i.i);
                    n = n.o
                }
            })(); et !== void 0;) {
            var r = et;
            for (et = void 0, Dt++; r !== void 0;) {
                var s = r.u;
                if (r.u = void 0, r.f &= -3, !(8 & r.f) && In(r)) try {
                    r.c()
                } catch (n) {
                    t || (e = n, t = !0)
                }
                r = s
            }
        }
        if (Dt = 0, me--, t) throw e
    }
}

function Y(e) {
    if (me > 0) return e();
    tr = ++xa, me++;
    try {
        return e()
    } finally {
        wt()
    }
}
var Ze, $ = void 0;

function $t(e) {
    var t = $,
        r = Ze;
    $ = void 0, Ze = void 0;
    try {
        return e()
    } finally {
        $ = t, Ze = r
    }
}
var et = void 0,
    me = 0,
    Dt = 0,
    xa = 0,
    tr = 0,
    Ct = void 0,
    Pt = 0;

function _n(e) {
    if ($ !== void 0) {
        var t = e.n;
        if (t === void 0 || t.t !== $) return t = {
            i: 0,
            S: e,
            p: $.s,
            n: void 0,
            t: $,
            e: void 0,
            x: void 0,
            r: t
        }, $.s !== void 0 && ($.s.n = t), $.s = t, e.n = t, 32 & $.f && e.S(t), t;
        if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = $.s, t.n = void 0, $.s.n = t, $.s = t), t
    }
}

function q(e, t) {
    this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t ? .watched, this.Z = t ? .unwatched, this.name = t ? .name
}
q.prototype.brand = Ba;
q.prototype.h = function() {
    return !0
};
q.prototype.S = function(e) {
    var t = this,
        r = this.t;
    r !== e && e.e === void 0 && (e.x = r, this.t = e, r !== void 0 ? r.e = e : $t(function() {
        var s;
        (s = t.W) == null || s.call(t)
    }))
};
q.prototype.U = function(e) {
    var t = this;
    if (this.t !== void 0) {
        var r = e.e,
            s = e.x;
        r !== void 0 && (r.x = s, e.e = void 0), s !== void 0 && (s.e = r, e.x = void 0), e === this.t && (this.t = s, s === void 0 && $t(function() {
            var n;
            (n = t.Z) == null || n.call(t)
        }))
    }
};
q.prototype.subscribe = function(e) {
    var t = this;
    return de(function() {
        var r = t.value;
        $t(function() {
            return e(r)
        })
    }, {
        name: "sub"
    })
};
q.prototype.valueOf = function() {
    return this.value
};
q.prototype.toString = function() {
    return this.value + ""
};
q.prototype.toJSON = function() {
    return this.value
};
q.prototype.peek = function() {
    var e = this;
    return $t(function() {
        return e.value
    })
};
Object.defineProperty(q.prototype, "value", {
    get: function() {
        var e = _n(this);
        return e !== void 0 && (e.i = this.i), this.v
    },
    set: function(e) {
        if (e !== this.v) {
            if (Dt > 100) throw new Error("Cycle detected");
            (function(r) {
                me !== 0 && Dt === 0 && r.l !== tr && (r.l = tr, Ct = {
                    S: r,
                    v: r.v,
                    i: r.i,
                    o: Ct
                })
            })(this), this.v = e, this.i++, Pt++, me++;
            try {
                for (var t = this.t; t !== void 0; t = t.x) t.t.N()
            } finally {
                wt()
            }
        }
    }
});

function v(e, t) {
    return new q(e, t)
}

function In(e) {
    for (var t = e.s; t !== void 0; t = t.n)
        if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
    return !1
}

function Sn(e) {
    for (var t = e.s; t !== void 0; t = t.n) {
        var r = t.S.n;
        if (r !== void 0 && (t.r = r), t.S.n = t, t.i = -1, t.n === void 0) {
            e.s = t;
            break
        }
    }
}

function Rn(e) {
    for (var t = e.s, r = void 0; t !== void 0;) {
        var s = t.p;
        t.i === -1 ? (t.S.U(t), s !== void 0 && (s.n = t.n), t.n !== void 0 && (t.n.p = s)) : r = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = s
    }
    e.s = r
}

function Ve(e, t) {
    q.call(this, void 0, t), this.x = e, this.s = void 0, this.g = Pt - 1, this.f = 4
}
Ve.prototype = new q;
Ve.prototype.h = function() {
    if (this.f &= -3, 1 & this.f) return !1;
    if ((36 & this.f) == 32 || (this.f &= -5, this.g === Pt)) return !0;
    if (this.g = Pt, this.f |= 1, this.i > 0 && !In(this)) return this.f &= -2, !0;
    var e = $;
    try {
        Sn(this), $ = this;
        var t = this.x();
        (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++)
    } catch (r) {
        this.v = r, this.f |= 16, this.i++
    }
    return $ = e, Rn(this), this.f &= -2, !0
};
Ve.prototype.S = function(e) {
    if (this.t === void 0) {
        this.f |= 36;
        for (var t = this.s; t !== void 0; t = t.n) t.S.S(t)
    }
    q.prototype.S.call(this, e)
};
Ve.prototype.U = function(e) {
    if (this.t !== void 0 && (q.prototype.U.call(this, e), this.t === void 0)) {
        this.f &= -33;
        for (var t = this.s; t !== void 0; t = t.n) t.S.U(t)
    }
};
Ve.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 6;
        for (var e = this.t; e !== void 0; e = e.x) e.t.N()
    }
};
Object.defineProperty(Ve.prototype, "value", {
    get: function() {
        if (1 & this.f) throw new Error("Cycle detected");
        var e = _n(this);
        if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
        return this.v
    }
});

function Tn(e) {
    var t = e.m;
    if (e.m = void 0, typeof t == "function") {
        me++;
        var r = $;
        $ = void 0;
        try {
            t()
        } catch (s) {
            throw e.f &= -2, e.f |= 8, Tr(e), s
        } finally {
            $ = r, wt()
        }
    }
}

function Tr(e) {
    for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
    e.x = void 0, e.s = void 0, Tn(e)
}

function Fa(e) {
    if ($ !== this) throw new Error("Out-of-order effect");
    Rn(this), $ = e, this.f &= -2, 8 & this.f && Tr(this), wt()
}

function He(e, t) {
    this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t ? .name, Ze && Ze.push(this)
}
He.prototype.c = function() {
    var e = this.S();
    try {
        if (8 & this.f || this.x === void 0) return;
        var t = this.x();
        typeof t == "function" && (this.m = t)
    } finally {
        e()
    }
};
He.prototype.S = function() {
    if (1 & this.f) throw new Error("Cycle detected");
    this.f |= 1, this.f &= -9, Tn(this), Sn(this), me++;
    var e = $;
    return $ = this, Fa.bind(this, e)
};
He.prototype.N = function() {
    2 & this.f || (this.f |= 2, this.u = et, et = this)
};
He.prototype.d = function() {
    this.f |= 8, 1 & this.f || Tr(this)
};
He.prototype.dispose = function() {
    this.d()
};

function de(e, t) {
    var r = new He(e, t);
    try {
        r.c()
    } catch (n) {
        throw r.d(), n
    }
    var s = r.d.bind(r);
    return s[Symbol.dispose] = s, s
}
var Ga = class {
        constructor() {
            this.items = []
        }
        enqueue(e) {
            this.items.push(e)
        }
        dequeue() {
            return this.items.length === 0 ? null : this.items.shift()
        }
        isEmpty() {
            return this.items.length === 0
        }
        size() {
            return this.items.length
        }
        clear() {
            this.items = []
        }
    },
    ut = {
        LOG: 0,
        INFO: 1,
        DEBUG: 2,
        WARN: 3,
        ERROR: 4,
        NONE: 5
    },
    Kr = "LOG",
    bn = "ERROR",
    Va = "RS SDK",
    Ha = "font-weight: bold; background: black; color: white;",
    Ya = "font-weight: normal;",
    Qa = class {
        constructor(e = Kr, t = "", r = console) {
            this.minLogLevel = ut[e], this.scope = t, this.logProvider = r
        }
        log(...e) {
            this.outputLog("LOG", e)
        }
        info(...e) {
            this.outputLog("INFO", e)
        }
        debug(...e) {
            this.outputLog("DEBUG", e)
        }
        warn(...e) {
            this.outputLog("WARN", e)
        }
        error(...e) {
            this.outputLog("ERROR", e)
        }
        outputLog(e, t) {
            this.minLogLevel <= ut[e] && this.logProvider[e.toLowerCase()] ? .(...this.formatLogData(t))
        }
        setScope(e) {
            this.scope = e || this.scope
        }
        setMinLogLevel(e) {
            this.minLogLevel = ut[e], w(this.minLogLevel) && (this.minLogLevel = ut[Kr])
        }
        formatLogData(e) {
            if (Array.isArray(e) && e.length > 0) {
                let t = `%c ${Va}`;
                this.scope && (t = `${t} - ${this.scope}`);
                const r = k(e[0]) ? e[0].trim() : "";
                t = `${t} %c ${r}`;
                const s = [t, Ha, Ya];
                return k(e[0]) || s.push(e[0]), s.push(...e.slice(1)), s
            }
            return e
        }
    },
    Ae = new Qa,
    ve = (function(e) {
        return e.HANDLEDEXCEPTION = "handledException", e.UNHANDLEDEXCEPTION = "unhandledException", e.UNHANDLEDREJECTION = "unhandledPromiseRejection", e
    })({}),
    tt = ["localStorage", "memoryStorage", "cookieStorage", "sessionStorage", "none"],
    za = "cookieStorage",
    jr = "Unable to process/parse source configuration response",
    Ka = "The source is disabled. Please enable the source in the dashboard to send events.",
    ja = "Failed to prepare data for the request.",
    Wa = "Failed to invoke plugin because the extension point name is missing.",
    Xa = "Failed to invoke plugin because the extension point name is invalid.",
    qa = e => `${e}${y}The "getSourceConfig" load API option must be a function that returns valid source configuration data.`,
    Ja = (e, t, r) => `${e}${y}The base URL "${r}" for ${t} is not valid.`,
    Za = (e, t, r) => `${e}${y}The consent manager "${t}" is not supported. Please choose one of the following supported consent managers: "${Object.keys(r)}".`,
    eo = (e, t) => `${e}${y}Ignoring a non-error: ${t}.`,
    Wr = "Failed to log breadcrumb",
    to = e => `${e}${y}Failed to handle the error.`,
    ro = e => `${e}${y}Plugin name is missing.`,
    so = (e, t) => `${e}${y}Plugin "${t}" already exists.`,
    no = (e, t) => `${e}${y}Plugin "${t}" not found.`,
    io = (e, t) => `${e}${y}Plugin "${t}" not found in plugins but found in byName. This indicates a bug in the plugin engine. Please report this issue to the development team.`,
    ao = (e, t, r) => `${e}${y}Plugin "${t}" could not be loaded because some of its dependencies "${r}" do not exist.`,
    oo = (e, t, r) => `${e}${y}Failed to invoke the "${t}" extension point of plugin "${r}".`,
    Xr = "Failed to fetch the source config",
    lo = (e, t) => `${e}${y}The write key "${t}" is invalid. It must be a non-empty string. Please check that the write key is correct and try again.`,
    co = (e, t) => `${e}${y}The data plane URL "${t}" is invalid. It must be a valid URL string. Please check that the data plane URL is correct and try again.`,
    Nn = e => `${e}${y}The provided callback parameter is not a function.`,
    uo = (e, t, r, s, n) => `${e} with status ${t} (${r}) for URL: ${s}. Response: ${n.trim()}`,
    ho = (e, t, r) => `${e} due to timeout or no connection (${t?t.type:""}) at the client side for URL: ${r}`,
    go = (e, t) => `${e} for URL: ${t}`,
    vo = e => `Failed to save the value for "${e}" to storage`,
    fo = e => `Failed to retrieve or parse data for "${e}" from storage`,
    po = (e, t) => `${e}${y}The server side cookies functionality is disabled as the provided data server URL, "${t}" is invalid.`,
    Eo = e => `The server responded with status ${e} while setting the cookies. As a fallback, the cookies will be set client side.`,
    mo = e => `The server failed to set the ${e} cookie. As a fallback, the cookies will be set client side.`,
    qr = "Failed to set/remove cookies via server. As a fallback, the cookies will be managed client side.",
    Ao = (e, t) => `The server did not set ${e.length} of the ${t} cookies sent in one request: ${e.join(", ")}. A fallback to set them client side was attempted. Check that the data service and any proxy preserve every "Set-Cookie" header, and that the cookie domain and SameSite/Secure attributes are valid.`,
    yo = (e, t) => `${e}${y}The storage type "${t}" is not supported. Please choose one of the following supported types: "${tt}". The default storage type will be used instead.`,
    _o = (e, t, r) => `${e}${y}The storage type "${r}" configured for the entry "${t}" is not supported. Please choose one of the following supported types: "${tt}". The default storage type will be used instead.`,
    Io = (e, t, r, s) => `${e}${y}The storage encryption version "${t}" is not supported. Please choose one of the following supported versions: "${Object.keys(r)}". The default version "${s}" will be used instead.`,
    So = (e, t, r) => `${e}${y}The storage data migration has been disabled because the configured storage encryption version (${t}) is not the latest (${r}). To enable storage data migration, please update the storage encryption version to the latest version.`,
    Ro = (e, t, r) => `${e}${y}The provided cookie domain (${t}) does not match the current webpage's domain (${r}). Hence, the cookies will be set client-side.`,
    To = (e, t, r) => `${e}${y}The data service host (${t}) cannot set cookies for the current webpage (${r}). Hence, the cookies will be set client-side instead of server-side.`,
    bo = (e, t, r, s) => `${e}${y}The "${t}" property defined under "${r}" is a reserved keyword. Please choose a different property name to avoid conflicts with reserved keywords (${s}).`,
    No = (e, t) => `${e}${y}The top-level custom context property "${t}" is reserved and was ignored.`,
    Oo = e => `${e}${y}Please make sure that the "context" property in the event API's "options" argument is a valid object literal with key-value pairs.`,
    pt = e => `${e}${y}Invalid custom context. Use a plain object without prototype pollution keys.`,
    Do = e => `${e}${y}The Beacon API is not supported by your browser. The events will be sent using XHR instead.`,
    Co = (e, t, r) => `${e}${y}The session timeout value "${t}" is not a number. The default timeout of ${r} ms will be used instead.`,
    Po = (e, t, r) => `${e}${y}The session cut off duration value "${t}" is not a number. The default cut off duration of ${r} ms will be used instead.`,
    Mo = (e, t, r) => `${e}${y}The session cut off duration value "${t}" ms is less than the session timeout value "${r}" ms. The cut off functionality will be disabled.`,
    Lo = e => `${e}${y}The session timeout value is 0, which disables the automatic session tracking feature. If you want to enable session tracking, please provide a positive integer value for the timeout.`,
    ko = (e, t, r) => `${e}${y}The session timeout value ${t} ms is less than the recommended minimum of ${r} ms. Please consider increasing the timeout value to ensure optimal performance and reliability.`,
    Uo = (e, t, r) => `${e}${y}The provided session ID (${t}) is either invalid, not a positive integer, or not at least "${r}" digits long. A new session ID will be auto-generated instead.`,
    wo = e => `${e}${y}The storage is either full or unavailable, so the data will not be persisted. Switching to in-memory storage.`,
    $o = (e, t, r, s) => `${e}${y}The storage type "${r}" is not available for entry "${t}". The SDK will initialize the entry with "${s}" storage type instead.`,
    Bo = e => `${e}${y}The callback threw an exception`,
    xo = (e, t) => `${e}${y}The provided source config URL "${t}" is invalid. Using the default source config URL instead.`,
    Fo = (e, t) => `Failed to load the polyfill script with ID "${e}" from URL ${t}.`,
    Go = (e, t, r) => `${e}${y}The pre-consent storage strategy "${t}" is not supported. Please choose one of the following supported strategies: "none, session, anonymousId". The default strategy "${r}" will be used instead.`,
    Vo = e => `${e}${y}The pre-consent storage strategy option is deprecated. Please enable "storage" in the pre-consent options and use the "storage" load API option instead.`,
    Ho = (e, t, r) => `${e}${y}The pre-consent events delivery type "${t}" is not supported. Please choose one of the following supported types: "immediate, buffer". The default type "${r}" will be used instead.`,
    Yo = (e, t) => `${e}${y}${t} plugin is deprecated. Please exclude it from the load API options.`,
    Qo = (e, t, r, s) => {
        const n = r.length === 1,
            i = n ? ` '${r[0]}' plugin was` : ` ['${r.join("', '")}'] plugins were`,
            a = `${e}${y}${t}, but${i} not configured to load.`;
        return s ? `${a} So, ${n?"the plugin":"those plugins"} will be loaded automatically.` : `${a} Ignore if this was intentional. Otherwise, consider adding ${n?"it":"them"} to the 'plugins' load API option.`
    },
    zo = (e, t) => `${e}${y}The provided polyfill URL "${t}" is invalid. The default polyfill URL will be used instead.`,
    Ko = e => `${e}${y}Page Unloaded event can only be tracked when the Beacon transport is active. Please enable "useBeacon" load API option.`,
    jo = (e, t) => `${e}${y}Ignoring unknown plugins: ${t.join(", ")}.`,
    Wo = (e, t) => `${e}${y}Failed to load the following unavailable local plugins: ${t.join(", ")}. Some features of the SDK may not work as expected. Make sure you are using the correct SDK bundle variant.`,
    Xo = (e, t) => `${e}${y}Cannot add custom integration for destination ID "${t}" after the SDK is loaded.`,
    On = {
        All: !0
    },
    Bt = "js-integrations",
    qo = "plugins",
    Jo = new RegExp("^(https?:\\/\\/)(((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|localhost|((25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]?)))(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*(\\?[;&a-zA-Z\\d%_.~+=-]*)?(\\#[-a-zA-Z\\d_]*)?$"),
    rt = "modern",
    xt = "https://cdn.rudderlabs.com",
    br = "v3",
    Dn = `${xt}/${br}/${rt}/${Bt}`,
    Zo = `${xt}/${br}/${rt}/${qo}`,
    Cn = "https://api.rudderstack.com",
    De = "v3",
    el = "xhr",
    rr = {
        iubenda: "IubendaConsentManager",
        oneTrust: "OneTrustConsentManager",
        ketch: "KetchConsentManager",
        custom: "CustomConsentManager"
    },
    Et = {
        [De]: "StorageEncryption",
        legacy: "StorageEncryptionLegacy"
    },
    tl = {
        [el]: "XhrQueue",
        beacon: "BeaconQueue"
    },
    rl = "rsaRequest",
    sl = "rsaMetrics",
    nl = "Custom Device Mode",
    il = v(b({
        configUrl: Cn,
        loadIntegration: !0,
        sessions: {
            autoTrack: !0,
            timeout: er,
            cutOff: {
                enabled: !1
            }
        },
        sameSiteCookie: "Lax",
        polyfillIfRequired: !0,
        integrations: On,
        useBeacon: !1,
        beaconQueueOptions: {},
        destinationsQueueOptions: {},
        queueOptions: {},
        lockIntegrationsVersion: !0,
        lockPluginsVersion: !0,
        uaChTrackLevel: "none",
        plugins: [],
        useGlobalIntegrationsConfigInEvents: !1,
        bufferDataPlaneEventsUntilReady: !1,
        dataPlaneEventsBufferTimeout: Ta,
        storage: {
            encryption: {
                version: De
            },
            migrate: !0,
            cookie: {}
        },
        sendAdblockPage: !1,
        sameDomainCookiesOnly: !1,
        secureCookie: !1,
        sendAdblockPageOptions: {},
        useServerSideCookies: !1
    })),
    P = _r({
        userId: "",
        userTraits: {},
        anonymousId: "",
        groupId: "",
        groupTraits: {},
        initialReferrer: "",
        initialReferringDomain: "",
        sessionInfo: {},
        authToken: null
    }),
    mt = _r({
        entries: {
            userId: !0,
            userTraits: !0,
            groupId: !0,
            groupTraits: !0,
            sessionInfo: !0,
            authToken: !0,
            anonymousId: !1,
            initialReferrer: !1,
            initialReferringDomain: !1
        }
    }),
    al = 10,
    ol = {
        userId: v(P.userId),
        userTraits: v(P.userTraits),
        anonymousId: v(P.anonymousId),
        groupId: v(P.groupId),
        groupTraits: v(P.groupTraits),
        initialReferrer: v(P.initialReferrer),
        initialReferringDomain: v(P.initialReferringDomain),
        sessionInfo: v(P.sessionInfo),
        authToken: v(P.authToken)
    },
    ll = {
        isOnline: v(!0),
        storage: {
            isLocalStorageAvailable: v(!1),
            isCookieStorageAvailable: v(!1),
            isSessionStorageAvailable: v(!1)
        },
        isBeaconAvailable: v(!1),
        isLegacyDOM: v(!1),
        isUaCHAvailable: v(!1),
        isCryptoAvailable: v(!1),
        isAdBlockerDetectionInProgress: v(!1),
        isAdBlocked: v(void 0),
        cspBlockedURLs: v([])
    },
    cl = {
        isErrorReportingEnabled: v(!1),
        isMetricsReportingEnabled: v(!1),
        breadcrumbs: v([])
    },
    ul = v(void 0),
    dl = {
        activeDataplaneUrl: v(void 0),
        integrationsCDNPath: v(Dn),
        pluginsCDNPath: v(Zo),
        sourceConfigUrl: v(void 0),
        status: v(void 0),
        initialized: v(!1),
        logLevel: v(bn),
        loaded: v(!1),
        readyCallbacks: v([]),
        writeKey: v(void 0),
        dataPlaneUrl: v(void 0),
        safeAnalyticsInstance: v(void 0)
    },
    hl = {
        enabled: v(!1),
        initialized: v(!1),
        data: v({}),
        activeConsentManagerPluginName: v(void 0),
        preConsent: v({
            enabled: !1
        }),
        postConsent: v({}),
        resolutionStrategy: v("and"),
        provider: v(void 0),
        metadata: v(void 0)
    },
    gl = {
        retries: v(0),
        dropped: v(0),
        sent: v(0),
        queued: v(0),
        triggered: v(0),
        metricsServiceUrl: v(void 0)
    },
    vl = () => pa,
    fl = {
        app: v({
            name: Fr,
            namespace: fa,
            version: Nt,
            installType: En
        }),
        traits: v(null),
        library: v({
            name: Fr,
            version: Nt,
            snippetVersion: globalThis.RudderSnippetVersion,
            variant: vl()
        }),
        userAgent: v(null),
        device: v(null),
        network: v(null),
        os: v({
            name: "",
            version: ""
        }),
        locale: v(null),
        screen: v({
            density: 0,
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0
        }),
        "ua-ch": v(void 0),
        timezone: v(void 0)
    },
    pl = v({}),
    El = {
        configuredDestinations: v([]),
        activeDestinations: v([]),
        loadOnlyIntegrations: v({}),
        failedDestinations: v([]),
        loadIntegration: v(!0),
        initializedDestinations: v([]),
        clientDestinationsReady: v(!1),
        integrationsConfig: v({})
    },
    o = { ...b({
            capabilities: ll,
            consents: hl,
            context: fl,
            customContext: pl,
            eventBuffer: {
                toBeProcessedArray: v([]),
                readyCallbacksArray: v([])
            },
            lifecycle: dl,
            loadOptions: il,
            metrics: gl,
            nativeDestinations: El,
            plugins: {
                ready: v(!1),
                loadedPlugins: v([]),
                failedPlugins: v([]),
                pluginsToLoadFromConfig: v([]),
                activePlugins: v([]),
                totalPluginsToLoad: v(0)
            },
            reporting: cl,
            session: ol,
            source: ul,
            storage: {
                encryptionPluginName: v(void 0),
                migrate: v(!1),
                cookie: v(void 0),
                entries: v({}),
                trulyAnonymousTracking: v(!1)
            },
            serverCookies: {
                isEnabledServerSideCookies: v(!1),
                dataServiceUrl: v(void 0),
                isCollapsedBatchErrorLogged: v(!1)
            },
            dataPlaneEvents: {
                eventsQueuePluginName: v(void 0),
                deliveryEnabled: v(!0)
            },
            autoTrack: {
                enabled: v(!1),
                pageLifecycle: {
                    enabled: v(!1),
                    pageViewId: v(void 0),
                    pageLoadedTimestamp: v(void 0)
                }
            }
        })
    },
    Pn = /^\s*at /,
    ml = /^(eval@)?(\[native code])?$/,
    Al = /(.+?)(?::(\d+))?(?::(\d+))?$/;

function Mn(e) {
    if (!e ? .includes(":")) return [e || void 0, void 0, void 0];
    const t = e.startsWith("(") && e.endsWith(")") ? e.slice(1, -1) : e,
        r = Al.exec(t);
    return r ? [r[1] || void 0, r[2] === void 0 ? void 0 : Number(r[2]), r[3] === void 0 ? void 0 : Number(r[3])] : [void 0, void 0, void 0]
}

function yl(e) {
    if (!Pn.test(e)) return null;
    e.includes("(eval ") && (e = e.replaceAll("eval code", "eval").replaceAll(/(\(eval at [^()]*)|(,.*$)/g, ""));
    const t = e.replace(/^\s+/, "").replaceAll("(eval code", "(").replace(/^.*?\s+/, ""),
        r = / (\(.+\)$)/.exec(t),
        s = r ? t.replace(r[0], "") : t,
        [n, i, a] = Mn(r ? r[1] : t);
    return {
        functionName: r && s || void 0,
        fileName: n === "eval" || n === "<anonymous>" ? void 0 : n,
        lineNumber: i,
        columnNumber: a
    }
}

function _l(e) {
    if (ml.test(e)) return null;
    if (e.includes(" > eval") && (e = e.replaceAll(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !e.includes("@") && !e.includes(":")) return {
        functionName: e,
        fileName: void 0,
        lineNumber: void 0,
        columnNumber: void 0
    };
    const t = e.lastIndexOf("@"),
        r = t > 0 ? e.slice(0, t) : void 0,
        [s, n, i] = Mn(e.slice(t + 1));
    return {
        functionName: r,
        fileName: s,
        lineNumber: n,
        columnNumber: i
    }
}

function Il(e) {
    if (!e.stack) throw new Error("Cannot parse given Error object");
    const t = e.stack.split(`
`);
    return t.some(r => Pn.test(r)) ? t.map(yl).filter(r => r !== null) : t.map(_l).filter(r => r !== null)
}
var Ln = "global code",
    Sl = e => N(e) && /^global code$/i.test(e) ? Ln : e,
    Rl = e => {
        const t = {
            file: e.fileName,
            method: Sl(e.functionName),
            lineNumber: e.lineNumber,
            columnNumber: e.columnNumber
        };
        return t.lineNumber && t.lineNumber > -1 && !t.file && !t.method && (t.file = Ln), t
    },
    Jr = e => k(e) ? e : "";

function Zr(e, t, r, s) {
    return {
        errorClass: Jr(e),
        message: `${r}${Jr(t)}`,
        type: "browserjs",
        stacktrace: s.reduce((n, i) => {
            const a = Rl(i);
            try {
                return JSON.stringify(a) === "{}" ? n : n.concat(a)
            } catch {
                return n
            }
        }, [])
    }
}
var kn = (e, t) => {
        let r;
        return yr(e) && k(Ut(e)) ? r = e : (t.warn(eo(je, H(e))), r = void 0), r
    },
    Tl = (e, t) => {
        try {
            const r = Il(e);
            return Zr(e.name, e.message, t, r)
        } catch {
            return Zr(e.name, e.message, t, [])
        }
    },
    es = (e, t) => {
        try {
            return JSON.parse(e || "")
        } catch (r) {
            t(Rr(r, "Failed to parse response data"))
        }
    },
    At = "The request failed",
    bl = [/Failed to fetch dynamically imported module: .*/],
    Nl = [/Unable to load \(.*\) the script with the id .*/, /A timeout of \d+ ms occurred while trying to load the script with id .*/],
    Ol = [new RegExp(`${At}.*`), /A script with the id .* is already loaded\./],
    Dl = [...bl, ...Nl],
    Re = "integrations",
    Cl = "sdk",
    Pl = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8"
        },
        method: "GET"
    },
    ts = (e, t, r) => {
        const s = x(Pl, t || {});
        return r && (s.headers = x(s.headers, {
            Authorization: r
        })), s.url = e, s
    },
    rs = (e, t = Sa, r) => new Promise((s, n) => {
        let i;
        if (e.sendRawData === !0) i = e.data;
        else if (i = H(e.data, !1, [], r), ee(i)) {
            n({
                error: new Error(ja),
                undefined: void 0,
                options: e
            });
            return
        }
        const a = new XMLHttpRequest,
            l = u => {
                n({
                    error: new Error(uo(At, a.status, a.statusText, e.url, a.responseText)),
                    xhr: a,
                    options: e
                })
            },
            c = u => {
                n({
                    error: new Error(ho(At, u, e.url)),
                    xhr: a,
                    options: e,
                    ...u ? .type === "timeout" ? {
                        timedOut: !0
                    } : {}
                })
            };
        a.ontimeout = c, a.onerror = c, a.onload = () => {
            a.status >= 200 && a.status < 400 ? s({
                response: a.responseText,
                xhr: a,
                options: e
            }) : l()
        }, a.open(e.method, e.url, !0), e.withCredentials === !0 && (a.withCredentials = !0), a.timeout = t, Object.keys(e.headers).forEach(u => {
            e.headers[u] && a.setRequestHeader(u, e.headers[u])
        });
        try {
            a.send(i)
        } catch (u) {
            n({
                error: Rr(u, go(At, e.url)),
                xhr: a,
                options: e
            })
        }
    }),
    Ml = class {
        constructor(e) {
            this.logger = e, this.onError = this.onError.bind(this)
        }
        init(e) {
            this.errorHandler = e
        }
        async getData(e) {
            const {
                url: t,
                options: r,
                timeout: s,
                isRawResponse: n
            } = e;
            try {
                const i = await rs(ts(t, r, this.basicAuthHeader), s, this.logger);
                return {
                    data: n ? i.response : es(i.response, this.onError),
                    details: i
                }
            } catch (i) {
                return {
                    data: void 0,
                    details: i
                }
            }
        }
        getAsyncData(e) {
            const {
                callback: t,
                url: r,
                options: s,
                timeout: n,
                isRawResponse: i
            } = e, a = !_(t);
            rs(ts(r, s, this.basicAuthHeader), n, this.logger).then(l => {
                a || t(i ? l.response : es(l.response, this.onError), l)
            }, l => {
                a || t(void 0, l)
            }).catch(this.onError)
        }
        onError(e, t) {
            this.errorHandler ? .onError({
                error: e,
                context: qi,
                groupingHash: t
            })
        }
        setAuthHeader(e, t = !1) {
            const r = t ? e : Ir(`${e}:`);
            this.basicAuthHeader = `Basic ${r}`
        }
        resetAuthHeader() {
            this.basicAuthHeader = void 0
        }
    },
    Un = new Ml(Ae),
    Ll = "1",
    kl = () => ["rsa"],
    Ul = ["www.test-host.com", "localhost", "127.0.0.1", "[::1]"],
    wl = ["userId", "userTraits", "groupId", "groupTraits", "anonymousId", "config", "integration", "eventBuffer", "customContext", "traits", "authToken"],
    $l = "RudderStack JavaScript SDK",
    Bl = "git+https://github.com/rudderlabs/rudder-sdk-js.git",
    xl = "js",
    wn = e => {
        o.capabilities.isAdBlockerDetectionInProgress.value = !0;
        try {
            const t = new URL(o.lifecycle.sourceConfigUrl.value),
                r = `${t.origin}${t.pathname}?view=ad`;
            e.getAsyncData({
                url: r,
                options: {
                    method: "HEAD",
                    headers: {
                        "Content-Type": void 0
                    }
                },
                isRawResponse: !0,
                callback: (s, n) => {
                    o.capabilities.isAdBlockerDetectionInProgress.value = !1, o.capabilities.isAdBlocked.value = n ? .error !== void 0 || n ? .xhr ? .responseURL !== r
                }
            })
        } catch (t) {
            throw o.capabilities.isAdBlockerDetectionInProgress.value = !1, t
        }
    },
    Fl = (e, t) => {
        switch (t) {
            case ve.UNHANDLEDEXCEPTION:
                {
                    const {
                        error: r
                    } = e;
                    return r || e
                }
            case ve.UNHANDLEDREJECTION:
                return e.reason;
            case ve.HANDLEDEXCEPTION:
            default:
                return e
        }
    },
    Gl = e => ({
        type: "manual",
        name: e,
        timestamp: new Date,
        metaData: {}
    }),
    Vl = (e = () => window.location.hostname) => {
        const t = e();
        return !t || t && Ul.includes(t) ? "development" : "production"
    },
    Hl = e => {
        const t = H(e, !1, wl);
        return t !== null ? JSON.parse(t) : {}
    },
    Yl = () => globalThis.location.href.split("?")[0],
    Ql = (e, t, r, s) => ({
        id: `${e.value?.id??r.writeKey.value}..${t.sessionInfo.value.id??"NA"}..${s.pageLifecycle.pageViewId.value??"NA"}`,
        name: e.value ? .name ? ? "NA"
    }),
    zl = (e, t) => ({
        locale: e.value ? ? "NA",
        userAgent: t.value ? ? "NA",
        time: new Date
    }),
    Kl = (e, t, r, s) => {
        const {
            context: n,
            lifecycle: i,
            session: a,
            source: l,
            reporting: c,
            autoTrack: u
        } = r, {
            app: d,
            locale: f,
            userAgent: I,
            timezone: h,
            screen: g,
            library: T
        } = n;
        return {
            payloadVersion: "5",
            notifier: {
                name: $l,
                version: d.value.version,
                url: Bl
            },
            events: [{
                exceptions: [b(e)],
                severity: t.severity,
                unhandled: t.unhandled,
                severityReason: t.severityReason,
                app: {
                    version: d.value.version,
                    releaseStage: Vl(),
                    type: d.value.installType
                },
                device: zl(f, I),
                request: {
                    url: Yl(),
                    clientIp: "[NOT COLLECTED]"
                },
                breadcrumbs: b(c.breadcrumbs.value),
                context: e.message,
                groupingHash: s,
                metaData: {
                    app: {
                        snippetVersion: T.value.snippetVersion
                    },
                    device: { ...g.value,
                        timezone: h.value
                    },
                    ...Hl(r)
                },
                user: Ql(l, a, i, u)
            }]
        }
    },
    jl = (e, t, r) => {
        if (w(e.capabilities.isAdBlocked.value)) {
            e.capabilities.isAdBlockerDetectionInProgress.value === !1 && wn(t);
            const s = de(() => {
                N(e.capabilities.isAdBlocked.value) && (r(e.capabilities.isAdBlocked.value === !1), s())
            })
        } else r(e.capabilities.isAdBlocked.value === !1)
    },
    Wl = (e, t, r) => {
        const s = e.message;
        return new Promise(n => {
            if (Dl.some(i => i.test(s))) {
                const i = /https?:\/\/[^\s"'(),;<>[\]{}]+/.exec(s) ? .[0];
                k(i) ? i.startsWith(xt) ? t.capabilities.cspBlockedURLs.value.includes(i) ? n(!1) : jl(t, r, n) : n(!1) : n(!0)
            } else n(!Ol.some(i => i.test(s)))
        })
    },
    $n = e => {
        if (e) return e.split("/").at(-2)
    },
    Bn = e => {
        const t = e.stacktrace[0] ? .file;
        if (!(!t || typeof t != "string")) return t
    },
    Xl = e => {
        const t = Bn(e);
        if (!t) return !1;
        const r = t.substring(t.lastIndexOf("/") + 1);
        return $n(t) === Bt || kl().some(s => r.startsWith(s) && r.endsWith(".js"))
    },
    ql = (e, t) => {
        if (t) return t;
        const r = Bn(e);
        return $n(r) === Bt ? Re : Cl
    },
    Jl = (e, t, r) => {
        const s = {
            version: Ll,
            message_id: ce(),
            source: {
                name: xl,
                sdk_version: t.context.app.value.version,
                write_key: t.lifecycle.writeKey.value,
                install_type: t.context.app.value.installType,
                category: r
            },
            errors: e
        };
        return H(s)
    },
    Zl = (e, t, r) => {
        let s;
        if (!N(e)) s = t;
        else if (k(e)) s = e;
        else {
            const n = kn(e, r);
            N(n) ? s = n.message : s = t
        }
        return s
    },
    ec = class {
        initialized = !1;
        constructor(e, t) {
            this.httpClient = e, this.logger = t
        }
        init() {
            this.initialized || (this.attachErrorListeners(), this.initialized = !0)
        }
        attachErrorListeners() {
            globalThis.addEventListener("error", e => {
                this.onError({
                    error: e,
                    context: je,
                    errorType: ve.UNHANDLEDEXCEPTION
                })
            }), globalThis.addEventListener("unhandledrejection", e => {
                this.onError({
                    error: e,
                    context: je,
                    errorType: ve.UNHANDLEDREJECTION
                })
            }), document.addEventListener("securitypolicyviolation", e => {
                const t = k(e.blockedURI) ? e.blockedURI : "";
                e.disposition === "enforce" && t.startsWith(xt) && !o.capabilities.cspBlockedURLs.value.includes(t) && (o.capabilities.cspBlockedURLs.value = [...o.capabilities.cspBlockedURLs.value, t])
            })
        }
        async onError(e) {
            try {
                const {
                    error: t,
                    context: r,
                    customMessage: s,
                    groupingHash: n,
                    category: i
                } = e, a = e.errorType ? ? ve.HANDLEDEXCEPTION, l = Fl(t, a), c = kn(l, this.logger);
                if (w(c)) return;
                const u = s ? `${s} - ` : "",
                    d = `${r}${y}${u}`,
                    f = Tl(c, d),
                    I = Ut(c).includes(pn);
                if (!I && !Xl(f) && a !== ve.HANDLEDEXCEPTION) return;
                if (o.reporting.isErrorReportingEnabled.value && await Wl(f, o, this.httpClient)) {
                    const h = {
                            severity: "error",
                            unhandled: a !== ve.HANDLEDEXCEPTION,
                            severityReason: {
                                type: a
                            }
                        },
                        g = Zl(n, f.message, this.logger),
                        T = Kl(f, h, o, g),
                        R = ql(f, i);
                    this.httpClient.getAsyncData({
                        url: o.metrics.metricsServiceUrl.value,
                        options: {
                            method: "POST",
                            data: Jl(T, o, R),
                            sendRawData: !0
                        },
                        isRawResponse: !0
                    })
                }(a === ve.HANDLEDEXCEPTION || I) && this.logger.error(f.message)
            } catch (t) {
                this.logger.error(to(je), t)
            }
        }
        leaveBreadcrumb(e) {
            try {
                o.reporting.breadcrumbs.value = [...o.reporting.breadcrumbs.value, Gl(e)]
            } catch (t) {
                this.onError({
                    error: t,
                    context: je,
                    customMessage: Wr,
                    groupingHash: Wr
                })
            }
        }
    },
    xn = new ec(Un, Ae),
    tc = class {
        plugins = [];
        byName = {};
        cache = {};
        config = {
            throws: !0
        };
        constructor(e, t = {}) {
            this.config = {
                throws: !0,
                ...t
            }, this.logger = e
        }
        register(e, t) {
            if (!e.name) {
                const s = ro(Le);
                if (this.config.throws) throw new Error(s);
                this.logger.error(s, e);
                return
            }
            if (this.byName[e.name]) {
                const s = so(Le, e.name);
                if (this.config.throws) throw new Error(s);
                this.logger.error(s);
                return
            }
            this.cache = {}, this.plugins = this.plugins.slice();
            let r = this.plugins.length;
            this.plugins.forEach((s, n) => {
                s.deps ? .includes(e.name) && (r = Math.min(r, n))
            }), this.plugins.splice(r, 0, e), this.byName[e.name] = e, _(e.initialize) && e.initialize(t)
        }
        unregister(e) {
            const t = this.byName[e];
            if (!t) {
                const s = no(Le, e);
                if (this.config.throws) throw new Error(s);
                this.logger.error(s);
                return
            }
            const r = this.plugins.indexOf(t);
            if (r === -1) {
                const s = io(Le, e);
                if (this.config.throws) throw new Error(s);
                this.logger.error(s);
                return
            }
            this.cache = {}, delete this.byName[e], this.plugins = this.plugins.slice(), this.plugins.splice(r, 1)
        }
        getPlugin(e) {
            return this.byName[e]
        }
        getPlugins(e) {
            const t = e ? ? ".";
            return this.cache[t] || (this.cache[t] = this.plugins.filter(r => {
                if (r.deps ? .some(s => !this.byName[s])) {
                    const s = r.deps.filter(n => !this.byName[n]);
                    return this.logger.error(ao(Le, r.name, s)), !1
                }
                return t === "." ? !0 : Gi(r, t)
            })), this.cache[t]
        }
        processRawPlugins(e) {
            e(this.plugins), this.cache = {}
        }
        invoke(e, t = !0, ...r) {
            let s = e;
            if (!s) throw new Error(Wa);
            const n = s.startsWith("!"),
                i = this.config.throws ? ? s.endsWith("!");
            if (s = s.replace(/(^!|!$)/g, ""), !s) throw new Error(Xa);
            const a = s.split(".");
            a.pop();
            const l = a.join(".");
            return (t ? this.getPlugins(s) : [this.getPlugins(s)[0]]).map(c => {
                const u = qt(c, s);
                if (!_(u) || n) return u;
                try {
                    return u.apply(qt(c, l), r)
                } catch (d) {
                    if (i) throw d;
                    this.logger.error(oo(Le, s, c.name), d)
                }
                return null
            })
        }
        invokeSingle(e, ...t) {
            return this.invoke(e, !1, ...t)[0]
        }
        invokeMultiple(e, ...t) {
            return this.invoke(e, !0, ...t)
        }
    },
    rc = new tc(Ae, {
        throws: !0
    }),
    sc = e => e.config.connectionMode !== "cloud" || e.config.useNativeSDKToSend === !0 || e.config.useNativeSDK === !0,
    Fn = e => e.config.connectionMode === "hybrid" || e.config.useNativeSDKToSend === !0,
    ss = e => e.filter(sc),
    nc = (e, t) => `${e.replaceAll(" ","-")}___${t}`,
    ic = ["BeaconQueue", "CustomConsentManager", "DeviceModeDestinations", "DeviceModeTransformation", "ExternalAnonymousId", "GoogleLinker", "IubendaConsentManager", "KetchConsentManager", "NativeDestinationQueue", "OneTrustConsentManager", "StorageEncryption", "StorageEncryptionLegacy", "StorageMigrator", "XhrQueue"],
    ac = ["Bugsnag", "ErrorReporting"],
    V = "cookieStorage",
    F = "localStorage",
    Z = "sessionStorage",
    re = "memoryStorage",
    Ie = "none",
    oc = "test_rudder_cookie",
    lc = "test_rudder_ls",
    cc = "test_rudder_ss",
    Nr = e => e.replace(/\/{2,}/g, "/"),
    Fe = e => {
        if (!k(e)) return !1;
        try {
            return _(globalThis.URL) && new URL(e), Jo.test(e)
        } catch {
            return !1
        }
    },
    Gn = e => e === 429 ? !0 : !(e >= 400 && e < 500),
    ns = (e, t) => {
        try {
            return encodeURIComponent(e)
        } catch (r) {
            t ? .error(ca, r);
            return
        }
    },
    is = e => {
        try {
            return decodeURIComponent(e)
        } catch {
            return
        }
    },
    uc = e => {
        const t = {},
            r = e.split(/\s*;\s*/);
        let s;
        return r[0] && r.forEach(n => {
            s = n.split("=");
            const i = s[0] ? is(s[0]) : void 0;
            i && (t[i] = s[1] ? is(s[1]) : void 0)
        }), t
    },
    dc = (e, t, r, s) => {
        const n = { ...r || {}
        };
        let i = `${ns(e,s)}=${ns(t,s)}`;
        ee(t) && (n.maxage = -1), n.maxage && (n.expires = new Date(+new Date + n.maxage)), n.path && (i += `; path=${n.path}`), n.domain && (i += `; domain=${n.domain}`), n.expires && (i += `; expires=${n.expires.toUTCString()}`), n.samesite && (i += `; samesite=${n.samesite}`), n.secure && (i += "; secure"), globalThis.document.cookie = i
    },
    sr = () => {
        const e = globalThis.document.cookie;
        return uc(e)
    },
    hc = e => sr()[e],
    pe = function(e, t, r, s) {
        switch (arguments.length) {
            case 4:
            case 3:
            case 2:
                return dc(e, t, r, s);
            case 1:
                return e ? hc(e) : sr();
            default:
                return sr()
        }
    },
    ke = {
        userId: "rl_user_id",
        userTraits: "rl_trait",
        anonymousId: "rl_anonymous_id",
        groupId: "rl_group_id",
        groupTraits: "rl_group_trait",
        initialReferrer: "rl_page_init_referrer",
        initialReferringDomain: "rl_page_init_referring_domain",
        sessionInfo: "rl_session",
        authToken: "rl_auth_token"
    },
    Vn = "RS_ENC_v3_",
    gc = e => `${Vn}${Ir(e)}`,
    nr = e => e ? .startsWith(Vn) ? ln(e.substring(10)) : e,
    as = 32768,
    vc = "client-network",
    fc = "client-timeout",
    ir = vc,
    Hn = e => {
        const t = ["QuotaExceededError", "NS_ERROR_DOM_QUOTA_REACHED"],
            r = [22, 1014];
        return e instanceof DOMException ? t.includes(e.name) || r.includes(e.code) : !1
    },
    Se = (e = F, t, r) => {
        let s, n;
        const i = ua(Jt, e);
        let a = "unavailable",
            l = !0,
            c;
        try {
            switch (e) {
                case re:
                    return !0;
                case V:
                    s = t, n = oc;
                    break;
                case F:
                    s = t ? ? globalThis.localStorage, n = lc;
                    break;
                case Z:
                    s = t ? ? globalThis.sessionStorage, n = cc;
                    break;
                default:
                    return !1
            }
            if (s && (s.setItem(n, "true"), s.getItem(n))) return s.removeItem(n), !0;
            l = !1
        } catch (u) {
            l = !1, c = u, Hn(u) && (a = "full")
        }
        return l || r ? .warn(`${i}${a}.`, c), !1
    },
    pc = (e, t, r) => `${e}${y}The size of the event payload (${t} bytes) exceeds the maximum limit of ${r} bytes. Events with large payloads may be dropped in the future. Please review your instrumentation to ensure that event payloads are within the size limit.`,
    Ec = e => `${e}${y}Failed to validate event payload size. Please make sure that the event payload is within the size limit and is a valid JSON object.`,
    os = "QueueUtilities",
    Yn = (e, t) => H(e, !0, void 0, t),
    mc = (e, t) => H(e, !0, void 0, t),
    Qn = (e, t) => {
        const r = Yn(e, t);
        if (r) {
            const s = r.length;
            s > as && t ? .warn(pc(os, s, as))
        } else t ? .warn(Ec(os))
    },
    ar = (e, t) => {
        const r = b(e);
        return r.sentAt = t, r
    },
    zn = e => Se(F, void 0, e) ? F : Se(Z, void 0, e) ? Z : re,
    O = {
        IN_PROGRESS: "inProgress",
        QUEUE: "queue",
        RECLAIM_START: "reclaimStart",
        RECLAIM_END: "reclaimEnd",
        ACK: "ack",
        BATCH_QUEUE: "batchQueue"
    },
    Ac = e => `${e}${y}Sending events to data plane.`,
    yc = e => `${e}${y}Failed to convert events batch object to string.`,
    _c = e => `${e}${y}Failed to convert events batch object to Blob.`,
    ls = (e, t) => `${e}${y}${Kn(t)}`,
    Kn = e => `Failed to send events batch data to the browser's beacon queue for URL ${e}.`,
    Ic = 10,
    Sc = 6e5,
    Rc = 65536,
    Tc = {
        maxItems: Ic,
        flushQueueInterval: Sc
    },
    bc = "v1",
    Nc = "rudder_beacon",
    Ue = "BeaconQueuePlugin",
    cs = (e, t, r) => {
        const s = {
            batch: e,
            sentAt: t
        };
        try {
            const n = H(s, !0),
                i = {
                    type: "text/plain"
                };
            if (n) return new Blob([n], i);
            r ? .error(yc(Ue))
        } catch (n) {
            r ? .error(_c(Ue), n)
        }
    },
    Oc = e => x(Tc, e),
    Dc = (e, t) => {
        const r = new URL(e);
        return new URL(Nr([r.pathname, "/", "beacon", "/", bc, "/", `batch?writeKey=${t}`].join("")), r).href
    },
    fe = (function(e) {
        return e[e.ASAP = 1] = "ASAP", e[e.RESCHEDULE = 2] = "RESCHEDULE", e[e.ABANDON = 3] = "ABANDON", e
    })({}),
    jn = 2,
    Cc = {
        setTimeout(e, t) {
            return globalThis.setTimeout(e, t)
        },
        clearTimeout(e) {
            return globalThis.clearTimeout(e)
        },
        Date: globalThis.Date,
        clockLateFactor: jn
    },
    Pc = class {
        constructor() {
            this.tasks = {}, this.nextId = 1, this.clock = Cc
        }
        now() {
            return +new this.clock.Date
        }
        run(e, t, r) {
            this.nextId === Number.MAX_SAFE_INTEGER && (this.nextId = 1);
            const s = (this.nextId++).toString();
            return this.tasks[s] = this.clock.setTimeout(this.handle(s, e, t, r || fe.ASAP), t), s
        }
        handle(e, t, r, s) {
            const n = this.now();
            return () => {
                delete this.tasks[e];
                const i = n + r * (this.clock.clockLateFactor || jn),
                    a = this.now();
                if (s >= fe.RESCHEDULE && i < a) {
                    s === fe.RESCHEDULE && this.run(t, r, s);
                    return
                }
                return t()
            }
        }
        cancel(e) {
            this.tasks[e] && (this.clock.clearTimeout(this.tasks[e]), delete this.tasks[e])
        }
        cancelAll() {
            Object.values(this.tasks).forEach(this.clock.clearTimeout), this.tasks = {}
        }
    },
    Mc = (e, t) => `${e}${y}An unknown error occurred while processing the queue item. ${t}`,
    Lc = (e, t, r) => `${e}${y}Failed to remove local storage entry "${t}" (attempt: ${r}.`,
    kc = (e, t) => `${e}${y}Another queue named "${t}" is already running. Queues sharing a name reclaim each other's items.`,
    Uc = 1e3,
    wc = 3e4,
    $c = 2,
    Bc = 0,
    xc = 1 / 0,
    Fc = 1 / 0,
    Gc = 1e3,
    Vc = 3e3,
    Hc = 1e4,
    Yc = 500,
    us = 1,
    Qc = 10,
    ds = 524288,
    zc = 100,
    Kc = 6e4,
    dt = "Batch",
    ht = "Single",
    hs = (e, t) => e.time - t.time,
    Qt = "RetryQueue",
    gt = new Map,
    Ft = class {
        constructor(e, t, r, s, n = F, i, a) {
            this.storeManager = s, this.logger = i, this.name = e, this.id = ce(), this.processQueueCb = r, this.batchSizeCalcCb = a, this.maxItems = t.maxItems || Fc, this.maxAttempts = t.maxAttempts || xc, this.batch = {
                enabled: !1
            }, this.configureBatchMode(t), this.backoff = {
                minRetryDelay: t.minRetryDelay || Uc,
                maxRetryDelay: t.maxRetryDelay || wc,
                factor: t.backoffFactor || $c,
                jitter: t.backoffJitter || Bc
            };
            let l = Math.max(t.timerScaleFactor ? ? us, us);
            l = Math.min(l, Qc), this.timeouts = {
                ackTimer: Math.round(l * Gc),
                reclaimTimer: Math.round(l * Vc),
                reclaimTimeout: Math.round(l * Hc),
                reclaimWait: Math.round(l * Yc)
            }, this.schedule = new Pc, this.processId = "0", this.store = this.storeManager.setStore({
                id: this.id,
                name: this.name,
                validKeys: O,
                type: n,
                errorHandler: this.storeManager.errorHandler,
                logger: this.storeManager.logger
            }), this.setDefaultQueueEntries(), this.ack = this.ack.bind(this), this.checkReclaim = this.checkReclaim.bind(this), this.processHead = this.processHead.bind(this), this.flushBatch = this.flushBatch.bind(this), this.isPageAccessible = !0, this.flushBatchOnPageLeave(), this.scheduleTimeoutActive = !1
        }
        setDefaultQueueEntries() {
            this.setStorageEntry(O.IN_PROGRESS, {}), this.setStorageEntry(O.QUEUE, []), this.setStorageEntry(O.BATCH_QUEUE, [])
        }
        configureBatchMode(e) {
            if (this.batchingInProgress = !1, !M(e.batch)) return;
            const t = e.batch;
            this.batch.enabled = t.enabled === !0, this.batch.enabled && (this.batch.maxSize = Math.min(t.maxSize ? ? ds, ds), this.batch.maxItems = t.maxItems ? ? zc, this.batch.flushInterval = t.flushInterval ? ? Kc)
        }
        flushBatchOnPageLeave() {
            this.batch.enabled && hn(this.flushBatch)
        }
        getStorageEntry(e) {
            return this.store.get(e)
        }
        setStorageEntry(e, t) {
            G(t) ? this.store.remove(e) : this.store.set(e, t)
        }
        stop() {
            this.schedule.cancelAll(), this.scheduleTimeoutActive = !1;
            const e = gt.get(this.name);
            e ? .delete(this.id), e ? .size === 0 && gt.delete(this.name)
        }
        start() {
            this.scheduleTimeoutActive && this.stop();
            const e = gt.get(this.name) ? ? new Set;
            e.size > 0 && !e.has(this.id) && this.logger ? .error(kc(Qt, this.name)), e.add(this.id), gt.set(this.name, e), this.scheduleTimeoutActive = !0, this.scheduleFlushBatch(), this.ack(), this.checkReclaim(), this.processHead()
        }
        scheduleFlushBatch() {
            this.batch.enabled && this.batch ? .flushInterval && (this.flushBatchTaskId && this.schedule.cancel(this.flushBatchTaskId), this.flushBatchTaskId = this.schedule.run(this.flushBatch, this.batch.flushInterval, fe.ASAP))
        }
        flushBatch(e = !0) {
            if (!this.batchingInProgress) {
                this.isPageAccessible = e, this.batchingInProgress = !0;
                let t = this.getStorageEntry(O.BATCH_QUEUE) ? ? [];
                if (t.length > 0) {
                    t = t.slice(-t.length);
                    const r = this.genQueueItem(t.map(s => s.item), dt);
                    this.setStorageEntry(O.BATCH_QUEUE, []), this.pushToMainQueue(r)
                }
                this.batchingInProgress = !1, this.scheduleFlushBatch()
            }
        }
        shouldRetry(e, t) {
            return t <= this.maxAttempts
        }
        getDelay(e) {
            let t = this.backoff.minRetryDelay * this.backoff.factor ** e;
            if (this.backoff.jitter) {
                const r = Math.random(),
                    s = Math.floor(r * this.backoff.jitter * t);
                Math.floor(r * 10) < 5 ? t -= s : t += s
            }
            return Number(Math.min(t, this.backoff.maxRetryDelay).toPrecision(1))
        }
        enqueue(e) {
            let t;
            this.batch.enabled && e.type === ht ? t = this.handleNewItemForBatch(e) : t = e, t && this.pushToMainQueue(t)
        }
        handleNewItemForBatch(e) {
            let t, r = this.getStorageEntry(O.BATCH_QUEUE) ? ? [];
            if (this.batchingInProgress) r.push(e);
            else {
                this.batchingInProgress = !0, r = r.slice(-r.length), r.push(e);
                const s = this.getBatchDispatchInfo(r);
                if (s.criteriaMet || s.criteriaExceeded) {
                    let n;
                    if (s.criteriaExceeded ? (n = r.slice(0, r.length - 1), r = [e]) : (n = r, r = []), n.length > 0) {
                        const i = n.every(l => l.reclaimed),
                            a = n.map(l => l.item);
                        i ? t = this.genQueueItem(a, dt, !0) : t = this.genQueueItem(a, dt)
                    }
                    this.scheduleFlushBatch()
                }
                this.batchingInProgress = !1
            }
            return this.setStorageEntry(O.BATCH_QUEUE, r), t
        }
        pushToMainQueue(e) {
            let t = this.getStorageEntry(O.QUEUE) ? ? [];
            this.maxItems > 1 ? t = t.slice(-(this.maxItems - 1)) : t = [], t.push(e), t = t.sort(hs), this.setStorageEntry(O.QUEUE, t), this.scheduleTimeoutActive && this.processHead()
        }
        addItem(e) {
            this.enqueue(this.genQueueItem(e))
        }
        genQueueItem(e, t = ht, r) {
            return {
                item: e,
                attemptNumber: 0,
                time: this.schedule.now(),
                id: ce(),
                type: t,
                ...N(r) ? {
                    reclaimed: r
                } : {}
            }
        }
        requeue(e) {
            const {
                attemptNumber: t,
                item: r,
                type: s,
                id: n,
                firstAttemptedAt: i,
                lastAttemptedAt: a,
                reclaimed: l,
                retryReason: c
            } = e, u = t + 1;
            this.shouldRetry(r, u) && this.enqueue({
                item: r,
                attemptNumber: u,
                time: this.schedule.now() + this.getDelay(u),
                id: n ? ? ce(),
                type: s,
                firstAttemptedAt: i,
                lastAttemptedAt: a,
                reclaimed: l,
                retryReason: c
            })
        }
        getBatchDispatchInfo(e) {
            let t = !1,
                r = !1;
            const s = this.batch ? .maxItems;
            if (N(s) && (t = e.length === s, r = e.length > s), t || r) return {
                criteriaMet: t,
                criteriaExceeded: r
            };
            let n = !1,
                i = !1;
            const a = this.batch ? .maxSize;
            if (N(a) && N(this.batchSizeCalcCb)) {
                const l = this.batchSizeCalcCb(e.map(c => c.item));
                n = l === a, i = l > a
            }
            return {
                criteriaMet: n,
                criteriaExceeded: i
            }
        }
        processHead() {
            this.schedule.cancel(this.processId);
            let e = this.getStorageEntry(O.QUEUE) ? ? [];
            const t = this.schedule.now(),
                r = [],
                s = (l, c) => (u, d) => {
                    const f = this.getStorageEntry(O.IN_PROGRESS) ? ? {},
                        I = f[c],
                        h = I ? .firstAttemptedAt,
                        g = I ? .lastAttemptedAt;
                    delete f[c], this.setStorageEntry(O.IN_PROGRESS, f), u && this.requeue({ ...l,
                        firstAttemptedAt: h,
                        lastAttemptedAt: g,
                        retryReason: d ? .retryReason ? ? ir
                    })
                },
                n = (l, c) => {
                    r.push({
                        id: c,
                        item: l.item,
                        done: s(l, c),
                        attemptNumber: l.attemptNumber
                    })
                },
                i = this.getStorageEntry(O.IN_PROGRESS) ? ? {};
            let a = Object.keys(i).length;
            for (; e.length > 0 && e[0].time <= t && a++ < this.maxItems;) {
                const l = e.shift();
                if (l) {
                    const c = ce();
                    i[c] = {
                        item: l.item,
                        attemptNumber: l.attemptNumber,
                        time: this.schedule.now(),
                        type: l.type,
                        firstAttemptedAt: l.firstAttemptedAt,
                        lastAttemptedAt: l.lastAttemptedAt,
                        reclaimed: l.reclaimed
                    }, n(l, c)
                }
            }
            if (this.setStorageEntry(O.QUEUE, e), this.setStorageEntry(O.IN_PROGRESS, i), r.forEach(l => {
                    try {
                        const c = this.schedule.now(),
                            u = this.getStorageEntry(O.IN_PROGRESS) ? ? {},
                            d = u[l.id];
                        let f = c,
                            I = c,
                            h = !1,
                            g = ir;
                        d && (g = d.retryReason ? ? g, f = d.firstAttemptedAt ? ? f, I = d.lastAttemptedAt ? ? I, h = d.reclaimed ? ? h, d.firstAttemptedAt = f, d.lastAttemptedAt = c, u[l.id] = d, this.setStorageEntry(O.IN_PROGRESS, u));
                        const T = c - f,
                            R = c - I,
                            D = this.shouldRetry(l.item, l.attemptNumber + 1);
                        this.processQueueCb(l.item, l.done, {
                            retryAttemptNumber: l.attemptNumber,
                            maxRetryAttempts: this.maxAttempts,
                            willBeRetried: D,
                            timeSinceFirstAttempt: T,
                            timeSinceLastAttempt: R,
                            reclaimed: h,
                            isPageAccessible: this.isPageAccessible,
                            retryReason: g
                        })
                    } catch (c) {
                        let u = "";
                        l.attemptNumber < this.maxAttempts ? (u = "The item will be requeued.", l.attemptNumber > 0 && (u = `${u} Retry attempt ${l.attemptNumber} of ${this.maxAttempts}.`), l.done(c)) : (u = `Retries exhausted (${this.maxAttempts}). The item will be dropped.`, l.done()), this.logger ? .error(Mc(Qt, u), c)
                    }
                }), e = this.getStorageEntry(O.QUEUE) ? ? [], this.schedule.cancel(this.processId), e.length > 0) {
                const l = e[0].time - t;
                this.processId = this.schedule.run(this.processHead, l, fe.ASAP)
            }
        }
        ack() {
            this.setStorageEntry(O.ACK, this.schedule.now()), this.reclaimStartVal != null && (this.reclaimStartVal = null, this.setStorageEntry(O.RECLAIM_START, null)), this.reclaimEndVal != null && (this.reclaimEndVal = null, this.setStorageEntry(O.RECLAIM_END, null)), this.schedule.run(this.ack, this.timeouts.ackTimer, fe.ASAP)
        }
        reclaim(e) {
            const t = {
                    queue: this.getStorageEntry(O.QUEUE) ? ? []
                },
                r = {
                    inProgress: e.get(O.IN_PROGRESS) ? ? {},
                    batchQueue: e.get(O.BATCH_QUEUE) ? ? [],
                    queue: e.get(O.QUEUE) ? ? []
                },
                s = [],
                n = (i, a) => {
                    const l = c => {
                        const u = c.id ? ? ce();
                        if (!s.includes(u)) {
                            const d = Array.isArray(c.item) ? dt : ht;
                            t.queue.push({
                                item: c.item,
                                attemptNumber: c.attemptNumber + a,
                                time: this.schedule.now(),
                                id: u,
                                type: c.type ? ? d,
                                firstAttemptedAt: c.firstAttemptedAt,
                                lastAttemptedAt: c.lastAttemptedAt,
                                retryReason: c.retryReason,
                                reclaimed: !0
                            }), s.push(u)
                        }
                    };
                    Array.isArray(i) ? i.forEach(l) : i && Object.values(i).forEach(l)
                };
            n(r.queue, 0), this.batch.enabled ? r.batchQueue.forEach(i => {
                const a = i.id ? ? ce();
                s.includes(a) || (this.enqueue({ ...i,
                    id: a,
                    retryReason: i.retryReason,
                    reclaimed: !0,
                    type: i.type ? ? ht,
                    time: this.schedule.now()
                }), s.push(a))
            }) : n(r.batchQueue, 0), n(r.inProgress, 1), t.queue.sort(hs), this.setStorageEntry(O.QUEUE, t.queue), this.clearQueueEntries(e, 1), this.processHead()
        }
        clearQueueEntries(e, t) {
            this.removeStorageEntry(e, 0, t)
        }
        removeStorageEntry(e, t, r, s = 1) {
            const i = Object.keys(O),
                a = O[i[t]];
            globalThis.setTimeout(() => {
                try {
                    e.remove(a), t + 1 < i.length && this.removeStorageEntry(e, t + 1, r)
                } catch (l) {
                    const c = "NS_ERROR_STORAGE_BUSY";
                    (l.name === c || l.code === c || l.code === 2153971713) && s < 2 ? this.removeStorageEntry(e, t, r + 40, s + 1) : this.logger ? .error(Lc(Qt, a, s), l), s === 2 && t + 1 < i.length && this.removeStorageEntry(e, t + 1, r)
                }
            }, r)
        }
        checkReclaim() {
            const e = n => () => {
                    n.get(O.RECLAIM_END) === this.id && n.get(O.RECLAIM_START) === this.id && this.reclaim(n)
                },
                t = n => () => {
                    n.get(O.RECLAIM_START) === this.id && (n.set(O.RECLAIM_END, this.id), this.schedule.run(e(n), this.timeouts.reclaimWait, fe.ABANDON))
                },
                r = n => {
                    n.set(O.RECLAIM_START, this.id), n.set(O.ACK, this.schedule.now()), this.schedule.run(t(n), this.timeouts.reclaimWait, fe.ABANDON)
                };
            (n => {
                const i = [],
                    a = this.store.getOriginalEngine();
                let l = [];
                if (_(a.keys)) l = a.keys();
                else
                    for (let c = 0; c < a.length; c++) {
                        const u = a.key(c);
                        u && l.push(u)
                    }
                return l.forEach(c => {
                    const u = c ? c.split(".") : [];
                    u.length >= 3 && u[0] === n && u[1] !== this.id && u[2] === O.ACK && i.push(this.storeManager.setStore({
                        id: u[1],
                        name: n,
                        validKeys: O,
                        type: F,
                        noSwapOnQuota: !0,
                        errorHandler: this.storeManager.errorHandler,
                        logger: this.storeManager.logger
                    }))
                }), i
            })(this.name).forEach(n => {
                this.schedule.now() - n.get(O.ACK) < this.timeouts.reclaimTimeout || r(n)
            }), this.schedule.run(this.checkReclaim, this.timeouts.reclaimTimer, fe.RESCHEDULE)
        }
        clear() {
            this.schedule.cancelAll(), this.setDefaultQueueEntries()
        }
    },
    gs = "BeaconQueue",
    jc = () => ({
        name: gs,
        deps: [],
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, gs]
        },
        dataplaneEventsQueue: {
            init(e, t, r, s, n) {
                const i = e.lifecycle.writeKey.value,
                    a = e.lifecycle.activeDataplaneUrl.value,
                    l = Dc(a, i),
                    c = Oc(e.loadOptions.value.beaconQueueOptions ? ? {}),
                    u = (d, f, I) => {
                        const {
                            isPageAccessible: h
                        } = I;
                        n ? .debug(Ac(Ue));
                        const g = Me(),
                            T = d.map(D => ar(D.event, g)),
                            R = cs(T, g, n);
                        if (!R) {
                            f(null);
                            return
                        }
                        try {
                            navigator.sendBeacon(l, R) ? f(null) : h ? (n ? .error(`${ls(Ue,l)} The event(s) will be dropped.`), f(null)) : n ? .warn(`${ls(Ue,l)} The event(s) will be retried as the current page is being unloaded.`)
                        } catch (D) {
                            s ? .onError({
                                error: D,
                                context: Ue,
                                customMessage: Kn(l)
                            }), f(null)
                        }
                    };
                return new Ft(`${Nc}_${i}`, {
                    batch: {
                        enabled: !0,
                        flushInterval: c.flushQueueInterval,
                        maxSize: Rc,
                        maxItems: c.maxItems
                    }
                }, u, r, zn(n), n, d => {
                    const f = Me(),
                        I = d.map(h => h.event);
                    return cs(I, f, n).size
                })
            },
            enqueue(e, t, r, s, n) {
                r.sentAt = Me(), Qn(r, n), t.addItem({
                    event: r
                })
            }
        }
    }),
    Wc = "CustomConsentManagerPlugin",
    Xc = "Failed to determine the consent status for the destination. Please check the destination configuration and try again.",
    vs = "CustomConsentManager",
    qc = () => ({
        name: vs,
        deps: [],
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, vs]
        },
        consentManager: {
            init(e, t) {},
            updateConsentsInfo(e, t, r) {},
            isDestinationConsented(e, t, r, s) {
                if (!e.consents.initialized.value) return !0;
                const n = e.consents.data.value.allowedConsentIds;
                try {
                    const {
                        consentManagement: i
                    } = t;
                    if (!i) return !0;
                    const a = i.find(d => d.provider === e.consents.provider.value);
                    if (!a ? .consents) return !0;
                    const l = a.consents.map(d => d.consent.trim()).filter(d => d),
                        c = a.resolutionStrategy ? ? e.consents.resolutionStrategy.value,
                        u = d => n.includes(d);
                    return c === "or" ? l.some(u) || l.length === 0 : l.every(u)
                } catch (i) {
                    return r ? .onError({
                        error: i,
                        context: Wc,
                        customMessage: Xc
                    }), !0
                }
            }
        }
    }),
    fs = 11e3,
    Jc = 1e4,
    Zc = 100,
    ue = "DeviceModeDestinationsPlugin",
    eu = e => `Integration for destination "${e}" is not supported.`,
    tu = e => `Failed to load integration SDK for destination "${e}"`,
    ps = e => `Failed to initialize integration for destination "${e}".`,
    Es = e => `Failed to get integrations data for destination "${e}".`,
    ru = e => `A timeout of ${e} ms occurred`,
    ms = e => `Failed to get the ready status from integration for destination "${e}"`,
    su = (e, t) => `${e}${y}The destination ID "${t}" does not correspond to a custom device mode destination.`,
    nu = (e, t) => `${e}${y}A custom integration with destination ID "${t}" was already added.`,
    iu = (e, t) => `${e}${y}The custom integration added for destination ID "${t}" does not match the expected implementation format.`,
    au = (e, t) => `${e}${y}No valid custom integration was added for destination ID "${t}". Ignoring it.`,
    ou = e => !w(e) && !!e,
    lu = e => !w(e) && !e,
    Wn = (e, t) => {
        const r = e.All ? ? !0;
        return t.filter(s => {
            const n = s.displayName;
            let i;
            return r ? (i = !0, lu(e[n]) && (i = !1)) : (i = !1, ou(e[n]) && (i = !0)), i
        })
    },
    cu = "ActiveCampaign",
    uu = "Adobe Analytics",
    du = "Adroll",
    hu = "Amplitude",
    gu = "Appcues",
    vu = "Axeptio",
    fu = "Bing Ads",
    pu = "Braze",
    Eu = "Bugsnag",
    mu = "Chartbeat",
    Au = "CleverTap",
    yu = "CommandBar",
    _u = "Comscore",
    Iu = "Convertflow",
    Su = "Criteo",
    Ru = "Customer IO",
    Tu = "DCM Floodlight",
    bu = "Drip",
    Nu = "Engage",
    Ou = "Facebook Pixel",
    Du = "Fullstory",
    Cu = "Google Analytics",
    Pu = "Google Analytics 360",
    Mu = "Google Analytics 4 (GA4)",
    Lu = "Google Analytics 4 (GA4) V2",
    ku = "Gainsight PX",
    Uu = "Google Optimize",
    wu = "Google Ads",
    $u = "Google Tag Manager",
    Bu = "Heap.io",
    xu = "Hotjar",
    Fu = "HubSpot",
    Gu = "Intercom",
    Vu = "Iterable",
    Hu = "JUNE",
    Yu = "Keen",
    Qu = "Kiss Metrics",
    zu = "Klaviyo",
    Ku = "LaunchDarkly",
    ju = "Lemnisk Marketing Automation",
    Wu = "Linkedin Insight Tag",
    Xu = "livechat",
    qu = "Lotame",
    Ju = "Lytics",
    Zu = "Matomo",
    ed = "Microsoft Clarity",
    td = "MoEngage",
    rd = "Mouseflow",
    sd = "Mixpanel",
    nd = "Ninetailed",
    id = "Olark",
    ad = "OpenAI Ads",
    od = "Optimizely Web",
    ld = "Pendo",
    cd = "Pinterest Tag",
    ud = "Podsights",
    dd = "Post Affiliate Pro",
    hd = "PostHog",
    gd = "ProfitWell",
    vd = "Qualaroo",
    fd = "Qualtrics",
    pd = "Quantum Metric",
    Ed = "Quora Pixel",
    md = "Reddit Pixel",
    Ad = "Refiner",
    yd = "Rockerbox",
    _d = "rollbar",
    Id = "SatisMeter",
    Sd = "Sendinblue",
    Rd = "Sentry",
    Td = "Shynet",
    bd = "Snap Pixel",
    Nd = "SnapEngage",
    Od = "Spotify Pixel",
    Dd = "Sprig",
    Cd = "TikTok Ads",
    Pd = "TVSquared",
    Md = "Userpilot",
    Ld = "Vero",
    kd = "VWO",
    Ud = "WOOPRA",
    wd = "XPixel",
    $d = "Yandex.Metrica",
    Bd = "HubSpot",
    xd = "GA",
    Fd = "Hotjar",
    Gd = "GoogleAds",
    Vd = "VWO",
    Hd = "GoogleTagManager",
    Yd = "Braze",
    Qd = "INTERCOM",
    zd = "Keen",
    Kd = "Kissmetrics",
    jd = "CustomerIO",
    Wd = "Chartbeat",
    Xd = "FacebookPixel",
    qd = "Lotame",
    Jd = "Optimizely",
    Zd = "OpenAIAds",
    eh = "Bugsnag",
    th = "Fullstory",
    rh = "TVSquared",
    sh = "GA4",
    nh = "GA4_V2",
    ih = "MoEngage",
    ah = "Amplitude",
    oh = "Pendo",
    lh = "Lytics",
    ch = "Appcues",
    uh = "Posthog",
    dh = "Klaviyo",
    hh = "Clevertap",
    gh = "BingAds",
    vh = "PinterestTag",
    fh = "AdobeAnalytics",
    ph = "LinkedInInsightTag",
    Eh = "RedditPixel",
    mh = "Drip",
    Ah = "Heap",
    yh = "Criteo",
    _h = "Mixpanel",
    Ih = "Qualtrics",
    Sh = "ProfitWell",
    Rh = "Sentry",
    Th = "QuantumMetric",
    bh = "SnapPixel",
    Nh = "PostAffiliatePro",
    Oh = "GoogleOptimize",
    Dh = "LaunchDarkly",
    Ch = "GA360",
    Ph = "Adroll",
    Mh = "DCMFloodlight",
    Lh = "Matomo",
    kh = "Vero",
    Uh = "Mouseflow",
    wh = "Rockerbox",
    $h = "ConvertFlow",
    Bh = "SnapEngage",
    xh = "LiveChat",
    Fh = "Shynet",
    Gh = "Woopra",
    Vh = "RollBar",
    Hh = "QuoraPixel",
    Yh = "June",
    Qh = "Engage",
    zh = "Iterable",
    Kh = "YandexMetrica",
    jh = "Refiner",
    Wh = "Qualaroo",
    Xh = "Podsights",
    qh = "Axeptio",
    Jh = "Satismeter",
    Zh = "MicrosoftClarity",
    eg = "Sendinblue",
    tg = "Olark",
    rg = "Lemnisk",
    sg = "TiktokAds",
    ng = "ActiveCampaign",
    ig = "Sprig",
    ag = "SpotifyPixel",
    og = "CommandBar",
    lg = "Ninetailed",
    cg = "Gainsight_PX",
    ug = "XPixel",
    dg = "Userpilot",
    hg = "Comscore",
    As = {
        [Fu]: Bd,
        [Cu]: xd,
        [xu]: Fd,
        [wu]: Gd,
        [kd]: Vd,
        [$u]: Hd,
        [pu]: Yd,
        [Gu]: Qd,
        [Yu]: zd,
        [Qu]: Kd,
        [Ru]: jd,
        [mu]: Wd,
        [Ou]: Xd,
        [qu]: qd,
        [od]: Jd,
        [ad]: Zd,
        [Eu]: eh,
        [Du]: th,
        [Pd]: rh,
        [Mu]: sh,
        [Lu]: nh,
        [td]: ih,
        [hu]: ah,
        [ld]: oh,
        [Ju]: lh,
        [gu]: ch,
        [hd]: uh,
        [zu]: dh,
        [Au]: hh,
        [fu]: gh,
        [cd]: vh,
        [uu]: fh,
        [Wu]: ph,
        [md]: Eh,
        [bu]: mh,
        [Bu]: Ah,
        [Su]: yh,
        [sd]: _h,
        [fd]: Ih,
        [gd]: Sh,
        [Rd]: Rh,
        [pd]: Th,
        [bd]: bh,
        [dd]: Nh,
        [Uu]: Oh,
        [Ku]: Dh,
        [Pu]: Ch,
        [du]: Ph,
        [Tu]: Mh,
        [Zu]: Lh,
        [Ld]: kh,
        [rd]: Uh,
        [yd]: wh,
        [Iu]: $h,
        [Nd]: Bh,
        [Xu]: xh,
        [Td]: Fh,
        [Ud]: Gh,
        [_d]: Vh,
        [Ed]: Hh,
        [Hu]: Yh,
        [Nu]: Qh,
        [Vu]: zh,
        [$d]: Kh,
        [Ad]: jh,
        [vd]: Wh,
        [ud]: Xh,
        [vu]: qh,
        [Id]: Jh,
        [ed]: Zh,
        [Sd]: eg,
        [id]: tg,
        [ju]: rg,
        [Cd]: sg,
        [cu]: ng,
        [Dd]: ig,
        [Od]: ag,
        [yu]: og,
        [nd]: lg,
        [ku]: cg,
        [wd]: ug,
        [Md]: dg,
        [_u]: hg
    },
    gg = (e, t, r) => !!(globalThis[e] ? .[t] ? .prototype && typeof globalThis[e][t].prototype.constructor < "u"),
    vg = e => new Promise(t => {
        globalThis.setTimeout(t, e)
    }),
    fg = (e, t, r, s) => {
        const n = {
            loadIntegration: s.nativeDestinations.loadIntegration.value,
            logLevel: s.lifecycle.logLevel.value,
            loadOnlyIntegrations: s.consents.postConsent.value ? .integrations ? ? s.nativeDestinations.loadOnlyIntegrations.value,
            ...s.lifecycle.safeAnalyticsInstance.value
        };
        return new globalThis[e][t](b(r.config), n, {
            shouldApplyDeviceModeTransformation: r.shouldApplyDeviceModeTransformation,
            propagateEventsUntransformedOnError: r.propagateEventsUntransformedOnError,
            destinationId: r.id
        })
    },
    Xn = (e, t = 0) => new Promise((r, s) => {
        if (e.integration ? .isReady()) r(!0);
        else if (t >= fs) s(new Error(ru(fs)));
        else {
            const n = Date.now();
            vg(Zc).then(() => {
                const i = Date.now() - n;
                Xn(e, t + i).then(r).catch(a => s(a))
            })
        }
    }),
    pg = (e, t, r) => {
        let s = t;
        if (_(e.integration ? .getDataForIntegrationsObject)) try {
            s = { ...t,
                ...C(e.integration.getDataForIntegrationsObject())
            }
        } catch (n) {
            r ? .onError({
                error: n,
                context: ue,
                customMessage: Es(e.userFriendlyId),
                groupingHash: Es(e.displayName),
                category: Re
            })
        }
        return s
    },
    ys = (e, t, r, s, n, i) => {
        try {
            const a = b(e);
            let l = a.integration;
            w(l) && (l = fg(r, s, e, t), a.integration = l), l.init ? .(), Xn(a).then(() => {
                Fn(a) && (t.nativeDestinations.integrationsConfig.value = pg(a, t.nativeDestinations.integrationsConfig.value, n)), t.nativeDestinations.initializedDestinations.value = [...t.nativeDestinations.initializedDestinations.value, a]
            }).catch(c => {
                t.nativeDestinations.failedDestinations.value = [...t.nativeDestinations.failedDestinations.value, e], n ? .onError({
                    error: c,
                    context: ue,
                    customMessage: ms(e.userFriendlyId),
                    groupingHash: ms(e.displayName),
                    category: Re
                })
            })
        } catch (a) {
            t.nativeDestinations.failedDestinations.value = [...t.nativeDestinations.failedDestinations.value, e], n ? .onError({
                error: a,
                context: ue,
                customMessage: ps(e.userFriendlyId),
                groupingHash: ps(e.displayName),
                category: Re
            })
        }
    },
    Eg = (e, t, r) => {
        if (!t ? .destinations ? .length) return or(e);
        const s = e.map(l => l.id),
            n = {};
        t.destinations.forEach(l => {
            const c = n[l.id] || [];
            c.push(l), n[l.id] = c
        });
        const i = Object.keys(n).filter(l => !s.includes(l));
        i.length > 0 && r ? .warn(`${ue}:: Source configuration override - Unable to identify the destinations with the following IDs: "${i.join(", ")}"`);
        const a = [];
        return e.forEach(l => {
            const c = n[l.id];
            if (!c || c.length === 0) {
                a.push(l);
                return
            }
            if (c.length > 1) c.forEach((u, d) => {
                const f = _s(l, u, `${d+1}`);
                f.cloned = !0, f.originalId = l.id, a.push(f)
            });
            else {
                const u = _s(l, c[0]);
                a.push(u)
            }
        }), or(a)
    },
    or = e => e.filter(t => t.enabled),
    _s = (e, t, r) => {
        const s = Rt(t.enabled) && t.enabled !== e.enabled,
            n = oe(t.config),
            i = Rt(t.enabled) ? t.enabled : e.enabled,
            a = n && i;
        if (!s && !a && !r) return e;
        const l = b(e);
        return r && (l.id = `${e.id}_${r}`, l.userFriendlyId = `${e.userFriendlyId}_${r}`), s && (l.enabled = t.enabled, l.overridden = !0), a && (l.config = xe({ ...l.config,
            ...t.config
        }), l.overridden = !0), l
    },
    mg = (e, t, r, s) => {
        const n = r.nativeDestinations.configuredDestinations.value.find(i => i.id === e && i.isCustomIntegration === !0);
        if (!n) {
            s.error(su(ue, e));
            return
        }
        if (N(n.integration)) {
            s.error(nu(ue, e));
            return
        }
        if (G(t) || !_(t.isReady) || N(t.init) && !_(t.init) || N(t.track) && !_(t.track) || N(t.page) && !_(t.page) || N(t.identify) && !_(t.identify) || N(t.group) && !_(t.group) || N(t.alias) && !_(t.alias)) {
            s.error(iu(ue, e));
            return
        }
        return n
    },
    Ag = (e, t, r, s) => {
        const n = r.lifecycle.safeAnalyticsInstance.value,
            i = b(s);
        i.setScope(e.displayName);
        const a = {
                log: i.log.bind(i),
                info: i.info.bind(i),
                debug: i.debug.bind(i),
                warn: i.warn.bind(i),
                error: i.error.bind(i),
                setMinLogLevel: i.setMinLogLevel.bind(i)
            },
            l = b(e.config);
        e.integration = { ...t.init && {
                init: () => t.init(l, n, a)
            },
            ...t.track && {
                track: c => t.track(n, a, c)
            },
            ...t.page && {
                page: c => t.page(n, a, c)
            },
            ...t.identify && {
                identify: c => t.identify(n, a, c)
            },
            ...t.group && {
                group: c => t.group(n, a, c)
            },
            ...t.alias && {
                alias: c => t.alias(n, a, c)
            },
            isReady: () => t.isReady(n, a)
        }
    },
    Is = "DeviceModeDestinations",
    yg = () => ({
        name: Is,
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, Is]
        },
        nativeDestinations: {
            addCustomIntegration(e, t, r, s) {
                const n = mg(e, t, r, s);
                n && (Ag(n, t, r, s), r.nativeDestinations.configuredDestinations.value = [...r.nativeDestinations.configuredDestinations.value])
            },
            setActiveDestinations(e, t, r, s) {
                e.nativeDestinations.loadIntegration.value = e.loadOptions.value.loadIntegration;
                const n = e.nativeDestinations.configuredDestinations.value.filter(l => {
                        if (l.isCustomIntegration && w(l.integration)) return l.enabled && s ? .warn(au(ue, l.id)), !1;
                        if (l.isCustomIntegration || As[l.displayName]) return !0;
                        const c = eu(l.displayName);
                        return r ? .onError({
                            error: new Error(c),
                            context: ue,
                            category: Re
                        }), !1
                    }),
                    i = e.loadOptions.value.sourceConfigurationOverride ? Eg(n, e.loadOptions.value.sourceConfigurationOverride, s) : or(n),
                    a = Wn(e.consents.postConsent.value ? .integrations ? ? e.nativeDestinations.loadOnlyIntegrations.value, i).filter(l => t.invokeSingle("consentManager.isDestinationConsented", e, l.config, r, s) ? ? !0);
                e.nativeDestinations.activeDestinations.value = [...e.nativeDestinations.activeDestinations.value, ...a]
            },
            load(e, t, r, s, n) {
                const i = e.lifecycle.integrationsCDNPath.value;
                e.nativeDestinations.activeDestinations.value.forEach(a => {
                    const l = As[a.displayName],
                        c = `${l}_RS`,
                        u = l;
                    if (u && !gg(c, u)) {
                        const d = `${i}/${l}.min.js`;
                        t.loadJSFile({
                            url: d,
                            id: a.userFriendlyId,
                            callback: n ? ? ((f, I) => {
                                if (I) {
                                    const h = tu(a.displayName);
                                    r ? .onError({
                                        error: I,
                                        context: ue,
                                        customMessage: h,
                                        groupingHash: h,
                                        category: Re
                                    }), e.nativeDestinations.failedDestinations.value = [...e.nativeDestinations.failedDestinations.value, a]
                                } else ys(a, e, c, u, r)
                            }),
                            timeout: Jc
                        })
                    } else ys(a, e, c, u, r)
                })
            }
        }
    }),
    _g = {
        minRetryDelay: 500,
        backoffFactor: 2,
        maxAttempts: 3
    },
    Ig = 1e4,
    Sg = "rudder_dmt",
    be = "DeviceModeTransformationPlugin",
    Ss = (e, t, r, s, n) => `${e}${y}Event transformation unsuccessful for destination "${t}" with id "${r}". Reason: ${s}. ${n}.`,
    Rs = (e, t, r, s, n) => `${e}${y}[Destination: ${t} with id "${r}"].Transformation request failed with status: ${s}. Retries exhausted. ${n}.`,
    Rg = (e, t) => `Transformation failed for destination "${e}" with id "${t}"`,
    Tg = e => `${e}${y}Transformation server access is denied. The configuration data seems to be out of sync. Sending untransformed event to the destination.`,
    bg = e => `Invalid destination IDs in the queue item. ${e}.`,
    Ng = (e, t, r) => ({
        metadata: {
            "Custom-Authorization": r
        },
        batch: [{
            orderNo: Date.now(),
            destinationIds: t,
            event: e
        }]
    }),
    lr = e => e.originalId ? ? e.id,
    Qe = (e, t, r) => {
        t.includes(e) || (t.push(e), r())
    },
    Og = (e, t, r, s, n, i, a, l) => {
        const c = "destinationsEventsQueue.enqueueEventToDestination",
            u = "Sending untransformed event",
            d = "Dropping the event";
        if (!Array.isArray(r)) {
            const h = bg(d);
            a ? .onError({
                error: new Error(h),
                context: be,
                customMessage: h
            });
            return
        }
        const f = e.nativeDestinations.initializedDestinations.value.filter(h => h && r.includes(lr(h))),
            I = [];
        f.forEach(h => {
            try {
                const g = [],
                    T = lr(h);
                switch (n) {
                    case 200:
                        JSON.parse(s).transformedBatch.find(R => R.id === T) ? .payload.forEach(R => {
                            if (R.status === "200") g.push(R.event);
                            else {
                                let D = "Unknown";
                                R.status === "410" && (D = "Transformation is not available");
                                let L = d;
                                h.propagateEventsUntransformedOnError === !0 ? (L = u, g.push(i), Qe(T, I, () => {
                                    l ? .warn(Ss(be, h.displayName, T, D, L))
                                })) : Qe(T, I, () => {
                                    l ? .error(Ss(be, h.displayName, T, D, L))
                                })
                            }
                        });
                        break;
                    case 404:
                        Qe(T, I, () => {
                            l ? .warn(Tg(be))
                        }), g.push(i);
                        break;
                    default:
                        h.propagateEventsUntransformedOnError === !0 ? (Qe(T, I, () => {
                            l ? .warn(Rs(be, h.displayName, T, n, u))
                        }), g.push(i)) : Qe(T, I, () => {
                            l ? .error(Rs(be, h.displayName, T, n, d))
                        })
                }
                g ? .forEach(R => {
                    oe(R) && t.invokeSingle(c, e, R, h, a, l)
                })
            } catch (g) {
                a ? .onError({
                    error: g,
                    context: be,
                    customMessage: Rg(h.displayName, h.id)
                })
            }
        })
    },
    Ts = "DeviceModeTransformation",
    Dg = () => ({
        name: Ts,
        deps: [],
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, Ts]
        },
        transformEvent: {
            init(e, t, r, s, n, i) {
                const a = e.lifecycle.writeKey.value;
                return r.setAuthHeader(a), new Ft(`${Sg}_${a}`, _g, (l, c, u) => {
                    const d = Ng(l.event, l.destinationIds, l.token);
                    r.getAsyncData({
                        url: `${e.lifecycle.activeDataplaneUrl.value}/transform`,
                        options: {
                            method: "POST",
                            data: mc(d),
                            sendRawData: !0
                        },
                        isRawResponse: !0,
                        timeout: Ig,
                        callback: (f, I) => {
                            const h = Gn(I ? .xhr ? .status ? ? 0);
                            w(I ? .error) || !h || u.retryAttemptNumber === u.maxRetryAttempts ? (Og(e, t, l.destinationIds, f, I ? .xhr ? .status, l.event, n, i), c(null)) : c(I)
                        }
                    })
                }, s, re)
            },
            enqueue(e, t, r, s) {
                const n = [];
                s.forEach(i => {
                    const a = lr(i);
                    n.includes(a) || n.push(a)
                }), t.addItem({
                    event: r,
                    destinationIds: n,
                    token: e.session.authToken.value
                })
            }
        }
    }),
    cr = {
        segment: "ajs_anonymous_id"
    },
    Cg = e => {
        let t;
        const r = e(F);
        r ? .isEnabled && (t = r.getItem(cr.segment));
        const s = e(V);
        return !t && s ? .isEnabled && (t = s.getItem(cr.segment)), t
    },
    bs = "ExternalAnonymousId",
    Pg = () => ({
        name: bs,
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, bs]
        },
        storage: {
            getAnonymousId(e, t) {
                let r;
                if (t ? .autoCapture ? .enabled && t.autoCapture.source) {
                    const s = t.autoCapture.source.toLowerCase();
                    if (!Object.keys(cr).includes(s)) return r;
                    s === "segment" && (r = Cg(e))
                }
                return r
            }
        }
    }),
    Mg = "rs_amp_id",
    Lg = () => {
        const e = [];
        let t;
        for (let r = 0; r < 256; r++) {
            t = r;
            for (let s = 0; s < 8; s++) t = t & 1 ? 3988292384 ^ t >>> 1 : t >>> 1;
            e[r] = t
        }
        return e
    },
    kg = e => {
        const t = Lg();
        let r = -1;
        for (let s = 0; s < e.length; s++) r = r >>> 8 ^ t[(r ^ e.charCodeAt(s)) & 255];
        return (r ^ -1) >>> 0
    },
    Ns = {
        getUserLanguage: () => navigator ? .language,
        getUserAgent: () => navigator ? .userAgent
    },
    Ug = e => decodeURIComponent(globalThis.atob(e).split("").map(t => `%${`00${t.charCodeAt(0).toString(16)}`.slice(-2)}`).join("")),
    wg = (e = "") => {
        const t = e.endsWith("..") ? e.substring(0, e.length - 2) : e;
        return Ug(t)
    },
    $g = /^[\w.-]+$/,
    Bg = 1,
    xg = 1,
    st = "*",
    Fg = e => {
        const t = e.split(st),
            r = t.length % 2 === 0;
        if (t.length < 4 || !r || Number(t.shift()) !== xg) return null;
        const s = t.shift(),
            n = t.join(st);
        return {
            checksum: s ? ? "",
            serializedIds: n
        }
    },
    Gg = e => {
        if (!e) return {};
        const t = {},
            r = e.split(st);
        for (let s = 0; s < r.length; s += 2) {
            const n = r[s];
            $g.test(n) && (t[n] = wg(r[s + 1]))
        }
        return t
    },
    Vg = (e, t) => [e, new Date().getTimezoneOffset(), t].join(st),
    Hg = () => Math.floor(Date.now() / 6e4),
    Yg = (e, t, r, s) => {
        const n = Vg(r, s),
            i = t || 0,
            a = Hg() - i;
        return kg([n, a, e].join(st)).toString(36)
    },
    Qg = (e, t) => {
        const r = Ns.getUserAgent(),
            s = Ns.getUserLanguage();
        for (let n = 0; n <= Bg; n += 1)
            if (Yg(e, n, r, s) === t) return !0;
        return !1
    },
    zg = e => {
        const t = Fg(e);
        if (!t) return null;
        const {
            checksum: r,
            serializedIds: s
        } = t;
        return !s || !r || !Qg(s, r) ? null : Gg(s)
    },
    Os = "GoogleLinker",
    Kg = () => ({
        name: Os,
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, Os]
        },
        userSession: {
            anonymousIdGoogleLinker(e) {
                if (!e) return null;
                const t = e ? zg(e) : null;
                return t ? t[Mg] : null
            }
        }
    }),
    qn = e => `${e}${y}Failed to read the consent cookie.`,
    jg = e => `${e}${y}Failed to parse the consent cookie.`,
    Wg = "Failed to determine the consent status for the destination. Please check the destination configuration and try again.",
    we = "IubendaConsentManagerPlugin",
    Xg = /^_iub_cs-\d+$/,
    qg = e => {
        try {
            const t = document.cookie.split("; ").find(s => {
                const [n] = s.split("=");
                return Xg.test((n || "").trim())
            });
            if (!t) throw new Error("Iubenda Cookie not found with the specified pattern.");
            const [r] = t.split("=");
            return r || ""
        } catch (t) {
            return e ? .error(qn(we), t), ""
        }
    },
    Jg = (e, t) => {
        let r = null;
        try {
            r = e ? .setStore({
                id: we,
                name: we,
                type: V,
                errorHandler: e ? .errorHandler,
                logger: e ? .logger
            }) ? .engine.getItem(qg(t))
        } catch (n) {
            t ? .error(qn(we), n);
            return
        }
        if (G(r)) return;
        let s;
        try {
            s = JSON.parse(decodeURIComponent(r))
        } catch (n) {
            t ? .error(jg(we), n);
            return
        }
        if (s) return s.purposes
    },
    Zg = e => {
        const t = [],
            r = [];
        return e && Object.entries(e).forEach(s => {
            const n = s[0];
            s[1] ? t.push(n) : r.push(n)
        }), {
            allowedConsentIds: t,
            deniedConsentIds: r
        }
    },
    Ds = (e, t) => {
        const r = Zg(t);
        e.consents.initialized.value = N(t), e.consents.data.value = r
    },
    Cs = "IubendaConsentManager",
    ev = () => ({
        name: Cs,
        deps: [],
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, Cs]
        },
        consentManager: {
            init(e, t) {
                globalThis.getIubendaUserConsentedPurposes = () => e.consents.data.value.allowedConsentIds ? .slice(), globalThis.getIubendaUserDeniedPurposes = () => e.consents.data.value.deniedConsentIds ? .slice(), globalThis.updateIubendaConsent = r => {
                    Ds(e, r)
                }
            },
            updateConsentsInfo(e, t, r) {
                let s;
                w(globalThis._iub.cs.consent.purposes) ? s = Jg(t, r) : s = globalThis._iub.cs.consent.purposes, Ds(e, s)
            },
            isDestinationConsented(e, t, r, s) {
                if (!e.consents.initialized.value) return !0;
                const n = e.consents.data.value.allowedConsentIds,
                    i = a => n.includes(a);
                try {
                    const {
                        consentManagement: a
                    } = t;
                    if (a) {
                        const l = a.find(u => u.provider === e.consents.provider.value);
                        if (!l ? .consents) return !0;
                        const c = l.consents.map(u => u.consent.trim()).filter(u => u);
                        return (l.resolutionStrategy ? ? e.consents.resolutionStrategy.value) === "or" ? c.some(i) || c.length === 0 : c.every(i)
                    }
                    return !0
                } catch (a) {
                    return r ? .onError({
                        error: a,
                        context: we,
                        customMessage: Wg
                    }), !0
                }
            }
        }
    }),
    tv = e => `${e}${y}Failed to read the consent cookie.`,
    rv = e => `${e}${y}Failed to parse the consent cookie.`,
    sv = "Failed to determine the consent status for the destination. Please check the destination configuration and try again.",
    We = "KetchConsentManagerPlugin",
    nv = "_ketch_consent_v1_",
    iv = (e, t) => {
        let r = null;
        try {
            r = e ? .setStore({
                id: We,
                name: We,
                type: V,
                errorHandler: e ? .errorHandler,
                logger: e ? .logger
            }) ? .engine.getItem(nv)
        } catch (i) {
            t ? .error(tv(We), i);
            return
        }
        if (G(r)) return;
        let s;
        try {
            s = JSON.parse(ln(r))
        } catch (i) {
            t ? .error(rv(We), i);
            return
        }
        if (!s) return;
        const n = {};
        return Object.entries(s).forEach(i => {
            const a = i[0],
                l = i[1];
            n[a] = l ? .status === "granted"
        }), n
    },
    av = e => {
        const t = [],
            r = [];
        return e && Object.entries(e).forEach(s => {
            const n = s[0];
            s[1] ? t.push(n) : r.push(n)
        }), {
            allowedConsentIds: t,
            deniedConsentIds: r
        }
    },
    Ps = (e, t) => {
        const r = av(t);
        e.consents.initialized.value = N(t), e.consents.data.value = r
    },
    Ms = "KetchConsentManager",
    ov = () => ({
        name: Ms,
        deps: [],
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, Ms]
        },
        consentManager: {
            init(e, t) {
                globalThis.getKetchUserConsentedPurposes = () => e.consents.data.value.allowedConsentIds ? .slice(), globalThis.getKetchUserDeniedPurposes = () => e.consents.data.value.deniedConsentIds ? .slice(), globalThis.updateKetchConsent = r => {
                    Ps(e, r)
                }
            },
            updateConsentsInfo(e, t, r) {
                let s;
                w(globalThis.ketchConsent) ? s = iv(t, r) : s = globalThis.ketchConsent, Ps(e, s)
            },
            isDestinationConsented(e, t, r, s) {
                if (!e.consents.initialized.value) return !0;
                const n = e.consents.data.value.allowedConsentIds;
                try {
                    const {
                        ketchConsentPurposes: i,
                        consentManagement: a
                    } = t, l = c => n.includes(c);
                    if (a) {
                        const c = a.find(d => d.provider === e.consents.provider.value) ? .consents;
                        if (!c) return !0;
                        const u = c.map(d => d.consent.trim()).filter(d => d);
                        return e.consents.resolutionStrategy.value === "or" ? u.some(l) || u.length === 0 : u.every(l)
                    } else if (i) {
                        const c = i.map(u => u.purpose.trim()).filter(u => u);
                        return c.some(l) || c.length === 0
                    }
                    return !0
                } catch (i) {
                    return r ? .onError({
                        error: i,
                        context: We,
                        customMessage: sv
                    }), !0
                }
            }
        }
    }),
    lv = {
        maxItems: 100
    },
    cv = "rudder_destinations_events",
    ur = "NativeDestinationQueuePlugin",
    uv = (e, t, r) => `${e}${y}The "${t}" track event has been filtered for the "${r}" destination.`,
    Ls = (e, t, r) => `Failed to send "${e}" event ${r?`"${r}" `:""}to integration for destination "${t}".`,
    dv = e => x(lv, e),
    ks = e => e && typeof e == "string",
    hv = (e, t, r) => {
        if (e !== "track") return !1;
        const {
            blacklistedEvents: s,
            whitelistedEvents: n,
            eventFilteringOption: i
        } = r.config;
        switch (i) {
            case "blacklistedEvents":
                {
                    if (!ks(t)) return !1;
                    const a = t.trim();
                    return Array.isArray(s) ? s.some(l => l.eventName.trim() === a) : !1
                }
            case "whitelistedEvents":
                {
                    if (!ks(t)) return !0;
                    const a = t.trim();
                    return Array.isArray(n) ? !n.some(l => l.eventName.trim() === a) : !0
                }
            default:
                return !1
        }
    },
    Us = (e, t, r, s) => {
        const n = e.type.toString();
        try {
            const i = {
                message: e
            };
            t.integration[n] ? .(i)
        } catch (i) {
            r ? .onError({
                error: i,
                context: ur,
                customMessage: Ls(n, t.userFriendlyId, e.event),
                groupingHash: Ls(n, t.displayName, e.event),
                category: Re
            })
        }
    },
    gv = e => e.shouldApplyDeviceModeTransformation,
    ws = "NativeDestinationQueue",
    vv = () => ({
        name: ws,
        deps: [],
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, ws]
        },
        destinationsEventsQueue: {
            init(e, t, r, s, n, i) {
                const a = dv(e.loadOptions.value.destinationsQueueOptions),
                    l = e.lifecycle.writeKey.value;
                return new Ft(`${cv}_${l}`, a, (c, u) => {
                    const d = Wn(c.integrations, e.nativeDestinations.initializedDestinations.value),
                        f = [],
                        I = b(c);
                    d.forEach(h => {
                        try {
                            if (hv(I.type, I.event, h)) {
                                i ? .warn(uv(ur, I.event, h.userFriendlyId));
                                return
                            }
                            gv(h) ? f.push(h) : Us(I, h, n, i)
                        } catch (g) {
                            n ? .onError({
                                error: g,
                                context: ur,
                                category: Re
                            })
                        }
                    }), f.length > 0 && t.invokeSingle("transformEvent.enqueue", e, s, I, f, n, i), u(null)
                }, r, re)
            },
            enqueue(e, t, r, s, n) {
                t.addItem(r)
            },
            enqueueEventToDestination(e, t, r, s, n) {
                Us(t, r, s)
            }
        }
    }),
    fv = e => `${e}${y}Failed to access OneTrust SDK resources. Please ensure that the OneTrust SDK is loaded successfully before RudderStack SDK.`,
    pv = "Failed to determine the consent status for the destination. Please check the destination configuration and try again.",
    $s = "OneTrustConsentManagerPlugin",
    Bs = "OneTrustConsentManager",
    Ev = () => ({
        name: Bs,
        deps: [],
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, Bs]
        },
        consentManager: {
            init(e, t) {},
            updateConsentsInfo(e, t, r) {
                if (!globalThis.OneTrust || !globalThis.OnetrustActiveGroups) {
                    r ? .error(fv($s)), e.consents.initialized.value = !1;
                    return
                }
                const s = globalThis.OneTrust.GetDomainData().Groups,
                    n = globalThis.OnetrustActiveGroups.split(",").filter(a => a),
                    i = [];
                s.forEach(({
                    CustomGroupId: a
                }) => {
                    n.includes(a) || i.push(a)
                }), e.consents.initialized.value = !0, e.consents.data.value = {
                    allowedConsentIds: n,
                    deniedConsentIds: i
                }
            },
            isDestinationConsented(e, t, r, s) {
                if (!e.consents.initialized.value) return !0;
                const n = e.consents.data.value.allowedConsentIds;
                try {
                    const {
                        oneTrustCookieCategories: i,
                        consentManagement: a
                    } = t, l = c => n.includes(c);
                    if (a) {
                        const c = a.find(d => d.provider === e.consents.provider.value) ? .consents;
                        if (!c) return !0;
                        const u = c.map(d => d.consent.trim()).filter(d => d);
                        return e.consents.resolutionStrategy.value === "or" ? u.some(l) || u.length === 0 : u.every(l)
                    } else if (i) return i.map(c => c.oneTrustCookieCategory.trim()).filter(c => c).every(l);
                    return !0
                } catch (i) {
                    return r ? .onError({
                        error: i,
                        context: $s,
                        customMessage: pv
                    }), !0
                }
            }
        }
    }),
    xs = "StorageEncryption",
    mv = () => ({
        name: xs,
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, xs]
        },
        storage: {
            encrypt(e) {
                return gc(e)
            },
            decrypt(e) {
                return nr(e)
            }
        }
    }),
    Fs = (typeof globalThis < "u" ? globalThis : void 0) ? .crypto || (typeof global < "u" ? global : void 0) ? .crypto || (typeof window < "u" ? window : void 0) ? .crypto || (typeof self < "u" ? self : void 0) ? .crypto || (typeof frames < "u" ? frames : void 0) ? .[0] ? .crypto,
    dr;
Fs ? dr = e => {
    const t = [];
    for (let r = 0; r < e; r += 4) t.push(Fs.getRandomValues(new Uint32Array(1))[0]);
    return new te(t, e)
} : dr = e => {
    const t = [],
        r = s => {
            let n = s,
                i = 987654321;
            const a = 4294967295;
            return () => {
                i = 36969 * (i & 65535) + (i >> 16) & a, n = 18e3 * (n & 65535) + (n >> 16) & a;
                let l = (i << 16) + n & a;
                return l /= 4294967296, l += .5, l * (Math.random() > .5 ? 1 : -1)
            }
        };
    for (let s = 0, n; s < e; s += 4) {
        const i = r((n || Math.random()) * 4294967296);
        n = i() * 987654071, t.push(i() * 4294967296 | 0)
    }
    return new te(t, e)
};
var X = class {
        static create(...e) {
            return new this(...e)
        }
        mixIn(e) {
            return Object.assign(this, e)
        }
        clone() {
            const e = new this.constructor;
            return Object.assign(e, this), e
        }
    },
    te = class extends X {
        constructor(e = [], t = e.length * 4) {
            super();
            let r = e;
            if (r instanceof ArrayBuffer && (r = new Uint8Array(r)), (r instanceof Int8Array || r instanceof Uint8ClampedArray || r instanceof Int16Array || r instanceof Uint16Array || r instanceof Int32Array || r instanceof Uint32Array || r instanceof Float32Array || r instanceof Float64Array) && (r = new Uint8Array(r.buffer, r.byteOffset, r.byteLength)), r instanceof Uint8Array) {
                const s = r.byteLength,
                    n = [];
                for (let i = 0; i < s; i += 1) n[i >>> 2] |= r[i] << 24 - i % 4 * 8;
                this.words = n, this.sigBytes = s
            } else this.words = e, this.sigBytes = t
        }
        static random = dr;
        toString(e = Av) {
            return e.stringify(this)
        }
        concat(e) {
            const t = this.words,
                r = e.words,
                s = this.sigBytes,
                n = e.sigBytes;
            if (this.clamp(), s % 4)
                for (let i = 0; i < n; i += 1) {
                    const a = r[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    t[s + i >>> 2] |= a << 24 - (s + i) % 4 * 8
                } else
                    for (let i = 0; i < n; i += 4) t[s + i >>> 2] = r[i >>> 2];
            return this.sigBytes += n, this
        }
        clamp() {
            const {
                words: e,
                sigBytes: t
            } = this;
            e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e.length = Math.ceil(t / 4)
        }
        clone() {
            const e = super.clone.call(this);
            return e.words = this.words.slice(0), e
        }
    },
    Av = {
        stringify(e) {
            const {
                words: t,
                sigBytes: r
            } = e, s = [];
            for (let n = 0; n < r; n += 1) {
                const i = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                s.push((i >>> 4).toString(16)), s.push((i & 15).toString(16))
            }
            return s.join("")
        },
        parse(e) {
            const t = e.length,
                r = [];
            for (let s = 0; s < t; s += 2) r[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
            return new te(r, t / 2)
        }
    },
    Gs = {
        stringify(e) {
            const {
                words: t,
                sigBytes: r
            } = e, s = [];
            for (let n = 0; n < r; n += 1) {
                const i = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                s.push(String.fromCharCode(i))
            }
            return s.join("")
        },
        parse(e) {
            const t = e.length,
                r = [];
            for (let s = 0; s < t; s += 1) r[s >>> 2] |= (e.charCodeAt(s) & 255) << 24 - s % 4 * 8;
            return new te(r, t)
        }
    },
    Or = {
        stringify(e) {
            try {
                return decodeURIComponent(escape(Gs.stringify(e)))
            } catch {
                throw new Error("Malformed UTF-8 data")
            }
        },
        parse(e) {
            return Gs.parse(unescape(encodeURIComponent(e)))
        }
    },
    Jn = class extends X {
        constructor() {
            super(), this._minBufferSize = 0
        }
        reset() {
            this._data = new te, this._nDataBytes = 0
        }
        _append(e) {
            let t = e;
            typeof t == "string" && (t = Or.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
        }
        _process(e) {
            let t;
            const {
                _data: r,
                blockSize: s
            } = this, n = r.words, i = r.sigBytes;
            let a = i / (s * 4);
            e ? a = Math.ceil(a) : a = Math.max((a | 0) - this._minBufferSize, 0);
            const l = a * s,
                c = Math.min(l * 4, i);
            if (l) {
                for (let u = 0; u < l; u += s) this._doProcessBlock(n, u);
                t = n.splice(0, l), r.sigBytes -= c
            }
            return new te(t, c)
        }
        clone() {
            const e = super.clone.call(this);
            return e._data = this._data.clone(), e
        }
    },
    yv = class extends Jn {
        constructor(e) {
            super(), this.blockSize = 512 / 32, this.cfg = Object.assign(new X, e), this.reset()
        }
        static _createHelper(e) {
            return (t, r) => new e(r).finalize(t)
        }
        static _createHmacHelper(e) {
            return (t, r) => new _v(e, r).finalize(t)
        }
        reset() {
            super.reset.call(this), this._doReset()
        }
        update(e) {
            return this._append(e), this._process(), this
        }
        finalize(e) {
            return e && this._append(e), this._doFinalize()
        }
    },
    _v = class extends X {
        constructor(e, t) {
            super();
            const r = new e;
            this._hasher = r;
            let s = t;
            typeof s == "string" && (s = Or.parse(s));
            const n = r.blockSize,
                i = n * 4;
            s.sigBytes > i && (s = r.finalize(t)), s.clamp();
            const a = s.clone();
            this._oKey = a;
            const l = s.clone();
            this._iKey = l;
            const c = a.words,
                u = l.words;
            for (let d = 0; d < n; d += 1) c[d] ^= 1549556828, u[d] ^= 909522486;
            a.sigBytes = i, l.sigBytes = i, this.reset()
        }
        reset() {
            const e = this._hasher;
            e.reset(), e.update(this._iKey)
        }
        update(e) {
            return this._hasher.update(e), this
        }
        finalize(e) {
            const t = this._hasher,
                r = t.finalize(e);
            return t.reset(), t.finalize(this._oKey.clone().concat(r))
        }
    },
    Iv = (e, t, r) => {
        const s = [];
        let n = 0;
        for (let i = 0; i < t; i += 1)
            if (i % 4) {
                const a = r[e.charCodeAt(i - 1)] << i % 4 * 2 | r[e.charCodeAt(i)] >>> 6 - i % 4 * 2;
                s[n >>> 2] |= a << 24 - n % 4 * 8, n += 1
            }
        return te.create(s, n)
    },
    Vs = {
        stringify(e) {
            const {
                words: t,
                sigBytes: r
            } = e, s = this._map;
            e.clamp();
            const n = [];
            for (let a = 0; a < r; a += 3) {
                const l = t[a >>> 2] >>> 24 - a % 4 * 8 & 255,
                    c = t[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255,
                    u = t[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255,
                    d = l << 16 | c << 8 | u;
                for (let f = 0; f < 4 && a + f * .75 < r; f += 1) n.push(s.charAt(d >>> 6 * (3 - f) & 63))
            }
            const i = s.charAt(64);
            if (i)
                for (; n.length % 4;) n.push(i);
            return n.join("")
        },
        parse(e) {
            let t = e.length;
            const r = this._map;
            let s = this._reverseMap;
            if (!s) {
                this._reverseMap = [], s = this._reverseMap;
                for (let i = 0; i < r.length; i += 1) s[r.charCodeAt(i)] = i
            }
            const n = r.charAt(64);
            if (n) {
                const i = e.indexOf(n);
                i !== -1 && (t = i)
            }
            return Iv(e, t, s)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    },
    S = [];
for (let e = 0; e < 64; e += 1) S[e] = Math.abs(Math.sin(e + 1)) * 4294967296 | 0;
var Q = (e, t, r, s, n, i, a) => {
        const l = e + (t & r | ~t & s) + n + a;
        return (l << i | l >>> 32 - i) + t
    },
    z = (e, t, r, s, n, i, a) => {
        const l = e + (t & s | r & ~s) + n + a;
        return (l << i | l >>> 32 - i) + t
    },
    K = (e, t, r, s, n, i, a) => {
        const l = e + (t ^ r ^ s) + n + a;
        return (l << i | l >>> 32 - i) + t
    },
    j = (e, t, r, s, n, i, a) => {
        const l = e + (r ^ (t | ~s)) + n + a;
        return (l << i | l >>> 32 - i) + t
    },
    Sv = class extends yv {
        _doReset() {
            this._hash = new te([1732584193, 4023233417, 2562383102, 271733878])
        }
        _doProcessBlock(e, t) {
            const r = e;
            for (let Gt = 0; Gt < 16; Gt += 1) {
                const kr = t + Gt,
                    at = e[kr];
                r[kr] = (at << 8 | at >>> 24) & 16711935 | (at << 24 | at >>> 8) & 4278255360
            }
            const s = this._hash.words,
                n = r[t + 0],
                i = r[t + 1],
                a = r[t + 2],
                l = r[t + 3],
                c = r[t + 4],
                u = r[t + 5],
                d = r[t + 6],
                f = r[t + 7],
                I = r[t + 8],
                h = r[t + 9],
                g = r[t + 10],
                T = r[t + 11],
                R = r[t + 12],
                D = r[t + 13],
                L = r[t + 14],
                se = r[t + 15];
            let p = s[0],
                E = s[1],
                m = s[2],
                A = s[3];
            p = Q(p, E, m, A, n, 7, S[0]), A = Q(A, p, E, m, i, 12, S[1]), m = Q(m, A, p, E, a, 17, S[2]), E = Q(E, m, A, p, l, 22, S[3]), p = Q(p, E, m, A, c, 7, S[4]), A = Q(A, p, E, m, u, 12, S[5]), m = Q(m, A, p, E, d, 17, S[6]), E = Q(E, m, A, p, f, 22, S[7]), p = Q(p, E, m, A, I, 7, S[8]), A = Q(A, p, E, m, h, 12, S[9]), m = Q(m, A, p, E, g, 17, S[10]), E = Q(E, m, A, p, T, 22, S[11]), p = Q(p, E, m, A, R, 7, S[12]), A = Q(A, p, E, m, D, 12, S[13]), m = Q(m, A, p, E, L, 17, S[14]), E = Q(E, m, A, p, se, 22, S[15]), p = z(p, E, m, A, i, 5, S[16]), A = z(A, p, E, m, d, 9, S[17]), m = z(m, A, p, E, T, 14, S[18]), E = z(E, m, A, p, n, 20, S[19]), p = z(p, E, m, A, u, 5, S[20]), A = z(A, p, E, m, g, 9, S[21]), m = z(m, A, p, E, se, 14, S[22]), E = z(E, m, A, p, c, 20, S[23]), p = z(p, E, m, A, h, 5, S[24]), A = z(A, p, E, m, L, 9, S[25]), m = z(m, A, p, E, l, 14, S[26]), E = z(E, m, A, p, I, 20, S[27]), p = z(p, E, m, A, D, 5, S[28]), A = z(A, p, E, m, a, 9, S[29]), m = z(m, A, p, E, f, 14, S[30]), E = z(E, m, A, p, R, 20, S[31]), p = K(p, E, m, A, u, 4, S[32]), A = K(A, p, E, m, I, 11, S[33]), m = K(m, A, p, E, T, 16, S[34]), E = K(E, m, A, p, L, 23, S[35]), p = K(p, E, m, A, i, 4, S[36]), A = K(A, p, E, m, c, 11, S[37]), m = K(m, A, p, E, f, 16, S[38]), E = K(E, m, A, p, g, 23, S[39]), p = K(p, E, m, A, D, 4, S[40]), A = K(A, p, E, m, n, 11, S[41]), m = K(m, A, p, E, l, 16, S[42]), E = K(E, m, A, p, d, 23, S[43]), p = K(p, E, m, A, h, 4, S[44]), A = K(A, p, E, m, R, 11, S[45]), m = K(m, A, p, E, se, 16, S[46]), E = K(E, m, A, p, a, 23, S[47]), p = j(p, E, m, A, n, 6, S[48]), A = j(A, p, E, m, f, 10, S[49]), m = j(m, A, p, E, L, 15, S[50]), E = j(E, m, A, p, u, 21, S[51]), p = j(p, E, m, A, R, 6, S[52]), A = j(A, p, E, m, l, 10, S[53]), m = j(m, A, p, E, g, 15, S[54]), E = j(E, m, A, p, i, 21, S[55]), p = j(p, E, m, A, I, 6, S[56]), A = j(A, p, E, m, se, 10, S[57]), m = j(m, A, p, E, d, 15, S[58]), E = j(E, m, A, p, D, 21, S[59]), p = j(p, E, m, A, c, 6, S[60]), A = j(A, p, E, m, T, 10, S[61]), m = j(m, A, p, E, a, 15, S[62]), E = j(E, m, A, p, h, 21, S[63]), s[0] = s[0] + p | 0, s[1] = s[1] + E | 0, s[2] = s[2] + m | 0, s[3] = s[3] + A | 0
        }
        _doFinalize() {
            const e = this._data,
                t = e.words,
                r = this._nDataBytes * 8,
                s = e.sigBytes * 8;
            t[s >>> 5] |= 128 << 24 - s % 32;
            const n = Math.floor(r / 4294967296),
                i = r;
            t[(s + 64 >>> 9 << 4) + 15] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360, t[(s + 64 >>> 9 << 4) + 14] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360, e.sigBytes = (t.length + 1) * 4, this._process();
            const a = this._hash,
                l = a.words;
            for (let c = 0; c < 4; c += 1) {
                const u = l[c];
                l[c] = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360
            }
            return a
        }
        clone() {
            const e = super.clone.call(this);
            return e._hash = this._hash.clone(), e
        }
    },
    Hs = class extends X {
        constructor(e) {
            super(), this.cfg = Object.assign(new X, {
                keySize: 128 / 32,
                hasher: Sv,
                iterations: 1
            }, e)
        }
        compute(e, t) {
            let r;
            const {
                cfg: s
            } = this, n = s.hasher.create(), i = te.create(), a = i.words, {
                keySize: l,
                iterations: c
            } = s;
            for (; a.length < l;) {
                r && n.update(r), r = n.update(e).finalize(t), n.reset();
                for (let u = 1; u < c; u += 1) r = n.finalize(r), n.reset();
                i.concat(r)
            }
            return i.sigBytes = l * 4, i
        }
    },
    Te = typeof Object.assign != "function" ? function(e) {
        if (e == null) throw new TypeError("Cannot convert undefined or null to object");
        e = Object(e);
        for (let t = 1; t < arguments.length; t++) {
            const r = arguments[t];
            if (r != null)
                for (const s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
        }
        return e
    } : Object.assign,
    it = class extends Jn {
        constructor(e, t, r) {
            super(), this.cfg = Te(new X, r), this._xformMode = e, this._key = t, this.reset()
        }
        static createEncryptor(e, t) {
            return this.create(this._ENC_XFORM_MODE, e, t)
        }
        static createDecryptor(e, t) {
            return this.create(this._DEC_XFORM_MODE, e, t)
        }
        static _createHelper(e) {
            const t = r => typeof r == "string" ? ti : $e;
            return {
                encrypt(r, s, n) {
                    return t(s).encrypt(e, r, s, n)
                },
                decrypt(r, s, n) {
                    return t(s).decrypt(e, r, s, n)
                }
            }
        }
        reset() {
            super.reset.call(this), this._doReset()
        }
        process(e) {
            return this._append(e), this._process()
        }
        finalize(e) {
            return e && this._append(e), this._doFinalize()
        }
    };
it._ENC_XFORM_MODE = 1;
it._DEC_XFORM_MODE = 2;
it.keySize = 128 / 32;
it.ivSize = 128 / 32;
var Rv = class extends X {
    constructor(e, t) {
        super(), this._cipher = e, this._iv = t
    }
    static createEncryptor(e, t) {
        return this.Encryptor.create(e, t)
    }
    static createDecryptor(e, t) {
        return this.Decryptor.create(e, t)
    }
};

function Zn(e, t, r) {
    const s = e;
    let n;
    const i = this._iv;
    i ? (n = i, this._iv = void 0) : n = this._prevBlock;
    for (let a = 0; a < r; a += 1) s[t + a] ^= n[a]
}
var nt = class extends Rv {};
nt.Encryptor = class extends nt {
    processBlock(e, t) {
        const r = this._cipher,
            {
                blockSize: s
            } = r;
        Zn.call(this, e, t, s), r.encryptBlock(e, t), this._prevBlock = e.slice(t, t + s)
    }
};
nt.Decryptor = class extends nt {
    processBlock(e, t) {
        const r = this._cipher,
            {
                blockSize: s
            } = r,
            n = e.slice(t, t + s);
        r.decryptBlock(e, t), Zn.call(this, e, t, s), this._prevBlock = n
    }
};
var Tv = {
        pad(e, t) {
            const r = t * 4,
                s = r - e.sigBytes % r,
                n = s << 24 | s << 16 | s << 8 | s,
                i = [];
            for (let l = 0; l < s; l += 4) i.push(n);
            const a = te.create(i, s);
            e.concat(a)
        },
        unpad(e) {
            const t = e,
                r = t.words[t.sigBytes - 1 >>> 2] & 255;
            t.sigBytes -= r
        }
    },
    ei = class extends it {
        constructor(e, t, r) {
            super(e, t, Te({
                mode: nt,
                padding: Tv
            }, r)), this.blockSize = 128 / 32
        }
        reset() {
            let e;
            super.reset.call(this);
            const {
                cfg: t
            } = this, {
                iv: r,
                mode: s
            } = t;
            this._xformMode === this.constructor._ENC_XFORM_MODE ? e = s.createEncryptor : (e = s.createDecryptor, this._minBufferSize = 1), this._mode = e.call(s, this, r && r.words), this._mode.__creator = e
        }
        _doProcessBlock(e, t) {
            this._mode.processBlock(e, t)
        }
        _doFinalize() {
            let e;
            const {
                padding: t
            } = this.cfg;
            return this._xformMode === this.constructor._ENC_XFORM_MODE ? (t.pad(this._data, this.blockSize), e = this._process(!0)) : (e = this._process(!0), t.unpad(e)), e
        }
    },
    Dr = class extends X {
        constructor(e) {
            super(), this.mixIn(e)
        }
        toString(e) {
            return (e || this.formatter).stringify(this)
        }
    },
    bv = {
        stringify(e) {
            let t;
            const {
                ciphertext: r,
                salt: s
            } = e;
            return s ? t = te.create([1398893684, 1701076831]).concat(s).concat(r) : t = r, t.toString(Vs)
        },
        parse(e) {
            let t;
            const r = Vs.parse(e),
                s = r.words;
            return s[0] === 1398893684 && s[1] === 1701076831 && (t = te.create(s.slice(2, 4)), s.splice(0, 4), r.sigBytes -= 16), Dr.create({
                ciphertext: r,
                salt: t
            })
        }
    },
    $e = class extends X {
        static encrypt(e, t, r, s) {
            const n = Te(new X, this.cfg, s),
                i = e.createEncryptor(r, n),
                a = i.finalize(t),
                l = i.cfg;
            return Dr.create({
                ciphertext: a,
                key: r,
                iv: l.iv,
                algorithm: e,
                mode: l.mode,
                padding: l.padding,
                blockSize: i.blockSize,
                formatter: n.format
            })
        }
        static decrypt(e, t, r, s) {
            let n = t;
            const i = Te(new X, this.cfg, s);
            return n = this._parse(n, i.format), e.createDecryptor(r, i).finalize(n.ciphertext)
        }
        static _parse(e, t) {
            return typeof e == "string" ? t.parse(e, this) : e
        }
    };
$e.cfg = Te(new X, {
    format: bv
});
var Nv = {
        execute(e, t, r, s, n) {
            let i = s;
            i || (i = te.random(64 / 8));
            let a;
            n ? a = Hs.create({
                keySize: t + r,
                hasher: n
            }).compute(e, i) : a = Hs.create({
                keySize: t + r
            }).compute(e, i);
            const l = te.create(a.words.slice(t), r * 4);
            return a.sigBytes = t * 4, Dr.create({
                key: a,
                iv: l,
                salt: i
            })
        }
    },
    ti = class extends $e {
        static encrypt(e, t, r, s) {
            const n = Te(new X, this.cfg, s),
                i = n.kdf.execute(r, e.keySize, e.ivSize, n.salt, n.hasher);
            n.iv = i.iv;
            const a = $e.encrypt.call(this, e, t, i.key, n);
            return a.mixIn(i), a
        }
        static decrypt(e, t, r, s) {
            let n = t;
            const i = Te(new X, this.cfg, s);
            n = this._parse(n, i.format);
            const a = i.kdf.execute(r, e.keySize, e.ivSize, n.salt, i.hasher);
            return i.iv = a.iv, $e.decrypt.call(this, e, n, a.key, i)
        }
    };
ti.cfg = Te($e.cfg, {
    kdf: Nv
});
var J = [],
    ri = [],
    si = [],
    ni = [],
    ii = [],
    ai = [],
    hr = [],
    gr = [],
    vr = [],
    fr = [],
    ie = [];
for (let e = 0; e < 256; e += 1) e < 128 ? ie[e] = e << 1 : ie[e] = e << 1 ^ 283;
var ne = 0,
    ge = 0;
for (let e = 0; e < 256; e += 1) {
    let t = ge ^ ge << 1 ^ ge << 2 ^ ge << 3 ^ ge << 4;
    t = t >>> 8 ^ t & 255 ^ 99, J[ne] = t, ri[t] = ne;
    const r = ie[ne],
        s = ie[r],
        n = ie[s];
    let i = ie[t] * 257 ^ t * 16843008;
    si[ne] = i << 24 | i >>> 8, ni[ne] = i << 16 | i >>> 16, ii[ne] = i << 8 | i >>> 24, ai[ne] = i, i = n * 16843009 ^ s * 65537 ^ r * 257 ^ ne * 16843008, hr[t] = i << 24 | i >>> 8, gr[t] = i << 16 | i >>> 16, vr[t] = i << 8 | i >>> 24, fr[t] = i, ne ? (ne = r ^ ie[ie[ie[n ^ r]]], ge ^= ie[ie[ge]]) : (ge = 1, ne = ge)
}
var Ov = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
    oi = class extends ei {
        _doReset() {
            let e;
            if (this._nRounds && this._keyPriorReset === this._key) return;
            this._keyPriorReset = this._key;
            const t = this._keyPriorReset,
                r = t.words,
                s = t.sigBytes / 4;
            this._nRounds = s + 6;
            const n = (this._nRounds + 1) * 4;
            this._keySchedule = [];
            const i = this._keySchedule;
            for (let l = 0; l < n; l += 1) l < s ? i[l] = r[l] : (e = i[l - 1], l % s ? s > 6 && l % s === 4 && (e = J[e >>> 24] << 24 | J[e >>> 16 & 255] << 16 | J[e >>> 8 & 255] << 8 | J[e & 255]) : (e = e << 8 | e >>> 24, e = J[e >>> 24] << 24 | J[e >>> 16 & 255] << 16 | J[e >>> 8 & 255] << 8 | J[e & 255], e ^= Ov[l / s | 0] << 24), i[l] = i[l - s] ^ e);
            this._invKeySchedule = [];
            const a = this._invKeySchedule;
            for (let l = 0; l < n; l += 1) {
                const c = n - l;
                l % 4 ? e = i[c] : e = i[c - 4], l < 4 || c <= 4 ? a[l] = e : a[l] = hr[J[e >>> 24]] ^ gr[J[e >>> 16 & 255]] ^ vr[J[e >>> 8 & 255]] ^ fr[J[e & 255]]
            }
        }
        encryptBlock(e, t) {
            this._doCryptBlock(e, t, this._keySchedule, si, ni, ii, ai, J)
        }
        decryptBlock(e, t) {
            const r = e;
            let s = r[t + 1];
            r[t + 1] = r[t + 3], r[t + 3] = s, this._doCryptBlock(r, t, this._invKeySchedule, hr, gr, vr, fr, ri), s = r[t + 1], r[t + 1] = r[t + 3], r[t + 3] = s
        }
        _doCryptBlock(e, t, r, s, n, i, a, l) {
            const c = e,
                u = this._nRounds;
            let d = c[t] ^ r[0],
                f = c[t + 1] ^ r[1],
                I = c[t + 2] ^ r[2],
                h = c[t + 3] ^ r[3],
                g = 4;
            for (let se = 1; se < u; se += 1) {
                const p = s[d >>> 24] ^ n[f >>> 16 & 255] ^ i[I >>> 8 & 255] ^ a[h & 255] ^ r[g];
                g += 1;
                const E = s[f >>> 24] ^ n[I >>> 16 & 255] ^ i[h >>> 8 & 255] ^ a[d & 255] ^ r[g];
                g += 1;
                const m = s[I >>> 24] ^ n[h >>> 16 & 255] ^ i[d >>> 8 & 255] ^ a[f & 255] ^ r[g];
                g += 1;
                const A = s[h >>> 24] ^ n[d >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[I & 255] ^ r[g];
                g += 1, d = p, f = E, I = m, h = A
            }
            const T = (l[d >>> 24] << 24 | l[f >>> 16 & 255] << 16 | l[I >>> 8 & 255] << 8 | l[h & 255]) ^ r[g];
            g += 1;
            const R = (l[f >>> 24] << 24 | l[I >>> 16 & 255] << 16 | l[h >>> 8 & 255] << 8 | l[d & 255]) ^ r[g];
            g += 1;
            const D = (l[I >>> 24] << 24 | l[h >>> 16 & 255] << 16 | l[d >>> 8 & 255] << 8 | l[f & 255]) ^ r[g];
            g += 1;
            const L = (l[h >>> 24] << 24 | l[d >>> 16 & 255] << 16 | l[f >>> 8 & 255] << 8 | l[I & 255]) ^ r[g];
            g += 1, c[t] = T, c[t + 1] = R, c[t + 2] = D, c[t + 3] = L
        }
    };
oi.keySize = 256 / 32;
var li = ei._createHelper(oi),
    ci = "RudderEncrypt:",
    ui = "Rudder",
    Dv = e => `${ci}${li.encrypt(e,ui).toString()}`,
    pr = e => e.startsWith(ci) ? li.decrypt(e.substring(14), ui).toString(Or) : e,
    Ys = "StorageEncryptionLegacy",
    Cv = () => ({
        name: Ys,
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, Ys]
        },
        storage: {
            encrypt(e) {
                return Dv(e)
            },
            decrypt(e) {
                return pr(e)
            }
        }
    }),
    Pv = e => `Failed to retrieve or parse data for "${e}" from storage.`,
    Mv = "StorageMigratorPlugin",
    Qs = "StorageMigrator",
    Lv = () => ({
        name: Qs,
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, Qs]
        },
        storage: {
            migrate(e, t, r, s) {
                try {
                    const n = t.getItem(e);
                    if (G(n)) return null;
                    let i = n,
                        a = pr(i);
                    for (a = nr(a), i = JSON.parse(a); k(i) && (a = pr(i), a = nr(a), a !== i);) i = JSON.parse(a);
                    return i
                } catch (n) {
                    const i = Pv(e);
                    return r ? .onError({
                        error: n,
                        context: Mv,
                        customMessage: i,
                        groupingHash: i
                    }), null
                }
            }
        }
    }),
    kv = {
        maxRetryDelay: 36e4,
        minRetryDelay: 1e3,
        backoffFactor: 2,
        maxAttempts: 10,
        maxItems: 100
    },
    Uv = 3e4,
    wv = "v1",
    $v = "rudder",
    Bv = "XhrQueuePlugin",
    xv = (e, t) => `${e}${y}Failed to deliver event(s). Cause: ${t}.`,
    di = (e, t, r) => H({
        batch: e,
        sentAt: t
    }, !0, void 0, r),
    Fv = e => x(kv, e),
    hi = (e, t) => {
        const r = new URL(e);
        return new URL(Nr([r.pathname, "/", wv, "/", t].join("")), r).href
    },
    Gv = e => hi(e, "batch"),
    Vv = (e, t, r, s) => {
        if (!s) return;
        let n = xv(Bv, e ? .error ? .message ? ? "Unknown");
        const i = "The event(s) will be dropped.";
        t ? r.willBeRetried ? (n = `${n} The event(s) will be retried.`, r.retryAttemptNumber > 0 && (n = `${n} Retry attempt ${r.retryAttemptNumber} of ${r.maxRetryAttempts}.`), s.warn(n)) : s.error(`${n} Retries exhausted (${r.maxRetryAttempts}). ${i}`) : s.error(`${n} ${i}`)
    },
    Hv = (e, t, r, s) => {
        let n, i, a;
        const l = Me();
        if (Array.isArray(e)) {
            const c = e.map(u => ar(u.event, l));
            n = di(c, l, s), i = e[0] ? b(e[0].headers) : {}, a = Gv(t.lifecycle.activeDataplaneUrl.value)
        } else {
            const {
                url: c,
                event: u,
                headers: d
            } = e, f = ar(u, l);
            n = Yn(f, s), i = b(d), a = c
        }
        return i.SentAt = l, r.reclaimed && (i["Rsa-Recovered"] = "true"), r.retryAttemptNumber > 0 && (i["Rsa-Retry-Attempt"] = r.retryAttemptNumber.toString(), i["Rsa-Since-Last-Attempt"] = r.timeSinceLastAttempt.toString(), i["Rsa-Since-First-Attempt"] = r.timeSinceFirstAttempt.toString(), i["Rsa-Retry-Reason"] = r.retryReason), {
            data: n,
            headers: i,
            url: a
        }
    },
    zs = "XhrQueue",
    Yv = () => ({
        name: zs,
        deps: [],
        initialize: e => {
            e.plugins.loadedPlugins.value = [...e.plugins.loadedPlugins.value, zs]
        },
        dataplaneEventsQueue: {
            init(e, t, r, s, n) {
                const i = e.lifecycle.writeKey.value;
                t.setAuthHeader(i);
                const a = Fv(e.loadOptions.value.queueOptions);
                return new Ft(`${$v}_${i}`, a, (l, c, u) => {
                    const {
                        data: d,
                        url: f,
                        headers: I
                    } = Hv(l, e, u, n);
                    t.getAsyncData({
                        url: f,
                        options: {
                            method: "POST",
                            headers: I,
                            data: d,
                            sendRawData: !0
                        },
                        isRawResponse: !0,
                        timeout: Uv,
                        callback: (h, g) => {
                            if (w(g ? .error)) {
                                c(null);
                                return
                            }
                            const T = Gn(g ? .xhr ? .status ? ? 0);
                            if (Vv(g, T, u, n), T) {
                                let R = ir;
                                g ? .timedOut ? R = fc : N(g ? .xhr ? .status) && (R = `server-${g.xhr.status}`), c(g, {
                                    retryReason: R
                                })
                            } else c(null)
                        }
                    })
                }, r, zn(n), n, l => {
                    const c = Me(),
                        u = l.map(d => d.event);
                    return di(u, c, n) ? .length
                })
            },
            enqueue(e, t, r, s, n) {
                r.sentAt = Me(), Qn(r, n);
                const i = e.lifecycle.activeDataplaneUrl.value,
                    a = hi(i, r.type),
                    l = {
                        AnonymousId: Ir(r.anonymousId)
                    };
                t.addItem({
                    url: a,
                    headers: l,
                    event: r
                })
            }
        }
    }),
    Qv = () => ({
        BeaconQueue: jc,
        CustomConsentManager: qc,
        DeviceModeDestinations: yg,
        DeviceModeTransformation: Dg,
        ExternalAnonymousId: Pg,
        GoogleLinker: Kg,
        IubendaConsentManager: ev,
        KetchConsentManager: ov,
        NativeDestinationQueue: vv,
        OneTrustConsentManager: Ev,
        StorageEncryption: mv,
        StorageEncryptionLegacy: Cv,
        StorageMigrator: Lv,
        XhrQueue: Yv
    }),
    gi = () => ({}),
    zv = () => Qv(),
    Kv = e => ({}),
    zt = { ...gi(),
        ...zv()
    },
    jv = e => ({ ...Kv()
    }),
    Wv = class {
        constructor(e, t, r) {
            this.engine = e, this.errorHandler = t, this.logger = r, this.onError = this.onError.bind(this)
        }
        init() {
            o.lifecycle.status.value = "pluginsLoading", this.setActivePlugins(), this.registerLocalPlugins(), this.registerRemotePlugins(), this.attachEffects()
        }
        attachEffects() {
            de(() => {
                (o.plugins.activePlugins.value.length === 0 || o.plugins.loadedPlugins.value.length + o.plugins.failedPlugins.value.length === o.plugins.totalPluginsToLoad.value) && Y(() => {
                    o.plugins.ready.value = !0, o.lifecycle.status.value = "pluginsReady"
                })
            })
        }
        getPluginsToLoadBasedOnConfig() {
            let e = o.plugins.pluginsToLoadFromConfig.value;
            if (!e) return [];
            e = e.filter(s => ac.includes(s) ? (this.logger.warn(Yo(Ye, s)), !1) : !0);
            const t = [{
                    configurationStatus: () => N(o.dataPlaneEvents.eventsQueuePluginName.value),
                    configurationStatusStr: "Data plane events delivery is enabled",
                    activePluginName: o.dataPlaneEvents.eventsQueuePluginName.value,
                    supportedPlugins: Object.values(tl),
                    shouldAddMissingPlugins: !0
                }, {
                    configurationStatus: () => ss(o.nativeDestinations.configuredDestinations.value).length > 0,
                    configurationStatusStr: "Device mode destinations are connected to the source",
                    supportedPlugins: ["DeviceModeDestinations", "NativeDestinationQueue"]
                }, {
                    configurationStatus: () => ss(o.nativeDestinations.configuredDestinations.value).some(s => s.shouldApplyDeviceModeTransformation),
                    configurationStatusStr: "Device mode transformations are enabled for at least one destination",
                    supportedPlugins: ["DeviceModeTransformation"]
                }, {
                    configurationStatus: () => N(o.consents.activeConsentManagerPluginName.value),
                    configurationStatusStr: "Consent management is enabled",
                    activePluginName: o.consents.activeConsentManagerPluginName.value,
                    supportedPlugins: Object.values(rr)
                }, {
                    configurationStatus: () => N(o.storage.encryptionPluginName.value),
                    configurationStatusStr: "Storage encryption is enabled",
                    activePluginName: o.storage.encryptionPluginName.value,
                    supportedPlugins: Object.values(Et)
                }, {
                    configurationStatus: () => o.storage.migrate.value,
                    configurationStatusStr: "Storage migration is enabled",
                    supportedPlugins: ["StorageMigrator"]
                }],
                r = !1;
            return t.forEach(s => {
                s.configurationStatus() ? (e = e.filter(s.activePluginName ? n => !(n !== s.activePluginName && s.supportedPlugins.includes(n)) : n => N(n)), this.addMissingPlugins(s, r, e)) : e = e.filter(s.basePlugins !== void 0 ? n => !(s.basePlugins.includes(n) || s.supportedPlugins.includes(n)) : n => !s.supportedPlugins.includes(n))
            }), [...Object.keys(gi()), ...e]
        }
        addMissingPlugins(e, t, r) {
            const s = e.shouldAddMissingPlugins || t;
            let n;
            e.activePluginName ? n = [...e.basePlugins || [], e.activePluginName] : n = [...e.supportedPlugins];
            const i = n.filter(a => !r.includes(a));
            i.length > 0 && (s && r.push(...i), this.logger.warn(Qo(Ye, e.configurationStatusStr, i, s)))
        }
        setActivePlugins() {
            const e = this.getPluginsToLoadBasedOnConfig(),
                t = [...Object.keys(zt), ...ic],
                r = [],
                s = [];
            e.forEach(n => {
                t.includes(n) ? r.push(n) : s.push(n)
            }), s.length > 0 && this.logger.warn(jo(Ye, s)), Y(() => {
                o.plugins.totalPluginsToLoad.value = e.length, o.plugins.activePlugins.value = r, o.plugins.failedPlugins.value = s
            })
        }
        registerLocalPlugins() {
            const e = [];
            Object.entries(zt).forEach(([t, r]) => {
                o.plugins.activePlugins.value.includes(t) && (_(r) ? this.register([r()]) : e.push(t))
            }), e.length > 0 && (o.plugins.failedPlugins.value = [...o.plugins.failedPlugins.value, ...e], this.logger.error(Wo(Ye, e)))
        }
        registerRemotePlugins() {
            const e = jv(o.plugins.activePlugins.value);
            Promise.all(Object.keys(e).map(async t => {
                await e[t]().then(r => this.register([r.default()])).catch(r => {
                    o.plugins.failedPlugins.value = [...o.plugins.failedPlugins.value, t], this.onError(r, `Failed to load plugin "${t}"`, r)
                })
            })).catch(t => {
                this.onError(t)
            })
        }
        invokeMultiple(e, ...t) {
            try {
                return this.engine.invokeMultiple(e, ...t)
            } catch (r) {
                return this.onError(r, e), []
            }
        }
        invokeSingle(e, ...t) {
            try {
                return this.engine.invokeSingle(e, ...t)
            } catch (r) {
                return this.onError(r, e), null
            }
        }
        register(e) {
            e.forEach(t => {
                try {
                    this.engine.register(t, o)
                } catch (r) {
                    o.plugins.failedPlugins.value = [...o.plugins.failedPlugins.value, t.name], this.onError(r, `Failed to register plugin "${t.name}"`)
                }
            })
        }
        unregisterLocalPlugins() {
            Object.keys(zt).forEach(e => {
                try {
                    this.engine.unregister(e)
                } catch (t) {
                    this.onError(t, `Failed to unregister plugin "${e}"`)
                }
            })
        }
        onError(e, t, r) {
            this.errorHandler.onError({
                error: e,
                context: Ye,
                customMessage: t,
                groupingHash: r
            })
        }
    },
    Xv = "__tld__",
    vi = "clientDataInCookie",
    fi = "clientDataInLocalStorage",
    qv = "clientDataInMemory",
    pi = "clientDataInSessionStorage",
    Ei = ["userId", "userTraits", "anonymousId", "groupId", "groupTraits", "initialReferrer", "initialReferringDomain", "sessionInfo", "authToken"],
    Ce = {
        [V]: vi,
        [F]: fi,
        [re]: qv,
        [Z]: pi
    },
    Jv = e => {
        const t = document.createElement("a");
        return t.href = e, t.hostname
    },
    Zv = e => {
        const t = (typeof globalThis.URL != "function" ? Jv(e) : new URL(e).hostname) ? .split(".") ? ? [],
            r = t[t.length - 1],
            s = [];
        if (t.length === 4 && r && r === parseInt(r, 10).toString()) return s;
        if (t.length <= 1) return t[0] && t[0].indexOf("localhost") !== -1 ? ["localhost"] : s;
        for (let n = t.length - 2; n >= 0; n -= 1) s.push(t.slice(n).join("."));
        return s
    },
    mi = e => {
        const t = Zv(e);
        for (let r = 0; r < t.length; r += 1) {
            const s = t[r],
                n = Xv,
                i = {
                    domain: `${s.indexOf("localhost")!==-1?"":"."}${s}`
                };
            try {
                if (pe(n, 1, i), pe(n)) return pe(n, null, i), s
            } catch {
                try {
                    pe(n, null, i)
                } catch {}
            }
        }
        return ""
    },
    ef = () => {
        const e = `.${mi(globalThis.location.href)}`;
        return {
            maxage: Ra,
            path: "/",
            domain: !e || e === "." ? void 0 : e,
            samesite: "Lax",
            enabled: !0
        }
    },
    tf = () => ({
        enabled: !0
    }),
    rf = () => ({
        enabled: !0
    }),
    sf = () => ({
        enabled: !0
    }),
    nf = class {
        isEnabled = !0;
        length = 0;
        data = {};
        constructor(e) {
            this.options = sf(), this.logger = e
        }
        configure(e) {
            return this.options = x(this.options, e ? ? {}), this.isEnabled = !!this.options.enabled, this.options
        }
        setItem(e, t) {
            return this.data[e] = t, this.length = Object.keys(this.data).length, t
        }
        getItem(e) {
            return e in this.data ? this.data[e] : null
        }
        removeItem(e) {
            return e in this.data && delete this.data[e], this.length = Object.keys(this.data).length, null
        }
        clear() {
            this.data = {}, this.length = 0
        }
        key(e) {
            return this.keys()[e] ? ? null
        }
        keys() {
            return Object.keys(this.data)
        }
    },
    Mt = new nf(Ae);

function af(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var yt = {
        exports: {}
    },
    of = yt.exports,
    Ks;

function lf() {
    return Ks || (Ks = 1, (function(e, t) {
        (function(r, s) {
            e.exports = s()
        })( of , function() {
            function r(h) {
                return h = JSON.stringify(h), !!/^\{[\s\S]*\}$/.test(h)
            }

            function s(h) {
                return h === void 0 || typeof h == "function" ? h + "" : JSON.stringify(h)
            }

            function n(h) {
                if (typeof h == "string") try {
                    return JSON.parse(h)
                } catch {
                    return h
                }
            }

            function i(h) {
                return {}.toString.call(h) === "[object Function]"
            }

            function a(h) {
                return Object.prototype.toString.call(h) === "[object Array]"
            }

            function l(h) {
                var g = "_Is_Incognit",
                    T = "yes";
                try {
                    h || (h = window.localStorage), h.setItem(g, T), h.removeItem(g)
                } catch {
                    var R = {};
                    R._data = {}, R.setItem = function(L, se) {
                        return R._data[L] = String(se)
                    }, R.getItem = function(L) {
                        return R._data.hasOwnProperty(L) ? R._data[L] : void 0
                    }, R.removeItem = function(L) {
                        return delete R._data[L]
                    }, R.clear = function() {
                        return R._data = {}
                    }, h = R
                } finally {
                    h.getItem(g) === T && h.removeItem(g)
                }
                return h
            }
            var c = l();

            function u() {
                if (!(this instanceof u)) return new u
            }
            u.prototype = {
                set: function(g, T) {
                    if (g && !r(g)) c.setItem(g, s(T));
                    else if (r(g))
                        for (var R in g) this.set(R, g[R]);
                    return this
                },
                get: function(g) {
                    if (g === void 0) {
                        var T = {};
                        return this.forEach(function(E, m) {
                            return T[E] = m
                        }), T
                    }
                    if (g.charAt(0) === "?") return this.has(g.substr(1));
                    var R = arguments;
                    if (R.length > 1) {
                        for (var D = {}, L = 0, se = R.length; L < se; L++) {
                            var p = n(c.getItem(R[L]));
                            this.has(R[L]) && (D[R[L]] = p)
                        }
                        return D
                    }
                    return n(c.getItem(g))
                },
                clear: function() {
                    return c.clear(), this
                },
                remove: function(g) {
                    var T = this.get(g);
                    return c.removeItem(g), T
                },
                has: function(g) {
                    return {}.hasOwnProperty.call(this.get(), g)
                },
                keys: function() {
                    var g = [];
                    return this.forEach(function(T) {
                        g.push(T)
                    }), g
                },
                forEach: function(g) {
                    for (var T = 0, R = c.length; T < R; T++) {
                        var D = c.key(T);
                        g(D, this.get(D))
                    }
                    return this
                },
                search: function(g) {
                    for (var T = this.keys(), R = {}, D = 0, L = T.length; D < L; D++) T[D].indexOf(g) > -1 && (R[T[D]] = this.get(T[D]));
                    return R
                },
                len: function() {
                    return c.length
                }
            };
            var d = null;

            function f(h, g) {
                var T = arguments,
                    R = null;
                if (d || (d = u()), T.length === 0) return d.get();
                if (T.length === 1) {
                    if (typeof h == "string") return d.get(h);
                    if (r(h)) return d.set(h)
                }
                if (T.length === 2 && typeof h == "string") {
                    if (!g) return d.remove(h);
                    if (g && typeof g == "string") return d.set(h, g);
                    g && i(g) && (R = null, R = g(h, d.get(h)), f.set(h, R))
                }
                if (T.length === 2 && a(h) && i(g))
                    for (var D = 0, L = h.length; D < L; D++) R = g(h[D], d.get(h[D])), f.set(h[D], R);
                return f
            }
            for (var I in u.prototype) f[I] = u.prototype[I];
            return f
        })
    })(yt)), yt.exports
}
var Ne = af(lf()),
    cf = class {
        isSupportAvailable = !0;
        isEnabled = !0;
        length = 0;
        constructor(e) {
            this.options = tf(), this.logger = e
        }
        configure(e) {
            return this.options = x(this.options, e ? ? {}), this.isSupportAvailable = Se(F), this.isEnabled = !!(this.options.enabled && this.isSupportAvailable), this.options
        }
        setItem(e, t) {
            Ne.set(e, t), this.length = Ne.len()
        }
        getItem(e) {
            const t = Ne.get(e);
            return w(t) ? null : t
        }
        removeItem(e) {
            Ne.remove(e), this.length = Ne.len()
        }
        clear() {
            Ne.clear(), this.length = 0
        }
        key(e) {
            return this.keys()[e] ? ? null
        }
        keys() {
            return Ne.keys()
        }
    },
    Cr = new cf(Ae),
    uf = class {
        isSupportAvailable = !0;
        isEnabled = !0;
        length = 0;
        constructor(e) {
            this.options = rf(), this.logger = e
        }
        configure(e) {
            return this.options = x(this.options, e ? ? {}), this.isSupportAvailable = Se(Z), this.isSupportAvailable && (this.store = globalThis.sessionStorage), this.isEnabled = !!(this.options.enabled && this.isSupportAvailable), this.options
        }
        setItem(e, t) {
            this.store && (this.store.setItem(e, t), this.length = this.store.length)
        }
        getItem(e) {
            if (!this.store) return null;
            const t = this.store.getItem(e);
            return w(t) ? null : t
        }
        removeItem(e) {
            this.store && (this.store.removeItem(e), this.length = this.store.length)
        }
        clear() {
            this.store ? .clear(), this.length = 0
        }
        key(e) {
            return this.store ? .key(e) ? ? null
        }
        keys() {
            const e = [];
            if (!this.store) return e;
            for (let t = 0; t < this.store.length; t += 1) {
                const r = this.store.key(t);
                r !== null && e.push(r)
            }
            return e
        }
    },
    Pr = new uf(Ae),
    df = class {
        isSupportAvailable = !0;
        isEnabled = !0;
        length = 0;
        constructor(e) {
            this.logger = e
        }
        configure(e) {
            return this.options || (this.options = ef()), this.options = x(this.options, e ? ? {}), this.options.sameDomainCookiesOnly && delete this.options.domain, this.isSupportAvailable = Se(V, this), this.isEnabled = !!(this.options.enabled && this.isSupportAvailable), this.options
        }
        setItem(e, t) {
            return pe(e, t, this.options, this.logger), this.length = Object.keys(pe()).length, !0
        }
        getItem(e) {
            const t = pe(e);
            return w(t) ? null : t
        }
        removeItem(e) {
            const t = this.setItem(e, null);
            return this.length = Object.keys(pe()).length, t
        }
        clear() {}
        key(e) {
            return this.keys()[e] ? ? null
        }
        keys() {
            return Object.keys(pe())
        }
    },
    Mr = new df(Ae),
    ae = e => {
        switch (e) {
            case F:
                return Cr;
            case Z:
                return Pr;
            case re:
                return Mt;
            case V:
                return Mr;
            default:
                return Mt
        }
    },
    hf = e => {
        const t = Mr.configure(e);
        o.storage.cookie.value = {
            maxage: t.maxage,
            path: t.path,
            domain: t.domain,
            samesite: t.samesite,
            expires: t.expires,
            secure: t.secure
        }
    },
    gf = e => {
        Cr.configure(e)
    },
    vf = e => {
        Mt.configure(e)
    },
    ff = e => {
        Pr.configure(e)
    },
    pf = (e = {}, t = {}, r = {}, s = {}) => {
        hf(e), gf(t), vf(r), ff(s)
    },
    Ef = class {
        constructor(e, t, r) {
            this.id = e.id, this.name = e.name, this.isEncrypted = e.isEncrypted ? ? !1, this.validKeys = e.validKeys ? ? {}, this.engine = t, this.noKeyValidation = Object.keys(this.validKeys).length === 0, this.noCompoundKey = e.noCompoundKey, this.noSwapOnQuota = e.noSwapOnQuota, this.originalEngine = this.engine, this.errorHandler = e.errorHandler, this.logger = e.logger, this.pluginsManager = r
        }
        createValidKey(e) {
            const {
                name: t,
                id: r,
                validKeys: s,
                noKeyValidation: n,
                noCompoundKey: i
            } = this;
            if (n) return i ? e : [t, r, e].join(".");
            let a;
            return Object.values(s).forEach(l => {
                l === e && (a = i ? e : [t, r, e].join("."))
            }), a
        }
        swapQueueStoreToInMemoryEngine() {
            const {
                validKeys: e,
                noCompoundKey: t
            } = this, r = ae(re), s = this.engine, n = Object.values(e).map(a => [a, this.get(a)]), i = !t && s !== r;
            this.engine = r, n.forEach(([a, l]) => {
                if (G(l)) return;
                this.set(a, l);
                const c = this.createValidKey(a);
                if (i && c && !G(this.get(a))) try {
                    s.removeItem(c)
                } catch {}
            })
        }
        set(e, t) {
            const r = this.createValidKey(e);
            if (r) try {
                this.engine.setItem(r, this.encrypt(H(t, !1, [], this.logger)))
            } catch (s) {
                if (Hn(s)) {
                    if (this.logger.warn(wo(`Store ${this.id}`)), this.noSwapOnQuota) return;
                    this.swapQueueStoreToInMemoryEngine(), this.set(e, t)
                } else {
                    const n = vo(e);
                    this.onError(s, n, n)
                }
            }
        }
        get(e) {
            const t = this.createValidKey(e);
            let r;
            try {
                return !t || (r = this.decrypt(this.engine.getItem(t)), G(r) || r === "") ? null : JSON.parse(r)
            } catch (s) {
                const n = o.storage.encryptionPluginName.value;
                if (!n || !o.plugins.failedPlugins.value.includes(n)) {
                    const i = fo(e);
                    this.onError(s, i, i)
                }
                return null
            }
        }
        remove(e) {
            const t = this.createValidKey(e);
            t && this.engine.removeItem(t)
        }
        getOriginalEngine() {
            return this.originalEngine
        }
        decrypt(e) {
            return G(e) ? null : this.crypto(e, "decrypt")
        }
        encrypt(e) {
            return this.crypto(e, "encrypt")
        }
        crypto(e, t) {
            if (!this.isEncrypted || !e || typeof e != "string" || Qi(e) === "") return e;
            const r = `storage.${t}`,
                s = this.pluginsManager ? this.pluginsManager.invokeSingle(r, e) : e;
            return typeof s > "u" ? e : s ? ? ""
        }
        onError(e, t, r) {
            this.errorHandler.onError({
                error: e,
                context: `Store ${this.id}`,
                customMessage: t,
                groupingHash: r
            })
        }
    },
    mf = (e, t) => {
        let r;
        if (e.consents.preConsent.value.enabled) switch (e.consents.preConsent.value.storage ? .strategy) {
            case "none":
                r = Ie;
                break;
            case "session":
                t !== "sessionInfo" && (r = Ie);
                break;
            case "anonymousId":
                t !== "anonymousId" && (r = Ie)
        }
        return r
    },
    Af = class {
        stores = {};
        isInitialized = !1;
        constructor(e, t, r) {
            this.errorHandler = t, this.logger = r, this.pluginsManager = e
        }
        init() {
            if (this.isInitialized) return;
            const e = o.loadOptions.value,
                t = {
                    cookieStorageOptions: {
                        samesite: e.sameSiteCookie,
                        secure: e.secureCookie,
                        domain: e.setCookieDomain,
                        sameDomainCookiesOnly: e.sameDomainCookiesOnly
                    },
                    localStorageOptions: {},
                    inMemoryStorageOptions: {},
                    sessionStorageOptions: {}
                };
            pf(Ke(x(t.cookieStorageOptions ? ? {}, o.storage.cookie ? .value ? ? {})), Ke(t.localStorageOptions), Ke(t.inMemoryStorageOptions), Ke(t.sessionStorageOptions)), this.initClientDataStores(), this.isInitialized = !0
        }
        initClientDataStores() {
            this.initializeStorageState(), [re, F, V, Z].forEach(e => {
                ae(e) ? .isEnabled && this.setStore({
                    id: Ce[e],
                    name: Ce[e],
                    isEncrypted: !0,
                    noCompoundKey: !0,
                    type: e,
                    errorHandler: this.errorHandler,
                    logger: this.logger
                })
            })
        }
        initializeStorageState() {
            let e = o.loadOptions.value.storage ? .type,
                t = o.loadOptions.value.storage ? .entries;
            const r = o.consents.postConsent.value.storage;
            (N(r ? .type) || N(r ? .entries)) && (e = r ? .type, t = r ? .entries);
            const s = o.consents.preConsent.value,
                n = s.enabled === !0 && !s.storage ? .strategy ? Ie : za;
            e !== void 0 && !tt.includes(e) && (e = void 0);
            let i = !0,
                a = {};
            Ei.forEach(l => {
                const c = l,
                    u = l,
                    d = t ? .[c] ? .type;
                let f = mf(o, l) ? ? d ? ? e ? ? n;
                tt.includes(f) || (f = n);
                const I = this.getResolvedStorageTypeForEntry(f, l);
                I !== Ie && (i = !1), a = { ...a,
                    [l]: {
                        type: I,
                        key: ke[u]
                    }
                }
            }), Y(() => {
                o.storage.entries.value = a, o.storage.trulyAnonymousTracking.value = i
            })
        }
        getResolvedStorageTypeForEntry(e, t) {
            let r = e;
            switch (e) {
                case F:
                    ae(F) ? .isEnabled || (r = re);
                    break;
                case Z:
                    ae(Z) ? .isEnabled || (r = re);
                    break;
                case re:
                case Ie:
                    break;
                case V:
                default:
                    ae(V) ? .isEnabled ? r = V : ae(F) ? .isEnabled ? r = F : ae(Z) ? .isEnabled ? r = Z : r = re
            }
            return r !== e && this.logger.warn($o(ji, t, e, r)), r
        }
        setStore(e) {
            const t = ae(e.type);
            return this.stores[e.id] = new Ef(e, t, this.pluginsManager), this.stores[e.id]
        }
        getStore(e) {
            return this.stores[e]
        }
    },
    yf = e => M(e) && M(e.source) && !G(e.source.id) && M(e.source.config) && Array.isArray(e.source.destinations),
    js = e => typeof e == "string" && tt.includes(e),
    Ai = (e, t, r) => {
        if (!M(e)) return;
        const {
            type: s,
            entries: n
        } = e;
        N(s) && !js(s) && r ? .warn(yo(t, s)), n && Object.entries(n).forEach(([i, a]) => {
            const l = a ? .type;
            N(l) && !js(l) && r ? .warn(_o(t, i, l))
        })
    },
    _f = e => {
        const t = document.createElement("a");
        return t.href = e, {
            host: t.host,
            protocol: t.protocol
        }
    },
    If = e => {
        const {
            host: t,
            protocol: r
        } = typeof globalThis.URL != "function" ? _f(e) : new URL(e), s = t.split(".");
        let n;
        return s.length > 2 ? n = s.slice(-2).join(".") : n = t, {
            topDomain: n,
            protocol: r
        }
    },
    Sf = /^https?:\/\//i,
    Rf = (e, t, r) => Sf.test(e) ? e : `${t||!r?window.location.origin:`${window.location.protocol}//${r}`}/${e.startsWith("/")?e.substring(1):e}`,
    _t = (e, t) => e === t || e.endsWith(`.${t}`),
    Tf = (e, t, r) => r || !t ? e === globalThis.location.hostname : _t(e, t),
    bf = e => {
        const {
            topDomain: t
        } = If(window.location.href);
        return t === e
    },
    Ge = e => e ? .endsWith("/") ? Ge(e.substring(0, e.length - 1)) : e,
    Nf = e => {
        try {
            return new URL(e).host
        } catch {
            return null
        }
    },
    Of = e => {
        try {
            return new URL(e).hostname
        } catch {
            return null
        }
    },
    yi = e => Nf(e) ? ? "",
    Df = e => {
        const t = {};
        try {
            const r = new URL(e),
                s = "utm_";
            r.searchParams.forEach((n, i) => {
                if (i.startsWith(s)) {
                    let a = i.substring(4);
                    a === "campaign" && (a = "name"), t[a] = n
                }
            })
        } catch {}
        return t
    },
    Cf = e => {
        let t = e;
        try {
            const r = new URL(e);
            t = r.origin + r.pathname + r.search
        } catch {}
        return t
    },
    Kt = "none",
    jt = "immediate",
    Pf = e => e ? .statsCollection ? .errors ? .enabled === !0,
    Mf = e => e ? .statsCollection ? .metrics ? .enabled === !0,
    Lf = (e, t) => {
        const r = {
            sendPageEvent: !1,
            trackConsent: !1,
            discardPreConsentEvents: !1
        };
        if (r.storage = o.consents.postConsent.value.storage, M(e)) {
            const s = b(e);
            N(s.storage) && (Ai(s.storage, Xi, t), r.storage = s.storage), oe(s.integrations) && (r.integrations = s.integrations), r.discardPreConsentEvents = s.discardPreConsentEvents === !0, r.sendPageEvent = s.sendPageEvent === !0, r.trackConsent = s.trackConsent === !0, oe(s.consentManagement) && (r.consentManagement = x(s.consentManagement, {
                enabled: o.consents.enabled.value
            }))
        }
        return r
    },
    Ws = e => oe(e) || Array.isArray(e),
    kf = (e, t) => {
        let {
            provider: r
        } = e;
        const s = r ? rr[r] : void 0;
        return r && !s && (t.error(Za(W, r, rr)), r = void 0), {
            provider: r,
            consentManagerPluginName: s
        }
    },
    _i = (e, t) => {
        let r, s = [],
            n = [],
            i = !1,
            a, l = e ? .enabled === !0;
        oe(e) && l && ({
            provider: a,
            consentManagerPluginName: r
        } = kf(e, t), Ws(e.allowedConsentIds) && (s = e.allowedConsentIds, i = !0), Ws(e.deniedConsentIds) && (n = e.deniedConsentIds, i = !0));
        const c = {
            allowedConsentIds: s,
            deniedConsentIds: n
        };
        return l = l && !!r, {
            provider: a,
            consentManagerPluginName: r,
            initialized: i,
            enabled: l,
            consentsData: c
        }
    },
    Uf = () => {
        const e = document.querySelector("script[data-rsa-write-key]");
        if (e && e.dataset.rsaWriteKey === o.lifecycle.writeKey.value) return e.src;
        const t = document.getElementsByTagName("script"),
            r = /(?:^|\/)rsa(\.min)?\.js$/;
        for (const s of t) {
            const n = s.getAttribute("src");
            if (n && r.test(n)) return n
        }
    },
    wf = e => {
        o.reporting.isErrorReportingEnabled.value = Pf(e.source.config) && !sa(), o.reporting.isMetricsReportingEnabled.value = Mf(e.source.config)
    },
    $f = () => {
        const e = mi(globalThis.location.href),
            {
                port: t
            } = globalThis.location;
        return {
            topDomain: e,
            topHost: e && t ? `${e}:${t}` : e
        }
    },
    Bf = (e, t, r, s, n) => {
        if (!Tf(e, r.topDomain, s)) return n.error(To(W, e, r.hostname)), !1;
        if (s || !N(t)) return !0;
        const i = on(t).toLowerCase();
        return !_t(e, i) || !_t(r.hostname, i) || r.topDomain && !_t(i, r.topDomain) ? (n.error(Ro(W, t, r.hostname)), !1) : !0
    },
    xf = e => {
        const {
            useServerSideCookies: t,
            dataServiceEndpoint: r,
            storage: s,
            setCookieDomain: n,
            sameDomainCookiesOnly: i
        } = o.loadOptions.value;
        let a = s ? .cookie,
            l = !1,
            c;
        if (t) {
            l = t;
            const u = a.domain ? ? n,
                d = N(u) && !bf(on(u)) || i,
                {
                    hostname: f
                } = globalThis.location,
                {
                    topDomain: I,
                    topHost: h
                } = $f(),
                g = Rf(r ? ? rl, d, h),
                T = Of(g);
            Fe(g) && T ? (c = Ge(g), l = Bf(T, u, {
                hostname: f,
                topDomain: I
            }, i, e), l && f !== T && (a = { ...a,
                samesite: "None",
                secure: !0
            })) : (e.error(po(W, g)), l = !1)
        }
        return {
            sscEnabled: l,
            cookieOptions: a,
            finalDataServiceUrl: c
        }
    },
    Ff = e => {
        const {
            storage: t
        } = o.loadOptions.value;
        Ai(t, W, e);
        let r = t ? .encryption ? .version;
        const s = r && Et[r];
        !w(r) && w(s) ? (e.warn(Io(W, r, Et, De)), r = De) : w(r) && (r = De);
        const n = t ? .migrate,
            i = n && r === De;
        n === !0 && i !== n && e.warn(So(W, r, De));
        const {
            sscEnabled: a,
            finalDataServiceUrl: l,
            cookieOptions: c
        } = xf(e);
        Y(() => {
            o.storage.cookie.value = c, o.serverCookies.isEnabledServerSideCookies.value = a, o.serverCookies.dataServiceUrl.value = l, o.storage.encryptionPluginName.value = Et[r], o.storage.migrate.value = i
        })
    },
    Gf = e => {
        const {
            provider: t,
            consentManagerPluginName: r,
            initialized: s,
            enabled: n,
            consentsData: i
        } = _i(o.loadOptions.value.consentManagement, e), a = o.loadOptions.value.preConsent, l = a ? .storage ? .strategy;
        N(l) && e.warn(Vo(W));
        let c;
        a ? .storage ? .enabled !== !0 && (c = l ? ? Kt, ["none", "session", "anonymousId"].includes(c) || (c = Kt, e.warn(Go(W, l, Kt))));
        let u = a ? .events ? .delivery ? ? jt;
        N(u) && !["immediate", "buffer"].includes(u) && (u = jt, e.warn(Ho(W, a ? .events ? .delivery, jt))), Y(() => {
            o.consents.activeConsentManagerPluginName.value = r, o.consents.initialized.value = s, o.consents.enabled.value = n, o.consents.data.value = i, o.consents.provider.value = t, o.consents.preConsent.value = {
                enabled: o.loadOptions.value.preConsent ? .enabled === !0 && s === !1 && n === !0,
                storage: {
                    strategy: c
                },
                events: {
                    delivery: u
                }
            }
        })
    },
    Vf = e => {
        let t = o.consents.resolutionStrategy.value,
            r;
        M(e.consentManagementMetadata) && (o.consents.provider.value && (t = e.consentManagementMetadata.providers.find(s => s.provider === o.consents.provider.value) ? .resolutionStrategy ? ? o.consents.resolutionStrategy.value), r = e.consentManagementMetadata), o.consents.provider.value === "custom" && (t = void 0), Y(() => {
            o.consents.metadata.value = b(r), o.consents.resolutionStrategy.value = t
        })
    },
    Hf = e => {
        if (o.dataPlaneEvents.deliveryEnabled.value) {
            const t = "XhrQueue";
            let r = t;
            o.loadOptions.value.useBeacon && (o.capabilities.isBeaconAvailable.value ? r = "BeaconQueue" : (r = t, e.warn(Do(W)))), Y(() => {
                o.dataPlaneEvents.eventsQueuePluginName.value = r
            })
        }
    },
    Yf = (e, t, r, s, n) => {
        const i = new URLSearchParams({
            p: En,
            v: Nt,
            build: rt,
            writeKey: t,
            lockIntegrationsVersion: r.toString(),
            lockPluginsVersion: s.toString()
        });
        let a = Cn,
            l = i,
            c = "/sourceConfig/",
            u = "";
        if (Fe(e)) {
            const d = new URL(e);
            Ge(d.pathname).endsWith("/sourceConfig") || (d.pathname = `${Ge(d.pathname)}/sourceConfig/`), d.pathname = Nr(d.pathname), i.forEach((f, I) => {
                d.searchParams.get(I) === null && d.searchParams.set(I, f)
            }), a = d.origin, c = d.pathname, l = d.searchParams, u = d.hash
        } else n.warn(xo(W, e));
        return `${a}${c}?${l}${u}`
    },
    Qf = e => e.map(t => ({
        id: t.id,
        displayName: t.destinationDefinition.displayName,
        enabled: t.enabled,
        config: t.config,
        shouldApplyDeviceModeTransformation: t.shouldApplyDeviceModeTransformation ? ? !1,
        propagateEventsUntransformedOnError: t.propagateEventsUntransformedOnError ? ? !1,
        userFriendlyId: nc(t.destinationDefinition.displayName, t.id),
        isCustomIntegration: t.destinationDefinition.displayName === nl
    })),
    zf = (e, t, r, s, n, i, a) => {
        let l;
        if (i) {
            if (!Fe(i)) return a.error(Ja(W, e, i)), null;
            l = Ge(i)
        } else if (l = r, o.context.app.value.installType === "cdn") {
            const c = Uf();
            c && (l = c.split("/").slice(0, -1).concat(t).join("/"))
        }
        return n && (l = l.replace(new RegExp(`/${br}/${rt}/${t}$`), `/${s}/${rt}/${t}`)), l
    },
    Kf = (e, t, r, s) => zf("integrations", Bt, Dn, e, t, r, s),
    jf = class {
        constructor(e, t, r) {
            this.errorHandler = t, this.logger = r, this.httpClient = e, this.onError = this.onError.bind(this), this.processConfig = this.processConfig.bind(this)
        }
        attachEffects() {
            de(() => {
                this.logger.setMinLogLevel(o.lifecycle.logLevel.value)
            })
        }
        init() {
            const {
                logLevel: e,
                configUrl: t,
                lockIntegrationsVersion: r,
                lockPluginsVersion: s,
                destSDKBaseURL: n,
                pluginsSDKBaseURL: i,
                integrations: a
            } = o.loadOptions.value, l = Kf(Nt, r, n, this.logger);
            if (ee(l)) return;
            let c;
            e && (o.lifecycle.logLevel.value = e), this.attachEffects(), o.lifecycle.activeDataplaneUrl.value = Ge(o.lifecycle.dataPlaneUrl.value), Ff(this.logger), Gf(this.logger), Hf(this.logger), Y(() => {
                o.lifecycle.integrationsCDNPath.value = l, o.lifecycle.pluginsCDNPath.value = c, o.lifecycle.sourceConfigUrl.value = Yf(t, o.lifecycle.writeKey.value, r, s, this.logger), o.metrics.metricsServiceUrl.value = `${o.lifecycle.activeDataplaneUrl.value}/${sl}`, o.nativeDestinations.loadOnlyIntegrations.value = a
            }), this.getConfig()
        }
        onError(e, t, r) {
            this.errorHandler.onError({
                error: e,
                context: W,
                customMessage: t,
                groupingHash: r
            })
        }
        processConfig(e, t) {
            if (!N(e)) {
                N(t) ? this.onError(t.error, Xr) : this.onError(new Error(Xr));
                return
            }
            let r;
            try {
                k(e) ? r = JSON.parse(e) : r = e
            } catch (n) {
                this.onError(n, jr);
                return
            }
            if (!yf(r)) {
                this.onError(new Error(jr));
                return
            }
            if (r.source.enabled === !1) {
                this.logger.error(Ka);
                return
            }
            wf(r);
            const s = r.source.destinations.length > 0 ? Qf(r.source.destinations) : [];
            Y(() => {
                o.source.value = {
                    config: r.source.config,
                    name: r.source.name,
                    id: r.source.id,
                    workspaceId: r.source.workspaceId
                }, o.nativeDestinations.configuredDestinations.value = s, o.plugins.pluginsToLoadFromConfig.value = o.loadOptions.value.plugins ? ? [], Vf(r), o.lifecycle.status.value = "configured"
            })
        }
        getConfig() {
            const e = o.loadOptions.value.getSourceConfig;
            if (e) {
                if (!_(e)) {
                    this.logger.error(qa(W));
                    return
                }
                const t = e();
                t instanceof Promise ? t.then(r => this.processConfig(r)).catch(r => {
                    this.onError(r, "SourceConfig")
                }) : this.processConfig(t)
            } else this.httpClient.getAsyncData({
                url: o.lifecycle.sourceConfigUrl.value,
                options: {
                    headers: {
                        "Content-Type": void 0
                    }
                },
                callback: this.processConfig
            })
        }
    },
    Wf = () => {
        const e = /([A-Z]+[+-]\d+)/.exec(new Date().toString());
        return e ? .[1] ? e[1] : "NA"
    },
    Ii = (e = () => document) => e() ? .referrer || "$direct",
    Xf = (e = () => document) => {
        const t = e().getElementsByTagName("link");
        let r = "";
        for (let s = 0; t[s]; s += 1) {
            const n = t[s];
            if (n.getAttribute("rel") === "canonical" && !r) {
                r = n.getAttribute("href") ? ? "";
                break
            }
        }
        return r
    },
    qf = (e = () => globalThis.navigator) => {
        const t = e();
        if (w(t)) return null;
        let {
            userAgent: r
        } = t;
        const {
            brave: s
        } = t;
        if (s && Object.getPrototypeOf(s).isBrave) {
            const n = r.match(/(chrome)\/([\w.]+)/i);
            n && (r = `${r} Brave/${n[2]}`)
        }
        return r
    },
    Jf = (e = () => globalThis.navigator) => {
        const t = e();
        return w(t) ? null : t.language ? ? t.browserLanguage
    },
    Si = (e = () => globalThis.location, t = () => document) => {
        const r = e(),
            s = Xf(t);
        let n = r.pathname;
        const {
            href: i
        } = r;
        let a = i;
        const {
            search: l
        } = r;
        if (s) try {
            const f = new URL(s);
            f.search === "" ? a = s + l : a = s, n = f.pathname
        } catch {}
        const c = Cf(a),
            {
                title: u
            } = t(),
            d = Ii(t);
        return {
            path: n,
            referrer: d,
            referring_domain: yi(d),
            search: l,
            title: u,
            url: c,
            tab_url: i
        }
    },
    Zf = (e, t = "none") => {
        t === "none" && e(void 0), t === "default" && e(navigator.userAgentData), t === "full" && navigator.userAgentData ? .getHighEntropyValues(["architecture", "bitness", "brands", "mobile", "model", "platform", "platformVersion", "uaFullVersion", "fullVersionList", "wow64"]).then(r => {
            e(r)
        }).catch(() => {
            e()
        })
    },
    ep = () => {
        const e = globalThis.document.createElement("div");
        return e.setAttribute("data-a-b", "c"), e.dataset ? e.dataset.aB === "c" : !1
    },
    Er = {
        URL: () => !_(globalThis.URL) || !_(globalThis.URLSearchParams),
        Promise: () => !_(globalThis.Promise),
        "Number.isNaN": () => !_(globalThis.Number.isNaN),
        "Number.isInteger": () => !_(globalThis.Number.isInteger),
        "Array.from": () => !_(globalThis.Array.from),
        "Array.prototype.find": () => !_(globalThis.Array.prototype.find),
        "Array.prototype.includes": () => !_(globalThis.Array.prototype.includes),
        "String.prototype.endsWith": () => !_(globalThis.String.prototype.endsWith),
        "String.prototype.startsWith": () => !_(globalThis.String.prototype.startsWith),
        "String.prototype.includes": () => !_(globalThis.String.prototype.includes),
        "String.prototype.replaceAll": () => !_(globalThis.String.prototype.replaceAll),
        "String.fromCodePoint": () => !_(globalThis.String.fromCodePoint),
        "Object.entries": () => !_(globalThis.Object.entries),
        "Object.values": () => !_(globalThis.Object.values),
        "Object.assign": () => !_(globalThis.Object.assign),
        "Object.fromEntries": () => !_(globalThis.Object.fromEntries),
        "Element.prototype.dataset": () => !ep(),
        TextEncoder: () => !_(globalThis.TextEncoder) || !_(globalThis.TextDecoder),
        requestAnimationFrame: () => !_(globalThis.requestAnimationFrame) || !_(globalThis.cancelAnimationFrame),
        CustomEvent: () => !_(globalThis.CustomEvent),
        "navigator.sendBeacon": () => !_(globalThis.navigator.sendBeacon),
        ArrayBuffer: () => !_(globalThis.Uint8Array),
        Set: () => !_(globalThis.Set),
        atob: () => !_(globalThis.atob)
    },
    tp = () => {
        const e = Object.keys(Er);
        let t = !1;
        for (let r = 0; r < e.length; r++) {
            const s = Er[e[r]];
            if (_(s) && s()) {
                t = !0;
                break
            }
        }
        return t
    },
    rp = `https://polyfill-fastly.io/v3/polyfill.min.js?version=3.111.0&features=${Object.keys(Er).join("%2C")}`,
    sp = 1e4,
    Xs = "rudderstackPolyfill",
    np = () => !G(globalThis.crypto) && _(globalThis.crypto.getRandomValues),
    qs = () => !G(globalThis.navigator.userAgentData),
    ip = () => !G(globalThis.navigator.sendBeacon) && _(globalThis.navigator.sendBeacon),
    Js = () => {
        let e = {
            density: 0,
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0
        };
        return e = {
            width: globalThis.screen.width,
            height: globalThis.screen.height,
            density: globalThis.devicePixelRatio,
            innerWidth: globalThis.innerWidth,
            innerHeight: globalThis.innerHeight
        }, e
    },
    ap = class {
        constructor(e, t, r) {
            this.httpClient = e, this.errorHandler = t, this.logger = r, this.externalSrcLoader = new yn(this.logger), this.onError = this.onError.bind(this), this.onReady = this.onReady.bind(this)
        }
        init() {
            this.prepareBrowserCapabilities(), this.attachWindowListeners()
        }
        detectBrowserCapabilities() {
            Y(() => {
                o.capabilities.storage.isCookieStorageAvailable.value = Se(V, ae(V), this.logger), o.capabilities.storage.isLocalStorageAvailable.value = Se(F, void 0, this.logger), o.capabilities.storage.isSessionStorageAvailable.value = Se(Z, void 0, this.logger), o.capabilities.isBeaconAvailable.value = ip(), o.capabilities.isUaCHAvailable.value = qs(), o.capabilities.isCryptoAvailable.value = np(), o.capabilities.isOnline.value = globalThis.navigator.onLine, o.context.userAgent.value = qf(), o.context.locale.value = Jf(), o.context.screen.value = Js(), o.context.timezone.value = Wf(), qs() && Zf(e => {
                    o.context["ua-ch"].value = e
                }, o.loadOptions.value.uaChTrackLevel)
            }), de(() => {
                o.loadOptions.value.sendAdblockPage === !0 && o.lifecycle.sourceConfigUrl.value !== void 0 && wn(this.httpClient)
            })
        }
        prepareBrowserCapabilities() {
            o.capabilities.isLegacyDOM.value = tp();
            const e = o.loadOptions.value.polyfillURL;
            let t = rp;
            if (Be(e) && (Fe(e) ? t = e : this.logger.warn(zo(Jt, e))), o.loadOptions.value.polyfillIfRequired && o.capabilities.isLegacyDOM.value && Fe(t)) {
                const r = t !== o.loadOptions.value.polyfillURL;
                if (r) {
                    const s = `RS_polyfillCallback_${o.lifecycle.writeKey.value}`,
                        n = () => {
                            this.onReady(), delete globalThis[s]
                        };
                    globalThis[s] = n, t = `${t}&callback=${s}`
                }
                this.externalSrcLoader.loadJSFile({
                    url: t,
                    id: Xs,
                    async: !0,
                    timeout: sp,
                    callback: s => {
                        s ? r || this.onReady() : this.onError(new Error(Fo(Xs, t)))
                    }
                })
            } else this.onReady()
        }
        attachWindowListeners() {
            globalThis.addEventListener("offline", () => {
                o.capabilities.isOnline.value = !1
            }), globalThis.addEventListener("online", () => {
                o.capabilities.isOnline.value = !0
            }), globalThis.addEventListener("resize", Na(() => {
                o.context.screen.value = Js()
            }, this))
        }
        onReady() {
            this.detectBrowserCapabilities(), o.lifecycle.status.value = "browserCapabilitiesReady"
        }
        onError(e, t) {
            this.errorHandler.onError({
                error: e,
                context: Jt,
                groupingHash: t
            })
        }
    },
    op = "web",
    lp = ["integrations", "anonymousId", "originalTimestamp"],
    cp = ["library", "consentManagement", "userAgent", "ua-ch", "screen"],
    Wt = ["id", "anonymous_id", "user_id", "sent_at", "timestamp", "received_at", "original_timestamp", "event", "event_text", "channel", "context_ip", "context_request_ip", "context_passed_ip", "group_id", "previous_id"],
    It = "CustomContext",
    up = new Set(["__proto__", "constructor", "prototype"]),
    dp = Function.prototype.toString.call(Object),
    hp = e => {
        if (!M(e)) return !1;
        const t = Object.getPrototypeOf(e);
        if (t === null) return !0;
        const r = Object.prototype.hasOwnProperty.call(t, "constructor") ? t.constructor : void 0;
        return typeof r == "function" && r.prototype === t && Function.prototype.toString.call(r) === dp
    },
    Lr = (e, t = new Set) => {
        if (!M(e) && !Array.isArray(e)) return !1;
        const r = e;
        return t.has(r) ? !1 : (t.add(r), Object.keys(r).some(s => up.has(s) || Lr(r[s], t)))
    },
    Ri = (e, t) => {
        const r = {};
        return Object.keys(e).forEach(s => {
            if (cp.includes(s)) {
                t.warn(No(It, s));
                return
            }
            Object.defineProperty(r, s, {
                configurable: !0,
                enumerable: !0,
                value: e[s] === e ? r : e[s],
                writable: !0
            })
        }), r
    },
    Ti = (e, t) => {
        try {
            if (!hp(e)) {
                t.warn(pt(It));
                return
            }
            const r = Ri(e, t);
            if (Lr(r)) {
                t.warn(pt(It));
                return
            }
            return b(C(r, t))
        } catch {
            t.warn(pt(It));
            return
        }
    },
    gp = class {
        constructor(e, t) {
            this.state = e, this.logger = t
        }
        set(e) {
            const t = Ti(e, this.logger);
            if (!t) return;
            const r = x(b(this.state.value), t);
            this.state.value = xe(r)
        }
        get() {
            return b(this.state.value)
        }
        clear() {
            this.state.value = {}
        }
    },
    bi = e => typeof e == "number" && !Number.isNaN(e),
    vp = (e, t) => t.toString().length >= e,
    Lt = e => bi(e) && e >= 0 && Number.isInteger(e),
    Zs = 10,
    Ni = e => {
        const {
            cutOff: t
        } = e, r = Date.now();
        return !!(t ? .enabled && t.expiresAt && r > t.expiresAt)
    },
    en = e => !e.expiresAt || Date.now() > e.expiresAt || Ni(e),
    fp = () => Date.now(),
    pp = (e, t) => !e || !Lt(e) || !vp(Zs, e) ? (t.warn(Uo(Oe, e, Zs)), !1) : !0,
    Ep = e => {
        if (e ? .enabled) return e.expiresAt ? ? (Lt(e.duration) ? Date.now() + e.duration : void 0)
    },
    mp = e => {
        const {
            timeout: t,
            cutOff: r
        } = e, s = Date.now();
        return {
            id: s,
            expiresAt: s + t,
            timeout: t,
            autoTrack: !0,
            ...r && {
                cutOff: r
            }
        }
    },
    Ap = (e, t) => ({
        id: pp(e, t) ? e : fp(),
        sessionStart: void 0,
        manualTrack: !0
    }),
    Xe = e => e === V || e === F || e === Z || e === re,
    mr = () => ce(),
    yp = e => Object.prototype.hasOwnProperty.call(mt.entries, e),
    _p = e => {
        if (Rt(e)) {
            const {
                entries: t,
                ...r
            } = mt;
            return { ...r,
                entries: { ...t,
                    anonymousId: e
                }
            }
        }
        if (M(e) && M(e.entries)) {
            const t = e.entries,
                r = Object.keys(t).reduce((s, n) => {
                    if (yp(n)) {
                        const i = t[n];
                        Rt(i) && (s[n] = i)
                    }
                    return s
                }, {});
            return x(mt, {
                entries: r
            })
        }
        return { ...mt
        }
    },
    Ip = e => {
        const t = Si(),
            r = {};
        return Object.keys(t).forEach(s => {
            r[s] = e ? .[s] || t[s]
        }), r.initial_referrer = e ? .initial_referrer || o.session.initialReferrer.value, r.initial_referring_domain = e ? .initial_referring_domain || o.session.initialReferringDomain.value, r
    },
    Sp = (e, t) => {
        const r = t ? .page || {},
            s = e,
            n = Si();
        return Object.keys(n).forEach(i => {
            w(s[i]) && (s[i] = r[i] || n[i])
        }), w(s.initial_referrer) && (s.initial_referrer = r.initial_referrer || o.session.initialReferrer.value), w(s.initial_referring_domain) && (s.initial_referring_domain = r.initial_referring_domain || o.session.initialReferringDomain.value), s
    },
    Xt = (e, t, r) => {
        M(e) && Object.keys(e).forEach(s => {
            (Wt.includes(s) || Wt.includes(s.toLowerCase())) && r.warn(bo(Zt, s, t, Wt))
        })
    },
    Rp = (e, t) => {
        const {
            properties: r,
            traits: s,
            context: n
        } = e, {
            traits: i
        } = n;
        Xt(r, "properties", t), Xt(s, "traits", t), Xt(i, "context.traits", t)
    },
    Tp = (e, t) => {
        t.anonymousId && k(t.anonymousId) && (e.anonymousId = t.anonymousId), oe(t.integrations) && (e.integrations = t.integrations), t.originalTimestamp && k(t.originalTimestamp) && (e.originalTimestamp = t.originalTimestamp)
    },
    bp = (e, t, r) => {
        let s = e;
        const n = i => {
            const a = Ri(i, r);
            if (Lr(a)) {
                r.warn(pt(Zt));
                return
            }
            s = x(s, a)
        };
        return Object.keys(t).forEach(i => {
            lp.includes(i) || (i !== "context" ? n({
                [i]: t[i]
            }) : !w(t[i]) && M(t[i]) ? n(t[i]) : r.warn(Oo(Zt)))
        }), s
    },
    Np = (e, t, r) => {
        M(t) && (Tp(e, t), e.context = bp(e.context, t, r))
    },
    Op = e => {
        let t;
        return o.loadOptions.value.useGlobalIntegrationsConfigInEvents ? t = o.consents.postConsent.value.integrations ? ? o.nativeDestinations.loadOnlyIntegrations.value : e ? t = e : t = On, b(t)
    },
    ze = (e, t, r, s, n = {}) => {
        const i = {
            channel: op,
            context: {
                traits: b(o.session.userTraits.value),
                sessionId: o.session.sessionInfo.value.id || void 0,
                sessionStart: o.session.sessionInfo.value.sessionStart || void 0,
                ...o.consents.enabled.value && {
                    consentManagement: {
                        deniedConsentIds: b(o.consents.data.value.deniedConsentIds),
                        allowedConsentIds: b(o.consents.data.value.allowedConsentIds),
                        provider: o.consents.provider.value,
                        resolutionStrategy: o.consents.resolutionStrategy.value
                    }
                },
                "ua-ch": o.context["ua-ch"].value,
                app: o.context.app.value,
                library: o.context.library.value,
                userAgent: o.context.userAgent.value,
                os: o.context.os.value,
                locale: o.context.locale.value,
                screen: o.context.screen.value,
                campaign: Df(globalThis.location.href),
                page: Ip(r),
                timezone: o.context.timezone.value,
                ...o.autoTrack.enabled.value && {
                    autoTrack: { ...o.autoTrack.pageLifecycle.enabled.value && {
                            page: {
                                pageViewId: o.autoTrack.pageLifecycle.pageViewId.value
                            }
                        }
                    }
                }
            },
            originalTimestamp: Me(),
            messageId: ce(),
            userId: e.userId || o.session.userId.value
        };
        Xe(o.storage.entries.value.anonymousId ? .type) ? i.anonymousId = o.session.anonymousId.value : i.anonymousId = mr(), o.storage.trulyAnonymousTracking.value && (i.context.trulyAnonymousTracking = !0), e.type === "identify" && (i.context.traits = o.storage.entries.value.userTraits ? .type !== Ie ? b(o.session.userTraits.value) : e.context.traits), e.type === "group" && ((e.groupId || o.session.groupId.value) && (i.groupId = e.groupId || o.session.groupId.value), (e.traits || o.session.groupTraits.value) && (i.traits = o.storage.entries.value.groupTraits ? .type !== Ie ? b(o.session.groupTraits.value) : e.traits));
        const a = x(e, i),
            l = x(a, {
                context: n
            });
        return l.event === void 0 && (l.event = null), l.properties === void 0 && (l.properties = null), Np(l, t, s), Rp(l, s), l.integrations = Op(l.integrations), l
    },
    Dp = class {
        constructor(e) {
            this.logger = e
        }
        generatePageEvent(e, t, r, s, n = {}) {
            let i = r ? ? {};
            return i = Sp(i, s), ze({
                properties: i,
                name: t,
                category: e,
                type: "page"
            }, s, i, this.logger, n)
        }
        generateTrackEvent(e, t, r, s = {}) {
            return ze({
                properties: t,
                event: e,
                type: "track"
            }, r, void 0, this.logger, s)
        }
        generateIdentifyEvent(e, t, r, s = {}) {
            return ze({
                userId: e,
                type: "identify",
                context: {
                    traits: t
                }
            }, r, void 0, this.logger, s)
        }
        generateAliasEvent(e, t, r, s = {}) {
            const n = ze({
                previousId: t,
                type: "alias"
            }, r, void 0, this.logger, s);
            return n.userId = e ? ? n.userId, n
        }
        generateGroupEvent(e, t, r, s = {}) {
            const n = {
                type: "group"
            };
            return e && (n.groupId = e), t && (n.traits = t), ze(n, r, void 0, this.logger, s)
        }
        create(e, t = {}) {
            let r;
            const {
                type: s,
                name: n,
                properties: i,
                options: a,
                category: l,
                userId: c,
                traits: u,
                to: d,
                from: f,
                groupId: I
            } = e;
            switch (s) {
                case "page":
                    r = this.generatePageEvent(l, n, i, a, t);
                    break;
                case "track":
                    r = this.generateTrackEvent(n, i, a, t);
                    break;
                case "identify":
                    r = this.generateIdentifyEvent(c, u, a, t);
                    break;
                case "alias":
                    r = this.generateAliasEvent(d, f, a, t);
                    break;
                default:
                    r = this.generateGroupEvent(I, u, a, t)
            }
            return r
        }
    },
    Cp = class {
        constructor(e, t, r, s) {
            this.eventRepository = e, this.userSessionManager = t, this.errorHandler = r, this.logger = s, this.eventFactory = new Dp(this.logger)
        }
        init() {
            this.eventRepository.init()
        }
        resume() {
            this.eventRepository.resume()
        }
        addEvent(e, t) {
            this.userSessionManager.refreshSession();
            const r = this.eventFactory.create(e, t);
            this.eventRepository.enqueue(r, e.callback)
        }
    },
    Pp = class {
        constructor(e, t, r, s, n) {
            this.storeManager = t, this.pluginsManager = e, this.logger = n, this.errorHandler = s, this.httpClient = r, this.onError = this.onError.bind(this), this.serverSideCookiesDebounceTimer = 0, this.serverSideCookiesPending = {}, this.serverSideCookiesRequestInProgress = {}, this.lastSyncedValues = {}
        }
        init() {
            this.syncStorageDataToState(), this.registerEffects()
        }
        syncStorageDataToState() {
            this.migrateStorageIfNeeded(), this.migrateDataFromPreviousStorage(), this.setUserId(this.getUserId()), this.setUserTraits(this.getUserTraits()), this.setGroupId(this.getGroupId()), this.setGroupTraits(this.getGroupTraits());
            const {
                externalAnonymousIdCookieName: e,
                anonymousIdOptions: t
            } = o.loadOptions.value;
            let r;
            Be(e) && typeof e == "string" && (r = this.getExternalAnonymousIdByCookieName(e)), this.setAnonymousId(r ? ? this.getAnonymousId(t)), this.setAuthToken(this.getAuthToken()), this.setInitialReferrerInfo(), this.configureSessionTracking()
        }
        configureSessionTracking() {
            let e;
            if (this.isPersistenceEnabledForStorageEntry("sessionInfo")) {
                const t = this.getConfiguredSessionTrackingInfo(),
                    r = this.getSessionInfo() ? ? P.sessionInfo;
                e = {
                    autoTrack: t.autoTrack && r.manualTrack !== !0,
                    timeout: t.timeout,
                    manualTrack: r.manualTrack,
                    expiresAt: r.expiresAt,
                    id: r.id,
                    sessionStart: r.sessionStart
                }, !e.autoTrack && e.manualTrack !== !0 ? e = P.sessionInfo : t.cutOff ? .enabled === !0 && (e.cutOff = {
                    enabled: !0,
                    duration: t.cutOff.duration,
                    expiresAt: r.cutOff ? .expiresAt
                })
            } else e = P.sessionInfo;
            o.session.sessionInfo.value = e, o.session.sessionInfo.value.autoTrack && this.startOrRenewAutoTracking(o.session.sessionInfo.value)
        }
        setInitialReferrerInfo() {
            const e = this.getInitialReferrer(),
                t = this.getInitialReferringDomain();
            if (e && t) this.setInitialReferrer(e), this.setInitialReferringDomain(t);
            else {
                const r = e || Ii();
                this.setInitialReferrer(r), this.setInitialReferringDomain(yi(r))
            }
        }
        isPersistenceEnabledForStorageEntry(e) {
            return Xe(o.storage.entries.value[e] ? .type)
        }
        migrateDataFromPreviousStorage() {
            const e = o.storage.entries.value,
                t = [V, F, Z];
            Object.keys(e).forEach(r => {
                const s = r,
                    n = e[s] ? .type,
                    i = this.storeManager ? .getStore(Ce[n]);
                i && t.forEach(a => {
                    const l = this.storeManager ? .getStore(Ce[a]);
                    if (l && a !== n) {
                        const c = l.get(ke[s]);
                        Fi(c) && i.set(ke[s], c), l.remove(ke[s])
                    }
                })
            })
        }
        migrateStorageIfNeeded(e, t) {
            if (!o.storage.migrate.value) return;
            let r = e ? ? [];
            r.length === 0 && [vi, fi, pi].forEach(s => {
                const n = this.storeManager ? .getStore(s);
                n && r.push(n)
            }), (t ? ? Object.keys(ke)).forEach(s => {
                const n = ke[s];
                r.forEach(i => {
                    const a = this.pluginsManager ? .invokeSingle("storage.migrate", n, i.engine, this.errorHandler, this.logger);
                    G(a) || i.set(n, a)
                })
            })
        }
        getConfiguredSessionTrackingInfo() {
            let e = o.loadOptions.value.sessions.autoTrack !== !1;
            if (!e) return {
                autoTrack: e
            };
            let t;
            const r = o.loadOptions.value.sessions ? .timeout;
            Lt(r) ? t = r : (this.logger.warn(Co(Oe, r, er)), t = er), t === 0 && (this.logger.warn(Lo(Oe)), e = !1), t > 0 && t < Qr && this.logger.warn(ko(Oe, t, Qr));
            const s = this.getCutOffInfo(t);
            return {
                timeout: t,
                autoTrack: e,
                cutOff: s
            }
        }
        getCutOffInfo(e) {
            const t = o.loadOptions.value.sessions.cutOff;
            let r, s = !1;
            return t.enabled === !0 && (r = t.duration, s = !0, Lt(r) ? r < e && (this.logger.warn(Mo(Oe, r, e)), s = !1) : (this.logger.warn(Po(Oe, r, Yr)), r = Yr)), {
                enabled: s,
                duration: r
            }
        }
        onError(e, t, r) {
            this.errorHandler.onError({
                error: e,
                context: Oe,
                customMessage: t,
                groupingHash: r
            })
        }
        getEncryptedCookieData(e, t) {
            const r = [];
            return e.forEach(s => {
                const n = t ? .encrypt(H(s.value, !1, [], this.logger));
                Be(n) && r.push({
                    name: s.name,
                    value: n
                })
            }), r
        }
        makeRequestToSetCookie(e, t) {
            this.httpClient ? .getAsyncData({
                url: o.serverCookies.dataServiceUrl.value,
                options: {
                    method: "POST",
                    data: H({
                        reqType: "setCookies",
                        workspaceId: o.source.value ? .workspaceId,
                        data: {
                            options: {
                                maxAge: o.storage.cookie.value ? .maxage,
                                path: o.storage.cookie.value ? .path,
                                domain: o.storage.cookie.value ? .domain,
                                sameSite: o.storage.cookie.value ? .samesite,
                                secure: o.storage.cookie.value ? .secure,
                                expires: o.storage.cookie.value ? .expires
                            },
                            cookies: e
                        }
                    }),
                    sendRawData: !0,
                    withCredentials: !0
                },
                isRawResponse: !0,
                callback: t
            })
        }
        setServerSideCookies(e, t, r) {
            const s = Object.keys(e),
                n = () => s.map(c => ({
                    name: e[c].name,
                    value: o.session[c].value
                })),
                i = {};
            s.forEach(c => {
                i[e[c].name] = r ? .get(e[c].name)
            });
            const a = () => {
                    s.forEach(c => {
                        this.serverSideCookiesRequestInProgress[c] = !1
                    })
                },
                l = () => {
                    n().forEach(c => {
                        t && t(c.name, c.value)
                    })
                };
            try {
                const c = {};
                s.forEach(d => {
                    c[e[d].name] = o.session[d].value
                });
                const u = this.getEncryptedCookieData(n(), r);
                u.length > 0 ? this.makeRequestToSetCookie(u, (d, f) => {
                    if (a(), f ? .xhr ? .status === 200) {
                        const I = new Set(u.map(g => g.name)),
                            h = [];
                        n().forEach(g => {
                            const T = i[g.name],
                                R = r ? .get(g.name);
                            H(c[g.name], !1, []) !== H(R, !1, []) && (I.has(g.name) && H(T, !1, []) === H(R, !1, []) && h.push(g.name), ee(T) && ee(R) && this.logger.error(mo(g.name)), t && t(g.name, g.value))
                        }), u.length > 1 && h.length > 0 && !o.serverCookies.isCollapsedBatchErrorLogged.value && (o.serverCookies.isCollapsedBatchErrorLogged.value = !0, this.logger.error(Ao(h, u.length)))
                    } else this.logger.error(Eo(f ? .xhr ? .status)), l()
                }) : (l(), a())
            } catch (c) {
                this.onError(c, qr, qr), l(), a()
            }
        }
        flushServerSideCookies() {
            this.serverSideCookiesDebounceTimer = 0;
            const e = Object.entries(this.serverSideCookiesPending).reduce((r, [s, n]) => (r[s] = {
                name: n
            }, r), {});
            if (this.serverSideCookiesPending = {}, Object.keys(e).length === 0) return;
            const t = this.storeManager.getStore(Ce[V]);
            this.setServerSideCookies(e, (r, s) => {
                t ? .set(r, s)
            }, t)
        }
        syncValueToStorage(e) {
            const t = o.storage.entries.value,
                r = t[e] ? .type;
            if (Xe(r)) {
                const s = this.storeManager.getStore(Ce[r]),
                    n = t[e] ? .key,
                    i = o.session[e].value;
                i && (k(i) || oe(i)) ? o.serverCookies.isEnabledServerSideCookies.value && r === V ? (this.serverSideCookiesRequestInProgress[e] = !0, this.serverSideCookiesPending[e] = n, this.serverSideCookiesDebounceTimer && globalThis.clearTimeout(this.serverSideCookiesDebounceTimer), this.serverSideCookiesDebounceTimer = globalThis.setTimeout(() => {
                    this.flushServerSideCookies()
                }, al)) : s ? .set(n, i) : s ? .remove(n)
            }
        }
        registerEffects() {
            Ei.forEach(e => {
                de(() => {
                    const t = o.session[e].value;
                    this.syncValueToStorage(e), this.lastSyncedValues[e] = t
                })
            })
        }
        setAnonymousId(e, t) {
            let r = e;
            (!k(e) || !r) && (r = void 0), this.isPersistenceEnabledForStorageEntry("anonymousId") ? (!r && t && (r = this.pluginsManager ? .invokeSingle("userSession.anonymousIdGoogleLinker", t)), r = r || mr()) : r = P.anonymousId, o.session.anonymousId.value = r
        }
        getAnonymousId(e) {
            const t = o.storage.entries.value.anonymousId ? .type;
            if (Xe(t)) {
                let r = o.session.anonymousId.value;
                (!r || r === P.anonymousId) && (r = this.getEntryValue("anonymousId")), !r && e && (r = this.pluginsManager ? .invokeSingle("storage.getAnonymousId", ae, e)), o.session.anonymousId.value = r || mr()
            }
            return o.session.anonymousId.value
        }
        getEntryValue(e) {
            const t = o.storage.entries.value,
                r = t[e] ? .type;
            if (Xe(r)) {
                const s = this.storeManager ? .getStore(Ce[r]);
                this.migrateStorageIfNeeded([s], [e]);
                const n = t[e] ? .key;
                return s ? .get(n) ? ? null
            }
            return null
        }
        getExternalAnonymousIdByCookieName(e) {
            const t = ae(V);
            return t ? .isEnabled ? t.getItem(e) ? ? null : null
        }
        getUserSessionValue(e) {
            const t = o.session[e].peek();
            return this.isPersistenceEnabledForStorageEntry(e) && e in this.lastSyncedValues && t !== this.lastSyncedValues[e] || this.serverSideCookiesRequestInProgress[e] ? t : this.getEntryValue(e)
        }
        getUserId() {
            return this.getUserSessionValue("userId")
        }
        getUserTraits() {
            return this.getUserSessionValue("userTraits")
        }
        getGroupId() {
            return this.getUserSessionValue("groupId")
        }
        getGroupTraits() {
            return this.getUserSessionValue("groupTraits")
        }
        getInitialReferrer() {
            return this.getUserSessionValue("initialReferrer")
        }
        getInitialReferringDomain() {
            return this.getUserSessionValue("initialReferringDomain")
        }
        getSessionInfo() {
            return this.getUserSessionValue("sessionInfo")
        }
        getAuthToken() {
            return this.getUserSessionValue("authToken")
        }
        getSessionId() {
            const e = this.getSessionInfo() ? ? P.sessionInfo;
            return e.autoTrack && !en(e) || e.manualTrack ? e.id ? ? null : null
        }
        refreshSession() {
            let e = this.getSessionInfo() ? ? P.sessionInfo;
            (e.autoTrack || e.manualTrack) && (e.autoTrack && (this.startOrRenewAutoTracking(e), e = o.session.sessionInfo.value), e.sessionStart === void 0 ? e = { ...e,
                sessionStart: !0
            } : e.sessionStart && (e = { ...e,
                sessionStart: !1
            })), o.session.sessionInfo.value = e, o.lifecycle.status.value !== "readyExecuted" && this.syncValueToStorage("sessionInfo")
        }
        resetAndStartNewSession() {
            const e = o.session,
                {
                    manualTrack: t,
                    autoTrack: r,
                    timeout: s,
                    cutOff: n
                } = e.sessionInfo.value;
            if (r) {
                const i = { ...P.sessionInfo,
                    timeout: s
                };
                n && (i.cutOff = {
                    enabled: n.enabled,
                    duration: n.duration
                }), e.sessionInfo.value = i, this.startOrRenewAutoTracking(e.sessionInfo.value)
            } else t && this.startManualTrackingInternal()
        }
        reset(e) {
            const {
                session: t
            } = o, r = _p(e);
            Y(() => {
                Object.keys(P).forEach(s => {
                    const n = s;
                    if (r.entries[n] === !0) switch (s) {
                        case "anonymousId":
                            this.setAnonymousId();
                            break;
                        case "sessionInfo":
                            this.resetAndStartNewSession();
                            break;
                        default:
                            t[n].value = P[n]
                    }
                })
            })
        }
        setUserId(e) {
            o.session.userId.value = this.isPersistenceEnabledForStorageEntry("userId") && e ? e : P.userId
        }
        setUserTraits(e) {
            o.session.userTraits.value = this.isPersistenceEnabledForStorageEntry("userTraits") && M(e) ? x(o.session.userTraits.value ? ? P.userTraits, e) : P.userTraits
        }
        setGroupId(e) {
            o.session.groupId.value = this.isPersistenceEnabledForStorageEntry("groupId") && e ? e : P.groupId
        }
        setGroupTraits(e) {
            o.session.groupTraits.value = this.isPersistenceEnabledForStorageEntry("groupTraits") && M(e) ? x(o.session.groupTraits.value ? ? P.groupTraits, e) : P.groupTraits
        }
        setInitialReferrer(e) {
            o.session.initialReferrer.value = this.isPersistenceEnabledForStorageEntry("initialReferrer") && e ? e : P.initialReferrer
        }
        setInitialReferringDomain(e) {
            o.session.initialReferringDomain.value = this.isPersistenceEnabledForStorageEntry("initialReferringDomain") && e ? e : P.initialReferringDomain
        }
        startOrRenewAutoTracking(e) {
            let t = e;
            if (en(e)) t = mp(e);
            else {
                const r = Date.now(),
                    s = e.timeout;
                t.expiresAt = r + s
            }
            if (Ni(t) && (t.cutOff.expiresAt = void 0), t.cutOff) {
                const r = Ep(t.cutOff);
                t.cutOff.expiresAt = r
            }
            o.session.sessionInfo.value = t
        }
        start(e) {
            o.session.sessionInfo.value = Ap(e, this.logger)
        }
        startManualTrackingInternal() {
            this.start(Date.now())
        }
        end() {
            o.session.sessionInfo.value = P.sessionInfo
        }
        setAuthToken(e) {
            o.session.authToken.value = this.isPersistenceEnabledForStorageEntry("authToken") && e ? e : P.authToken
        }
    },
    Mp = ["BeaconQueue", "CustomConsentManager", "DeviceModeDestinations", "DeviceModeTransformation", "ExternalAnonymousId", "GoogleLinker", "IubendaConsentManager", "KetchConsentManager", "NativeDestinationQueue", "OneTrustConsentManager", "StorageEncryption", "StorageEncryptionLegacy", "StorageMigrator", "XhrQueue"],
    Lp = (e, t) => {
        const r = b(t);
        return k(r.setCookieDomain) || (r.setCookieDomain = void 0), ["Strict", "Lax", "None"].includes(r.sameSiteCookie) || (r.sameSiteCookie = void 0), r.secureCookie = le(r.secureCookie, e.secureCookie), r.sameDomainCookiesOnly = le(r.sameDomainCookiesOnly, e.sameDomainCookiesOnly), ["none", "default", "full"].includes(r.uaChTrackLevel) || (r.uaChTrackLevel = void 0), r.integrations = he(r.integrations), Array.isArray(r.plugins) || (r.plugins = Mp), r.useGlobalIntegrationsConfigInEvents = le(r.useGlobalIntegrationsConfigInEvents, e.useGlobalIntegrationsConfigInEvents), r.bufferDataPlaneEventsUntilReady = le(r.bufferDataPlaneEventsUntilReady, e.bufferDataPlaneEventsUntilReady), r.sendAdblockPage = le(r.sendAdblockPage, e.sendAdblockPage), r.useServerSideCookies = le(r.useServerSideCookies, e.useServerSideCookies), k(r.dataServiceEndpoint) || (r.dataServiceEndpoint = void 0), r.sendAdblockPageOptions = he(r.sendAdblockPageOptions), r.loadIntegration = le(r.loadIntegration, e.loadIntegration), oe(r.storage) ? (r.storage.migrate = le(r.storage.migrate, e.storage ? .migrate), r.storage.cookie = he(r.storage.cookie), r.storage.encryption = he(r.storage.encryption), r.storage = xe(r.storage)) : r.storage = void 0, r.destinationsQueueOptions = he(r.destinationsQueueOptions), r.queueOptions = he(r.queueOptions), r.lockIntegrationsVersion = le(r.lockIntegrationsVersion, e.lockIntegrationsVersion), r.lockPluginsVersion = le(r.lockPluginsVersion, e.lockPluginsVersion), bi(r.dataPlaneEventsBufferTimeout) || (r.dataPlaneEventsBufferTimeout = void 0), r.beaconQueueOptions = he(r.beaconQueueOptions), r.preConsent = he(r.preConsent), r.sourceConfigurationOverride = he(r.sourceConfigurationOverride), x(e, xe(r))
    },
    tn = "dataplaneEventsQueue",
    rn = "destinationsEventsQueue",
    kp = "transformEvent",
    Up = (e, t) => Object.keys(e).filter(r => e[r] !== !0 || !t[r]).reduce((r, s) => {
        const n = b(r);
        return n[s] = e[s], n
    }, {}),
    wp = (e, t) => {
        const r = b(e),
            s = t.nativeDestinations.integrationsConfig.value,
            n = Up(e.integrations, s);
        return r.integrations = x(s, n), r
    },
    $p = e => e.consents.preConsent.value.enabled && e.consents.preConsent.value.events ? .delivery === "buffer",
    St = (e, t, r, s) => {
        if (N(e))
            if (_(e)) try {
                e(...t)
            } catch (n) {
                s.error(Bo(r), n)
            } else s.error(Nn(r))
    },
    Bp = class {
        constructor(e, t, r, s, n) {
            this.pluginsManager = e, this.errorHandler = s, this.httpClient = r, this.logger = n, this.storeManager = t
        }
        init() {
            this.dataplaneEventsQueue = this.pluginsManager.invokeSingle(`${tn}.init`, o, this.httpClient, this.storeManager, this.errorHandler, this.logger), this.dmtEventsQueue = this.pluginsManager.invokeSingle(`${kp}.init`, o, this.pluginsManager, this.httpClient, this.storeManager, this.errorHandler, this.logger), this.destinationsEventsQueue = this.pluginsManager.invokeSingle(`${rn}.init`, o, this.pluginsManager, this.storeManager, this.dmtEventsQueue, this.errorHandler, this.logger), de(() => {
                o.nativeDestinations.clientDestinationsReady.value === !0 && (this.destinationsEventsQueue ? .start(), this.dmtEventsQueue ? .start())
            });
            const e = $p(o);
            let t;
            de(() => {
                const r = o.loadOptions.value.bufferDataPlaneEventsUntilReady === !0 && o.nativeDestinations.clientDestinationsReady.value === !1;
                (o.nativeDestinations.activeDestinations.value.some(s => Fn(s)) === !1 || r === !1) && !e && this.dataplaneEventsQueue ? .scheduleTimeoutActive !== !0 && (globalThis.clearTimeout(t), this.dataplaneEventsQueue ? .start())
            }), o.loadOptions.value.bufferDataPlaneEventsUntilReady === !0 && (t = globalThis.setTimeout(() => {
                this.dataplaneEventsQueue ? .scheduleTimeoutActive !== !0 && this.dataplaneEventsQueue ? .start()
            }, o.loadOptions.value.dataPlaneEventsBufferTimeout))
        }
        resume() {
            this.dataplaneEventsQueue ? .scheduleTimeoutActive !== !0 && (o.consents.postConsent.value.discardPreConsentEvents && (this.dataplaneEventsQueue ? .clear(), this.destinationsEventsQueue ? .clear()), this.dataplaneEventsQueue ? .start())
        }
        enqueue(e, t) {
            const r = wp(e, o);
            this.pluginsManager.invokeSingle(`${tn}.enqueue`, o, this.dataplaneEventsQueue, r, this.errorHandler, this.logger);
            const s = b(e);
            this.pluginsManager.invokeSingle(`${rn}.enqueue`, o, this.destinationsEventsQueue, s, this.errorHandler, this.logger);
            const n = `${e.type.charAt(0).toUpperCase()}${e.type.slice(1)}${kt}`;
            St(t, [r], n, this.logger)
        }
    },
    sn = e => {
        const t = new CustomEvent(e, {
            detail: {
                analyticsInstance: globalThis.rudderanalytics
            },
            bubbles: !0,
            cancelable: !0,
            composed: !0
        });
        globalThis.document.dispatchEvent(t)
    },
    xp = e => k(e) && e.trim().length > 0,
    Fp = e => Fe(e),
    Gp = class {
        constructor() {
            this.preloadBuffer = new Ga, this.initialized = !1, this.errorHandler = xn, this.logger = Ae, this.customContextStore = new gp(o.customContext, this.logger), this.externalSrcLoader = new yn(this.logger), this.httpClient = Un, this.httpClient.init(this.errorHandler), this.capabilitiesManager = new ap(this.httpClient, this.errorHandler, this.logger)
        }
        load(e, t, r = {}) {
            if (o.lifecycle.status.value) return;
            if (!xp(e)) {
                this.logger.error(lo(lt, e));
                return
            }
            if (!Fp(t)) {
                this.logger.error(co(lt, t));
                return
            }
            const {
                context: s,
                ...n
            } = r, i = C(n);
            s !== void 0 && this.customContextStore.set(s), Y(() => {
                o.lifecycle.writeKey.value = b(e), o.lifecycle.dataPlaneUrl.value = b(t), o.loadOptions.value = Lp(o.loadOptions.value, i), o.lifecycle.status.value = "mounted"
            }), this.logger.setMinLogLevel(o.loadOptions.value.logLevel ? ? bn), Ot("state", o, e), this.startLifecycle()
        }
        setCustomContext(e) {
            if (!o.lifecycle.loaded.value) {
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, ["setCustomContext", e]];
                return
            }
            this.customContextStore.set(e)
        }
        getCustomContext() {
            return this.customContextStore.get()
        }
        clearCustomContext() {
            if (!o.lifecycle.loaded.value) {
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, ["clearCustomContext"]];
                return
            }
            this.customContextStore.clear()
        }
        startLifecycle() {
            de(() => {
                try {
                    switch (o.lifecycle.status.value) {
                        case "mounted":
                            this.onMounted();
                            break;
                        case "browserCapabilitiesReady":
                            this.onBrowserCapabilitiesReady();
                            break;
                        case "configured":
                            this.onConfigured();
                            break;
                        case "pluginsLoading":
                            break;
                        case "pluginsReady":
                            this.onPluginsReady();
                            break;
                        case "initialized":
                            this.onInitialized();
                            break;
                        case "loaded":
                            this.onLoaded();
                            break;
                        case "destinationsLoading":
                            break;
                        case "destinationsReady":
                            this.onDestinationsReady();
                            break;
                        case "ready":
                            this.onReady()
                    }
                } catch (e) {
                    const t = "Failed to load the SDK";
                    this.errorHandler.onError({
                        error: e,
                        context: lt,
                        customMessage: t,
                        groupingHash: t
                    })
                }
            })
        }
        onBrowserCapabilitiesReady() {
            Pa(this), this.prepareInternalServices(), this.loadConfig()
        }
        onLoaded() {
            this.processBufferedEvents(), o.consents.preConsent.value.enabled === !0 ? o.lifecycle.status.value = "ready" : this.loadDestinations()
        }
        onMounted() {
            this.capabilitiesManager.init()
        }
        enqueuePreloadBufferEvents(e) {
            Array.isArray(e) && e.forEach(t => this.preloadBuffer.enqueue(b(t)))
        }
        processDataInPreloadBuffer() {
            for (; this.preloadBuffer.size() > 0;) {
                const e = this.preloadBuffer.dequeue();
                e && Ma([...e], this)
            }
        }
        prepareInternalServices() {
            this.pluginsManager = new Wv(rc, this.errorHandler, this.logger), this.storeManager = new Af(this.pluginsManager, this.errorHandler, this.logger), this.configManager = new jf(this.httpClient, this.errorHandler, this.logger), this.userSessionManager = new Pp(this.pluginsManager, this.storeManager, this.httpClient, this.errorHandler, this.logger), this.eventRepository = new Bp(this.pluginsManager, this.storeManager, this.httpClient, this.errorHandler, this.logger), this.eventManager = new Cp(this.eventRepository, this.userSessionManager, this.errorHandler, this.logger)
        }
        loadConfig() {
            o.lifecycle.writeKey.value && this.httpClient.setAuthHeader(o.lifecycle.writeKey.value), this.configManager ? .init()
        }
        onPluginsReady() {
            this.storeManager ? .init(), this.userSessionManager ? .init(), o.consents.enabled.value && !o.consents.initialized.value && (this.pluginsManager ? .invokeSingle("consentManager.init", o, this.logger), o.consents.preConsent.value.enabled === !1 && this.pluginsManager ? .invokeSingle("consentManager.updateConsentsInfo", o, this.storeManager, this.logger)), this.eventManager ? .init(), o.lifecycle.status.value = "initialized"
        }
        onConfigured() {
            this.pluginsManager ? .init()
        }
        onInitialized() {
            this.processDataInPreloadBuffer(), Y(() => {
                o.lifecycle.loaded.value = !0, o.lifecycle.status.value = "loaded"
            }), this.initialized = !0;
            const e = o.loadOptions.value.onLoaded;
            St(e, [globalThis.rudderanalytics], Wi, this.logger), sn("RSA_Initialised")
        }
        onReady() {
            o.lifecycle.status.value = "readyExecuted", o.eventBuffer.readyCallbacksArray.value.forEach(e => {
                St(e, [], Ht, this.logger)
            }), sn("RSA_Ready")
        }
        processBufferedEvents() {
            let e = o.eventBuffer.toBeProcessedArray.value;
            for (; e.length > 0;) {
                const t = e.shift();
                o.eventBuffer.toBeProcessedArray.value = e, t && this.processBufferedEvent(t), e = o.eventBuffer.toBeProcessedArray.value
            }
        }
        processBufferedEvent(e) {
            switch (e[0]) {
                case "setCustomContext":
                    this.setCustomContext(e[1]);
                    break;
                case "clearCustomContext":
                    this.clearCustomContext();
                    break;
                case "ready":
                    this.ready(e[1], !0);
                    break;
                case "page":
                    this.page(e[1], !0, e[2]);
                    break;
                case "track":
                    this.track(e[1], !0, e[2]);
                    break;
                case "identify":
                    this.identify(e[1], !0, e[2]);
                    break;
                case "alias":
                    this.alias(e[1], !0, e[2]);
                    break;
                case "group":
                    this.group(e[1], !0, e[2]);
                    break;
                case "reset":
                    this.reset(e[1], !0);
                    break;
                case "setAnonymousId":
                    this.setAnonymousId(e[1], e[2], !0);
                    break;
                case "startSession":
                    this.startSession(e[1], !0);
                    break;
                case "endSession":
                    this.endSession(!0);
                    break;
                case "consent":
                    this.consent(e[1], !0);
                    break;
                case "addCustomIntegration":
                    this.addCustomIntegration(e[1], e[2], !0);
                    break;
                default:
                    return e
            }
        }
        getInvocationContext(e) {
            return e === void 0 ? this.customContextStore.get() : Ti(e, this.logger) ? ? {}
        }
        loadDestinations() {
            if (o.lifecycle.status.value === "destinationsLoading" || o.nativeDestinations.clientDestinationsReady.value === !0) return;
            this.pluginsManager ? .invokeSingle("nativeDestinations.setActiveDestinations", o, this.pluginsManager, this.errorHandler, this.logger);
            const e = o.nativeDestinations.activeDestinations.value.length;
            if (e === 0) {
                Y(() => {
                    o.nativeDestinations.clientDestinationsReady.value = !0, o.lifecycle.status.value = "destinationsReady"
                });
                return
            }
            o.lifecycle.status.value = "destinationsLoading", this.pluginsManager ? .invokeSingle("nativeDestinations.load", o, this.externalSrcLoader, this.errorHandler, this.logger), de(() => {
                o.nativeDestinations.initializedDestinations.value.length + o.nativeDestinations.failedDestinations.value.length === e && Y(() => {
                    o.lifecycle.status.value = "destinationsReady", o.nativeDestinations.clientDestinationsReady.value = !0
                })
            })
        }
        onDestinationsReady() {
            o.lifecycle.status.value !== "ready" && Y(() => {
                o.lifecycle.status.value = "ready"
            })
        }
        ready(e, t = !1) {
            const r = "ready";
            if (!o.lifecycle.loaded.value) {
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, [r, e]];
                return
            }
            if (this.errorHandler.leaveBreadcrumb(`New ${r} invocation`), !_(e)) {
                this.logger.error(Nn(Ht));
                return
            }
            o.lifecycle.status.value === "readyExecuted" ? St(e, [], Ht, this.logger) : o.eventBuffer.readyCallbacksArray.value = [...o.eventBuffer.readyCallbacksArray.value, e]
        }
        page(e, t = !1, r) {
            const s = "page";
            if (!o.lifecycle.loaded.value) {
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, [s, e]];
                return
            }
            const n = this.getInvocationContext(r);
            this.errorHandler.leaveBreadcrumb(`New ${s} event`), o.metrics.triggered.value += 1, this.eventManager ? .addEvent({
                type: "page",
                category: e.category,
                name: e.name,
                properties: e.properties,
                options: e.options,
                callback: e.callback
            }, n), o.capabilities.isAdBlocked.value === !0 && e.category !== Gr && this.page(bt(Gr, Ea, {
                path: ma
            }, o.loadOptions.value.sendAdblockPageOptions), t, n)
        }
        track(e, t = !1, r) {
            const s = "track";
            if (!o.lifecycle.loaded.value) {
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, [s, e]];
                return
            }
            const n = this.getInvocationContext(r);
            this.errorHandler.leaveBreadcrumb(`New ${s} event - ${e.name}`), o.metrics.triggered.value += 1, this.eventManager ? .addEvent({
                type: s,
                name: e.name || void 0,
                properties: e.properties,
                options: e.options,
                callback: e.callback
            }, n)
        }
        identify(e, t = !1, r) {
            const s = "identify";
            if (!o.lifecycle.loaded.value) {
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, [s, e]];
                return
            }
            const n = this.getInvocationContext(r);
            this.errorHandler.leaveBreadcrumb(`New ${s} event`), o.metrics.triggered.value += 1, e.userId && o.session.userId.value && e.userId !== o.session.userId.value && this.reset(), ee(e.userId) || this.userSessionManager ? .setUserId(e.userId), this.userSessionManager ? .setUserTraits(e.traits), this.eventManager ? .addEvent({
                type: s,
                userId: e.userId,
                traits: e.traits,
                options: e.options,
                callback: e.callback
            }, n)
        }
        alias(e, t = !1, r) {
            const s = "alias";
            if (!o.lifecycle.loaded.value) {
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, [s, e]];
                return
            }
            const n = this.getInvocationContext(r);
            this.errorHandler.leaveBreadcrumb(`New ${s} event`), o.metrics.triggered.value += 1;
            const i = e.from ? ? (this.getUserId() || this.userSessionManager ? .getAnonymousId());
            this.eventManager ? .addEvent({
                type: s,
                to: e.to,
                from: i,
                options: e.options,
                callback: e.callback
            }, n)
        }
        group(e, t = !1, r) {
            const s = "group";
            if (!o.lifecycle.loaded.value) {
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, [s, e]];
                return
            }
            const n = this.getInvocationContext(r);
            this.errorHandler.leaveBreadcrumb(`New ${s} event`), o.metrics.triggered.value += 1, ee(e.groupId) || this.userSessionManager ? .setGroupId(e.groupId), this.userSessionManager ? .setGroupTraits(e.traits), this.eventManager ? .addEvent({
                type: s,
                groupId: e.groupId,
                traits: e.traits,
                options: e.options,
                callback: e.callback
            }, n)
        }
        reset(e, t = !1) {
            const r = "reset";
            if (!o.lifecycle.loaded.value) {
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, [r, e]];
                return
            }
            this.errorHandler.leaveBreadcrumb(`New ${r} invocation`), this.userSessionManager ? .reset(e)
        }
        getAnonymousId(e) {
            return this.userSessionManager ? .getAnonymousId(e)
        }
        setAnonymousId(e, t, r = !1) {
            const s = "setAnonymousId";
            if (!o.lifecycle.loaded.value) {
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, [s, e, t]];
                return
            }
            this.errorHandler.leaveBreadcrumb(`New ${s} invocation`), this.userSessionManager ? .setAnonymousId(e, t)
        }
        getUserId() {
            return o.session.userId.value
        }
        getUserTraits() {
            return o.session.userTraits.value
        }
        getGroupId() {
            return o.session.groupId.value
        }
        getGroupTraits() {
            return o.session.groupTraits.value
        }
        startSession(e, t = !1) {
            const r = "startSession";
            if (!o.lifecycle.loaded.value) {
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, [r, e]];
                return
            }
            this.errorHandler.leaveBreadcrumb(`New ${r} invocation`), this.userSessionManager ? .start(e)
        }
        endSession(e = !1) {
            const t = "endSession";
            if (!o.lifecycle.loaded.value) {
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, [t]];
                return
            }
            this.errorHandler.leaveBreadcrumb(`New ${t} invocation`), this.userSessionManager ? .end()
        }
        getSessionId() {
            return this.userSessionManager ? .getSessionId() ? ? null
        }
        consent(e, t = !1) {
            const r = "consent";
            if (!o.lifecycle.loaded.value) {
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, [r, e]];
                return
            }
            this.errorHandler.leaveBreadcrumb("New consent invocation"), Y(() => {
                o.consents.preConsent.value = { ...o.consents.preConsent.value,
                    enabled: !1
                }, o.consents.postConsent.value = Lf(e, this.logger);
                const {
                    initialized: s,
                    consentsData: n
                } = _i(o.consents.postConsent.value.consentManagement, this.logger);
                o.consents.initialized.value = s, o.consents.data.value = n
            }), o.consents.enabled.value && !o.consents.initialized.value && this.pluginsManager ? .invokeSingle("consentManager.updateConsentsInfo", o, this.storeManager, this.logger), this.storeManager ? .initializeStorageState(), this.userSessionManager ? .syncStorageDataToState(), this.eventManager ? .resume(), this.loadDestinations(), this.sendTrackingEvents(t)
        }
        sendTrackingEvents(e) {
            if (o.consents.postConsent.value.trackConsent) {
                const t = Sr(Aa);
                e ? o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, ["track", t, this.customContextStore.get()]] : this.track(t)
            }
            if (o.consents.postConsent.value.sendPageEvent) {
                const t = bt();
                e ? o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, ["page", t, this.customContextStore.get()]] : this.page(t)
            }
        }
        setAuthToken(e) {
            this.userSessionManager ? .setAuthToken(e)
        }
        addCustomIntegration(e, t, r = !1) {
            const s = "addCustomIntegration";
            if (r) this.errorHandler.leaveBreadcrumb(`New ${s} invocation`), this.pluginsManager ? .invokeSingle("nativeDestinations.addCustomIntegration", e, t, o, this.logger);
            else {
                if (o.lifecycle.loaded.value) {
                    this.logger.error(Xo(lt, e));
                    return
                }
                o.eventBuffer.toBeProcessedArray.value = [...o.eventBuffer.toBeProcessedArray.value, [s, e, t]]
            }
        }
    },
    Vp = class qe {
        static globalSingleton = null;
        analyticsInstances = {};
        defaultAnalyticsKey = "";
        logger = Ae;
        constructor() {
            try {
                if (qe.globalSingleton) return qe.globalSingleton;
                qe.initializeGlobalResources(), this.setDefaultInstanceKey = this.setDefaultInstanceKey.bind(this), this.getAnalyticsInstance = this.getAnalyticsInstance.bind(this), this.load = this.load.bind(this), this.ready = this.ready.bind(this), this.triggerBufferedLoadEvent = this.triggerBufferedLoadEvent.bind(this), this.page = this.page.bind(this), this.track = this.track.bind(this), this.identify = this.identify.bind(this), this.alias = this.alias.bind(this), this.group = this.group.bind(this), this.reset = this.reset.bind(this), this.getAnonymousId = this.getAnonymousId.bind(this), this.setAnonymousId = this.setAnonymousId.bind(this), this.getUserId = this.getUserId.bind(this), this.getUserTraits = this.getUserTraits.bind(this), this.getGroupId = this.getGroupId.bind(this), this.getGroupTraits = this.getGroupTraits.bind(this), this.setCustomContext = this.setCustomContext.bind(this), this.getCustomContext = this.getCustomContext.bind(this), this.clearCustomContext = this.clearCustomContext.bind(this), this.startSession = this.startSession.bind(this), this.endSession = this.endSession.bind(this), this.getSessionId = this.getSessionId.bind(this), this.setAuthToken = this.setAuthToken.bind(this), this.consent = this.consent.bind(this), this.addCustomIntegration = this.addCustomIntegration.bind(this), this.createSafeAnalyticsInstance(), qe.globalSingleton = this, o.autoTrack.pageLifecycle.pageViewId.value = ce(), o.autoTrack.pageLifecycle.pageLoadedTimestamp.value = Date.now(), this.triggerBufferedLoadEvent(), globalThis.rudderanalytics = this
            } catch (t) {
                U(t)
            }
        }
        createSafeAnalyticsInstance() {
            o.lifecycle.safeAnalyticsInstance.value = {
                page: this.page.bind(this),
                track: this.track.bind(this),
                identify: this.identify.bind(this),
                alias: this.alias.bind(this),
                group: this.group.bind(this),
                getAnonymousId: this.getAnonymousId.bind(this),
                getUserId: this.getUserId.bind(this),
                getUserTraits: this.getUserTraits.bind(this),
                getGroupId: this.getGroupId.bind(this),
                getGroupTraits: this.getGroupTraits.bind(this),
                getSessionId: this.getSessionId.bind(this)
            }
        }
        static initializeGlobalResources() {
            xn.init(), Mr.configure(), Cr.configure(), Pr.configure(), Mt.configure()
        }
        setDefaultInstanceKey(t) {
            k(t) && t && (this.defaultAnalyticsKey = t)
        }
        getAnalyticsInstance(t) {
            try {
                let r = t;
                return (!k(r) || !r) && (r = this.defaultAnalyticsKey), this.analyticsInstances[r] || (this.analyticsInstances[r] = new Gp), this.analyticsInstances[r]
            } catch (r) {
                U(r);
                return
            }
        }
        load(t, r, s) {
            try {
                if (this.analyticsInstances[t]) return;
                this.setDefaultInstanceKey(t), this.trackPageLifecycleEvents(s);
                const n = An(Je);
                Ca(n), Ot(Je, b(n)), this.getAnalyticsInstance(t) ? .load(t, r, s)
            } catch (n) {
                U(n)
            }
        }
        trackPageLifecycleEvents(t) {
            const {
                autoTrack: r,
                useBeacon: s
            } = t ? ? {}, {
                enabled: n = !1,
                options: i = {},
                pageLifecycle: a
            } = r ? ? {}, {
                events: l = [Vt.UNLOADED],
                enabled: c = n,
                options: u = i
            } = a ? ? {};
            o.autoTrack.pageLifecycle.enabled.value = c, o.autoTrack.enabled.value = n || c, c && this.setupPageUnloadTracking(l, s, u)
        }
        setupPageUnloadTracking(t, r, s) {
            (t.length === 0 || t.includes(Vt.UNLOADED)) && (r === !0 ? hn(n => {
                if (n === !1 && o.lifecycle.loaded.value) {
                    const i = Date.now(),
                        a = i - o.autoTrack.pageLifecycle.pageLoadedTimestamp.value;
                    this.track(Vt.UNLOADED, {
                        timeOnPage: a
                    }, { ...s,
                        originalTimestamp: gn(new Date(i))
                    })
                }
            }, !0) : this.logger.warn(Ko(Ji)))
        }
        triggerBufferedLoadEvent() {
            const t = Array.isArray(globalThis.rudderanalytics) ? globalThis.rudderanalytics : [],
                r = Da(t);
            Ot(Je, b([...t])), r.length > 0 && (r.shift(), this.load.apply(null, r))
        }
        ready(t) {
            try {
                this.getAnalyticsInstance() ? .ready(C(t))
            } catch (r) {
                U(r)
            }
        }
        page(t, r, s, n, i) {
            try {
                this.getAnalyticsInstance() ? .page(bt(C(t), C(r), C(s), C(n), C(i)))
            } catch (a) {
                U(a)
            }
        }
        track(t, r, s, n) {
            try {
                this.getAnalyticsInstance() ? .track(Sr(C(t), C(r), C(s), C(n)))
            } catch (i) {
                U(i)
            }
        }
        identify(t, r, s, n) {
            try {
                this.getAnalyticsInstance() ? .identify(cn(C(t), C(r), C(s), C(n)))
            } catch (i) {
                U(i)
            }
        }
        alias(t, r, s, n) {
            try {
                this.getAnalyticsInstance() ? .alias(un(C(t), C(r), C(s), C(n)))
            } catch (i) {
                U(i)
            }
        }
        group(t, r, s, n) {
            try {
                this.getAnalyticsInstance() ? .group(dn(C(t), C(r), C(s), C(n)))
            } catch (i) {
                U(i)
            }
        }
        reset(t) {
            try {
                this.getAnalyticsInstance() ? .reset(C(t))
            } catch (r) {
                U(r)
            }
        }
        getAnonymousId(t) {
            try {
                return this.getAnalyticsInstance() ? .getAnonymousId(C(t))
            } catch (r) {
                U(r);
                return
            }
        }
        setAnonymousId(t, r) {
            try {
                this.getAnalyticsInstance() ? .setAnonymousId(C(t), C(r))
            } catch (s) {
                U(s)
            }
        }
        getUserId() {
            try {
                return this.getAnalyticsInstance() ? .getUserId()
            } catch (t) {
                U(t);
                return
            }
        }
        getUserTraits() {
            try {
                return this.getAnalyticsInstance() ? .getUserTraits()
            } catch (t) {
                U(t);
                return
            }
        }
        getGroupId() {
            try {
                return this.getAnalyticsInstance() ? .getGroupId()
            } catch (t) {
                U(t);
                return
            }
        }
        getGroupTraits() {
            try {
                return this.getAnalyticsInstance() ? .getGroupTraits()
            } catch (t) {
                U(t);
                return
            }
        }
        setCustomContext(t) {
            try {
                this.getAnalyticsInstance() ? .setCustomContext(t)
            } catch (r) {
                U(r)
            }
        }
        getCustomContext() {
            try {
                return this.getAnalyticsInstance() ? .getCustomContext() ? ? {}
            } catch (t) {
                return U(t), {}
            }
        }
        clearCustomContext() {
            try {
                this.getAnalyticsInstance() ? .clearCustomContext()
            } catch (t) {
                U(t)
            }
        }
        startSession(t) {
            try {
                this.getAnalyticsInstance() ? .startSession(C(t))
            } catch (r) {
                U(r)
            }
        }
        endSession() {
            try {
                this.getAnalyticsInstance() ? .endSession()
            } catch (t) {
                U(t)
            }
        }
        getSessionId() {
            try {
                return this.getAnalyticsInstance() ? .getSessionId()
            } catch (t) {
                U(t);
                return
            }
        }
        setAuthToken(t) {
            try {
                this.getAnalyticsInstance() ? .setAuthToken(C(t))
            } catch (r) {
                U(r)
            }
        }
        consent(t) {
            try {
                this.getAnalyticsInstance() ? .consent(C(t))
            } catch (r) {
                U(r)
            }
        }
        addCustomIntegration(t, r) {
            try {
                this.getAnalyticsInstance() ? .addCustomIntegration(C(t), C(r))
            } catch (s) {
                U(s)
            }
        }
    };
export {
    Vp as RudderAnalytics
};