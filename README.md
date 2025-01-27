
This directory holds the codebase for a generic website template

Examples for websites using this:

- [security.ethereum.org](https://security.ethereum.org).

## How to build from this template

To create a new webiste from this template:

1. Fork this repo to where your website code should live
2. Edit the `siteUrl` in `next-sitemap.js`
3. Edit the `EMAIL` in `src/constants.ts`
4. Make any other changes to the websites content
5. Run the steps from **Verify with docker** below to make sure the build will go through 
5. Create a ticket for a new website in [ethereum/devops](https://github.com/ethereum/devops/issues)

EF DevOps will then wire up your site to the internet.
After thats complete, follow **Deployment** below on how to get changes to your Site pushed to the internet.


## Stack

The main stack used in the project includes:

- [Next.js](https://nextjs.org/).
- [TypeScript](https://www.typescriptlang.org/).
- [ChakraUI](https://chakra-ui.com/) as component library.
- [KaTeX](https://katex.org/) to render LaTeX math syntax.

## Local development

The project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), with a custom scaffolding.

### Getting Started

First, install dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### Verify with docker

to verify how your website will look and feel to the public you can use docker.

1. Run `docker build -t webiste .` to build the container image
2. Run `docker run --rm -p 3000:3000 website` to launch the container
3. Naviggate your browser to http://localhost:3000 and check the website.

## Deployment

To deploy new changes to your website:

1. Commit all changes to `main`
2. Tag main with a new version (semantic versioning is highly recommended)
3. Push the tag to GitHub

GitHub Actions will the build the container and trigger a deployemnt onto the EF DevOps container platform.

## Project Structure

The following list describes the main elements of the project structure:

- `public`: contains static assets like fonts and images.
- `src`: contains the source code.
  - `components`: React components.
    - components with state are directly located inside `/components`.
    - `layout`: components used to contain and apply different layouts to different pages.
    - `UI`: stateless (functional) components.
  - `pages`: includes components that renders to pages and [NextJS API Routes](https://nextjs.org/docs/api-routes/introduction).
  - `posts`: markdown blog posts.
  - `styles`: css stylesheets.
    - `global.css`: global stylesheet.
  - `theme`: contains the [Chakra UI custom theme](https://chakra-ui.com/docs/styled-system/theming/customize-theme), organized in `foundations` and `components` for better scaling.
  - `utils`: utilitary stuff.
  - `constants.ts`: this is the _global_ constants file, containg URLs and lists of elements we use across the site.
  - `types.ts`: contains the custom defined TypeScript types and interfaces.
