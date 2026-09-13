# OpenSSF Supply Chain Integrity Working Group - Charter

*Status: **Proposed v2.0**, Q3 2026. Supersedes the unadopted 2023 draft. Submitted to the OpenSSF TAC for review per the Q2 2026 SCI WG report ([ossf/tac#614](https://github.com/ossf/tac/pull/614)).*

## 1. Overview

The Supply Chain Integrity Working Group ("SCI WG") is the OpenSSF working group focused on lowering adoption cost for open-source maintainers across the OpenSSF tooling surface. It operates as a **front door and brokering layer**: sponsoring Technical Initiatives (TIs) whose primary value is reducing adoption friction, and routing maintainer needs to the appropriate sibling WG when they fall outside our remit.

## 2. Motivation

OpenSSF has produced a breadth of tools, frameworks, and specifications SLSA, GUAC, Sigstore, Scorecard, OSV, OSPS Baseline, S2C2F, and others, but adoption has been uneven. [ORBIT's Launchpad](https://github.com/ossf/wg-orbit) gives *manufacturers* an on-ramp for adopting this work; there is no equivalent program for the *maintainers* of the open-source projects these tools are mostly built for. Maintainers face overlapping artifacts, unclear sequencing, and no single OpenSSF venue chartered to make adoption easier.

The [OpenSSF Technical Vision](https://github.com/ossf/tac/blob/main/technical-vision.md) names "Producer Enablement" as a strategic pillar, and the [OSPS Baseline](https://github.com/ossf/security-baseline) is emerging as the unifying metric for what "good" looks like for open-source projects. What is missing is a working group whose explicit mission is to turn that vision and that metric into an adoption path without re-implementing work owned by sibling WGs.

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

1. Authoring or owning the OSPS Baseline itself - that's the [Best Practices WG / ORBIT WG](https://github.com/ossf/wg-orbit).
2. Authoring or owning security tooling that is not adoption-focused - that's the [Security Tooling WG](https://github.com/ossf/wg-security-tooling) and Sigstore TIs.
3. Coordinated vulnerability disclosure processes and policy - that's the [Vulnerability Disclosures WG](https://github.com/ossf/wg-vulnerability-disclosures).
4. Manufacturer-side adoption - that's [ORBIT's Launchpad](https://github.com/ossf/wg-orbit).
5. Targeted hardening of specific critical projects via paid engagement - that's [Alpha-Omega](https://alpha-omega.dev/).
6. Adjudicating between competing technical approaches owned by other WGs.

## 6. Relationship to existing initiatives

The table below is reviewed annually with sibling-WG chairs. Where SCI publishes maintainer-facing material, it cites and links the owning WG's source of truth; if SCI discovers a gap, it files an issue with the owning WG before producing its own material.

| Initiative | Their remit | Our remit | Handoff line |
|---|---|---|---|
| **Best Practices WG** | Scorecard, BP Badge, general security curriculum, OSPS Baseline authorship | Maintainer-facing per-ecosystem cookbooks and clinic intake | "How do I improve my Scorecard score / what's a generally-secure-development practice?" -> BP; we link and notify BP liaison. |
| **Security Tooling WG** | Curates the tool catalog; owns Sigstore-adjacent infrastructure | Packages and recommends tools in maintainer-ready recipes | Every cookbook is co-reviewed by a Security Tooling liaison; tool gaps surfaced in clinics file issues against their catalog. |
| **Vulnerability Disclosures WG** | Coordinated disclosure norms, OSV schema, CVE program work | Pointers to disclosure / `SECURITY.md` / OSV inside recipes only | Any clinic intake touching a live or anticipated CVE is escalated within 24 hours to their triage contact. |
| **ORBIT WG** | Manufacturer-side adoption (Launchpad); OSPS Baseline stewardship | Maintainer-side adoption; authorship of SCI-domain Baseline controls | Symmetric mirror across the maintainer<->manufacturer line. Quarterly joint session. |
| **Alpha-Omega** | Funded targeted hardening of named critical projects | Long-tail, self-serve, maintainer-led on-ramps | Critical-infrastructure-scale intake routed to A-O; A-O graduates referred to us for ongoing self-serve resources. |
| **AI/ML Security WG, Identity & Access WG, others** | Topical work in their domain | Route maintainer questions in their domain to them; fold their published maintainer-applicable practices into recipes | One row per sibling WG; updated annually with their chairs. |

## 7. Technical Initiatives

Each TI sponsored by the SCI WG articulates annually how its work lowers adoption friction for some defined maintainer population; the WG offers brokering, research, and cross-TI integration capacity in return. The current roster is maintained in [`README.md`](../README.md#technical-initiatives), not in this charter, so that TI-level changes don't require a charter amendment.

## 8. Sub-project (TI) admission criteria

A proposed Technical Initiative is eligible for SCI WG sponsorship when it demonstrates, at proposal time, both of the following:

1. It materially lowers adoption friction for open-source maintainers of at least one identified ecosystem, language, or build system, with maintainer-side reviewer signoff.
2. It integrates with at least one other OpenSSF-sponsored TI, specification, or recommended practice.

Admission requires consensus among the co-chairs (lazy consensus on the WG mailing list, five business days, no sustained objection) and written notice-of-no-objection to sibling WGs whose remit it touches. TIs whose primary value is research, specification authorship, or tool implementation should be directed to the WG whose remit best fits.

## 9. Governance

### 9.1 Co-chairs

The WG is led by at least two co-chairs. Current chairs are listed in [`README.md`](../README.md#chairs).

### 9.2 Decision-making

- **Default decisions:** lazy consensus on the mailing list (5 business days, no sustained objection).
- **Charter amendments, TI admission, TI sunset, co-chair changes:** consensus of the co-chairs after a mailing-list comment window (see Section 13).
- **Co-chair elections:** held annually; process specified in a forthcoming Operating Procedures companion doc.

### 9.3 Conflicts of interest

Standard Linux Foundation conflict-of-interest disclosure expected from co-chairs. Recusal expected on decisions involving a co-chair's employer's directly competing TI.

### 9.4 Future formalization (TODO)

A formal Technical Steering Committee may be added by amendment once the WG has sustained active TI engagement; not blocking on charter adoption.

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

This charter may be amended by consensus of the co-chairs after 14 days' public notice on the WG mailing list, with notification to the OpenSSF TAC. Material changes like mission, scope, TI admission rule, or the introduction of a formal TSC, additionally require TAC review.

## 14. Requested TAC action

The SCI WG requests that the TAC review and approve this charter as the WG's adopted v2.0 charter. The WG separately notes for TAC consideration, on a timeline of the TAC's choosing, that the current OpenSSF project-to-WG topology mixes topical and functional groupings; a deliberate discussion of when each is appropriate would help future WGs orient. This is offered as input, not a request, and does not propose realignment of any current TI.

## 15. References

- Q2 2026 SCI WG TAC report - [ossf/tac#614](https://github.com/ossf/tac/pull/614)
- "Maintainer Experience" issue - [ossf/tac#169](https://github.com/ossf/tac/issues/169)
- ORBIT WG Charter - https://github.com/ossf/wg-orbit/blob/main/CHARTER.md
- GovOps WG proposal - [ossf/tac#588](https://github.com/ossf/tac/issues/588)
- OpenSSF Technical Vision - https://github.com/ossf/tac/blob/main/technical-vision.md
- OSPS Baseline - https://github.com/ossf/security-baseline
- Sandbox WG template - `ossf/tac/process/templates/WG_NAME_sandbox_stage.md`
