# Unresolved legal and business inputs

Nothing below has been invented. Legal and privacy items are tracked in detail in `docs/legal/` (private) and as `[[FOUNDER INPUT]]` / `[[LEGAL REVIEW]]` markers in the unpublished drafts under `src/content/legal/`. Run `npm run launch-check`.

## Launch blockers

1. **Contact email: set to `mail@anantasilicon.com`** in `src/config/site.ts`. Not verified here: that the domain is owned and registered to the founders, and that this mailbox exists and receives mail. Send a test message before launch. (If the value is ever set to an `.invalid` address, the "DEV PLACEHOLDER" notices return automatically.)
2. **Legal entity name and registered address** (`legalEntity`). The footer omits the line, and the legal drafts keep a placeholder, until it is set. No entity details were fabricated.
3. **Legal review of the privacy notice and terms** (`src/content/legal/`). Unpublished drafts based on audited site behavior; see `docs/legal/legal-review-questions.md`.
4. **Hosting provider** (`hosting.provider`), and confirmation of what it logs.
5. **Privacy-request handling:** retention period, deletion process and timeline, request email if different from the contact address, applicable law/jurisdiction.

## Business decisions

6. **Scheduling URL** (`schedulingUrl`, optional). Leave empty for email only. Note: embedding a scheduler loads third-party content and may need cookie/consent handling; a plain outbound link is simpler.
7. **Interview framing.** Copy says "a short research conversation" and "We are not asking for design data." Founders must be able to honor both. "30-minute" and "not a sales call" were deliberately left out.
8. **Positioning and claims.** Public positioning: "Ananta is building tools to help design teams resynchronize RTL with the netlist after engineering change orders." Audience: RTL, physical design and other design engineering teams (not verification teams). The problem is stated as: late changes land in the netlist, not all make it back to RTL, and finding and repairing those is manual work. The site describes the problem, the audience and the intended value only. It does not describe the mechanism, workflow, inputs/outputs or integrations, and claims no results, time savings, autonomous repair or guaranteed correctness. It says "Early stage. Not yet validated on production designs." Keep that line accurate as validation progresses, and keep any future copy within the same boundary. **Confirm "Physical design" and "Design engineering" are the audience labels you want.**
9. **Founder facts.** The site states: Austin, Texas; two engineering students at The University of Texas at Austin. Confirm the wording. Decide whether to add names, photos or bios (none were invented), and whether the university's name needs any permission or a disclaimer that Ananta is an independent company and not a university project. That is a policy question I can't answer.
10. **Name and mark.** "Ananta" and the logo mark have had no trademark or domain search. Do that before investing in the brand.
11. **Domain.** None purchased. The site has no domain-specific assumptions; see `deployment.md`.
12. **Accessibility sign-off.** Manual screen-reader and real-device testing are not done.
