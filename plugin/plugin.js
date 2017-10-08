const path = require('path');
const mkTemplate = require('./plugin.makefile');
//配置默认
function makedir(option, templatePath = path.resolve('./template.html')) {
    this.templatePath = templatePath;

    this.option = {};

    this.option.title = option.title || 'swnb';
}

makedir.prototype.apply = function(compiler) {
    compiler.plugin('emit', (compilation, callback) => {
        let arr = [];
        compilation.chunks.forEach(chunk => {
            for (let filename of chunk.files) {
                arr.push(
                    mkTemplate(
                        this.templatePath,
                        filename,
                        compilation,
                        this.option
                    )
                );
            }
        });
        Promise.all(arr).then(() => {
            callback();
        });
    });
};
module.exports = makedir;
