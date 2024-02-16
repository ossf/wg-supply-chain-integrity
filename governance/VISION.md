[# OpenSSF Supply Chain Integrity WG Charter

_**June 2023:** We look to share the current Charter with the OpenSSF TAC within the next few weeks.  We hope to get approval from the TAC by end of July._

_**April 2023:** We’re working within the SCI WG to refine this document to the point where it represents community consensus on our group’s priorities and direction. As we near the point of agreement we aim to share with the OpenSSF TAC for feedback before formal adoption._

## About this document

This document outlines a high-level summary of _a proposal_ for **OpenSSF Supply Chain Integrity WG’s direction as we progress through 2023.**

The Mission and Vision are **intentionally expansive**, and anticipate years of work taking us beyond our progress to date.

## Problem
Modern software is componentized by nature, and its assembly usually involves parts provided by external suppliers (e.g., open or closed source libraries).

Today it is hard or impossible for those depending on externally supplied components to evaluate their inherent security features, or infer characteristics from the security-related procedures that were used in their creation. Any assessments that are possible are ad-hoc, and therefore hard or impossible to automate and reason about at scale.

Without the ability to assess the security properties of upstream components it is hard or impossible to:
  * Quantify the risk of their use.
  * Reason about the risk of their use.
  * Manage and mitigate the risk of their use.
  * Systematically reduce the risk of their use.

## Mission
**Proposed SCI WG mission:**
      _Scalable standardized attestable practices for supply chain security_

Scalable:
  * A uniform approach across languages and ecosystems
  * Automatable, with automation wherever possible
  * Implementable at key points of leverage

Standardized:
  * Shared vocabulary and problem model for the industry
  * Ready interoperability up and down the supply chain
  * Maximum reusability

Attestable:
  * Amenable to reproducible automatic evaluation
  * Representable in machine-readable interchange formats
  * Explicitly anchorable in appropriate roots of trust

## Vision
We envision a future with:

  * A **pragmatic supply chain security framework** covering key functional areas
    * An ergonomic decomposition of the problem space at the altitude of Build, Provenance, Dependencies, Source, and so on.
    * Incrementally attainable levels that have a clear progression between each, enable explicit decisions around what level to aim for, and allow adopters to get started easily 
    * Designed for the real world; adoptable in practice (e.g., FRSCA); deployable in enterprise contexts


  * Upstream security practices **universally evaluable by downstream policy**
    * Artifacts crossing supply chain boundaries are annotated with security-relevant metadata
    * Data-driven control points are enabled throughout the supply chain
    * Standard toolchains support generation of, and policy decisioning on, supply chain metadata
    * An explicit threat model with consumer-selected trust anchors: those doing the trusting can decide who to trust, and on what basis (including regulatory constraints)


  * **Ubiquitous adoption of the framework in Open Source**, with improved security posture as a result.

We anticipate an uplift in overall end-to-end security through:
  * **Upstream adoption** of robust security practice, in line with the framework we define
  * **Downstream risk control** using policy driven by upstream attestations of practice implementation

## Strategy and Principles
We will use the principles below to guide us. In some cases we will stray from direct adherence but we’ll aim to only do so knowingly, with good reason.

  * Disappear into the infrastructure 
    * Web users don’t have to worry about, or even think too consciously about, SSL. This is what supply chain security should look like to producers and consumers.

  * Target shared technical infrastructure as a strategic point of leverage
    * Package managers: these form a critical trust boundary between open source producers and consumers.
    * Widespread developer tools, CI/CD systems, operating systems: build atop common platforms and toolchains.

  * Anchor trust in tools and systems, not processes and people

  * Focus on Open Source solutions, implementation, and adoption 
    * The SCI WG _framework_ will be applicable beyond Open Source, but we’ll leave solutions for closed-source implementation and adoption to others, e.g., commercial tool vendors
    * We anticipate SCI attestations and SCI-driven policy will flow transitively into closed source ecosystems, through the near-ubiquitous ingestion of Open Source dependencies.
    * We will collaborate with \[OpenSSF's Sterling Toolchain\](https://docs.google.com/document/d/1H3Nk0PwmylLg5F7pqrIvyKzTyXAll0-f50B7DdqOh4A/edit#heading=h.9m0zi4b0wnne) efforts to ensure alignment.

  * Draft off OpenSSF momentum
    * Reuse work already in flight elsewhere in the OpenSSF ecosystem. For instance, the Best Practices WG is developing a glossary and vocab which we should snap to.

  _\[…lots more needed here, including details on stakeholders and benefits to each\]_

## Looking back on 2022
A very brief snapshot of where we’re at, closing on the end of 2022:

* **Build** and **Provenance** (SLSA)
  * SLSA standardizes secure practices for Build and Provenance, and an associated attestation format
  * We anticipate a 1.0 specification in early 2023
  * We close the year with some better clarity around SLSA/SBOM and SLSA/SSDF
  * We have standalone SLSA builders and verifiers in place across languages
    * GitHub Actions and Google Cloud Build can both generate SLSA provenance
  * npm is implementing SLSA and Sigstore for end-to-end integrity of Node packages
  * We have limited traction with SLSA provenance for policy decisioning
    * e.g., Chainguard Enforce for k8s admissions control
  * We have limited Open Source products shipping with SLSA provenance
    * e.g., SUSE Linux, Flatcar Linux, Chainguard Images, Google Assured OSS


* **Dependencies** (S2C2F)
  * S2C2F formally joined OpenSSF in October 2022 and standardizes secure practices for ingesting open source software into developer workflows
    * No associated attestation format yet
  * We are focusing on increasing awareness about our initiative as a recent OpenSSF joiner
    * We recognize that there are opportunities for collaboration within the OpenSSF, so we are consolidating a strategy
    * We will also be presenting the S2C2F at various engagements in early 2023
	
* **Source** (formerly SLSA)
  * Secure practices for Source management were taken out of scope for SLSA 1.0

* **Reference toolchain** (FRSCA)
  * In addition we have a Factory for Repeatable Secure Creation of Artifacts (FRSCA), an open source reference implementation across \[some subset of our practices\].

## 2023 Priorities
Proposed priorities for OpenSSF Supply Chain Integrity WG the coming year:

* **Establish and cement community intention around Mission and Vision**
  * Define our community, e.g., in concentric rings. Who is in ring 0? Ring 1? And so on.
    * OpenSSF WGs
    * Others in LF (e.g., DBoM)
    * CDF, CNCF
    * IETF (including SCITT)
  * Circulate and socialize a version of this document with the community
  * Generate buy-in and commitment to the long-term direction and near-term priorities
  * Assess community health; plan and deliver tune-ups. Where do we need more participation?
  * Develop specific outreach plan for community expansion. Which companies would we like to be involved, and how do we reach them?
    * We need to be cognizant of our own biases as we undertake this exercise. Community should be inclusive and not about favorites.
    * OpenSSF has some prior art and thinking we might leverage

* **Exponentiate traction with Build and Provenance**
  Land the first version of SLSA more substantively, with an approved specification and end-to-end implementation in major ecosystems.
  * Specification to 1.0
  * First end-to-end package manager implementations
  * Key tooling components in place — foundations for more scalable implementations
    * Triangulate with FRSCA and \[Sterling Toolchain\](https://docs.google.com/document/d/1z4YxuT6yzbgrNlUpgTbJhuKv5ngdsd6O8Dz5yRTepgs/edit#heading=h.r17cemgdt4tw) concept
  * Major OSS projects on-boarded, generating and distributing provenance
    * Idea: start with OpenSSF projects

* **Create momentum with Dependencies**
 With S2C2F now in OpenSSF, begin to \[close some key gaps\](https://docs.google.com/document/d/1Cp7TOVx7hWwxKGebWWPn4sGVIIbYSwR0-mWdwBO45po/edit#heading=h.y37mdlsrg0tq):
  * Awareness and adoption; education, outreach, calls for participation, collaboration with key partners in OpenSSF
  * Attestations and metadata; standardize contents and formats; explore distribution and discovery
  * Tools for automatic assessment and attestation of conformance

* Enable adoption with Tooling
_\[Need to decide how to approach this. Should tooling be consolidated SCI-wide? OpenSSF-wide? Or be owned by individual SIGs? E.g., slsa-tooling, s2c2f-tooling, sbom-tooling, etc.\]_

* **Define SCI WG umbrella framework and begin standardization of the next functional area**
  * Sketch, scope, and position uber-framework. Figure out how SLSA and S2C2F will naturally up-scope into this larger setting.
    * This will necessarily depend on the problem statement above, anchoring all of this work.
  * Requirements definition for Vulnerability Management
    * Assessment of attestation approach; how much is automatable, trust-in-tool, etc?
    * Extension of policy model beyond Build and Provenance
](CHARTER.md)