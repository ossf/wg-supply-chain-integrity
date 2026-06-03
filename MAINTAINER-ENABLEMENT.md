# SCI WG — Maintainer Enablement Design Doc

*Status: Draft for community + sibling-WG + TAC review (Q3 2026). Companion to the proposed [Charter v2.0](./governance/CHARTER.md).*

## One-line repositioning

The Supply Chain Integrity Working Group becomes the **Maintainer Front Door** of OpenSSF: a self-serve, low-friction on-ramp for open-source maintainers adopting OpenSSF security tooling. It is the producer-side mirror of [ORBIT's Launchpad](https://github.com/ossf/wg-orbit) (which targets consumers), it occupies the gap between [Alpha-Omega](https://alpha-omega.dev/) (funded, high-touch on named critical projects) and the [Best Practices WG](https://github.com/ossf/wg-best-practices-os-developers) (general curriculum, Scorecard, BP Badge), and it operationalizes the "Producer Enablement" pillar of the OpenSSF Technical Vision.

The shorthand: **sub-projects build the tools; the WG makes them adoptable.**

---

## 1. The maintainer journey

The whole WG is organized around one user story:

> *I maintain an open-source project. I have limited time. Someone — an enterprise user, a regulator, my conscience — has told me I need to improve the project's security posture. I have no idea where to start.*

The WG's deliverables exist to answer that. Every interaction surface has a fixed shape:

### Front door

A single landing page (target: `openssf.org/maintainers`, owned by this WG, hosted by OpenSSF marketing) with exactly four affordances:

1. **"I have 30 minutes — what's the highest-leverage thing I can do?"** → a ranked starter recipe (Scorecard + branch protection + 2FA + SECURITY.md), keyed to OSPS Baseline Level 1.
2. **"My ecosystem is X."** → per-ecosystem cookbooks (§3.2).
3. **"I want to talk to someone."** → two routes: the `#maintainers` channel in the OpenSSF Slack, and a clinic intake form (a 6-field issue template: project URL, ecosystem, what's blocking you, what tools you've tried, time available, contact).
4. **"Office hours."** → calendar widget for the next monthly clinic.

No more affordances than these. Resist scope expansion of the landing page itself.

### Intake & triage

Clinic intake submissions land as issues in a new `ossf/maintainer-clinic` repo. A rotating **Maintainer Liaison of the Week** (1-hour-per-week commitment, capped) triages each within five business days into exactly one of four outcomes:

| Outcome | What the maintainer gets |
|---|---|
| **Self-serve answer** | Link to a cookbook/recipe that solves their problem; issue closed with that link. |
| **Clinic slot** | Scheduled into the next monthly clinic with a 30-min Q&A window. |
| **Sibling-WG handoff** | Warm introduction (with a named contact) to BP / Security Tooling / Vuln Disclosures / ORBIT / Alpha-Omega / AI/ML Security — see §5. |
| **Case study candidate** | Invitation into the Case Study Program (§3.6) with a WG shepherd assigned. |

What a maintainer who walks in never gets: silence, "we'll get back to you," or a maze. Within five business days, one of the four above. The triage rule is enforced by the Liaison-of-the-Week rota; if a week's triage queue is empty, the liaison spends the hour reviewing whether something that came in twice in the last quarter should become a cookbook.

---

## 2. Tool interoperability brokering

The WG owns three repeatable surfaces for facilitating collaboration *between* OpenSSF tools — not as an arbiter, but as a venue.

### Monthly WG sync (existing slot)

Standing agenda item: **"What's blocked between projects?"** Sponsored-TI leads (or a designate) attend. If a cross-project blocker surfaces, it converts to a Composable Flows session topic.

### Quarterly Composable Flows sessions

Format: 90-minute focused session, user-story-driven. A representative story might be *"a Python maintainer wants to publish to PyPI with SLSA L3 provenance attested by gittuf."* The two-or-three relevant tool projects are in the room. Output is one of:

1. A merged integration PR/issue across the projects.
2. A documented *"no, here's why"* decision.
3. A clearly scoped follow-on.

Every session produces a Markdown artifact committed to `ossf/maintainer-clinic/flows/`.

### OSPS Baseline SCI-controls authorship

The WG acts as technical author and reviewer for the supply-chain-integrity controls inside the [OSPS Baseline](https://github.com/ossf/security-baseline) (owned by ORBIT). ORBIT runs the Baseline; this WG supplies the SCI expertise. Concrete deliverable: a WG-reviewed PR series against the Baseline for SCI controls L1→L3.

This pattern replaces umbrella governance theater with concrete, deliverable-producing collaboration.

---

## 3. Year-1 deliverables

All deliverables are sized for an all-volunteer WG (~10–15 active contributors). Every deliverable has a **named DRI + backup** — no anonymous ownership. If no DRI signs up for a deliverable, it does not exist; we don't fake it.

| # | Deliverable | Effort | Owner pattern | Success signal |
|---|---|---|---|---|
| 3.1 | **Maintainer landing page** at `openssf.org/maintainers` — single front door, four affordances above | 2–3 wk initial, then steady-state edits | DRI + WG co-chair backup, with OpenSSF marketing | Live by month 2; ≥500 unique visitors/month by month 6 |
| 3.2 | **Per-ecosystem cookbooks** (Python, Go, Rust, JS/npm, Java) — opinionated one-pagers: sign with Sigstore + generate SLSA provenance + run Scorecard + hit OSPS Baseline L1, with copy-pasteable CI snippets | 2–4 wk per cookbook; aim for 5 in Y1 | One DRI per ecosystem, recruited from inside that ecosystem (e.g., PyPA contributor for Python). Co-signed by Security Tooling WG + relevant TIs | 5 cookbooks shipped; each cites ≥3 maintainer adopters |
| 3.3 | **Monthly Maintainer Clinic** — 60-min public Zoom: 15 min tool-of-the-month demo, 30 min 1:1 maintainer Q&A from intake queue, 15 min open mic | 4 hr/mo organizer + rotating demo presenters | WG co-chair rotates as host; sponsored TIs rotate as demo presenters | 10 clinics; ≥20 distinct maintainers served |
| 3.4 | **Quarterly Composable Flows sessions** — see §2 | 1.5 day prep + session/qtr | Sub-project leads rotate; WG facilitates | 4 sessions; ≥2 shipped cross-project integrations |
| 3.5 | **OSPS Baseline SCI-controls PR series** | Ongoing; ~2 hr/wk DRI | DRI from WG, paired with ORBIT liaison | ≥1 PR series merged into OSPS Baseline |
| 3.6 | **Case Study Program** — onboard 5–10 medium OSS projects through Baseline L1 with a WG shepherd each; produce a public write-up per case study (pain points, what worked, time invested) | ~10 hr per case study across the year | Each case study has a WG shepherd paired with the project's maintainer | 5 published case studies; each citing concrete improvement (Scorecard delta, signed releases produced, Baseline L1 achieved) |
| 3.7 | **Conference Presence Rotation** — coordinate "OpenSSF Maintainer Booth/BoF" at 3–4 ecosystem-native conferences (PyCon, RustConf, JSConf/NodeConf, plus one of GopherCon/DrupalCon/JavaOne). Not new talks — staffed presence with "bring your repo" tables | 1 booth captain + 2–3 staff per event; ~2 days/event including travel | Partner with OpenSSF community/marketing; WG volunteers | ≥3 events with ≥30 maintainer conversations logged per event |
| 3.8 | **LFX Mentorship + Ambassador integration** — define 2 mentorship projects per cycle ("implement an OpenSSF tool in $project under WG mentorship"); recruit 3 Ambassadors as ecosystem cookbook DRIs | ~1 day/qtr coordination | WG mentorship liaison | 2 LFX cohorts staffed; 3 Ambassadors actively contributing |
| 3.9 | **Sub-project Adoptability Scorecard** — annual self-assessment per sponsored TI: 5-minute quickstart? GitHub Action? per-ecosystem docs? clear "what does this give me" pitch? Output is a public table; WG opens issues on each TI for gaps *and contributes fixes where it can* | 1 wk design, 1 day/yr to administer | WG co-chair as DRI | Scorecard published; ≥80% of sponsored TIs close ≥1 adoptability gap |
| 3.10 | **TAC report on project↔WG alignment** — written recommendation on whether current sub-project↔WG assignments make sense across OpenSSF (independent of this WG's refocus) | 1 month, ~20 hr total | Co-chairs | Delivered to TAC by Q4 of Y1; TAC engages or schedules discussion |

---

## 4. Success metrics

Avoiding vanity metrics (Slack member count, stars, "engagements"). Targets:

### 6 months

- Landing page live; ≥300 unique visitors/month.
- ≥3 cookbooks shipped.
- ≥6 monthly clinics; ≥10 distinct maintainers served via intake.
- ≥2 Composable Flows sessions; ≥1 cross-project integration in flight.
- ≥2 case studies underway.
- Active contributor count (present at ≥2 of last 4 syncs) ≥10.

### 1 year

- 5 cookbooks shipped.
- 10 clinics; ≥20 distinct maintainers served.
- ≥1 OSPS Baseline SCI-controls PR series merged.
- 5 published case studies, each citing measurable improvement.
- 3 ecosystem conferences attended with booth/BoF presence.
- TAC alignment review delivered.
- Active contributor count ≥15.

### 2 years

- ≥10 cookbooks (extends beyond top 5 ecosystems).
- ≥50 distinct maintainers served; ≥25 projects citing WG help.
- ≥10 published case studies.
- OSPS Baseline SCI controls L1–L3 stable.
- ≥3 shipped cross-project integrations from Composable Flows.
- Public dashboard tracking all of the above, refreshed quarterly.

If at 6 months the intake rate is below 5 maintainers/month, the program is honestly reported as failing and we replan with the TAC. We don't paper over it.

---

## 5. Relationships to other WGs

Concrete handoff sentences — these are the contract.

- **Best Practices WG.** *We* drive maintainer-facing per-ecosystem cookbooks and clinic intake; *they* own Scorecard, BP Badge, and general security curriculum. *The handoff:* if a maintainer's question is "how do I improve my Scorecard score" or "what's a generally-secure development practice," we link them to BP curriculum and notify the BP WG liaison in `#maintainers`.

- **Security Tooling WG.** *We* package and recommend tools in maintainer-ready recipes; *they* curate and evaluate the tool catalog and Sigstore-adjacent infrastructure. *The handoff:* every cookbook we publish is co-reviewed by a Security Tooling WG liaison; tool gaps surfaced in clinics file issues against the Security Tooling catalog.

- **Vulnerability Disclosures WG.** *We* point maintainers at coordinated disclosure, `SECURITY.md`, and OSV adoption inside our recipes; *they* own disclosure norms, OSV schema, and CVE program work. *The handoff:* any clinic intake mentioning a live or anticipated CVE or disclosure process is escalated within 24 hours to the Vuln Disclosures triage contact.

- **ORBIT WG.** *We* serve maintainers (producers); *they* serve consumers and run the OSPS Baseline. *The handoff:* ORBIT defines Baseline levels and consumer-side adoption (Launchpad); we generate the producer-side recipes that meet those levels and contribute the SCI controls upstream into the Baseline. Quarterly joint session on the producer↔consumer interface.

- **AI/ML Security WG.** *We* fold model-supply-chain practices (model signing, dataset provenance) into recipes once that WG ships them; *they* define AI-specific threat models and controls. *The handoff:* when AI/ML WG publishes a maintainer-applicable practice, we ship a recipe within one quarter; AI/ML maintainer intake is co-triaged.

- **Alpha-Omega.** *We* serve the long tail of self-serve maintainers; *they* fund high-touch engagements on named critical projects. *The handoff:* intake from a critical-infrastructure-scale project that needs sustained funded help is routed to Alpha-Omega's intake within one clinic cycle; Alpha-Omega refers projects that have aged out of high-touch support to us for ongoing self-serve resources.

The table is reviewed annually with sibling-WG chairs and updated in the [Charter](./governance/CHARTER.md) §7.

---

## 6. Risks and mitigations

1. **Perceived overlap / scope creep vs. Best Practices WG.** *Mitigation:* explicit handoff sentences (§5); standing BP WG liaison; every cookbook co-reviewed by BP; the WG does **not** produce general security curriculum, only ecosystem-specific, tool-specific recipes.

2. **Volunteer capacity collapse.** *Mitigation:* every deliverable has a named DRI + backup; Liaison-of-the-Week is capped at 1 hr/week; if no DRI signs up for a cookbook, that cookbook does not exist; quarterly capacity check at WG sync.

3. **Becomes a help-desk that doesn't scale.** *Mitigation:* triage rule that >50% of intake should resolve via "point at cookbook"; if a question appears twice in clinic, it becomes a cookbook section by next clinic; published SLA is "5 business days to *triage*," not "5 days to solution."

4. **Sponsored TIs feel surveilled by the Adoptability Scorecard.** *Mitigation:* scorecard is co-designed with TI leads, not imposed; framed as "WG helps you find adoption blockers"; WG commits to *contributing* fixes (docs PRs, GitHub Action templates) where possible, not just reporting them.

5. **Maintainers don't show up — landing page exists but no one walks through the door.** *Mitigation:* conference presence (§3.7) is the active demand-generation channel; Ambassadors recruit from their ecosystems; first 6 months actively solicit case-study participants rather than waiting. Replan honestly if signals are absent at 6 months.

6. **Mission drift back to specification work.** *Mitigation:* charter explicitly prohibits the WG from producing new normative specifications; if specification work emerges, it spins out as a sub-project or goes to BP / Security Tooling.

---

## 7. Sub-project relationship under the new model

Sponsored TIs (SLSA, GUAC, gittuf, Zarf, S2C2F, SBOMit, FRSCA, SLSA Tooling) **remain under the WG** for Year 1. The operating relationship changes:

- **No umbrella governance.** Each TI retains full technical autonomy; the WG does not gate roadmaps or releases.
- **TI leads at the monthly WG sync.** One designate per project; standing agenda item: "what's blocking adoption for your project right now?"
- **WG deliverables explicitly serve TIs.** Cookbooks feature them; case studies onboard them; Composable Flows reduce their cross-project integration cost; the Adoptability Scorecard surfaces (and helps fix) their adoption gaps.
- **WG provides demand generation, not management.** Clinic demos rotate through TIs; conference booths showcase them; intake brokerage routes maintainers to the right tool.
- **Alignment review delivered to TAC by Y1.** Co-chairs flag explicitly that the broader OpenSSF project-to-WG alignment is uneven and request TAC guidance. The WG is not territorial about retaining TIs that are better placed elsewhere.
- **Positioning SIG sunset.** Its outreach function is absorbed into the WG itself — specifically into landing page, clinic, conferences, and cookbooks.

---

## 8. References

- Q2 2026 SCI WG TAC report — [ossf/tac#614](https://github.com/ossf/tac/pull/614)
- "Maintainer Experience" — [ossf/tac#169](https://github.com/ossf/tac/issues/169) (open since 2023)
- ORBIT WG Charter — https://github.com/ossf/wg-orbit/blob/main/CHARTER.md
- GovOps WG proposal — [ossf/tac#588](https://github.com/ossf/tac/issues/588) (proposal-structure template)
- OpenSSF Technical Vision — https://github.com/ossf/tac/blob/main/technical-vision.md
- OSPS Baseline — https://github.com/ossf/security-baseline
- Companion: [SCI WG Charter v2.0](./governance/CHARTER.md)
