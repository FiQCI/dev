This document is an outline for writing a blog post for the Fiqci website. The document covers the most common
formatting/syntax topics and explains technical aspects to know when writing a blog. Also, use old blogs as a reference.
E.g. [Circuit-Knitting-Blog.md](content/_publications/2024-08-27-Circuit-Knitting-Blog.md),
[Topology.md](content/_publications/2024-08-29-Topology.md) are good examples since not all old blogs exactly follow the principles
outlined here.

## Contents

1. [Filename](#filename)
2. [Metadata](#metadata)
3. [Abstract](#abstract)
4. [Headings](#headings)
5. [Images](#images)
6. [Tables](#tables)
7. [Code blocks](#code-blocks)
8. [LaTex](#latex)
9. [References](#references)
10. [Other imprtant remarks](#other-important-remarks) 

## Filename

Have the filename of the post begin with the publication data in yyyy-mm-dd. The file should then be
"yyyy-mm-dd-Blog-Title.md". The file should be placed in `/content/_publications/`

## Metadata

First of below is a code blog containing example metadata for a blog. This is included at the top of each post
(wrapped with the "---" separator). Each field has comments explaining it and listing possible values if applicable.

```markdown
---
title: 'The main title of the post' #Blog title
date: yyyy-mm-dd #the date of publication as yyyy-mm-dd
collection: publications #don't change
header: #thumbnail image for the post
  teaser: /assets/images/{path to teaser image of your blog} #e.g /assets/images/topology/thumbnail.png
published: true
author: author name #name of the author
layout: post #don't change
tags: #keywords related to the topic of the blog, e.g Helmi, Quantum, etc
  - tag_1
  - tag_2
  - etc
filters: #choose appropriate filters from the commented options. If multiple separate with a comma
  Skill level: Beginner # Beginner, Advanced
  Type: Blog # Blog, Instructions, News
  Theme: Technical # Technical, Algorithm, Programming, Hybrid QC+HPC computing
---
```

## Abstract
Begin the blog with a short abstract and wrap it with "*" for italics:
```markdown
*Short abstract in italics*
```

## Headings

You can add different levels of headers with markdown as:
```markdown
## Header 2
## Header 3
### Header 4
#### Header 5
##### Header 6 etc
```

To avoid clashing with the main title, use `## Header 2` as the biggest heading in the blog test.

**NOTE**: Do not add a separate header for your main title. It'll be automatically displayed from the title field in metadata.

## Images

You can add images in markdown like:
```markdown
![alt text goes here](/assets/images/{path to your image}) 
```

**NOTE**: Images will not display on VS Code's markdown preview. For the preview to work, use 
`![alt text goes here](../assets/images/{path to your image}) ` just remember to change before publishing.

e.g: 
```markdown
![Example on how circuit changes when a wire is cut](/assets/images/Circuit-Knitting-Blog/circuit-knitting-general-example.png)
```

You can also use HTML for more fine-grained layout control:
```html
<figure style="define styles here in css">
    <img src="/assets/images/{path to your image}" alt="alt text goes here" style="more css">
</figure>
```


e.g
```html
<figure style="display: inline-block; text-align: left; margin: 0; padding: 0;">
    <img src="/assets/images/topology/grid.png" alt="Qubit grid" style="width: 70%">
</figure>
```

For consistent styles, use markdown syntax when possible.

## Tables

Markdown:
```markdown
| Title 1     | Title 2   | Title 3      |
|-------------|-----------|--------------|
| wow         | look      | at           |
| this        | amazing   | table        |
```

If the table needs to be centred HTML is needed:
```html
<div align="center">
  <table>
    <thead>
      <tr>
        <th>Title 1</th>
        <th>Title 2</th>
        <th>Title 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>wow</td>
        <td>look</td>
        <td>at</td>
      </tr>
      <tr>
        <td>this</td>
        <td>amazing</td>
        <td>table</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Code blocks

Code blocks can be added with: `` `code goes here` `` for inline code or for multiline code
````
```language e.g python
Code goes here
```
````

## LaTex

Equations special characters etc can be added with latex. Use `$ latex here $` for inline and for multlline
```latex

$$ latex here $$

```

Note that the multiline block needs to be separated from the main text with an empty line e.g.
```markdown
some text

$$ latex block $$

some more text
```

## References

If your blog/post has references, use the exact formatting as below. This ensures that the formatting will
work once deployed to the website. You can refer to a specific reference using `<a href="#references">[1]</a>`.
This will show up as <a href="#references">[1]</a>.

1. Reference 1
2. Reference 2
3. etc

## Other important remarks

Do not add:

```markdown
## Give feedback!

Feedback is greatly appreciated! You can send feedback directly to [fiqci-feedback@postit.csc.fi](mailto:fiqci-feedback@postit.csc.fi).
```

to the end of the blog. It is added automatically.

For other syntax etc have a look at [Circuit-Knitting-Blog.md](content/_publications/2024-08-27-Circuit-Knitting-Blog.md),
[Topology.md](content/_publications/2024-08-29-Topology.md), and [markdown guide](https://www.markdownguide.org/basic-syntax/)
