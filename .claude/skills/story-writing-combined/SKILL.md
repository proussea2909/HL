---
name: story-writing
description: Complete fiction-writing toolkit for managing a story project in markdown. Use when the user wants to start or initialize a story, book, or novel; build worldbuilding (locations, magic/political/technology systems, factions, cultures, history); create and track characters, relationships, family trees, and arcs; plan plot structure, act structure, pacing, foreshadowing, and timelines; write or outline chapters and scenes; revise prose and run continuity or consistency checks; or validate, reindex, count words, import/export, and maintain a story project. Bundles the full story-skills workflow: story-init, worldbuilding, character-management, plot-structure, chapter-writing, revision-continuity, and story-maintenance.
---

# Story Writing (combined)

This is a single combined skill that bundles seven story-writing workflows into one file.
It is assembled verbatim from the open-source story-skills project
(https://github.com/danjdewhurst/story-skills, MIT, commit c482d48). Each section below is
one of the original sub-skills. Reference templates that the sections refer to are inlined
in the "Reference Templates" appendix at the end.

## Contents

1. Story Init
2. Worldbuilding
3. Character Management
4. Plot Structure
5. Chapter Writing
6. Revision & Continuity
7. Story Maintenance
8. Reference Templates (appendix)


---

# ════════════════════════════════════════════════════════
# SECTION: story-init
# ════════════════════════════════════════════════════════


# Story Initialization

## Overview

Initialize a new story project with a structured markdown folder layout. Creates the story bible, registries, scene tracking, continuity state, glossary, worldbuilding folders, plot structure, and chapter tracker - all as cross-referenced markdown files with YAML frontmatter.

## When to Use

- Starting a new story, book, or fiction project
- Setting up the folder structure for an existing story idea
- NOT for adding to an existing story project (use the domain-specific skills instead)
- NOT for converting an existing manuscript or chapter drafts: run `story import <source> --title "{Title}"` instead, then build out the bible from the entity candidates it prints

## Workflow

1. Ask for basic story information:
   - Title
   - Genre and sub-genre
   - Brief synopsis (2-3 sentences)
   - Setting era/time period
   - Key themes (2-4)
   - POV style (first-person, third-person-limited, third-person-omniscient)
   - Tense (past, present)

If the Story CLI is available, prefer using it to create the starter project, then inspect and refine the generated files as needed:

```shell
story init "{Title}" --genre "{genre}" --sub-genre "{sub-genre}" --setting-era "{era}" --pov "{pov-style}" --tense "{tense}" --synopsis "{synopsis}" --theme "{theme-1}" --theme "{theme-2}"
```

If `story` is not installed, use the bundled maintenance fallback when available, resolving the script path relative to the `story-maintenance` skill:

```shell
node ../story-maintenance/scripts/story.js init "{Title}"
```

If neither command is available, create the files manually using the steps below.

2. Create the folder structure at the current working directory:

```
{story-title-kebab}/
├── story.md
├── characters/
│   └── _index.md
├── worldbuilding/
│   ├── _index.md
│   ├── locations/
│   ├── systems/
│   ├── factions/
│   └── artifacts/
├── plot/
│   ├── _index.md
│   ├── arcs/
│   └── timeline.md
├── scenes/
│   └── _index.md
├── continuity/
│   ├── state.md
│   ├── questions/
│   │   └── _index.md
│   └── promises/
│       └── _index.md
├── glossary/
│   ├── _index.md
│   └── terms/
└── chapters/
    └── _index.md
```

3. Populate `story.md` with the story bible:

```yaml
---
title: "{Title}"
schema-version: 2
genre: {genre}
sub-genre: {sub-genre}
setting-era: {era}
status: planning
themes:
  - {theme-1}
  - {theme-2}
pov: {pov-style}
tense: {tense}
---
```

Below the frontmatter, include sections:
- **Synopsis** - the 2-3 sentence synopsis provided
- **Tone & Style** - brief notes on the story's voice (derive from genre/themes)
- **Notes** - empty section for the user to fill in

4. Populate each `_index.md` with an empty registry:

**`characters/_index.md`:**
```markdown
---
type: character-registry
story: {story-title-kebab}
---

# Characters

## Registry

| Name | Role | Status | File |
|------|------|--------|------|
| *No characters yet* | | | |

## Relationship Map

*No relationships defined yet.*

## Family Trees

*No family trees defined yet.*
```

**`worldbuilding/_index.md`:**
```markdown
---
type: world-registry
story: {story-title-kebab}
---

# Worldbuilding

## World Overview

*Describe the world at a high level here.*

## Locations

| Name | Type | Region | File |
|------|------|--------|------|
| *No locations yet* | | | |

## Systems

| Name | Type | File |
|------|------|------|
| *No systems yet* | | |

## Factions

| Name | Type | Status | File |
|------|------|--------|------|
| *No factions yet* | | | |

## Artifacts

| Name | Type | Status | File |
|------|------|--------|------|
| *No artifacts yet* | | | |
```

**`plot/_index.md`:**
```markdown
---
type: plot-registry
story: {story-title-kebab}
structure: three-act
---

# Plot Structure

## Story Structure

**Model:** Three-Act Structure (adjust as needed)

## Arcs

| Name | Type | Status | File |
|------|------|--------|------|
| *No arcs yet* | | | |

## Theme Tracking

| Theme | Arcs | Chapters |
|-------|------|----------|
| *No themes tracked yet* | | |
```

**`plot/timeline.md`:**
```markdown
---
type: timeline
story: {story-title-kebab}
---

# Story Timeline

| When | Event | Arc | Chapter |
|------|-------|-----|---------|
| *No events yet* | | | |
```

**`chapters/_index.md`:**
```markdown
---
type: chapter-registry
story: {story-title-kebab}
---

# Chapters

## Registry

| # | Title | POV | Status | Word Count | File |
|---|-------|-----|--------|------------|------|
| *No chapters yet* | | | | | |

## Total Word Count: 0
```

Also create the v2 support files:

- `scenes/_index.md` with frontmatter `type: scene-registry`
- `continuity/state.md` with frontmatter `type: continuity-state`, `current-chapter: 0`, and empty `character-state`, `object-state`, and `knowledge-state` lists
- `continuity/questions/_index.md` with frontmatter `type: question-registry`
- `continuity/promises/_index.md` with frontmatter `type: promise-registry`
- `glossary/_index.md` with frontmatter `type: glossary-registry`

If manual initialization gets tedious, stop and ask the user to install or run the Story CLI rather than inventing a different project shape.

5. Present a summary of what was created and suggest next steps:
   - "Add your first character" (triggers character-management skill)
   - "Start worldbuilding" (triggers worldbuilding skill)
   - "Define your plot structure" (triggers plot-structure skill)
   - "Run `story next .`" to show deterministic next actions

6. When CLI access is available, run a final maintenance check:

```shell
story validate {story-title-kebab}
```

If using the bundled fallback, replace `story` with `node ../story-maintenance/scripts/story.js`, resolving the path relative to this skill folder.

## Conventions

These conventions apply across ALL story skills:

- **Kebab-case filenames** for all entity files (e.g., `sera-voss.md`, `ashen-citadel.md`)
- **YAML frontmatter** on every file for structured metadata
- **Schema version** - `story.md` frontmatter includes `schema-version: 2`
- **`_index.md`** files are authoritative registries for each domain
- **`story.md`** is the top-level bible read by all skills for context
- **Bidirectional cross-links** - when referencing another entity, update both files
- **Character identifiers** use the kebab-case filename without extension (e.g., `sera-voss`)
- **Death tracking** - when a character dies on the page, set `status: deceased` and `died-in: chapter-{NN}` so `story continuity` can flag posthumous appearances
- **`mentions` vs `characters`** - chapter and scene frontmatter lists characters present in-scene under `characters`; characters who are only referenced, remembered, recorded, or seen in flashback go under `mentions`
- **Scene identifiers** use `chapter-{NN}-scene-{NN}` and live in `scenes/`
- **Continuity state** lives in `continuity/state.md`, with open questions and promises tracked under `continuity/questions/` and `continuity/promises/`
- **Markdown-first artifacts** - create and edit story content directly in the target `.md` files. Do not create project-local build scripts, generator scripts, or bulk writer scripts (for example `build-*.js`) to emit story files.
- **CLI helpers stay external** - the only JavaScript helper agents should run is the installed or bundled Story CLI (`story`, `bun run story --`, or `story-maintenance/scripts/story.js`) for deterministic maintenance. Do not copy it into the user's story project, and remove any unavoidable scratch helper before finishing.

---

# ════════════════════════════════════════════════════════
# SECTION: worldbuilding
# ════════════════════════════════════════════════════════


# Worldbuilding

## Overview

Create and manage world elements for a story project. Locations, systems (magic, politics, technology, etc.), factions, and artifacts are stored as markdown files in the `worldbuilding/` directory with YAML frontmatter. All elements cross-reference characters and other story elements.

## Prerequisites

A story project must already exist (created via the story-init skill). Verify by checking for `story.md` in the project root.

## Creating a Location

1. Read `story.md` for genre, era, and tone context
2. Read `worldbuilding/_index.md` for existing locations and systems
3. Ask for the location's name and type (city, fortress, wilderness, etc.)
4. Build the location through conversation, covering:
   - Physical description and atmosphere
   - History relevant to the story
   - Culture and customs of inhabitants
   - Notable features characters will interact with
   - Current state at story's timeline
5. Write the file using `references/location-template.md`
6. Save to `worldbuilding/locations/{name-kebab}.md`
7. Update `worldbuilding/_index.md` locations table
8. If notable characters are listed, verify those character files exist and add this location's kebab-case identifier to each character file's `locations` frontmatter list
9. When CLI access is available, run `story reindex .`, `story links .`, and `story validate .`

## Creating a System

1. Read `story.md` for genre and themes context
2. Read `worldbuilding/_index.md` for existing systems
3. Identify the system type and consult `references/world-element-types.md` for the relevant prompts
4. Build the system through conversation, addressing the key questions for that type
5. Write the file using `references/system-template.md`
6. Save to `worldbuilding/systems/{name-kebab}.md`
7. Update `worldbuilding/_index.md` systems table
8. Cross-reference with characters who interact with the system (e.g., magic-users for a magic system)
9. When CLI access is available, run `story reindex .`, `story links .`, and `story validate .`

## Creating A Faction

Use `story add faction "{Faction Name}" --type "{family|guild|government|military|religion|company|community|criminal|other}"` when the CLI is available. Otherwise create `worldbuilding/factions/{name-kebab}.md` with frontmatter fields `name`, `type`, `status`, `members`, `locations`, and `tags`.

Cover:
- Purpose and ideology
- Power base, resources, and territory
- Important members
- Conflicts and pressure points

## Creating An Artifact

Use `story add artifact "{Artifact Name}" --type "{object|weapon|document|technology|relic|symbol|resource|other}"` when the CLI is available. Otherwise create `worldbuilding/artifacts/{name-kebab}.md` with frontmatter fields `name`, `type`, `status`, `owner`, `location`, and `tags`.

Cover:
- Description and recognition details
- Function, constraints, and costs
- History and prior owners
- Current owner/location state

## Updating World Elements

1. Read the existing file
2. Make the requested changes
3. If cross-references changed, update the linked files
4. Update `worldbuilding/_index.md` if name, type, or status changed
5. When CLI access is available, run `story reindex .`, `story links .`, and `story validate .`

## Cross-Referencing

- Locations reference characters via `notable-characters` in frontmatter
- Characters reference locations via `locations` in frontmatter
- Factions reference character members and locations
- Artifacts reference an owner character or faction and a current location
- Systems reference practitioners via character tags
- When a location is used in a chapter, the chapter's frontmatter `locations` field links back
- Keep the `worldbuilding/_index.md` world overview section current as elements are added

## CLI Maintenance

Use the Story CLI when it is available. If `story` is not installed but the `story-maintenance` skill is present, use `node ../story-maintenance/scripts/story.js` with the same arguments, resolving the path relative to this skill folder. If no CLI is available, perform the registry and backlink checks manually.

## Reference Files

- **`references/location-template.md`** - Template for location files
- **`references/system-template.md`** - Template for system files
- **`references/faction-template.md`** - Template for faction files
- **`references/artifact-template.md`** - Template for artifact/object files
- **`references/world-element-types.md`** - Detailed prompts for each system type (magic, political, technology, religion, economic, military, social)

---

# ════════════════════════════════════════════════════════
# SECTION: character-management
# ════════════════════════════════════════════════════════


# Character Management

## Overview

Create and manage rich character profiles for a story project. Each character is a markdown file with YAML frontmatter in the `characters/` directory. Characters are cross-referenced with other story elements through kebab-case identifiers.

## Prerequisites

A story project must already exist (created via the story-init skill). Verify by checking for `story.md` in the project root.

## Creating a Character

1. Read `story.md` for genre, themes, and tone context
2. Read `characters/_index.md` for existing characters
3. Ask for the character's name and role (protagonist, antagonist, supporting, minor)
4. Build the profile through conversation, exploring:
   - Appearance and distinguishing features
   - Personality, traits, and quirks
   - Backstory and formative events
   - Motivations (external wants vs internal needs)
   - Voice and speech patterns (ask for example dialogue)
   - Character arc (starting state, turning points, ending state)
   - Key life events for the timeline
5. Write the character file using the template in `references/character-template.md`
6. Save to `characters/{name-kebab}.md`, or use `story add character "{Name}" --role "{role}"` when the CLI is available
7. Update `characters/_index.md` registry table
8. If relationships reference existing characters, update those character files too
9. When CLI access is available, run the maintenance pass in the story root:

```shell
story reindex .
story links .
story validate .
```

## Updating a Character

1. Read the existing character file
2. Read `characters/_index.md` for context on other characters
3. Make the requested changes
4. If relationships changed, update the other character's file (bidirectional)
5. Update `characters/_index.md` if role or status changed
6. When CLI access is available, run `story reindex .`, `story links .`, and `story validate .`

## Managing Relationships

Reference `references/relationship-types.md` for the full list of relationship types and inverse pairs.

When adding a relationship:
- Add the relationship entry to the character's frontmatter
- Add the inverse relationship to the other character's frontmatter
- Update the Relationship Map section in `characters/_index.md`

## Family Trees

Family trees are maintained in the `characters/_index.md` under the "Family Trees" section. Format:

```markdown
## Family Trees

### {Family Name}
- **{Character Name}** ({status}) - [{name-kebab}.md]
  - **{Child Name}** - [{name-kebab}.md]
  - **{Child Name}** - [{name-kebab}.md]
```

Indent children under parents. Note marriages/partnerships inline.

## Cross-Referencing

- When a character is referenced in worldbuilding (e.g., a location's `notable-characters`), ensure the link exists both ways
- Character-location backlinks live in the character file's `locations` frontmatter list
- Faction memberships live in `worldbuilding/factions/{faction-kebab}.md` under `members`
- Artifact ownership can reference a character id in `worldbuilding/artifacts/{artifact-kebab}.md`
- When a character appears in a plot arc, ensure they're listed in the arc's `characters` frontmatter
- Character tags should be consistent across the project (e.g., if `magic-user` is used, always use that exact tag)

## CLI Maintenance

Use the Story CLI when it is available. If `story` is not installed but the `story-maintenance` skill is present, use `node ../story-maintenance/scripts/story.js` with the same arguments, resolving the path relative to this skill folder. If no CLI is available, perform the registry and backlink checks manually.

## Reference Files

- **`references/character-template.md`** - Full blank template for character profiles
- **`references/relationship-types.md`** - Complete relationship type reference with inverse pairs

---

# ════════════════════════════════════════════════════════
# SECTION: plot-structure
# ════════════════════════════════════════════════════════


# Plot Structure

## Overview

Plan and manage story arcs, plot points, foreshadowing, and narrative timeline. Each arc is a markdown file in `plot/arcs/` with a chronological timeline maintained in `plot/timeline.md`. The plot index tracks all arcs, their status, and theme coverage.

## Prerequisites

A story project must already exist (created via the story-init skill). Verify by checking for `story.md` in the project root.

## Choosing a Story Structure

1. Read `story.md` for genre and themes
2. Consult `references/structure-models.md` for available structures
3. Recommend a structure based on genre (default to three-act if unclear)
4. Update `plot/_index.md` frontmatter `structure` field
5. Populate the story structure section with the beat sheet
6. When CLI access is available, run `story validate .`

## Creating an Arc

1. Read `story.md` for themes
2. Read `plot/_index.md` for existing arcs
3. Read `characters/_index.md` to understand available characters
4. Ask for:
   - Arc name
   - Type (main, subplot, character, thematic)
   - Which characters are involved
   - Which themes it serves
5. Build the arc through conversation: setup, escalations, climax, resolution
6. Write the file using `references/arc-template.md`
7. Save to `plot/arcs/{arc-name-kebab}.md`
8. Update `plot/_index.md` arcs table
9. Update theme tracking in `plot/_index.md`
10. If characters are referenced, verify they exist in `characters/`
11. When CLI access is available, run `story reindex .`, `story links .`, and `story validate .`

## Managing Plot Points

Plot points live within arc files in the "Plot Points" table. When adding a plot point:

1. Read the relevant arc file
2. Add the plot point to the table with chapter reference (if known)
3. Add the event to `plot/timeline.md` in chronological order
4. If the plot point involves foreshadowing, add it to the arc's foreshadowing table
5. If the plot point creates a reader promise or mystery, create or update a record in `continuity/promises/` or `continuity/questions/`
6. When CLI access is available, run `story validate .`

## Timeline Management

The timeline at `plot/timeline.md` is a chronological master list of all story events across all arcs.

When adding events:
- Insert in chronological order
- Link to the relevant arc and chapter
- Keep entries concise (one line per event)

When reviewing the timeline:
- Check for chronological consistency
- Identify pacing issues (too many events clustered, long gaps)
- Flag arcs that haven't progressed

## Foreshadowing Tracking

Each arc tracks its own foreshadowing in the "Foreshadowing" table:
- **Planted:** What hint or setup is placed
- **Payoff:** What the payoff will be
- **Chapter Planted / Chapter Payoff:** Where each occurs
- **Status:** `planned`, `planted`, or `paid-off`

During chapter writing, flag any `planted` items that haven't been paid off as reminders.

For durable cross-arc setup/payoff tracking, also maintain `continuity/promises/{promise-kebab}.md` with `status`, `planted`, `payoff`, `arcs`, and `characters`. For mystery or open-continuity tracking, maintain `continuity/questions/{question-kebab}.md`.

## Cross-Referencing

- Arcs reference characters via frontmatter `characters` field
- Arcs reference themes via frontmatter `themes` field
- Plot points reference chapters
- Timeline entries link arcs and chapters
- Theme tracking in `plot/_index.md` maps themes to arcs and chapters
- Promises and questions reference chapters, arcs, and characters where relevant

## CLI Maintenance

Use the Story CLI when it is available. If `story` is not installed but the `story-maintenance` skill is present, use `node ../story-maintenance/scripts/story.js` with the same arguments, resolving the path relative to this skill folder. If no CLI is available, perform the registry and backlink checks manually.

## Reference Files

- **`references/arc-template.md`** - Template for arc files with frontmatter and sections
- **`references/question-template.md`** - Template for continuity questions and mysteries
- **`references/promise-template.md`** - Template for setup/payoff tracking
- **`references/structure-models.md`** - Story structure models (three-act, hero's journey, save the cat, kishotenketsu, five-act) with beat sheets

---

# ════════════════════════════════════════════════════════
# SECTION: chapter-writing
# ════════════════════════════════════════════════════════


# Chapter Writing

## Overview

Write story chapters using an outline-first workflow. Gathers context from all other story elements (characters, world, plot) to maintain consistency, builds a beat-by-beat outline for approval, then writes full prose. After writing, updates all cross-references (chapter index, timeline, foreshadowing).

## Prerequisites

A story project must already exist with at least:
- `story.md` (story bible)
- At least one character in `characters/`
- A plot structure in `plot/_index.md` (recommended but not required for first chapters)

## Recommended Companion Skill

Before drafting or revising chapter prose, check whether the `better-writing` skill is available in the active agent environment.

- If `better-writing` is available, use it for prose quality, voice calibration, anti-generic writing checks, and the final pre-flight pass before saving the chapter.
- If `better-writing` is not available, recommend installing [forjd/better-writing](https://github.com/forjd/better-writing) with `npx skills add forjd/better-writing` or `bunx skills add forjd/better-writing`, then continue with this skill's built-in writing guidelines if the user does not install it.

## Outline-First Workflow

### 1. Gather Context

Read these files to understand the current story state:

- `story.md` - genre, themes, POV, tense
- `chapters/_index.md` - what's been written, current word count
- `plot/_index.md` - arc status, what needs to happen next
- `plot/timeline.md` - chronological position
- `scenes/_index.md` - scene state already recorded
- `continuity/state.md` - character, object, and knowledge state
- `continuity/questions/_index.md` and `continuity/promises/_index.md` - unresolved mysteries and setup/payoff commitments

If this isn't the first chapter, also read:
- The previous chapter file - for continuity (ending state, cliffhangers, emotional tone)
- Active arc files in `plot/arcs/` - for upcoming plot beats

### 2. Determine Chapter Scope

Ask the user:
- What should this chapter cover? (or suggest based on plot arcs)
- Whose POV?
- Which location(s)?

If plot arcs exist, suggest the next logical beats to advance.

### 3. Build the Outline

Create a beat-by-beat outline listing:
- Each scene/beat and what it accomplishes
- POV character and location for each beat
- Which arc plot points are advanced
- Any foreshadowing to plant or pay off
- Any machine-readable state changes the scene should record

Load the POV character's file for voice reference. Load relevant location files for setting details.

Present the outline to the user for approval. Revise until approved.

### 4. Write the Chapter

With the approved outline, write the full prose:

- Follow the POV and tense from `story.md`
- Use the POV character's voice and speech patterns from their profile
- Ground scenes in location details from worldbuilding files
- Consult `references/writing-guidelines.md` for prose craft guidance
- When available, apply the `better-writing` skill before finalizing prose
- Use the chapter template from `references/chapter-template.md`
- Include the approved outline in the file above the prose (for reference)

Save to `chapters/chapter-{NN}.md` with appropriate frontmatter.

Create or update a matching scene file in `scenes/chapter-{NN}-scene-{NN}.md` for each scene. Scene frontmatter should include `chapter`, `scene`, `pov`, `location`, `characters`, `arcs-advanced`, `status`, and `state-changes` so continuity survives beyond prose.

Write chapter prose directly into the chapter markdown file. Do not stage prose in project-local build scripts, generator scripts, or bulk writer scripts (for example `build-*.js`) to emit chapters. If a temporary helper is truly unavoidable for mechanical file operations, keep it outside the story project and remove it before finishing.

### 5. Post-Write Updates

After the chapter is written:

1. **Update `chapters/_index.md`** - add chapter to registry, update total word count
2. **Update `plot/timeline.md`** - add events from this chapter in chronological order
3. **Update arc files** - mark advanced plot points with chapter reference
4. **Update scene records** - make sure every scene has a corresponding `scenes/` file
5. **Update continuity** - carry forward character state, object ownership, knowledge, open questions, and promises/payoffs
6. **Update foreshadowing** - mark any items as `planted` or `paid-off` with chapter reference
7. **Note character changes** - if a character's status changed (injury, revelation, relationship shift), flag for the user to update the character file
8. **Run CLI maintenance when available:**

```shell
story wordcount . --write
story reindex .
story links .
story validate .
story next .
```

Present a summary of all updates made.

## Scene Breaks

Within a chapter, separate scenes with `---`. Each scene should have a clear POV character (even if the same as the previous scene) and location.

## Revision Handoff

When asked to revise, line edit, polish, or continuity-check an existing chapter, use the `revision-continuity` skill. This skill owns new drafting and chapter creation; `revision-continuity` owns targeted edits, continuity audits, and post-draft cleanup.

## CLI Maintenance

Use the Story CLI when it is available. If `story` is not installed but the `story-maintenance` skill is present, use `node ../story-maintenance/scripts/story.js` with the same arguments, resolving the path relative to this skill folder. If no CLI is available, perform the registry, backlink, and word-count checks manually.

## Reference Files

- **`references/chapter-template.md`** - Frontmatter and structure template for chapter files
- **`references/scene-template.md`** - Machine-readable continuity template for scenes
- **`references/writing-guidelines.md`** - Prose craft guidance: show-don't-tell, POV, dialogue, pacing, scene structure, continuity

---

# ════════════════════════════════════════════════════════
# SECTION: revision-continuity
# ════════════════════════════════════════════════════════


# Revision Continuity

## Overview

Revise existing Story Skills projects without losing continuity. Use this skill for targeted chapter edits, continuity audits, developmental revision, line edits, and pre-flight checks before drafting the next chapter.

## Prerequisites

A story project must already exist. Verify by checking for `story.md` in the project root, then run or inspect `story report .` when CLI access is available.

## Revision Workflow

1. Clarify the pass type unless the user already specified it:
   - **Continuity audit** - find contradictions, stale references, timeline problems, missing backlinks, or word-count drift
   - **Developmental revision** - improve structure, scene purpose, character motivation, pacing, stakes, and arc progression
   - **Line edit** - improve clarity, voice, rhythm, dialogue, and sensory specificity without changing plot facts
   - **Proof/polish** - fix small wording, grammar, repetition, and formatting issues
2. Read the relevant context:
   - `story.md`
   - `chapters/_index.md`
   - The target chapter(s)
   - Previous and next chapters when present
   - Relevant character, location, system, and arc files referenced by the chapter frontmatter
   - Matching scene files in `scenes/`
   - `continuity/state.md`, open questions, and promises/payoffs
   - `plot/timeline.md` and active arc files for continuity-sensitive edits
3. Create a concise revision plan:
   - What will change
   - What must stay fixed for continuity
   - Which files may need updates beyond the chapter
4. Make targeted edits directly in markdown files. Do not create project-local scripts to rewrite prose.
5. Update dependent metadata:
   - Chapter frontmatter `status` (`draft` -> `revised`, `revised` -> `final` only when appropriate)
   - Chapter `word-count` via CLI when available
   - `plot/timeline.md` if events changed
   - `scenes/` records if POV, location, participants, or state changes moved
   - `continuity/state.md`, `continuity/questions/`, or `continuity/promises/` when knowledge, object ownership, mystery state, or payoffs changed
   - Arc plot points or foreshadowing status if the revision changes setup/payoff
   - Character or location files when state, relationship, or location references changed
6. Run maintenance:

```shell
story wordcount . --write
story reindex .
story links .
story validate .
story continuity .
story doctor .
```

`story continuity` deterministically checks death ordering (`died-in` vs later appearances), promise/question chapter ordering, unfired setups, POV/cast consistency, and `continuity/state.md` references. For intentional flashbacks, memories, or recordings of dead characters, list them under chapter or scene `mentions` instead of `characters`.

If `story` is not installed, use `bun run story --` from this repository or the bundled `story-maintenance/scripts/story.js` fallback when available.

## Continuity Audit Checklist

Run `story continuity .` first to collect the deterministic findings, then check for what the CLI cannot judge:

- Character knowledge: no one acts on information they have not learned
- Character state: injuries, emotions, alliances, location, and status carry forward
- Timeline: time of day, travel time, sequence, and cause/effect stay coherent
- Plot arcs: each changed scene still advances or intentionally pauses an arc
- Foreshadowing: planted and paid-off items match arc files
- Promises/questions: durable continuity records match what the chapter now reveals or withholds
- Scene state: every chapter scene has machine-readable POV, location, participants, arcs, and state-change notes
- World rules: magic, technology, politics, and geography stay consistent with worldbuilding files
- References: chapter frontmatter lists every major character, location, and arc advanced in the prose
- Registries: indexes, word counts, and links are current after edits

## Reporting

When the user asks for an audit rather than direct edits, return findings ordered by severity with file references and concrete fixes. When the user asks for revision, summarize the edited files, changed continuity facts, and maintenance results.

---

# ════════════════════════════════════════════════════════
# SECTION: story-maintenance
# ════════════════════════════════════════════════════════


# Story Maintenance

## Overview

Run deterministic maintenance for Story Skills projects. Use the CLI for structure validation, registry rebuilds, word counts, link checks, continuity checks, project reports, next-action reports, schema migration, entity helpers, manuscript import, and manuscript export. The creative skills still own story decisions; this skill handles mechanical consistency.

## CLI Access

Prefer the first available command:

1. `story <command>` - when the package bin is installed
2. `bun run story -- <command>` - when working from this repository
3. `node scripts/story.js <command>` - bundled fallback, resolving `scripts/story.js` relative to this skill folder

If none of these are available, perform the requested maintenance manually using the conventions in `story-init`.

Run the installed or bundled CLI in place. Do not copy `scripts/story.js` into the user's story project, and do not create project-local build scripts, generator scripts, or bulk writer scripts to generate story content. Story projects should remain markdown-first, plus explicitly requested exports such as `manuscript.md`.

## Commands

Run commands from the story project root, or pass the story path explicitly.

```shell
story validate .
story reindex .
story wordcount . --write
story links .
story continuity .
story import draft.md --title "Title"
story report .
story report . --actionable
story next .
story doctor .
story migrate .
story add character "Name"
story rename character old-id "New Name"
story remove promise old-promise
story export . --out manuscript.md
story build . --format markdown
story build . --format epub
story build . --format docx
```

Use:

- `validate` after initialization and at the end of any multi-file edit
- `reindex` after adding/removing/renaming characters, locations, systems, arcs, or chapters
- `wordcount --write` after writing or revising chapters
- `links` after changing character relationships, notable locations, arc participants, or chapter references
- `continuity` after drafting or revising a chapter, and whenever the user asks about contradictions, dead characters appearing, unfired setups, or stale state; it deterministically checks `died-in` ordering, promise/question chapter ordering, Chekhov gaps, POV/cast consistency, and `continuity/state.md` references
- `import` when the user has an existing manuscript or chapter drafts and wants a Story Skills project built from them; follow up by creating character and location files from the printed entity candidates
- `report` when the user asks for project status, inventory, progress, or a quick health summary
- `next` before a drafting session to identify the next deterministic action
- `doctor` when the user asks what is stale, broken, or inconsistent
- `migrate` when a project has an older schema version or missing v2 paths
- `add`, `rename`, and `remove` for deterministic entity file operations when they fit the requested change
- `export` only when the user asks for a combined manuscript at a specific path
- `build` when the user asks to build the book artifact; supports markdown, EPUB, and DOCX outputs in `dist/`

## Failure Handling

- Treat CLI errors as actionable maintenance findings.
- Fix broken references, missing required files, stale registries, or incorrect word counts when the requested task implies doing so.
- Do not overwrite creative prose or story content merely to satisfy a mechanical check.
- If a validation warning reflects intentional user data, report it rather than silently changing it.

---

# Reference Templates

The following are the template/reference files the sections above refer to, inlined here so this skill is self-contained.

## `chapter-writing/references/chapter-template.md`

```markdown
# Chapter Template

Use this template when creating a new chapter file at `chapters/chapter-{NN}.md`.

```yaml
---
title: "{Chapter Title}"
number: {N}
pov: {character-kebab}
locations:
  - {location-kebab}
characters:
  - {character-kebab}
mentions:
  - {referenced-character-kebab}
arcs-advanced:
  - {arc-kebab}
status: {outline|draft|revised|final}
word-count: {N}
---
```

`characters` lists characters present in the chapter's scenes. `mentions` is optional and lists characters who are only referenced, remembered, recorded, or seen in flashback - including deceased characters, so `story continuity` does not flag them as posthumous appearances.

## Outline

*Beat-by-beat outline approved before writing:*

1. {Beat 1 - what happens, what it accomplishes}
2. {Beat 2}
3. {Beat 3}
...

**Arc beats advanced:** {Which plot points this chapter hits}
**Foreshadowing planted:** {Any setups placed}
**Foreshadowing paid off:** {Any earlier setups resolved}

---

## Chapter Text

{Full prose goes here}
```

## `chapter-writing/references/scene-template.md`

```markdown
# Scene Template

Use this template when creating a machine-readable scene file at `scenes/chapter-{NN}-scene-{NN}.md`.

```yaml
---
title: "{Scene Title}"
chapter: chapter-{NN}
scene: {N}
pov: {character-kebab}
location: {location-kebab}
characters:
  - {character-kebab}
arcs-advanced:
  - {arc-kebab}
status: {outline|draft|revised|final|complete}
state-changes:
  - target: {character-or-artifact-kebab}
    change: "{What changed and must carry forward}"
---
```

## Purpose

What this scene changes for plot, character, theme, or reader knowledge.

## Continuity Notes

Track character state, object state, knowledge, timing, and location facts that later chapters must preserve.
```

## `chapter-writing/references/writing-guidelines.md`

```markdown
# Writing Guidelines

Guidelines for writing chapter prose. Adapt to the story's genre, tone, and POV as defined in `story.md`.

## Show, Don't Tell

- Convey emotion through action, dialogue, and sensory detail rather than stating feelings
- BAD: "She was angry."
- GOOD: "Her fingers whitened around the hilt. She spoke through her teeth."

## POV Consistency

- **First person:** Everything filtered through narrator's voice, knowledge, and bias
- **Third-person limited:** Stay in one character's head per scene. Only describe what they perceive, think, and feel
- **Third-person omniscient:** Can reveal any character's thoughts, but maintain a consistent narrative voice

Do NOT shift POV mid-scene. If a POV shift is needed, use a scene break (marked with `---`).

## Dialogue

- Dialogue should reveal character, advance plot, or both
- Each character should have a distinct voice (reference their Voice & Speech Patterns)
- Use dialogue tags sparingly - "said" is invisible, fancy tags distract
- Break up long speeches with action beats
- Avoid exposition dumps disguised as conversation

## Pacing

- Short sentences and paragraphs = fast pace, tension, action
- Longer sentences and paragraphs = slower pace, reflection, atmosphere
- Vary sentence length for rhythm
- Scene length should match importance - don't over-write minor moments

## Scene Structure

Each scene should have:
- **Goal:** What the POV character wants in this scene
- **Conflict:** What opposes them
- **Outcome:** What happens (often a setback that drives the next scene)

Not every scene needs explosive conflict - quiet character moments matter too. But every scene should change something.

## Sensory Detail

Ground scenes in the physical world:
- Sight, sound, smell, touch, taste
- Choose 2-3 senses per scene, not all five
- Use details specific to the location (reference the location file)
- Sensory details should reflect the POV character's state of mind

## Chapter Openings

- Orient the reader quickly: who, where, when
- Hook with tension, mystery, or voice
- Avoid opening with weather or waking up (unless deliberately subverting the cliche)

## Chapter Endings

- End on a moment of change, revelation, or tension
- Cliffhangers work for action chapters
- Quiet resonance works for character chapters
- The last line should make the reader want to continue

## Continuity

Before writing, check:
- Previous chapter's ending (pick up threads, don't contradict)
- Character states (injuries, emotional state, knowledge)
- Timeline consistency (time of day, travel times, seasons)
- Plot arc progress (what beats need to land)
```

## `character-management/references/character-template.md`

```markdown
# Character Template

Use this template when creating a new character file at `characters/{character-name-kebab}.md`.

```yaml
---
name: "{Full Name}"
role: {protagonist|antagonist|supporting|minor}
age: {age}
status: {alive|deceased|unknown}
died-in: {chapter-NN}
aliases:
  - "{Alias 1}"
relationships:
  - character: {other-character-kebab}
    type: {relationship-type}
locations:
  - {location-kebab}
tags:
  - {tag-1}
  - {tag-2}
arc: {character-arc-theme}
---
```

`died-in` is optional. Set it (with `status: deceased`) when a character dies on the page so `story continuity` can flag appearances in later chapters; leave it out for characters who died before the story begins. Posthumous appearances in flashbacks, memories, or recordings belong in chapter/scene `mentions`, not `characters`.

## Appearance

Physical description: build, height, distinguishing features, typical clothing, how they carry themselves.

## Personality & Traits

Core personality traits, temperament, habits, quirks. What makes them memorable in a scene.

## Backstory

Key events that shaped who they are. Only include what's relevant to the story.

## Motivations & Goals

What drives them. What they want (external goal) and what they need (internal goal). How these conflict.

## Location References

Important places tied to this character. Keep this list in sync with `notable-characters` in location files.

## Voice & Speech Patterns

How they talk: vocabulary level, sentence length, verbal tics, dialect, tone. Include 2-3 example lines of dialogue that capture their voice.

Example:
> "I didn't come here to make friends. I came here because someone has to clean up this mess."

## Character Arc

- **Starting state:** Where they begin emotionally/psychologically
- **Key turning points:** What changes them
- **Ending state:** Where they end up (or projected end)

## Timeline

Key life events in chronological order:

| When | Event | Relevance |
|------|-------|-----------|
| | | |
```

## `character-management/references/relationship-types.md`

```markdown
# Relationship Types Reference

Use these types in character frontmatter `relationships[].type` field.

## Family

| Type | Description |
|------|-------------|
| parent | Parent of the other character |
| child | Child of the other character |
| sibling | Brother or sister |
| spouse | Married partner |
| partner | Unmarried romantic partner |
| grandparent | Grandparent of the other character |
| grandchild | Grandchild of the other character |
| uncle | Uncle of the other character |
| aunt | Aunt of the other character |
| nephew | Nephew of the other character |
| niece | Niece of the other character |
| cousin | Cousin |
| in-law | Related by marriage (specify in notes) |

## Social

| Type | Description |
|------|-------------|
| friend | Close friend |
| ally | Allied but not necessarily close |
| rival | Competitive relationship |
| enemy | Hostile opposition |
| mentor | Teacher/guide figure |
| student | Learner/protege |
| employer | Boss or authority figure |
| subordinate | Works under the other character |
| colleague | Works alongside |

## Story Role

| Type | Description |
|------|-------------|
| protagonist | Main character in opposition or partnership |
| antagonist | Primary opposition to this character |
| love-interest | Romantic interest |
| foil | Character who contrasts/highlights traits |
| confidant | Character they confide in |

## Usage

Relationships are bidirectional. When adding a relationship to one character, add the inverse to the other:

- If A has `type: parent` to B, then B has `type: child` to A
- If A has `type: mentor` to B, then B has `type: student` to A
- If A has `type: rival` to B, then B has `type: rival` to A (symmetric)

Inverse pairs:
- parent <-> child
- grandparent <-> grandchild
- uncle/aunt <-> nephew/niece
- mentor <-> student
- employer <-> subordinate

Symmetric types (same both ways):
- sibling, spouse, partner, friend, ally, rival, enemy, cousin, colleague, foil, confidant, love-interest
```

## `plot-structure/references/arc-template.md`

```markdown
# Arc Template

Use this template when creating a new arc file at `plot/arcs/{arc-name-kebab}.md`.

```yaml
---
name: "{Arc Name}"
type: {main|subplot|character|thematic}
status: {planned|in-progress|resolved}
characters:
  - {character-kebab}
themes:
  - {theme}
acts:
  - {act-1|act-2|act-3}
---
```

## Setup

The initial state of affairs. What's normal before the arc begins. The inciting incident that sets this arc in motion.

## Rising Action

Key escalations, complications, and developments. List in order:

1. {First escalation}
2. {Second escalation}
3. {Complication or reversal}

## Climax

The turning point of this arc. The moment of highest tension where the outcome is decided.

## Resolution

How the arc resolves. What changes as a result. How the world and characters are different.

## Plot Points

Ordered list of specific story events, linked to chapters:

| # | Plot Point | Act | Chapter | Status | Notes |
|---|------------|-----|---------|--------|-------|
| 1 | | | {planned|written|revised} | |

## Foreshadowing

Track what's planted and where it pays off:

| Planted | Payoff | Chapter Planted | Chapter Payoff | Status |
|---------|--------|-----------------|----------------|--------|
| | | | | {planned|planted|paid-off} |
```

## `plot-structure/references/promise-template.md`

```markdown
# Promise Template

Use this template for setup/payoff files at `continuity/promises/{promise-kebab}.md`.

```yaml
---
title: "{Promise Or Setup}"
status: {planned|planted|paid-off|dropped}
planted: chapter-{NN}
payoff: chapter-{NN}
arcs:
  - {arc-kebab}
characters:
  - {character-kebab}
---
```

## Setup

What the story promises the reader.

## Payoff

How the promise should be answered.

## Tracking Notes

Keep planted and payoff chapters current.
```

## `plot-structure/references/question-template.md`

```markdown
# Question Template

Use this template for open mystery or continuity-question files at `continuity/questions/{question-kebab}.md`.

```yaml
---
title: "{Question}"
status: {open|answered|resolved|dropped}
introduced: chapter-{NN}
resolved: chapter-{NN}
characters:
  - {character-kebab}
---
```

## Question

What needs to be answered or protected for continuity.

## Evidence

Known clues, constraints, and contradictions.

## Resolution Plan

How and when the answer should land.
```

## `plot-structure/references/structure-models.md`

```markdown
# Story Structure Models Reference

Common story structures with beat sheets. Use as starting points - adapt to fit the story.

## Three-Act Structure

The most common Western story structure.

| Beat | Act | Description |
|------|-----|-------------|
| Opening | 1 | Establish normal world and protagonist |
| Inciting Incident | 1 | Event that disrupts the status quo |
| First Plot Point | 1 | Protagonist commits to the journey (end of Act 1, ~25%) |
| Rising Action | 2 | Protagonist faces escalating obstacles |
| Midpoint | 2 | Major reversal or revelation (~50%) |
| Crisis | 2 | Stakes raised, things get worse |
| Second Plot Point | 2 | Final push, all seems lost (end of Act 2, ~75%) |
| Climax | 3 | Final confrontation, highest tension |
| Resolution | 3 | New normal established, loose ends tied |

## Hero's Journey (Campbell/Vogler)

Mythic structure common in fantasy and adventure.

| Beat | Phase | Description |
|------|-------|-------------|
| Ordinary World | Departure | Hero's normal life |
| Call to Adventure | Departure | Challenge or opportunity appears |
| Refusal of the Call | Departure | Hero hesitates or resists |
| Meeting the Mentor | Departure | Guide appears with wisdom or tools |
| Crossing the Threshold | Departure | Hero enters the unfamiliar world |
| Tests, Allies, Enemies | Initiation | Hero learns the rules, makes friends and foes |
| Approach to the Inmost Cave | Initiation | Preparation for the central ordeal |
| The Ordeal | Initiation | Major crisis, death and rebirth moment |
| Reward | Initiation | Hero gains what they sought |
| The Road Back | Return | Journey home, pursued by consequences |
| Resurrection | Return | Final test, transformation complete |
| Return with the Elixir | Return | Hero returns changed, bearing gifts |

## Save the Cat (Snyder)

Popular in screenwriting, works well for tightly paced stories.

| Beat | Position | Description |
|------|----------|-------------|
| Opening Image | 1% | Visual/thematic snapshot of starting state |
| Theme Stated | 5% | Theme hinted at in dialogue |
| Set-Up | 1-10% | Establish world, characters, stakes |
| Catalyst | 10% | The event that changes everything |
| Debate | 10-20% | Protagonist wrestles with the call |
| Break into Two | 20% | Protagonist chooses to act |
| B Story | 22% | Secondary story begins (often love interest) |
| Fun and Games | 20-50% | The "promise of the premise" delivered |
| Midpoint | 50% | False victory or false defeat |
| Bad Guys Close In | 50-75% | Opposition intensifies |
| All Is Lost | 75% | Lowest point, whiff of death |
| Dark Night of the Soul | 75-80% | Protagonist processes the loss |
| Break into Three | 80% | Solution discovered, often from B story |
| Finale | 80-99% | Protagonist acts, defeats opposition |
| Final Image | 99% | Visual/thematic proof of change |

## Kishotenketsu

Four-act structure common in East Asian storytelling. No central conflict required.

| Beat | Act | Description |
|------|-----|-------------|
| Ki (Introduction) | 1 | Establish characters and setting |
| Sho (Development) | 2 | Develop the story, deepen understanding |
| Ten (Twist) | 3 | Unexpected element, shift in perspective |
| Ketsu (Conclusion) | 4 | Reconcile the twist with the established story |

## Five-Act Structure (Shakespeare)

Classical dramatic structure.

| Beat | Act | Description |
|------|-----|-------------|
| Exposition | 1 | Setting, characters, initial conflict |
| Rising Action | 2 | Complications develop, tension builds |
| Climax | 3 | Turning point, peak of tension |
| Falling Action | 4 | Consequences unfold, momentum shifts |
| Denouement | 5 | Resolution and new equilibrium |

## Choosing a Structure

- **Three-Act:** Default choice for most stories. Simple, flexible, well-understood.
- **Hero's Journey:** Fantasy, adventure, coming-of-age. Stories about transformation.
- **Save the Cat:** Tightly paced commercial fiction. Stories that need precise pacing.
- **Kishotenketsu:** Literary fiction, slice-of-life, stories exploring ideas over conflict.
- **Five-Act:** Epic scope, multiple climaxes, complex political drama.

Structures are guides, not rules. Mix and adapt as the story demands.
```

## `worldbuilding/references/artifact-template.md`

```markdown
# Artifact Template

Use this template when creating an artifact file at `worldbuilding/artifacts/{artifact-name-kebab}.md`.

```yaml
---
name: "{Artifact Name}"
type: {object|weapon|document|technology|relic|symbol|resource|other}
status: {active|lost|destroyed|hidden|transferred|unknown}
owner: {character-or-faction-kebab}
location: {location-kebab}
tags:
  - {tag-1}
---
```

## Description

What the artifact looks like and how readers recognize it.

## Function

What it can do, what it cannot do, and what it costs.

## History

Origin, prior owners, and story-relevant events.

## Current State

Current owner, location, condition, and unresolved risks.
```

## `worldbuilding/references/faction-template.md`

```markdown
# Faction Template

Use this template when creating a faction file at `worldbuilding/factions/{faction-name-kebab}.md`.

```yaml
---
name: "{Faction Name}"
type: {family|guild|government|military|religion|company|community|criminal|other}
status: {active|hidden|declining|defeated|disbanded|unknown}
members:
  - {character-kebab}
locations:
  - {location-kebab}
tags:
  - {tag-1}
---
```

## Purpose

What this faction wants and why it exists.

## Power Base

Resources, influence, territory, legitimacy, secrets, rituals, or leverage.

## Members

Important members and their roles.

## Conflicts

Internal divisions and external opposition.
```

## `worldbuilding/references/location-template.md`

```markdown
# Location Template

Use this template when creating a new location file at `worldbuilding/locations/{location-name-kebab}.md`.

```yaml
---
name: "{Location Name}"
type: {city|town|village|fortress|ruins|wilderness|landmark|region|continent|building|other}
region: "{Parent Region}"
population: {number or estimate}
controlled-by: {character-kebab or faction}
notable-characters:
  - {character-kebab}
tags:
  - {tag-1}
  - {tag-2}
status: {thriving|declining|abandoned|contested|hidden}
---
```

## Description

What the location looks, sounds, smells, and feels like. First impressions for someone arriving. Key sensory details that make it distinct.

## History

How the location came to be and key events that happened here. Only include history relevant to the story.

## Culture & Customs

The people who live here, their way of life, traditions, social norms. What makes this place culturally distinct.

## Notable Features

Specific landmarks, buildings, natural features, or points of interest within the location. Things characters would interact with.

## Current State

What the location is like at the time of the story. Political situation, recent events, tensions, opportunities.
```

## `worldbuilding/references/system-template.md`

```markdown
# System Template

Use this template when creating a new system file at `worldbuilding/systems/{system-name-kebab}.md`. Systems represent structured aspects of the world: magic, politics, technology, religion, economy, etc.

```yaml
---
name: "{System Name}"
type: {magic|political|technology|religion|economic|military|social|education|other}
prevalence: {universal|common|uncommon|rare|secret}
---
```

## Overview

What this system is and its role in the world. One paragraph summary.

## Rules & Limitations

How the system works. What it can and cannot do. Costs, constraints, and consequences. Be specific - well-defined limitations make systems compelling.

## History

How the system developed or was discovered. Key historical moments that shaped its current form.

## Practitioners

Who uses or participates in this system. Social status, requirements, training, organizations.

## Impact on Society

How this system shapes daily life, culture, politics, and conflict in the world. Ripple effects.
```

## `worldbuilding/references/world-element-types.md`

```markdown
# World Element Types Reference

When building a world element, use these prompts to ensure thorough coverage for each type.

## Magic System

Key questions to address:
- What is the source of magic? (innate, learned, divine, natural, artifact-based)
- Who can use it? (everyone, select few, specific bloodlines, trained practitioners)
- What does it cost? (energy, health, materials, sanity, lifespan)
- What are the hard limits? (cannot raise dead, cannot create matter, etc.)
- How is it perceived socially? (revered, feared, regulated, mundane)
- What are the categories/schools/disciplines?

## Political System

Key questions to address:
- What is the power structure? (monarchy, democracy, oligarchy, theocracy, tribal)
- How is power transferred? (hereditary, elected, conquered, appointed)
- What factions exist and what do they want?
- What laws matter to the story?
- What is the relationship between regions/nations?
- What tensions or conflicts exist?

## Technology System

Key questions to address:
- What is the general technology level? (stone age, medieval, industrial, modern, futuristic)
- What technologies are unusually advanced or absent?
- How does technology interact with other systems (e.g., magic)?
- Who controls key technologies?
- What are the societal impacts of key technologies?

## Religion System

Key questions to address:
- What deities or spiritual forces exist? (real or believed)
- What are the major religious institutions?
- How does religion interact with political power?
- What rituals, holidays, or practices matter to the story?
- Are there religious conflicts or schisms?

## Economic System

Key questions to address:
- What is the currency and trade system?
- What are the major industries and resources?
- What is the wealth distribution?
- What economic tensions drive conflict?
- How does the economy interact with other systems?

## Military System

Key questions to address:
- How are armed forces organized?
- What weapons, tactics, and strategies are used?
- What is the relationship between military and political power?
- What recent or ongoing conflicts exist?
- How does military service affect social standing?

## Social System

Key questions to address:
- What are the social classes or castes?
- How is social mobility achieved (or prevented)?
- What are the gender roles and family structures?
- What cultural values dominate?
- What social tensions exist?

## Education System

Key questions to address:
- How is knowledge transmitted? (apprenticeship, schools, oral tradition, magical)
- Who has access to education? (everyone, elite, specific guilds/orders)
- What institutions exist? (academies, temples, guilds, military schools)
- How does education intersect with social class?
- What knowledge is forbidden or restricted?
```
