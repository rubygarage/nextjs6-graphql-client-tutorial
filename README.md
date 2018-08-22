# Nextjs6 with Apollo Graphql and Material-UI Tutorial

## Install Yarn

The first method would be to use npm

```bash
npm install -g yarn
```

The other method would be to go to the official download page https://yarnpkg.com/en/docs/install and get the installer for your operating system and run it.

## Initialize project

To start, create a sample project by running the following commands:

```bash
mkdir github-client
cd github-client
yarn init
yarn add react react-dom prop-types next
mkdir pages
```

Then open the "package.json" in the github-client directory and add the following script.

```
{
  "scripts": {
    "dev": "next"
  }
}
```

Now everything is ready. Run the following command to start the dev server:

```bash
yarn dev
```

When you run `localhost:3000` you're gonna see this page:

![404](1.png "404 Page screenshot")

## Babel

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in old browsers or environments.

```bash
yarn add babel-core -D
```

## Linters

Let's integrate linters to our app to avoid big refactoring in the future.

Add eslint as development dependency

```bash
yarn add eslint -D
```

babel-eslint allows you to lint ALL valid Babel code

```bash
yarn add babel-eslint -D
```

We're gonna use airbnb eslint config. There are few dependencies that are needed to be installed.

This package provides Airbnb's .eslintrc as an extensible shared config

```bash
yarn add eslint-config-airbnb -D
```

ESLint plugin with rules that help validate proper imports

```bash
yarn add eslint-plugin-import -D
```

Static AST checker for accessibility rules on JSX elements.

```bash
yarn add eslint-plugin-jsx-a11y -D
```

React specific linting rules for ESLint

```bash
yarn add eslint-plugin-react -D
```

Initialize eslint config

```bash
yarn run eslint --init
```

How would you like to configure ESLint? `Use a popular style guide`

Which style guide do you want to follow? `Airbnb`

Do you use React? `Yes`

What format do you want your config file to be in? `JSON`

Would you like to install them now with npm? `No`

Now we have `.eslintrc.json` with the following configuration

```js
{
  "extends": "airbnb"
}
```

We're gonna use `.js` extensions instead of `.jsx`. So we explicitly add this option to the `.eslintc.json`:

```js
{
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
  },
  "extends": "airbnb"
}
```

## Material

We're gonna use material-ui library for styling. It's React components that implement Google's Material Design.

First of all we need to install some additional libraries:

```
yarn add jss
```

JSS is a more powerful abstraction over CSS. It uses JavaScript as a language to describe styles in a declarative and maintainable way. It is a high performance JS to CSS compiler which works at runtime and server-side.

```
yarn add react-jss
```

React-JSS provides components for JSS as a layer of abstraction.

Benefits compared to lower level core:

- Theming support.
- Critical CSS extraction.
- Lazy evaluation - sheet is created only when the component will mount.
- Auto attach/detach - sheet will be rendered to the DOM when the component is about to mount, and will be removed when no element needs it.
- A Style Sheet gets shared between all elements.
- Function values and rules are updated automatically with props.

```
yarn add styled-jsx
```

Full, scoped and component-friendly CSS support for JSX (rendered on the server or the client).

```
yarn add @material-ui/core @material-ui/icons
```

There is an example app that shows how to properly integrate material-ui specifically for nextjs framework. https://github.com/mui-org/material-ui/tree/master/examples/nextjs

Create `lib/getPageContext.js`

```js
/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme();

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
```

Next.js uses the App component to initialize pages. You can override it and control the page initialization. Which allows you to do amazing things like:

Persisting layout between page changes
Keeping state when navigating pages
Custom error handling using componentDidCatch
Inject additional data into pages (for example by processing GraphQL queries)

To override, create the `./pages/_app.js` file and override the App class as shown below:

```js
import React from 'react';
import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../lib/getPageContext';

class MainApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  pageContext = null;

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default MainApp;
```

Pages in Next.js skip the definition of the surrounding document's markup. For example, you never include `<html>`, `<body>`, etc. To override that default behavior, you must create a file at `./pages/_document.js`, where you can extend the Document class.

We're gonna use codebase from the material-ui official repo example with nextjs:

```js
import React from 'react';
import PropTypes from 'prop-types';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MainDocument extends Document {
  render() {
    const { pageContext } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>Github Client</title>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MainDocument.getInitialProps = (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  let pageContext;

  const page = ctx.renderPage((Component) => {
    const WrappedComponent = (props) => {
      pageContext = props.pageContext;

      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      pageContext: PropTypes.shape({}).isRequired,
    };

    return WrappedComponent;
  });

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        {flush() || null }
      </React.Fragment>
    ),
  };
};

export default MainDocument;
```

Now we're ready to implement some pages with components.

## Storybook

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

Startguide for react - https://storybook.js.org/basics/guide-react

First of all, you need to add @storybook/react to your project. To do that, simply run:

```bash
yarn add @storybook/react -D
```

Then add the following script to your package json in order to start the storybook later in this guide:

```json
{
  "scripts": {
    "storybook": "start-storybook -p 9001 -c .storybook"
  }
}
```

Create the config file

Storybook can be configured in several different ways. That’s why we need a config directory. We’ve added a `-c` option to the above script mentioning `.storybook` as the config directory.

For the basic Storybook configuration file, you don’t need to do much, but simply tell Storybook where to find stories.

To do that, simply create a file at `.storybook/config.js` with the following content:

```js
import { configure } from '@storybook/react';

const req = require.context('../components', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
```

Here we use Webpack’s require.context to load modules dynamically. Have a look at the relevant Webpack docs to learn more about how to use require.context.

All files with `.stories` extension inside the `src/components` will be required dynamically.

Create separate babel config for storybook to avoid conflicts with different environments.

`.babelrc`

```js
{
  "presets": ["env", "stage-0", "react"]
}
```

Adjust eslint config (so we don't see warnings when importing storybook packages):

`.eslintrc.json`

```js
"import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
```

Storybook is all about writing stories. Usually a story contains a single state of one of your components. That’s like a visual test case.

Technically, a story is a function that returns a React element.

We're gonna use atomic design methodology for our app.

Popularly known within the design world, Atomic Design helps to build consistent, solid and reusable design systems. Plus, in the world of React that stimulate the componentization, Atomic Design is used unconsciously; but when used in the right way, it becomes a powerful ally for developers.

Atomic design references:
https://cheesecakelabs.com/br/blog/atomic-design-react/
https://medium.com/@yejodido/atomic-components-managing-dynamic-react-components-using-atomic-design-part-1-5f07451f261f
https://github.com/Rulox/react-atomic-structure
https://github.com/danilowoz/react-atomic-design
http://ubie.io/atomic-design/

Let's create our first atom - material Button.

`components/atoms/Button/index.js`

```js
import React from 'react';
import PropTypes from 'prop-types';
import { Button as MaterialButton } from '@material-ui/core';

const Button = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialButton {...defaultProps}>
      {children}
    </MaterialButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
```

And then story for this atom.

`components/atoms/Button/index.stories.js`

```js
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>
      Default
    </Button>
  ))
  .add('outlined primary', () => (
    <Button variant="outlined" color="primary" onClick={action('clicked')}>
      Outline Primary
    </Button>
  ))
  .add('contained secondary', () => (
    <Button variant="contained" color="secondary" onClick={action('clicked')}>
      Contained Secondary
    </Button>
  ))
  .add('circle button', () => (
    <Button variant="fab" color="primary" aria-label="Add" onClick={action('clicked')}>
      CB
    </Button>
  ))
  .add('disabled button', () => (
    <Button variant="contained" color="primary" onClick={action('clicked')} disabled>
      Disabled Button
    </Button>
  ));
```

Run:

```bash
yarn storybook
```

Then we will see this:

![StoryBook](2.png "Storybook screenshot")

## Add jest for testing

Add jest as development dependency

```bash
yarn add jest -D
```

Jest is a complete and ready to set-up JavaScript testing solution. Works out of the box for any React project.

Add enzyme

```bash
yarn add enzyme enzyme-adapter-react-16 -D
```

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

We need need different babel presets for test environment specifically for nextjs app.

`.babelrc`

```js
{
  "env": {
    "development": {
      "presets": ["next/babel"]
    },
    "production": {
      "presets": ["next/babel"]
    },
    "test": {
      "presets": ["react", "env"]
    }
  }
}
```

Enzyme expects an adapter to be configured

`lib/testConfig.js`

```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export default configure({ adapter: new Adapter() });
```

Connect test config:

`package.json`

```js
"jest": {
  "setupTestFrameworkScriptFile": "./lib/testConfig.js"
}
```

Add to eslintrc.json. This will add all the jest related things to your environment, eliminating the linter errors/warnings:

```js
"env": {
  "jest": true
},
```

Add script for testing:

```js
{
  "scripts": {
    "test": "jest"
  }
}
```

Add simple test for out Button component:

```js
import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('Button', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper.contains('Test')).toBe(true);
  });
});
```

Now if we run `yarn test` we should 1 passed spec.

Ok, let's add more simple components (atoms) which we will use for our home page:

`components/atoms/AppBar/index.js`

```js
import React from 'react';
import PropTypes from 'prop-types';
import { AppBar as MaterialAppBar } from '@material-ui/core';

const AppBar = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialAppBar {...defaultProps}>
      {children}
    </MaterialAppBar>
  );
};

AppBar.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default AppBar;
```

`components/atoms/AppBar/index.stories.js`

```js
import React from 'react';
import { storiesOf } from '@storybook/react';
import AppBar from '.';

storiesOf('AppBar', module)
  .add('default', () => (
    <AppBar>
      <div>Example of AppBar</div>
    </AppBar>
  ))
  .add('secondary', () => (
    <AppBar color="secondary">
      <div>Secondary color</div>
    </AppBar>
  ));
```

`components/atoms/AppBar/index.test.js`

```js
import React from 'react';
import { shallow } from 'enzyme';
import AppBar from '.';

describe('AppBar', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<AppBar><div>test</div></AppBar>);
    expect(wrapper.contains(<div>test</div>)).toBe(true);
  });
});
```

We're gonna create few more atoms using same approach.

This is possible because all components are dynamically exported on src-example/components/index.js and imported in a way that Atomic Design structure doesn't matter:

In the `components` directory we will create `index.js` dynamically export all atoms moleculus organisms etc.

`components/index.js`

```js
const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/);

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  module.exports[componentName] = req(key).default;
});
```

Add fetch

```
yarn add isomorphic-unfetch
```

Add cookies manager lib

```
yarn add js-cookie
```


## TODO





For snapshot testing:

```bash
yarn add react-test-renderer -D
```

Add script into `package.json` to run tests:

```js
"scripts": {
  "dev": "next",
  "test": "NODE_ENV=test jest"
}
```


Specify Jest Jest global variables in `.eslintrc.json`:

```js
{
  "env": {
    "jest": true
  },
  "extends": "airbnb"
}
```

`.babelrc`:

```js
{
  "env": {
    "development": {
      "presets": ["next/babel"]
    },
    "production": {
      "presets": ["next/babel"]
    },
    "test": {
      "presets": [["next/babel", { "preset-env": { "modules": "commonjs" } }]]
    }
  }
}
```

## Material-UI

Add material-ui for styled components to nextjs app

```bash
yarn add @material-ui/core
```

## Authentication

To communicate with github graphql api we need to create a github application first. Follow these steps to create your github app https://developer.github.com/apps/building-github-apps/creating-a-github-app/

For development environment Homepage URL - http://localhost:3000, Authorization callback URL - http://localhost:3000/auth/github/callback

Store client ID and client secret in `env-config.js`. Add this file to `.gitignore`

```js
module.exports = {
  serverRuntimeConfig: { // Will only be available on the server side
    githubClientId: 'secret',
    githubClientSecret: 'secret',
  },
};
```

Add `isomorphic-unfetch` for async calls

```bash
yarn add isomorphic-unfetch
```

Cookie package for storing access_token

```bash
yarn add js-cookie
```
