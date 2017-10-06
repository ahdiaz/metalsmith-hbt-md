/**
 * metasmith-hbt-md
 * Process Handlebars in Markdown files
 *
 * @author Antonio Hernandez <ahdiaz@gmail.com>
 * @license MIT
 */

const match = require('multimatch'),
    debug = require('debug')('metalsmith-hbt-md');

/**
 * Process Handlebars in Markdown files
 */
const plugin = function (handlebars, options) {

    options = options || {
        pattern: '**/*.md'
    };

    return function (files, metalsmith, done) {

        setImmediate(done);
        const meta = metalsmith.metadata();

        Object.keys(files).forEach(function (key) {

            if (match(key, options.pattern).length === 0) {
                return;
            }

            debug('Processing ' + key);

            const file = files[key];
            const source = file.contents.toString();
            const template = handlebars.compile(source, options);
            const data = Object.assign({}, meta, file);

            try {
                file.contents = new Buffer(template(data));
                debug('Processed ' + key);
            } catch (e) {
                console.log(e.message);
            }
        });
    };
};

module.exports = plugin;
