# Hookup - MVP Specification

## Overview

Hookup is a curated directory for discovering open-source cloud hooks. Users can browse hooks displayed in a grid layout, filtered by category. Each hook links back to its GitHub repository.

Cloud hooks are scripts, plugins, or services that execute custom logic in response to cloud platform events — deployments, infrastructure changes, API calls, or CI/CD pipeline stages.

## Hook Data Model

Each hook entry contains:

| Field       | Type   | Description                                      |
| ----------- | ------ | ------------------------------------------------ |
| id          | string | Unique identifier (slug)                         |
| name        | string | Display name of the hook                         |
| description | string | One-line summary of what the hook does            |
| category    | enum   | One of the predefined categories (see below)     |
| repoUrl     | string | GitHub repository URL                            |

### Categories

| Category         | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| Webhooks         | HTTP callback services (e.g., Hook0, Tacklebox)                    |
| Deployment       | Pre/post-deploy hooks (e.g., Acquia Cloud Hooks, Google Cloud Deploy) |
| Infrastructure   | IaC compliance/validation hooks (e.g., AWS CloudFormation Hooks)   |
| CI/CD            | Hooks triggered by build/test/release pipeline events              |
| Lifecycle        | Application lifecycle hooks (e.g., Strapi content-type hooks)      |
| API              | Pre-request/post-response API transformation hooks                 |

## Pages

### Home (`/`)

- **Header** with app name "Hookup" and tagline.
- **Category filter bar** — horizontal row of pill/chip buttons, one per category plus an "All" option. Clicking a category filters the grid. Active category is visually highlighted.
- **Hook grid** — responsive card grid (3 columns on desktop, 2 on tablet, 1 on mobile).

### Hook Card

Each card displays:

- Hook **name** (bold, prominent)
- **Category** badge/chip
- **Description** (1-2 lines, truncated with ellipsis if longer)
- **View Repo** link/button pointing to `repoUrl` (opens in new tab)

No detail page — the card is the full extent of the MVP UI.

## Data Source

For the MVP, hooks are stored in a static JSON file (`data/hooks.json`) committed to the repo. No database, no API, no admin interface.

The JSON file should be seeded with 10-15 real open-source cloud hook projects sourced from GitHub.

## Tech Stack

| Layer     | Choice                        |
| --------- | ----------------------------- |
| Framework | Next.js (App Router)          |
| Language  | TypeScript                    |
| Styling   | Tailwind CSS                  |
| Data      | Static JSON file              |
| Hosting   | Vercel (or any static host)   |

## Functional Requirements

1. On page load, all hooks render in the grid.
2. Clicking a category filter shows only hooks matching that category.
3. Clicking "All" resets the filter and shows every hook.
4. Each card's repo link opens the GitHub repository in a new tab.
5. The layout is responsive across desktop, tablet, and mobile breakpoints.

## Non-Goals (out of scope for MVP)

- User accounts / authentication
- Hook submission or editing
- Search (text-based)
- Pagination or infinite scroll
- Backend API or database
- Server-side data fetching from GitHub API
- Rating, starring, or commenting on hooks

## Seed Data Examples

```json
[
  {
    "id": "hook0",
    "name": "Hook0",
    "description": "Open-source webhooks-as-a-service with delivery guarantees, retries, and security built in.",
    "category": "Webhooks",
    "repoUrl": "https://github.com/hook0/hook0"
  },
  {
    "id": "tacklebox",
    "name": "Tacklebox",
    "description": "Serverless webhooks-as-a-service framework with CLI deployment and management dashboard.",
    "category": "Webhooks",
    "repoUrl": "https://github.com/tacklebox-webhooks"
  },
  {
    "id": "acquia-cloud-hooks",
    "name": "Acquia Cloud Hooks",
    "description": "Repository scripts that Acquia Cloud executes on deploy, code update, and database copy events.",
    "category": "Deployment",
    "repoUrl": "https://github.com/acquia/cloud-hooks"
  },
  {
    "id": "cfn-hooks",
    "name": "CloudFormation Hooks",
    "description": "Proactively inspect and validate AWS resource configurations before provisioning.",
    "category": "Infrastructure",
    "repoUrl": "https://github.com/aws-cloudformation/aws-cloudformation-samples"
  },
  {
    "id": "serverless-github-webhook",
    "name": "Serverless GitHub Webhook Listener",
    "description": "AWS Lambda function that listens to GitHub webhook events via API Gateway.",
    "category": "CI/CD",
    "repoUrl": "https://github.com/serverless/examples/tree/master/aws-node-github-webhook-listener"
  }
]
```

The full seed file should contain 10-15 entries spread across all categories.
