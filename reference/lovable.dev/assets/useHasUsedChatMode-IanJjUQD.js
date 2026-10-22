import {
    Y as n
} from "./create-form-shared-Ch3tkVo8.js";
import {
    o as t
} from "./workspaceChatListHooks-5RTilxUd.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "333bc70d-eef1-4462-a1ad-313e2fae4138", e._sentryDebugIdIdentifier = "sentry-dbid-333bc70d-eef1-4462-a1ad-313e2fae4138")
    })()
} catch {}

function f(e, {
    pendingValue: s = !1
} = {}) {
    const a = n(),
        d = t({
            enabled: e && !a,
            pendingValue: s
        });
    return a || d
}
export {
    f as t
};