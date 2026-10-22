import {
    Hy as _
} from "./app-shared-6CLVfi8w.js";
import {
    r as c
} from "./vendor-react-Fx2PtaaM.js";
import {
    a as p,
    c as t,
    i as E,
    l as N,
    n as o,
    o as l,
    r as A,
    s as f,
    t as b
} from "./i18n-fn/supabaseSharedInstanceWarning-BSUt74gR.js";
import {
    Fc as h
} from "./dashboard-shared-BN9MnewY.js";
import {
    n as m
} from "./ui-alert-C_SwFFEV.js";
try {
    (function() {
        var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new n.Error().stack;
        a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "346d4c11-e49b-4b6d-9ba4-564809ce9a66", n._sentryDebugIdIdentifier = "sentry-dbid-346d4c11-e49b-4b6d-9ba4-564809ce9a66")
    })()
} catch {}
var O = (function(n) {
        return n.ACTIVE_HEALTHY = "ACTIVE_HEALTHY", n.ACTIVE_UNHEALTHY = "ACTIVE_UNHEALTHY", n.COMING_UP = "COMING_UP", n.GOING_DOWN = "GOING_DOWN", n.INACTIVE = "INACTIVE", n.INIT_FAILED = "INIT_FAILED", n.REMOVED = "REMOVED", n.RESTARTING = "RESTARTING", n.RESIZING = "RESIZING", n.UNKNOWN = "UNKNOWN", n.UPGRADING = "UPGRADING", n.PAUSING = "PAUSING", n.RESTORING = "RESTORING", n.RESTORE_FAILED = "RESTORE_FAILED", n.PAUSE_FAILED = "PAUSE_FAILED", n
    })({}),
    s = c(),
    g = n => {
        const a = n.connected_projects,
            I = n.has_more_in_workspace,
            r = n.has_other_workspaces;
        let e;
        if (a.length > 0) {
            const i = a.join(", ");
            I && r ? e = E({
                projects: i
            }) : r ? e = l({
                projects: i
            }) : I ? e = p({
                projects: i
            }) : e = A({
                projects: i
            })
        } else I && r ? e = f() : r ? e = N() : e = t();
        return `${e} ${b()}`
    },
    d = ({
        info: n
    }) => (0, s.jsx)("span", {
        className: "fs-mask",
        children: g(n)
    }),
    u = ({
        info: n
    }) => (0, s.jsx)(m, {
        announce: !1,
        variant: "warning",
        title: o(),
        description: (0, s.jsx)(d, {
            info: n
        })
    }),
    U = ({
        info: n
    }) => (0, s.jsx)(h, {
        icon: _,
        intent: "attention",
        "aria-label": o(),
        description: (0, s.jsx)(d, {
            info: n
        }),
        instant: !0
    });
export {
    O as i, U as n, d as r, u as t
};