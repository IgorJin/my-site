# Digital Card: project rules

- Read this file and `README.md` before changing code.
- Keep the project small enough for a live interview walkthrough.
- Use strict TypeScript; do not use `any` without an explanation.
- Backend changes follow: Prisma schema -> migration -> service -> GraphQL resolver -> tests.
- Frontend consumes the GraphQL API; do not duplicate domain rules in React.
- Never commit secrets. Update `.env.example` when adding configuration.
- Before finishing a task, run the relevant typecheck, tests, and build.
- Summarize changed files, assumptions, and commands used to verify the result.
