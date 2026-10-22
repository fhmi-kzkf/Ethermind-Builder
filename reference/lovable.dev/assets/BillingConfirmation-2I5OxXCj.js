const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/BillingConfirmationDialog--SutQ28D.js", "assets/rolldown-runtime-CSz5w8F5.js", "assets/app-shared-6CLVfi8w.js", "assets/vendor-tanstack-CIJxxCBL.js", "assets/vendor-react-Fx2PtaaM.js", "assets/vendor-sync-store-hJwz-_Wy.js", "assets/i18n-fn/_eager-BPNnp47q.js", "assets/vendor-util-bDkZRKmn.js", "assets/vendor-base-ui-field-BdT_EZJM.js", "assets/vendor-floating-ui-98f9kiPk.js", "assets/vendor-base-ui-eager-BVTTpYm_.js", "assets/flag-catalog-BJaXoOeP.js", "assets/vendor-es-toolkit-CQNapaF9.js", "assets/vendor-overlay-WeHoSqo7.js", "assets/vendor-schema-CyHzn7jr.js", "assets/vendor-firebase-core-bjLY_DoP.js", "assets/vendor-firebase-Dp4V3doB.js", "assets/vendor-tslib-CeDFfI6J.js", "assets/vendor-protobuf-BvDTVJFg.js", "assets/vendor-datefns-CALvQ3Vn.js", "assets/vendor-motion-Hvlv7m0n.js", "assets/app-shared-Wsr5ECzj.css", "assets/i18n-fn/checkout-C9hOOpAx.js", "assets/i18n-fn/paywall-BwztEgeL.js", "assets/i18n-fn/pricingPlans-k97rEPwJ.js", "assets/i18n-fn/upgradeBusiness-DvQTd8xE.js", "assets/CheckMediumIcon-DZf9MvjM.js", "assets/brand-dialog-BadhddaZ.js", "assets/TermsAcceptanceNotice-CKNNLz6X.js", "assets/useTermsAcceptance-Cj5PnRHQ.js", "assets/PricingSummary-CfVd98Yn.js", "assets/dashboard-shared-BN9MnewY.js", "assets/login-shared-leaves-DRum0qYb.js", "assets/ui-password-input-DxOwVSEA.js", "assets/ui-alert-C_SwFFEV.js", "assets/ui-password-input-BcX6uEiW.css", "assets/vendor-base-ui-lazy-B023JbQA.js", "assets/vendor-base-ui-chrome-CdtDcIlx.js", "assets/settings-shared-leaves-B-HU8sMN.js", "assets/route-shared-leaves-Cd6hFGLK.js", "assets/ui-shared-leaves-BBQog2OW.js", "assets/vendor-hook-form-CL-xHDfs.js", "assets/dashboard-shared-D-f1d4US.css", "assets/formatPrice-_EULtPe2.js", "assets/pricingKeys-D2hKNi-l.js", "assets/PlanDropdown-ai7kLBvI.js", "assets/app-lazy-shared-BNTl480s.js", "assets/i18n-fn/editorNav-DaeWPYZk.js", "assets/i18n-fn/editor-BeFBoXwU.js", "assets/i18n-fn/previewInteractionToolbar-wl1c6sXA.js", "assets/i18n-fn/publish-CsFxIUbG.js", "assets/i18n-fn/settings-CLaQyFS8.js", "assets/i18n-fn/share-EPrD2XDc.js", "assets/i18n-fn/_misc-D8ok4lJW.js", "assets/ui-split-button-Dk7z_kOa.js", "assets/dashboard-icons-Dw3nX-fy.js", "assets/ui-icon-sidebar-8d86DMoM.js", "assets/vendor-radix-lazy-B6li8hrs.js", "assets/i18n-fn/drafts--editorNav-Zpmu1ynC.js", "assets/marketing-landing-app-shared~index~typography~tokens~index~page~page~page~page~page~page~pa~e8sg3j49-Bf2V78yj.js", "assets/app-lazy-shared-9jY1ET_5.css", "assets/planOperations-Bl_HjJUr.js"]))) => i.map(i => d[i]);
import {
    o as c
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    BI as l,
    BO as f,
    FO as g,
    Gk as u,
    RA as p,
    Wk as m,
    g_ as t,
    zO as b,
    z_ as _
} from "./app-shared-6CLVfi8w.js";
import {
    i as h,
    r as k
} from "./vendor-react-Fx2PtaaM.js";
import {
    kb as C
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    H as y
} from "./route-shared-leaves-Cd6hFGLK.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "bb193814-faad-42d8-8fe7-247f718f2905", e._sentryDebugIdIdentifier = "sentry-dbid-bb193814-faad-42d8-8fe7-247f718f2905")
    })()
} catch {}
var i = c(h(), 1),
    a = k(),
    E = () => {
        const e = l(r => r.activeWorkspaceId);
        return (0, i.useCallback)(r => {
            e && t.getState().open({ ...r,
                workspaceId: e
            })
        }, [e])
    },
    D = (0, i.lazy)(() => C(() =>
        import ("./BillingConfirmationDialog--SutQ28D.js").then(e => ({
            default: e.BillingConfirmationDialog
        })), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]))),
    I = () => (0, a.jsx)(_, {
        label: "Loading",
        height: "lg"
    });

function O() {
    const e = t(o => o.request),
        r = t(o => o.close),
        d = t(o => o.flushClosed),
        s = l(o => o.activeWorkspaceId);
    y(r), (0, i.useEffect)(() => {
        e !== null && e.workspaceId !== s && r()
    }, [e, s, r]);
    const n = e !== null && e.workspaceId === s ? e : null;
    return (0, a.jsx)(b, {
        open: n !== null,
        onOpenChange: o => !o && r(),
        onOpenChangeComplete: o => !o && d(),
        children: n && (0, a.jsx)(m, {
            reportAs: "BillingConfirmationDialogHost",
            resetKey: `${n.targetPlan}:${n.scenario}`,
            fallback: o => (0, a.jsxs)(g, {
                "aria-describedby": void 0,
                children: [(0, a.jsx)(p, {
                    children: (0, a.jsx)(f, {
                        children: "Error"
                    })
                }), (0, a.jsx)(u, {
                    error: o.error,
                    componentStack: o.componentStack
                })]
            }),
            children: (0, a.jsx)(i.Suspense, {
                fallback: (0, a.jsx)(I, {}),
                children: (0, a.jsx)(D, {
                    targetPlan: n.targetPlan,
                    scenario: n.scenario
                })
            })
        })
    })
}
export {
    E as n, O as t
};