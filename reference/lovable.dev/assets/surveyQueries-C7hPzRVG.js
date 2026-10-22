import {
    rM as s
} from "./app-shared-6CLVfi8w.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ecda96a0-b1c2-43ab-b47f-22985e958aaf", e._sentryDebugIdIdentifier = "sentry-dbid-ecda96a0-b1c2-43ab-b47f-22985e958aaf")
    })()
} catch {}
var n = {
    all: ["surveys"],
    active: e => [...n.all, "active", e ? ? null],
    adminAll: () => [...n.all, "admin"],
    detail: e => [...n.all, "admin", "detail", e],
    results: e => [...n.adminAll(), "results", e]
};
async function c() {
    return s().get("/surveys/active")
}
async function o(e) {
    await s().post(`/surveys/${e}/dismiss`, {})
}
async function f(e) {
    await s().post(`/surveys/${e}/shown`, {})
}
async function l(e, t) {
    await s().post(`/surveys/${e}/responses`, {
        answers: t
    })
}
async function d() {
    return s().get("/surveys")
}
async function v(e) {
    return s().get(`/surveys/${e}`)
}
async function p(e) {
    return s().post("/surveys", { ...e
    })
}
async function b(e, t) {
    await s().put(`/surveys/${e}`, { ...t
    })
}
async function g(e) {
    await s().delete(`/surveys/${e}`)
}
async function S(e) {
    return s().get(`/surveys/${e}/results`)
}
async function w(e, t, r) {
    const i = s(),
        a = new URLSearchParams;
    t !== void 0 && a.set("limit", String(t)), r && a.set("cursor", r);
    const u = a.toString();
    return i.get(`/surveys/${e}/responses${u?`?${u}`:""}`)
}
export {
    d as a, S as c, n as d, b as f, c as i, f as l, g as n, v as o, o as r, w as s, p as t, l as u
};