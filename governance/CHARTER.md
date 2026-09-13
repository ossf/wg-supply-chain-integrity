# OpenSSF Supply Chain Integrity Working Group - Charter

*Status: **Proposed v2.0**, Q3 2026. Supersedes the unadopted 2023 draft. Submitted to the OpenSSF TAC for review per the Q2 2026 SCI WG report ([ossf/tac#614](https://github.com/ossf/tac/pull/614)).*

## 1. Overview

The Supply Chain Integrity Working Group ("SCI WG") is the OpenSSF working group focused on lowering adoption cost for open-source maintainers across the OpenSSF tooling surface. It operates as a **front door and brokering layer**: sponsoring Technical Initiatives (TIs) whose primary value is reducing adoption friction, and routing maintainer needs to the appropriate sibling WG when they fall outside our remit.

## 2. Motivation

OpenSSF has produced a breadth of tools, frameworks, and specifications SLSA, GUAC, Sigstore, Scorecard, OSV, OSPS Baseline, S2C2F, and others, but adoption has been uneven. [ORBIT's Launchpad](https://github.com/ossf/wg-orbit) gives *manufacturers* an on-ramp for adopting this work; there is no equivalent program for the *maintainers* of the open-source projects these tools are mostly built for. Maintainers face overlapping artifacts, unclear sequencing, and no single OpenSSF venue chartered to make adoption easier.

The [OpenSSF Technical Vision](https://github.com/ossf/tac/blob/main/technical-vision.md) commits to a future where "Producers of OSS (of all skill levels) have the ability to proactively and reactively address both existing and emergent security threats," calling for "extremely low-friction, automated tooling to make security processes less onerous, more accurate, and trusted... [made] available at zero cost." The [OSPS Baseline](https://github.com/ossf/security-baseline) is emerging as the unifying metric for what "good" looks like for open-source projects. What is missing is a working group whose explicit mission is to turn that vision and that metric into an adoption path without re-implementing work owned by sibling WGs.

This is the gap the revamped SCI WG proposes to own, in line with the option named in the Q2 2026 SCI WG TAC report (PR #614, "Refocus the WG on adoption").

## 3. Mission

> **Make adopting OpenSSF security tooling the easy default for open-source maintainers.**

## 4. Measurable Objective

Within 12 months of charter adoption, every actively-maintained OpenSSF-recommended security practice has a documented, signposted, maintainer-tested adoption path that begins with *"I'm an open-source maintainer, where do I start?"* and ends with a measurable artifact (e.g., OSPS Baseline score, SLSA level, signed release). The SCI WG owns the on-ramp and the routing; sibling WGs continue to own the underlying practices.

## 5. Scope

### 5.1 In scope

1. Maintainer-facing adoption on-ramps and decision aids across the OpenSSF tooling surface.
2. Sponsorship of Technical Initiatives whose primary value proposition is lowering adoption cost for maintainers.
3. Cross-WG brokering: maintaining a current map of "what OpenSSF has, who owns it, where to send a maintainer."
4. Integration patterns and reference implementations that compose OpenSSF tooling end-to-end for a real maintainer workflow.
5. Maintainer research and feedback channels: surveys, interviews, and logs fed back to producing WGs.
6. Tracking maintainer-adoption metrics (e.g., OSPS Baseline coverage among sponsored TIs and showcase projects).

### 5.2 Out of scope

1. Authoring or owning the OSPS Baseline itself - that's [ORBIT WG](https://github.com/ossf/wg-orbit).
2. Authoring or owning security tooling that is not adoption-focused - ownership sits with each tool's sponsoring WG or Technical Initiative (e.g., Sigstore is sponsored directly by the OpenSSF TAC); SCI does not claim general tooling development as in scope.
3. Coordinated vulnerability disclosure processes and policy - that's the [Vulnerability Disclosures WG](https://github.com/ossf/wg-vulnerability-disclosures).
4. Manufacturer-side adoption - that's [ORBIT's Launchpad](https://github.com/ossf/wg-orbit).
5. Targeted hardening of specific critical projects via paid engagement - that's [Alpha-Omega](https://alpha-omega.dev/).
6. Adjudicating between competing technical approaches owned by other WGs.

## 6. Relationship to existing initiatives

The table below is reviewed annually with sibling-WG chairs. Where SCI publishes maintainer-facing material, it cites and links the owning WG's source of truth; if SCI discovers a gap, it files an issue with the owning WG before producing its own material.

| Initiative | Their remit | Our remit | Handoff line |
|---|---|---|---|
| **Best Practices WG** | Scorecard, BP Badge, general security curriculum, OSPS Baseline authorship | Maintainer-facing per-ecosystem cookbooks and clinic intake | "How do I improve my Scorecard score / what's a generally-secure-development practice?" -> BP; we link and notify BP liaison. |
| **Vulnerability Disclosures WG** | Coordinated disclosure norms, OSV schema, CVE program work | Pointers to disclosure / `SECURITY.md` / OSV inside recipes only | Any clinic intake touching a live or anticipated CVE is escalated within 24 hours to their triage contact. |
| **ORBIT WG** | Manufacturer-side adoption (Launchpad); OSPS Baseline authorship and stewardship | Maintainer-side adoption; feedback into Baseline control drafting via ORBIT's process | Symmetric mirror across the maintainer<->manufacturer line. Quarterly joint session. |
| **Alpha-Omega** | Funded targeted hardening of named critical projects | Long-tail, self-serve, maintainer-led on-ramps | Critical-infrastructure-scale intake routed to A-O; A-O graduates referred to us for ongoing self-serve resources. |
| **AI/ML Security WG, others** | Topical work in their domain | Route maintainer questions in their domain to them; fold their published maintainer-applicable practices into recipes | One row per sibling WG; updated annually with their chairs. |

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

### 9.2 Decision-making

- **Default decisions:** lazy consensus on the mailing list (5 business days, no sustained objection).
- **Charter amendments, TI admission, TI sunset, co-chair changes:** during Phase 1 (§9.4), consensus of the co-chairs after a mailing-list comment window (see Section 13). Once Phase 2 begins, a two-thirds vote of the Steering Committee, excluding recusals, after the same comment window.
- **Co-chair elections:** held annually; process specified in a forthcoming Operating Procedures companion doc.

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

#### 9.4.1 Sandbox-tier seat elections

The two Sandbox-tier seats are filled by election among nominees put forward by Sandbox-stage Technical Initiatives. Each Sandbox-stage TI may submit one nomination; a nominee need not be that TI's lead or designated representative. Each Sandbox-stage TI casts one vote for up to two nominees; the two nominees with the most votes are elected. Terms are one year, with an election held annually, administered by the co-chairs. Ties are broken by random draw, administered and publicly recorded by the co-chairs.

## 10. Naming

The WG's broader scope under this charter strains the literal reading of "Supply Chain Integrity." We considered renaming (candidates include *"Maintainer Enablement WG"* and *"Producer Enablement WG"*) and chose to preserve the SCI name for now, citing brand continuity and substantive overlap between supply-chain integrity and maintainer-side adoption. We commit to revisiting within 12 months of charter adoption.

## 11. Intellectual property / licensing

- Code: Apache License 2.0 with the Developer Certificate of Origin.
- Documentation: Creative Commons Attribution 4.0.
- Data: CDLA-Permissive 2.0.
- Trademarks per Linux Foundation policy.
- Alternative licenses require approval per Linux Foundation Governing Board policy.

## 12. Community assets

- Repository: https://github.com/ossf/wg-supply-chain-integrity
- Mailing list: https://lists.openssf.org/g/openssf-supply-chain-integrity
- Slack: `#wg_supply_chain_integrity` and the maintainer-facing `#maintainers` on the OpenSSF Slack
- Public calendar: see [README](../README.md#meetings-times)
- Meeting notes: [Google Drive](http://ssci.io/sci-notes)

## 13. Amendments

During Phase 1 (§9.4), this charter may be amended by consensus of the co-chairs after 14 days' public notice on the WG mailing list, with notification to the OpenSSF TAC. Material changes -- mission, scope, the TI admission rule, or changes to Steering Committee composition or seat allocation -- additionally require TAC review.

Once Phase 2 begins, this charter may be amended by a two-thirds vote of the Steering Committee, excluding recusals, after 14 days' public notice on the WG mailing list, and requires OpenSSF TAC approval.

## 14. Requested TAC action

The SCI WG requests that the TAC review and approve this charter as the WG's adopted v2.0 charter. The WG separately notes for TAC consideration, on a timeline of the TAC's choosing, that the current OpenSSF project-to-WG topology mixes topical and functional groupings; a deliberate discussion of when each is appropriate would help future WGs orient. This is offered as input, not a request, and does not propose realignment of any current TI.

## 15. References

- Q2 2026 SCI WG TAC report - [ossf/tac#614](https://github.com/ossf/tac/pull/614)
- "Maintainer Experience" issue - [ossf/tac#169](https://github.com/ossf/tac/issues/169)
- ORBIT WG Charter - https://github.com/ossf/wg-orbit/blob/main/CHARTER.md
- GovOps WG proposal - [ossf/tac#588](https://github.com/ossf/tac/issues/588)
- OpenSSF Technical Vision - https://github.com/ossf/tac/blob/main/technical-vision.md
- OSPS Baseline - https://github.com/ossf/security-baseline
- OpenSSF project/WG template - [`ossf/project-template/README.md`](https://github.com/ossf/project-template/blob/main/README.md)
