<div align="center">

# Hasan Bukhari

### Software · Computational Biology · Research · Writing

Computer Science student at the University of Southern Mississippi.

I build software, study biological signals, and occasionally end up making games or writing poetry instead.

<br>

[**View the live portfolio ↗**](https://glitchmatrix-jpg.github.io/hasan-bukhari-portfolio/)
&nbsp;&nbsp;·&nbsp;&nbsp;
[GitHub](https://github.com/glitchmatrix-jpg)
&nbsp;&nbsp;·&nbsp;&nbsp;
[LinkedIn](https://www.linkedin.com/in/hasan-bukhari)

</div>

---

## About this portfolio

This repository is my personal portfolio: the place where I keep the projects, research, and creative work that I have spent the most time on and learned the most from.

Most of what I do sits somewhere between **software engineering, computational biology, machine learning, scientific software, and creative work**.

The site is split into three parts because that is honestly the easiest way to make sense of everything.

<br>

<table>
<tr>
<td width="33%" valign="top">

### 01 — Build

Software projects, tools, mobile apps, and one very persistent game project.

**Projects**
- AEGIS
- HEARTLINE
- Taaqat
- Nivala
- BioLitGraph
- To Ash Again

</td>
<td width="33%" valign="top">

### 02 — Research

Computational biology and genomics, with a lot of attention to evaluation, generalization, and limitations.

**Projects**
- CancerShift
- A17
- Comparative Fundulus Genomics

</td>
<td width="33%" valign="top">

### 03 — Write

The creative side of what I do when I am not staring at code or genomic data.

**Work**
- *Flooded*
- Student Poets Association

</td>
</tr>
</table>

---

## What I work on

### AEGIS
A local-first platform for controlled-document monitoring, deterministic change evidence, and governance.

### HEARTLINE
A native Android lyric companion with synchronized lyrics, offline support, active-media integration, and shareable lyric cards.

### Taaqat
An offline-first fitness app with a bundled exercise library, recovery-aware planning, logging, analytics, and local persistence.

### Nivala
A privacy-first nutrition tracker built around Pakistani food, including English, Urdu, and Roman Urdu aliases.

### BioLitGraph
A biomedical literature-mining tool that turns papers, normalized entities, and source evidence into explorable networks.

### To Ash Again
A four-act narrative platformer built in Python and Pygame, with multiple characters, abilities, levels, bosses, dialogue, progression, and save-state systems.

### CancerShift
An independent computational-biology project testing whether a multicancer classifier still performs when the study, sequencing platform, and patient cohort change.

### A17 — Predicting Chromatin Contact Maps from Epigenomic Signals
A residual neural-network project studying whether epigenomic signals can predict Hi-C contact structure on chromosomes held out from model development.

### Comparative Fundulus Genomics
Ongoing undergraduate research comparing chromosome-scale *Fundulus* assemblies through synteny, chromosome correspondence, and technical reporting.

### Flooded
A poetry collection currently in development, including the writing itself as well as the physical and visual design of the book.

### Student Poets Association
The creative-writing community I founded at Southern Miss, built around open mics, showcases, collaborative programming, and giving student writers somewhere to share their work.

---

## How I built the portfolio

I did not really want this to feel like a résumé stretched into a website.

I wanted each project to have enough room to explain what I was actually trying to do, what worked, what did not, and what I learned from it.

Most project pages are built around questions like:

- What was I trying to solve?
- Why did I build or study this?
- How does it work?
- What did I find?
- What are the limitations?
- What would I change if I did it again?

That matters especially for research. It is very easy to make a result sound more impressive by leaving out the uncomfortable parts, so I try to keep the limitations close to the findings instead of hiding them somewhere at the bottom.

I use the same approach for software projects too. If something is a release candidate, private, incomplete, experimental, or only partially validated, I would rather say that clearly than make the project sound further along than it really is.

---

## Selected work

| Project | Area | Focus |
| --- | --- | --- |
| **AEGIS** | Software Engineering | Desktop systems, document governance, deterministic change evidence |
| **HEARTLINE** | Android | Kotlin, Jetpack Compose, media sessions, offline lyrics |
| **CancerShift** | Computational Biology | Cross-platform ML evaluation, TCGA, GEO, CPTAC-GDC |
| **A17** | Computational Genomics | Epigenomic signals, Hi-C prediction, residual neural networks |
| **BioLitGraph** | Scientific Software | PubMed, PubTator, entity normalization, evidence networks |
| **Taaqat** | Mobile | Flutter, offline-first architecture, local persistence |
| **Nivala** | Mobile | Privacy-first nutrition, multilingual Pakistani food data |
| **Comparative Fundulus Genomics** | Genomics | Synteny, chromosome correspondence, comparative assemblies |
| **To Ash Again** | Game Development | Python, Pygame, narrative systems, progression |
| **Flooded** | Writing | Poetry and book design |

> The full portfolio has individual pages for the projects above, including implementation details, research context, findings, limitations, and related work.

### [→ Open the full portfolio](https://glitchmatrix-jpg.github.io/hasan-bukhari-portfolio/)

---

## A few rules I try to follow

I wanted the portfolio to be useful, but I also wanted it to be accurate.

**Do not make a project sound more finished than it is.**  
If something is still in development, I say that.

**Do not hide the limitations.**  
Especially in research, a result without context can be very misleading.

**Do not publish things just because they would look impressive.**  
Private repositories, unpublished lab results, personal data, third-party content, and unapproved material stay private.

**Negative results are still results.**  
If an experiment failed or a method did not work the way I hoped, that is usually still worth documenting.

**Explain the reasoning, not just the stack.**  
Knowing that something uses React, Python, or PyTorch is useful, but I am usually more interested in why a particular decision was made.

---

## Tech stack

The portfolio itself is built with:

| | |
| --- | --- |
| **Core** | React 19 · TypeScript · TanStack Start · TanStack Router · Vite · Tailwind CSS 4 |
| **Interface** | Radix UI · Lucide · Three.js · Recharts · custom responsive layout and typography |
| **Development** | ESLint · Prettier · TypeScript type checking · content validation scripts · npm / Bun |

---

## Project structure

```text
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
├── docs/
├── scripts/
├── package.json
└── README.md
```

Most of the portfolio content is kept separate from the UI:

```text
src/content/
├── portfolio.ts
├── publication.ts
└── site.ts
```

I did this mostly so I would not have project descriptions, findings, routes, and metadata scattered across a bunch of components.

Keeping the content in one place also makes it easier to update the portfolio without accidentally changing the layout at the same time.

---

## Running locally

### Requirements

- Node.js
- npm

Clone the repository:

```bash
git clone https://github.com/glitchmatrix-jpg/hasan-bukhari-portfolio.git
cd hasan-bukhari-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Quality checks

```bash
npm run lint
npm run typecheck
npm run validate
```

Format the codebase with:

```bash
npm run format
```

---

## About me

I'm currently studying Computer Science at the **University of Southern Mississippi**, and my academic interests mostly sit around:

**software engineering · machine learning · computational biology · bioinformatics · genomics · data science**

I tend to bounce between fields a lot.

One week I might be working on a desktop document-governance system, the next I am looking at genomic data or neural networks, and then somehow I end up debugging a Pygame boss fight or redesigning a poetry book cover.

I like projects where different areas overlap, especially where software can make scientific or technical work easier to understand, test, or use.

I also write poetry and make games, mostly because apparently I was not interested in having a normal number of hobbies.

---

## Contact

- **Portfolio:** [glitchmatrix-jpg.github.io/hasan-bukhari-portfolio](https://glitchmatrix-jpg.github.io/hasan-bukhari-portfolio/)
- **Repository:** [github.com/glitchmatrix-jpg/hasan-bukhari-portfolio](https://github.com/glitchmatrix-jpg/hasan-bukhari-portfolio)
- **LinkedIn:** [linkedin.com/in/hasan-bukhari](https://www.linkedin.com/in/hasan-bukhari)
- **GitHub:** [@glitchmatrix-jpg](https://github.com/glitchmatrix-jpg)
- **Additional research & game projects:** [@PurplePoet25](https://github.com/PurplePoet25)
- **Email:** [hasan.bukhari25@gmail.com](mailto:hasan.bukhari25@gmail.com)

<br>

<div align="center">

Built and maintained by **Hasan Bukhari**.

[**Visit the portfolio ↗**](https://glitchmatrix-jpg.github.io/hasan-bukhari-portfolio/)

</div>
