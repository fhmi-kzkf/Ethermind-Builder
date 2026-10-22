import {
    o as _
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    CI as P,
    Cy as w,
    IF as I,
    NF as y,
    NI as C
} from "./app-shared-6CLVfi8w.js";
import {
    i as S,
    r as D
} from "./vendor-react-Fx2PtaaM.js";
import {
    Ca as k,
    Pm as v,
    Sa as O,
    Ta as R,
    wa as N
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    t as x
} from "./useRestoreProject-BApdcLcI.js";
import {
    n as T,
    r as E
} from "./githubRepoHelpers-7DkDfxD_.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "931af1aa-ce4a-43b5-b2de-bb2e42ab430a", e._sentryDebugIdIdentifier = "sentry-dbid-931af1aa-ce4a-43b5-b2de-bb2e42ab430a")
    })()
} catch {}
var o = _(S(), 1),
    q = D(),
    L = () => {
        const [e, t] = (0, o.useState)(!1), s = y(), a = I(), [d, u] = (0, o.useState)(null), [p, b] = (0, o.useState)(null), [n, f] = (0, o.useState)(null);
        (0, o.useEffect)(() => {
            const r = a.get("deleted"),
                c = a.get("projectName"),
                i = a.get("githubOwner");
            if (r === "true" && c && i) {
                t(!0), u(c), b(i);
                const l = E();
                l && f(l)
            }
        }, [a]);
        const {
            workspace: m
        } = C(), g = x({
            workspaceId: m ? .id,
            onSuccess: r => {
                t(!1), s.replace(P({
                    name: "project",
                    params: {
                        projectId: r
                    }
                }), {
                    creationHandoff: !0
                })
            }
        }), j = () => {
            t(!1), s.replace("/dashboard")
        }, h = () => {
            window.open(T(d, p) + "/settings")
        };
        return (0, q.jsx)(w, {
            open: e,
            onOpenChange: j,
            title: R(),
            description: k(),
            actions: [{
                label: O(),
                variant: "outline"
            }, n !== null && {
                label: v(),
                variant: "outline",
                closeOnClick: !1,
                onClick: () => g.mutate(n)
            }, {
                label: N(),
                variant: "inverse",
                closeOnClick: !1,
                onClick: h
            }]
        })
    };
export {
    L as t
};