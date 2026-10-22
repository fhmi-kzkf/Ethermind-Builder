import {
    Kz as p,
    wy as b,
    zO as y
} from "./app-shared-6CLVfi8w.js";
import {
    r as g
} from "./vendor-react-Fx2PtaaM.js";
import {
    H as h
} from "./route-shared-leaves-Cd6hFGLK.js";
import {
    ai as m,
    ii as _,
    oi as v,
    si as D
} from "./i18n-fn/publish--publish-CZ1qJQT9.js";
import {
    t as w
} from "./gateRegistry-CYllk2mf.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "cae6f141-96ca-47bc-a014-71e413f8d608", e._sentryDebugIdIdentifier = "sentry-dbid-cae6f141-96ca-47bc-a014-71e413f8d608")
    })()
} catch {}
var a = g(),
    G = ({
        reason: e,
        intent: s,
        criticalFindingCount: i,
        onReview: l,
        onRunScan: n,
        onFixChecks: u,
        onPublishAnyway: c,
        onCancel: o
    }) => {
        const d = {
                publish: _(),
                save: m(),
                update: v(),
                upload: D()
            },
            t = w(e).softDialog;
        if (!t) return null;
        const f = {
            "review-security": l,
            "run-security-scan": n,
            "wait-for-security-scan": o,
            "wait-for-checks": o,
            "fix-checks": u
        };
        return (0, a.jsx)(b, {
            title: t.title(),
            description: t.descriptions[s](i),
            actions: [{
                label: d[s],
                variant: "outline",
                closeOnClick: !1,
                onClick: c
            }, {
                label: t.primaryLabel(),
                closeOnClick: !1,
                onClick: f[t.primaryAction]
            }]
        })
    },
    r = p((e, s) => ({
        request: null,
        open: i => e({
            request: i
        }),
        close: () => e({
            request: null
        }),
        dismiss: () => {
            const {
                request: i
            } = s();
            i && (e({
                request: null
            }), i.onDismissed())
        }
    })),
    j = e => r.getState().open(e),
    I = () => r.getState().close();

function O() {
    const e = r(i => i.request),
        s = r(i => i.dismiss);
    return h(s), (0, a.jsx)(y, {
        open: e !== null,
        onOpenChange: i => !i && s(),
        children: e && (0, a.jsx)(G, { ...e
        })
    })
}
export {
    j as i, O as n, I as r, G as t
};