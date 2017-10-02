const fs = require('fs');
const path = require('path');
let dealtemplate = (template_path, filename, compilation) =>
    new Promise((resolve, reject) => {
        fs.readFile(template_path, (err, buffer) => {
            if (err) reject(err);
            let string = buffer.toString();
            string = string.replace(/{{url}}/, filename);
            compilation.assets[`${filename.replace(/\.js/, '.html')}`] = {
                source: () => string,
                size: () => string.length
            };
            resolve('success makefile');
        });
    });
module.exports = dealtemplate;
