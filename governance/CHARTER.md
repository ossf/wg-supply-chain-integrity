# OpenSSF Supply Chain Integrity Working Group - Charter

*Last updated: 2026 Q3.*

## 1. Overview

The Supply Chain Integrity Working Group ("SCI WG") is the OpenSSF working group focused on lowering adoption cost for open-source maintainers across the OpenSSF tooling surface. It operates as a **front door and brokering layer**: sponsoring Technical Initiatives (TIs) whose primary value is reducing adoption friction, and routing maintainer needs to the appropriate sibling WG when they fall outside the WG's remit.

## 2. Motivation

OpenSSF has produced a breadth of tools, frameworks, and specifications SLSA, GUAC, Sigstore, Scorecard, OSV, OSPS Baseline, S2C2F, and others, but adoption has been uneven. [ORBIT's Launchpad](https://github.com/ossf/wg-orbit) gives *manufacturers* an on-ramp for adopting this work; there is no equivalent program for the *maintainers* of the open-source projects these tools are mostly built for. Maintainers face overlapping artifacts, unclear sequencing, and no single OpenSSF venue chartered to make adoption easier.

The [OpenSSF Technical Vision](https://github.com/ossf/tac/blob/main/technical-vision.md) commits to a future where "Producers of OSS (of all skill levels) have the ability to proactively and reactively address both existing and emergent security threats," calling for "extremely low-friction, automated tooling to make security processes less onerous, more accurate, and trusted... [made] available at zero cost." The [OSPS Baseline](https://github.com/ossf/security-baseline) is emerging as the unifying metric for what "good" looks like for open-source projects. What is missing is a working group whose explicit mission is to turn that vision and that metric into an adoption path without re-implementing work owned by sibling WGs.

This is the gap the revamped SCI WG proposes to own.

## 3. Mission

> **Make adopting OpenSSF security tooling the easy default for open-source maintainers.**

## 4. Objectives

The WG maintains a measurable, time-bound adoption objective in [`README.md`](../README.md#objectives), reviewed and refreshed without requiring a charter amendment.

## 5. Scope

### 5.1 In scope

1. Maintainer-facing adoption on-ramps and decision aids across the OpenSSF tooling surface.
2. Sponsorship of Technical Initiatives whose primary value proposition is lowering adoption cost for maintainers.
3. Cross-WG brokering: maintaining a current map of "what OpenSSF has, who owns it, where to send a maintainer."
4. Integration patterns and reference implementations that compose OpenSSF tooling end-to-end for a real maintainer workflow.
5. Maintainer research and feedback channels: surveys, interviews, and logs fed back to producing WGs.
6. Tracking maintainer-adoption metrics (e.g., OSPS Baseline coverage among sponsored TIs and showcase projects).

### 5.2 Out of scope

1. Authoring or owning specifications, standards, or metrics that another WG or Technical Initiative already owns.
2. General security-tooling implementation that is not itself an adoption on-ramp.
3. Coordinated vulnerability disclosure processes and policy.
4. Manufacturer-side (as opposed to maintainer-side) adoption programs.
5. Targeted, funded hardening engagements for specific critical projects.
6. Adjudicating between competing technical approaches owned by other WGs.

The following illustrate current ownership of the areas above as of this charter's adoption. They are examples, not an exhaustive or binding list, and do not themselves define scope if OpenSSF's WG structure changes:

- OSPS Baseline authorship: [ORBIT WG](https://github.com/ossf/wg-orbit).
- General security tooling (e.g., Sigstore): sponsored directly by the OpenSSF TAC or another WG/TI.
- Coordinated vulnerability disclosure: [Vulnerability Disclosures WG](https://github.com/ossf/wg-vulnerability-disclosures).
- Manufacturer-side adoption: [ORBIT's Launchpad](https://github.com/ossf/wg-orbit).
- Funded targeted hardening: [Alpha-Omega](https://alpha-omega.dev/).

## 6. Relationships

SCI defers to sibling OpenSSF working groups for ownership of their own remit. Where SCI's maintainer-facing work touches a sibling WG's domain, SCI cites and links that WG's source of truth rather than duplicating it, and coordinates through that WG's chairs. If SCI discovers a gap in a sibling WG's material, it files an issue with that WG before producing its own. The current map of sibling-WG relationships and handoff points, reviewed annually, is maintained in [`README.md`](../README.md#relationships).

## 7. Technical Initiatives

Each TI sponsored by the SCI WG articulates annually how its work lowers adoption friction for some defined maintainer population; the WG offers brokering, research, and cross-TI integration capacity in return. The current roster is maintained in [`README.md`](../README.md#technical-initiatives), not in this charter, so that TI-level changes don't require a charter amendment.

## 8. Sub-project (TI) admission criteria

A proposed Technical Initiative is eligible for SCI WG sponsorship when it demonstrates, at proposal time, both of the following:

1. It materially lowers adoption friction for open-source maintainers of at least one identified ecosystem, language, or build system, with maintainer-side reviewer signoff.
2. It integrates with at least one other OpenSSF-sponsored TI, specification, or recommended practice.

Admission decisions follow §9.2's decision-making rule for TI admission, plus written notice-of-no-objection to sibling WGs whose remit it touches. TIs whose primary value is research, specification authorship, or tool implementation should be directed to the WG whose remit best fits.

## 9. Governance

### 9.1 Co-chairs

The WG is led by at least two co-chairs. Current chairs are listed in [`README.md`](../README.md#chairs).

No more than one-third of co-chairs -- rounded down, with a minimum of one co-chair permitted per company -- may be affiliated with the same company at any time.

**Vacancies.** If a resignation, removal, or other loss of a co-chair would drop the number of co-chairs below the floor above, the remaining co-chairs -- or, once seated, the Steering Committee -- solicit nominations for replacement co-chairs. Selection follows §9.2's decision-making rule for co-chair changes.

### 9.2 Decision-making

- **Default decisions:** lazy consensus on the mailing list (5 business days, no sustained objection).
- **Charter amendments, TI admission, TI sunset, co-chair changes:** during Phase 1 (§9.4), consensus of the co-chairs after a mailing-list comment window (see §13). Once Phase 2 begins, a two-thirds vote of the Steering Committee, excluding recusals, after the same comment window.

### 9.3 Conflicts of interest

Standard Linux Foundation conflict-of-interest disclosure expected from co-chairs. Recusal expected on decisions involving a co-chair's employer's directly competing TI.

### 9.4 Steering Committee

The WG's governing body is established in two phases.

**Phase 1 (current).** The co-chairs govern the WG directly. During this phase, the co-chairs complete a disposition review of every Technical Initiative in the WG's portfolio, confirming for each its current OpenSSF lifecycle stage, an accountable representative, and continued fit with the WG's scope.

Phase 1 ends, and Phase 2 begins, upon the earlier of: (a) completion of the disposition review for every TI in the portfolio, or (b) six months from charter adoption.

**Phase 2 (Steering Committee).** Once triggered, the WG's governing body becomes a Steering Committee composed of:

- The co-chairs (§9.1).
- One seat per Technical Initiative at Incubating or Graduated OpenSSF lifecycle stage, held by that TI's designated representative.
- Two seats representing all Technical Initiatives at Sandbox stage collectively, filled by election under §9.4.1.

Each Steering Committee member holds exactly one vote, regardless of how many roles or seats they might otherwise be eligible for.

No more than one-third of Steering Committee seats -- rounded down, with a minimum of one seat permitted per company -- may be held by people affiliated with the same company at any time. If seating a TI-designated representative, or an election result, would exceed this cap, the affected TI designates an alternate representative, or, for an elected seat, the next-highest vote-getter under §9.4.1 is seated instead.

#### 9.4.1 Sandbox-tier seat elections

The two Sandbox-tier seats are filled by election among nominees put forward by Sandbox-stage Technical Initiatives. Each Sandbox-stage TI may submit one nomination; a nominee need not be that TI's lead or designated representative. Each Sandbox-stage TI casts one vote for up to two nominees; the two nominees with the most votes are elected. Terms are one year, with an election held annually, administered by the co-chairs. Ties are broken by random draw, administered and publicly recorded by the co-chairs.

If a Sandbox-tier seat becomes vacant before its term ends, the seat is offered to the next-highest vote-getter from the most recent election; this may fill at most one vacancy between elections. A further vacancy before the next scheduled election triggers a special election under the same rules, administered by the co-chairs.

## 10. Naming

The WG's broader scope under this charter strains the literal reading of "Supply Chain Integrity." The WG considered renaming (candidates include *"Maintainer Enablement WG"* and *"Producer Enablement WG"*) and chose to preserve the SCI name for now, citing brand continuity and substantive overlap between supply-chain integrity and maintainer-side adoption.

## 11. Intellectual property / licensing

The [OpenSSF Charter](https://charter.openssf.org/) is binding on this WG and takes precedence over anything below. All contributions, regardless of content type, require a Developer Certificate of Origin sign-off. Each Technical Initiative selects its own license per content type, from the options the OpenSSF Charter permits:

- Code: Apache License 2.0 or the MIT License.
- Data: any Community Data License Agreement (CDLA).
- Specifications: the Community Specification License, Version 1.0.
- All other documentation: Creative Commons Attribution 4.0 International.

Trademarks, and any request for a license outside these options, follow Linux Foundation policy.

## 12. Community assets

Current communication channels, meeting times, and meeting notes are maintained in [`README.md`](../README.md).

## 13. Amendments

During Phase 1 (§9.4), this charter may be amended by consensus of the co-chairs after 14 days' public notice on the WG mailing list, with notification to the OpenSSF TAC. Material changes -- mission, scope, the TI admission rule, or changes to Steering Committee composition or seat allocation -- additionally require TAC review.

Once Phase 2 begins, this charter may be amended by a two-thirds vote of the Steering Committee, excluding recusals, after 14 days' public notice on the WG mailing list, and requires OpenSSF TAC approval.

## 14. References

- ORBIT WG Charter - https://github.com/ossf/wg-orbit/blob/main/CHARTER.md
- OpenSSF Technical Vision - https://github.com/ossf/tac/blob/main/technical-vision.md
- OSPS Baseline - https://github.com/ossf/security-baseline
- OpenSSF project/WG template - [`ossf/project-template/README.md`](https://github.com/ossf/project-template/blob/main/README.md)
