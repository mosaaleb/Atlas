// const purgecss = require('@fullhuman/postcss-purgecss');
const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    isProduction && require('@fullhuman/postcss-purgecss')({
      content: ['./src/js/**/*.js', './src/index.html'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}