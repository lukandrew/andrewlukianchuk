Generator-React-Webpack will help you build new React projects using modern technologies.

Out of the box it comes with support for:

Webpack
ES2015 via Babel-Loader
Different supported style languages (sass, scss, less, stylus)
Style transformations via PostCSS
Automatic code linting via esLint
Ability to unit test components via Karma and Mocha/Chai
Changes since version 2.0

This generator is written in ES2015. This means it is not compatible with node.js versions before 4.0.

It also does NOT include support for Flux-Frameworks anymore. Instead, we will use it as a base for other generators to build upon. This will make the base generator easier to use and update.

If you are interested, feel free to write your own generator and use generator-react-webpack as a base (via composition).

If you have built a generator using generator-react-webpack, tell us and we will add a link to our README.

Generators that extend generator-react-webpack

Generator-React-Webpack-Alt (Adds ability to create actions, stores and sources for alt.js)
Generator-React-Webpack-Redux (Adds ability to create actions and reducers for Redux)
Installation

# Make sure both is installed globally
npm install -g yo
npm install -g generator-react-webpack
Setting up projects

# Create a new directory, and `cd` into it:
mkdir my-new-project && cd my-new-project

# Run the generator
yo react-webpack
Please make sure to edit your newly generated package.json file to set description, author information and the like.

Generating new components

# After setup of course :)
# cd my-new-project
yo react-webpack:component my/namespaced/components/name
The above command will create a new component, as well as its stylesheet and a basic testcase.

Generating new stateless functional components

yo react-webpack:component my/namespaced/components/name --stateless
Stateless functional components where introduced in React v0.14. They have a much shorter syntax than regular ones and no state or lifecycle methods at all. Please read the React 0.14 release notes to get more information about those components.

Note: You will still be able to set properties for stateless components!

Adding PostCSS plugins

If you have enabled PostCSS at generation time, install your PostCSS plugins via npm and require it in postcss function in cfg/base.js.

Example for autoprefixer:

cd my-new-project
npm install autoprefixer
Require in cfg/base.js

...
postcss: function () {
  return [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie >= 8']
    })
  ];
}
...
Usage

The following commands are available in your project:

# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Auto-run unit tests on file changes
npm run test:watch

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
Naming Components

We have opted to follow @floydophone convention of uppercase for component file naming e.g. Component.js. I am open to suggestions if there is a general objection to this decision.

Modules

Each component is a module and can be required using the Webpack module system. Webpack uses Loaders which means you can also require CSS and a host of other file types. Read the Webpack documentation to find out more.

Props

Thanks to Edd Hannay for his Webpack optimisations, my local merge and testing meant his additions lost his signature (my fault, sorry). So, big thanks Edd.

Contribute

Contributions are welcomed. When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

Running Tests

npm test or node node_modules/.bin/mocha

License