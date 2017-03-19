var rucksack = require('rucksack-css')
var lost = require("lost")
var cssnext = require("postcss-cssnext")
var Shell = require("child_process")

exports.modifyWebpackConfig = function(config, env) {
    config.merge({
        postcss: [
            lost(),
            rucksack(),
            cssnext({
                browsers: ['>1%', 'last 2 versions']
            })
        ]
    })

    config.loader('svg', {
       test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       loader: 'file-loader',
    })

    return config
};

exports.postBuild = function(pages, callback) {
  // perform actions on pages here
  Shell.execSync("cp -r static/favicon public/")
  callback()
}
