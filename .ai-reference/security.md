# Security: brenosm-platform

## Security Posture
The repository has a low attack surface because it does not accept user data into a backend, store credentials, or expose mutation endpoints.

## Observed Protections
- No `dangerouslySetInnerHTML`.
- No authentication or session state.
- No database credentials.
- No public API routes.
- External links opened in a new tab include `rel="noreferrer"`.
- Asset rendering is code-controlled and local to the repository where possible.

## Risk Areas
- Remote thumbnail previews depend on a third-party service and should not be treated as trusted application data.
- Placeholder social handles are not the same thing as full identity URLs.
- The contact form only prepares a `mailto:` URL; there is no server-side persistence or validation boundary.
- `landing.render()` executes trusted internal code, so registry entries must remain source-controlled.

## What To Avoid
- Injecting raw HTML into the UI.
- Adding hidden network requests in components without a documented reason.
- Introducing user-generated content without sanitization and a clear trust boundary.
- Opening external links in new tabs without `rel` attributes.

## Future Controls If The Project Grows
- Add a CSP and response headers if the site starts serving more dynamic surface area.
- Validate and sanitize any form payloads before persistence.
- Add rate limiting and abuse controls if a contact API is introduced.
