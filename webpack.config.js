var Encore = require('@symfony/webpack-encore');
// See: https://symfony.com/doc/current/frontend.html
// https://symfony.com/doc/current/frontend/encore/faq.html

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')
    .autoProvidejQuery()

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('app', './assets/js/app.js')
    // https://symfony.com/doc/current/frontend/encore/shared-entry.html
    // .createSharedEntry('app', 'assets/js/app.js')
    //.addEntry('homepage', './assets/js/homepage.js')
    //.addEntry('blog', './assets/js/blog.js')
    //.addEntry('store', './assets/js/store.js')
    //.addEntry('page2', './assets/js/page2.js')
    // .addStyleEntry('some_page', './assets/css/some_page.css')

    // Using a CDN? - https://symfony.com/doc/current/frontend/encore/cdn.html

    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use Sass/SCSS files
    //.enableSassLoader()

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
