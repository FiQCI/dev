This document is an outline for adding an event to the Fiqci website. The document covers the most common
formatting/syntax topics and explains technical aspects to know when adding an event. Also, use old events as a reference.

## Contents

1. [Filename](#filename)
2. [Metadata](#metadata)
3. [Content](#abstract)


## Filename

Have the filename of the post begin with the publication data in yyyy-mm-dd. The file should then be
"yyyy-mm-dd-Blog-Title.md". The file should be placed in `/content/_events/`

## Metadata

First of below is a code block containing example metadata for an event. This is included at the top of each event file
(wrapped with the "---" separator). Each field has comments explaining it and listing possible values if applicable.

```markdown
---
title: 'Title of the Event' #Event name
date: yyyy-mm-dd #date when to be published as yyyy-mm-dd
published: true #leave as is, or if should be hidden change to false
link: https://the-event.fi/info/signup #link to event page
tags: #keywords related to the event, e.g Helmi, Quantum, etc
  - tag_1
  - tag_2
  - etc
type: Event #leave as is
filters: #choose appropriate filters from the commented options. If multiple separate with a comma
  Pricing: Free of charge # Free of charge, or empty if paid
  Availability: Open to anyone # Open to anyone, Registration needed
  Skill level: Beginner # Beginner, Advanced
  Type: Online # Online, Hybrid, Onsite
  Theme: Course/Workshop # Course/Workshop, Hybrid QC+HPC computing, Programming, Webinar/Lecture
---
```

## Content
The content of the event file should simply be the days when the event takes place followed by a short description (separated by a ":")
```
dd-dd month_name_spelled_out: Description.
```
E.g.
```
25-25 November: Two-day introductory course on quantum computers and the basic quantum algorithms that control them.
```
