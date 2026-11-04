# OpenSSF Supply Chain Integrity Working Group - Charter

*Last updated: 2026 Q4*

## 1. Mission and Scope

- a. **Mission.**

  > **Make it easy for open source maintainers to emit trustworthy supply chain signals, and for consumers to assess and verify them.**

  The Supply Chain Integrity Working Group ("SCI WG") is OpenSSF's maintainer enablement and external engagement front door. It sponsors Technical Initiatives (TIs) that lower the cost of producing and verifying supply chain signals, and routes maintainer needs to the sibling WG that owns them.

- b. **Motivation.** OpenSSF has produced a breadth of tools, frameworks, and specifications SLSA, GUAC, Sigstore, Scorecard, OSV, OSPS Baseline, S2C2F, and others, but adoption has been uneven. [ORBIT's Launchpad](https://github.com/ossf/wg-orbit) gives *manufacturers* an on-ramp for adopting this work; there is no equivalent program for the *maintainers* of the open source projects these tools are mostly built for. Maintainers lack an end-to-end guide to "what do I actually do, in what order, and what do I get" ([2026 Q3 SCI report](https://github.com/ossf/tac/blob/main/TI-reports/2026/2026-Q3-SCI-WG.md)), and no single OpenSSF venue is chartered to make adoption easier.

  The [OpenSSF Technical Vision](https://github.com/ossf/tac/blob/main/technical-vision.md) commits to a future where "Producers of OSS (of all skill levels) have the ability to proactively and reactively address both existing and emergent security threats," calling for "extremely low-friction, automated tooling to make security processes less onerous, more accurate, and trusted... [made] available at zero cost." The [OSPS Baseline](https://github.com/ossf/security-baseline) is emerging as the unifying metric for what "good" looks like for open source projects. What is missing is a working group whose explicit mission is to turn that vision and that metric into an adoption path without re-implementing work owned by sibling WGs.

  This is the gap the revamped SCI WG proposes to own.

- c. **In scope:**

  - i. Maintainer-facing adoption on-ramps and decision aids for supply chain security.
  - ii. Sponsorship of Technical Initiatives whose primary value proposition is lowering adoption cost for maintainers.
  - iii. Cross-WG brokering: maintaining a current map of "what OpenSSF has, who owns it, where to send a maintainer."
  - iv. Integration patterns and reference implementations that compose OpenSSF tooling end-to-end for a real maintainer workflow.
  - v. Maintainer research and feedback channels: surveys, interviews, and logs fed back to producing WGs.
  - vi. Tracking maintainer-adoption metrics (e.g., OSPS Baseline coverage among sponsored TIs and showcase projects).
  - vii. A "what to do next" roadmap that sequences supply chain security practices by stage of the software supply chain.
  - viii. Consumer-side discoverability: making the supply chain signals that sponsored TIs help produce findable and verifiable downstream.
  - ix. A threat matrix comparing how supply chain security tools and practices protect against different attack types.

- d. **Out of scope:**

  - i. Authoring or owning specifications, standards, or metrics that another WG or Technical Initiative already owns.
  - ii. General security-tooling implementation that is not itself an adoption on-ramp.
  - iii. Coordinated vulnerability disclosure processes and policy.
  - iv. Manufacturer-side (as opposed to maintainer-side) adoption programs.
  - v. Targeted, funded hardening engagements for specific critical projects.
  - vi. Adjudicating between competing technical approaches owned by other WGs.

  The following illustrate current ownership of the areas above as of this charter's adoption. They are examples, not an exhaustive or binding list, and do not themselves define scope if OpenSSF's WG structure changes:

  - OSPS Baseline authorship: [ORBIT WG](https://github.com/ossf/wg-orbit).
  - General security tooling (e.g., Sigstore): sponsored directly by the OpenSSF TAC or another WG/TI.
  - Coordinated vulnerability disclosure: [Vulnerability Disclosures WG](https://github.com/ossf/wg-vulnerability-disclosures).
  - Manufacturer-side adoption: [ORBIT Launchpad](https://github.com/ossf/wg-orbit).
  - Funded targeted hardening: [Alpha-Omega](https://alpha-omega.dev/).

- e. **Relationships.** SCI defers to sibling OpenSSF working groups for ownership of their own remit. Where SCI's maintainer-facing work touches a sibling WG's domain, SCI cites and links that WG's source of truth rather than duplicating it, and coordinates through that WG's chairs. If SCI discovers a gap in a sibling WG's material, it files an issue with that WG before producing its own. The current map of sibling-WG relationships and handoff points, reviewed annually, is maintained in [`README.md`](../README.md#relationships).

- f. **Objectives.** The WG maintains adoption objectives in [`README.md`](../README.md#objectives), reviewed and refreshed without requiring a charter amendment.

## 2. Leadership

- a. **Chairs.** The WG is led by at least two chairs. Current chairs are listed in [`README.md`](../README.md#chairs).

  No more than one-third of chairs — rounded down, with a minimum of one chair permitted per company — may be affiliated with the same company at any time.

- b. **Vacancies.** If a resignation, removal, or other loss of a chair would drop the number of chairs below the floor in (a), the remaining chairs solicit nominations for replacement chairs. Selection follows Section 4.b.

- c. **Removal.** A chair may be removed for cause under Section 4.b, with written notice to the chair concerned and to the OpenSSF TAC. Cause includes:

  - i. **Inactivity:** no participation in WG meetings, on the WG mailing list, or in the WG's repositories for three consecutive months.
  - ii. **Unexplained unresponsiveness:** no response to chair business within 30 days of a direct request, without notice of leave or absence.
  - iii. **Code of Conduct violation,** as determined under OpenSSF Code of Conduct processes.

  The chair concerned may appeal the removal to the OpenSSF TAC.

- d. **Transition.** At adoption of this charter, the chairs give written notice to any chair who was inactive under (c.i) in the preceding three months. If that chair does not respond within 30 days of the notice, (c.ii) applies.

- e. **Conflicts of interest.** Standard Linux Foundation conflict-of-interest disclosure expected from chairs. Recusal expected on decisions involving a chair's employer's directly competing TI.

## 3. Technical Initiatives

- a. The SCI WG sponsors Technical Initiatives whose work the WG can route open source maintainers toward; the WG offers brokering, research, and cross-TI integration capacity in return. Sponsorship does not supersede a Technical Initiative's own charter: each sponsored initiative retains authority over its roadmap, maintainers, releases, and implementation decisions. The current roster is maintained in [`README.md`](../README.md#technical-initiatives).

- b. **Admission criteria.** A proposed Technical Initiative is eligible for SCI WG sponsorship when it demonstrates all of the following:

  - i. **Adoption surface.** Its outputs are, or directly support, something an open source maintainer adopts — a practice, specification, or tool the WG can route maintainers toward. A Technical Initiative need not itself be an on-ramp; it must be something an on-ramp can lead to.
  - ii. **Interoperability.** It interoperates with at least two other OpenSSF-sponsored Technical Initiatives, specifications, or recommended practices, evidenced by a working reference workflow, a tested data exchange, a shared attestation chain, or a documented dependency with joint conformance tests. A hyperlink is not evidence.
  - iii. **Accountability.** It names an accountable representative and accepts the sponsorship obligations in (c).

  Admission decisions follow Section 4.b. The WG notifies sibling WGs whose remit the initiative touches, and records any objection. Section 1.d.i restricts what the WG itself authors; it does not restrict what a sponsored Technical Initiative may author.

- c. **Sponsorship obligations.** Each sponsored Technical Initiative:

  - i. Names an accountable representative to the WG, and keeps that designation current.
  - ii. Reports quarterly to the WG for onward reporting to the OpenSSF TAC. A report states the initiative's current status and what it plans next; an empty section or a placeholder is not a report.
  - iii. Publishes annually a statement of how its work lowers adoption friction for a defined maintainer population, and what maintainer-facing documentation exists for it.
  - iv. Accepts maintainer feedback routed to it by the WG.

- d. **Sunset.** For the purposes of this subsection, a Technical Initiative does not meet its obligations in a quarter if it has no current accountable representative (c.i) or did not report to the WG that quarter (c.ii).

  - i. A Technical Initiative that does not meet its obligations for two consecutive quarters is reviewed under Section 4.b.
  - ii. **Transition.** At adoption of this charter, the chairs give written notice to any Technical Initiative that did not meet its obligations in the preceding quarter. For an initiative given notice, the first full quarter after adoption counts as its second consecutive quarter under (i).
  - iii. A review may conclude that the initiative continues under a remediation plan, transfers to another working group, returns to the OpenSSF TAC as unsponsored, or is archived. Sunset does not imply any judgement about the project's health or activity outside the WG.

- e. **Disposition review.** Within six months of adoption of this charter, the chairs complete a disposition review of every Technical Initiative in the WG's portfolio, confirming for each its current OpenSSF lifecycle stage, an accountable representative, and continued fit with the WG's scope.

## 4. Decision-making

- a. **Default decisions:** lazy consensus on the mailing list (5 business days, no sustained objection).
- b. **Charter amendments, TI admission, TI sunset, chair changes, chair removal:** a majority of active chairs, after a mailing-list comment window (see Section 8). An active chair is one not inactive under Section 2.c.i. A chair who is the subject of a decision does not take part in it.
- c. **Escalation:** if a decision cannot be resolved, any chair may refer the matter to the OpenSSF TAC for assistance in reaching a resolution.

## 5. Compliance with Policies

- a. This charter is subject to the [OpenSSF Charter](https://charter.openssf.org/) and any rules or policies established for all OpenSSF WGs.
- b. WG participants are expected to conduct themselves professionally, subject to the Contributor Covenant Code of Conduct 2.0. The chairs may adopt a different code of conduct for the WG, subject to OpenSSF TAC approval.
- c. Participation is open to any individual or organization meeting this charter's requirements, on a non-discriminatory basis; the WG does not exclude participants based on competitive interests. All WG activities are subject to the Linux Foundation's Antitrust Policy.
- d. The WG operates transparently: discussions, proposals, timelines, decisions, and status are open and visible to all. Suspected violations are reported to the OpenSSF TAC.

## 6. Community Assets

- a. The Linux Foundation holds title to all trade or service marks used by the WG, whether based on common law or registered rights. Use of WG trademarks follows Linux Foundation trademark policy.
- b. The Linux Foundation or the WG owns or controls the repositories, social media accounts, and domain name registrations created for use by the WG community.
- c. The Linux Foundation is not expected or required to take any action on behalf of the WG inconsistent with its own policies, tax-exempt status, or purpose.
- d. Current communication channels, meeting times, and meeting notes are maintained in [`README.md`](../README.md).

## 7. Intellectual Property Policy

- a. Contributors retain copyright in their own contributions; no contributor is required to assign copyright to the WG.

- b. All contributions, regardless of content type, require a Developer Certificate of Origin sign-off. Each Technical Initiative selects its own license per content type, from the options the [OpenSSF Charter](https://charter.openssf.org/) permits:

  - i. Code: Apache License 2.0 or the MIT License.
  - ii. Data: any Community Data License Agreement (CDLA).
  - iii. Specifications: the Community Specification License, Version 1.0.
  - iv. All other documentation: Creative Commons Attribution 4.0 International.

- c. Trademarks, and any request for a license outside these options, follow Linux Foundation policy.

- d. Contributed files should carry license information, such as an SPDX short-form identifier.

## 8. Amendments

- a. This charter may be amended by the chairs under Section 4.b after 14 days' public notice on the WG mailing list. Every amendment requires OpenSSF TAC approval.
