import {
    o as Ve
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    $L as Ce,
    DF as Ee,
    DT as xe,
    EL as Ge,
    Gj as Ie,
    IF as Fe,
    JM as We,
    Jx as R,
    NI as Ye,
    Nx as Re,
    QE as Je,
    Tx as ke,
    Yx as Ue,
    cd as Be,
    dD as _e,
    gS as ie,
    jN as Xe,
    lj as Le,
    lz as Me,
    nS as Ne,
    qI as je,
    qg as Qe,
    rM as le,
    wL as Pe,
    wj as ze,
    zz as Te
} from "./app-shared-6CLVfi8w.js";
import {
    r as Oe,
    u as De,
    w as Ke
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as $e,
    r as He
} from "./vendor-react-Fx2PtaaM.js";
import {
    Bi as me
} from "./flag-catalog-BJaXoOeP.js";
import {
    _ as qe,
    n as ue,
    p as J,
    v as et,
    x as de
} from "./vendor-protobuf-BvDTVJFg.js";
import {
    t as tt
} from "./useCampaignSeen-Dk5wOPgl.js";
import {
    i as ce,
    n as at,
    r as st
} from "./visit-C2k7-5oP.js";
try {
    (function() {
        var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new r.Error().stack;
        t && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[t] = "972accaa-c417-4f71-afc7-e9dab7ead89c", r._sentryDebugIdIdentifier = "sentry-dbid-972accaa-c417-4f71-afc7-e9dab7ead89c")
    })()
} catch {}
var o = Ve($e(), 1),
    fe = et("CjFsb3ZhYmxlL3dvcmtzcGFjZW9mZmVycy92MS93b3Jrc3BhY2Vfb2ZmZXJzLnByb3RvEhpsb3ZhYmxlLndvcmtzcGFjZW9mZmVycy52MSIRCg9HZXRPZmZlclJlcXVlc3Qi2QEKBU9mZmVyEgsKA2FybRgBIAEoCRITCgtjYW1wYWlnbl9pZBgCIAEoCRIYChBhbW91bnRfb2ZmX2NlbnRzGAMgASgDEhAKCGN1cnJlbmN5GAQgASgJEhcKD2R1cmF0aW9uX21vbnRocxgFIAEoBRIuCgpleHBpcmVzX2F0GAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBI5CgpidWlsZF9ob3VyGAcgASgLMiUubG92YWJsZS53b3Jrc3BhY2VvZmZlcnMudjEuQnVpbGRIb3VyIskBCglCdWlsZEhvdXISLgoKc3RhcnRlZF9hdBgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASLgoKZXhwaXJlc19hdBgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASGQoRY3JlZGl0c19yZW1haW5pbmcYAyABKAESEAoIY29tcGxldGUYBCABKAgSLwoLc2VydmVyX3RpbWUYBSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIkQKEEdldE9mZmVyUmVzcG9uc2USMAoFb2ZmZXIYASABKAsyIS5sb3ZhYmxlLndvcmtzcGFjZW9mZmVycy52MS5PZmZlciK9AQoRQ2xhaW1PZmZlclJlcXVlc3QSFAoMZXhwZWN0ZWRfYXJtGAEgASgJEkQKBmFjdGlvbhgCIAEoDjI0LmxvdmFibGUud29ya3NwYWNlb2ZmZXJzLnYxLkNsYWltT2ZmZXJSZXF1ZXN0LkFjdGlvbiJMCgZBY3Rpb24SFgoSQUNUSU9OX1VOU1BFQ0lGSUVEEAASFQoRQUNUSU9OX1NUQVJUX0hPVVIQARITCg9BQ1RJT05fQ0hFQ0tPVVQQAiJmChJDbGFpbU9mZmVyUmVzcG9uc2USFQoNY2hlY2tvdXRfY29kZRgBIAEoCRI5CgpidWlsZF9ob3VyGAIgASgLMiUubG92YWJsZS53b3Jrc3BhY2VvZmZlcnMudjEuQnVpbGRIb3VyMuwBChZXb3Jrc3BhY2VPZmZlcnNTZXJ2aWNlEmUKCEdldE9mZmVyEisubG92YWJsZS53b3Jrc3BhY2VvZmZlcnMudjEuR2V0T2ZmZXJSZXF1ZXN0GiwubG92YWJsZS53b3Jrc3BhY2VvZmZlcnMudjEuR2V0T2ZmZXJSZXNwb25zZRJrCgpDbGFpbU9mZmVyEi0ubG92YWJsZS53b3Jrc3BhY2VvZmZlcnMudjEuQ2xhaW1PZmZlclJlcXVlc3QaLi5sb3ZhYmxlLndvcmtzcGFjZW9mZmVycy52MS5DbGFpbU9mZmVyUmVzcG9uc2VCmgIKHmNvbS5sb3ZhYmxlLndvcmtzcGFjZW9mZmVycy52MUIUV29ya3NwYWNlT2ZmZXJzUHJvdG9QAVpYZ2l0aHViLmNvbS9sb3ZhYmxlbGFicy9sb3ZhYmxlL2dvL3Byb3RvL2dlbi9sb3ZhYmxlL3dvcmtzcGFjZW9mZmVycy92MTt3b3Jrc3BhY2VvZmZlcnN2MaICA0xXWKoCGkxvdmFibGUuV29ya3NwYWNlb2ZmZXJzLlYxygIaTG92YWJsZVxXb3Jrc3BhY2VvZmZlcnNcVjHiAiZMb3ZhYmxlXFdvcmtzcGFjZW9mZmVyc1xWMVxHUEJNZXRhZGF0YeoCHExvdmFibGU6OldvcmtzcGFjZW9mZmVyczo6VjFiBnByb3RvMw", [qe]),
    ot = de(fe, 3),
    rt = de(fe, 5),
    pe = r => `/workspaces/${encodeURIComponent(r)}/lovable.workspaceoffers.v1.WorkspaceOffersService`,
    be = {
        headers: {
            "Connect-Protocol-Version": "1"
        }
    };
async function nt(r) {
    const t = await le().post(`${pe(r)}/GetOffer`, {}, be);
    return ue(ot, t).offer
}
async function it(r, t, C) {
    const c = await le().post(`${pe(r)}/ClaimOffer`, {
        expectedArm: t,
        action: C ? "ACTION_START_HOUR" : "ACTION_CHECKOUT"
    }, be);
    return ue(rt, c)
}
var g = He(),
    k = me.key;

function gt() {
    const r = (0, o.use)(Ne),
        t = Ce(),
        C = Ke(),
        {
            workspace: c,
            isLoading: he
        } = Ye(),
        a = c ? .id,
        Z = Ee(),
        E = Fe(),
        y = Le(),
        {
            value: S,
            expose: U
        } = ze(me, {
            apply: !1
        }),
        B = Pe(Te(a ? ? null)),
        v = xe(Me.ManageWorkspaceBilling, {
            workspaceId: a
        }),
        ge = Ie(e => e.userData),
        {
            loaded: _,
            supported: X,
            markSeen: L
        } = tt(),
        x = Re(),
        [l, M] = (0, o.useState)(),
        [Ze, ve] = (0, o.useState)(0),
        [N, j] = (0, o.useState)(),
        G = `${t?.uid}:${a}:${S.variant}`,
        Q = N ? .scope === G ? N.message : void 0,
        [I, ye] = (0, o.useState)(),
        w = Z === "/free-build-hour" && E.get("utm_source") === "customerio" && E.get("utm_medium") === "email" && E.get("utm_campaign") === "free-build-hour-us-2026-09";
    (0, o.useEffect)(() => {
        const e = () => {
            const m = st();
            w && (m.pendingEmail = !0), m.lastActive = Date.now(), ce(m), M(m)
        };
        return e(), window.addEventListener("focus", e), () => window.removeEventListener("focus", e)
    }, [w, Z, t ? .uid]);
    const d = ke(!!t && (!!l ? .pendingEmail || w)),
        P = !!t && d.offer.data ? .status.workspaceId && ["available", "active", "pending", "used"].includes(d.offer.data.status.state);
    (0, o.useEffect)(() => {
        if (!t || !l ? .pendingEmail || d.offer.isPending) return;
        const e = { ...l,
            pendingEmail: !1,
            emailUser: P || d.offer.isError ? t.uid : l.emailUser
        };
        ce(e), M(e)
    }, [t, l, d.offer.isPending, d.offer.isError, P]);
    const F = !l || !!l.pendingEmail || !!t && l.emailUser === t.uid || w || Z === "/free-build-hour" || Z === "/lp/offer" || Z.startsWith("/lp/offer/"),
        W = !!t ? .emailVerified && !!a && !!c && Je(c.plan).isFreePlan && !y.isIOSApp && !y.isAndroidApp;
    Ge(W && v.permitted && !F && !B ? a ? ? null : null);
    const Y = W && v.isResolved && v.permitted && !F && S.variant !== "disabled",
        f = De({
            queryKey: [k, t ? .uid, a, S.variant],
            queryFn: () => nt(a),
            enabled: Y,
            staleTime: 1e4,
            retry: !1,
            refetchInterval: e => e.state.data ? .arm === "build-hour" && !e.state.data.buildHour ? .complete ? 15e3 : !1
        }),
        s = Y && f.data ? .arm === S.variant ? f.data : void 0,
        i = (0, o.useMemo)(() => s && s.arm !== "control" && s.expiresAt ? Ue({
            campaign_id: s.campaignId,
            code: "preview",
            amount_off_cents: Number(s.amountOffCents),
            currency: s.currency,
            duration_months: s.durationMonths,
            expires_at: J(s.expiresAt).toISOString(),
            status: "available",
            target_workspace_id: a
        }, c ? ? void 0) : void 0, [s, c, a]),
        n = s ? .buildHour,
        A = `${a}:${n?.startedAt?.seconds}`;
    (0, o.useEffect)(() => {
        if (!n || n.complete || I === A) return;
        const e = window.setInterval(() => ve(Date.now()), 1e3);
        return () => window.clearInterval(e)
    }, [n, I, A]);
    const p = s ? .arm === "build-hour" && !n,
        z = !!n && !n.complete,
        u = !!i && !z,
        T = p ? "An hour to build something new" : `Your first month of Pro for ${i?R(i.firstMonthAmountCents,i.currency):""}`,
        O = p ? "Get 30 bonus credits to use in 60 minutes. Start when you’re ready." : i ? `${R(i.firstMonthAmountCents,i.currency)} for month one, then ${R(i.renewalAmountCents,i.currency)}/month. Cancel anytime. Plus tax where applicable.` : "",
        {
            toCheckout: Se,
            checkoutLoading: we
        } = Qe(),
        D = Oe({
            mutationFn: async () => {
                if (!s || !a || !u) return !1;
                j(void 0);
                const e = await it(a, s.arm, p);
                if (x.emit(ie, {
                        campaign: k,
                        workspaceId: a,
                        authenticated: !0,
                        action: `${s.arm}_accepted`
                    }), p) return await f.refetch(), C.invalidateQueries({
                    queryKey: je.all
                }), !0;
                if (!e.checkoutCode) throw new Error("Could not prepare your offer. Please try again.");
                return await Se({
                    plan: _e.PRO_1,
                    planType: "monthly",
                    workspaceId: a,
                    changeType: "upgrade",
                    couponCode: e.checkoutCode
                }), !1
            },
            onError: (e, m) => {
                j({
                    scope: m,
                    message: "Could not claim your offer. Please try again."
                }), f.refetch()
            }
        }),
        K = (0, o.useRef)(new Set),
        b = (0, o.useCallback)(e => {
            if (!s || !u && s.arm !== "control") return;
            const m = `${t?.uid}:${a}:${s.arm}:${e}`;
            K.current.has(m) || (K.current.add(m), U(), x.emit(ie, {
                campaign: k,
                workspaceId: a,
                authenticated: !0,
                action: `${s.arm}_${e}_shown`
            }))
        }, [s, u, U, x, a, t ? .uid]),
        [Ae] = (0, o.useState)(() => Date.now()),
        $ = `active-offer-${a}-${Ae}-v1`,
        H = at(ge ? .seen_campaigns, a ? ? "");
    (0, o.useEffect)(() => {
        if (s ? .arm !== "control" || !_ || !X || H > Date.now()) return;
        const e = () => {
            document.visibilityState === "visible" && (b("invitation_opportunity"), L($).catch(() => {}))
        };
        return e(), document.addEventListener("visibilitychange", e), () => document.removeEventListener("visibilitychange", e)
    }, [s, _, X, L, H, b, $]);
    const q = (0, o.useCallback)(() => {
            b(n ? .complete ? "hour_end" : "invitation")
        }, [b, n ? .complete]),
        V = D.isPending || !!we,
        ee = D.mutateAsync,
        te = (0, o.useCallback)(async () => V ? !1 : ee(G).catch(() => !1), [V, ee, G]),
        ae = !!n ? .complete,
        h = s ? .arm,
        se = c ? .name,
        oe = (0, o.useMemo)(() => u && t && a ? {
            recap: ae,
            halfPrice: h === "half-price",
            workspaceName: se ? ? "Workspace",
            shown: q
        } : void 0, [u, t, a, ae, h, se, q]),
        re = !!t ? .emailVerified && !y.isIOSApp && !y.isAndroidApp && (!l || !!l.pendingEmail || !F && (he || W && (!v.isResolved || v.permitted && (!B || Y && f.isPending)))),
        ne = (0, o.useMemo)(() => ({
            modal: oe,
            loading: re,
            treatment: !!h && h !== "control",
            control: h === "control",
            workspaceId: a,
            workspacePlan: c ? .plan,
            available: u,
            quote: i,
            startHour: p,
            title: T,
            detail: O,
            accepting: V,
            error: Q,
            accept: te,
            shown: b
        }), [oe, re, h, a, c ? .plan, u, i, p, T, O, V, Q, te, b]);
    return (0, o.useEffect)(() => r(ne), [r, ne]), !z || !n.expiresAt || I === A ? null : (0, g.jsxs)(Xe, {
        level: "secondary",
        elevation: "sm",
        className: "rounded-3 fixed right-4 bottom-4 z-40 flex items-start gap-2 p-4",
        render: (0, g.jsx)("aside", {
            "aria-label": "Build hour status"
        }),
        children: [(0, g.jsxs)("div", {
            children: [(0, g.jsxs)("p", {
                className: "text-sm font-medium",
                children: ["Build hour ·", " ", Math.max(0, Math.ceil((J(n.expiresAt).getTime() - (n.serverTime ? J(n.serverTime).getTime() + Math.max(0, (Ze || Date.now()) - f.dataUpdatedAt) : Date.now())) / 6e4)), " ", "minutes left"]
            }), (0, g.jsxs)("p", {
                className: "text-sm",
                children: [n.creditsRemaining.toFixed(1), " bonus credits remaining"]
            })]
        }), (0, g.jsx)(We, {
            variant: "ghost",
            size: "xs",
            icon: Be,
            "aria-label": "Hide build hour status",
            onClick: () => ye(A)
        })]
    })
}
export {
    gt as ActiveWorkspaceOfferEngine
};