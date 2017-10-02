const fs = require('fs');
const path = require('path');
let dealtemplate = (template_path, filename, compilatio, option) =>
    new Promise((resolve, reject) => {
        fs.readFile(template_path, (err, buffer) => {
            if (err) reject(err);
            let string = buffer.toString();
            //更改配置
            string = string.replace(/{{url}}/, filename);
            string = string.replace(/{{title}}/, option.title);
            compilation.assets[`${filename.replace(/\.js/, '.html')}`] = {
                source: () => string,
                size: () => string.length
            };
            resolve('success makefile');
        });
    });
module.exports = dealtemplate;
