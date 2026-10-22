try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c229509f-ed8f-41c3-9256-2167461aa3f5", e._sentryDebugIdIdentifier = "sentry-dbid-c229509f-ed8f-41c3-9256-2167461aa3f5")
    })()
} catch {}
var u = function() {
    return u = Object.assign || function(t) {
        for (var r, n = 1, f = arguments.length; n < f; n++) {
            r = arguments[n];
            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
        }
        return t
    }, u.apply(this, arguments)
};

function d(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var f = 0, n = Object.getOwnPropertySymbols(e); f < n.length; f++) t.indexOf(n[f]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[f]) && (r[n[f]] = e[n[f]]);
    return r
}

function p(e, t, r, n) {
    function f(o) {
        return o instanceof r ? o : new r(function(c) {
            c(o)
        })
    }
    return new(r || (r = Promise))(function(o, c) {
        function y(a) {
            try {
                i(n.next(a))
            } catch (l) {
                c(l)
            }
        }

        function s(a) {
            try {
                i(n.throw(a))
            } catch (l) {
                c(l)
            }
        }

        function i(a) {
            a.done ? o(a.value) : f(a.value).then(y, s)
        }
        i((n = n.apply(e, t || [])).next())
    })
}

function b(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, f = t.length, o; n < f; n++)(o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
    return e.concat(o || Array.prototype.slice.call(t))
}
export {
    b as i, p as n, d as r, u as t
};