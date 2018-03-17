const path = require('path');
const mkTemplate = require('./plugin.makefile');
//配置默认
function makedir(templatePath = path.resolve('./template.html'), option) {
    this.templatePath = templatePath;

    this.option = {};

    this.option.title = option.title || 'swnb';
}

makedir.prototype.apply = function (compiler) {
    compiler.plugin('emit', (compilation, callback) => {
        let arr = [];
        compilation.chunks.forEach(chunk => {
            let css = []
            let js = []
            for (let filename of chunk.files) {
                if (filename.endsWith('.css')) {
                    css.push(filename)
                }
                if (filename.endsWith('.js')) {
                    js.push(filename)
                }
            }
            arr.push(
                mkTemplate(
                    this.templatePath,
                    js,
                    css,
                    compilation,
                    this.option
                )
            );
        });
        Promise.all(arr).then(() => {
            callback();
        });
    });
};
module.exports = makedir;