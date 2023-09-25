# Nuxt 3 + UI + Charts + Pinia

A scalable, advanced starter template built with Nuxt 3.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### System Requirements

[Nodejs](https://nodejs.org/en)  
[Git](https://git-scm.com/downloads)

### Installation Instructions

```bash
git clone https://github.com/mrhorrocks/nuxt3.git
npm install
npm run dev
```

The development server is running on [http://localhost:3000](http://localhost:3000)  

Native CSS nesting is supported.

```bash
# @/assets/css/global.css 

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

```bash
<style lang="scss" scoped>
    p {
        background: green;
        span {
            color: white;
        }
    }
</style>
```

### Production

Build the application for production and static hosting:

```bash
# npm
npm run generate
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
