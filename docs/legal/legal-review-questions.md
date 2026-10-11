# Questions for counsel, and provisions deliberately left out

Internal. These are questions, not conclusions. The drafts assert no legal rights, no compliance with any named law, and no security or deletion guarantees.

## A. Which laws apply? (jurisdiction questions)

1. **Texas.** Does the Texas Data Privacy and Security Act apply to Ananta? We understand it has an exemption for small businesses as defined by the U.S. Small Business Administration, with some obligations still applying to them; counsel should confirm whether Ananta qualifies and what, if anything, then still applies.
2. **California.** Do CCPA/CPRA thresholds apply? Separately, is a privacy policy required by California's online privacy provisions for a site like this one, which collects nothing through the site itself but receives email?
3. **EU / UK.** If the site is open to visitors in the EU or UK, do GDPR / UK GDPR apply (targeting or monitoring), and would anything extra be needed (legal basis wording, a representative, transfer language, complaint rights)? Or should the site avoid inviting those visitors?
4. **Cookie/consent rules (ePrivacy and similar).** If no cookies or similar technologies are used on the live site, is any consent mechanism needed in the intended markets? (Our assessment is "no", conditional on live-site verification.)
5. **Other U.S. states** with consumer privacy statutes: any applicable to a business of this size and activity?
6. **Proactive outreach.** If the founders email engineers to request interviews, which rules govern that outreach (e.g. CAN-SPAM, LinkedIn or platform terms, state law)? This is separate from the website and not covered by the drafts.
7. **Cross-border processing.** Is the "processed in the United States and other countries" wording adequate given Cloudflare's stated storage and access locations?
8. **Children.** Nothing on the site is directed at children. Is a statement wanted? (Not included in the drafts.)

## B. Provisions deliberately **not** included, and why

None of the following is in the drafts. Each is described so the founders can decide, with counsel, whether adding it serves a real purpose.

| Provision | What it would do | Why left out now | Recommendation |
|---|---|---|---|
| **Governing law / venue** | Picks whose law and which courts resolve a dispute | A choice with real consequences for the founders and visitors; should be a deliberate decision | Counsel to advise; add only if wanted |
| **Arbitration clause** | Sends disputes to private arbitration instead of court | Unusual and heavy for an informational website; hard to justify without a transaction | Leave out unless counsel recommends |
| **Class-action waiver** | Bars group claims | Meaningful only alongside arbitration or a commercial relationship; can face enforceability limits | Leave out |
| **Indemnity** | Makes the visitor cover our costs from their misuse | Inappropriate for passive browsing; can read as hostile to prospective partners | Leave out |
| **Contractual assent ("by using this site you agree")** | Tries to bind visitors to the terms | Passive "browsewrap" assent is weak and the drafts rely on none. No banner or checkbox is added | Counsel to advise; the terms currently only describe expectations |
| **Limitation of liability caps, warranty disclaimer specifics** | Limits our exposure | A basic "as is" disclaimer is drafted; detailed caps vary by jurisdiction and need legal wording | Included minimally and marked for review |
| **Copyright takedown (DMCA agent)** | Safe-harbor process for user-posted content | The site hosts no user content | Leave out |
| **Export-control, sanctions language** | Allocates trade-compliance risk | Relevant to products and technical data, not to this informational site | Revisit if technical material is ever shared |
| **Trademark claims / ™ ® marks** | Asserts rights in the name or logo | No search or registration has been done. The drafts claim ownership only of "material" and flag it | Do a trademark and domain search first |
| **NDA / confidentiality for submissions** | Would promise confidentiality | We explicitly do **not** want browsing or unsolicited email to create an NDA | The terms say the opposite and ask people not to send confidential material |
| **Statements about selling, sharing, ad targeting, AI training** | Disclosures some laws require or expect | Must reflect actual practice; none decided. Absence is **not** a claim that we never do these | Founders decide practice; counsel decides wording |

## C. Items flagged in the drafts

Every `[[LEGAL REVIEW: …]]` marker in `privacy.md` and `terms.md` is a question for counsel. `npm run launch-check` lists them. Highlights: statements about sale/sharing/AI training; whether a consent interface is needed; which jurisdictions' rights to describe; international transfer wording; security-research and automated-access language; the confidentiality wording; the university-name disclaimer; the warranty and liability wording.

## D. Founder-specific points outside privacy

- **University policies.** Do any University of Texas at Austin policies (student ventures, intellectual property, use of the university's name or facilities) affect the company or this website? The site currently says the founders are engineering students at the university and describes nothing else about the relationship.
- **Founder-to-company IP.** If there is no entity yet, who owns the site content, the name and the logo?
- **Statements about the product.** The site describes early-stage intended value only and says it is not validated on production designs. Counsel should confirm that framing is acceptable for outreach.
