# SLSA Tooling Project

## Objective

This OpenSSF project aims at developing tools that support the [SLSA](https://slsa.dev) specification with the goal of enabling the larger community interested in implementing SLSA as a software producer or consumer.

## Motivation

The SLSA specification provides a framework to safeguard artifact integrity across any software supply chain. However it is just that: a specification. It leaves to the reader the hard work of figuring out how to implement it. This project aims at helping you in this effort by providing you with a set of tools that can be used, or that demonstrate how, to generate and verify SLSA provenance in different environments.

## Tools

The list of tools currently available includes:

| Name | Repository | Description |
| ---- | ---------- | ----------- |
| SLSA GitHub Generator | https://github.com/slsa-framework/slsa-github-generator | A set of tools for generation of SLSA3+ provenance for native GitHub projects using GitHub Actions |
| SLSA Azure DevOps Demo | https://github.com/slsa-framework/azure-devops-demo | A proof-of-concept SLSA provenance generator for Azure DevOps Pipelines |
| SLSA Jenkins Generator | https://github.com/slsa-framework/slsa-jenkins-generator | A proof-of-concept SLSA provenance generator for Jenkins |
| SLSA Verifier | https://github.com/slsa-framework/slsa-verifier | Verifier of SLSA provenance from compliant builders |

Note that these tools are not all at the same level of maturity. Some are quite advanced while others are not, some are actively being worked on while others are not. Please, consult each repository for further information.

## Communication

Slack channel: [#slsa-tooling](https://openssf.slack.com/messages/slsa-tooling)

We currently don't have any regular meetings. You can consult the [Meeting Notes](https://docs.google.com/document/d/18oj3CLJQhZj1dMHKDTq_1kKg0syysKCS7pLyXlw1SRc/edit#heading=h.yfiy9b23vayj) for a record of past calls although they weren't typically focused on the above tools.

## Governance

This project is part of the [Supply Chain Integrity WG](README.md) alongside [SLSA](https://github.com/slsa-framework/slsa) among otherss.

## Antitrust Policy

Linux Foundation meetings involve participation by industry competitors, and it is the intention of the Linux Foundation to conduct all of its activities in accordance with applicable antitrust and competition laws. It is therefore extremely important that attendees adhere to meeting agendas, and be aware of, and not participate in, any activities that are prohibited under applicable US state, federal or foreign antitrust and competition laws.

Examples of types of actions that are prohibited at Linux Foundation meetings and in connection with Linux Foundation activities are described in the Linux Foundation Antitrust Policy available at <http://www.linuxfoundation.org/antitrust-policy>. If you have questions about these matters, please contact your company counsel, or if you are a member of the Linux Foundation, feel free to contact Andrew Updegrove of the firm of Gesmer Updegrove LLP, which provides legal counsel to the Linux Foundation.

