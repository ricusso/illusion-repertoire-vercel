# ILLUSION — Repertoire Engine

Public static portfolio build for Vercel. This repository deliberately contains no source secrets, backend, database, environment files, dependency folders, or private keys.

## Vercel import settings

When importing this repository in Vercel:

- Framework Preset: **Other**
- Build Command: leave empty
- Output Directory: `.`
- Install Command: leave empty

The repository root is the deployable static site. Do not deploy the original Desktop source folder.

## Public UX included

- Cinema programme and film details
- Session choice, seat selection, and booking flow
- Ticket/booking state handled entirely in the browser
- Responsive navigation and public informational pages

## Deliberately excluded

- Server and worker code
- Environment variables and credentials
- Databases and vendor/dependency directories
- Any payment, authentication, or external data integration
