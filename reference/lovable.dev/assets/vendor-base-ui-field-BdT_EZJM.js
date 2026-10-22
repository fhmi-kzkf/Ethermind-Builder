import {
    o as Te
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as rt,
    n as nt,
    r as st
} from "./vendor-react-Fx2PtaaM.js";
import {
    D as at,
    M as it,
    O as ot
} from "./vendor-floating-ui-98f9kiPk.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7d715037-685e-415d-928e-253af61de55d", e._sentryDebugIdIdentifier = "sentry-dbid-7d715037-685e-415d-928e-253af61de55d")
    })()
} catch {}
var i = Te(rt(), 1),
    Y = st();

function lt(e, t) {
    return function(n, ...s) {
        const a = new URL(e);
        return a.searchParams.set("code", n.toString()), s.forEach(o => a.searchParams.append("args[]", o)), `${t} error #${n}; visit ${a} for the full message.`
    }
}
var pe = lt("https://base-ui.com/production-error", "Base UI"),
    Ae = {};

function K(e, t) {
    const r = i.useRef(Ae);
    return r.current === Ae && (r.current = e(t)), r
}

function Pe(e, t, r, n) {
    const s = K(ke).current;
    return ct(s, e, t, r, n) && Le(s, [e, t, r, n]), s.callback
}

function ut(e) {
    const t = K(ke).current;
    return dt(t, e) && Le(t, e), t.callback
}

function ke() {
    return {
        callback: null,
        cleanup: null,
        refs: []
    }
}

function ct(e, t, r, n, s) {
    return e.refs[0] !== t || e.refs[1] !== r || e.refs[2] !== n || e.refs[3] !== s
}

function dt(e, t) {
    return e.refs.length !== t.length || e.refs.some((r, n) => r !== t[n])
}

function Le(e, t) {
    if (e.refs = t, t.every(r => r == null)) {
        e.callback = null;
        return
    }
    e.callback = r => {
        if (e.cleanup && (e.cleanup(), e.cleanup = null), r != null) {
            const n = Array(t.length).fill(null);
            for (let s = 0; s < t.length; s += 1) {
                const a = t[s];
                if (a != null) switch (typeof a) {
                    case "function":
                        {
                            const o = a(r);typeof o == "function" && (n[s] = o);
                            break
                        }
                    case "object":
                        a.current = r
                }
            }
            e.cleanup = () => {
                for (let s = 0; s < t.length; s += 1) {
                    const a = t[s];
                    if (a != null) switch (typeof a) {
                        case "function":
                            {
                                const o = n[s];typeof o == "function" ? o() : a(null);
                                break
                            }
                        case "object":
                            a.current = null
                    }
                }
            }
        }
    }
}
var ft = parseInt("19.3.0", 10);

function vt(e) {
    return ft >= e
}

function we(e) {
    if (!i.isValidElement(e)) return null;
    const t = e,
        r = t.props;
    return (vt(19) ? r ? .ref : t.ref) ? ? null
}

function ge(e, t) {
    if (e && !t) return e;
    if (!e && t) return t;
    if (e || t) return { ...e,
        ...t
    }
}

function k() {}
var mt = Object.freeze([]),
    B = Object.freeze({});

function gt(e, t) {
    const r = {};
    for (const n in e) {
        const s = e[n];
        if (t ? .hasOwnProperty(n)) {
            const a = t[n](s);
            a != null && Object.assign(r, a);
            continue
        }
        s === !0 ? r[`data-${n.toLowerCase()}`] = "" : s && (r[`data-${n.toLowerCase()}`] = s.toString())
    }
    return r
}

function bt(e, t) {
    return typeof e == "function" ? e(t) : e
}

function pt(e, t) {
    return typeof e == "function" ? e(t) : e
}
var he = {};

function ye(e, t, r, n, s) {
    if (!r && !n && !s && !e) return ce(t);
    let a = ce(e);
    return t && (a = re(a, t)), r && (a = re(a, r)), n && (a = re(a, n)), s && (a = re(a, s)), a
}

function ht(e) {
    if (e.length === 0) return he;
    if (e.length === 1) return ce(e[0]);
    let t = ce(e[0]);
    for (let r = 1; r < e.length; r += 1) t = re(t, e[r]);
    return t
}

function ce(e) {
    return Ie(e) ? { ...Ne(e, he)
    } : yt(e)
}

function re(e, t) {
    return Ie(t) ? Ne(t, e) : It(e, t)
}

function yt(e) {
    const t = { ...e
    };
    for (const r in t) {
        const n = t[r];
        Oe(r, n) && (t[r] = _e(n))
    }
    return t
}

function It(e, t) {
    if (!t) return e;
    for (const r in t) {
        const n = t[r];
        switch (r) {
            case "style":
                e[r] = ge(e.style, n);
                break;
            case "className":
                e[r] = Ue(e.className, n);
                break;
            default:
                Oe(r, n) ? e[r] = Ct(e[r], n) : e[r] = n
        }
    }
    return e
}

function Oe(e, t) {
    const r = e.charCodeAt(0),
        n = e.charCodeAt(1),
        s = e.charCodeAt(2);
    return r === 111 && n === 110 && s >= 65 && s <= 90 && (typeof t == "function" || typeof t > "u")
}

function Ie(e) {
    return typeof e == "function"
}

function Ne(e, t) {
    return Ie(e) ? e(t) : e ? ? he
}

function Ct(e, t) {
    return t ? e ? (...r) => {
        const n = r[0];
        if (qe(n)) {
            const a = n;
            je(a);
            const o = t(...r);
            return a.baseUIHandlerPrevented || e ? .(...r), o
        }
        const s = t(...r);
        return e ? .(...r), s
    } : _e(t) : e
}

function _e(e) {
    return e && ((...t) => {
        const r = t[0];
        return qe(r) && je(r), e(...t)
    })
}

function je(e) {
    return e.preventBaseUIHandler = () => {
        e.baseUIHandlerPrevented = !0
    }, e
}

function Ue(e, t) {
    return t ? e ? t + " " + e : t : e
}

function qe(e) {
    return e != null && typeof e == "object" && "nativeEvent" in e
}

function G(e, t, r = {}) {
    const n = t.render,
        s = Rt(t, r);
    return r.enabled === !1 ? null : Mt(e, n, s, r.state ? ? B)
}

function Rt(e, t = {}) {
    const {
        className: r,
        style: n,
        render: s
    } = e, {
        state: a = B,
        ref: o,
        props: u,
        stateAttributesMapping: d,
        enabled: l = !0
    } = t, c = l ? bt(r, a) : void 0, v = l ? pt(n, a) : void 0, b = l ? gt(a, d) : B, m = l && u ? Et(u) : void 0, g = l ? ge(b, m) ? ? {} : B;
    return typeof document < "u" && (l ? Array.isArray(o) ? g.ref = ut([g.ref, we(s), ...o]) : g.ref = Pe(g.ref, we(s), o) : Pe(null, null)), l ? (c !== void 0 && (g.className = Ue(g.className, c)), v !== void 0 && (g.style = ge(g.style, v)), g) : B
}

function Et(e) {
    return Array.isArray(e) ? ht(e) : ye(void 0, e)
}
var Ft = Symbol.for("react.lazy");

function Mt(e, t, r, n) {
    if (t) {
        if (typeof t == "function") return t(r, n);
        const s = ye(r, t.props);
        s.ref = r.ref;
        let a = t;
        return a ? .$$typeof === Ft && (a = i.Children.toArray(t)[0]), i.cloneElement(a, s)
    }
    if (e && typeof e == "string") return At(e, r);
    throw new Error(pe(8))
}

function At(e, t) {
    return e === "button" ? (0, i.createElement)("button", {
        type: "button",
        ...t,
        key: t.key
    }) : e === "img" ? (0, i.createElement)("img", {
        alt: "",
        ...t,
        key: t.key
    }) : i.createElement(e, t)
}
var Pt = () => {},
    O = typeof document < "u" ? i.useLayoutEffect : Pt;

function $e(e) {
    i.useEffect(e, mt)
}
var te = 0,
    wt = class Be {
        static create() {
            return new Be
        }
        currentId = te;
        start(t, r) {
            this.clear(), this.currentId = setTimeout(() => {
                this.currentId = te, r()
            }, t)
        }
        isStarted() {
            return this.currentId !== te
        }
        clear = () => {
            this.currentId !== te && (clearTimeout(this.currentId), this.currentId = te)
        };
        disposeEffect = () => this.clear
    };

function St() {
    const e = K(wt.create).current;
    return $e(e.disposeEffect), e
}

function Vt(e) {
    let t = e.activeElement;
    for (; t ? .shadowRoot ? .activeElement != null;) t = t.shadowRoot.activeElement;
    return t
}

function fr(e, t) {
    if (!e || !t) return !1;
    const r = t.getRootNode ? .();
    if (e.contains(t)) return !0;
    if (r && it(r)) {
        let n = t;
        for (; n;) {
            if (e === n) return !0;
            n = n.parentNode || n.host
        }
    }
    return !1
}

function Dt(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target
}
var xt = "none",
    vr = "trigger-press",
    mr = "trigger-hover",
    gr = "trigger-focus",
    br = "outside-press",
    pr = "item-press",
    hr = "close-press",
    yr = "link-press",
    Ir = "clear-press",
    Cr = "chip-remove-press",
    Rr = "track-press",
    Er = "input-change",
    Fr = "input-clear",
    Mr = "input-press",
    Ar = "focus-out",
    Pr = "escape-key",
    wr = "close-watcher",
    Sr = "list-navigation",
    Vr = "keyboard",
    Dr = "pointer",
    xr = "drag",
    Tr = "cancel-open",
    kr = "sibling-open",
    Lr = "disabled",
    Or = "missing",
    Nr = "initial",
    _r = "imperative-action",
    jr = "swipe",
    Ur = "window-resize",
    Tt = Te(nt(), 1);

function kt(e, t, r, n) {
    let s = !1,
        a = !1;
    const o = n ? ? B;
    return {
        reason: e,
        event: t ? ? new Event("base-ui"),
        cancel() {
            s = !0
        },
        allowPropagation() {
            a = !0
        },
        get isCanceled() {
            return s
        },
        get isPropagationAllowed() {
            return a
        },
        trigger: r,
        ...o
    }
}

function qr(e, t, r) {
    const n = r ? ? B;
    return {
        reason: e,
        event: t ? ? new Event("base-ui"),
        ...n
    }
}
var Ce = { ...i
    },
    ve = Ce.useInsertionEffect,
    Lt = ve && ve !== Ce.useLayoutEffect ? ve : e => e();

function x(e) {
    const t = K(Ot).current;
    return t.next = e, Lt(t.effect), t.trampoline
}

function Ot() {
    const e = {
        next: void 0,
        callback: Nt,
        trampoline: (...t) => e.callback ? .(...t),
        effect: () => {
            e.callback = e.next
        }
    };
    return e
}

function Nt() {}
var le = null;
globalThis.requestAnimationFrame;
var _t = class {
        callbacks = [];
        callbacksCount = 0;
        nextId = 1;
        startId = 1;
        isScheduled = !1;
        tick = e => {
            this.isScheduled = !1;
            const t = this.callbacks,
                r = this.callbacksCount;
            if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, r > 0)
                for (let n = 0; n < t.length; n += 1) t[n] ? .(e)
        };
        request(e) {
            const t = this.nextId;
            return this.nextId += 1, this.callbacks.push(e), this.callbacksCount += 1, this.isScheduled || (requestAnimationFrame(this.tick), this.isScheduled = !0), t
        }
        cancel(e) {
            const t = e - this.startId;
            t < 0 || t >= this.callbacks.length || (this.callbacks[t] = null, this.callbacksCount -= 1)
        }
    },
    ue = new _t,
    W = class Ye {
        static create() {
            return new Ye
        }
        static request(t) {
            return ue.request(t)
        }
        static cancel(t) {
            return ue.cancel(t)
        }
        currentId = le;
        request(t) {
            this.cancel(), this.currentId = ue.request(() => {
                this.currentId = le, t()
            })
        }
        cancel = () => {
            this.currentId !== le && (ue.cancel(this.currentId), this.currentId = le)
        };
        disposeEffect = () => this.cancel
    };

function jt() {
    const e = K(W.create).current;
    return $e(e.disposeEffect), e
}

function Ke(e) {
    return e ? .ownerDocument || document
}
var Se = 0;

function Ut(e, t = "mui") {
    const [r, n] = i.useState(e), s = e || r;
    return i.useEffect(() => {
        r == null && (Se += 1, n(`${t}-${Se}`))
    }, [r, t]), s
}
var Ve = Ce.useId;

function qt(e, t) {
    if (Ve !== void 0) {
        const r = Ve();
        return e ? ? (t ? `${t}-${r}` : r)
    }
    return Ut(e, t)
}

function $t(e) {
    return e == null ? e : "current" in e ? e.current : e
}

function Bt(e, t = !1, r = !1) {
    const [n, s] = i.useState(e && t ? "idle" : void 0), [a, o] = i.useState(e);
    return e && !a && (o(!0), s("starting")), !e && a && n !== "ending" && !r && s("ending"), !e && !a && n === "ending" && s(void 0), O(() => {
        if (!e && a && n !== "ending" && r) {
            const u = W.request(() => {
                s("ending")
            });
            return () => {
                W.cancel(u)
            }
        }
    }, [e, a, n, r]), O(() => {
        if (!e || t) return;
        const u = W.request(() => {
            s(void 0)
        });
        return () => {
            W.cancel(u)
        }
    }, [t, e]), O(() => {
        if (!e || !t) return;
        e && a && n !== "idle" && s("starting");
        const u = W.request(() => {
            s("idle")
        });
        return () => {
            W.cancel(u)
        }
    }, [t, e, a, n]), {
        mounted: a,
        setMounted: o,
        transitionStatus: n
    }
}

function Yt(e, t = !1) {
    const r = jt();
    return x((n, s = null) => {
        r.cancel();
        const a = $t(e);
        if (a == null) return;
        const o = a,
            u = () => {
                Tt.flushSync(n)
            };
        if (typeof o.getAnimations != "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
            n();
            return
        }

        function d() {
            Promise.all(o.getAnimations().map(l => l.finished)).then(() => {
                s ? .aborted || u()
            }, () => {
                if (!s ? .aborted) {
                    if (o.getAnimations().some(l => l.pending || l.playState !== "finished")) {
                        d();
                        return
                    }
                    u()
                }
            })
        }
        if (t) {
            const l = "data-starting-style";
            if (!o.hasAttribute(l)) {
                r.request(d);
                return
            }
            const c = new MutationObserver(() => {
                o.hasAttribute(l) || (c.disconnect(), d())
            });
            c.observe(o, {
                attributes: !0,
                attributeFilter: [l]
            }), s ? .addEventListener("abort", () => c.disconnect(), {
                once: !0
            });
            return
        }
        r.request(d)
    })
}

function Kt(e) {
    const {
        enabled: t = !0,
        open: r,
        ref: n,
        onComplete: s
    } = e, a = x(s), o = Yt(n, r);
    i.useEffect(() => {
        if (!t) return;
        const u = new AbortController;
        return o(a, u.signal), () => {
            u.abort()
        }
    }, [t, r, a, o])
}
var $r = (function(e) {
        return e.startingStyle = "data-starting-style", e.endingStyle = "data-ending-style", e
    })({}),
    zt = {
        "data-starting-style": ""
    },
    Gt = {
        "data-ending-style": ""
    },
    Ht = {
        transitionStatus(e) {
            return e === "starting" ? zt : e === "ending" ? Gt : null
        }
    };

function se(e) {
    return qt(e, "base-ui")
}

function Wt({
    controlled: e,
    default: t,
    name: r,
    state: n = "value"
}) {
    const {
        current: s
    } = i.useRef(e !== void 0), [a, o] = i.useState(t);
    return [s ? e : a, i.useCallback(u => {
        s || o(u)
    }, [])]
}
var ne = {
        badInput: !1,
        customError: !1,
        patternMismatch: !1,
        rangeOverflow: !1,
        rangeUnderflow: !1,
        stepMismatch: !1,
        tooLong: !1,
        tooShort: !1,
        typeMismatch: !1,
        valid: null,
        valueMissing: !1
    },
    Jt = {
        valid: null,
        touched: !1,
        dirty: !1,
        filled: !1,
        focused: !1
    },
    Zt = {
        disabled: !1,
        ...Jt
    },
    Z = {
        valid(e) {
            return e === null ? null : e ? {
                "data-valid": ""
            } : {
                "data-invalid": ""
            }
        }
    },
    Xt = {
        invalid: void 0,
        name: void 0,
        validityData: {
            state: ne,
            errors: [],
            error: "",
            value: "",
            initialValue: null
        },
        setValidityData: k,
        disabled: void 0,
        setTouched: k,
        setDirty: k,
        setFilled: k,
        setFocused: k,
        validationMode: "onSubmit",
        shouldValidateOnChange: () => !1,
        state: Zt,
        registerFieldControl: k,
        validation: {
            getValidationProps: (e, t = B) => t,
            inputRef: {
                current: null
            },
            registeredInputs: new Map,
            registerInput: k,
            getInputControl: () => null,
            commit: async () => {},
            change: k
        }
    },
    ze = i.createContext(Xt);

function X(e = !0) {
    const t = i.useContext(ze);
    if (t.setValidityData === k && !e) throw new Error(pe(28));
    return t
}

function Qt(e, t, r, n, s = !0, a) {
    const {
        registerFieldControl: o
    } = X(), u = K(() => Symbol());
    O(() => {
        const d = u.current;
        if (!s) {
            o(d, void 0);
            return
        }
        o(d, {
            controlRef: e,
            getValue: n,
            id: t,
            name: a,
            value: r
        })
    }, [e, s, n, t, a, o, u, r]), O(() => {
        const d = u.current;
        return () => {
            o(d, void 0)
        }
    }, [o, u])
}
var Ge = i.createContext({
    controlId: void 0,
    registerControlId: k,
    labelId: void 0,
    setLabelId: k,
    messageIds: [],
    setMessageIds: k,
    getDescriptionProps: e => e
});

function H() {
    return i.useContext(Ge)
}

function er(e = {}) {
    const {
        id: t,
        implicit: r = !1,
        controlRef: n
    } = e, {
        controlId: s,
        registerControlId: a
    } = H(), o = se(t), u = r ? s : void 0, d = K(() => Symbol()), l = i.useRef(!1), c = i.useRef(t != null), v = x(() => {
        !l.current || a === k || (l.current = !1, a(d.current, void 0))
    });
    return O(() => {
        if (a === k) return;
        let b;
        if (r) {
            const m = n ? .current;
            at(m) && m.closest("label") != null ? b = t ? ? null : b = u ? ? o
        } else if (t != null) c.current = !0, b = t;
        else if (c.current) b = o;
        else {
            v();
            return
        }
        if (b === void 0) {
            v();
            return
        }
        l.current = !0, a(d.current, b)
    }, [t, n, u, a, r, o, d, v]), i.useEffect(() => v, [v]), s ? ? o
}
var tr = i.createContext({
    elementRef: {
        current: null
    },
    formRef: {
        current: {
            fields: new Map
        }
    },
    errors: {},
    clearErrors: k,
    validationMode: "onSubmit",
    submitAttemptedRef: {
        current: !1
    }
});

function ae() {
    return i.useContext(tr)
}

function He(e, t) {
    const r = se(e);
    return O(() => (t(r), () => {
        t(n => n === r ? void 0 : n)
    }), [r, t]), r
}

function rr(e = {}) {
    const {
        id: t,
        fallbackControlId: r,
        native: n = !1,
        setLabelId: s,
        focusControl: a
    } = e, {
        controlId: o,
        setLabelId: u
    } = H(), d = x(m => {
        u(m), s ? .(m)
    }), l = He(t, d), c = o ? ? r;

    function v(m) {
        if (a) {
            a(m, c);
            return
        }
        if (!c) return;
        const g = Ke(m.currentTarget).getElementById(c);
        ot(g) && nr(g)
    }

    function b(m) {
        Dt(m.nativeEvent) ? .closest("button,input,select,textarea") || (!m.defaultPrevented && m.detail > 1 && m.preventDefault(), !n && v(m))
    }
    return n ? {
        id: l,
        htmlFor: c ? ? void 0,
        onMouseDown: b
    } : {
        id: l,
        onClick: b,
        onPointerDown(m) {
            m.preventDefault()
        }
    }
}

function nr(e) {
    e.focus({
        focusVisible: !0
    })
}
var We = i.createContext({
    disabled: !1
});

function Je() {
    return i.useContext(We)
}
var Ze = i.createContext(void 0);

function Re(e = !1) {
    const t = i.useContext(Ze);
    if (!t && !e) throw new Error(pe(86));
    return t
}
var Xe = function(t) {
    const r = se(),
        n = t.controlId === void 0 ? r : t.controlId,
        [s, a] = i.useState(n),
        [o, u] = i.useState(t.labelId),
        [d, l] = i.useState([]),
        c = K(() => new Map),
        {
            messageIds: v
        } = H(),
        b = x((C, I) => {
            const w = c.current;
            if (I === void 0) {
                w.delete(C);
                return
            }
            w.set(C, I), a(R => {
                if (w.size === 0) return;
                let f;
                for (const p of w.values()) {
                    if (R !== void 0 && p === R) return R;
                    f === void 0 && (f = p)
                }
                return f
            })
        }),
        m = i.useCallback(C => {
            const I = C["aria-describedby"] ? C["aria-describedby"].split(" ") : [];
            return I.push(...v, ...d), { ...C,
                "aria-describedby": Array.from(new Set(I)).join(" ") || void 0
            }
        }, [v, d]),
        g = i.useMemo(() => ({
            controlId: s,
            registerControlId: b,
            labelId: o,
            setLabelId: u,
            messageIds: d,
            setMessageIds: l,
            getDescriptionProps: m
        }), [s, b, o, u, d, l, m]);
    return (0, Y.jsx)(Ge.Provider, {
        value: g,
        children: t.children
    })
};

function be(e, t) {
    return { ...e,
        state: { ...e.state,
            valid: !t && e.state.valid
        }
    }
}
var me = Object.keys(ne);

function sr(e, t) {
    return e.matches(":disabled") ? !1 : !t || e.form === t ? !0 : e.form === null && !e.hasAttribute("form")
}

function De(e, t) {
    let r = null;
    for (const n of e.keys())
        if (sr(n, t)) {
            if (!n.validity.valid) return n;
            r ? ? = n
        }
    return r
}

function xe(e, t) {
    for (const r of t.keys()) r.setCustomValidity("");
    e ? .setCustomValidity("")
}

function ar(e) {
    const {
        elementRef: t,
        formRef: r
    } = ae(), {
        setValidityData: n,
        validate: s,
        validityData: a,
        validationDebounceTime: o,
        invalid: u,
        markedDirtyRef: d,
        state: l,
        shouldValidateOnChange: c,
        registeredFieldIdRef: v
    } = e, {
        controlId: b,
        getDescriptionProps: m
    } = H(), g = St(), C = i.useRef(null), I = K(() => new Map).current, w = i.useRef(0), R = i.useCallback((h, L) => (I.set(h, L), () => {
        I.delete(h)
    }), [I]), f = x(() => {
        const h = De(I, t.current);
        return h && I.get(h) ? .controlRef.current || null
    }), p = x(async (h, L = !1) => {
        w.current += 1;
        const j = w.current;

        function U(P, E = u) {
            const T = v.current ? ? b;
            if (T == null) return;
            const V = r.current.fields.get(T);
            if (!V) return;
            const z = be(P, E);
            r.current.fields.set(T, { ...V,
                validityData: z
            })
        }

        function D(P, E) {
            const T = {
                value: h,
                state: { ...ne,
                    valid: !0
                },
                error: "",
                errors: [],
                initialValue: a.initialValue
            };
            xe(P, I), U(T, E), n(T)
        }
        const y = I.size > 0 ? De(I, t.current) : C.current;
        if (L) {
            if (l.valid !== !1 || !y) return;
            const P = y.validity;
            if (!P.valueMissing) {
                D(y, !1);
                return
            }
            for (const E of me)
                if (E !== "valid" && E !== "valueMissing" && E !== "customError" && P[E]) return
        }

        function q(P) {
            const E = me.reduce((V, z) => (V[z] = P.validity[z], V), {});
            let T = !1;
            for (const V of me)
                if (V !== "valid") {
                    if (V === "valueMissing" && E[V]) T = !0;
                    else if (E[V]) return E
                }
            return T && !d.current && (E.valid = !0, E.valueMissing = !1), E
        }
        g.clear();
        let M = null,
            N = [];
        const A = y ? q(y) : { ...ne,
            valid: !0
        };
        let _;
        const J = c();
        if (y && y.validationMessage && !J) _ = y.validationMessage, N = [y.validationMessage];
        else {
            const P = Array.from(r.current.fields.values()).reduce((T, V) => (V.name && (T[V.name] = V.getValue()), T), {}),
                E = s(h, P);
            if (typeof E == "object" && E !== null && "then" in E) {
                if (M = await E, j !== w.current) return
            } else M = E;
            M !== null ? (A.valid = !1, A.customError = !0, Array.isArray(M) ? (N = M, y ? .setCustomValidity(M.join(`
`))) : M && (N = [M], y ? .setCustomValidity(M))) : J && (xe(y, I), A.customError = !1, y && y.validationMessage ? (_ = y.validationMessage, N = [y.validationMessage]) : (!y || y.validity.valid) && !A.valid && (A.valid = !0))
        }
        const S = {
            value: h,
            state: A,
            error: _ ? ? (Array.isArray(M) ? M[0] : M ? ? ""),
            errors: N,
            initialValue: a.initialValue
        };
        U(S), n(S)
    }), F = x(h => {
        g.clear();
        const L = c();
        L && h !== "" && o ? (w.current += 1, g.start(o, () => {
            p(h)
        })) : p(h, !L)
    }), $ = i.useCallback((h, L = {}) => ye(m(L), l.valid === !1 && !l.disabled && !h ? {
        "aria-invalid": !0
    } : B), [m, l.disabled, l.valid]);
    return i.useMemo(() => ({
        getValidationProps: $,
        inputRef: C,
        registeredInputs: I,
        registerInput: R,
        getInputControl: f,
        commit: p,
        change: F
    }), [$, I, R, f, p, F])
}

function ir(e) {
    const {
        commit: t,
        invalid: r,
        markedDirtyRef: n,
        name: s,
        setRegisteredFieldName: a,
        registeredFieldIdRef: o,
        setValidityData: u,
        validityData: d
    } = e, {
        formRef: l
    } = ae(), c = i.useRef(null), v = i.useRef(null), b = i.useRef(!1), m = x(() => {
        const f = v.current;
        if (f) return f.getValue ? f.getValue() : f.value
    });

    function g(f) {
        return f.value === void 0 ? m() : f.value
    }
    const C = x(() => {
        const f = v.current;
        if (n.current = !0, !f) {
            t(d.value);
            return
        }
        t(g(f))
    });

    function I() {
        const f = v.current;
        !f || !f.id || l.current.fields.set(f.id, {
            getValue: m,
            name: s ? ? f.name,
            controlRef: f.controlRef,
            validityData: be(d, r),
            validate: C
        })
    }

    function w(f = v.current ? .id) {
        f && l.current.fields.delete(f)
    }

    function R(f) {
        if (b.current) return;
        b.current = !0;
        const p = g(f);
        u(F => F.initialValue === p ? F : { ...F,
            initialValue: p
        })
    }
    return O(() => {
        const f = v.current;
        !f || !f.id || (a(s ? void 0 : f.name), l.current.fields.set(f.id, {
            getValue: m,
            name: s ? ? f.name,
            controlRef: f.controlRef,
            validityData: be(d, r),
            validate: C
        }))
    }, [l, m, r, s, a, C, d]), O(() => {
        const f = l.current.fields;
        return () => {
            const p = v.current ? .id;
            p && f.delete(p)
        }
    }, [l]), [C, x((f, p) => {
        if (!p) {
            c.current === f && (c.current = null, w(), v.current = null, a(void 0), o.current = void 0);
            return
        }
        const F = v.current ? .id;
        c.current = f, v.current = p, s || a(p.name), o.current = p.id, F && F !== p.id && w(F), R(p), I()
    })]
}
var or = i.forwardRef(function(t, r) {
        const {
            errors: n,
            validationMode: s,
            submitAttemptedRef: a
        } = ae(), {
            render: o,
            className: u,
            validate: d,
            validationDebounceTime: l = 0,
            validationMode: c = s,
            name: v,
            disabled: b = !1,
            invalid: m,
            dirty: g,
            touched: C,
            actionsRef: I,
            style: w,
            ...R
        } = t, f = Re(!0) ? .disabled, p = x(d || (() => null)), F = f || b, [$, h] = i.useState(!1), [L, j] = i.useState(!1), [U, D] = i.useState(!1), [y, q] = i.useState(!1), M = g ? ? L, N = C ? ? $, A = i.useRef(M), _ = i.useRef(void 0), [J, S] = i.useState(), P = v ? ? J;
        O(() => {
            g !== void 0 && (A.current = g)
        }, [g]);
        const E = x(oe => {
                g === void 0 && (oe && (A.current = !0), j(oe))
            }),
            T = x(oe => {
                C === void 0 && h(oe)
            }),
            V = x(() => c === "onChange" || c === "onSubmit" && a.current),
            z = P && Object.hasOwn(n, P) ? n[P] : null,
            Qe = !!(Array.isArray(z) ? z.length : z),
            Q = m === !0 || Qe,
            [ee, de] = i.useState({
                state: ne,
                error: "",
                errors: [],
                value: null,
                initialValue: null
            }),
            Ee = !Q && (F ? null : ee.state.valid),
            ie = i.useMemo(() => ({
                disabled: F,
                touched: N,
                dirty: M,
                valid: Ee,
                filled: U,
                focused: y
            }), [F, N, M, Ee, U, y]),
            fe = ar({
                setValidityData: de,
                validate: p,
                validityData: ee,
                validationDebounceTime: l,
                invalid: Q,
                markedDirtyRef: A,
                state: ie,
                shouldValidateOnChange: V,
                registeredFieldIdRef: _
            }),
            [Fe, Me] = ir({
                commit: fe.commit,
                invalid: Q,
                markedDirtyRef: A,
                name: v,
                setRegisteredFieldName: S,
                registeredFieldIdRef: _,
                setValidityData: de,
                validityData: ee
            });
        i.useImperativeHandle(I, () => ({
            validate: Fe
        }), [Fe]);
        const et = i.useMemo(() => ({
                invalid: Q,
                name: P,
                validityData: ee,
                setValidityData: de,
                disabled: F,
                setTouched: T,
                setDirty: E,
                setFilled: D,
                setFocused: q,
                validationMode: c,
                shouldValidateOnChange: V,
                state: ie,
                registerFieldControl: Me,
                validation: fe
            }), [Q, P, ee, F, T, E, D, q, c, V, ie, Me, fe]),
            tt = G("div", t, {
                ref: r,
                state: ie,
                props: R,
                stateAttributesMapping: Z
            });
        return (0, Y.jsx)(ze.Provider, {
            value: et,
            children: tt
        })
    }),
    Br = i.forwardRef(function(t, r) {
        return (0, Y.jsx)(Xe, {
            children: (0, Y.jsx)(or, { ...t,
                ref: r
            })
        })
    }),
    Yr = i.forwardRef(function(t, r) {
        const {
            render: n,
            className: s,
            style: a,
            id: o,
            nativeLabel: u = !0,
            ...d
        } = t, l = X(!1), c = Je(), {
            labelId: v
        } = H(), b = { ...l.state,
            disabled: l.disabled || c.disabled
        }, m = i.useRef(null), g = rr({
            id: v ? ? o,
            native: u
        });
        return G("label", t, {
            ref: [r, m],
            state: b,
            props: [g, d],
            stateAttributesMapping: Z
        })
    }),
    lr = { ...Z,
        ...Ht
    },
    Kr = i.forwardRef(function(t, r) {
        const {
            render: n,
            id: s,
            className: a,
            match: o,
            style: u,
            ...d
        } = t, l = se(s), {
            validityData: c,
            state: v,
            name: b
        } = X(!1), {
            setMessageIds: m
        } = H(), {
            errors: g
        } = ae(), C = b && Object.hasOwn(g, b) ? g[b] : null, I = !!(Array.isArray(C) ? C.length : C), w = typeof o == "string";
        let R = !1;
        o === !0 ? R = !0 : v.disabled ? R = !1 : w ? R = !!c.state[o] : R = I || c.state.valid === !1;
        const {
            mounted: f,
            transitionStatus: p,
            setMounted: F
        } = Bt(R);
        O(() => {
            if (!(!R || !l)) return m(A => A.concat(l)), () => {
                m(A => A.filter(_ => _ !== l))
            }
        }, [R, l, m]);
        const $ = i.useRef(null),
            [h, L] = i.useState(null),
            [j, U] = i.useState(null);
        let D = c.error;
        !w && I ? D = C : c.errors.length > 1 && (D = c.errors);
        let y = D;
        Array.isArray(D) && (y = D.length > 1 ? (0, Y.jsx)("ul", {
            children: D.map(A => (0, Y.jsx)("li", {
                children: A
            }, A))
        }) : D[0]);
        const q = Array.isArray(D) ? JSON.stringify(D) : D;
        R && q !== j && (U(q), L(y)), Kt({
            open: R,
            ref: $,
            onComplete() {
                R || F(!1)
            }
        });
        const M = { ...v,
                transitionStatus: p
            },
            N = G("div", t, {
                ref: [r, $],
                state: M,
                props: [{
                    id: l,
                    children: R ? y : h
                }, d],
                stateAttributesMapping: lr,
                enabled: f
            });
        return f ? N : null
    }),
    zr = i.forwardRef(function(t, r) {
        const {
            render: n,
            id: s,
            className: a,
            style: o,
            ...u
        } = t, d = se(s), l = X(!1), c = Je(), {
            setMessageIds: v
        } = H(), b = { ...l.state,
            disabled: l.disabled || c.disabled
        };
        return O(() => {
            if (d) return v(m => m.concat(d)), () => {
                v(m => m.filter(g => g !== d))
            }
        }, [d, v]), G("p", t, {
            ref: r,
            state: b,
            props: [{
                id: d
            }, u],
            stateAttributesMapping: Z
        })
    }),
    Gr = i.forwardRef(function(t, r) {
        const {
            render: n,
            className: s,
            id: a,
            name: o,
            value: u,
            disabled: d = !1,
            onValueChange: l,
            defaultValue: c,
            autoFocus: v = !1,
            style: b,
            ...m
        } = t, {
            state: g,
            name: C,
            disabled: I,
            setTouched: w,
            setDirty: R,
            validityData: f,
            setFocused: p,
            setFilled: F,
            validationMode: $,
            validation: h
        } = X(), {
            clearErrors: L
        } = ae(), j = I || d, U = C ? ? o, D = { ...g,
            disabled: j
        }, {
            labelId: y
        } = H(), q = er({
            id: a
        });
        O(() => {
            const S = u != null;
            h.inputRef.current ? .value || S && u !== "" ? F(!0) : S && u === "" && F(!1)
        }, [h.inputRef, F, u]);
        const M = i.useRef(null);
        O(() => {
            v && M.current === Vt(Ke(M.current)) && p(!0)
        }, [v, p]);
        const [N] = Wt({
            controlled: u,
            default: c,
            name: "FieldControl",
            state: "value"
        }), A = u !== void 0, _ = A ? N : void 0, J = x(() => h.inputRef.current ? .value);
        return Qt(h.inputRef, q, _, J, !j, o), G("input", t, {
            ref: [r, M],
            state: D,
            props: [{
                id: q,
                disabled: j,
                name: U,
                ref: h.inputRef,
                "aria-labelledby": y,
                autoFocus: v,
                ...A ? {
                    value: _
                } : {
                    defaultValue: c
                },
                onChange(S) {
                    const P = S.currentTarget.value;
                    l ? .(P, kt(xt, S.nativeEvent)), R(P !== (f.initialValue ? ? "")), F(P !== ""), S.nativeEvent.defaultPrevented || (L(U), h.change(P))
                },
                onFocus() {
                    p(!0)
                },
                onBlur(S) {
                    w(!0), p(!1), $ === "onBlur" && h.commit(S.currentTarget.value)
                },
                onKeyDown(S) {
                    S.currentTarget.tagName === "INPUT" && S.key === "Enter" && (w(!0), h.commit(S.currentTarget.value))
                }
            }, m, S => h.getValidationProps(j, S)],
            stateAttributesMapping: Z
        })
    }),
    Hr = i.forwardRef(function(t, r) {
        const {
            render: n,
            className: s,
            style: a,
            disabled: o = !1,
            ...u
        } = t, {
            state: d,
            disabled: l
        } = X(!1), c = l || o, v = { ...d,
            disabled: c
        }, b = i.useMemo(() => ({
            disabled: c
        }), [c]), m = G("div", t, {
            ref: r,
            state: v,
            props: u,
            stateAttributesMapping: Z
        });
        return (0, Y.jsx)(Xe, {
            children: (0, Y.jsx)(We.Provider, {
                value: b,
                children: m
            })
        })
    }),
    Wr = i.forwardRef(function(t, r) {
        const {
            render: n,
            className: s,
            style: a,
            disabled: o = !1,
            ...u
        } = t, [d, l] = i.useState(void 0), c = Re(!0) ? .disabled || o, v = G("fieldset", t, {
            ref: r,
            state: {
                disabled: c
            },
            props: [{
                "aria-labelledby": d,
                disabled: c
            }, u]
        }), b = i.useMemo(() => ({
            legendId: d,
            setLegendId: l,
            disabled: c
        }), [d, l, c]);
        return (0, Y.jsx)(Ze.Provider, {
            value: b,
            children: v
        })
    }),
    Jr = i.forwardRef(function(t, r) {
        const {
            render: n,
            className: s,
            style: a,
            id: o,
            ...u
        } = t, {
            disabled: d,
            setLegendId: l
        } = Re(), c = He(o, l);
        return G("div", t, {
            state: {
                disabled: d
            },
            ref: r,
            props: [{
                id: c
            }, u]
        })
    });
export {
    Vr as $, $t as A, pe as At, Ir as B, Wt as C, pt as Ct, Kt as D, vt as Dt, Ht as E, k as Et, x as F, Pr as G, wr as H, kt as I, Nr as J, Ar as K, qr as L, Ke as M, W as N, Yt as O, Pe as Ot, jt as P, pr as Q, Tr as R, Z as S, ye as St, $r as T, B as Tt, Lr as U, hr as V, xr as W, Fr as X, Er as Y, Mr as Z, Qt as _, St as _t, zr as a, Dr as at, X as b, G as bt, Br as c, Rr as ct, Re as d, vr as dt, yr as et, Je as f, Ur as ft, H as g, wt as gt, er as h, Dt as ht, Gr as i, br as it, qt as j, Bt as k, K as kt, sr as l, gr as lt, ae as m, fr as mt, Wr as n, Or as nt, Kr as o, kr as ot, rr as p, Vt as pt, _r as q, Hr as r, xt as rt, Yr as s, jr as st, Jr as t, Sr as tt, Xe as u, mr as ut, Xt as v, $e as vt, se as w, mt as wt, Jt as x, je as xt, ze as y, O as yt, Cr as z
};