try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5404aed9-b69b-47e4-99b8-8c58d0e51df9", e._sentryDebugIdIdentifier = "sentry-dbid-5404aed9-b69b-47e4-99b8-8c58d0e51df9")
    })()
} catch {}
var s = {
        key: "account-settings-dialog",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    r = {
        key: "action-center-approvals",
        team: "enterprise-readiness",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    t = {
        key: "action-center-connector-requests",
        team: "enterprise-readiness",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    l = {
        key: "active-workspace-resurrection-offer",
        team: "growth",
        scope: "workspace",
        authOnly: !0,
        experimentInclusion: "on_demand",
        fallback: {
            variant: "disabled"
        },
        variants: ["build-hour", "control", "disabled", "first-month-one", "half-price"]
    },
    n = {
        key: "activity-tool-result-outputs",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    o = {
        key: "agent-browser",
        team: "agent",
        scope: "user",
        authOnly: !0,
        fallback: {
            enabled: !1
        }
    },
    c = {
        key: "agent-permissions-settings",
        team: "integrations",
        scope: "user",
        authOnly: !0,
        fallback: {
            enabled: !1
        }
    },
    i = {
        key: "agent-viewer",
        team: "ai",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    p = {
        key: "ai-gateway-chat-nudge",
        team: "agent-builder",
        scope: "user",
        authOnly: !0,
        fallback: {
            variant: "disabled"
        },
        variants: ["chat-assistant", "content-generation", "disabled", "document-summaries", "image-analysis", "recommendations", "voice"]
    },
    b = {
        key: "always-allow-approval-button",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    d = {
        key: "announce-chats",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    k = {
        key: "app-sbom-enabled",
        team: "security",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    m = {
        key: "app-workflows",
        team: "workflows",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    f = {
        key: "app-workflows-ui",
        team: "workflows",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    u = {
        key: "approval-card-no-dim",
        team: "agent",
        scope: "user",
        experimentInclusion: "on_demand",
        fallback: {
            enabled: !1,
            variant: "disabled"
        },
        variants: ["control", "disabled", "treatment"]
    },
    v = {
        key: "artifacts-view",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    y = {
        key: "audience",
        team: "scale",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    g = {
        key: "auth-pages-restyle",
        team: "collaboration",
        scope: "user",
        experimentInclusion: "on_demand",
        fallback: {
            enabled: !1,
            variant: "legacy"
        },
        variants: ["control", "legacy", "restyle", "restyle-compact", "restyle-inline-email"]
    },
    h = {
        key: "backend-draft-static-preview",
        team: "cloud",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    w = {
        key: "backend-signup",
        team: "collaboration",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    C = {
        key: "backend-variants",
        team: "agent",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    P = {
        key: "banner-tool",
        team: "px",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    S = {
        key: "beta-tester-tool",
        team: "px",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    x = {
        key: "brl-pix-pricing",
        team: "billing",
        scope: "server_geo",
        fallback: {
            enabled: !1
        }
    },
    M = {
        key: "build-chat-creation-inspiration",
        team: "growth",
        scope: "workspace",
        experimentInclusion: "on_demand",
        fallback: {
            enabled: !1,
            variant: "disabled"
        },
        variants: ["control", "disabled", "treatment"]
    },
    A = {
        key: "builder-interjections",
        team: "coding-agent",
        scope: "workspace",
        fallback: {
            enabled: !1,
            variant: "off"
        },
        variants: ["auto", "manual", "off"]
    },
    I = {
        key: "business-upgrade-modal-redesign",
        team: "billing",
        scope: "user",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    E = {
        key: "byo-vault",
        team: "enterprise-platform",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    D = {
        key: "byoc-custom-cloud",
        team: "enterprise-platform",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    O = {
        key: "byoc-existing-ws-bootstrap",
        team: "enterprise-platform",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    j = {
        key: "canvas",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    R = {
        key: "cde-destinations-azure-blob",
        team: "enterprise-platform",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    B = {
        key: "cde-destinations-azure-logs",
        team: "enterprise-platform",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    T = {
        key: "cde-destinations-gcs",
        team: "enterprise-platform",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    W = {
        key: "cde-sources-app-logs",
        team: "enterprise-platform",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    L = {
        key: "chat-context-window-indicator",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    F = {
        key: "chat-extended-verbosity",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    _ = {
        key: "chat-hover-mode",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    z = {
        key: "chat-mobile-app-install-nudge",
        team: "growth",
        scope: "user",
        experimentInclusion: "on_demand",
        fallback: {
            enabled: !1
        }
    },
    H = {
        key: "chat-mode-nudges",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    G = {
        key: "chat-nudge-hides-suggestions",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    V = {
        key: "chat-rename",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    N = {
        key: "chat-temporary-credit-limit-fix",
        team: "billing",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    U = {
        key: "chat-thinking-heart",
        team: "design",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    q = {
        key: "checks",
        team: "coding-agent",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    Q = {
        key: "cloud-block-resource-creation",
        team: "enterprise-platform",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Z = {
        key: "cloud-build-jobs",
        team: "agent-computer",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    J = {
        key: "cloud-database-storage-cost-estimates",
        team: "cloud",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    K = {
        key: "cloud-instance-cost-estimates",
        team: "cloud",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    X = {
        key: "cloud-setup-copy",
        team: "growth",
        scope: "user",
        authOnly: !0,
        fallback: {
            variant: "control"
        },
        variants: ["control", "plain-english"]
    },
    Y = {
        key: "cloud-specific-regions",
        team: "platform",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    $ = {
        key: "cloud-v2",
        team: "cloud",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ee = {
        key: "cloud-worker-billing-publish-enabled",
        team: "billing",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    ae = {
        key: "code-block-lovable-theme",
        team: "pulse",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    se = {
        key: "code-review-skill",
        team: "agent",
        scope: "workspace",
        experimentInclusion: "on_demand",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    re = {
        key: "command-palette-smart-search",
        team: "pulse",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    te = {
        key: "community-dashboard",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    le = {
        key: "composer-inline-view-chip",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ne = {
        key: "composer-publish-chip-style",
        team: "agent",
        scope: "user",
        authOnly: !0,
        fallback: {
            enabled: !1,
            variant: "disabled"
        },
        variants: ["control", "disabled", "inverse", "neutral"]
    },
    oe = {
        key: "composer-sketch",
        team: "everywhere",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    ce = {
        key: "composer-voice-label",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ie = {
        key: "confidence-metrics-replacement-canary",
        team: "data-platform",
        scope: "project",
        authOnly: !0,
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    pe = {
        key: "connect-domain-flow",
        team: "app-success",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    be = {
        key: "connected-computers",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    de = {
        key: "connector-lovable-account",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ke = {
        key: "connectors-aigw-discoverability",
        team: "integrations",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    me = {
        key: "connectors-apollo",
        team: "integrations",
        scope: "workspace",
        fallback: {
            dry_run: !1,
            enabled: !1
        }
    },
    fe = {
        key: "connectors-google-ads",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ue = {
        key: "connectors-hubspot-mcp",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ve = {
        key: "connectors-llamacloud",
        team: "integrations",
        scope: "workspace",
        fallback: {
            dry_run: !1,
            enabled: !1
        }
    },
    ye = {
        key: "connectors-meta-ads",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ge = {
        key: "connectors-meta-ads-mcp",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    he = {
        key: "connectors-microsoft-managed-apps",
        team: "enterprise-platform",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    we = {
        key: "connectors-query-tagging",
        team: "integrations",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Ce = {
        key: "connectors-shared-mcp",
        team: "integrations",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Pe = {
        key: "connectors-try-in-chat-prompts",
        team: "integrations",
        scope: "workspace",
        fallback: {
            enabled: !1,
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    Se = {
        key: "connectors-zero-result-build-connector",
        team: "integrations",
        scope: "user",
        authOnly: !0,
        fallback: {
            enabled: !1,
            variant: "disabled"
        },
        variants: ["control", "disabled", "treatment"]
    },
    xe = {
        key: "credit-limit-request-lifecycle",
        team: "billing",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Me = {
        key: "custom-codebases",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ae = {
        key: "custom-views",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ie = {
        key: "dashboard-chat-suggestion-pills",
        team: "agent",
        scope: "user",
        authOnly: !0,
        experimentInclusion: "on_demand",
        fallback: {
            enabled: !1,
            variant: "disabled"
        },
        variants: ["control", "disabled", "treatment"]
    },
    Ee = {
        key: "dashboard-create-type-pills",
        team: "insights",
        scope: "user",
        authOnly: !0,
        experimentInclusion: "on_demand",
        fallback: {
            enabled: !1,
            variant: "disabled"
        },
        variants: ["control", "disabled", "treatment"]
    },
    De = {
        key: "dashboard-ios-app-download-cta",
        team: "growth",
        scope: "user",
        authOnly: !0,
        fallback: {
            variant: "control"
        },
        variants: ["add-button", "control", "replace-prompt"]
    },
    Oe = {
        key: "dashboard-onboard-me-hint",
        team: "growth",
        scope: "user",
        authOnly: !0,
        fallback: {
            variant: "control"
        },
        variants: ["control", "hint"]
    },
    je = {
        key: "dashboard-shell-prefetch",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Re = {
        key: "dashboard-up-next",
        team: "everywhere",
        scope: "user",
        experimentInclusion: "on_demand",
        fallback: {
            enabled: !1
        }
    },
    Be = {
        key: "database-request-volume",
        team: "cloud",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Te = {
        key: "design-assets",
        team: "agent",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    We = {
        key: "design-system-canvas",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Le = {
        key: "desktop-app-promo",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Fe = {
        key: "desktop-quick-chat",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    _e = {
        key: "developer-mode",
        team: "cloud",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ze = {
        key: "disable-activity-descriptions",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    He = {
        key: "drafts-v2",
        team: "agent",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Ge = {
        key: "drizzle-db-migrations",
        team: "cloud",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ve = {
        key: "editor-collapsed-rail-menu-icon",
        team: "everywhere",
        scope: "user",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    Ne = {
        key: "editor-invite-button",
        team: "enterprise-readiness",
        scope: "user",
        authOnly: !0,
        experimentInclusion: "on_demand",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    Ue = {
        key: "editor-preview-only",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    qe = {
        key: "effective-credit-limit-consistency",
        team: "billing",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Qe = {
        key: "egress-filtering",
        team: "infra",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Ze = {
        key: "email-marketing-consent-capture",
        team: "growth",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Je = {
        key: "embed-settings",
        team: "collaboration",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Ke = {
        key: "embed-webcomponent",
        team: "collaboration",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Xe = {
        key: "enterprise-claimable-workspace-discovery",
        team: "enterprise-readiness",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ye = {
        key: "enterprise-connectivity-layer",
        team: "integrations",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    $e = {
        key: "enterprise-connectivity-layer-admin-ui",
        team: "integrations",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    ea = {
        key: "enterprise-contact-support",
        team: "collaboration",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    aa = {
        key: "enterprise-enforced-gitsync-org",
        team: "agent-computer",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    sa = {
        key: "enterprise-inference-region-fix",
        team: "enterprise-readiness",
        scope: "workspace",
        fallback: {
            variant: "disabled"
        },
        variants: ["disabled", "enabled", "paused"]
    },
    ra = {
        key: "enterprise-ip-groups",
        team: "enterprise-readiness",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    ta = {
        key: "enterprise-mcp-ema-self-serve",
        team: "iam",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    la = {
        key: "enterprise-self-serve-org-conversion",
        team: "enterprise-readiness",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    na = {
        key: "enterprise-sso-provider-health",
        team: "enterprise-readiness",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    oa = {
        key: "external-events-hooks",
        team: "extensibility",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    ca = {
        key: "external-project-import-entrypoint",
        team: "ai",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ia = {
        key: "external-project-migration",
        team: "ai",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    pa = {
        key: "feature-security-pentests",
        team: "security-flywheel",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ba = {
        key: "feature-workspace-security-pentests",
        team: "security-flywheel",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    da = {
        key: "file-image-thumbnails",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ka = {
        key: "files-image-edit",
        team: "app-success",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    ma = {
        key: "files-markdown-notes",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    fa = {
        key: "files-native-markdown-preview",
        team: "app-success",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ua = {
        key: "first-build-tip-animations",
        team: "growth",
        scope: "user",
        experimentInclusion: "on_demand",
        fallback: {
            variant: "control"
        },
        variants: ["animated", "control"]
    },
    va = {
        key: "force-live-preview",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ya = {
        key: "free-domain-cta-copy",
        team: "scale",
        scope: "user",
        authOnly: !0,
        fallback: {
            variant: "control"
        },
        variants: ["control", "use-free-domain"]
    },
    ga = {
        key: "free-plan-topups",
        team: "growth",
        scope: "workspace",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    ha = {
        key: "fullstory-recording",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    wa = {
        key: "gitsync-activity-section",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ca = {
        key: "gitsync-backup-recovery",
        team: "agent-computer",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    Pa = {
        key: "gitsync-history-cleanup-deleted-files",
        team: "agent-computer",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    Sa = {
        key: "gitsync-self-serve-history-cleanup",
        team: "agent-computer",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    xa = {
        key: "glasshouse-document-scroll-lock",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ma = {
        key: "goblin-mode",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Aa = {
        key: "google-ads-free-signup-homepage-campaign",
        team: "growth-marketing",
        scope: "user",
        experimentInclusion: "on_demand",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    Ia = {
        key: "google-ads-homepage-redirect-campaign",
        team: "growth-marketing",
        scope: "user",
        experimentInclusion: "on_demand",
        fallback: {
            variant: "treatment"
        },
        variants: ["control", "treatment"]
    },
    Ea = {
        key: "gpt61-sol-picker",
        team: "ai",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Da = {
        key: "health-check-project-monitoring-free-beta",
        team: "scale",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    Oa = {
        key: "hide-blank-app-preview",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ja = {
        key: "hold-fullscreen-chat-on-blank-preview",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ra = {
        key: "home-hero-subhead-experiment",
        team: "growth",
        scope: "user",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    Ba = {
        key: "hosting-billing-correction-notice",
        team: "billing",
        scope: "workspace",
        fallback: {
            enabled: !1,
            starts_at: ""
        }
    },
    Ta = {
        key: "iframe-visual-editor",
        team: "everywhere",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Wa = {
        key: "imessage-integration",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    La = {
        key: "import-website",
        team: "agent-builder",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Fa = {
        key: "import-website-many-pages",
        team: "agent-builder",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    _a = {
        key: "individual-private-publishing",
        team: "enterprise-readiness",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    za = {
        key: "inference-region",
        team: "enterprise-readiness",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Ha = {
        key: "ingress-filtering",
        team: "security",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Ga = {
        key: "initial-credit",
        team: "scale",
        scope: "user",
        fallback: {
            credits: 0,
            variant: ""
        },
        variants: ["", "control", "five-credits", "ten-credits"]
    },
    Va = {
        key: "internal-reports",
        team: "px",
        scope: "user",
        authOnly: !0,
        fallback: {
            enabled: !1
        }
    },
    Na = {
        key: "living-docs-coediting",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ua = {
        key: "lol-pr-ioskeley-font",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    qa = {
        key: "lol-pr-project-badges",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Qa = {
        key: "lol-pr-review",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Za = {
        key: "lovable-auth-stack",
        team: "iam",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ja = {
        key: "lovable-groups-zanzibar-migration",
        team: "iam",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Ka = {
        key: "lovable-insights-launch",
        team: "growth",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Xa = {
        key: "lovable-mcp-server",
        team: "everywhere",
        scope: "workspace",
        fallback: {
            enabled: !0
        }
    },
    Ya = {
        key: "lovable-on-lovable",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    $a = {
        key: "managed-email-migration",
        team: "scale",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    es = {
        key: "max-mode",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    as = {
        key: "mcp-connection-trust",
        team: "agent-builder",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    ss = {
        key: "memory-settings-ui",
        team: "collaboration",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    rs = {
        key: "messaging-google-setup",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ts = {
        key: "meta-answers-homepage-redirect-campaign",
        team: "growth",
        scope: "user",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    ls = {
        key: "meta-business-website-homepage-redirect-campaign",
        team: "growth",
        scope: "user",
        fallback: {
            variant: "treatment"
        },
        variants: ["control", "treatment"]
    },
    ns = {
        key: "meta-client-builders-homepage-redirect-campaign",
        team: "growth",
        scope: "user",
        fallback: {
            variant: "treatment"
        },
        variants: ["control", "treatment"]
    },
    os = {
        key: "meta-free-signup-homepage-campaign",
        team: "growth",
        scope: "user",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    cs = {
        key: "meta-in-app-google-redirect-sign-in",
        team: "growth-marketing",
        scope: "user",
        experimentInclusion: "on_demand",
        fallback: {
            variant: "control"
        },
        variants: ["control", "redirect"]
    },
    is = {
        key: "meta-smb-homepage-redirect-campaign",
        team: "growth",
        scope: "user",
        fallback: {
            variant: "treatment"
        },
        variants: ["control", "treatment"]
    },
    ps = {
        key: "meta-wedding-website-homepage-redirect-campaign",
        team: "growth",
        scope: "user",
        fallback: {
            variant: "treatment"
        },
        variants: ["control", "treatment"]
    },
    bs = {
        key: "mobile-designer",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ds = {
        key: "mobile-dev",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ks = {
        key: "mobile-diagnostics-tracing",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1,
            variant: "disabled"
        },
        variants: ["disabled", "full", "full-sampled", "nav", "nav-sampled"]
    },
    ms = {
        key: "mobile-docked-composer",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    fs = {
        key: "mobile-filters",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    us = {
        key: "mobile-multi-webview",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    vs = {
        key: "mobile-preview-switch-on-first-gen",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ys = {
        key: "mobile-push-pre-prompt",
        team: "growth",
        scope: "user",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    gs = {
        key: "mobile-recents-stack",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    hs = {
        key: "mobile-review-prompt",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ws = {
        key: "mobile-shortcuts",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Cs = {
        key: "mobile-sidebar-status",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ps = {
        key: "mobile-starter-prompt-chips",
        team: "everywhere",
        scope: "user",
        authOnly: !0,
        experimentInclusion: "on_demand",
        fallback: {
            enabled: !1,
            variant: "disabled"
        },
        variants: ["control", "disabled", "treatment"]
    },
    Ss = {
        key: "move-domain-chooser",
        team: "scale",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    xs = {
        key: "north-star-feedback",
        team: "scale",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    Ms = {
        key: "nothing-widget-default-stack",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    As = {
        key: "ns-branded-urls",
        team: "scale",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Is = {
        key: "oauth-client-management",
        team: "iam",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Es = {
        key: "oauth-grant-revocation",
        team: "iam",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ds = {
        key: "omni-business-memory",
        team: "agent",
        scope: "user",
        authOnly: !0,
        fallback: {
            enabled: !1
        }
    },
    Os = {
        key: "omni-chat-documents-library",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    js = {
        key: "omni-message-user",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Rs = {
        key: "omni-workspace",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Bs = {
        key: "omni-workspace-voice",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ts = {
        key: "onboarding-prompt-or-template-step",
        team: "scale",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ws = {
        key: "onboarding-template-to-picker",
        team: "scale",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ls = {
        key: "only-chats",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Fs = {
        key: "optimize-cloud-spend",
        team: "billing",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    _s = {
        key: "optimize-run-usage",
        team: "billing",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    zs = {
        key: "org-v2",
        team: "collaboration",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Hs = {
        key: "out-of-credits-plans-dialog",
        team: "growth",
        scope: "user",
        authOnly: !0,
        experimentInclusion: "on_demand",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    Gs = {
        key: "pasted-text-artifacts",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Vs = {
        key: "pause-out-of-credit-projects",
        team: "billing",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Ns = {
        key: "pending-action-notifications",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Us = {
        key: "personal-skills-knowledge",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    qs = {
        key: "personalised-nba-pill",
        team: "growth",
        scope: "user",
        authOnly: !0,
        fallback: {
            variant: "control"
        },
        variants: ["control", "generic", "personalised"]
    },
    Qs = {
        key: "pii-llm-scan",
        team: "collaboration",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Zs = {
        key: "plan-comment-queue",
        team: "agent",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Js = {
        key: "plan-mode-slash-command",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ks = {
        key: "plan-revision-diff",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Xs = {
        key: "preview-boot-events",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ys = {
        key: "preview-boot-narration",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    $s = {
        key: "preview-dead-document-recovery",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    er = {
        key: "preview-first-build-loader",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !0
        }
    },
    ar = {
        key: "preview-idle-pause",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    sr = {
        key: "preview-path-deep-link",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    rr = {
        key: "preview-screenshot-cover",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    tr = {
        key: "preview-shared-auth",
        team: "agent-computer",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    lr = {
        key: "preview-signal-driven-reveal",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    nr = {
        key: "preview-subdomain-picker",
        team: "design",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    or = {
        key: "preview-update-narration",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    cr = {
        key: "preview-wrapped-port-offer",
        team: "enterprise-platform",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    ir = {
        key: "pricing-plan-highlight",
        team: "growth",
        scope: "user",
        authOnly: !0,
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    pr = {
        key: "product-advisor-review",
        team: "agent-computer",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    br = {
        key: "project-anomaly-detection",
        team: "collaboration",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    dr = {
        key: "project-graceful-delete-enabled",
        team: "collaboration",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    kr = {
        key: "project-link-protection",
        team: "enterprise-readiness",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    mr = {
        key: "project-monitoring-brief-suppression",
        team: "scale",
        scope: "project",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    fr = {
        key: "project-monitoring-chat-nudge",
        team: "scale",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ur = {
        key: "project-open-single-coachcard",
        team: "design",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    vr = {
        key: "project-purge-reconciler-enabled",
        team: "collaboration",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    yr = {
        key: "prompt-coach",
        team: "growth",
        scope: "user",
        authOnly: !0,
        fallback: {
            variant: "control"
        },
        variants: ["control", "fix-tip", "treatment"]
    },
    gr = {
        key: "publish-referral-prompt",
        team: "growth",
        scope: "user",
        experimentInclusion: "on_demand",
        fallback: {
            enabled: !1
        }
    },
    hr = {
        key: "publish-site-health-warning",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    wr = {
        key: "publish-trigger-inverse-variant",
        team: "scale",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Cr = {
        key: "quartz-picker",
        team: "agent",
        scope: "user",
        fallback: {
            variant: "control"
        },
        variants: ["applied-compute", "baseten", "cerebras", "control", "cursive", "databricks", "fireworks", "google", "lovable", "nebius", "nemotron", "openai"]
    },
    Pr = {
        key: "quick-edit",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Sr = {
        key: "raw-trace-capture-expanded-providers",
        team: "ai",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    xr = {
        key: "referral-bonus-announcement",
        team: "growth",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Mr = {
        key: "referral-staged-advocate-reward",
        team: "growth",
        scope: "workspace",
        experimentInclusion: "on_demand",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    Ar = {
        key: "regional-pro-0",
        team: "billing",
        scope: "user",
        fallback: {
            variant: "control"
        },
        variants: ["control", "test"]
    },
    Ir = {
        key: "retire-cloud-brand",
        team: "cloud",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Er = {
        key: "rewards-claim",
        team: "scale",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Dr = {
        key: "roadmap-task-list",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Or = {
        key: "runtime-errors",
        team: "ai",
        scope: "user",
        fallback: {
            variant: "control"
        },
        variants: ["control", "linting"]
    },
    jr = {
        key: "sandbox-exec-tool",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Rr = {
        key: "sandbox-prewarm-on-typing",
        team: "agent-computer",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Br = {
        key: "sandbox-selection-metadata-admin",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Tr = {
        key: "sandboxed-file-previews",
        team: "agent-computer",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Wr = {
        key: "schedule-templates",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Lr = {
        key: "scheduled-customer-data-export",
        team: "enterprise-platform",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Fr = {
        key: "scheduled-wakeups",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    _r = {
        key: "scheduling-announcement-dialog",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    zr = {
        key: "security-custom-controls",
        team: "security-flywheel",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Hr = {
        key: "security-next-stack",
        team: "security-flywheel",
        scope: "workspace",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    Gr = {
        key: "security-scan-control-selection",
        team: "security-flywheel",
        scope: "workspace",
        fallback: {
            variant: "disabled"
        },
        variants: ["disabled", "enabled", "read_only"]
    },
    Vr = {
        key: "security-taxonomy-poc",
        team: "security",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Nr = {
        key: "settings-search-results",
        team: "enterprise-readiness",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ur = {
        key: "settings-workspace-switcher",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    qr = {
        key: "share-link-management",
        team: "collaboration",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Qr = {
        key: "share-preview-comment-emails",
        team: "collaboration",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Zr = {
        key: "show-whatsapp-onboarding-paused-banner",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Jr = {
        key: "sidebar-launch-card",
        team: "growth",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Kr = {
        key: "slack-app-enabled",
        team: "integrations",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Xr = {
        key: "slack-app-provisioning",
        team: "integrations",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Yr = {
        key: "slack-ga-announcement",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    $r = {
        key: "slides-chat-context",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    et = {
        key: "slides-native-visual-edits",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    at = {
        key: "subagent-skills",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    st = {
        key: "talkative",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    rt = {
        key: "telegram-biz-enterprise-enabled",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    tt = {
        key: "telegram-integration",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    lt = {
        key: "template-preview-details",
        team: "everywhere",
        scope: "user",
        authOnly: !0,
        fallback: {
            enabled: !1
        }
    },
    nt = {
        key: "trajectory-ws-compression",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ot = {
        key: "trust-center-enabled",
        team: "security",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    ct = {
        key: "unmerged-interjection-wake",
        team: "agent",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    it = {
        key: "upgrade-modal-checkout-cta",
        team: "growth",
        scope: "user",
        authOnly: !0,
        experimentInclusion: "on_demand",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    pt = {
        key: "upgrade-plan-dialog",
        team: "billing",
        scope: "user",
        authOnly: !0,
        experimentInclusion: "on_demand",
        fallback: {
            variant: "control"
        },
        variants: ["control", "treatment"]
    },
    bt = {
        key: "use-case-recommendations-generation",
        team: "agent",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    dt = {
        key: "user-app-events-instrumentation",
        team: "agent-computer",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    kt = {
        key: "user-app-events-project-analytics",
        team: "agent-computer",
        scope: "project",
        fallback: {
            enabled: !1
        }
    },
    mt = {
        key: "variants-v1",
        team: "agent",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    ft = {
        key: "visual-edit-credits",
        team: "billing",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    ut = {
        key: "visual-edit-preview-freeze",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    vt = {
        key: "visual-edits-actions",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    yt = {
        key: "wait-tips-server-selection",
        team: "growth",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    gt = {
        key: "whatsapp-biz-enterprise-enabled",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    ht = {
        key: "whatsapp-integration",
        team: "integrations",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    wt = {
        key: "whiteboard",
        team: "everywhere",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Ct = {
        key: "workspace-chat-bubbles",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    Pt = {
        key: "workspace-chat-model-picker",
        team: "agent",
        scope: "user",
        fallback: {
            enabled: !1
        }
    },
    St = {
        key: "workspace-graceful-restore",
        team: "collaboration",
        scope: "user",
        authOnly: !0,
        fallback: {
            enabled: !1
        }
    },
    xt = {
        key: "workspace-insights-risk-read-enabled",
        team: "collaboration",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Mt = {
        key: "workspace-mcp-server-settings",
        team: "integrations",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    At = {
        key: "workspace-policy-engine",
        team: "enterprise-readiness",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    It = {
        key: "workspace-security-digest",
        team: "collaboration",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Et = {
        key: "zanzibar-project-list-endpoints",
        team: "iam",
        scope: "workspace",
        fallback: {
            enabled: !1
        }
    },
    Dt = {
        AccountSettingsDialog: s,
        ActionCenterApprovals: r,
        ActionCenterConnectorRequests: t,
        ActiveWorkspaceResurrectionOffer: l,
        ActivityToolResultOutputs: n,
        AgentBrowser: o,
        AgentPermissionsSettings: c,
        AgentViewer: i,
        AiGatewayChatNudge: p,
        AlwaysAllowApprovalButton: b,
        AnnounceChats: d,
        AppSbomEnabled: k,
        AppWorkflows: m,
        AppWorkflowsUi: f,
        ApprovalCardNoDim: u,
        ArtifactsView: v,
        Audience: y,
        AuthPagesRestyle: g,
        BackendDraftStaticPreview: h,
        BackendSignup: w,
        BackendVariants: C,
        BannerTool: P,
        BetaTesterTool: S,
        BrlPixPricing: x,
        BuildChatCreationInspiration: M,
        BuilderInterjections: A,
        BusinessUpgradeModalRedesign: I,
        ByoVault: E,
        ByocCustomCloud: D,
        ByocExistingWsBootstrap: O,
        Canvas: j,
        CdeDestinationsAzureBlob: R,
        CdeDestinationsAzureLogs: B,
        CdeDestinationsGcs: T,
        CdeSourcesAppLogs: W,
        ChatContextWindowIndicator: L,
        ChatExtendedVerbosity: F,
        ChatHoverMode: _,
        ChatMobileAppInstallNudge: z,
        ChatModeNudges: H,
        ChatNudgeHidesSuggestions: G,
        ChatRename: V,
        ChatTemporaryCreditLimitFix: N,
        ChatThinkingHeart: U,
        Checks: q,
        CloudBlockResourceCreation: Q,
        CloudBuildJobs: Z,
        CloudDatabaseStorageCostEstimates: J,
        CloudInstanceCostEstimates: K,
        CloudSetupCopy: X,
        CloudSpecificRegions: Y,
        CloudV2: $,
        CloudWorkerBillingPublishEnabled: ee,
        CodeBlockLovableTheme: ae,
        CodeReviewSkill: se,
        CommandPaletteSmartSearch: re,
        CommunityDashboard: te,
        ComposerInlineViewChip: le,
        ComposerPublishChipStyle: ne,
        ComposerSketch: oe,
        ComposerVoiceLabel: ce,
        ConfidenceMetricsReplacementCanary: ie,
        ConnectDomainFlow: pe,
        ConnectedComputers: be,
        ConnectorLovableAccount: de,
        ConnectorsAigwDiscoverability: ke,
        ConnectorsApollo: me,
        ConnectorsGoogleAds: fe,
        ConnectorsHubspotMcp: ue,
        ConnectorsLlamacloud: ve,
        ConnectorsMetaAds: ye,
        ConnectorsMetaAdsMcp: ge,
        ConnectorsMicrosoftManagedApps: he,
        ConnectorsQueryTagging: we,
        ConnectorsSharedMcp: Ce,
        ConnectorsTryInChatPrompts: Pe,
        ConnectorsZeroResultBuildConnector: Se,
        CreditLimitRequestLifecycle: xe,
        CustomCodebases: Me,
        CustomViews: Ae,
        DashboardChatSuggestionPills: Ie,
        DashboardCreateTypePills: Ee,
        DashboardIosAppDownloadCta: De,
        DashboardOnboardMeHint: Oe,
        DashboardShellPrefetch: je,
        DashboardUpNext: Re,
        DatabaseRequestVolume: Be,
        DesignAssets: Te,
        DesignSystemCanvas: We,
        DesktopAppPromo: Le,
        DesktopQuickChat: Fe,
        DeveloperMode: _e,
        DisableActivityDescriptions: ze,
        DraftsV2: He,
        DrizzleDbMigrations: Ge,
        EditorCollapsedRailMenuIcon: Ve,
        EditorInviteButton: Ne,
        EditorPreviewOnly: Ue,
        EffectiveCreditLimitConsistency: qe,
        EgressFiltering: Qe,
        EmailMarketingConsentCapture: Ze,
        EmbedSettings: Je,
        EmbedWebcomponent: Ke,
        EnterpriseClaimableWorkspaceDiscovery: Xe,
        EnterpriseConnectivityLayer: Ye,
        EnterpriseConnectivityLayerAdminUi: $e,
        EnterpriseContactSupport: ea,
        EnterpriseEnforcedGitsyncOrg: aa,
        EnterpriseInferenceRegionFix: sa,
        EnterpriseIpGroups: ra,
        EnterpriseMcpEmaSelfServe: ta,
        EnterpriseSelfServeOrgConversion: la,
        EnterpriseSsoProviderHealth: na,
        ExternalEventsHooks: oa,
        ExternalProjectImportEntrypoint: ca,
        ExternalProjectMigration: ia,
        FeatureSecurityPentests: pa,
        FeatureWorkspaceSecurityPentests: ba,
        FileImageThumbnails: da,
        FilesImageEdit: ka,
        FilesMarkdownNotes: ma,
        FilesNativeMarkdownPreview: fa,
        FirstBuildTipAnimations: ua,
        ForceLivePreview: va,
        FreeDomainCtaCopy: ya,
        FreePlanTopups: ga,
        FullstoryRecording: ha,
        GitsyncActivitySection: wa,
        GitsyncBackupRecovery: Ca,
        GitsyncHistoryCleanupDeletedFiles: Pa,
        GitsyncSelfServeHistoryCleanup: Sa,
        GlasshouseDocumentScrollLock: xa,
        GoblinMode: Ma,
        GoogleAdsFreeSignupHomepageCampaign: Aa,
        GoogleAdsHomepageRedirectCampaign: Ia,
        Gpt61SolPicker: Ea,
        HealthCheckProjectMonitoringFreeBeta: Da,
        HideBlankAppPreview: Oa,
        HoldFullscreenChatOnBlankPreview: ja,
        HomeHeroSubheadExperiment: Ra,
        HostingBillingCorrectionNotice: Ba,
        IframeVisualEditor: Ta,
        ImessageIntegration: Wa,
        ImportWebsite: La,
        ImportWebsiteManyPages: Fa,
        IndividualPrivatePublishing: _a,
        InferenceRegion: za,
        IngressFiltering: Ha,
        InitialCredit: Ga,
        InternalReports: Va,
        LivingDocsCoediting: Na,
        LolPrIoskeleyFont: Ua,
        LolPrProjectBadges: qa,
        LolPrReview: Qa,
        LovableAuthStack: Za,
        LovableGroupsZanzibarMigration: Ja,
        LovableInsightsLaunch: Ka,
        LovableMcpServer: Xa,
        LovableOnLovable: Ya,
        ManagedEmailMigration: $a,
        MaxMode: es,
        McpConnectionTrust: as,
        MemorySettingsUi: ss,
        MessagingGoogleSetup: rs,
        MetaAnswersHomepageRedirectCampaign: ts,
        MetaBusinessWebsiteHomepageRedirectCampaign: ls,
        MetaClientBuildersHomepageRedirectCampaign: ns,
        MetaFreeSignupHomepageCampaign: os,
        MetaInAppGoogleRedirectSignIn: cs,
        MetaSmbHomepageRedirectCampaign: is,
        MetaWeddingWebsiteHomepageRedirectCampaign: ps,
        MobileDesigner: bs,
        MobileDev: ds,
        MobileDiagnosticsTracing: ks,
        MobileDockedComposer: ms,
        MobileFilters: fs,
        MobileMultiWebview: us,
        MobilePreviewSwitchOnFirstGen: vs,
        MobilePushPrePrompt: ys,
        MobileRecentsStack: gs,
        MobileReviewPrompt: hs,
        MobileShortcuts: ws,
        MobileSidebarStatus: Cs,
        MobileStarterPromptChips: Ps,
        MoveDomainChooser: Ss,
        NorthStarFeedback: xs,
        NothingWidgetDefaultStack: Ms,
        NsBrandedUrls: As,
        OauthClientManagement: Is,
        OauthGrantRevocation: Es,
        OmniBusinessMemory: Ds,
        OmniChatDocumentsLibrary: Os,
        OmniMessageUser: js,
        OmniWorkspace: Rs,
        OmniWorkspaceVoice: Bs,
        OnboardingPromptOrTemplateStep: Ts,
        OnboardingTemplateToPicker: Ws,
        OnlyChats: Ls,
        OptimizeCloudSpend: Fs,
        OptimizeRunUsage: _s,
        OrgV2: zs,
        OutOfCreditsPlansDialog: Hs,
        PastedTextArtifacts: Gs,
        PauseOutOfCreditProjects: Vs,
        PendingActionNotifications: Ns,
        PersonalSkillsKnowledge: Us,
        PersonalisedNbaPill: qs,
        PiiLlmScan: Qs,
        PlanCommentQueue: Zs,
        PlanModeSlashCommand: Js,
        PlanRevisionDiff: Ks,
        PreviewBootEvents: Xs,
        PreviewBootNarration: Ys,
        PreviewDeadDocumentRecovery: $s,
        PreviewFirstBuildLoader: er,
        PreviewIdlePause: ar,
        PreviewPathDeepLink: sr,
        PreviewScreenshotCover: rr,
        PreviewSharedAuth: tr,
        PreviewSignalDrivenReveal: lr,
        PreviewSubdomainPicker: nr,
        PreviewUpdateNarration: or,
        PreviewWrappedPortOffer: cr,
        PricingPlanHighlight: ir,
        ProductAdvisorReview: pr,
        ProjectAnomalyDetection: br,
        ProjectGracefulDeleteEnabled: dr,
        ProjectLinkProtection: kr,
        ProjectMonitoringBriefSuppression: mr,
        ProjectMonitoringChatNudge: fr,
        ProjectOpenSingleCoachcard: ur,
        ProjectPurgeReconcilerEnabled: vr,
        PromptCoach: yr,
        PublishReferralPrompt: gr,
        PublishSiteHealthWarning: hr,
        PublishTriggerInverseVariant: wr,
        QuartzPicker: Cr,
        QuickEdit: Pr,
        RawTraceCaptureExpandedProviders: Sr,
        ReferralBonusAnnouncement: xr,
        ReferralStagedAdvocateReward: Mr,
        RegionalPro0: Ar,
        RetireCloudBrand: Ir,
        RewardsClaim: Er,
        RoadmapTaskList: Dr,
        RuntimeErrors: Or,
        SandboxExecTool: jr,
        SandboxPrewarmOnTyping: Rr,
        SandboxSelectionMetadataAdmin: Br,
        SandboxedFilePreviews: Tr,
        ScheduleTemplates: Wr,
        ScheduledCustomerDataExport: Lr,
        ScheduledWakeups: Fr,
        SchedulingAnnouncementDialog: _r,
        SecurityCustomControls: zr,
        SecurityNextStack: Hr,
        SecurityScanControlSelection: Gr,
        SecurityTaxonomyPoc: Vr,
        SettingsSearchResults: Nr,
        SettingsWorkspaceSwitcher: Ur,
        ShareLinkManagement: qr,
        SharePreviewCommentEmails: Qr,
        ShowWhatsappOnboardingPausedBanner: Zr,
        SidebarLaunchCard: Jr,
        SlackAppEnabled: Kr,
        SlackAppProvisioning: Xr,
        SlackGaAnnouncement: Yr,
        SlidesChatContext: $r,
        SlidesNativeVisualEdits: et,
        SubagentSkills: at,
        Talkative: st,
        TelegramBizEnterpriseEnabled: rt,
        TelegramIntegration: tt,
        TemplatePreviewDetails: lt,
        TrajectoryWsCompression: nt,
        TrustCenterEnabled: ot,
        UnmergedInterjectionWake: ct,
        UpgradeModalCheckoutCta: it,
        UpgradePlanDialog: pt,
        UseCaseRecommendationsGeneration: bt,
        UserAppEventsInstrumentation: dt,
        UserAppEventsProjectAnalytics: kt,
        VariantsV1: mt,
        VisualEditCredits: ft,
        VisualEditPreviewFreeze: ut,
        VisualEditsActions: vt,
        WaitTipsServerSelection: yt,
        WhatsappBizEnterpriseEnabled: gt,
        WhatsappIntegration: ht,
        Whiteboard: wt,
        WorkspaceChatBubbles: Ct,
        WorkspaceChatModelPicker: Pt,
        WorkspaceGracefulRestore: St,
        WorkspaceInsightsRiskReadEnabled: xt,
        WorkspaceMcpServerSettings: Mt,
        WorkspacePolicyEngine: At,
        WorkspaceSecurityDigest: It,
        ZanzibarProjectListEndpoints: Et
    };
export {
    xr as $, ba as $n, J as $r, hs as $t, Kr as A, u as Ai, Ta as An, Ee as Ar, Us as At, _r as B, l as Bi, Sa as Bn, ke as Br, Ts as Bt, tt as C, S as Ci, Na as Cn, Fe as Cr, $s as Ct, $r as D, h as Di, _a as Dn, Re as Dr, Js as Dt, et as E, w as Ei, za as En, Be as Er, Ks as Et, Nr as F, p as Fi, Ea as Fn, Pe as Fr, zs as Ft, Rr as G, ga as Gn, ne as Gr, Is as Gt, Lr as H, r as Hi, Ca as Hn, pe as Hr, Os as Ht, Vr as I, i as Ii, Ia as In, Ce as Ir, _s as It, Dr as J, ua as Jn, se as Jr, xs as Jt, jr as K, ya as Kn, le as Kr, As as Kt, Gr as L, c as Li, Aa as Ln, he as Lr, Fs as Lt, Zr as M, m as Mi, Ra as Mn, Me as Mr, Vs as Mt, qr as N, d as Ni, ja as Nn, xe as Nr, Gs as Nt, Yr as O, g as Oi, La as On, Oe as Or, Zs as Ot, Ur as P, b as Pi, Oa as Pn, Se as Pr, Hs as Pt, Mr as Q, da as Qn, K as Qr, ws as Qt, Hr as R, o as Ri, Ma as Rn, ye as Rr, Ls as Rt, lt as S, M as Si, Ua as Sn, _e as Sr, er as St, st as T, C as Ti, Ha as Tn, Te as Tr, Xs as Tt, Tr as U, s as Ui, wa as Un, ce as Ur, Ds as Ut, Fr as V, t as Vi, Pa as Vn, be as Vr, js as Vt, Br as W, ha as Wn, oe as Wr, Es as Wt, Ir as X, ma as Xn, Y as Xr, Ps as Xt, Er as Y, fa as Yn, ae as Yr, Ss as Yt, Ar as Z, ka as Zn, X as Zr, Cs as Zt, kt as _, O as _i, es as _n, Ue as _r, lr as _t, Mt as a, V as ai, ms as an, la as ar, yr as at, it as b, I as bi, Za as bn, He as br, sr as bt, Ct as c, z as ci, ps as cn, ea as cr, mr as ct, gt as d, L as di, os as dn, Xe as dr, br as dt, Z as ei, gs as en, pa as er, Pr as et, yt as f, W as fi, ns as fn, Ke as fr, pr as ft, mt as g, j as gi, as as gn, qe as gr, nr as gt, ft as h, R as hi, ss as hn, Qe as hr, or as ht, At as i, N as ii, fs as in , na as ir, gr as it, Jr as j, f as ji, Ba as jn, Ie as jr, Ns as jt, Xr as k, y as ki, Wa as kn, De as kr, qs as kt, wt as l, _ as li, is as ln, $e as lr, kr as lt, ut as m, B as mi, rs as mn, Ze as mr, cr as mt, Et as n, q as ni, vs as nn, ca as nr, wr as nt, St as o, G as oi, ks as on, ta as or, ur as ot, vt as p, T as pi, ls as pn, Je as pr, ir as pt, Or as q, va as qn, te as qr, Ms as qt, It as r, U as ri, us as rn, oa as rr, hr as rt, Pt as s, H as si, ds as sn, aa as sr, fr as st, Dt as t, Q as ti, ys as tn, ia as tr, Cr as tt, ht as u, F as ui, cs as un, Ye as ur, dr as ut, dt as v, D as vi, $a as vn, Ne as vr, tr as vt, rt as w, P as wi, Va as wn, We as wr, Ys as wt, ct as x, A as xi, Qa as xn, ze as xr, ar as xt, pt as y, E as yi, Ya as yn, Ve as yr, rr as yt, zr as z, n as zi, xa as zn, fe as zr, Ws as zt
};