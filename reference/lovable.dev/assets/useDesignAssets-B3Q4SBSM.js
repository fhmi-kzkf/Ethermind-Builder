import {
    o as D
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    $L as I,
    HM as g,
    iM as w,
    rM as M,
    wj as h
} from "./app-shared-6CLVfi8w.js";
import {
    r as T,
    u as v,
    w as Q
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    i as q
} from "./vendor-react-Fx2PtaaM.js";
import {
    Jr as E,
    qr as S
} from "./i18n-fn/_misc-D8ok4lJW.js";
import {
    Tr as C
} from "./flag-catalog-BJaXoOeP.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "fa043c67-4686-4cb9-8e94-dcc9cef89a76", e._sentryDebugIdIdentifier = "sentry-dbid-fa043c67-4686-4cb9-8e94-dcc9cef89a76")
    })()
} catch {}
var d = D(q(), 1),
    t = ["design-assets"],
    L = 100;

function P({
    enabled: e = !0
} = {}) {
    const r = I(),
        c = h(C).enabled,
        a = Q(),
        {
            data: l,
            isLoading: p,
            isPending: m,
            isError: b,
            refetch: o
        } = v({
            queryKey: t,
            queryFn: () => w().GET("/user/assets"),
            enabled: c && !!r && e,
            staleTime: 1 / 0
        }),
        u = T({
            mutationFn: async s => {
                await M().delete(`/user/assets/${encodeURIComponent(s)}`)
            },
            onMutate: async s => {
                await a.cancelQueries({
                    queryKey: t
                });
                const n = a.getQueryData(t);
                return a.setQueryData(t, i => ({
                    assets: (i ? .assets ? ? []).filter(_ => _.id !== s)
                })), {
                    previousAssets: n
                }
            },
            onError: (s, n, i) => {
                i ? .previousAssets && a.setQueryData(t, i.previousAssets), g.error(S())
            },
            onSuccess: () => {
                g.success(E())
            },
            onSettled: () => {
                a.invalidateQueries({
                    queryKey: t
                })
            }
        }),
        f = (0, d.useRef)(!1),
        A = (0, d.useCallback)(s => {
            s && (f.current && o(), f.current = !0)
        }, [o]),
        y = (0, d.useMemo)(() => [...l ? .assets ? ? []].sort((s, n) => new Date(n.created_at).getTime() - new Date(s.created_at).getTime()), [l ? .assets]);
    return {
        assets: y,
        isLoading: p,
        isPending: m,
        isError: b,
        refetch: o,
        isLibraryComplete: y.length < L,
        isDesignAssetsEnabled: c,
        authUser: r,
        handleOpenChange: A,
        deleteAsset: u.mutate,
        deletingAssetId: u.isPending ? u.variables : null
    }
}
export {
    P as t
};