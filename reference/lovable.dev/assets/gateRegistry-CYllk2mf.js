import {
    a as c,
    i as l,
    o as p,
    s as r
} from "./i18n-fn/publish-CsFxIUbG.js";
import {
    $r as _,
    Aa as o,
    An as d,
    As as g,
    Ca as h,
    Cn as b,
    Ct as f,
    Dn as y,
    Ea as v,
    En as k,
    Fn as m,
    Fs as G,
    Is as R,
    Jr as q,
    Kr as F,
    Ls as w,
    Mn as A,
    Ms as C,
    Nn as S,
    Ns as P,
    Oa as I,
    On as D,
    Pn as L,
    Ps as x,
    Qr as T,
    Sa as M,
    Sn as E,
    St as j,
    Ta as $,
    Tn as O,
    Tt as B,
    Xr as U,
    Yr as K,
    Zr as N,
    _n as W,
    _t as X,
    ba as H,
    bn as J,
    bt as Q,
    ci as Y,
    cn as Z,
    di as z,
    dn as V,
    ei as ii,
    fi as ei,
    fn as si,
    gn as ai,
    gt as ti,
    hn as ni,
    ht as li,
    jn as ui,
    js as ci,
    ka as pi,
    kn as ri,
    li as _i,
    ln as oi,
    mn as di,
    mt as gi,
    ni as hi,
    pi as bi,
    pn as fi,
    qr as yi,
    ri as vi,
    sn as ki,
    ti as mi,
    ui as Gi,
    un as Ri,
    us as qi,
    vn as Fi,
    vt as n,
    wn as wi,
    wt as Ai,
    xn as Ci,
    xt as Si,
    yn as Pi,
    yt as Ii
} from "./i18n-fn/publish--publish-CZ1qJQT9.js";
try {
    (function() {
        var i = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new i.Error().stack;
        e && (i._sentryDebugIds = i._sentryDebugIds || {}, i._sentryDebugIds[e] = "f04ea7b2-690f-4c28-9902-86c06c2d2832", i._sentryDebugIdIdentifier = "sentry-dbid-f04ea7b2-690f-4c28-9902-86c06c2d2832")
    })()
} catch {}
var Hi = i => i,
    s = i => i,
    Di = i => (i ? .enable_pii ? ? !1) && (i ? .block_publish_on_pii ? ? !1),
    Ji = (i, e) => Di(i) && !(e ? .block_publish_on_pii_superseded ? ? !1),
    Li = s({
        reason: "pii-findings",
        label: I,
        caption: i => ({
            publishing: wi,
            updating: O,
            uploading: k
        })[i](),
        blockedTooltip: i => i === "publishing" ? C() : P(),
        cta: {
            type: "switch-view",
            view: "privacy",
            label: p
        },
        softDialog: null,
        rules: [{
            source: "pii",
            enforcement: "hard",
            isActive: i => i.piiGateActive && i.piiOpenCount > 0
        }]
    }),
    t = "Some of this project's checks failed on the latest version. Find out why each one failed and fix it without weakening the check, then run the checks again.",
    u = i => i ? .status === "completed" ? (i.checks ? ? []).filter(e => e.required && (e.status === "failed" || e.status === "errored")) : [],
    Qi = i => i.some(e => e.reason === "checks-failed"),
    Yi = i => u(i).length,
    xi = i => {
        const e = "`".repeat(Math.max(3, ...Array.from(i.matchAll(/`+/g), a => a[0].length + 1)));
        return [e, i.trimEnd(), e]
    },
    Ti = i => {
        const e = i.source === "project" ? ` (.lovable/checks/${i.name}.yaml)` : "",
            a = `- ${i.title||i.name}${e}: ${i.summary||i.status}`;
        return i.output ? [a, ...xi(i.output)] : [a]
    },
    Zi = i => {
        const e = u(i);
        return e.length === 0 ? t : [t, "", ...e.flatMap(Ti)].join(`
`)
    },
    Mi = s({
        reason: "checks-failed",
        label: M,
        caption: i => ({
            publishing: si,
            updating: fi,
            uploading: di
        })[i](),
        cta: {
            type: "agent-message",
            message: t,
            label: n,
            loadingLabel: l
        },
        softDialog: {
            title: Ii,
            descriptions: {
                publish: i => gi({
                    count: i
                }),
                save: i => li({
                    count: i
                }),
                update: i => ti({
                    count: i
                }),
                upload: i => X({
                    count: i
                })
            },
            primaryLabel: n,
            primaryAction: "fix-checks"
        },
        criticalFindingCount: i => i.failedRequiredCheckCount,
        rules: [{
            source: "checks",
            enforcement: "soft",
            isActive: i => i.failedRequiredCheckCount > 0
        }]
    }),
    zi = i => i ? .status === "running" && (i.checks ? ? []).some(e => e.required && (e.status === "pending" || e.status === "running")),
    Ei = s({
        reason: "checks-running",
        label: h,
        caption: i => ({
            publishing: ni,
            updating: ai,
            uploading: W
        })[i](),
        cta: {
            type: "scan-in-progress",
            label: qi
        },
        softDialog: {
            title: Ai,
            descriptions: {
                publish: () => Q(),
                save: () => Si(),
                update: () => j(),
                upload: () => f()
            },
            primaryLabel: B,
            primaryAction: "wait-for-checks"
        },
        criticalFindingCount: () => 0,
        rules: [{
            source: "checks",
            enforcement: "soft",
            isActive: i => i.requiredChecksRunning
        }]
    }),
    ji = s({
        reason: "app-mcp-unauthenticated",
        label: v,
        caption: i => ({
            publishing: Ci,
            updating: E,
            uploading: b
        })[i](),
        cta: {
            type: "agent-message",
            get message() {
                return S()
            },
            label: ki,
            loadingLabel: Z
        },
        softDialog: null,
        evaluatesWhileSecurityLoading: !0,
        criticalFindingCount: () => 0,
        rules: [{
            source: "app-mcp",
            enforcement: "hard",
            isActive: i => i.appMcpUnauthenticatedPrivate
        }]
    }),
    $i = s({
        reason: "build-failed",
        label: H,
        caption: i => ({
            publishing: oi,
            updating: Ri,
            uploading: V
        })[i](),
        cta: {
            type: "agent-message",
            message: "The latest build failed, so publishing is blocked. Fix the build errors so the project builds again.",
            label: c,
            loadingLabel: l
        },
        softDialog: null,
        evaluatesWhileSecurityLoading: !0,
        rules: [{
            source: "build",
            enforcement: "hard",
            isActive: i => i.headBuildFailed
        }]
    }),
    Oi = s({
        reason: "critical-findings",
        label: $,
        caption: i => ({
            publishing: Fi,
            updating: Pi,
            uploading: J
        })[i](),
        blockedTooltip: i => i === "publishing" ? g() : ci(),
        cta: {
            type: "switch-view",
            view: "security",
            label: m
        },
        softDialog: {
            title: N,
            descriptions: {
                publish: i => yi({
                    count: i
                }),
                save: i => q({
                    count: i
                }),
                update: i => K({
                    count: i
                }),
                upload: i => U({
                    count: i
                })
            },
            primaryLabel: F,
            primaryAction: "review-security"
        },
        rules: [{
            source: "workspace",
            enforcement: "hard",
            isActive: i => i.workspaceBlocksCritical && i.criticalFindingCount > 0
        }, {
            source: "hvt",
            enforcement: "soft",
            isActive: i => i.hvtRequiresSecurityPolicy && i.criticalFindingCount > 0
        }]
    }),
    Bi = s({
        reason: "scan-in-progress",
        label: pi,
        caption: i => ({
            publishing: y,
            updating: D,
            uploading: ri
        })[i](),
        blockedTooltip: i => i === "publishing" ? x() : G(),
        cta: {
            type: "scan-in-progress",
            label: L
        },
        softDialog: {
            title: hi,
            descriptions: {
                publish: () => T(),
                save: () => _(),
                update: () => ii(),
                upload: () => mi()
            },
            primaryLabel: vi,
            primaryAction: "wait-for-security-scan"
        },
        rules: [{
            source: "hvt",
            enforcement: "soft",
            isActive: i => i.hvtRequiresSecurityPolicy && i.requiredSecurityScanInProgress
        }]
    }),
    Ui = s({
        reason: "scan-required",
        label: o,
        caption: i => ({
            publishing: d,
            updating: ui,
            uploading: A
        })[i](),
        blockedTooltip: i => i === "publishing" ? R() : w(),
        cta: {
            type: "run-security-scan",
            label: r
        },
        softDialog: {
            title: bi,
            descriptions: {
                publish: () => Y(),
                save: () => _i(),
                update: () => Gi(),
                upload: () => z()
            },
            primaryLabel: ei,
            primaryAction: "run-security-scan"
        },
        rules: [{
            source: "hvt",
            enforcement: "soft",
            isActive: i => i.hvtRequiresSecurityPolicy && i.missingCodeSecurityScan
        }]
    }),
    Ki = [$i, ji, Oi, Li, Bi, Ui, Mi, Ei],
    Ni = new Map(Ki.map(i => [i.reason, i]));

function Vi(i) {
    const e = Ni.get(i);
    if (!e) throw new Error(`publish gate reason is not registered: ${i}`);
    return e
}
export {
    Yi as a, Di as c, Zi as i, Hi as l, Ki as n, Qi as o, zi as r, Ji as s, Vi as t
};