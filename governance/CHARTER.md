# OpenSSF Supply Chain Integrity Working Group - Charter

*Last updated: 2026 Q3*

## 1. Mission and Scope

- a. **Mission.**

  > **Make adopting OpenSSF security tooling the easy default for open source maintainers.**

  The Supply Chain Integrity Working Group ("SCI WG") is the OpenSSF working group focused on lowering adoption cost for open source maintainers across the OpenSSF tooling surface. It operates as a **front door and brokering layer**: sponsoring Technical Initiatives (TIs) whose primary value is reducing adoption friction, and routing maintainer needs to the appropriate sibling WG when they fall outside the WG's remit.

- b. **Motivation.** OpenSSF has produced a breadth of tools, frameworks, and specifications SLSA, GUAC, Sigstore, Scorecard, OSV, OSPS Baseline, S2C2F, and others, but adoption has been uneven. [ORBIT's Launchpad](https://github.com/ossf/wg-orbit) gives *manufacturers* an on-ramp for adopting this work; there is no equivalent program for the *maintainers* of the open source projects these tools are mostly built for. Maintainers face overlapping artifacts, unclear sequencing, and no single OpenSSF venue chartered to make adoption easier.

  The [OpenSSF Technical Vision](https://github.com/ossf/tac/blob/main/technical-vision.md) commits to a future where "Producers of OSS (of all skill levels) have the ability to proactively and reactively address both existing and emergent security threats," calling for "extremely low-friction, automated tooling to make security processes less onerous, more accurate, and trusted... [made] available at zero cost." The [OSPS Baseline](https://github.com/ossf/security-baseline) is emerging as the unifying metric for what "good" looks like for open source projects. What is missing is a working group whose explicit mission is to turn that vision and that metric into an adoption path without re-implementing work owned by sibling WGs.

  This is the gap the revamped SCI WG proposes to own.

- c. **In scope:**

  - i. Maintainer-facing adoption on-ramps and decision aids across the OpenSSF tooling surface.
  - ii. Sponsorship of Technical Initiatives whose primary value proposition is lowering adoption cost for maintainers.
  - iii. Cross-WG brokering: maintaining a current map of "what OpenSSF has, who owns it, where to send a maintainer."
  - iv. Integration patterns and reference implementations that compose OpenSSF tooling end-to-end for a real maintainer workflow.
  - v. Maintainer research and feedback channels: surveys, interviews, and logs fed back to producing WGs.
  - vi. Tracking maintainer-adoption metrics (e.g., OSPS Baseline coverage among sponsored TIs and showcase projects).

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

- b. **Vacancies.** If a resignation, removal, or other loss of a chair would drop the number of chairs below the floor in (a), the remaining chairs — or, once seated, the Steering Committee — solicit nominations for replacement chairs. Selection follows §4(b)'s decision-making rule for chair changes.

- c. **Conflicts of interest.** Standard Linux Foundation conflict-of-interest disclosure expected from chairs. Recusal expected on decisions involving a chair's employer's directly competing TI.

- d. **Phases and composition.** The WG's governing body is established in two phases.

  **Phase 1 (current).** The chairs govern the WG directly. During this phase, the chairs complete a disposition review of every Technical Initiative in the WG's portfolio, confirming for each its current OpenSSF lifecycle stage, an accountable representative, and continued fit with the WG's scope.

  Phase 1 ends, and Phase 2 begins, upon the earlier of: (i) completion of the disposition review for every TI in the portfolio, or (ii) six months from charter adoption.

  **Phase 2 (Steering Committee).** Once triggered, the WG's governing body becomes a Steering Committee composed of:

  - i. The chairs (§2(a)).
  - ii. One seat per Technical Initiative at Incubating or Graduated OpenSSF lifecycle stage, held by that TI's designated representative.
  - iii. Two seats representing all Technical Initiatives at Sandbox stage collectively, filled by election under §2(e).

  Each Steering Committee member holds exactly one vote, regardless of how many roles or seats they might otherwise be eligible for.

  No more than one-third of Steering Committee seats — rounded down, with a minimum of one seat permitted per company — may be held by people affiliated with the same company at any time. If seating a TI-designated representative, or an election result, would exceed this cap, the affected TI designates an alternate representative, or, for an elected seat, the next-highest vote-getter under §2(e) is seated instead.

- e. **Sandbox-tier seat elections.** The two Sandbox-tier seats are filled by election among nominees put forward by Sandbox-stage Technical Initiatives. Each Sandbox-stage TI may submit one nomination; a nominee need not be that TI's lead or designated representative. Each Sandbox-stage TI casts one vote for up to two nominees; the two nominees with the most votes are elected. Terms are one year, with an election held annually, administered by the chairs. Ties are broken by random draw, administered and publicly recorded by the chairs.

  If a Sandbox-tier seat becomes vacant before its term ends, the seat is offered to the next-highest vote-getter from the most recent election; this may fill at most one vacancy between elections. A further vacancy before the next scheduled election triggers a special election under the same rules, administered by the chairs.

## 3. Technical Initiatives

- a. Each TI sponsored by the SCI WG articulates annually how its work lowers adoption friction for some defined maintainer population; the WG offers brokering, research, and cross-TI integration capacity in return. The current roster is maintained in [`README.md`](../README.md#technical-initiatives).

- b. **Admission criteria.** A proposed Technical Initiative is eligible for SCI WG sponsorship when it demonstrates, at proposal time, both of the following:

  - i. It materially lowers adoption friction for open source maintainers of at least one identified ecosystem, language, or build system, with maintainer-side reviewer signoff.
  - ii. It integrates with at least one other OpenSSF-sponsored TI, specification, or recommended practice.

  Admission decisions follow §4(b)'s decision-making rule for TI admission, plus written notice-of-no-objection to sibling WGs whose remit it touches. TIs whose primary value is research, specification authorship, or tool implementation should be directed to the WG whose remit best fits.

## 4. SC Voting

- a. **Default decisions:** lazy consensus on the mailing list (5 business days, no sustained objection).
- b. **Charter amendments, TI admission, TI sunset, chair changes:** during Phase 1 (§2(d)), consensus of the chairs after a mailing-list comment window (see §8). Once Phase 2 begins, a two-thirds vote of the Steering Committee, excluding recusals, after the same comment window.
- c. **Quorum:** once the Steering Committee is seated (Phase 2), a vote requires at least fifty percent of voting members to be present.
- d. **Escalation:** if a vote cannot be resolved, any chair, or once seated any Steering Committee member, may refer the matter to the OpenSSF TAC for assistance in reaching a resolution.

## 5. Compliance with Policies

- a. This charter is subject to the [OpenSSF Charter](https://charter.openssf.org/) and any rules or policies established for all OpenSSF WGs.
- b. WG participants are expected to conduct themselves professionally, subject to the Contributor Covenant Code of Conduct 2.0. The chairs, or once seated the Steering Committee, may adopt a different code of conduct for the WG, subject to OpenSSF TAC approval.
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

- a. During Phase 1 (§2(d)), this charter may be amended by consensus of the chairs after 14 days' public notice on the WG mailing list, with notification to the OpenSSF TAC. Material changes — mission, scope, the TI admission rule, or changes to Steering Committee composition or seat allocation — additionally require TAC review.

- b. Once Phase 2 begins, this charter may be amended by a two-thirds vote of the Steering Committee, excluding recusals, after 14 days' public notice on the WG mailing list, and requires OpenSSF TAC approval.
