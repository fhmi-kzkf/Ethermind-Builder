import {
    o as y
} from "./rolldown-runtime-CSz5w8F5.js";
import {
    NI as I,
    Nx as w,
    wj as N
} from "./app-shared-6CLVfi8w.js";
import {
    i as k,
    r as E
} from "./vendor-react-Fx2PtaaM.js";
import {
    $t as v,
    en as x,
    tn as S
} from "./i18n-fn/_misc-D8ok4lJW.js";
import {
    q as D,
    xt as l
} from "./create-form-shared-Ch3tkVo8.js";
import {
    si as P
} from "./flag-catalog-BJaXoOeP.js";
import {
    S as j
} from "./vendor-motion-Hvlv7m0n.js";
import {
    Mt as A,
    St as F,
    ct as M,
    or as L,
    yt as R
} from "./dashboard-shared-BN9MnewY.js";
import {
    ux as U
} from "./app-lazy-shared-BNTl480s.js";
import {
    t as q
} from "./useHasUsedChatMode-IanJjUQD.js";
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            s = new e.Error().stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "772e8230-f986-4a49-8df5-3a7fc67ee9ad", e._sentryDebugIdIdentifier = "sentry-dbid-772e8230-f986-4a49-8df5-3a7fc67ee9ad")
    })()
} catch {}
var o = y(k(), 1),
    a = E(),
    r = "ai-prompt-chat-first",
    K = ({
        candidate: e,
        chatOffered: s,
        onStartChat: p,
        onClear: n
    }) => {
        const m = N(P).enabled,
            i = L(u => D(u, !1)),
            t = w(),
            c = (0, o.useRef)(!1),
            h = q(m && s),
            {
                workspace: _
            } = I(),
            f = m && s && !h && e !== null && i,
            g = M(f ? _ : null);
        (0, o.useEffect)(() => {
            e !== null && !i && n()
        }, [e, i, n]);
        const d = f && F(g);
        (0, o.useEffect)(() => {
            if (!d) {
                c.current = !1;
                return
            }
            c.current || (c.current = !0, t.emit(l, {
                action: "nudge_shown",
                nudgeId: r
            }))
        }, [d, t]);
        const b = (0, o.useCallback)(() => {
                t.emit(l, {
                    action: "nudge_dismissed",
                    nudgeId: r
                }), n()
            }, [t, n]),
            C = (0, o.useCallback)(u => {
                t.emit(l, {
                    action: "nudge_action_clicked",
                    nudgeId: r,
                    actionRole: u
                })
            }, [t]);
        return (0, a.jsx)("div", {
            className: A,
            children: (0, a.jsx)("div", {
                className: "pointer-events-auto",
                children: (0, a.jsx)(j, {
                    children: d && (0, a.jsx)(R, {
                        placement: "below",
                        config: {
                            unmaskInFullStory: !0,
                            icon: U,
                            title: S(),
                            description: x(),
                            descriptionPlacement: "body",
                            primaryAction: {
                                label: v(),
                                onClick: p
                            }
                        },
                        onDismiss: b,
                        onActionClick: C
                    }, r)
                })
            })
        })
    };
export {
    K as AiPromptChatFirstRow
};