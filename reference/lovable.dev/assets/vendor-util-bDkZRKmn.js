try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            o = new e.Error().stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "eccb2416-68c0-4431-8508-317132c964f8", e._sentryDebugIdIdentifier = "sentry-dbid-eccb2416-68c0-4431-8508-317132c964f8")
    })()
} catch {}

function Pe(e) {
    var o, r, t = "";
    if (typeof e == "string" || typeof e == "number") t += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var n = e.length;
            for (o = 0; o < n; o++) e[o] && (r = Pe(e[o])) && (t && (t += " "), t += r)
        } else
            for (r in e) e[r] && (t && (t += " "), t += r);
    return t
}

function er() {
    for (var e, o, r = 0, t = "", n = arguments.length; r < n; r++)(e = arguments[r]) && (o = Pe(e)) && (t && (t += " "), t += o);
    return t
}
var rr = (e, o) => {
        const r = new Array(e.length + o.length);
        for (let t = 0; t < e.length; t++) r[t] = e[t];
        for (let t = 0; t < o.length; t++) r[e.length + t] = o[t];
        return r
    },
    or = (e, o) => ({
        classGroupId: e,
        validator: o
    }),
    Re = (e = new Map, o = null, r) => ({
        nextPart: e,
        validators: o,
        classGroupId: r
    }),
    re = "-",
    ze = [],
    tr = "arbitrary..",
    sr = e => {
        const o = nr(e),
            {
                conflictingClassGroups: r,
                conflictingClassGroupModifiers: t
            } = e;
        return {
            getClassGroupId: c => {
                if (c.startsWith("[") && c.endsWith("]")) return ar(c);
                const b = c.split(re),
                    u = b[0] === "" && b.length > 1 ? 1 : 0;
                return Te(b, u, o)
            },
            getConflictingClassGroupIds: (c, b) => {
                if (b) {
                    const u = t[c],
                        m = r[c];
                    return u ? m ? rr(m, u) : u : m || ze
                }
                return r[c] || ze
            }
        }
    },
    Te = (e, o, r) => {
        if (e.length - o === 0) return r.classGroupId;
        const t = e[o],
            n = r.nextPart.get(t);
        if (n) {
            const u = Te(e, o + 1, n);
            if (u) return u
        }
        const i = r.validators;
        if (i === null) return;
        const c = o === 0 ? e.join(re) : e.slice(o).join(re),
            b = i.length;
        for (let u = 0; u < b; u++) {
            const m = i[u];
            if (m.validator(c)) return m.classGroupId
        }
    },
    ar = e => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
        const o = e.slice(1, -1),
            r = o.indexOf(":"),
            t = o.slice(0, r);
        return t ? tr + t : void 0
    })(),
    nr = e => {
        const {
            theme: o,
            classGroups: r
        } = e;
        return ir(r, o)
    },
    ir = (e, o) => {
        const r = Re();
        for (const t in e) {
            const n = e[t];
            pe(n, r, t, o)
        }
        return r
    },
    pe = (e, o, r, t) => {
        const n = e.length;
        for (let i = 0; i < n; i++) {
            const c = e[i];
            lr(c, o, r, t)
        }
    },
    lr = (e, o, r, t) => {
        if (typeof e == "string") {
            cr(e, o, r);
            return
        }
        if (typeof e == "function") {
            dr(e, o, r, t);
            return
        }
        mr(e, o, r, t)
    },
    cr = (e, o, r) => {
        const t = e === "" ? o : Ne(o, e);
        t.classGroupId = r
    },
    dr = (e, o, r, t) => {
        if (pr(e)) {
            pe(e(t), o, r, t);
            return
        }
        o.validators === null && (o.validators = []), o.validators.push(or(r, e))
    },
    mr = (e, o, r, t) => {
        const n = Object.entries(e),
            i = n.length;
        for (let c = 0; c < i; c++) {
            const [b, u] = n[c];
            pe(u, Ne(o, b), r, t)
        }
    },
    Ne = (e, o) => {
        let r = e;
        const t = o.split(re),
            n = t.length;
        for (let i = 0; i < n; i++) {
            const c = t[i];
            let b = r.nextPart.get(c);
            b || (b = Re(), r.nextPart.set(c, b)), r = b
        }
        return r
    },
    pr = e => "isThemeGetter" in e && e.isThemeGetter === !0,
    ur = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let o = 0,
            r = Object.create(null),
            t = Object.create(null);
        const n = (i, c) => {
            r[i] = c, o++, o > e && (o = 0, t = r, r = Object.create(null))
        };
        return {
            get(i) {
                let c = r[i];
                if (c !== void 0) return c;
                if ((c = t[i]) !== void 0) return n(i, c), c
            },
            set(i, c) {
                i in r ? r[i] = c : n(i, c)
            }
        }
    },
    ie = "!",
    Ce = ":",
    br = [],
    Ae = (e, o, r, t, n) => ({
        modifiers: e,
        hasImportantModifier: o,
        baseClassName: r,
        maybePostfixModifierPosition: t,
        isExternal: n
    }),
    fr = e => {
        const {
            prefix: o,
            experimentalParseClassName: r
        } = e;
        let t = n => {
            const i = [];
            let c = 0,
                b = 0,
                u = 0,
                m;
            const g = n.length;
            for (let y = 0; y < g; y++) {
                const k = n[y];
                if (c === 0 && b === 0) {
                    if (k === Ce) {
                        i.push(n.slice(u, y)), u = y + 1;
                        continue
                    }
                    if (k === "/") {
                        m = y;
                        continue
                    }
                }
                k === "[" ? c++ : k === "]" ? c-- : k === "(" ? b++ : k === ")" && b--
            }
            const f = i.length === 0 ? n : n.slice(u);
            let z = f,
                S = !1;
            f.endsWith(ie) ? (z = f.slice(0, -1), S = !0) : f.startsWith(ie) && (z = f.slice(1), S = !0);
            const L = m && m > u ? m - u : void 0;
            return Ae(i, S, z, L)
        };
        if (o) {
            const n = o + Ce,
                i = t;
            t = c => c.startsWith(n) ? i(c.slice(n.length)) : Ae(br, !1, c, void 0, !0)
        }
        if (r) {
            const n = t;
            t = i => r({
                className: i,
                parseClassName: n
            })
        }
        return t
    },
    gr = e => {
        const o = new Map;
        return e.orderSensitiveModifiers.forEach((r, t) => {
            o.set(r, 1e6 + t)
        }), r => {
            const t = [];
            let n = [];
            for (let i = 0; i < r.length; i++) {
                const c = r[i],
                    b = c[0] === "[",
                    u = o.has(c);
                b || u ? (n.length > 0 && (n.sort(), t.push(...n), n = []), t.push(c)) : n.push(c)
            }
            return n.length > 0 && (n.sort(), t.push(...n)), t
        }
    },
    hr = e => ({
        cache: ur(e.cacheSize),
        parseClassName: fr(e),
        sortModifiers: gr(e),
        postfixLookupClassGroupIds: vr(e),
        ...sr(e)
    }),
    vr = e => {
        const o = Object.create(null),
            r = e.postfixLookupClassGroups;
        if (r)
            for (let t = 0; t < r.length; t++) o[r[t]] = !0;
        return o
    },
    yr = /\s+/,
    kr = (e, o) => {
        const {
            parseClassName: r,
            getClassGroupId: t,
            getConflictingClassGroupIds: n,
            sortModifiers: i,
            postfixLookupClassGroupIds: c
        } = o, b = [], u = e.trim().split(yr);
        let m = "";
        for (let g = u.length - 1; g >= 0; g -= 1) {
            const f = u[g],
                {
                    isExternal: z,
                    modifiers: S,
                    hasImportantModifier: L,
                    baseClassName: y,
                    maybePostfixModifierPosition: k
                } = r(f);
            if (z) {
                m = f + (m.length > 0 ? " " + m : m);
                continue
            }
            let V = !!k,
                C;
            if (V) {
                C = t(y.substring(0, k));
                const G = C && c[C] ? t(y) : void 0;
                G && G !== C && (C = G, V = !1)
            } else C = t(y);
            if (!C) {
                if (!V) {
                    m = f + (m.length > 0 ? " " + m : m);
                    continue
                }
                if (C = t(y), !C) {
                    m = f + (m.length > 0 ? " " + m : m);
                    continue
                }
                V = !1
            }
            const $ = S.length === 0 ? "" : S.length === 1 ? S[0] : i(S).join(":"),
                j = L ? $ + ie : $,
                W = j + C;
            if (b.indexOf(W) > -1) continue;
            b.push(W);
            const E = n(C, V);
            for (let G = 0; G < E.length; ++G) {
                const l = E[G];
                b.push(j + l)
            }
            m = f + (m.length > 0 ? " " + m : m)
        }
        return m
    },
    wr = (...e) => {
        let o = 0,
            r, t, n = "";
        for (; o < e.length;)(r = e[o++]) && (t = Le(r)) && (n && (n += " "), n += t);
        return n
    },
    Le = e => {
        if (typeof e == "string") return e;
        let o, r = "";
        for (let t = 0; t < e.length; t++) e[t] && (o = Le(e[t])) && (r && (r += " "), r += o);
        return r
    },
    Se = (e, ...o) => {
        let r, t, n, i;
        const c = u => {
                const m = o.reduce((g, f) => f(g), e());
                return r = hr(m), t = r.cache.get, n = r.cache.set, i = b, b(u)
            },
            b = u => {
                const m = t(u);
                if (m) return m;
                const g = kr(u, r);
                return n(u, g), g
            };
        return i = c, (...u) => i(wr(...u))
    },
    xr = [],
    h = e => {
        const o = r => r[e] || xr;
        return o.isThemeGetter = !0, o
    },
    Ve = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    _e = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    zr = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    Cr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Ar = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Sr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    Gr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Ir = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    R = e => zr.test(e),
    p = e => !!e && !Number.isNaN(Number(e)),
    M = e => !!e && Number.isInteger(Number(e)),
    ee = e => e.endsWith("%") && p(e.slice(0, -1)),
    P = e => Cr.test(e),
    ue = () => !0,
    Mr = e => Ar.test(e) && !Sr.test(e),
    be = () => !1,
    Pr = e => Gr.test(e),
    Rr = e => Ir.test(e),
    Oe = e => !s(e) && !a(e),
    je = e => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)),
    We = e => N(e, Je, be),
    s = e => Ve.test(e),
    T = e => N(e, Ke, Mr),
    le = e => N(e, Tr, p),
    Ee = e => N(e, He, ue),
    Fe = e => N(e, Qe, be),
    ce = e => N(e, qe, be),
    Be = e => N(e, Xe, Rr),
    U = e => N(e, Ze, Pr),
    a = e => _e.test(e),
    B = e => O(e, Ke),
    De = e => O(e, Qe),
    de = e => O(e, qe),
    $e = e => O(e, Je),
    Ue = e => O(e, Xe),
    Y = e => O(e, Ze, !0),
    Ye = e => O(e, He, !0),
    N = (e, o, r) => {
        const t = Ve.exec(e);
        return t ? t[1] ? o(t[1]) : r(t[2]) : !1
    },
    O = (e, o, r = !1) => {
        const t = _e.exec(e);
        return t ? t[1] ? o(t[1]) : r : !1
    },
    qe = e => e === "position" || e === "percentage",
    Xe = e => e === "image" || e === "url",
    Je = e => e === "length" || e === "size" || e === "bg-size",
    Ke = e => e === "length",
    Tr = e => e === "number",
    Qe = e => e === "family-name",
    He = e => e === "number" || e === "weight",
    Ze = e => e === "shadow",
    Lr = Object.defineProperty({
        __proto__: null,
        isAny: ue,
        isAnyNonArbitrary: Oe,
        isArbitraryFamilyName: Fe,
        isArbitraryImage: Be,
        isArbitraryLength: T,
        isArbitraryNumber: le,
        isArbitraryPosition: ce,
        isArbitraryShadow: U,
        isArbitrarySize: We,
        isArbitraryValue: s,
        isArbitraryVariable: a,
        isArbitraryVariableFamilyName: De,
        isArbitraryVariableImage: Ue,
        isArbitraryVariableLength: B,
        isArbitraryVariablePosition: de,
        isArbitraryVariableShadow: Y,
        isArbitraryVariableSize: $e,
        isArbitraryVariableWeight: Ye,
        isArbitraryWeight: Ee,
        isFraction: R,
        isInteger: M,
        isNamedContainerQuery: je,
        isNumber: p,
        isPercent: ee,
        isTshirtSize: P
    }, Symbol.toStringTag, {
        value: "Module"
    }),
    Ge = () => {
        const e = h("color"),
            o = h("font"),
            r = h("text"),
            t = h("font-weight"),
            n = h("tracking"),
            i = h("leading"),
            c = h("breakpoint"),
            b = h("container"),
            u = h("spacing"),
            m = h("radius"),
            g = h("shadow"),
            f = h("inset-shadow"),
            z = h("text-shadow"),
            S = h("drop-shadow"),
            L = h("blur"),
            y = h("perspective"),
            k = h("aspect"),
            V = h("ease"),
            C = h("animate"),
            $ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            j = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            W = () => [...j(), a, s],
            E = () => ["auto", "hidden", "clip", "visible", "scroll"],
            G = () => ["auto", "contain", "none"],
            l = () => [a, s, u],
            A = () => [R, "full", "auto", ...l()],
            fe = () => [M, "none", "subgrid", a, s],
            ge = () => ["auto", {
                span: ["full", M, a, s]
            }, M, a, s],
            q = () => [M, "auto", a, s],
            he = () => ["auto", "min", "max", "fr", a, s],
            oe = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            F = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            I = () => ["auto", ...l()],
            _ = () => [R, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...l()],
            te = () => [R, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...l()],
            se = () => [R, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...l()],
            d = () => [e, a, s],
            ve = () => [...j(), de, ce, {
                position: [a, s]
            }],
            ye = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            ke = () => ["auto", "cover", "contain", $e, We, {
                size: [a, s]
            }],
            ae = () => [ee, B, T],
            w = () => ["", "none", "full", m, a, s],
            x = () => ["", p, B, T],
            X = () => ["solid", "dashed", "dotted", "double"],
            we = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            v = () => [p, ee, de, ce],
            xe = () => ["", "none", L, a, s],
            J = () => ["none", p, a, s],
            K = () => ["none", p, a, s],
            ne = () => [p, a, s],
            Q = () => [R, "full", ...l()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [P],
                breakpoint: [P],
                color: [ue],
                container: [P],
                "drop-shadow": [P],
                ease: ["in", "out", "in-out"],
                font: [Oe],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [P],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [P],
                shadow: [P],
                spacing: ["px", p],
                text: [P],
                "text-shadow": [P],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", R, s, a, k]
                }],
                container: ["container"],
                "container-type": [{
                    "@container": ["", "normal", "size", a, s]
                }],
                "container-named": [je],
                columns: [{
                    columns: [p, s, a, b]
                }],
                "break-after": [{
                    "break-after": $()
                }],
                "break-before": [{
                    "break-before": $()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: W()
                }],
                overflow: [{
                    overflow: E()
                }],
                "overflow-x": [{
                    "overflow-x": E()
                }],
                "overflow-y": [{
                    "overflow-y": E()
                }],
                overscroll: [{
                    overscroll: G()
                }],
                "overscroll-x": [{
                    "overscroll-x": G()
                }],
                "overscroll-y": [{
                    "overscroll-y": G()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: A()
                }],
                "inset-x": [{
                    "inset-x": A()
                }],
                "inset-y": [{
                    "inset-y": A()
                }],
                start: [{
                    "inset-s": A(),
                    start: A()
                }],
                end: [{
                    "inset-e": A(),
                    end: A()
                }],
                "inset-bs": [{
                    "inset-bs": A()
                }],
                "inset-be": [{
                    "inset-be": A()
                }],
                top: [{
                    top: A()
                }],
                right: [{
                    right: A()
                }],
                bottom: [{
                    bottom: A()
                }],
                left: [{
                    left: A()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [M, "auto", a, s]
                }],
                basis: [{
                    basis: [R, "full", "auto", b, ...l()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [p, R, "auto", "initial", "none", s]
                }],
                grow: [{
                    grow: ["", p, a, s]
                }],
                shrink: [{
                    shrink: ["", p, a, s]
                }],
                order: [{
                    order: [M, "first", "last", "none", a, s]
                }],
                "grid-cols": [{
                    "grid-cols": fe()
                }],
                "col-start-end": [{
                    col: ge()
                }],
                "col-start": [{
                    "col-start": q()
                }],
                "col-end": [{
                    "col-end": q()
                }],
                "grid-rows": [{
                    "grid-rows": fe()
                }],
                "row-start-end": [{
                    row: ge()
                }],
                "row-start": [{
                    "row-start": q()
                }],
                "row-end": [{
                    "row-end": q()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": he()
                }],
                "auto-rows": [{
                    "auto-rows": he()
                }],
                gap: [{
                    gap: l()
                }],
                "gap-x": [{
                    "gap-x": l()
                }],
                "gap-y": [{
                    "gap-y": l()
                }],
                "justify-content": [{
                    justify: [...oe(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...F(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...F()]
                }],
                "align-content": [{
                    content: ["normal", ...oe()]
                }],
                "align-items": [{
                    items: [...F(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...F(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": oe()
                }],
                "place-items": [{
                    "place-items": [...F(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...F()]
                }],
                p: [{
                    p: l()
                }],
                px: [{
                    px: l()
                }],
                py: [{
                    py: l()
                }],
                ps: [{
                    ps: l()
                }],
                pe: [{
                    pe: l()
                }],
                pbs: [{
                    pbs: l()
                }],
                pbe: [{
                    pbe: l()
                }],
                pt: [{
                    pt: l()
                }],
                pr: [{
                    pr: l()
                }],
                pb: [{
                    pb: l()
                }],
                pl: [{
                    pl: l()
                }],
                m: [{
                    m: I()
                }],
                mx: [{
                    mx: I()
                }],
                my: [{
                    my: I()
                }],
                ms: [{
                    ms: I()
                }],
                me: [{
                    me: I()
                }],
                mbs: [{
                    mbs: I()
                }],
                mbe: [{
                    mbe: I()
                }],
                mt: [{
                    mt: I()
                }],
                mr: [{
                    mr: I()
                }],
                mb: [{
                    mb: I()
                }],
                ml: [{
                    ml: I()
                }],
                "space-x": [{
                    "space-x": l()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": l()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: _()
                }],
                "inline-size": [{
                    inline: ["auto", ...te()]
                }],
                "min-inline-size": [{
                    "min-inline": ["auto", ...te()]
                }],
                "max-inline-size": [{
                    "max-inline": ["none", ...te()]
                }],
                "block-size": [{
                    block: ["auto", ...se()]
                }],
                "min-block-size": [{
                    "min-block": ["auto", ...se()]
                }],
                "max-block-size": [{
                    "max-block": ["none", ...se()]
                }],
                w: [{
                    w: [b, "screen", ..._()]
                }],
                "min-w": [{
                    "min-w": [b, "screen", "none", ..._()]
                }],
                "max-w": [{
                    "max-w": [b, "screen", "none", "prose", {
                        screen: [c]
                    }, ..._()]
                }],
                h: [{
                    h: ["screen", "lh", ..._()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ..._()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ..._()]
                }],
                "font-size": [{
                    text: ["base", r, B, T]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [t, Ye, Ee]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ee, s]
                }],
                "font-family": [{
                    font: [De, Fe, o]
                }],
                "font-features": [{
                    "font-features": [s]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [n, a, s]
                }],
                "line-clamp": [{
                    "line-clamp": [p, "none", a, le]
                }],
                leading: [{
                    leading: [i, ...l()]
                }],
                "list-image": [{
                    "list-image": ["none", a, s]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", a, s]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: d()
                }],
                "text-color": [{
                    text: d()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...X(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [p, "from-font", "auto", a, T]
                }],
                "text-decoration-color": [{
                    decoration: d()
                }],
                "underline-offset": [{
                    "underline-offset": [p, "auto", a, s]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: l()
                }],
                "tab-size": [{
                    tab: [M, a, s]
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", a, s]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", a, s]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: ve()
                }],
                "bg-repeat": [{
                    bg: ye()
                }],
                "bg-size": [{
                    bg: ke()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, M, a, s],
                        radial: ["", a, s],
                        conic: [M, a, s]
                    }, Ue, Be]
                }],
                "bg-color": [{
                    bg: d()
                }],
                "gradient-from-pos": [{
                    from: ae()
                }],
                "gradient-via-pos": [{
                    via: ae()
                }],
                "gradient-to-pos": [{
                    to: ae()
                }],
                "gradient-from": [{
                    from: d()
                }],
                "gradient-via": [{
                    via: d()
                }],
                "gradient-to": [{
                    to: d()
                }],
                rounded: [{
                    rounded: w()
                }],
                "rounded-s": [{
                    "rounded-s": w()
                }],
                "rounded-e": [{
                    "rounded-e": w()
                }],
                "rounded-t": [{
                    "rounded-t": w()
                }],
                "rounded-r": [{
                    "rounded-r": w()
                }],
                "rounded-b": [{
                    "rounded-b": w()
                }],
                "rounded-l": [{
                    "rounded-l": w()
                }],
                "rounded-ss": [{
                    "rounded-ss": w()
                }],
                "rounded-se": [{
                    "rounded-se": w()
                }],
                "rounded-ee": [{
                    "rounded-ee": w()
                }],
                "rounded-es": [{
                    "rounded-es": w()
                }],
                "rounded-tl": [{
                    "rounded-tl": w()
                }],
                "rounded-tr": [{
                    "rounded-tr": w()
                }],
                "rounded-br": [{
                    "rounded-br": w()
                }],
                "rounded-bl": [{
                    "rounded-bl": w()
                }],
                "border-w": [{
                    border: x()
                }],
                "border-w-x": [{
                    "border-x": x()
                }],
                "border-w-y": [{
                    "border-y": x()
                }],
                "border-w-s": [{
                    "border-s": x()
                }],
                "border-w-e": [{
                    "border-e": x()
                }],
                "border-w-bs": [{
                    "border-bs": x()
                }],
                "border-w-be": [{
                    "border-be": x()
                }],
                "border-w-t": [{
                    "border-t": x()
                }],
                "border-w-r": [{
                    "border-r": x()
                }],
                "border-w-b": [{
                    "border-b": x()
                }],
                "border-w-l": [{
                    "border-l": x()
                }],
                "divide-x": [{
                    "divide-x": x()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": x()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...X(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...X(), "hidden", "none"]
                }],
                "border-color": [{
                    border: d()
                }],
                "border-color-x": [{
                    "border-x": d()
                }],
                "border-color-y": [{
                    "border-y": d()
                }],
                "border-color-s": [{
                    "border-s": d()
                }],
                "border-color-e": [{
                    "border-e": d()
                }],
                "border-color-bs": [{
                    "border-bs": d()
                }],
                "border-color-be": [{
                    "border-be": d()
                }],
                "border-color-t": [{
                    "border-t": d()
                }],
                "border-color-r": [{
                    "border-r": d()
                }],
                "border-color-b": [{
                    "border-b": d()
                }],
                "border-color-l": [{
                    "border-l": d()
                }],
                "divide-color": [{
                    divide: d()
                }],
                "outline-style": [{
                    outline: [...X(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [p, a, s]
                }],
                "outline-w": [{
                    outline: ["", p, B, T]
                }],
                "outline-color": [{
                    outline: d()
                }],
                shadow: [{
                    shadow: ["", "none", g, Y, U]
                }],
                "shadow-color": [{
                    shadow: d()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", f, Y, U]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": d()
                }],
                "ring-w": [{
                    ring: x()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: d()
                }],
                "ring-offset-w": [{
                    "ring-offset": [p, T]
                }],
                "ring-offset-color": [{
                    "ring-offset": d()
                }],
                "inset-ring-w": [{
                    "inset-ring": x()
                }],
                "inset-ring-color": [{
                    "inset-ring": d()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", z, Y, U]
                }],
                "text-shadow-color": [{
                    "text-shadow": d()
                }],
                opacity: [{
                    opacity: [p, a, s]
                }],
                "mix-blend": [{
                    "mix-blend": [...we(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": we()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [p]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": v()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": v()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": d()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": d()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": v()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": v()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": d()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": d()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": v()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": v()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": d()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": d()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": v()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": v()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": d()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": d()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": v()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": v()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": d()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": d()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": v()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": v()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": d()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": d()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": v()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": v()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": d()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": d()
                }],
                "mask-image-radial": [{
                    "mask-radial": [a, s]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": v()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": v()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": d()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": d()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": j()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [p]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": v()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": v()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": d()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": d()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: ve()
                }],
                "mask-repeat": [{
                    mask: ye()
                }],
                "mask-size": [{
                    mask: ke()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", a, s]
                }],
                filter: [{
                    filter: ["", "none", a, s]
                }],
                blur: [{
                    blur: xe()
                }],
                brightness: [{
                    brightness: [p, a, s]
                }],
                contrast: [{
                    contrast: [p, a, s]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", S, Y, U]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": d()
                }],
                grayscale: [{
                    grayscale: ["", p, a, s]
                }],
                "hue-rotate": [{
                    "hue-rotate": [p, a, s]
                }],
                invert: [{
                    invert: ["", p, a, s]
                }],
                saturate: [{
                    saturate: [p, a, s]
                }],
                sepia: [{
                    sepia: ["", p, a, s]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", a, s]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": xe()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [p, a, s]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [p, a, s]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", p, a, s]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [p, a, s]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", p, a, s]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [p, a, s]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [p, a, s]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", p, a, s]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": l()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": l()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": l()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", a, s]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [p, "initial", a, s]
                }],
                ease: [{
                    ease: ["linear", "initial", V, a, s]
                }],
                delay: [{
                    delay: [p, a, s]
                }],
                animate: [{
                    animate: ["none", C, a, s]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [y, a, s]
                }],
                "perspective-origin": [{
                    "perspective-origin": W()
                }],
                rotate: [{
                    rotate: J()
                }],
                "rotate-x": [{
                    "rotate-x": J()
                }],
                "rotate-y": [{
                    "rotate-y": J()
                }],
                "rotate-z": [{
                    "rotate-z": J()
                }],
                scale: [{
                    scale: K()
                }],
                "scale-x": [{
                    "scale-x": K()
                }],
                "scale-y": [{
                    "scale-y": K()
                }],
                "scale-z": [{
                    "scale-z": K()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: ne()
                }],
                "skew-x": [{
                    "skew-x": ne()
                }],
                "skew-y": [{
                    "skew-y": ne()
                }],
                transform: [{
                    transform: [a, s, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: W()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: Q()
                }],
                "translate-x": [{
                    "translate-x": Q()
                }],
                "translate-y": [{
                    "translate-y": Q()
                }],
                "translate-z": [{
                    "translate-z": Q()
                }],
                "translate-none": ["translate-none"],
                zoom: [{
                    zoom: [M, a, s]
                }],
                accent: [{
                    accent: d()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: d()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", a, s]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scrollbar-thumb-color": [{
                    "scrollbar-thumb": d()
                }],
                "scrollbar-track-color": [{
                    "scrollbar-track": d()
                }],
                "scrollbar-gutter": [{
                    "scrollbar-gutter": ["auto", "stable", "both"]
                }],
                "scrollbar-w": [{
                    scrollbar: ["auto", "thin", "none"]
                }],
                "scroll-m": [{
                    "scroll-m": l()
                }],
                "scroll-mx": [{
                    "scroll-mx": l()
                }],
                "scroll-my": [{
                    "scroll-my": l()
                }],
                "scroll-ms": [{
                    "scroll-ms": l()
                }],
                "scroll-me": [{
                    "scroll-me": l()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": l()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": l()
                }],
                "scroll-mt": [{
                    "scroll-mt": l()
                }],
                "scroll-mr": [{
                    "scroll-mr": l()
                }],
                "scroll-mb": [{
                    "scroll-mb": l()
                }],
                "scroll-ml": [{
                    "scroll-ml": l()
                }],
                "scroll-p": [{
                    "scroll-p": l()
                }],
                "scroll-px": [{
                    "scroll-px": l()
                }],
                "scroll-py": [{
                    "scroll-py": l()
                }],
                "scroll-ps": [{
                    "scroll-ps": l()
                }],
                "scroll-pe": [{
                    "scroll-pe": l()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": l()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": l()
                }],
                "scroll-pt": [{
                    "scroll-pt": l()
                }],
                "scroll-pr": [{
                    "scroll-pr": l()
                }],
                "scroll-pb": [{
                    "scroll-pb": l()
                }],
                "scroll-pl": [{
                    "scroll-pl": l()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", a, s]
                }],
                fill: [{
                    fill: ["none", ...d()]
                }],
                "stroke-w": [{
                    stroke: [p, B, T, le]
                }],
                stroke: [{
                    stroke: ["none", ...d()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                "container-named": ["container-type"],
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            postfixLookupClassGroups: ["container-type"],
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    Nr = (e, {
        cacheSize: o,
        prefix: r,
        experimentalParseClassName: t,
        extend: n = {},
        override: i = {}
    }) => (D(e, "cacheSize", o), D(e, "prefix", r), D(e, "experimentalParseClassName", t), H(e.theme, i.theme), H(e.classGroups, i.classGroups), H(e.conflictingClassGroups, i.conflictingClassGroups), H(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), D(e, "postfixLookupClassGroups", i.postfixLookupClassGroups), D(e, "orderSensitiveModifiers", i.orderSensitiveModifiers), Z(e.theme, n.theme), Z(e.classGroups, n.classGroups), Z(e.conflictingClassGroups, n.conflictingClassGroups), Z(e.conflictingClassGroupModifiers, n.conflictingClassGroupModifiers), me(e, n, "postfixLookupClassGroups"), me(e, n, "orderSensitiveModifiers"), e),
    D = (e, o, r) => {
        r !== void 0 && (e[o] = r)
    },
    H = (e, o) => {
        if (o)
            for (const r in o) D(e, r, o[r])
    },
    Z = (e, o) => {
        if (o)
            for (const r in o) me(e, o, r)
    },
    me = (e, o, r) => {
        const t = o[r];
        t !== void 0 && (e[r] = e[r] ? e[r].concat(t) : t)
    },
    Vr = (e, ...o) => typeof e == "function" ? Se(Ge, e, ...o) : Se(() => Nr(Ge(), e), ...o),
    Ie = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    Me = er,
    _r = (e, o) => r => {
        var t;
        if (o ? .variants == null) return Me(e, r ? .class, r ? .className);
        const {
            variants: n,
            defaultVariants: i
        } = o, c = Object.keys(n).map(m => {
            const g = r ? .[m],
                f = i ? .[m];
            if (g === null) return null;
            const z = Ie(g) || Ie(f);
            return n[m][z]
        }), b = r && Object.entries(r).reduce((m, g) => {
            let [f, z] = g;
            return z === void 0 || (m[f] = z), m
        }, {}), u = o == null || (t = o.compoundVariants) === null || t === void 0 ? void 0 : t.reduce((m, g) => {
            let {
                class: f,
                className: z,
                ...S
            } = g;
            return Object.entries(S).every(L => {
                let [y, k] = L;
                return Array.isArray(k) ? k.includes({ ...i,
                    ...b
                }[y]) : { ...i,
                    ...b
                }[y] === k
            }) ? [...m, f, z] : m
        }, []);
        return Me(e, c, u, r ? .class, r ? .className)
    };
export {
    er as i, Vr as n, Lr as r, _r as t
};