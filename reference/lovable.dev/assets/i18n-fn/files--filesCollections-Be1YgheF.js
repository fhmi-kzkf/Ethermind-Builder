import {
    Eb as n,
    Tb as r,
    bb as c,
    kb as i
} from "./_eager-BPNnp47q.js";
try {
    (function() {
        var l = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            o = new l.Error().stack;
        o && (l._sentryDebugIds = l._sentryDebugIds || {}, l._sentryDebugIds[o] = "45b51a01-6972-43f4-ac1b-8aa5dab13c5d", l._sentryDebugIdIdentifier = "sentry-dbid-45b51a01-6972-43f4-ac1b-8aa5dab13c5d")
    })()
} catch {}
var t = document.documentElement.lang || "en",
    a = {
        __proto__: null,
        "pt-BR": () => i(() =>
            import ("../i18n-data/files--filesCollections.pt-BR-C9pzdHgK.js"), []),
        de: () => i(() =>
            import ("../i18n-data/files--filesCollections.de-Dpgv0obh.js"), []),
        fr: () => i(() =>
            import ("../i18n-data/files--filesCollections.fr-CG5XgJy0.js"), []),
        es: () => i(() =>
            import ("../i18n-data/files--filesCollections.es-R2k3nriD.js"), []),
        it: () => i(() =>
            import ("../i18n-data/files--filesCollections.it-B7e0UcQx.js"), []),
        hi: () => i(() =>
            import ("../i18n-data/files--filesCollections.hi-ClojL6O9.js"), []),
        id: () => i(() =>
            import ("../i18n-data/files--filesCollections.id-DxqBllLF.js"), []),
        th: () => i(() =>
            import ("../i18n-data/files--filesCollections.th-CPVUF0xq.js"), []),
        ko: () => i(() =>
            import ("../i18n-data/files--filesCollections.ko-Cwm4FoWN.js"), []),
        ja: () => i(() =>
            import ("../i18n-data/files--filesCollections.ja-mrspZM3n.js"), [])
    },
    s = t === "en" ? void 0 : r()["files--filesCollections"];
t !== "en" && s === void 0 && (a[t] === null ? s = null : (a[t] ? .() ? ? Promise.resolve()).then(l => {
    s = l ? .default ? ? null, n()
}, () => {
    s = null, n()
}));
var f = () => s,
    _ = () => t,
    C = {
        filesCollections_accessUnavailable: "Collections are unavailable.",
        filesCollections_addFilesAction: "Add files",
        filesCollections_addFilesTitle: "Add files to collection",
        filesCollections_addToCollection: "Add to collections",
        filesCollections_cancel: "Cancel",
        filesCollections_collectionDetails: "Collection details",
        filesCollections_collectionEmpty: "This collection is empty",
        filesCollections_createAction: "Create",
        filesCollections_createTitle: "Create collection",
        filesCollections_deleteAction: "Delete collection",
        filesCollections_deleteDescription: "Deleting this collection does not delete its files from Files.",
        filesCollections_deleteDraftDescription: "Deleting this collection does not delete its files from Files. The collection is shared, so deleting it removes it everywhere in this project.",
        filesCollections_deleteInvalid: "This collection could not be deleted. Close this dialog and try again.",
        filesCollections_deleteTitle: "Delete collection?",
        filesCollections_deselectAll: "Deselect all",
        filesCollections_detailUnavailable: "This collection is unavailable. It may have been removed, or access may have changed.",
        filesCollections_doneSelecting: "Done selecting",
        filesCollections_editRequired: "You need edit access to change collections.",
        filesCollections_filesHeading: "Files",
        filesCollections_inCollectionCount: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": ["In ", ["countNumber"], " collection"],
                "countPlural=other": ["In ", ["countNumber"], " collections"]
            },
            f: "filesCollections_inCollectionCount"
        },
        filesCollections_loadFailed: "Could not load this collection.",
        filesCollections_manageTitle: "Manage collections",
        filesCollections_memberIneligible: "This file is not supported in collections.",
        filesCollections_memberLimit: "A collection can hold up to 500 files. Select fewer files or remove some from the collection.",
        filesCollections_membershipCollectionLimit: "A single change can update up to 100 collections. Change fewer collections.",
        filesCollections_membershipFailed: "Not saved",
        filesCollections_membershipFailedRetry: "Not saved. Try again.",
        filesCollections_membershipSelectionInvalid: "Some selected files are not supported in collections.",
        filesCollections_membershipTargetUnavailable: "Collection unavailable",
        filesCollections_membershipsLoadFailed: "Could not load collection memberships.",
        filesCollections_nameInvalid: "Enter a name with visible text. Try a shorter name if it is too long.",
        filesCollections_nameLabel: "Collection name",
        filesCollections_nameTaken: "A collection with this name already exists.",
        filesCollections_newCollection: "New collection",
        filesCollections_noCollectionsYet: "No collections yet",
        filesCollections_noFilesToAdd: "No files found",
        filesCollections_noMatchingCollections: "No matching collections.",
        filesCollections_noMembershipChanges: "No changes to save.",
        filesCollections_referenceFailed: "Could not add the collection to chat.",
        filesCollections_removeFilesAction: "Remove",
        filesCollections_removeFilesDescription: {
            d: [
                ["countPlural", "count", "plural"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": "The file itself won't be deleted.",
                "countPlural=other": "The files themselves won't be deleted."
            },
            f: "filesCollections_removeFilesDescription"
        },
        filesCollections_removeFilesDraftDescription: {
            d: [
                ["countPlural", "count", "plural"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": "The file itself won’t be deleted. This change applies everywhere in this project.",
                "countPlural=other": "The files themselves won’t be deleted. This change applies everywhere in this project."
            },
            f: "filesCollections_removeFilesDraftDescription"
        },
        filesCollections_removeFilesInvalid: "These files could not be removed from the collection. Close this dialog and check your selection.",
        filesCollections_removeFilesTitle: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": "Remove file from collection?",
                "countPlural=other": ["Remove ", ["countNumber"], " files from collection?"]
            },
            f: "filesCollections_removeFilesTitle"
        },
        filesCollections_removeSelected: "Remove from collection",
        filesCollections_renameDescription: "Enter a different name.",
        filesCollections_renameName: ["Rename ", ["name"]],
        filesCollections_renameTitle: "Rename collection",
        filesCollections_retryFailedMemberships: "Retry failed changes",
        filesCollections_save: "Save",
        filesCollections_saveAction: "Save changes",
        filesCollections_selectAllCount: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": "Select all",
                "countPlural=other": ["Select all ", ["countNumber"]]
            },
            f: "filesCollections_selectAllCount"
        },
        filesCollections_selectFiles: "Select files that are not already in this collection.",
        filesCollections_selectMembersHint: "Select at least one file.",
        filesCollections_selectMembershipFiles: "Select at least one file to manage collections.",
        filesCollections_selectShown: "Select shown files",
        filesCollections_selectedCount: [
            ["count"], " selected"
        ],
        filesCollections_selectedFilesCount: {
            d: [
                ["countPlural", "count", "plural"],
                ["countNumber", "count", "number"]
            ],
            s: ["countPlural"],
            m: {
                "countPlural=one": [
                    ["countNumber"], " file selected"
                ],
                "countPlural=other": [
                    ["countNumber"], " files selected"
                ]
            },
            f: "filesCollections_selectedFilesCount"
        }
    },
    e = l => (o = {}) => c(f() ? .[l], o, _()) ? ? c(C[l], o, "en") ? ? "",
    m = e("filesCollections_accessUnavailable"),
    v = e("filesCollections_addFilesAction"),
    u = e("filesCollections_addFilesTitle"),
    h = e("filesCollections_addToCollection"),
    b = e("filesCollections_cancel"),
    p = e("filesCollections_collectionDetails"),
    F = e("filesCollections_collectionEmpty"),
    T = e("filesCollections_createAction"),
    g = e("filesCollections_createTitle"),
    D = e("filesCollections_deleteAction"),
    A = e("filesCollections_deleteDescription"),
    P = e("filesCollections_deleteDraftDescription"),
    y = e("filesCollections_deleteInvalid"),
    I = e("filesCollections_deleteTitle"),
    E = e("filesCollections_deselectAll"),
    w = e("filesCollections_detailUnavailable"),
    L = e("filesCollections_doneSelecting"),
    R = e("filesCollections_editRequired"),
    S = e("filesCollections_filesHeading"),
    N = e("filesCollections_inCollectionCount"),
    M = e("filesCollections_loadFailed"),
    O = e("filesCollections_manageTitle"),
    V = e("filesCollections_memberIneligible"),
    U = e("filesCollections_memberLimit"),
    k = e("filesCollections_membershipCollectionLimit"),
    H = e("filesCollections_membershipFailed"),
    j = e("filesCollections_membershipFailedRetry"),
    Y = e("filesCollections_membershipSelectionInvalid"),
    q = e("filesCollections_membershipTargetUnavailable"),
    x = e("filesCollections_membershipsLoadFailed"),
    B = e("filesCollections_nameInvalid"),
    z = e("filesCollections_nameLabel"),
    G = e("filesCollections_nameTaken"),
    J = e("filesCollections_newCollection"),
    K = e("filesCollections_noCollectionsYet"),
    Q = e("filesCollections_noFilesToAdd"),
    W = e("filesCollections_noMatchingCollections"),
    X = e("filesCollections_noMembershipChanges"),
    Z = e("filesCollections_referenceFailed"),
    $ = e("filesCollections_removeFilesAction"),
    ee = e("filesCollections_removeFilesDescription"),
    le = e("filesCollections_removeFilesDraftDescription"),
    ie = e("filesCollections_removeFilesInvalid"),
    oe = e("filesCollections_removeFilesTitle"),
    se = e("filesCollections_removeSelected"),
    te = e("filesCollections_renameDescription"),
    ne = e("filesCollections_renameName"),
    ce = e("filesCollections_renameTitle"),
    ae = e("filesCollections_retryFailedMemberships"),
    re = e("filesCollections_save"),
    fe = e("filesCollections_saveAction"),
    _e = e("filesCollections_selectAllCount"),
    Ce = e("filesCollections_selectFiles"),
    de = e("filesCollections_selectMembersHint"),
    me = e("filesCollections_selectMembershipFiles"),
    ve = e("filesCollections_selectShown"),
    ue = e("filesCollections_selectedCount"),
    he = e("filesCollections_selectedFilesCount");
export {
    Ce as $, x as A, $ as B, V as C, j as D, H as E, K as F, se as G, le as H, Q as I, ce as J, te as K, W as L, z as M, G as N, Y as O, J as P, _e as Q, X as R, O as S, k as T, ie as U, ee as V, oe as W, re as X, ae as Y, fe as Z, L as _, b as a, N as b, T as c, A as d, de as et, P as f, w as g, E as h, h as i, he as it, B as j, q as k, g as l, I as m, v as n, ve as nt, p as o, y as p, ne as q, u as r, ue as rt, F as s, m as t, me as tt, D as u, R as v, U as w, M as x, S as y, Z as z
};