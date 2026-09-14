# Supply Chain Integrity WG

> **Maintainers — start here:** the SCI WG is being repositioned as the OpenSSF maintainer front door. See the proposed [Charter v2.0](./governance/CHARTER.md). Comments and contributions welcome on the mailing list and in `#wg_supply_chain_integrity` on the OpenSSF Slack.

## Mission

**Make adopting OpenSSF security tooling the easy default for open source maintainers.**

The Supply Chain Integrity Working Group is the OpenSSF front door for maintainers adopting security tooling — a brokering layer that routes maintainer needs to the right sibling WG, sponsors Technical Initiatives whose value is friction reduction, and turns the OpenSSF Technical Vision and the OSPS Baseline into a low-friction adoption path.

The shorthand: **sub-projects build the tools; the WG makes them adoptable.**

## Objectives

Within 12 months of charter adoption, every actively-maintained OpenSSF-recommended security practice has a documented, signposted, maintainer-tested adoption path that begins with *"I'm an open source maintainer, where do I start?"* and ends with a measurable artifact (e.g., OSPS Baseline score, SLSA level, signed release). The SCI WG owns the on-ramp and the routing; sibling WGs continue to own the underlying practices.

## Motivation

OpenSSF has produced a breadth of tools, frameworks, and specifications across the security space — SLSA, GUAC, Sigstore, Scorecard, OSV, OSPS Baseline, S2C2F, and many more — but adoption has been uneven. ORBIT's Launchpad gives *manufacturers* an on-ramp for adopting this work into their SDLCs; there is no equivalent program for the *maintainers* of the open source projects these tools are mostly built for. Maintainers face a fragmented landscape: dozens of overlapping artifacts, unclear sequencing, no shared on-ramp. The revamped SCI WG exists to close that gap.

## Communications

We have a public email list available here: https://lists.openssf.org/g/openssf-supply-chain-integrity

See Google Groups for past archive: https://groups.google.com/forum/#!forum/ossf-wg-developer-identity

You can also join our Slack channel at https://openssf.slack.com/messages/wg_supply_chain_integrity, or the maintainer-facing `#maintainers` channel on the OpenSSF Slack.

## Meetings Times

The working group meets every other Wednesday at 9 AM Pacific. The public calendar is available here: https://calendar.google.com/calendar/embed?src=s63voefhp5i9pfltb5q67ngpes%40group.calendar.google.com&ctz=America%2FLos_Angeles

Subscribe to the calendar for meeting details.

## Meetings Notes

Meeting Notes and Agendas are available on [Google Drive](https://docs.google.com/document/d/1moVFPn5pLi-uGs840_YBCrwdpHajU0ptFmlL4F9GryQ/edit).

## Documents

* [User Stories](https://docs.google.com/document/d/1_TQizML8sXAm3OdoNA_plihZ14OHng_XRvJXKv_o_bs/edit?usp=sharing)

## Technical Initiatives

| Name | Repository | Website | Lifecycle Stage | Notes |
| --- | --- | --- | --- | --- |
| AMPEL | [GitHub](https://github.com/carabiner-dev/ampel) | — | [Sandbox](https://github.com/ossf/tac/blob/main/process/project-lifecycle-documents/AMPEL_sandbox_stage.md) | Lightweight supply chain policy engine for verifying signed attestations |
| BOMHort | [GitHub](https://github.com/seebom-labs/BOMHort) | [docs.bomhort.dev](https://docs.bomhort.dev/) | [Sandbox](https://github.com/ossf/tac/blob/main/process/project-lifecycle-documents/BOMHort_sandbox_stage.md) | Kubernetes-native SBOM visualization and governance |
| darnit | [GitHub](https://github.com/kusari-oss/darnit) | — | [Sandbox](https://github.com/ossf/tac/blob/main/process/project-lifecycle-documents/darnit_sandbox_stage.md) | Pluggable compliance audit framework for software engineering best practices |
| FRSCA | [GitHub](https://github.com/buildsec/frsca) | [buildsec.github.io/frsca](https://buildsec.github.io/frsca) | Needs review | Factory for Repeatable Secure Creation of Artifacts. Not present in the TAC project table; the [2024 Q3 SCI report](https://github.com/ossf/tac/blob/main/TI-reports/2024/2024-Q3-SCI-WG.md) records its retirement |
| gittuf | [GitHub](https://github.com/gittuf/gittuf) | [gittuf.dev](https://gittuf.dev/) | [Incubating](https://github.com/ossf/tac/blob/main/process/project-lifecycle-documents/gittuf_incubating_stage.md) | Verifiable security governance for git repositories |
| GUAC | [GitHub](https://github.com/guacsec/guac) | [guac.sh](https://guac.sh) | [Incubating](https://github.com/ossf/tac/blob/main/process/project-lifecycle-documents/guac_incubating.md) | Observability for the software supply chain |
| S2C2F | [GitHub](https://github.com/ossf/s2c2f) | — | [Incubating](https://github.com/ossf/tac/blob/main/process/project-lifecycle-documents/s2c2f_incubation_stage.md) | Secure supply chain consumption framework |
| SBOMit | [GitHub](https://github.com/SBOMit) | — | Needs review | Attestation-based SBOM accuracy. TAC lists it with sponsoring org "TBD" (not SCI) and maturity Sandbox |
| SLSA | [GitHub](https://github.com/slsa-framework/slsa) | [slsa.dev](https://slsa.dev/) | [Graduated](https://github.com/ossf/tac/blob/main/process/project-lifecycle-documents/SLSA_graduation_stage.md) | Supply-chain levels for software artifacts |
| SLSA Tooling Project | [doc](./slsa-tooling.md) | — | Needs review | Tools supporting implementation of the SLSA specification. Not a separately tracked TAC project |
| Zarf | [GitHub](https://github.com/zarf-dev/zarf) | [zarf.dev](https://zarf.dev/) | [Sandbox](https://github.com/ossf/tac/blob/main/process/project-lifecycle-documents/zarf_sandbox_stage.md) | Secure software delivery for connected and disconnected systems |

The Supply Chain Integrity Positioning SIG has been [sunset](./positioning-sig/README.md) as part of the v2.0 refocus; its outreach function is now central to the WG itself.

Older activities (as Digital Identity Attestation WG):
  * [Former Digital Identity Attestation WG Readme](https://github.com/ossf/wg-supply-chain-integrity/blob/0804679461f7ed288d50d70da7ae9c7152b1e51d/README.md)
  * [Recap](https://openssf.org/blog/2021/01/27/digital-identity-attestation-roundup/)

## Relationships

The table below is reviewed annually with sibling-WG chairs. Where SCI publishes maintainer-facing material, it cites and links the owning WG's source of truth; if SCI discovers a gap, it files an issue with the owning WG before producing its own material.

| Initiative | Their remit | SCI's remit | Handoff line |
| --- | --- | --- | --- |
| **Best Practices WG** | Scorecard, BP Badge, general security curriculum, OSPS Baseline authorship | Maintainer-facing per-ecosystem cookbooks and clinic intake | "How do I improve my Scorecard score / what's a generally-secure-development practice?" -> BP; SCI links and notifies the BP liaison. |
| **Vulnerability Disclosures WG** | Coordinated disclosure norms, OSV schema, CVE program work | Pointers to disclosure / `SECURITY.md` / OSV inside recipes only | Any clinic intake touching a live or anticipated CVE is escalated within 24 hours to their triage contact. |
| **ORBIT WG** | Manufacturer-side adoption (Launchpad); OSPS Baseline authorship and stewardship | Maintainer-side adoption; feedback into Baseline control drafting via ORBIT's process | Symmetric mirror across the maintainer<->manufacturer line. Quarterly joint session. |
| **Alpha-Omega** | Funded targeted hardening of named critical projects | Long-tail, self-serve, maintainer-led on-ramps | Critical-infrastructure-scale intake routed to A-O; A-O graduates referred to SCI for ongoing self-serve resources. |
| **AI/ML Security WG, others** | Topical work in their domain | Route maintainer questions in their domain to them; fold their published maintainer-applicable practices into recipes | One row per sibling WG; updated annually with their chairs. |

## Governance

### Chairs

* Adolfo García Veytia ([@puerco](https://github.com/puerco)), Carabiner Systems
* Justin Cappos ([@JustinCappos](https://github.com/JustinCappos)), NYU
* Nicole Bates ([@nikcal](https://github.com/nikcal)), Microsoft
* Stephen Augustus ([@justaugustus](https://github.com/justaugustus)), Bloomberg

### Support

* **OpenSSF Staff Contact:** Kris Borchers ([@kborchers](https://github.com/kborchers))
* **TAC Sponsor:** TBD

Working Group operations are consistent with standard operating guidelines provided by the OSSF Technical Advisory Committee
[TAC](https://github.com/ossf/tac).

- **Charter (proposed v2.0):** [`governance/CHARTER.md`](./governance/CHARTER.md).
- **Governance process:** [`governance/README.md`](./governance/README.md).

## Antitrust Policy Notice

Linux Foundation meetings involve participation by industry competitors, and it is the intention of the Linux Foundation to conduct all of its activities in accordance with applicable antitrust and competition laws. It is therefore extremely important that attendees adhere to meeting agendas, and be aware of, and not participate in, any activities that are prohibited under applicable US state, federal or foreign antitrust and competition laws.

Examples of types of actions that are prohibited at Linux Foundation meetings and in connection with Linux Foundation activities are described in the Linux Foundation Antitrust Policy available at <http://www.linuxfoundation.org/antitrust-policy>. If you have questions about these matters, please contact your company counsel, or if you are a member of the Linux Foundation, feel free to contact Andrew Updegrove of the firm of Gesmer Updegrove LLP, which provides legal counsel to the Linux Foundation.
