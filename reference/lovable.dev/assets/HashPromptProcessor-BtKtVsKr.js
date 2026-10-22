import {
    o as c
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    NF as d
} from "./app-shared-6CLVfi8w.js";
import {
    i
} from "./vendor-react-Fx2PtaaM.js";
import {
    c as f,
    s as u
} from "./create-form-shared-Ch3tkVo8.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "03cd1c8b-34f8-4cd9-a2cf-e0f68cd3b827", e._sentryDebugIdIdentifier = "sentry-dbid-03cd1c8b-34f8-4cd9-a2cf-e0f68cd3b827")
    })()
} catch {}
var a = c(i(), 1);

function w() {
    const e = d(),
        r = (0, a.useRef)(null);
    return (0, a.useEffect)(() => {
        u();
        const n = () => {
            const t = window.location.hash;
            if (!t || r.current === t) return;
            const o = f();
            if (!o) return;
            r.current = t;
            const s = new URLSearchParams(window.location.search);
            s.set("promptKey", o), e.replace(`${window.location.pathname}?${s.toString()}`)
        };
        return n(), window.addEventListener("hashchange", n), () => {
            window.removeEventListener("hashchange", n)
        }
    }, [e]), null
}
export {
    w as HashPromptProcessor
};