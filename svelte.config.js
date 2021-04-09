const sveltePreprocess = require('svelte-preprocess');
const preprocessOptions = {
        sourcMap: true,
        defaults: {
            style: 'scss'
        },
        scss: {
            prependData: `@import 'src/scss/main.scss';`
        },
        postcss: {
            plugins: [require('autoprefixer')()]
        }
};
module.exports = {
    preprocess: sveltePreprocess(preprocessOptions),

    preprocessOptions,
}