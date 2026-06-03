# OpenSSF Supply Chain Integrity Working Group — Charter

*Status: **Proposed v2.0**, Q3 2026. Supersedes the unadopted 2023 draft. Submitted to the OpenSSF TAC for review per the Q2 2026 SCI WG report ([ossf/tac#614](https://github.com/ossf/tac/pull/614)). On adoption, this document replaces all prior charter drafts.*

## 1. Overview

The Supply Chain Integrity Working Group ("SCI WG") is the OpenSSF working group focused on lowering the cost, complexity, and cognitive load of adopting OpenSSF security tooling for open-source maintainers. It operates as a **front door and brokering layer** between maintainers and the broader OpenSSF technical surface — sponsoring Technical Initiatives (TIs) whose primary value is reducing adoption friction, and routing maintainer needs to the appropriate sibling WG when they fall outside our remit.

Detailed program-level design — the maintainer journey, year-one deliverables, success metrics, sibling-WG handoff lines — is maintained in the companion document [`MAINTAINER-ENABLEMENT.md`](../MAINTAINER-ENABLEMENT.md) and reviewed annually by the co-chairs.

## 2. Motivation

OpenSSF has produced an impressive surface area of tools, frameworks, and specifications — SLSA, GUAC, Sigstore, Scorecard, OSV, OSPS Baseline, S2C2F, and many more. But adoption by the maintainers these tools are built for remains uneven. Maintainers face a fragmented landscape: dozens of overlapping artifacts, unclear sequencing, no shared on-ramp, and no single OpenSSF venue chartered to make adoption easier.

The [OpenSSF Technical Vision](https://github.com/ossf/tac/blob/main/technical-vision.md) names "Producer Enablement" as a strategic pillar. The [OSPS Baseline](https://github.com/ossf/security-baseline) is emerging as the unifying metric for what "good" looks like for open-source projects. What is missing is a working group whose explicit mission is to convert that vision and that metric into a low-friction adoption path — and to do so without re-implementing work owned by sibling WGs.

This is the gap the revamped SCI WG proposes to own. The shift is in line with the option named in the Q2 2026 SCI WG TAC report (PR #614, "Refocus the WG on adoption").

## 3. Mission

> **Make adopting OpenSSF security tooling the easy default for open-source maintainers.**

## 4. Measurable Objective

Within 12 months of charter adoption, every actively-maintained OpenSSF-recommended security practice has a documented, signposted, maintainer-tested adoption path that begins with *"I'm an open-source maintainer — where do I start?"* and ends with a measurable artifact (e.g., OSPS Baseline score, SLSA level, signed release). The SCI WG owns the on-ramp and the routing; sibling WGs continue to own the underlying practices.

## 5. Scope

### 5.1 In scope

1. Maintainer-facing adoption on-ramps and decision aids across the OpenSSF tooling surface.
2. Sponsorship of Technical Initiatives whose primary value proposition is lowering adoption cost for maintainers.
3. Cross-WG brokering: maintaining a current map of "what OpenSSF has, who owns it, where to send a maintainer."
4. Integration patterns and reference implementations that compose OpenSSF tooling end-to-end for a real maintainer workflow.
5. Maintainer research and feedback channels — surveys, interviews, friction logs — fed back to producing WGs.
6. Tracking maintainer-adoption metrics (e.g., OSPS Baseline coverage among sponsored TIs and showcase projects).

### 5.2 Out of scope

1. Authoring or owning the OSPS Baseline itself — that's the [Best Practices WG / ORBIT WG](https://github.com/ossf/wg-orbit).
2. Authoring or owning security tooling that is not adoption-focused — that's the [Security Tooling WG](https://github.com/ossf/wg-security-tooling) and Sigstore TIs.
3. Coordinated vulnerability disclosure processes and policy — that's the [Vulnerability Disclosures WG](https://github.com/ossf/wg-vulnerability-disclosures).
4. End-user / consumer enablement — that's [ORBIT (Launchpad)](https://github.com/ossf/wg-orbit).
5. Targeted hardening of specific critical projects via paid engagement — that's [Alpha-Omega](https://alpha-omega.dev/).
6. Foundation-level policy, legal, or comms work.
7. Acting as an arbiter between competing technical approaches owned by other WGs — we route, we do not adjudicate.

## 6. Relationship to existing initiatives

The table below is the contract. It is reviewed annually with sibling-WG chairs.

| Initiative | Their remit | Our remit | Handoff line |
|---|---|---|---|
| **Best Practices WG** | Scorecard, BP Badge, general security curriculum, OSPS Baseline authorship | Maintainer-facing per-ecosystem cookbooks and clinic intake | "How do I improve my Scorecard score / what's a generally-secure-development practice?" → BP; we link and notify BP liaison. |
| **Security Tooling WG** | Curates the tool catalog; owns Sigstore-adjacent infrastructure | Packages and recommends tools in maintainer-ready recipes | Every cookbook is co-reviewed by a Security Tooling liaison; tool gaps surfaced in clinics file issues against their catalog. |
| **Vulnerability Disclosures WG** | Coordinated disclosure norms, OSV schema, CVE program work | Pointers to disclosure / `SECURITY.md` / OSV inside recipes only | Any clinic intake touching a live or anticipated CVE is escalated within 24 hours to their triage contact. |
| **ORBIT WG** | Consumer-side adoption (Launchpad); OSPS Baseline stewardship | Producer / maintainer-side adoption; authorship of SCI-domain Baseline controls | Symmetric mirror across the producer↔consumer line. Quarterly joint session. |
| **Alpha-Omega** | Funded targeted hardening of named critical projects | Long-tail, self-serve, maintainer-led on-ramps | Critical-infrastructure-scale intake routed to A-O; A-O graduates referred to us for ongoing self-serve resources. |
| **AI/ML Security WG, Identity & Access WG, others** | Topical work in their domain | Route maintainer questions in their domain to them; fold their published maintainer-applicable practices into recipes | One row per sibling WG; updated annually with their chairs. |

Three framings the WG uses consistently in handoffs:

- **Front door, not a destination.** We are the on-ramp, not the road.
- **The handoff table is the contract** (above).
- **No new authorship.** Where we publish maintainer-facing material, it cites and links the owning WG's source of truth. If we discover a gap, we file an issue with the owning WG before producing our own material.

## 7. Sponsored Technical Initiatives

The following TIs are currently sponsored by the SCI WG. Under this charter, the WG's operating relationship to its TIs is **enablement-driven**: each TI articulates annually how its work lowers adoption friction for some defined maintainer population, and the WG offers brokering, research, and cross-TI integration capacity in return.

- [SLSA](https://slsa.dev/) — supply-chain levels for software artifacts
- [GUAC](https://guac.sh) — observability for the software supply chain
- [gittuf](https://gittuf.dev/) — verifiable security governance for git
- [Zarf](https://zarf.dev) — secure software delivery for connected and disconnected systems
- [S2C2F](https://github.com/ossf/s2c2f) — secure supply chain consumption framework
- [SBOMit](https://github.com/SBOMit) — attestation-based SBOM accuracy
- [FRSCA](https://buildsec.github.io/frsca) — Factory for Repeatable Secure Creation of Artifacts
- [SLSA Tooling Project](../slsa-tooling.md)

**No TI is being moved out of the WG as part of this charter.** The WG does, however, flag the broader topology question to the TAC — see §12.

## 8. Sub-project (TI) admission criteria

A proposed Technical Initiative is eligible for SCI WG sponsorship when it can credibly demonstrate, at proposal time, **both** of the following:

1. It materially lowers adoption friction for open-source maintainers of at least one identified ecosystem, language, or build system — with a named maintainer-side reviewer who concurs in writing.
2. It integrates with at least one other OpenSSF-sponsored TI, specification, or recommended practice — i.e., it composes into the OpenSSF surface rather than standing alone.

Admission requires consensus among the co-chairs (lazy consensus on the WG mailing list, five business days, no sustained objection) and a written notice-of-no-objection to relevant sibling WGs whose remit it touches. TIs whose primary value is research, specification authorship, or tool implementation (rather than adoption enablement) should be directed to the WG whose remit best fits.

## 9. Governance

### 9.1 Co-chairs

Three co-chairs, staggered terms. Currently (interim, pending charter ratification): Nicole Bates, Justin Cappos, Michael Lieberman.

### 9.2 Decision-making

The WG operates by **lazy consensus on the mailing list** (5 business days, no sustained objection) for routine decisions. The co-chairs are the named accountable parties for landing decisions when consensus stalls.

- **Default decisions:** lazy consensus on the mailing list.
- **Charter amendments, TI admission, TI sunset, co-chair changes:** consensus of the co-chairs after a mailing-list comment window (see §16).
- **Co-chair elections:** held annually; process specified in a forthcoming Operating Procedures companion doc (see §9.4).

### 9.3 Conflicts of interest

Standard Linux Foundation conflict-of-interest disclosure expected from co-chairs. Recusal expected on decisions involving a co-chair's employer's directly competing TI.

### 9.4 Future formalization (TODO)

A formal Technical Steering Committee — for example, co-chairs plus a maintainer representative from each sponsored TI, with explicit quorum and supermajority voting rules — may be added by amendment once the WG has sustained active TI engagement and a track record of decisions complex enough to warrant the structure. The intent is to grow governance machinery to match real need, not to spec it up front. Tracked as a deliberate TODO; not blocking on charter adoption.

## 10. Meeting cadence

- Bi-weekly WG meeting, alternating timezone-friendly slots (mirror current schedule).
- Quarterly joint session with ORBIT WG (producer↔consumer interface).
- Annual public roadmap review.

## 11. Deliverables (12-month headlines)

Detailed program-level deliverables are maintained in [`MAINTAINER-ENABLEMENT.md`](../MAINTAINER-ENABLEMENT.md) and reviewed annually by the co-chairs. Representative deliverables for the first 12 months:

- A published, maintained **maintainer landing page** (the OpenSSF front door for maintainers).
- A small set of **per-ecosystem adoption cookbooks** composing OpenSSF tooling end-to-end.
- A monthly **Maintainer Clinic** and a **rotating intake triage** with a five-business-day SLA.
- Quarterly **Composable Flows** working sessions producing cross-project integration artifacts.
- A **PR series against the OSPS Baseline** for SCI-domain controls (authored by SCI, owned by ORBIT).
- A **case study program** onboarding a small cohort of medium OSS projects through Baseline L1.
- A **sub-project adoptability scorecard** completed annually by each sponsored TI.
- An **Operating Procedures companion doc** covering co-chair elections, conflict-of-interest disclosure mechanics, and the criteria for adopting a formal TSC (§9.4).
- A **TAC report on project↔WG topology** (see §12).

## 12. Acknowledgement: WG↔TI topology

The SCI WG observes — and shares with the TAC as input, not as a request — that the current OpenSSF project-to-WG topology is uneven. Some WGs sponsor a large and topically broad set of TIs; others sponsor one or two; the implicit logic varies between *topical* groupings (e.g., "supply chain things") and *functional* groupings (e.g., "adoption," "tooling," "best practices"). This is a natural consequence of organic growth and is not a problem in itself, but a deliberate, principled discussion — likely TAC-led — about whether and when WG charters should be topical versus functional would help future WGs orient.

The SCI WG would welcome and contribute to such a conversation. For the present, our sponsored TIs remain in place; this charter does not propose realignment.

## 13. Naming

The Working Group's broader scope under this charter — all OpenSSF security tooling adoption by maintainers — strains the literal reading of "Supply Chain Integrity." We have considered renaming (candidates surfaced in community discussion include *"Maintainer Enablement WG"* and *"Producer Enablement WG"*) and have chosen to preserve the SCI name for now. Brand continuity with five years of TI sponsorship, conference presence, and community recognition is non-trivial, and the substantive overlap between "supply chain integrity" and "maintainer-side OpenSSF adoption" is high in practice — most maintainer-facing OpenSSF tools are supply-chain tools. We commit to revisiting the name within 12 months of charter adoption.

## 14. Intellectual property / licensing

- Code: Apache License 2.0 with the Developer Certificate of Origin.
- Documentation: Creative Commons Attribution 4.0.
- Data: CDLA-Permissive 2.0.
- Trademarks per Linux Foundation policy.
- Alternative licenses require approval per Linux Foundation Governing Board policy.

## 15. Community assets

- Repository: https://github.com/ossf/wg-supply-chain-integrity
- Mailing list: https://lists.openssf.org/g/openssf-supply-chain-integrity
- Slack: `#wg_supply_chain_integrity` and the maintainer-facing `#maintainers` on the OpenSSF Slack
- Public calendar: see [README](../README.md#meetings-times)
- Meeting notes: [Google Drive](http://ssci.io/sci-notes)

## 16. Amendments

This charter may be amended by consensus of the co-chairs after 14 days' public notice on the WG mailing list, with notification (not approval) to the OpenSSF TAC. Material changes — mission, scope, TI admission rule, or the introduction of a formal TSC (§9.4) — additionally require TAC review.

## 17. Requested TAC action

The SCI WG requests that the TAC:

1. Review and approve this charter as the WG's adopted v2.0 charter.
2. Acknowledge the WG's repositioned mission of maintainer-side OpenSSF adoption enablement.
3. Accept the WG's commitment to operate as a brokering front door rather than a topical silo.
4. Consider, on a timeline of the TAC's choosing, the broader project-to-WG topology question raised in §12.

## 18. References

- Q2 2026 SCI WG TAC report — [ossf/tac#614](https://github.com/ossf/tac/pull/614)
- "Maintainer Experience" issue — [ossf/tac#169](https://github.com/ossf/tac/issues/169)
- ORBIT WG Charter — https://github.com/ossf/wg-orbit/blob/main/CHARTER.md
- GovOps WG proposal — [ossf/tac#588](https://github.com/ossf/tac/issues/588)
- OpenSSF Technical Vision — https://github.com/ossf/tac/blob/main/technical-vision.md
- OSPS Baseline — https://github.com/ossf/security-baseline
- Companion design doc — [`MAINTAINER-ENABLEMENT.md`](../MAINTAINER-ENABLEMENT.md)
- Sandbox WG template — `ossf/tac/process/templates/WG_NAME_sandbox_stage.md`
