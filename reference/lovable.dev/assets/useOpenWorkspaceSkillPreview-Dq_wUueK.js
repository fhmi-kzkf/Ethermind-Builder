import {
    o as I
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    $L as h,
    FI as v,
    gM as C,
    lz as P,
    wj as _
} from "./app-shared-6CLVfi8w.js";
import {
    w as A
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as T
} from "./vendor-react-Fx2PtaaM.js";
import {
    At as R
} from "./flag-catalog-BJaXoOeP.js";
import {
    Eo as D,
    Gn as F,
    Id as V,
    Io as y,
    Ln as w,
    Rn as W,
    Vn as q,
    jd as E
} from "./app-lazy-shared-BNTl480s.js";
import {
    it as O
} from "./route-shared-leaves-Cd6hFGLK.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new t.Error().stack;
        r && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[r] = "1e3e3184-bfb7-49d1-926e-31fc3b28ce74", t._sentryDebugIdIdentifier = "sentry-dbid-1e3e3184-bfb7-49d1-926e-31fc3b28ce74")
    })()
} catch {}
var c = I(T(), 1);

function U() {
    const t = v(),
        r = h() ? .uid,
        o = A(),
        s = V(),
        n = E(),
        u = O({
            permission: P.ViewWorkspaceSkills
        }).allowed,
        p = _(R).enabled,
        f = (0, c.useRef)(null),
        S = u && !!t && !!s && !!n,
        m = p && !!r && !!s && !!n,
        i = (0, c.useCallback)(async (e, d, b, g) => {
            if (!s || !n) return !1;
            f.current = {
                scope: d,
                skillName: e
            };
            try {
                const l = await g(),
                    {
                        frontmatter: a
                    } = W(l),
                    k = f.current;
                return k ? .scope !== d || k.skillName !== e ? !1 : (s.getState().setActiveSkillCandidatePreview({
                    path: `skills/${e}/${w}`,
                    name: e,
                    title: a.name || D(e),
                    description: a.description,
                    markdown: l,
                    scope: b
                }), n.getState().switchToViewRaw("skillCandidate"), !0)
            } catch (l) {
                const a = f.current;
                return a ? .scope === d && a.skillName === e && C(l), !1
            }
        }, [s, n]);
    return {
        canOpenWorkspaceSkillPreview: S,
        openWorkspaceSkillPreview: (0, c.useCallback)(async e => y(e) || !u || !t ? !1 : i(e, `workspace:${t}`, "workspace", () => o.fetchQuery(F({
            workspaceId: t,
            skillName: e,
            path: w,
            staleTime: 3e4
        }))), [u, i, o, t]),
        canOpenPersonalSkillPreview: m,
        openPersonalSkillPreview: (0, c.useCallback)(async e => y(e) || !p || !r ? !1 : i(e, `personal:${r}`, "personal", () => o.fetchQuery(q({
            skillName: e,
            path: w,
            staleTime: 3e4
        }))), [i, p, o, r])
    }
}
export {
    U as t
};