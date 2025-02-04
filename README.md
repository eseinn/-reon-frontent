This is a web small app that utilizes the v2 of the PokéApi (https://pokeapi.co/)

Project Name: Pokemon Web App

Description:

- At the pokemon page (/pokemon) you can see a list of the first 20 pokemons and click on each one for details.
- On the detailed pokemon page (/pokemon/:name) you can see details about each pokemon and add it to your favorites.
- The favorite page (/favorites) displays a list of your favorite pokemons.

Tech Stack:

The tech stack for this project is based on the latest version of NextJs (currently 15.1.6) and utlizes the App Router set up.
Additional libraries include

- Tailwind CSS for styling
- React-query for data fetching (although it wasn´t actually used).
- classnames for manipulating tailwind styles

Setup:

Clone the repository to your local machine by running

```bash
git clone https://github.com/eseinn/-reon-frontent.git
```

To install dependencies you can run:

```bash
npm run install
# or
yarn i
# or
pnpm i
```

To run locally on a development server use the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

and then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build the project you can similarly run

```bash
npm run build
# or
yarn build
# or
pnpm build
```
