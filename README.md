# WG Developer Identity

This charter describes operations as an [OSSF Technical Initiative](https://github.com/ossf/tac/blob/master/charters/).
The [Focus](#focus) section below describes what is in and out of scope,
and [Governance](#governance) section describes how our operations are consistent with OSSF policies with links to more detailed documents.

**Mission:** TODO

## Motivation

Without too much effort, an attacker could insert malicious code into a popular open source library and carry out an
attack. 

One way an attacker could achieve this is by looking for a highly imported package that sits low in the stack but can
still affect communication, maybe even has root access, and that has few eyes on it, or even no eyes.
This type of attack was carried out against the [event-stream](https://arstechnica.com/information-technology/2018/11/hacker-backdoors-widely-used-open-source-software-to-steal-bitcoin/)
module in node.js, which was co-opted to steal bitcoins (by attempting to steal credentials for developers of a
particular bitcoin wallet), a malicious maintainer took over the code: 

> "He emailed me and said he wanted to maintain the module, so I gave it to him," developer Dominic Tarr wrote in a
> GitHub comment. "I don't get anything from maintaining this module, and I don't even use it anymore, and haven't
> for years."

Of course, once the change is committed, it is effectively trusted.
The secure hashes will match, it will be included in many places (in this case several hundred thousand), and in turn
those packages will be built, signed, stored on trusted sites, and used and included elsewhere.

In the case of malicious code, the attacker will also try to obscure the real effect, and can also introduce the attack
slowly such that individual commits are less suspect.
The attack above was executed in multiple steps.

One way to mitigate an attack like this is to build a trusted identity system for maintainers of critical open source
projects. Highly critical projects should be encouraged to verify the identity of their maintainers, and anyone with
administrative permissions on their SCM, CI or artifact management systems.
Later, they may make use of this identity system to flag contributions that should warrant closer review.  

## Focus

Our proposal is to build a source of identity for open source committers, owned and operated by the OpenSSF.
The system itself will be open and neutrally governed.

This identity system can be used to help automatically provide a "Risk Assessment" for any project, and identity anomalies in commits.
A project with a half-dozen well-known committers that have verified their identity and sign all commits is very low risk.
A project that has had a huge surge in activity from unknown committers is very high risk. 

This web-of-trust-like identity system needs to be available to attest metadata and identities at every step of the supply chain.
The same identity can be used to sign commits, sign packages, even all the way up to auditing changes made to running systems.


### Goals

* Give open source maintainers a way to do work under their real names, representing their real employers in trusted ways.
* Give open source projects tools and infrastructure to verify the indentities of their maintainers.
* Give consumers of open source libraries more data for determining the risks of depending on said library.
* Respect the privacy of everyone involved.

### Non Goals

* Enforce or mandate identity requirements for projects.
  We will simply make this service available and easy-to-use, leaving it up to projects and communities to adopt if they choose to do so.

## Operations

WG-Developer-Identity operations are consistent with standard operating guidelines
provided by the OSSF Technical Advisory Committee
[TAC](https://github.com/ossf/tac).

### Meetings

TODO: Add info on meeting schedule and calendar invitations

#### Notes and Agendas

TODO: Add links to notes and agendas

### Communications

TODO: Add links to slack channel and email lists

## Governance

Full details of process and roles are linked from [governance README](/governance).
