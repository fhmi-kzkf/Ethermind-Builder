import {
    o as n
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    i as a
} from "./vendor-react-Fx2PtaaM.js";
import {
    t as c
} from "./auth-shared-leaves-CVVKMrlK.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dec56e20-62d3-4245-a3c1-60162e1b1a71", e._sentryDebugIdIdentifier = "sentry-dbid-dec56e20-62d3-4245-a3c1-60162e1b1a71")
    })()
} catch {}
var r = n(a(), 1);

function p(e) {
    const {
        navigateToConnectors: t
    } = c();
    return (0, r.useCallback)(o => {
        t({
            source: e,
            queryParams: {
                subtab: "connector-detail",
                connector: o
            }
        })
    }, [t, e])
}
var l = {
    homepageChatInput: "homepage_chat_input_connector_pill",
    projectChatInput: "project_chat_input_connector_pill",
    projectChatMessage: "project_chat_message_connector_pill",
    projectChatSuggestionChip: "project_chat_suggestion_chip_connector",
    workspaceChatContextPanel: "workspace_chat_context_panel_connector_row",
    workspaceChatInput: "workspace_chat_input_connector_pill",
    workspaceChatMessage: "workspace_chat_message_connector_pill"
};
export {
    p as n, l as t
};