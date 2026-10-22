import {
    AR as o,
    Dc as i,
    HM as a,
    WP as c,
    gM as u,
    iM as f,
    qI as n
} from "./app-shared-6CLVfi8w.js";
import {
    r as y,
    w as d
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    Mm as l,
    Nm as p
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    wt as m
} from "./settings-shared-leaves-B-HU8sMN.js";
import {
    t as _
} from "./deleteRestoreLimit-CYYcNQiI.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new t.Error().stack;
        r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "f111260c-9701-4c69-9f4c-dc7acea989cf", t._sentryDebugIdIdentifier = "sentry-dbid-f111260c-9701-4c69-9f4c-dc7acea989cf")
    })()
} catch {}

function h({
    workspaceId: t,
    onSuccess: r
} = {}) {
    const s = d();
    return y({
        mutationFn: async e => (await f().POST("/projects/{project_id}/restore", {
            params: {
                path: {
                    project_id: e
                }
            }
        }), e),
        onSuccess: e => {
            m(e), s.invalidateQueries({
                queryKey: c.all
            }), s.invalidateQueries({
                queryKey: i.starredProjectsBase()
            }), t && (s.invalidateQueries({
                queryKey: n.searchProjectsBase(t)
            }), s.invalidateQueries({
                queryKey: n.detail(t)
            })), r ? .(e)
        },
        onError: e => {
            if (e instanceof o && e.type === "project_name_conflict") {
                a.error(l());
                return
            }
            if (e instanceof o && e.type === "project_not_restorable") {
                a.error(p());
                return
            }
            _(e) || u(e)
        }
    })
}
export {
    h as t
};