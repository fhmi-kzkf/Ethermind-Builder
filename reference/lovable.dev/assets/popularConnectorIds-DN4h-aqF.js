try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            o = new e.Error().stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "ebb514c9-bd2e-4094-986d-c5e1af69d79f", e._sentryDebugIdIdentifier = "sentry-dbid-ebb514c9-bd2e-4094-986d-c5e1af69d79f")
    })()
} catch {}
var a = ["google_mail", "slack", "google_maps", "google_drive", "firecrawl", "google_search_console", "google_sheets", "stripe", "resend", "google_calendar", "notion", "twilio", "paddle", "elevenlabs", "telegram", "google_docs", "brevo", "klaviyo", "airtable", "microsoft_outlook", "github", "hubspot", "google_slides", "microsoft_excel", "microsoft_onedrive", "perplexity", "wordpress", "aikido", "linear", "microsoft_teams", "microsoft_word", "inngest", "logo_dev", "apify", "tally", "linkedin", "mapbox", "x", "klipy", "fireflies", "discord", "gong", "microsoft_powerpoint", "asana", "semrush", "aws_athena", "azure_resource", "azure_graph", "google_cloud_platform", "twitch", "granola", "algolia", "bigquery", "contentful", "mailgun", "beehiiv", "bing_search_console", "microsoft_onenote", "storyblok", "databricks", "looker", "metabase", "omni", "neon", "ashby", "aws_s3", "firebase_messaging", "motherduck", "qlik_cloud", "zendesk"],
    s = new Map(a.map((e, o) => [e, o]));
export {
    s as n, a as t
};