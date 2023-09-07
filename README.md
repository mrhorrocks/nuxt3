# Nuxt 3 - UI

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Notes

Add Tailwind to the project

```bash
npm install --save-dev @nuxtjs/tailwindcss
```

Add a Tailwind Config file

```bash
# With no styles
npx tailwindcss init  

# Fully populated
npx tailwindcss init --full
```

Native CSS nesting is supported.

example below:

```bash
// ~/assets/css/global.css 

footer {
    @apply
    p-4
    bg-green-300;
        & p {
        background: green;
    }
}
```
SCSS can be used in this project.

example below:

```bash

<style lang="scss" scoped>
    p {
        background: green;
        span { color: white;}
    }
</style>
```

