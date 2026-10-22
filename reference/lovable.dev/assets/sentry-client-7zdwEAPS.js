const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/sentryBrowserTracing-CZ96vr3h.js", "assets/app-shared-6CLVfi8w.js", "assets/rolldown-runtime-CSz5w8F5.js", "assets/vendor-tanstack-CIJxxCBL.js", "assets/vendor-react-Fx2PtaaM.js", "assets/vendor-sync-store-hJwz-_Wy.js", "assets/i18n-fn/_eager-BPNnp47q.js", "assets/vendor-util-bDkZRKmn.js", "assets/vendor-base-ui-field-BdT_EZJM.js", "assets/vendor-floating-ui-98f9kiPk.js", "assets/vendor-base-ui-eager-BVTTpYm_.js", "assets/flag-catalog-BJaXoOeP.js", "assets/vendor-es-toolkit-CQNapaF9.js", "assets/vendor-overlay-WeHoSqo7.js", "assets/vendor-schema-CyHzn7jr.js", "assets/vendor-firebase-core-bjLY_DoP.js", "assets/vendor-firebase-Dp4V3doB.js", "assets/vendor-tslib-CeDFfI6J.js", "assets/vendor-protobuf-BvDTVJFg.js", "assets/vendor-datefns-CALvQ3Vn.js", "assets/vendor-motion-Hvlv7m0n.js", "assets/app-shared-Wsr5ECzj.css", "assets/vendor-sentry-DMYBbyUZ.js", "assets/diagnosticsTracing-D4c7Ex7Y.js"]))) => i.map(i => d[i]);
import {
    AR as k,
    RP as A,
    Xk as v,
    Yk as L,
    bB as M,
    dC as x,
    eA as I,
    lC as F,
    pC as H,
    tA as j,
    vB as z,
    vM as U,
    wI as b,
    xp as q,
    yM as K
} from "./app-shared-6CLVfi8w.js";
import {
    G as w,
    P as B,
    W as h,
    ct as G,
    u as W,
    v as Y,
    z as Z
} from "./vendor-sentry-DMYBbyUZ.js";
import {
    kb as Q
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    n as X,
    o as V,
    t as P
} from "./diagnosticsTracing-D4c7Ex7Y.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "a9c2dfeb-5377-4f7d-87eb-cf8fd2ab552c", e._sentryDebugIdIdentifier = "sentry-dbid-a9c2dfeb-5377-4f7d-87eb-cf8fd2ab552c")
    })()
} catch {}
var J = /\/service\/hvtrs8%2F/;

function ee(e) {
    const r = e.request ? .url || "";
    return r ? !!(r.startsWith("file://") || J.test(r)) : !1
}

function re(e) {
    return globalThis.__BROWSER_BELOW_FLOOR__ !== !0 ? !1 : (e.exception ? .values ? ? []).some(r => r.type === "SyntaxError")
}
var te = [/download the react devtools/i, "ResizeObserver loop limit exceeded", /\[ RS SDK \].*Failed to get the ready status from integration/i, /\[ RS SDK \].*timeout.*occurred/i, /The play\(\) request was interrupted because.*media was paused/i, /^Load failed( \([^)]+\))?$/, /^Failed to fetch( \([^)]+\))?$/, /^(APIError: )?Workspace out of credits$/, /^(APIError: )?You already have access to this project$/, /^(AbortError: )?Transition was skipped(\. [A-Za-z() -]+)?$/, /^(AbortError: )?Skipping view transition because skipTransition\(\) was called\.?$/, /^(Error: )?(AbortError: )?The user aborted a request\.?$/, /^(AbortError: )?signal is aborted without reason$/, /^(Error: )?(UnknownError: )?Connection to Indexed Database server lost\. Refresh the page to try again$/, /^(Error: )?(UnknownError: )?Attempt to get (a record|records) from( the)? database without an in-progress transaction$/, /^(ReferenceError: )?[A-Za-z0-9_$]*_0x[0-9a-fA-F]+ is not defined$/, /^(Error: )?Cannot parse given Error object$/, /Evaluating a string as JavaScript violates the following Content Security Policy directive/, /Refused to evaluate a string as JavaScript because .*Content Security Policy/, /Identifier 'change_ua' has already been declared/, /An error has occurred while DLP was scanning outbound traffic/, /^(Error: )?Invalid call to runtime\.sendMessage\(\)\. Tab not found\.$/, /Object Not Found Matching Id:\d+, MethodName:\w+, ParamCount:\d+/],
    ne = [/^https?:\/\/([a-zA-Z0-9_.-]*\.)?lovable\.dev(\/|$)/, /^https?:\/\/([a-zA-Z0-9_.-]*\.)?lovable\.app(\/|$)/],
    ae = [/^(TimeoutError: )?signal timed out$/, /^(Error: )?(Google|Apple) sign-in cancelled$/, /^(Error: )?(InvalidStateError: )?Transition was aborted because of invalid state(\. [A-Za-z() -]+)?\.?$/, /^(TypeError: )?Failed to fetch dynamically imported module/, /^(TypeError: )?error loading dynamically imported module/, /^(TypeError: )?Importing a module script failed/, /^(SyntaxError: )?Importing module .* is not found/],
    oe = .05;

function ie(e, r) {
    const t = [];
    e.message && t.push(e.message);
    for (const n of e.exception ? .values ? ? []) n.value && t.push(n.value), n.type && n.value && t.push(`${n.type}: ${n.value}`);
    return t.some(n => r.some(i => i.test(n)))
}

function se(e, r = Math.random) {
    return e.level === "fatal" || !ie(e, ae) ? !1 : r() > oe
}
var ce = new Set(["missing_parameter", "invalid_parameter", "invalid_email", "invalid_request", "validation_error", "conflict", "invalid_gift_card", "gift_card_already_redeemed", "gift_card_voided", "gift_card_empty", "balance_limit_exceeded"]),
    ue = .01,
    le = new Set(["forbidden", "unauthorized", "session_revoked"]),
    de = .01;

function fe(e, r, t = Math.random) {
    return !(r instanceof k) || e.level === "fatal" ? e : ce.has(r.type) ? t() > ue ? null : (e.level = "warning", e) : le.has(r.type) ? t() > de ? null : (e.level = "warning", e) : e
}
var pe = new Set(["22001", "22003", "22007", "22008", "22P02", "23502", "23503", "23505", "23514", "23P01", "42601", "42701", "42703", "42704", "42702", "42804", "42883", "42P01", "42P07", "42710", "22012", "P0001"]),
    _e = .01;

function Ee(e, r, t = Math.random) {
    if (!(r instanceof K)) return e;
    const n = r.sqlState,
        i = n ? `${r.operation} (SQLSTATE ${n})` : `${r.operation} (unparsed SQL error)`;
    e.message && (e.message = i);
    for (const s of e.exception ? .values ? ? []) s.value && (s.value = i);
    if (e.fingerprint || (e.fingerprint = ["sql-state-error", r.operation, n ? ? "unparsed"]), !n || e.level === "fatal") return e;
    if (pe.has(n)) {
        if (t() > _e) return null;
        e.level = "warning"
    }
    return e
}
var O = "auth/network-request-failed",
    ge = .1;

function he(e, r) {
    return r ? .code === O || (e.exception ? .values ? ? []).some(t => t.type === "FirebaseError" && t.value ? .includes(O))
}

function ye(e, r, t = Math.random) {
    if (!he(e, r)) return e;
    const n = e.exception ? .values ? .every(i => i.mechanism ? .handled !== !1) ? ? !0;
    return e.fingerprint || (e.fingerprint = ["firebase-auth-network-request-failed", n ? "handled" : "unhandled"]), n ? e : t() > ge ? null : (e.level = "warning", e)
}
var me = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi,
    Te = /\/[a-z]+(?:_[a-z]+)*_[0-9a-hjkmnp-tv-z]{26}(?=\/|$)/g;

function Re(e) {
    if (!e) return null;
    let r;
    try {
        r = new URL(e).pathname
    } catch {
        return null
    }
    return r.replace(me, ":id").replace(Te, "/:id").replace(/\/\d+(?=\/|$)/g, "/:id")
}

function Se(e, r) {
    if (!U(r)) return;
    const t = `http_${r.status}`,
        n = Re(r.response ? .url);
    e.fingerprint = ["{{ default }}", t, r.httpMethod, ...n ? [n] : []], e.tags = { ...e.tags,
        api_fetch_status: t,
        ...n && {
            api_fetch_path: n
        }
    }
}

function Ae(e, r) {
    if (e.fingerprint || !(r instanceof k)) return;
    const t = r.status === void 0 ? "http_unknown" : `http_${r.status}`;
    e.fingerprint = ["{{ default }}", r.type, t], e.tags = { ...e.tags,
        api_error_type: r.type,
        api_error_status: t
    }
}
var be = /\/assets\/(?:[A-Za-z0-9_.-]+\/)*([A-Za-z0-9_.-]+)\.(?:js|css)\b/,
    we = /'[^']*?([A-Za-z0-9_.-]+-[A-Za-z0-9_-]{8}\d*)\.(?:js|css)'/;

function Pe(e, r) {
    if (e.fingerprint || !I(r)) return;
    const t = r instanceof Error ? r.message : "",
        n = be.exec(t) ? ? we.exec(t),
        i = n ? n[1].replace(/-[A-Za-z0-9_-]{8}\d*$/, "") : "no-asset-url";
    e.fingerprint = [j(r) ? "module-link-error" : "chunk-load-error"], e.tags = { ...e.tags,
        chunk_name: i
    }
}
var Oe = /^Upload failed with status (\d+)$/;

function De(e, r) {
    if (e.fingerprint || !(r instanceof Error) || r.name !== "Error") return;
    const t = Oe.exec(r.message);
    if (!t) return;
    const n = `http_${t[1]}`;
    e.fingerprint = ["file-upload-put-error", n], e.tags = { ...e.tags,
        upload_put_status: n
    }
}
var ke = 4096,
    Ie = 262144,
    Ue = /https?:\/\/[^\s"'`\\)]{4,250}/g;

function $e(e) {
    let r = e,
        t = 0;
    try {
        for (; t < 5 && typeof r == "function";) {
            const n = r.__sentry_original__;
            if (typeof n != "function") break;
            r = n, t++
        }
    } catch {}
    return {
        fn: r,
        sentryUnwrapped: t
    }
}

function Ne() {
    if (typeof window > "u" || typeof window.fetch != "function") return null;
    const {
        fn: e,
        sentryUnwrapped: r
    } = $e(window.fetch);
    if (typeof e != "function") return null;
    let t;
    try {
        t = Function.prototype.toString.call(e)
    } catch {
        try {
            t = String(e)
        } catch {
            return null
        }
    }
    return {
        source: t,
        native: t.includes("[native code]"),
        sentryUnwrapped: r
    }
}

function Ce(e, r) {
    if (!U(r)) return;
    const t = r.response;
    if (!t || t.url !== "") return;
    e.tags = { ...e.tags,
        synthetic_response: "true"
    };
    const n = Ne();
    if (!n) return;
    const i = [...new Set(n.source.slice(0, Ie).match(Ue) ? ? [])];
    e.contexts = { ...e.contexts,
        fetch_hook: {
            native_tostring: n.native,
            sentry_unwrapped: n.sentryUnwrapped,
            source_length: n.source.length,
            source: n.source.slice(0, ke),
            ...i.length > 0 && {
                urls: i.slice(0, 10)
            }
        }
    }
}

function ve(e, r, t = v, n = L) {
    if (!I(r)) return;
    e.tags = { ...e.tags,
        chunk_fetch_status: t(r)
    };
    const i = n(r);
    i && (e.tags = { ...e.tags,
        chunk_fetch_code: i.code,
        chunk_fetch_protocol: i.protocol,
        chunk_fetch_delivery: i.delivery
    })
}
var Le = /\[(?:aria-label|name|title|alt)=/,
    Me = ["url", "http.url", "url.full"],
    xe = ["http.query", "http.fragment"],
    Fe = [
        [/\/invite-links\/[^/?#\s]+/g, "/invite-links/$id"],
        [/\/share-links\/[^/?#\s]+/g, "/share-links/$id"],
        [/\/project-transfer-requests\/[^/?#\s]+\/[^/?#\s]+/g, "/project-transfer-requests/$projectId/$transferId"],
        [/\/redeem\/[^/?#\s]+/g, "/redeem/$code"]
    ];

function $(e) {
    let r = e;
    for (const [t, n] of Fe) r = r.replace(t, n);
    return r
}

function He(e) {
    const r = e.search(Le);
    return r === -1 ? e : e.slice(0, r)
}

function R(e) {
    const r = e.search(/[?#]/);
    return r === -1 ? e : e.slice(0, r)
}

function je(e) {
    return $(R(e))
}

function ze(e) {
    e.op ? .startsWith("ui.interaction") && e.description && (e.description = He(e.description)), e.op ? .startsWith("http.") && e.description && (e.description = $(e.description));
    const r = e.data;
    if (r) {
        for (const t of xe) delete r[t];
        for (const t of Me) {
            const n = r[t];
            typeof n == "string" && (r[t] = je(n))
        }
    }
    return e
}

function N(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
var C = b.upgradeLink.slice(0, b.upgradeLink.indexOf("/$")),
    qe = C.replace(/^\//, ""),
    Ke = new RegExp(`${N(C)}\\/[^/?#\\s"'<>]+\\/[^/?#\\s"'<>]+`, "gi"),
    Be = /(upgrade_conversion_token=)[^&#\s"'<>]+/gi,
    Ge = new RegExp(`%(?:25){0,4}2f${N(qe)}%(?:25){0,4}2f[^%&#\\s"'<>]+%(?:25){0,4}2f[^%&#\\s"'<>]+`, "gi"),
    We = /upgrade_conversion_token%(?:25){0,4}3d[^&#\s"'<>]+/gi,
    y = "%(?:25){0,4}(?:3f|26|23)",
    Ye = new RegExp(`(^|[?&#]|${y})((?:(?!${y})[^=&#?\\s"'<>])+?)(=|%(?:25){0,4}3d)(?:(?!${y})[^?&#\\s"'<>])+`, "gi"),
    Ze = new Set(["code", "state"]),
    Qe = 5;

function Xe(e) {
    let r = e;
    for (let t = 0; t < Qe; t += 1) try {
        const n = decodeURIComponent(r);
        if (n === r) break;
        r = n
    } catch {
        break
    }
    return r
}
var Ve = /^(?:[a-z][a-z\d+.-]*:\/\/|\/)\S+$/i,
    Je = 8;

function er(e, r) {
    if (!Ve.test(e)) return e;
    try {
        const t = /^[a-z][a-z\d+.-]*:/i.test(e),
            n = new URL(e, r),
            i = H(e, r);
        return !i || i.toString() === n.toString() ? e : t ? i.toString() : `${i.pathname}${i.search}${i.hash}`
    } catch {
        return e
    }
}

function rr(e, r) {
    return er(e, r).replace(Ke, F).replace(Be, "$1[redacted]").replace(Ge, "[redacted upgrade link]").replace(We, "upgrade_conversion_token=[redacted]").replace(Ye, (t, n, i, s) => {
        const a = Xe(i).toLowerCase();
        return !x(a) || n === "" && Ze.has(a) ? t : `${n}${i}${s}[redacted]`
    })
}

function _(e, r, t = 0, n = new WeakSet) {
    if (typeof e == "string") return rr(e, r);
    if (e === null || typeof e != "object") return e;
    if (t >= Je) return "[Truncated]";
    if (n.has(e)) return "[Circular]";
    if (e instanceof Date) return e;
    n.add(e);
    let i;
    if (Array.isArray(e)) i = e.map(s => _(s, r, t + 1, n));
    else {
        const s = Object.getPrototypeOf(e);
        i = s === Object.prototype || s === null ? Object.fromEntries(Object.entries(e).map(([a, o]) => [a, _(o, r, t + 1, n)])) : e
    }
    return n.delete(e), i
}

function tr(e, r) {
    return _(e, r)
}

function D(e, r) {
    return _(e, r)
}
var nr = 3e4,
    m, T;

function ar(e, r) {
    if (!(e instanceof Error)) return;
    const t = new Error(e.message);
    t.name = `React ErrorBoundary ${e.name}`, t.stack = r;
    const n = new WeakSet([e]);
    let i = e;
    for (; typeof i.cause == "object" && i.cause !== null && !n.has(i.cause);) n.add(i.cause), i = i.cause;
    i.cause != null && (t.cause = i.cause), i.cause = t
}

function or() {
    globalThis.o11y = {
        captureException: (a, o) => {
            a == null && (a = new Error(`captureException called with empty value: ${a}`));
            let u = o ? .fingerprint;
            if (typeof a == "object" && !(a instanceof Error)) {
                const d = a,
                    f = ["code", "message", "status"].map(p => d[p]).filter(p => typeof p == "string" || typeof p == "number"),
                    g = new Error(f.length > 0 ? f.join(" ") : `object with keys: ${Object.keys(d).join(", ")||"none"}`);
                g.name = "NonErrorRejection", u ? ? = ["non-error-rejection", g.message], a = g
            }
            const c = a;
            o ? .componentStack && ar(c, o.componentStack);
            const S = o ? .type || c ? .type || c ? .name,
                l = { ...o ? .context
                };
            c ? .details && (typeof c.details != "string" ? l.details = JSON.stringify(c.details) : l.details = c.details), o ? .level && (l.level = o.level), o ? .location && (l.location = o.location);
            const E = o ? .level || "error";
            (E === "fatal" || E === "error" || o ? .forceReport === !0) && Z(c, { ...o ? .mechanism && {
                    mechanism: o.mechanism
                },
                captureContext : {
                    level: E,
                    ...u && {
                        fingerprint: u
                    },
                    tags: { ...S && {
                            type: S
                        },
                        ...o ? .tags
                    },
                    contexts: { ...o ? .contexts && Object.fromEntries(Object.entries(o.contexts).map(([d, f]) => [d, A(f) ? ? {}])),
                        custom : A(l) ? ? {}
                    }
                }
            })
        },
        setUser: a => {
            m = void 0, T = a.id, w({
                id: a.id
            })
        },
        setTag: (a, o) => {
            h(a, o)
        },
        getReportSignals: () => ({
            eventId: m,
            traceId: B()["sentry-trace"] ? .split("-")[0] || void 0
        })
    }, globalThis.__o11yPreInitCleanup ? .(), globalThis.__o11yPreInitCleanup = void 0, W({
        dsn: "https://58ff8fddcbe1303f19bc19fbfed46f0f@o4506071217143808.ingest.us.sentry.io/4506071220944896",
        release: M(),
        environment: z() ? ? "production",
        enabled: !0,
        sampleRate: 1,
        tracesSampler: () => V(),
        beforeSendSpan: ze,
        ignoreSpans: [{
            op: /^resource\./
        }],
        integrations: a => [...a.filter(o => o.name !== "Breadcrumbs"), Y({
            fetch: !0,
            console: !0,
            dom: !0
        })],
        ignoreErrors: te,
        allowUrls: ne,
        beforeBreadcrumb(a) {
            return tr(a, window.location.origin)
        },
        beforeSendTransaction(a) {
            a.breadcrumbs = void 0, a.request ? .url && (a.request.url = R(a.request.url));
            const o = a.request ? .headers ? .Referer;
            return o && a.request ? .headers && (a.request.headers.Referer = R(o)), D(a, window.location.origin)
        },
        beforeSend(a, o) {
            if (a = D(a, window.location.origin), ee(a) || re(a) || se(a) || !fe(a, o.originalException)) return null;
            try {
                if (!Ee(a, o.originalException)) return null
            } catch {
                return null
            }
            if (!ye(a, o.originalException)) return null;
            try {
                ve(a, o.originalException)
            } catch {}
            try {
                Se(a, o.originalException)
            } catch {}
            try {
                Ae(a, o.originalException)
            } catch {}
            try {
                Pe(a, o.originalException)
            } catch {}
            try {
                De(a, o.originalException)
            } catch {}
            try {
                Ce(a, o.originalException)
            } catch {}
            try {
                const u = q();
                u ? .projectId && (a.tags = { ...a.tags,
                    lovable_project_id: u.projectId
                })
            } catch {}
            return a
        }
    }), G() ? .on("afterSendEvent", (a, o) => {
        o ? .statusCode !== void 0 && o.statusCode >= 200 && o.statusCode < 300 && !a.type && a.event_id && a.user ? .id === T && (m = a.event_id)
    }), h("framework", "tanstack-start");
    let e = !1,
        r = !1;
    const t = a => {
        a.level === "off" || e || (e = !0, Q(() =>
            import ("./sentryBrowserTracing-CZ96vr3h.js").then(o => o.addBrowserTracing(a.level)), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23])).catch(o => {
            e = !1, globalThis.o11y.captureException(o, {
                type: "diagnostics_tracing_setup_error",
                location: "ensureBrowserTracing",
                level: "warning",
                forceReport: !0
            }), !r && (r = !0, window.setTimeout(() => t(P()), nr))
        }))
    };
    X(t), t(P());
    const n = globalThis.__pendingO11yUser;
    n && (T = n.id, w({
        id: n.id
    }), globalThis.__pendingO11yUser = void 0);
    const i = globalThis.__pendingO11yTags;
    if (i) {
        for (const [a, o] of i) h(a, o);
        globalThis.__pendingO11yTags = void 0
    }
    const s = globalThis.__pendingO11yExceptions;
    if (s) {
        for (const [a, o] of s) try {
            globalThis.o11y.captureException(a, o)
        } catch {}
        globalThis.__pendingO11yExceptions = void 0
    }
}
typeof window < "u" && or();