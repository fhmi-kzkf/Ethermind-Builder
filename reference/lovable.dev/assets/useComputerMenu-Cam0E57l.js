import {
    o as v
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    $L as C,
    HM as g,
    iM as y,
    wj as w
} from "./app-shared-6CLVfi8w.js";
import {
    r as E,
    u as I,
    w as S
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as M
} from "./vendor-react-Fx2PtaaM.js";
import {
    Vr as q
} from "./flag-catalog-BJaXoOeP.js";
import {
    t as D
} from "./DesktopIcon-BIv7HEG5.js";
import {
    a as T,
    c as k,
    d as P,
    f,
    i as F,
    l as L,
    n as Q,
    o as B,
    p as K,
    r as A,
    s as h,
    t as G,
    u as N
} from "./i18n-fn/connected-computer--connectedComputer-CiqCMwbM.js";
try {
    (function() {
        var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new n.Error().stack;
        a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "0a16a790-a81b-44d7-92c6-55b257fd8eec", n._sentryDebugIdIdentifier = "sentry-dbid-0a16a790-a81b-44d7-92c6-55b257fd8eec")
    })()
} catch {}
var p = v(M(), 1);

function U(n) {
    switch (n) {
        case "available":
            return G();
        case "connecting":
            return A();
        case "permission_required":
            return L();
        case "offline":
            return k();
        case "off":
            return h()
    }
}

function V(n) {
    const [a, i] = (0, p.useState)(null);
    return (0, p.useEffect)(() => {
        if (i(null), !n) return;
        let o = !0;
        const t = c => {
            o && i(c)
        };
        n.snapshot().then(t, () => {});
        const r = n.onStatusChange(t);
        return () => {
            o = !1, r()
        }
    }, [n]), a
}

function J() {
    const n = w(q).enabled,
        a = C() ? .uid,
        i = n && !!a,
        o = i && typeof window < "u" ? window.lovableDesktop ? .connectedComputer : void 0,
        t = V(o),
        r = S(),
        c = I({
            queryKey: ["connected-computers", a],
            enabled: i,
            queryFn: ({
                signal: e
            }) => y().GET("/connected-computers", {
                signal: e
            })
        }),
        b = t ? .status;
    (0, p.useEffect)(() => {
        b && r.invalidateQueries({
            queryKey: ["connected-computers"]
        })
    }, [b, r]);
    const l = E({
        mutationFn: async ({
            disconnect: e,
            computer: s
        }) => {
            const u = y();
            e && s ? await u.DELETE("/connected-computers/{enrollment_id}", {
                params: {
                    path: {
                        enrollment_id: s.enrollment_id
                    }
                }
            }) : s ? .on ? await u.DELETE("/connected-computers/selection") : o && (!s || s.enrollment_id === t ? .enrollmentId) ? await o.enable() : s && await u.PUT("/connected-computers/selection", {
                body: {
                    enrollment_id: s.enrollment_id
                }
            }), await o ? .refresh()
        },
        onError: () => g.error(P()),
        onSettled: () => r.invalidateQueries({
            queryKey: ["connected-computers"]
        })
    });
    if (!i) return null;
    const d = c.data ? .computers ? ? [],
        m = d.map(e => {
            const s = e.enrollment_id === t ? .enrollmentId,
                u = s && t ? t.status : e.on ? e.online ? "available" : "offline" : "off";
            return {
                type: "action",
                value: e.enrollment_id,
                label: s ? f() : e.device_name,
                className: "fs-mask",
                subtitle: U(u),
                selected: e.on,
                disabled: l.isPending,
                selectionBehavior: "stay",
                onSelect: () => l.mutate({
                    disconnect: !1,
                    computer: e
                })
            }
        });
    o && !d.some(e => e.enrollment_id === t ? .enrollmentId) && m.push({
        type: "action",
        value: "this-mac",
        label: f(),
        subtitle: h(),
        disabled: l.isPending || !c.isSuccess,
        selectionBehavior: "stay",
        onSelect: () => l.mutate({
            disconnect: !1,
            computer: null
        })
    });
    const _ = c.isPending ? T() : c.isError ? K() : m.length === 0 ? B() : null;
    return {
        type: "submenu",
        value: "connected-computers",
        icon: D,
        label: Q(),
        children: [{
            type: "heading",
            label: N()
        }, ...m, ..._ ? [{
            type: "action",
            value: "computer-status",
            label: _,
            disabled: !0
        }] : [], ...d.map(e => ({
            type: "action",
            value: "disconnect-" + e.enrollment_id,
            label: F({
                name: e.enrollment_id === t ? .enrollmentId ? f() : e.device_name
            }),
            className: "fs-mask",
            disabled: l.isPending,
            selectionBehavior: "stay",
            onSelect: () => l.mutate({
                disconnect: !0,
                computer: e
            })
        }))]
    }
}
export {
    J as t
};