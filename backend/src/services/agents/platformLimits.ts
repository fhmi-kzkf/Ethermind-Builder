/**
 * What the generated apps cannot do. Written down once so the planner never promises it and the assistant never
 * claims it: the stack is a plain Express + SQLite + browser app whose data is text, numbers, dates and choices.
 */
export const PLATFORM_LIMITS = `What the generated app CANNOT do (there is no code, library or service for it):
- Upload, store or show files: no photo or image upload, no document or receipt scan, no file attachments.
- Record or play audio, and voice commands.
- Send email, SMS or WhatsApp messages, or push notifications.
- Take online payments, or connect to payment gateways, bank APIs, marketplaces or other external services.
- Work offline, run as a mobile app, or print to a thermal printer.
A field that holds a link (a String named like "buktiUrl") can store a web address the user types or pastes. That is a link in a text field, not an upload.`;
