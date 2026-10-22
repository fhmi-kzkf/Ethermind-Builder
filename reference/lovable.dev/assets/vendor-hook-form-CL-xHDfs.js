import {
    o as qr
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as $r
} from "./vendor-react-Fx2PtaaM.js";
import {
    I as Hr,
    L as zr,
    R as Kr
} from "./vendor-schema-CyHzn7jr.js";
try {
    (function() {
        var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new r.Error().stack;
        s && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[s] = "9ee8aa02-33e0-46ea-9cc6-b3820333533a", r._sentryDebugIdIdentifier = "sentry-dbid-9ee8aa02-33e0-46ea-9cc6-b3820333533a")
    })()
} catch {}
var m = qr($r(), 1),
    he = r => r.type === "checkbox",
    ue = r => r instanceof Date,
    K = r => r == null,
    Ar = r => typeof r == "object",
    B = r => !K(r) && !Array.isArray(r) && Ar(r) && !ue(r),
    pr = r => B(r) && r.target ? he(r.target) ? r.target.checked : r.target.value : r,
    Zr = r => r.substring(0, r.search(/\.\d+(\.|$)/)) || r,
    xr = (r, s) => r.has(Zr(s)),
    Gr = r => {
        const s = r.constructor && r.constructor.prototype;
        return B(s) && s.hasOwnProperty("isPrototypeOf")
    },
    Ze = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";

function U(r) {
    let s;
    const e = Array.isArray(r),
        t = typeof FileList < "u" ? r instanceof FileList : !1;
    if (r instanceof Date) s = new Date(r);
    else if (!(Ze && (r instanceof Blob || t)) && (e || B(r)))
        if (s = e ? [] : Object.create(Object.getPrototypeOf(r)), !e && !Gr(r)) s = r;
        else
            for (const o in r) r.hasOwnProperty(o) && (s[o] = U(r[o]));
    else return r;
    return s
}
var pe = r => /^\w*$/.test(r),
    O = r => r === void 0,
    xe = r => Array.isArray(r) ? r.filter(Boolean) : [],
    Ge = r => xe(r.replace(/["|']|\]/g, "").split(/\.|\[/)),
    d = (r, s, e) => {
        if (!s || !B(r)) return e;
        const t = (pe(s) ? [s] : Ge(s)).reduce((o, a) => K(o) ? o : o[a], r);
        return O(t) || t === r ? O(r[s]) ? e : r[s] : t
    },
    G = r => typeof r == "boolean",
    D = (r, s, e) => {
        let t = -1;
        const o = pe(s) ? [s] : Ge(s),
            a = o.length,
            l = a - 1;
        for (; ++t < a;) {
            const c = o[t];
            let p = e;
            if (t !== l) {
                const _ = r[c];
                p = B(_) || Array.isArray(_) ? _ : isNaN(+o[t + 1]) ? {} : []
            }
            if (c === "__proto__" || c === "constructor" || c === "prototype") return;
            r[c] = p, r = r[c]
        }
    },
    be = {
        BLUR: "blur",
        FOCUS_OUT: "focusout",
        CHANGE: "change"
    },
    Q = {
        onBlur: "onBlur",
        onChange: "onChange",
        onSubmit: "onSubmit",
        onTouched: "onTouched",
        all: "all"
    },
    ie = {
        max: "max",
        min: "min",
        maxLength: "maxLength",
        minLength: "minLength",
        pattern: "pattern",
        required: "required",
        validate: "validate"
    },
    Ye = m.createContext(null);
Ye.displayName = "HookFormContext";
var we = () => m.useContext(Ye),
    Ft = r => {
        const {
            children: s,
            ...e
        } = r;
        return m.createElement(Ye.Provider, {
            value: e
        }, s)
    },
    wr = (r, s, e, t = !0) => {
        const o = {
            defaultValues: s._defaultValues
        };
        for (const a in r) Object.defineProperty(o, a, {
            get: () => {
                const l = a;
                return s._proxyFormState[l] !== Q.all && (s._proxyFormState[l] = !t || Q.all), e && (e[l] = !0), r[l]
            }
        });
        return o
    },
    ke = typeof window < "u" ? m.useLayoutEffect : m.useEffect;

function Yr(r) {
    const s = we(),
        {
            control: e = s.control,
            disabled: t,
            name: o,
            exact: a
        } = r || {},
        [l, c] = m.useState(e._formState),
        p = m.useRef({
            isDirty: !1,
            isLoading: !1,
            dirtyFields: !1,
            touchedFields: !1,
            validatingFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1
        });
    return ke(() => e._subscribe({
        name: o,
        formState: p.current,
        exact: a,
        callback: _ => {
            !t && c({ ...e._formState,
                ..._
            })
        }
    }), [o, t, a]), m.useEffect(() => {
        p.current.isValid && e._setValid(!0)
    }, [e]), m.useMemo(() => wr(l, e, p.current, !1), [l, e])
}
var Y = r => typeof r == "string",
    je = (r, s, e, t, o) => Y(r) ? (t && s.watch.add(r), d(e, r, o)) : Array.isArray(r) ? r.map(a => (t && s.watch.add(a), d(e, a))) : (t && (s.watchAll = !0), e),
    We = r => K(r) || !Ar(r);

function X(r, s, e = new WeakSet) {
    if (We(r) || We(s)) return Object.is(r, s);
    if (ue(r) && ue(s)) return r.getTime() === s.getTime();
    const t = Object.keys(r),
        o = Object.keys(s);
    if (t.length !== o.length) return !1;
    if (e.has(r) || e.has(s)) return !0;
    e.add(r), e.add(s);
    for (const a of t) {
        const l = r[a];
        if (!o.includes(a)) return !1;
        if (a !== "ref") {
            const c = s[a];
            if (ue(l) && ue(c) || B(l) && B(c) || Array.isArray(l) && Array.isArray(c) ? !X(l, c, e) : !Object.is(l, c)) return !1
        }
    }
    return !0
}

function Jr(r) {
    const s = we(),
        {
            control: e = s.control,
            name: t,
            defaultValue: o,
            disabled: a,
            exact: l,
            compute: c
        } = r || {},
        p = m.useRef(o),
        _ = m.useRef(c),
        x = m.useRef(void 0),
        V = m.useRef(e),
        F = m.useRef(t);
    _.current = c;
    const [j, P] = m.useState(() => {
        const v = e._getWatch(t, p.current);
        return _.current ? _.current(v) : v
    }), E = m.useCallback(v => {
        const y = je(t, e._names, v || e._formValues, !1, p.current);
        return _.current ? _.current(y) : y
    }, [e._formValues, e._names, t]), I = m.useCallback(v => {
        if (!a) {
            const y = je(t, e._names, v || e._formValues, !1, p.current);
            if (_.current) {
                const w = _.current(y);
                X(w, x.current) || (P(w), x.current = w)
            } else P(y)
        }
    }, [e._formValues, e._names, a, t]);
    ke(() => ((V.current !== e || !X(F.current, t)) && (V.current = e, F.current = t, I()), e._subscribe({
        name: t,
        formState: {
            values: !0
        },
        exact: l,
        callback: v => {
            I(v.values)
        }
    })), [e, l, t, I]), m.useEffect(() => e._removeUnmounted());
    const q = V.current !== e,
        A = F.current,
        T = m.useMemo(() => {
            if (a) return null;
            const v = !q && !X(A, t);
            return q || v ? E() : null
        }, [a, q, t, A, E]);
    return T !== null ? T : j
}

function Qr(r) {
    const s = we(),
        {
            name: e,
            disabled: t,
            control: o = s.control,
            shouldUnregister: a,
            defaultValue: l
        } = r,
        c = xr(o._names.array, e),
        p = Jr({
            control: o,
            name: e,
            defaultValue: m.useMemo(() => d(o._formValues, e, d(o._defaultValues, e, l)), [o, e, l]),
            exact: !0
        }),
        _ = Yr({
            control: o,
            name: e,
            exact: !0
        }),
        x = m.useRef(r),
        V = m.useRef(void 0),
        F = m.useRef(o.register(e, { ...r.rules,
            value: p,
            ...G(r.disabled) ? {
                disabled: r.disabled
            } : {}
        }));
    x.current = r;
    const j = m.useMemo(() => Object.defineProperties({}, {
            invalid: {
                enumerable: !0,
                get: () => !!d(_.errors, e)
            },
            isDirty: {
                enumerable: !0,
                get: () => !!d(_.dirtyFields, e)
            },
            isTouched: {
                enumerable: !0,
                get: () => !!d(_.touchedFields, e)
            },
            isValidating: {
                enumerable: !0,
                get: () => !!d(_.validatingFields, e)
            },
            error: {
                enumerable: !0,
                get: () => d(_.errors, e)
            }
        }), [_, e]),
        P = m.useCallback(A => F.current.onChange({
            target: {
                value: pr(A),
                name: e
            },
            type: be.CHANGE
        }), [e]),
        E = m.useCallback(() => F.current.onBlur({
            target: {
                value: d(o._formValues, e),
                name: e
            },
            type: be.BLUR
        }), [e, o._formValues]),
        I = m.useCallback(A => {
            const T = d(o._fields, e);
            T && A && (T._f.ref = {
                focus: () => A.focus && A.focus(),
                select: () => A.select && A.select(),
                setCustomValidity: v => A.setCustomValidity(v),
                reportValidity: () => A.reportValidity()
            })
        }, [o._fields, e]),
        q = m.useMemo(() => ({
            name: e,
            value: p,
            ...G(t) || _.disabled ? {
                disabled: _.disabled || t
            } : {},
            onChange: P,
            onBlur: E,
            ref: I
        }), [e, t, _.disabled, P, E, I, p]);
    return m.useEffect(() => {
        const A = o._options.shouldUnregister || a,
            T = V.current;
        T && T !== e && !c && o.unregister(T), o.register(e, { ...x.current.rules,
            ...G(x.current.disabled) ? {
                disabled: x.current.disabled
            } : {}
        });
        const v = (y, w) => {
            const S = d(o._fields, y);
            S && S._f && (S._f.mount = w)
        };
        if (v(e, !0), A) {
            const y = U(d(o._options.defaultValues, e, x.current.defaultValue));
            D(o._defaultValues, e, y), O(d(o._formValues, e)) && D(o._formValues, e, y)
        }
        return !c && o.register(e), V.current = e, () => {
            (c ? A && !o._state.action : A) ? o.unregister(e): v(e, !1)
        }
    }, [e, o, c, a]), m.useEffect(() => {
        o._setDisabledField({
            disabled: t,
            name: e
        })
    }, [t, e, o]), m.useMemo(() => ({
        field: q,
        formState: _,
        fieldState: j
    }), [q, _, j])
}
var At = r => r.render(Qr(r)),
    Je = (r, s, e, t, o) => s ? { ...e[r],
        types: { ...e[r] && e[r].types ? e[r].types : {},
            [t]: o || !0
        }
    } : {},
    Z = r => Array.isArray(r) ? r : [r],
    cr = () => {
        let r = [];
        return {
            get observers() {
                return r
            },
            next: o => {
                for (const a of r) a.next && a.next(o)
            },
            subscribe: o => (r.push(o), {
                unsubscribe: () => {
                    r = r.filter(a => a !== o)
                }
            }),
            unsubscribe: () => {
                r = []
            }
        }
    };

function kr(r, s) {
    const e = {};
    for (const t in r)
        if (r.hasOwnProperty(t)) {
            const o = r[t],
                a = s[t];
            if (o && B(o) && a) {
                const l = kr(o, a);
                B(l) && (e[t] = l)
            } else r[t] && (e[t] = a)
        }
    return e
}
var W = r => B(r) && !Object.keys(r).length,
    Qe = r => r.type === "file",
    ee = r => typeof r == "function",
    Ve = r => {
        if (!Ze) return !1;
        const s = r ? r.ownerDocument : 0;
        return r instanceof(s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement)
    },
    Er = r => r.type === "select-multiple",
    Xe = r => r.type === "radio",
    Xr = r => Xe(r) || he(r),
    Ue = r => Ve(r) && r.isConnected;

function et(r, s) {
    const e = s.slice(0, -1).length;
    let t = 0;
    for (; t < e;) r = O(r) ? t++ : r[s[t++]];
    return r
}

function rt(r) {
    for (const s in r)
        if (r.hasOwnProperty(s) && !O(r[s])) return !1;
    return !0
}

function N(r, s) {
    const e = Array.isArray(s) ? s : pe(s) ? [s] : Ge(s),
        t = e.length === 1 ? r : et(r, e),
        o = e.length - 1,
        a = e[o];
    return t && delete t[a], o !== 0 && (B(t) && W(t) || Array.isArray(t) && rt(t)) && N(r, e.slice(0, -1)), r
}
var tt = r => {
    for (const s in r)
        if (ee(r[s])) return !0;
    return !1
};

function Sr(r) {
    return Array.isArray(r) || B(r) && !tt(r)
}

function qe(r, s = {}) {
    for (const e in r) {
        const t = r[e];
        Sr(t) ? (s[e] = Array.isArray(t) ? [] : {}, qe(t, s[e])) : O(t) || (s[e] = !0)
    }
    return s
}

function fe(r, s, e) {
    e || (e = qe(s));
    for (const t in r) {
        const o = r[t];
        if (Sr(o)) O(s) || We(e[t]) ? e[t] = qe(o, Array.isArray(o) ? [] : {}) : fe(o, K(s) ? {} : s[t], e[t]);
        else {
            const a = s[t];
            e[t] = !X(o, a)
        }
    }
    return e
}
var fr = {
        value: !1,
        isValid: !1
    },
    dr = {
        value: !0,
        isValid: !0
    },
    Dr = r => {
        if (Array.isArray(r)) {
            if (r.length > 1) {
                const s = r.filter(e => e && e.checked && !e.disabled).map(e => e.value);
                return {
                    value: s,
                    isValid: !!s.length
                }
            }
            return r[0].checked && !r[0].disabled ? r[0].attributes && !O(r[0].attributes.value) ? O(r[0].value) || r[0].value === "" ? dr : {
                value: r[0].value,
                isValid: !0
            } : dr : fr
        }
        return fr
    },
    Cr = (r, {
        valueAsNumber: s,
        valueAsDate: e,
        setValueAs: t
    }) => O(r) ? r : s ? r === "" ? NaN : r && +r : e && Y(r) ? new Date(r) : t ? t(r) : r,
    yr = {
        isValid: !1,
        value: null
    },
    Or = r => Array.isArray(r) ? r.reduce((s, e) => e && e.checked && !e.disabled ? {
        isValid: !0,
        value: e.value
    } : s, yr) : yr;

function gr(r) {
    const s = r.ref;
    return Qe(s) ? s.files : Xe(s) ? Or(r.refs).value : Er(s) ? [...s.selectedOptions].map(({
        value: e
    }) => e) : he(s) ? Dr(r.refs).value : Cr(O(s.value) ? r.ref.value : s.value, r)
}
var st = (r, s, e, t) => {
        const o = {};
        for (const a of r) {
            const l = d(s, a);
            l && D(o, a, l._f)
        }
        return {
            criteriaMode: e,
            names: [...r],
            fields: o,
            shouldUseNativeValidation: t
        }
    },
    Fe = r => r instanceof RegExp,
    ve = r => O(r) ? r : Fe(r) ? r.source : B(r) ? Fe(r.value) ? r.value.source : r.value : r,
    de = r => ({
        isOnSubmit: !r || r === Q.onSubmit,
        isOnBlur: r === Q.onBlur,
        isOnChange: r === Q.onChange,
        isOnAll: r === Q.all,
        isOnTouch: r === Q.onTouched
    }),
    vr = "AsyncFunction",
    it = r => !!r && !!r.validate && !!(ee(r.validate) && r.validate.constructor.name === vr || B(r.validate) && Object.values(r.validate).find(s => s.constructor.name === vr)),
    at = r => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate),
    $e = (r, s, e) => !e && (s.watchAll || s.watch.has(r) || [...s.watch].some(t => r.startsWith(t) && /^\.\w+/.test(r.slice(t.length)))),
    ye = (r, s, e, t) => {
        for (const o of e || Object.keys(r)) {
            const a = d(r, o);
            if (a) {
                const {
                    _f: l,
                    ...c
                } = a;
                if (l) {
                    if (l.refs && l.refs[0] && s(l.refs[0], o) && !t) return !0;
                    if (l.ref && s(l.ref, l.name) && !t) return !0;
                    if (ye(c, s)) break
                } else if (B(c) && ye(c, s)) break
            }
        }
    };

function hr(r, s, e) {
    const t = d(r, e);
    if (t || pe(e)) return {
        error: t,
        name: e
    };
    const o = e.split(".");
    for (; o.length;) {
        const a = o.join("."),
            l = d(s, a),
            c = d(r, a);
        if (l && !Array.isArray(l) && e !== a) return {
            name: e
        };
        if (c && c.type) return {
            name: a,
            error: c
        };
        if (c && c.root && c.root.type) return {
            name: `${a}.root`,
            error: c.root
        };
        o.pop()
    }
    return {
        name: e
    }
}
var nt = (r, s, e, t) => {
        e(r);
        const {
            name: o,
            ...a
        } = r;
        return W(a) || Object.keys(a).length >= Object.keys(s).length || Object.keys(a).find(l => s[l] === (!t || Q.all))
    },
    ot = (r, s, e) => !r || !s || r === s || Z(r).some(t => t && (e ? t === s : t.startsWith(s) || s.startsWith(t))),
    ut = (r, s, e, t, o) => o.isOnAll ? !1 : !e && o.isOnTouch ? !(s || r) : (e ? t.isOnBlur : o.isOnBlur) ? !r : (e ? t.isOnChange : o.isOnChange) ? r : !0,
    lt = (r, s) => !xe(d(r, s)).length && N(r, s),
    Ur = (r, s, e) => {
        const t = Z(d(r, e));
        return D(t, "root", s[e]), D(r, e, t), r
    };

function _r(r, s, e = "validate") {
    if (Y(r) || Array.isArray(r) && r.every(Y) || G(r) && !r) return {
        type: e,
        message: Y(r) ? r : "",
        ref: s
    }
}
var ce = r => B(r) && !Fe(r) ? r : {
        value: r,
        message: ""
    },
    He = async (r, s, e, t, o, a) => {
        const {
            ref: l,
            refs: c,
            required: p,
            maxLength: _,
            minLength: x,
            min: V,
            max: F,
            pattern: j,
            validate: P,
            name: E,
            valueAsNumber: I,
            mount: q
        } = r._f, A = d(e, E);
        if (!q || s.has(E)) return {};
        const T = c ? c[0] : l,
            v = k => {
                o && T.reportValidity && (T.setCustomValidity(G(k) ? "" : k || ""), T.reportValidity())
            },
            y = {},
            w = Xe(l),
            S = he(l),
            se = w || S,
            H = (I || Qe(l)) && O(l.value) && O(A) || Ve(l) && l.value === "" || A === "" || Array.isArray(A) && !A.length,
            oe = Je.bind(null, E, t, y),
            re = (k, M, L, $ = ie.maxLength, z = ie.minLength) => {
                const te = k ? M : L;
                y[E] = {
                    type: k ? $ : z,
                    message: te,
                    ref: l,
                    ...oe(k ? $ : z, te)
                }
            };
        if (a ? !Array.isArray(A) || !A.length : p && (!se && (H || K(A)) || G(A) && !A || S && !Dr(c).isValid || w && !Or(c).isValid)) {
            const {
                value: k,
                message: M
            } = Y(p) ? {
                value: !!p,
                message: p
            } : ce(p);
            if (k && (y[E] = {
                    type: ie.required,
                    message: M,
                    ref: T,
                    ...oe(ie.required, M)
                }, !t)) return v(M), y
        }
        if (!H && (!K(V) || !K(F))) {
            let k, M;
            const L = ce(F),
                $ = ce(V);
            if (!K(A) && !isNaN(A)) {
                const z = l.valueAsNumber || A && +A;
                K(L.value) || (k = z > L.value), K($.value) || (M = z < $.value)
            } else {
                const z = l.valueAsDate || new Date(A),
                    te = _e => new Date(new Date().toDateString() + " " + _e),
                    ge = l.type == "time",
                    le = l.type == "week";
                Y(L.value) && A && (k = ge ? te(A) > te(L.value) : le ? A > L.value : z > new Date(L.value)), Y($.value) && A && (M = ge ? te(A) < te($.value) : le ? A < $.value : z < new Date($.value))
            }
            if ((k || M) && (re(!!k, L.message, $.message, ie.max, ie.min), !t)) return v(y[E].message), y
        }
        if ((_ || x) && !H && (Y(A) || a && Array.isArray(A))) {
            const k = ce(_),
                M = ce(x),
                L = !K(k.value) && A.length > +k.value,
                $ = !K(M.value) && A.length < +M.value;
            if ((L || $) && (re(L, k.message, M.message), !t)) return v(y[E].message), y
        }
        if (j && !H && Y(A)) {
            const {
                value: k,
                message: M
            } = ce(j);
            if (Fe(k) && !A.match(k) && (y[E] = {
                    type: ie.pattern,
                    message: M,
                    ref: l,
                    ...oe(ie.pattern, M)
                }, !t)) return v(M), y
        }
        if (P) {
            if (ee(P)) {
                const k = _r(await P(A, e), T);
                if (k && (y[E] = { ...k,
                        ...oe(ie.validate, k.message)
                    }, !t)) return v(k.message), y
            } else if (B(P)) {
                let k = {};
                for (const M in P) {
                    if (!W(k) && !t) break;
                    const L = _r(await P[M](A, e), T, M);
                    L && (k = { ...L,
                        ...oe(M, L.message)
                    }, v(L.message), t && (y[E] = k))
                }
                if (!W(k) && (y[E] = {
                        ref: T,
                        ...k
                    }, !t)) return y
            }
        }
        return v(!0), y
    },
    ct = {
        mode: Q.onSubmit,
        reValidateMode: Q.onChange,
        shouldFocusError: !0
    };

function ft(r = {}) {
    let s = { ...ct,
            ...r
        },
        e = {
            submitCount: 0,
            isDirty: !1,
            isReady: !1,
            isLoading: ee(s.defaultValues),
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            validatingFields: {},
            errors: s.errors || {},
            disabled: s.disabled || !1
        },
        t = {},
        o = B(s.defaultValues) || B(s.values) ? U(s.defaultValues || s.values) || {} : {},
        a = s.shouldUnregister ? {} : U(o),
        l = {
            action: !1,
            mount: !1,
            watch: !1
        },
        c = {
            mount: new Set,
            disabled: new Set,
            unMount: new Set,
            array: new Set,
            watch: new Set
        },
        p, _ = 0;
    const x = {
        isDirty: !1,
        dirtyFields: !1,
        validatingFields: !1,
        touchedFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1
    };
    let V = { ...x
    };
    const F = {
            array: cr(),
            state: cr()
        },
        j = s.criteriaMode === Q.all,
        P = i => n => {
            clearTimeout(_), _ = setTimeout(i, n)
        },
        E = async i => {
            if (!s.disabled && (x.isValid || V.isValid || i)) {
                const n = s.resolver ? W((await S()).errors) : await H(t, !0);
                n !== e.isValid && F.state.next({
                    isValid: n
                })
            }
        },
        I = (i, n) => {
            !s.disabled && (x.isValidating || x.validatingFields || V.isValidating || V.validatingFields) && ((i || Array.from(c.mount)).forEach(u => {
                u && (n ? D(e.validatingFields, u, n) : N(e.validatingFields, u))
            }), F.state.next({
                validatingFields: e.validatingFields,
                isValidating: !W(e.validatingFields)
            }))
        },
        q = (i, n = [], u, h, g = !0, f = !0) => {
            if (h && u && !s.disabled) {
                if (l.action = !0, f && Array.isArray(d(t, i))) {
                    const b = u(d(t, i), h.argA, h.argB);
                    g && D(t, i, b)
                }
                if (f && Array.isArray(d(e.errors, i))) {
                    const b = u(d(e.errors, i), h.argA, h.argB);
                    g && D(e.errors, i, b), lt(e.errors, i)
                }
                if ((x.touchedFields || V.touchedFields) && f && Array.isArray(d(e.touchedFields, i))) {
                    const b = u(d(e.touchedFields, i), h.argA, h.argB);
                    g && D(e.touchedFields, i, b)
                }(x.dirtyFields || V.dirtyFields) && (e.dirtyFields = fe(o, a)), F.state.next({
                    name: i,
                    isDirty: re(i, n),
                    dirtyFields: e.dirtyFields,
                    errors: e.errors,
                    isValid: e.isValid
                })
            } else D(a, i, n)
        },
        A = (i, n) => {
            D(e.errors, i, n), F.state.next({
                errors: e.errors
            })
        },
        T = i => {
            e.errors = i, F.state.next({
                errors: e.errors,
                isValid: !1
            })
        },
        v = (i, n, u, h) => {
            const g = d(t, i);
            if (g) {
                const f = d(a, i, O(u) ? d(o, i) : u);
                O(f) || h && h.defaultChecked || n ? D(a, i, n ? f : gr(g._f)) : L(i, f), l.mount && !l.action && E()
            }
        },
        y = (i, n, u, h, g) => {
            let f = !1,
                b = !1;
            const C = {
                name: i
            };
            if (!s.disabled) {
                if (!u || h) {
                    (x.isDirty || V.isDirty) && (b = e.isDirty, e.isDirty = C.isDirty = re(), f = b !== C.isDirty);
                    const R = X(d(o, i), n);
                    b = !!d(e.dirtyFields, i), R ? N(e.dirtyFields, i) : D(e.dirtyFields, i, !0), C.dirtyFields = e.dirtyFields, f = f || (x.dirtyFields || V.dirtyFields) && b !== !R
                }
                if (u) {
                    const R = d(e.touchedFields, i);
                    R || (D(e.touchedFields, i, u), C.touchedFields = e.touchedFields, f = f || (x.touchedFields || V.touchedFields) && R !== u)
                }
                f && g && F.state.next(C)
            }
            return f ? C : {}
        },
        w = (i, n, u, h) => {
            const g = d(e.errors, i),
                f = (x.isValid || V.isValid) && G(n) && e.isValid !== n;
            if (s.delayError && u ? (p = P(() => A(i, u)), p(s.delayError)) : (clearTimeout(_), p = null, u ? D(e.errors, i, u) : N(e.errors, i)), (u ? !X(g, u) : g) || !W(h) || f) {
                const b = { ...h,
                    ...f && G(n) ? {
                        isValid: n
                    } : {},
                    errors: e.errors,
                    name: i
                };
                e = { ...e,
                    ...b
                }, F.state.next(b)
            }
        },
        S = async i => {
            I(i, !0);
            const n = await s.resolver(a, s.context, st(i || c.mount, t, s.criteriaMode, s.shouldUseNativeValidation));
            return I(i), n
        },
        se = async i => {
            const {
                errors: n
            } = await S(i);
            if (i)
                for (const u of i) {
                    const h = d(n, u);
                    h ? D(e.errors, u, h) : N(e.errors, u)
                } else e.errors = n;
            return n
        },
        H = async (i, n, u = {
            valid: !0
        }) => {
            for (const h in i) {
                const g = i[h];
                if (g) {
                    const {
                        _f: f,
                        ...b
                    } = g;
                    if (f) {
                        const C = c.array.has(f.name),
                            R = g._f && it(g._f);
                        R && x.validatingFields && I([f.name], !0);
                        const J = await He(g, c.disabled, a, j, s.shouldUseNativeValidation && !n, C);
                        if (R && x.validatingFields && I([f.name]), J[f.name] && (u.valid = !1, n)) break;
                        !n && (d(J, f.name) ? C ? Ur(e.errors, J, f.name) : D(e.errors, f.name, J[f.name]) : N(e.errors, f.name))
                    }!W(b) && await H(b, n, u)
                }
            }
            return u.valid
        },
        oe = () => {
            for (const i of c.unMount) {
                const n = d(t, i);
                n && (n._f.refs ? n._f.refs.every(u => !Ue(u)) : !Ue(n._f.ref)) && Ee(i)
            }
            c.unMount = new Set
        },
        re = (i, n) => !s.disabled && (i && n && D(a, i, n), !X(_e(), o)),
        k = (i, n, u) => je(i, c, { ...l.mount ? a : O(n) ? o : Y(i) ? {
                [i]: n
            } : n
        }, u, n),
        M = i => xe(d(l.mount ? a : o, i, s.shouldUnregister ? d(o, i, []) : [])),
        L = (i, n, u = {}) => {
            const h = d(t, i);
            let g = n;
            if (h) {
                const f = h._f;
                f && (!f.disabled && D(a, i, Cr(n, f)), g = Ve(f.ref) && K(n) ? "" : n, Er(f.ref) ? [...f.ref.options].forEach(b => b.selected = g.includes(b.value)) : f.refs ? he(f.ref) ? f.refs.forEach(b => {
                    (!b.defaultChecked || !b.disabled) && (Array.isArray(g) ? b.checked = !!g.find(C => C === b.value) : b.checked = g === b.value || !!g)
                }) : f.refs.forEach(b => b.checked = b.value === g) : Qe(f.ref) ? f.ref.value = "" : (f.ref.value = g, f.ref.type || F.state.next({
                    name: i,
                    values: U(a)
                })))
            }(u.shouldDirty || u.shouldTouch) && y(i, g, u.shouldTouch, u.shouldDirty, !0), u.shouldValidate && le(i)
        },
        $ = (i, n, u) => {
            for (const h in n) {
                if (!n.hasOwnProperty(h)) return;
                const g = n[h],
                    f = i + "." + h,
                    b = d(t, f);
                (c.array.has(i) || B(g) || b && !b._f) && !ue(g) ? $(f, g, u) : L(f, g, u)
            }
        },
        z = (i, n, u = {}) => {
            const h = d(t, i),
                g = c.array.has(i),
                f = U(n);
            D(a, i, f), g ? (F.array.next({
                name: i,
                values: U(a)
            }), (x.isDirty || x.dirtyFields || V.isDirty || V.dirtyFields) && u.shouldDirty && F.state.next({
                name: i,
                dirtyFields: fe(o, a),
                isDirty: re(i, f)
            })) : h && !h._f && !K(f) ? $(i, f, u) : L(i, f, u), $e(i, c) && F.state.next({ ...e,
                name: i
            }), F.state.next({
                name: l.mount ? i : void 0,
                values: U(a)
            })
        },
        te = async i => {
            l.mount = !0;
            const n = i.target;
            let u = n.name,
                h = !0;
            const g = d(t, u),
                f = R => {
                    h = Number.isNaN(R) || ue(R) && isNaN(R.getTime()) || X(R, d(a, u, R))
                },
                b = de(s.mode),
                C = de(s.reValidateMode);
            if (g) {
                let R, J;
                const me = n.type ? gr(g._f) : pr(i),
                    ae = i.type === be.BLUR || i.type === be.FOCUS_OUT,
                    Br = !at(g._f) && !s.resolver && !d(e.errors, u) && !g._f.deps || ut(ae, d(e.touchedFields, u), e.isSubmitted, C, b),
                    Ce = $e(u, c, ae);
                D(a, u, me), ae ? (!n || !n.readOnly) && (g._f.onBlur && g._f.onBlur(i), p && p(0)) : g._f.onChange && g._f.onChange(i);
                const Oe = y(u, me, ae),
                    jr = !W(Oe) || Ce;
                if (!ae && F.state.next({
                        name: u,
                        type: i.type,
                        values: U(a)
                    }), Br) return (x.isValid || V.isValid) && (s.mode === "onBlur" ? ae && E() : ae || E()), jr && F.state.next({
                    name: u,
                    ...Ce ? {} : Oe
                });
                if (!ae && Ce && F.state.next({ ...e
                    }), s.resolver) {
                    const {
                        errors: ur
                    } = await S([u]);
                    if (f(me), h) {
                        const Wr = hr(e.errors, t, u),
                            lr = hr(ur, t, Wr.name || u);
                        R = lr.error, u = lr.name, J = W(ur)
                    }
                } else I([u], !0), R = (await He(g, c.disabled, a, j, s.shouldUseNativeValidation))[u], I([u]), f(me), h && (R ? J = !1 : (x.isValid || V.isValid) && (J = await H(t, !0)));
                h && (g._f.deps && (!Array.isArray(g._f.deps) || g._f.deps.length > 0) && le(g._f.deps), w(u, J, R, Oe))
            }
        },
        ge = (i, n) => {
            if (d(e.errors, n) && i.focus) return i.focus(), 1
        },
        le = async (i, n = {}) => {
            let u, h;
            const g = Z(i);
            if (s.resolver) {
                const f = await se(O(i) ? i : g);
                u = W(f), h = i ? !g.some(b => d(f, b)) : u
            } else i ? (h = (await Promise.all(g.map(async f => {
                const b = d(t, f);
                return await H(b && b._f ? {
                    [f]: b
                } : b)
            }))).every(Boolean), !(!h && !e.isValid) && E()) : h = u = await H(t);
            return F.state.next({ ...!Y(i) || (x.isValid || V.isValid) && u !== e.isValid ? {} : {
                    name: i
                },
                ...s.resolver || !i ? {
                    isValid: u
                } : {},
                errors: e.errors
            }), n.shouldFocus && !h && ye(t, ge, i ? g : c.mount), h
        },
        _e = (i, n) => {
            let u = { ...l.mount ? a : o
            };
            return n && (u = kr(n.dirtyFields ? e.dirtyFields : e.touchedFields, u)), O(i) ? u : Y(i) ? d(u, i) : i.map(h => d(u, h))
        },
        er = (i, n) => ({
            invalid: !!d((n || e).errors, i),
            isDirty: !!d((n || e).dirtyFields, i),
            error: d((n || e).errors, i),
            isValidating: !!d(e.validatingFields, i),
            isTouched: !!d((n || e).touchedFields, i)
        }),
        Rr = i => {
            i && Z(i).forEach(n => N(e.errors, n)), F.state.next({
                errors: i ? e.errors : {}
            })
        },
        rr = (i, n, u) => {
            const h = (d(t, i, {
                    _f: {}
                })._f || {}).ref,
                {
                    ref: g,
                    message: f,
                    type: b,
                    ...C
                } = d(e.errors, i) || {};
            D(e.errors, i, { ...C,
                ...n,
                ref: h
            }), F.state.next({
                name: i,
                errors: e.errors,
                isValid: !1
            }), u && u.shouldFocus && h && h.focus && h.focus()
        },
        Mr = (i, n) => ee(i) ? F.state.subscribe({
            next: u => "values" in u && i(k(void 0, n), u)
        }) : k(i, n, !0),
        tr = i => F.state.subscribe({
            next: n => {
                ot(i.name, n.name, i.exact) && nt(n, i.formState || x, Ir, i.reRenderRoot) && i.callback({
                    values: { ...a
                    },
                    ...e,
                    ...n,
                    defaultValues: o
                })
            }
        }).unsubscribe,
        Tr = i => (l.mount = !0, V = { ...V,
            ...i.formState
        }, tr({ ...i,
            formState: V
        })),
        Ee = (i, n = {}) => {
            for (const u of i ? Z(i) : c.mount) c.mount.delete(u), c.array.delete(u), n.keepValue || (N(t, u), N(a, u)), !n.keepError && N(e.errors, u), !n.keepDirty && N(e.dirtyFields, u), !n.keepTouched && N(e.touchedFields, u), !n.keepIsValidating && N(e.validatingFields, u), !s.shouldUnregister && !n.keepDefaultValue && N(o, u);
            F.state.next({
                values: U(a)
            }), F.state.next({ ...e,
                ...n.keepDirty ? {
                    isDirty: re()
                } : {}
            }), !n.keepIsValid && E()
        },
        sr = ({
            disabled: i,
            name: n
        }) => {
            (G(i) && l.mount || i || c.disabled.has(n)) && (i ? c.disabled.add(n) : c.disabled.delete(n))
        },
        Se = (i, n = {}) => {
            let u = d(t, i);
            const h = G(n.disabled) || G(s.disabled);
            return D(t, i, { ...u || {},
                _f: { ...u && u._f ? u._f : {
                        ref: {
                            name: i
                        }
                    },
                    name: i,
                    mount: !0,
                    ...n
                }
            }), c.mount.add(i), u ? sr({
                disabled: G(n.disabled) ? n.disabled : s.disabled,
                name: i
            }) : v(i, !0, n.value), { ...h ? {
                    disabled: n.disabled || s.disabled
                } : {},
                ...s.progressive ? {
                    required: !!n.required,
                    min: ve(n.min),
                    max: ve(n.max),
                    minLength: ve(n.minLength),
                    maxLength: ve(n.maxLength),
                    pattern: ve(n.pattern)
                } : {},
                name: i,
                onChange: te,
                onBlur: te,
                ref: g => {
                    if (g) {
                        Se(i, n), u = d(t, i);
                        const f = O(g.value) && g.querySelectorAll && g.querySelectorAll("input,select,textarea")[0] || g,
                            b = Xr(f),
                            C = u._f.refs || [];
                        if (b ? C.find(R => R === f) : f === u._f.ref) return;
                        D(t, i, {
                            _f: { ...u._f,
                                ...b ? {
                                    refs: [...C.filter(Ue), f, ...Array.isArray(d(o, i)) ? [{}] : []],
                                    ref: {
                                        type: f.type,
                                        name: i
                                    }
                                } : {
                                    ref: f
                                }
                            }
                        }), v(i, !1, void 0, f)
                    } else u = d(t, i, {}), u._f && (u._f.mount = !1), (s.shouldUnregister || n.shouldUnregister) && !(xr(c.array, i) && l.action) && c.unMount.add(i)
                }
            }
        },
        De = () => s.shouldFocusError && ye(t, ge, c.mount),
        Lr = i => {
            G(i) && (F.state.next({
                disabled: i
            }), ye(t, (n, u) => {
                const h = d(t, u);
                h && (n.disabled = h._f.disabled || i, Array.isArray(h._f.refs) && h._f.refs.forEach(g => {
                    g.disabled = h._f.disabled || i
                }))
            }, 0, !1))
        },
        ir = (i, n) => async u => {
            let h;
            u && (u.preventDefault && u.preventDefault(), u.persist && u.persist());
            let g = U(a);
            if (F.state.next({
                    isSubmitting: !0
                }), s.resolver) {
                const {
                    errors: f,
                    values: b
                } = await S();
                e.errors = f, g = U(b)
            } else await H(t);
            if (c.disabled.size)
                for (const f of c.disabled) N(g, f);
            if (N(e.errors, "root"), W(e.errors)) {
                F.state.next({
                    errors: {}
                });
                try {
                    await i(g, u)
                } catch (f) {
                    h = f
                }
            } else n && await n({ ...e.errors
            }, u), De(), setTimeout(De);
            if (F.state.next({
                    isSubmitted: !0,
                    isSubmitting: !1,
                    isSubmitSuccessful: W(e.errors) && !h,
                    submitCount: e.submitCount + 1,
                    errors: e.errors
                }), h) throw h
        },
        Nr = (i, n = {}) => {
            d(t, i) && (O(n.defaultValue) ? z(i, U(d(o, i))) : (z(i, n.defaultValue), D(o, i, U(n.defaultValue))), n.keepTouched || N(e.touchedFields, i), n.keepDirty || (N(e.dirtyFields, i), e.isDirty = n.defaultValue ? re(i, U(d(o, i))) : re()), n.keepError || (N(e.errors, i), x.isValid && E()), F.state.next({ ...e
            }))
        },
        ar = (i, n = {}) => {
            const u = i ? U(i) : o,
                h = U(u),
                g = W(i),
                f = g ? o : h;
            if (n.keepDefaultValues || (o = u), !n.keepValues) {
                if (n.keepDirtyValues) {
                    const b = new Set([...c.mount, ...Object.keys(fe(o, a))]);
                    for (const C of Array.from(b)) d(e.dirtyFields, C) ? D(f, C, d(a, C)) : z(C, d(f, C))
                } else {
                    if (Ze && O(i))
                        for (const b of c.mount) {
                            const C = d(t, b);
                            if (C && C._f) {
                                const R = Array.isArray(C._f.refs) ? C._f.refs[0] : C._f.ref;
                                if (Ve(R)) {
                                    const J = R.closest("form");
                                    if (J) {
                                        J.reset();
                                        break
                                    }
                                }
                            }
                        }
                    if (n.keepFieldsRef)
                        for (const b of c.mount) z(b, d(f, b));
                    else t = {}
                }
                a = s.shouldUnregister ? n.keepDefaultValues ? U(o) : {} : U(f), F.array.next({
                    values: { ...f
                    }
                }), F.state.next({
                    values: { ...f
                    }
                })
            }
            c = {
                mount: n.keepDirtyValues ? c.mount : new Set,
                unMount: new Set,
                array: new Set,
                disabled: new Set,
                watch: new Set,
                watchAll: !1,
                focus: ""
            }, l.mount = !x.isValid || !!n.keepIsValid || !!n.keepDirtyValues || !s.shouldUnregister && !W(f), l.watch = !!s.shouldUnregister, F.state.next({
                submitCount: n.keepSubmitCount ? e.submitCount : 0,
                isDirty: g ? !1 : n.keepDirty ? e.isDirty : !!(n.keepDefaultValues && !X(i, o)),
                isSubmitted: n.keepIsSubmitted ? e.isSubmitted : !1,
                dirtyFields: g ? {} : n.keepDirtyValues ? n.keepDefaultValues && a ? fe(o, a) : e.dirtyFields : n.keepDefaultValues && i ? fe(o, i) : n.keepDirty ? e.dirtyFields : {},
                touchedFields: n.keepTouched ? e.touchedFields : {},
                errors: n.keepErrors ? e.errors : {},
                isSubmitSuccessful: n.keepIsSubmitSuccessful ? e.isSubmitSuccessful : !1,
                isSubmitting: !1,
                defaultValues: o
            })
        },
        nr = (i, n) => ar(ee(i) ? i(a) : i, n),
        Pr = (i, n = {}) => {
            const u = d(t, i),
                h = u && u._f;
            if (h) {
                const g = h.refs ? h.refs[0] : h.ref;
                g.focus && (g.focus(), n.shouldSelect && ee(g.select) && g.select())
            }
        },
        Ir = i => {
            e = { ...e,
                ...i
            }
        },
        or = {
            control: {
                register: Se,
                unregister: Ee,
                getFieldState: er,
                handleSubmit: ir,
                setError: rr,
                _subscribe: tr,
                _runSchema: S,
                _focusError: De,
                _getWatch: k,
                _getDirty: re,
                _setValid: E,
                _setFieldArray: q,
                _setDisabledField: sr,
                _setErrors: T,
                _getFieldArray: M,
                _reset: ar,
                _resetDefaultValues: () => ee(s.defaultValues) && s.defaultValues().then(i => {
                    nr(i, s.resetOptions), F.state.next({
                        isLoading: !1
                    })
                }),
                _removeUnmounted: oe,
                _disableForm: Lr,
                _subjects: F,
                _proxyFormState: x,
                get _fields() {
                    return t
                },
                get _formValues() {
                    return a
                },
                get _state() {
                    return l
                },
                set _state(i) {
                    l = i
                },
                get _defaultValues() {
                    return o
                },
                get _names() {
                    return c
                },
                set _names(i) {
                    c = i
                },
                get _formState() {
                    return e
                },
                get _options() {
                    return s
                },
                set _options(i) {
                    s = { ...s,
                        ...i
                    }
                }
            },
            subscribe: Tr,
            trigger: le,
            register: Se,
            handleSubmit: ir,
            watch: Mr,
            setValue: z,
            getValues: _e,
            reset: nr,
            resetField: Nr,
            clearErrors: Rr,
            unregister: Ee,
            setError: rr,
            setFocus: Pr,
            getFieldState: er
        };
    return { ...or,
        formControl: or
    }
}
var ne = () => {
        if (typeof crypto < "u" && crypto.randomUUID) return crypto.randomUUID();
        const r = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, s => {
            const e = (Math.random() * 16 + r) % 16 | 0;
            return (s == "x" ? e : e & 3 | 8).toString(16)
        })
    },
    Re = (r, s, e = {}) => e.shouldFocus || O(e.shouldFocus) ? e.focusName || `${r}.${O(e.focusIndex)?s:e.focusIndex}.` : "",
    Me = (r, s) => [...r, ...Z(s)],
    Te = r => Array.isArray(r) ? r.map(() => {}) : void 0;

function Le(r, s, e) {
    return [...r.slice(0, s), ...Z(e), ...r.slice(s)]
}
var Ne = (r, s, e) => Array.isArray(r) ? (O(r[e]) && (r[e] = void 0), r.splice(e, 0, r.splice(s, 1)[0]), r) : [],
    Pe = (r, s) => [...Z(s), ...Z(r)];

function dt(r, s) {
    let e = 0;
    const t = [...r];
    for (const o of s) t.splice(o - e, 1), e++;
    return xe(t).length ? t : []
}
var Ie = (r, s) => O(s) ? [] : dt(r, Z(s).sort((e, t) => e - t)),
    Be = (r, s, e) => {
        [r[s], r[e]] = [r[e], r[s]]
    },
    mr = (r, s, e) => (r[s] = e, r);

function pt(r) {
    const s = we(),
        {
            control: e = s.control,
            name: t,
            keyName: o = "id",
            shouldUnregister: a,
            rules: l
        } = r,
        [c, p] = m.useState(e._getFieldArray(t)),
        _ = m.useRef(e._getFieldArray(t).map(ne)),
        x = m.useRef(!1);
    e._names.array.add(t), m.useMemo(() => l && c.length >= 0 && e.register(t, l), [e, t, c.length, l]), ke(() => e._subjects.array.subscribe({
        next: ({
            values: v,
            name: y
        }) => {
            if (y === t || !y) {
                const w = d(v, t);
                Array.isArray(w) && (p(w), _.current = w.map(ne))
            }
        }
    }).unsubscribe, [e, t]);
    const V = m.useCallback(v => {
            x.current = !0, e._setFieldArray(t, v)
        }, [e, t]),
        F = (v, y) => {
            const w = Z(U(v)),
                S = Me(e._getFieldArray(t), w);
            e._names.focus = Re(t, S.length - 1, y), _.current = Me(_.current, w.map(ne)), V(S), p(S), e._setFieldArray(t, S, Me, {
                argA: Te(v)
            })
        },
        j = (v, y) => {
            const w = Z(U(v)),
                S = Pe(e._getFieldArray(t), w);
            e._names.focus = Re(t, 0, y), _.current = Pe(_.current, w.map(ne)), V(S), p(S), e._setFieldArray(t, S, Pe, {
                argA: Te(v)
            })
        },
        P = v => {
            const y = Ie(e._getFieldArray(t), v);
            _.current = Ie(_.current, v), V(y), p(y), !Array.isArray(d(e._fields, t)) && D(e._fields, t, void 0), e._setFieldArray(t, y, Ie, {
                argA: v
            })
        },
        E = (v, y, w) => {
            const S = Z(U(y)),
                se = Le(e._getFieldArray(t), v, S);
            e._names.focus = Re(t, v, w), _.current = Le(_.current, v, S.map(ne)), V(se), p(se), e._setFieldArray(t, se, Le, {
                argA: v,
                argB: Te(y)
            })
        },
        I = (v, y) => {
            const w = e._getFieldArray(t);
            Be(w, v, y), Be(_.current, v, y), V(w), p(w), e._setFieldArray(t, w, Be, {
                argA: v,
                argB: y
            }, !1)
        },
        q = (v, y) => {
            const w = e._getFieldArray(t);
            Ne(w, v, y), Ne(_.current, v, y), V(w), p(w), e._setFieldArray(t, w, Ne, {
                argA: v,
                argB: y
            }, !1)
        },
        A = (v, y) => {
            const w = U(y),
                S = mr(e._getFieldArray(t), v, w);
            _.current = [...S].map((se, H) => !se || H === v ? ne() : _.current[H]), V(S), p([...S]), e._setFieldArray(t, S, mr, {
                argA: v,
                argB: w
            }, !0, !1)
        },
        T = v => {
            const y = Z(U(v));
            _.current = y.map(ne), V([...y]), p([...y]), e._setFieldArray(t, [...y], w => w, {}, !0, !1)
        };
    return m.useEffect(() => {
        if (e._state.action = !1, $e(t, e._names) && e._subjects.state.next({ ...e._formState
            }), x.current && (!de(e._options.mode).isOnSubmit || e._formState.isSubmitted) && !de(e._options.reValidateMode).isOnSubmit)
            if (e._options.resolver) e._runSchema([t]).then(v => {
                const y = d(v.errors, t),
                    w = d(e._formState.errors, t);
                (w ? !y && w.type || y && (w.type !== y.type || w.message !== y.message) : y && y.type) && (y ? D(e._formState.errors, t, y) : N(e._formState.errors, t), e._subjects.state.next({
                    errors: e._formState.errors
                }))
            });
            else {
                const v = d(e._fields, t);
                v && v._f && !(de(e._options.reValidateMode).isOnSubmit && de(e._options.mode).isOnSubmit) && He(v, e._names.disabled, e._formValues, e._options.criteriaMode === Q.all, e._options.shouldUseNativeValidation, !0).then(y => !W(y) && e._subjects.state.next({
                    errors: Ur(e._formState.errors, y, t)
                }))
            }
        e._subjects.state.next({
            name: t,
            values: U(e._formValues)
        }), e._names.focus && ye(e._fields, (v, y) => {
            if (e._names.focus && y.startsWith(e._names.focus) && v.focus) return v.focus(), 1
        }), e._names.focus = "", e._setValid(), x.current = !1
    }, [c, t, e]), m.useEffect(() => (!d(e._formValues, t) && e._setFieldArray(t), () => {
        const v = (y, w) => {
            const S = d(e._fields, y);
            S && S._f && (S._f.mount = w)
        };
        e._options.shouldUnregister || a ? e.unregister(t) : v(t, !1)
    }), [t, e, o, a]), {
        swap: m.useCallback(I, [V, t, e]),
        move: m.useCallback(q, [V, t, e]),
        prepend: m.useCallback(j, [V, t, e]),
        append: m.useCallback(F, [V, t, e]),
        remove: m.useCallback(P, [V, t, e]),
        insert: m.useCallback(E, [V, t, e]),
        update: m.useCallback(A, [V, t, e]),
        replace: m.useCallback(T, [V, t, e]),
        fields: m.useMemo(() => c.map((v, y) => ({ ...v,
            [o]: _.current[y] || ne()
        })), [c, o])
    }
}

function xt(r = {}) {
    const s = m.useRef(void 0),
        e = m.useRef(void 0),
        [t, o] = m.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: ee(r.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            validatingFields: {},
            errors: r.errors || {},
            disabled: r.disabled || !1,
            isReady: !1,
            defaultValues: ee(r.defaultValues) ? void 0 : r.defaultValues
        });
    if (!s.current)
        if (r.formControl) s.current = { ...r.formControl,
            formState: t
        }, r.defaultValues && !ee(r.defaultValues) && r.formControl.reset(r.defaultValues, r.resetOptions);
        else {
            const {
                formControl: l,
                ...c
            } = ft(r);
            s.current = { ...c,
                formState: t
            }
        }
    const a = s.current.control;
    return a._options = r, ke(() => {
        const l = a._subscribe({
            formState: a._proxyFormState,
            callback: () => o({ ...a._formState
            }),
            reRenderRoot: !0
        });
        return o(c => ({ ...c,
            isReady: !0
        })), a._formState.isReady = !0, l
    }, [a]), m.useEffect(() => a._disableForm(r.disabled), [a, r.disabled]), m.useEffect(() => {
        r.mode && (a._options.mode = r.mode), r.reValidateMode && (a._options.reValidateMode = r.reValidateMode)
    }, [a, r.mode, r.reValidateMode]), m.useEffect(() => {
        r.errors && (a._setErrors(r.errors), a._focusError())
    }, [a, r.errors]), m.useEffect(() => {
        r.shouldUnregister && a._subjects.state.next({
            values: a._getWatch()
        })
    }, [a, r.shouldUnregister]), m.useEffect(() => {
        if (a._proxyFormState.isDirty) {
            const l = a._getDirty();
            l !== t.isDirty && a._subjects.state.next({
                isDirty: l
            })
        }
    }, [a, t.isDirty]), m.useEffect(() => {
        var l;
        r.values && !X(r.values, e.current) ? (a._reset(r.values, {
            keepFieldsRef: !0,
            ...a._options.resetOptions
        }), !((l = a._options.resetOptions) === null || l === void 0) && l.keepIsValid || a._setValid(), e.current = r.values, o(c => ({ ...c
        }))) : a._resetDefaultValues()
    }, [a, r.values]), m.useEffect(() => {
        a._state.mount || (a._setValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState
        })), a._removeUnmounted()
    }), s.current.formState = wr(t, a), s.current
}
var br = (r, s, e) => {
        if (r && "reportValidity" in r) {
            const t = d(e, s);
            r.setCustomValidity(t && t.message || ""), r.reportValidity()
        }
    },
    Ae = (r, s) => {
        for (const e in s.fields) {
            const t = s.fields[e];
            t && t.ref && "reportValidity" in t.ref ? br(t.ref, e, r) : t && t.refs && t.refs.forEach(o => br(o, e, r))
        }
    },
    ze = (r, s) => {
        s.shouldUseNativeValidation && Ae(r, s);
        const e = {};
        for (const t in r) {
            const o = d(s.fields, t),
                a = Object.assign(r[t] || {}, {
                    ref: o && o.ref
                });
            if (yt(s.names || Object.keys(r), t)) {
                const l = Object.assign({}, d(e, t));
                D(l, "root", a), D(e, t, l)
            } else D(e, t, a)
        }
        return e
    },
    yt = (r, s) => {
        const e = Vr(s);
        return r.some(t => Vr(t).match(`^${e}\\.\\d+`))
    };

function Vr(r) {
    return r.replace(/\]|\[/g, "")
}

function Fr(r, s) {
    try {
        var e = r()
    } catch (t) {
        return s(t)
    }
    return e && e.then ? e.then(void 0, s) : e
}

function gt(r, s) {
    for (var e = {}; r.length;) {
        var t = r[0],
            o = t.code,
            a = t.message,
            l = t.path.join(".");
        if (!e[l])
            if ("unionErrors" in t) {
                var c = t.unionErrors[0].errors[0];
                e[l] = {
                    message: c.message,
                    type: c.code
                }
            } else e[l] = {
                message: a,
                type: o
            };
        if ("unionErrors" in t && t.unionErrors.forEach(function(x) {
                return x.errors.forEach(function(V) {
                    return r.push(V)
                })
            }), s) {
            var p = e[l].types,
                _ = p && p[t.code];
            e[l] = Je(l, s, e, o, _ ? [].concat(_, t.message) : t.message)
        }
        r.shift()
    }
    return e
}

function vt(r, s) {
    for (var e = {}; r.length;) {
        var t = r[0],
            o = t.code,
            a = t.message,
            l = t.path.join(".");
        if (!e[l])
            if (t.code === "invalid_union" && t.errors.length > 0) {
                var c = t.errors[0][0];
                e[l] = {
                    message: c.message,
                    type: c.code
                }
            } else e[l] = {
                message: a,
                type: o
            };
        if (t.code === "invalid_union" && t.errors.forEach(function(x) {
                return x.forEach(function(V) {
                    return r.push(V)
                })
            }), s) {
            var p = e[l].types,
                _ = p && p[t.code];
            e[l] = Je(l, s, e, o, _ ? [].concat(_, t.message) : t.message)
        }
        r.shift()
    }
    return e
}

function wt(r, s, e) {
    if (e === void 0 && (e = {}), (function(t) {
            return "_def" in t && typeof t._def == "object" && "typeName" in t._def
        })(r)) return function(t, o, a) {
        try {
            return Promise.resolve(Fr(function() {
                return Promise.resolve(r[e.mode === "sync" ? "parse" : "parseAsync"](t, s)).then(function(l) {
                    return a.shouldUseNativeValidation && Ae({}, a), {
                        errors: {},
                        values: e.raw ? Object.assign({}, t) : l
                    }
                })
            }, function(l) {
                if ((function(c) {
                        return Array.isArray(c ? .issues)
                    })(l)) return {
                    values: {},
                    errors: ze(gt(l.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a)
                };
                throw l
            }))
        } catch (l) {
            return Promise.reject(l)
        }
    };
    if ((function(t) {
            return "_zod" in t && typeof t._zod == "object"
        })(r)) return function(t, o, a) {
        try {
            return Promise.resolve(Fr(function() {
                return Promise.resolve((e.mode === "sync" ? Hr : zr)(r, t, s)).then(function(l) {
                    return a.shouldUseNativeValidation && Ae({}, a), {
                        errors: {},
                        values: e.raw ? Object.assign({}, t) : l
                    }
                })
            }, function(l) {
                if ((function(c) {
                        return c instanceof Kr
                    })(l)) return {
                    values: {},
                    errors: ze(vt(l.issues, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a)
                };
                throw l
            }))
        } catch (l) {
            return Promise.reject(l)
        }
    };
    throw new Error("Invalid input: not a Zod schema")
}

function ht(r) {
    if (r.path ? .length) {
        let s = "";
        for (const e of r.path) {
            const t = typeof e == "object" ? e.key : e;
            if (typeof t == "string" || typeof t == "number") s ? s += `.${t}` : s += t;
            else return null
        }
        return s
    }
    return null
}

function Ke() {
    return Ke = Object.assign ? Object.assign.bind() : function(r) {
        for (var s = 1; s < arguments.length; s++) {
            var e = arguments[s];
            for (var t in e)({}).hasOwnProperty.call(e, t) && (r[t] = e[t])
        }
        return r
    }, Ke.apply(null, arguments)
}

function kt(r, s, e) {
    return e === void 0 && (e = {}),
        function(t, o, a) {
            try {
                var l = function() {
                        if (c.issues) {
                            var _ = (function(x, V) {
                                for (var F = {}, j = 0; j < x.length; j++) {
                                    var P = x[j],
                                        E = ht(P);
                                    if (E && (F[E] || (F[E] = {
                                            message: P.message,
                                            type: ""
                                        }), V)) {
                                        var I, q = F[E].types || {};
                                        F[E].types = Ke({}, q, ((I = {})[Object.keys(q).length] = P.message, I))
                                    }
                                }
                                return F
                            })(c.issues, !a.shouldUseNativeValidation && a.criteriaMode === "all");
                            return {
                                values: {},
                                errors: ze(_, a)
                            }
                        }
                        return a.shouldUseNativeValidation && Ae({}, a), {
                            values: e.raw ? Object.assign({}, t) : c.value,
                            errors: {}
                        }
                    },
                    c = r["~standard"].validate(t),
                    p = (function() {
                        if (c instanceof Promise) return Promise.resolve(c).then(function(_) {
                            c = _
                        })
                    })();
                return Promise.resolve(p && p.then ? p.then(l) : l())
            } catch (_) {
                return Promise.reject(_)
            }
        }
}
export {
    Qr as a, we as c, Ft as i, Yr as l, wt as n, pt as o, At as r, xt as s, kt as t, Jr as u
};