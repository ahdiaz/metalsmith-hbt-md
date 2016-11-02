# metalsmith-hbt-md

Process Handlebars in Markdown files.

## Installation

```
npm install metalsmith-hbt-md
```

## Usage

You should pass the Handlebars instance you are working with to this plugin. Additionally you can also pass a pattern to filter the files to process:

```js
var handlebars = require('handlebars');
var hbtmd = require('metalsmith-hbt-md');

new Metalsmith(__dirname)
    .use(hbtmd(handlebars, {
        pattern: '**/*.md'
    }))
    .build();
```

### **`handlebars`** `Object`

    A Handlebars instance.

### **`options`** `Object`

- **`pattern`** `String`

    A pattern to filter the files to process

## License

MIT License, see [LICENSE](https://github.com/ahdiaz/metalsmith-hbt-md/blob/master/LICENSE.md) for details.
