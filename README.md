## A coding assessment
I wrote this over the course of a weekend as a coding exercise. All feedback is welcome.

It's a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

Visit: [pickle-stock-levels.vercel.app](https://pickle-stock-levels.vercel.app/)

### Interesting points include:

- Genuine TDD - 99% of iterations were test driven
- Micro commits - try reading it commit by commit from start to finish
- Homemade SVGs - I wrote my own graph renderer and kept the markup pretty clean

## Getting Started

### Install dependencies and run dev server

```bash
npm i
npm run dev

# or
yarn
yarn dev

# or
pnpm i
pnpm dev
```

### Explore the app

Open [http://localhost:3000](http://localhost:3000) with your browser and you'll be redirected to the pickle eample

#### Example routes:

- Pickle example [/stock-level/pickle](http://localhost:3000/stock-level/pickle)
- Non-pickle example [/stock-level/cheese](http://localhost:3000/stock-level/cheese)
- Simple example [/stock-level/example](http://localhost:3000/stock-level/example)
- API example [/api/v1/stock/pickle](http://localhost:3000/api/v1/stock/pickle)

## Issues

### Future considerations

- Add simple e2e tests for happy path and 404
- Prefer returning simple date strings from API and formatting dates in UI
- Add visual regression test to main page (i.e. using [backstopJS](https://github.com/garris/BackstopJS))
- Show item select on homepage and 404 pages
- Return `allItems` from a separate API call e.g. `/api/v1/stock `
  and remove `allItems` from `/api/v1/stock/[item]`
- Consider breaking down `useChartVariables` into multiple hooks
- Consider better coupling between `allItems` and `expectedItems` to avoid mismatches
- Consider test coverage gaps (or just add tests if any bugs appear)
