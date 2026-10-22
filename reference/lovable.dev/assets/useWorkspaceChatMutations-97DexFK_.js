import {
    HM as o,
    Nx as u,
    _S as _,
    iM as r
} from "./app-shared-6CLVfi8w.js";
import {
    r as s
} from "./vendor-tanstack-CIJxxCBL.js";
import {
    by as y,
    xy as l,
    yy as b
} from "./i18n-fn/_eager-BPNnp47q.js";
import {
    v as w,
    x as n
} from "./vendor-protobuf-BvDTVJFg.js";
import {
    g as C
} from "./i18n-fn/chat--chatIcon-BNhiDoj5.js";
import {
    F as Y,
    P as g
} from "./i18n-fn/chat--workspaceChat-C7ADsm0M.js";
try {
    (function() {
        var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            d = new t.Error().stack;
        d && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[d] = "922cf5e5-3a7a-40fc-935a-742932e19bbf", t._sentryDebugIdIdentifier = "sentry-dbid-922cf5e5-3a7a-40fc-935a-742932e19bbf")
    })()
} catch {}
var h = w("CjVsb3ZhYmxlL2V2ZW50cy9jaGF0L3YxL3dvcmtzcGFjZV9jaGF0X211dGF0aW9ucy5wcm90bxIWbG92YWJsZS5ldmVudHMuY2hhdC52MSJWChZXb3Jrc3BhY2VDaGF0UmVuYW1lZFYxEg8KB2NoYXRfaWQYASABKAkSFAoMd29ya3NwYWNlX2lkGAIgASgJOhWCtRgFYWdlbnSStRgIZnJvbnRlbmQibgoaV29ya3NwYWNlQ2hhdFN0YXJUb2dnbGVkVjESDwoHY2hhdF9pZBgBIAEoCRISCgppc19zdGFycmVkGAIgASgIEhQKDHdvcmtzcGFjZV9pZBgDIAEoCToVgrUYBWFnZW50krUYCGZyb250ZW5kIlsKG1dvcmtzcGFjZUNoYXRNYXJrZWRVbnJlYWRWMRIPCgdjaGF0X2lkGAEgASgJEhQKDHdvcmtzcGFjZV9pZBgCIAEoCToVgrUYBWFnZW50krUYCGZyb250ZW5kQv8BChpjb20ubG92YWJsZS5ldmVudHMuY2hhdC52MUIbV29ya3NwYWNlQ2hhdE11dGF0aW9uc1Byb3RvUAFaSWdpdGh1Yi5jb20vbG92YWJsZWxhYnMvbG92YWJsZS9nby9wcm90by9nZW4vbG92YWJsZS9ldmVudHMvY2hhdC92MTtjaGF0djGiAgNMRUOqAhZMb3ZhYmxlLkV2ZW50cy5DaGF0LlYxygIWTG92YWJsZVxFdmVudHNcQ2hhdFxWMeICIkxvdmFibGVcRXZlbnRzXENoYXRcVjFcR1BCTWV0YWRhdGHqAhlMb3ZhYmxlOjpFdmVudHM6OkNoYXQ6OlYxYgZwcm90bzM", [_]),
    I = n(h, 0),
    f = n(h, 1),
    F = n(h, 2);

function v() {
    const t = u(),
        d = s({
            mutationFn: async ({
                chatId: e,
                workspaceId: a
            }) => r().DELETE("/workspaces/{workspace_id}/chats/{chat_id}", {
                params: {
                    path: {
                        workspace_id: a,
                        chat_id: e
                    }
                }
            })
        }),
        i = s({
            mutationFn: async ({
                chatId: e,
                starred: a,
                workspaceId: c
            }) => r().PATCH("/workspaces/{workspace_id}/chats/{chat_id}/starred", {
                params: {
                    path: {
                        workspace_id: c,
                        chat_id: e
                    }
                },
                body: {
                    starred: a
                }
            }),
            onSuccess: (e, a) => {
                t.emit(f, {
                    chatId: a.chatId,
                    isStarred: a.starred,
                    workspaceId: a.workspaceId
                })
            },
            onError: (e, a) => {
                o.error(a.starred ? y() : l())
            }
        }),
        k = s({
            mutationFn: async ({
                chatId: e,
                workspaceId: a
            }) => r().POST("/workspaces/{workspace_id}/chats/{chat_id}/seen", {
                params: {
                    path: {
                        workspace_id: a,
                        chat_id: e
                    }
                }
            }),
            onError: () => {
                o.error(g())
            }
        }),
        m = s({
            mutationFn: async ({
                chatId: e,
                workspaceId: a
            }) => r().POST("/workspaces/{workspace_id}/chats/{chat_id}/unseen", {
                params: {
                    path: {
                        workspace_id: a,
                        chat_id: e
                    }
                }
            }),
            onSuccess: (e, a) => {
                t.emit(F, {
                    chatId: a.chatId,
                    workspaceId: a.workspaceId
                })
            },
            onError: () => {
                o.error(Y())
            }
        }),
        p = s({
            mutationFn: async ({
                chatId: e,
                title: a,
                workspaceId: c
            }) => r().PATCH("/workspaces/{workspace_id}/chats/{chat_id}", {
                params: {
                    path: {
                        workspace_id: c,
                        chat_id: e
                    }
                },
                body: {
                    title: a
                }
            }),
            onSuccess: (e, a) => {
                t.emit(I, {
                    chatId: a.chatId,
                    workspaceId: a.workspaceId
                })
            },
            onError: () => {
                o.error(b())
            }
        }),
        W = s({
            mutationFn: async ({
                chatId: e,
                icon: a,
                workspaceId: c
            }) => r().PATCH("/workspaces/{workspace_id}/chats/{chat_id}/icon", {
                params: {
                    path: {
                        workspace_id: c,
                        chat_id: e
                    }
                },
                body: {
                    icon: a
                }
            }),
            onError: () => {
                o.error(C())
            }
        });
    return {
        deleteWorkspaceChatAsync: d.mutateAsync,
        isSettingWorkspaceChatTitle: p.isPending,
        markWorkspaceChatReadAsync: k.mutateAsync,
        markWorkspaceChatUnreadAsync: m.mutateAsync,
        setWorkspaceChatIconAsync: W.mutateAsync,
        setWorkspaceChatStarredAsync: i.mutateAsync,
        setWorkspaceChatTitleAsync: p.mutateAsync
    }
}
export {
    v as t
};