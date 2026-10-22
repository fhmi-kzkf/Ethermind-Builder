import {
    o as $t
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as oe,
    n as se,
    r as ie
} from "./vendor-react-Fx2PtaaM.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new t.Error().stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "8773e769-a884-400b-b000-cf358ad0051a", t._sentryDebugIdIdentifier = "sentry-dbid-8773e769-a884-400b-b000-cf358ad0051a")
    })()
} catch {}
var r = $t(oe()),
    Je = ie();

function St() {
    return St = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n)({}).hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }, St.apply(null, arguments)
}
var Ft = ["shift", "alt", "meta", "mod", "ctrl"],
    le = {
        esc: "escape",
        return: "enter",
        ".": "period",
        ",": "comma",
        "-": "slash",
        " ": "space",
        "`": "backquote",
        "#": "backslash",
        "+": "bracketright",
        ShiftLeft: "shift",
        ShiftRight: "shift",
        AltLeft: "alt",
        AltRight: "alt",
        MetaLeft: "meta",
        MetaRight: "meta",
        OSLeft: "meta",
        OSRight: "meta",
        ControlLeft: "ctrl",
        ControlRight: "ctrl"
    };

function tt(t) {
    return (t && le[t] || t || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
}

function de(t) {
    return Ft.includes(t)
}

function kt(t, e) {
    return e === void 0 && (e = ","), t.split(e)
}

function Tt(t, e, n) {
    e === void 0 && (e = "+");
    var o = t.toLocaleLowerCase().split(e).map(function(p) {
            return tt(p)
        }),
        u = {
            alt: o.includes("alt"),
            ctrl: o.includes("ctrl") || o.includes("control"),
            shift: o.includes("shift"),
            meta: o.includes("meta"),
            mod: o.includes("mod")
        },
        f = o.filter(function(p) {
            return !Ft.includes(p)
        });
    return St({}, u, {
        keys: f,
        description: n,
        hotkey: t
    })
}(function() {
    typeof document < "u" && (document.addEventListener("keydown", function(t) {
        t.key !== void 0 && Vt([tt(t.key), tt(t.code)])
    }), document.addEventListener("keyup", function(t) {
        t.key !== void 0 && Wt([tt(t.key), tt(t.code)])
    })), typeof window < "u" && window.addEventListener("blur", function() {
        et.clear()
    })
})();
var et = new Set;

function Dt(t) {
    return Array.isArray(t)
}

function ce(t, e) {
    return e === void 0 && (e = ","), (Dt(t) ? t : t.split(e)).every(function(n) {
        return et.has(n.trim().toLowerCase())
    })
}

function Vt(t) {
    var e = Array.isArray(t) ? t : [t];
    et.has("meta") && et.forEach(function(n) {
        return !de(n) && et.delete(n.toLowerCase())
    }), e.forEach(function(n) {
        return et.add(n.toLowerCase())
    })
}

function Wt(t) {
    var e = Array.isArray(t) ? t : [t];
    t === "meta" ? et.clear() : e.forEach(function(n) {
        return et.delete(n.toLowerCase())
    })
}

function ue(t, e, n) {
    (typeof n == "function" && n(t, e) || n === !0) && t.preventDefault()
}

function fe(t, e, n) {
    return typeof n == "function" ? n(t, e) : n === !0 || n === void 0
}

function me(t) {
    return Xt(t, ["input", "textarea", "select"])
}

function Xt(t, e) {
    e === void 0 && (e = !1);
    var n = t.target,
        o = t.composed,
        u = null;
    return pe(n) && o ? u = t.composedPath()[0] && t.composedPath()[0].tagName : u = n && n.tagName, Dt(e) ? !!(u && e && e.some(function(f) {
        var p;
        return f.toLowerCase() === ((p = u) == null ? void 0 : p.toLowerCase())
    })) : !!(u && e && e)
}

function pe(t) {
    return !!t.tagName && !t.tagName.startsWith("-") && t.tagName.includes("-")
}

function he(t, e) {
    return t.length === 0 && e ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), !0) : e ? t.some(function(n) {
        return e.includes(n)
    }) || t.includes("*") : !0
}
var ge = function(e, n, o) {
        o === void 0 && (o = !1);
        var u = n.alt,
            f = n.meta,
            p = n.mod,
            h = n.shift,
            d = n.ctrl,
            s = n.keys,
            x = e.key,
            a = e.code,
            S = e.ctrlKey,
            i = e.metaKey,
            C = e.shiftKey,
            O = e.altKey,
            B = tt(a),
            c = x.toLowerCase();
        if (!(s != null && s.includes(B)) && !(s != null && s.includes(c)) && !["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(B)) return !1;
        if (!o) {
            if (u === !O && c !== "alt" || h === !C && c !== "shift") return !1;
            if (p) {
                if (!i && !S) return !1
            } else if (f === !i && c !== "meta" && c !== "os" || d === !S && c !== "ctrl" && c !== "control") return !1
        }
        return s && s.length === 1 && (s.includes(c) || s.includes(B)) ? !0 : s ? ce(s) : !s
    },
    ve = (0, r.createContext)(void 0),
    ye = function() {
        return (0, r.useContext)(ve)
    };

function Ut(t, e) {
    return t && e && typeof t == "object" && typeof e == "object" ? Object.keys(t).length === Object.keys(e).length && Object.keys(t).reduce(function(n, o) {
        return n && Ut(t[o], e[o])
    }, !0) : t === e
}
var be = (0, r.createContext)({
        hotkeys: [],
        enabledScopes: [],
        toggleScope: function() {},
        enableScope: function() {},
        disableScope: function() {}
    }),
    we = function() {
        return (0, r.useContext)(be)
    };

function xe(t) {
    var e = (0, r.useRef)(void 0);
    return Ut(e.current, t) || (e.current = t), e.current
}
var jt = function(e) {
        e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
    },
    Ee = typeof window < "u" ? r.useLayoutEffect : r.useEffect;

function ta(t, e, n, o) {
    var u = (0, r.useState)(null),
        f = u[0],
        p = u[1],
        h = (0, r.useRef)(!1),
        d = n instanceof Array ? o instanceof Array ? void 0 : o : n,
        s = Dt(t) ? t.join(d ? .splitKey) : t,
        x = n instanceof Array ? n : o instanceof Array ? o : void 0,
        a = (0, r.useCallback)(e, x ? ? []),
        S = (0, r.useRef)(a);
    x ? S.current = a : S.current = e;
    var i = xe(d),
        C = we().enabledScopes,
        O = ye();
    return Ee(function() {
        if (!(i ? .enabled === !1 || !he(C, i ? .scopes))) {
            var B = function(v, V) {
                    var j;
                    if (V === void 0 && (V = !1), !(me(v) && !Xt(v, i ? .enableOnFormTags))) {
                        if (f !== null) {
                            var K = f.getRootNode();
                            if ((K instanceof Document || K instanceof ShadowRoot) && K.activeElement !== f && !f.contains(K.activeElement)) {
                                jt(v);
                                return
                            }
                        }(j = v.target) != null && j.isContentEditable && !(i != null && i.enableOnContentEditable) || kt(s, i ? .splitKey).forEach(function(W) {
                            var nt, z = Tt(W, i ? .combinationKey);
                            if (ge(v, z, i ? .ignoreModifiers) || (nt = z.keys) != null && nt.includes("*")) {
                                if (i != null && i.ignoreEventWhen != null && i.ignoreEventWhen(v) || V && h.current) return;
                                if (ue(v, z, i ? .preventDefault), !fe(v, z, i ? .enabled)) {
                                    jt(v);
                                    return
                                }
                                S.current(v, z), V || (h.current = !0)
                            }
                        })
                    }
                },
                c = function(v) {
                    v.key !== void 0 && (Vt(tt(v.code)), (i ? .keydown === void 0 && i ? .keyup !== !0 || i != null && i.keydown) && B(v))
                },
                at = function(v) {
                    v.key !== void 0 && (Wt(tt(v.code)), h.current = !1, i != null && i.keyup && B(v, !0))
                },
                A = f || d ? .document || document;
            return A.addEventListener("keyup", at, d ? .eventListenerOptions), A.addEventListener("keydown", c, d ? .eventListenerOptions), O && kt(s, i ? .splitKey).forEach(function(R) {
                    return O.addHotkey(Tt(R, i ? .combinationKey, i ? .description))
                }),
                function() {
                    A.removeEventListener("keyup", at, d ? .eventListenerOptions), A.removeEventListener("keydown", c, d ? .eventListenerOptions), O && kt(s, i ? .splitKey).forEach(function(R) {
                        return O.removeHotkey(Tt(R, i ? .combinationKey, i ? .description))
                    })
                }
        }
    }, [f, s, i, C]), p
}
var _t = $t(se(), 1);

function ke(t) {
    if (!t || typeof document > "u") return;
    let e = document.head || document.getElementsByTagName("head")[0],
        n = document.createElement("style");
    n.type = "text/css", e.appendChild(n), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t))
}
var Te = t => {
        switch (t) {
            case "success":
                return De;
            case "info":
                return Ne;
            case "warning":
                return Ce;
            case "error":
                return Ie;
            default:
                return null
        }
    },
    Se = Array(12).fill(0),
    _e = ({
        visible: t,
        className: e
    }) => r.createElement("div", {
        className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "),
        "data-visible": t
    }, r.createElement("div", {
        className: "sonner-spinner"
    }, Se.map((n, o) => r.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${o}`
    })))),
    De = r.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
        "aria-hidden": "true"
    }, r.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    Ce = r.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20",
        "aria-hidden": "true"
    }, r.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    Ne = r.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
        "aria-hidden": "true"
    }, r.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    Ie = r.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
        "aria-hidden": "true"
    }, r.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    Be = r.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true"
    }, r.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), r.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })),
    Me = () => {
        const [t, e] = r.useState(document.hidden);
        return r.useEffect(() => {
            const n = () => {
                e(document.hidden)
            };
            return document.addEventListener("visibilitychange", n), () => document.removeEventListener("visibilitychange", n)
        }, []), t
    },
    Ae = 1,
    Re = 100,
    Kt = t => {
        var e;
        return typeof t ? .id == "number" || (t == null || (e = t.id) == null ? void 0 : e.length) > 0 ? t.id : Ae++
    },
    Le = class {
        constructor() {
            this.subscribe = t => (this.subscribers.push(t), this.getActiveToasts().forEach(e => t(e)), () => {
                const e = this.subscribers.indexOf(t);
                this.subscribers.splice(e, 1)
            }), this.publish = t => {
                this.subscribers.forEach(e => e(t))
            }, this.addToast = t => {
                this.publish(t), this.toasts = [...this.toasts, t], this.trimHistory()
            }, this.trimHistory = () => {
                let t = this.toasts.length - Re;
                t <= 0 || (this.toasts = this.toasts.filter(e => t > 0 && this.dismissedToasts.has(e.id) ? (this.dismissedToasts.delete(e.id), t--, !1) : !0))
            }, this.create = t => {
                const {
                    message: e,
                    ...n
                } = t, o = Kt(t), u = this.pendingDismissals.get(o);
                u !== void 0 && (cancelAnimationFrame(u), this.pendingDismissals.delete(o), this.dismissedToasts.delete(o));
                const f = this.dismissedToasts.has(o),
                    p = t.dismissible === void 0 ? !0 : t.dismissible;
                return f && (this.dismissedToasts.delete(o), this.toasts = this.toasts.filter(h => h.id !== o)), !f && this.toasts.find(h => h.id === o) ? this.toasts = this.toasts.map(h => h.id === o ? (this.publish({ ...h,
                    ...t,
                    id: o,
                    title: e
                }), { ...h,
                    ...t,
                    id: o,
                    dismissible: p,
                    title: e
                }) : h) : this.addToast({
                    title: e,
                    ...n,
                    dismissible: p,
                    id: o
                }), o
            }, this.dismiss = t => {
                if (t == null) return this.getActiveToasts().forEach(n => {
                    this.dismissedToasts.add(n.id), this.subscribers.forEach(o => o({
                        id: n.id,
                        dismiss: !0
                    }))
                }), t;
                this.dismissedToasts.add(t);
                const e = this.pendingDismissals.get(t);
                return e !== void 0 && cancelAnimationFrame(e), this.pendingDismissals.set(t, requestAnimationFrame(() => {
                    this.pendingDismissals.delete(t), this.subscribers.forEach(n => n({
                        id: t,
                        dismiss: !0
                    }))
                })), t
            }, this.message = (t, e) => this.create({ ...e,
                message: t,
                type: void 0
            }), this.error = (t, e) => this.create({ ...e,
                message: t,
                type: "error"
            }), this.success = (t, e) => this.create({ ...e,
                type: "success",
                message: t
            }), this.info = (t, e) => this.create({ ...e,
                type: "info",
                message: t
            }), this.warning = (t, e) => this.create({ ...e,
                type: "warning",
                message: t
            }), this.loading = (t, e) => this.create({ ...e,
                type: "loading",
                message: t
            }), this.promise = (t, e) => {
                if (!e) return;
                let n;
                e.loading !== void 0 && (n = this.create({ ...e,
                    promise: t,
                    type: "loading",
                    message: e.loading,
                    description: typeof e.description != "function" ? e.description : void 0
                }));
                const o = Promise.resolve(t instanceof Function ? t() : t);
                let u = n !== void 0,
                    f;
                const p = o.then(async d => {
                        if (f = ["resolve", d], r.isValidElement(d)) u = !1, this.create({
                            id: n,
                            type: "default",
                            message: d
                        });
                        else if (Pe(d) && !d.ok) {
                            u = !1;
                            const s = typeof e.error == "function" ? await e.error(`HTTP error! status: ${d.status}`) : e.error,
                                x = typeof e.description == "function" ? await e.description(`HTTP error! status: ${d.status}`) : e.description,
                                a = typeof s == "object" && !r.isValidElement(s) ? s : {
                                    message: s
                                };
                            this.create({
                                id: n,
                                type: "error",
                                description: x,
                                ...a
                            })
                        } else if (d instanceof Error) {
                            u = !1;
                            const s = typeof e.error == "function" ? await e.error(d) : e.error,
                                x = typeof e.description == "function" ? await e.description(d) : e.description,
                                a = typeof s == "object" && !r.isValidElement(s) ? s : {
                                    message: s
                                };
                            this.create({
                                id: n,
                                type: "error",
                                description: x,
                                ...a
                            })
                        } else if (e.success !== void 0) {
                            u = !1;
                            const s = typeof e.success == "function" ? await e.success(d) : e.success,
                                x = typeof e.description == "function" ? await e.description(d) : e.description,
                                a = typeof s == "object" && !r.isValidElement(s) ? s : {
                                    message: s
                                };
                            this.create({
                                id: n,
                                type: "success",
                                description: x,
                                ...a
                            })
                        }
                    }).catch(async d => {
                        if (f = ["reject", d], e.error !== void 0) {
                            u = !1;
                            const s = typeof e.error == "function" ? await e.error(d) : e.error,
                                x = typeof e.description == "function" ? await e.description(d) : e.description,
                                a = typeof s == "object" && !r.isValidElement(s) ? s : {
                                    message: s
                                };
                            this.create({
                                id: n,
                                type: "error",
                                description: x,
                                ...a
                            })
                        }
                    }).finally(() => {
                        u && (this.dismiss(n), n = void 0), e.finally == null || e.finally.call(e)
                    }),
                    h = () => new Promise((d, s) => p.then(() => f[0] === "reject" ? s(f[1]) : d(f[1])).catch(s));
                return typeof n != "string" && typeof n != "number" ? {
                    unwrap: h
                } : Object.assign(n, {
                    unwrap: h
                })
            }, this.custom = (t, e) => {
                const n = Kt(e);
                return this.create({ ...e,
                    jsx: t(n),
                    id: n,
                    type: void 0
                }), n
            }, this.getActiveToasts = () => this.toasts.filter(t => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set, this.pendingDismissals = new Map
        }
    },
    D = new Le,
    He = (t, e) => D.message(t, e),
    Pe = t => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number",
    Oe = He,
    je = () => D.toasts,
    Ke = () => D.getActiveToasts(),
    ea = Object.assign(Oe, {
        success: D.success,
        info: D.info,
        warning: D.warning,
        error: D.error,
        custom: D.custom,
        message: D.message,
        promise: D.promise,
        dismiss: D.dismiss,
        loading: D.loading
    }, {
        getHistory: je,
        getToasts: Ke
    });
ke("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");

function yt(t) {
    return t.label !== void 0
}
var ze = 3,
    Ye = "24px",
    $e = "16px",
    zt = 4e3,
    Fe = 356,
    Ve = 14,
    We = 45,
    Xe = 200;

function F(...t) {
    return t.filter(Boolean).join(" ")
}

function Ue(t) {
    const [e, n] = t.split("-"), o = [];
    return e && o.push(e), n && o.push(n), o
}
var qe = t => {
    var e, n, o, u, f, p, h, d, s;
    const {
        invert: x,
        toast: a,
        unstyled: S,
        interacting: i,
        setHeights: C,
        visibleToasts: O,
        heights: B,
        index: c,
        toasts: at,
        expanded: A,
        removeToast: R,
        defaultRichColors: v,
        closeButton: V,
        style: j,
        cancelButtonStyle: K,
        actionButtonStyle: W,
        className: nt = "",
        descriptionClassName: z = "",
        duration: lt,
        position: dt,
        gap: X,
        expandByDefault: ct,
        classNames: g,
        icons: L,
        closeButtonAriaLabel: U = "Close toast"
    } = t, [M, ut] = r.useState(null), [q, Q] = r.useState(null), [rt, m] = r.useState(!1), [y, b] = r.useState(!1), [N, Z] = r.useState(!1), [w, bt] = r.useState(!1), [ht, ft] = r.useState(!1), [mt, wt] = r.useState(0), [qt, Ct] = r.useState(0), pt = r.useRef(a.duration || lt || zt), Nt = r.useRef(null), G = r.useRef(null), Gt = c === 0, Qt = c + 1 <= O, _ = a.type, It = _ ? ? "default", ot = a.dismissible !== !1, Zt = a.className || "", Jt = a.descriptionClassName || "", gt = r.useMemo(() => B.findIndex(l => l.toastId === a.id) || 0, [B, a.id]), te = r.useMemo(() => {
        var l;
        return (l = a.closeButton) != null ? l : V
    }, [a.closeButton, V]), Bt = r.useMemo(() => a.duration || lt || zt, [a.duration, lt]), xt = r.useRef(0), st = r.useRef(0), Mt = r.useRef(0), it = r.useRef(null), [ee, ae] = dt.split("-"), At = r.useMemo(() => B.reduce((l, k, T) => T >= gt ? l : l + k.height, 0), [B, gt]), Rt = Me(), Y = r.useMemo(() => {
        var l;
        return (l = t.swipeDirections) != null ? l : Ue(dt)
    }, [t.swipeDirections, dt]), ne = a.invert || x, Et = _ === "loading";
    st.current = r.useMemo(() => gt * X + At, [gt, At]), r.useEffect(() => {
        pt.current = Bt
    }, [Bt]), r.useEffect(() => {
        m(!0)
    }, []), r.useEffect(() => {
        const l = G.current;
        if (l) {
            const k = l.getBoundingClientRect().height;
            return Ct(k), C(T => [{
                toastId: a.id,
                height: k,
                position: a.position
            }, ...T]), () => C(T => T.filter(I => I.toastId !== a.id))
        }
    }, [C, a.id]), r.useLayoutEffect(() => {
        if (!rt) return;
        const l = G.current,
            k = l.style.height;
        l.style.height = "auto";
        const T = l.getBoundingClientRect().height;
        l.style.height = k, Ct(T), C(I => I.find(E => E.toastId === a.id) ? I.map(E => E.toastId === a.id ? { ...E,
            height: T
        } : E) : [{
            toastId: a.id,
            height: T,
            position: a.position
        }, ...I])
    }, [rt, a.title, a.description, C, a.id, a.jsx, a.action, a.cancel]);
    const J = r.useCallback(() => {
        b(!0), wt(st.current), C(l => l.filter(k => k.toastId !== a.id)), setTimeout(() => {
            R(a)
        }, Xe)
    }, [a, R, C, st]);
    r.useEffect(() => {
        if (a.promise && _ === "loading" || a.duration === 1 / 0 || a.type === "loading") return;
        let l;
        return A || i || Rt ? (() => {
            if (Mt.current < xt.current) {
                const I = new Date().getTime() - xt.current;
                pt.current = pt.current - I
            }
            Mt.current = new Date().getTime()
        })() : pt.current !== 1 / 0 && (xt.current = new Date().getTime(), l = setTimeout(() => {
            a.onAutoClose == null || a.onAutoClose.call(a, a), J()
        }, pt.current)), () => clearTimeout(l)
    }, [A, i, a, _, Rt, J]), r.useEffect(() => {
        a.delete && (J(), a.onDismiss == null || a.onDismiss.call(a, a))
    }, [J, a.delete]);

    function Lt() {
        var l;
        if (L ? .loading) {
            var k;
            return r.createElement("div", {
                className: F(g ? .loader, a == null || (k = a.classNames) == null ? void 0 : k.loader, "sonner-loader"),
                "data-visible": _ === "loading"
            }, L.loading)
        }
        return r.createElement(_e, {
            className: F(g ? .loader, a == null || (l = a.classNames) == null ? void 0 : l.loader),
            visible: _ === "loading"
        })
    }
    const re = a.icon || L ? .[_] || Te(_);
    var Ht, Pt;
    return r.createElement("li", {
        tabIndex: 0,
        ref: G,
        className: F(nt, Zt, g ? .toast, a == null || (e = a.classNames) == null ? void 0 : e.toast, g ? .[It], a == null || (n = a.classNames) == null ? void 0 : n[It]),
        "data-sonner-toast": "",
        "data-rich-colors": (Ht = a.richColors) != null ? Ht : v,
        "data-styled": !(a.jsx || a.unstyled || S),
        "data-mounted": rt,
        "data-promise": !!a.promise,
        "data-swiped": ht,
        "data-removed": y,
        "data-visible": Qt,
        "data-y-position": ee,
        "data-x-position": ae,
        "data-index": c,
        "data-front": Gt,
        "data-swiping": N,
        "data-dismissible": ot,
        "data-type": _,
        "data-invert": ne,
        "data-swipe-out": w,
        "data-swipe-direction": q,
        "data-expanded": !!(A || ct && rt),
        "data-testid": a.testId,
        style: {
            "--index": c,
            "--toasts-before": c,
            "--z-index": at.length - c,
            "--offset": `${y?mt:st.current}px`,
            "--initial-height": ct ? "auto" : `${qt}px`,
            ...j,
            ...a.style
        },
        onDragEnd: () => {
            Z(!1), ut(null), it.current = null
        },
        onPointerDown: l => {
            l.button !== 2 && (Et || !ot || (Nt.current = new Date, wt(st.current), l.target.setPointerCapture(l.pointerId), l.target.tagName !== "BUTTON" && (Z(!0), it.current = {
                x: l.clientX,
                y: l.clientY
            })))
        },
        onPointerUp: () => {
            var l, k, T;
            if (w || !ot) return;
            it.current = null;
            const I = Number(((l = G.current) == null ? void 0 : l.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                E = Number(((k = G.current) == null ? void 0 : k.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                H = new Date().getTime() - ((T = Nt.current) == null ? void 0 : T.getTime()),
                P = M === "x" ? I : E,
                vt = Math.abs(P) / H;
            if ((M === "x" ? Y.includes(I > 0 ? "right" : "left") : Y.includes(E > 0 ? "bottom" : "top")) && (Math.abs(P) >= We || vt > .11)) {
                wt(st.current), a.onDismiss == null || a.onDismiss.call(a, a), Q(M === "x" ? I > 0 ? "right" : "left" : E > 0 ? "down" : "up"), J(), bt(!0);
                return
            } else {
                var $, Ot;
                ($ = G.current) == null || $.style.setProperty("--swipe-amount-x", "0px"), (Ot = G.current) == null || Ot.style.setProperty("--swipe-amount-y", "0px")
            }
            ft(!1), Z(!1), ut(null)
        },
        onPointerMove: l => {
            var k, T, I;
            if (!it.current || !ot || ((k = window.getSelection()) == null ? void 0 : k.toString().length) > 0) return;
            const E = l.clientY - it.current.y,
                H = l.clientX - it.current.x;
            !M && (Math.abs(H) > 1 || Math.abs(E) > 1) && ut(Math.abs(H) > Math.abs(E) ? "x" : "y");
            let P = {
                x: 0,
                y: 0
            };
            const vt = $ => 1 / (1.5 + Math.abs($) / 20);
            if (M === "y") {
                if (Y.includes("top") || Y.includes("bottom"))
                    if (Y.includes("top") && E < 0 || Y.includes("bottom") && E > 0) P.y = E;
                    else {
                        const $ = E * vt(E);
                        P.y = Math.abs($) < Math.abs(E) ? $ : E
                    }
            } else if (M === "x" && (Y.includes("left") || Y.includes("right")))
                if (Y.includes("left") && H < 0 || Y.includes("right") && H > 0) P.x = H;
                else {
                    const $ = H * vt(H);
                    P.x = Math.abs($) < Math.abs(H) ? $ : H
                }(Math.abs(P.x) > 0 || Math.abs(P.y) > 0) && ft(!0), (T = G.current) == null || T.style.setProperty("--swipe-amount-x", `${P.x}px`), (I = G.current) == null || I.style.setProperty("--swipe-amount-y", `${P.y}px`)
        }
    }, te && !a.jsx && _ !== "loading" ? r.createElement("button", {
        "aria-label": U,
        "data-disabled": Et,
        "data-close-button": !0,
        onClick: Et || !ot ? () => {} : () => {
            J(), a.onDismiss == null || a.onDismiss.call(a, a)
        },
        className: F(g ? .closeButton, a == null || (o = a.classNames) == null ? void 0 : o.closeButton)
    }, (Pt = L ? .close) != null ? Pt : Be) : null, (_ || a.icon || a.promise) && a.icon !== null && (L ? .[_] !== null || a.icon) ? r.createElement("div", {
        "data-icon": "",
        className: F(g ? .icon, a == null || (u = a.classNames) == null ? void 0 : u.icon)
    }, _ === "loading" ? a.icon || Lt() : a.promise ? Lt() : null, _ !== "loading" ? re : null) : null, r.createElement("div", {
        "data-content": "",
        className: F(g ? .content, a == null || (f = a.classNames) == null ? void 0 : f.content)
    }, r.createElement("div", {
        "data-title": "",
        className: F(g ? .title, a == null || (p = a.classNames) == null ? void 0 : p.title)
    }, a.jsx ? a.jsx : typeof a.title == "function" ? a.title() : a.title), a.description ? r.createElement("div", {
        "data-description": "",
        className: F(z, Jt, g ? .description, a == null || (h = a.classNames) == null ? void 0 : h.description)
    }, typeof a.description == "function" ? a.description() : a.description) : null), r.isValidElement(a.cancel) ? a.cancel : a.cancel && yt(a.cancel) ? r.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: a.cancelButtonStyle || K,
        onClick: l => {
            yt(a.cancel) && ot && (a.cancel.onClick == null || a.cancel.onClick.call(a.cancel, l), J())
        },
        className: F(g ? .cancelButton, a == null || (d = a.classNames) == null ? void 0 : d.cancelButton)
    }, a.cancel.label) : null, r.isValidElement(a.action) ? a.action : a.action && yt(a.action) ? r.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: a.actionButtonStyle || W,
        onClick: l => {
            yt(a.action) && (a.action.onClick == null || a.action.onClick.call(a.action, l), !l.defaultPrevented && J())
        },
        className: F(g ? .actionButton, a == null || (s = a.classNames) == null ? void 0 : s.actionButton)
    }, a.action.label) : null)
};

function Yt() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t
}

function Ge(t, e) {
    const n = {};
    return [t, e].forEach((o, u) => {
        const f = u === 1,
            p = f ? "--mobile-offset" : "--offset",
            h = f ? $e : Ye;

        function d(s) {
            ["top", "right", "bottom", "left"].forEach(x => {
                n[`${p}-${x}`] = typeof s == "number" ? `${s}px` : s
            })
        }
        typeof o == "number" || typeof o == "string" ? d(o) : typeof o == "object" ? ["top", "right", "bottom", "left"].forEach(s => {
            o[s] === void 0 ? n[`${p}-${s}`] = h : n[`${p}-${s}`] = typeof o[s] == "number" ? `${o[s]}px` : o[s]
        }) : d(h)
    }), n
}

function aa() {
    const [t, e] = r.useState([]);
    return r.useEffect(() => D.subscribe(n => {
        if (n.dismiss) {
            setTimeout(() => {
                _t.flushSync(() => {
                    e(o => o.filter(u => u.id !== n.id))
                })
            });
            return
        }
        setTimeout(() => {
            _t.flushSync(() => {
                e(o => {
                    const u = o.findIndex(f => f.id === n.id);
                    return u !== -1 ? [...o.slice(0, u), { ...o[u],
                        ...n
                    }, ...o.slice(u + 1)] : [n, ...o]
                })
            })
        })
    }), []), {
        toasts: t
    }
}
var na = r.forwardRef(function(e, n) {
    const {
        id: o,
        invert: u,
        position: f = "bottom-right",
        hotkey: p = ["altKey", "KeyT"],
        expand: h,
        closeButton: d,
        className: s,
        offset: x,
        mobileOffset: a,
        theme: S = "light",
        richColors: i,
        duration: C,
        style: O,
        visibleToasts: B = ze,
        toastOptions: c,
        dir: at = Yt(),
        gap: A = Ve,
        icons: R,
        customAriaLabel: v,
        containerAriaLabel: V = "Notifications"
    } = e, [j, K] = r.useState([]), W = r.useMemo(() => o ? j.filter(m => m.toasterId === o) : j.filter(m => !m.toasterId), [j, o]), nt = r.useMemo(() => Array.from(new Set([f].concat(W.filter(m => m.position).map(m => m.position)))), [W, f]), [z, lt] = r.useState([]), [dt, X] = r.useState(!1), [ct, g] = r.useState(!1), [L, U] = r.useState(S !== "system" ? S : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), M = r.useRef(null), ut = p.join("+").replace(/Key/g, "").replace(/Digit/g, ""), q = r.useRef(null), Q = r.useRef(!1), rt = r.useCallback(m => {
        K(y => {
            var b;
            return (b = y.find(N => N.id === m.id)) != null && b.delete || D.dismiss(m.id), y.filter(({
                id: N
            }) => N !== m.id)
        })
    }, []);
    return r.useEffect(() => D.subscribe(m => {
        if (m.dismiss) {
            requestAnimationFrame(() => {
                K(y => y.map(b => b.id === m.id ? { ...b,
                    delete: !0
                } : b))
            });
            return
        }
        setTimeout(() => {
            _t.flushSync(() => {
                K(y => {
                    const b = y.findIndex(N => N.id === m.id);
                    return b !== -1 ? [...y.slice(0, b), { ...y[b],
                        ...m
                    }, ...y.slice(b + 1)] : [m, ...y]
                })
            })
        })
    }), []), r.useEffect(() => {
        if (S !== "system") {
            U(S);
            return
        }
        if (S === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? U("dark") : U("light")), typeof window > "u") return;
        const m = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            m.addEventListener("change", ({
                matches: y
            }) => {
                U(y ? "dark" : "light")
            })
        } catch {
            m.addListener(({
                matches: b
            }) => {
                try {
                    U(b ? "dark" : "light")
                } catch (N) {
                    console.error(N)
                }
            })
        }
    }, [S]), r.useEffect(() => {
        j.length <= 1 && X(!1)
    }, [j]), r.useEffect(() => {
        const m = y => {
            var b;
            if (p.length > 0 && p.every(Z => y[Z] || y.code === Z)) {
                var N;
                X(!0), (N = M.current) == null || N.focus()
            }
            y.code === "Escape" && (document.activeElement === M.current || (b = M.current) != null && b.contains(document.activeElement)) && X(!1)
        };
        return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m)
    }, [p]), r.useEffect(() => {
        if (M.current) return () => {
            q.current && (q.current.focus({
                preventScroll: !0
            }), q.current = null, Q.current = !1)
        }
    }, [M.current]), r.createElement("section", {
        ref: n,
        "aria-label": v ? ? `${V} ${ut}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
        "data-react-aria-top-layer": !0
    }, nt.map((m, y) => {
        var b;
        const [N, Z] = m.split("-");
        return W.length ? r.createElement("ol", {
            key: m,
            dir: at === "auto" ? Yt() : at,
            tabIndex: -1,
            ref: M,
            className: s,
            "data-sonner-toaster": !0,
            "data-sonner-theme": L,
            "data-y-position": N,
            "data-x-position": Z,
            style: {
                "--front-toast-height": `${((b=z[0])==null?void 0:b.height)||0}px`,
                "--width": `${Fe}px`,
                "--gap": `${A}px`,
                ...O,
                ...Ge(x, a)
            },
            onBlur: w => {
                Q.current && !w.currentTarget.contains(w.relatedTarget) && (Q.current = !1, q.current && (q.current.focus({
                    preventScroll: !0
                }), q.current = null))
            },
            onFocus: w => {
                w.target instanceof HTMLElement && w.target.dataset.dismissible === "false" || Q.current || (Q.current = !0, q.current = w.relatedTarget)
            },
            onMouseEnter: () => X(!0),
            onMouseMove: () => X(!0),
            onMouseLeave: () => {
                ct || X(!1)
            },
            onDragEnd: () => X(!1),
            onPointerDown: w => {
                w.target instanceof HTMLElement && w.target.dataset.dismissible === "false" || g(!0)
            },
            onPointerUp: () => g(!1)
        }, W.filter(w => !w.position && y === 0 || w.position === m).map((w, bt) => {
            var ht, ft;
            return r.createElement(qe, {
                key: w.id,
                icons: R,
                index: bt,
                toast: w,
                defaultRichColors: i,
                duration: (ht = c ? .duration) != null ? ht : C,
                className: c ? .className,
                descriptionClassName: c ? .descriptionClassName,
                invert: u,
                visibleToasts: B,
                closeButton: (ft = c ? .closeButton) != null ? ft : d,
                interacting: ct,
                position: m,
                style: c ? .style,
                unstyled: c ? .unstyled,
                classNames: c ? .classNames,
                cancelButtonStyle: c ? .cancelButtonStyle,
                actionButtonStyle: c ? .actionButtonStyle,
                closeButtonAriaLabel: c ? .closeButtonAriaLabel,
                removeToast: rt,
                toasts: W.filter(mt => mt.position == w.position),
                heights: z.filter(mt => mt.position == w.position),
                setHeights: lt,
                expandByDefault: h,
                gap: A,
                expanded: dt,
                swipeDirections: e.swipeDirections
            })
        })) : null
    }))
});
export {
    ta as i, ea as n, aa as r, na as t
};