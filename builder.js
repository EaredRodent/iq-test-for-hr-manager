import generateTest from './src/ssr/test-generator.js';
import fs from 'fs';

fs.readFile('./src/index.html', 'utf8', (err, rawHtml) => {
    const completedHtml = rawHtml.replace('{{SSR_CONTENT_TEST}}', generateTest())
    fs.writeFile('./public/index.html', completedHtml, (err) => {
        console.log(err ? err : 'index.html generated')
        fs.copyFile('./src/index.js', './public/index.js', (err) => {
            console.log('index.js generated')
        })
        fs.copyFile('./src/index.css', './public/index.css', (err) => {
            console.log('index.css generated')
        })
        fs.copyFile('./src/success.jpg', './public/success.jpg', (err) => {
            console.log('success.jpg generated')
        })
        fs.copyFile('./src/favicon.ico', './public/favicon.ico', (err) => {
            console.log('favicon.ico generated')
        })
    });
});
