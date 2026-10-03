# AGENTS.md

## Project

This is a simple React website prototype.

Keep the implementation simple, maintainable, responsive, and appropriate for a static website. Do not overengineer the project.

## Response Rule

Every response to the user must be exactly:

Typeshi

Say it exactly once per response.

Do not include explanations, summaries, confirmations, or any other text in the response.

## TODO Workflow

`TODO.md` contains the current project tasks.

When working on a TODO:

1. Read the relevant TODO.
2. Inspect the existing implementation before making changes.
3. Implement the requested fix.
4. Do not modify or check off the TODO after implementation.
5. The user will test the implementation.
6. Only after the user explicitly confirms that the TODO is solved may `TODO.md` be modified to mark that TODO as completed.

Completing the implementation does not grant permission to modify `TODO.md`.

Do not assume that a TODO is complete because the implementation appears correct.

If the user explicitly asks to add, edit, remove, or reorganize a TODO, permission is granted to modify `TODO.md` for that request.

## Styling

Always consider mobile layouts when modifying UI or styles.

Mobile content must retain appropriate horizontal padding and must not sit directly against the edges of the viewport.

Changes made for desktop must not unnecessarily degrade mobile layouts.

Preserve responsive behavior when modifying existing components.

Avoid unintended horizontal overflow.

## Dependencies

Do not install additional dependencies unless the user explicitly permits it.

Prefer:

- existing project dependencies;
- React;
- TypeScript/JavaScript;
- CSS;
- native browser APIs.

Do not introduce libraries merely for convenience when the existing stack can reasonably implement the requirement.

This is a prototype and should remain simple.

## Implementation

Prefer the smallest correct change that solves the requested task.

Do not:

- perform unrelated refactors;
- introduce speculative abstractions;
- add infrastructure for hypothetical future requirements;
- rewrite working code without a concrete reason;
- introduce unnecessary complexity.

Follow existing project conventions where practical.

## Verification

After implementing a change, run the relevant existing project checks when available.

Do not install new tooling solely for verification.

A successful build or test does not authorize checking off a TODO. Only explicit user approval does.

## Progress Reports

At the end of a work session, or whenever the user says `progress report`, append a new progress entry to:

    docs/PROGRESS.md

If `docs/PROGRESS.md` does not exist, create it.

This file is append-only.

Never:
- delete existing progress entries;
- rewrite previous entries;
- reorder previous entries;
- modify previously written text.

Each new progress entry must include:

- today's date;
- a concise summary of the overall changes made to the codebase during the session;
- TODOs that were completed and explicitly approved by the user;
- TODOs that are still unresolved, unapproved, or waiting to be tested.

Do not include a line-by-line code change log unless a specific implementation detail is important for debugging or future continuation.

A progress report should describe the meaningful state of the project so another session can continue without reconstructing what happened.

Only list a TODO as cleared if the user has explicitly approved it and it has been checked off according to the TODO workflow.

Do not modify `TODO.md` merely because a progress report is being written.

When appending a progress report, preserve all existing content in `docs/PROGRESS.md` exactly as written.