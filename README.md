# Knowledge Hub Challenge

You will build a small Knowledge Hub experience: an internal tool for finding, viewing, favoriting, and creating company knowledge documents.

The project is already configured with Next.js, React, TypeScript, Tailwind, HeroUI, and a local mocked API powered by JSON Server. The focus of this challenge is to implement the main product experience with solid frontend decisions.

## The Challenge

Implement the main Knowledge Hub page.

The user should be able to:

- See a list of documents.
- Search documents by text.
- Filter documents by category, type, and status.
- Keep search and filters in the URL when it makes sense.
- View document details.
- Favorite and unfavorite documents.
- Create a new document using a form.
- Clearly understand when the application is loading, has no results, or has an error.

You do not need to implement authentication, permissions, file uploads, a rich text editor, comments, version history, or a real backend.

## What We Will Evaluate

We want to understand how you work in a modern React/Next application.

We will mainly look at:

- Use of TypeScript to model data and avoid ambiguous states.
- Separation between Server Components and Client Components.
- Data fetching and data update strategy.
- Organization of components, functions, and responsibilities.
- Handling of loading, error, and empty states.
- Forms with validation and a good user experience.
- Basic accessibility in fields, buttons, navigation, and visual states.
- UI clarity and attention to detail.
- Simplicity: solve the problem well without adding unnecessary complexity.
- At least two automated tests.

You may use the tools already available in the project. If you add any library, briefly explain why.

## Local API

The local API uses JSON Server and runs at:

```txt
http://127.0.0.1:4000
```

The data lives in:

```txt
server/db.json
server/db.seed.json
```

Use these files to understand the available resources, fields, and relationships.

Check the JSON Server documentation to understand how to query, filter, create, and update records:

https://github.com/typicode/json-server

To reset the API data:

```bash
bun run api:reset
```

## Getting Started

Install dependencies:

```bash
bun install
```

Start the application and the local API:

```bash
bun run dev
```

The web application runs at:

```txt
http://localhost:3001
```

## Available Scripts

- `bun run dev`: starts the web application and the local API.
- `bun run api`: starts only the local API.
- `bun run api:reset`: resets the API data.
- `bun run build`: creates a production build.
- `bun run check-types`: validates TypeScript.
- `bun run check`: runs lint and format checks.

## Submission

Create a private fork of this repository, implement the solution in your fork, open a Pull Request inside your own fork, and invite our team to access and review your submission.

In the Pull Request, include:

- A brief summary of what was implemented.
- The main technical decisions you made.
- How to run and validate the solution, if there is anything beyond the standard commands.
- Which libraries were added and why, if applicable.
