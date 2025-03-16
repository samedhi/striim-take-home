This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install the needed packages with:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Developer Notes

Simple 1 page app that renders a flexible form.

Prints the to be serialized form object to console.log.

I removed the "None of them" and "Never" as I feel those confuse more than help (positive selection system).

I added "Other(s)" to the languages as I think that is likely.

I originally wrote the multiSelect as a select, but I think it is not actually very good as it
1. Does not work on mobile very well
2. Does not work with keyboards only
3. Is less than clear even with mouse (how many people know you can press control)
4. Evidently is a real gray zone for accessibility

So instead I rewrote it with checkboxes (1 per line), which I feel is better.

Thank you for your consideration,
Stephen



