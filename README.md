## The Powerpuff Girls

- A web application with two routes

    - A TV show "Powerpuff Girls" introduction page

        - An introduction component above
        - An episodes list component below, categorised by season
    - An episode introduction page

- Technology used:

    - Next.js
    - TypeScript
    - CSS: Tailwind CSS / daisyUI

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You need:
```
"engines": {
  "node": ">=18.17.0"
}
```

After clone the project, run:

```
npm install
```

Then, run the development server:

```bash
npm run dev
```

You'll see this:

![alt text](/public/image.png)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

- **/README.md:** *Project's Instruction*
- **/app/lib:** *Contains fetch data functions and type definition used in the application*
- **/app/episodes/[id]:** *Specific episode introduction page*
- **/app/shows/[id]:** *Specific show introduction page*
- **/app/ui:** *Contains all the UI components for the application*

## Credits

Thanks so much for the documentation of Next.js and TailwindCSS/daisyUI.

- Next.js: https://nextjs.org/
- Tailwind: https://tailwindcss.com/
- daisyUI: https://daisyui.com/
- <a target="_blank" href="https://icons8.com/icon/eS3gmr9rE68k/blossom-powerpuff-girls">Blossom Powerpuff Girls</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
