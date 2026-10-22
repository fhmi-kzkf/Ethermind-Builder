import {
    o as u
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    HM as n,
    Kd as p,
    lz as l,
    qI as f
} from "./app-shared-6CLVfi8w.js";
import {
    w as b
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as g
} from "./vendor-react-Fx2PtaaM.js";
import {
    C as y,
    D as m,
    j as h,
    y as w
} from "./vendor-schema-CyHzn7jr.js";
import {
    Ml as v
} from "./app-lazy-shared-BNTl480s.js";
import {
    Nr as z
} from "./route-shared-leaves-Cd6hFGLK.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "165c61d4-80d4-495a-9c62-03bdfab5cb7c", e._sentryDebugIdIdentifier = "sentry-dbid-165c61d4-80d4-495a-9c62-03bdfab5cb7c")
    })()
} catch {}
var P = u(g(), 1),
    j = ({
        workspaceId: e,
        enabled: s = !0,
        includeSharedInstances: t = !1
    }) => {
        const o = z(),
            r = !!e && s,
            {
                data: a,
                isPending: i,
                isError: c,
                refetch: d
            } = p({ ...v(e, o, {
                    includeSharedInstances: t
                }),
                permission: l.ViewWorkspace,
                enabled: r
            });
        return {
            supabaseOrganizations: a,
            isLoading: r && i,
            isError: c,
            refetch: d,
            noOrganizations: !a || a.length === 0
        }
    },
    S = m({
        type: y("supabaseAuth"),
        success: w(),
        error: h().optional()
    }),
    q = ({
        workspaceId: e,
        onConnectSuccess: s
    }) => {
        const t = b();
        (0, P.useEffect)(() => {
            const o = async r => {
                if (r.origin !== window.location.origin) return;
                const a = S.safeParse(r.data);
                a.success && (a.data.success ? (n.success("Connection Successful", {
                    description: "Your Supabase organization has been linked to your workspace. Select a project to finish the setup."
                }), await t.invalidateQueries({
                    queryKey: f.supabaseOrganizationsBase(e)
                }), s ? .()) : n.error("Connection Failed", {
                    description: a.data.error || "Failed to connect to Supabase. Please try again."
                }))
            };
            return window.addEventListener("message", o), () => {
                window.removeEventListener("message", o)
            }
        }, [t, e, s])
    };
export {
    j as n, q as t
};