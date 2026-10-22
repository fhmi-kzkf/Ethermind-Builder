import {
    NI as t
} from "./app-shared-6CLVfi8w.js";
import {
    Zi as c
} from "./dashboard-shared-BN9MnewY.js";
import {
    Cl as f,
    zp as b
} from "./app-lazy-shared-BNTl480s.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "adbf3eda-f5db-4f96-8447-0cb8f986a3ee", e._sentryDebugIdIdentifier = "sentry-dbid-adbf3eda-f5db-4f96-8447-0cb8f986a3ee")
    })()
} catch {}

function l({
    workspacePending: e,
    catalogAccessPending: s,
    queriesEnabled: n,
    connectorsPending: r,
    connectorsSuccess: o,
    connectors: i
}) {
    const a = e || s || n && r;
    return {
        isPending: a,
        isEnabled: o && i.some(d => d.id === b.AIGateway && d.is_enabled_for_workspace),
        isResolved: !a && n && o
    }
}
var I = () => {
    const {
        workspace: e,
        isPending: s
    } = t(), n = e ? .id ? ? "", {
        isPending: r,
        queriesEnabled: o
    } = c(n), {
        data: i,
        isPending: a,
        isSuccess: d
    } = f({
        workspaceId: n,
        enabled: !!n
    });
    return l({
        workspacePending: s,
        catalogAccessPending: r,
        queriesEnabled: o,
        connectorsPending: a,
        connectorsSuccess: d,
        connectors: i
    })
};
export {
    I as t
};