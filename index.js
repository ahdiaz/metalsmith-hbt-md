/**
 * metasmith-hbt-md
 * Process Handlebars in Markdown files
 *
 * @author Antonio Hernandez <ahdiaz@gmail.com>
 * @license MIT
 */

var match = require('multimatch'),
    debug = require('debug')('metalsmith-hbt-md');

/**
 * Process Handlebars in Markdown files
 */
var plugin = function (handlebars, options) {

    options = options || {
        pattern: '**/*.md'
    };

    return function (files, metalsmith, done) {

        setImmediate(done);
        var meta = metalsmith.metadata();

        Object.keys(files).forEach(function (key) {

            if (match(key, options.pattern).length === 0) {
                return;
            }

            debug('Processing ' + key);

            var file = files[key];
            var source = file.contents.toString();
            var template = handlebars.compile(source, options);
            var data = Object.assign({}, meta, file);

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
