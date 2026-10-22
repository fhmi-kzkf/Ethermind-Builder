import {
    o as ne
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    AR as se,
    CR as P,
    Gj as oe,
    IT as ie,
    JM as V,
    Nx as ae,
    cI as j,
    cL as K,
    cN as J,
    dI as le,
    fI as $,
    fP as B,
    gI as ce,
    i_ as ue,
    lI as L,
    mI as D,
    pI as Ee,
    rL as H,
    sI as de,
    sS as _e,
    tL as w,
    uI as Ie,
    xT as pe
} from "./app-shared-6CLVfi8w.js";
import {
    w as fe
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as Re,
    r as ve
} from "./vendor-react-Fx2PtaaM.js";
import {
    Fp as me,
    Ip as Ce,
    Np as Pe,
    Pp as Oe
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    t as Ne
} from "./vendor-util-bDkZRKmn.js";
import "./ui-password-input-DxOwVSEA.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cd85b97f-4597-416f-92b5-a2a7982f2b3e", e._sentryDebugIdIdentifier = "sentry-dbid-cd85b97f-4597-416f-92b5-a2a7982f2b3e")
    })()
} catch {}

function tt(e, t, {
    signal: r,
    edges: s
} = {}) {
    let a, p = null;
    const I = s != null && s.includes("leading"),
        v = s == null || s.includes("trailing"),
        n = () => {
            p !== null && (e.apply(a, p), a = void 0, p = null)
        },
        o = () => {
            v && n(), d()
        };
    let u = null;
    const R = () => {
            u != null && clearTimeout(u), u = setTimeout(() => {
                u = null, o()
            }, t)
        },
        E = () => {
            u !== null && (clearTimeout(u), u = null)
        },
        d = () => {
            E(), a = void 0, p = null
        },
        c = () => {
            n()
        },
        l = function(...f) {
            if (r ? .aborted) return;
            a = this, p = f;
            const m = u == null;
            R(), I && m && n()
        };
    return l.schedule = R, l.cancel = d, l.flush = c, r ? .addEventListener("abort", d, {
        once: !0
    }), l
}
var rt = {
        glide: {
            type: "spring",
            duration: .3,
            bounce: 0
        }
    },
    i = ve(),
    ge = e => (0, i.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, i.jsx)("path", {
            d: "M13.4697 5.46933C14.8672 4.07207 17.1328 4.07207 18.5303 5.46933C19.9277 6.86675 19.9276 9.1324 18.5303 10.5299L8.82324 20.2369C8.49509 20.5651 8.05001 20.7496 7.58594 20.7496H5C4.0335 20.7496 3.25 19.9661 3.25 18.9996V16.4137C3.25012 15.9497 3.43461 15.5044 3.7627 15.1764L13.4697 5.46933ZM17.4697 6.52988C16.6581 5.71841 15.3419 5.71841 14.5303 6.52988L13.0605 7.99961L16 10.9391L17.4697 9.46933C18.2813 8.65765 18.2814 7.34151 17.4697 6.52988ZM4.75 18.9996C4.75 19.1377 4.86193 19.2496 5 19.2496H7.58594C7.65219 19.2496 7.71585 19.2232 7.7627 19.1764L14.9395 11.9996L12 9.06015L4.82324 16.2369C4.77647 16.2837 4.75012 16.3475 4.75 16.4137V18.9996Z",
            fill: "currentColor"
        })
    }),
    nt = B(ge, "PenIcon"),
    Ae = e => (0, i.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, i.jsx)("path", {
            d: "M18.25 12C18.25 10.7574 17.2426 9.75 16 9.75H8C6.75736 9.75 5.75 10.7574 5.75 12V18C5.75 19.2426 6.75736 20.25 8 20.25H16C17.2426 20.25 18.25 19.2426 18.25 18V12ZM11.25 17V13C11.25 12.5858 11.5858 12.25 12 12.25C12.4142 12.25 12.75 12.5858 12.75 13V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17ZM15.25 6C15.25 4.20507 13.7949 2.75 12 2.75C10.2051 2.75 8.75 4.20507 8.75 6V8.25H15.25V6ZM16.75 8.32422C18.4618 8.67161 19.75 10.1857 19.75 12V18C19.75 20.0711 18.0711 21.75 16 21.75H8C5.92893 21.75 4.25 20.0711 4.25 18V12C4.25 10.1857 5.53824 8.67161 7.25 8.32422V6C7.25 3.37665 9.37665 1.25 12 1.25C14.6234 1.25 16.75 3.37665 16.75 6V8.32422Z",
            fill: "currentColor"
        })
    }),
    st = B(Ae, "LockIcon"),
    _ = ne(Re(), 1);

function ot({
    className: e,
    type: t,
    error: r,
    ref: s,
    ...a
}) {
    return (0, i.jsx)("input", {
        type: t,
        spellCheck: !1,
        className: P("input-field rounded-2 typestyle-field-sm max-md:typestyle-field-base text-primary-pulse h-8 w-full px-3 outline-hidden", "placeholder:text-tertiary-pulse", "disabled:cursor-not-allowed disabled:opacity-50", "file:text-primary-pulse file:border-0 file:bg-transparent file:text-sm file:font-medium", r && "input-error", e),
        ref: s,
        "aria-invalid": r || void 0,
        ...a
    })
}
var he = Ne("select-none text-sm font-medium leading-none");

function it({
    className: e,
    ref: t,
    ...r
}) {
    return (0, i.jsx)("label", {
        ref: t,
        className: P(he(), e),
        ...r
    })
}
var Se = e => (0, i.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, i.jsx)("path", {
            d: "M18 12C18 10.8954 17.1046 10 16 10H8C6.89543 10 6 10.8954 6 12V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V12ZM11 17V13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17ZM15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V8H15V6ZM17 8.12598C18.7252 8.57002 20 10.1362 20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12C4 10.1362 5.27477 8.57002 7 8.12598V6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V8.12598Z",
            fill: "currentColor"
        })
    }),
    at = B(Se, "LockMediumIcon"),
    Te = e => (0, i.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, i.jsx)("path", {
            d: "M20 8C20 7.79323 19.9684 7.59386 19.9102 7.40625L13.9756 12.6006C12.8446 13.5901 11.1554 13.5901 10.0244 12.6006L4.08887 7.40625C4.03067 7.59378 4 7.79333 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8ZM6 6C5.85311 6 5.71014 6.01682 5.57227 6.04688L11.3418 11.0947C11.7188 11.4246 12.2812 11.4246 12.6582 11.0947L18.4268 6.04688C18.2892 6.01695 18.1466 6 18 6H6ZM22 16C22 18.2091 20.2091 20 18 20H6C3.79086 20 2 18.2091 2 16V8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V16Z",
            fill: "currentColor"
        })
    }),
    lt = B(Te, "MailMediumIcon"),
    A = new Map;

function Le(e, t) {
    if (_.useSyncExternalStore === void 0) throw new TypeError('You are using React 17 or below. Install with "npm install use-local-storage-state@17".');
    const [r] = (0, _.useState)(t ? .defaultValue);
    if (typeof window > "u") return [r, () => {}, {
        isPersistent: !0,
        removeItem: () => {}
    }];
    const s = t ? .serializer;
    return De(e, r, t ? .storageSync, s ? .parse, s ? .stringify)
}

function De(e, t, r = !0, s = xe, a = JSON.stringify) {
    !A.has(e) && t !== void 0 && T(() => localStorage.getItem(e)) === null && T(() => localStorage.setItem(e, a(t)));
    const p = (0, _.useRef)({
            item: null,
            parsed: t
        }),
        I = (0, _.useSyncExternalStore)((0, _.useCallback)(n => {
            const o = u => {
                e === u && n()
            };
            return Z.add(o), () => {
                Z.delete(o)
            }
        }, [e]), () => {
            var n;
            const o = (n = T(() => localStorage.getItem(e))) !== null && n !== void 0 ? n : null;
            if (A.has(e)) p.current = {
                item: o,
                parsed: A.get(e)
            };
            else if (o !== p.current.item) {
                let u;
                try {
                    u = o === null ? t : s(o)
                } catch {
                    u = t
                }
                p.current = {
                    item: o,
                    parsed: u
                }
            }
            return p.current.parsed
        }, () => t),
        v = (0, _.useCallback)(n => {
            const o = n instanceof Function ? n(p.current.parsed) : n;
            try {
                localStorage.setItem(e, a(o)), A.delete(e)
            } catch {
                A.set(e, o)
            }
            b(e)
        }, [e, a]);
    return (0, _.useEffect)(() => {
        if (!r) return;
        const n = o => {
            o.storageArea === T(() => localStorage) && o.key === e && b(e)
        };
        return window.addEventListener("storage", n), () => window.removeEventListener("storage", n)
    }, [e, r]), (0, _.useMemo)(() => [I, v, {
        isPersistent: I === t || !A.has(e),
        removeItem() {
            T(() => localStorage.removeItem(e)), A.delete(e), b(e)
        }
    }], [e, v, I, t])
}
var Z = new Set;

function b(e) {
    for (const t of [...Z]) t(e)
}

function xe(e) {
    return e === "undefined" ? void 0 : JSON.parse(e)
}

function T(e) {
    try {
        return e()
    } catch {
        return
    }
}
var ct = Le,
    N = {
        preview: /^preview(?:-([a-zA-Z0-9]+))?--(.+)$/,
        idPreview: /^id-preview(?:-([a-zA-Z0-9]+))?--(.+)$/,
        projectDev: /^project--(.+)-dev$/,
        project: /^project--(.+)$/,
        deployment: /^([a-z0-9](?:[a-z0-9-]*[a-z0-9])?)$/
    },
    we = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    O = (function(e) {
        return e.PREVIEW = "preview", e.ID_PREVIEW = "id-preview", e.PROJECT = "project", e.PROJECT_DEV = "project-dev", e.DEPLOYMENT = "deployment", e
    })({}),
    Q = e => N.preview.test(e) ? "preview" : N.idPreview.test(e) ? "id-preview" : N.projectDev.test(e) ? "project-dev" : N.project.test(e) ? "project" : N.deployment.test(e) ? "deployment" : null,
    X = ["lovableproject.com", "lovableproject-dev.com"],
    W = ["lovable.app", "gpt-eng.com", "gptengineer.run"],
    Y = {
        [O.PREVIEW]: {
            prefix: "preview",
            useProjectId: !1
        },
        [O.ID_PREVIEW]: {
            prefix: "id-preview",
            useProjectId: !0
        }
    },
    ye = e => {
        const t = e.replace(/\.$/, ""),
            [r, s] = t.split(/\.(.*)/);
        if (!s || !s.includes(".") || X.includes(s) || W.includes(s)) return;
        const a = r.match(N.idPreview);
        if (a && !a[1] && a[2] && we.test(a[2])) return {
            mode: "staticPreview",
            projectID: a[2],
            customDomain: t
        }
    },
    Be = e => {
        let t;
        try {
            t = new URL(e).hostname
        } catch {
            return null
        }
        try {
            return je(t)
        } catch {
            return null
        }
    },
    ut = e => {
        const t = Be(e);
        return !t || !("projectID" in t) || !t.projectID || "customDomain" in t && t.customDomain ? null : t.projectID
    },
    je = e => {
        for (const E of W) {
            const d = "." + E;
            if (!e.endsWith(d)) continue;
            const c = e.slice(0, -d.length).split(".");
            if (c.length !== 2) continue;
            const [l, f] = c;
            if (!N.deployment.test(f)) continue;
            if (N.deployment.test(l) && !N.preview.test(l) && !N.idPreview.test(l)) return {
                mode: "workspaceDeployment",
                workspaceSlug: f,
                projectName: l
            };
            const m = Q(l);
            if (m === O.PREVIEW || m === O.ID_PREVIEW) {
                const h = l.split("--");
                if (h.length === 2) {
                    const [C, g] = h;
                    if (!g) continue;
                    const S = C.replace(Y[m].prefix, ""),
                        z = {
                            mode: "staticPreview",
                            sha: S.startsWith("-") ? S.substring(1) : void 0,
                            tldp1: E,
                            workspaceSlug: f
                        };
                    return m === O.ID_PREVIEW ? { ...z,
                        projectID: g
                    } : { ...z,
                        projectName: g
                    }
                }
            }
        }
        const t = ye(e);
        if (t) return t;
        if (e ? .split(".").find(E => E.startsWith("xn--"))) return {
            mode: "customDomain",
            customDomain: e
        };
        const [r, s] = e.split(/\.(.*)/), a = X.includes(s), p = W.includes(s);
        if (!(a || p)) {
            const E = e.replace(/\.$/, "");
            if (!E || E.split(".").length < 2) throw new Error("parseLovableDomain: Invalid domain: " + e);
            return {
                mode: "customDomain",
                customDomain: E
            }
        }
        if (a) {
            const E = r.match(/^(.+)-(thr_[a-z0-9]+)$/);
            if (E) {
                const [, c, l] = E;
                return {
                    mode: "livePreview",
                    projectID: c,
                    purpose: l,
                    tldp1: s
                }
            }
            const d = r.match(/^(.+)-devserver-([a-z2-7]+)$/);
            if (d) {
                const [, c, l] = d;
                return {
                    mode: "livePreview",
                    projectID: c,
                    purpose: "main",
                    tldp1: s,
                    devServerKey: l
                }
            }
            return {
                mode: "livePreview",
                projectID: r,
                purpose: "main",
                tldp1: s
            }
        }
        const I = Q(r);
        if (!I) throw new Error("Not valid preview domain");
        if (I == O.DEPLOYMENT) return {
            mode: "deployment",
            projectName: r
        };
        if (I == O.PROJECT || I == O.PROJECT_DEV) {
            const E = r.split("--");
            if (E.length !== 2 || !E[1]) throw new Error("Invalid project static domain syntax: " + r);
            const d = E[1];
            return I == O.PROJECT_DEV ? {
                mode: "projectStatic",
                projectID: d.slice(0, -4),
                env: "dev",
                tldp1: s
            } : {
                mode: "projectStatic",
                projectID: d,
                env: "prod",
                tldp1: s
            }
        }
        const v = r.split("--");
        if (v.length !== 2) throw new Error("Invalid domain syntax: " + r);
        const [n, o] = v;
        if (!o) throw new Error("Invalid domain syntax - missing project identifier " + r);
        const u = n.replace(Y[I].prefix, ""),
            R = {
                mode: "staticPreview",
                sha: u.startsWith("-") ? u.substring(1) : void 0,
                tldp1: s
            };
        if (I == O.ID_PREVIEW) return { ...R,
            projectID: o
        };
        if (I == O.PREVIEW) return { ...R,
            projectName: o
        };
        throw new Error("Unknown preview type")
    };

function q(e, t, r) {
    const s = r ? ? t.replace(/(Monotone|Logotype|Logomark)?Logo$/, ""),
        a = ({
            className: p,
            fill: I = "currentColor",
            ...v
        }) => (0, i.jsx)(e, {
            role: "img",
            "aria-label": s,
            className: P("shrink-0", p),
            fill: I,
            ...v
        });
    return a.displayName = t, a
}
var y = (function(e) {
    return e.BIZ_TEMPLATES = "BIZ_TEMPLATES", e.BIZ_PERSONAL_PROJECT = "BIZ_PERSONAL_PROJECT", e.BIZ_WORKSPACE_VIEW = "BIZ_WORKSPACE_VIEW", e.BIZ_PERSONAL_FOLDER = "BIZ_PERSONAL_FOLDER", e.BIZ_SSO = "BIZ_SSO", e.BIZ_WEBSITE_ACCESS = "BIZ_WEBSITE_ACCESS", e.BIZ_MCP_SERVERS = "BIZ_MCP_SERVERS", e.BIZ_ALLOW_EXTERNAL_COLLABORATORS = "BIZ_ALLOW_EXTERNAL_COLLABORATORS", e.ENTERPRISE_RESTRICT_INVITATIONS = "ENTERPRISE_RESTRICT_INVITATIONS", e.ENTERPRISE_PUBLISH_PERMISSION_LEVEL = "ENTERPRISE_PUBLISH_PERMISSION_LEVEL", e.ENTERPRISE_DISABLE_SHARE_PREVIEW = "ENTERPRISE_DISABLE_SHARE_PREVIEW", e.ENTERPRISE_DISABLE_CODE_DOWNLOAD = "ENTERPRISE_DISABLE_CODE_DOWNLOAD", e.ENTERPRISE_SCIM = "ENTERPRISE_SCIM", e.ENTERPRISE_REQUIRE_MFA = "ENTERPRISE_REQUIRE_MFA", e.BIZ_BRANDED_APP_URLS = "BIZ_BRANDED_APP_URLS", e.ENTERPRISE_EDITOR_CAN_TRANSFER_PROJECT = "ENTERPRISE_EDITOR_CAN_TRANSFER_PROJECT", e.ENTERPRISE_REQUIRE_WORKSPACE_EDITOR_FOR_PROJECT_EDITING = "ENTERPRISE_REQUIRE_WORKSPACE_EDITOR_FOR_PROJECT_EDITING", e.PRO_DESIGN_SYSTEMS = "PRO_DESIGN_SYSTEMS", e.PRO_SUPPORT = "PRO_SUPPORT", e.PRO_VIEWER_INVITE_LINK = "PRO_VIEWER_INVITE_LINK", e.PRO_SEND_ADMIN_INVITE = "PRO_SEND_ADMIN_INVITE", e.PRO_SEND_VIEWER_INVITE = "PRO_SEND_VIEWER_INVITE", e.PRO_CHANGE_VIEWER_ROLE = "PRO_CHANGE_VIEWER_ROLE", e.PRO_CHANGE_ADMIN_ROLE = "PRO_CHANGE_ADMIN_ROLE", e.PRO_DOMAIN_CONNECT = "PRO_DOMAIN_CONNECT", e.PRO_HIDE_BADGE = "PRO_HIDE_BADGE", e.PRO_HIDE_BADGE_REPUBLISH = "PRO_HIDE_BADGE_REPUBLISH", e.PRO_CHANGE_CLOUD_INSTANCE_SIZE = "PRO_CHANGE_CLOUD_INSTANCE_SIZE", e.PRO_SEND_ADMIN_COLLABORATOR = "PRO_SEND_ADMIN_COLLABORATOR", e.PRO_SEND_VIEWER_COLLABORATOR = "PRO_SEND_VIEWER_COLLABORATOR", e.PRO_CHANGE_COLLABORATOR_TO_ADMIN = "PRO_CHANGE_COLLABORATOR_TO_ADMIN", e.PRO_CHANGE_COLLABORATOR_TO_VIEWER = "PRO_CHANGE_COLLABORATOR_TO_VIEWER", e.PRO_PROJECT_MONITORING = "PRO_PROJECT_MONITORING", e.BIZ_WORKSPACE_DISCOVERY = "BIZ_WORKSPACE_DISCOVERY", e.BIZ_FORBID_EXTERNAL_INVITES = "BIZ_FORBID_EXTERNAL_INVITES", e.BIZ_EXTERNAL_INVITE_DOMAIN_POLICY = "BIZ_EXTERNAL_INVITE_DOMAIN_POLICY", e.ENTERPRISE_PII_DATA_LABELING = "ENTERPRISE_PII_DATA_LABELING", e.ENTERPRISE_HIDE_MEMBER_PROFILES = "ENTERPRISE_HIDE_MEMBER_PROFILES", e.ENTERPRISE_EGRESS_FILTERING = "ENTERPRISE_EGRESS_FILTERING", e.ENTERPRISE_INGRESS_FILTERING = "ENTERPRISE_INGRESS_FILTERING", e.BIZ_CLOUD_SPECIFIC_REGIONS = "BIZ_CLOUD_SPECIFIC_REGIONS", e.BIZ_CONNECTOR_ADMINS_ONLY = "BIZ_CONNECTOR_ADMINS_ONLY", e.BIZ_APP_LOGIN_METHODS = "BIZ_APP_LOGIN_METHODS", e.BIZ_DISABLE_CONNECTOR = "BIZ_DISABLE_CONNECTOR", e
})({});

function be(e) {
    return e.startsWith("PRO_")
}

function Me(e) {
    return be(e) ? "pro" : e.startsWith("ENTERPRISE_") ? "enterprise" : "biz"
}
var Ve = "feature",
    He = new Set(Object.values(y)),
    Ze = new Set(["pro", "biz", "enterprise"]);

function G(e) {
    return He.has(e)
}

function F(e) {
    return Ze.has(e)
}

function We(e) {
    return G(e) || F(e) ? e : void 0
}

function Et(e) {
    const t = We(e);
    return t ? {
        [Ve]: t
    } : {}
}

function dt(e) {
    return e ? G(e) ? {
        kind: "scenario",
        scenario: e,
        targetCategory: Me(e)
    } : F(e) ? {
        kind: "category",
        targetCategory: e
    } : null : null
}

function _t(e) {
    return e ? {
        featureName: e.kind === "scenario" ? e.scenario : `category:${e.targetCategory}`,
        requiredPlanCategory: e.targetCategory
    } : {}
}
var ke = {
    [y.BIZ_SSO]: () => me(),
    [y.BIZ_TEMPLATES]: () => Ce(),
    [y.PRO_DOMAIN_CONNECT]: () => Pe()
};

function It(e) {
    const t = e.kind === "scenario" ? ke[e.scenario] : void 0;
    return t ? t() : Oe()
}
var Ue = e => (0, i.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentcolor",
        ...e,
        children: (0, i.jsx)("path", {
            d: "M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
        })
    }),
    pt = q(Ue, "GoogleLogo"),
    ze = e => (0, i.jsx)("svg", {
        width: "800px",
        height: "800px",
        viewBox: "-56.24 0 608.728 608.728",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, i.jsx)("path", {
            d: "M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z",
            fill: "currentColor"
        })
    }),
    ft = q(ze, "AppleLogo"),
    M = new Map,
    x = "post-auth-action";

function ee(e) {
    return e ? Date.now() - e > de : !1
}
var k = "landing-prompt-submitted-at";

function Rt() {
    K(k, String(Date.now()))
}

function vt() {
    const e = w(k);
    if (!e) return !1;
    const t = Number(e);
    return !Number.isFinite(t) || ee(t) ? (H(k), !1) : !0
}

function Je(e) {
    if (!e) return null;
    try {
        const t = JSON.parse(e),
            r = Ee.safeParse(t);
        return r.success ? r.data : null
    } catch {
        return null
    }
}
var mt = () => {
    const e = ae(),
        t = fe(),
        r = oe(n => n.userData),
        s = ie(n => n.memberWorkspaces),
        a = ue(),
        p = (0, _.useCallback)((n, o, u) => {
            try {
                const R = {
                        key: n,
                        params: o,
                        contexts: u,
                        timestamp: Date.now()
                    },
                    E = D.get(n);
                if (!E) {
                    console.error("Unknown post-auth action", {
                        actionKey: n,
                        availableActions: Array.from(D.keys())
                    });
                    return
                }
                const d = E.paramsSchema.safeParse(o);
                if (!d.success) {
                    console.error("Invalid params for post-auth action", {
                        actionKey: n,
                        params: o,
                        error: d.error
                    });
                    return
                }
                j(), K("post-auth-action", JSON.stringify(R)) || console.error("Failed to store post-auth action", {
                    actionKey: n
                })
            } catch (R) {
                console.error("Failed to store post-auth action", {
                    error: R,
                    actionKey: n
                })
            }
        }, []),
        I = (0, _.useCallback)(async (n, o, u) => {
            const R = D.get(n);
            if (!R) return console.error("Unknown post-auth action", {
                actionKey: n,
                availableActions: Array.from(D.keys())
            }), null;
            const E = R.paramsSchema.safeParse(o);
            if (!E.success) return console.error("Invalid params for post-auth action", {
                actionKey: n,
                params: o,
                error: E.error
            }), null;
            const d = {
                    events: e,
                    userId: r ? .id,
                    userCreatedAt: r ? .created_at,
                    workspaces: s,
                    castleBody: a,
                    ...u
                },
                c = await R.execute(E.data, d);
            if (c.workspaceUpdate && r ? .id) {
                const l = pe({
                    userId: r.id
                }).queryKey;
                t.setQueryData(l, f => f ? .workspaces ? { ...f,
                    workspaces: f.workspaces.map(m => m.id === c.workspaceUpdate.workspaceId ? { ...m,
                        ...c.workspaceUpdate.updates
                    } : m)
                } : f)
            }
            return c.queryDataToSet && c.queryDataToSet.length > 0 && c.queryDataToSet.forEach(({
                queryKey: l,
                data: f
            }) => {
                t.setQueryData(l, f)
            }), c.invalidateQueries && c.invalidateQueries.length > 0 && setTimeout(() => {
                c.invalidateQueries.forEach(l => {
                    t.invalidateQueries({
                        queryKey: l
                    })
                })
            }, 2e3), c.redirectUrl || null
        }, [e, t, r, s, a]),
        v = (0, _.useCallback)(() => {
            const n = w(x),
                o = Je(n);
            return o && !ee(o.timestamp) ? le(o, r ? .id) ? null : o : (n && H(x), L(r ? .id) ? .action ? ? null)
        }, [r ? .id]);
    return {
        storeAction: p,
        executeStoredAction: (0, _.useCallback)(() => {
            const n = v();
            if (!n || !r ? .id) return Promise.resolve(null);
            const o = JSON.stringify(n),
                u = JSON.stringify([r.id, o]),
                R = M.get(u);
            if (R) return R;
            const E = w(x),
                d = n.key === ce.CREATE_PROJECT,
                c = L(r.id),
                l = c && JSON.stringify(c.action) === o;
            if (d && l && c.redirectUrl) return Promise.resolve(c.redirectUrl);
            const f = l && c.workspaceId || s[0] ? .id;
            if (d) {
                if (!f) return Promise.resolve(null);
                $({
                    userId: r.id,
                    action: n,
                    workspaceId: f,
                    startedAt: l ? c.startedAt : Date.now()
                })
            }
            const m = () => {
                    w("post-auth-action") === E && H(x)
                },
                h = Promise.resolve().then(() => I(n.key, n.params, d ? {
                    selectedWorkspaceId: f
                } : void 0)).then(C => {
                    const g = L(r.id);
                    return d && g && JSON.stringify(g.action) === o && (C ? $({ ...g,
                        redirectUrl: C
                    }) : j()), m(), C
                }).catch(C => {
                    const g = C instanceof se && C.status !== void 0 && C.status >= 400 && C.status < 500 && C.status !== 408 && C.status !== 499;
                    if (!d || g) {
                        m();
                        const S = L(r.id);
                        d && S && JSON.stringify(S.action) === o && j()
                    }
                    throw C
                }).finally(() => M.delete(u));
            return M.set(u, h), h
        }, [I, v, r ? .id, s]),
        executeAction: I,
        shouldRunAction: (0, _.useCallback)(n => v() ? .contexts.includes(n) ? ? (!r ? .id && Ie(n)), [v, r ? .id]),
        getStoredAction: v
    }
};

function Ct({
    surface: e
}) {
    return (0, _.useEffect)(() => {
        _e(e)
    }, [e]), null
}
var te = (0, _.createContext)(() => {}),
    re = (0, _.createContext)(() => {}),
    U = (0, _.createContext)({
        enabled: !1,
        ready: !0,
        footerHidden: !1
    });

function Pt(e = !0) {
    const t = (0, _.useContext)(te);
    (0, _.useEffect)(() => {
        e && t()
    }, [e, t])
}

function Ot(e) {
    const t = (0, _.useContext)(re);
    (0, _.useEffect)(() => (t(e), () => t(!1)), [e, t])
}

function Nt() {
    return (0, _.useContext)(U).footerHidden
}
var $e = 3e3;

function gt({
    enabled: e,
    children: t
}) {
    const [r, s] = (0, _.useState)(!1), [a, p] = (0, _.useState)(!1), I = (0, _.useCallback)(() => s(!0), []);
    return (0, _.useEffect)(() => {
        if (!e || r) return;
        const v = setTimeout(() => s(!0), $e);
        return () => clearTimeout(v)
    }, [e, r]), (0, i.jsx)(te.Provider, {
        value: I,
        children: (0, i.jsx)(re.Provider, {
            value: p,
            children: (0, i.jsx)(U.Provider, {
                value: {
                    enabled: e,
                    ready: r,
                    footerHidden: a
                },
                children: t
            })
        })
    })
}

function At({
    animation: e,
    children: t,
    className: r
}) {
    const {
        enabled: s,
        ready: a
    } = (0, _.useContext)(U);
    return (0, i.jsx)("div", {
        className: P(r, s ? a ? e : "pointer-events-none opacity-0" : void 0),
        children: t
    })
}
var ht = "text-primary-pulse text-base font-[450]",
    St = "placeholder:text-quaternary-pulse h-11 rounded-full bg-[var(--glow-neutral-hover)] bg-none px-4 text-base",
    Tt = "text-primary-pulse underline-offset-2 hover:underline",
    Lt = "text-tertiary-pulse mt-4 text-center text-sm text-pretty";

function Dt({
    children: e,
    description: t
}) {
    return (0, i.jsxs)("div", {
        className: "flex flex-col gap-2 text-center",
        children: [(0, i.jsx)("h1", {
            className: "text-xl leading-7 font-medium text-balance",
            children: e
        }), t && (0, i.jsx)("p", {
            className: "text-tertiary-pulse text-sm text-pretty",
            children: t
        })]
    })
}
var Qe = {
        xs: "left-2",
        sm: "left-[9px]",
        default: "left-2.5",
        md: "left-3",
        lg: "left-3.5"
    },
    xt = ({
        provider: e,
        logo: t,
        label: r,
        lastUsedMethod: s,
        recommendedProvider: a,
        variant: p = "form",
        size: I,
        rounded: v,
        className: n,
        loading: o,
        loadingText: u,
        disabled: R,
        ...E
    }) => {
        const d = p === "primary" || (s ? s === e : a === e),
            c = !d && "text-secondary-pulse transition-colors duration-150 group-hover/oauth:group-enabled/oauth:text-primary-pulse group-hover/oauth:group-enabled/oauth:duration-0",
            l = p !== "dialog",
            f = !!o,
            m = e === "apple" && "-translate-y-px";
        return p === "icon" ? (0, i.jsx)(V, {
            variant: d ? "inverse" : "outline",
            size: I,
            rounded: v,
            contentTransition: "none",
            "aria-label": r,
            title: r,
            className: P("group/oauth w-full", n),
            disabled: R || f,
            ...E,
            children: f ? (0, i.jsx)(J, {
                size: "small",
                className: "size-[18px]"
            }) : (0, i.jsx)(t, {
                className: P("size-[18px]", m, c)
            })
        }) : (0, i.jsxs)(V, {
            variant: d ? "inverse" : "outline",
            size: I,
            rounded: v,
            contentTransition: l ? "none" : "spinner",
            className: P("group/oauth relative flex w-full gap-2", l && "text-base font-[450]", n),
            loading: l ? void 0 : o,
            loadingText: l ? void 0 : u,
            disabled: l ? R || f : R,
            ...E,
            children: [l ? (0, i.jsx)("span", {
                className: P("absolute top-1/2 flex size-[18px] -translate-y-1/2", Qe[I ? ? "default"]),
                children: f ? (0, i.jsx)(J, {
                    size: "small",
                    className: "size-full"
                }) : (0, i.jsx)(t, {
                    className: P("size-full", m, c)
                })
            }) : (0, i.jsx)(t, {
                className: P("size-4", m, c)
            }), (0, i.jsx)("span", {
                className: P("px-0.5", c),
                children: l && f && u || r
            })]
        })
    };

function wt({
    icon: e,
    label: t,
    filled: r = !1,
    ...s
}) {
    const a = !r && "text-secondary-pulse transition-colors duration-150 group-hover/oauth:group-enabled/oauth:text-primary-pulse group-hover/oauth:group-enabled/oauth:duration-0";
    return (0, i.jsxs)(V, {
        type: "button",
        variant: r ? "inverse" : "outline",
        size: "lg",
        rounded: !0,
        contentTransition: "none",
        className: "group/oauth relative flex w-full gap-2 text-base font-[450]",
        ...s,
        children: [(0, i.jsx)("span", {
            className: "absolute top-1/2 left-3.5 flex size-[18px] -translate-y-1/2 items-center justify-center",
            children: (0, i.jsx)(e, {
                size: "small",
                className: a || void 0
            })
        }), (0, i.jsx)("span", {
            className: P("px-0.5", a),
            children: t
        })]
    })
}
export {
    ct as A, Et as C, q as D, be as E, st as F, nt as I, rt as L, at as M, it as N, je as O, ot as P, tt as R, We as S, y as T, ft as _, St as a, dt as b, At as c, Nt as d, Ot as f, mt as g, Rt as h, Lt as i, lt as j, ut as k, gt as l, vt as m, xt as n, ht as o, Ct as p, Dt as r, Tt as s, wt as t, Pt as u, pt as v, It as w, _t as x, Ve as y
};