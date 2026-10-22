try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "fd6b2523-ee9b-4f2a-a38f-b24903cf8882", e._sentryDebugIdIdentifier = "sentry-dbid-fd6b2523-ee9b-4f2a-a38f-b24903cf8882")
    })()
} catch {}
var _ = Object.create,
    a = Object.defineProperty,
    d = Object.getOwnPropertyDescriptor,
    b = Object.getOwnPropertyNames,
    c = Object.getPrototypeOf,
    l = Object.prototype.hasOwnProperty,
    g = (e, r, t) => () => {
        if (t) throw t[0];
        try {
            return e && (r = e(e = 0)), r
        } catch (n) {
            throw t = [n], n
        }
    },
    y = (e, r) => () => (r || (e((r = {
        exports: {}
    }).exports, r), e = null), r.exports),
    v = (e, r) => {
        let t = {};
        for (var n in e) a(t, n, {
            get: e[n],
            enumerable: !0
        });
        return r || a(t, Symbol.toStringTag, {
            value: "Module"
        }), t
    },
    f = (e, r, t, n) => {
        if (r && typeof r == "object" || typeof r == "function")
            for (var i = b(r), u = 0, s = i.length, o; u < s; u++) o = i[u], !l.call(e, o) && o !== t && a(e, o, {
                get: (p => r[p]).bind(null, o),
                enumerable: !(n = d(r, o)) || n.enumerable
            });
        return e
    },
    w = (e, r, t) => (t = e != null ? _(c(e)) : {}, f(r || !e || !e.__esModule || !l.call(e, "default") ? a(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e)),
    h = e => l.call(e, "module.exports") ? e["module.exports"] : f(a({}, "__esModule", {
        value: !0
    }), e),
    O = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
        get: (r, t) => (typeof require < "u" ? require : r)[t]
    }) : e)(function(e) {
        if (typeof require < "u") return require.apply(this, arguments);
        throw Error('Calling `require` for "' + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")
    });
export {
    h as a, O as i, g as n, w as o, v as r, y as t
};