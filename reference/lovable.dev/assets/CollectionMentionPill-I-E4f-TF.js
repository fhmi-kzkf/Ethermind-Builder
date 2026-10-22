import {
    o as v
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as C,
    r as y
} from "./vendor-react-Fx2PtaaM.js";
import {
    Lr as t
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    za as x
} from "./i18n-fn/_misc-D8ok4lJW.js";
import {
    ax as c,
    ca as j
} from "./app-lazy-shared-BNTl480s.js";
import {
    t as f
} from "./FolderMediumIcon-Cua_IK-L.js";
import {
    g as h,
    t as w
} from "./i18n-fn/files--filesCollections-Be1YgheF.js";
import {
    t as M
} from "./useOpenProjectCollection-m_pNBB8F.js";
import {
    t as I
} from "./collectionMentionContext-DrIr08zO.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            i = new e.Error().stack;
        i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "e3f708fa-72e7-4c10-934a-45381a732089", e._sentryDebugIdIdentifier = "sentry-dbid-e3f708fa-72e7-4c10-934a-45381a732089")
    })()
} catch {}
var D = v(C(), 1),
    s = y();

function F({
    artifactId: e,
    fallback: i,
    pendingLabel: a,
    streamingPending: d = !1,
    onRemove: m
}) {
    const o = (0, D.use)(I),
        u = M(),
        p = !o || !o.access.isLoading && !o.access.eligible,
        n = o ? j(o.access.collections, e) : void 0;
    if (p && i !== void 0) return (0, s.jsx)("span", {
        className: "fs-mask",
        children: i
    });
    if (d && !n) return (0, s.jsx)(c, {
        variant: "file",
        icon: f,
        label: t(),
        tooltip: t()
    });
    const l = o ? .access.isLoading ? ? !1,
        b = l ? a || t() : w(),
        _ = l ? a || t() : h(),
        g = async () => {
            const r = await o ? .access.resolveCurrent(e);
            r && u(r)
        };
    return (0, s.jsx)("span", {
        className: "fs-mask",
        children: (0, s.jsx)(c, {
            variant: "file",
            icon: f,
            truncate: !0,
            label: n ? .name || b,
            tooltip: n ? x() : _,
            onClick: n ? () => {
                g()
            } : void 0,
            onRemove: m
        })
    })
}
export {
    F as t
};