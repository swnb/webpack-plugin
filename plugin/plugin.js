const path = require('path');
const mkTemplate = require('./plugin.makefile');
function makedir(templatePath = path.resolve('./template.html')) {
    this.templatePath = templatePath;
}

makedir.prototype.apply = function(compiler) {
    compiler.plugin('emit', (compilation, callback) => {
        let arr = [];
        compilation.chunks.forEach(chunk => {
            for (let filename of chunk.files) {
                arr.push(mkTemplate(this.templatePath, filename, compilation));
            }
        });
        Promise.all(arr).then(() => {
            callback();
        });
    });
};
module.exports = makedir;
