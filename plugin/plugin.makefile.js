const fs = require('fs');
const path = require('path');
let dealtemplate = (template_path, js, css, compilation, option) =>
    new Promise((resolve, reject) => {
        fs.readFile(template_path, (err, buffer) => {
            if (err) reject(err);
            let string = buffer.toString();
            //更改配置
            css.forEach((element, index) => {
                if (index + 1 === js.length) {
                    let str = '<link rel="stylesheet" href="{{css}}"/>'.replace(/{{css}}/, element)
                    string = string.replace(/{{css}}/, str);
                } else {
                    let str = '<link rel="stylesheet" href="{{css}}"/>'.replace(/{{css}}/, element) + '{{css}}'
                    string = string.replace(/{{css}}/, str);
                }
            });
            js.forEach((element, index) => {
                if (index + 1 === js.length) {
                    str = '<script src={{js}}></script>'.replace(/{{js}}/, element)
                    string = string.replace(/{{js}}/, str);
                } else {
                    let str = '<script src={{js}}></script>'.replace(/{{js}}/, element) + '{{js}}'
                    string = string.replace(/{{js}}/, str);
                }
            });
            string = string.replace(/{{title}}/, option.title);
            compilation.assets['index.html'] = {
                source: () => string,
                size: () => string.length
            };
            resolve('success makefile');
        });
    });
module.exports = dealtemplate;