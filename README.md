# taquito

Install Tailwind
Add a design folder to the root of your project
Import the design folder in App.vue @import './design'
create tailwind.config.js
create .postcssrc.js
install @fullhuman/postcss-purgecss

Install in main.js and load the css:
import uikit from "@joancc/test1";
import "@joancc/test1/dist/myComponent.css";
Vue.use(uikit);

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
