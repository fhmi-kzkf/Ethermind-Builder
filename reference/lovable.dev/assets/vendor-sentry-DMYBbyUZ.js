import "./rolldown-runtime-CSz5w8F5.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4e9b6d51-fe6e-48ff-8539-8a25a8768a13", e._sentryDebugIdIdentifier = "sentry-dbid-4e9b6d51-fe6e-48ff-8539-8a25a8768a13")
    })()
} catch {}
var h = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    b = globalThis,
    rn = "10.70.0";

function Ie() {
    return Nt(b), b
}

function Nt(e) {
    const t = e.__SENTRY__ = e.__SENTRY__ || {};
    return t.version = t.version || "10.70.0", t[rn] = t["10.70.0"] || {}
}

function ot(e, t, n = b) {
    const r = n.__SENTRY__ = n.__SENTRY__ || {},
        s = r[rn] = r["10.70.0"] || {};
    return s[e] || (s[e] = t())
}
var Ho = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    Uo = "Sentry Logger ",
    sn = {};

function je(e) {
    if (!("console" in b)) return e();
    const t = b.console,
        n = {},
        r = Object.keys(sn);
    r.forEach(s => {
        const i = sn[s];
        n[s] = t[s], t[s] = i
    });
    try {
        return e()
    } finally {
        r.forEach(s => {
            t[s] = n[s]
        })
    }
}

function Bo() {
    pr().enabled = !0
}

function jo() {
    pr().enabled = !1
}

function Js() {
    return pr().enabled
}

function qo(...e) {
    fr("log", ...e)
}

function Wo(...e) {
    fr("warn", ...e)
}

function zo(...e) {
    fr("error", ...e)
}

function fr(e, ...t) {
    h && Js() && je(() => {
        b.console[e](`${Uo}[${e}]:`, ...t)
    })
}

function pr() {
    return h ? ot("loggerSettings", () => ({
        enabled: !1
    })) : {
        enabled: !1
    }
}
var l = {
        enable: Bo,
        disable: jo,
        isEnabled: Js,
        log: qo,
        warn: Wo,
        error: zo
    },
    Ks = 50;
var Mr = /\(error: (.*)\)/,
    $r = /captureMessage|captureException/;

function Qs(...e) {
    const t = e.sort((n, r) => n[0] - r[0]).map(n => n[1]);
    return (n, r = 0, s = 0) => {
        const i = [],
            o = n.split(`
`);
        for (let a = r; a < o.length; a++) {
            let c = o[a];
            c.length > 1024 && (c = c.slice(0, 1024));
            const u = Mr.test(c) ? c.replace(Mr, "$1") : c;
            if (!u.includes("Error: ")) {
                for (const f of t) {
                    const d = f(u);
                    if (d) {
                        i.push(d);
                        break
                    }
                }
                if (i.length >= Ks + s) break
            }
        }
        return Vo(i.slice(s))
    }
}

function Go(e) {
    return Array.isArray(e) ? Qs(...e) : e
}

function Vo(e) {
    if (!e.length) return [];
    const t = Array.from(e);
    return /sentryWrapped/.test(qt(t).function || "") && t.pop(), t.reverse(), $r.test(qt(t).function || "") && (t.pop(), $r.test(qt(t).function || "") && t.pop()), t.slice(0, Ks).map(n => ({ ...n,
        filename: n.filename || qt(t).filename,
        function: n.function || "?"
    }))
}

function qt(e) {
    return e[e.length - 1] || {}
}
var wn = "<anonymous>";

function pe(e) {
    try {
        return !e || typeof e != "function" ? wn : e.name || wn
    } catch {
        return wn
    }
}

function Fr(e) {
    const t = e.exception;
    if (t) {
        const n = [];
        try {
            return t.values.forEach(r => {
                r.stacktrace.frames && n.push(...r.stacktrace.frames)
            }), n
        } catch {
            return
        }
    }
}
var St = {},
    Hr = {};

function Re(e, t) {
    return St[e] = St[e] || [], St[e].push(t), () => {
        const n = St[e];
        if (n) {
            const r = n.indexOf(t);
            r !== -1 && n.splice(r, 1)
        }
    }
}

function Ae(e, t) {
    if (!Hr[e]) {
        Hr[e] = !0;
        try {
            t()
        } catch (n) {
            h && l.error(`Error while instrumenting ${e}`, n)
        }
    }
}

function J(e, t) {
    const n = e && St[e];
    if (n)
        for (const r of n) try {
            r(t)
        } catch (s) {
            h && l.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${pe(r)}
Error:`, s)
        }
}
var Nn = null;

function Zs(e) {
    const t = "error";
    Re(t, e), Ae(t, Yo)
}

function Yo() {
    Nn = b.onerror, b.onerror = function(e, t, n, r, s) {
        return J("error", {
            column: r,
            error: s,
            line: n,
            msg: e,
            url: t
        }), Nn ? Nn.apply(this, arguments) : !1
    }, b.onerror.__SENTRY_INSTRUMENTED__ = !0
}
var kn = null;

function ei(e) {
    const t = "unhandledrejection";
    Re(t, e), Ae(t, Xo)
}

function Xo() {
    kn = b.onunhandledrejection, b.onunhandledrejection = function(e) {
        return J("unhandledrejection", e), kn ? kn.apply(this, arguments) : !0
    }, b.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}
var ti = Object.prototype.toString;

function le(e) {
    switch (ti.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object WebAssembly.Exception]":
            return !0;
        default:
            return _n(e, Error)
    }
}

function at(e, t) {
    return ti.call(e) === `[object ${t}]`
}

function ni(e) {
    return at(e, "ErrorEvent")
}

function Ur(e) {
    return at(e, "DOMError")
}

function Jo(e) {
    return at(e, "DOMException")
}

function ce(e) {
    return at(e, "String")
}

function lr(e) {
    return typeof e == "object" && e !== null && "__sentry_template_string__" in e && "__sentry_template_values__" in e
}

function Fe(e) {
    return e === null || lr(e) || typeof e != "object" && typeof e != "function"
}

function on(e) {
    return at(e, "Object")
}

function gn(e) {
    return typeof e == "object" && e !== null
}

function hn(e) {
    return typeof Event < "u" && _n(e, Event)
}

function Ko(e) {
    return at(e, "RegExp")
}

function kt(e) {
    return !!(e ? .then && typeof e.then == "function")
}

function _n(e, t) {
    try {
        return e instanceof t
    } catch {
        return !1
    }
}

function mr(e) {
    return typeof Request < "u" && _n(e, Request)
}

function q(e, t, n) {
    if (!(t in e)) return;
    const r = e[t];
    if (typeof r != "function") return;
    const s = n(r);
    typeof s == "function" && ri(s, r);
    try {
        e[t] = s
    } catch {
        h && l.log(`Failed to replace method "${t}" in object`, e)
    }
}

function F(e, t, n) {
    try {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        })
    } catch {
        h && l.log(`Failed to add non-enumerable property "${String(t)}" to object`, e)
    }
}

function ri(e, t) {
    try {
        e.prototype = t.prototype = t.prototype || {}, F(e, "__sentry_original__", t)
    } catch {}
}

function gr(e) {
    return e.__sentry_original__
}

function si(e) {
    if (le(e)) return {
        message: e.message,
        name: e.name,
        stack: e.stack,
        ...Br(e)
    };
    if (hn(e)) {
        const {
            type: t,
            target: n,
            currentTarget: r,
            detail: s
        } = e;
        return {
            type: t,
            target: n,
            currentTarget: r,
            ...s ? {
                detail: s
            } : {},
            ...Br(e)
        }
    }
    return e
}

function Br(e) {
    return gn(e) ? Object.fromEntries(Object.entries(e)) : {}
}

function Qo(e) {
    const t = Object.keys(si(e));
    return t.sort(), t[0] ? t.join(", ") : "[object has no keys]"
}
var Ye;

function Ct(e) {
    if (Ye !== void 0) return Ye ? Ye(e) : e();
    const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
        n = b;
    return t in n && typeof n[t] == "function" ? (Ye = n[t], Ye(e)) : (Ye = null, e())
}

function be() {
    return Ct(() => Math.random())
}

function we() {
    return Ct(() => Date.now())
}
var Zo = Symbol.for("sentry.skipNormalization"),
    ea = Symbol.for("sentry.overrideNormalizationDepth");

function ta(e) {
    return !!e[Zo]
}

function na(e) {
    const t = e[ea];
    return typeof t == "number" ? t : void 0
}
var Bn;

function ra(e) {
    Bn = e
}

function ae(e, t = 100, n = 1 / 0) {
    try {
        return jn("", e, t, n)
    } catch (r) {
        return {
            ERROR: `**non-serializable** (${r})`
        }
    }
}

function ii(e, t = 3, n = 102400) {
    const r = ae(e, t);
    return oa(r) > n ? ii(e, t - 1, n) : r
}

function jn(e, t, n = 1 / 0, r = 1 / 0, s = aa()) {
    const [i, o] = s;
    if (t == null || ["boolean", "string"].includes(typeof t) || typeof t == "number" && Number.isFinite(t)) return t;
    const a = oi(e, t);
    if (!a.startsWith("[object ")) return a;
    if (ta(t)) return t;
    const c = na(t),
        u = c !== void 0 ? c : n;
    if (u === 0) return a.replace("object ", "");
    if (i(t)) return "[Circular ~]";
    const f = t;
    if (f && typeof f.toJSON == "function") try {
        return jn("", f.toJSON(), u - 1, r, s)
    } catch {}
    const d = Array.isArray(t) ? [] : {};
    let m = 0;
    const p = si(t);
    for (const g in p) {
        if (!Object.prototype.hasOwnProperty.call(p, g)) continue;
        if (m >= r) {
            d[g] = "[MaxProperties ~]";
            break
        }
        const _ = p[g];
        d[g] = jn(g, _, u - 1, r, s), m++
    }
    return o(t), d
}

function oi(e, t) {
    try {
        if (Bn) {
            const n = Bn(t);
            if (n) return n
        }
        return typeof global < "u" && t === global ? "[Global]" : typeof t == "number" && !Number.isFinite(t) ? `[${t}]` : typeof t == "function" ? `[Function: ${pe(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${sa(t)}]`
    } catch (n) {
        return `**non-serializable** (${n})`
    }
}

function sa(e) {
    const t = Object.getPrototypeOf(e);
    return t ? .constructor ? t.constructor.name : "null prototype"
}

function ia(e) {
    return ~-encodeURI(e).split(/%..|./).length
}

function oa(e) {
    return ia(JSON.stringify(e))
}

function aa() {
    const e = new WeakSet;

    function t(r) {
        return e.has(r) ? !0 : (e.add(r), !1)
    }

    function n(r) {
        e.delete(r)
    }
    return [t, n]
}

function qn(e, t = 0) {
    return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0,t)}...`
}

function jr(e, t) {
    if (!Array.isArray(e)) return "";
    const n = [];
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        Fe(s) ? n.push(String(s)) : s instanceof Error ? n.push(s.message ? `${s.name}: ${s.message}` : s.name) : n.push(oi(void 0, s))
    }
    return n.join(t)
}

function yt(e, t, n = !1) {
    return ce(e) ? Ko(t) ? t.test(e) : ce(t) ? n ? e === t : e.includes(t) : typeof t == "function" ? t(e) : !1 : !1
}

function ue(e, t = [], n = !1) {
    for (const r of t)
        if (yt(e, r, n)) return !0;
    return !1
}

function ca() {
    const e = b;
    return e.crypto || e.msCrypto
}
var Cn;

function ua() {
    return be() * 16
}

function K(e = ca()) {
    try {
        if (e ? .randomUUID) return Ct(() => e.randomUUID()).replace(/-/g, "")
    } catch {}
    return Cn || (Cn = "10000000100040008000100000000000"), Cn.replace(/[018]/g, t => (t ^ (ua() & 15) >> t / 4).toString(16))
}

function ai(e) {
    return e.exception ? .values ? .[0]
}

function xe(e) {
    const {
        message: t,
        event_id: n
    } = e;
    if (t) return t;
    const r = ai(e);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
}

function Wn(e, t, n) {
    const r = e.exception = e.exception || {},
        s = r.values = r.values || [],
        i = s[0] = s[0] || {};
    i.value || (i.value = t || ""), i.type || (i.type = n || "Error")
}

function De(e, t) {
    const n = ai(e);
    if (!n) return;
    const r = {
            type: "generic",
            handled: !0
        },
        s = n.mechanism;
    if (n.mechanism = { ...r,
            ...s,
            ...t
        }, t && "data" in t) {
        const i = { ...s ? .data,
            ...t.data
        };
        n.mechanism.data = i
    }
}

function qr(e) {
    if (da(e)) return !0;
    try {
        F(e, "__sentry_captured__", !0)
    } catch {}
    return !1
}

function da(e) {
    try {
        return e.__sentry_captured__
    } catch {}
}
var ci = 1e3;

function qe() {
    return we() / ci
}

function fa() {
    const {
        performance: e
    } = b;
    if (!e ? .now || !e.timeOrigin) return qe;
    const t = e.timeOrigin;
    return () => (t + Ct(() => e.now())) / ci
}
var Wr;

function C() {
    return (Wr ? ? (Wr = fa()))()
}
var On = null;

function pa() {
    const {
        performance: e
    } = b;
    if (!e ? .now) return;
    const t = 3e5,
        n = Ct(() => e.now()),
        r = we(),
        s = e.timeOrigin;
    if (typeof s == "number" && Math.abs(s + n - r) < t) return s;
    const i = e.timing ? .navigationStart;
    return typeof i == "number" && Math.abs(i + n - r) < t ? i : r - n
}

function M() {
    return On === null && (On = pa()), On
}

function la(e) {
    const t = C(),
        n = {
            sid: K(),
            init: !0,
            timestamp: t,
            started: t,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () => ga(n)
        };
    return e && Ze(n, e), n
}

function Ze(e, t = {}) {
    if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || C(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : K()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
    else if (typeof t.duration == "number") e.duration = t.duration;
    else {
        const n = e.timestamp - e.started;
        e.duration = n >= 0 ? n : 0
    }
    t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
}

function ma(e, t) {
    let n = {};
    t ? n = {
        status: t
    } : e.status === "ok" && (n = {
        status: "exited"
    }), Ze(e, n)
}

function ga(e) {
    return {
        sid: `${e.sid}`,
        init: e.init,
        started: new Date(e.started * 1e3).toISOString(),
        timestamp: new Date(e.timestamp * 1e3).toISOString(),
        status: e.status,
        errors: e.errors,
        did: typeof e.did == "number" || typeof e.did == "string" ? `${e.did}` : void 0,
        duration: e.duration,
        abnormal_mechanism: e.abnormal_mechanism,
        attrs: {
            release: e.release,
            environment: e.environment,
            ip_address: e.ipAddress,
            user_agent: e.userAgent
        }
    }
}

function Ot(e, t, n = 2) {
    if (!t || typeof t != "object" || n <= 0) return t;
    if (e && Object.keys(t).length === 0) return e;
    const r = { ...e
    };
    for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && (r[s] = Ot(r[s], t[s], n - 1));
    return r
}

function me() {
    return K()
}

function de() {
    return K().substring(16)
}

function ui(e) {
    try {
        const t = b.WeakRef;
        if (typeof t == "function") return new t(e)
    } catch {}
    return e
}

function di(e) {
    if (e) {
        if (typeof e == "object" && "deref" in e && typeof e.deref == "function") try {
            return e.deref()
        } catch {
            return
        }
        return e
    }
}
var zn = "_sentrySpan";

function Et(e, t) {
    t ? F(e, zn, ui(t)) : delete e[zn]
}

function an(e) {
    return di(e[zn])
}
var ha = 100,
    He = class Gn {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
                traceId: me(),
                sampleRand: be()
            }
        }
        clone() {
            const t = new Gn;
            return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags
            }, t._attributes = { ...this._attributes
            }, t._extra = { ...this._extra
            }, t._contexts = { ...this._contexts
            }, this._contexts.flags && (t._contexts.flags = {
                values: [...this._contexts.flags.values]
            }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata
            }, t._propagationContext = { ...this._propagationContext
            }, t._client = this._client, t._lastEventId = this._lastEventId, t._conversationId = this._conversationId, Et(t, an(this)), t
        }
        setClient(t) {
            this._client = t
        }
        setLastEventId(t) {
            this._lastEventId = t
        }
        getClient() {
            return this._client
        }
        lastEventId() {
            return this._lastEventId
        }
        addScopeListener(t) {
            this._scopeListeners.push(t)
        }
        addEventProcessor(t) {
            return this._eventProcessors.push(t), this
        }
        setUser(t) {
            return this._user = t || {
                email: void 0,
                id: void 0,
                ip_address: void 0,
                username: void 0
            }, this._session && Ze(this._session, {
                user: t
            }), this._notifyScopeListeners(), this
        }
        getUser() {
            return this._user
        }
        setConversationId(t) {
            return this._conversationId = t || void 0, this._notifyScopeListeners(), this
        }
        setTags(t) {
            return this._tags = { ...this._tags,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setTag(t, n) {
            return this.setTags({
                [t]: n
            })
        }
        setAttributes(t) {
            return this._attributes = { ...this._attributes,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setAttribute(t, n) {
            return this.setAttributes({
                [t]: n
            })
        }
        removeAttribute(t) {
            return t in this._attributes && (delete this._attributes[t], this._notifyScopeListeners()), this
        }
        setExtras(t) {
            return this._extra = { ...this._extra,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setExtra(t, n) {
            return this._extra = { ...this._extra,
                [t]: n
            }, this._notifyScopeListeners(), this
        }
        setFingerprint(t) {
            return this._fingerprint = t, this._notifyScopeListeners(), this
        }
        setLevel(t) {
            return this._level = t, this._notifyScopeListeners(), this
        }
        setTransactionName(t) {
            return this._transactionName = t, this._notifyScopeListeners(), this
        }
        setContext(t, n) {
            return n === null ? delete this._contexts[t] : this._contexts[t] = n, this._notifyScopeListeners(), this
        }
        setSession(t) {
            return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
            return this._session
        }
        update(t) {
            if (!t) return this;
            const n = typeof t == "function" ? t(this) : t,
                {
                    tags: r,
                    attributes: s,
                    extra: i,
                    user: o,
                    contexts: a,
                    level: c,
                    fingerprint: u = [],
                    propagationContext: f,
                    conversationId: d
                } = (n instanceof Gn ? n.getScopeData() : on(n) ? t : void 0) || {};
            return this._tags = { ...this._tags,
                ...r
            }, this._attributes = { ...this._attributes,
                ...s
            }, this._extra = { ...this._extra,
                ...i
            }, this._contexts = { ...this._contexts,
                ...a
            }, o && Object.keys(o).length && (this._user = o), c && (this._level = c), u.length && (this._fingerprint = u), f && (this._propagationContext = f), d && (this._conversationId = d), this
        }
        clear() {
            return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, Et(this, void 0), this._attachments = [], this.setPropagationContext({
                traceId: me(),
                sampleRand: be()
            }), this._notifyScopeListeners(), this
        }
        addBreadcrumb(t, n) {
            const r = typeof n == "number" ? n : ha;
            if (r <= 0) return this;
            const s = {
                timestamp: qe(),
                ...t,
                message: t.message ? qn(t.message, 2048) : t.message
            };
            return this._breadcrumbs.push(s), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), this._client ? .recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(t) {
            return this._attachments.push(t), this
        }
        clearAttachments() {
            return this._attachments = [], this
        }
        getScopeData() {
            return {
                breadcrumbs: this._breadcrumbs,
                attachments: this._attachments,
                contexts: this._contexts,
                tags: this._tags,
                attributes: this._attributes,
                extra: this._extra,
                user: this._user,
                level: this._level,
                fingerprint: this._fingerprint || [],
                eventProcessors: this._eventProcessors,
                propagationContext: this._propagationContext,
                sdkProcessingMetadata: this._sdkProcessingMetadata,
                transactionName: this._transactionName,
                span: an(this),
                conversationId: this._conversationId
            }
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = Ot(this._sdkProcessingMetadata, t, 2), this
        }
        setPropagationContext(t) {
            return this._propagationContext = t, this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        captureException(t, n) {
            const r = n ? .event_id || K();
            if (!this._client) return h && l.warn("No client configured on scope - will not capture exception!"), r;
            const s = new Error("Sentry syntheticException");
            return this._client.captureException(t, {
                originalException: t,
                syntheticException: s,
                ...n,
                event_id: r
            }, this), r
        }
        captureMessage(t, n, r) {
            const s = r ? .event_id || K();
            if (!this._client) return h && l.warn("No client configured on scope - will not capture message!"), s;
            const i = r ? .syntheticException ? ? new Error(t);
            return this._client.captureMessage(t, n, {
                originalException: t,
                syntheticException: i,
                ...r,
                event_id: s
            }, this), s
        }
        captureEvent(t, n) {
            const r = t.event_id || n ? .event_id || K();
            return this._client ? (this._client.captureEvent(t, { ...n,
                event_id: r
            }, this), r) : (h && l.warn("No client configured on scope - will not capture event!"), r)
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
                t(this)
            }), this._notifyingListeners = !1)
        }
    };

function _a() {
    return ot("defaultCurrentScope", () => new He)
}

function Sa() {
    return ot("defaultIsolationScope", () => new He)
}
var zr = e => e instanceof Promise && !e[fi],
    fi = Symbol("chained PromiseLike"),
    ya = (e, t, n) => {
        const r = e.then(s => (t(s), s), s => {
            throw n(s), s
        });
        return zr(r) && zr(e) ? r : va(e, r)
    },
    va = (e, t) => {
        if (!t) return e;
        let n = !1;
        for (const r in e) {
            if (r in t) continue;
            n = !0;
            const s = e[r];
            typeof s == "function" ? Object.defineProperty(t, r, {
                value: (...i) => s.apply(e, i),
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[r] = s
        }
        return n && Object.assign(t, {
            [fi]: !0
        }), t
    },
    ba = class {
        constructor(e, t) {
            let n;
            e ? n = e : n = new He;
            let r;
            t ? r = t : r = new He, this._stack = [{
                scope: n
            }], this._isolationScope = r
        }
        withScope(e) {
            const t = this._pushScope();
            let n;
            try {
                n = e(t)
            } catch (r) {
                throw this._popScope(), r
            }
            return kt(n) ? ya(n, () => this._popScope(), () => this._popScope()) : (this._popScope(), n)
        }
        getClient() {
            return this.getStackTop().client
        }
        getScope() {
            return this.getStackTop().scope
        }
        getIsolationScope() {
            return this._isolationScope
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        _pushScope() {
            const e = this.getScope().clone();
            return this._stack.push({
                client: this.getClient(),
                scope: e
            }), e
        }
        _popScope() {
            return this._stack.length <= 1 ? !1 : !!this._stack.pop()
        }
    };

function et() {
    const e = Ie(),
        t = Nt(e);
    return t.stack = t.stack || new ba(_a(), Sa())
}

function Ea(e) {
    return et().withScope(e)
}

function Ta(e, t) {
    const n = et();
    return n.withScope(() => (n.getStackTop().scope = e, t(e)))
}

function Gr(e) {
    return et().withScope(() => e(et().getIsolationScope()))
}

function Ia() {
    return {
        withIsolationScope: Gr,
        withScope: Ea,
        withSetScope: Ta,
        withSetIsolationScope: (e, t) => Gr(t),
        getCurrentScope: () => et().getScope(),
        getIsolationScope: () => et().getIsolationScope()
    }
}

function ct(e) {
    const t = Nt(e);
    return t.acs ? t.acs : Ia()
}

function Ra(e) {
    return typeof e == "object" && e != null && !Array.isArray(e) && Object.keys(e).includes("value")
}

function Aa(e, t) {
    const {
        value: n,
        unit: r
    } = Ra(e) ? e : {
        value: e,
        unit: void 0
    }, s = wa(n), i = r && typeof r == "string" ? {
        unit: r
    } : {};
    if (s) return { ...s,
        ...i
    };
    if (!t || t === "skip-undefined" && n === void 0) return;
    let o = "";
    try {
        o = JSON.stringify(n) ? ? ""
    } catch {}
    return {
        value: o,
        type: "string",
        ...i
    }
}

function Vr(e, t = !1) {
    const n = {};
    for (const [r, s] of Object.entries(e ? ? {})) {
        const i = Aa(s, t);
        i && (n[r] = i)
    }
    return n
}

function wa(e) {
    if (Array.isArray(e)) return {
        value: e,
        type: "array"
    };
    const t = typeof e == "string" ? "string" : typeof e == "boolean" ? "boolean" : typeof e == "number" && !Number.isNaN(e) ? Number.isInteger(e) ? "integer" : "double" : null;
    if (t) return {
        value: e,
        type: t
    }
}
var pi;

function Na() {
    return pi ? .()
}

function ka() {
    return pi !== void 0
}

function R() {
    const e = Ie();
    return ct(e).getCurrentScope()
}

function G() {
    const e = Ie();
    return ct(e).getIsolationScope()
}

function Ca() {
    return ot("globalScope", () => new He)
}

function hr(...e) {
    const t = Ie(),
        n = ct(t);
    if (e.length === 2) {
        const [r, s] = e;
        return r ? n.withSetScope(r, s) : n.withScope(s)
    }
    return n.withScope(e[0])
}

function T() {
    return R().getClient()
}

function Oa(e) {
    const t = Na();
    if (t) return {
        trace_id: t.traceId,
        span_id: t.spanId
    };
    const {
        traceId: n,
        parentSpanId: r,
        propagationSpanId: s
    } = e.getPropagationContext(), i = {
        trace_id: n,
        span_id: s || de()
    };
    return r && (i.parent_span_id = r), i
}
var ve = "sentry.source",
    Pa = "sentry.sample_rate",
    La = "sentry.previous_trace_sample_rate",
    ee = "sentry.op",
    k = "sentry.origin";
var cn = "sentry.idle_span_finish_reason",
    Pt = "sentry.measurement_unit",
    Lt = "sentry.measurement_value",
    Yr = "sentry.custom_span_name",
    li = "sentry.profile_id",
    We = "sentry.exclusive_time",
    xa = "sentry.link.type",
    Da = "gen_ai.conversation.id";

function Ma(e) {
    if (e < 400 && e >= 100) return {
        code: 1
    };
    if (e >= 400 && e < 500) switch (e) {
        case 401:
            return {
                code: 2,
                message: "unauthenticated"
            };
        case 403:
            return {
                code: 2,
                message: "permission_denied"
            };
        case 404:
            return {
                code: 2,
                message: "not_found"
            };
        case 409:
            return {
                code: 2,
                message: "already_exists"
            };
        case 413:
            return {
                code: 2,
                message: "failed_precondition"
            };
        case 429:
            return {
                code: 2,
                message: "resource_exhausted"
            };
        case 499:
            return {
                code: 2,
                message: "cancelled"
            };
        default:
            return {
                code: 2,
                message: "invalid_argument"
            }
    }
    if (e >= 500 && e < 600) switch (e) {
        case 501:
            return {
                code: 2,
                message: "unimplemented"
            };
        case 503:
            return {
                code: 2,
                message: "unavailable"
            };
        case 504:
            return {
                code: 2,
                message: "deadline_exceeded"
            };
        default:
            return {
                code: 2,
                message: "internal_error"
            }
    }
    return {
        code: 2,
        message: "internal_error"
    }
}

function mi(e, t) {
    e.setAttribute("http.response.status_code", t);
    const n = Ma(t);
    n.message !== "unknown_error" && e.setStatus(n)
}
var gi = "_sentryScope",
    hi = "_sentryIsolationScope",
    $a = Symbol.for("sentry.otelSourceInference"),
    Fa = Symbol.for("sentry.otelSourceExplicitlySet"),
    Ha = Symbol.for("sentry.tracerProviderSpan");

function tt(e, t, n) {
    e && (F(e, hi, ui(n)), F(e, gi, t))
}

function Ke(e) {
    const t = e;
    return {
        scope: t[gi],
        isolationScope: di(t[hi])
    }
}

function Xr(e) {
    return e[$a] === !0
}

function Ua(e) {
    F(e, Fa, !0)
}

function Jr(e) {
    return e[Ha] === !0
}
var _i = "sentry-";

function Si(e) {
    const t = ja(e);
    if (!t) return;
    const n = Object.entries(t).reduce((r, [s, i]) => {
        if (s.startsWith("sentry-")) {
            const o = s.slice(7);
            r[o] = i
        }
        return r
    }, {});
    if (Object.keys(n).length > 0) return n
}

function Ba(e) {
    if (e) return qa(Object.entries(e).reduce((t, [n, r]) => (r && (t[`${_i}${n}`] = r), t), {}))
}

function ja(e) {
    if (!(!e || !ce(e) && !Array.isArray(e))) return Array.isArray(e) ? e.reduce((t, n) => {
        const r = Kr(n);
        return Object.entries(r).forEach(([s, i]) => {
            t[s] = i
        }), t
    }, {}) : Kr(e)
}

function Kr(e) {
    return e.split(",").map(t => {
        const n = t.indexOf("=");
        return n === -1 ? [] : [t.slice(0, n), t.slice(n + 1)].map(r => {
            try {
                return decodeURIComponent(r.trim())
            } catch {
                return
            }
        })
    }).reduce((t, [n, r]) => (n && r && (t[n] = r), t), {})
}

function qa(e) {
    if (Object.keys(e).length !== 0) return Object.entries(e).reduce((t, [n, r], s) => {
        const i = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
            o = s === 0 ? i : `${t},${i}`;
        return o.length > 8192 ? (h && l.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`), t) : o
    }, "")
}
var Wa = /^o(\d+)\./,
    za = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

function Ga(e) {
    return e === "http" || e === "https"
}

function ut(e, t = !1) {
    const {
        host: n,
        path: r,
        pass: s,
        port: i,
        projectId: o,
        protocol: a,
        publicKey: c
    } = e;
    return `${a}://${c}${t&&s?`:${s}`:""}@${n}${i?`:${i}`:""}/${r&&`${r}/`}${o}`
}

function Va(e) {
    const t = za.exec(e);
    if (!t) {
        je(() => {
            console.error(`Invalid Sentry Dsn: ${e}`)
        });
        return
    }
    const [n, r, s = "", i = "", o = "", a = ""] = t.slice(1);
    let c = "",
        u = a;
    const f = u.split("/");
    if (f.length > 1 && (c = f.slice(0, -1).join("/"), u = f.pop()), u) {
        const d = u.match(/^\d+/);
        d && (u = d[0])
    }
    return yi({
        host: i,
        pass: s,
        path: c,
        projectId: u,
        port: o,
        protocol: n,
        publicKey: r
    })
}

function yi(e) {
    return {
        protocol: e.protocol,
        publicKey: e.publicKey || "",
        pass: e.pass || "",
        host: e.host,
        port: e.port || "",
        path: e.path || "",
        projectId: e.projectId
    }
}

function Ya(e) {
    if (!h) return !0;
    const {
        port: t,
        projectId: n,
        protocol: r
    } = e;
    return ["protocol", "publicKey", "host", "projectId"].find(s => e[s] ? !1 : (l.error(`Invalid Sentry Dsn: ${s} missing`), !0)) ? !1 : n.match(/^\d+$/) ? Ga(r) ? t && isNaN(parseInt(t, 10)) ? (l.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : !0 : (l.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : (l.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1)
}

function Xa(e) {
    return e.match(Wa) ? .[1]
}

function Ja(e) {
    const t = e.getOptions(),
        {
            host: n
        } = e.getDsn() || {};
    let r;
    return t.orgId ? r = String(t.orgId) : n && (r = Xa(n)), r
}

function Ka(e) {
    const t = typeof e == "string" ? Va(e) : yi(e);
    if (!(!t || !Ya(t))) return t
}

function Tt(e) {
    if (typeof e == "boolean") return Number(e);
    const t = typeof e == "string" ? parseFloat(e) : e;
    if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) return t
}
var vi = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

function Qa(e) {
    if (!e) return;
    const t = e.match(vi);
    if (!t) return;
    let n;
    return t[3] === "1" ? n = !0 : t[3] === "0" && (n = !1), {
        traceId: t[1],
        parentSampled: n,
        parentSpanId: t[2]
    }
}

function Za(e, t) {
    const n = Qa(e),
        r = Si(t);
    if (!n ? .traceId) return {
        traceId: me(),
        sampleRand: be()
    };
    const s = ec(n, r);
    r && (r.sample_rand = s.toString());
    const {
        traceId: i,
        parentSpanId: o,
        parentSampled: a
    } = n;
    return {
        traceId: i,
        parentSpanId: o,
        sampled: a,
        dsc: r || {},
        sampleRand: s
    }
}

function bi(e = me(), t = de(), n) {
    let r = "";
    return n !== void 0 && (r = n ? "-1" : "-0"), `${e}-${t}${r}`
}

function Ei(e = me(), t = de(), n) {
    return `00-${e}-${t}-${n?"01":"00"}`
}

function ec(e, t) {
    const n = Tt(t ? .sample_rand);
    if (n !== void 0) return n;
    const r = Tt(t ? .sample_rate);
    return r && e ? .parentSampled !== void 0 ? e.parentSampled ? be() * r : r + be() * (1 - r) : be()
}
var Qr = !1;

function tc(e) {
    const {
        spanId: t,
        traceId: n
    } = e.spanContext(), {
        data: r,
        op: s,
        parent_span_id: i,
        status: o,
        origin: a,
        links: c
    } = E(e);
    return {
        parent_span_id: i,
        span_id: t,
        trace_id: n,
        data: r,
        op: s,
        status: o,
        origin: a,
        links: c
    }
}

function nc(e) {
    const {
        spanId: t,
        traceId: n,
        isRemote: r
    } = e.spanContext(), s = r ? t : E(e).parent_span_id, i = Ke(e).scope;
    return {
        parent_span_id: s,
        span_id: r ? i ? .getPropagationContext().propagationSpanId || de() : t,
        trace_id: n
    }
}

function rc(e) {
    const {
        traceId: t,
        spanId: n
    } = e.spanContext(), r = Ne(e);
    return bi(t, n, r)
}

function sc(e) {
    const {
        traceId: t,
        spanId: n
    } = e.spanContext(), r = Ne(e);
    return Ei(t, n, r)
}

function Ti(e) {
    if (e && e.length > 0) return e.map(({
        context: {
            spanId: t,
            traceId: n,
            traceFlags: r,
            ...s
        },
        attributes: i
    }) => ({
        span_id: t,
        trace_id: n,
        sampled: r === 1,
        attributes: i,
        ...s
    }))
}

function Ii(e) {
    if (e ? .length) return e.map(({
        context: {
            spanId: t,
            traceId: n,
            traceFlags: r
        },
        attributes: s
    }) => ({
        span_id: t,
        trace_id: n,
        sampled: r === 1,
        attributes: s
    }))
}

function fe(e) {
    return typeof e == "number" ? Zr(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? Zr(e.getTime()) : C()
}

function Zr(e) {
    return e > 9999999999 ? e / 1e3 : e
}

function E(e) {
    if (Ni(e)) return e.getSpanJSON();
    const {
        spanId: t,
        traceId: n
    } = e.spanContext();
    if (wi(e)) {
        const {
            attributes: r,
            startTime: s,
            name: i,
            endTime: o,
            status: a,
            links: c
        } = e;
        return {
            span_id: t,
            trace_id: n,
            data: r,
            description: i,
            parent_span_id: Ai(e),
            start_timestamp: fe(s),
            timestamp: fe(o) || void 0,
            status: ki(a),
            op: r[ee],
            origin: r[k],
            links: Ti(c)
        }
    }
    return {
        span_id: t,
        trace_id: n,
        start_timestamp: 0,
        data: {}
    }
}

function Ri(e) {
    if (Ni(e)) return e.getStreamedSpanJSON();
    const {
        spanId: t,
        traceId: n
    } = e.spanContext();
    if (wi(e)) {
        const {
            attributes: r,
            startTime: s,
            name: i,
            endTime: o,
            status: a,
            links: c
        } = e;
        return {
            name: i,
            span_id: t,
            trace_id: n,
            parent_span_id: Ai(e),
            start_timestamp: fe(s),
            end_timestamp: fe(o),
            is_segment: e === Yn(e),
            status: _r(a),
            attributes: Ci(r, a),
            links: Ii(c)
        }
    }
    return {
        span_id: t,
        trace_id: n,
        start_timestamp: 0,
        name: "",
        end_timestamp: 0,
        status: "ok",
        is_segment: e === Yn(e)
    }
}

function Ai(e) {
    return "parentSpanId" in e ? e.parentSpanId : "parentSpanContext" in e ? e.parentSpanContext ? .spanId : void 0
}

function ic(e) {
    return { ...e,
        attributes: Vr(e.attributes),
        links: e.links ? .map(t => ({ ...t,
            attributes: Vr(t.attributes)
        }))
    }
}

function wi(e) {
    const t = e;
    return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
}

function Ni(e) {
    return typeof e.getSpanJSON == "function"
}

function Ne(e) {
    const {
        traceFlags: t
    } = e.spanContext();
    return t === 1
}

function ki(e) {
    if (!(!e || e.code === 0)) return e.code === 1 ? "ok" : e.message || "internal_error"
}

function _r(e) {
    return !e || e.code === 1 || e.code === 0 || e.message === "cancelled" ? "ok" : "error"
}

function Ci(e, t) {
    const n = _r(t) === "error" ? t ? .message : void 0;
    return { ...n && {
            "sentry.status.message": n
        },
        ...e
    }
}
var Me = "_sentryChildSpans",
    Vn = "_sentryRootSpan";

function Jt(e, t) {
    const n = e[Vn] || e;
    F(t, Vn, n), e[Me] ? e[Me].add(t) : F(e, Me, new Set([t]))
}

function oc(e, t) {
    e[Me] && e[Me].delete(t)
}

function Kt(e) {
    const t = new Set;

    function n(r) {
        if (!t.has(r) && Ne(r)) {
            t.add(r);
            const s = r[Me] ? Array.from(r[Me]) : [];
            for (const i of s) n(i)
        }
    }
    return n(e), Array.from(t)
}
var $ = Yn;

function Yn(e) {
    return e[Vn] || e
}

function V() {
    const e = Ie(),
        t = ct(e);
    return t.getActiveSpan ? t.getActiveSpan() : an(R())
}

function Xn() {
    Qr || (je(() => {
        console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.")
    }), Qr = !0)
}
var es = !1;

function ac() {
    if (es) return;

    function e() {
        const t = V(),
            n = t && $(t);
        if (n) {
            const r = "internal_error";
            h && l.log(`[Tracing] Root span: ${r} -> Global error occurred`), n.setStatus({
                code: 2,
                message: r
            })
        }
    }
    es = !0, Zs(e), ei(e)
}

function W(e) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
    const t = e || T() ? .getOptions();
    return !!t && (t.tracesSampleRate != null || !!t.tracesSampler)
}

function ts(e) {
    l.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`)
}

function It(e, t) {
    if (!t ? .length) return !1;
    for (const n of t) {
        if (dc(n)) {
            if (e.description && yt(e.description, n)) return h && ts(e), !0;
            continue
        }
        const r = !!n.attributes && Object.keys(n.attributes).length > 0;
        if (!n.name && !n.op && !r) continue;
        const s = n.name ? e.description && yt(e.description, n.name) : !0,
            i = n.op ? e.op && yt(e.op, n.op) : !0,
            o = n.attributes ? Object.entries(n.attributes).every(([a, c]) => cc(e.attributes ? .[a], c)) : !0;
        if (s && i && o) return h && ts(e), !0
    }
    return !1
}

function cc(e, t) {
    return typeof e == "string" && (typeof t == "string" || t instanceof RegExp) ? yt(e, t) : Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e === t
}

function uc(e, t) {
    const n = t.parent_span_id,
        r = t.span_id;
    if (n)
        for (const s of e) s.parent_span_id === r && (s.parent_span_id = n)
}

function dc(e) {
    return typeof e == "string" || e instanceof RegExp
}
var Oi = Symbol.for("sentry.nonRecordingSpan"),
    Ue = class {
        constructor(e = {}) {
            this._traceId = e.traceId || me(), this._spanId = e.spanId || de(), this.dropReason = e.dropReason, F(this, Oi, !0)
        }
        spanContext() {
            return {
                spanId: this._spanId,
                traceId: this._traceId,
                traceFlags: 0
            }
        }
        end(e) {}
        setAttribute(e, t) {
            return this
        }
        setAttributes(e) {
            return this
        }
        setStatus(e) {
            return this
        }
        updateName(e) {
            return this
        }
        isRecording() {
            return !1
        }
        addEvent(e, t, n) {
            return this
        }
        addLink(e) {
            return this
        }
        addLinks(e) {
            return this
        }
        recordException(e, t) {}
    };

function nt(e) {
    return !!e && e[Oi] === !0
}
var fc = "production",
    Pi = "_frozenDsc";

function ns(e, t) {
    F(e, Pi, t)
}

function Li(e, t) {
    const n = t.getOptions(),
        {
            publicKey: r
        } = t.getDsn() || {},
        s = {
            environment: n.environment || "production",
            release: n.release,
            public_key: r,
            trace_id: e,
            org_id: Ja(t)
        };
    return t.emit("createDsc", s), s
}

function Sr(e, t) {
    const n = t.getPropagationContext();
    return n.dsc || Li(n.traceId, e)
}

function dt(e) {
    const t = T();
    if (!t) return {};
    const n = $(e),
        r = E(n),
        s = r.data,
        i = n.spanContext().traceState,
        o = i ? .get("sentry.sample_rate") ? ? s["sentry.sample_rate"] ? ? s["sentry.previous_trace_sample_rate"];

    function a(y) {
        return (typeof o == "number" || typeof o == "string") && (y.sample_rate = `${o}`), y
    }
    const c = n[Pi];
    if (c) return a(c);
    const u = nt(n),
        f = u && n.dropReason === "ignored";
    if (u && (!W(t.getOptions()) || f)) {
        const y = Ke(n).scope;
        if (y) {
            const L = { ...Sr(t, y)
            };
            return f && (L.sampled = "false"), a(L)
        }
    }
    const d = i ? .get("sentry.dsc"),
        m = d && Si(d);
    if (m) return a(m);
    const p = Li(e.spanContext().traceId, t),
        g = s["sentry.source"] ? ? s["sentry.segment.name.source"],
        _ = r.description;
    return g !== "url" && _ && (p.transaction = _), W() && (p.sampled = String(Ne(n)), p.sample_rand = i ? .get("sentry.sample_rand") ? ? Ke(n).scope ? .getPropagationContext().sampleRand.toString()), a(p), t.emit("createDsc", p, n), p
}

function xi(e) {
    return !!e && typeof e == "function" && "_streamed" in e && !!e._streamed
}

function ze(e, t = []) {
    return [e, t]
}

function rs(e, t) {
    const [n, r] = e;
    return [n, [...r, t]]
}

function Jn(e, t) {
    const n = e[1];
    for (const r of n) {
        const s = r[0].type;
        if (t(r, s)) return !0
    }
    return !1
}

function pc(e, t) {
    return Jn(e, (n, r) => t.includes(r))
}

function Kn(e) {
    const t = Nt(b);
    return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e)
}

function lc(e) {
    const [t, n] = e;
    let r = JSON.stringify(t);

    function s(i) {
        typeof r == "string" ? r = typeof i == "string" ? r + i : [Kn(r), i] : r.push(typeof i == "string" ? Kn(i) : i)
    }
    for (const i of n) {
        const [o, a] = i;
        if (s(`
${JSON.stringify(o)}
`), typeof a == "string" || a instanceof Uint8Array) s(a);
        else {
            let c;
            try {
                c = JSON.stringify(a)
            } catch {
                c = JSON.stringify(ae(a))
            }
            s(c)
        }
    }
    return typeof r == "string" ? r : mc(r)
}

function mc(e) {
    const t = e.reduce((s, i) => s + i.length, 0),
        n = new Uint8Array(t);
    let r = 0;
    for (const s of e) n.set(s, r), r += s.length;
    return n
}

function gc(e) {
    return [{
        type: "span"
    }, e]
}

function hc(e) {
    const t = typeof e.data == "string" ? Kn(e.data) : e.data;
    return [{
        type: "attachment",
        length: t.length,
        filename: e.filename,
        content_type: e.contentType,
        attachment_type: e.attachmentType
    }, t]
}
var Di = {
    sessions: "session",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    raw_security: "security",
    log: "log_item",
    trace_metric: "metric"
};

function _c(e) {
    return e in Di
}

function ss(e) {
    return _c(e) ? Di[e] : e
}

function Mi(e) {
    if (!e ? .sdk) return;
    const {
        name: t,
        version: n
    } = e.sdk;
    return {
        name: t,
        version: n
    }
}

function Sc(e, t, n, r) {
    const s = e.sdkProcessingMetadata ? .dynamicSamplingContext;
    return {
        event_id: e.event_id,
        sent_at: new Date(we()).toISOString(),
        ...t && {
            sdk: t
        },
        ...!!n && r && {
            dsn: ut(r)
        },
        ...s && {
            trace: s
        }
    }
}

function yc(e, t) {
    if (!t) return e;
    const n = e.sdk || {};
    return e.sdk = { ...n,
        name: n.name || t.name,
        version: n.version || t.version,
        integrations: [...e.sdk ? .integrations || [], ...t.integrations || []],
        packages: [...e.sdk ? .packages || [], ...t.packages || []],
        settings: e.sdk ? .settings || t.settings ? { ...e.sdk ? .settings,
            ...t.settings
        } : void 0
    }, e
}

function vc(e, t, n, r) {
    const s = Mi(n),
        i = {
            sent_at: new Date(we()).toISOString(),
            ...s && {
                sdk: s
            },
            ...!!r && t && {
                dsn: ut(t)
            }
        },
        o = "aggregates" in e ? [{
            type: "sessions"
        }, e] : [{
            type: "session"
        }, e.toJSON()];
    return ze(i, [o])
}

function bc(e, t, n, r) {
    const s = Mi(n),
        i = e.type && e.type !== "replay_event" ? e.type : "event";
    yc(e, n ? .sdk);
    const o = Sc(e, s, r, t);
    return delete e.sdkProcessingMetadata, ze(o, [
        [{
            type: i
        }, e]
    ])
}

function Ec(e, t) {
    function n(p) {
        return !!p.trace_id && !!p.public_key
    }
    const r = dt(e[0]),
        s = t ? .getDsn(),
        i = t ? .getOptions().tunnel,
        o = {
            sent_at: new Date(we()).toISOString(),
            ...n(r) && {
                trace: r
            },
            ...!!i && s && {
                dsn: ut(s)
            }
        },
        {
            beforeSendSpan: a,
            ignoreSpans: c
        } = t ? .getOptions() || {},
        u = c ? .length ? e.filter(p => {
            const g = E(p);
            return !It({
                description: g.description,
                op: g.op,
                attributes: g.data
            }, c)
        }) : e,
        f = e.length - u.length;
    f && t ? .recordDroppedEvent("before_send", "span", f);
    const d = a ? p => {
            const g = E(p),
                _ = xi(a) ? g : a(g);
            return _ || (Xn(), g)
        } : E,
        m = [];
    for (const p of u) {
        const g = d(p);
        g && m.push(gc(g))
    }
    return ze(o, m)
}

function Tc(e) {
    if (!h) return;
    const {
        description: t = "< unknown name >",
        op: n = "< unknown op >",
        parent_span_id: r
    } = E(e), {
        spanId: s
    } = e.spanContext(), i = Ne(e), o = $(e), a = o === e, c = `[Tracing] Starting ${i?"sampled":"unsampled"} ${a?"root ":""}span`, u = [`op: ${n}`, `name: ${t}`, `ID: ${s}`];
    if (r && u.push(`parent ID: ${r}`), !a) {
        const {
            op: f,
            description: d
        } = E(o);
        u.push(`root ID: ${o.spanContext().spanId}`), f && u.push(`root op: ${f}`), d && u.push(`root description: ${d}`)
    }
    l.log(`${c}
  ${u.join(`
  `)}`)
}

function Ic(e) {
    if (!h) return;
    const {
        description: t = "< unknown name >",
        op: n = "< unknown op >"
    } = E(e), {
        spanId: r
    } = e.spanContext(), s = `[Tracing] Finishing "${n}" ${$(e)===e?"root ":""}span "${t}" with ID ${r}`;
    l.log(s)
}

function $i(e, t, n, r = V()) {
    const s = r && $(r);
    s && (h && l.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`), s.addEvent(e, {
        [Lt]: t,
        [Pt]: n
    }))
}

function is(e) {
    if (!e || e.length === 0) return;
    const t = {};
    return e.forEach(n => {
        const r = n.attributes || {},
            s = r[Pt],
            i = r[Lt];
        typeof s == "string" && typeof i == "number" && (t[n.name] = {
            value: i,
            unit: s
        })
    }), t
}

function os() {
    return Nt(Ie()).segmentSpanCaptureStrategy
}

function re(e) {
    return e.getOptions().traceLifecycle === "stream"
}
var as = 1e3,
    Sn = class {
        constructor(e = {}) {
            this._traceId = e.traceId || me(), this._spanId = e.spanId || de(), this._startTime = e.startTimestamp || C(), this._links = e.links, this._attributes = {}, this.setAttributes({
                [k]: "manual",
                [ee]: e.op,
                ...e.attributes
            }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded()
        }
        addLink(e) {
            return this._frozen ? this : (this._links ? this._links.push(e) : this._links = [e], this)
        }
        addLinks(e) {
            return this._frozen ? this : (this._links ? this._links.push(...e) : this._links = e, this)
        }
        recordException(e, t) {}
        spanContext() {
            const {
                _spanId: e,
                _traceId: t,
                _sampled: n
            } = this;
            return {
                spanId: e,
                traceId: t,
                traceFlags: n ? 1 : 0
            }
        }
        setAttribute(e, t) {
            return this._frozen ? this : (t === void 0 ? delete this._attributes[e] : this._attributes[e] = t, e === "sentry.source" && t !== void 0 && Xr(this) && Ua(this), this)
        }
        setAttributes(e) {
            return Object.keys(e).forEach(t => this.setAttribute(t, e[t])), this
        }
        updateStartTime(e) {
            this._frozen || (this._startTime = fe(e))
        }
        setStatus(e) {
            return this._frozen ? this : (this._status = e, this)
        }
        updateName(e) {
            return this._frozen ? this : (this._name = e, Xr(this) || this.setAttribute(ve, "custom"), this)
        }
        end(e) {
            if (this._endTime) {
                this._frozen = Jr(this);
                return
            }
            this._endTime = fe(e), Ic(this), this._onSpanEnded(), this._frozen = Jr(this)
        }
        getSpanJSON() {
            return {
                data: this._attributes,
                description: this._name,
                op: this._attributes[ee],
                parent_span_id: this._parentSpanId,
                span_id: this._spanId,
                start_timestamp: this._startTime,
                status: ki(this._status),
                timestamp: this._endTime,
                trace_id: this._traceId,
                origin: this._attributes[k],
                profile_id: this._attributes[li],
                exclusive_time: this._attributes[We],
                measurements: is(this._events),
                is_segment: this._isStandaloneSpan && $(this) === this || void 0,
                segment_id: this._isStandaloneSpan ? $(this).spanContext().spanId : void 0,
                links: Ti(this._links)
            }
        }
        getStreamedSpanJSON() {
            return {
                name: this._name ? ? "",
                span_id: this._spanId,
                trace_id: this._traceId,
                parent_span_id: this._parentSpanId,
                start_timestamp: this._startTime,
                end_timestamp: this._endTime ? ? this._startTime,
                is_segment: this._isStandaloneSpan || this === $(this),
                status: _r(this._status),
                attributes: Ci(this._attributes, this._status),
                links: Ii(this._links)
            }
        }
        isRecording() {
            return !this._endTime && !!this._sampled
        }
        addEvent(e, t, n) {
            if (this._frozen) return this;
            h && l.log("[Tracing] Adding an event to span:", e);
            const r = cs(t) ? t : n || C(),
                s = cs(t) ? {} : t || {},
                i = {
                    name: e,
                    time: fe(r),
                    attributes: s
                };
            return this._events.push(i), this
        }
        isStandaloneSpan() {
            return !!this._isStandaloneSpan
        }
        _onSpanEnded() {
            const e = T();
            e && (e.emit("spanEnd", this), this._isStandaloneSpan || e.emit("afterSpanEnd", this));
            const t = $(this),
                n = this._isStandaloneSpan || this === t;
            if (this._isStandaloneSpan) {
                this._sampled ? Ac(Ec([this], e)) : (h && l.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span"));
                return
            }
            if (!n) {
                const i = os();
                if (i) {
                    const o = Ke(this).scope || R();
                    i.onChildSpanEnded(this, t, a => this._convertSpanToTransaction(a), o)
                }
                return
            }
            if (e && re(e)) {
                e.emit("afterSegmentSpanEnd", this);
                return
            }
            const r = Ke(this).scope || R(),
                s = os();
            if (s) s.onSegmentSpanEnded(i => this._convertSpanToTransaction(i), r);
            else {
                const i = this._convertSpanToTransaction();
                i && r.captureEvent(i)
            }
        }
        _convertSpanToTransaction(e = {}) {
            if (!us(E(this))) return;
            this._name || (h && l.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
            const {
                scope: t,
                isolationScope: n
            } = Ke(this), r = t ? .getScopeData().sdkProcessingMetadata ? .normalizedRequest;
            if (this._sampled !== !0) return;
            e.onSpanCaptured ? .(this);
            const s = [];
            for (const u of Kt(this)) {
                if (u === this || Rc(u) || e.isSpanAlreadyCaptured ? .(u)) continue;
                const f = E(u);
                us(f) && (e.onSpanCaptured ? .(u), s.push(f))
            }
            const i = this._attributes[ve];
            delete this._attributes[Yr];
            let o = !1;
            s.forEach(u => {
                delete u.data[Yr], u.op ? .startsWith("gen_ai.") && (o = !0)
            });
            const a = {
                    contexts: {
                        trace: tc(this)
                    },
                    spans: s.length > as ? s.sort((u, f) => u.start_timestamp - f.start_timestamp).slice(0, as) : s,
                    start_timestamp: this._startTime,
                    timestamp: this._endTime,
                    transaction: this._name,
                    type: "transaction",
                    sdkProcessingMetadata: {
                        capturedSpanScope: t,
                        capturedSpanIsolationScope: n,
                        dynamicSamplingContext: dt(this),
                        hasGenAiSpans: o
                    },
                    request: r,
                    ...i && {
                        transaction_info: {
                            source: i
                        }
                    }
                },
                c = is(this._events);
            return c && Object.keys(c).length && (h && l.log("[Measurements] Adding measurements to transaction event", JSON.stringify(c, void 0, 2)), a.measurements = c), a
        }
    };

function cs(e) {
    return e && typeof e == "number" || e instanceof Date || Array.isArray(e)
}

function us(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
}

function Rc(e) {
    return e instanceof Sn && e.isStandaloneSpan()
}

function Ac(e) {
    const t = T();
    if (!t) return;
    const n = e[1];
    if (!n || n.length === 0) {
        t.recordDroppedEvent("before_send", "span");
        return
    }
    t.sendEnvelope(e)
}

function wc(e, t, n) {
    if (!W(e)) return [!1];
    let r, s;
    typeof e.tracesSampler == "function" ? (s = e.tracesSampler({ ...t,
        inheritOrSampleWith: a => typeof t.parentSampleRate == "number" ? t.parentSampleRate : typeof t.parentSampled == "boolean" ? Number(t.parentSampled) : a
    }), r = !0) : t.parentSampled !== void 0 ? s = t.parentSampled : typeof e.tracesSampleRate < "u" && (s = e.tracesSampleRate, r = !0);
    const i = Tt(s);
    if (i === void 0) return h && l.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(s)} of type ${JSON.stringify(typeof s)}.`), [!1];
    if (!i) return h && l.log(`[Tracing] Discarding transaction because ${typeof e.tracesSampler=="function"?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [!1, i, r];
    const o = n < i;
    return o || h && l.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`), [o, i, r]
}
var Nc = "__SENTRY_SUPPRESS_TRACING__";

function ke(e) {
    const t = vr();
    return t.startInactiveSpan ? t.startInactiveSpan(e) : kc(e)
}

function kc(e) {
    const t = Pc(e),
        {
            forceTransaction: n,
            parentSpan: r
        } = e;
    return (e.scope ? s => hr(e.scope, s) : r !== void 0 ? s => Fi(r, s) : s => s())(() => {
        const s = R(),
            i = xc(s, r),
            o = T();
        return e.onlyIfParent && !i ? Cc(s, o) : Oc({
            parentSpan: i,
            spanArguments: t,
            forceTransaction: n,
            scope: s
        })
    })
}

function Fi(e, t) {
    const n = vr();
    return n.withActiveSpan ? n.withActiveSpan(e, t) : hr(r => (Et(r, e || void 0), t(r)))
}

function yr(e = R()) {
    const t = vr();
    return t.isTracingSuppressed ? t.isTracingSuppressed(e) : e.getScopeData().sdkProcessingMetadata[Nc] === !0
}

function Cc(e, t) {
    t ? .recordDroppedEvent("no_parent_span", "span");
    const n = new Ue({
        traceId: e.getPropagationContext().traceId
    });
    return tt(n, e, G()), n
}

function Oc({
    parentSpan: e,
    spanArguments: t,
    forceTransaction: n,
    scope: r
}) {
    const s = G();
    if (!W()) {
        const a = { ...s.getPropagationContext(),
                ...r.getPropagationContext()
            },
            c = e ? e.spanContext().traceId : a.traceId,
            u = new Ue({
                traceId: c
            });
        return e && !n && Jt(e, u), tt(u, r, s), u
    }
    const i = T();
    if (Dc(i, t)) {
        yr(r) || i ? .recordDroppedEvent("ignored", "span");
        const a = new Ue({
            dropReason: "ignored",
            traceId: e ? .spanContext().traceId ? ? r.getPropagationContext().traceId
        });
        return e && !n && Jt(e, a), tt(a, r, s), a
    }
    let o;
    if (e && !n) o = Lc(e, r, t, s), Jt(e, o);
    else if (e) {
        const a = dt(e),
            {
                traceId: c,
                spanId: u
            } = e.spanContext(),
            f = Ne(e);
        o = ds({
            traceId: c,
            parentSpanId: u,
            ...t
        }, r, s, f), ns(o, a)
    } else {
        const {
            traceId: a,
            dsc: c,
            parentSpanId: u,
            sampled: f
        } = { ...s.getPropagationContext(),
            ...r.getPropagationContext()
        };
        o = ds({
            traceId: a,
            parentSpanId: u,
            ...t
        }, r, s, f), c && ns(o, c)
    }
    return Tc(o), o
}

function Pc(e) {
    const t = {
        isStandalone: (e.experimental || {}).standalone,
        ...e
    };
    if (e.startTime) {
        const n = { ...t
        };
        return n.startTimestamp = fe(e.startTime), delete n.startTime, n
    }
    return t
}

function vr() {
    const e = Ie();
    return ct(e)
}

function ds(e, t, n, r) {
    const s = T(),
        i = s ? .getOptions() || {},
        {
            name: o = ""
        } = e,
        a = {
            spanAttributes: { ...e.attributes
            },
            spanName: o,
            parentSampled: r
        };
    s ? .emit("beforeSampling", a, {
        decision: !1
    });
    const c = a.parentSampled ? ? r,
        u = a.spanAttributes,
        f = t.getPropagationContext(),
        d = yr(t),
        [m, p, g] = d ? [!1] : wc(i, {
            name: o,
            parentSampled: c,
            attributes: u,
            normalizedRequest: n.getScopeData().sdkProcessingMetadata.normalizedRequest,
            parentSampleRate: Tt(f.dsc ? .sample_rate)
        }, f.sampleRand),
        _ = new Sn({ ...e,
            attributes: {
                [ve]: "custom",
                [Pa]: p !== void 0 && g ? p : void 0,
                ...u
            },
            sampled: m
        });
    return !m && s && !d && (h && l.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), s.recordDroppedEvent("sample_rate", re(s) ? "span" : "transaction")), tt(_, t, n), s && s.emit("spanStart", _), _
}

function Lc(e, t, n, r) {
    const {
        spanId: s,
        traceId: i
    } = e.spanContext(), o = yr(t), a = o ? !1 : Ne(e), c = a ? new Sn({ ...n,
        parentSpanId: s,
        traceId: i,
        sampled: a
    }) : new Ue({
        traceId: i
    });
    Jt(e, c), tt(c, t, r);
    const u = T();
    return u && (re(u) && nt(c) && (nt(e) && e.dropReason ? (c.dropReason = e.dropReason, u.recordDroppedEvent(e.dropReason, "span")) : o || (c.dropReason = "sample_rate", u.recordDroppedEvent("sample_rate", "span"))), u.emit("spanStart", c), n.endTimestamp && (u.emit("spanEnd", c), u.emit("afterSpanEnd", c))), c
}

function xc(e, t) {
    if (t) return t;
    if (t === null) return;
    const n = an(e);
    if (!n) return;
    const r = T();
    return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? $(n) : n
}

function Dc(e, t) {
    const n = e ? .getOptions().ignoreSpans;
    return !e || !re(e) || !n ? .length ? !1 : It({
        description: t.name || "",
        op: t.attributes ? .["sentry.op"] || t.op,
        attributes: t.attributes
    }, n)
}

function Hi(e) {
    return nt(e) && e.dropReason === "ignored"
}
var Qt = {
        idleTimeout: 1e3,
        finalTimeout: 3e4,
        childSpanTimeout: 15e3
    },
    Mc = "heartbeatFailed",
    $c = "idleTimeout",
    Fc = "finalTimeout",
    Hc = "externalFinish";

function Ui(e, t = {}) {
    const n = new Map;
    let r = !1,
        s, i = Hc,
        o = !t.disableAutoFinish;
    const a = [],
        {
            idleTimeout: c = Qt.idleTimeout,
            finalTimeout: u = Qt.finalTimeout,
            childSpanTimeout: f = Qt.childSpanTimeout,
            beforeSpanEnd: d,
            trimIdleSpanEndTimestamp: m = !0
        } = t,
        p = T(),
        g = R();
    if (!p || !W()) {
        const I = new Ue({
            traceId: g.getPropagationContext().traceId
        });
        return tt(I, g, G()), I
    }
    const _ = V(),
        y = Uc(e);
    y.end = new Proxy(y.end, {
        apply(I, Q, mt) {
            if (d && d(y), nt(Q)) return;
            const [se, ...Ve] = mt, Oe = se || C(), O = fe(Oe), _e = Kt(y).filter(x => x !== y), te = E(y);
            if (!_e.length || !m) return jt(O), Reflect.apply(I, Q, [O, ...Ve]);
            const ie = p.getOptions().ignoreSpans,
                A = _e ? .reduce((x, B) => {
                    const j = E(B);
                    return !j.timestamp || ie && It({
                        description: j.description,
                        op: j.op,
                        attributes: j.data
                    }, ie) ? x : x ? Math.max(x, j.timestamp) : j.timestamp
                }, void 0),
                P = te.start_timestamp,
                w = Math.min(P ? P + u / 1e3 : 1 / 0, Math.max(P || -1 / 0, Math.min(O, A || 1 / 0)));
            return jt(w), Reflect.apply(I, Q, [w, ...Ve])
        }
    });

    function L() {
        s && (clearTimeout(s), s = void 0)
    }

    function Y(I) {
        L(), s = setTimeout(() => {
            !r && n.size === 0 && o && (i = $c, y.end(I))
        }, c)
    }

    function Ge(I) {
        s = setTimeout(() => {
            !r && o && (i = Mc, y.end(I))
        }, f)
    }

    function Ce(I) {
        L(), n.set(I, !0), Ge(C() + f / 1e3)
    }

    function he(I) {
        n.has(I) && n.delete(I), n.size === 0 && Y(C() + c / 1e3)
    }

    function jt(I) {
        r = !0, n.clear(), a.forEach(O => O()), Et(g, _);
        const Q = E(y),
            {
                start_timestamp: mt
            } = Q;
        if (!mt) return;
        Q.data["sentry.idle_span_finish_reason"] || y.setAttribute(cn, i);
        const se = Q.status;
        (!se || se === "unknown") && y.setStatus({
            code: 1
        }), l.log(`[Tracing] Idle span "${Q.op}" finished`);
        const Ve = Kt(y).filter(O => O !== y);
        let Oe = 0;
        Ve.forEach(O => {
            O.isRecording() && (O.setStatus({
                code: 2,
                message: "cancelled"
            }), O.end(I), h && l.log("[Tracing] Cancelling span since span ended early", JSON.stringify(O, void 0, 2)));
            const {
                timestamp: _e = 0,
                start_timestamp: te = 0
            } = E(O), ie = te <= I, A = (u + c) / 1e3, P = _e - te <= A;
            if (h) {
                const w = JSON.stringify(O, void 0, 2);
                ie ? P || l.log("[Tracing] Discarding span since it finished after idle span final timeout", w) : l.log("[Tracing] Discarding span since it happened after idle span was finished", w)
            }(!P || !ie) && (oc(y, O), Oe++)
        }), Oe > 0 && y.setAttribute("sentry.idle_span_discarded_spans", Oe)
    }
    return a.push(p.on("spanStart", I => {
        r || I === y || E(I).timestamp || I instanceof Sn && I.isStandaloneSpan() || Kt(y).includes(I) && Ce(I.spanContext().spanId)
    })), a.push(p.on("spanEnd", I => {
        r || he(I.spanContext().spanId)
    })), a.push(p.on("idleSpanEnableAutoFinish", I => {
        I === y && (o = !0, Y(), n.size && Ge())
    })), t.disableAutoFinish || Y(), setTimeout(() => {
        r || (y.setStatus({
            code: 2,
            message: "deadline_exceeded"
        }), i = Fc, y.end())
    }, u), y
}

function Uc(e) {
    const t = ke(e);
    return Et(R(), t), h && l.log("[Tracing] Started span is an idle span"), t
}

function Bc(e, t) {
    const {
        fingerprint: n,
        span: r,
        breadcrumbs: s,
        sdkProcessingMetadata: i
    } = t;
    jc(e, t), r && zc(e, r), Gc(e, n), qc(e, s), Wc(e, i)
}

function fs(e, t) {
    const {
        extra: n,
        tags: r,
        attributes: s,
        user: i,
        contexts: o,
        level: a,
        sdkProcessingMetadata: c,
        breadcrumbs: u,
        fingerprint: f,
        eventProcessors: d,
        attachments: m,
        propagationContext: p,
        transactionName: g,
        span: _
    } = t;
    _t(e, "extra", n), _t(e, "tags", r), _t(e, "attributes", s), _t(e, "user", i), _t(e, "contexts", o), e.sdkProcessingMetadata = Ot(e.sdkProcessingMetadata, c, 2), a && (e.level = a), g && (e.transactionName = g), _ && (e.span = _), u.length && (e.breadcrumbs = [...e.breadcrumbs, ...u]), f.length && (e.fingerprint = [...e.fingerprint, ...f]), d.length && (e.eventProcessors = [...e.eventProcessors, ...d]), m.length && (e.attachments = [...e.attachments, ...m]), e.propagationContext = { ...e.propagationContext,
        ...p
    }
}

function _t(e, t, n) {
    e[t] = Ot(e[t], n, 1)
}

function Bi(e, t) {
    const n = Ca().getScopeData();
    return e && fs(n, e.getScopeData()), t && fs(n, t.getScopeData()), n
}

function jc(e, t) {
    const {
        extra: n,
        tags: r,
        user: s,
        contexts: i,
        level: o,
        transactionName: a
    } = t;
    Object.keys(n).length && (e.extra = { ...n,
        ...e.extra
    }), Object.keys(r).length && (e.tags = { ...r,
        ...e.tags
    }), Object.keys(s).length && (e.user = { ...s,
        ...e.user
    }), Object.keys(i).length && (e.contexts = { ...i,
        ...e.contexts
    }), o && (e.level = o), a && e.type !== "transaction" && (e.transaction = a)
}

function qc(e, t) {
    const n = [...e.breadcrumbs || [], ...t];
    e.breadcrumbs = n.length ? n : void 0
}

function Wc(e, t) {
    e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata,
        ...t
    }
}

function zc(e, t) {
    e.contexts = {
        trace: nc(t),
        ...e.contexts
    }, e.sdkProcessingMetadata = {
        dynamicSamplingContext: dt(t),
        ...e.sdkProcessingMetadata
    };
    const n = $(t),
        r = E(n).description;
    r && !e.transaction && e.type === "transaction" && (e.transaction = r)
}

function Gc(e, t) {
    e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], t && (e.fingerprint = e.fingerprint.concat(t)), e.fingerprint.length || delete e.fingerprint
}
var ji = "http.url",
    qi = "sentry.segment.name",
    Wi = "sentry.transaction",
    xt = "url.full";

function zi(e, t) {
    const n = e.attributes ? ? (e.attributes = {});
    Object.entries(t).forEach(([r, s]) => {
        s != null && !(r in n) && (n[r] = s)
    })
}
var Pn = 0,
    ps = 1,
    ls = 2;

function Dt(e) {
    return new Vi(t => {
        t(e)
    })
}

function Gi(e) {
    return new Vi((t, n) => {
        n(e)
    })
}
var Vi = class Qn {
    constructor(t) {
        this._state = Pn, this._handlers = [], this._runExecutor(t)
    }
    then(t, n) {
        return new Qn((r, s) => {
            this._handlers.push([!1, i => {
                if (!t) r(i);
                else try {
                    r(t(i))
                } catch (o) {
                    s(o)
                }
            }, i => {
                if (!n) s(i);
                else try {
                    r(n(i))
                } catch (o) {
                    s(o)
                }
            }]), this._executeHandlers()
        })
    } catch (t) {
        return this.then(n => n, t)
    } finally(t) {
        return new Qn((n, r) => {
            let s, i;
            return this.then(o => {
                i = !1, s = o, t && t()
            }, o => {
                i = !0, s = o, t && t()
            }).then(() => {
                if (i) {
                    r(s);
                    return
                }
                n(s)
            })
        })
    }
    _executeHandlers() {
        if (this._state === Pn) return;
        const t = this._handlers.slice();
        this._handlers = [], t.forEach(n => {
            n[0] || (this._state === ps && n[1](this._value), this._state === ls && n[2](this._value), n[0] = !0)
        })
    }
    _runExecutor(t) {
        const n = (i, o) => {
                if (this._state === Pn) {
                    if (kt(o)) {
                        o.then(r, s);
                        return
                    }
                    this._state = i, this._value = o, this._executeHandlers()
                }
            },
            r = i => {
                n(ps, i)
            },
            s = i => {
                n(ls, i)
            };
        try {
            t(r, s)
        } catch (i) {
            s(i)
        }
    }
};

function Vc(e, t, n, r = 0) {
    try {
        const s = Zn(t, n, e, r);
        return kt(s) ? s : Dt(s)
    } catch (s) {
        return Gi(s)
    }
}

function Zn(e, t, n, r) {
    const s = n[r];
    if (!e || !s) return e;
    const i = s({ ...e
    }, t);
    return h && i === null && l.log(`Event processor "${s.id||"?"}" dropped event`), kt(i) ? i.then(o => Zn(o, t, n, r + 1)) : Zn(i, t, n, r + 1)
}
var Pe, ms, gs, Se;

function Yc(e) {
    const t = b._sentryDebugIds,
        n = b._debugIds;
    if (!t && !n) return {};
    const r = t ? Object.keys(t) : [],
        s = n ? Object.keys(n) : [];
    if (Se && r.length === ms && s.length === gs) return Se;
    ms = r.length, gs = s.length, Se = {}, Pe || (Pe = {});
    const i = (o, a) => {
        for (const c of o) {
            const u = a[c],
                f = Pe ? .[c];
            if (f && Se && u) Se[f[0]] = u, Pe && (Pe[c] = [f[0], u]);
            else if (u) {
                const d = e(c);
                for (let m = d.length - 1; m >= 0; m--) {
                    const p = d[m] ? .filename;
                    if (p && Se && Pe) {
                        Se[p] = u, Pe[c] = [p, u];
                        break
                    }
                }
            }
        }
    };
    return t && i(r, t), n && i(s, n), Se
}

function Xc(e, t, n, r, s, i) {
    const {
        normalizeDepth: o = 3,
        normalizeMaxBreadth: a = 1e3
    } = e, c = { ...t,
        event_id: t.event_id || n.event_id || K(),
        timestamp: t.timestamp || qe()
    }, u = n.integrations || e.integrations.map(_ => _.name);
    Jc(c, e), Zc(c, u), s && s.emit("applyFrameMetadata", t), t.type === void 0 && Kc(c, e.stackParser);
    const f = tu(r, n.captureContext);
    n.mechanism && De(c, n.mechanism);
    const d = s ? s.getEventProcessors() : [],
        m = Bi(i, f),
        p = [...n.attachments || [], ...m.attachments];
    p.length && (n.attachments = p), Bc(c, m);
    const g = [...d, ...m.eventProcessors];
    return (n.data && n.data.__sentry__ === !0 ? Dt(c) : Vc(g, c, n)).then(_ => (_ && Qc(_), typeof o == "number" && o > 0 ? eu(_, o, a) : _))
}

function Jc(e, t) {
    const {
        environment: n,
        release: r,
        dist: s,
        maxValueLength: i
    } = t;
    e.environment = e.environment || n || "production", !e.release && r && (e.release = r), !e.dist && s && (e.dist = s);
    const o = e.request;
    o ? .url && i && (o.url = qn(o.url, i)), i && e.exception ? .values ? .forEach(a => {
        a.value && (a.value = qn(a.value, i))
    })
}

function Kc(e, t) {
    const n = Yc(t);
    e.exception ? .values ? .forEach(r => {
        r.stacktrace ? .frames ? .forEach(s => {
            s.filename && (s.debug_id = n[s.filename])
        })
    })
}

function Qc(e) {
    const t = {};
    if (e.exception ? .values ? .forEach(r => {
            r.stacktrace ? .frames ? .forEach(s => {
                s.debug_id && (s.abs_path ? t[s.abs_path] = s.debug_id : s.filename && (t[s.filename] = s.debug_id), delete s.debug_id)
            })
        }), Object.keys(t).length === 0) return;
    e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
    const n = e.debug_meta.images;
    Object.entries(t).forEach(([r, s]) => {
        n.push({
            type: "sourcemap",
            code_file: r,
            debug_id: s
        })
    })
}

function Zc(e, t) {
    t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [...e.sdk.integrations || [], ...t])
}

function eu(e, t, n) {
    if (!e) return null;
    const r = { ...e,
        ...e.breadcrumbs && {
            breadcrumbs: e.breadcrumbs.map(s => ({ ...s,
                ...s.data && {
                    data: ae(s.data, t, n)
                }
            }))
        },
        ...e.user && {
            user: ae(e.user, t, n)
        },
        ...e.contexts && {
            contexts: ae(e.contexts, t, n)
        },
        ...e.extra && {
            extra: ae(e.extra, t, n)
        }
    };
    return e.contexts ? .trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = ae(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map(s => ({ ...s,
        ...s.data && {
            data: ae(s.data, t, n)
        }
    }))), e.contexts ? .flags && r.contexts && (r.contexts.flags = ae(e.contexts.flags, 3, n)), r
}

function tu(e, t) {
    if (!t) return e;
    const n = e ? e.clone() : new He;
    return n.update(t), n
}

function nu(e) {
    if (e) return ru(e) ? {
        captureContext: e
    } : iu(e) ? {
        captureContext: e
    } : e
}

function ru(e) {
    return e instanceof He || typeof e == "function"
}
var su = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

function iu(e) {
    return Object.keys(e).some(t => su.includes(t))
}

function ou(e, t) {
    return R().captureException(e, nu(t))
}

function _m(e, t) {
    const n = typeof t == "string" ? t : void 0,
        r = typeof t != "string" ? {
            captureContext: t
        } : void 0;
    return R().captureMessage(e, n, r)
}

function Yi(e, t) {
    return R().captureEvent(e, t)
}

function Sm(e, t) {
    G().setTag(e, t)
}

function ym(e) {
    G().setUser(e)
}

function au() {
    const e = T();
    return e ? .getOptions().enabled !== !1 && !!e ? .getTransport()
}

function hs(e) {
    const t = G(),
        {
            user: n
        } = Bi(t, R()),
        {
            userAgent: r
        } = b.navigator || {},
        s = la({
            user: n,
            ...r && {
                userAgent: r
            },
            ...e
        }),
        i = t.getSession();
    return i ? .status === "ok" && Ze(i, {
        status: "exited"
    }), Xi(), t.setSession(s), s
}

function Xi() {
    const e = G(),
        t = R().getSession() || e.getSession();
    t && ma(t), Ji(), e.setSession()
}

function Ji() {
    const e = G(),
        t = T(),
        n = e.getSession();
    n && t && t.captureSession(n)
}

function Ln(e = !1) {
    if (e) {
        Xi();
        return
    }
    Ji()
}

function Ki(e) {
    return typeof e == "object" && typeof e.unref == "function" && e.unref(), e
}

function cu(e) {
    const t = e.protocol ? `${e.protocol}:` : "",
        n = e.port ? `:${e.port}` : "";
    return `${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`
}

function uu(e) {
    return `${cu(e)}${e.projectId}/envelope/`
}

function du(e, t) {
    const n = {
        sentry_version: "7"
    };
    return e.publicKey && (n.sentry_key = e.publicKey), t && (n.sentry_client = `${t.name}/${t.version}`), new URLSearchParams(n).toString()
}

function fu(e, t, n) {
    return t || `${uu(e)}?${du(e,n)}`
}
var _s = [];

function pu(e) {
    const t = {};
    return e.forEach(n => {
        const {
            name: r
        } = n, s = t[r];
        s && !s.isDefaultInstance && n.isDefaultInstance || (t[r] = n)
    }), Object.values(t)
}

function lu(e) {
    const t = e.defaultIntegrations || [],
        n = e.integrations;
    t.forEach(s => {
        s.isDefaultInstance = !0
    });
    let r;
    if (Array.isArray(n)) r = [...t, ...n];
    else if (typeof n == "function") {
        const s = n(t);
        r = Array.isArray(s) ? s : [s]
    } else r = t;
    return pu(r)
}

function mu(e, t) {
    const n = {};
    return t.forEach(r => {
        r ? .beforeSetup && r.beforeSetup(e)
    }), t.forEach(r => {
        r && Qi(e, r, n)
    }), n
}

function Ss(e, t) {
    for (const n of t) n ? .afterAllSetup && n.afterAllSetup(e)
}

function Qi(e, t, n) {
    if (n[t.name]) {
        h && l.log(`Integration skipped because it was already installed: ${t.name}`);
        return
    }
    if (n[t.name] = t, !_s.includes(t.name) && typeof t.setupOnce == "function" && (t.setupOnce(), _s.push(t.name)), t.setup && typeof t.setup == "function" && t.setup(e), typeof t.preprocessEvent == "function") {
        const r = t.preprocessEvent.bind(t);
        e.on("preprocessEvent", (s, i) => r(s, i, e))
    }
    if (typeof t.processEvent == "function") {
        const r = t.processEvent.bind(t),
            s = Object.assign((i, o) => r(i, o, e), {
                id: t.name
            });
        e.addEventProcessor(s)
    }["processSpan", "processSegmentSpan"].forEach(r => {
        const s = t[r];
        typeof s == "function" && e.on(r, i => s.call(t, i, e))
    }), h && l.log(`Integration installed: ${t.name}`)
}

function vm(e) {
    const t = T();
    if (!t) {
        h && l.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);
        return
    }
    t.addIntegration(e)
}

function gu() {
    return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
}

function hu() {
    return "npm"
}

function _u() {
    return !gu() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
}

function yn() {
    return typeof window < "u" && (!_u() || Su())
}

function Su() {
    return b.process ? .type === "renderer"
}

function yu(e, t) {
    const n = t ? "auto" : "never";
    return [{
        type: "log",
        item_count: e.length,
        content_type: "application/vnd.sentry.items.log+json"
    }, {
        version: 2,
        ...yn() && {
            ingest_settings: {
                infer_ip: n,
                infer_user_agent: n
            }
        },
        items: e
    }]
}

function vu(e, t, n, r, s) {
    const i = {};
    return t ? .sdk && (i.sdk = {
        name: t.sdk.name,
        version: t.sdk.version
    }), n && r && (i.dsn = ut(r)), ze(i, [yu(e, s)])
}

function bu(e, t) {
    const n = t ? ? Eu(e) ? ? [];
    if (n.length === 0) return;
    const r = e.getOptions(),
        s = vu(n, r._metadata, r.tunnel, e.getDsn(), e.getDataCollectionOptions().userInfo);
    Zi().set(e, []), e.emit("flushLogs"), e.sendEnvelope(s)
}

function Eu(e) {
    return Zi().get(e)
}

function Zi() {
    return ot("clientToLogBufferMap", () => new WeakMap)
}

function Tu(e, t) {
    const n = t ? "auto" : "never";
    return [{
        type: "trace_metric",
        item_count: e.length,
        content_type: "application/vnd.sentry.items.trace-metric+json"
    }, {
        version: 2,
        ...yn() && {
            ingest_settings: {
                infer_ip: n,
                infer_user_agent: n
            }
        },
        items: e
    }]
}

function Iu(e, t, n, r, s) {
    const i = {};
    return t ? .sdk && (i.sdk = {
        name: t.sdk.name,
        version: t.sdk.version
    }), n && r && (i.dsn = ut(r)), ze(i, [Tu(e, s)])
}

function Ru(e, t) {
    const n = t ? ? Au(e) ? ? [];
    if (n.length === 0) return;
    const r = e.getOptions(),
        s = Iu(n, r._metadata, r.tunnel, e.getDsn(), e.getDataCollectionOptions().userInfo);
    eo().set(e, []), e.emit("flushMetrics"), e.sendEnvelope(s)
}

function Au(e) {
    return eo().get(e)
}

function eo() {
    return ot("clientToMetricBufferMap", () => new WeakMap)
}

function wu(e) {
    const t = {
        trace_id: e.trace_id,
        span_id: e.span_id,
        parent_span_id: e.parent_span_id,
        name: e.description || "",
        start_timestamp: e.start_timestamp,
        end_timestamp: e.timestamp || e.start_timestamp,
        status: !e.status || e.status === "ok" || e.status === "cancelled" ? "ok" : "error",
        is_segment: !1,
        attributes: { ...e.data
        },
        links: e.links
    };
    return ic(t)
}

function Nu(e, t) {
    if (e.type !== "transaction" || !e.spans ? .length || !e.sdkProcessingMetadata ? .hasGenAiSpans || t.getOptions().streamGenAiSpans === !1 || re(t)) return;
    const n = [],
        r = [];
    for (const i of e.spans) i.op ? .startsWith("gen_ai.") ? n.push(wu(i)) : r.push(i);
    if (n.length === 0) return;
    e.spans = r;
    const s = t.getDataCollectionOptions().userInfo ? "auto" : "never";
    return [{
        type: "span",
        item_count: n.length,
        content_type: "application/vnd.sentry.items.span.v2+json"
    }, {
        version: 2,
        ...yn() && {
            ingest_settings: {
                infer_ip: s,
                infer_user_agent: s
            }
        },
        items: n
    }]
}
var br = Symbol.for("SentryBufferFullError");

function Er(e = 100) {
    const t = new Set;

    function n() {
        return t.size < e
    }

    function r(o) {
        t.delete(o)
    }

    function s(o) {
        if (!n()) return Gi(br);
        const a = o();
        return t.add(a), a.then(() => r(a), () => r(a)), a
    }

    function i(o) {
        if (!t.size) return Dt(!0);
        const a = Promise.allSettled(Array.from(t)).then(() => !0);
        if (!o) return a;
        const c = [a, new Promise(u => Ki(setTimeout(() => u(!1), o)))];
        return Promise.race(c)
    }
    return {
        get $() {
            return Array.from(t)
        },
        add: s,
        drain: i
    }
}
var ku = 6e4;

function Cu(e, t = we()) {
    const n = parseInt(`${e}`, 10);
    if (!isNaN(n)) return n * 1e3;
    const r = Date.parse(`${e}`);
    return isNaN(r) ? ku : r - t
}

function Ou(e, t) {
    return e[t] || e.all || 0
}

function Pu(e, t, n = we()) {
    return Ou(e, t) > n
}

function Lu(e, {
    statusCode: t,
    headers: n
}, r = we()) {
    const s = { ...e
        },
        i = n ? .["x-sentry-rate-limits"],
        o = n ? .["retry-after"];
    if (i)
        for (const a of i.trim().split(",")) {
            const [c, u, , , f] = a.split(":", 5), d = parseInt(c, 10), m = (isNaN(d) ? 60 : d) * 1e3;
            if (!u) s.all = r + m;
            else
                for (const p of u.split(";")) p === "metric_bucket" ? (!f || f.split(";").includes("custom")) && (s[p] = r + m) : s[p] = r + m
        } else o ? s.all = r + Cu(o, r) : t === 429 && (s.all = r + 6e4);
    return s
}

function xu(e, t, n = Er(e.bufferSize || 64)) {
    let r = {};
    const s = o => n.drain(o);

    function i(o) {
        const a = [];
        if (Jn(o, (d, m) => {
                const p = ss(m);
                Pu(r, p) ? e.recordDroppedEvent("ratelimit_backoff", p) : a.push(d)
            }), a.length === 0) return Promise.resolve({});
        const c = ze(o[0], a),
            u = d => {
                if (pc(c, ["client_report"])) {
                    h && l.warn(`Dropping client report. Will not send outcomes (reason: ${d}).`);
                    return
                }
                Jn(c, (m, p) => {
                    e.recordDroppedEvent(d, ss(p))
                })
            },
            f = () => t({
                body: lc(c)
            }).then(d => d.statusCode === 413 ? (h && l.error("Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."), u("send_error"), d) : (h && d.statusCode !== void 0 && (d.statusCode < 200 || d.statusCode >= 300) && l.warn(`Sentry responded with status code ${d.statusCode} to sent event.`), r = Lu(r, d), d), d => {
                throw u("network_error"), h && l.error("Encountered error running transport request:", d), d
            });
        return n.add(f).then(d => d, d => {
            if (d === br) return h && l.error("Skipped sending event because buffer is full."), u("queue_overflow"), Promise.resolve({});
            throw d
        })
    }
    return {
        send: i,
        flush: s
    }
}

function Du(e, t, n) {
    const r = [{
        type: "client_report"
    }, {
        timestamp: n || qe(),
        discarded_events: e
    }];
    return ze(t ? {
        dsn: t
    } : {}, [r])
}

function to(e) {
    const t = [];
    e.message && t.push(e.message);
    try {
        const n = e.exception.values[e.exception.values.length - 1];
        n ? .value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`))
    } catch {}
    return t
}

function Mu(e) {
    const {
        trace_id: t,
        parent_span_id: n,
        span_id: r,
        status: s,
        origin: i,
        data: o,
        op: a
    } = e.contexts ? .trace ? ? {};
    return {
        data: o ? ? {},
        description: e.transaction,
        op: a,
        parent_span_id: n,
        span_id: r ? ? "",
        start_timestamp: e.start_timestamp ? ? 0,
        status: s,
        timestamp: e.timestamp,
        trace_id: t ? ? "",
        origin: i,
        profile_id: o ? .[li],
        exclusive_time: o ? .[We],
        measurements: e.measurements,
        is_segment: !0
    }
}

function $u(e) {
    return {
        type: "transaction",
        timestamp: e.timestamp,
        start_timestamp: e.start_timestamp,
        transaction: e.description,
        contexts: {
            trace: {
                trace_id: e.trace_id,
                span_id: e.span_id,
                parent_span_id: e.parent_span_id,
                op: e.op,
                status: e.status,
                origin: e.origin,
                data: { ...e.data,
                    ...e.profile_id && {
                        "sentry.profile_id": e.profile_id
                    },
                    ...e.exclusive_time && {
                        "sentry.exclusive_time": e.exclusive_time
                    }
                }
            }
        },
        measurements: e.measurements
    }
}
var Wt = ["forwarded", "-ip", "remote-", "via", "-user"];

function Fu(e) {
    return e === !0 ? {
        userInfo: !0,
        cookies: !0,
        httpHeaders: {
            request: !0,
            response: !0
        },
        httpBodies: ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"],
        urlQueryParams: !0,
        graphQL: {
            document: !0,
            variables: !0
        },
        genAI: {
            inputs: !0,
            outputs: !0
        },
        databaseQueryData: !0,
        stackFrameVariables: !0,
        frameContextLines: 7
    } : {
        userInfo: !1,
        cookies: {
            deny: Wt
        },
        httpHeaders: {
            request: {
                deny: Wt
            },
            response: {
                deny: Wt
            }
        },
        httpBodies: [],
        urlQueryParams: {
            deny: Wt
        },
        graphQL: {
            document: !0,
            variables: !0
        },
        genAI: {
            inputs: !1,
            outputs: !1
        },
        databaseQueryData: !1,
        stackFrameVariables: !0,
        frameContextLines: 7
    }
}
var Hu = {
    userInfo: !0,
    cookies: !0,
    httpHeaders: {
        request: !0,
        response: !0
    },
    httpBodies: ["incomingRequest", "outgoingRequest", "incomingResponse", "outgoingResponse"],
    urlQueryParams: !0,
    graphQL: {
        document: !0,
        variables: !0
    },
    genAI: {
        inputs: !0,
        outputs: !0
    },
    databaseQueryData: !0,
    stackFrameVariables: !0,
    frameContextLines: 5
};

function Uu(e) {
    const t = e.dataCollection != null ? Hu : Fu(e.sendDefaultPii),
        n = e.dataCollection ? ? {};
    return {
        userInfo: n.userInfo ? ? t.userInfo,
        cookies: n.cookies ? ? t.cookies,
        httpHeaders: {
            request: n.httpHeaders ? .request ? ? t.httpHeaders.request,
            response: n.httpHeaders ? .response ? ? t.httpHeaders.response
        },
        httpBodies: n.httpBodies ? ? t.httpBodies,
        urlQueryParams: n.urlQueryParams ? ? n.queryParams ? ? t.urlQueryParams,
        graphQL: {
            document: n.graphQL ? .document ? ? t.graphQL.document,
            variables: n.graphQL ? .variables ? ? t.graphQL.variables
        },
        genAI: {
            inputs: n.genAI ? .inputs ? ? t.genAI.inputs,
            outputs: n.genAI ? .outputs ? ? t.genAI.outputs
        },
        databaseQueryData: n.databaseQueryData ? ? t.databaseQueryData,
        stackFrameVariables: n.stackFrameVariables ? ? t.stackFrameVariables,
        frameContextLines: n.frameContextLines ? ? t.frameContextLines
    }
}
var ys = "Not capturing exception because it's already been captured.",
    vs = "Discarded session because of missing or non-string release",
    no = Symbol.for("SentryInternalError"),
    ro = Symbol.for("SentryDoNotSendEventError"),
    Bu = 5e3;

function Zt(e) {
    return {
        message: e,
        [no]: !0
    }
}

function xn(e) {
    return {
        message: e,
        [ro]: !0
    }
}

function bs(e) {
    return gn(e) && no in e
}

function Es(e) {
    return gn(e) && ro in e
}

function Ts(e, t, n, r, s) {
    let i = 0,
        o, a = !1;
    e.on(n, () => {
        i = 0, clearTimeout(o), a = !1
    }), e.on(t, c => {
        if (i += r(c), i >= 8e5) s(e);
        else if (!a) {
            const u = e.getOptions()._flushInterval ? ? Bu;
            u > 0 && (a = !0, o = Ki(setTimeout(() => {
                s(e)
            }, u)))
        }
    }), e.on("flush", () => {
        s(e)
    })
}
var ju = class {
    constructor(e) {
        if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], this._promiseBuffer = Er(e.transportOptions ? .bufferSize ? ? 64), this._dataCollection = Uu(e), e.dsn ? this._dsn = Ka(e.dsn) : h && l.warn("No DSN provided, client will not send events."), this._dsn) {
            const t = fu(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: t
            })
        }
        this._options.enableLogs = this._options.enableLogs ? ? this._options._experiments ? .enableLogs, this._options.enableLogs && Ts(this, "afterCaptureLog", "flushLogs", Gu, bu), (this._options.enableMetrics ? ? this._options._experiments ? .enableMetrics ? ? !0) && Ts(this, "afterCaptureMetric", "flushMetrics", zu, Ru)
    }
    captureException(e, t, n) {
        const r = K();
        if (qr(e)) return h && l.log(ys), r;
        const s = {
            event_id: r,
            ...t
        };
        return this._process(() => this.eventFromException(e, s).then(i => this._captureEvent(i, s, n)).then(i => i), "error"), s.event_id
    }
    captureMessage(e, t, n, r) {
        const s = {
                event_id: K(),
                ...n
            },
            i = lr(e) ? e : String(e),
            o = Fe(e),
            a = o ? this.eventFromMessage(i, t, s) : this.eventFromException(e, s);
        return this._process(() => a.then(c => this._captureEvent(c, s, r)), o ? "unknown" : "error"), s.event_id
    }
    captureEvent(e, t, n) {
        const r = K();
        if (t ? .originalException && qr(t.originalException)) return h && l.log(ys), r;
        const s = {
                event_id: r,
                ...t
            },
            i = e.sdkProcessingMetadata || {},
            o = i.capturedSpanScope,
            a = i.capturedSpanIsolationScope,
            c = Is(e.type);
        return this._process(() => this._captureEvent(e, s, o || n, a), c), s.event_id
    }
    captureSession(e) {
        this.sendSession(e), Ze(e, {
            init: !1
        })
    }
    getDsn() {
        return this._dsn
    }
    getOptions() {
        return this._options
    }
    getDataCollectionOptions() {
        return this._dataCollection
    }
    getSdkMetadata() {
        return this._options._metadata
    }
    getTransport() {
        return this._transport
    }
    async flush(e) {
        const t = this._transport;
        if (this.emit("flush"), !t) return !0;
        const n = await this._isClientDoneProcessing(e),
            r = await t.flush(e);
        return n && r
    }
    async close(e) {
        const t = await this.flush(e);
        return this.getOptions().enabled = !1, this.emit("close"), t
    }
    getEventProcessors() {
        return this._eventProcessors
    }
    addEventProcessor(e) {
        this._eventProcessors.push(e)
    }
    init() {
        (this._isEnabled() || this._options.integrations.some(({
            name: e
        }) => e.startsWith("Spotlight"))) && this._setupIntegrations()
    }
    getIntegrationByName(e) {
        return this._integrations[e]
    }
    getIntegrationNames() {
        return Object.keys(this._integrations)
    }
    addIntegration(e) {
        const t = this._integrations[e.name];
        !t && e.beforeSetup && e.beforeSetup(this), Qi(this, e, this._integrations), t || Ss(this, [e])
    }
    sendEvent(e, t = {}) {
        this.emit("beforeSendEvent", e, t);
        const n = Nu(e, this);
        let r = bc(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (const s of t.attachments || []) r = rs(r, hc(s));
        n && (r = rs(r, n)), this.sendEnvelope(r).then(s => this.emit("afterSendEvent", e, s))
    }
    sendSession(e) {
        const {
            release: t,
            environment: n = fc
        } = this._options;
        if ("aggregates" in e) {
            const s = e.attrs || {};
            if (!s.release && !t) {
                h && l.warn(vs);
                return
            }
            s.release = s.release || t, s.environment = s.environment || n, e.attrs = s
        } else {
            if (!e.release && !t) {
                h && l.warn(vs);
                return
            }
            e.release = e.release || t, e.environment = e.environment || n
        }
        this.emit("beforeSendSession", e);
        const r = vc(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(r)
    }
    recordDroppedEvent(e, t, n = 1) {
        if (this._options.sendClientReports) {
            const r = `${e}:${t}`;
            h && l.log(`Recording outcome: "${r}"${n>1?` (${n} times)`:""}`), this._outcomes[r] = (this._outcomes[r] || 0) + n
        }
    }
    on(e, t) {
        const n = this._hooks[e] = this._hooks[e] || new Set,
            r = (...s) => t(...s);
        return n.add(r), () => {
            n.delete(r)
        }
    }
    emit(e, ...t) {
        const n = this._hooks[e];
        n && n.forEach(r => r(...t))
    }
    async sendEnvelope(e) {
        if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) try {
            return await this._transport.send(e)
        } catch (t) {
            return h && l.error("Error while sending envelope:", t), {}
        }
        return h && l.error("Transport disabled"), {}
    }
    registerCleanup(e) {}
    dispose() {}
    _setupIntegrations() {
        const {
            integrations: e
        } = this._options;
        this._integrations = mu(this, e), Ss(this, e)
    }
    _updateSessionFromEvent(e, t) {
        let n = t.level === "fatal",
            r = !1;
        const s = t.exception ? .values;
        if (s) {
            r = !0, n = !1;
            for (const o of s)
                if (o.mechanism ? .handled === !1) {
                    n = !0;
                    break
                }
        }
        const i = e.status === "ok";
        (i && e.errors === 0 || i && n) && (Ze(e, { ...n && {
                status: "crashed"
            },
            errors: e.errors || Number(r || n)
        }), this.captureSession(e))
    }
    async _isClientDoneProcessing(e) {
        let t = 0;
        for (; !e || t < e;) {
            if (await new Promise(n => setTimeout(n, 1)), !this._numProcessing) return !0;
            t++
        }
        return !1
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._transport !== void 0
    }
    _prepareEvent(e, t, n, r) {
        const s = this.getOptions(),
            i = this.getIntegrationNames();
        return !t.integrations && i.length && (t.integrations = i), this.emit("preprocessEvent", e, t), e.type || r.setLastEventId(e.event_id || t.event_id), Xc(s, e, t, n, this, r).then(o => (o === null || (this.emit("postprocessEvent", o, t), o.contexts = {
            trace: { ...o.contexts ? .trace,
                ...Oa(n)
            },
            ...o.contexts
        }, o.sdkProcessingMetadata = {
            dynamicSamplingContext: Sr(this, n),
            ...o.sdkProcessingMetadata
        }), o))
    }
    _captureEvent(e, t = {}, n = R(), r = G()) {
        return h && er(e) && l.log(`Captured error event \`${to(e)[0]||"<unknown>"}\``), this._processEvent(e, t, n, r).then(s => s.event_id, s => {
            h && (Es(s) ? l.log(s.message) : bs(s) ? l.warn(s.message) : l.warn(s))
        })
    }
    _processEvent(e, t, n, r) {
        const s = this.getOptions(),
            {
                sampleRate: i
            } = s,
            o = so(e),
            a = er(e),
            c = `before send for type \`${e.type||"error"}\``,
            u = typeof i > "u" ? void 0 : Tt(i),
            f = Is(e.type);
        return this._prepareEvent(e, t, n, r).then(d => {
            if (d === null) throw this.recordDroppedEvent("event_processor", f), xn("An event processor returned `null`, will not send event.");
            return t.data ? .__sentry__ === !0 ? d : qu(Wu(this, s, d, t), c)
        }).then(d => {
            if (d === null) {
                if (this.recordDroppedEvent("before_send", f), o) {
                    const g = 1 + (e.spans || []).length;
                    this.recordDroppedEvent("before_send", "span", g)
                }
                throw xn(`${c} returned \`null\`, will not send event.`)
            }
            const m = n.getSession() || r.getSession();
            if (a && m && this._updateSessionFromEvent(m, d), a && typeof u == "number" && be() > u) throw this.recordDroppedEvent("sample_rate", "error"), xn(`Discarding event because it's not included in the random sample (sampling rate = ${i})`);
            if (o) {
                const g = (d.sdkProcessingMetadata ? .spanCountBeforeProcessing || 0) - (d.spans ? d.spans.length : 0);
                g > 0 && this.recordDroppedEvent("before_send", "span", g)
            }
            const p = d.transaction_info;
            if (o && p && d.transaction !== e.transaction) {
                const g = "custom";
                d.transaction_info = { ...p,
                    source: g
                }
            }
            return this.sendEvent(d, t), d
        }).then(null, d => {
            throw Es(d) || bs(d) ? d : (this.captureException(d, {
                mechanism: {
                    handled: !1,
                    type: "internal"
                },
                data: {
                    __sentry__: !0
                },
                originalException: d
            }), Zt(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${d}`))
        })
    }
    _process(e, t) {
        this._numProcessing++, this._promiseBuffer.add(e).then(n => (this._numProcessing--, n), n => (this._numProcessing--, n === br && this.recordDroppedEvent("queue_overflow", t), n))
    }
    _clearOutcomes() {
        const e = this._outcomes;
        return this._outcomes = {}, Object.entries(e).map(([t, n]) => {
            const [r, s] = t.split(":");
            return {
                reason: r,
                category: s,
                quantity: n
            }
        })
    }
    _flushOutcomes() {
        h && l.log("Flushing outcomes...");
        const e = this._clearOutcomes();
        if (e.length === 0) {
            h && l.log("No outcomes to send");
            return
        }
        if (!this._dsn) {
            h && l.log("No dsn provided, will not send outcomes");
            return
        }
        h && l.log("Sending outcomes:", e);
        const t = Du(e, this._options.tunnel && ut(this._dsn));
        this.sendEnvelope(t)
    }
};

function Is(e) {
    return e === "replay_event" ? "replay" : e || "error"
}

function qu(e, t) {
    const n = `${t} must return \`null\` or a valid event.`;
    if (kt(e)) return e.then(r => {
        if (!on(r) && r !== null) throw Zt(n);
        return r
    }, r => {
        throw Zt(`${t} rejected with ${r}`)
    });
    if (!on(e) && e !== null) throw Zt(n);
    return e
}

function Wu(e, t, n, r) {
    const {
        beforeSend: s,
        beforeSendTransaction: i,
        ignoreSpans: o
    } = t, a = !xi(t.beforeSendSpan) && t.beforeSendSpan;
    let c = n;
    if (er(c) && s) return s(c, r);
    if (so(c)) {
        if (a || o) {
            const u = Mu(c);
            if (o ? .length && It({
                    description: u.description,
                    op: u.op,
                    attributes: u.data
                }, o)) return null;
            if (a) {
                const f = a(u);
                f ? c = Ot(n, $u(f)) : Xn()
            }
            if (c.spans) {
                const f = [],
                    d = c.spans;
                for (const p of d) {
                    if (o ? .length && It({
                            description: p.description,
                            op: p.op,
                            attributes: p.data
                        }, o)) {
                        uc(d, p);
                        continue
                    }
                    if (a) {
                        const g = a(p);
                        g ? f.push(g) : (Xn(), f.push(p))
                    } else f.push(p)
                }
                const m = c.spans.length - f.length;
                m && e.recordDroppedEvent("before_send", "span", m), c.spans = f
            }
        }
        if (i) {
            if (c.spans) {
                const u = c.spans.length;
                c.sdkProcessingMetadata = { ...n.sdkProcessingMetadata,
                    spanCountBeforeProcessing: u
                }
            }
            return i(c, r)
        }
    }
    return c
}

function er(e) {
    return e.type === void 0
}

function so(e) {
    return e.type === "transaction"
}

function zu(e) {
    let t = 0;
    return e.name && (t += e.name.length * 2), t += 8, t + io(e.attributes)
}

function Gu(e) {
    let t = 0;
    return e.message && (t += e.message.length * 2), t + io(e.attributes)
}

function io(e) {
    if (!e) return 0;
    let t = 0;
    return Object.values(e).forEach(n => {
        Array.isArray(n) ? t += n.length * Rs(n[0]) : Fe(n) ? t += Rs(n) : t += 100
    }), t
}

function Rs(e) {
    return typeof e == "string" ? e.length * 2 : typeof e == "number" ? 8 : typeof e == "boolean" ? 4 : 0
}

function Vu(e, t) {
    t.debug === !0 && (h ? l.enable() : je(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
    })), R().update(t.initialScope);
    const n = new e(t);
    return Yu(n), n.init(), n
}

function Yu(e) {
    R().setClient(e)
}
var Xu = "thismessage:/";

function Tr(e) {
    return "isRelative" in e
}

function un(e, t) {
    const n = e.indexOf("://") <= 0 && e.indexOf("//") !== 0,
        r = t ? ? (n ? Xu : void 0);
    try {
        if ("canParse" in URL && !URL.canParse(e, r)) return;
        const s = new URL(e, r);
        return n ? {
            isRelative: n,
            pathname: s.pathname,
            search: s.search,
            hash: s.hash
        } : s
    } catch {}
}

function oo(e) {
    if (Tr(e)) return e.pathname;
    const t = new URL(e);
    return t.search = "", t.hash = "", ["80", "443"].includes(t.port) && (t.port = ""), t.password && (t.password = "%filtered%"), t.username && (t.username = "%filtered%"), t.toString()
}

function $e(e) {
    if (!e) return {};
    const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) return {};
    const n = t[6] || "",
        r = t[8] || "";
    return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: n,
        hash: r,
        relative: t[5] + n + r
    }
}

function Ju(e) {
    return e.split(/[?#]/, 1)[0]
}

function Z(e, t = !0) {
    if (e.startsWith("data:")) {
        const n = e.match(/^data:([^;,]+)/),
            r = n ? n[1] : "text/plain",
            s = e.includes(";base64,"),
            i = e.indexOf(",");
        let o = "";
        if (t && i !== -1) {
            const a = e.slice(i + 1);
            o = a.length > 10 ? `${a.slice(0,10)}... [truncated]` : a
        }
        return `data:${r}${s?",base64":""}${o?`,${o}`:""}`
    }
    return e
}

function Ku(e) {
    "aggregates" in e ? e.attrs ? .ip_address === void 0 && (e.attrs = { ...e.attrs,
        ip_address: "{{auto}}"
    }) : e.ipAddress === void 0 && (e.ipAddress = "{{auto}}")
}

function Qu(e, t, n = [t], r = "npm") {
    const s = (e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {};
    s.name || (s.name = `sentry.javascript.${t}`, s.packages = n.map(i => ({
        name: `${r}:@sentry/${i}`,
        version: rn
    })), s.version = rn)
}

function ao(e = {}) {
    const t = e.client || T();
    if (!au() || !t) return {};
    const n = Ie(),
        r = ct(n);
    if (r.getTraceData) return r.getTraceData(e);
    const s = e.scope || R(),
        i = e.span || V(),
        o = nt(i) && !W(t.getOptions());
    if (!i && ka()) return {};
    const a = i && !o ? rc(i) : Zu(s),
        c = i ? dt(i) : Sr(t, s),
        u = Ba(c);
    if (!vi.test(a)) return l.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
    const f = {
        "sentry-trace": a,
        baggage: u
    };
    return e.propagateTraceparent && (f.traceparent = i && !o ? sc(i) : ed(s)), f
}

function Zu(e) {
    const {
        traceId: t,
        sampled: n,
        propagationSpanId: r
    } = e.getPropagationContext();
    return bi(t, r, n)
}

function ed(e) {
    const {
        traceId: t,
        sampled: n,
        propagationSpanId: r
    } = e.getPropagationContext();
    return Ei(t, r, n)
}
var td = 100;

function Be(e, t) {
    const n = T(),
        r = G();
    if (!n) return;
    const {
        beforeBreadcrumb: s = null,
        maxBreadcrumbs: i = td
    } = n.getOptions();
    if (i <= 0) return;
    const o = {
            timestamp: qe(),
            ...e
        },
        a = s ? je(() => s(o, t)) : o;
    a !== null && (n.emit && n.emit("beforeAddBreadcrumb", a, t), r.addBreadcrumb(a, i))
}
var nd = "FunctionToString",
    As = new WeakMap,
    rd = (() => ({
        name: nd,
        setupOnce() {
            const e = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...t) {
                    const n = gr(this);
                    let r;
                    try {
                        As.has(T()) && n !== void 0 && (r = n)
                    } catch {}
                    return e.apply(r ? ? this, t)
                }
            } catch {}
        },
        setup(e) {
            As.set(e, !0)
        }
    })),
    sd = rd,
    id = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, /can't redefine non-configurable property "solana"/, /vv\(\)\.getRestrictions is not a function/, /Can't find variable: _AutofillCallbackHandler/, /Object Not Found Matching Id:\d+, MethodName:simulateEvent/, /^Java exception was raised during method invocation$/],
    od = "EventFilters",
    ad = (e = {}) => {
        let t;
        return {
            name: od,
            setup(n) {
                t = ws(e, n.getOptions())
            },
            processEvent(n, r, s) {
                return t || (t = ws(e, s.getOptions())), ud(n, t) ? null : n
            }
        }
    },
    cd = ((e = {}) => ({ ...ad(e),
        name: "InboundFilters"
    }));

function ws(e = {}, t = {}) {
    return {
        allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
        denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
        ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : id],
        ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []]
    }
}

function ud(e, t) {
    if (e.type) {
        if (e.type === "transaction" && fd(e, t.ignoreTransactions)) return h && l.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${xe(e)}`), !0
    } else {
        if (dd(e, t.ignoreErrors)) return h && l.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${xe(e)}`), !0;
        if (gd(e)) return h && l.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${xe(e)}`), !0;
        if (pd(e, t.denyUrls)) return h && l.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${xe(e)}.
Url: ${dn(e)}`), !0;
        if (!ld(e, t.allowUrls)) return h && l.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${xe(e)}.
Url: ${dn(e)}`), !0
    }
    return !1
}

function dd(e, t) {
    return t ? .length ? to(e).some(n => ue(n, t)) : !1
}

function fd(e, t) {
    if (!t ? .length) return !1;
    const n = e.transaction;
    return n ? ue(n, t) : !1
}

function pd(e, t) {
    if (!t ? .length) return !1;
    const n = dn(e);
    return n ? ue(n, t) : !1
}

function ld(e, t) {
    if (!t ? .length) return !0;
    const n = dn(e);
    return n ? ue(n, t) : !0
}

function md(e = []) {
    for (let t = e.length - 1; t >= 0; t--) {
        const n = e[t];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null
    }
    return null
}

function dn(e) {
    try {
        const t = [...e.exception ? .values ? ? []].reverse().find(n => n.mechanism ? .parent_id === void 0 && n.stacktrace ? .frames ? .length) ? .stacktrace ? .frames;
        return t ? md(t) : null
    } catch {
        return h && l.error(`Cannot extract url for event ${xe(e)}`), null
    }
}

function gd(e) {
    return e.exception ? .values ? .length ? !e.message && !e.exception.values.some(t => t.stacktrace || t.type && t.type !== "Error" || t.value) : !1
}

function hd(e, t, n, r, s, i) {
    if (!s.exception ? .values || !i || !le(i.originalException)) return;
    const o = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
    o && (s.exception.values = tr(e, t, r, i.originalException, n, s.exception.values, o, 0))
}

function tr(e, t, n, r, s, i, o, a) {
    if (i.length >= n + 1) return i;
    let c = [...i];
    if (le(r[s])) {
        Ns(o, a, r);
        const u = e(t, r[s]),
            f = c.length;
        ks(u, s, f, a), c = tr(e, t, n, r[s], s, [u, ...c], u, f)
    }
    return co(r) && r.errors.forEach((u, f) => {
        if (le(u)) {
            Ns(o, a, r);
            const d = e(t, u),
                m = c.length;
            ks(d, `errors[${f}]`, m, a), c = tr(e, t, n, u, s, [d, ...c], d, m)
        }
    }), c
}

function co(e) {
    return Array.isArray(e.errors)
}

function Ns(e, t, n) {
    e.mechanism = {
        handled: !0,
        type: "auto.core.linked_errors",
        ...co(n) && {
            is_exception_group: !0
        },
        ...e.mechanism,
        exception_id: t
    }
}

function ks(e, t, n, r) {
    e.mechanism = {
        handled: !0,
        ...e.mechanism,
        type: "chained",
        source: t,
        exception_id: n,
        parent_id: r
    }
}

function _d(e) {
    return le(e) && "__sentry_fetch_url_host__" in e && typeof e.__sentry_fetch_url_host__ == "string"
}

function Cs(e) {
    return _d(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message
}
var Os = new Set([]);

function Sd(e) {
    const t = "console",
        n = Re(t, e);
    return Ae(t, yd), n
}
var Ps = new Set;

function yd() {
    "console" in b && Ho.forEach(function(e) {
        Ps.has(e) || !(e in b.console) || (Ps.add(e), q(b.console, e, function(t) {
            return sn[e] = t,
                function(...n) {
                    const r = n[0],
                        s = sn[e],
                        i = Os.size && typeof r == "string" && ue(r, Os);
                    i || J("console", {
                        args: n,
                        level: e
                    }), (!i || h && l.isEnabled()) && s ? .apply(b.console, n)
                }
        }))
    })
}

function vd(e) {
    return e === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(e) ? e : "log"
}
var bd = "Dedupe",
    Ed = (() => {
        let e;
        return {
            name: bd,
            processEvent(t) {
                if (t.type) return t;
                try {
                    if (Id(t, e)) return h && l.warn("Event dropped due to being a duplicate of previously captured event."), null
                } catch {}
                return e = t
            }
        }
    }),
    Td = Ed;

function Id(e, t) {
    return t ? !!(Rd(e, t) || Ad(e, t)) : !1
}

function Rd(e, t) {
    const n = e.message,
        r = t.message;
    return !(!n && !r || n && !r || !n && r || n !== r || !fo(e, t) || !uo(e, t))
}

function Ad(e, t) {
    const n = Ls(t),
        r = Ls(e);
    return !(!n || !r || n.type !== r.type || n.value !== r.value || !fo(e, t) || !uo(e, t))
}

function uo(e, t) {
    let n = Fr(e),
        r = Fr(t);
    if (!n && !r) return !0;
    if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) return !1;
    for (let s = 0; s < r.length; s++) {
        const i = r[s],
            o = n[s];
        if (i.filename !== o.filename || i.lineno !== o.lineno || i.colno !== o.colno || i.function !== o.function) return !1
    }
    return !0
}

function fo(e, t) {
    let n = e.fingerprint,
        r = t.fingerprint;
    if (!n && !r) return !0;
    if (n && !r || !n && r) return !1;
    n = n, r = r;
    try {
        return n.join("") === r.join("")
    } catch {
        return !1
    }
}

function Ls(e) {
    return e.exception ? .values ? .[0]
}
var wd = "ConversationId",
    Nd = (() => ({
        name: wd,
        setup(e) {
            e.on("spanStart", t => {
                const n = R().getScopeData(),
                    r = G().getScopeData(),
                    s = n.conversationId || r.conversationId;
                if (s) {
                    const {
                        op: i,
                        data: o,
                        description: a
                    } = E(t);
                    if (!i ? .startsWith("gen_ai.") && !o["ai.operationId"] && !a ? .startsWith("ai.")) return;
                    t.setAttribute(Da, s)
                }
            })
        }
    })),
    kd = Nd;

function Cd(e, t, n, r, s) {
    if (!e.fetchData) return;
    const {
        method: i,
        url: o
    } = e.fetchData, a = W() && t(o);
    if (e.endTimestamp) {
        const _ = e.fetchData.__span;
        if (!_) return;
        const y = r[_];
        y && (a && (Ld(y, e), Od(y, e, s)), delete r[_]);
        return
    }
    const {
        spanOrigin: c = "auto.http.browser",
        propagateTraceparent: u = !1
    } = typeof s == "object" ? s : {
        spanOrigin: s
    }, f = T(), d = !!V(), m = d || !!f && re(f), p = a && m ? ke(Md(o, i, c)) : new Ue, g = Hi(p) && d ? void 0 : p;
    if (a && !m && f ? .recordDroppedEvent("no_parent_span", "span"), e.fetchData.__span = p.spanContext().spanId, r[p.spanContext().spanId] = p, n(e.fetchData.url)) {
        const _ = e.args[0],
            y = { ...e.args[1] || {}
            },
            L = Pd(_, y, W() && m ? g : void 0, u);
        L && (e.args[1] = y, y.headers = L)
    }
    if (f) {
        const _ = {
            input: e.args,
            response: e.response,
            startTimestamp: e.startTimestamp,
            endTimestamp: e.endTimestamp
        };
        f.emit("beforeOutgoingRequestSpan", p, _)
    }
    return p
}

function Od(e, t, n) {
    (typeof n == "object" && n !== null ? n.onRequestSpanEnd : void 0) ? .(e, {
        headers: t.response ? .headers,
        error: t.error
    })
}

function Pd(e, t, n, r) {
    const s = ao({
            span: n,
            propagateTraceparent: r
        }),
        i = s["sentry-trace"],
        o = s.baggage,
        a = s.traceparent;
    if (!i) return;
    const c = t.headers || (mr(e) ? e.headers : void 0);
    if (c)
        if (xd(c)) {
            const u = new Headers(c);
            if (u.get("sentry-trace") || u.set("sentry-trace", i), r && a && !u.get("traceparent") && u.set("traceparent", a), o) {
                const f = u.get("baggage");
                f ? zt(f) || u.set("baggage", `${f},${o}`) : u.set("baggage", o)
            }
            return u
        } else if (Dd(c)) {
        const u = [...c];
        u.find(d => d[0] === "sentry-trace") || u.push(["sentry-trace", i]), r && a && !u.find(d => d[0] === "traceparent") && u.push(["traceparent", a]);
        const f = c.find(d => d[0] === "baggage" && typeof d[1] == "string" && zt(d[1]));
        return o && !f && u.push(["baggage", o]), u
    } else {
        const u = "sentry-trace" in c ? c["sentry-trace"] : void 0,
            f = "traceparent" in c ? c.traceparent : void 0,
            d = "baggage" in c ? c.baggage : void 0,
            m = d ? Array.isArray(d) ? [...d] : [d] : [],
            p = d && (Array.isArray(d) ? d.find(_ => zt(_)) : zt(d));
        o && !p && m.push(o);
        const g = Object.assign({}, c, {
            "sentry-trace": u ? ? i,
            ...m.length > 0 && {
                baggage: m.join(",")
            }
        });
        return r && a && !f && (g.traceparent = a), g
    } else return {
        "sentry-trace": i,
        ...o && {
            baggage: o
        },
        ...a && {
            traceparent: a
        }
    }
}

function Ld(e, t) {
    if (t.response) {
        mi(e, t.response.status);
        const n = t.response ? .headers ? .get("content-length");
        if (n) {
            const r = parseInt(n);
            r > 0 && e.setAttribute("http.response_content_length", r)
        }
    } else t.error && e.setStatus({
        code: 2,
        message: "internal_error"
    });
    e.end()
}

function zt(e) {
    return typeof e != "string" ? !1 : e.split(",").some(t => t.trim().startsWith(_i))
}

function xd(e) {
    return typeof Headers < "u" && _n(e, Headers)
}

function Dd(e) {
    return Array.isArray(e) ? e.every(t => Array.isArray(t) && t.length === 2 && typeof t[0] == "string") : !1
}

function Md(e, t, n) {
    if (e.startsWith("data:")) return {
        name: `${t} ${Z(e)}`,
        attributes: xs(e, void 0, t, n)
    };
    const r = un(e);
    return {
        name: `${t} ${r?oo(r):e}`,
        attributes: xs(e, r, t, n)
    }
}

function xs(e, t, n, r) {
    const s = {
        url: Z(e),
        type: "fetch",
        "http.method": n,
        [k]: r,
        [ee]: "http.client"
    };
    return t && (Tr(t) || (s[ji] = Z(t.href), s[xt] = Z(t.href), s["server.address"] = t.host), t.search && (s["http.query"] = t.search), t.hash && (s["http.fragment"] = t.hash)), s
}

function po(e) {
    if (e !== void 0) return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
}
var Rt = b;

function $d() {
    return "history" in Rt && !!Rt.history
}

function Fd() {
    if (!("fetch" in Rt)) return !1;
    try {
        return new Headers, new Request("data:,"), new Response, !0
    } catch {
        return !1
    }
}

function nr(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}

function Hd() {
    if (typeof EdgeRuntime == "string") return !0;
    if (!Fd()) return !1;
    if (nr(Rt.fetch)) return !0;
    let e = !1;
    const t = Rt.document;
    if (t && typeof t.createElement == "function") try {
        const n = t.createElement("iframe");
        n.hidden = !0, t.head.appendChild(n), n.contentWindow ? .fetch && (e = nr(n.contentWindow.fetch)), t.head.removeChild(n)
    } catch (n) {
        h && l.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
    }
    return e
}

function Ir(e, t) {
    const n = "fetch",
        r = Re(n, e);
    return Ae(n, () => lo(void 0, t)), r
}

function Ud(e) {
    const t = "fetch-body-resolved",
        n = Re(t, e);
    return Ae(t, () => lo(jd)), n
}

function lo(e, t = !1) {
    t && !Hd() || q(b, "fetch", function(n) {
        return function(...r) {
            const s = new Error,
                {
                    method: i,
                    url: o
                } = qd(r),
                a = {
                    args: r,
                    fetchData: {
                        method: i,
                        url: o
                    },
                    startTimestamp: C() * 1e3,
                    virtualError: s,
                    headers: Wd(r)
                };
            return e || J("fetch", { ...a
            }), n.apply(b, r).then(async c => (e ? e(c) : J("fetch", { ...a,
                endTimestamp: C() * 1e3,
                response: c
            }), c), c => {
                J("fetch", { ...a,
                    endTimestamp: C() * 1e3,
                    error: c
                }), le(c) && c.stack === void 0 && (c.stack = s.stack, F(c, "framesToPop", 1));
                const u = T() ? .getOptions().enhanceFetchErrorMessages ? ? "always";
                if (u !== !1 && le(c) && c.name === "TypeError" && (c.message === "Failed to fetch" || c.message === "Load failed" || c.message === "NetworkError when attempting to fetch resource.")) try {
                    const f = new URL(a.fetchData.url).host;
                    u === "always" ? c.message = `${c.message} (${f})` : F(c, "__sentry_fetch_url_host__", f)
                } catch {}
                throw c
            })
        }
    })
}
async function Bd(e, t) {
    if (e ? .body) {
        const n = e.body,
            r = n.getReader(),
            s = setTimeout(() => {
                n.cancel().then(null, () => {})
            }, 9e4);
        let i = !0;
        for (; i;) {
            let o;
            try {
                o = setTimeout(() => {
                    n.cancel().then(null, () => {})
                }, 5e3);
                const {
                    done: a
                } = await r.read();
                clearTimeout(o), a && (t(), i = !1)
            } catch {
                i = !1
            } finally {
                clearTimeout(o)
            }
        }
        clearTimeout(s), r.releaseLock(), n.cancel().then(null, () => {})
    }
}

function jd(e) {
    let t;
    try {
        t = e.clone()
    } catch {
        return
    }
    Bd(t, () => {
        J("fetch-body-resolved", {
            endTimestamp: C() * 1e3,
            response: e
        })
    })
}

function en(e, t) {
    return gn(e) && !!e[t]
}

function Ds(e) {
    return typeof e == "string" ? e : e ? en(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
}

function qd(e) {
    if (e.length === 0) return {
        method: "GET",
        url: ""
    };
    if (e.length === 2) {
        const [n, r] = e;
        return {
            url: Ds(n),
            method: en(r, "method") ? String(r.method).toUpperCase() : mr(n) && en(n, "method") ? String(n.method).toUpperCase() : "GET"
        }
    }
    const t = e[0];
    return {
        url: Ds(t),
        method: en(t, "method") ? String(t.method).toUpperCase() : "GET"
    }
}

function Wd(e) {
    const [t, n] = e;
    try {
        if (typeof n == "object" && n !== null && "headers" in n && n.headers) return new Headers(n.headers);
        if (mr(t)) return new Headers(t.headers)
    } catch {}
}
var mo = b;

function rt() {
    try {
        return mo.document.location.href
    } catch {
        return ""
    }
}

function go(e, t = 5) {
    if (!mo.HTMLElement) return null;
    let n = e;
    for (let r = 0; r < t; r++) {
        if (!n) return null;
        if (n instanceof HTMLElement) {
            if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
            if (n.dataset.sentryElement) return n.dataset.sentryElement
        }
        n = n.parentNode
    }
    return null
}
var v = b,
    rr = 0;

function ho() {
    return rr > 0
}

function zd() {
    rr++, setTimeout(() => {
        rr--
    })
}

function st(e, t = {}) {
    function n(s) {
        return typeof s == "function"
    }
    if (!n(e)) return e;
    try {
        if (Object.prototype.hasOwnProperty.call(e, "__sentry_wrapped__")) {
            const s = e.__sentry_wrapped__;
            return typeof s == "function" ? s : e
        }
        if (gr(e)) return e
    } catch {
        return e
    }
    const r = function(...s) {
        b._sentryWrappedDepth = (b._sentryWrappedDepth || 0) + 1;
        try {
            const i = s.map(o => st(o, t));
            return e.apply(this, i)
        } catch (i) {
            throw zd(), hr(o => {
                o.addEventProcessor(a => (t.mechanism && (Wn(a, void 0, void 0), De(a, t.mechanism)), a.extra = { ...a.extra,
                    arguments: s
                }, a)), ou(i)
            }), i
        } finally {
            b._sentryWrappedDepth = (b._sentryWrappedDepth || 0) - 1
        }
    };
    try {
        for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (r[s] = e[s])
    } catch {}
    ri(r, e), F(e, "__sentry_wrapped__", r);
    try {
        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
            get() {
                return e.name
            }
        })
    } catch {}
    return r
}

function fn() {
    const e = rt(),
        {
            referrer: t
        } = v.document || {},
        {
            userAgent: n
        } = v.navigator || {};
    return {
        url: e,
        headers: { ...t && {
                Referer: t
            },
            ...n && {
                "User-Agent": n
            }
        }
    }
}

function Rr(e, t) {
    const n = vn(e, t),
        r = {
            type: Jd(t),
            value: Kd(t)
        };
    return n.length && (r.stacktrace = {
        frames: n
    }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r
}

function Gd(e, t, n, r) {
    const s = T() ? .getOptions().normalizeDepth,
        i = nf(t),
        o = {
            __serialized__: ii(t, s)
        };
    if (i) return {
        exception: {
            values: [Rr(e, i)]
        },
        extra: o
    };
    const a = {
        exception: {
            values: [{
                type: hn(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                value: ef(t, {
                    isUnhandledRejection: r
                })
            }]
        },
        extra: o
    };
    if (n) {
        const c = vn(e, n);
        c.length && (a.exception.values[0].stacktrace = {
            frames: c
        })
    }
    return a
}

function Dn(e, t) {
    return {
        exception: {
            values: [Rr(e, t)]
        }
    }
}

function vn(e, t) {
    const n = t.stacktrace || t.stack || "",
        r = Yd(t),
        s = Xd(t);
    try {
        return e(n, r, s)
    } catch {}
    return []
}
var Vd = /Minified React error #\d+;/i;

function Yd(e) {
    return e && Vd.test(e.message) ? 1 : 0
}

function Xd(e) {
    return typeof e.framesToPop == "number" ? e.framesToPop : 0
}

function _o(e) {
    return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u" ? e instanceof WebAssembly.Exception : !1
}

function Jd(e) {
    const t = e ? .name;
    return !t && _o(e) ? e.message && Array.isArray(e.message) && e.message.length == 2 ? e.message[0] : "WebAssembly.Exception" : t
}

function Kd(e) {
    const t = e ? .message;
    return _o(e) ? Array.isArray(e.message) && e.message.length == 2 ? e.message[1] : "wasm exception" : t ? t.error && typeof t.error.message == "string" ? Cs(t.error) : Cs(e) : "No error message"
}

function Qd(e, t, n, r) {
    const s = Ar(e, t, n ? .syntheticException || void 0, r);
    return De(s), s.level = "error", n ? .event_id && (s.event_id = n.event_id), Dt(s)
}

function Zd(e, t, n = "info", r, s) {
    const i = sr(e, t, r ? .syntheticException || void 0, s);
    return i.level = n, r ? .event_id && (i.event_id = r.event_id), Dt(i)
}

function Ar(e, t, n, r, s) {
    let i;
    if (ni(t) && t.error) return Dn(e, t.error);
    if (Ur(t) || Jo(t)) {
        const o = t;
        if ("stack" in t) {
            i = Dn(e, t);
            const a = i.exception ? .values ? .[0];
            if (r && n && a && !a.stacktrace) {
                const c = vn(e, n);
                c.length && (a.stacktrace = {
                    frames: c
                }, De(i, {
                    synthetic: !0
                }))
            }
        } else {
            const a = o.name || (Ur(o) ? "DOMError" : "DOMException"),
                c = o.message ? `${a}: ${o.message}` : a;
            i = sr(e, c, n, r), Wn(i, c)
        }
        return "code" in o && (i.tags = { ...i.tags,
            "DOMException.code": `${o.code}`
        }), i
    }
    return le(t) ? Dn(e, t) : on(t) || hn(t) ? (i = Gd(e, t, n, s), De(i, {
        synthetic: !0
    }), i) : (i = sr(e, t, n, r), Wn(i, `${t}`, void 0), De(i, {
        synthetic: !0
    }), i)
}

function sr(e, t, n, r) {
    const s = {};
    if (r && n) {
        const i = vn(e, n);
        i.length && (s.exception = {
            values: [{
                value: t,
                stacktrace: {
                    frames: i
                }
            }]
        }), De(s, {
            synthetic: !0
        })
    }
    if (lr(t)) {
        const {
            __sentry_template_string__: i,
            __sentry_template_values__: o
        } = t;
        return s.logentry = {
            message: i,
            params: o
        }, s
    }
    return s.message = t, s
}

function ef(e, {
    isUnhandledRejection: t
}) {
    const n = Qo(e),
        r = t ? "promise rejection" : "exception";
    return ni(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : hn(e) ? `Event \`${tf(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
}

function tf(e) {
    try {
        const t = Object.getPrototypeOf(e);
        return t ? t.constructor.name : void 0
    } catch {}
}

function nf(e) {
    return Object.values(e).find(le)
}
var rf = class extends ju {
    constructor(e) {
        const t = sf(e),
            n = v.SENTRY_SDK_SOURCE || hu();
        Qu(t, "browser", ["browser"], n), super(t);
        const {
            userInfo: r
        } = this.getDataCollectionOptions();
        t._metadata ? .sdk && (t._metadata.sdk.settings = {
            infer_ip: r ? "auto" : "never",
            ...t._metadata.sdk.settings
        });
        const {
            sendClientReports: s
        } = this._options;
        v.document && v.document.addEventListener("visibilitychange", () => {
            v.document.visibilityState === "hidden" && (s && this._flushOutcomes(), queueMicrotask(() => {
                this.flush()
            }))
        }), r && this.on("beforeSendSession", Ku)
    }
    eventFromException(e, t) {
        return Qd(this._options.stackParser, e, t, this._options.attachStacktrace)
    }
    eventFromMessage(e, t = "info", n) {
        return Zd(this._options.stackParser, e, t, n, this._options.attachStacktrace)
    }
    _prepareEvent(e, t, n, r) {
        return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n, r)
    }
};

function sf(e) {
    return {
        release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : v.SENTRY_RELEASE ? .id,
        sendClientReports: !0,
        parentSpanIsAlwaysRootSpan: !0,
        ...e
    }
}
var ge = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    S = b,
    of = (e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good",
    Mt = (e, t, n, r) => {
        let s, i;
        return o => {
            t.value >= 0 && (o || r) && (i = t.value - (s ? ? 0), (i || s === void 0) && (s = t.value, t.delta = i, t.rating = of (t.value, n), e(t)))
        }
    },
    $t = (e = !0) => {
        const t = S.performance ? .getEntriesByType ? .("navigation")[0];
        if (!e || t && t.responseStart > 0 && t.responseStart < performance.now()) return t
    },
    ft = () => $t() ? .activationStart ? ? 0;

function Ee(e, t, n) {
    S.document && S.addEventListener(e, t, n)
}

function pn(e, t, n) {
    S.document && S.removeEventListener(e, t, n)
}
var Qe = -1,
    So = new Set,
    af = () => S.document ? .visibilityState === "hidden" && !S.document ? .prerendering ? 0 : 1 / 0,
    tn = e => {
        if (cf(e) && Qe > -1) {
            if (e.type === "visibilitychange" || e.type === "pagehide")
                for (const t of So) t();
            isFinite(Qe) || (Qe = e.type === "visibilitychange" ? e.timeStamp : 0, pn("prerenderingchange", tn, !0))
        }
    },
    Ft = () => {
        if (S.document && Qe < 0) {
            const e = ft();
            Qe = (S.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter(t => t.name === "hidden" && t.startTime > e)[0] ? .startTime) ? ? af(), Ee("visibilitychange", tn, !0), Ee("pagehide", tn, !0), Ee("prerenderingchange", tn, !0)
        }
        return {
            get firstHiddenTime() {
                return Qe
            },
            onHidden(e) {
                So.add(e)
            }
        }
    };

function cf(e) {
    return e.type === "pagehide" || S.document ? .visibilityState === "hidden"
}
var uf = () => `v5-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`,
    Ht = (e, t = -1) => {
        const n = $t();
        let r = "navigate";
        return n && (S.document ? .prerendering || ft() > 0 ? r = "prerender" : S.document ? .wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
            name: e,
            value: t,
            rating: "good",
            delta: 0,
            entries: [],
            id: uf(),
            navigationType: r
        }
    },
    Mn = new WeakMap;

function wr(e, t) {
    try {
        return Mn.get(e) || Mn.set(e, new t), Mn.get(e)
    } catch {
        return new t
    }
}
var df = class {
        constructor() {
            this._sessionValue = 0, this._sessionEntries = []
        }
        _processEntry(e) {
            if (e.hadRecentInput) return;
            const t = this._sessionEntries[0],
                n = this._sessionEntries[this._sessionEntries.length - 1];
            this._sessionValue && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this._sessionValue += e.value, this._sessionEntries.push(e)) : (this._sessionValue = e.value, this._sessionEntries = [e]), this._onAfterProcessingUnexpectedShift ? .(e)
        }
    },
    pt = (e, t, n = {}) => {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                const r = new PerformanceObserver(s => {
                    Promise.resolve().then(() => {
                        t(s.getEntries())
                    })
                });
                return r.observe({
                    type: e,
                    buffered: !0,
                    ...n
                }), r
            }
        } catch {}
    },
    Nr = e => {
        let t = !1;
        return () => {
            t || (e(), t = !0)
        }
    },
    bn = e => {
        S.document ? .prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e()
    },
    ff = [1800, 3e3],
    pf = (e, t = {}) => {
        bn(() => {
            const n = Ft(),
                r = Ht("FCP");
            let s;
            const o = pt("paint", a => {
                for (const c of a) c.name === "first-contentful-paint" && (o.disconnect(), c.startTime < n.firstHiddenTime && (r.value = Math.max(c.startTime - ft(), 0), r.entries.push(c), s(!0)))
            });
            o && (s = Mt(e, r, ff, t.reportAllChanges))
        })
    },
    lf = [.1, .25],
    mf = (e, t = {}) => {
        pf(Nr(() => {
            const n = Ht("CLS", 0);
            let r;
            const s = Ft(),
                i = wr(t, df),
                o = c => {
                    for (const u of c) i._processEntry(u);
                    i._sessionValue > n.value && (n.value = i._sessionValue, n.entries = i._sessionEntries, r())
                },
                a = pt("layout-shift", o);
            a && (r = Mt(e, n, lf, t.reportAllChanges), s.onHidden(() => {
                o(a.takeRecords()), r(!0)
            }), S ? .setTimeout ? .(r))
        }))
    },
    yo = 0,
    $n = 1 / 0,
    Gt = 0,
    gf = e => {
        e.forEach(t => {
            t.interactionId && ($n = Math.min($n, t.interactionId), Gt = Math.max(Gt, t.interactionId), yo = Gt ? (Gt - $n) / 7 + 1 : 0)
        })
    },
    ir, vo = () => ir ? yo : performance.interactionCount || 0,
    hf = () => {
        "interactionCount" in performance || ir || (ir = pt("event", gf, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
        }))
    },
    Fn = 10,
    bo = 0,
    _f = () => vo() - bo,
    Sf = class {
        constructor() {
            this._longestInteractionList = [], this._longestInteractionMap = new Map
        }
        _resetInteractions() {
            bo = vo(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear()
        }
        _estimateP98LongestInteraction() {
            const e = Math.min(this._longestInteractionList.length - 1, Math.floor(_f() / 50));
            return this._longestInteractionList[e]
        }
        _processEntry(e) {
            if (this._onBeforeProcessingEntry ? .(e), !(e.interactionId || e.entryType === "first-input")) return;
            const t = this._longestInteractionList.at(-1);
            let n = this._longestInteractionMap.get(e.interactionId);
            if (n || this._longestInteractionList.length < Fn || e.duration > t._latency) {
                if (n ? e.duration > n._latency ? (n.entries = [e], n._latency = e.duration) : e.duration === n._latency && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                        id: e.interactionId,
                        entries: [e],
                        _latency: e.duration
                    }, this._longestInteractionMap.set(n.id, n), this._longestInteractionList.push(n)), this._longestInteractionList.sort((r, s) => s._latency - r._latency), this._longestInteractionList.length > Fn) {
                    const r = this._longestInteractionList.splice(Fn);
                    for (const s of r) this._longestInteractionMap.delete(s.id)
                }
                this._onAfterProcessingINPCandidate ? .(n)
            }
        }
    },
    kr = e => {
        const t = S.requestIdleCallback || S.setTimeout;
        S.document ? .visibilityState === "hidden" ? e() : (e = Nr(e), Ee("visibilitychange", e, {
            once: !0,
            capture: !0
        }), Ee("pagehide", e, {
            once: !0,
            capture: !0
        }), t(() => {
            e(), pn("visibilitychange", e, {
                capture: !0
            }), pn("pagehide", e, {
                capture: !0
            })
        }))
    },
    yf = [200, 500],
    vf = 40,
    bf = (e, t = {}) => {
        if (!(globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype)) return;
        const n = Ft();
        bn(() => {
            hf();
            const r = Ht("INP");
            let s;
            const i = wr(t, Sf),
                o = c => {
                    kr(() => {
                        for (const f of c) i._processEntry(f);
                        const u = i._estimateP98LongestInteraction();
                        u && u._latency !== r.value && (r.value = u._latency, r.entries = u.entries, s())
                    })
                },
                a = pt("event", o, {
                    durationThreshold: t.durationThreshold ? ? vf
                });
            s = Mt(e, r, yf, t.reportAllChanges), a && (a.observe({
                type: "first-input",
                buffered: !0
            }), n.onHidden(() => {
                o(a.takeRecords()), s(!0)
            }))
        })
    },
    Ef = class {
        _processEntry(e) {
            this._onBeforeProcessingEntry ? .(e)
        }
    },
    Tf = [2500, 4e3],
    If = (e, t = {}) => {
        bn(() => {
            const n = Ft(),
                r = Ht("LCP");
            let s;
            const i = wr(t, Ef),
                o = c => {
                    t.reportAllChanges || (c = c.slice(-1));
                    for (const u of c) i._processEntry(u), u.startTime < n.firstHiddenTime && (r.value = Math.max(u.startTime - ft(), 0), r.entries = [u], s())
                },
                a = pt("largest-contentful-paint", o);
            if (a) {
                s = Mt(e, r, Tf, t.reportAllChanges);
                const c = Nr(() => {
                        o(a.takeRecords()), a.disconnect(), s(!0)
                    }),
                    u = f => {
                        f.isTrusted && (kr(c), pn(f.type, u, {
                            capture: !0
                        }))
                    };
                for (const f of ["keydown", "click", "visibilitychange"]) Ee(f, u, {
                    capture: !0
                })
            }
        })
    },
    Rf = [800, 1800],
    or = e => {
        S.document ? .prerendering ? bn(() => or(e)) : S.document ? .readyState !== "complete" ? addEventListener("load", () => or(e), !0) : setTimeout(e)
    },
    Af = (e, t = {}) => {
        const n = Ht("TTFB"),
            r = Mt(e, n, Rf, t.reportAllChanges);
        or(() => {
            const s = $t();
            s && (n.value = Math.max(s.responseStart - ft(), 0), n.entries = [s], r(!0))
        })
    },
    vt = {},
    ln = {},
    Eo, To, Io, Ro;

function Cr(e, t = !1) {
    return En("cls", e, Nf, Eo, t)
}

function Or(e, t = !1) {
    return En("lcp", e, kf, To, t)
}

function wf(e) {
    return En("ttfb", e, Cf, Io)
}

function Ao(e) {
    return En("inp", e, Of, Ro)
}

function it(e, t) {
    return wo(e, t), ln[e] || (Pf(e), ln[e] = !0), No(e, t)
}

function Ut(e, t) {
    const n = vt[e];
    if (n ? .length)
        for (const r of n) try {
            r(t)
        } catch (s) {
            ge && l.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${pe(r)}
Error:`, s)
        }
}

function Nf() {
    return mf(e => {
        Ut("cls", {
            metric: e
        }), Eo = e
    }, {
        reportAllChanges: !0
    })
}

function kf() {
    return If(e => {
        Ut("lcp", {
            metric: e
        }), To = e
    }, {
        reportAllChanges: !0
    })
}

function Cf() {
    return Af(e => {
        Ut("ttfb", {
            metric: e
        }), Io = e
    })
}

function Of() {
    return bf(e => {
        Ut("inp", {
            metric: e
        }), Ro = e
    })
}

function En(e, t, n, r, s = !1) {
    wo(e, t);
    let i;
    return ln[e] || (i = n(), ln[e] = !0), r && t({
        metric: r
    }), No(e, t, s ? i : void 0)
}

function Pf(e) {
    const t = {};
    e === "event" && (t.durationThreshold = 0), pt(e, n => {
        Ut(e, {
            entries: n
        })
    }, t)
}

function wo(e, t) {
    vt[e] = vt[e] || [], vt[e].push(t)
}

function No(e, t, n) {
    return () => {
        n && n();
        const r = vt[e];
        if (!r) return;
        const s = r.indexOf(t);
        s !== -1 && r.splice(s, 1)
    }
}

function Lf(e) {
    return "duration" in e
}
var xf = 80,
    Le = {};
try {
    typeof Node < "u" && (Le.parentNode = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode").get), typeof Element < "u" && (Le.tagName = Object.getOwnPropertyDescriptor(Element.prototype, "tagName").get, Le.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get, Le.className = Object.getOwnPropertyDescriptor(Element.prototype, "className").get, Le.getAttribute = Element.prototype.getAttribute), typeof HTMLElement < "u" && (Le.dataset = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "dataset").get)
} catch {}

function ye(e, t, n) {
    const r = Le[t];
    if (r) try {
        return r.call(e, n)
    } catch {}
    const s = e[t];
    return typeof s == "function" ? s.call(e, n) : s
}

function D(e, t = {}) {
    if (!e) return "<unknown>";
    try {
        let n = e;
        const r = 5,
            s = [];
        let i = 0,
            o = 0;
        const a = " > ",
            c = 3;
        let u;
        const f = Array.isArray(t) ? t : t.keyAttrs,
            d = !Array.isArray(t) && t.maxStringLength || xf;
        for (; n && i++ < r && (u = Df(n, f), !(u === "html" || i > 1 && o + s.length * c + u.length >= d));) s.push(u), o += u.length, n = ye(n, "parentNode");
        return s.reverse().join(a)
    } catch {
        return "<unknown>"
    }
}

function Df(e, t) {
    const n = [],
        r = ye(e, "tagName");
    if (!r) return "";
    if (typeof HTMLElement < "u" && e instanceof HTMLElement) {
        const i = ye(e, "dataset");
        if (i) {
            if (i.sentryComponent) return i.sentryComponent;
            if (i.sentryElement) return i.sentryElement
        }
    }
    n.push(r.toLowerCase());
    const s = t ? .length ? t.filter(i => ye(e, "getAttribute", i)).map(i => [i, ye(e, "getAttribute", i)]) : null;
    if (s ? .length) s.forEach(i => {
        n.push(`[${i[0]}="${i[1]}"]`)
    });
    else {
        const i = ye(e, "id");
        i && n.push(`#${i}`);
        const o = ye(e, "className");
        if (o && ce(o)) {
            const a = o.split(/\s+/);
            for (const c of a) n.push(`.${c}`)
        }
    }
    for (const i of ["aria-label", "type", "name", "title", "alt"]) {
        const o = ye(e, "getAttribute", i);
        o && n.push(`[${i}="${o}"]`)
    }
    return n.join("")
}
var Mf = e => {
    const t = n => {
        (n.type === "pagehide" || S.document ? .visibilityState === "hidden") && e(n)
    };
    Ee("visibilitychange", t, {
        capture: !0,
        once: !0
    }), Ee("pagehide", t, {
        capture: !0,
        once: !0
    })
};

function Hn(e) {
    return typeof e == "number" && isFinite(e)
}

function Te(e, t, n, { ...r
}) {
    const s = E(e).start_timestamp;
    return s && s > t && typeof e.updateStartTime == "function" && e.updateStartTime(t), Fi(e, () => {
        const i = ke({
            startTime: t,
            ...r
        });
        return i && i.end(n), i
    })
}

function Pr(e) {
    const t = T();
    if (!t) return;
    const {
        name: n,
        transaction: r,
        attributes: s,
        startTime: i
    } = e, {
        release: o,
        environment: a
    } = t.getOptions(), {
        userInfo: c
    } = t.getDataCollectionOptions(), u = t.getIntegrationByName("Replay") ? .getReplayId(), f = R(), d = f.getUser(), m = d !== void 0 ? d.email || d.id || d.ip_address : void 0;
    let p;
    try {
        p = f.getScopeData().contexts.profile.profile_id
    } catch {}
    const g = {
        release: o,
        environment: a,
        user: m || void 0,
        profile_id: p || void 0,
        replay_id: u || void 0,
        transaction: r,
        "user_agent.original": S.navigator ? .userAgent,
        "client.address": c ? "{{auto}}" : void 0,
        ...s
    };
    return ke({
        name: n,
        attributes: g,
        startTime: i,
        experimental: {
            standalone: !0
        }
    })
}

function lt() {
    return S.addEventListener && S.performance
}

function N(e) {
    return e / 1e3
}

function $f(e) {
    let t = "unknown",
        n = "unknown",
        r = "";
    for (const s of e) {
        if (s === "/") {
            [t, n] = e.split("/");
            break
        }
        if (!isNaN(Number(s))) {
            t = r === "h" ? "http" : r, n = e.split(r)[1];
            break
        }
        r += s
    }
    return r === e && (t = r), {
        name: t,
        version: n
    }
}

function Tn(e) {
    try {
        return PerformanceObserver.supportedEntryTypes.includes(e)
    } catch {
        return !1
    }
}

function In(e, t) {
    let n, r = !1;

    function s(a) {
        !r && n && t(a, n.spanContext().spanId, n), r = !0
    }
    Mf(() => {
        s("pagehide")
    });
    const i = e.on("beforeStartNavigationSpan", (a, c) => {
            c ? .isRedirect || (s("navigation"), i(), o())
        }),
        o = e.on("afterStartPageLoadSpan", a => {
            n = a, o()
        })
}

function Ff(e) {
    let t = 0,
        n;
    if (!Tn("layout-shift")) return;
    const r = Cr(({
        metric: s
    }) => {
        const i = s.entries[s.entries.length - 1];
        i && (t = s.value, n = i)
    }, !0);
    In(e, (s, i) => {
        Hf(t, n, i, s), r()
    })
}

function Hf(e, t, n, r) {
    ge && l.log(`Sending CLS span (${e})`);
    const s = t ? N((M() || 0) + t.startTime) : C(),
        i = R().getScopeData().transactionName,
        o = t ? D(t.sources[0] ? .node) : "Layout shift",
        a = {
            [k]: "auto.http.browser.cls",
            [ee]: "ui.webvital.cls",
            [We]: 0,
            "sentry.pageload.span_id": n,
            "sentry.report_event": r
        };
    t ? .sources && t.sources.forEach((u, f) => {
        a[`cls.source.${f+1}`] = D(u.node)
    });
    const c = Pr({
        name: o,
        transaction: i,
        attributes: a,
        startTime: s
    });
    c && (c.addEvent("cls", {
        [Pt]: "",
        [Lt]: e
    }), c.end(s))
}

function Bt(e) {
    return e != null && e > 0 && e <= 6e4
}

function Uf(e) {
    let t = 0,
        n;
    if (!Tn("largest-contentful-paint")) return;
    const r = Or(({
        metric: s
    }) => {
        const i = s.entries[s.entries.length - 1];
        !i || !Bt(s.value) || (t = s.value, n = i)
    }, !0);
    In(e, (s, i) => {
        Bf(t, n, i, s), r()
    })
}

function Bf(e, t, n, r) {
    if (!Bt(e)) return;
    ge && l.log(`Sending LCP span (${e})`);
    const s = N((M() || 0) + (t ? .startTime || 0)),
        i = R().getScopeData().transactionName,
        o = t ? D(t.element) : "Largest contentful paint",
        a = {
            [k]: "auto.http.browser.lcp",
            [ee]: "ui.webvital.lcp",
            [We]: 0,
            "sentry.pageload.span_id": n,
            "sentry.report_event": r
        };
    t && (t.element && (a["lcp.element"] = D(t.element)), t.id && (a["lcp.id"] = t.id), t.url && (a["lcp.url"] = t.url), t.loadTime != null && (a["lcp.loadTime"] = t.loadTime), t.renderTime != null && (a["lcp.renderTime"] = t.renderTime), t.size != null && (a["lcp.size"] = t.size));
    const c = Pr({
        name: o,
        transaction: i,
        attributes: a,
        startTime: s
    });
    c && (c.addEvent("lcp", {
        [Pt]: "millisecond",
        [Lt]: e
    }), c.end(s))
}

function X(e) {
    return e && ((M() || performance.timeOrigin) + e) / 1e3
}

function ko(e) {
    const t = {};
    if (e.nextHopProtocol != null) {
        const {
            name: n,
            version: r
        } = $f(e.nextHopProtocol);
        t["network.protocol.version"] = r, t["network.protocol.name"] = n
    }
    return M() || lt() ? .timeOrigin ? jf({ ...t,
        "http.request.redirect_start": X(e.redirectStart),
        "http.request.redirect_end": X(e.redirectEnd),
        "http.request.worker_start": X(e.workerStart),
        "http.request.fetch_start": X(e.fetchStart),
        "http.request.domain_lookup_start": X(e.domainLookupStart),
        "http.request.domain_lookup_end": X(e.domainLookupEnd),
        "http.request.connect_start": X(e.connectStart),
        "http.request.secure_connection_start": X(e.secureConnectionStart),
        "http.request.connection_end": X(e.connectEnd),
        "http.request.request_start": X(e.requestStart),
        "http.request.response_start": X(e.responseStart),
        "http.request.response_end": X(e.responseEnd),
        "http.request.time_to_first_byte": e.responseStart != null ? e.responseStart / 1e3 : void 0
    }) : t
}

function jf(e) {
    return Object.fromEntries(Object.entries(e).filter(([, t]) => t != null))
}
var qf = 2147483647,
    Ms = 0,
    U = {},
    H, mn;

function Wf({
    recordClsStandaloneSpans: e,
    recordLcpStandaloneSpans: t,
    client: n
}) {
    const r = lt();
    if (r && M()) {
        r.mark && S.performance.mark("sentry-tracing-init");
        const s = t ? Uf(n) : t === !1 ? Xf() : void 0,
            i = e ? Ff(n) : e === !1 ? Yf() : void 0,
            o = Jf(),
            a = Kf();
        return () => {
            o(), a(), s ? .(), i ? .()
        }
    }
    return () => {}
}

function zf() {
    it("longtask", ({
        entries: e
    }) => {
        const t = V();
        if (!t) return;
        const {
            op: n,
            start_timestamp: r
        } = E(t);
        for (const s of e) {
            const i = N(M() + s.startTime),
                o = N(s.duration);
            n === "navigation" && r && i < r || Te(t, i, i + o, {
                name: "Main UI thread blocked",
                op: "ui.long-task",
                attributes: {
                    [k]: "auto.ui.browser.metrics"
                }
            })
        }
    })
}

function Gf() {
    new PerformanceObserver(e => {
        const t = V();
        if (t)
            for (const n of e.getEntries()) {
                if (!n.scripts[0]) continue;
                const r = N(M() + n.startTime),
                    {
                        start_timestamp: s,
                        op: i
                    } = E(t);
                if (i === "navigation" && s && r < s) continue;
                const o = N(n.duration),
                    a = {
                        [k]: "auto.ui.browser.metrics"
                    },
                    {
                        invoker: c,
                        invokerType: u,
                        sourceURL: f,
                        sourceFunctionName: d,
                        sourceCharPosition: m
                    } = n.scripts[0];
                a["browser.script.invoker"] = c, a["browser.script.invoker_type"] = u, f && (a["code.filepath"] = f), d && (a["code.function"] = d), m !== -1 && (a["browser.script.source_char_position"] = m), Te(t, r, r + o, {
                    name: "Main UI thread blocked",
                    op: "ui.long-animation-frame",
                    attributes: a
                })
            }
    }).observe({
        type: "long-animation-frame",
        buffered: !0
    })
}

function Vf() {
    it("event", ({
        entries: e
    }) => {
        const t = V();
        if (t) {
            for (const n of e)
                if (n.name === "click") {
                    const r = N(M() + n.startTime),
                        s = N(n.duration),
                        i = {
                            name: D(n.target),
                            op: `ui.interaction.${n.name}`,
                            startTime: r,
                            attributes: {
                                [k]: "auto.ui.browser.metrics"
                            }
                        },
                        o = go(n.target);
                    o && (i.attributes["ui.component_name"] = o), Te(t, r, r + s, i)
                }
        }
    })
}

function Yf() {
    return Cr(({
        metric: e
    }) => {
        const t = e.entries[e.entries.length - 1];
        t && (U.cls = {
            value: e.value,
            unit: ""
        }, mn = t)
    }, !0)
}

function Xf() {
    return Or(({
        metric: e
    }) => {
        const t = e.entries[e.entries.length - 1];
        !t || !Bt(e.value) || (U.lcp = {
            value: e.value,
            unit: "millisecond"
        }, H = t)
    }, !0)
}

function Jf() {
    return wf(({
        metric: e
    }) => {
        e.entries[e.entries.length - 1] && (U.ttfb = {
            value: e.value,
            unit: "millisecond"
        })
    })
}

function Kf() {
    return it("paint", ({
        entries: e
    }) => {
        const t = Ft();
        for (const n of e) {
            const r = n.startTime < t.firstHiddenTime;
            n.name === "first-paint" && r && (U.fp = {
                value: n.startTime,
                unit: "millisecond"
            }), n.name === "first-contentful-paint" && r && (U.fcp = {
                value: n.startTime,
                unit: "millisecond"
            })
        }
    })
}

function Qf(e, t) {
    const n = lt(),
        r = M();
    if (!n ? .getEntries || !r) return;
    const {
        spanStreamingEnabled: s,
        ignorePerformanceApiSpans: i,
        ignoreResourceSpans: o
    } = t, a = N(r), c = n.getEntries(), {
        op: u,
        start_timestamp: f
    } = E(e);
    c.slice(Ms).forEach(d => {
        const m = N(d.startTime),
            p = N(Math.max(0, d.duration));
        if (!(u === "navigation" && f && a + m < f)) switch (d.entryType) {
            case "navigation":
                rp(e, d, a);
                break;
            case "mark":
            case "paint":
            case "measure":
                tp(e, d, m, p, a, i);
                break;
            case "resource":
                op(e, d, d.name, m, p, a, o)
        }
    }), Ms = Math.max(c.length - 1, 0), ap(e, s)
}

function Zf(e, t) {
    const n = M();
    if (!lt() ? .getEntries || !n) {
        $s();
        return
    }
    const {
        spanStreamingEnabled: r,
        recordClsOnPageloadSpan: s,
        recordLcpOnPageloadSpan: i
    } = t, o = N(n);
    if (E(e).op === "pageload") {
        if (dp(U), r) {
            const a = (c, u, f) => {
                const d = f ? ? `browser.web_vital.${c}.value`;
                e.setAttribute(d, u), ge && l.log("Setting web vital attribute", {
                    [d]: u
                }, "on pageload span")
            };
            ["ttfb", "fp", "fcp"].forEach(c => {
                U[c] && a(c, U[c].value)
            }), U["ttfb.requestTime"] && a("ttfb.requestTime", U["ttfb.requestTime"].value, "browser.web_vital.ttfb.request_time")
        } else s || delete U.cls, i || delete U.lcp, Object.entries(U).forEach(([a, c]) => {
            $i(a, c.value, c.unit, e)
        }), cp(e, t);
        e.setAttribute(r ? "browser.performance.time_origin" : "performance.timeOrigin", o), e.setAttribute(r ? "browser.performance.navigation.activation_start" : "performance.activationStart", ft())
    }
    $s()
}

function $s() {
    H = void 0, mn = void 0, U = {}
}

function ep(e) {
    if (e ? .entryType === "measure") try {
        return e.detail.devtools.track === "Components ⚛"
    } catch {
        return
    }
}

function tp(e, t, n, r, s, i) {
    if (ep(t) || ["mark", "measure"].includes(t.entryType) && ue(t.name, i)) return;
    const o = $t(!1),
        a = N(o ? o.requestStart : 0),
        c = s + Math.max(n, a),
        u = s + n,
        f = u + r,
        d = {
            [k]: "auto.resource.browser.metrics"
        };
    c !== u && (d["sentry.browser.measure_happened_before_request"] = !0, d["sentry.browser.measure_start_time"] = c), np(d, t), c <= f && Te(e, c, f, {
        name: t.name,
        op: t.entryType,
        attributes: d
    })
}

function np(e, t) {
    try {
        const n = t.detail;
        if (!n) return;
        if (typeof n == "object") {
            for (const [r, s] of Object.entries(n))
                if (s && Fe(s)) e[`sentry.browser.measure.detail.${r}`] = s;
                else if (s !== void 0) try {
                e[`sentry.browser.measure.detail.${r}`] = JSON.stringify(s)
            } catch {}
            return
        }
        if (Fe(n)) {
            e["sentry.browser.measure.detail"] = n;
            return
        }
        try {
            e["sentry.browser.measure.detail"] = JSON.stringify(n)
        } catch {}
    } catch {}
}

function rp(e, t, n) {
    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
        Vt(e, t, r, n)
    }), Vt(e, t, "secureConnection", n, "TLS/SSL"), Vt(e, t, "fetch", n, "cache"), Vt(e, t, "domainLookup", n, "DNS"), ip(e, t, n)
}

function Vt(e, t, n, r, s = n) {
    const i = t[sp(n)],
        o = t[`${n}Start`];
    !o || !i || Te(e, r + N(o), r + N(i), {
        op: `browser.${s}`,
        name: t.name,
        attributes: {
            [k]: "auto.ui.browser.metrics",
            ...n === "redirect" && t.redirectCount != null ? {
                "http.redirect_count": t.redirectCount
            } : {}
        }
    })
}

function sp(e) {
    return e === "secureConnection" ? "connectEnd" : e === "fetch" ? "domainLookupStart" : `${e}End`
}

function ip(e, t, n) {
    const r = n + N(t.requestStart),
        s = n + N(t.responseEnd),
        i = n + N(t.responseStart);
    t.responseEnd && (Te(e, r, s, {
        op: "browser.request",
        name: t.name,
        attributes: {
            [k]: "auto.ui.browser.metrics"
        }
    }), Te(e, i, s, {
        op: "browser.response",
        name: t.name,
        attributes: {
            [k]: "auto.ui.browser.metrics"
        }
    }))
}

function op(e, t, n, r, s, i, o) {
    if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch") return;
    const a = t.initiatorType ? `resource.${t.initiatorType}` : "resource.other";
    if (o ? .includes(a)) return;
    const c = {
            [k]: "auto.resource.browser.metrics"
        },
        u = $e(n);
    u.protocol && (c["url.scheme"] = u.protocol.split(":").pop()), u.host && (c["server.address"] = u.host), c["url.same_origin"] = n.includes(S.location.origin), c[xt] = n, up(t, c, [
        ["responseStatus", "http.response.status_code"],
        ["transferSize", "http.response_transfer_size"],
        ["encodedBodySize", "http.response_content_length"],
        ["decodedBodySize", "http.decoded_response_content_length"],
        ["renderBlockingStatus", "resource.render_blocking_status"],
        ["deliveryType", "http.response_delivery_type"]
    ]);
    const f = { ...c,
            ...ko(t)
        },
        d = i + r,
        m = d + s;
    Te(e, d, m, {
        name: n.replace(S.location.origin, ""),
        op: a,
        attributes: f
    })
}

function ap(e, t) {
    const n = S.navigator;
    if (!n) return;
    const r = n.connection;
    r && (r.effectiveType && e.setAttribute(t ? "network.connection.effective_type" : "effectiveConnectionType", r.effectiveType), r.type && e.setAttribute(t ? "network.connection.type" : "connectionType", r.type), Hn(r.rtt) && (t ? e.setAttribute("network.connection.rtt", r.rtt) : E(e).op === "pageload" && $i("connection.rtt", r.rtt, "millisecond"))), Hn(n.deviceMemory) && (t ? e.setAttribute("device.memory.estimated_capacity", n.deviceMemory) : e.setAttribute("deviceMemory", `${n.deviceMemory} GB`)), Hn(n.hardwareConcurrency) && (t ? e.setAttribute("device.processor_count", n.hardwareConcurrency) : e.setAttribute("hardwareConcurrency", String(n.hardwareConcurrency)))
}

function cp(e, t) {
    H && t.recordLcpOnPageloadSpan && (H.element && e.setAttribute("lcp.element", D(H.element)), H.id && e.setAttribute("lcp.id", H.id), H.url && e.setAttribute("lcp.url", H.url.trim().slice(0, 200)), H.loadTime != null && e.setAttribute("lcp.loadTime", H.loadTime), H.renderTime != null && e.setAttribute("lcp.renderTime", H.renderTime), e.setAttribute("lcp.size", H.size)), mn ? .sources && t.recordClsOnPageloadSpan && mn.sources.forEach((n, r) => e.setAttribute(`cls.source.${r+1}`, D(n.node)))
}

function up(e, t, n) {
    n.forEach(([r, s]) => {
        const i = e[r];
        i != null && (typeof i == "number" && i < qf || typeof i == "string") && (t[s] = i)
    })
}

function dp(e) {
    const t = $t(!1);
    if (!t) return;
    const {
        responseStart: n,
        requestStart: r
    } = t;
    r <= n && (e["ttfb.requestTime"] = {
        value: n - r,
        unit: "millisecond"
    })
}
var Un = [],
    bt = new Map,
    Xe = new Map;

function fp() {
    if (lt() && M()) {
        const e = pp();
        return () => {
            e()
        }
    }
    return () => {}
}
var At = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press"
};

function pp() {
    return Ao(lp)
}
var lp = ({
    metric: e
}) => {
    if (e.value == null) return;
    const t = N(e.value);
    if (t > 60) return;
    const n = e.entries.find(g => g.duration === e.value && At[g.name]);
    if (!n) return;
    const {
        interactionId: r
    } = n, s = At[n.name], i = N(M() + n.startTime), o = V(), a = o ? $(o) : void 0, c = r != null ? bt.get(r) : void 0, u = c ? .span || a, f = u ? E(u).description : R().getScopeData().transactionName, d = c ? .elementName || D(n.target), m = {
        [k]: "auto.http.browser.inp",
        [ee]: `ui.interaction.${s}`,
        [We]: n.duration
    }, p = Pr({
        name: d,
        transaction: f,
        attributes: m,
        startTime: i
    });
    p && (p.addEvent("inp", {
        [Pt]: "millisecond",
        [Lt]: e.value
    }), p.end(i + t))
};

function mp(e) {
    return e != null ? bt.get(e) : void 0
}

function gp() {
    const e = Object.keys(At);
    yn() && e.forEach(s => {
        S.addEventListener(s, t, {
            capture: !0,
            passive: !0
        })
    });

    function t(s) {
        const i = s.target;
        if (!i) return;
        const o = D(i),
            a = Math.round(s.timeStamp);
        if (Xe.set(a, o), Xe.size > 50) {
            const c = Xe.keys().next().value;
            c !== void 0 && Xe.delete(c)
        }
    }

    function n(s) {
        const i = Math.round(s.startTime);
        let o = Xe.get(i);
        if (!o)
            for (let a = -5; a <= 5; a++) {
                const c = Xe.get(i + a);
                if (c) {
                    o = c;
                    break
                }
            }
        return o || "<unknown>"
    }
    const r = ({
        entries: s
    }) => {
        const i = V(),
            o = i && $(i);
        s.forEach(a => {
            if (!Lf(a)) return;
            const c = a.interactionId;
            if (c == null || bt.has(c)) return;
            const u = a.target ? D(a.target) : n(a);
            if (Un.length > 10) {
                const f = Un.shift();
                bt.delete(f)
            }
            Un.push(c), bt.set(c, {
                span: o,
                elementName: u
            })
        })
    };
    it("event", r), it("first-input", r)
}

function Lr(e) {
    const {
        name: t,
        op: n,
        origin: r,
        metricName: s,
        value: i,
        attributes: o,
        parentSpan: a,
        reportEvent: c,
        startTime: u,
        endTime: f
    } = e, d = R().getScopeData().transactionName, m = {
        [k]: r,
        [ee]: n,
        [We]: 0,
        [`browser.web_vital.${s}.value`]: i,
        [Wi]: d,
        [qi]: d,
        "user_agent.original": S.navigator ? .userAgent,
        ...o
    };
    a && Ri(a).attributes ? .["sentry.op"] === "pageload" && (m["sentry.pageload.span_id"] = a.spanContext().spanId), c && (m[`browser.web_vital.${s}.report_event`] = c);
    const p = ke({
        name: t,
        attributes: m,
        startTime: u,
        parentSpan: a
    });
    p && p.end(f ? ? u)
}

function hp(e) {
    let t = 0,
        n;
    if (!Tn("largest-contentful-paint")) return;
    const r = Or(({
        metric: s
    }) => {
        const i = s.entries[s.entries.length - 1];
        !i || !Bt(s.value) || (t = s.value, n = i)
    }, !0);
    In(e, (s, i, o) => {
        _p(t, n, o, s), r()
    })
}

function _p(e, t, n, r) {
    if (!Bt(e)) return;
    ge && l.log(`Sending LCP span (${e})`);
    const s = M() || 0,
        i = N(s),
        o = N(s + (t ? .startTime || 0)),
        a = t ? D(t.element) : "Largest contentful paint",
        c = {};
    t ? .element && (c["browser.web_vital.lcp.element"] = D(t.element)), t ? .id && (c["browser.web_vital.lcp.id"] = t.id), t ? .url && (c["browser.web_vital.lcp.url"] = t.url), t ? .loadTime != null && (c["browser.web_vital.lcp.load_time"] = t.loadTime), t ? .renderTime != null && (c["browser.web_vital.lcp.render_time"] = t.renderTime), t ? .size != null && (c["browser.web_vital.lcp.size"] = t.size), Lr({
        name: a,
        op: "ui.webvital.lcp",
        origin: "auto.http.browser.lcp",
        metricName: "lcp",
        value: e,
        attributes: c,
        parentSpan: n,
        reportEvent: r,
        startTime: i,
        endTime: o
    })
}

function Sp(e) {
    let t = 0,
        n;
    if (!Tn("layout-shift")) return;
    const r = Cr(({
        metric: s
    }) => {
        const i = s.entries[s.entries.length - 1];
        i && (t = s.value, n = i)
    }, !0);
    In(e, (s, i, o) => {
        yp(t, n, o, s), r()
    })
}

function yp(e, t, n, r) {
    ge && l.log(`Sending CLS span (${e})`);
    const s = t ? N((M() || 0) + t.startTime) : C(),
        i = t ? D(t.sources[0] ? .node) : "Layout shift",
        o = {};
    t ? .sources && t.sources.forEach((a, c) => {
        o[`browser.web_vital.cls.source.${c+1}`] = D(a.node)
    }), Lr({
        name: i,
        op: "ui.webvital.cls",
        origin: "auto.http.browser.cls",
        metricName: "cls",
        value: e,
        attributes: o,
        parentSpan: n,
        reportEvent: r,
        startTime: s
    })
}

function vp() {
    if (!lt() || !M()) return;
    Ao(({
        metric: t
    }) => {
        if (t.value == null || N(t.value) > 60) return;
        const n = t.entries.find(r => r.duration === t.value && At[r.name]);
        n && bp(t.value, n)
    })
}

function bp(e, t) {
    ge && l.log(`Sending INP span (${e})`);
    const n = N(M() + t.startTime),
        r = N(e),
        s = At[t.name],
        i = mp(t.interactionId),
        o = V(),
        a = o ? $(o) : void 0,
        c = i ? .span || a,
        u = c ? Ri(c).name : R().getScopeData().transactionName;
    Lr({
        name: i ? .elementName || D(t.target),
        op: `ui.interaction.${s}`,
        origin: "auto.http.browser.inp",
        metricName: "inp",
        value: e,
        attributes: {
            [We]: t.duration,
            [Wi]: u,
            [qi]: u
        },
        startTime: n,
        endTime: n + r,
        parentSpan: c
    })
}
var Ep = 1e3,
    Fs, ar, cr;

function Tp(e) {
    Re("dom", e), Ae("dom", Ip)
}

function Ip() {
    if (!S.document) return;
    const e = J.bind(null, "dom"),
        t = Hs(e, !0);
    S.document.addEventListener("click", t, !1), S.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(n => {
        const r = S[n] ? .prototype;
        r ? .hasOwnProperty ? .("addEventListener") && (q(r, "addEventListener", function(s) {
            return function(i, o, a) {
                if (i === "click" || i == "keypress") try {
                    const c = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                        u = c[i] = c[i] || {
                            refCount: 0
                        };
                    if (!u.handler) {
                        const f = Hs(e);
                        u.handler = f, s.call(this, i, f, a)
                    }
                    u.refCount++
                } catch {}
                return s.call(this, i, o, a)
            }
        }), q(r, "removeEventListener", function(s) {
            return function(i, o, a) {
                if (i === "click" || i == "keypress") try {
                    const c = this.__sentry_instrumentation_handlers__ || {},
                        u = c[i];
                    u && (u.refCount--, u.refCount <= 0 && (s.call(this, i, u.handler, a), u.handler = void 0, delete c[i]), Object.keys(c).length === 0 && delete this.__sentry_instrumentation_handlers__)
                } catch {}
                return s.call(this, i, o, a)
            }
        }))
    })
}

function Rp(e) {
    if (e.type !== ar) return !1;
    try {
        if (!e.target || e.target._sentryId !== cr) return !1
    } catch {}
    return !0
}

function Ap(e, t) {
    return e !== "keypress" ? !1 : t ? .tagName ? !(t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) : !0
}

function Hs(e, t = !1) {
    return n => {
        if (!n || n._sentryCaptured) return;
        const r = wp(n);
        if (Ap(n.type, r)) return;
        F(n, "_sentryCaptured", !0), r && !r._sentryId && F(r, "_sentryId", K());
        const s = n.type === "keypress" ? "input" : n.type;
        Rp(n) || (e({
            event: n,
            name: s,
            global: t
        }), ar = n.type, cr = r ? r._sentryId : void 0), clearTimeout(Fs), Fs = S.setTimeout(() => {
            cr = void 0, ar = void 0
        }, Ep)
    }
}

function wp(e) {
    try {
        return e.target
    } catch {
        return null
    }
}
var Yt;

function xr(e) {
    const t = "history";
    Re(t, e), Ae(t, Np)
}

function Np() {
    if (S.addEventListener("popstate", () => {
            const t = S.location.href,
                n = Yt;
            Yt = t, n !== t && J("history", {
                from: n,
                to: t
            })
        }), !$d()) return;

    function e(t) {
        return function(...n) {
            const r = n.length > 2 ? n[2] : void 0;
            if (r) {
                const s = Yt,
                    i = kp(String(r));
                if (Yt = i, s === i) return t.apply(this, n);
                J("history", {
                    from: s,
                    to: i
                })
            }
            return t.apply(this, n)
        }
    }
    q(S.history, "pushState", e), q(S.history, "replaceState", e)
}

function kp(e) {
    try {
        return new URL(e, S.location.origin).toString()
    } catch {
        return e
    }
}
var nn = {};

function Cp(e) {
    const t = nn[e];
    if (t) return t;
    let n = S[e];
    if (nr(n)) return nn[e] = n.bind(S);
    const r = S.document;
    if (r && typeof r.createElement == "function") try {
        const s = r.createElement("iframe");
        s.hidden = !0, r.head.appendChild(s);
        const i = s.contentWindow;
        i ? .[e] && (n = i[e]), r.head.removeChild(s)
    } catch (s) {
        ge && l.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, s)
    }
    return n && (nn[e] = n.bind(S))
}

function Op(e) {
    nn[e] = void 0
}
var Je = "__sentry_xhr_v3__";

function Co(e) {
    Re("xhr", e), Ae("xhr", Pp)
}

function Pp() {
    if (!S.XMLHttpRequest) return;
    const e = XMLHttpRequest.prototype;
    e.open = new Proxy(e.open, {
        apply(t, n, r) {
            const s = new Error,
                i = C() * 1e3,
                o = ce(r[0]) ? r[0].toUpperCase() : void 0,
                a = Lp(r[1]);
            if (!o || !a) return t.apply(n, r);
            n[Je] = {
                method: o,
                url: a,
                request_headers: {}
            }, o === "POST" && a.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
            const c = () => {
                const u = n[Je];
                if (u && n.readyState === 4) {
                    try {
                        u.status_code = n.status
                    } catch {}
                    const f = {
                        endTimestamp: C() * 1e3,
                        startTimestamp: i,
                        xhr: n,
                        virtualError: s
                    };
                    J("xhr", f), n.removeEventListener("readystatechange", c)
                }
            };
            return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange, {
                apply(u, f, d) {
                    return c(), u.apply(f, d)
                }
            }) : n.addEventListener("readystatechange", c), n.setRequestHeader = new Proxy(n.setRequestHeader, {
                apply(u, f, d) {
                    const [m, p] = d, g = f[Je];
                    return g && ce(m) && ce(p) && (g.request_headers[m.toLowerCase()] = p), u.apply(f, d)
                }
            }), t.apply(n, r)
        }
    }), e.send = new Proxy(e.send, {
        apply(t, n, r) {
            const s = n[Je];
            if (!s) return t.apply(n, r);
            r[0] !== void 0 && (s.body = r[0]);
            const i = {
                startTimestamp: C() * 1e3,
                xhr: n
            };
            return J("xhr", i), t.apply(n, r)
        }
    })
}

function Lp(e) {
    if (ce(e)) return e;
    try {
        return e.toString()
    } catch {}
}

function xp(e) {
    let t;
    try {
        t = e.getAllResponseHeaders()
    } catch (n) {
        return ge && l.error(n, "Failed to get xhr response headers", e), {}
    }
    return t ? t.split(`\r
`).reduce((n, r) => {
        const [s, i] = r.split(": ");
        return i && (n[s.toLowerCase()] = i), n
    }, {}) : {}
}

function Dp(e) {
    if (typeof Element > "u") return !1;
    try {
        return e instanceof Element
    } catch {
        return !1
    }
}
var Mp = 40;

function $p(e, t = Cp("fetch")) {
    let n = 0,
        r = 0;
    async function s(i) {
        const o = i.body.length;
        n += o, r++;
        const a = {
            body: i.body,
            method: "POST",
            referrerPolicy: "strict-origin",
            headers: e.headers,
            keepalive: n <= 6e4 && r < 15,
            ...e.fetchOptions
        };
        try {
            const c = await t(e.url, a);
            return {
                statusCode: c.status,
                headers: {
                    "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": c.headers.get("Retry-After")
                }
            }
        } catch (c) {
            throw Op("fetch"), c
        } finally {
            n -= o, r--
        }
    }
    return xu(e, s, Er(e.bufferSize || Mp))
}
var z = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    Fp = 30,
    Hp = 50;

function ur(e, t, n, r) {
    const s = {
        filename: e,
        function: t === "<anonymous>" ? "?" : t,
        in_app: !0
    };
    return n !== void 0 && (s.lineno = n), r !== void 0 && (s.colno = r), s
}
var Up = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    Bp = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    jp = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    qp = /at (.+?) ?\(data:(.+?),/,
    Wp = e => {
        const t = e.match(qp);
        if (t) return {
            filename: `<data:${t[2]}>`,
            function: t[1]
        };
        const n = Up.exec(e);
        if (n) {
            const [, s, i, o] = n;
            return ur(s, "?", +i, +o)
        }
        const r = Bp.exec(e);
        if (r) {
            if (r[2] ? .indexOf("eval") === 0) {
                const o = jp.exec(r[2]);
                o && (r[2] = o[1], r[3] = o[2], r[4] = o[3])
            }
            const [s, i] = Oo(r[1] || "?", r[2]);
            return ur(i, s, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0)
        }
    },
    zp = [Fp, Wp],
    Gp = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    Vp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    Yp = e => {
        const t = Gp.exec(e);
        if (t) {
            if (t[3] && t[3].indexOf(" > eval") > -1) {
                const s = Vp.exec(t[3]);
                s && (t[1] = t[1] || "eval", t[3] = s[1], t[4] = s[2], t[5] = "")
            }
            let n = t[3],
                r = t[1] || "?";
            return [r, n] = Oo(r, n), ur(n, r, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
        }
    },
    Xp = [Hp, Yp],
    Jp = [zp, Xp],
    Kp = Qs(...Jp),
    Oo = (e, t) => {
        const n = e.indexOf("safari-extension") !== -1,
            r = e.indexOf("safari-web-extension") !== -1;
        return n || r ? [e.indexOf("@") !== -1 ? e.split("@")[0] : "?", n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
    },
    Xt = 1024,
    Qp = "Breadcrumbs",
    Zp = ((e = {}) => {
        const t = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...e
        };
        return {
            name: Qp,
            setup(n) {
                t.console && Sd(rl(n)), t.dom && Tp(nl(n, t.dom)), t.xhr && Co(sl(n)), t.fetch && Ir(il(n)), t.history && xr(ol(n)), t.sentry && n.on("beforeSendEvent", tl(n))
            }
        }
    }),
    el = Zp;

function tl(e) {
    return function(n) {
        T() === e && Be({
            category: `sentry.${n.type==="transaction"?"transaction":"event"}`,
            event_id: n.event_id,
            level: n.level,
            message: xe(n)
        }, {
            event: n
        })
    }
}

function nl(e, t) {
    return function(r) {
        if (T() !== e) return;
        let s, i, o = typeof t == "object" ? t.serializeAttribute : void 0,
            a = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
        a && a > Xt && (z && l.warn(`\`dom.maxStringLength\` cannot exceed ${Xt}, but a value of ${a} was configured. Sentry will use ${Xt} instead.`), a = Xt), typeof o == "string" && (o = [o]);
        try {
            const u = r.event,
                f = al(u) ? u.target : u;
            s = D(f, {
                keyAttrs: o,
                maxStringLength: a
            }), i = go(f)
        } catch {
            s = "<unknown>"
        }
        if (s.length === 0) return;
        const c = {
            category: `ui.${r.name}`,
            message: s
        };
        i && (c.data = {
            "ui.component_name": i
        }), Be(c, {
            event: r.event,
            name: r.name,
            global: r.global
        })
    }
}

function rl(e) {
    return function(n) {
        if (T() !== e) return;
        const r = {
            category: "console",
            data: {
                arguments: n.args,
                logger: "console"
            },
            level: vd(n.level),
            message: jr(n.args, " ")
        };
        if (n.level === "assert")
            if (n.args[0] === !1) r.message = `Assertion failed: ${jr(n.args.slice(1)," ")||"console.assert"}`, r.data.arguments = n.args.slice(1);
            else return;
        Be(r, {
            input: n.args,
            level: n.level
        })
    }
}

function sl(e) {
    return function(n) {
        if (T() !== e) return;
        const {
            startTimestamp: r,
            endTimestamp: s
        } = n, i = n.xhr[Je];
        if (!r || !s || !i) return;
        const {
            method: o,
            url: a,
            status_code: c,
            body: u
        } = i, f = {
            method: o,
            url: a,
            status_code: c
        }, d = {
            xhr: n.xhr,
            input: u,
            startTimestamp: r,
            endTimestamp: s
        }, m = {
            category: "xhr",
            data: f,
            type: "http",
            level: po(c)
        };
        e.emit("beforeOutgoingRequestBreadcrumb", m, d), Be(m, d)
    }
}

function il(e) {
    return function(n) {
        if (T() !== e) return;
        const {
            startTimestamp: r,
            endTimestamp: s
        } = n;
        if (s && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST"))
            if (n.error) {
                const i = {
                        data: n.error,
                        input: n.args,
                        startTimestamp: r,
                        endTimestamp: s
                    },
                    o = {
                        category: "fetch",
                        data: n.fetchData,
                        level: "error",
                        type: "http"
                    };
                e.emit("beforeOutgoingRequestBreadcrumb", o, i), Be(o, i)
            } else {
                const i = n.response,
                    o = { ...n.fetchData,
                        status_code: i ? .status
                    },
                    a = {
                        input: n.args,
                        response: i,
                        startTimestamp: r,
                        endTimestamp: s
                    },
                    c = {
                        category: "fetch",
                        data: o,
                        type: "http",
                        level: po(o.status_code)
                    };
                e.emit("beforeOutgoingRequestBreadcrumb", c, a), Be(c, a)
            }
    }
}

function ol(e) {
    return function(n) {
        if (T() !== e) return;
        let r = n.from,
            s = n.to;
        const i = $e(v.location.href);
        let o = r ? $e(r) : void 0;
        const a = $e(s);
        o ? .path || (o = i), i.protocol === a.protocol && i.host === a.host && (s = a.relative), i.protocol === o.protocol && i.host === o.host && (r = o.relative), Be({
            category: "navigation",
            data: {
                from: r,
                to: s
            }
        })
    }
}

function al(e) {
    return !!e && !!e.target
}
var cl = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(","),
    ul = "BrowserApiErrors",
    dl = ((e = {}) => {
        const t = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            unregisterOriginalCallbacks: !1,
            ...e
        };
        return {
            name: ul,
            setupOnce() {
                t.setTimeout && q(v, "setTimeout", Us), t.setInterval && q(v, "setInterval", Us), t.requestAnimationFrame && q(v, "requestAnimationFrame", pl), t.XMLHttpRequest && "XMLHttpRequest" in v && q(XMLHttpRequest.prototype, "send", ll);
                const n = t.eventTarget;
                n && (Array.isArray(n) ? n : cl).forEach(r => ml(r, t))
            }
        }
    }),
    fl = dl;

function Us(e) {
    return function(...t) {
        const n = t[0];
        return t[0] = st(n, {
            mechanism: {
                handled: !1,
                type: `auto.browser.browserapierrors.${pe(e)}`
            }
        }), e.apply(this, t)
    }
}

function pl(e) {
    return function(t) {
        return e.apply(this, [st(t, {
            mechanism: {
                data: {
                    handler: pe(e)
                },
                handled: !1,
                type: "auto.browser.browserapierrors.requestAnimationFrame"
            }
        })])
    }
}

function ll(e) {
    return function(...t) {
        const n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(r => {
            r in n && typeof n[r] == "function" && q(n, r, function(s) {
                const i = {
                        mechanism: {
                            data: {
                                handler: pe(s)
                            },
                            handled: !1,
                            type: `auto.browser.browserapierrors.xhr.${r}`
                        }
                    },
                    o = gr(s);
                return o && (i.mechanism.data.handler = pe(o)), st(s, i)
            })
        }), e.apply(this, t)
    }
}

function ml(e, t) {
    const n = v[e] ? .prototype;
    n ? .hasOwnProperty ? .("addEventListener") && (q(n, "addEventListener", function(r) {
        return function(s, i, o) {
            try {
                gl(i) && (i.handleEvent = st(i.handleEvent, {
                    mechanism: {
                        data: {
                            handler: pe(i),
                            target: e
                        },
                        handled: !1,
                        type: "auto.browser.browserapierrors.handleEvent"
                    }
                }))
            } catch {}
            return t.unregisterOriginalCallbacks && hl(this, s, i), r.apply(this, [s, st(i, {
                mechanism: {
                    data: {
                        handler: pe(i),
                        target: e
                    },
                    handled: !1,
                    type: "auto.browser.browserapierrors.addEventListener"
                }
            }), o])
        }
    }), q(n, "removeEventListener", function(r) {
        return function(s, i, o) {
            try {
                if (Object.prototype.hasOwnProperty.call(i, "__sentry_wrapped__")) {
                    const a = i.__sentry_wrapped__;
                    a && r.call(this, s, a, o)
                }
            } catch {}
            return r.call(this, s, i, o)
        }
    }))
}

function gl(e) {
    return typeof e.handleEvent == "function"
}

function hl(e, t, n) {
    e && typeof e == "object" && "removeEventListener" in e && typeof e.removeEventListener == "function" && e.removeEventListener(t, n)
}
var _l = (e = {}) => {
        const t = e.lifecycle ? ? "route";
        return {
            name: "BrowserSession",
            setupOnce() {
                if (typeof v.document > "u") {
                    z && l.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
                    return
                }
                hs({
                    ignoreDuration: !0
                });
                let n = !1;
                kr(() => {
                    n || (Ln(), n = !0)
                });
                const r = G();
                let s = r.getUser();
                r.addScopeListener(i => {
                    const o = i.getUser();
                    (s ? .id !== o ? .id || s ? .ip_address !== o ? .ip_address) && (s = o, n && Ln())
                }), t === "route" && xr(({
                    from: i,
                    to: o
                }) => {
                    i !== o && (hs({
                        ignoreDuration: !0
                    }), Ln(), n = !0)
                })
            }
        }
    },
    Sl = "CultureContext",
    yl = (() => ({
        name: Sl,
        preprocessEvent(e) {
            const t = Bs();
            t && (e.contexts = { ...e.contexts,
                culture: { ...t,
                    ...e.contexts ? .culture
                }
            })
        },
        processSegmentSpan(e) {
            const t = Bs();
            t && zi(e, {
                "culture.locale": t.locale,
                "culture.timezone": t.timezone,
                "culture.calendar": t.calendar
            })
        }
    })),
    vl = yl;

function Bs() {
    try {
        const e = v.Intl;
        if (!e) return;
        const t = e.DateTimeFormat().resolvedOptions();
        return {
            locale: t.locale,
            timezone: t.timeZone,
            calendar: t.calendar
        }
    } catch {
        return
    }
}
var bl = "GlobalHandlers",
    El = ((e = {}) => {
        const t = {
            onerror: !0,
            onunhandledrejection: !0,
            ...e
        };
        return {
            name: bl,
            setupOnce() {
                Error.stackTraceLimit = 50
            },
            setup(n) {
                t.onerror && (Il(n), js("onerror")), t.onunhandledrejection && (Rl(n), js("onunhandledrejection"))
            }
        }
    }),
    Tl = El;

function Il(e) {
    Zs(t => {
        const {
            stackParser: n,
            attachStacktrace: r
        } = Po();
        if (T() !== e || ho()) return;
        const {
            msg: s,
            url: i,
            line: o,
            column: a,
            error: c
        } = t, u = Nl(Ar(n, c || s, void 0, r, !1), i, o, a);
        u.level = "error", Yi(u, {
            originalException: c,
            mechanism: {
                handled: !1,
                type: "auto.browser.global_handlers.onerror"
            }
        })
    })
}

function Rl(e) {
    ei(t => {
        const {
            stackParser: n,
            attachStacktrace: r
        } = Po();
        if (T() !== e || ho()) return;
        const s = Al(t),
            i = Fe(s) ? wl(s) : Ar(n, s, void 0, r, !0);
        i.level = "error", Yi(i, {
            originalException: s,
            mechanism: {
                handled: !1,
                type: "auto.browser.global_handlers.onunhandledrejection"
            }
        })
    })
}

function Al(e) {
    if (Fe(e)) return e;
    try {
        if ("reason" in e) return e.reason;
        if ("detail" in e && "reason" in e.detail) return e.detail.reason
    } catch {}
    return e
}

function wl(e) {
    return {
        exception: {
            values: [{
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(e)}`
            }]
        }
    }
}

function Nl(e, t, n, r) {
    const s = e.exception = e.exception || {},
        i = s.values = s.values || [],
        o = i[0] = i[0] || {},
        a = o.stacktrace = o.stacktrace || {},
        c = a.frames = a.frames || [];
    return c.length === 0 && c.push({
        colno: r,
        lineno: n,
        filename: kl(t) ? ? rt(),
        function: "?",
        in_app: !0
    }), e
}

function js(e) {
    z && l.log(`Global Handler attached: ${e}`)
}

function Po() {
    return T() ? .getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}

function kl(e) {
    if (!(!ce(e) || e.length === 0)) return e.startsWith("data:") ? `<${Z(e,!1)}>` : e
}
var Cl = () => ({
        name: "HttpContext",
        preprocessEvent(e) {
            if (!v.navigator && !v.location && !v.document) return;
            const t = fn(),
                n = { ...t.headers,
                    ...e.request ? .headers
                };
            e.request = { ...t,
                ...e.request,
                headers: n
            }
        },
        processSegmentSpan(e) {
            const t = e.attributes ? .[ee];
            if (!v.navigator && !v.location && !v.document) return;
            const n = fn();
            zi(e, {
                [xt]: t !== "http.client" ? n.url : void 0,
                "http.request.header.user_agent": n.headers["User-Agent"],
                "http.request.header.referer": n.headers.Referer
            })
        }
    }),
    Ol = "cause",
    Pl = 5,
    Ll = "LinkedErrors",
    xl = ((e = {}) => {
        const t = e.limit || Pl,
            n = e.key || Ol;
        return {
            name: Ll,
            preprocessEvent(r, s, i) {
                const o = i.getOptions();
                hd(Rr, o.stackParser, n, t, r, s)
            }
        }
    }),
    Dl = xl,
    Ml = /^HTML(\w*)Element$/;

function $l(e) {
    if (typeof window < "u" && e === window) return "[Window]";
    if (typeof document < "u" && e === document) return "[Document]";
    if (Dp(e)) {
        const t = Fl(e);
        if (Ml.test(t)) return `[HTMLElement: ${D(e)}]`
    }
}

function Fl(e) {
    const t = Object.getPrototypeOf(e);
    return t ? .constructor ? t.constructor.name : "null prototype"
}

function Hl() {
    return Ul() ? (z && je(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
    }), !0) : !1
}

function Ul() {
    if (typeof v.window > "u") return !1;
    const e = v;
    if (e.nw || !(e.chrome || e.browser) ? .runtime ? .id) return !1;
    const t = rt();
    return !(v === v.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(t))
}

function Bl(e) {
    return [cd(), sd(), kd(), fl(), el(), Tl(), Dl(), Td(), Cl(), vl(), _l()]
}

function bm(e = {}) {
    const t = !e.skipBrowserExtensionCheck && Hl();
    let n = e.defaultIntegrations == null ? Bl() : e.defaultIntegrations;
    const r = { ...e,
        enabled: t ? !1 : e.enabled,
        stackParser: Go(e.stackParser || Kp),
        integrations: lu({
            integrations: e.integrations,
            defaultIntegrations: n
        }),
        transport: e.transport || $p
    };
    return ra($l), Vu(rf, r)
}

function jl(e) {
    return e.split(",").some(t => t.trim().startsWith("sentry-"))
}

function Lo(e) {
    try {
        return new URL(e, v.location.origin).href
    } catch {
        return
    }
}

function ql(e) {
    return e.entryType === "resource" && "initiatorType" in e && typeof e.nextHopProtocol == "string" && (e.initiatorType === "fetch" || e.initiatorType === "xmlhttprequest")
}

function xo(e) {
    try {
        return new Headers(e)
    } catch {
        return
    }
}
var Do = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    trackFetchStreamPerformance: !1
};

function Wl(e, t) {
    const {
        traceFetch: n,
        traceXHR: r,
        shouldCreateSpanForRequest: s,
        enableHTTPTimings: i,
        tracePropagationTargets: o,
        onRequestSpanStart: a,
        onRequestSpanEnd: c
    } = { ...Do,
        ...t
    }, u = typeof s == "function" ? s : p => !0, f = p => Gl(p, o), d = {}, m = e.getOptions().propagateTraceparent;
    n && Ir(p => {
        const g = Cd(p, u, f, d, {
            propagateTraceparent: m,
            onRequestSpanEnd: c
        });
        if (g) {
            const _ = Lo(p.fetchData.url),
                y = _ ? $e(_).host : void 0,
                L = _ ? Z(_) : void 0;
            g.setAttributes({
                [ji]: L,
                [xt]: L,
                "server.address": y
            }), i && qs(g, e), a ? .(g, {
                headers: p.headers
            })
        }
    }), r && Co(p => {
        const g = Vl(p, u, f, d, m, c);
        g && (i && qs(g, e), a ? .(g, {
            headers: xo(p.xhr.__sentry_xhr_v3__ ? .request_headers)
        }))
    })
}
var zl = 300;

function qs(e, t) {
    const {
        url: n
    } = E(e).data;
    if (!n || typeof n != "string") return;
    let r = () => {
        setTimeout(s)
    };
    if (re(t)) {
        const i = e.end.bind(e);
        e.end = o => {
            const a = o ? ? C();
            let c = !1;
            const u = () => {
                c || (c = !0, setTimeout(s), i(a), clearTimeout(f))
            };
            r = u;
            const f = setTimeout(u, zl)
        }
    }
    const s = it("resource", ({
        entries: i
    }) => {
        i.forEach(o => {
            ql(o) && o.name.endsWith(n) && (e.setAttributes(ko(o)), r())
        })
    })
}

function Gl(e, t) {
    const n = rt();
    if (n) {
        let r, s;
        try {
            r = new URL(e, n), s = new URL(n).origin
        } catch {
            return !1
        }
        const i = r.origin === s;
        return t ? ue(r.toString(), t) || i && ue(r.pathname, t) : i
    } else {
        const r = !!e.match(/^\/(?!\/)/);
        return t ? ue(e, t) : r
    }
}

function Vl(e, t, n, r, s, i) {
    const o = e.xhr,
        a = o ? .[Je];
    if (!o || o.__sentry_own_request__ || !a) return;
    const {
        url: c,
        method: u
    } = a, f = W() && t(c);
    if (e.endTimestamp) {
        const Ce = o.__sentry_xhr_span_id__;
        if (!Ce) return;
        const he = r[Ce];
        he && (f && a.status_code !== void 0 && (mi(he, a.status_code), he.end(), i ? .(he, {
            headers: xo(xp(o)),
            error: e.error
        })), delete r[Ce]);
        return
    }
    const d = Lo(c),
        m = $e(d || c),
        p = d ? Z(d) : void 0,
        g = Z(Ju(c)),
        _ = T(),
        y = !!V(),
        L = y || !!_ && re(_),
        Y = f && L ? ke({
            name: `${u} ${g}`,
            attributes: {
                url: Z(c),
                type: "xhr",
                "http.method": u,
                "http.url": p,
                [xt]: p,
                "server.address": m ? .host,
                [k]: "auto.http.browser",
                [ee]: "http.client",
                ...m ? .search && {
                    "http.query": m ? .search
                },
                ...m ? .hash && {
                    "http.fragment": m ? .hash
                }
            }
        }) : new Ue,
        Ge = Hi(Y) && y ? void 0 : Y;
    return f && !L && _ ? .recordDroppedEvent("no_parent_span", "span"), o.__sentry_xhr_span_id__ = Y.spanContext().spanId, r[o.__sentry_xhr_span_id__] = Y, n(c) && Yl(o, W() && L ? Ge : void 0, s), _ && _.emit("beforeOutgoingRequestSpan", Y, e), Y
}

function Yl(e, t, n) {
    const {
        "sentry-trace": r,
        baggage: s,
        traceparent: i
    } = ao({
        span: t,
        propagateTraceparent: n
    });
    r && Xl(e, r, s, i)
}

function Xl(e, t, n, r) {
    const s = e.__sentry_xhr_v3__ ? .request_headers;
    if (!(s ? .["sentry-trace"] || !e.setRequestHeader)) try {
        if (e.setRequestHeader("sentry-trace", t), r && !s ? .traceparent && e.setRequestHeader("traceparent", r), n) {
            const i = s ? .baggage;
            (!i || !jl(i)) && e.setRequestHeader("baggage", n)
        }
    } catch {}
}
var Ws = new WeakMap,
    zs = new WeakMap,
    Jl = 9e4,
    Kl = ["text/event-stream", "application/x-ndjson", "application/stream+json"],
    Ql = () => ({
        name: "FetchStreamPerformance",
        setup() {
            Ud(e => {
                if (e.response) {
                    const t = Ws.get(e.response);
                    if (t && e.endTimestamp) {
                        t.end(e.endTimestamp);
                        const n = zs.get(e.response);
                        n && clearTimeout(n)
                    }
                }
            }), Ir(e => {
                if (e.endTimestamp && e.response) {
                    const t = e.response.headers ? .get("content-type") || "";
                    if (e.response.headers ? .get("content-length") || !Kl.some(c => t.startsWith(c))) return;
                    const n = e.fetchData ? .url || "",
                        r = e.fetchData ? .method || "GET",
                        s = un(n),
                        i = n.startsWith("data:") ? Z(n) : s ? oo(s) : n,
                        o = ke({
                            name: `${r} ${i}`,
                            startTime: e.endTimestamp,
                            attributes: {
                                url: Z(n),
                                "http.method": r,
                                type: "fetch",
                                [ee]: "http.client.stream",
                                [k]: "auto.http.browser.stream"
                            }
                        });
                    Ws.set(e.response, o);
                    const a = setTimeout(() => {
                        o.isRecording() && o.end()
                    }, Jl);
                    zs.set(e.response, a)
                }
            })
        }
    }),
    Zl = "WebVitals",
    em = (e = {}) => {
        const t = new Set(e.ignore ? ? []);
        return {
            name: Zl,
            setup(n) {
                const r = re(n),
                    {
                        enableStandaloneClsSpans: s,
                        enableStandaloneLcpSpans: i
                    } = e._experiments ? ? {},
                    o = r || t.has("cls") ? void 0 : s || !1,
                    a = r || t.has("lcp") ? void 0 : i || !1,
                    c = Wf({
                        recordClsStandaloneSpans: o,
                        recordLcpStandaloneSpans: a,
                        client: n
                    }),
                    u = new WeakSet;
                n.on("afterStartPageLoadSpan", f => {
                    u.add(f)
                }), n.on("spanEnd", f => {
                    u.delete(f) && (c(), Zf(f, {
                        recordClsOnPageloadSpan: o === !1,
                        recordLcpOnPageloadSpan: a === !1,
                        spanStreamingEnabled: r
                    }))
                }), r ? (t.has("lcp") || hp(n), t.has("cls") || Sp(n), t.has("inp") || vp()) : t.has("inp") || fp()
            },
            afterAllSetup() {
                t.has("inp") || gp()
            }
        }
    };

function tm() {
    v.document ? v.document.addEventListener("visibilitychange", () => {
        const e = V();
        if (!e) return;
        const t = $(e);
        if (v.document.hidden && t) {
            const n = "cancelled",
                {
                    op: r,
                    status: s
                } = E(t);
            z && l.log(`[Tracing] Transaction: ${n} -> since tab moved to the background, op: ${r}`), s || t.setStatus({
                code: 2,
                message: n
            }), t.setAttribute("sentry.cancellation_reason", "document.hidden"), t.end()
        }
    }) : z && l.warn("[Tracing] Could not set up background tab detection due to lack of global document")
}
var Mo = "sentry_previous_trace",
    nm = "sentry.previous_trace";

function rm(e, {
    linkPreviousTrace: t,
    consistentTraceSampling: n
}) {
    const r = t === "session-storage";
    let s = r ? om() : void 0;
    e.on("spanStart", o => {
        if ($(o) !== o) return;
        const a = R().getPropagationContext();
        s = sm(s, o, a), r && im(s)
    });
    let i = !0;
    n && e.on("beforeSampling", o => {
        if (!s) return;
        const a = R(),
            c = a.getPropagationContext();
        if (i && c.parentSpanId) {
            i = !1;
            return
        }
        a.setPropagationContext({ ...c,
            dsc: { ...c.dsc,
                sample_rate: String(s.sampleRate),
                sampled: String(dr(s.spanContext))
            },
            sampleRand: s.sampleRand
        }), o.parentSampled = dr(s.spanContext), o.parentSampleRate = s.sampleRate, o.spanAttributes = { ...o.spanAttributes,
            [La]: s.sampleRate
        }
    })
}

function sm(e, t, n) {
    const r = E(t);

    function s() {
        try {
            const a = Number(r.data ? .["sentry.sample_rate"] ? ? n.dsc ? .sample_rate);
            return Number.isNaN(a) ? 0 : a
        } catch {
            return 0
        }
    }
    const i = {
        spanContext: t.spanContext(),
        startTimestamp: r.start_timestamp,
        sampleRate: s(),
        sampleRand: n.sampleRand
    };
    if (!e) return i;
    const o = e.spanContext;
    return o.traceId === r.trace_id ? e : (Date.now() / 1e3 - e.startTimestamp <= 3600 && (z && l.log(`Adding previous_trace \`${JSON.stringify(o)}\` link to span \`${JSON.stringify({op:r.op,...t.spanContext()})}\``), t.addLink({
        context: o,
        attributes: {
            [xa]: "previous_trace"
        }
    }), t.setAttribute(nm, `${o.traceId}-${o.spanId}-${dr(o)?1:0}`)), i)
}

function im(e) {
    try {
        v.sessionStorage.setItem(Mo, JSON.stringify(e))
    } catch (t) {
        z && l.warn("Could not store previous trace in sessionStorage", t)
    }
}

function om() {
    try {
        const e = v.sessionStorage ? .getItem(Mo);
        return JSON.parse(e)
    } catch {
        return
    }
}

function dr(e) {
    return e.traceFlags === 1
}
var am = "BrowserTracing",
    cm = /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;

function um() {
    const e = v.navigator;
    return e ? .userAgent ? cm.test(e.userAgent) : !1
}
var dm = { ...Qt,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !0,
        enableInp: !0,
        ignoreResourceSpans: [],
        ignorePerformanceApiSpans: [],
        detectRedirects: !0,
        linkPreviousTrace: "in-memory",
        consistentTraceSampling: !1,
        enableReportPageLoaded: !1,
        _experiments: {},
        ...Do
    },
    Em = ((e = {}) => {
        "enableElementTiming" in e && je(() => {
            console.warn("[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead.")
        });
        const t = {
                name: void 0,
                source: void 0
            },
            n = v.document,
            {
                enableInp: r,
                enableLongTask: s,
                enableLongAnimationFrame: i,
                _experiments: {
                    enableInteractions: o,
                    enableStandaloneClsSpans: a,
                    enableStandaloneLcpSpans: c
                },
                beforeStartSpan: u,
                idleTimeout: f,
                finalTimeout: d,
                childSpanTimeout: m,
                markBackgroundSpan: p,
                traceFetch: g,
                traceXHR: _,
                trackFetchStreamPerformance: y,
                shouldCreateSpanForRequest: L,
                enableHTTPTimings: Y,
                ignoreResourceSpans: Ge,
                ignorePerformanceApiSpans: Ce,
                instrumentPageLoad: he,
                instrumentNavigation: jt,
                detectRedirects: I,
                linkPreviousTrace: Q,
                consistentTraceSampling: mt,
                enableReportPageLoaded: se,
                onRequestSpanStart: Ve,
                onRequestSpanEnd: Oe
            } = { ...dm,
                ...e
            },
            O = um();
        let _e, te;

        function ie(A, P, w = !0, x) {
            const B = P.op === "pageload",
                j = P.name,
                ne = u ? u(P) : P,
                oe = un(x || rt()),
                Rn = { ...oe ? .pathname && {
                        "url.path": oe.pathname
                    },
                    ...oe && !Tr(oe) && {
                        "url.full": oe.href
                    },
                    ...ne.attributes
                };
            if (j !== ne.name && (Rn[ve] = "custom"), ne.attributes = Rn, !w) {
                const ht = qe();
                ke({ ...ne,
                    startTime: ht
                }).end(ht);
                return
            }
            t.name = ne.name, t.source = Rn[ve];
            const gt = Ui(ne, {
                idleTimeout: f,
                finalTimeout: d,
                childSpanTimeout: m,
                disableAutoFinish: B,
                beforeSpanEnd: ht => {
                    Qf(ht, {
                        ignoreResourceSpans: Ge,
                        ignorePerformanceApiSpans: Ce,
                        spanStreamingEnabled: re(A)
                    }), Ys(A, void 0);
                    const Dr = R(),
                        Fo = Dr.getPropagationContext();
                    Dr.setPropagationContext({ ...Fo,
                        traceId: gt.spanContext().traceId,
                        sampled: Ne(gt),
                        dsc: dt(ht)
                    }), B && (te = void 0)
                },
                trimIdleSpanEndTimestamp: !se
            });
            B && se && (te = gt), Ys(A, gt);

            function An() {
                n && ["interactive", "complete"].includes(n.readyState) && (A.emit("idleSpanEnableAutoFinish", gt), n.removeEventListener("readystatechange", An))
            }
            B && !se && n && (n.addEventListener("readystatechange", An), An())
        }
        return {
            name: am,
            setup(A) {
                if (O) {
                    z && l.log("[Tracing] Skipping browserTracingIntegration setup for bot user agent.");
                    return
                }
                if (ac(), i && b.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? .includes("long-animation-frame") ? Gf() : s && zf(), o && Vf(), I && n) {
                    const w = () => {
                        _e = C()
                    };
                    addEventListener("click", w, {
                        capture: !0
                    }), addEventListener("keydown", w, {
                        capture: !0,
                        passive: !0
                    })
                }

                function P() {
                    const w = wt(A);
                    w && !E(w).timestamp && (z && l.log(`[Tracing] Finishing current active span with op: ${E(w).op}`), w.setAttribute(cn, "cancelled"), w.end())
                }
                A.on("startNavigationSpan", (w, x) => {
                    if (T() !== A) return;
                    if (x ? .isRedirect) {
                        z && l.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), ie(A, {
                            op: "navigation.redirect",
                            ...w
                        }, !1, x.url);
                        return
                    }
                    _e = void 0, P(), G().setPropagationContext({
                        traceId: me(),
                        sampleRand: Math.random(),
                        propagationSpanId: W() ? void 0 : de()
                    });
                    const B = R();
                    B.setPropagationContext({
                        traceId: me(),
                        sampleRand: Math.random(),
                        propagationSpanId: W() ? void 0 : de()
                    }), B.setSDKProcessingMetadata({
                        normalizedRequest: void 0
                    }), ie(A, {
                        op: "navigation",
                        ...w,
                        parentSpan: null,
                        forceTransaction: !0
                    }, !0, x ? .url)
                }), A.on("startPageLoadSpan", (w, x = {}) => {
                    if (T() !== A) return;
                    P();
                    const B = x.sentryTrace || Gs("sentry-trace") || Vs("sentry-trace"),
                        j = x.baggage || Gs("baggage") || Vs("baggage"),
                        ne = Za(B, j),
                        oe = R();
                    oe.setPropagationContext(ne), W() || (oe.getPropagationContext().propagationSpanId = de()), oe.setSDKProcessingMetadata({
                        normalizedRequest: fn()
                    }), ie(A, {
                        op: "pageload",
                        ...w
                    })
                }), A.on("endPageloadSpan", () => {
                    se && te && (te.setAttribute(cn, "reportPageLoaded"), te.end())
                })
            },
            afterAllSetup(A) {
                if (O) return;
                A.addIntegration && !A.getIntegrationByName ? .("WebVitals") && A.addIntegration(em({
                    ignore: r ? [] : ["inp"],
                    _experiments: {
                        enableStandaloneClsSpans: a,
                        enableStandaloneLcpSpans: c
                    }
                }));
                let P = rt();
                if (Q !== "off" && rm(A, {
                        linkPreviousTrace: Q,
                        consistentTraceSampling: mt
                    }), v.location) {
                    if (he) {
                        const w = M();
                        fm(A, {
                            name: v.location.pathname,
                            startTime: w ? w / 1e3 : void 0,
                            attributes: {
                                [ve]: "url",
                                [k]: "auto.pageload.browser"
                            }
                        })
                    }
                    jt && xr(({
                        to: w,
                        from: x
                    }) => {
                        if (x === void 0 && P ? .indexOf(w) !== -1) {
                            P = void 0;
                            return
                        }
                        P = void 0;
                        const B = un(w),
                            j = wt(A),
                            ne = j && I && mm(j, _e);
                        pm(A, {
                            name: B ? .pathname || v.location.pathname,
                            attributes: {
                                [ve]: "url",
                                [k]: "auto.navigation.browser"
                            }
                        }, {
                            url: w,
                            isRedirect: ne
                        })
                    })
                }
                p && tm(), o && lm(A, f, d, m, t), Wl(A, {
                    traceFetch: g,
                    traceXHR: _,
                    tracePropagationTargets: A.getOptions().tracePropagationTargets,
                    shouldCreateSpanForRequest: L,
                    enableHTTPTimings: Y,
                    onRequestSpanStart: Ve,
                    onRequestSpanEnd: Oe
                }), y && A.addIntegration(Ql())
            }
        }
    });

function fm(e, t, n) {
    e.emit("startPageLoadSpan", t, n), R().setTransactionName(t.name);
    const r = wt(e);
    return r && e.emit("afterStartPageLoadSpan", r), r
}

function pm(e, t, n) {
    const {
        url: r,
        isRedirect: s
    } = n || {};
    e.emit("beforeStartNavigationSpan", t, {
        isRedirect: s,
        url: r
    }), e.emit("startNavigationSpan", t, {
        isRedirect: s,
        url: r
    });
    const i = R();
    return i.setTransactionName(t.name), r && !s && i.setSDKProcessingMetadata({
        normalizedRequest: { ...fn(),
            url: r
        }
    }), wt(e)
}

function Gs(e) {
    return v.document ? .querySelector(`meta[name=${e}]`) ? .getAttribute("content") || void 0
}

function Vs(e) {
    return v.performance ? .getEntriesByType ? .("navigation")[0] ? .serverTiming ? .find(t => t.name === e) ? .description
}

function lm(e, t, n, r, s) {
    const i = v.document;
    let o;
    const a = () => {
        const c = "ui.action.click",
            u = wt(e);
        if (u) {
            const f = E(u).op;
            if (["navigation", "pageload"].includes(f)) {
                z && l.warn(`[Tracing] Did not create ${c} span because a pageload or navigation span is in progress.`);
                return
            }
        }
        if (o && (o.setAttribute(cn, "interactionInterrupted"), o.end(), o = void 0), !s.name) {
            z && l.warn(`[Tracing] Did not create ${c} transaction because _latestRouteName is missing.`);
            return
        }
        o = Ui({
            name: s.name,
            op: c,
            attributes: {
                [ve]: s.source || "url"
            }
        }, {
            idleTimeout: t,
            finalTimeout: n,
            childSpanTimeout: r
        })
    };
    i && addEventListener("click", a, {
        capture: !0
    })
}
var $o = "_sentry_idleSpan";

function wt(e) {
    return e[$o]
}

function Ys(e, t) {
    F(e, $o, t)
}
var Xs = 1.5;

function mm(e, t) {
    const n = E(e),
        r = qe();
    return !(r - n.start_timestamp > Xs || t && r - t <= Xs)
}
export {
    Kt as $, ad as A, _m as B, $p as C, Rr as D, Zd as E, Yu as F, ym as G, Xi as H, xu as I, Fi as J, hs as K, vm as L, sd as M, Be as N, v as O, ao as P, $ as Q, Yi as R, Xp as S, Qd as T, au as U, Ln as V, Sm as W, ac as X, $i as Y, V as Z, fl as _, em as a, k as at, Jp as b, Wl as c, T as ct, $l as d, G as dt, E as et, Dl as f, hr as ft, _l as g, vl as h, fm as i, ee as it, cd as j, Td as k, Bl as l, R as lt, Tl as m, rn as mt, um as n, Ma as nt, Ql as o, Pa as ot, Cl as p, He as pt, ke as q, pm as r, mi as rt, Do as s, ve as st, Em as t, rc as tt, bm as u, Ca as ut, el as v, rf as w, Kp as x, zp as y, ou as z
};