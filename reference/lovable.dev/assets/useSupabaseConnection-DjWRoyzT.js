import {
    o as h
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    Gj as y,
    HM as u
} from "./app-shared-6CLVfi8w.js";
import {
    i as m
} from "./vendor-react-Fx2PtaaM.js";
import {
    D as S,
    j as s
} from "./vendor-schema-CyHzn7jr.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fba289a1-2895-4cd5-98ee-79822e68b62d", e._sentryDebugIdIdentifier = "sentry-dbid-fba289a1-2895-4cd5-98ee-79822e68b62d")
    })()
} catch {}
var p = h(m(), 1),
    A = "supabaseOAuthNonce",
    C = "supabaseOAuthCodeVerifier",
    I = "dbd565fc-4637-4cb6-ab68-0af4b5708417",
    D = S({
        workspaceId: s(),
        userId: s().optional(),
        nonce: s()
    }),
    L = e => {
        const [a, t] = (0, p.useState)(!1), c = y(o => o.userData);
        return {
            handleConnect: (0, p.useCallback)(async o => {
                t(!0);
                try {
                    const n = `${window.location.origin}/supabase/callback`,
                        i = crypto.randomUUID();
                    try {
                        localStorage.setItem(A, i)
                    } catch (_) {
                        console.error("Error storing nonce in localStorage:", {
                            error: _
                        }), u.error("Failed to initiate Supabase OAuth flow", {
                            description: "Try clearing browser local storage and try again."
                        }), t(!1);
                        return
                    }
                    const g = btoa(JSON.stringify({
                            workspaceId: e,
                            userId: c ? .id,
                            nonce: i
                        })),
                        f = typeof process < "u" && {}.NEXT_PUBLIC_SUPABASE_OAUTH_CLIENT_ID || typeof
                    import.meta < "u" && "dbd565fc-4637-4cb6-ab68-0af4b5708417" || I, d = w(), b = await E(d);
                    localStorage.setItem(C, d);
                    const r = new URL("https://api.supabase.com/v1/oauth/authorize");
                    r.searchParams.set("response_type", "code"), r.searchParams.set("client_id", f), r.searchParams.set("redirect_uri", n), r.searchParams.set("state", g), r.searchParams.set("code_challenge", b), r.searchParams.set("code_challenge_method", "S256"), o ? .supabaseOrgId && r.searchParams.set("organization_slug", encodeURIComponent(o.supabaseOrgId));
                    const l = window.open(r.toString(), "_blank", "width=600,height=700,left=100,top=100");
                    l ? l.focus() : window.location.href = r.toString()
                } catch (n) {
                    console.error("Error initiating Supabase connection:", {
                        error: n
                    }), u.error("Connection error", {
                        description: "An error occurred while connecting to Supabase. Please try again."
                    })
                } finally {
                    t(!1)
                }
            }, [e, c ? .id]),
            isConnecting: a
        }
    };

function w() {
    const e = new Uint8Array(32);
    return crypto.getRandomValues(e), btoa(String.fromCharCode.apply(null, Array.from(e))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
async function E(e) {
    const a = new TextEncoder().encode(e),
        t = await crypto.subtle.digest("SHA-256", a);
    return btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(t)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
export {
    L as i, A as n, D as r, C as t
};