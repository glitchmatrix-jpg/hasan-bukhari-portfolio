Hasan Bukhari — Portfolio

<p align="center">
  <a href="https://glitchmatrix-jpg.github.io/hasan-bukhari-portfolio/"><strong>View the live portfolio</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/glitchmatrix-jpg/hasan-bukhari-portfolio">GitHub Repository</a>
  &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/hasan-bukhari">LinkedIn</a>
</p>

About

This repository is my personal portfolio. It is where I keep the projects, research, and creative work that I have spent the most time on and learned the most from.

I'm Hasan Bukhari, a Computer Science student at the University of Southern Mississippi. Most of my work sits somewhere between software engineering, computational biology, machine learning, scientific software, and, occasionally, things that have absolutely nothing to do with code.

The site is split into three sections because that is honestly the easiest way to make sense of everything I do.

01 — Build

This is where most of my software projects live.

Some are fairly technical systems, some are mobile apps, and one is a game I have been working on for a while.

Projects include:

AEGIS — a local-first platform for controlled-document monitoring, change evidence, and governance

HEARTLINE — a native Android lyric companion with synchronized lyrics and offline support

Taaqat — an offline-first fitness app

Nivala — a privacy-first nutrition tracker built around Pakistani food

BioLitGraph — a biomedical literature-mining tool that turns papers and entities into explorable evidence networks

To Ash Again — a four-act narrative platformer built in Python and Pygame

02 — Research

This section contains my computational biology and genomics work.

A lot of what interests me here is not just whether a model works, but whether it still works when the data, cohort, platform, or evaluation setting changes.

Projects include:

CancerShift — evaluating a multicancer classifier across different studies and sequencing platforms

A17 — Predicting Chromatin Contact Maps from Epigenomic Signals

Comparative Fundulus Genomics — ongoing chromosome-scale comparative genomics research

I try to be careful about how I present research here. If something is ongoing, unpublished, exploratory, or limited in some important way, I say so.

03 — Write

Not everything I make involves Python or TypeScript.

This section is for the creative side of my work, including:

Flooded — a poetry collection currently in development

Student Poets Association — the creative-writing community I founded at Southern Miss

How I Built the Portfolio

I did not really want this to feel like a résumé stretched into a website.

Instead, I wanted each project to have enough space to explain what I was actually trying to do, what worked, what did not, and what I learned from it.

Most project pages are built around questions like:

What was I trying to solve?

Why did I build or study this?

How does it work?

What did I find?

What are the limitations?

What would I change if I did it again?

That matters especially for research. It is very easy to make a result sound more impressive by leaving out the uncomfortable parts, so I try to keep the limitations close to the findings instead of hiding them somewhere at the bottom.

I use the same approach for software projects too. If something is a release candidate, private, incomplete, experimental, or only partially validated, I would rather say that clearly than make the project sound further along than it really is.

Selected Work

Project

Area

Focus

AEGIS

Software Engineering

Desktop systems, document governance, deterministic change evidence

HEARTLINE

Android

Kotlin, Jetpack Compose, media sessions, offline lyrics

CancerShift

Computational Biology

Cross-platform ML evaluation, TCGA, GEO, CPTAC-GDC

A17

Computational Genomics

Epigenomic signals, Hi-C prediction, residual neural networks

BioLitGraph

Scientific Software

PubMed, PubTator, entity normalization, evidence networks

Taaqat

Mobile

Flutter, offline-first architecture, local persistence

Nivala

Mobile

Privacy-first nutrition, multilingual Pakistani food data

Comparative Fundulus Genomics

Genomics

Synteny, chromosome correspondence, comparative assemblies

To Ash Again

Game Development

Python, Pygame, narrative systems, progression

Flooded

Writing

Poetry and book design

You can see the full portfolio here:

glitchmatrix-jpg.github.io/hasan-bukhari-portfolio

Tech Stack

The portfolio itself is built with:

Core

React 19

TypeScript

TanStack Start

TanStack Router

Vite

Tailwind CSS 4

Interface

Radix UI

Lucide

Three.js

Recharts

Custom responsive layout and typography

Development

ESLint

Prettier

TypeScript type checking

Content validation scripts

npm / Bun compatible tooling

Project Structure

hasan-bukhari-portfolio/
│
├── src/
│   ├── assets/          # Images and visual assets
│   ├── components/      # Shared interface components
│   ├── content/         # Portfolio, project, publication, and site data
│   ├── hooks/           # React hooks
│   ├── lib/             # Shared utilities
│   ├── routes/          # TanStack routes and project pages
│   ├── router.tsx
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
│
├── docs/                # Supporting documentation / static output
├── scripts/             # Validation and development utilities
├── package.json
└── README.md

Most of the portfolio content is kept separate from the UI under:

src/content/
├── portfolio.ts
├── publication.ts
└── site.ts

I did this mostly so I would not have project descriptions, findings, routes, and metadata scattered across a bunch of components.

Keeping the content in one place also makes it easier to update the portfolio without accidentally changing the layout at the same time.

Running Locally

Requirements

You will need:

Node.js

npm

Clone the repository:

git clone https://github.com/glitchmatrix-jpg/hasan-bukhari-portfolio.git
cd hasan-bukhari-portfolio

Install dependencies:

npm install

Start the development server:

npm run dev

Build the production version:

npm run build

Preview the production build:

npm run preview

Quality Checks

There are a few scripts I use to make sure I have not quietly broken something while updating the site.

Run linting:

npm run lint

Run the TypeScript checks:

npm run typecheck

Validate the portfolio content:

npm run validate

Format the codebase:

npm run format

A Few Rules I Try to Follow

I wanted the portfolio to be useful, but I also wanted it to be accurate.

So I try to stick to a few fairly simple rules.

Do not make a project sound more finished than it is.If something is still in development, I say that.

Do not hide the limitations.Especially in research, a result without context can be very misleading.

Do not publish things just because they would look impressive.Private repositories, unpublished lab results, personal data, third-party content, and unapproved material stay private.

Negative results are still results.If an experiment failed or a method did not work the way I hoped, that is usually still worth documenting.

Explain the reasoning, not just the stack.Knowing that something uses React, Python, or PyTorch is useful, but I am usually more interested in why a particular decision was made.

About Me

I'm currently studying Computer Science at the University of Southern Mississippi, and my academic interests mostly sit around:

software engineering · machine learning · computational biology · bioinformatics · genomics · data science

I tend to bounce between fields a lot.

One week I might be working on a desktop document-governance system, the next I am looking at genomic data or neural networks, and then somehow I end up debugging a Pygame boss fight or redesigning a poetry book cover.

I like projects where different areas overlap, especially where software can make scientific or technical work easier to understand, test, or use.

I also write poetry and make games, mostly because apparently I was not interested in having a normal number of hobbies.

Contact

Hasan Bukhari

Portfolio: glitchmatrix-jpg.github.io/hasan-bukhari-portfolio

Repository: github.com/glitchmatrix-jpg/hasan-bukhari-portfolio

LinkedIn: linkedin.com/in/hasan-bukhari

GitHub: @glitchmatrix-jpg

Additional research & game projects: @PurplePoet25

Email: hasan.bukhari25@gmail.com

<p align="center">
  <sub>Built and maintained by Hasan Bukhari.</sub>
</p>
